import axios from 'axios';

export const RequisitaCliente = async () => {
    const response = await axios.get('https://api-livrasilia.herokuapp.com/clientes');
    return response.data;
};