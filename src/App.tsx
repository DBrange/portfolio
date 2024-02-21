import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import WhoAmI from './pages/WhoAmI/WhoAmI';
import WorkExperience from './pages/WorkExperience/WorkExperience';
import "./common/styles/main.scss";

function App() {

  return (
    <div className="app-container">
      <Header />
      <Main>
        <Home />
        <WhoAmI />
        <WorkExperience />
        <Projects />
      </Main>
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App
