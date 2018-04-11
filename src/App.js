import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import AddComics from './AddComics.js';
// import FilterComics from './Filter';
import ComicsList from './ComicsList';
import Head from './Header';
import Foot from './Footer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      comics: [],
      option: '',
      list: [],
      quote: [],
      user: null,
      secureDataResponse: null,
    }
this.editComic = this.editComic.bind(this);
this.deleteComic = this.deleteComic.bind(this);
this.addComic = this.addComic.bind(this);
// this.filterComic = this.filterComic.bind(this);
// this.handleChange = this.handleChange.bind(this);
this.read = this.read.bind(this);
this.logout = this.logout.bind(this);
// this.fetchSecureData = this.fetchSecureData.bind(this);
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
    axios.get(`/api/allcomics`, comics).then(comics=>{
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
  login(){
    const callbackUrl = encodeURIComponent(window.location.origin + '/auth/callback');
    window.location = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/login?client=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${callbackUrl}`;
  }
  logout(){
    axios.post('/api/logout').then(() => {
      this.setState({ user: null })
    });
  }
  // getMessage(error){
  //   return error.response
  //     ? error.response.data
  //       ? error.response.data.message
  //         : JSON.stringify(error.response.data, null, 2)
  //       : error.message;
  // }
  // fetchSecureData(){
  //   axios.get('/api/secure-data').then(response => {
  //     this.setState({ secureDataResponse: JSON.stringify(response.data, null, 2)});
  //   }).catch(error => {
  //     this.setState({ secureDataResponse: this.getMessage(error) })
  //   })
  // }
  // filterComic(character){
  //   axios.get('/api/filtercomics', {character}).then(r => {this.setState({
  //     comics: r.data
  //   })})
  // }
//   handleChange(value) {
//     if(value!=='Select'){
//     this.setState({
//       option: value
//     }, this.filterComic)
//   };
// }
  render() {
   let display = this.state.comics.map((e,i) => { return (<ComicsList key={e.id} comic={e} deleteComic={this.deleteComic} editComic={this.editComic}/>)
  //  const { user, secureDataResponse } = this.state;
  //  const userData = JSON.stringify(user, null, 2);
   })
    return (
      <div className="App">
      <Head />
      <button onClick={this.login}>Sign-in</button>
      {' '}
      <button onClick={this.logout}>Sign-out</button>
      <span>
      <AddComics addComic={this.addComic}/>
      </span>
      <div>
      {/* <FilterComics filterComics={this.handleChange}/> */}
      {this.state.quote}
      {display}
      </div>
      <Foot />
      </div>
    );
  }
}

export default App;
