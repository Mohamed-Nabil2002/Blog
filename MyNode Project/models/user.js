const mongoose = require("mongoose");
const bcript = require("bcrypt")
const validator = require("validator")

const userSchema = new mongoose.Schema({
        username: {
            type: String,
            required: true,
            unique: true
        },
        firstName: {
            type: String,
            default: null
        },
        lastName: {
            type: String,
            default: null
        },
        email: {
            type: String,
            required: true,
            // validate(value) {
            //     if (!validator.isEmail(value)) {
            //         throw new Error("Email Not Valid")
            //     }
            // }
        },
        password: {
            type: String,
            required: true
        },
        profilePicture: {
            type: String,
            default: ""
        },
    }, {
        timestamps: true,
        toJSON: {
            transform: (doc, ret, opts) => {
                delete ret.password;
                delete ret.__v;
                return ret;
            },
        },
    }

)

// userSchema.methods.generateAuthToken = async () => {
//     const token = jwt.sign({email: this.email.toString()}, 'test')
//     return token;
// }

// userSchema.statics.findByCredentials = async (email, password) => {
//     const user = await User.findOne({email});
//     if (!user) {
//         throw new Error("Enable To Login");
//     }
//     const isMatch = await bcript.compare(password, user.password)
//     console.log(isMatch);
//     if (!isMatch) {
//         throw new Error("Enable To Login");
//     }
//     return user;
// }

userSchema.pre("save", async function () {
    const hash = await bcript.hash(this.password, 10)
    this.password = hash;
    return this;
})

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};


const User = mongoose.model("User", userSchema)

module.exports = User;