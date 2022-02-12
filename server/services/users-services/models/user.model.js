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
        name: {
            type: String,
            required: [true, 'name is required'],
            index: true,
        },
        nickname: {
            type: String,
            required: [true, 'nickname is required'],
            index: true,
        },
        email: {
            type: String,
            required: [true, 'email is required'],
            unique: [true, 'email must be unique'],
            index: true,
        },
        password: {
            type: String,
            required: [true, 'password is required'],
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