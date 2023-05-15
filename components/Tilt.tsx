
import { FunctionComponent, PointerEvent, ReactNode, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';


interface TiltProps {
  children?: ReactNode;
  angle?: string;
  className?: string;
};

export const Tilt: FunctionComponent<TiltProps> = ({ children, angle = '12', className = '' }) => {

  const ref = useRef<HTMLDivElement>(null);

  // we replace the useState with two motion values. One for each axis.
  // Since we want the card to start out flat we set the initial
  // values to x=0.5 y=0.5 which equals to no transformation
  const y = useMotionValue(0.5);
  const x = useMotionValue(0.5);

  const rotateY = useTransform(x, [0, 1], [-Number(angle), Number(angle)], { clamp: true });
  const rotateX = useTransform(y, [0, 1], [Number(angle), -Number(angle)], { clamp: true });

  const handleMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    // get position information for the card
    const bounds = ref.current.getBoundingClientRect();
    const invert = (e.clientY - bounds.top) - (bounds.height / 2) > 1;

    // set x,y local coordinates
    let xValue = (e.clientX - bounds.x) / bounds.width;
    const yValue = (e.clientY - bounds.y) / bounds.height;

    if (invert) xValue = 1 - xValue;

    // update MotionValues
    x.set(xValue, true);
    y.set(yValue, true);
  };

  const handleReset = () => {
    // update MotionValues
    x.set(0.5, true);
    y.set(0.5, true);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onPointerMove={handleMove}
      style={{ rotateX, rotateY }}
      onPointerLeave={handleReset}
    >
      {children}
    </motion.div>
  );
};