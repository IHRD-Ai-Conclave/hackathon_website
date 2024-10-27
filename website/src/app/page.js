"use client"
import Image from 'next/image';
import AnimatedText from './component/Animatedtext';
import Timeline3 from "./timeline/Timeline3"
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
import Banner from './component/Banner'

export default function Home() {
  
  return (
    <div className="flex flex-col ">
      <div className="w-full flex flex-col items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        
        <div className="flex flex-col md:flex-col w-full  ">
        <Banner/>
          <div
            style={{
              height: '40vh',
              width:'100vw',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              marginTop: '1vh',
              textAlign:'center',
              alignContent:'center',
              alignItems:'center'
            }}
            
          >
            <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-[#003399]">
          <span>Join The </span>
          <span className="text-[#66CC33]">AI Samasya </span>
          <span>Hackathon </span>
   
          <span>
            To
          </span>
          </h1>
          <div style={{ position: 'relative' }}>
            <Flipwords className="text-3xl md:text-4xl font-semibold text-[#66CC33]" />
          </div>
            
            <Link href='https://forms.gle/LZ51Xn13rhdKDQYL8'>
              <button className="shadow-[0_0_10px_rgba(102,204,51,0.5)] text-white px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-[#66CC33] hover:bg-[#003399] hover:text-white transition duration-200 mt-4">
                Register Now
              </button>
            </Link>
          </div>
        
        </div>
        
        <div className="relative w-full">
          <div
            style={{ height: '3vh' }}
            className="bg-gradient-to-b rounded-b-lg shadow-lg z-10"
          ></div>
        </div>
        
        <div className="relative flex w-full h-23vh pt-vh flex-col items-center justify-center bg-white dark:bg-black">
          {/* Add a shadow effect at the top */}
          <div className="absolute inset-0 top-0 left-0 right-0 bg-gradient-to-b from-[#003399] to-transparent h-12 z-[-1]"></div>
          
          <div className="flex justify-center text-center">
            <h1 className="text-4xl font-bold text-[#003399] dark:text-[#66CC33] pb-10">Event Organisers</h1>
          </div>
          <div className="flex flex-col md:flex-row w-full md:w-1/2 justify-between items-center text-center mt-4 gap-10 pb-24">
          
            <div>
              <Image src={'/ihrd.jpg'} alt='nsdc' width={200} height={200} />
              <p>Institute of Human Resources<br /> Development</p>
            </div>
            <div>
              <Image src={'/govt.png'} alt='ihrd' width={200} height={200} />
              <p>Department Of Higher Education<br /> under Government Of Kerala</p>
            </div>
          </div>
        </div>
      </div>
      
      <RegistrationFee />
      <div>
        <Prizes />
      </div>
      <div className="flex justify-center text-center  ">
         <h2 className=" font-bold text-4xl text-[#003399] dark:text-[#66CC33]">Hackathon Timeline</h2>
      </div>
      <Timeline3/>
      <Infinite>
      </Infinite>
      <Theme/>
      <div style={{display:'flex',height:'1vh'}}></div>
      <Faq/>
      <div style={{height:'5vh'}}></div>
      <Footer/>
    </div>
  );
}