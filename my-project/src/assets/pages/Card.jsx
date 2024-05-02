import React from 'react';
import { HiBadgeCheck } from 'react-icons/hi';
import { PiSmileyStickerBold } from 'react-icons/pi';
import styled from 'styled-components';

const StyledCard = styled.div`
  .card {
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    padding: 1.5rem;
    margin: 1rem;
    text-align: center;
    max-width: 250px;
    background-color: white;
    margin-top: 6rem;
  }

  .button {
    background-color: #2563eb;
    width: 9rem;
    height: 2.5rem;
  }

  .text-white {
    color: white;
  }

  .text-black {
    color: black;
  }

  .text-15 {
    font-size: 15px;
  }
`;

const Card = () => {
  return (
    <StyledCard>
      <div className="flex justify-center bg-orange-950">
        <div className="flex flex-row">
          <h1 className="flex text-white left-48">Setting a DisplayName for you React<br/> styled-components</h1>
          <div className="card">
            <h2 className="text-black"><HiBadgeCheck/>A clearly named container component</h2>
            <p>Go ahead and inspect me with the<br/>React Developer Tools!</p>
            <button className="button"><h1 className="text-white text-15">Give me a click!</h1></button>
          </div>
          <div className="card">
            <h2 className="text-black"><PiSmileyStickerBold/>I don't have a displayName</h2>
            <p>Go ahead and inspect me with the<br/>React Developer Tools!</p>
            <button className="button"><h1 className="text-white text-15">Don't click me</h1></button>
          </div>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card;
