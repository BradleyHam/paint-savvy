import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
type featuredPost = {
    title: string,
    description: string,
    image: string,
    slug: string
}
type section =  {
    title: string,
    featuredPosts: featuredPost[]
  }

function FeaturedPostsSection({section}: {section: section}) {
  return (
    <div className=' px-5 py-14'>
    <h2 className='text-black text-2xl font-bold tracking-tighter'>
         {section.title}
     </h2>
     <div className="common-problem-featured-posts flex space-x-4 overflow-x-scroll pt-[20px] pb-[40px]">
         {section.featuredPosts.map((post) => (
             <div>
                <div className="image h-[300px] w-[300px] bg-gray-200"></div>
                 {/* <Image src={post.image} alt={post.title} width={100} height={100} /> */}
                 <h3 className='text-black text-lg font-semibold tracking-tighter pt-[10px] '>{post.title}</h3>
                 <p className='text-black text-sm'>{post.description}</p>
             </div>
         ))}
     </div>
     <div className="see-more-row flex items-center space-x-2">
         <button className="see-more text-black font-semibold">See More</button>
         <FaArrowRightLong color='black' />
     </div>
 </div>
  )
}

export default FeaturedPostsSection