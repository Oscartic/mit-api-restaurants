const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); 

const { Schema } = mongoose;

const OrderSchema = new Schema(
    {
        orderId: {
            type: String,
            required: true,
            unique: [true, 'userId must be unique'],
            default: uuidv4,
            index: true,
        },
        firebaseUid: {
            type: String,
            required: [true, 'firebaseUid is required'],
        },
        stripeIdCharge: {
            type: String,
            required: [true, 'stripeIdCharge is required'],
        },
        amount: {
            type: mongoose.Decimal128,
            required: [true, 'amount is required'],
        },
        currency: {
            type: String,
            required: [true, 'currency is required'],
        },
        status: {
            type: String,
            required: [true, 'status is required'],
        },
        receipt_email: {
            type: String,
            required: [true, 'receipt_email is required'],
        },
        description: {
            type: Array,
            required: [true, 'description is required'],
        },
        source: {
            type: Object,
            required: [true, 'source is required'],
        },
    },
    {
        timestamps: true,
    },
);
// Model Validations

OrderSchema.index({ createdAt: -1 });

const Order = mongoose.model(
    'Order',
    OrderSchema
);

module.exports = Order;