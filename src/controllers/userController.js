import * as userService from '../services/userService.js';

export function hello (req, res) {
    const data = userService.hello();
    res.status(200).send(data);
}

export async function create(req, res) {
    const {body} = req;
    const error = await userService.create(body);

    if (!error) res.status(201).send('Usuário criado');
    else res.status(error.error).send(error.message);
}

export async function findUsers(req, res) {
    const users = await userService.findUsers();

    res.status(200).send(users);
}

export async function findById(req, res) {
    const {id} = req.params;
    const users = await userService.findById(+id);

    res.status(200).send(users);
}