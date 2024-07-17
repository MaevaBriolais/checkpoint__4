import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import allergene from "../assets/images/allergenic.png";
import commerce from "../assets/images/ecommerce.png";
import next from "../assets/images/next.png";
import "../styles/PatisserieIndiv.css";

function PatisserieIndiv() {
  const { id } = useParams();
  const API_URL = import.meta.env.VITE_API_URL;

  const [patisseries, setPatisseries] = useState(null);
  const [ParagraphVisible, setParagraphVisible] = useState(false);

  const toggleParagraphVisibility = () => {
    setParagraphVisible(!ParagraphVisible);
  };

  useEffect(() => {
    axios
      .get(`${API_URL}/api/products`)
      .then((response) => {
        const patisseries = response.data.find(
          (patisserie) => patisserie.id === parseInt(id, 10)
        );
        setPatisseries(patisseries);
      })
      .catch((err) => console.info(err));
  }, [API_URL, id]);

  if (!patisseries) {
    return null;
  }

  const { icon, name, description, price, allergen } = patisseries;

  return (
    <section className="box-0">
      <img src={icon} alt={name} />
      <section className="box-1">
        <h1>{name}</h1>
        <p>{description}</p>
      </section>
      <section className="box-2">
        <button
          onClick={toggleParagraphVisibility}
          type="button"
        >
          <div>
          <img src={allergene} alt="allergène" />
          <h2>ALLERGENES</h2>
          <img src={next} alt="flèche suivante" />
          </div>
        {ParagraphVisible && <p>{allergen}</p>}
        </button>
      </section>
      <section className="box-3">
        <div className="box-3-1">

        <h3>CLICK & COLLECT</h3>
        <div className="box-3-2">
        <img src={commerce} alt="commerce" />
        <p>
          Disponible en Click & Collect à Nancy uniquement sur commande auprès
          de notre chef pâtissier.
        </p>
        </div>
        </div>
      </section>
      <section className="box-4">
      <p>{price}€</p>
      <button type="button">COMMANDER</button>
      </section>
    </section>
  );
}

export default PatisserieIndiv;
