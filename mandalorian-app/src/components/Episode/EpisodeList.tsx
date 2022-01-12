import { FC, useContext } from 'react';
import { IEpisode } from '../../interfaces/IEpisode';
import EpisodeItem from './EpisodeItem';
import { EpisodeContext } from '../../contexts/EpisodeContext';
import { EpisodeContextType } from '../../types/EpisodeContextType';
import { CardGroup, Row, Col } from 'react-bootstrap';

const EpisodeList: FC = () => {

    const {episodes} = useContext(EpisodeContext) as EpisodeContextType;

    const createEpisodeList = () => {
        return episodes.map( (episode: IEpisode, key: number) => {     
            return (
                        <Col className="d-flex" md={4} lg={3} xl={2} key={key}>
                            <EpisodeItem 
                            key={key}
                            id={episode.id}
                            title={episode.title}
                            season={episode.season}
                            date={episode.date}
                            rating={episode.rating}
                            description={episode.description}
                            episodePicture={episode.episodePicture}
                            episodeId={episode.episodeId}
                            /> 
                        </Col>                        
            )
        });
    }

    return (
        <section>
            <Row>
                <CardGroup>
                    { createEpisodeList() }
                </CardGroup>
            </Row>
        </section>
    )
}

export default EpisodeList;