import React from 'react'
import './App.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import MoviesList from './container/MoviesList'
import MovieDetails from './container/MovieDetails'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/details/:movieId?'} component={MovieDetails}></Route>
        <Route path={'/'}>
          <div className='App'>
            <MoviesList />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
