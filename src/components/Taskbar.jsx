import React from 'react'
import styled from 'styled-components'; 
import start from '../assets/start.png';
import Date from './Date';
const Footer = () => {
    return (
<Taskbar>
<div class="taskbar">
    <div class="start-button">
        <img src={start} alt="Start Button" className='ikon'/>
    </div>
</div>
<Date></Date>
</Taskbar>
)
}
const Taskbar = styled.div`
.taskbar{
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
} 
.ikon{
    z-index: 10;
    width: 60px;
    height: 60px;
    padding: 5px;
    transition: all ease 0.5s;
}
.ikon:hover{
    background-color: rgba(204, 195, 200, 0.6)
    border-radius: 50%;
    scale: 1.1;
    cursor: pointer;
}
`;
export default Footer;