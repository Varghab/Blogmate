import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
        default:"Varghab"
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

export const BlogModel = mongoose.models.BlogModel || mongoose.model('BlogModel', blogSchema);
