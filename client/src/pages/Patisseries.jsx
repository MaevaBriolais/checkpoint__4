import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../styles/Patisseries.css";

function Patisseries() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [patisseries, setPatisseries] = useState([]);
  const [flavorFilter, setFlavorFilter] = useState("");

  useEffect(() => {
    axios
      .get(`${API_URL}/api/products`)
      .then((results) => {
        setPatisseries(results.data);
      })
      .catch((err) => console.info(err));
  }, [API_URL]);

  const filteredPatisseries = flavorFilter
  ? patisseries.filter(patisserie => patisserie.flavor === flavorFilter)
  : patisseries;

  return (
    <section className="patisseries">
      <section className="patisserieFirst">
        <div className="containerPatisserie">
        <h2>PATISSERIES</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          possimus aliquam in quae dolores eius odio odit porro quam maxime, cum
          expedita officia sed molestiae dignissimos repudiandae? Enim, fugiat
          quo.
        </p>
        </div>
      </section>
      <section className="patisserieSecond">
        <div className="flavor-filter">
          <select
            id="flavor"
            value={flavorFilter}
            onChange={(e) => setFlavorFilter(e.target.value)}
          >
            <option value="">Toutes les saveurs</option>
            <option value="Agrumes">Agrumes</option>
            <option value="Chocolat">Chocolat</option>
            <option value="Gourmand">Gourmand</option>
          </select>
        </div>

        {filteredPatisseries.map((patisserie, index) => (
          <section
            key={patisserie.id}
            className={`patisserieIndiv ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <img src={patisserie.icon} alt="Patisserie" />
            <Link to={`/patisseries/${patisserie.id}`} className="link">
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