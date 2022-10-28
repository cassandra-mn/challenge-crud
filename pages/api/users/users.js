//import {getUsers}from '../../src/';
import logger from '../../../src/middlewares/logger.js';

async function handler(req, res) {
    //const result = await getUsers();
    //res.json(result);
}

export default logger(handler);