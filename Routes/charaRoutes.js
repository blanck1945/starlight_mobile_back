const express = require("express")
const router = express.Router()
const db = require("../models")
const getMsg = require("../functions/functions")

router.get("/all_chara", async (req, res) => {
    try {
        const charas = await db.Chara.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            }
        })
        const msg = "Chara fetch and serve"
        const title = "Characters | Shoujo Kageki Revue Starlight"
        const response = getMsg(msg, charas, "all", title)

        res.send(response)
    }
    catch (err) {
        const response = getMsg(err)
        res.send(response)
    }
})

router.get("/single_chara/:id", async (req, res) => {
    const id = req.params.id
    try {
        const chara = await db.Chara.findByPk(id, {
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            }
        })
        const msg = "Chara fetch and serve"
        const formatedDescription = chara.dataValues.chara_description.split("\n")
        chara.dataValues.chara_description = formatedDescription
        const response = getMsg(msg, chara, id, chara.chara_name)

        res.send(response)
    }
    catch (err) {
        const response = getMsg(err)
        res.send(response)
    }
})

router.post("/create_chara", async (req, res) => {
    const data = req.body
    try {
        const chara = await db.Chara.create({
            chara_name: data.chara_name,
            chara_school: data.chara_school,
            chara_voice: data.chara_voice,
            chara_club: data.chara_club,
            chara_student_id: data.chara_student_id,
            chara_description: data.chara_description,
            chara_color: data.chara_color,
            chara_profile_img: data.chara_profile_img,
            chara_revue_img: data.chara_revue_img,
            chara_student_img: data.chara_student_img
        })

        const msg = "Chara created and added to DB"
        const response = getMsg(msg, chara, chara.id)

        res.send(response)

    }
    catch (err) {
        const response = getMsg(err)
        res.send(response)
    }
})

module.exports = router;