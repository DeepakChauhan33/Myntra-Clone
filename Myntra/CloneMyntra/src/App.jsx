import Display from "./components/Dispaly";
import Footer from "./components/Footer"
import Header from "./components/Header"


function App() {

  const Item={
    name:"GYM Itmes",
    img:"../Photos/Myntra_logo.png",
    dscr:"sndjnsa jio  n cnabkjndxa djba xkjbqsx   xvbajweff v jehf kjbAS X SD ABDCK",
    rating:"4.5",
  };

  return (
    <>

        <Header/>
        <main>
          <Display item={Item}/>
        </main>
        <Footer/>

     </>
  )
}

export default App
