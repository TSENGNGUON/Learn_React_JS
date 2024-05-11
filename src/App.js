import AboutScreen from './components/Screen/AboutScreen/AboutScreen';
import TeacherListScreen from './components/Screen/TeacherListScreen/TeacherListScreen';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomeScreen from './components/Screen/HomeScreen/HomeScreen';
import MainContainer from './components/Screen/container/MainContainer';


const App = () =>{
    return(
      <BrowserRouter>
      <MainContainer>
      <Routes>
        <Route path='/' element={<HomeScreen />}/>
        <Route path='/about' element={<AboutScreen />}/>
        <Route path='/teacher' element={<TeacherListScreen />}/>
      </Routes>
      </MainContainer>
      </BrowserRouter>
    )
}

export default App;