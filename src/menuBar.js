import React, { Component } from 'react';
import { List, ListItem, ListItemText, Collapse, Drawer, withStyles } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import menuItems from './data/menuItems.json';
import './styles/menuBar.css';

const styles = {};

class MenuBar extends Component {
  constructor( props ) {
    super( props )
    this.state = {}
  }

handleClick( item ) {
    this.setState( prevState => ( 
      { [ item ]: !prevState[ item ] } 
    ) )
  }

handleList( children ) {
    const { classes } = this.props;
    const { state } = this;
return children.map( ( menu ) => {
  if ( !menu.children ) {
    return (
      <div key={ menu.name }>
        <ListItem 
          button 
          key={ menu.name }>
          <Link 
            to={ menu.url }
            className={ classes.links }>
            <ListItemText 
              inset 
              primary={ menu.name } 
            />
          </Link>
        </ListItem>
      </div>
    )
  }
      return (
        <div key={ menu.name }>
          <ListItem 
            button 
            onClick={ () => this.handleClick( menu.name ) }
            >
            <ListItemText 
              primary={ menu.name }
               />
             <Menu className="menu-icon" />
          </ListItem>
          <Collapse 
            in={ state[ menu.name ] } 
            timeout="auto" 
            unmountOnExit
          >
            { this.handleList( menu.children ) }
          </Collapse>
        </div>
      )
    } )
  }
render() {
    return (
      <div>
        <Drawer 
          variant="persistent" 
          open
          anchor="top"
          >
          <div className="list-items">
            <List>
            { this.handleList( menuItems.data ) }
            </List>
          </div>
        </Drawer>
      </div>
    )
  }
}
export default withStyles(styles)(MenuBar);
