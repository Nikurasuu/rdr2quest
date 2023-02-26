import { render, screen, cleanup } from '@testing-library/react';
import QuestContainer from '../QuestContainer';
import { act } from 'react-dom/test-utils';

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

test('AddQuestDialog creates quest and sets it as activeQuest', () => {
    render(<QuestContainer />);
    const addButton = screen.getByText('Add Quest');
    act(() => addButton.click());


});