import { FC, useState, useEffect, createContext} from "react";
import { IActor } from "../interfaces/IActor";
import { ActorContextType } from "../types/ActorContextType";
import { ActorService } from "../services/ActorService";

export const ActorContext = createContext<ActorContextType | null>(null);

export const ActorProvider: FC = ({children}) => {

    const [actors, setActors] = useState<IActor[]>([]);

    useEffect( () => { 
        getActors();
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