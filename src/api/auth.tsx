import instance from "./instance";
import { IUser } from "../types/user";

const getUser = () => {
    return instance.get('/user');
}

const signup = (user: IUser) => {
    return instance.post('/signup', user);
}

const login = (user: IUser) => {
    return instance.post('/login', user);
}

const removeUser = (id: number) => {
    return instance.delete('/user/' + id);
}

export { signup, login, getUser, removeUser }