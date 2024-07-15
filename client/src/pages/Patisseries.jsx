import { useEffect, useState } from "react";
import axios from "axios";

function Patisseries() {
  const API_URL = import.meta.env.VITE_API_URL;
  console.log("voir mon API:", API_URL)

  const [patisseries, setPatisseries] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/products`)
      .then((results) => {
        setPatisseries(results.data);
      })
      .catch((err) => console.info(err));
  }, [API_URL]);

  return (
    <>
      <section>
        <h1>PATISSERIES</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          possimus aliquam in quae dolores eius odio odit porro quam maxime, cum
          expedita officia sed molestiae dignissimos repudiandae? Enim, fugiat
          quo.
        </p>
      </section>
      <section>
        <p>LISTE DES PATISSERIES</p>
        {patisseries.map((patisserie) => (
          <p key={patisserie.id}>{patisserie.name}
          {patisserie.price}€</p>
        ))}
      </section>
    </>
  );
}

export default Patisseries;
