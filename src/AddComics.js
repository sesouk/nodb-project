import React, { Component } from 'react';


class AddComics extends Component {
    constructor(){
        super()
            this.state = {
            id: '',
            character: '',
            title: '',
            pageCount: '',
            price: '',
            cover: '',
            purchase: '',            
        }
    }
    characterAdd(val){
        this.setState({
            character: val
        })
    }
    titleAdd(val){
        this.setState({
            title: val
        })
    }
    pageCountAdd(val){
        this.setState({
            pageCount: val
        })
    }
    priceAdd(val){
        this.setState({
            price: val
        })
    }
    coverAdd(val){
        this.setState({
            cover: val
        })
    }
    purchaseAdd(val){
        this.setState({
            purchase: val
        })
    }

    render(){
        let {character, title, pageCount, price, cover, purchase} =  this.state;
        return (
            <div>
              <input placeholder='Character' onChange={e => this.characterAdd(e.target.value)}/>
              <input placeholder='Comic Title' onChange={e => this.titleAdd(e.target.value)}/>
              <input placeholder='# of Pages' onChange={e => this.pageCountAdd(e.target.value)}/>
              <input placeholder='Price' onChange={e => this.priceAdd(e.target.value)}/>
              <input placeholder='Link to Cover' onChange={e => this.coverAdd(e.target.value)}/>
              <input placeholder='Link to Buy' onChange={e => this.purchaseAdd(e.target.value)}/>
              <button onClick={()=>{this.props.addComic({character, title, pageCount, price, cover, purchase})}}>Add Comic</button>
            </div>   
        );
    }
}


export default AddComics;