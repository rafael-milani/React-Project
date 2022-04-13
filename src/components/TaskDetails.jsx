import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Button from './Button';
import Header from './Header';

import "./TaskDetails.css";

const TaskDetails = () => {
    const params = useParams();
    const navigate = useNavigate();


    const handleBackButtonClick = () => {
        window.location.href = "/";
    }
    return (
        <>
            <Header />
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}> Voltar </Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel officiis fugit, harum pariatur repellendus deserunt tempora neque voluptatem veniam sint voluptas velit beatae accusantium debitis mollitia nisi tenetur perferendis ducimus.
                </p>
            </div>
        
        </>

    );
};
 
export default TaskDetails;