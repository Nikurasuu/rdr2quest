import { render, screen, cleanup } from '@testing-library/react';
import QuestContainer from '../QuestContainer';
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

test('QuestContainer shows Buttons', () => {
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

