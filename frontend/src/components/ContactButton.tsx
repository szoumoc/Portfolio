import React from 'react';
import styled from 'styled-components';

const CButton = () => {
  return (
    <StyledWrapper>
      <button
        className="button"
        onClick={() => window.location.href = 'mailto:soumosaha2025gcrs@gmail.com'}
      >
        <div className="icon_cont">
          <span className="icon">🡪</span>
        </div>
        <span className="text_button">CONTACT ME</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    --dark: #181818;
    --light: #d9d9d9;
    --active: 0;

    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transform-origin: center;
    background-color: transparent;
    border: none;
  }

  .button:hover {
    --active: 1;
  }

  .icon_cont {
    overflow: clip;
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(var(--active) * 1.5rem + (1 - var(--active)) * 0.5rem);
    height: calc(var(--active) * 1.5rem + (1 - var(--active)) * 0.5rem);
    background-color: hsla(0, 0%, 85%, var(--active));
    border: 1px solid var(--light);
    border-radius: 9999px;
    transition: all 0.5s ease-in-out;
  }

  .icon {
    font-size: 0.75rem;
    color: var(--dark);
    line-height: 1rem;
    transform: translateX(calc(-1rem * (1 - var(--active))));
    transition: transform 0.5s ease-in-out;
  }

  .text_button {
    position: relative;
    display: inline-block;
    padding-block: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    color: var(--light);
    text-transform: capitalize;
  }

  .text_button::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: calc((1 - var(--active)) * 100%);
    height: 1px;
    background-color: var(--light);
    border-radius: 9999px;
    transition: width 0.5s ease-in-out;
  }
`;

export default CButton;
