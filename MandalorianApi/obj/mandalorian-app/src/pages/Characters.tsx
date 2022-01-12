import { FC } from "react";
import { CharacterProvider } from '../contexts/CharacterContext';
import CharacterList from '../components/Character/CharacterList';

const Characters:FC = () => {
    return (
        <section>
            <h3>Characters</h3>
            <CharacterProvider>
            <CharacterList></CharacterList>
            </CharacterProvider>
        </section>
    )
}

export default Characters;