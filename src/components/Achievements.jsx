import React from 'react';
import styled from 'styled-components';
const Achievements = () => {
  return (
    <AchCon>
    <div className="achievements-container">
      <h2>My Achievements</h2>
      <ul>
        <li>
          <strong>CODECHEF</strong>
          <ul>
            <li>4-star competitive coder with a max rating of 1832</li>
            <li>Global Rank 73 in Frizz buzz 2021 by DAIICT (8k+ participants)</li>
            <li>August Starters 51 2022 Division 2 - Global rank 191 (5k+ participants)</li>
          </ul>
        </li>
        <li>
          <strong>CODEFORCES</strong>
          <ul>
            <li>Specialist with a Max Rating of 1465</li>
            <li>Solved 400+ problems</li>
          </ul>
        </li>
        <li>
          <strong>LEETCODE</strong>
          <ul>
            <li>Solved 450+ Questions</li>
          </ul>
        </li>
        <li>
          <strong>GOOGLE</strong>
          <ul>
            <li>Hashcode 2022: Global Rank 2422 and AIR 831</li>
            <li>Kickstart 2022: Global Rank 3604 in ROUND G</li>
          </ul>
        </li>
        <li>
          <strong>TECHNOCEAN</strong>
          <ul>
            <li>Winner of Algorithms Challenge at Annual Uni Tech Fest</li>
          </ul>
        </li>
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
    align-items: left;
    justify-content: left;
    gap: 1rem;
}
`;
export default Achievements;
