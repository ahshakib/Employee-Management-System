const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
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