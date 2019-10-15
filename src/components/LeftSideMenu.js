import React, { Component } from 'react'
import MetisMenu from 'react-metismenu';
import { withStyles } from '@material-ui/core/styles'
import axios from 'axios';


const styles ={
  
        left_width:{
            width: '200px !important' ,
            background: '#fff',
        }

};

const content=[
    {
        icon: 'icon-class-name',
        label: 'Label of Item',
        to: '#a-link',
    },
    {
        icon: 'icon-class-name',
        label: 'Second Item',
        content: [
            {
                icon: 'icon-class-name',
                label: 'Sub Menu of Second Item',
                content: [
                {
                   
                    icon: 'icon-class-name',
                    label: 'Sub Menu of Second Item',
                    to: '#another-link', 
                } ,
                {
                        icon: 'icon-class-name',
                        label: 'Sub Menu of Second Item',
                        to: '#another-link',
                }
    
            ],
            },
            
        ],
    },
    {
        icon: 'icon-class-name',
        label: 'Second Item',
        content: [
            {
                icon: 'icon-class-name',
                label: 'Sub Menu of Second Item',
                to: '#another-link',
            },
            {
                icon: 'icon-class-name',
                label: 'Sub Menu of Second Item',
                to: '#another-link',
            },
        ],
    },
];

class LeftSideMenu extends Component{
   
    constructor( props ) {
        super( props )
        this.state = {
            category: [],
            Loader: true,
            parentId: 8,
        }
    }

    componentDidMount()
    {
        axios.get( 'http://localhost:8000/api/menu_category',{params:{
                parentId: 0,

            }}).then(response => {
            this.setState({
                category: response.data.data ,
                Loader: false
            })

             console.log(this.state.parentId)
             console.log(this.state.category)
        })
            .catch(function (error) {
                console.log(error);
            })
    }
    render(){
        return(
            <div class={"row"}>
                <div className={"col-md-3 left_width" }>
                <MetisMenu content={this.state.category}  
                            className="my-menu"
                            clasNameLink="my-menu-link"
                            changeActiveLinkTo ={this.state.parentId} 
                />
                </div>
                <div class={'col-md-9'}>
                </div>    
            </div>    
        )
    }
}



export default withStyles(styles)(LeftSideMenu);