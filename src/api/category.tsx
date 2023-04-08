import instance from "./instance";
import { ICategory } from "../types/category";

const getAllCategory = () => {
    return instance.get('/category');
}
const getOneCategory = (id: number) => {
    return instance.get('/category/' + id);
}
const addCategory = (category: ICategory) => {
    return instance.post('/category', category);
}
const deleteCategory = (id: number) => {
    return instance.delete('/category/' + id);
}

export { getAllCategory, getOneCategory, addCategory, deleteCategory }