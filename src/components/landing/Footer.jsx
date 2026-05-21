export default function Footer() {

  return (

    <footer className="

    border-t
    border-neutral-200

    mt-12

    bg-white

    ">

      <div className="

      max-w-7xl
      mx-auto

      px-6
      py-20

      grid
      md:grid-cols-4

      gap-12

      ">

        {/* BRAND */}

        <div>

          <h2 className="

          text-3xl
          font-black

          bg-gradient-to-r
          from-sky-600
          to-purple-500

          bg-clip-text
          text-transparent

          mb-5

          ">

            VoyageAI

          </h2>

          <p className="text-neutral-500 leading-relaxed">

            Intelligent travel planning
            powered by modern experiences.

          </p>

        </div>

        {/* PRODUCT */}

        <div>

          <h3 className="font-bold mb-5">

            Product

          </h3>

          <div className="space-y-4 text-neutral-500">

            <p>AI Planner</p>
            <p>Packages</p>
            <p>Dashboard</p>

          </div>

        </div>

        {/* COMPANY */}

        <div>

          <h3 className="font-bold mb-5">

            Company

          </h3>

          <div className="space-y-4 text-neutral-500">

            <p>About</p>
            <p>Contact</p>
            <p>Careers</p>

          </div>

        </div>

        {/* SOCIAL */}

        <div>

          <h3 className="font-bold mb-5">

            Social

          </h3>

          <div className="space-y-4 text-neutral-500">

            <p>Instagram</p>
            <p>Twitter</p>
            <p>LinkedIn</p>

          </div>

        </div>

      </div>

      <div className="

      border-t
      border-neutral-200

      text-center

      py-8

      text-neutral-500

      ">

        © 2026 VoyageAI. All rights reserved.

      </div>

    </footer>

  );

}