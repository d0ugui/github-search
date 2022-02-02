import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home'; 
import { Profile } from './pages/Profile'; 

import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/profile/:id" element={<Profile />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
