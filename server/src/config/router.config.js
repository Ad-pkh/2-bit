const router = require("express").Router();
const authRouter=require("../modules/auth/auth.router")

router.use('/auth',authRouter)

module.exports=router;