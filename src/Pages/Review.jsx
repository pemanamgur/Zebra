import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import ReviewC from '../components/ReviewC'


function Review() {
  return (
   
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <div className="max-w-4xl w-full p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ReviewC
          imageUrl="https://picsum.photos/150"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum elit non ligula molestie."
          author="John Doe"
        />
        <ReviewC
          imageUrl="https://picsum.photos/150"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum elit non ligula molestie."
          author="Jane Smith"
        />
      </div>
    </div>
  </div>
  )
}

export default Review
