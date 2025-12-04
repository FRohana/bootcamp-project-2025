import Project from "@/components/Project";
import connectDB from "@/database/db";
import ProjectModel from "@/database/projectSchema";

type ProjectData = {
  name: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  linkText?: string;
};

async function getProjects(): Promise<ProjectData[] | null> {
  await connectDB();
  try {
    const projects = await ProjectModel.find().lean().orFail();
    return projects as unknown as ProjectData[];
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
    <main>
      <h1 className="page-title">My Portfolio</h1>

      {projects.map((project, index) => (
        <Project
          key={index}
          name={project.name}
          description={project.description}
          imageUrl={project.imageUrl}
          projectUrl={project.projectUrl}
          linkText={project.linkText}
        />
      ))}
    </main>
  );
}
