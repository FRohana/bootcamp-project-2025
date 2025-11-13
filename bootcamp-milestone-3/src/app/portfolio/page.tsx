import Project from "@/components/Project";

export default function Portfolio() {
  return (
    <main>
      <h1 className="page-title">My Portfolio</h1>

      <Project
        name="Personal Website"
        description="A showcase of my work, blog posts, resume, and contact information. Explore my projects and learn more about me."
        imageUrl="/images/website.png"
        projectUrl="/"
        linkText="Learn More"
      />

      <Project
        name="PyPaint"
        description="Coded a digital painting app in Python with Pygame. Features palette, brush sizes, reset canvas, and intuitive drawing interface."
        imageUrl="/images/pypaint2.png"
        projectUrl="https://github.com/FRohana/PyPaint"
        linkText="Learn More"
      />

      <Project
        name="CPUandBeyond"
        description="Designed website and course explaining computer hardware concepts (CPUs, hard drives, power supplies) with interactive quizzes to test understanding."
        imageUrl="/images/cpuandbeyond.png"
        projectUrl="https://faridrohana0.wixsite.com/cpuandbeyond"
        linkText="View Website"
      />
    </main>
  );
}