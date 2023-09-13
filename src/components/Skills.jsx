const Skills = () => {
  // Define an array of skills with their icons and names
  const skills = [
    { id: "html", iconClass: "fa-html5", name: "HTML" },
    { id: "css", iconClass: "fa-css3-alt", name: "CSS" },
    { id: "js", iconClass: "fa-js-square", name: "JavaScript" },
    { id: "react", iconClass: "fa-react", name: "React" },
    { id: "node", iconClass: "fa-node-js", name: "Node" },
  ];

  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="grid-skills">
        {skills.map((skill) => (
          <div key={skill.id} className={`skill-card ${skill.id}`}>
            <i className={`fa-brands ${skill.iconClass} ${skill.id}-icon`}></i>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;