import axios from "axios";
import ApiService from "../config/ApiService.js";
import { useEffect, useState } from "react";

export default function useUsers(req, res) {
  const [users, setUsers] = useState();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [user, setUser] = useState();
  const [edit, setEdit] = useState(false);
  const [message, setMessage] = useState("");
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
        setMessage("Houve um erro");
      });
  }, []);

  function newContact(user) {
    axios
      .post("http://localhost:5000/user", user)
      .then(() => {
        setMessage("Contato criado!");
        window.location.reload();
      })
      .catch((e) => {
        setMessage(e.response.data);
      });
  }

  function editContact(user) {
    axios
      .put(`http://localhost:5000/user/${user.id}`, user)
      .then(response => {
        setMessage("Contato atualizado!");
        window.location.reload();
      })
      .catch(error => {
        setMessage("Houve um erro!");
        console.log(error);
      });
  }

  function deleteContact(id) {
    const confirmation = window.confirm("Tem certeza que deseja excluir esse contato?");
    if (confirmation) {
      ApiService.delete(`/user/${id}`)
      .then((response) => {
        setMessage("Contato deletado!");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        setMessage("Houve um erro");
      });
    }
  }

  function findByEmail() {
    const user = users.find((user) => user.email === email);
    if (user) {
      setUser(user);
    } else {
      setMessage("Usuário não encontrado!");
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
    message,
    setMessage
  };
}
