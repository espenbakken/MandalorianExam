import { IEpisode} from "../interfaces/IEpisode";

export type EpisodeContextType = {
    episodes: IEpisode[],
    getEpisodesByEpisodeId: ( episodeId: string ) => IEpisode;
}