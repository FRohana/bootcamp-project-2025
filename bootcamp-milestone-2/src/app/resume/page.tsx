import Entry from "@/components/Entry";

export default function Resume() {
  return (
    <main>
      <h1 className="page-title">My Resume</h1>
      <a href="Farid Rohana Resume.pdf" download>
        Download Resume
      </a>
      <div className="resume">
        {/* Education */}
        <section className="section">
          <h2 className="section-title">Education</h2>
          <Entry
            title="Bellarmine College Preparatory, San Jose, CA"
            info="May 2025 | GPA: WGPA 4.3, UWGPA 3.9"
            description="Relevant Coursework: Intro to Python, 3D Modeling and Animation 1&2, Intro to CAD, Intro to Engineering"
          />
          <Entry
            title="De Anza College, Cupertino, CA"
            info="Relevant Coursework: Intro to Programming with Java"
          />
          <Entry
            title="California Polytechnic State University, San Luis Obispo, CA"
            info="Freshman | Major: Computer Engineering"
            description="Relevant Coursework (In Progress): Data Structures and Algorithms"
          />
        </section>

        {/* Leadership / Experience */}
        <section className="section">
          <h2 className="section-title">Leadership Experience and Clubs</h2>
          <Entry
            title="Founder, San Jose Curbs"
            info="Aug 2019 – May 2023"
            description={
              <>
                - Founded curb painting business serving 600+ customers,
                generating ≈$12k revenue.
                <br />
                - Developed online shop with Wix, engineered custom stencils
                using AutoCAD, 3D printer, and laser cutter.
                <br />- Gained sales communication, team leadership, and
                engineering problem-solving skills.
              </>
            }
          />
          <Entry
            title="Co-President, Bellarmine Cash Club"
            info="Aug 2022 – May 2024"
            description={
              <>
                - Created finance curriculum
                <br />
                - Presented on investments and financial literacy
                <br />- Organized trading challenges using Investopedia
              </>
            }
          />
          <Entry
            title="Co-President, Bellarmine Film Club"
            info="Aug 2023 – May 2025"
            description={
              <>
                - Led weekly film screenings
                <br />- Guided discussions analyzing films with members
              </>
            }
          />
          <Entry
            title="Executive, Unity Council"
            info="Aug 2023 – May 2024"
            description={
              <>
                - Helped organize DEI assemblies
                <br />
                - Coordinated multicultural events including Global Village
                <br />- Assisted in school-wide presentations
              </>
            }
          />
          <Entry
            title="Team Captain, Liverpool FC"
            info="Winter 2018 – Winter 2022"
            description={
              <>
                - Played competitive soccer as starting midfielder/left wing and
                captain
                <br />- Led team communications
              </>
            }
          />
          <Entry
            title="Assistant Instructor, Victory Martial Arts"
            info="2019 – 2020, 2022 – 2023"
            description={
              <>
                - Instructed classes of 10–20 students
                <br />
                - Led workshops
                <br />- Improved teaching and leadership skills
              </>
            }
          />
          <Entry
            title="Engineer, Bellarmine Makers Lab"
            info="Aug 2021 – May 2025"
            description={
              <>
                - Developed 3D models and prints
                <br />
                - Learned AutoCAD, laser cutting
                <br />- Applied skills to curb painting business
              </>
            }
          />
        </section>

        {/* Projects */}
        <section className="section">
          <h2 className="section-title">Projects</h2>
          <Entry
            title="Whack-A-Mole Arcade Game"
            description={
              <>
                - Built arcade game with AutoCAD, 3D printing, and Arduino
                programming
                <br />
                - Designed electrical systems
                <br />- Soldered circuits
              </>
            }
          />
          <Entry
            title="PyPaint"
            description={
              <>
                - Coded a digital painting app in Python with Pygame
                <br />- Features palette, brush sizes, reset canvas, and
                intuitive drawing
              </>
            }
          />
          <Entry
            title="Co-founder, CPUandBeyond"
            description={
              <>
                - Designed website and course explaining computer hardware
                concepts (CPUs, hard drives, power supplies) with quizzes
                <br />-{" "}
                <a
                  href="https://faridrohana0.wixsite.com/cpuandbeyond"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Website
                </a>
              </>
            }
          />
          <Entry
            title="Personal Website"
            info="2025"
            description={
              <>
                - Created this personal portfolio website
                <br />- Showcases my work and experience
              </>
            }
          />
        </section>

        {/* Skills */}
        <section className="section">
          <h2 className="section-title">Skills</h2>
          <ul className="skill-list">
            <li>Python</li>
            <li>Java</li>
            <li>HTML/CSS</li>
            <li>AutoCAD, 3D Printing</li>
          </ul>
        </section>

        {/* Coursework */}
        <section className="section">
          <h2 className="section-title">Coursework</h2>
          <ul className="course-list">
            <li>Data Structures and Algorithms (In Progress)</li>
            <li>Intro to Programming with Java</li>
            <li>Intro to Python</li>
            <li>3D Modeling and Animation 1 & 2</li>
            <li>Intro to CAD</li>
            <li>Intro to Engineering</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
