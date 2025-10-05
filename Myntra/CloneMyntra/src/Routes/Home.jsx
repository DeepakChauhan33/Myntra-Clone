import React from 'react'
import Display from "../components/Dispaly"

const Home = () => {

    const Item={
    name:"GYM Itmes",
    img:"../Photos/Myntra_logo.png",
    dscr:"sndjnsa jio  n cnabkjndxa djba xkjbqsx   xvbajweff v jehf kjbAS X SD ABDCK",
    rating:"4.5",
  };

    return (
        <main>
            <Display item={Item} />
        </main>
    )
}

export default Home
