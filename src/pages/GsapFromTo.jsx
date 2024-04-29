import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFromTo = () => {
  // TODO: Implement the gsap.fromTo() methodg

  useGSAP (()=>{

    gsap.fromTo("#red-box",{

      x:200,
      yoyo:true, // to and fro motion for that
      rotate:270, // rotate the box
      duration:5, // to time take to one position to another position
      delay:2,   // after how much time he will start
      repeat:-1,
      opacity: 0,         // Initial opacity (from 0 to 1)
      scale: 0.5,         // Initial scale (from 0.5 to 1)
      ease: 'power3.out', // Easing function for smooth animation



    },{

       // from intial position to 250 px
      rotate:360,
      duration:2,
      repeat:-1,
      ease: "power1.inOut",
      delay: 0.5,


    })

  },[])



  return (
    <main>
      <h1>GsapFromTo</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.fromTo()</code> method is used to animate elements from a
        new state to a new state.
      </p>

      <p className="mt-5 text-gray-500">
        The <code>gsap.fromTo()</code> method is similar to the{" "}
        <code>gsap.from()</code> and <code>gsap.to()</code> methods, but the
        difference is that the <code>gsap.fromTo()</code> method animates
        elements from a new state to a new state, while the{" "}
        <code>gsap.from()</code> method animates elements from a new state to
        their current state, and the <code>gsap.to()</code> method animates
        elements from their current state to a new state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.fromTo()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.fromTo()
        </a>{" "}
        method.
      </p>

      <div className="mt-20">
        <div id="red-box" className="w-20 h-20 bg-red-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapFromTo;
