import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Project from "@/database/projectSchema";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();
    console.log("Portfolio comment POST - Request body:", body);
    const { projectName, user, comment } = body;

    // Validate request body
    if (!projectName || !user || !comment) {
      console.log("Missing required fields:", { projectName, user, comment });
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
    console.log("New comment to add:", newComment);

    // Find the project by name (case-insensitive search)
    const project = await Project.findOne({
      name: { $regex: new RegExp(`^${projectName}$`, "i") },
    });

    if (!project) {
      console.log("Project not found for name:", projectName);
      // Try to find all projects to help debug
      const allProjects = await Project.find({}, "name").lean();
      console.log(
        "Available projects:",
        allProjects.map((p: any) => p.name)
      );
      return NextResponse.json(
        {
          error: "Project not found",
          details: `Project "${projectName}" not found. Available projects: ${allProjects
            .map((p: any) => p.name)
            .join(", ")}`,
        },
        { status: 404 }
      );
    }

    console.log("Project found:", project.name);
    console.log("Current comments:", project.comments);
    console.log("Comments type:", typeof project.comments);

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
      console.log("Initializing comments array");
      project.comments = [];
    }

    // Filter out any invalid comments before adding new one
    project.comments = project.comments.filter(
      (c: any) =>
        c &&
        typeof c === "object" &&
        c.comment &&
        typeof c.comment === "string" &&
        c.comment.trim().length > 0
    );

    // Add the new comment to the array
    project.comments.push(newComment);
    console.log("Comments after push:", project.comments);

    // Mark the comments field as modified to ensure it gets saved
    project.markModified("comments");

    // Save the document
    try {
      const savedProject = await project.save();
      console.log(
        "Project saved successfully. Comments count:",
        savedProject.comments?.length
      );
      console.log(
        "Saved project comments:",
        JSON.stringify(savedProject.comments, null, 2)
      );
    } catch (saveError) {
      console.error("Error saving project:", saveError);
      throw saveError;
    }

    return NextResponse.json({ success: true, comment: newComment });
  } catch (err) {
    console.error("Error adding comment:", err);
    if (err instanceof Error) {
      console.error("Error message:", err.message);
      console.error("Error stack:", err.stack);
    }
    return NextResponse.json(
      {
        error: "Failed to add comment",
        details: err instanceof Error ? err.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
