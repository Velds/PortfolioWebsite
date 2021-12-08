// import logo from './logo.svg';
import './App.css';
import './index.css';
import Profile from './PortfolioContainer/Home/Profile';
import Header from './PortfolioContainer/Header/Header';
import Resume from './PortfolioContainer/Resume/Resume';
function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Resume />
      <div className="mt-24">Hai</div>
    </div>
  );
}
export default App;
