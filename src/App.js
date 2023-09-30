import Nav from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Posts from './components/Posts';
import Detail from './components/Detail';
import Create from './components/Create';
import Footer from './components/Footer';
function App() {
  return (
<>
<BrowserRouter>
<Nav/>

<Routes>
  <Route path='/' element={<Posts/>} ></Route>
  <Route path='/read/:id' element={<Detail/>} ></Route>
  <Route path='/newblog' element={<Create/>} ></Route>
</Routes>
<Footer />
</BrowserRouter>

</>
  );
}

export default App;
