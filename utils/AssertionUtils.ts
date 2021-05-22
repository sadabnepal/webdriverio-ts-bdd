import AllureReporter from "@wdio/allure-reporter"

export default new class AssertionUtils {

    toBeDisplayed(element:WebdriverIO.Element) {
        expect(element).toBeDisplayed()
        AllureReporter.addStep(`${JSON.stringify(element.selector)} is Displayed`)
    }

    toHaveText(element:WebdriverIO.Element, expectedText:string) {
        expect(element).toHaveText(expectedText);
        AllureReporter.addStep(`Validated ${JSON.stringify(element.selector)} to have text '${expectedText}'`)
    }

    toHaveTextContaining(element:WebdriverIO.Element, expectedText:string) {
        expect(element).toHaveTextContaining(expectedText);
        AllureReporter.addStep(`Validated ${JSON.stringify(element.selector)} to have text '${expectedText}'`)
    }

    toEqual(actualString:string, expectedText:string) {
        expect(actualString).toEqual(expectedText);
        AllureReporter.addStep(`Validated '${actualString}' to be equal to '${expectedText}'`)
    }

    toContainEqual(actualString:string, expectedText:string) {
        expect(actualString).toHaveTextContaining(expectedText);
        AllureReporter.addStep(`Validated '${actualString}' to contain '${expectedText}'`)
    }


    toHaveAttribute(element:WebdriverIO.Element, atrribute:string, expectedAttribValue:string) {
        expect(element).toHaveAttr(atrribute, expectedAttribValue)
        AllureReporter.addStep(`Validated element ${JSON.stringify(element.selector)} attribute '${atrribute}' contains value '${expectedAttribValue}'`)
    }

    toHaveAttributeContaining(element:WebdriverIO.Element, atrribute:string, expectedAttribValue:string) {
        expect(element).toHaveAttrContaining(atrribute, expectedAttribValue)
        AllureReporter.addStep(`Validated element ${JSON.stringify(element.selector)} attribute '${atrribute}' to have value '${expectedAttribValue}'`)
    }

}