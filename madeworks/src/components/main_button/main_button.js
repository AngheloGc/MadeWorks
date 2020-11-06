import './styled.scss';

function MainButton(props) {
    return (
      <div className="Button_Main">
        <button>{props.text}</button>
      </div>
    );
  }
  
  export default MainButton;