const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },

},
{
    timestamps: true
})

module.exports = User = mongoose.model("User", UserSchema)