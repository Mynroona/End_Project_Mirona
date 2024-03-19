
import React, { useState } from "react";
import "../styles.css"


export default function FeatureCard(featureCard) {
    return (

        <div className="feature-card">
            <div className="feature-card-icon">
                <img src={featureCard.icon} alt="" />
            </div>
            <div className="feature-card-title public-sans-400">{featureCard.title}</div>
            <p className="feature-card-desc public-sans-300" >{featureCard.description}</p>
        </div>

    )
};  
