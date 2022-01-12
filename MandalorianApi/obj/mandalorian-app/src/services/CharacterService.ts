import axios from "axios";
import { ICharacter } from "../interfaces/ICharacter";

export const CharacterService = (function(){
    
    const urlToCharacterController = "https://localhost:5001/character";

    const getAll = async () => {
        const result = await axios.get( urlToCharacterController );
        return result.data as ICharacter[];
    }

    const postNewCharacter = async ( newCharacter: ICharacter ) => {
        const result = await axios.post( urlToCharacterController, newCharacter );
        return result.data as ICharacter;
    }

    return {
        getAll, 
        postNewCharacter
    }
    
}()) 