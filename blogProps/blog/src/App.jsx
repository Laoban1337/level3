import main from 'main.jsx'
import "./App.css";
import Header from "./components/Header";
import BlogList from "./components/BlogList";
import Footer from "./components/Footer";


function App() {
 
  return(<div className="site-container">
  <Header />
  <BlogList />
  <Footer/>
  
  </div>)
}

export default App;
