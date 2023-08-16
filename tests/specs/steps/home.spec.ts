import { Given, Then, When } from '@wdio/cucumber-framework';
import homePage from '../../pages/home.page';

Given(/^I am on the home page$/, async () => {
  await homePage.openApplication();
});

Then(/^I validate home page logo$/, async () => {
  await expect(homePage.homePageLogo).toBeDisplayed();
})

Then(/^I validate left menu items$/, async (dataTable) => {
  const expectedMenuItems = dataTable.hashes().map((element: { LeftMenuItems: string }) => element.LeftMenuItems);
  expect(await homePage.getAllLeftMenu()).toEqual(expectedMenuItems);
})

Then(/^I user click on "([^"]*)?" link$/, async (linkText: string) => {
  await homePage.clickOnLink(linkText);
})

When(/^I login with existing user$/, async () => {
  await homePage.login("Jadyn40", "ehMk4x6JTNuEexN")
})