import styled from "styled-components";

//SL - Server List
//SN - Server Name
//CI - Channel Info
//CL - Channel List
//CD - Channel Data
//UL - User List
//UI - User Info

export const Grid = styled.div`

    height: 100vh;
    display: grid;
    grid-template-columns:100%;
    grid-template-rows:46px auto 52px; 
    grid-template-areas:
        'CI CI CI CI'
        'CD CD CD CD'    
        'CD CD CD CD';
    overflow: hidden;

    &.open-channel-list{
    grid-template-columns:71px calc(85vw - 71px) 500px;
    grid-template-rows:46px calc(100vh - 46px - 52px) 52px;
    grid-template-areas:
        'SL SN CI'
        'SL CL CD'    
        'SL UI CD';
    
    >div.overlay{
      position: absolute;
      width: 15vw;
      margin-left: 85vw;
      background-color: rgba(0,0,0,0.2);
      min-height: 100vh;
      z-index: 10;
    }
  }


  &.open-user-list {
    grid-template-columns:15vw 85vw auto auto;
    grid-template-rows:46px calc(100vh - 46px - 52px) 52px;
    grid-template-areas:
        'CI CI CI CI'
        'UL UL UL UL'    
        'UL UL UL UL';
  }
  
  @media (min-width: 769px){
    grid-template-columns:71px 240px calc(100vw - 71px - 240px)!important;
    grid-template-rows:46px calc(100vh - 46px - 52px) 52px!important;
    grid-template-areas:
            'SL SN CI CI'
            'SL CL CD CD'    
            'SL UI CD CD' !important;

    &.open-user-list {
      grid-template-columns:15vw 85vw auto auto;
      grid-template-rows:46px calc(100vh - 46px - 52px) 52px;
      grid-template-areas:
          'CI CI CI CI'
          'UL UL UL UL'    
          'UL UL UL UL'!important;
    }
  }
  
  @media (min-width: 1025px) {
    grid-template-columns:71px 240px auto 240px!important;
    grid-template-areas:
        'SL SN CI CI'
        'SL CL CD UL'    
        'SL UI CD UL'!important;
  }
`;