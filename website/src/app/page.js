"use client"
import Image from 'next/image';
import AnimatedText from './component/Animatedtext';
import Timeline from "./timeline/Timeline"
import Theme from "./themes/Theme"
import Collapsible from './component/Collapsable';
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

        <div style={{width:'70vw',display:'flex',flexDirection:'column',gap:'4vh'}}>
      <Collapsible title="What is the refund policy?">
        All purchases are final and non-refundable. However, we offer a 30-day money-back guarantee if you are not
        satisfied with your purchase. Please contact our support team for more information.
      </Collapsible>
      <Collapsible title="How do I contact customer support?">
        You can reach our customer support team by email at support@example.com or by phone at 1-800-555-1234. Our
        support team is available Monday through Friday, 9am to 5pm EST.
      </Collapsible>
      <Collapsible title="What payment methods do you accept?">
        We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also accept
        PayPal and Apple Pay.
      </Collapsible>
    </div>


      </div>
      <Timeline />
      <Theme />
    </div>
  );
}
