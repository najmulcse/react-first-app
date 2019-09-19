import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link,Redirect} from 'react-router-dom'
import MenuBar from './components/MenuBar'
class App extends Component {
    render() {

        return (
            <BrowserRouter>

                <Switch>
                    <MenuBar/>
                </Switch>
            </BrowserRouter>
        )
    }
}
export default App;