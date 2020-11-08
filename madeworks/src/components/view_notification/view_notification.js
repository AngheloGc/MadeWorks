import './styled.scss';

function ViewNotification(props) {
    return (
      <div className="ViewNotification">
        <h3>Se muestran {props.text} cerca de tu ubicación</h3>
      </div>
    );
  }
  
  export default ViewNotification;