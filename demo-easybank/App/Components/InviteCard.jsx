
import React, { useState } from "react";
import "../styles.css"


export default function InviteCard() {
    return (
        <div className="card-holder invite-card ">
            <div className="card">
                <div className="title public-sans-300">Next Generation Digital Banking</div>
                <div className="desc public-sans-300" >Take your financial life online. Your easybank account will be a non-stop-shop for spending, saving, budgeting, investing, and much more.</div>
                <div className="top-margin">
                    <button className="rounded-btn">
                        Request invite
                    </button>
                </div>
            </div>
        </div>
    )
}; 