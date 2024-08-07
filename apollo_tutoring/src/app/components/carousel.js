'use client'
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
};

const card_data = [
  {
    first_name: "Bhavya 1",
    last_name: "Patel",
    age: 17,
    description: "Best time of my life. So much education. Thanks guys! Best time of my life. So much education. Thanks guys! Best time of my life. So much education. ",
    num_tutoring: 3,
    stars: 5
  },
  {
    first_name: "Bhavya 2",
    last_name: "Patel",
    age: 17,
    description: "Best time of my life. So much education. Thanks guys! Best time of my life. So much education. Thanks guys! Best time of my life. So much education. ",
    num_tutoring: 3,
    stars: 5
  }, 
  {
    first_name: "Bhavya 3",
    last_name: "Patel",
    age: 17,
    description: "Best time of my life. So much education. Thanks guys! Best time of my life. So much education. Thanks guys! Best time of my life. So much education. ",
    num_tutoring: 3,
    stars: 5
  },
  {
    first_name: "Bhavya 4",
    last_name: "Patel",
    age: 17,
    description: "Best time of my life. So much education. Thanks guys! Best time of my life. So much education. Thanks guys! Best time of my life. So much education. ",
    num_tutoring: 3,
    stars: 4
  }
]

function Card(props) {
  return (
    <article className= {props.index === props.state ? 'active card': 'card'} >
      <h5 className="font-headFont font-bold text-2xl my-2">{props.last_name}, {props.first_name} ({props.age})</h5>
      <p>{props.description}</p>
      <p className="font-paraFont italic text-xl font-light my-3">Completed {props.num_tutoring} tutoring sessions</p>
      <div className="flex flex-row mx-auto">
        { (props.index !== props.state) ? 
        Array.from({ length: 5 }, (_, index) => <img key={crypto.randomUUID()} src = "images/stars/inactive_star.svg" className="star"/>) 
        : (
        [Array.from({ length: props.stars }, (_, index) => <img key={crypto.randomUUID()} src = "images/stars/star.svg" className = "star"/>) ,
        Array.from({ length: 5-props.stars }, (_, index) => <img key={crypto.randomUUID()} src = "images/stars/non_filled_star.svg" className="star"/>) ]
        )
        } 
      </div>
    </article>
  )
}



export function Carousel_Component() {
  const [activeIndex, setActiveIndex] = useState(1)
  
const CustomRightArrow = ({ onClick }) => {
  return (
    <button onClick={() => onClick()} className="right-4 carousel_button">
      <img src="images/arrows/carousel_arrow.svg" className="transform rotate-180"/>
    </button>
  )
}

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button onClick={() => onClick()} className="left-4 carousel_button">
      <img src="images/arrows/carousel_arrow.svg" className=""/>
      </button>
  )
}

  const changeSlide = (previousSlide, currentSlide, dataSize) => {
        let current_index = currentSlide.currentSlide
        let active_num = current_index % dataSize + 1
        if ((active_num) == (dataSize)) 
          {active_num = 0} 

        setActiveIndex(active_num) 
        console.log(activeIndex, active_num)
    }

    return(
    <Carousel  responsive={responsive}  
    afterChange={(previousSlide, currentSlide) => changeSlide(previousSlide, currentSlide, card_data.length)}
    arrows
    infinite={true}
    swipeable={false}
    draggable={false}
    keyBoardControl={true}
    customRightArrow={ 
      <CustomRightArrow />
    }
    customLeftArrow={
      <CustomLeftArrow />
    }
    >
      {
        card_data.map((item, index) => (
          <Card {...item} index = {index} state = {activeIndex} key = {index}/>
        ))
      }
    </Carousel >
  )
}