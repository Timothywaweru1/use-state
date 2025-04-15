import React,{useState} from 'react'

const HookCounterFour = () => {
    const [items,setItems] = useState([])
  return (
    <div>
        <button onClick={() =>{
            setItems([...items, {
                id:items.length,
                value:Math.floor(Math.random() * 10) + 1
            }])
        }}>Add a Number</button>
        <ul>
            {
                items.map((item) => {
                    return (
                        <li key={item.id}>{item.value}</li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default HookCounterFour