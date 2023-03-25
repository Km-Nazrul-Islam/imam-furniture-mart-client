import Image from "next/image"

const KitchenDecoration = () => {
  return (
    <section className="bg-gray-800 p-10">
      <h2 className="text-4xl text-white text-center font-bold my-4">
        New Kitchen Design Interior
      </h2>
      <p className="text-gray-300 text-center">
        Imam Stylish Kitchen Interior is a design company that specializes in
        creating modern and elegant kitchen spaces. Their designs are
        characterized by clean lines, minimalist aesthetics, and the use of
        high-quality materials. With a focus on functionality and style, Imam
        Stylish Kitchen Interior creates beautiful spaces for cooking and
        entertaining.
      </p>
      <div className="kitchenWrapper flex flex-col md:flex-row lg:flex-row gap-4 mt-8">
        <div className="rightKitchen basis-6/12">
          <div className="rightKitchenRapper flex flex-col md:flex-row lg:flex-row gap-4">
            <div className="singleSection basis-6/12">
              <Image
                className="mx-auto rounded-lg cursor-pointer"
                src="/img/kitchen/kitchen2.jpg"
                width={500}
                height={500}
                alt=""
              />
            </div>
            <div className="tripleSection basis-6/12">
              <Image
                className="mx-auto rounded-lg mb-2 cursor-pointer"
                src="/img/kitchen/kitchen3.jpg"
                width={500}
                height={500}
                alt=""
              />
              <Image
                className="mx-auto rounded-lg cursor-pointer"
                src="/img/kitchen/kitchen4.jpg"
                width={500}
                height={500}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="leftKitchen basis-6/12">
          <Image
            className="mx-auto"
            src="/img/kitchen/4.png"
            width={500}
            height={500}
            alt=""
          />
        </div>
      </div>
    </section>
  )
}

export default KitchenDecoration
