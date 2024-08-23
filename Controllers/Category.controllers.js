const {Category} =require("../models/Category.model")

exports.getAllCategory= async(req,res)=>{
    try {
        const category= await Category.find().sort();
        if(!category)  return ;
        return res.status(200).json(category)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}