import { Routes, Route } from 'react-router-dom';
import RootLayouts from './components/layouts/RootLayouts';
import Home from './components/pages/Home';
import Error from './components/pages/Error';
import { BazarProvider } from './context/BazarContext';

function App () {
  return (
    <BazarProvider>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home/>} />
        </Route>
        <Route path="*" element={<Error/>} />
      </Routes>
    </BazarProvider>
  )
}

export default App;