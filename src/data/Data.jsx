import React from "react";

export default function getData(){
    
    const [data , setData] = React.useState([])
    
    React.useEffect(()=>{
        fetch('https://course-api.com/react-tours-project')
            .then(res => res.json())
            .then( labels => setData(labels))
    }, [])

    return (
        data
    )
}