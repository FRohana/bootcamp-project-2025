import mongoose, { Schema } from "mongoose";

// typescript type matching my Project interface
type IComment = {
  user: string;
  comment: string;
  time: Date;
};

type Project = {
  name: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  linkText?: string;
  comments?: IComment[];
};

// mongoose schema
const projectSchema = new Schema<Project>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  projectUrl: { type: String, required: true },
  linkText: { type: String, required: false },
  comments: [
    {
      user: { type: String, required: true },
      comment: { type: String, required: true },
      time: { type: Date, required: true },
    },
  ],
});

// defining the collection and model
const Project =
  mongoose.models["projects"] || mongoose.model("projects", projectSchema);

export default Project;
