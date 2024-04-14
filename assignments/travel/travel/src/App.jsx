
import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import data from './data'

function App() {
  const travelElements = data.map((element)=>{
     return(<Card
     key={element.id}
     element={element}
     />) 
     
  })

  return (
    <>
    <div className="test">test</div>
      <h1 className='travel-title'>Travel Options</h1>
      <div className='travel-container'>{travelElements}
      <Footer/>
      
      </div>
      
    </>
  )
}

export default App
