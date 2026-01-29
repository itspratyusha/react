import Footer from "./Footer"
import Header from "./Header"
import Home from "./Home"
import Services from "./Services"

function App() {
  return (
    <>
    <Header />
    <div className="grid gap-4 grid-cols-3 p-4">
    <Services title="SEO"/>
     <Services title="Web Design"/>
      <Services title="Mobile App"/>
    </div>
    <Home />
    <Footer />
    
    </>
  )
}
export default App