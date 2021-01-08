import styled from "styled-components";

import { Props } from '.';

export const Button = styled.button<Props>`
    display:flex;
    flex-direction:column;
    align-items:center;

    width:48px;
    height:48px;
    min-height:48px;

    border-radius:50%;

    margin-bottom:8px;

    background-color:${(props) => props.isHome ? 'var(--rocketseat)' : 'var(--primary)'};

    position:relative;
    cursor:pointer;
  
    > img {
      width:24px;
      height:24px;
    }
  
    &::before{
      width: 9px;
      height: 9px;
      
      position: absolute;
      left:-17px;
      top: calc(50% - 4.5px);
      background-color: var(--white);
      border-radius: 50%;
      
      content: '';
      display: ${(props) => props.hasNotifications ? 'inline' : 'none'};
    }
  
    &::after{
      background-color: var(--notification);
      width: auto;
      height: 16px;
      
      padding: 0 4px;
      
      position: absolute;
      bottom: -4px;
      right: -4px;
      border-radius: 12px;
      border:4px solid var(--quartenary);
      text-align: right;
      font-size: 13px;
      font-weight: bold;
      color: var(--white);

      display: ${(props) => props.mentions? 'inline' : 'none'};
      content:  '${(props) => props.mentions && props.mentions}';
    }
  
    &.active, &:hover{
      border-radius:16px;
      background-color: ${(props) => props.isHome ? 'var(--rocketseat)' : 'var(--discord)'};
    }
`;