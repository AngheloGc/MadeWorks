import DistrictSelect from '../../components/district_select/district_select.js';
import CategoriesChecklist from '../../components/categories_checklist/categories_checklist.js';
import WorksdoneSlider from '../../components/worksdone_slider/worksdone_slider.js';
//import CalificationChecklist from '../../components/calification_checklist/calification_checklist.js';
import ViewNotification from '../../components/view_notification/view_notification.js';
import PostItem from '../../components/post_item/post_item.js';

import Header from '../../components/header/header';

import './styled.scss';

function Anuncios() {

  let categories = [
    'Carpintería',
    'Electricidad',
    'Zapatería',
    'Gasfitería',
    'Costurería',
    'Pastelería',
    'Servicios del Hogar',
    'Mecánica',
    'Otros'
  ];

  return (
    <>
      <Header />
      <div className="Anuncios">
        <div className="Anuncios_Content">
          <div className="Anuncios_Content_Sidebar">
            <div className="Anuncios_Content_Sidebar_Wrapper">
              <DistrictSelect text='Workers'/>
              <CategoriesChecklist categories={categories} />
              <WorksdoneSlider title='Trabajos realizados' step={10} min={0} max={250} default={50}/>   
            </div>
          </div>
          <div className="Anuncios_Content_Main">
            <ViewNotification text='[TotalAnuncios]'/>
            <div className="Anuncios_Content_Items">
              <PostItem />
              <PostItem />
              <PostItem />
              <PostItem />
              <PostItem />
              <PostItem />
              <PostItem />
              <PostItem />
              <PostItem />
              <PostItem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Anuncios;