import { useNavigate } from "react-router-dom";
import hero from "../../assets/hero.png";

export default function FeaturedBanner(){

const navigate=useNavigate();

function requireSignIn(){

if(localStorage.getItem("voyageaiSignedIn")!=="true"){
navigate("/login",{state:{redirectTo:"/packages"}});
return;
}

alert("Package details are ready for signed-in users.");

}

return(

<section className="

relative

h-[560px]

overflow-hidden

rounded-[28px]

mb-12

">

<img
src={hero}
alt="Bali beach destination"
className="

absolute

w-full
h-full

object-cover

"
/>

<div className="

absolute
inset-0

bg-gradient-to-r

from-black/90
via-black/55
to-black/10

"/>

<div className="

absolute

left-8
md:left-12

bottom-12

text-white

max-w-2xl

">

<p className="

uppercase

tracking-[0.25em]

text-sky-300

mb-4

">

FEATURED DESTINATION

</p>

<h1 className="

text-5xl
md:text-7xl

font-black

leading-none

mb-6

">

Bali Escape

</h1>

<p className="

text-xl
md:text-2xl

leading-relaxed

text-white/90

mb-8

">

Luxury beach retreat with private villas, cultural immersion,
unforgettable sunsets, and tailored experiences.

</p>

<div className="flex flex-col sm:flex-row gap-4">

<button
onClick={requireSignIn}
className="

px-8
py-4

rounded-full

bg-white
text-black

font-bold

hover:scale-105

transition-all

">

Explore Package

</button>

<button
onClick={requireSignIn}
className="

px-8
py-4

rounded-full

bg-white/10

backdrop-blur-lg

border
border-white/20

font-semibold

hover:bg-white/20

transition-all

">

+ Wishlist

</button>

</div>

</div>

</section>

);

}
