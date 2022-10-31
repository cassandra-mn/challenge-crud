import axios from "axios";
import { useEffect, useState } from "react";
import ApiService from "../services/ApiService.js";

export default function useUsers(req, res) {
  const [users, setUsers] = useState();
  const [data, setData] = useState({
    name: "",
    email: "",
    address: "",
    hobbies: "",
  });

  useEffect(() => {
    ApiService
      .get("/user")
      .then((response) => setUsers(response.data))
      .catch((e) => {
        console.log(e);
        alert("Houve um erro");
      });
  }, []);

  function newContact() {
    axios
      .post("http://localhost:5000/user", data)
      .then(() => {
        alert("Contato criado!");
        clearForm();
      })
      .catch((e) => {
        alert(e.response.data);
      });
  }

  function clearForm() {
    setData({
      email: "",
      address: "",
      hobbies: "",
    });
  }

  return { 
    users,
    data,
    setData,
    newContact
  };
}
