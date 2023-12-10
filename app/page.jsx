import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="">
        <div className="max-w-7xl mx-auto flex gap-4 flex-col md:flex-row w-[90%]">
            <div className='w-full rounded-lg border-2 border-gray-700 py-6 px-4 flex flex-col'>
              <h1 className='text-2xl md:text-3xl'>🤖Frontend and Backend Concepts Simplified.</h1>
              <p className='mt-4 text-xl text-neutral-300 flex-1'>Hello, tech enthusiasts! I'm Varghab, and I'm passionate about all things related to tech. <br /> <br />This is your go-to space for insightful and informative blogs that delve into the realms of technology, with a particular focus on NEXT.js, MERN stack, and more. </p>
              <Link href='/blogs'><div className='inline-block mt-4 text-xl w-full'>
                <button className='py-2 w-full px-4 rounded-xl border-2 border-blue-500'>Explore 🔍</button>
              </div></Link>
            </div>
            <div className='w-full rounded-lg border-2 border-gray-700 py-6 px-4'>
              <h1 className='text-2xl md:text-3xl'>🌐What You'll Find Here:</h1>
              <ul className='mt-2 text-base flex flex-col gap-4'>
                <li className='text-neutral-300'>👉🏻 <span className='font-semibold text-white'>NEXT.js Unleashed</span> <br />We'll explore NEXT.js together, and by the end of each tutorial, you'll be a pro at using this cool tool to make your websites awesome.</li>
                <li className='text-neutral-300'>👉🏻 <span className='font-semibold text-white'>React.js Made Easy</span> <br />I'm here to demystify React.js. We'll start from scratch and work our way up so you can use React.js to build user interfaces like a superhero.</li>
                <li className='text-neutral-300'>👉🏻 <span className='font-semibold text-white'>Tailwind CSS Magic</span> <br />Designing websites? Tailwind CSS is our secret weapon. I'll show you how to use it for easy and beautiful designs that impress without the headache.</li>
                <li className='text-neutral-300'>👉🏻 <span className='font-semibold text-white'>Frontend & Backend Basics</span> <br />Ever wondered how the internet works? We'll chat about frontend and backend stuff in simple terms. No jargon, just plain explanations.</li>
              </ul>
            </div>
        </div>
    </div>
  )
}
