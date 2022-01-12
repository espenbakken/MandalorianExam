import { FC, useState, useEffect, createContext} from "react";
import { IEpisode } from "../interfaces/IEpisode";
import { EpisodeContextType } from "../types/EpisodeContextType";
import { EpisodeService } from "../services/EpisodeService";

export const EpisodeContext = createContext<EpisodeContextType  | null>(null);

export const EpisodeProvider: FC = ({children}) => {

    const [episodes, setEpisodes] = useState<IEpisode[]>([
        //{ id: "test", title: "Test", season: "1", date: "10.10.2020", rating: 0, description: "Testdescription", episodePicture: "s01e01.jpeg"}
    ]);

    useEffect( () => { 
        getEpisodes();

      /*  let newEpisode = {id: "1", title: "Test", season: "1", date: "10.10.2020", rating: 2, description: "Testdescription", episodePicture: "s01e01.jpeg", episodeId: "1"};
        axios.post( "https://localhost:5001/episode/", newEpisode);*/
       // axios.post( "https://localhost:5001/character", newEpisode ); // Dummy metode for å gjøre test. Hver gang skal et nytt objekt postes

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

