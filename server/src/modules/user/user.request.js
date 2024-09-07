const require=('joi')

const usercreate=Joi.object({
    name:Joi.string().min(2).max(25).required(),
    email:Joi.string().email.required(),
    phone:Joi.string().min(8).max(10).required(),
    address:Joi.string().required(),
    role:Joi.regex(/^(donor|admin)^/)
})
 module.exports=usercreate;