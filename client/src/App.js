import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './Views/LandingView'
import HomeView from './Views/HomeView';
import SearchBar from './Components/SearchBar/SearchBar';
function App() {
  return (
    <div>
      <SearchBar></SearchBar>
    <Routes>
      <Route path='/' element={<Landing></Landing>}></Route>
      <Route path='/home' element={<HomeView></HomeView>}></Route>
    </Routes>
    </div>
  );
}

export default App;
