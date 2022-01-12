import { FC } from "react";
import CreateEpisodeForm from "../components/Episode/CreateEpisodeForm";


const Admin : FC = () => {
    return (
        <section>
            <h3>Adminpanel</h3>
            <CreateEpisodeForm/>
        </section>
    )
}

export default Admin;