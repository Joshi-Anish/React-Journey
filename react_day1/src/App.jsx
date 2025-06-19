import { useState } from 'react'
import './App.css'
import Day2 from './Day2'

function App() {
    const [count, setCount] = useState(0)
    const items =['item1', 'item2', 'item3', 'item4', 'item5']

    const production=[{
        title:'food1',
        description:'description of the card1',
    },
    {
        title:'food2',
        description:'description of the card2',
    },
    {
        title:'food3',
        description:'description of the card3',
    },{
        title:'food4',
        description:'description of the card4',
    },{
        title:'food5',
        description:'description of the card5',
    }

    ]
    return (
        <div className='flex gap-2 flex-wrap'  >{
        //    items.map((item, index) => <Day2 key={index} title={item} description="descrption of the card"/>)
              production.map((item, index) =>  (        
                 <Day2 
              key={index}
                data={item}
                />))
            }
        </div>
        
    )

}
export default App