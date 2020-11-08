function Category(props) {
    return (
      <div className="Category">
        <input type="checkbox" name={props.type} value={props.type} /><label>{props.type}</label>
      </div>
    );
  }
  
  export default Category;