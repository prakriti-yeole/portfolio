import React from 'react'
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import "../styles/home.css";

function Home() {
    return (
        <div className='home'>
            <div className='about'>
                <h2>
                  Hi, I am Prakriti Yeole</h2>
            <div className='prompt'>
               <p> A Web Developer with a passion for learning and creating. </p>
               <div className="socialmedia">
      
      <a href="https://github.com/prakriti-yeole">
      <IconButton>
      <GitHubIcon />
      </IconButton>
    </a>
    <a href="tel:7240889906">
      <IconButton>
      <LocalPhoneIcon />
      </IconButton>
    </a>
    <a href="mailto:syeole170973@gmail.com">
      <IconButton>
      <EmailIcon />
      </IconButton>
    </a>
    <a href="https://www.linkedin.com/in/prakriti-yeole-87b871257/">
      <IconButton>
      <LinkedInIcon />
      </IconButton>
    </a>
       
       
      </div>
               </div>
                
            </div>
<div className='skills'>
<h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, BootStrap, MaterialUI, StyledComponents, NPM
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, MySQL, MongoDB
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python, C++</span>
          </li>
        </ol>
</div>
        </div>
    )
}

export default Home
