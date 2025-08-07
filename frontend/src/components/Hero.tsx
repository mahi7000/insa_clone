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
    <div className="relative h-screen w-full overflow-hidden mb-12">
      <div className="absolute inset-0">
        <img
          ref={imageRef}
          src={hero}
          alt="Hero background"
          className="h-full w-full object-cover transition-transform duration-1000 ease-out transform origin-center"
        />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <div className="w-full max-w-4xl px-4">
          <TypeAnimation
            sequence={[
              'INSA - Information Network Security Administration',
              7000,
            ]}
            wrapper="h1"
            speed={10}
            className="text-3xl font-extrabold leading-tight text-white drop-shadow-md sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            repeat={0}
            style={{
              display: 'inline-block',
              width: '100%',
              lineHeight: '1.2'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;