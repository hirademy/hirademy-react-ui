import React from 'react';
import PropTypes from 'prop-types';
import companyLogo from './assets/img/technologies.jpg';
const AboutVideo = ({ technologies }) => {
  return (
    <section id="about-video" className="about-video">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-6 video-box align-self-baseline" data-aos="fade-right" data-aos-delay="100">
            <img src={companyLogo} className="img-fluid"  alt=""  style={{'height': '550px'}}/>
          </div>
    
          <div className="col-lg-6 pt-3 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
            <h3>Our Areas of Expertise:</h3>
            <ul style={{"font-size": "15px"}}>
              <li><i className="bx bx-check-double"></i>Artificial Intelligence(AI) and Tools</li>
              <li><i className="bx bx-check-double"></i>SaaS/Cloud Technologies</li>
              <li><i className="bx bx-check-double"></i>Mobile and Web Development</li>
              <li><i className="bx bx-check-double"></i>Blockchain and IoT</li>
              <li><i className="bx bx-check-double"></i>Cloud computing and Devops</li>
            </ul>
    
            <h3>Technologies:</h3>
            <ul style={{"font-size": "15px"}}>
              <li><i className="ri-check-double-line"></i>Roles: AI, Backend, Frontend, DevOps, Test Engineers</li>
              <li><i className="ri-check-double-line"></i>Backend Stack: Python+Flask, Python+Django, Java+Springboot, Golang
              </li>
              <li><i className="ri-check-double-line"></i>Frontend Stack: React.js, Next.js</li>
              <li><i className="ri-check-double-line"></i>AI Tools: ChatGPT, Gemini, Bing AI</li>
              <li><i className="ri-check-double-line"></i>Database/Queues: SQL/NoSql Databases, postgresql, MongoDB,
                Cassandra,Redis,Kafka, RabbitMQ</li>
              <li><i className="ri-check-double-line"></i>Cloud Tools: AWS, GCP, AZURE, Heroku, etc</li>
              <li><i className="ri-check-double-line"></i>Testing tools:, Junit, Locus, Postman, etc</li>
              <li><i className="ri-check-double-line"></i>Other Tools: Jenkins, ArgoCD, Prometheus, Grafana, Github, Slack,
                Jira,
                etc
              </li>
            </ul>
          </div>
    
        </div>
      </div>
    </section>
  );
};

AboutVideo.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AboutVideo;
