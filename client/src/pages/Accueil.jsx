import Avatar1 from "../assets/images/Avatar1.png"
import video from "../assets/video.mov"
import "../styles/Accueil.css"

import { useEffect, useRef } from 'react';


function Accueil() {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    //Dclenchement de la vidéo automatique
    const playVideo = () => {
      videoElement.play();
    };

    const handleEnded = () => {
      if (videoElement.loop || videoElement.playbackCount < 2) {
        videoElement.playbackCount = (videoElement.playbackCount || 0) + 1;
        videoElement.play();
      }
    };
    videoElement.addEventListener('ended', handleEnded);

    return () => {
      videoElement.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <>
      <header>
        <h1>Tarte au citron, noisette</h1>
        <video ref={videoRef} width="400" height="280" autoPlay loop>
          <source src={video} type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      </header>
      <main>
        <h2>NOTRE CHEF PATISSIER</h2>
        <h3>Oscar MOLIN</h3>
        <img src={Avatar1} alt="avatar de patissier" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
          dolorum iure officia accusantium tenetur sit numquam amet commodi!
          Eaque, adipisci minus earum ipsam reprehenderit dignissimos ipsum
          consequuntur rem at! Beatae!
        </p>
      </main>
    </>
  );
}

export default Accueil;