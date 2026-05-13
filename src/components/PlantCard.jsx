function PlantCard({ image, title, price }) {

    return (
  
      <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-[30px] p-5 shadow-2xl hover:-translate-y-2 transition-all duration-300">
  
        <img
          src={image}
          alt={title}
          className="w-[130px] h-[130px] object-contain mx-auto"
        />
  
        <h3 className="text-xl font-semibold mt-5 leading-tight">
          {title}
        </h3>
  
        <p className="text-green-300 text-lg mt-3">
          {price}
        </p>
  
      </div>
  
    )
  }
  
  export default PlantCard