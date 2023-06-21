import React from 'react';
import styled from "styled-components";
import review1 from "../assets/review1.jpeg";
import review2 from "../assets/review2.jpg";
import review4 from "../assets/review4.jpg";
export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Customers Experience</h2>
      </div>
    {/*  <div className="testimonials">
        <div className="testimonial">
          <div className="info">
            <img src={review1} alt="" />
            <div className="details">

                    <h3>Where the Crawdads Sing</h3>
                    <span>125 min | Mystery</span> 
            </div>
          </div>
        </div>
        <div className="testimonial">
          
          <div className="info">
            <img src={review2} alt="" />
            <div className="details">
              
            </div>
          </div>
        </div>
        <div className="testimonial">
          
          <div className="info">
            <img src={review4} alt="" />
            <div className="details">
              
            </div>
          </div>
        </div>
  </div>*/}


<div class="movies-container">
            
           <div className="box">
                <div className="box-img">
                <img src={review1} alt="" />  
                </div>
                <div className="box-body">
                    <p>The experience was surreal and beyond expectation in the valleys of Dzouko.</p>
                    <span>***** | Ratings</span> 
                </div>
                
            </div>

            <div className="box">
                <div className="box-img">
                <img src={review2} alt="" />  
                </div>
                <div className="box-body">
                    <p>It was a great experience we group of friends enjoyed a lot in the glaciers of Tawang.</p>
                    <span>**** | Ratings</span> 
                </div>
                
            </div>


            <div className="box">
                <div className="box-img">
                <img src={review4} alt="" />  
                </div>
                <div className="box-body">
                    <p>The Tumjang trekking experience our group expected is beyond harder than that but the view at the top was worth it all.</p>
                    <span>**** | Ratings</span> 
                </div>
                
            </div>

 </div>




    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }

  .movies-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0 2rem;
    gap: 2rem;
    max-width: 1400px;
    
   .box{
    width: 250px;
    background-color: aliceblue;
    padding: 1.4rem;
    border-radius: 0.5rem;
    box-shadow: rgba(230, 0, 115, 3) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    .box-img{
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-top: 0.6rem; 
      img{
    width: 90%;
    height: 12rem;
    object-fit: cover;
    border-radius: 2rem;
    box-shadow: rgba(26, 0, 13, 3) 0px 7px 29px 0px;
    &:hover{
    transform: translateX(-10px);
    transition: 0.2s all linear;
     }
    }
  }
    .box-body{ 
      p{
    text-align: center;
    font-size: 0.9rem ;
    font-weight: 400;
    margin-top: 10px;
    margin-bottom: 1px;
      }
    span{
      margin top: 1px;
    font-size: 18px;
    text-align: center;
     }
    }
  }
}





  @media screen and (min-width: 100px) and (max-width: 500px) {
    .movies-container{
      flex-direction: column;
      margin: 0;
      .box {
        flex-direction: column;
        justify-content: center;
        .box-img{
          flex-direction: relative;
          justify-content: space-around;
        }
      }
    }
  }
`;