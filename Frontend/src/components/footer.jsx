import React from 'react'
import './footer.css'
const Footer = () => {

   let newdate= new Date();

  return (
    <div className="footer">
      Created by Kameshwar &copy; {newdate.getFullYear()} 
      <br></br>
      <div className="followme">


      Follow me on
    
      <div className="follow-links">

        <a href="https://www.linkedin.com/in/annigandla-kameshwara-rao/" target="_blank" title="LinkedIn" className="footer-icon">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" width="22" class="footer-icon"></img>
        </a>
        <a href="https://github.com/AnnigandlaKameshwaraRao" target="_blank" title="GitHub" className="footer-icon">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" alt="GitHub" width="22" class="footer-icon"></img>
        </a>
        <a href="https://www.instagram.com/kameshwara_rao_/" target="_blank" title="Instagram" className="footer-icon">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" width="22" class="footer-icon"></img>
        </a>
      </div>
      </div>
    </div>
  )
}

export default Footer