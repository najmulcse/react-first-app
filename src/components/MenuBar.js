import React, { Component } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Drawer from '@material-ui/core/Drawer'
import { withStyles } from '@material-ui/core/styles'
import { BrowserRouter, Route, Switch, Link,Redirect} from 'react-router-dom'
import menuItems from './menuItems'
import axios from 'axios';


const styles = {
    list: {
        width: 250,
    },
    links: {
        textDecoration:'none',
    },
    menuHeader: {
        paddingLeft: '30px'
    }
};
class MenuBar extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            category: [],
        }
    }

    componentDidMount()
    {
        axios.get( 'http://localhost:8000/api/category',{params:{
                parentId: 0,

            }}).then(response => {
            this.setState({
                category: response.data.data ,
                Loader: false
            })

             console.log(this.state.category)
        })
            .catch(function (error) {
                console.log(error);
            })
    }
// this method sets the current state of a menu item i.e whether it is in expanded or collapsed or a collapsed state
    handleClick( item ) {
        this.setState( prevState => (
            { [ item ]: !prevState[ item ] }
        ) )
    }
// if the menu item doesn't have any child, this method simply returns a clickable menu item that redirects to any location and if there is no child this method uses recursion to go until the last level of children and then returns the item by the first condition.
    handler( children ) {
        const { classes } = this.props
        const { state } = this
        return children.map( ( subOption ) => {
            if ( subOption.children.length ===0 ) {

                return (

                    <div key={ subOption.id }>
                        <ListItem
                            button
                            key={ subOption.name }>
                            <Link
                                to={ subOption.url }
                                className={ classes.links }>
                                <ListItemText
                                    inset
                                    primary={ subOption.name }
                                />
                            </Link>
                        </ListItem>
                    </div>
                )
            }
            return (
                <div key={ subOption.id }>
                    <ListItem
                        button
                        onClick={ () => this.handleClick( subOption.name ) }>
                        <ListItemText
                            inset
                            primary={ subOption.name } />
                        { state[ subOption.name ] ?
                            <ExpandLess /> :
                            <ExpandMore />
                        }
                    </ListItem>
                    <Collapse
                        in={ state[ subOption.name ] }
                        timeout="auto"
                        unmountOnExit
                    >
                        { this.handler( subOption.children ) }
                    </Collapse>
                </div>
            )
        } )
    }
    render() {
        const { classes, drawerOpen, menuOptions } = this.props
        return (
            <div className={classes.list}>
                <Drawer
                    variant="persistent"
                    anchor="left"
                    open
                    classes={ { paper: classes.list } }>
                    <div>
                        <List>
                            <ListItem
                                key="menuHeading"
                                divider
                                disableGutters
                            >
                                <ListItemText
                                    className={ classes.menuHeader }
                                    inset
                                    primary="Nested Menu"
                                />
                            </ListItem>
                            { this.handler( this.state.category ) }
                        </List>
                    </div>
                </Drawer>
            </div>
        )
    }
}
export default withStyles(styles)(MenuBar)