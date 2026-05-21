export default function Testimonials() {

  const reviews=[

    {
      name:"Sarah Chen",
      role:"Solo Traveller",
      text:"The AI itinerary generator planned my Japan trip better than I ever could."
    },

    {
      name:"Rahul Mehta",
      role:"Adventure Explorer",
      text:"Clean interface, smart recommendations, and genuinely useful travel planning."
    },

    {
      name:"Emily Carter",
      role:"Luxury Traveler",
      text:"Everything felt personalized, premium, and incredibly easy to use."
    }

  ];

  return (

    <section className="mt-44">

      <div className="text-center mb-24">

        <span className="uppercase tracking-[0.25em] text-sky-600 font-semibold">

          TESTIMONIALS

        </span>

        <h2 className="

        text-5xl
        lg:text-6xl

        font-black

        mt-8
        mb-8

        ">

          Loved By

          <span className="bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">

            {" "}Travelers Worldwide.

          </span>

        </h2>

      </div>

      <div className="grid lg:grid-cols-3 gap-8">

        {reviews.map((review,idx)=>(

          <div

            key={idx}

            className="

            rounded-[36px]

            backdrop-blur-xl
            bg-white/70

            border
            border-neutral-200

            p-9

            shadow-[0_20px_60px_rgba(0,0,0,0.05)]

            hover:-translate-y-2

            transition-all

            "

          >

            <div className="flex items-center gap-5 mb-8">

              <div className="

              w-16
              h-16

              rounded-full

              bg-gradient-to-r
              from-sky-500
              to-purple-500

              flex
              items-center
              justify-center

              text-white
              font-bold
              text-xl

              ">

                {review.name[0]}

              </div>

              <div>

                <h4 className="font-bold text-lg">

                  {review.name}

                </h4>

                <p className="text-neutral-500">

                  {review.role}

                </p>

              </div>

            </div>

            <div className="text-yellow-500 text-xl mb-6">

              ★★★★★

            </div>

            <p className="text-neutral-600 leading-relaxed">

              "{review.text}"

            </p>

          </div>

        ))}

      </div>

    </section>

  );

}