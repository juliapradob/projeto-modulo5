import axios from 'axios';

const url = 'https://api-livrasilia.herokuapp.com/clientes'

export const RequisitaCliente = () => {
    return axios.get(url)
};

export const DeletaCliente = (id) => {
    return axios.delete(`${url}/${id}`)
}

export const CriaCliente = (clienteNovo) => {
    return axios.post(url, clienteNovo)
}

export const EditaCliente = (clienteAtualizado) => {
    return axios.put(`${url}/${id}`, clienteAtualizado)
}