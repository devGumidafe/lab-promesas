import "../../css/style-api.css";
import { createCharacterRow, showCharacter } from './utils';
import { getCharacters, getCharacterById, getQuoteById } from './data-business';

const divRoot = document.getElementById("root");

getCharacters().then(data => {
    const characters = data;
    const nodes = [];
    divRoot.innerHTML = '';

    for (const char of characters) {
        const node = createCharacterRow(char);

        node.onclick = () => {
            getCharacterById(char.char_id).then(data => {

                getQuoteById(char.char_id).then(quote => {

                    showCharacter(data[0], quote[0].quote)
                })
            })
        }

        nodes.push(node);
    }

    for (const item of nodes) {
        divRoot.append(item);
    }
})

