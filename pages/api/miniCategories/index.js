import connectDB from '../../../utils/connectDB'
import MiniCategories from '../../../models/miniCategoriesModel'
import auth from '../../../middleware/auth'

connectDB()

export default async (req, res) => {
    switch(req.method){
        case "POST":
            await createMiniCategory(req, res)
            break;
        case "GET":
            await getMiniCategories(req, res)
            break;
    }
}

const createMiniCategory = async (req, res) => {
    try {
        const result = await auth(req, res)
        if(result.role !== 'admin')
            return res.status(400).json({err: "Authentication is not valid."})

        const { name } = req.body
        if(!name) return res.status(400).json({err: "Name can not be left blank."})

        const newMiniCategory = new MiniCategories({name})

        await newMiniCategory.save()
        res.json({
            msg: 'Success! Created a new category.',
            newMiniCategory
        })

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const getMiniCategories = async (req, res) => {
    try {
        const minicategories = await MiniCategories.find()

        res.json({minicategories})

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}