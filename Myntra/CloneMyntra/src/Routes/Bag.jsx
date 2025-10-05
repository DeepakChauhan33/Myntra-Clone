import React from 'react'

const Bag = () => {


    const abc=(num)=>{
    for(let i=1; i>=10; i++){
        return num*i;
    }

    }
  return (
    <main>
        <h1>
            Deepak
        </h1>

        <p>
            {abc(5)}
        </p>

    </main>
  )
}

export default Bag
