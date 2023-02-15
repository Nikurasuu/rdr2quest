import React from 'react';

function QuestDetails() {
    const [activeQuest, setActiveQuest] = React.useState(null);
    
    return ( 
        <>
        {!activeQuest ? null : <ShowQuestDetails  {...activeQuest} />}
     </>
     );
}

export function ShowQuestDetails(props) {
    return (
        <div className = "QuestDetails" >
            <h2>Quest Details</h2>
            <p>Quest Name: {props.name}</p>
            <p>Quest Description: {props.description}</p>
            <p>Quest Type: {props.type}</p>
            <p>Quest Location: {props.location}</p>
            <p>Quest Reward: {props.reward}</p>
        </div>
    );
}

export default QuestDetails;