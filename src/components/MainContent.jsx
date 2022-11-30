import  '../styles/components/maincontent.sass';
import AbountContaine  from './AbountContainer';
import TecnologiasContainer from './TecnologiasContainer';
import ProjetosContainer from './ProjetosContaine';

const MainContent = () => {
  return (
    <main id="main-content">
      <AbountContaine />
      <TecnologiasContainer />
      <ProjetosContainer />
    </main>
  )
}

export default MainContent