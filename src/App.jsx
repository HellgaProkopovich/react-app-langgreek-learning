import { Routes, Route } from 'react-router';
import Sidebar from './components/Sidebar/Sidebar';
import PageHome from './components/PageHome/PageHome';
import PageWords from './components/PageWords/PageWords';
import PagePractice from './components/PagePractice/PagePractice';
import PageNoFound from './components/PageNoFound/PageNoFound';

import './App.css';
import './variables.css';

function App() {
  return (
    <main className="maincontent">
      <Sidebar />
      <Routes>
        <Route index element={<PageHome />} />
        <Route path="words" element={<PageWords />} />
        <Route path="practice" element={<PagePractice />} />
        <Route path='*' element={<PageNoFound />} />
      </Routes>
    </main>
  );
};

export default App;
