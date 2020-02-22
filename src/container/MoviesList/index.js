import React from 'react'
import Header from '../../components/Header'
import Card from '../../components/Card'
import styled from 'styled-components'
import axios from 'axios'

const StyledMoviesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
`

const StyledInput = styled.input`
  width: 30%;
  height: 70%;
  background: #eee;
  border: none;
  border-radius: 20px;
  padding-left: 20px;
`

const StyledButton = styled.button`
  color: white;
  background-color: #4285f4;
  padding: 12px 15px;
  border: none;
  border-radius: 6px;
  margin: 10px;
  font-weight: bold;
`

class MovieList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: [],
      input: '',
      page: 1
    }
  }

  getData = (path, pageNumber, query) => {
    let url = `http://api.themoviedb.org/3/${path}?api_key=004cbaf19212094e32aa9ef6f6577f22&page=${pageNumber}`
    if (query !== null) {
      url += `&query=${query}`
    }
    return axios.get(url)
  }

  onInputChange = e => {
    this.setState({
      input: e.target.value
    })

    const axiosRequest = this.getData('search/movie', 1, e.target.value)
    axiosRequest
      .then(response => {
        console.log(response.data)
        this.setState({
          movies: [...response.data.results],
          page: 1
        })
      })
      .catch(e => console.log(e))
  }

  loadMore = () => {
    let {page, movies, input} = this.state
    page += 1
    let path = 'discover/movie'
    let query = null
    if (input !== '') {
      path = 'search/movie'
      query = input
    }
    const axiosRequest = this.getData(path, page, query)
    axiosRequest
      .then(response => {
        console.log(response.data)
        this.setState({
          movies: [...movies, ...response.data.results],
          page: page
        })
      })
      .catch(e => console.log(e))
  }

  componentDidMount() {
    try {
      const axiosRequest = this.getData('discover/movie', 1, null)
      axiosRequest
        .then(response => {
          console.log(response.data)
          this.setState({
            movies: response.data.results
          })
        })
        .catch(e => console.log(e))
    } catch (e) {
      console.log('ERror ' + e)
    }
  }

  render() {
    const {movies, input} = this.state
    console.log(movies.length, 'Length')
    return (
      <div>
        <Header>
          <StyledInput value={input} onChange={e => this.onInputChange(e)} />
        </Header>
        <StyledMoviesContainer>
          {movies.map((movie, i) => {
            return <Card key={i} movie={movie} />
          })}
        </StyledMoviesContainer>
        <StyledButton onClick={this.loadMore}>Load More</StyledButton>
      </div>
    )
  }
}

export default MovieList
