import React from 'react';
import "./assets/css/style.css";
const About = () => {
  return (
    <section id="about" className="about">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>About Us</h2>
            <p>Hirademy-Trustworthy Platform  </p>
          </div>

          <div className="row content">
            <div className="col-lg-6">
              <p>
                A platform where candidates can learn top-notch technologies and build the real-world products. Our features
              </p>
              <ul>
                <li><i className="ri-check-double-line"></i> Mentorship and Internship</li>
                <li><i className="ri-check-double-line"></i> Software Engineering</li>
                <li><i className="ri-check-double-line"></i> Product Research & Development</li>
                <li><i className="ri-check-double-line"></i> Innovation</li>
                <li><i className="ri-check-double-line"></i> Skill Empowerment </li>
              
              </ul>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0" style={{'text-align': 'justify'}}>
              <p>
              Hirademy is a learning and tech product building company and we onboard Interns/engineers to our build innovative
              products. We hire students/freshers and make them strong engineers via our Mentorship and Internship Programs. We also
              offer MVP building services to Founder/Entrepreneurs at affordable pricing plans. We help startups/companies to hire
              talented engineers.
              </p>
              <p>Hirademy is a end-to-end platform where all things like Learning Tech, Building Product, Mentoring Engineers, Hiring
              Talent, etc happen.
              </p>
              <p>
                We are and excited to help millions of engineers.
              </p>
              {/* <a href="#" className="btn-learn-more">Learn More</a> */}
            </div>
          </div>

        </div>
      </section>
  );
};

const features = [
  "Mentorship and Internship",
  "Software Engineering",
  "Product Research & Development",
  "Innovation",
  "Skill Empowerment"
];

export default About;
