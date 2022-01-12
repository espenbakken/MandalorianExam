import { FC } from 'react';
import { IActor } from '../../interfaces/IActor';
import { Card } from 'react-bootstrap';
import './Actor.css';

const ActorItem : FC<IActor>  = ({ id, actorName, actorPicture, actorCharacter,actorBorn,actorHistory }) => {

    return (
        <Card border="secondary" className="text-center" text="white" bg="dark" style={{margin:'0.2rem', height: 'auto',width:'20rem'
        } }>
        <Card.Header as="h5">{actorName}</Card.Header>
        <Card.Img src={`https://localhost:5001/images/Actor/${actorPicture}`} />
        <Card.Body>
            <Card.Subtitle className="actor-character">{actorCharacter}</Card.Subtitle>
            <br></br>
            <Card.Text>{actorHistory}</Card.Text>
        </Card.Body>
        <Card.Footer>
            <small className="text-muted">Born:   {actorBorn}</small>
        </Card.Footer>
        </Card>
    )
}

export default ActorItem;