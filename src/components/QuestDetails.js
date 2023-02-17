import React from 'react';

export function QuestDetails({ quest }) {
    if(quest === null) {
        return null;
    }
    return (
        <div className = "QuestDetails" >
            <h2>{quest.name}</h2>
            <h4>Quest Type</h4>
            <p>{quest.type}</p>
            <h4>Quest Description</h4>
            <p>{quest.description}</p>
            <h4>Quest Location</h4>
            <p>{quest.location}</p>
            <h4>Quest Reward</h4>
            <p>{quest.reward}</p>
        </div>
    );
}

export default QuestDetails;