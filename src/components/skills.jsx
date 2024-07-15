const Skills = () => {
    return (
        <div className="skills-container">
            <h2>Skills</h2>
            <div className="grid-skills">
                <div className="skill-card html">
                    <i className="fab fa-html5 html-icon"></i>
                    <p>HTML</p>
                </div>
                <div className="skill-card css">
                    <i className="fab fa-aws css-icon"></i>
                    <p>AWS</p>
                </div>
                <div className="skill-card js">
                    <i className="fab fa-js-square js-icon"></i>
                    <p>JavaScript</p>
                </div>
                <div className="skill-card react">
                    <i className="fab fa-react"></i>
                    <p>React</p>
                </div>
                <div className="skill-card node">
                    <i className="fab fa-node-js node-icon"></i>
                    <p>Node</p>
                </div>
                <div className="skill-card python">
                    <i className="fab fa-python python-icon"></i>
                    <p>Python</p>
                </div>
                <div className="skill-card postgres">
                    <i className="fa-solid fa-database"></i>
                    <p>Postgres</p>
                </div>
            </div>
        </div>
    )
}

export default Skills;