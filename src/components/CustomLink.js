import React, { Component } from 'react'

class CustomLink extends React.Component {
    constructor() {
      super();
  
      this.onClick = this.onClick.bind(this);
    }
  
    onClick(e) {
      if (this.props.hasSubMenu) this.props.toggleSubMenu(e);
      else {
    
        this.props.activateMe({
          newLocation: this.props.to,
          selectedMenuLabel: this.props.label,
        });
      }
    }
  
    render() {
      return (
        <li className="metismenu-link" onClick={this.onClick}>
          {this.props.children}
        </li>
      );
    }
  }

  export default CustomLink;