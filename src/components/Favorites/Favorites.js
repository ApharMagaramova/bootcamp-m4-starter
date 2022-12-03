import React, { Component } from 'react';
import './Favorites.css';


class Favorites extends Component {
    state = {
        title: 'New list',
        movies: [
            { imdbID: 'tt0068646', title: 'The Godfather', year: 1972 }
        ]
    }
    render() { 
        return (
            <div className="favorites">
                <input value="New list" className="favorites__name" />
                <ul className="favorites__list">
                    {this.state.movies.map((item) => {
                        return <li key={item.id}>{item.title} ({item.year})</li>;
                    })}
                </ul>
                <button type="button" className="favorites__save">Save list</button>
            </div>
        );
    }
}
 
export default Favorites;