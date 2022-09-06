import axios from 'axios';

const url = 'https://api-livrasilia.herokuapp.com/clientes'

export const RequisitaCliente = () => {
    return axios.get(url)
};

export const DeletaCliente = (id) => {
    return axios.delete(`${url}/${id}`)
}

export const CriaCliente = (newUser) => {
    return axios.post(url, newUser)
}

export const EditaCliente = () => {}