import { TypeAnimation } from 'react-type-animation';
import hero from '../assets/hero.png';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    let scale = 1;
    const zoomSpeed = 0.0001;

    const animate = () => {
      scale += zoomSpeed;
      if (scale > 1.1) scale = 1.1;
      image.style.transform = `scale(${scale})`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          ref={imageRef}
          src={hero}
          alt="Hero background"
          className="h-full w-full object-cover transition-transform duration-1000 ease-out transform origin-center"
        />
      </div>

      <div className="relative z-10 flex h-full font-extrabold flex-col items-center justify-center text-center text-white px-4">
        <TypeAnimation
          sequence={[
            'INSA - Information Network Security Administration',
            7000,
          ]}
          wrapper="h1"
          speed={10}
          className="w-[700px] text-4xl font-extrabold sm:text-5xl md:text-[96px] lg:text-7xl mb-4"
          repeat={0}
        />
      </div>
    </div>
  );
};

export default Hero;