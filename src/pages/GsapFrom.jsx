import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFrom = () => {
  // TODO: Implement the gsap.from() method

  useGSAP (()=>{

    gsap.from("#green-box",{
      x:200,
      yoyo:true, // to and fro motion for that
      rotate:270, // rotate the box
      duration:5, // to time take to one position to another position
      delay:2,   // after how much time he will start
      repeat:-1,
      opacity: 0,         // Initial opacity (from 0 to 1)
      scale: 0.5,         // Initial scale (from 0.5 to 1)
      ease: 'power3.out', // Easing function for smooth animation

      

    })

  },[])

  return (
    <main>
      <h1>GsapFrom</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.from()</code> method is used to animate elements from a
        new state to their current state.
      </p>

      <p className="mt-5 text-gray-500">
        The <code>gsap.from()</code> method is similar to the{" "}
        <code>gsap.to()</code> method, but the difference is that the{" "}
        <code>gsap.from()</code> method animates elements from a new state to
        their current state, 
      </p>

     

      <div className="mt-20">
        <div id="green-box" className="w-20 h-20 bg-green-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapFrom;
