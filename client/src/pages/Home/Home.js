import React from 'react';
import './home.css';
import Typewriter from 'typewriter-effect';


const Home = () => {
  return (
    <>
      <div className='container-fluid home-container' id="home">
        <div className='container home-content'>
          <h2>
            Hi, I'm a
          </h2>
          <h1>
          <Typewriter
  options={{
    strings: ['Web Developer !', 'AIML Student !', 'Singer !','Dancer !'],
    autoStart: true,
    loop: true,
  }}
/>
          </h1>
          <div className='home-buttons'>
            <button className='btn btn-hire'>Hire Me</button><t></t>
            <a className='btn btn-cv' href='https://docs.google.com/document/d/1nArNJtx6r-3ZjNtWB_Hn9xyKwpa7Hs1yXmd17Fvyna8/edit?usp=sharing' target='_blank'  rel="noreferrer">My Resume</a>

          </div>
        </div>
      </div>
        
    </>
  );
};

export default Home