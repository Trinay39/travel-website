import { useState } from "react";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Planner() {

const navigate=useNavigate();

const interestsOptions=[
"Adventure",
"Beaches",
"Nightlife",
"Nature",
"Food",
"Trekking",
"Temples",
"Luxury",
"Family",
"Honeymoon",
"Shopping",
"Photography"
];

const dietaryOptions=[
"Vegetarian",
"Vegan",
"Halal",
"Jain",
"No Restrictions"
];

const accessibilityOptions=[
"Kid Friendly",
"Senior Friendly",
"Wheelchair Friendly",
"Pet Friendly"
];

const [tripData,setTripData]=useState({

destination:"",
duration:7,

budgetMin:30000,
budgetMax:60000,

travelStyle:"",
travelers:2,

month:"",

tripType:"",
hotel:"",
transport:"",
pace:"",
weather:"",

interests:[],
dietary:[],
accessibility:[]

});

function handleChange(e){

setTripData({

...tripData,

[e.target.name]:
e.target.value

});

}

function toggleOption(type,item){

setTripData(prev=>({

...prev,

[type]:

prev[type].includes(item)

?

prev[type].filter(

i=>i!==item

)

:

[

...prev[type],
item

]

}));

}

function generateTrip(){

if(localStorage.getItem("voyageaiSignedIn")!=="true"){

navigate("/login",{
state:{redirectTo:"/planner"}
});

return;

}

console.log(tripData);

alert(

"Your itinerary preferences are ready. AI generation backend is coming next."

);

}

return(

<div className="

min-h-screen

bg-gradient-to-br

from-cyan-50

via-white

to-purple-50

px-6

py-10

">

<div className="

max-w-6xl

mx-auto

">

{/* HEADER */}

<div className="text-center mb-10">

<h1 className="

text-5xl

md:text-6xl

font-black

text-[#16112F]

mb-4

">

Plan Your Dream Trip

</h1>

<p className="

text-neutral-500

text-lg

max-w-2xl

mx-auto

">

Tell us your preferences
and VoyageAI will craft
your perfect itinerary.

</p>

</div>

{/* FORM */}

<div className="

bg-white

rounded-3xl

border

shadow-sm

p-8

">

<div className="

grid

md:grid-cols-2

gap-6

">

{/* DESTINATION */}

<div>

<label>

Destination *

</label>

<div className="relative">

<MapPin

size={18}

className="

absolute

left-4

top-5

text-gray-400

"

/>

<input

name="destination"

placeholder="e.g. Bali, Paris, Goa..."

onChange={handleChange}

className="

w-full

mt-2

pl-11

p-4

border

rounded-xl

outline-none

focus:ring-2

focus:ring-purple-400

"

/>

</div>

</div>

{/* DURATION */}

<div>

<label>

Duration (Days)

</label>

<input

type="number"

name="duration"

value={tripData.duration}

onChange={handleChange}

className="

w-full

mt-2

p-4

border

rounded-xl

"

/>

</div>

<div>

<label>

Budget Min (INR)

</label>

<input

name="budgetMin"

value={tripData.budgetMin}

onChange={handleChange}

className="

w-full

mt-2

p-4

border

rounded-xl

"

/>

</div>

<div>

<label>

Budget Max (INR)

</label>

<input

name="budgetMax"

value={tripData.budgetMax}

onChange={handleChange}

className="

w-full

mt-2

p-4

border

rounded-xl

"

/>

</div>

<div>

<label>

Travel Style

</label>

<select

name="travelStyle"

onChange={handleChange}

className="

w-full

mt-2

p-4

border

rounded-xl

"

>

<option>Select Style</option>

<option>Adventure</option>
<option>Luxury</option>
<option>Relaxation</option>
<option>Family</option>

</select>

</div>

<div>

<label>

Travelers

</label>

<input

type="number"

name="travelers"

value={tripData.travelers}

onChange={handleChange}

className="

w-full

mt-2

p-4

border

rounded-xl

"

/>

</div>

<div>

<label>

Travel Month

</label>

<select

name="month"

onChange={handleChange}

className="

w-full

mt-2

p-4

border

rounded-xl

"

>

<option>Select Month</option>

{

[
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"
].map(m=>(

<option
key={m}
>

{m}

</option>

))

}

</select>

</div>

<div>

<label>

Trip Type

</label>

<select

name="tripType"

onChange={handleChange}

className="

w-full

mt-2

p-4

border

rounded-xl

"

>

<option>Leisure</option>
<option>Adventure</option>
<option>Business</option>
<option>Backpacking</option>
<option>Honeymoon</option>

</select>

</div>

<div>

<label>

Accommodation

</label>

<select

name="hotel"

onChange={handleChange}

className="

w-full

mt-2

p-4

border

rounded-xl

"

>

<option>Budget</option>
<option>3 Star</option>
<option>4 Star</option>
<option>Luxury</option>
<option>Resort</option>

</select>

</div>

<div>

<label>

Transport

</label>

<select

name="transport"

onChange={handleChange}

className="

w-full

mt-2

p-4

border

rounded-xl

"

>

<option>Flight</option>
<option>Train</option>
<option>Bus</option>
<option>Rental Car</option>

</select>

</div>

<div>

<label>

Travel Pace

</label>

<select

name="pace"

onChange={handleChange}

className="

w-full

mt-2

p-4

border

rounded-xl

"

>

<option>Relaxed</option>
<option>Balanced</option>
<option>Packed</option>

</select>

</div>

<div>

<label>

Weather Preference

</label>

<select

name="weather"

onChange={handleChange}

className="

w-full

mt-2

p-4

border

rounded-xl

"

>

<option>Cold</option>
<option>Warm</option>
<option>Moderate</option>
<option>No Preference</option>

</select>

</div>

</div>

<ChipSection
title="Interests"
options={interestsOptions}
type="interests"
tripData={tripData}
toggleOption={toggleOption}
/>

<ChipSection
title="Dietary Preference"
options={dietaryOptions}
type="dietary"
tripData={tripData}
toggleOption={toggleOption}
/>

<ChipSection
title="Accessibility"
options={accessibilityOptions}
type="accessibility"
tripData={tripData}
toggleOption={toggleOption}
/>

<button

onClick={generateTrip}

className="

w-full

mt-10

bg-purple-800

hover:bg-purple-900

transition

text-white

font-semibold

py-5

rounded-full

"

>

Generate AI Itinerary

</button>

</div>

</div>

</div>

);

}

function ChipSection({

title,
options,
type,
tripData,
toggleOption

}){

return(

<div className="mt-8">

<h3 className="mb-4">

{title}

</h3>

<div className="

flex

flex-wrap

gap-3

">

{

options.map(item=>(

<button

key={item}

type="button"

onClick={()=>toggleOption(

type,
item

)}

className={`

px-4

py-2

rounded-full

border

transition

${

tripData[type]

.includes(item)

?

"bg-purple-700 text-white"

:

"bg-white"

}

`}

>

{item}

</button>

))

}

</div>

</div>

);

}
