import { Link, useLocation } from "react-router-dom";

export default function Navbar() {

  const location = useLocation();

  const loggedInPages = [
    "/packages",
    "/planner",
    "/dashboard"
  ];

  const isLoggedInPage = loggedInPages.includes(location.pathname);

  return (

    <nav className="

    w-full

    border-b
    border-neutral-200

    bg-white/90
    backdrop-blur-lg

    sticky
    top-0
    z-50

    ">

      <div className="

      w-full

      px-10
      lg:px-20

      py-5

      flex
      justify-between
      items-center

      ">

        {/* LEFT SIDE */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >

          <div className="

          w-10
          h-10

          rounded-full

          bg-gradient-to-r
          from-sky-500
          to-purple-500

          " />

          <h1 className="

          text-4xl

          font-black

          bg-gradient-to-r
          from-sky-500
          to-purple-500

          bg-clip-text
          text-transparent

          ">

            VoyageAI

          </h1>

        </Link>

        {/* RIGHT SIDE */}

        {isLoggedInPage ? (

          <Link
            to="/dashboard"
            className="flex items-center gap-4"
          >

            <div className="

            w-12
            h-12

            rounded-full

            bg-gradient-to-r
            from-sky-500
            to-purple-500

            flex
            items-center
            justify-center

            text-white
            font-bold

            ">

              N

            </div>

            <div>

              <p className="font-semibold">

                Nishaanth

              </p>

              <p className="

              text-sky-500
              text-sm

              ">

                Open Dashboard

              </p>

            </div>

          </Link>

        ) : (

          <div className="flex gap-5">

            <Link to="/login">

              <button className="

              px-8
              py-3

              rounded-full

              border
              border-neutral-300

              hover:bg-neutral-100

              transition-all

              ">

                Sign In

              </button>

            </Link>

            <Link to="/signup">

              <button className="

              px-8
              py-3

              rounded-full

              bg-black
              text-white

              shadow-lg

              hover:scale-105

              transition-all

              ">

                Sign Up

              </button>

            </Link>

          </div>

        )}

      </div>

    </nav>

  );

}