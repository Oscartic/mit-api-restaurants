const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); 

const { Schema } = mongoose;

const UserSchema = new Schema(
    {
        userId: {
            type: String,
            required: true,
            unique: [true, 'userId must be unique'],
            default: uuidv4,
            index: true,
        },
        firebaseUid: {
            type: String,
            required: true,
            unique: [true, 'firebaseUid must be unique'],
            index: true,
        },
        displayName: {
            type: String,
            required: [true, 'displayName is required'],
            index: true,
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'email is required'],
            unique: [true, 'email must be unique'],
            index: true,
            trim: true,
        },
        password: {
            type: String,
        },
    },
    {
        timestamps: true,
    },
);
// Model Validations
UserSchema.path('email').validate(async (value) => {
    const emailCount = await mongoose.models.User.countDocuments({ email: value });
    return !emailCount;
}, 'Email already exists');

UserSchema.index({ createdAt: -1 });

const User = mongoose.model(
    'User',
    UserSchema
);

module.exports = User;