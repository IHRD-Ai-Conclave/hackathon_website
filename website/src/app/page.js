"use client"
import Image from 'next/image';
import AnimatedText from './component/Animatedtext';
import Timeline3 from "./timeline/Timeline3"
//import Timeline from "./timeline/Timeline"
import Prizes from "./prize/Prizes"
import Theme from "./themes/Theme"
import Flipwords from './components/ui/flip-words'
import Collapsible from './component/Collapsable';
import Faq from './component/Faq';
import Footer from './component/Footer'
import Infinite from'./component/Infinite'
import Link from 'next/link';
import Code from'./Loaders/Code'

import RegistrationFee from './RegistrationFees/RegistrationFee';
export default function Home() {
  const words = ["Journey", "Adventure", "Challenge", "Event"];

  return (
    <div className="flex flex-col">
      
        <div className="w-full dark:bg-black bg-white relative flex flex-col items-center justify-center">
  {/* Radial gradient for the container to give a faded look */}
  <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,_rgba(0,0,0,0.5),transparent)]"></div>

  <div className="flex flex-col md:flex-row w-full dark:bg-grid-white/[0.2] bg-grid-black/[0.2] ">
   
   
  <div
  style={{
    height: '57vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: '3vh',
  }}
  className="w-full md:w-1/2 p-8 md:p-16 md:pl-32"
>
  <h1 className="text-3xl md:text-5xl font-semibold mb-4">Join the</h1>
  <h1 className="text-3xl md:text-5xl font-semibold mb-4"> AI Samasya</h1>
  <h1 className="text-3xl md:text-5xl font-semibold mb-4">Hackathon</h1>
  <div className="mt-4 flex items-center">
    <h1 className="text-3xl md:text-5xl font-semibold mr-4">to</h1>
    <div style={{ position: 'relative' }}>
      {/* Ensure FlipWords is positioned correctly */}
      <Flipwords className="text-3xl md:text-5xl font-semibold text-blue-500" />
    </div>
  </div>
  <Link href='https://devfolio.co/discover'>
  <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-blue-500 hover:bg-transparent hover:text-black  dark:text-neutral-200 transition duration-200 mt-4">
     Register Now
   </button>
  </Link>


</div> 
    <div
      style={{
        width: '50vw',
        paddingTop: '4vh',
        paddingBottom: '4vh',
        overflow: 'hidden',
        borderRadius: '30px',
      }}
      className="hidden md:block"
    >
      <Image id="Floatimage" src={'/girl.png'} alt="pic" height={500} width={500} />
    </div>
  </div>

  <div className="relative">
  <div
    style={{ height: '3vh' }}
    className="bg-white dark:bg-black rounded-b-lg shadow-lg z-10"
  ></div>
</div>

  <div className="relative flex w-full h-23vh pt-vh flex-col items-center justify-center">
  {/* Add a shadow effect at the top */}
  <div className="absolute inset-0 top-0 left-0 right-0 bg-gradient-to-b from-transparent to-gray-800 h-12 z-[-1]"></div>
  
  <div className="flex justify-center text-center">
    <h2 className="text-2xl font-light">We partnered with events like</h2>
  </div>
  <div className="flex flex-col md:flex-row w-full md:w-1/2 justify-between items-center text-center mt-4 gap-10">
  <Image src={'/ieee.png'} alt='ieee' width={200} height={200} />
  <Image src={'/logo-final.png'} alt='nsdc' width={200} height={200} />
  <Image src={'/ihrd.jpg'} alt='ihrd' width={200} height={200} />
</div>
</div>
 
</div>
       <RegistrationFee />


      <Timeline3/>
     <Infinite>
     
     


    
     </Infinite>
      <Theme />

      <Prizes />
      <Faq/>
      <div style={{height:'5vh'}}></div>
      <Footer/>
   </div>
  );
}
