import * as React from 'react';
import {Header} from './components/members/header'
import {About} from './components/About/about'

export const App:React.StatelessComponent<{}> =() => {
    return(
        <div className="container-fluid">
            <Header></Header>
            {/* <About></About> */}
        </div>
    )
}



