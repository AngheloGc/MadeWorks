import LikeIcon from '../../assets/like-icon.png';
import DefaultImage from '../../assets/default-image.png';

import './styled.scss';

function JobItem() {
    return (
      <div className="JobItem">
        <img className="JobItem_Image"src={DefaultImage} alt='Empleo'/>
        <div className="JobItem_Content">
          <h2>[TituloEmpleo]</h2>
          <p>por <b>[NombreEmpresa]</b></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae massa in leo posuere rutrum. Sed finibus, nibh ut suscipit elementum, tortor risus efficitur nisi, a venenatis turpis mauris sed nibh. Nulla ut libero malesuada, facilisis ante. </p>
          <div className="JobItem_Content_Footer">
            <span>[JornadaLaboral]</span>
            <div className="JobItem_Content_Footer_Calification"> 
              <img src={LikeIcon} alt='Aprobación' />
              <span>[PorcentajeReputación] % de reputación</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default JobItem;