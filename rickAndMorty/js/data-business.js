import axios from 'axios';

const getCharacters = () => {
    return (
        axios.get("https://rickandmortyapi.com/api/character")
            .then(response => response.data)
            .catch(error => console.log('Ha ocurrido un error'))
    )
}

const getCharacterById = (charId) => {
    return (
        axios.get(`https://rickandmortyapi.com/api/character/${charId}`)
            .then(response => response.data)
            .catch(error => console.log('Ha ocurrido un error'))
    )
}

export { getCharacters, getCharacterById }