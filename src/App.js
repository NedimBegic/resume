import "./App.css";
import me from "../src/me.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <div className="head">
        <img className="mypic" src={me} alt="my" />
        <h1>Nedim Begić</h1>
        <div className="info">
          <div>
            <FontAwesomeIcon icon={faGlobe} style={{ color: "#4a4a77" }} />
            <a href="https://nedimbegic.netlify.app/" target="_blank">
              {" "}
              Portfolio
            </a>
          </div>
          <div>
            <FontAwesomeIcon
              style={{
                background: "rgb(18, 17, 17)",
                color: "white",
                borderRadius: "50%",
              }}
              icon={faGithub}
            />
            <a href="https://github.com/NedimBegic" target="_blank">
              {" "}
              Github
            </a>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{
                background: "white",
                color: "#007bb5",
                borderRadius: "50%",
              }}
            />
            <a
              href="https://www.linkedin.com/in/nedim-begic-a42210245/"
              target="_blank"
            >
              {" "}
              Linkedin
            </a>
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#f1d592" }} />
            <a href="mailto:nedim.begic93@gmail.com"> Email</a>
          </div>
          <div>
            <FontAwesomeIcon icon={faMobileScreen} style={{ color: "black" }} />
            <i> 064 407 8534</i>
          </div>
        </div>
      </div>
      <main>
        <article>
          <div className="skils">
            <h2 className="heading">Tools I use:</h2>
            <div>
              <p>HTML</p>
              <p>CSS</p>
              <p>Javascript</p>
              <p>React</p>
              <p>Next</p>
              <p>Node</p>
              <p>MongoDB</p>
              <p>Postman</p>
              <p>Bootstrap</p>
              <p>Rest</p>
            </div>
          </div>
          <div className="volonter">
            <h2 className="heading">Volunteering</h2>
            <div>
              <h4>+ Sigma Development</h4>
              <ul>
                <li>Developing Figma designs with React.</li>
                <li>If necessary working with Wordpres</li>
                <li>
                  {" "}
                  <a href="https://sigmadev.net/" target="_blank">
                    Visit company page
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4>+ 100Devs community</h4>
              <ul>
                <li>Community thought</li>
                <li>Working in a team on discrord</li>
                <li>Practicing MVC structure</li>
                <li>
                  {" "}
                  <a href="https://communitytaught.org/" target="_blank">
                    Visit the community page
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="languages">
            <h2 className="heading">Languages</h2>
            <div>
              <h4>Bosnian</h4>
              <p>- Native language</p>
            </div>
            <div>
              <h4>English</h4>
              <p>- Intermediate (B1)</p>
            </div>
            <div>
              <h4>German</h4>
              <p>- Intermediate (B1)</p>
            </div>
          </div>
        </article>
        <article>
          <div className="paidwork">
            <h2 className="heading">Paidwork</h2>
            <div>
              <h4>
                +{" "}
                <a href="https://report123.netlify.app/" target="_blank">
                  Mining report
                </a>{" "}
              </h4>
              <p>
                Build for a friend and his colleagues. Saving data in the
                localStorage, automaticaly changing the data. For privacy matter
                only demo version.(more on{" "}
                <a href="https://github.com/NedimBegic/miningReport">github</a>)
              </p>
            </div>
          </div>
          <div className="passion">
            <h2 className="heading">Passionate Work</h2>
            <div>
              <h4>
                +{" "}
                <a href="https://sharerecipes1.vercel.app/" target="_blank">
                  Share recipes
                </a>
              </h4>
              <p>
                Fullstack app for sharing recipes, rating, and commenting on
                others using Next.js.
              </p>
              <ul>
                <li>Prerendering</li>
                <li>Pages with dynamic paths</li>
                <li>Form validation</li>
                <li>Voting recipe functionality</li>
                <li>
                  More on&nbsp;
                  <a
                    href="https://github.com/NedimBegic/Share-Recipes-Next.js"
                    target="_blank"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4>
                +{" "}
                <a href="https://doner-house.netlify.app/" target="_blank">
                  Doner House
                </a>
              </h4>
              <p>Ordering food app build with React.</p>
              <ul>
                <li>Menaging state with useContext and useReducer</li>
                <li>Background image slider</li>
                <li>
                  More on&nbsp;
                  <a
                    href="https://github.com/NedimBegic/Doner-House-React-"
                    target="_blank"
                  >
                    Github
                  </a>
                </li>
              </ul>
              <a
                className="more"
                href="https://github.com/NedimBegic"
                target="_blank"
              >
                More projects here
              </a>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}

export default App;
