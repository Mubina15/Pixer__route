import './App.css';
import { Footer, Intro, Section_1, Section_2, Section_3 } from './Components';


import { Header } from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';


function App() {

  return (

    <div>
      <Header />

      <Routes>
          <Route path='/' element={<Intro />} />
          <Route path='/Xizmatlar' element={<Section_1 />} />
          <Route path='/portfolio' element={<Section_2 />} />
          <Route path='/jamoa' element={<Section_3 />} />
          <Route path='/blog' element={<Section_3 />} />
          <Route path='/kontakt' element={<Footer />} />
          <Route path='*' element={<h1>Error</h1>} />
      </Routes>
    </div>

  )
}

export default App;
