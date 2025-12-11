import Infocard from "@/components/Infocard";


export default function Home() {
  return (
    <>
      <main>
        <h1 className="page-title">Farid's Personal Website</h1>
        <div className="about">
          <div className="about-image">
            <img src="/images/me.jpg" alt="Picture of Me" />
          </div>
          <div className="about-text">
            <p>
              Hi, I'm <strong>Farid Rohana</strong>, a freshman at Cal Poly Slo
              majoring in computer engineering.
            </p>

            <p>
              I have experience building custom PCs, designing circuits, and
              developing in <em>Python</em> and <em>Java</em>.
            </p>

            <p>
              Beyond coding, I love playing soccer, skateboarding, going to the
              gym, and playing video games.
            </p>
          </div>
        </div>

        <div className="infocards">
          <Infocard
            title="Current Focus"
            content="Building full-stack web applications with React.js, Next.js, TypeScript, and MongoDB. Developing modern, responsive websites with Tailwind CSS and deploying projects using GitHub."
          />

          <Infocard
            title="Technologies"
            content="React.js • Next.js • TypeScript • JavaScript • Tailwind CSS • MongoDB • GitHub • Python • Java • Arduino • AutoCAD"
          />

          <Infocard
            title="Interests"
            content="Python & Java Programming • Machine Learning • 3D Modeling &
              Printing • CAD Design • Web Development"
          />
        </div>

      </main>
    </>
  );
}
