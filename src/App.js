import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import AddComics from './AddComics.js';
// import FilterComics from './Filter';
import ComicsList from './ComicsList';
import Head from './Header';
import Logo from './Logo'

class App extends Component {
  constructor() {
    super()
    this.state = {
      comics: [],
      option: '',
      list: [],
      quote: []
    }
this.editComic = this.editComic.bind(this);
this.deleteComic = this.deleteComic.bind(this);
this.addComic = this.addComic.bind(this);
this.filterComic = this.filterComic.bind(this);
this.handleChange = this.handleChange.bind(this);
this.read = this.read.bind(this);
  }
componentDidMount() {
  axios.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1').then(r => {
    this.setState({
      quote: r.data[0].content,
    }); 
    console.log(r.data);
    console.log(this.state.quote);
  })
}
  read(comics){
    axios.put(`/api/allcomics`, comics).then(comics=>{
     this.setState({
       comics: comics
     })
   }).catch(err=>console.log(err))
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
  handleChange(value) {
    if(value!=='Select'){
    this.setState({
      option: value
    }, this.filterComic)
  };
}
  render() {
   let display = this.state.comics.map((e,i) => { return (<ComicsList key={e.id} comic={e} deleteComic={this.deleteComic} editComic={this.editComic}/>)
   })
    return (
      <div className="App">
      <Head />
      <span>
      <AddComics addComic={this.addComic}/>
      </span>
      <div>
      {/* <FilterComics filterComics={this.handleChange}/> */}
      {this.state.quote}
      {display}
      </div>
      <h4>This has been a <Logo /> creation</h4>
      </div>
    );
  }
}

export default App;
