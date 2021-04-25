import { WaitEnum } from 'src/enums/WaitEnums'
import basepage from 'src/pages/BasePage'
import signupdata from 'src/testdata/SignUp.json'

class createAccount extends basepage {

    private get createAccountHeader() { return $('#center_column>div>h1') }
    private get accountCreationForm() { return $('#account-creation_form') }
    private get pagesubHeading() { return $$('.page-subheading') }
    private get titleMr_radio() { return $('#id_gender1') }
    private get titleMrs_radio() { return $('#id_gender2') }
    private get firstname_txt() { return $('#customer_firstname') }
    private get lastname_txt() { return $('#customer_lastname')}
    private get password_txt() { return $('#passwd') }
    private get dob_day_drp() { return $('#days') }
    private get dob_month_drp() { return $('#months') }
    private get dob_year_drp() { return $('#years') }
    private get addressFname_txt() { return $('#firstname') }
    private get addressLname_txt() { return $('#lastname') }
    private get company_txt() { return $('#company') }
    private get address1_txt() { return $('#address1') }
    private get city_txt() { return $('#city') }
    private get state_drp() { return $('#id_state') }
    private get postcode_txt() { return $('#postcode') }
    private get country_drp() { return $('#id_country') }
    private get additionalInfo_txt() { return $('#other') }
    private get homePhone_txt() { return $('#phone') }
    private get mobilePhone_txt() { return $('#phone_mobile') }
    private get addressAlias_txt() { return $('#alias') }
    private get register_btn() { return $('#submitAccount') }
    private get welcome_msg() { return $('.info-account') }


    getAccountCreationHeaderText():string {
        return this.doGetText(this.createAccountHeader, WaitEnum.DISPLAYED)
    }

    accountCreationForm_isDisplayed():boolean {
        return this.doIsDisplayed(this.accountCreationForm, WaitEnum.DISPLAYED)
    }

    submitAccountCreationForm(password: string):void {
        this.doSetValue(this.firstname_txt, signupdata.First_Name, WaitEnum.DISPLAYED)
        this.doSetValue(this.lastname_txt, signupdata.Last_Name, WaitEnum.DISPLAYED)
        this.doSetValue(this.password_txt, password, WaitEnum.DISPLAYED)
        this.doSelectByAttribute(this.dob_day_drp, 'value', signupdata.DOB_Day, WaitEnum.EXIST)
        this.doSelectByAttribute(this.dob_month_drp, 'value', signupdata.DOB_Month, WaitEnum.EXIST)
        this.doSelectByAttribute(this.dob_year_drp, 'value', signupdata.DOB_Year, WaitEnum.EXIST)
        this.doSetValue(this.addressFname_txt, signupdata.First_Name, WaitEnum.DISPLAYED)
        this.doSetValue(this.addressLname_txt, signupdata.Last_Name, WaitEnum.DISPLAYED)
        this.doSetValue(this.company_txt, signupdata.Company, WaitEnum.DISPLAYED)
        this.doSetValue(this.address1_txt, signupdata.Address1, WaitEnum.DISPLAYED)
        this.doSetValue(this.city_txt, signupdata.City, WaitEnum.DISPLAYED)
        this.doSelectByVisibleText(this.state_drp, signupdata.State, WaitEnum.EXIST)
        this.doSetValue(this.postcode_txt, signupdata.PostCode, WaitEnum.EXIST)
        this.doSelectByVisibleText(this.country_drp, signupdata.Country, WaitEnum.EXIST)
        this.doSetValue(this.additionalInfo_txt, signupdata.Additional_Info, WaitEnum.DISPLAYED)
        this.doSetValue(this.mobilePhone_txt, signupdata.Mobile_No, WaitEnum.DISPLAYED)
        this.doSetValue(this.addressAlias_txt, signupdata.Address_Alias, WaitEnum.DISPLAYED)
        this.doClick(this.register_btn, WaitEnum.CLICKABLE)
    }

    getWelcomeMessage():string {
        return this.doGetText(this.welcome_msg, WaitEnum.DISPLAYED)
    }
}
export default new createAccount()