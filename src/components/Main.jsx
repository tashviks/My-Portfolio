import React from 'react'
import ReadMore from './ReadMore';
import styled from 'styled-components';
import aboutIcon from '../assets/about (2).png';
import proIcon from '../assets/project (2).png';
import profiles from '../assets/profiles.png';
import resumeIcon from '../assets/resume.png';
import achievementIcon from '../assets/achievements.png';
import { useState, useEffect } from 'react';
import About from './About';
import Achievements from './Achievements';
import Resume from './Resume';
import Profiles from './Profiles';
import Projects from './Projects';
import birdie from '../assets/Birdie.jpg';
import Me from '../assets/Me.jpeg';
import Linkedin from '../assets/Linkedin.png';
import Draggable, { DraggableCore } from 'react-draggable'
import AnimatePage from './Misc/AnimatePage';

// ES6 format



function Main() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(json => setUsers(json))
            .finally(() => {
                setLoading(false)
            })
    }, [])
    const [aboutPopup, setAboutPopup] = useState(false);
    const [projectsPopup, setProjectsPopup] = useState(false);
    const [profilePopup, setProfilePopup] = useState(false);
    const [resumePopup, setResumePopup] = useState(false);
    const [achievementsPopup, setAchievementsPopup] = useState(false);
    return (

        <Container>

            <div className='row-1'>
                <AnimatePage>
                    <div className='App'>
                        <main>
                            <Draggable>
                                <div className='image-1'>
                                    <img onDoubleClick={() => setAboutPopup(true)} src={aboutIcon} />
                                    <pre><h3>    About</h3></pre>
                                </div>
                            </Draggable>
                            <ReadMore trigger={aboutPopup} setTrigger={setAboutPopup}>
                                <PopUp>
                                    <About />
                                </PopUp>
                            </ReadMore>


                        </main>
                    </div>
                </AnimatePage>
                <AnimatePage>
                    <div className='App'>
                        <main>
                            <div className='image-1'>
                                <img onDoubleClick={() => setProjectsPopup(true)} src={proIcon} />
                                <pre><h3>  Projects</h3></pre>
                            </div>
                            <ReadMore trigger={projectsPopup} setTrigger={setProjectsPopup}>
                                <PopUp>
                                    <Projects />
                                </PopUp>
                            </ReadMore>
                        </main>
                    </div>
                </AnimatePage>
                <AnimatePage>
                    <div className='App'>
                        <main>
                            <div className='image-1'>
                                <img onDoubleClick={() => setProfilePopup(true)} src={profiles} />
                                <pre><h3>   Profile</h3></pre>
                            </div>
                            <ReadMore trigger={profilePopup} setTrigger={setProfilePopup}>
                                <PopUp>
                                    <Profiles />
                                </PopUp>
                            </ReadMore>
                        </main>
                    </div>
                </AnimatePage>
                <AnimatePage>
                    <div className='App'>
                        <main>
                            <div className='image-1'>
                                <img onDoubleClick={() => setResumePopup(true)} src={resumeIcon} />
                                <pre><h3>   Resume</h3></pre>
                            </div>
                            <ReadMore trigger={resumePopup} setTrigger={setResumePopup}>
                                <PopUp>
                                    <Resume />
                                </PopUp>
                            </ReadMore>
                        </main>
                    </div>
                </AnimatePage>
            </div>

            <div className='row-2'>
                <AnimatePage>
                    <div className='App'>
                        <main>
                            <div className='image-1'>
                                <img onDoubleClick={() => setAchievementsPopup(true)} src={achievementIcon} />
                                <pre><h3>Achievements</h3></pre>
                            </div>
                            <ReadMore trigger={achievementsPopup} setTrigger={setAchievementsPopup}>
                                <PopUp>
                                    <Achievements />
                                </PopUp>
                            </ReadMore>
                        </main>
                    </div>
                </AnimatePage>

                <AnimatePage>
                    <div className='App'>
                        <main>
                            <div className='image-1'>
                                <a href='https://www.linkedin.com'><img onDoubleClick={() => setAchievementsPopup(true)} src={Linkedin} /></a>
                                <pre><h3><pre>  Linkedin</pre></h3></pre>
                            </div>
                        </main>
                    </div>
                </AnimatePage>
            </div>


            <div className='info'>
                <div className='birdie'></div>
                <pre><h1>               Tashvik Srivastava</h1></pre>
                <div className='info-data'>
                    <p>I am a full stack developer, specializing in developing (and</p>
                    <p>occasionally designing) stunning, high-quality applications </p>
                    <p>and websites. I want to contribute to effective solutions</p>
                    <p>that can make a difference.</p>
                </div>
            </div>

        </Container>


    );
}


const PopUp = styled.div`

`;

const Container = styled.div`
padding : 50px;
display : flex;
color : white;
gap : 3rem;

.row-1{
    display : flex;
    flex-direction : column;
    gap : 3rem;
}
.row-2{
    display : flex;
    flex-direction : column;
    gap : 3rem;
}
.image-1{
    padding : 0px;
    transition : all ease 1s;
}
.image-1:hover{
    background-color : rgba(204, 155, 180, 0.4);
    box-shadow : 0px 0px 20px 0px rgba(204, 155, 180, 1);
}
.info{
    margin-left : 1000px;
    display : flex;
    flex-direction : column;
}
.info-data{
    display : flex;
    flex-wrap : wrap;
    justify-content : center;
    align-items : center;
    place-content : center;
    font-size : 20px;
    font-weight : bold;
    font-family : 'Roboto', sans-serif;
}
.info-data p{
    box-shadow : 0px 0px 20px 0px rgba(204, 155, 180, 0.8);
    background-color : rgba(204, 155, 180, 0.3);
}
.birdie{
    border-radius : 50%;
    background-image : url(${birdie});
    background-size : cover;
    width : 200px;
    height : 200px;
    margin-left : 235px;
    transition : all ease 0.5s;
}
.birdie:hover{
    background-image: url(${Me});
    box-shadow : 0px 0px 20px 0px rgba(204, 155, 180, 0.8);
}
.taskbar{
    
}
  
`;

export default Main;
