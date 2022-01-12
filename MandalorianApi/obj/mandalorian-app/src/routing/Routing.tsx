import { FC } from "react";
import { BrowserRouter, Routes, Route}  from "react-router-dom";
import MainNavigation from '../components/Shared/MainNavigation';
import {Container} from 'react-bootstrap';
import MainMenu from "../pages/MainMenu";
import Season1 from "../pages/Season1";
import Characters from "../pages/Characters";
import Season2 from "../pages/Season2";
import Actors from "../pages/Actors";
import AllEpisodes from "../pages/AllEpisodes";
import Admin from "../pages/Admin";
import Footer from "../components/Shared/Footer";

const Routing: FC = () => {
    return (
        <BrowserRouter>        

            <MainNavigation/>

            <Container>
                <Routes>
                    <Route path="/" element={<MainMenu/>}></Route>
                    <Route path="season1" element={<Season1/>}></Route>
                    <Route path="season2" element={<Season2/>}></Route>
                    <Route path="allEpisodes" element={<AllEpisodes/>}></Route>
                    <Route path="characters" element={<Characters/>}></Route>
                    <Route path="actors" element={<Actors/>}></Route>
                    <Route path="admin" element={<Admin/>}></Route>
                </Routes>
            </Container>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;