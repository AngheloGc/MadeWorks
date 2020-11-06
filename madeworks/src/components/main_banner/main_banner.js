import Searcher from '../../components/searcher/searcher';

import './styled.scss';

function MainBanner() {
    return (
      <div className="Main_Banner">
        <h1>Busca un trabajo bien hecho</h1>
        <Searcher />
      </div>
    );
  }
  
  export default MainBanner;