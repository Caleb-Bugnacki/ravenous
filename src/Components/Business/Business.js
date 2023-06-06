import React from "react";

const business ={
    imageSrc : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fscorpionsnowmobiles%2Fposts%2Fthe-hudson-thehudson_218hometown-history-on-display-inside-the-brand-new-hudson-%2F10163901122574815%2F&psig=AOvVaw2T7Y36kWkAr74fEsutW1oY&ust=1686153541063000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJi8_8iBr_8CFQAAAAAdAAAAABAE",
    name : "Hudson",
    address : "208 Curtis Ave",
    city : "Ironton",
    state : "Minnesota", 
    zipcode : "56455",
    category : "Cafe",
    rating : 4.8, 
    reviewCount : 62
}

function Business(){
    return (
        <div>
            <div>
                <img src={business.imageSrc}/>
            </div>
            <div>   
                <h1>{business.name}</h1>
            </div>
            <div>
                <address>{business.address} {business.city}, {business.state} {business.zipcode}</address>
                <h2>Rating: {business.rating}</h2>
                <h2>Number of reviews: {business.reviewCount}</h2>
            </div>
        </div>
    ); 
};

export default Business; 
