import React from "react";
import Lottie from "react-lottie";
import lottie2 from '../assets/lottie2.json';

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottie2,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return <Lottie options={defaultOptions} height={"100%"} width={"100%"} />;
};

export default LottieAnimation;