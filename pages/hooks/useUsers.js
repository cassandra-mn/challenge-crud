import axios from "axios";
import ApiService from "../services/ApiService.js";
import { useEffect, useState } from "react";

export default function useUsers(req, res) {
  const [users, setUsers] = useState();
  const [hobbies, setHobbies] = useState();
  const [states, setStates] = useState();
  const [cities, setCities] = useState();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [user, setUser] = useState();
  const [data, setData] = useState({
    name: "",
    email: "",
    state: "",
    city: "",
    hobbies: [],
  });

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
    ApiService.get("/user")
      .then((response) => setUsers(response.data))
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

    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((response) => {
        setStates(response.data);
      })
      .catch((e) => {
        console.log(e);
        alert("Houve um erro");
      });
  }, []);

  function selectState(e) {
    setData({ ...data, state: e.value });
    getCity(e.value);
  }

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

  function selectCity(e) {
    setData({ ...data, city: e.value });
  }

  function newContact() {
    axios
      .post("http://localhost:5000/user", data)
      .then(() => {
        alert("Contato criado!");
        window.location.reload();
      })
      .catch((e) => {
        alert(e.response.data);
      });
  }

  function insertHobbies(list) {
    list.forEach((hobby) => {
      setData({ ...data, hobbies: [...data.hobbies, hobby.value] });
    });
    console.log(data);
  }

  function editContact(contact) {}

  function deleteContact(id) {
    const confirmation = window.confirm("Tem certeza que deseja excluir esse contato?");
    if (confirmation) {
      ApiService.delete(`/user/${id}`)
      .then((response) => {
        alert("Contato deletado!");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        alert("Houve um erro");
      });
    }
  }

  function findByEmail() {
    const user = users.find((user) => user.email === email);
    if (user) {
      setUser(user);
      alert("Encontrei um usuário!");
      console.log(user);
    } else {
      alert("Usuário não encontrado!");
    }
    setEmail("");
  }

  return {
    users,
    data,
    setData,
    statesFormated,
    selectState,
    citiesFormated,
    selectCity,
    hobbiesFormated,
    insertHobbies,
    newContact,
    open,
    setOpen,
    editContact,
    deleteContact,
    email,
    setEmail,
    findByEmail,
    user
  };
}
