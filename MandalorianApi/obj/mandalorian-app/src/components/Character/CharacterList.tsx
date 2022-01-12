import { FC, useContext } from 'react';
import { ICharacter } from '../../interfaces/ICharacter';
import CharacterItem from './CharacterItem';
import { CharacterContext } from '../../contexts/CharacterContext';
import { CharacterContextType } from '../../types/CharacterContextType';
import { CardGroup, Row, Col } from 'react-bootstrap';

const CharacterList: FC = () => {

    const {characters} = useContext(CharacterContext) as CharacterContextType;

    const createCharacterList = () => {
        return characters.map( (character: ICharacter, key: number) => {
            return (
                        <Col className="d-flex" md={4} lg={3} xl={2} key={key}>
                            <CharacterItem 
                            key={key}
                            id={character.id}
                            characterName={character.characterName}
                            characterPicture={character.characterPicture}
                            characterQuote={character.characterQuote}
                            characterDescription={character.characterDescription}
                            /> 
                        </Col>               
                        
            )
        });
    }

    return (
        <section>
            <Row>
                <CardGroup>
                    { createCharacterList() }
                </CardGroup>
            </Row>
        </section>
    )
}

export default CharacterList;