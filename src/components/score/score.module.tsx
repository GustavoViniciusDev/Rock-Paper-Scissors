import logo from "../images/logo.svg";
import "./score.css";

export default function Score() {
  return (
    <>
      <div className="container_score">
        <div className="score_container">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="score">
            <p>SCORE</p>
            <h2>0</h2>
          </div>
        </div>
      </div>
    </>
  );
}
