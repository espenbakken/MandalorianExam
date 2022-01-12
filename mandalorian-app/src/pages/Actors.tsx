import { FC } from "react";
import ActorList from "../components/Actor/ActorList";
import { ActorProvider } from "../contexts/ActorContext";


const Actors:FC = () => {
    return (
        <section>
            <h3>Actors</h3>
            <ActorProvider>
            <ActorList></ActorList>
            </ActorProvider>
        </section>
    )
}

export default Actors;