import "../../css/style-api.css";
import { createCharacterRow, showCharacter } from './utils';
import { getCharacters, getCharacterById } from './data-business';

const divRoot = document.getElementById("root");

getCharacters().then(data => {
    const characters = data.results;
    const nodes = [];
    divRoot.innerHTML = '';

    for (const char of characters) {
        const node = createCharacterRow(char);

        node.onclick = () => {
            getCharacterById(char.id).then(data => {
                showCharacter(data)
            })
        }

        nodes.push(node);
    }

    for (const item of nodes) {
        divRoot.append(item);
    }
})

