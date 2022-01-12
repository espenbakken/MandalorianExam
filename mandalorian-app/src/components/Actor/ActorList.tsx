import { FC, useContext } from 'react';
import { IActor } from '../../interfaces/IActor';
import ActorItem from './ActorItem';
import { ActorContext } from '../../contexts/ActorContext';
import { ActorContextType } from '../../types/ActorContextType';
import { CardGroup, Row, Col } from 'react-bootstrap';


const ActorList: FC = () => {

    const {actors} = useContext(ActorContext) as ActorContextType;

    const createActorList = () => {
        return actors.map( (actor: IActor, key: number) => {
            return (
                        <Col className="d-flex" md={4} lg={3} xl={2} key={key}>
                            <ActorItem 
                            key={key}
                            id={actor.id}
                            actorName={actor.actorName}
                            actorPicture={actor.actorPicture}
                            actorCharacter={actor.actorCharacter}
                            actorBorn={actor.actorBorn}
                            actorHistory={actor.actorHistory}
                            /> 
                        </Col>               
            )
        });
    }

    return (
        <section>
            <Row>
                <CardGroup>
                    { createActorList() }
                </CardGroup>
            </Row>
        </section>
    )
}

export default ActorList;