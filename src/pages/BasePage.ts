export default class basepage {
    open() {
        return browser.url("")
    }

    doClick(element:any) {
        element.waitForDisplayed();
        element.click();
    }

    doSetValue(element:any, value:string) {
        element.waitForDisplayed();
        element.clearValue();
        element.setValue(value);
    }
    
    doGetText(element:any):string {
        element.waitForDisplayed()
        return element.getText();
    }

    getElement(element:any) {
        element.waitForDisplayed();
        return element;
    }

    doIsDisplayed(element:any):boolean {
        element.waitForDisplayed();
        return element.isDisplayed();
    }

    doIsExists(element:any): boolean {
        try { element.waitForDisplayed(); } 
        catch (error) { }
        return element.isExisting();
    }

    doSelectByAttribute(element:any, attribute:string, value:string) {
        element.waitForEnabled();
        element.selectByAttribute(attribute, value);
    }

    doSelectByVisibleText(element:any, text:string) {
        element.waitForEnabled();
        element.selectByVisibleText(text);
    }
}