import React from 'react';

export function QuestDetails({ quest }) {
    if(quest === null) {
        return null;
    }
    return (
        <div className = "QuestDetails" >
            <h2>Quest Details</h2>
            <p>Quest Name: {quest.name}</p>
            <p>Quest Description: {quest.description}</p>
            <p>Quest Type: {quest.type}</p>
            <p>Quest Location: {quest.location}</p>
            <p>Quest Reward: {quest.reward}</p>
        </div>
    );
}

export default QuestDetails;