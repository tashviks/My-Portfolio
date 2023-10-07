import React from 'react'
import github from '../assets/github-w.png';
import styled from 'styled-components';

import bubble from '../assets/bubble.jpg';
import disease from '../assets/disease.jpg';
import snuggle from '../assets/snuggle.jpg';    
const Projects = () => {
  return (
    <ProjCon>
 <div id="projects">
		<div id="procon">
			<div class="child">
				<img src={snuggle} title="A chat app using MERN+Socket.io"/>
				<div class="child-bottom"><img src={github} alt="failed to load image"/></div>
			</div>
			<div class="child">
				<img src={bubble} title="Bubble Game using HTML,CSS & JS"/>
				<div class="child-bottom"><img src={github} alt="failed to load image"/></div>
			</div>
			<div class="child">
				<img src={disease} title='Plant Disease Detection Android App'/>
				<div class="child-bottom"><img src={github} alt="failed to load image"/></div>
			</div>
			<div class="child">
				<img src="" alt=""/>
				<div class="child-bottom"><img src={github} alt="failed to load image"/></div>
			</div>
            <div class="child">
				<img src="" alt=""/>
				<div class="child-bottom"><img src={github} alt="failed to load image"/></div>
			</div>
            
		</div>
	</div>
</ProjCon>
  )
}

const ProjCon = styled.div`
background-color: ;
margin: 0px;
padding: 0px;
fit-content: 100%;
#procon{
display: flex;
align-items: center;
justify-content: center;
gap:20px;
flex-wrap: wrap;
}

.child{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 320px;
	height: 320px;
	border:2px solid white;
	background-color: rgba(154, 146, 146, 0.5);
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
	border-radius: 20px;
	margin-top: 70px;
	backdrop-filter: blur(14px);
	overflow: hidden;
}
.child img{
	border-radius: 20px;
	height: 100%;
	width: 100%;
	object-fit: cover;
	transition: all ease 1s;
	position: relative;
}
.child:hover img{
	scale: 1.1;
}
.child:hover .child-bottom{
	bottom:0;
}
.child-bottom{
transition: all ease 0.5s;
}
.child-bottom{
	display: flex;
	height : 40%;
	width : 100%;
	background: linear-gradient(transparent , black);
	position: absolute;
	bottom:-40%;
}
.child-bottom img{
	position: absolute;
	height : 65px;
	width: 65px;
	margin-top: 45px;
	margin-left:25px;
	color : white;
	transition: all ease 0.5s;
}
.child-bottom img:hover{
	scale : 1.5;
}`;
export default Projects
