import plant1 from '../assets/plant1.png'
import plant2 from '../assets/plant2.png'
import plant3 from '../assets/plant3.png'
import plant4 from '../assets/plant4.png'
import plant5 from '../assets/plant5.png'
import plant6 from '../assets/plant6.png'

const plants = [

  {
    image: plant1,
    name: 'Aglaonema',
    price: 'Rs. 300/-'
  },

  {
    image: plant2,
    name: 'Plantain',
    price: 'Rs. 380/-'
  },

  {
    image: plant3,
    name: 'Cactus',
    price: 'Rs. 259/-'
  },

  {
    image: plant4,
    name: 'Swiss Plant',
    price: 'Rs. 400/-'
  },

  {
    image: plant5,
    name: 'Sansevieria',
    price: 'Rs. 450/-'
  },

  {
    image: plant6,
    name: 'Agave',
    price: 'Rs. 359/-'
  }

]

function TopSelling() {

  return (

    <section className="max-w-[430px] mx-auto px-5 py-20">

      <h2 className="text-center text-4xl font-bold mb-14">
        Our Top Selling Plants
      </h2>

      <div className="grid grid-cols-2 gap-5">

        {plants.map((plant, index) => (

          <div
            key={index}
            className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[28px] p-4 shadow-xl"
          >

            <img
              src={plant.image}
              className="w-full h-[150px] object-contain"
            />

            <h3 className="text-lg font-semibold mt-4 leading-6">
              {plant.name}
            </h3>

            <p className="text-green-300 text-xl font-bold mt-3">
              {plant.price}
            </p>

            <button className="border border-white text-sm px-4 py-2 rounded-full mt-4 w-full hover:bg-white hover:text-black duration-300">
              Buy Now
            </button>

          </div>

        ))}

      </div>

    </section>

  )
}

export default TopSelling