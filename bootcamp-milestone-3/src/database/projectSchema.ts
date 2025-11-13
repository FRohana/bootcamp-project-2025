import mongoose, { Schema } from "mongoose";

// typescript type matching my Project interface
type Project = {
    name: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
    linkText?: string;
};

// mongoose schema
const projectSchema = new Schema<Project>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    projectUrl: { type: String, required: true },
    linkText: { type: String, required: false }
})

// defining the collection and model
const Project = mongoose.models['projects'] || 
    mongoose.model('projects', projectSchema);

export default Project;

