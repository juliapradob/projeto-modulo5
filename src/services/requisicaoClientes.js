import axios from 'axios';

const url = 'https://api-livrasilia.herokuapp.com/clientes'

export const RequisitaCliente = () => {
    return axios.get(url)
};

export const RequisitaClientePorId = (id) => {
    return axios.get(`${url}/${id}`)
}

export const DeletaCliente = (id) => {
    return axios.delete(`${url}/${id}`)
}

export const CriaCliente = (clienteNovo) => {
    return axios.post(url, clienteNovo)
}

export const EditaCliente = (id, clienteAtualizado) => {
    console.log(id, clienteAtualizado)
    return axios.put(`${url}/${id}`, clienteAtualizado)
}