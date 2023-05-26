import React from 'react';
import '../css/hero.css';
import VideoBg from '../assets/bg_video1.mp4'
const Hero = () => {
  return (
    <div className='main'>
      <div className='overlay'></div>
      <video className='video_bg' src={VideoBg} data-autoPlay autoPlay webkit-playsinline playsinline loop muted />
      <div className='content'>
        <p className='catchph'></p>
        <h1 className='Heading'>LAHS </h1>
        <p className='text'>Feedback Center is currently under development </p>
      </div>
      </div>
  );
}

export default Hero;