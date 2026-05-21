import { Link, useLocation } from "react-router-dom";
import { Globe, User } from "lucide-react";

export default function Navbar() {

const location = useLocation();

const navItems = [

{
name:"Home",
path:"/"
},

{
name:"Packages",
path:"/packages"
},

{
name:"Plan My Trip",
path:"/planner"
},

{
name:"My Dashboard",
path:"/dashboard"
}

];

return(

<nav className="

sticky
top-0

z-50

bg-white/95

backdrop-blur-md

border-b

border-neutral-100

">

<div className="

max-w-7xl

mx-auto

flex

items-center

justify-between

px-8
py-5

">

{/* LOGO */}

<Link to="/planner">

<div className="flex items-center gap-3">

<div className="

w-10
h-10

rounded-full

bg-gradient-to-r

from-blue-500

to-purple-500

"

>

</div>

<h1 className="

text-[28px]

font-bold

bg-gradient-to-r

from-blue-600

to-purple-500

bg-clip-text

text-transparent

tracking-tight

">

VoyageAI

</h1>

</div>

</Link>

{/* NAV */}

<div className="

hidden
md:flex

items-center

gap-12

text-[17px]

font-medium

text-neutral-600

">

{

navItems.map((item)=>(

<Link

key={item.name}

to={item.path}

className={`

transition

${

location.pathname===item.path

?

"text-purple-600"

:

"hover:text-purple-500"

}

`}

>

{item.name}

</Link>

))

}

</div>

{/* RIGHT */}

<div className="flex items-center gap-5">

<button className="

flex

items-center

gap-2

text-neutral-600

"

>

<Globe size={18}/>

₹ INR

</button>

<button className="

w-10
h-10

rounded-full

bg-gradient-to-r

from-blue-500

to-purple-500

text-white

flex

items-center

justify-center

"

>

<User size={18}/>

</button>

</div>

</div>

</nav>

)

}