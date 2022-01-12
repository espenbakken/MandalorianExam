import { FC, useState, useEffect, createContext} from "react";
import { IActor } from "../interfaces/IActor";
import { ActorContextType } from "../types/ActorContextType";
import { ActorService } from "../services/ActorService";

export const ActorContext = createContext<ActorContextType | null>(null);

export const ActorProvider: FC = ({children}) => {

    const [actors, setActors] = useState<IActor[]>([
        { id: "test", actorName: "Testmonster", actorPicture: "cute-witch.png", actorCharacter: "Fuck Yeah", actorBorn:" Born tomorrow",actorHistory:"cute witch aint cute at all" }
    ]);

    useEffect( () => { 
        getActors();

       //  let newActor = { ActorName: "Mummy", ActorPicture: "cute-mummy.png" };
       // axios.post( "https://localhost:5001/Actor", newActor ); // Dummy metode for å gjøre test. Hver gang skal et nytt objekt postes

     }, [] )

     const getActors = async () => {
         const _actors = await ActorService.getAll();
         setActors( _actors );
     }
    return (
        <>
            <ActorContext.Provider value={{actors}}>
                {children}
            </ActorContext.Provider>
        </>
    )
}

