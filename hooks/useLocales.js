import { useEffect, useState } from "react";
import ApiService from "../config/ApiService";
import axios from "axios";

export default function useLocales(req, res) {
  const [states, setStates] = useState();
  const [cities, setCities] = useState();
  const [hobbies, setHobbies] = useState();

  const statesFormated = states?.map((state) => {
    return {
      value: state.sigla,
      label: state.nome,
    };
  });

  const citiesFormated = cities?.map((city) => {
    return {
      value: city.nome,
      label: city.nome,
    };
  });

  const hobbiesFormated = hobbies?.map((hobby) => {
    return {
      value: hobby.hobby,
      label: hobby.hobby,
    };
  });

  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((response) => {
        setStates(response.data);
      })
      .catch((e) => {
        console.log(e);
        alert("Houve um erro");
      });

    ApiService.get("/hobbies")
      .then((response) => {
        setHobbies(response.data);
      })
      .catch((e) => {
        console.log(e);
        alert("Houve um erro");
      });
  }, []);

  function getCity(UF) {
    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`
      )
      .then((response) => {
        setCities(response.data);
      })
      .catch((e) => {
        console.log(e);
        alert("Houve um erro");
      });
  }

  return {
    hobbiesFormated,
    statesFormated,
    citiesFormated,
    getCity,
  };
}
