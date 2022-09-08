import axios from 'axios';

export const RequisitaLivros = async () => {
    const response = await axios.get('https://api-livrasilia.herokuapp.com/livros')
    return response.data
}