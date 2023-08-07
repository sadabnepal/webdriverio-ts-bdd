import { WebElement } from "../pages/BasePage";

export const logStep = (log: string) => console.log(`STEP || ${log}`)

export default new class AssertionUtils {

    async toBeDisplayed(element: WebElement) {
        await expect(element).toBeDisplayed()
        logStep(`${JSON.stringify(await element.selector)} is Displayed`)
    }

    async toHaveText(element: WebElement, expectedText: string) {
        await expect(element).toHaveText(expectedText);
        logStep(`Validated ${JSON.stringify(await element.selector)} to have text '${expectedText}'`)
    }

    async toHaveTextContaining(element: WebElement, expectedText: string) {
        await expect(element).toHaveTextContaining(expectedText);
        logStep(`Validated ${JSON.stringify(await element.selector)} to have text '${expectedText}'`)
    }

    toEqual(actualString: string, expectedText: string) {
        expect(actualString).toEqual(expectedText);
        logStep(`Validated '${actualString}' to be equal to '${expectedText}'`)
    }

    toContainEqual(actualString: string, expectedText: string) {
        expect(actualString).toHaveTextContaining(expectedText);
        logStep(`Validated '${actualString}' to contain '${expectedText}'`)
    }

    async toHaveAttribute(element: WebElement, atrribute: string, expectedAttribValue: string) {
        await expect(element).toHaveAttr(atrribute, expectedAttribValue)
        logStep(`Validated element ${JSON.stringify(await element.selector)} attribute '${atrribute}' contains value '${expectedAttribValue}'`)
    }

    async toHaveAttributeContaining(element: WebElement, atrribute: string, expectedAttribValue: string) {
        await expect(element).toHaveAttrContaining(atrribute, expectedAttribValue)
        logStep(`Validated element ${JSON.stringify(await element.selector)} attribute '${atrribute}' to have value '${expectedAttribValue}'`)
    }

    validatePageTitle(expectedTitle: string) {
        expect(browser).toHaveTitle(expectedTitle)
        logStep(`Validated Page title: ${expectedTitle}`)
    }

}