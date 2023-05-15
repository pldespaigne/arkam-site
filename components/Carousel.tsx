
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FunctionComponent, ReactNode, useEffect, useRef, useState } from 'react';


interface CarouselProps {
  elements: ReactNode[];
  elementWidth: [number, number];
  gapWidth: [number, number];
};

export const Carousel: FunctionComponent<CarouselProps> = ({ elements, elementWidth, gapWidth }) => {

  const ref = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);
  useEffect(() => {
    setI(window.innerWidth < 768 ? 0 : 1);
  }, []);


  const [ count, setCount ] = useState(0);
  const [ scroll, setScroll ] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.scrollLeft = scroll;
  });

  const handleLeft = () => {
    if (!ref.current) return;
    const c = count;
    if (count === 0) {
      setCount(elements.length - 1);
      setScroll(elements.length - 1);
      return;
    }
    setCount(c - 1);
    setScroll((c - 1) * (elementWidth[i] + gapWidth[i]));
  };
  
  const handleRight = () => {
    if (!ref.current) return;
    const c = count;
    if (count === elements.length) {
      setCount(0);
      setScroll(0);
      return;
    }
    setCount(c + 1);
    setScroll((c + 1) * (elementWidth[i] + gapWidth[i]));
  };
  
  const handleClick = (index: number) => {
    setCount(index);
    setScroll(index * (elementWidth[i] + gapWidth[i]));
  };

  return (
    <div className="relative">
      <div ref={ref} className="flex flex-row justify-between mt-16 shrink-0 overflow-x-scroll md:overflow-x-hidden" style={{ scrollBehavior: 'smooth', gap: gapWidth[i], paddingLeft: `${gapWidth[i]}px`, paddingRight: `${gapWidth[i]}px` }}>
        
        {
          elements.map((element, index) =>
          <div key={index} className="h-full">{element}</div>
          )
        }

      </div>

      <div className="flex flex-row justify-center">
        <div className="flex flex-row justify-center gap-0.5 md:gap-2 bg-black/60 backdrop-blur-md border border-white/20 rounded-full px-4 py-2">
          {
            elements.map((_, index) =>
              <button
                key={index}
                onClick={() => handleClick(index)}
                className={`rounded-full w-2 md:w-3 h-2 md:h-3 ${ count === index ? 'bg-white' : 'bg-white/20 hover:bg-white/80' }`}
              />
            )
          }
        </div>
      </div>

      <button
        onClick={handleLeft}
        className="absolute z-10 left-2 top-1/2 bg-black/60 border border-white/20 text-white rounded-full leading-3 px-2.5 py-2 backdrop-blur-sm hover:bg-white/20"
      >
        <FontAwesomeIcon icon={faArrowLeft} size="2x" className="hidden md:block" />
        <FontAwesomeIcon icon={faArrowLeft} size="1x" className="block md:hidden" />
      </button>

      <button
        onClick={handleRight}
        className="absolute z-10 right-2 top-1/2 bg-black/60 border border-white/20 text-white rounded-full leading-3 px-2.5 py-2 backdrop-blur-sm hover:bg-white/20"
      >
        <FontAwesomeIcon icon={faArrowRight} size="2x" className="hidden md:block" />
        <FontAwesomeIcon icon={faArrowRight} size="1x" className="block md:hidden" />
      </button>
    </div>
  );
};
