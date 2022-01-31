
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './views/HomePage';
import AddDeleteLesson from './views/AddDeleteLesson';
import NewPage from './views/NewPage';
import Lessons from './views/Lessons';
import CourseViewing from './views/CourseViewing';
import ArtificialLesson from './views/ArtificialLesson';
import CyberLesson from './views/CyberLesson';
import MobileLesson from './views/MobileLesson';
import GameLesson from './views/GameLesson';




function App() {
  return (
    <BrowserRouter>
      {/* <Routes>
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes> */}
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dersler" element={<Lessons/>} />
          <Route path="/yenisayfa" element={<NewPage />} />
          <Route path="/dersler/yeni" element={<AddDeleteLesson />} />

          <Route path="/1" element={<ArtificialLesson />} />
          <Route path="/2" element={<CyberLesson />} />
          <Route path="/3" element={<MobileLesson />} />
          <Route path="/4" element={<GameLesson />} />

          <Route path="/secili" element={<CourseViewing />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
