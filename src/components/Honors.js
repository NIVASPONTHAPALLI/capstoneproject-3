import HonorCard from "./HonorCard.js"

import hr from "../assets/curve-hr.svg"

export default function Honors(){
    return (
        <div id="honors" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Learning</h1>
            <p className="font-light text-gray-400">Present learning courses..</p>

            <div className="flex flex-col md:flex-row mt-4 gap-5">
                <HonorCard name="Frontend Developer"  desc="In front end devolpment i learn HTML,CSS and Bootstrap.I learned this courses in technical hub trainers.It was very help full for web designing" />
                <HonorCard name="Backend Developer"  desc=" JavaScript is used widely in frontend development, but in recent years is used for backend development too" />
                <HonorCard name="Data Strutures"  desc="Data structures is advanced python.Which helps in further profession" />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
            <h1 className="text-2xl font-bold"> Study</h1>
            <div className="flex flex-col md:flex-row mt-4 gap-5">
                <HonorCard name="Class 10th"  desc="Sahithi Enghishmedium School at jaggampeta . GPA:9.7"/>
                <HonorCard name="Intermediate"  desc="Pragathi vidhyala college at somalkota. Marks:935" />
                <HonorCard name="Btech"  desc="Now studying Btech 3rd year at aditya college of engineering and technology surampalem." />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
