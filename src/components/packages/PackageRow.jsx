import { useNavigate } from "react-router-dom";
import hero from "../../assets/hero.png";

const packages=[
{
id:1,
title:"Swiss Alps",
meta:"8 Days / Luxury Adventure",
price:"1,80,000",
rating:"4.9"
},
{
id:2,
title:"Goa Coast",
meta:"4 Days / Beach Escape",
price:"42,000",
rating:"4.7"
},
{
id:3,
title:"Kerala Retreat",
meta:"6 Days / Nature and Wellness",
price:"68,000",
rating:"4.8"
},
{
id:4,
title:"Dubai Lights",
meta:"5 Days / City Luxury",
price:"1,25,000",
rating:"4.8"
}
];

export default function PackageRow({title}){

const navigate=useNavigate();

function requireSignIn(){

if(localStorage.getItem("voyageaiSignedIn")!=="true"){
navigate("/login",{state:{redirectTo:"/packages"}});
return;
}

alert("Package interaction backend is coming next.");

}

return(

<section className="mb-16">

<div className="

flex
justify-between
items-end
gap-4

mb-6

">

<div>

<h2 className="

text-3xl
md:text-4xl

font-black

text-neutral-950

">

{title}

</h2>

</div>

<button
onClick={requireSignIn}
className="

text-sky-600

font-semibold

hover:text-sky-800

transition-colors

">

View All {"->"}

</button>

</div>

<div className="

grid
sm:grid-cols-2
xl:grid-cols-4

gap-6

">

{packages.map((item)=>(

<button
key={`${title}-${item.id}`}
type="button"
onClick={requireSignIn}
className="

group

text-left

bg-white

rounded-[24px]

overflow-hidden

border
border-neutral-200

shadow-sm

hover:-translate-y-1
hover:shadow-xl

transition-all

"
>

<img
src={hero}
alt={item.title}
className="

w-full

h-56

object-cover

"
/>

<div className="p-6">

<div className="

flex
justify-between
items-start
gap-4

mb-3

">

<h3 className="

text-2xl

font-black

text-neutral-950

">

{item.title}

</h3>

<span className="

text-yellow-500

font-bold

">

* {item.rating}

</span>

</div>

<p className="

text-neutral-500

mb-5

">

{item.meta}

</p>

<div className="

flex
justify-between
items-center

">

<p className="

text-sky-600

font-black
text-2xl

">

Rs. {item.price}

</p>

<span className="

text-sm
font-semibold
text-neutral-500

group-hover:text-sky-600

">

Explore

</span>

</div>

</div>

</button>

))}

</div>

</section>

);

}
