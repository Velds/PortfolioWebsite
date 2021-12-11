// import logo from './logo.svg';
import './App.css';
import './index.css';
import Profile from './PortfolioContainer/Home/Profile';
import Header from './PortfolioContainer/Header/Header';
import Resume from './PortfolioContainer/Resume/Resume';
import Skill from './PortfolioContainer/Skill/Skill';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Resume />
      <Skill />
    </div>
  );
}
export default App;
