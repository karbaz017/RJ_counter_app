import React, { Component } from "react";

import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../utils/paginate";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: "",
  };

  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres: genres });
  }

  deleteMovie = (id) => {
    this.setState({ movies: this.state.movies.filter((ele) => ele._id != id) });
  };

  moviesList = () => {
    return (
      <table>
        {this.state.movies.map((ele) => {
          <tr>{ele.title}</tr>;
        })}
      </table>
    );
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  render() {
    const count = this.state.movies.length;
    const {
      pageSize,
      currentPage,
      selectedGenre,
      movies: allMovies,
    } = this.state;

    if (this.state.movies.length == 0) return <p>There are no movies</p>;

    const filteredMovies =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id == selectedGenre._id)
        : allMovies;

    const movies = paginate(filteredMovies, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <p>{filteredMovies.length} movies in the database</p>
          <table>
            <th>
              <td>Title</td>
              <td>Genre</td>
              <td>In Stock</td>
              <td>Rental Rate</td>
            </th>
            {movies.map((element) => (
              <tr key={element._id}>
                <td>{element.title}</td>
                <td>{element.genre.name}</td>
                <td>{element.numberInStock}</td>
                <td>{element.dailyRentalRate}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm m2"
                    onClick={() => this.deleteMovie(element._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </table>
          <Pagination
            itemsCount={filteredMovies.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
