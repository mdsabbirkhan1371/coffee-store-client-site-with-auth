import { useLoaderData} from "react-router-dom"
import CoffeeCard from "./Components/CoffeeCard"
import { useState } from "react"




function App() {
  
  const coffeesData = useLoaderData()

  const [coffees,setCoffees] = useState(coffeesData)

  return (
    <div className="m-24">
      
      <h3 className='text-2xl text-center'>Hello COffee lover</h3>

      <div className="grid md:grid-cols-2 gap-5 justify-between items-center">
          {
            coffees.map(coffee=><CoffeeCard
            coffee={coffee}
            key={coffee._id}
            coffees={coffees}
            setCoffees={setCoffees}
            ></CoffeeCard>)
          }
      </div>
      
    </div>
  )
}

export default App
