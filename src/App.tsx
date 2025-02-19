import Home from "./pages/Home"
import Services from "./pages/Services"
import Header from "./components/Header/Header"

function App() {
  return (
    <div className="w-full min-h-screen bg-[#0B153C] text-white cursor-default py-4 px-5 md:py-4 md:px-10">
      <Header/>
      <Home/>
      <Services/>
    </div>
  )
}
export default App