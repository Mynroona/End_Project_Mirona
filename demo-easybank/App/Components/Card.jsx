import React, { useState } from "react";

export default function Card(cardInformation) {
    return (
        <div className="card-holder" style={{backgroundColor: cardInformation.color}}>
            <div className="card">
                <div className="title public-sans-00">{cardInformation.title}</div>
                <p className="desc public-sans-300" >{cardInformation.description}</p>
                <div className="card-rest">
                    {cardInformation.rest}
                </div>
            </div>
        </div>
    )
}; 