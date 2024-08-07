"use client"
import Image from 'next/image';
import AnimatedText from './component/Animatedtext';
import Timeline from "./timeline/Timeline"
//import Timeline from "./timeline/Timeline"
import Prizes from "./prize/Prizes"
import Theme from "./themes/Theme"
import Flipwords from './components/ui/flip-words'
import Collapsible from './component/Collapsable';
import Faq from './component/Faq';
import Footer from './component/Footer'
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
      <h1 className="text-3xl md:text-5xl font-semibold mb-4">Gen AI</h1>
      <h1 className="text-3xl md:text-5xl font-semibold mb-4">Conclave</h1>
      <h1 className="text-3xl md:text-5xl font-semibold mb-4">Hackathon</h1>
      <div className="mt-4 flex items-center">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4 mr-4">to</h1>
        <div className="text-3xl md:text-5xl font-semibold text-blue-500 min-w-[150px]">
          <Flipwords className="w-full" />
        </div>
      </div>
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
      <Image id="Floatimage" src={'/programmer.jpg'} alt="pic" height={470} width={470} />
    </div>
  </div>

  <div style={{ height: '3vh' }} className='shadow-lg rounded-lg bg-white dark:bg-black'></div>

  <div className="flex w-full h-23vh pt-vh flex-col items-center justify-center ">
    <div className="flex justify-center text-center">
      <h2 className="text-2xl font-light">We partnered with events like</h2>
    </div>
    <div className="flex w-1/2 justify-between items-center text-center mt-4 gap-10">
      <Image src={'/ieee.png'} alt='nsdc' width={200} height={200} />
      <Image src={'/logo-final.png'} alt='ieee' width={200} height={200} />
      <Image src={'/ihrd.jpg'} alt='ihrd' width={200} height={200} />
    </div>
  </div>
</div>























































































      <Timeline />
      <Theme />
      <Prizes />
      <Faq/>
      <div style={{height:'5vh'}}></div>
      <Footer/>
   </div>
  );
}
