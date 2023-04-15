import styles from './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './Views/LandingView'
import HomeView from './Views/HomeView';
import SearchBar from './Components/SearchBar/SearchBar';
import FavoritesView from './Views/FavoritesView';
import { useState } from 'react';
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
    </Routes>
    </div>
  );
}

export default App;
