
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
import Courses from './views/Courses';
import CourseDetail from './views/CourseDetail';




function App() {
  return (
    <BrowserRouter>
      {/* <Routes>
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes> */}
      <Layout>
        <Routes>
          <Route path="/" element={<Courses />} />
          <Route path="courses/:id" element={<CourseDetail />} />
          <Route path="/new-page" element={<NewPage />} />
          <Route path="/course/new" element={<AddDeleteLesson />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
