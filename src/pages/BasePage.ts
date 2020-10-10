export default class basepage {
    open() {
        return browser.url("")
    }

    doClick(element) {
        element.waitForDisplayed();
        element.click();
    }

    doSetValue(element, value) {
        element.waitForDisplayed();
        value.setValue(value);
    }
    
    doGetText(element) {
        element.waitForDisplayed()
        return element.getText();
    }

    getElement(element) {
        element.waitForDisplayed();
        return element;
    }

    doIsDisplayed(element):boolean {
        element.waitForDisplayed();
        return element.isDisplayed();
    }

    doIsExists(element): boolean {
        element.waitForDisplayed();
        return element.isExisting();
    }
}