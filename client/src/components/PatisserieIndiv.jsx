import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PatisserieIndiv() {
  const { id } = useParams();
  const API_URL = import.meta.env.VITE_API_URL;

  const [patisseries, setPatisseries] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/products`)
      .then((response) => {
        const patisseries = response.data.find(
          (patisserie) => patisserie.id === parseInt(id)
        );
        setPatisseries(patisseries);
      })
      .catch((err) => console.info(err));
  }, [API_URL, id]);

  if (!patisseries) {
    return null;
  }

  const { name, description, price, allergen } = patisseries;

  return (
    <>
      <h1>{name}</h1>
      <p>{description}</p>
      <h2>ALLERGENES</h2>
      <p>{allergen}</p>
      <section>MODE DE LIVRAISON</section>
      <p>{price}€</p>
    </>
  );
}

export default PatisserieIndiv;
