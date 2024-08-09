import React from 'react';
import styled from 'styled-components';
import {colors} from "../constants/StylingConstants";

const InfoBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
`;
const UserTagContainer = styled.div`
    width: 40%;
    border-style: solid;
    border-width: 2px;
    border-radius: 5px;
    border-color: ${colors.pink};
`;
const TotalIncomeContainer = styled.div`
    width: 30%;
    background: ${colors.magenta};
    opacity: 0.6;
    border-radius: 5px;
`;
const TotalExpensesContainer = styled.div`
    width: 30%;
    background: ${colors.skyBlue};
    opacity: 0.6;
    border-radius: 5px;
`;

const InfoBar = () => {
    return (
        <InfoBarContainer>
            <UserTagContainer></UserTagContainer>
            <TotalIncomeContainer></TotalIncomeContainer>
            <TotalExpensesContainer></TotalExpensesContainer>
        </InfoBarContainer>
    );
}
export default InfoBar;