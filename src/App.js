import './App.css';
import NavBar from './components/Navbar';
import Main from './components/Main';
import data from './data.js'

function App() {
  const main = data.map(item => {
    return (<Main
      id={item.id}
      {...item}
    />)
  })
  return (
    <div className="App">
      <NavBar />
      {main}
    </div>
  );
}
export default App;
