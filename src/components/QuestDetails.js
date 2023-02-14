import React from 'react';

const quest = [
    {
    name: "Quest 1",
    description: "Description 1",
    type: "Type 1",
    location: "Location 1",
    reward: "Reward 1"
    },
    {
    name: "Quest 2",
    description: "Description 2",
    type: "Type 2",
    location: "Location 2",
    reward: "Reward 2"
    },
];

function App() {
    return ( 
        <div className = "QuestDetails" >
            <h2>Quest Details</h2>
            <br/>
            <p>Quest Name: {quest[0].name}</p>
            <br/>
            <p>Quest Description: {quest[0].description}</p>
            <br/>
            <p>Quest Type: {quest[0].type}</p>
            <br/>
            <p>Quest Location: {quest[0].location}</p>
            <br/>
            <p>Quest Reward: {quest[0].reward}</p>
        </div>
     );
}

export default App;