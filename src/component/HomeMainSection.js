import React, { useState, useEffect } from 'react';
import '../HomeMainSection.css'
import reviews from '../data/reviews';


function HomeMainSection () {
    const [reviewsData, setReviews] = useState([]);
    useEffect(() => {
        const getRandomReviews = () => {
          const shuffledReviews = reviews.sort(() => 0.5 - Math.random());
          const selectedReviews = shuffledReviews.slice(0, 2);
          return selectedReviews;
        };
        setReviews(getRandomReviews());
      }, []);
    return (
    <div>
        <div class="about-us">
            <table>
                <td><h1> <b> ABOUT US </b> </h1> </td>
                <br></br>
                <tr> <td> <img src={process.env.PUBLIC_URL + '/images/sportcar.avif'} alt="sportcar" align="left">
                </img> </td>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <font size="+1.75"> <i> Our <b>goal</b> is to make your dreams a reality with the most luxurious prices on the market. </i></font> <br /><br />
                <font size="+1.75"> <i> Welcome to <b>Ziddy's Car Dealership</b> where we aim to deliver the experince of a lifetime. </i> </font>
            </tr></table>
        </div>
        <a class="shop-now" href="products">SHOP NOW!</a>

        <h1 align="center"> <b> Customer Reviews </b> </h1>
        <div className="home-main-section">
            {reviewsData.map((review, index) => (
                <div key={index} className="customer-review">
                <h3>{review.customerName}</h3>
                <p>{review.reviewContent}</p>
                <div className="rating">
                    Rating: {'★'.repeat(review.stars)}
                </div>
        </div>
      ))}
    </div>

    </div>
    );
}
export default HomeMainSection;

