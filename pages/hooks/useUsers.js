import {useEffect, useState} from 'react';
import apiService from '../services/apiService.js';

export default function useUsers(req, res) {
  const [users, setUsers] = useState();

  useEffect(() => {
    apiService.get('/user')
      .then(response => setUsers(response.data))
      .catch(e => {
        console.log(e);  
        alert('Houve um erro');
      });
  }, []);

  return {users};
}
