import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Me from './Me';
import Projects from './Projects';
import Work from './Work';
import Education from './Education';
import Publications from './Publications';
import '../App.css';


const Pages=({user})=>{
    return(
                <Switch>
                    <Route exact path="/">
                        <Me user={user}/>
                    </Route>
                    <Route path="/projects">
                        <Projects user={user}/>
                        </Route>
                    <Route path="/work">
                        <Work user={user}/>
                    </Route>
                    <Route path="/education">
                        <Education user={user}/>
                    </Route>
                    <Route path="/publications">
                        <Publications user={user}/>
                    </Route>
                </Switch>
    );
};

export default Pages;