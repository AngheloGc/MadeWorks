import Header from '../../components/header/header.js';
import MainBanner from '../../components/main_banner/main_banner.js';
import MainFooter from '../../components/main_footer/main_footer.js';


function HomePage() {
  return (
    <div className="HomePage">
      <Header />
      <MainBanner />
      <MainFooter />
    </div>
  );
}

export default HomePage;