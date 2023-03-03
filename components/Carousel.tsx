
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FunctionComponent, ReactNode, useEffect, useRef, useState } from 'react';


interface CarouselProps {
  elements: ReactNode[];
  elementWidth: number;
  gapWidth: number;
};

export const Carousel: FunctionComponent<CarouselProps> = ({ elements, elementWidth, gapWidth }) => {

  const ref = useRef<HTMLDivElement>(null);

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
    setScroll((c - 1) * (elementWidth + gapWidth));
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
    setScroll((c + 1) * (elementWidth + gapWidth));
  };
  
  const handleClick = (index: number) => {
    setCount(index);
    setScroll(index * (elementWidth + gapWidth));
  };

  return (
    <div className="relative">
      <div ref={ref} className="flex flex-row justify-between mt-16 shrink-0 overflow-x-hidden" style={{ scrollBehavior: 'smooth', gap: gapWidth, paddingLeft: `${gapWidth}px`, paddingRight: `${gapWidth}px` }}>
        
        {
          elements.map((element, index) =>
          <div key={index} className="h-full">{element}</div>
          )
        }

      </div>

      <div className="flex flex-row justify-center gap-2">
        {
          elements.map((_, index) =>
            <button
              onClick={() => handleClick(index)}
              className={`rounded-full w-3 h-3 ${ count === index ? 'bg-white' : 'bg-white/20 hover:bg-white/50' }`}
            />
          )
        }
      </div>

      <button
        onClick={handleLeft}
        className="absolute z-10 left-2 top-1/2 bg-black/40 border border-white/20 text-white/80 rounded-full leading-3 px-2.5 py-2 backdrop-blur-sm hover:bg-white/20"
      >
        <FontAwesomeIcon icon={faArrowLeft} size="2x" />
      </button>

      <button
        onClick={handleRight}
        className="absolute z-10 right-2 top-1/2 bg-black/40 border border-white/20 text-white/80 rounded-full leading-3 px-2.5 py-2 backdrop-blur-sm hover:bg-white/20"
      >
        <FontAwesomeIcon icon={faArrowRight} size="2x" />
      </button>
    </div>
  );
};
