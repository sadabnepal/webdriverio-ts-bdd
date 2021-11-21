import { logStep } from "./reporter";

export default new class AssertionUtils {

    toBeDisplayed(element:WebdriverIO.Element) {
        expect(element).toBeDisplayed()
        logStep(`${JSON.stringify(element.selector)} is Displayed`)
    }

    toHaveText(element:WebdriverIO.Element, expectedText:string) {
        expect(element).toHaveText(expectedText);
        logStep(`Validated ${JSON.stringify(element.selector)} to have text '${expectedText}'`)
    }

    toHaveTextContaining(element:WebdriverIO.Element, expectedText:string) {
        expect(element).toHaveTextContaining(expectedText);
        logStep(`Validated ${JSON.stringify(element.selector)} to have text '${expectedText}'`)
    }

    toEqual(actualString:string, expectedText:string) {
        expect(actualString).toEqual(expectedText);
        logStep(`Validated '${actualString}' to be equal to '${expectedText}'`)
    }

    toContainEqual(actualString:string, expectedText:string) {
        expect(actualString).toHaveTextContaining(expectedText);
        logStep(`Validated '${actualString}' to contain '${expectedText}'`)
    }


    toHaveAttribute(element:WebdriverIO.Element, atrribute:string, expectedAttribValue:string) {
        expect(element).toHaveAttr(atrribute, expectedAttribValue)
        logStep(`Validated element ${JSON.stringify(element.selector)} attribute '${atrribute}' contains value '${expectedAttribValue}'`)
    }

    toHaveAttributeContaining(element:WebdriverIO.Element, atrribute:string, expectedAttribValue:string) {
        expect(element).toHaveAttrContaining(atrribute, expectedAttribValue)
        logStep(`Validated element ${JSON.stringify(element.selector)} attribute '${atrribute}' to have value '${expectedAttribValue}'`)
    }

    validatePageTitle(expectedTitle:string) {
        expect(browser).toHaveTitle(expectedTitle)
        logStep(`Validated Page title: ${expectedTitle}`)
    }

}