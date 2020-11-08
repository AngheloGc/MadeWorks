import './styled.scss';
import Category from './category.js';

function CategoriesChecklist(props) {
    return (
      <div className="CategoriesChecklist">
        <h5>Categorías</h5>
        <hr />
        <div className="CategoriesChecklist_Items">
          {props.categories.map(item => <Category type={item} />)}
        </div>
      </div>
    );
  }
  
  export default CategoriesChecklist;