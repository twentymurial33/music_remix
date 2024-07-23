import MainSectionStyles from './MainSection.css';


  const genres = [
  { name: 'Rock', url: '/music/rock.mp3' },
  { name: 'Jazz', url: '/music/jazz.mp3' },
  { name: 'Classical', url: '/music/classical.mp3' },
  { name: 'Electronic', url: '/music/electronic.mp3' },
 
];
const MainSection = () => {
  const [audio, setAudio] = useState(null);

  const playRandomGenre = () => {
    if (audio) {
      audio.pause();
      setAudio(null);
    }
    const randomGenre = genres[Math.floor(Math.random() * genres.length)];
    const newAudio = new Audio(randomGenre.url);

    newAudio.play();
    setAudio(newAudio);
  };
  return (
    <section className="yoga-wear-section">
      <div className="content">
        <h1>Friendly Music & Workouts.</h1>
        <button className="shop-now-btn" onClick={playRandomGenre}>Listen Now</button>
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
