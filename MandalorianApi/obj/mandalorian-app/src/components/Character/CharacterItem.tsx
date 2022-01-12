import { FC } from 'react';
import { ICharacter } from '../../interfaces/ICharacter';
import { Card } from 'react-bootstrap';
import CharacterModal from './CharacterModal';

const CharacterItem : FC<ICharacter>  = ({ id, characterName, characterPicture, characterQuote, characterDescription }) => {
    
   /* let mongoObjectId = function () {
        var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
        return timestamp + id?.replace(/[x]/g, function() {
            return (Math.random() * 16 | 0).toString(16);
        }).toLowerCase();
    };*/

 

    // const objektHelvete = id?.toString();

    //console.log(objektHelvete);

 
    //console.log(dateFromObjectId);

    return (
        <Card border="secondary" className="text-center" text="white" style={{width: '13rem', background: 'rgb(34, 37, 41, 0.8)'} }>
        <Card.Header as="h5">{characterName}</Card.Header>
        <Card.Img src={`https://localhost:5001/images/character/${characterPicture}`} />
        <Card.Body>
            <Card.Subtitle><i>"{characterQuote}"</i></Card.Subtitle>
            <br/>
            <CharacterModal id={id} characterName={characterName} characterPicture={characterPicture} characterQuote={characterQuote} characterDescription={characterDescription}></CharacterModal>
        </Card.Body>
        <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
        </Card>
    )
}

export default CharacterItem;