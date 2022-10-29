import {useEffect, useState} from 'react';
import apiService from '../services/apiService.js';

export default function useHello(req, res) {
  const [message, setMessage] = useState();

  useEffect(() => {
    apiService.get('/hello')
      .then(response => setMessage(response.data.message))
      .catch(e => alert('Houve um erro'));
  }, []);

  return {
    message
  }
}
