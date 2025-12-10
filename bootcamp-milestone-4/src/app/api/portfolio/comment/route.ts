import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Project from "@/database/projectSchema";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();
    const { projectName, user, comment } = body;

    // Validate request body
    if (!projectName || !user || !comment) {
      return NextResponse.json(
        { error: "Project name, user, and comment are required" },
        { status: 400 }
      );
    }

    // Create the new comment object
    const newComment = {
      user: user.trim(),
      comment: comment.trim(),
      time: new Date(),
    };

    // Find the project by name
    const project = await Project.findOne({ name: projectName });
    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    // Handle comments if it's stored as a string (JSON string) instead of an array
    if (typeof project.comments === "string") {
      try {
        project.comments = JSON.parse(project.comments);
      } catch (parseError) {
        console.error("Error parsing comments JSON:", parseError);
        project.comments = [];
      }
    }

    // Initialize comments array if it doesn't exist or isn't an array
    if (!project.comments || !Array.isArray(project.comments)) {
      project.comments = [];
    }

    // Add the new comment to the array
    project.comments.push(newComment);

    // Mark the comments field as modified to ensure it gets saved
    project.markModified("comments");

    // Save the document
    await project.save();

    return NextResponse.json({ success: true, comment: newComment });
  } catch (err) {
    console.error("Error adding comment:", err);
    return NextResponse.json(
      {
        error: "Failed to add comment",
        details: err instanceof Error ? err.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
