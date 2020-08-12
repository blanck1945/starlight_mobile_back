const express = require("express")
const router = express.Router()
const db = require("../models/index")
const getMsg = require("../functions/functions")

router.post("/login_user", async (req, res) => {
    const data = req.body
    try {
        const user = await db.User.findOne({
            where: {
                username: data.username
            }
        })
        const msg = "Cant validate credentials, please try again"
        const response = getMsg(msg, 0, "login_user")
        if (user.dataValues.length === 0) {
            res.send(response)
        }
        if (parseInt(data.personal_user_code.length) !== 4) {
            res.send(response)
        }

        if (parseInt(data.personal_user_code) !== user.dataValues.personal_user_code) {
            return response
        }

        if (user.dataValues.password !== data.password) {
            return response
        }
        const validate_msg = "User Validate correctly"
        const token = user.personal_user_code * 25
        const validation = getMsg(validate_msg, token, "login_user")
        res.send(validation)
    }
    catch (err) {
        const response = getMsg(err, 0)
        res.send(response)
    }
})

router.post("/create_user", async (req, res) => {

})

module.exports = router;