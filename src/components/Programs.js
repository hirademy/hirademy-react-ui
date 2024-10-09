import React,{Link} from 'react';
import PropTypes from 'prop-types';

const Programs = () => {
  const handleClick = () => {
    // Redirect to the Google Form URL after clicking the button
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSchi8el1cFXvtTGPCaFjyxS3B-N-GEMHlvhzChkJCfZuEdHbA/viewform";
  };
  const handleButtonClick = () => {
    // Redirect to the Google Form URL after clicking the button
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScvuPvcDmmUuC6rjlJj67osz-OsV3DXg_P-IKn3S0Cm3eYq6A/viewform";
  };
  return (
    <section id="programs" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Internship program</h2>
        </div>
        <h2>Software Engineer Intern:</h2>
        <div className="row content" data-aos="fade-left">
          <div className="col-lg-6">
            <h4>Features:</h4>
            <ul>
              <li><i className="ri-check-double-line"></i><b>Real-Product</b> Development Work experience </li>
              <li><i className="ri-check-double-line"></i><b>Research & Development Projects</b></li>
              <li><i className="ri-check-double-line"></i>Learn Skills with <b>Practical Knowledge</b></li>
              <li><i className="ri-check-double-line"></i>Team Collaboration in a real-work environment</li>
              <li><i className="ri-check-double-line"></i>Industry Tools usage</li>
              <li><i className="ri-check-double-line"></i>Career Guidance & Mentorship from <b>Experts/Mentors</b></li>
              <li><i className="ri-check-double-line"></i>Work experience Letter/Certificate</li>

            </ul>           
          </div>
          <div className="col-lg-6 pt-3 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
              <h4>Eligibility:</h4>
              <ul>
                <li><i className="ri-check-double-line"></i>Education: B.Tech/M.Tech (CS/IT), MCA, equivalent degrees</li>
                <li><i className="ri-check-double-line"></i>Good in programming and computer fundamentals, communication</li>
                <li><i className="ri-check-double-line"></i>Has Built at-least 1 relevant product/project</li>
                <li><i className="ri-check-double-line"></i>Should clear the <b>Screening Assignment/Interview</b> at Hirademy</li>
              </ul>
              <h4>Selection Process:</h4>
              <ul>
                <li><i className="ri-check-double-line"></i>Screening Assignment and Test</li>
                <li><i className="ri-check-double-line"></i>Interview - Cultural Fitment</li>
                <li><i className="ri-check-double-line"></i>Offer Letter to selected candidates</li>
              </ul>
              <button id="getStartedButtonn" onClick={handleClick}>Apply for Software Engineer Internship</button>
          </div>
        </div>
        <br/>
        <h2>Other Interns Roles:</h2>
        <div className="row content" data-aos="fade-left">
          <div className="col-lg-6">
            <ul>
              <li><i className="ri-check-double-line"></i>HR Recruiter</li>
              <li><i className="ri-check-double-line"></i>Product Manager</li>
              <li><i className="ri-check-double-line"></i>Sales Executive</li>
              <li><i className="ri-check-double-line"></i>Marketing</li>
              <li><i className="ri-check-double-line"></i>Content Writer</li>
              <li><i className="ri-check-double-line"></i>and more...</li>
            </ul>
          </div>
          <div className="col-lg-6 pt-3 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
              <h4>Eligibility:</h4>
              <ul>
                <li><i className="ri-check-double-line"></i>Good in communication skills</li>
                <li><i className="ri-check-double-line"></i>Knowledge in Computaer usage</li>
              </ul>
              <h4>Selection Process:</h4>
              <ul>
                <li><i className="ri-check-double-line"></i>Interview - Cultural Fitment</li>
                <li><i className="ri-check-double-line"></i>Offer Letter to selected candidates</li>
              </ul> 
              <button id="getStartedButtonn" onClick={handleButtonClick}>Apply for Other Internship Roles</button>
          </div>
        </div>
      </div>
    </section>
  );
};

Programs.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
};

export default Programs;
