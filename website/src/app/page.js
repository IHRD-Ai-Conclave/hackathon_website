import Image from "next/image";
import Timeline from "./timeline/Timeline";
import Theme from "./themes/Theme";


export default function Home() {
  return (
    <div>
       <Timeline />
       <Theme />
    </div>

  );
}
