const mongoose = require("mongoose");
const bcript = require("bcrypt");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// categorySchema.methods.generateAuthToken = async () => {
//     const token = jwt.sign({
//         email: this.email.toString()
//     }, 'test')
//     return token;
// }

// categorySchema.statics.findByCredentials = async (email, password) => {
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

// categorySchema.pre("save", async function () {
//     const hash = await bcript.hash(this.password, 10)
//     this.password = hash;
//     return this;
// })

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
