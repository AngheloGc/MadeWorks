import MapIcon from '../../assets/map-icon.png';
import PhoneIcon from '../../assets/phone-icon.png';
import MoneyIcon from '../../assets/money-icon.png';
import StarIcon from '../../assets/star-icon.png';

import './styled.scss';

function MainFooter() {
    return (
      <div className="Main_Footer">
        <div className='Main_Footer_Title'>
            <img src={MapIcon} alt='map-icon' />
            <h2>más de [TotalWorkers] colaboran con nosotros en [Distrito]</h2>
        </div>
        <div className='Main_Footer_Actions'>
            <div className='Main_Footer_Actions_Item'>
                <img src={PhoneIcon} alt='phone-icon' />
                <h3>contacta</h3>
            </div>
            <div className='Main_Footer_Actions_Item'>
                <img src={MoneyIcon} alt='money-icon' />
                <h3>cotiza</h3>
            </div>
            <div className='Main_Footer_Actions_Item'>
                <img src={StarIcon} alt='star-icon' />
                <h3>califica</h3>
            </div>
        </div>
      </div>
    );
  }
  
  export default MainFooter;