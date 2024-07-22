import MainSectionStyles from './MainSection.css';
import yogaImage from './path-to-your-image.jpg'; // Update the path to your image

const MainSection = () => {
  return (
    <section className="yoga-wear-section">
      <div className="content">
        <h1>Friendly Music for everyone.</h1>
        <button className="shop-now-btn">Listen Now</button>
      </div>
      <div className="image-container">
        <img src={yogaImage} alt="Yoga" className="yoga-image" />
      </div>
    </section>
  );
};

export default MainSection;

export const links=()=>{
    return [{rel:"stylesheet",href:MainSectionStyles}]
}
