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
      <h5 className="font-headFont font-bold text-xl">{props.last_name}, {props.first_name} ({props.age})</h5>
      <p>{props.description}</p>
      <p>Completed {props.num_tutoring} tutoring sessions</p>
      <div className="flex flex-row mx-auto">
        { (props.index !== props.state) ? 
        Array.from({ length: 5 }, (_, index) => <img key={crypto.randomUUID()} src = "images/stars/inactive_star.svg" className="star"/>) 
        : (
        [Array.from({ length: props.stars }, (_, index) => <img key={crypto.randomUUID()} src = "images/stars/star.svg"/>) ,
        Array.from({ length: 5-props.stars }, (_, index) => <img key={crypto.randomUUID()} src = "images/stars/non_filled_star.svg"/>) ]
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
    <button onClick={() => onClick()} className="absolute top-1/2 right-4 w-fit px-2 py-0 cursor-pointer text-primary-400 bg-nav_colour text-4xl rounded-full items-center self-center place-self-center">
      <p className="my-auto transform -translate-y-1">{'>'}</p>
    </button>
  )
}

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button onClick={() => onClick()} className="absolute top-1/2 left-4 w-fit px-2 py-0 cursor-pointer text-primary-400 bg-nav_colour text-4xl rounded-full items-center self-center place-self-center">
      <p className="my-auto transform -translate-y-1">{'<'}</p>
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