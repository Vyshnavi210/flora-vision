import plant1 from '../assets/plant1.png'

function BestO2() {

  return (

    <section className="max-w-[430px] mx-auto px-6 py-16">

      <h2 className="text-4xl font-bold text-center mb-12">
        Our Best O2 Plants
      </h2>

      <div className="bg-white/10 rounded-[35px] p-6">

        <img
          src={plant1}
          className="w-full object-contain"
        />

        <h2 className="text-4xl font-bold leading-tight mt-8">
          Small And Best O2 Plants Collection
        </h2>

        <p className="text-gray-300 mt-5 leading-8">
          Oxygen-producing plants help create healthier indoor spaces.
        </p>

        <button className="border border-white px-6 py-3 rounded-full mt-8">
          Explore
        </button>

      </div>

    </section>

  )
}

export default BestO2