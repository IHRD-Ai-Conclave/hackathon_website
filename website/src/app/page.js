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
      <div className='flex border-b border-blue-500'>
     <div
      style={{
        height: '57vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // Align items to the left
        justifyContent: 'center',
        marginTop:'3vh',
        padding: '8rem', // Adjust padding as needed
        paddingLeft: '13rem', // Add some left padding
      }}
    >
      <h1 className="text-5xl font-semi-bold"style={{ marginBottom: '1rem' }}>Join the </h1>
      <h1 className="text-5xl font-semi-bold"style={{ marginBottom: '1rem' }}>Gen AI</h1>
      <h1 className="text-5xl font-semi-bold"style={{ marginBottom: '1rem' }}>Conclave</h1>
      <h1 className="text-5xl font-semi-bold"style={{ marginBottom: '1rem' }}>Hackathon</h1>
      <div style={{ marginTop: '1rem', display:'flex' }}> {/* Add some space before FlipWords */}
      <h1 className="text-5xl font-semi-bold"style={{ marginBottom: '1rem' }}>to</h1>
        <Flipwords className="text-5xl font-semi-bold text-blue-500" />
      </div>
    </div>
    <div style={{width:'50vw', paddingTop:'4vh',paddingBottom:'4vh',overflow:'hidden', borderRadius:'30px'}}>
      <Image id="Floatimage" src={'/pic.jpeg'} alt='pic' height={470} width={470}></Image>
    </div>
    </div>
      <div style={{height:'3vh'}}></div>
      <div className="flex w-full h-23vh pt-vh flex-col items-center justify-center">
        <div className="flex justify-center text-center">
          <h2 className="text-2xl font-light">We partnered with events like</h2>
        </div>
        <div className="flex w-1/2 justify-between items-center text-center mt-4 gap-10">
          <Image src={'/ieee.png'}alt='nsdc'width={200}height={200}></Image>
          <Image src={'/logo-final.png'}alt='ieee'width={200}height={200}></Image>
          <Image src={'/ihrd.jpg'}alt='ihrd'width={200}height={200}></Image>
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
