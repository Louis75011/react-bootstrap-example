import { useEffect, useRef, useState } from "react";
import useLoadData from "../../../hooks/loadData";
import Title from "../../UI/titles/Title";
import ButtonOutline from "../../UI/buttons/ButtonOutline";

const Formations = () => {
  const [formations, setFormations] = useLoadData();
  const [category, setCategory] = useState("all");
  const isMounted = useRef(false); // pour changer au changement de categorie et jamais au montage
  // console.log({formations});
  // console.log(category);

  useEffect(() => {
    setFormations("https://dev.h2prog.com/API_TEST/formations");
  }, []); // [] agit au montage du composant

  useEffect(() => {
    if (isMounted.current) {
      if (category !== "all") {
        setFormations("https://dev.h2prog.com/API_TEST/formations/" + category);
      } else {
        setFormations("https://dev.h2prog.com/API_TEST/formations");
      }
    }
  }, [category]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return (
    <div>
      <Title text="Liste des cours de H2PROG" />

      <p className="fw-bold text-decoration-underline text-uppercase text-center">
        Recherche par catégories :
      </p>
      <div className="d-flex justify-content-center shadow">
        <ButtonOutline click={() => setCategory("all")}>Tous</ButtonOutline>
        <ButtonOutline click={() => setCategory("PHP")}>PHP</ButtonOutline>
        <ButtonOutline click={() => setCategory("JavaScript")}>
          JavaScript
        </ButtonOutline>
        <ButtonOutline click={() => setCategory("Algorithmique")}>
          Algorithmique
        </ButtonOutline>
        <ButtonOutline click={() => setCategory("SQL")}>SQL</ButtonOutline>
        <ButtonOutline click={() => setCategory("Bureautique")}>
          Bureautique
        </ButtonOutline>
        <ButtonOutline click={() => setCategory("Frogans")}>
          Frogans
        </ButtonOutline>
        <ButtonOutline click={() => setCategory("Wordpress")}>
          Wordpress
        </ButtonOutline>
      </div>

      <table className="m-4">
        <thead>
          <tr className="text-center">
            <th>Identifiant</th>
            <th>Libellé</th>
            <th>Description</th>
            <th>Catégorie</th>
            <th>Image</th>
          </tr>
        </thead>

        <tbody>
          {formations &&
            formations.map((formation) => {
              return (
                <tr key={formation.id} className="text-center border">
                  <td style={{ color: "red", width: "10%" }}>{formation.id}</td>
                  <td className="w-25">{formation.libelle}</td>
                  <td className="w-50">{formation.description}</td>
                  <td className="w-25 font-weight-bold">
                    {formation.categorie}
                  </td>
                  <td className="w-25">
                    <img
                      src={formation.image}
                      alt={formation.image}
                      width="100px"
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Formations;
