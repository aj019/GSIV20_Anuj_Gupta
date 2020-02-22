import React from 'react'
import Header from '../../components/Header'
import styled from 'styled-components'
import './styles.css'
import axios from 'axios'

const StyledMovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

class MovieDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movieData: null
    }
  }
  componentDidMount() {
    const {movieId} = this.props.match.params
    console.log('movieId: ', movieId)

    if (movieId) {
      console.log('movieId: ', movieId)
      axios
        .get(
          `http://api.themoviedb.org/3/movie/${movieId}?api_key=004cbaf19212094e32aa9ef6f6577f22`
        )
        .then(response => {
          console.log(response)
          this.setState({
            movieData: response.data
          })
        })
        .catch(e => console.log(e))
    }
  }

  render() {
    const {movieData} = this.state
    if (!movieData) return <></>
    return (
      <div>
        <Header>Movie Details</Header>
        <StyledMovieDetailsContainer>
          <div className='img-container'>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
            />
          </div>
          <div>
            <h3>{movieData.title}</h3>
            <p>{movieData.release_date} | Length | Director</p>
            <p>Cast </p>
            <p>{movieData.overview}</p>
          </div>
        </StyledMovieDetailsContainer>
      </div>
    )
  }
}

export default MovieDetails
