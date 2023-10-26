import React from 'react'
import Carousel from 'react-material-ui-carousel'
import "./banner.css"
import slid1 from "./images/library.jpg"
import slid2 from "./images/award.jpg"
import slid3 from "./images/campus.jpeg"


const data = [
    slid1,
    slid2,
    slid3,

]

const Banner = () => {
    return (
        <Carousel
            className='carasousel'
            autoPlay={true}
            animation='slide'
            indicators={false}
            navButtonsAlwaysInvisible={true}
            cycleNavigation={true}
            duration='200'
            navButtonsProps={{
                style: {
                    backgroundColor: "#fff",
                    color: "#49494",
                    borderRadius: 0,
                    marginTop: -22,
                    height: "100px"

                }
            }}
        >
            {data.map((img, i) => {
                console.log(img);
                return (
                    <div className='banner-section' >
                        <img src={img} alt="" className='banner_img' />
                    </div>
                )
            })}
        </Carousel>

    )
}

export default Banner
