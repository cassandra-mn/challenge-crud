import axios from "axios";
import ApiService from "../services/ApiService.js";
import { useEffect, useState } from "react";

export default function useUsers(req, res) {
  const [users, setUsers] = useState();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [user, setUser] = useState();
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    state: "",
    city: "",
    hobbies: [],
  });

  useEffect(() => {
    ApiService.get("/user")
      .then((response) => setUsers(response.data))
      .catch((e) => {
        console.log(e);
        alert("Houve um erro");
      });
  }, []);

  function newContact(user) {
    axios
      .post("http://localhost:5000/user", user)
      .then(() => {
        alert("Contato criado!");
        window.location.reload();
      })
      .catch((e) => {
        alert(e.response.data);
      });
  }

  function editContact(user) {
    axios
      .put(`http://localhost:5000/user/${user.id}`, user)
      .then(response => {
        alert("Contato atualizado!");
        window.location.reload();
      })
      .catch(error => {
        alert("Houve um erro!");
        console.log(error);
      });
  }

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
    } else {
      alert("Usuário não encontrado!");
    }
    setEmail("");
  }

  return {
    users,
    data,
    setData,
    newContact,
    open,
    setOpen,
    editContact,
    deleteContact,
    email,
    setEmail,
    findByEmail,
    user,
    setUser,
    edit,
    setEdit,
  };
}
