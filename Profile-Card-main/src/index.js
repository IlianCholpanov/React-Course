import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="ilko.JPG" alt="Ilian Cholpanov" />;
}

function Intro() {
  return (
    <div>
      <h1>Ilian Cholpanov</h1>
      <p1>
        Web Developer wanting to enhance his coding and personal skills. When
        not coding I like to cook, hike out in the mountains and spend time with
        my favourite people.
      </p1>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="#43A6C6" />
      <Skill skill="HTML + CSS" emoji="💪" color="orange" />
      <Skill skill="JavaScript" emoji="💪" color="orangered" />
      <Skill skill="Web Development" emoji="💪" color="green" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
