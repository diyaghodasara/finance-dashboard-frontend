import React, {useState} from "react";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import { useDispatch } from "react-redux";
import {setCredentials} from "../utils/auth/authSlice";

const OuterContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const SignUpFormContainer = styled(Form)`
    background: white;
    height: 60%;
    width: 30%;
    display: flex;
    flex-direction: column;
    border: solid 1px lightgray;
    border-radius: 10px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2); /* Slight shadow for depth */
    padding: 2rem;
    align-items: center;
    justify-content: space-evenly;
`;
const FormGroup = styled(Form.Group)`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
const FormLabel = styled(Form.Label)`
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #3f37c9;
`;
const FormControl = styled(Form.Control)`
    border-radius: 5px;
    border: 1px solid #b5179e;

    &:focus {
        border-color: #7209b7;
        box-shadow: 0 0 5px rgba(114, 9, 183, 0.5);
    }
`;
const Heading = styled.h2`
    color: #7209b7;
    font-size: 1.8rem;
    margin-bottom: 1rem;
`;
const StyledButton = styled(Button)`
    padding: 10px 20px;
    margin-top: 10px;
    font-size: 1em;
    color: #FFF;
    background-color: #B5179E;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25); /* Elevation effect */
    transform: translateZ(5px); /* Z-index elevation */

    &:hover {
        background-color: #9B13A3;
        transform: translateZ(8px) scale(1.05); /* Slightly increase elevation on hover */
    }
`;
const LoginLink = styled.div`
    margin-top: 1rem;
    color: #4895ef;
    font-size: 0.9rem;

    a {
        color: #4895ef;
        text-decoration: none;
        font-weight: bold;

        &:hover {
            text-decoration: underline;
        }
    }
`;
const SignUpForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("your-signup-api-endpoint", formData);

            if (response.status === 201) {
                const { user, token } = response.data; // Assuming the API returns user and token
                dispatch(setCredentials({ user, token })); // Store user and token in Redux

                navigate("/dashboard"); // Redirect to the protected dashboard
            }
        } catch (error) {
            console.error("Signup failed", error);
        }
    };

    return (
        <OuterContainer>
            <SignUpFormContainer onSubmit={handleSubmit}>
                <Heading>Sign Up</Heading>
                <FormGroup>
                    <FormLabel>First Name</FormLabel>
                    <FormControl
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Email address</FormLabel>
                    <FormControl
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Password</FormLabel>
                    <FormControl
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </FormGroup>
                <StyledButton variant="primary" type="submit">
                    Submit
                </StyledButton>
                <LoginLink>
                    Already a Member? <Link to="/LoginForm">Login</Link>
                </LoginLink>
            </SignUpFormContainer>
        </OuterContainer>
    );
}
export default SignUpForm;