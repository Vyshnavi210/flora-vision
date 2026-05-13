import heroPlant from '../assets/heroPlant.png'

function Hero() {

  return (

    <section className="max-w-[430px] mx-auto px-6 pt-10 pb-20 text-center">

      <p className="text-green-300 text-lg">
        Plant The Future
      </p>

      <h1 className="text-6xl font-bold leading-tight mt-5">
        Earth’s Exhale
      </h1>

      <p className="text-gray-300 mt-6 leading-8">
        Beautiful indoor plants to decorate your home and workspace naturally.
      </p>

      <div className="flex justify-center gap-4 mt-10">

        <button className="bg-green-400 text-black px-7 py-3 rounded-full font-semibold">
          Buy Now
        </button>

        <button className="border border-white px-7 py-3 rounded-full">
          Explore
        </button>

      </div>

      <img
        src={heroPlant}
        className="w-full mt-14 object-contain"
      />

    </section>

  )
}

export default Hero