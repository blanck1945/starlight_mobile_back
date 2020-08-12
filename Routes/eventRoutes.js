const express = require("express")
const router = express.Router()
const db = require("../models")
const getMsg = require("../functions/functions")

router.get("/all", async (req, res) => {
    try {
        const events = await db.Event.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            }
        })
        const msg = "Events fetch and serve"
        const title = "Shoujo Kageki Revue Starlight"

        const response = getMsg(msg, events, 0, title)
        res.send(response)
    }
    catch (err) {
        const response = getMsg(err)
        res.send(response)
    }
})

router.get("/single_event/:id", async (req, res) => {

    const id = req.params.id
    try {
        const event = await db.Event.findByPk(id)
        const msg = "Event fetch and serve"

        const response = getMsg(msg, event, id, event.event_name)

        res.send(response)

    }
    catch (err) {
        const response = getMsg(err)
        console.log(response)
    }
})

module.exports = router;