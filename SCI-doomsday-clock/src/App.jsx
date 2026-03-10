import "@/index.css"
import NavBar from "@/components/NavBar/NavBar"
import Clock from "@/components/Clock/Clock"
import Footer from "@/components/Footer/Footer"

function App() {

  return <>
    <NavBar title="SCI Doomsday Clock" />
    
    <main>
      <Clock />
    </main>
    
    <Footer />
  </>
}

export default App
