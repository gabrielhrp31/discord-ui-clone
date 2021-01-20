import styled from "styled-components";
import {AlternateEmail} from 'styled-icons/material';

export const Container = styled.div`
    grid-area: CD;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-height: calc(100vh - 46px);

  
    padding-right:3px;
  
    background-color: var(--primary);
  
    @media (min-width: 769px) {
      margin-left: unset;
    }
`;

export const Messages = styled.div`
    padding: 20px 0;
  
    display: flex;
    flex-direction: column;
    max-height: calc(100vh - 46px);
    overflow-y: scroll;
  
    ::-webkit-scrollbar {
        width: 8px;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: var(--tertiary);
    }
    
    ::-webkit-scrollbar-track {
        border-radius: 8px;
        background-color: var(--secondary);
    }
  
    @media (min-width: 769px) {
        max-height: calc(100vh - 46px - 68px);
    }

`;
export const InputWrapper = styled.div`
    width: 100%;
    padding: 0 16px;
    position: relative;
  
`;
export const Input = styled.input`
    width: 100%;
    height: 44px;
    padding: 0 10px 0 57px;
    border-radius: 7px;
  
    color: var(--white);
    background-color: var(--chat-input);

    position: relative;
  
    &::placeholder{
        color:var(--gray);
    }
  
    ~svg{
        transition: 180ms ease-in-out;
    }
`;
export const InputIcon = styled(AlternateEmail)`
    width: 24px;
    height: 24px;

    position: absolute;
    z-index: 3;
    top: 50%;
    transform: translateY(-50%);
    left:30px;
    
    color: var(--gray);
`;