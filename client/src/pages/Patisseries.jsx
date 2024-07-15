import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/Patisseries.css";
import { Link } from "react-router-dom";

function Patisseries() {
  const API_URL = import.meta.env.VITE_API_URL;

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
    <section className="patisseries">
      <section className="patisserieFirst">
        <h1>PATISSERIES</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          possimus aliquam in quae dolores eius odio odit porro quam maxime, cum
          expedita officia sed molestiae dignissimos repudiandae? Enim, fugiat
          quo.
        </p>
      </section>
      <section className="patisserieSecond">
        <p>LISTE DES PATISSERIES</p>

        {patisseries.map((patisserie, index) => (
      
          <section
            key={patisserie.id}
            className={`patisserieIndiv ${index % 2 === 0 ? "left" : "right"}`}
          >
          <Link to={`/patisseries/${patisserie.id}`}>
            <img src={patisserie.icon} alt="Patisserie" />
            <p>
              <span className="name">{patisserie.name}</span>
              <span className="price">{patisserie.price}€</span>
            </p>
          </Link>
          </section>
        
        ))}
      </section>
    </section>
  );
}

export default Patisseries;
