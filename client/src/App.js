import styles from './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './Views/LandingView'
import HomeView from './Views/HomeView';
import FilterView from './Views/FilterView';
import SearchBar from './Components/SearchBar/SearchBar';
import FavoritesView from './Views/FavoritesView';
import GameDetailView from './Views/GameDetailView';
import { useState } from 'react';
import MyGamesView from './Views/MyGamesView';
import PostGameView from './Views/PostGameView';
import SearchByNameView from './Views/SearchByNameView';
import ErrorView from './Views/ErrorView'
import SuccessView from './Views/SuccessView'
function App() {
  const [login, setLogin] = useState(false)
  const getStarted = () => {
    setLogin(true)
  }

  return (
    <div>
      {(login)? <SearchBar  className={styles.searchbar }></SearchBar> : <></> }
    <Routes>
      <Route path='/' element={<Landing getStarted={getStarted}></Landing>}></Route>
      <Route path='/home' element={<HomeView></HomeView>}></Route>
      <Route path='/favorites' element={<FavoritesView></FavoritesView>}/>
      <Route path='/filterBy' element={<FilterView></FilterView>}></Route>
      <Route path='/game/:id' element={<GameDetailView></GameDetailView>}></Route>
      <Route path='/myGames' element={<MyGamesView></MyGamesView>}></Route>
      <Route path='/post' element={<PostGameView></PostGameView>}></Route>
      <Route path='/name/:name' element={<SearchByNameView></SearchByNameView>}></Route>
      <Route path='/error' element={<ErrorView/>}></Route>
      <Route path='/success' element={<SuccessView/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
