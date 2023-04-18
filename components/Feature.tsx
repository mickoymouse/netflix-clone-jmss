import Image from 'next/image'

const Feature = () => {
  return (
    <>
        <div>
            <Image 
            width={800} height={800} 
            className="absolute top-0 left-0 w-full h-[85%] z-0 object-fill" 
            src="http://image.tmdb.org/t/p/original/wybmSmviUXxlBmX44gtpow5Y9TB.jpg" 
            alt="Spotlight Image" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center px-6 ml-12">
            <h1 className="text-3xl font-bold mb-2">Title</h1>
            <p className="mb-4">Description</p>
            <div>
            <button className="mr-4 bg-white text-black px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-300 ease-in-out">Play</button>
            <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-300 ease-in-out">More Info</button>
            </div>
        </div>
    </>
  )
}

export default Feature