import LikeIcon from '../../assets/like-icon.png';
import DefaultImage from '../../assets/default-image.png';

import './styled.scss';

function PostItem() {
    return (
      <div className="PostItem">
        <img className="PostItem_Image"src={DefaultImage} alt='Anuncio'/>
        <div className="PostItem_Content">
          <h2>[TituloAnuncio]</h2>
          <p>por <b>[NombreWorker]</b></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae massa in leo posuere rutrum. Sed finibus, nibh ut suscipit elementum, tortor risus efficitur nisi, a venenatis turpis mauris sed nibh. Nulla ut libero malesuada, facilisis ante. </p>
          <div className="PostItem_Content_Footer">
            <span>[TrabajosRealizados] trabajos realizados</span>
            <div className="PostItem_Content_Footer_Calification"> 
              <img src={LikeIcon} alt='Aprobación' />
              <span>[PorcentajeAprobacion] % de aprobación</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default PostItem;