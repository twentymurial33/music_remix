import ImageSectionStyles from './ImageSection.css';
import yogaImage from './path-to-your-image.jpg'; 

const ImageSection = () => {
  return (
    <section className="main-section">
      <div className="main-content">
        <h1>Friendly Music for everyone.</h1>    
      </div>
      <div >
       <h1> Hello</h1>
      </div>
    </section>
  );
};

export default ImageSection;

export const links=()=>{
    return [{rel:"stylesheet",href:ImageSectionStyles}]
}
