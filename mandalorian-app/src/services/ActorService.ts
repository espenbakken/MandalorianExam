import axios from "axios";
import { IActor } from "../interfaces/IActor";

export const ActorService = (function(){
    
    const urlToActorController = "https://localhost:5001/actor";

    const getAll = async () => {
        const result = await axios.get( urlToActorController );
        return result.data as IActor[];
    }

    const postNewActor = async ( newActor: IActor ) => {
        const result = await axios.post( urlToActorController, newActor );
        return result.data as IActor;
    }

    return {
        getAll, 
        postNewActor
    }
}()) 