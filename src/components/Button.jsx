function Button({ text }) {

  return (

    <button className="border border-white px-6 py-3 rounded-full text-sm hover:bg-white hover:text-black transition duration-300 hover:scale-105">

      {text}

    </button>

  )
}

export default Button