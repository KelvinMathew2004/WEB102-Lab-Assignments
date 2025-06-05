import './App.css';
import Calendar from './components/Calendar'

const App = () => {

  return (
    <div className="App">
      <h1>Itinerary for 7 days in Chicago 🏙️</h1>
      <p style={{fontWeight: 'bold'}}>Welcome to Chicago, Natalia! Check out this calendar to get to know the city and see all the sights during your stay.</p>
      <Calendar />
    </div>
  )
}

export default App
