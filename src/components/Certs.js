import CertCard from "./CertCard.js"

import hr from "../assets/curve-hr.svg"
import mtcna from "../assets/certs/mtcna.jpg"
import adinusa from "../assets/certs/adinusa.png"
import dicodingAws from "../assets/certs/dicoding-aws.png"
import dicodingJs from "../assets/certs/dicoding-js.png"
import dicodingNetwork from "../assets/certs/dicoding-network.png"
import progateHtml from "../assets/certs/progate-htmlcss.png"
import progateJs from "../assets/certs/progate-js.png"
import fccResponsive from "../assets/certs/fcc-responsive.png"
import certi1 from "../assets/certs/certi1.png"
import certi2 from "../assets/certs/certi2.png"
import certi3 from "../assets/certs/certi3.png"
import certi4 from "../assets/certs/certi3.jpeg"

import port1 from "../assets/certs/port1.png"
import port2 from "../assets/certs/port2.png"
import port3 from "../assets/certs/port3.png"

// import 

export default function Certs(){
    return (
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Certifications</h1>
            <p className="font-light text-gray-400">Here are some of my Certifications</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="Oracle Certified Foundations" img={certi1} issued="Issued by Oracle university" date="Aug 2023" />
                <CertCard name="Digital Productivity" img={certi2} issued="Issued by unicef" date="Aug 2023" />
                <CertCard name="financial literacy" img={certi3} issued="Issued by unicef" date="Sep 2023" />
                <CertCard name="Python" img={certi4} issued="Issued by Pearson" date="April 2023" />
                {/* <CertCard name="Jaringan Komputer untuk Pemula" img={dicodingNetwork} issued="Dicodig Indonesia" date="Jan 2023" />
                <CertCard name="Responsive Web Design " img={fccResponsive} issued="Dicodig Indonesia" date="Dec 21" />
                <CertCard name="Kursus Javascript" img={progateJs} issued="Progate" date="Oct 2020" />
                <CertCard name="Kursus HTML & CSS" img={progateHtml} issued="Progate" date="Oct 2020" /> */}

            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
            <h1 className="text-2xl font-bold">Portfolio</h1>
            <p className="font-light text-gray-400">Here are some of my projects i'm completed while learnig</p>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="Capstone Project-1" img={port1} issued="Using html and css i completed this project" />
                <CertCard name="Capstone Project-2" img={port2} issued="Capstone project 2 is about my portfolio using some available templates." />
                <CertCard name="Minimal Statistic Cards" img={port3} issued="Minimal Statistic Cards using Bootsrap." />
                
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
