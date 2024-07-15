"use client";
import React, { Suspense } from "react";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";

const RenderModel = ({ children, className }) => {
  return (
    <React.Fragment>
      <Canvas className={clsx("w-screen h-screen -z-10 relative", className)}>
        <Suspense fallback={null}>{children}</Suspense>
        <Environment preset="dawn" />
      </Canvas>
    </React.Fragment>
  );
};

export default RenderModel;
