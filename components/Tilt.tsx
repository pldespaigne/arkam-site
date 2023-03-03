
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FunctionComponent, PointerEvent, ReactNode, useState } from "react";


interface TiltProps {
  children?: ReactNode;
  angle?: string;
  className?: string;
};

export const Tilt: FunctionComponent<TiltProps> = ({ children, angle = '12', className = '' }) => {

  // we replace the useState with two motion values. One for each axis.
  // Since we want the card to start out flat we set the initial
  // values to x=0.5 y=0.5 which equals to no transformation
  const y = useMotionValue(0.5)
  const x = useMotionValue(0.5)

  const rotateY = useTransform(x, [0, 1], [-Number(angle), Number(angle)], { clamp: true });
  const rotateX = useTransform(y, [0, 1], [Number(angle), -Number(angle)], { clamp: true });

  const handleMove = (e: PointerEvent<HTMLDivElement>) => {
    // get position information for the card
    const bounds = e.currentTarget.getBoundingClientRect();

    // set x,y local coordinates
    const xValue = (e.clientX - bounds.x) / e.currentTarget.clientWidth;
    // const yValue = (e.clientY - bounds.y) / e.currentTarget.clientHeight; // (clientY - 180) / 460
    const yValue = (e.clientY - bounds.y) / e.currentTarget.clientHeight;

    // console.log({ clientY: e.clientY, yValue });

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
    <motion.div onPointerMove={handleMove} style={{ rotateX, rotateY }} onPointerLeave={handleReset} className={className}>{children}</motion.div>
  );
};