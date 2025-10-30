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
            content="Learning Python, HTML, and CSS. Building my web development skills
            through hands-on projects like this website."
          />

          <Infocard
            title="Technologies"
            content="Python • Java • Arduino • AutoCAD"
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
