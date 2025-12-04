import mongoose, { Schema } from "mongoose";

// typescript type matching my Blog interface
type IComment = {
    user: string;
    comment: string;
    time: Date;
}

type Blog = {
    title: string;
    date: string;
    description: string;
    content?: string;
    image: string;
    imageAlt: string;
    slug: string;
    additionalImages?: Array<{
        src: string;
        alt: string;
        caption: string;
    }>;
    comments?: IComment[];
};

// mongoose schema
const blogSchema = new Schema<Blog>({
    title: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: false },
    image: { type: String, required: true },
    imageAlt: { type: String, required: true },
    slug: { type: String, required: true },
    additionalImages: [{
        src: { type: String, required: false },
        alt: { type: String, required: false },
        caption: { type: String, required: false }
    }],
    comments: [{
        user: { type: String, required: true },
        comment: { type: String, required: true },
        time: { type: Date, required: true }
    }]
})

// defining the collection and model
const Blog = mongoose.models['blogs'] || 
    mongoose.model('blogs', blogSchema);

export default Blog;