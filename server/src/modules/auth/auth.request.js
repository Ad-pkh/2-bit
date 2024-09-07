const require=('joi')

const login=Joi.object({
    email:Joi.string().email(),
    password:Joi.string().require
})
module.export={
    login
}