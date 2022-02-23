const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const { Schema } = mongoose;
const DishSchema = new Schema(
    {
        dishId: {
            type: String,
            required: true,
            unique: [true, 'dishId must be unique'],
            default: uuidv4,
            index: true,
        },
        name: {
            type: String,
            required: [true, 'dish name is required'],
            index: true,
            trim: true,
        },
        description: {
            type: String,
            required: [true, 'restaurant description is required'],
            trim: true,
        },
        imageUrl: {
            type: String,
            required: [true, 'rstaurant imageUrl is required'],
            trim: true,
        },
        price: {
            type: mongoose.Decimal128,
            required: [true, 'dish price is required'],
            trim: true,
        },
    }
);
const RestaurantSchema = new Schema(
    {
        restaurantId: {
            type: String,
            required: true,
            unique: [true, 'userId must be unique'],
            default: uuidv4,
            index: true,
        },
        name: {
            type: String,
            required: [true, 'restaurant name is required'],
            index: true,
            trim: true,
        },
        description: {
            type: String,
            required: [true, 'restaurant description is required'],
            trim: true,
        },
        imageUrl: {
            type: String,
            required: [true, 'rstaurant imageUrl is required'],
            trim: true,
        },
        dishes: [ DishSchema ],
    },
    {
        timestamps: true,
    },
);
// Model Validations

RestaurantSchema.index({ createdAt: -1 });

const Restaurant = mongoose.model(
    'Restaurant',
    RestaurantSchema
);

module.exports = Restaurant;