const express = require("express")
const router = express.Router()

router.route("/").get((req, res) => {
    res.status(200).json({msg: "Get all contacts"})
})
router.route("/:id").get((req, res) => {
    res.status(200).json({msg: `Get individual contact for ${req.params.id}`})
})
router.route("/").post((req, res) => {
    res.status(201).json({msg: "Create contact"})
})
router.route("/:id").put((req, res) => {
    res.status(200).json({msg: `Update contact for contact ${req.params.id}`})
})
router.route("/:id").delete((req, res) => {
    res.status(200).json({msg: `Delete contact ${req.params.id}`})
})
module.exports = router