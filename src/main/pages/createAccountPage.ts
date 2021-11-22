import BasePage from '../../main/pages/BasePage'

class CreateAccount extends BasePage {

    get CreateAccountHeader() { return $('#center_column>div>h1') }
    get accountCreationForm() { return $('#account-creation_form') }
    get pagesubHeading() { return $$('.page-subheading') }
    get titleMr_radio() { return $('#id_gender1') }
    get titleMrs_radio() { return $('#id_gender2') }
    get firstname_txt() { return $('#customer_firstname') }
    get lastname_txt() { return $('#customer_lastname') }
    get password_txt() { return $('#passwd') }
    get dob_day_drp() { return $('#days') }
    get dob_month_drp() { return $('#months') }
    get dob_year_drp() { return $('#years') }
    get addressFname_txt() { return $('#firstname') }
    get addressLname_txt() { return $('#lastname') }
    get company_txt() { return $('#company') }
    get address1_txt() { return $('#address1') }
    get city_txt() { return $('#city') }
    get state_drp() { return $('#id_state') }
    get postcode_txt() { return $('#postcode') }
    get country_drp() { return $('#id_country') }
    get additionalInfo_txt() { return $('#other') }
    get homePhone_txt() { return $('#phone') }
    get mobilePhone_txt() { return $('#phone_mobile') }
    get addressAlias_txt() { return $('#alias') }
    get register_btn() { return $('#submitAccount') }
    get welcome_msg() { return $('.info-account') }


    async setFirstName(fname: string) {
        await this.setData(this.firstname_txt, fname)
    }

    async setLastName(lname: string) {
        await this.setData(this.lastname_txt, lname)
    }

    async setPassword(password: string) {
        await this.setData(this.password_txt, password)
    }

    async selectDayOfDOB(day: string) {
        await this.selectByAttribute(this.dob_day_drp, 'value', day)
    }
    async selectMonthofDOB(month: string) {
        await this.selectByAttribute(this.dob_month_drp, 'value', month)
    }
    async selectYearOfDOB(year: string) {
        await this.selectByAttribute(this.dob_year_drp, 'value', year)
    }

    async setAddressFirstName(fname: string) {
        await this.setData(this.addressFname_txt, fname)
    }
    async setAddressLastName(lname) {
        await this.setData(this.addressLname_txt, lname)
    }

    async setCompany(company: string) {
        await this.setData(this.company_txt, company)
    }

    async setAddress1(address1: string) {
        await this.setData(this.address1_txt, address1)
    }

    async setCity(city: string) {
        await this.setData(this.city_txt, city)
    }

    async selectState(state: string) {
        this.selectByText(this.state_drp, state)
    }

    async setPostCode(postcode: string) {
        await this.setData(this.postcode_txt, postcode)
    }

    async selectCountry(country: string) {
        await this.selectByText(this.country_drp, country)
    }

    async setAdditionalInfo(additonalInfo: string) {
        await this.setData(this.additionalInfo_txt, additonalInfo)
    }

    async setMobilePhone(mobileNo: string) {
        await this.setData(this.mobilePhone_txt, mobileNo)
    }

    async setAddressAlias(addressAlias: string) {
        await this.setData(this.addressAlias_txt, addressAlias)
    }

    async clickOnRegisterButton() {
        await this.clickElement(this.register_btn)
    }
}
export default new CreateAccount()