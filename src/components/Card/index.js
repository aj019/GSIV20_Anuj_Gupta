import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

Card.propTypes = {
  movie: PropTypes.object
}

const StyledCard = styled.div`
  width: 150px;
  height: 175px;
  margin: 10px;
  box-shadow: 2px 2px #eee;
  border-radius: 13px;
  border: 1px solid #eee;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`

const StyledImage = styled.div`
  width: 100%;
  height: 100px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`

const MovieInfo = styled.div`
  width: 100%;
  font-size: 0.5rem;
  display: flex;
  flex-direction: row;
  padding: 10%;

  p {
    margin: 0;
    padding: 0;
    width: 100%;
  }
`

const MovieDetailsLeft = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: start;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

const MovieDetailsRight = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export default function Card(props) {
  const {movie} = props

  const handleClick = () => {
    const {movie} = props
    window.location.href = `/details/${movie.id}`
  }

  if (!movie) return <></>
  return (
    <StyledCard onClick={handleClick}>
      <StyledImage
        style={{
          background: `url(
            https://image.tmdb.org/t/p/w500/${movie.poster_path}
          ) 50% 50% no-repeat`
        }}
      />
      <MovieInfo style={{width: '100%'}}>
        <MovieDetailsLeft>
          <p>{movie.original_title}</p>
          <p>Genre</p>
          <p>Cast</p>
        </MovieDetailsLeft>
        <MovieDetailsRight>
          <p>Duration</p>
          <p>{movie.vote_average}</p>
        </MovieDetailsRight>
      </MovieInfo>
    </StyledCard>
  )
}
