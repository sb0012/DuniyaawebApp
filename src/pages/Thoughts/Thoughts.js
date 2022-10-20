import React, { Component } from 'react';
import './Thoughts.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer'

const textArray = ['“Just for the record darling, not all positive change feels positive in the beginning.”', 
'“Stay positive. Better days are on their way.”', 
' “Keep your face always toward the sunshine and shadows will fall behind you.”', 
'“Extraordinary things are always hiding in places people never think to look.”', 
'“Setting goals is the first step in turning the invisible into the visible.”', 
'“The moment where you doubt you can fly, you cease for ever being able to do it.”', 
'“Most people are nice when you finally see them.”', 
' “Choose to be optimistic, it feels better.”', 
'“Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.”', 
'"May your troubles be less and your blessings be more.” ', 
'“The truly rich are those who enjoy what they have.” ', 
'“We have to collectively work together to improve the world.” ', 
' “Make your life matter and have fun doing it.”', 
'“Whatever is worrying you right now forget about it. Take a deep breath, stay positive and know things will get better.” ', 
'“Staying positive does not mean everything will turn out okay. Rather, it means you will be okay no matter how things turn out.”', 
' “Sometimes, when things are falling apart, they may actually be falling into place.”', 
' “Always be a first-rate version of yourself, instead of a second-rate version of somebody else.” ', 
'“Tough times don’t last. Tough people do.”', 
'“You only live once, but if you do it right, once is enough.”', 
'“All you need is the plan, the road map, and the courage to press on to your destination.”', 
' “Never let the fear of striking out keep you from playing the game.”', 
'“If you want to live a happy life, tie it to a goal, not to people or things.”', 
'“Many of life’s failures are people who did not realize how close they were to success when they gave up.”', 
'“You only live once, but if you do it right, once is enough.” ', 
'“Life is what happens when you’re busy making other plans.”',
' “The purpose of our lives is to be happy.”',
];

class Thoughts extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }
  
  componentDidMount() {
      this.timeout = setInterval(() => {
          let currentIdx = this.state.textIdx;
          this.setState({ textIdx: currentIdx + 1 });
        }, 1500);
    }
    
    componentDidUnmount() {
        clearInterval(this.timeout);
    }
    
    render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length];
    return (
        <>
        <div className="">
      <Header />
      
        <section>
        <h1 className='bolds'>Good Thoughts Change Every Minute</h1>
        <p className='Center'> <span className='textcolor'>{textThatChanges}</span></p>
      </section>
      <Footer/>
      </div>
      </>
    )
  }
}
export default Thoughts;