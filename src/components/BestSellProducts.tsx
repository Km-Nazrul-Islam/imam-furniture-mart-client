import Image from "next/image"
import { FaStar, FaStarHalfAlt } from "react-icons/fa"

const BestSellProducts = () => {
  return (
    <section className="bg-gray-800 p-10">
      <h1 className="text-4xl text-white text-center font-bold mb-4">
        Best Sell Furniture
      </h1>
      <p className="text-gray-300 text-center">
        Our companys top selling products include a range of stylish and
        functional furniture items such as beds, cabinets, almirahs, sofas,
        chairs, and dressing tables. Each of these products is crafted with the
        utmost care and attention to detail, using high-quality materials to
        ensure durability and longevity. Our customers appreciate the stylish
        design and practical features of these products, making them some of our
        most popular offerings. Trust our company to provide you with the best
        in functional and fashionable furniture for your home
      </p>
      <div className="bestSellWrapper grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
        <div className="bestSellCard mt-8 bg-neutral-100 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 border border-gray-300 rounded-lg cursor-pointer">
          <div className="p-4">
            <Image
              className="rounded-lg"
              src="/img/categories/imam-bed.jpg"
              width={400}
              height={400}
              alt=""
            />
          </div>
          <div className="p-4">
            <p className="text-justify">
              The Imam Wooden bed is a high-quality product that combines style
              and durability. Its sturdy construction and elegant design make it
              a great addition to any bedroom.
            </p>
            <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center my-4">
              <h3 className="">Imam Bed</h3>
              <div className="flex gap-2 text-amber-600">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <button className="">Product Details</button>
            </div>
          </div>
        </div>
        <div className="bestSellCard mt-8 bg-neutral-100 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 border border-gray-300 rounded-lg cursor-pointer">
          <div className="p-4">
            <Image
              className="rounded-lg"
              src="/img/categories/imam-sofa.jpg"
              width={400}
              height={400}
              alt=""
            />
          </div>
          <div className="p-4">
            <p className="text-justify">
              Imam Wooden Sofa is a high-quality piece of furniture that boasts
              durability and elegance. Crafted with precision and care, it is a
              symbol of luxury and comfort.
            </p>
            <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center my-4">
              <h3 className="">Imam Sofa</h3>
              <div className="flex gap-2 text-amber-600">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <button className="">Product Details</button>
            </div>
          </div>
        </div>
        <div className="bestSellCard mt-8 bg-neutral-100 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 border border-gray-300 rounded-lg cursor-pointer">
          <div className="p-4">
            <Image
              className="rounded-lg"
              src="/img/categories/dining2.jpg"
              width={400}
              height={400}
              alt=""
            />
          </div>
          <div className="p-4">
            <p className="text-justify">
              The Imam wooden dining table is a high-quality piece of furniture
              that boasts durability and elegance. It provides a sturdy surface
              for dining and entertaining guests.
            </p>
            <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center my-4">
              <h3 className="">Imam Dining</h3>
              <div className="flex gap-2 text-amber-600">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <button className="">Product Details</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestSellProducts
