import React from 'react';
import styled from 'styled-components';
import { colors } from "../constants/StylingConstants";

const SidebarContainer = styled.div`
    height: 100vh;
    width: ${props => props.isOpen ? '200px' : '30px'};
    background-color: ${colors.purple};
    color: ${colors.white};
    transition: width 0.3s ease;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    padding: ${props => props.isOpen ? '20px' : '10px'};
`;

const SidebarToggle = styled.button`
    background-color: ${colors.deepPurple};
    color: ${colors.white};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 10px;
    margin-bottom: 20px;
    align-self: ${props => props.isOpen ? 'flex-end' : 'center'};
`;

const MenuItems = styled.div`
    display: ${props => props.isOpen ? 'block' : 'none'};
`;

const MenuItem = styled.div`
    margin-bottom: 15px;
    cursor: pointer;
    &:hover {
        color: ${colors.skyBlue};
    }
`;

const CollapsibleSidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <SidebarToggle isOpen={isOpen} onClick={toggleSidebar}>
                =
            </SidebarToggle>
            <MenuItems isOpen={isOpen}>
                <MenuItem>Home</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Services</MenuItem>
                <MenuItem>Contact</MenuItem>
            </MenuItems>
        </SidebarContainer>
    );
};

export default CollapsibleSidebar;
