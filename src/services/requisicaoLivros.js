import axios from 'axios';

const url = 'https://api-livrasilia.herokuapp.com/livros'

export const RequisitaLivros = () => {
    return axios.get(url)
};

export const RequisitaLivroPorId = (id) => {
    return axios.get(`${url}/${id}`)
}

export const DeletaLivro = (id) => {
    return axios.delete(`${url}/${id}`)
}

export const CriaLivro = (livroNovo) => {
    return axios.post(url, livroNovo)
}

export const EditaLivro = (id, livroAtualizado) => {
    console.log(id, livroAtualizado)
    return axios.put(`${url}/${id}`, livroAtualizado)
}