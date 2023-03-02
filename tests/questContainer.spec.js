/* eslint-disable testing-library/prefer-screen-queries */
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('localhost:3000');
});

test('Add Quest', async ({ page }) => {
    await page.getByRole('button', { name: 'Add Quest' }).click();
    await page.getByTestId('editQuestDialog-1').getByLabel('Quest Name').click();
    await page.getByTestId('editQuestDialog-1').getByLabel('Quest Name').fill('testName');
    await page.getByLabel('Quest Description').click();
    await page.getByLabel('Quest Description').fill('testDescription');
    await page.getByLabel('Quest Type').click();
    await page.getByLabel('Quest Type').fill('testType');
    await page.getByLabel('Quest Location').click();
    await page.getByLabel('Quest Location').fill('testLocation');
    await page.getByLabel('Quest Reward').click();
    await page.getByLabel('Quest Reward').fill('testReward');
    await page.getByRole('button', { name: 'Save' }).click();

    //check if quest is added
    const questName = await page.getByRole('cell', { name: 'testName' }).innerText();
    expect(questName).toEqual('testName');
  });

test('Delete Quest', async ({ page }) => {
  await page.getByRole('button', { name: 'Add Quest' }).click();
  await page.getByTestId('editQuestDialog-1').getByLabel('Quest Name').fill('test');
  await page.getByTestId('editQuestDialog-1').getByLabel('Quest Name').press('Tab');
  await page.getByLabel('Quest Description').fill('test');
  await page.getByLabel('Quest Description').press('Tab');
  await page.getByLabel('Quest Type').fill('test');
  await page.getByLabel('Quest Type').press('Tab');
  await page.getByLabel('Quest Location').fill('test');
  await page.getByLabel('Quest Location').press('Tab');
  await page.getByLabel('Quest Reward').fill('test');
  await page.getByLabel('Quest Reward').press('Tab');
  await page.getByRole('button', { name: 'Cancel' }).press('Tab');
  await page.getByRole('button', { name: 'Save' }).press('Enter');
  await page.getByRole('cell', { name: 'test' }).first().click();
  await page.getByRole('button', { name: 'Delete Quest' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
});

test('Select Quest', async ({ page }) => {
  await page.getByRole('button', { name: 'Add Quest' }).click();
  await page.getByTestId('editQuestDialog-1').getByLabel('Quest Name').click();
  await page.getByTestId('editQuestDialog-1').getByLabel('Quest Name').fill('test');
  await page.getByTestId('editQuestDialog-1').getByLabel('Quest Name').press('Tab');
  await page.getByLabel('Quest Description').fill('test');
  await page.getByLabel('Quest Description').press('Tab');
  await page.getByLabel('Quest Type').fill('test');
  await page.getByLabel('Quest Type').press('Tab');
  await page.getByLabel('Quest Location').fill('test');
  await page.getByLabel('Quest Location').press('Tab');
  await page.getByLabel('Quest Reward').fill('test');
  await page.getByRole('button', { name: 'Save' }).click();

  await page.getByRole('button', { name: 'Add Quest' }).click();
  await page.getByTestId('editQuestDialog-1').getByLabel('Quest Name').click();
  await page.getByTestId('editQuestDialog-1').getByLabel('Quest Name').fill('test2');
  await page.getByTestId('editQuestDialog-1').getByLabel('Quest Name').press('Tab');
  await page.getByLabel('Quest Description').fill('test2');
  await page.getByLabel('Quest Description').press('Tab');
  await page.getByLabel('Quest Type').click();
  await page.getByLabel('Quest Type').fill('test2');
  await page.getByLabel('Quest Location').click();
  await page.getByLabel('Quest Location').fill('test2');
  await page.getByLabel('Quest Location').press('Tab');
  await page.getByLabel('Quest Reward').fill('test2');
  await page.getByRole('button', { name: 'Save' }).click();

  await page.getByRole('cell', { name: 'test', exact: true }).first().click();
  //check if quest is selected
  const questName = await page.getByTestId('questDetails-2').getByText('test').nth(1).innerText();
  console.log(questName);
  expect(questName).toEqual('test');

  await page.getByRole('cell', { name: 'test2' }).first().click();
  const questName2 = await page.getByTestId('questDetails-2').getByText('test').nth(1).innerText();
  expect(questName2).toEqual('test2');
});