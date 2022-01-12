import { FC } from "react";
import { EpisodeProvider } from '../contexts/EpisodeContext';
import EpisodeList from '../components/Episode/EpisodeList';


const Season:FC = () => {
    return (
        <section>
            <h3>All Episodes</h3>
            <EpisodeProvider>
            <EpisodeList></EpisodeList>
            </EpisodeProvider>
        </section>
    )
}

export default Season;