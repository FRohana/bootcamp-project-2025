import Project from "@/components/Project";
import connectDB from "@/database/db";
import ProjectModel from "@/database/projectSchema";

type IComment = {
  user: string;
  comment: string;
  time: Date | string;
};

type ProjectData = {
  name: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  linkText?: string;
  comments?: IComment[];
};

async function getProjects(): Promise<ProjectData[] | null> {
  await connectDB();
  try {
    const projects = await ProjectModel.find().lean().orFail();
    
    // Handle comments if they're stored as strings
    const projectsWithComments = projects.map((project: any) => {
      if (project.comments && typeof project.comments === "string") {
        try {
          project.comments = JSON.parse(project.comments);
        } catch (parseError) {
          console.error("Error parsing comments JSON:", parseError);
          project.comments = [];
        }
      }
      // Ensure comments is an array
      if (!project.comments || !Array.isArray(project.comments)) {
        project.comments = [];
      }
      // Filter out invalid comments (empty strings, null, undefined, or missing required fields)
      project.comments = project.comments.filter(
        (comment: any) =>
          comment &&
          typeof comment === "object" &&
          comment.comment &&
          typeof comment.comment === "string" &&
          comment.comment.trim().length > 0
      );
      return project;
    });
    
    return projectsWithComments as unknown as ProjectData[];
  } catch (err) {
    return null;
  }
}

export default async function Portfolio() {
  const projects = await getProjects();

  if (!projects || projects.length === 0) {
    return (
      <main>
        <h1 className="page-title">My Portfolio</h1>
        <p>No projects found.</p>
      </main>
    );
  }

  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1 className="page-title">My Portfolio</h1>

      {projects.map((project, index) => (
        <Project
          key={index}
          name={project.name}
          description={project.description}
          imageUrl={project.imageUrl}
          projectUrl={project.projectUrl}
          linkText={project.linkText}
          comments={project.comments}
        />
      ))}
    </main>
  );
}
