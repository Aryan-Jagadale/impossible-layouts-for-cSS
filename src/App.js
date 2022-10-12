import "./App.css";
import tiger from "./images/tiger.svg";
import turtle from "./images/turtle.svg";
import bulldog from "./images/bulldog.svg";

function App() {
  return (
    <div className="wrapper">
      <section>
        <img src={tiger} alt="tiger" className="tiger" />
        <h1>Get Fashion</h1>
        <img src={bulldog} alt="bulldog" className="dog" />
        <div className="content">
          <p>
            Shop the new fall collection of wow appareal. The hottest the latest
            vibes, and the best eco-friendly quality.
          </p>
          <a href="/">
            <span>Shop now</span>
            <svg
              width="258"
              height="8"
              viewBox="0 0 258 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M257.354 4.35355C257.549 4.15829 257.549 3.84171 257.354 3.64645L254.172 0.464466C253.976 0.269204 253.66 0.269204 253.464 0.464466C253.269 0.659728 253.269 0.976311 253.464 1.17157L256.293 4L253.464 6.82843C253.269 7.02369 253.269 7.34027 253.464 7.53553C253.66 7.7308 253.976 7.7308 254.172 7.53553L257.354 4.35355ZM0 4.5H257V3.5H0V4.5Z"
                fill="black"
              />
            </svg>
          </a>
        </div>
        <img src={turtle} alt="turtle" className="fish" />
      </section>
    </div>
  );
}

export default App;
