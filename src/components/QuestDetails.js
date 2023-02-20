import React from 'react';

const containerHeight = window.innerHeight-185;

export function QuestDetails({ quest }) {
    if(quest === null) {
        return null;
    }
    return (
        <div style={{ height: containerHeight, width: '100%' }}>
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
        </div>
    );
}

export default QuestDetails;