import basepage from './BasePage'

class createAccount extends basepage{
    openApplication() {
        return super.open();
    }
}
export default new createAccount();