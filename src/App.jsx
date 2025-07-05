import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar"
import NewsBoard from "./Components/NewsBoard"
import { useState } from "react"


const App = () => {
  const [category, setCategory] = useState("general"); 

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsBoard  category={category}/>
      <Footer />
    </div>
  )
}

export default App
