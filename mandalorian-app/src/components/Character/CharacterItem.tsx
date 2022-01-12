import { FC } from 'react';
import { ICharacter } from '../../interfaces/ICharacter';
import { Card } from 'react-bootstrap';
import CharacterModal from './CharacterModal';

const CharacterItem : FC<ICharacter>  = ({ id, characterName, characterPicture, characterQuote, characterDescription }) => {
    
    return (
        <Card border="secondary" className="text-center" text="white" style={{width: '13rem', background: 'rgb(34, 37, 41, 0.8)'} }>
        <Card.Header as="h5">{characterName}</Card.Header>
        <Card.Img src={`https://localhost:5001/images/character/${characterPicture}`} />
        <Card.Body>
            <Card.Subtitle><i>"{characterQuote}"</i></Card.Subtitle>
            <br/>
            <CharacterModal id={id} characterName={characterName} characterPicture={characterPicture} characterQuote={characterQuote} characterDescription={characterDescription}></CharacterModal>
        </Card.Body>
        </Card>
    )
}

export default CharacterItem;