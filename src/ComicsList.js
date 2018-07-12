import React, {Component} from 'react';
import './ComicsList.css'

class ComicsList extends Component {
render(){
    return (
        <div>
           <h4>{this.props.comic.character}</h4>
           <p>{this.props.comic.title}</p>
           <p>{this.props.comic.pageCount}</p>
           <p>{this.props.comic.price}</p>
           <a href={this.props.comic.purchase}>Purchase Link</a>
           <p>Own it? {this.props.comic.purchased}</p>
           <img className="display" src={this.props.comic.cover} alt={this.props.comic.title} /><br/>
           <button onClick={()=>this.props.deleteComic(this.props.comic.id)}>Delete!</button>
           <button onClick={()=>this.props.editComic(this.props.comic.id)}>Buy!</button>
        </div>
    )
    }
}
export default ComicsList;