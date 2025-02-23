import { Home, Services, Banner, Schedule, Contact } from './pages/index'
import Header from "./components/Header/Header"

function App() {
  return (
    <div className="w-full min-h-screen bg-[rgb(11,21,60)] text-white cursor-default">
      <Header/>
      <Home/>
      <Banner/>
      <Services/>
      <Schedule/>
      <Contact/>
    </div>
  )
}

export default App