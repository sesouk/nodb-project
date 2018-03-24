import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import AddComic from './AddComics';
import Search from './Filter';
import ComicsList from './ComicsList';

class App extends Component {
  constructor() {
    super()
    this.state = {
      comics: []
    }
this.editComic = this.editComic.bind(this);
this.deleteComic = this.deleteComic.bind(this);
this.addComic = this.addComic.bind(this);
this.filterComic = this.filterComic.bind(this);
  }

  componentDidMount(){
    axios.get('/api/allcomics').then(r => {
      this.setState({
        comics: r.data,  
      }); console.log(this.state.comics);
      
    })
  }
  editComic(id){
    axios.put(`/api/editcomics/${id}`).then(r => this.setState({
      comics: r.data
    }))
  }
  deleteComic(id){
    axios.delete(`/api/deletecomics/${id}`).then(r => {
      this.setState({
        comics: r.data
      })
    })
  }
  addComic(obj){
    axios.post('/api/addcomics', obj).then(r => this.setState({
      comics: r.data
    }))
  }
  filterComic(character){
    axios.get('/api/filtercomics', {character}).then(r => {this.setState({
      comics: r.data
    })})
  }
  render() {
   let display = this.state.comics.map((e,i) => {
     return (<ComicsList comic={e} deleteComic={this.deleteComic} editComic={this.editComic}/>)
   })
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
