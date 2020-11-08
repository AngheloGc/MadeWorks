import MapIcon from '../../assets/map-icon.png';

import './styled.scss';

function DistrictSelect(props) {
    return (
      <div className="DistrictSelect">
        <p><img src={MapIcon} alt='Distrito' /> <h4>{props.text} cerca de</h4></p>
        <form>
          <select>
            <option>[Distrito]</option>
          </select>
        </form>
      </div>
    );
  }
  
  export default DistrictSelect;