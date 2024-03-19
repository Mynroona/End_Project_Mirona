
import React, { useState } from "react";


export default function PictureCard(picInformation) {
    return (

        <div className="picture-card">
            <div className="picture-card-img">
                <img src={picInformation.image} alt="" />
            </div>
            <div className="picture-card-info">
                <div className="author public-sans-300">{picInformation.author}</div>
                <div className="title-small public-sans-700">{picInformation.title}</div>
                <p className="desc public-sans-400" >{picInformation.description}</p>
            </div>

        </div>

    )
}; 