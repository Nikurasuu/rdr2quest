import { render, screen, cleanup } from '@testing-library/react';
import QuestContainer from '../QuestContainer';
import { act } from 'react-dom/test-utils';
import QuestDetails from '../QuestDetails';
import QuestList from '../QuestList';

afterEach(() => {
    cleanup();
});

test('QuestContainer renders', () => {
    render(<QuestContainer />);
    const questContainer = screen.getByTestId('questContainer-1');
    expect(questContainer).toBeInTheDocument();
});

test('QuestContainer shows QuestList', () => {
    render(<QuestContainer />);
    const dataGrid = screen.getByTestId('questList-1');
    expect(dataGrid).toBeInTheDocument();
});

test('QuestContainer shows QuestDetails', () => {
    render(<QuestContainer />);
    const questDetails = screen.getByTestId('questDetails-1');
    expect(questDetails).toBeInTheDocument();
});

test('QuestDetails shows no quest selected', () => {
    render(<QuestContainer />);
    const questDetails = screen.getByTestId('questDetails-1');
    expect(questDetails).toBeInTheDocument();
    const noQuestSelected = screen.getByText('Keine Quest ausgewählt.');
    expect(noQuestSelected).toBeInTheDocument();
});

test('QuestDetails shows selected quest', () => {
    render(<QuestDetails quest={
        {
          "id": 1,
          "name": "testQuestTitle-1",
          "description": "testQuestDescription-1",
          "type": "testQuestType-1",
          "location": "testQuestLocation-1",
          "reward": "testQuestReward-1"
        }
      }/>);
    const questDetails = screen.getByTestId('questDetails-2');
    expect(questDetails).toBeInTheDocument();
    const questTitle = screen.getByText('testQuestTitle-1');
    expect(questTitle).toBeInTheDocument();
    const questDescription = screen.getByText('testQuestDescription-1');
    expect(questDescription).toBeInTheDocument();
    const questType = screen.getByText('testQuestType-1');
    expect(questType).toBeInTheDocument();
    const questLocation = screen.getByText('testQuestLocation-1');
    expect(questLocation).toBeInTheDocument();
    const questReward = screen.getByText('testQuestReward-1');
    expect(questReward).toBeInTheDocument();
});

test('QuestList shows Buttons', () => {
    render(<QuestContainer />);
    const dataGrid = screen.getByTestId('questList-1');
    expect(dataGrid).toBeInTheDocument();
    const addButton = screen.getByText('Add Quest');
    expect(addButton).toBeInTheDocument();
    const editButton = screen.getByText('Edit Quest');
    expect(editButton).toBeInTheDocument();
    const deleteButton = screen.getByText('Delete Quest');
    expect(deleteButton).toBeInTheDocument();
});

test('QuestList shows Quests', () => {
    const quests = [
        {
            "id": 1,
            "name": "testQuestTitle-1",
            "description": "testQuestDescription-1",
            "type": "testQuestType-1",
            "location": "testQuestLocation-1",
            "reward": "testQuestReward-1"
        },
        {
            "id": 2,
            "name": "testQuestTitle-2",
            "description": "testQuestDescription-2",
            "type": "testQuestType-2",
            "location": "testQuestLocation-2",
            "reward": "testQuestReward-2"
        }
    ];
    render(<QuestList quests={quests}/>);
    const dataGrid = screen.getByTestId('questList-1');
    expect(dataGrid).toBeInTheDocument();
    const questTitle1 = screen.getByText('testQuestTitle-1');
    expect(questTitle1).toBeInTheDocument();
    const questTitle2 = screen.getByText('testQuestTitle-2');
    expect(questTitle2).toBeInTheDocument();
});