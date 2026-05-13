function TestimonialCard({ name, review }) {

    return (
  
      <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-[30px] p-6 shadow-2xl">
  
        <h2 className="text-2xl font-bold">
          {name}
        </h2>
  
        <p className="text-yellow-400 text-xl mt-3">
          ★★★★★
        </p>
  
        <p className="text-gray-300 text-base leading-7 mt-5">
          {review}
        </p>
  
      </div>
  
    )
  }
  
  export default TestimonialCard