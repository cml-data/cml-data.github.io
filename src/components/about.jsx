import Image from "next/image";

const About = () => {
    return (
        <div className="about-container">
            <h2>About Me</h2>
            <div className="flex-about">
                <div className="about-text">
                    <p>
                        My career path has taken twists and turns.
                        I graduated with a degree in Computer Systems Engineering, but my first job was taking care of
                        Sun Solaris systems for the CAD department at Microchip Technology, where I did everything from
                        wiring up the network and replacing internal parts to writing automation scripts for various
                        projects. I learned a lot about Unix, then Linux (as we moved on from Solaris) in this position
                        and this knowledge has been invaluable as my career moved on. It translates directly to
                        understanding deployment pipelines, Docker containers, and setting up EC2 servers in AWS. I eventually moved on to a
                        QA automation position with Blackboard and learned the good and bad about attempting to automate
                        all of your browser testing. I understand the strengths and weaknesses of automation frameworks
                        and have a deep respect for writing testable code. The last 10 years have been spent as a full
                        stack developer at NWEA (now HMH), helping develop features for k-12 reading fluency testing
                        platforms and writing bespoke, teacher and parent-based, data-driven visualizations for our
                        underlying research and psychometric data. My strongest aspects as a developer are
                        troubleshooting unfamiliar code bases and designing efficient and robust solutions.
                        In the past year, I have begun moving my career toward data science and am currently completing
                        a master’s degree in Data Science. I love the data-driven aspect of my work and would like to
                        dig more deeply into datasets to find answers that help people.
                    </p>
                </div>
                <div className="about-img">
                    <Image src='images/IMG_5277.jpeg' className="profile-img" width={300} height={500} alt="Camping with Lucy" />
                </div>
            </div>
        </div>

    )
}

export default About;