import { WaitEnum } from "src/enums/WaitEnums";

class WaitUtils {

    public WaitFactory(element: WebdriverIO.Element, waittype:WaitEnum):WebdriverIO.Element {
        if(waittype == "CLICKABLE") {
            browser.waitUntil(
                () => element.isClickable() == true, 
                {timeout: 30000, timeoutMsg: "Failed while waiting for "+JSON.stringify(element.selector) +" to be clickable"}
            )
            return element;
        }
        else if (waittype == "DISPLAYED") {
            browser.waitUntil(
                () => element.isDisplayed() == true, 
                {timeout: 30000, timeoutMsg: "Failed while waiting for "+JSON.stringify(element.selector) +" to be displayed"}
            )
            return element;
        }
        else if (waittype == "ENABLED") {
            browser.waitUntil(
                () => element.isExisting() == true, 
                {timeout: 30000, timeoutMsg: "Failed while waiting for "+JSON.stringify(element.selector) +" to be enabled"}
            )
            return element;
        }
        else if (waittype == "EXIST") {
            browser.waitUntil(
                () => element.isExisting() == true, 
                {timeout: 30000, timeoutMsg: "Failed while waiting for "+JSON.stringify(element.selector) +" to exists"}
            )
            return element;
        }
        else if (waittype == "NONE") {
            return element;
        }
        else {   
            return null;
        }
    }

    waitUntillCondition(condition:boolean, timeout: number, errormsg: string) {
        return browser.waitUntil(()=> condition, { timeout: timeout, timeoutMsg: errormsg })
    }

}
export default new WaitUtils()