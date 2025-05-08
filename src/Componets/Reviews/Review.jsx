import React from 'react'
import ReviewCard from '../../Layoutsmy/ReviewCard';
import reviewImg1 from '../../assets/pic1.png'
import reviewImg2 from '../../assets/pic2.png'
import reviewImg3 from '../../assets/pic3.png'

const Review = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-[#FDE9CC]'>
      <h1 className='font-semibold text-4xl lg:mt-14 mt-24 mb-8'>Customer's  Reviews</h1>

      <div className='flex  flex-col lg:flex-row justify-center py-4 my-4 gap-5'>
        <ReviewCard  img={ reviewImg1 } review="The best cappuccino in town! Cozy atmosphere and super friendly staff. I love spending my mornings here First time here and already obsessed!." title="Sarumathi" />
        <ReviewCard  img={ reviewImg2 } review="Great selection of pastries and the cold brew is spot on. Wi-Fi is fast, perfect for working remotely First time here and already obsessed!." title="Vasanth" />
        <ReviewCard  img={ reviewImg3 } review="Super chill place. Music isn’t too loud and the coffee hits just right. The baristas really know their stuff First time here and already obsessed!." title="Kaviya" />
      </div>
    </div>
  )
}

export default Review
