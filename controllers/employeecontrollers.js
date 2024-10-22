

const employee = require("../models/Employee")
const createEmployee = async (request, response) => {
    try {
        const { name, email, phone, city } = request.body
        const employee = new employee({
            name,
            email,
            phone,
            city
        })
        await employee.save()
        response.status(201).json(employee)
    } catch (error) {
        console.log(error)
    }
}