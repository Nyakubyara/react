import React, { useState } from 'react';
import NavBar from './../comps/navBar';
import MainBody from '../comps/mainBody';

const HomePage = () => {
    const [userStatus, setUserStatus] = useState(false);
    const [page, setPage] = useState("home"); // Manage the page state (home, about, feedback)

    const handlePageChange = (pageName) => {
        setPage(pageName); // Update page content based on the menu clicked
    };

    return (
        <>
            <NavBar
                userStatus={userStatus}
                handelUser={setUserStatus}
                handlePageChange={handlePageChange} // Pass the function to update the page state
            />
            <MainBody userStatus={userStatus} page={page} />
        </>
    );
};

export default HomePage;
