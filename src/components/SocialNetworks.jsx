import {FaLinkedinIn, FaGithub, FaInstagram} from "react-icons/fa"

import '../styles/components/socialnetworks.sass'

const socialnetworks = [

    {name: "linkedin" ,link:"https://www.linkedin.com/in/gabrielvelosoandrade/" ,icon: <FaLinkedinIn/>} ,
    {name: "github" , link:"https://github.com/Veloso-dev" ,icon: <FaGithub/>} ,
    {name: "instagram" ,link:"https://www.instagram.com/gabriel_oveloso_/" , icon: <FaInstagram/>}

]




function  SocialNetworks  ()  {
  return (
    <section id="social-networks">
        {socialnetworks.map((network) => (
          
            <a  href={network.link} className="social-btn" id={network.name} key={network.name} target="_blank">
                {network.icon}
            </a>

            

        ))}


    </section>
  )
}

export default SocialNetworks