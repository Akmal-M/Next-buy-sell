import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone:  {
        type : String ,
        unique : true,
        required : true,
        dropDups: true
    },

    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    },
    root: {
        type: Boolean,
        default: false
    },
    avatar: {
        type: String,
        default: 'https://res.cloudinary.com/bulutvoy/image/upload/v1620219481/ava_afcdmv.png'
    }
}, {
    timestamps: true
})

let Dataset = mongoose.models.user || mongoose.model('user', userSchema)
export default Dataset