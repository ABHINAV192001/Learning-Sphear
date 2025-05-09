import React from 'react';
import { Link } from "react-router-dom";
import image from "./images/image 1.png";
import JavaFullStack from "./images/Full-Stack-Java-Training.png";
import MearnStackDevelopment from "./images/MERN-STACK-DEVELOPMENT.jpg";
import Testing from "./images/SoftwareTestingCourses.jpeg";


export default function Home() {
  return (
    <div className="container-fluid p-0">
      <div className="container d-flex flex-column align-items-center justify-content-center vh-100" id="home">
        <br /><br /><br /><br />
        <div className="hero d-flex align-items-center justify-content-center">
          <div className="row w-100">
            <div className="col-md-6 d-flex flex-column justify-content-center p-5">
              <h3 className="text-success">Welcome to Learning Sphear</h3>
              <h1 className="fw-bold">Elevate Your Skills to New Heights</h1>
              <p className="text-muted">Become a Software Developer or Software Engineer.</p>
              <p>
                Hi, I'm Abhinav Sahu! This website was built using cutting-edge technologies like React.js, JavaScript, HTML, CSS, and Bootstrap to provide an exceptional learning experience.
              </p><Link to="/Courses" className="btn btn-success">Browse Courses</Link>

            </div>
            <div className="col-md-6 text-center">
              <img src={image} width="400vh" alt="Abhinav Sahu" className="profile-img" />
            </div>
          </div>
        </div>
      </div>


      <div className="container">
        {/* other */}
        <h3 className="text-center text-success fw-bold my-4">
          🚀 Start With Our Most Popular Courses 📚
        </h3>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* Java Full Stack Course */}
          <div className="col">
            <div className="card h-100">
              <img src={JavaFullStack} className="card-img-top" alt="Java FullStack" />
              <div className="card-body">
                <h5 className="card-title">👨‍💻 Java FullStack Developer Specialization</h5>
                <p className="card-text">
                  Build dynamic, cloud-ready web applications with Java. Master core Java, Angular for responsive UIs, and Spring Boot for robust backend development in this all-in-one course.
                </p>
                <Link to="/Courses" className="btn btn-primary">✅ Enroll For Free</Link>
              </div>
              <div className="card-footer">
                <small className="text-muted">🕒 Last updated 3 minutes ago</small>
              </div>
            </div>
          </div>

          {/* MERN Stack Course */}
          <div className="col">
            <div className="card h-100">
              <img src={MearnStackDevelopment} className="card-img-top" alt="MERN Stack" />
              <div className="card-body">
                <h5 className="card-title">🌐 MERN Stack Web Development</h5>
                <p className="card-text">
                  Learn to build full-stack applications using MongoDB, Express.js, React, Redux, and Node.js. This course covers everything from front-end to back-end with real-world projects.
                </p>
                <Link to="/Courses" className="btn btn-primary">✅ Enroll For Free</Link>
              </div>
              <div className="card-footer">
                <small className="text-muted">🕒 Last updated 3 minutes ago</small>
              </div>
            </div>
          </div>

          {/* Software Testing Course */}
          <div className="col">
            <div className="card h-100">
              <img src={Testing} className="card-img-top" alt="Software Testing" />
              <div className="card-body">
                <h5 className="card-title">🧪 Software Testing (Manual + Automation)</h5>
                <p className="card-text">
                  Learn Manual Testing fundamentals and advance to Automation Testing with Java and Selenium. Perfect for beginners and QA aspirants aiming to work on real-time testing projects.
                </p>
                <Link to="/Courses" className="btn btn-primary">✅ Enroll For Free</Link>
              </div>
              <div className="card-footer">
                <small className="text-muted">🕒 Updated a few minutes ago</small>
              </div>
            </div>
          </div>
        </div>
        <br />



        <div class="card text-center">
          <div class="card-header bg-success text-white">
            📢 New Courses Just Launched!
          </div>
          <div class="card-body">
            <h5 class="card-title">Explore Fresh, In-Demand Courses</h5>
            <p class="card-text">
              Discover a range of updated courses tailored to help you grow your career—whether you're a beginner or looking to upskill.
            </p>
            <Link to='/Courses' class="btn btn-success">Browse Courses</Link>
          </div>
          <div class="card-footer text-muted">
            Updated Just Now
          </div>
        </div>



      </div>




    </div>
  );
}
