const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    username: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    image: {
        type: String
    },
    
}, {
    timestamps: true
});

// userSchema.methods.generateAuthToken = async () => {
//     const token = jwt.sign({
//         email: this.email.toString()
//     }, 'test')
//     return token;
// }

// userSchema.statics.findByCredentials = async (email, password) => {
//     const user = await User.findOne({
//         email
//     });
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

// userSchema.pre("save", async function () {
//     const hash = await bcript.hash(this.password, 10)
//     this.password = hash;
//     return this;
// })


const Post = mongoose.model("Post", postSchema)

module.exports = Post;