import { FC } from 'react';
import { IEpisode } from '../../interfaces/IEpisode';
import { Card} from 'react-bootstrap';
import EpisodeModal from './EpisodeModal';

const EpisodeItem : FC<IEpisode>  = ({ id, title, season, date, rating, description, episodePicture, episodeId }) => {

    return (
        <Card border="secondary" id={id} className="text-center" text="white"  style={{width: '13rem', background: 'rgb(34, 37, 41, 0.8)'} }>
        <Card.Header as="h5">{title}</Card.Header>
        <Card.Img src={`https://localhost:5001/images/episodes/${episodePicture}`} />
        <Card.Body>
            <Card.Text>{description}</Card.Text>
            <blockquote className="blockquote-footer">Rating: {rating}</blockquote>
            <EpisodeModal title={title} season={season} date={date} rating={rating} description={description} episodePicture={episodePicture} episodeId={episodeId}></EpisodeModal>
        </Card.Body>
        <Card.Footer>
            <small className="text-muted">{date}</small>
        </Card.Footer>
        </Card>
    )
}

export default EpisodeItem;