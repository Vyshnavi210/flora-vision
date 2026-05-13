function Footer() {

  return (

    <footer className="max-w-[430px] mx-auto px-6 py-20">

      <h1 className="text-3xl font-bold text-green-300">
        FloraVision
      </h1>

      <p className="text-gray-300 leading-8 mt-6">
        From lush indoor greens to vibrant outdoor blooms.
      </p>

      <div className="mt-10">

        <h3 className="text-2xl font-semibold">
          Quick Links
        </h3>

        <div className="flex flex-col gap-4 mt-6 text-gray-300">

          <a href="#">Home</a>
          <a href="#">Plants</a>
          <a href="#">Contact</a>
          <a href="#">Privacy</a>

        </div>

      </div>

      <p className="text-gray-500 mt-14">
        FloraVision © all rights reserved
      </p>

    </footer>

  )
}

export default Footer