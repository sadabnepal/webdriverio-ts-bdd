import { WaitEnum } from '../../main/enums/WaitEnums'
import BasePage from '../../main/pages/BasePage'

class CreateAccount extends BasePage {

    private get CreateAccountHeader() { return $('#center_column>div>h1') }
    private get accountCreationForm() { return $('#account-creation_form') }
    private get pagesubHeading() { return $$('.page-subheading') }
    private get titleMr_radio() { return $('#id_gender1') }
    private get titleMrs_radio() { return $('#id_gender2') }
    private get firstname_txt() { return $('#customer_firstname') }
    private get lastname_txt() { return $('#customer_lastname') }
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


    getAccountCreationHeaderText(): string {
        return this.fetchText(this.CreateAccountHeader, WaitEnum.DISPLAYED)
    }

    getAccountCreationForm() {
        return this.getElement(this.accountCreationForm, WaitEnum.DISPLAYED)
    }

    setFirstName(fname: string) {
        this.setData(this.firstname_txt, fname, WaitEnum.DISPLAYED)
        return this;
    }

    setLastName(lname: string) {
        this.setData(this.lastname_txt, lname, WaitEnum.DISPLAYED)
        return this;
    }

    setPassword(password: string) {
        this.setData(this.password_txt, password, WaitEnum.DISPLAYED)
        return this;
    }

    selectDayOfDOB(day: string) {
        this.selectByAttribute(this.dob_day_drp, 'value', day, WaitEnum.EXIST)
        return this;
    }
    selectMonthofDOB(month: string) {
        this.selectByAttribute(this.dob_month_drp, 'value', month, WaitEnum.EXIST)
        return this;
    }
    selectYearOfDOB(year: string) {
        this.selectByAttribute(this.dob_year_drp, 'value', year, WaitEnum.EXIST)
        return this;
    }

    setAddressFirstName(fname: string) {
        this.setData(this.addressFname_txt, fname, WaitEnum.DISPLAYED)
        return this;
    }
    setAddressLastName(lname) {
        this.setData(this.addressLname_txt, lname, WaitEnum.DISPLAYED)
        return this;
    }

    setCompany(company: string) {
        this.setData(this.company_txt, company, WaitEnum.DISPLAYED)
        return this;
    }

    setAddress1(address1: string) {
        this.setData(this.address1_txt, address1, WaitEnum.DISPLAYED)
        return this;
    }

    setCity(city: string) {
        this.setData(this.city_txt, city, WaitEnum.DISPLAYED)
        return this;
    }

    selectState(state: string) {
        this.selectByText(this.state_drp, state, WaitEnum.EXIST)
        return this;
    }

    setPostCode(postcode: string) {
        this.setData(this.postcode_txt, postcode, WaitEnum.EXIST)
        return this;
    }

    selectCountry(country: string) {
        this.selectByText(this.country_drp, country, WaitEnum.EXIST)
        return this;
    }

    setAdditionalInfo(additonalInfo: string) {
        this.setData(this.additionalInfo_txt, additonalInfo, WaitEnum.DISPLAYED)
        return this;
    }

    setMobilePhone(mobileNo: string) {
        this.setData(this.mobilePhone_txt, mobileNo, WaitEnum.DISPLAYED)
        return this;
    }

    setAddressAlias(addressAlias: string) {
        this.setData(this.addressAlias_txt, addressAlias, WaitEnum.DISPLAYED)
        return this;
    }

    clickOnRegisterButton() {
        this.clickElement(this.register_btn, WaitEnum.CLICKABLE)
    }

    getWelcomeMessage(): string {
        return this.fetchText(this.welcome_msg, WaitEnum.DISPLAYED)
    }
}
export default new CreateAccount()