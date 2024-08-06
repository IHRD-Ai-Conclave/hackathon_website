"use client"
import Image from 'next/image';
import AnimatedText from './component/Animatedtext';
import Timeline from "./timeline/Timeline"
import Theme from "./themes/Theme"
export default function Home() {
  return (
    <div className="flex flex-col">
      <div style={{height:'60vh',width:'100vw',display:'flex',alignContent:'start'}}>
        <AnimatedText/>
      </div>
      <div className="flex w-full h-23vh flex-col items-center justify-center">
        <div className="flex justify-center text-center">
          <h2 className="text-2xl font-semibold">We partnered with events like</h2>
        </div>
        <div className="flex w-1/2 justify-between items-center text-center mt-4">
          <Image src={'/logo-final.png'}alt='nsdc'width={200}height={200}></Image>
          <Image src={'/ieee.png'}alt='ieee'width={200}height={200}></Image>
          <Image src={'/ihrd.jpg'}alt='ihrd'width={200}height={200}></Image>
        </div>
      </div>
      <Timeline />
      <Theme />
    </div>
  );
}
