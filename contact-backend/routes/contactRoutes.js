const express = require("express")
const router = express.Router()
const Contacts = require("../models/contactModel")

// Get all contacts
router.route("/").get(async (req, res) => {
    try {
        const data = await Contacts.find({}).sort({createdAt: -1});
        res.status(200).json({
            status: "Success",
            data: data,
        });
    }
    catch(error) {
        res.status(500).json({message: "Internal server error"})
    }
})
// Get individual contact
router.route("/:id").get(async (req, res) => {
    try {
        const data = await Contacts.find({_id: req.params.id})
        res.status(200).json({
            status: "Success",
            data: data,
        });
    }
    catch(error) {
        res.status(500).json({message: "Internal server error"})
    }
})
// Create contact
router.route("/").post(async (req, res) => {
    try {
        const {name, phone, email} = req.body;
        if (!name | phone.length < 10 | !email) {
            return res.status(400).json({message: ""});
        }
        const contact = new Contacts({
            name: name,
            phone: phone, 
            email: email
        });
        await contact.save();
        res.status(200).json({
            message: "Contact saved successfully."
        });
    }
    catch(error) {
        res.status(500).json({message: "Internal server error"})
    }
})
// Update contact
router.route("/:id").put(async (req, res) => {
    try {
        const {name, phone, email} = req.body;
        if (!name | phone.length < 10 | !email) {
            return res.status(400).json({message: ""})
        }
        await Contacts.findByIdAndUpdate(req.params.id, {
            name: name,
            phone: phone, 
            email: email
        })
        res.status(200).json({
            message: "Contact updated successfully."
        })
    }
    catch(error) {
        res.status(500).json({message: "Internal server error"})
    }
})
// Delete contact
router.route("/:id").delete(async (req, res) => {
    try {   
        await Contacts.findByIdAndDelete(req.params.id);
    }
    catch(error) {
        res.status(500).json({message: "Internal server error"})
    }
})
module.exports = router