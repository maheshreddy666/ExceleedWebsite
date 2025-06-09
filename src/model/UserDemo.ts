import mongoose from "mongoose";


const UserDemoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "contact Person is required"]
    },
    emailAddress: {
        type: String,
        required: true,
        unique: true
    },
    company: {
        type: String,
        required: false
    },
    contactNumber: {
        type: String
    },
    message: {
        type: String
    }
})

const DemoFormModel = mongoose.models.customerdata || mongoose.model("customerdata", UserDemoSchema)

export default DemoFormModel