import { Home, Services, Banner } from './pages/index'
import Header from "./components/Header/Header"

function App() {
  return (
    <div className="w-full min-h-screen bg-[rgb(11,21,60)] text-white cursor-default">
      <Header/>
      <Home/>
      <Banner/>
      <Services/>
    </div>
  )
}

export default App