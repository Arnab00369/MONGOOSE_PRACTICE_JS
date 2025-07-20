import mongoose from 'mongoose'

//mini-models for easier usage(no need for timestamps)
const orderItemSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products"
    },
    quantity:{
        type: Number,
        required: true
    }
})

//actual model
const orderSchema = new mongoose.Schema({
    orderPrice:{
        type: Number,
        required: true
    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orderItems:{
        type: [orderItemSchema]
    },
    address:{
        type: String,
        required: true
    },
    status:{
        type: String,
        enum: ["PENDING","CANCELLED","DELIVERED"],
        default: "PENDING",
    }
},
{timestamps: true}
)

export const Orders = mongoose.model("Orders", orderSchema)