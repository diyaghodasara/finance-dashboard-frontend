import React from 'react';
import styled, {keyframes} from 'styled-components';
import {motion} from 'framer-motion';
import {useNavigate} from 'react-router-dom';
import '@fontsource/raleway'; // Importing a clean and modern font

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background: white;
    text-align: center;
    font-family: 'Raleway', sans-serif;
    overflow: hidden;
    position: relative;
`;

const revealLetter = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;


const GradientText = styled.h1`
    font-size: 3em;
    margin-bottom: 20px;
    color: darkblue;
    letter-spacing: 0.1em;
    display: inline-block;
    font-family: 'Arial Black', Gadget, sans-serif;
    animation: ${revealLetter} 0.5s forwards;
`;

const Subtitle = styled(motion.h2)`
    font-size: 1.5em;
    color: #4895EF;
    margin-bottom: 40px;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
`;

const Button = styled(motion.button)`
    padding: 10px 20px;
    font-size: 1em;
    color: #FFF;
    background-color: #B5179E;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 150px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25); /* Elevation effect */
    transform: translateZ(5px); /* Z-index elevation */

    &:hover {
        background-color: #9B13A3;
        transform: translateZ(8px) scale(1.05); /* Slightly increase elevation on hover */
    }
`;

const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <GradientText>
                Personal Expense Tracker
            </GradientText>
            <Subtitle
                initial={{opacity: 0, y: -50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1.2}}
            >
                One stop solution to control your money
            </Subtitle>
            <ButtonContainer>
                <Button
                    initial={{opacity: 0, scale: 0.8}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 1}}
                    onClick={() => navigate('/SignUpForm')}
                >
                    Sign Up
                </Button>
                <Button
                    initial={{opacity: 0, scale: 0.8}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 1.2}}
                    onClick={() => navigate('/LoginForm')}
                >
                    Log In
                </Button>
            </ButtonContainer>
        </Container>
    );
};

export default LandingPage;
