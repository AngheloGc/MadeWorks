import DistrictSelect from '../../components/district_select/district_select.js';
import CategoriesChecklist from '../../components/categories_checklist/categories_checklist.js';
import WorksdoneSlider from '../../components/worksdone_slider/worksdone_slider.js';
//import CalificationChecklist from '../../components/calification_checklist/calification_checklist.js';
import ViewNotification from '../../components/view_notification/view_notification.js';
import JobItem from '../../components/job_item/job_item.js';

import Header from '../../components/header/header';

import './styled.scss';

function Empleos() {

  let categories = [
    'Administración',
    'Call Center',
    'Seguridad',
    'Secretariado',
    'Digitación',
    'Televenta',
    'Educación',
    'Marketing',
    'Prácticas',
    'Otros'
  ];

  return (

    <>
      <Header />
      <div className="Empleos">
        <div className="Empleos_Content">
          <div className="Empleos_Content_Sidebar">
            <div className="Empleos_Content_Sidebar_Wrapper">
              <DistrictSelect text='Ofertas'/>
              <CategoriesChecklist categories={categories} />
              <WorksdoneSlider title='Expectativa salarial' step={100} min={0} max={5000} default={1200}/>   
            </div>
          </div>
          <div className="Empleos_Content_Main">
            <ViewNotification text='[TotalEmpleos]'/>
            <div className="Empleos_Content_Items">
              <JobItem />
              <JobItem />
              <JobItem />
              <JobItem />
              <JobItem />
              <JobItem />
              <JobItem />
              <JobItem />
              <JobItem />
              <JobItem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Empleos;