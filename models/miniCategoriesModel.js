import mongoose from 'mongoose'

const MiniCategoriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
})

let Dataset = mongoose.models.minicategories || mongoose.model('minicategories', MiniCategoriesSchema)
export default Dataset