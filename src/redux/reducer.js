import { DEPARTMENTS, PRODUCTS } from '../shared/staffs';

export const initialState = {
    products: PRODUCTS,
    departments: DEPARTMENTS,

};
export const Reducer = (state = initialState, action) => {
    return state;
}