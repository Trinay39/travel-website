import { motion } from "framer-motion";

export default function Packages() {

  const trips = [

    {
      title:"Bali Escape",
      days:"5 Days",
      price:"₹65,000",
      img:"https://images.unsplash.com/photo-1537996194471-e657df975ab4"
    },

    {
      title:"Swiss Alps",
      days:"8 Days",
      price:"₹1,80,000",
      img:"https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    },

    {
      title:"Kyoto Experience",
      days:"6 Days",
      price:"₹95,000",
      img:"https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e"
    }

  ];

  return (

    <section className="mt-20 mb-32">

      <div className="text-center mb-20">

        <h2 className="text-5xl lg:text-6xl font-black mb-8">

          Featured

          <span className="bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">

            {" "}Packages

          </span>

        </h2>

      </div>

      <div className="

        grid
        lg:grid-cols-3

        gap-14

        max-w-6xl
        mx-auto

        px-4

        ">

        {trips.map((pkg,idx)=>(

          <motion.div

            key={idx}

            whileHover={{ y:-12 }}

            className="

            rounded-[32px]

            overflow-hidden

            backdrop-blur-2xl
            bg-white/70

            border
            border-neutral-200

            shadow-[0_20px_60px_rgba(0,0,0,0.08)]

            flex
            flex-col

            hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)]

            transition-all
            duration-300

            "

          >

            <img
              src={pkg.img}
              alt={pkg.title}
              className="h-[260px] w-full object-cover"
            />

            <div className="p-7 flex-1 flex flex-col justify-between">

              <div>

                <div className="flex justify-between items-center mb-5">

                  <h3 className="text-2xl font-bold">

                    {pkg.title}

                  </h3>

                  <span className="text-yellow-500 font-semibold">

                    ★ 4.9

                  </span>

                </div>

                <p className="text-neutral-500">

                  {pkg.days}

                </p>

              </div>

              <p className="text-sky-600 font-bold text-xl mt-8">

                {pkg.price}

              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>

  );

}