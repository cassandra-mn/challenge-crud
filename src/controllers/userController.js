import * as userService from '../services/userService.js';

export function hello (req, res) {
    const data = userService.hello();
    res.json(data);
}