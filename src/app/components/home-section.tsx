import Image from 'next/image'

export default function HomeSection() {
    return (
      <div className="container mt-[50px] mx-auto px-4 pt-16 pb-24 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="z-10">
          <h1 className="text-5xl font-bold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-400 to-purple-600">
  Authenticate. Verify. Trust.
</h1>
            <p className="text-gray-300 mb-8 max-w-md">
            The decentralized infrastructure for authenticating and verifying NFTs with AI-powered image recognition and blockchain provenance.
            </p>
            <button 
              onClick={() => window.location.href = '#about'} 
            className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-full flex items-center">
            See How It Works
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"

              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <div className="flex items-center mt-8">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-red-500 border-2 border-[#0e0420]"></div>
                <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-[#0e0420]"></div>
                <div className="w-8 h-8 rounded-full bg-yellow-500 border-2 border-[#0e0420]"></div>
              </div>
              <span className="ml-4 font-bold"></span>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            {/* NFT Images */}
            <div className="absolute  top-0 right-0 w-48 h-48 transform rotate-12 z-10">
              <div className="w-full h-full rounded-lg bg-gradient-to-br from-blue-400 via-pink-500 to-red-500 shadow-lg">
                      <Image 
                        src="/nft.png" 
                        alt="nft" 
                        width={150} 
                        height={30} 
                        priority 
                      />
              </div>
            </div>
            <div className="absolute bottom-0 right-20 w-40 h-40 transform -rotate-6">
              <div className="w-full h-full rounded-lg bg-gradient-to-br from-gray-900 to-gray-600 shadow-lg overflow-hidden">
              <Image 
                        src="/NFT4K.jpeg" 
                        alt="nft" 
                        width={150} 
                        height={30} 
                        priority 
                      />
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: "url('/placeholder.svg?height=160&width=160')",
                    backgroundSize: "cover",
                    filter: "contrast(1.2) brightness(0.8)",
                  }}
                ></div>
              </div>
            </div>

  
            {/* Decorative Elements */}
            <div className="absolute top-10 right-40 text-white opacity-80">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="absolute bottom-20 left-10 text-purple-500 opacity-80">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="absolute top-40 left-20 w-8 h-8 border border-purple-500 opacity-30 transform rotate-12"></div>
          </div>
        </div>
      </div>
    )
  }
  