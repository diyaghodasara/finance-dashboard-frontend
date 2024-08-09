import React from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import { colors } from "../constants/StylingConstants";

const CardContainer = styled.div`
    background-color: ${colors.white};
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 20px;
    width: 100%;
    max-width: 500px;
    position: relative;
`;

const Title = styled.h2`
    color: ${colors.black};
    margin-bottom: 20px;
`;

const DeleteButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: ${colors.purple};
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
`;

const Card = ({ title, chartData, onDelete }) => {
    return (
        <CardContainer>
            <DeleteButton onClick={onDelete}>Delete</DeleteButton>
            <Title>{title}</Title>
            <Line data={chartData} />
        </CardContainer>
    );
};

export default Card;
