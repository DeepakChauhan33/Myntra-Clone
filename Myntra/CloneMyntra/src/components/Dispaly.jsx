const Display = ({item})=>{
    return(
        <>
        
            <div>
                <h1>{item.name}</h1>

                <div>
                    <img src={item.img} alt="img" />
                </div>

                <div>
                    <p>
                        {item.dscr}
                    </p>
                </div>

                <div>
                    <span>
                    {item.rating}
                </span>

                <button>View</button>
                </div>
            </div>

        </>
    )
}

export default Display;