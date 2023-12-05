import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetApi = () => {
    const [item, setItem] = useState([]);
    useEffect(() => {
        createItem();
    }, []);
    async function createItem() {
        axios.post('https://crudcrud.com/api/dd88fab72c0f442b9d84434cb6dd0605/todo/', {name:"HI"})
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    }
    async function getData() {
        const response = await axios.get('https://crudcrud.com/api/dd88fab72c0f442b9d84434cb6dd0605/');
        setItem(response.data);
    }
    async function delData(id)
    {
        const response = await axios.delete('https://crudapi.co.uk/app/ntEt9kF/${id}');
        console.log(response);
    }

    return (
        <div>
          HI
        </div>
    );
};

export default GetApi;