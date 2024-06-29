import { Image } from "cloudinary-react";

function Landing() {
  const generateImageURL = (img) => {
    return (
      "https://res.cloudinary.com/dac1at79b/image/upload/c_fill,w_700/" + img
    );
  };

  return (
    <div>
      <Image src={generateImageURL(data.img)} alt="cloudinary" />
    </div>
  );
}

export default Landing;
