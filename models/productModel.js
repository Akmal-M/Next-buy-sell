import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    user: {
        type: Array,
        required:true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    productcategory: {
        type: String,
        required: true
    },
    // category: {
    //     type: String,
    //     required: true
    // },
    miniCategory: {
        type: String,
        required: false
    },
    location: {
        type:String,
        required:false
    },
    top: {
        type: Boolean,
        default: false
    },
    checked: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

let Dataset = mongoose.models.product || mongoose.model('product', productSchema)
export default Dataset