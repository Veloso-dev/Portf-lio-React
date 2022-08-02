import SocialNetworks from './SocialNetworks'
import Avatar from '../img/eu.jpeg' 
import InformationContainer from './informationContainer'



import "../styles/components/sidebar.sass"





const Sidebar = () => {
  return (
   <aside id="sidebar">
    <img src={Avatar} alt="Gabriel" />
    <p className="title">Desenvolvedor</p>
    <SocialNetworks/>
    <InformationContainer/>
    
    
    

    <a href="https://drive.google.com/file/d/14so5-8BMHkmI5lFTtwAN7gHY4ls4pnd-/view?usp=sharing" 
    className="btn" target="_blank">Download currículo</a>

   </aside>
  )
}

export default Sidebar