import { Home, Services, Banner } from './pages/index'
import Header from "./components/Header/Header"

function App() {
  return (
    <div className="w-full min-h-screen bg-[#0B153C] text-white cursor-default">
      <Header/>
      <Home/>
      <Banner/>
      <Services/>
    </div>
  )
}

export default App