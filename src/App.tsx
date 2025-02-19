import Home from "./pages/Home"
import Services from "./pages/Services"
import Header from "./components/Header/Header"

function App() {
  return (
    <div className="w-full min-h-screen bg-[#0B153C] text-white cursor-default">
      <Header/>
      <Home/>
      <Services/>
    </div>
  )
}

export default App