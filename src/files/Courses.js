import React from 'react';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/project.css";

import JavaFullStack from "./images/Full-Stack-Java-Training.png";
import MearnStackDevelopment from "./images/MERN-STACK-DEVELOPMENT.jpg";
import Testing from "./images/SoftwareTestingCourses.jpeg";

// Reuse a dummy image for other courses or add your own
import Placeholder from "./images/image 1.png";

export default function Certification() {
  function CoursesSearching() {
    const search = document.getElementById('Search');
    if (search.value === "Hello") {
      console.log("Hello world");

    }

  }

  return (
    <div className="container text-center py-5" id="projects">
      <br />
      <br />

      {/* <div className="container">
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">Search Courses</span>
          <input type="text" className="form-control" aria-label="Sizing example input" id='Search' onKeyDown={(e) => {
            if (e.key === 'Enter') {
              console.log("Enter pressed with value:", e.target.value);
              CoursesSearching();
            }
          }} placeholder='Enter The Course Name' aria-describedby="inputGroup-sizing-default" />
        </div>
      </div> */}

      <div id='SearchForCourses'>
        <nav className="navbar" style={{ backgroundColor: "#e3f2fd" }} data-bs-theme="light">

          <div className="container text-center d-flex flex-column">
            {/* Brand Title */}
            <span className="navbar-brand mb-2 h1">Search For Your Dezaire Courses</span>

            {/* Navigation Links */}
            <ul className="nav justify-content-center mb-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Web Development</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">AI Development</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" >Softskills</a>
              </li>
            </ul>

            {/* Search Bar */}
            <div className="input-group w-50">
              <input
                type="text"
                className="form-control"
                placeholder="Search Courses"
                aria-label="Search Courses"
                aria-describedby="button-search"
              />
              <button className="btn btn-outline-primary" type="button" id="button-search">
                Search
              </button>
            </div>
          </div>
        </nav>



      </div>









      <h3 className="text-center text-success fw-bold my-4">
        🚀 Start With Our Most Popular Courses 📚
      </h3>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/* Course Cards */}
        {[
          {
            img: JavaFullStack,
            title: "👨‍💻 Java FullStack Developer",
            desc: "Build cloud-ready Java apps with Spring Boot & Angular.",
          },
          {
            img: MearnStackDevelopment,
            title: "🌐 MERN Stack Web Development",
            desc: "Master MongoDB, Express.js, React, and Node.js.",
          },
          {
            img: Testing,
            title: "🧪 Software Testing (Manual + Automation)",
            desc: "Start with manual, level up with Selenium & Java.",
          },
          {
            img: Placeholder,
            title: "📱 Android App Development",
            desc: "Learn Java & Kotlin to build real Android apps.",
          },
          {
            img: Placeholder,
            title: "💼 Data Structures & Algorithms",
            desc: "Crack interviews with DSA in C++/Java.",
          },
          {
            img: Placeholder,
            title: "🧠 Python for Data Science",
            desc: "Master Pandas, Numpy, Matplotlib, and Machine Learning.",
          },
          {
            img: Placeholder,
            title: "📊 Power BI for Data Analysis",
            desc: "Visualize and analyze data using Power BI tools.",
          },
          {
            img: Placeholder,
            title: "🖥️ Web Design with HTML/CSS & Bootstrap",
            desc: "Start your frontend journey with clean designs.",
          },
          {
            img: Placeholder,
            title: "🚀 DevOps with CI/CD",
            desc: "Automate software delivery using Jenkins, Docker, Kubernetes.",
          },
          {
            img: Placeholder,
            title: "📡 Networking Basics",
            desc: "Understand IP, TCP, OSI, and core network protocols.",
          },
          {
            img: Placeholder,
            title: "🔐 Cybersecurity Essentials",
            desc: "Learn ethical hacking and system security basics.",
          },
          {
            img: Placeholder,
            title: "🧑‍🎓 Aptitude + Interview Preparation",
            desc: "Sharpen logic, communication & HR round skills.",
          },
        ].map((course, index) => (
          <div className="col" key={index}>
            <div className="card h-100">
              <img src={course.img} className="card-img-top" alt={course.title} />
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.desc}</p>
                <Link to="/Courses" className="btn btn-primary">✅ Enroll For Free</Link>
              </div>
              <div className="card-footer">
                <small className="text-muted">🕒 Updated just now</small>
              </div>
            </div>
          </div>
        ))}
      </div>

      <br />

      <div className="card text-center">
        <div className="card-header bg-success text-white">
          📢 New Courses Just Launched!
        </div>
        <div className="card-body">
          <h5 className="card-title">Explore Fresh, In-Demand Courses</h5>
          <p className="card-text">
            Discover a range of updated courses tailored to help you grow your career—whether you're a beginner or looking to upskill.
          </p>
          <Link to='/Courses' className="btn btn-success">Browse Courses</Link>
        </div>
        <div className="card-footer text-muted">
          Updated Just Now
        </div>
      </div>
    </div>
  );
}
