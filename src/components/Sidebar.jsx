import Avatar from "../img/jackson.png";

import "../styles/components/sidebar.sass";
import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./informationContainer";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Jackson Cruciol" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">Downloader Currículo</a>
    </aside>
  )
}

export default Sidebar