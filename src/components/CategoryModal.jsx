import React, { useState } from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContainer = styled.div`
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 300px;
    text-align: center;
`;

const CategoryButton = styled.button`
    background-color: ${props => props.selected ? '#4895EF' : '#B5179E'};
    color: white;
    border: none;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;
`;

const CloseButton = styled.button`
    background-color: #ccc;
    color: black;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
`;

const CategoryModal = ({ categories, onSelectCategory, onClose }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleSelect = () => {
        onSelectCategory(selectedCategory);
        onClose();
    };

    return (
        <ModalBackground>
            <ModalContainer>
                <h3>Select a Category</h3>
                {categories.map((category, index) => (
                    <CategoryButton
                        key={index}
                        selected={selectedCategory === category}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </CategoryButton>
                ))}
                <div>
                    <CloseButton onClick={onClose}>Cancel</CloseButton>
                    <CategoryButton selected onClick={handleSelect}>
                        Add
                    </CategoryButton>
                </div>
            </ModalContainer>
        </ModalBackground>
    );
};

export default CategoryModal;
