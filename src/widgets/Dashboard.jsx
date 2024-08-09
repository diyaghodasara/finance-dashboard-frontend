import React, { useState } from 'react';
import styled from 'styled-components';
import CollapsibleSidebar from "../components/CollapsibleSidebar";
import CategoryModal from "../components/CategoryModal";
import Card from "../components/Card";
import { colors } from "../constants/StylingConstants";

const DashboardContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
`;

const MainContent = styled.div`
    background-color: ${colors.white};
    color: ${colors.black};
    padding: 20px;
    margin-left: ${props => props.isSidebarOpen ? '350px' : '60px'};
    transition: margin-left 0.3s ease;
`;

const Heading = styled.h1`
    color: ${colors.purple};
`;

const AddCardButton = styled.button`
    background-color: ${colors.deepPurple};
    color: ${colors.white};
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 20px;
`;

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [cards, setCards] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const categories = ['Sales', 'Revenue', 'Users', 'Performance'];

    const toggleSidebar = () => {
        setIsSidebarOpen(prevState => !prevState);
    };

    const addCard = (category) => {
        const newCard = {
            id: Date.now(),
            title: `${category} Chart`,
            data: { /* Add your chart data specific to the category */ }
        };
        setCards([...cards, newCard]);
    };

    const deleteCard = (id) => {
        setCards(cards.filter(card => card.id !== id));
    };

    return (
        <DashboardContainer>
            <CollapsibleSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <MainContent isSidebarOpen={isSidebarOpen}>
                <Heading>Dashboard</Heading>
                <AddCardButton onClick={() => setIsModalOpen(true)}>
                    Add Card
                </AddCardButton>
                <CardContainer>
                    {cards.map(card => (
                        <Card
                            key={card.id}
                            title={card.title}
                            chartData={card.data}
                            onDelete={() => deleteCard(card.id)}
                        />
                    ))}
                </CardContainer>
                {isModalOpen && (
                    <CategoryModal
                        categories={categories}
                        onSelectCategory={addCard}
                        onClose={() => setIsModalOpen(false)}
                    />
                )}
            </MainContent>
        </DashboardContainer>
    );
};

export default Dashboard;
