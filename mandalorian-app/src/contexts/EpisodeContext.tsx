import { FC, useState, useEffect, createContext} from "react";
import { IEpisode } from "../interfaces/IEpisode";
import { EpisodeContextType } from "../types/EpisodeContextType";
import { EpisodeService } from "../services/EpisodeService";

export const EpisodeContext = createContext<EpisodeContextType  | null>(null);

export const EpisodeProvider: FC = ({children}) => {

    const [episodes, setEpisodes] = useState<IEpisode[]>([
    ]);

    useEffect( () => { 
        getEpisodes();
     }, [] )

     const getEpisodes = async () => {
         const _episodes = await EpisodeService.getAll();
         setEpisodes( _episodes );
     }

    return (
        <>
            <EpisodeContext.Provider value={{episodes}}>
                {children}
            </EpisodeContext.Provider>
        </>
    )
}
