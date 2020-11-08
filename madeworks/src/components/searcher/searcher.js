import SearchIcon from '../../assets/search-icon.png';

import './styled.scss';

function Searcher() {
    return (
        <form className='Searcher'>
            <input
                type='text'
                placeholder='Carpintería, Zapatería, Costurería, Técnico Electricista y mucho más...'
            />
            <div className='Submit_Button'>
                <img src={SearchIcon} alt='Buscar'/>                
            </div>
        </form>
    );
  }
  
  export default Searcher;