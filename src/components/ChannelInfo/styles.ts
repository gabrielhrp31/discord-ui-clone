import styled from "styled-components";
import { Hashtag } from 'styled-icons/heroicons-outline'
import { Menu } from '@styled-icons/boxicons-regular/Menu'
import { Close } from 'styled-icons/material';
import { UserFriends } from '@styled-icons/fa-solid/UserFriends'

export const Container = styled.div`
    grid-area: CI;
    display: flex;
    align-items: center;
    
    padding: 0 17px;
    background-color:var(--primary);

    box-shadow: rgba(0,0,0,0.2) 0px 1px 0px 0px;
    z-index: 2;
`;

export const Title = styled.h1`
  margin-left: 9px;
  font-size: 16px;
  font-weight: bold;

  color: var(--white);
`;

export const OpenServersIcon = styled(Menu)`
    width: 24px;
    height: 24px;
    margin-left:-10px;
    margin-right:5px;
    color: var(--white);
    cursor:pointer;
  
    @media (min-width: 769px){
        display:none;
    }
`;


export const OpenFriendsIcon = styled(UserFriends)`
    width: 24px;
    height: 24px;
    margin-left:auto;
    margin-right:5px;
    color: var(--white);
    cursor:pointer;
  
    @media (min-width: 1025px){
        display:none;
    }
`;

export const CloseFriendsIcon = styled(Close)`
    width: 24px;
    height: 24px;
    margin-left:auto;
    margin-right:5px;
    color: var(--white);
    cursor:pointer;
    @media (min-width: 1025px){
        display:none;
    }
`;

export const HashtagIcon = styled(Hashtag)`
    width: 24px;
    height: 24px;
  
    color: var(--symbol);
`;

export const Separator = styled.div`
    height: 24px;
    width:1px;
    
    background-color:var(--white);
    opacity: 0.2;
    margin:0 13px;
`;

export const Description = styled.span`
    font-size: 15px;
    color:var(--gray);
`;