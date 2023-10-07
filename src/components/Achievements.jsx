import React from 'react';
import styled from 'styled-components';
const Achievements = () => {
  return (
    <AchCon>
    <div className="achievements-container">
      <h2>My Achievements</h2>
      <ul>
      <div class="elem">
        <li>
          
          <strong>CODECHEF</strong>
          <ul>
            <li><span id='fourstar'>4-star</span> competitive coder with a max rating of 1832</li>
            <li>Global Rank 73 in Frizz buzz 2021 by DAIICT (8k+ participants)</li>
            <li>August Starters 51 2022 Division 2 - Global rank 191 (5k+ participants)</li>
          </ul>
         
        </li>
        </div>

        <hr/>

        <div class="elem">
        <li>
        
          <strong>CODEFORCES</strong>
          <ul>
            <li><span id='specialist'>Specialist</span> with a Max Rating of 1465</li>
            <li>Solved 400+ problems</li>
          </ul>
          
        </li>
        </div>

        <hr/>
        
        <div class="elem">
        <li>
        
          <strong>LEETCODE</strong>
          <ul>
            <li>Solved 450+ Questions</li>
          </ul>
          
        </li>
        </div>

        <hr/>

        <div class="elem">
        <li>
          
          <strong>GOOGLE</strong>
          <ul>
            <li>Hashcode 2022: Global Rank 2422 and AIR 831</li>
            <li>Kickstart 2022: Global Rank 3604 in ROUND G</li>
          </ul>
         
        </li>
        </div>
        <hr />
        <div class="elem">
        <li>
          <strong>TECHNOCEAN</strong>
          <ul>
            <li>Winner of Algorithms Challenge at Annual Uni Tech Fest</li>
          </ul>
         
        </li>
        </div>
      </ul>
    </div>
    </AchCon>
  );
};

const AchCon = styled.div`
color: #000;
display: flex;
flex-direction: column;
align-items: left;
justify-content: left;
padding-left:0%;
achievements-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
}
h2{
  margin-left: -12%;
  font-size: 30px;
}
.elem{
    display: flex;
    align-items: left;
    justify-content: flex-start;
    gap: 1rem;
    margin-left: -15%;
    font-size: 25px;
}
#fourstar{
  color : purple;
  font-weight: bold;
  font-size: 25 px;
}
#specialist{
  color:#03a89e!important;
  font-weight: bold;
  font-size: 25 px;
}
hr{
  margin-left: -30%;
  width: 500%;
  size : 10px;
}
`;
export default Achievements;
