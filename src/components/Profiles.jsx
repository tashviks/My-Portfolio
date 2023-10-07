import React from 'react';
import styled from 'styled-components';
import github from '../assets/github.png';
import codechef from '../assets/codechef.png';
import codeforces from '../assets/codeforces.png';
import leetcode from '../assets/leetcode.png';
const githubLink = 'https://github.com/tashviks';
const Profiles = () => {
    return (
        <ProfileCon>
            <a href={'https://github.com/tashviks'} target='blank'><img src={github} alt="Profile 1" className='image' /></a>
            <a href={'https://www.codechef.com/users/tashvik'} target='blank'><img src={codechef} alt="Profile 2" className='image'/></a>
            <a href={'https://codeforces.com/profile/tsvk'} target='blank'><img src={codeforces} alt="Profile 3" className='image'/></a>
            <a href={'https://leetcode.com/_tashvik_/'} target='blank'><img src={leetcode} alt="Profile 4" className='image'/></a>
        </ProfileCon>
    );
};
const ProfileCon = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap : 4rem;
align-items: center;
padding-top : 50px;
padding-bottom : 50px;
.image{
    width: 200px;
    height: 200px;
    margin: 10px;
    border-radius: 50%;
    border: 2px solid #fff;
    box-shadow: 0 0 10px #fff;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}
.image:hover{
    scale: 1.2;
    box-shadow: 0 0 20px #000;
}
`;
export default Profiles;
