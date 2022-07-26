import React from "react";


export default function Item(props){

    const [readMore, setReadMore] = React.useState(false)

    return(
        <div className="item">
            <div className="item-up">
                <img src={props.img} alt="img" />
            </div>
            <div className="item-down">
                <div className="item-down-header">
                    <h3 className="item-down-title">{props.title}</h3>
                    <h3 className="item-down-price">
                        {`$ ${props.price}`}
                    </h3>
                </div>
                <div className="item-down-info">
                    <p>
                        {readMore ? props.info : `${props.info.substring(0, 200)} ... `}
                        <span className="toggle" onClick={()=>{ setReadMore(!readMore)}}>{readMore ? 'Show Less' : 'Show More'}</span>
                    </p>
                </div>
                <div className="item-down-button-wrapper">
                    <button className="item-down-button" onClick={() => props.handleDelete(props.id)}>Not Intereseted</button>
                </div>
            </div>
        </div>
    )

}