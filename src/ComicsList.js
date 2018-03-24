import React, {Component} from 'react';

class ComicsList extends Component {
render(){
    return (
        <div>
           <h2>{this.props.comic.character}</h2>
           <h3>{this.props.comic.title}</h3>
           <h4>{this.props.comic.pageCount}</h4>
           <h5>{this.props.song.price}</h5>
           <h6>{this.props.song.price}</h6>
           <img className="display" src={this.props.comic.cover} alt="" /><br/>
           <button onClick={()=>this.props.deleteComic(this.props.comic.id)}>Delete!</button>
           <button onClick={()=>this.props.editComic(this.props.comic.id)}>Bought!</button>
        </div>
    )
    }
}
export default ComicsList;