import React from 'react';

const InternshipSection = () => {
  return (
    <section id="Internship" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Internship program</h2>
          <p></p>
        </div>
        
        <div className="row content">
          <div className="col-lg-6">
            <h4>Features:</h4>
            <ul>
              <li><i className="ri-check-double-line"></i>Gain <b>Real-product</b> Work experience</li>
              <li><i className="ri-check-double-line"></i>Product <b>Research & Development</b></li>
              <li><i className="ri-check-double-line"></i>Learn Top-notch Technologies with <b>Practical Knowledge</b></li>
              <li><i className="ri-check-double-line"></i>Team Collaboration in a real-work environment</li>
              <li><i className="ri-check-double-line"></i>Network with Tech leaders and co-engineers</li>
              <li><i className="ri-check-double-line"></i>Industry Tools usage</li>
              <li><i className="ri-check-double-line"></i>Work Experience Letter & LoR</li>
              <li><i className="ri-check-double-line"></i><b>Placements</b> offered at Hirademy</li>
            </ul>
          </div>
          <div className="col-lg-6 pt-3 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
            <h4>Eligibility:</h4>
            <ul>
              <li><i className="ri-check-double-line"></i>Education: B.Tech/M.Tech (CS/IT), MCA, equivalent degrees</li>
              <li><i className="ri-check-double-line"></i>Good in programming and computer fundamentals</li>
              <li><i className="ri-check-double-line"></i>Built at-least 1 relevant product/project</li>
              <li><i className="ri-check-double-line"></i>Should clear the <b>Screening Assignment/Interview</b> at Hirademy</li>
            </ul> 
            <h4>Duration: 2-10 months</h4>
            <button id="getStartedButtonn">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const MentorshipSection = () => {
  return (
    <section id="Mentorship" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Mentorship program</h2>
          <p></p>
        </div>
  
        <div className="row content">
          <div className="col-lg-6">
            <h4>Features:</h4>
            <ul>
              <li><i className="ri-check-double-line"></i>Role based Curriculum for Interested Role</li>
              <li><i className="ri-check-double-line"></i>Technical Guidance for Interested Technology Stack</li>
              <li><i className="ri-check-double-line"></i>Programming with DS & Algorithms</li>
              <li><i className="ri-check-double-line"></i>System Design and Architecture</li>
              <li><i className="ri-check-double-line"></i>Assignments and Discussions</li>
              <li><i className="ri-check-double-line"></i>Career Guidance & Mentorship from <b>Experts/Mentors</b></li>
              <li><i className="ri-check-double-line"></i>Resume & Interview Preparation</li>
              <li><i className="ri-check-double-line"></i>Guaranteed <b>Placements</b></li>
              <li><i className="ri-check-double-line"></i>Support for <b>1 year</b></li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <h4>Eligibility:</h4>
            <ul>
              <li><i className="ri-check-double-line"></i>Education: B.tech, M.tech, MCA or equivalent degree</li>
              <li><i className="ri-check-double-line"></i>Good in programming and computer fundamentals</li>
            </ul>
            <h4>Pricing: Contact Us</h4>
            <h4>Duration: Flexible (1-3 months)</h4>
            <h5><b>Free Bonus</b>: Eligible for Internship without Screening process</h5>
            <button id="getStartedButtonn1">Get Started</button>
          </div>
        </div>
  
      </div>
    </section>
  );
};

export { InternshipSection, MentorshipSection };
