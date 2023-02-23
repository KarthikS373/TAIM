import React from "react"

const Hero = () => {
  return (
    <section className="w-full overflow-hidden">
      <div
        className="relative h-[500px] overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
        }}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-black/75 bg-fixed">
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center text-white md:px-12">
              <h1 className="mb-12 text-5xl font-bold tracking-tight text-white/50 selection:bg-transparent selection:text-white md:text-6xl xl:text-7xl">
                Lorem Ipsum <br />
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, soluta.</span>
              </h1>
              <button className="mr-2 mb-2 rounded-lg border border-gray-800 px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-800">
                Button 1
              </button>
              <button className="mr-2 mb-2 rounded-lg px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-800">
                Button 2
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
