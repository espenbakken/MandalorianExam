import { FC, useState, useEffect, createContext} from "react";
import { ICharacter } from "../interfaces/ICharacter";
import { CharacterContextType } from "../types/CharacterContextType";
import { CharacterService } from "../services/CharacterService";

export const CharacterContext = createContext<CharacterContextType | null>(null);

export const CharacterProvider: FC = ({children}) => {

    const [characters, setCharacters] = useState<ICharacter[]>([
        { id: "test", characterName: "Testkarakter", characterPicture: "cute-witch.png", characterQuote: "Fuck Yeah", characterDescription: "Hello World"}
    ]);

    useEffect( () => { 
        getCharacters();

       /*  let newCharacter = { characterName: "Mummy", characterPicture: "cute-mummy.png", characterQuote: "hehe" };
        axios.post( "https://localhost:5001/character", newCharacter ); // Dummy metode for å gjøre test. Hver gang skal et nytt objekt postes*/

     }, [] )

     const getCharacters = async () => {
         const _characters = await CharacterService.getAll();
         setCharacters( _characters );
     }
    return (
        <>
            <CharacterContext.Provider value={{characters}}>
                {children}
            </CharacterContext.Provider>
        </>
    )
}

