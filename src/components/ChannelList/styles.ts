import styled from "styled-components";
import {Add} from "styled-icons/material";


export const Container = styled.div`
    grid-area: CL;
    display: none;
    flex-direction: column;
  
    padding: 24px 9.5px 0 16px;
    background-color: var(--secondary);

    @media (min-width: 769px) {
        display: flex;
    }
  
    &.open{
      display: flex;
    }
`;
export const Category = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  
    margin-bottom: 6px;
  
    > span {
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 500;
      color:var(--gray);
    }
`;

export const AddCategoryIcon = styled(Add)`
    width: 21px;
    height: 21px;
  
    cursor: pointer;
    color:var(--symbol)
`;