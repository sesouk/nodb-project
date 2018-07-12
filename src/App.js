import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import AddComics from './AddComics.js';
import ComicsList from './ComicsList';
import Head from './Header';
import Foot from './Footer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      comics: [],
    }
  }
  componentDidMount(){
    this.read()
  }
  read = () => {
    axios.get('/api/allcomics').then(r=>{
      console.log(r.data);
     this.setState({
       comics: r.data
     })
   }).catch(err=>console.log(err))
  }
  editComic = (id) => {
    axios.put(`/api/editcomics/${id}`).then(r => this.setState({
      comics: r.data
    }))
  }
  deleteComic = (id) => {
    axios.delete(`/api/deletecomics/${id}`).then(r => {
      this.setState({
        comics: r.data
      })
    })
  }
  addComic = (obj) => {
    axios.post('/api/addcomics', obj).then(r => this.setState({
      comics: r.data
    }))
  }

  render() {
   let display = this.state.comics.map((e,i) => { return (<ComicsList key={e.id} comic={e} deleteComic={this.deleteComic} editComic={this.editComic}/>)
   })
    return (
      <div className="App">
      <Head />
      <div className='input-container'>
      <AddComics addComic={this.addComic}/>
      </div>
      <div className='container'>
      {display}
      </div>
      <Foot />
      </div>
    );
  }
}

export default App;
