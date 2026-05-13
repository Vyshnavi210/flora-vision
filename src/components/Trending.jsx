import plant2 from '../assets/plant2.png'

function Trending() {

  return (

    <section className="max-w-[430px] mx-auto px-6 py-16">

      <h2 className="text-4xl font-bold text-center mb-12">
        Trending Plants
      </h2>

      <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-[35px] p-6">

        <img
          src={plant2}
          className="w-full object-contain"
        />

        <h2 className="text-4xl font-bold leading-tight mt-8">
          For Your Desk Decorations
        </h2>

        <p className="text-gray-300 mt-5 leading-8">
          Beautiful indoor plant for your workspace and home decoration.
        </p>

        <h3 className="text-green-300 text-5xl font-bold mt-8">
          Rs. 599/-
        </h3>

        <button className="border border-white px-6 py-3 rounded-full mt-8">
          Explore
        </button>

      </div>

    </section>

  )
}

export default Trending