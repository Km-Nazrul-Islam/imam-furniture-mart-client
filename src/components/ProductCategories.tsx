import Image from "next/image"

const ProductCategories = () => {
  return (
    <section className=" bg-gray-800 p-10">
      <h1 className="text-4xl text-white text-center my-16 font-bold">
        What are you looking?
      </h1>
      <div className="rapperCategories grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 py-4">
        <div className="imageCard border w-72 cursor-pointer bg-neutral-100 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 p-4 rounded-lg">
          <Image
            className="mx-auto"
            src="/img/category/bedroom.png"
            width={220}
            height={200}
            alt=""
          />
          <h2 className="text-center mb-2 text-xl text-gray-500 font-bold">
            Bedroom Collection
          </h2>
          <p className="text-center text-gray-400">
            Discover your dream bedroom with our furniture collection, featuring
            a cozy bed, elegant dressing, spacious almirah, and practical
            cabinet.
          </p>
        </div>

        <div className="imageCard border w-72 cursor-pointer bg-neutral-100 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 p-4 rounded-lg">
          <Image
            className="mx-auto"
            src="/img/category/livingroom.png"
            width={220}
            height={200}
            alt=""
          />
          <h2 className="text-center mb-2 text-xl text-gray-500 font-bold">
            Living-room Collection
          </h2>
          <p className="text-center text-gray-400">
            Discover your dream bedroom with our furniture collection, featuring
            a cozy bed, elegant dressing, spacious almirah, and practical
            cabinet.
          </p>
        </div>

        <div className="imageCard border w-72 cursor-pointer bg-neutral-100 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 p-4 rounded-lg">
          <Image
            className="mx-auto"
            src="/img/category/dining.png"
            width={220}
            height={200}
            alt=""
          />
          <h2 className="text-center mb-2 text-xl text-gray-500 font-bold">
            Dining Collection
          </h2>
          <p className="text-center text-gray-400">
            Discover your dream bedroom with our furniture collection, featuring
            a cozy bed, elegant dressing, spacious almirah, and practical
            cabinet.
          </p>
        </div>

        <div className="imageCard border w-72 cursor-pointer bg-neutral-100 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 p-4 rounded-lg">
          <Image
            className="mx-auto"
            src="/img/category/kitchen.png"
            width={220}
            height={200}
            alt=""
          />
          <h2 className="text-center mb-2 text-xl text-gray-500 font-bold">
            Kitchen Collection
          </h2>
          <p className="text-center text-gray-400">
            Discover your dream bedroom with our furniture collection, featuring
            a cozy bed, elegant dressing, spacious almirah, and practical
            cabinet.
          </p>
        </div>

        <div className="imageCard border w-72 cursor-pointer bg-neutral-100 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 p-4 rounded-lg">
          <Image
            className="mx-auto"
            src="/img/category/office.png"
            width={220}
            height={200}
            alt=""
          />
          <h2 className="text-center mb-2 text-xl text-gray-500 font-bold">
            Office Collection
          </h2>
          <p className="text-center text-gray-400">
            Discover your dream bedroom with our furniture collection, featuring
            a cozy bed, elegant dressing, spacious almirah, and practical
            cabinet.
          </p>
        </div>

        <div className="imageCard border w-72 cursor-pointer bg-neutral-100 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 p-4 rounded-lg">
          <Image
            className="mx-auto"
            src="/img/category/door.png"
            width={220}
            height={200}
            alt=""
          />
          <h2 className="text-center mb-2 text-xl text-gray-500 font-bold">
            Door Collection
          </h2>
          <p className="text-center text-gray-400">
            Discover your dream bedroom with our furniture collection, featuring
            a cozy bed, elegant dressing, spacious almirah, and practical
            cabinet.
          </p>
        </div>

        <div className="imageCard border w-72 cursor-pointer bg-neutral-100 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 p-4 rounded-lg">
          <Image
            className="mx-auto"
            src="/img/category/institute.png"
            width={220}
            height={200}
            alt=""
          />
          <h2 className="text-center mb-2 text-xl text-gray-500 font-bold">
            Institute Collection
          </h2>
          <p className="text-center text-gray-400">
            Discover your dream bedroom with our furniture collection, featuring
            a cozy bed, elegant dressing, spacious almirah, and practical
            cabinet.
          </p>
        </div>

        <div className="imageCard border w-72 cursor-pointer bg-neutral-100 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 p-4 rounded-lg">
          <Image
            className="mx-auto"
            src="/img/category/handcraft.png"
            width={220}
            height={200}
            alt=""
          />
          <h2 className="text-center mb-2 text-xl text-gray-500 font-bold">
            Hand-Craft Collection
          </h2>
          <p className="text-center text-gray-400">
            Discover your dream bedroom with our furniture collection, featuring
            a cozy bed, elegant dressing, spacious almirah, and practical
            cabinet.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProductCategories
