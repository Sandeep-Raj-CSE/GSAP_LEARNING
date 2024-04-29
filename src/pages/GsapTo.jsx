import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTo = () => {
  // TODO: Implement the gsap.to() method

  // Gsap to 

  useGSAP  (() =>{

    gsap.to('#blue-box', {
      x:550, // from intial position to 250 px
      rotate:360,
      duration:2,
      repeat:-1,
      ease: "power1.inOut",
      delay: 0.5,
      yoyo:true // means that ye apka hmesa chalta rhega rukne kaa nam nhi lega
    })


  },[])

  return (
    <main className="text-white">
      <h1>GsapTo</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is used to animate elements from their
        current state to a new state.
      </p>

      <p className="mb-4">
    <span className="font-bold">Target Element(s):</span> The first parameter of gsap.to() is typically the target element(s) you want to animate. This can be a single element, an array of elements, or a CSS selector targeting one or more elements.
</p>
<p className="mb-4">
    <span className="font-bold">Duration:</span> The second parameter is the duration of the animation in seconds or milliseconds. For example, 2 would represent 2 seconds, and 2000 would represent 2000 milliseconds.
</p>
<p className="mb-4">
    <span className="font-bold">Properties to Animate:</span> The third parameter is an object that defines the properties you want to animate and their respective target values. For example: This would animate the x property of the element to 100 and the opacity property to 0.5 over a duration of 1 second.
</p>
<p className="mb-4">
    <span className="font-bold">Easing:</span> You can specify the easing function to control the acceleration and deceleration of the animation. This is an optional parameter. GSAP provides various built-in easing functions like "ease", "ease-in", "ease-out", "ease-in-out", and many more. You can also create custom easing functions.
</p>
<p className="mb-4">
    <span className="font-bold">Delay:</span> You can specify a delay before the animation starts. This is also an optional parameter.
</p>
<p className="mb-4">
    <span className="font-bold">Callbacks and Other Parameters:</span> gsap.to() can accept more parameters such as onComplete, onUpdate, onStart, etc., which allow you to execute functions at specific points during the animation lifecycle.
</p>


     


     

      <div className="mt-20">
        <div id="blue-box" className="w-20 h-20 bg-red-700 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTo;
