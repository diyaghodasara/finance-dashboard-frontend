import React, {useState} from "react";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SignUpFormContainer = styled(Form)`
    height: 70%;
    width: 40%;
    display: flex;
    flex-direction: column;
    border: solid 1px lightgray;
    border-radius: 5px;
    align-items: center;
    justify-content: space-evenly;
`;
const FormGroup = styled(Form.Group)`
    display: flex;
    flex-direction: column;
`;
const FormLabel = styled(Form.Label)`
    margin-bottom: 0.5rem;
`;
const FormControl = styled(Form.Control)``;
const Heading = styled.h2`
    color: purple;
`;
const StyledButton = styled(Button)``;

const SignUpForm = () => {
    return(

        <SignUpFormContainer>
            <Heading>Sign Up</Heading>
            <FormGroup >
                <FormLabel>First Name</FormLabel>
                <FormControl type="text" placeholder="First Name" />
            </FormGroup>
            <FormGroup >
                <FormLabel>Last Name</FormLabel>
                <FormControl type="text" placeholder="Last Name" />
            </FormGroup>
            <FormGroup >
                <FormLabel>Email address</FormLabel>
                <FormControl type="email" placeholder="Enter email" />
            </FormGroup>
            <FormGroup>
                <FormLabel>Password</FormLabel>
                <FormControl type="password" placeholder="Password" />
            </FormGroup>
            <StyledButton variant="primary" type="submit">
                Submit
            </StyledButton>
        </SignUpFormContainer>
    );
}
export default SignUpForm;