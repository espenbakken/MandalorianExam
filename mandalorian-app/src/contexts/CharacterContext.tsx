import { FC, useState, useEffect, createContext} from "react";
import { ICharacter } from "../interfaces/ICharacter";
import { CharacterContextType } from "../types/CharacterContextType";
import { CharacterService } from "../services/CharacterService";

export const CharacterContext = createContext<CharacterContextType | null>(null);

export const CharacterProvider: FC = ({children}) => {

    const [characters, setCharacters] = useState<ICharacter[]>([]);

    useEffect( () => { 
        getCharacters();
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