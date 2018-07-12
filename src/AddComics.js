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
            purchased: '',            
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
        purchasedAdd(val){
            this.setState({
                purchased: val
            })
        }        

    render(){
        let {character, title, pageCount, price, cover, purchase,purchased} =  this.state;
        return (
            <div className='input-div'>
              <div>
                <input placeholder='Character' onChange={e => this.characterAdd(e.target.value)}/>
							</div>
							<div>
                <input placeholder='Comic Title' onChange={e => this.titleAdd(e.target.value)}/>
							</div>
							<div>
                <input placeholder='# of Pages' onChange={e => this.pageCountAdd(e.target.value)}/>
							</div>
							<div>
                <input placeholder='Price' onChange={e => this.priceAdd(e.target.value)}/>
							</div>
							<div>
                <input placeholder='Link to Cover' onChange={e => this.coverAdd(e.target.value)}/>
							</div>
							<div>
                <input placeholder='Link to Buy' onChange={e => this.purchaseAdd(e.target.value)}/>
							</div>
							<div>
                <input placeholder='Own it?' onChange={e => this.purchasedAdd(e.target.value)}/>
							</div>
							<div>
                <button onClick={()=>{this.props.addComic({character, title, pageCount, price, cover, purchase,purchased})}}>Add Comic</button>
							</div>
            </div>   
        );
    }
}


export default AddComics;