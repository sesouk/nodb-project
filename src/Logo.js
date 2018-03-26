import React, { Component } from 'react';
import logo from './PremeComics.png'

class Logo extends Component{
    render(){
        return(
            <img className='logo' src={logo} alt='logo'/>
        )
    }
}
export default Logo