const contact = require("../model/contact")


const createContact = async ({ name, email, title, category, message, isUser }) => {
    const values = { name, email, title, category, message, isUser }
    try {
        const contactUs = await contact.create(values)
        return ({ data: contactUs, status: "SUCCESS" })
    } catch (error) {
        throw error
    }
}


module.exports = {
    createContact
}