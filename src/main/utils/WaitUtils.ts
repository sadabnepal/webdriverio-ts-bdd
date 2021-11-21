import { WaitEnum } from "src/main/enums/WaitEnums";

class WaitUtils {

    private errorMessage(element: WebdriverIO.Element) {
        return `Failed while waiting for ${JSON.stringify(element.selector)}`;
    }

    public WaitFactory(element: WebdriverIO.Element, waittype: WaitEnum): WebdriverIO.Element {
        if (waittype == "CLICKABLE") {
            browser.waitUntil(() => element.isClickable(), { timeout: 30000, timeoutMsg: this.errorMessage(element) })
            return element;
        }
        else if (waittype == "DISPLAYED") {
            browser.waitUntil(() => element.isDisplayed(), { timeout: 30000, timeoutMsg: this.errorMessage(element) })
            return element;
        }
        else if (waittype == "ENABLED") {
            browser.waitUntil(() => element.isEnabled(), { timeout: 30000, timeoutMsg: this.errorMessage(element) })
            return element;
        }
        else if (waittype == "EXIST") {
            browser.waitUntil(() => element.isExisting(), { timeout: 30000, timeoutMsg: this.errorMessage(element) })
            return element;
        }
        else {
            return element;
        }
    }

    waitUntillCondition(condition: boolean, timeout: number, errormsg: string) {
        return browser.waitUntil(() => condition, { timeout: timeout, timeoutMsg: errormsg })
    }

}
export default new WaitUtils()