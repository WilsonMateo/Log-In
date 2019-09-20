import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export default class AppNav extends Component{
    render(){
        return(
            <div>
                <AppBar  >

                    <Toolbar >
                         
                            <h3 > Welcome </h3>

                    </Toolbar>

                </AppBar>

            </div>
        )
    }
}