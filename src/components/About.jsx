import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import styled from 'styled-components';
import Draggable, { DraggableCore } from 'react-draggable'
const About = () => {
  return (

    <AboutContainer>
      <TypeAnimation
        sequence={[
          `\nWelcome to my website! I'm a Student and a Web Developer.\n
            I'm currently a student at Lovely Professional University, where I'm pursuing my passion for technology through a Bachelor of Technology degree in Computer Science and Engineering.\n
            I've been working hard and managed to maintain a Cumulative GPA of 8.23 out of 10.0. \n
            Before my university journey, I completed my senior secondary education at Gurukul Academy in 2020, scoring 84.5%. \n
            I'm really passionate about learning and exploring the world of computer science. \n
            Looking forward to what the future holds!\n
            Cheers :)`,
          100000000,
          "",
        ]}
        speed={50}
        style={{ whiteSpace: 'pre-line', fontSize: '2rem', fontFamily: 'Nanum Gothic Coding', paddingLeft: '30px' }}
        repeat={Infinity}
      />
    </AboutContainer>


  );
};

const AboutContainer = styled.div`
    height: 700px;
    width: 100%;
    background-color: transparent;
    color: #000;
    font-family: NanumSquareRound;
    display: flex;
    justify-content: left;
    align-items: left;
  
    .popup-inner{
        background-color: black;
    }
`
export default About;
