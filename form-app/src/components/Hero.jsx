import React from 'react'
import '../styles/hero.css'
import videobg from '../assets/bg_video1.mp4'
const Hero = () => {
  return (
    <div class="main">
		<div class="nav">
			<a href="/home">Home</a>
			<a href="/support">Support</a>
			<a href="https://www.lahsindia.com">Website</a>
		</div>
		<div class="content">
			<h1>Feedback Page</h1>
		</div>
		<video class="main_video" autoPlay loop muted src={videobg} /> 
		<div class="overlay"></div>
		
		
	</div>
  )
}

export default Hero