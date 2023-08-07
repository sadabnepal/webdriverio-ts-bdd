import { Given, Then, When } from "@wdio/cucumber-framework";
import { join } from 'path';

Given(/^I open herokuapp upload page$/, async () => {
    await browser.url("https://the-internet.herokuapp.com/upload");
    await browser.maximizeWindow();
})

When(/^I upload file$/, async () => {
    const chooseFileButton = $("#file-upload");
    const filePath = join(process.cwd(), 'src', 'data', 'sample.txt');
    const uploadFilePath = await browser.uploadFile(filePath);
    await chooseFileButton.setValue(uploadFilePath);
    const uploadButton = $("#file-submit");
    await uploadButton.click();
})

Then(/^I validate file is uploaded successfully$/, async () => {
    const uploadMessage = $("//h3");
    await expect(uploadMessage).toHaveText("File Uploaded!");
})