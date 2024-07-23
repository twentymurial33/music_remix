import ImageSectionStyles from './ImageSection.css';
import music from "../components/assets/images/music.jpg";
import workout from "../components/assets/images/workout.jpg";
import hacking from "../components/assets/images/hacking.jpg";

const ImageSection = () => {
  return (
    <div className="mycontainer">
  <div>
    <img src={workout} width={300} height={220} alt="workout" style={{marginTop:'10px',marginLeft:'300px'}}/>
  </div>
  <div>
    <img src={music} width={300} height={220} alt="music" style={{marginTop:'10px',marginLeft:'260px'}} />
  </div>
  {/* <div>
    <img src={hacking} width={300} height={220} alt="hacking" style={{marginTop:'10px',marginLeft:'20px'}}/>
  </div> */}

</div>
  );
};

export default ImageSection;

export const links=()=>{
    return [{rel:"stylesheet",href:ImageSectionStyles}]
}
