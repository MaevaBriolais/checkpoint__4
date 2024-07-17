import { useEffect, useRef } from "react";
import "../styles/Accueil.css";

import video from "../assets/video.mov";
import Avatar1 from "../assets/images/Avatar1.png";

function Accueil() {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleEnded = () => {
      if (videoElement.loop || videoElement.playbackCount < 2) {
        videoElement.playbackCount = (videoElement.playbackCount || 0) + 1;
        videoElement.play();
      }
    };
    videoElement.addEventListener("ended", handleEnded);

    return () => {
      videoElement.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <section className="sectionAccueil">
      <header className="box-video">
        <video ref={videoRef} autoPlay loop>
          <source src={video} type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>

        <h1>TARTE AU CITRON NOISETTE</h1>
      </header>
      <main className="sectionChef">
        <h2>NOTRE CHEF PATISSIER</h2>
        <h3>Oscar MOLIN</h3>
        <section>
          <img src={Avatar1} alt="avatar de patissier" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
            dolorum iure officia accusantium tenetur sit numquam amet commodi!
            Eaque, adipisci minus earum ipsam reprehenderit dignissimos ipsum
            consequuntur rem at! Beatae!
          </p>
        </section>
      </main>
    </section>
  );
}

export default Accueil;
