import React from "react";
import "./projects.css";
//import Spin from "react-reveal/Spin";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia a
          odit ab, eligendi cupiditate, minima quasi excepturi modi et quo
          delectus, iusto dolor atque aliquam aspernatur eveniet! Ipsam eum
          nobis omnis id voluptatibus quas eos maxime ipsum facere numquam,
          voluptate qui et animi doloribus nulla eius molestiae unde tempore ad
        </p>
        {/* card design */}
        <div className="row" id="ads">
          
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Website</span>
                  <img
                    src="https://static1.pocketlintimages.com/wordpress/wp-content/uploads/152432-games-feature-what-is-valorant-a-guide-to-the-free-to-play-fps-with-tips-on-how-to-win-image3-muha6tfgev.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                      Valorant Profile
                    </h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://sucheta-afk.github.io/valo_web/home.html" 
                    target='_blank' rel='noopener noreferrer'
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Robotics</span>
                  <img
                    src="https://th.bing.com/th/id/OIP.2hKORpo4O_SrYjOPag7osAHaDU?rs=1&pid=ImgDetMain"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">ROS</span>
                  <span className="card-detail-badge">Gazebo</span>

                  <span className="card-detail-badge">LINUX</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Reinforcement Learning</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Sucheta-afk/RL_QLearning"
                    target='_blank' rel='noopener noreferrer'

                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            
          
        </div>
      </div>
    </>
  );
};

export default Projects;
