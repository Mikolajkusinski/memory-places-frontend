import React from 'react';
import AppNavbar from '../Components/Navbar';
import { Container } from 'react-bootstrap';

const MainPage = () => {
    return (
        <div>
            <AppNavbar />
            <Container className="mt-4">
                <h1>Welcome to MyApp</h1>
                <p>This is the main page of the application.</p>
            </Container>
        </div>
    );
};

export default MainPage;