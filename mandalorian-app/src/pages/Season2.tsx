import { FC } from "react";
import { EpisodeProvider } from '../contexts/EpisodeContext';
import EpisodeList from '../components/Episode/EpisodeList';

const Season2:FC = () => {
    return (
        <section>
            <h3>Season 2 - Episodes</h3>
            <EpisodeProvider>
            <EpisodeList></EpisodeList>
            </EpisodeProvider>
        </section>
    )
}

export default Season2;