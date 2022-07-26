import React from "react";
import Item from "./Item";
import getData from "../data/Data";

export default function ListItems(){

    const [places , setPlaces] = React.useState([])
    
    React.useEffect(()=>{
        fetch('https://course-api.com/react-tours-project')
            .then(res => res.json())
            .then( labels => setPlaces(labels))
    }, [])  

    const handleDelete = (id) => {
        setPlaces( prevPlaces => prevPlaces.filter( place =>  place.id !== id))

    }

    const items = places.map( item =>{
        return (
            <Item
            key={item.id}
            id={item.id}
            img={item.image}
            title={item.name}
            info={item.info}
            price={item.price}
            handleDelete={handleDelete}
            />
        )
    })


    return (
        <div className="items-container">
            {items}
        </div>
    )
}