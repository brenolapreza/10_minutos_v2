import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CriarProdutos from "./pages/criar-produtos";
import CriarEpisodios from "./pages/criar-episodios";
import Episodio from "./pages/episodios"

import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import VideoPlayer from "./pages/video-player";


export default function Routes(){
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/registrar" component={Register} />
                <Route exact path="/criar-produtos" component={CriarProdutos} />
                <Route exact path="/criar-episodio" component={CriarEpisodios} />
                <Route exact path="/episodio" component={Episodio} />
                <Route exact path="/episodio/play" component={VideoPlayer} />
            </Switch>
        </Router>
    )
}