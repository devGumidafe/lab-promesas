import axios from 'axios';

const getCharacters = () => {
    return (
        axios.get("https://www.breakingbadapi.com/api/characters")
            .then(response => response.data)
            .catch(error => console.log('Ha ocurrido un error'))
    )
}

const getCharacterById = (charId) => {
    return (
        axios.get(`https://www.breakingbadapi.com/api/characters/${charId}`)
            .then(response => response.data)
            .catch(error => console.log('Ha ocurrido un error'))
    )
}

const getQuoteById = (charId) => {
    return (
        axios.get(`https://www.breakingbadapi.com/api/quotes/${charId}`)
            .then(response => response.data)
            .catch(error => console.log('Ha ocurrido un error'))
    )
}

export { getCharacters, getCharacterById, getQuoteById }