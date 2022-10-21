import { useState } from "react";
import axios from "axios";

export default function useLoadData() {
  // personnal hook
  const [data, setData] = useState(null);

  const loadData = (route) => {
    axios
      .get(route)
      .then((response) => {
        setData(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return [data, loadData];
}

// JSON EXAMPLE :
// categorie: "PHP"
// description: "9 heures de pratique de PHP avec PHP Data Objects (PDO), Bootstrap, MySQL, et la Programmation Orientée Objets (POO)"
// id : "8"
// image: "https://dev.h2prog.com/API_TEST/images/cours/cours3.png"
// libelle: "Maîtrisez PHP et devenez autonome en programmation web"
// lien: "https://ecole.h2prog.com/p/le-langage-php"
