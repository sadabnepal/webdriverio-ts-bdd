import { WaitEnum } from 'src/enums/WaitEnums'
import basepage from 'src/pages/BasePage'

class CreateAccount extends basepage {

    private get CreateAccountHeader() { return $('#center_column>div>h1') }
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
        return this.doGetText(this.CreateAccountHeader, WaitEnum.DISPLAYED)
    }

    getAccountCreationForm():WebdriverIO.Element {
        return this.getElement(this.accountCreationForm, WaitEnum.DISPLAYED)
    }

    setFirstName(fname:string):CreateAccount {
        this.doSetValue(this.firstname_txt, fname, WaitEnum.DISPLAYED)
        return this;
    }

    setLastName(lname:string):CreateAccount {
        this.doSetValue(this.lastname_txt, lname, WaitEnum.DISPLAYED)
        return this;
    }

    setPassword(password:string):CreateAccount {
        this.doSetValue(this.password_txt, password, WaitEnum.DISPLAYED)
        return this;
    }

    selectDayOfDOB(day:string):CreateAccount {
        this.doSelectByAttribute(this.dob_day_drp, 'value', day, WaitEnum.EXIST)
        return this;
    }
    selectMonthofDOB(month:string):CreateAccount {
        this.doSelectByAttribute(this.dob_month_drp, 'value', month, WaitEnum.EXIST)
        return this;
    }
    selectYearOfDOB(year:string):CreateAccount {
        this.doSelectByAttribute(this.dob_year_drp, 'value', year, WaitEnum.EXIST)
        return this;
    }

    setAddressFirstName(fname:string):CreateAccount {
        this.doSetValue(this.addressFname_txt, fname, WaitEnum.DISPLAYED)
        return this;
    }
    setAddressLastName(lname):CreateAccount {
        this.doSetValue(this.addressLname_txt, lname, WaitEnum.DISPLAYED)
        return this;
    }

    setCompany(company:string):CreateAccount {
        this.doSetValue(this.company_txt, company, WaitEnum.DISPLAYED)
        return this;
    }
    
    setAddress1(address1:string):CreateAccount {
        this.doSetValue(this.address1_txt, address1, WaitEnum.DISPLAYED)
        return this;
    }

    setCity(city:string):CreateAccount {
        this.doSetValue(this.city_txt, city, WaitEnum.DISPLAYED)
        return this;
    }
    
    selectState(state:string):CreateAccount {
        this.doSelectByVisibleText(this.state_drp, state, WaitEnum.EXIST)
        return this;
    }
    
    setPostCode(postcode:string):CreateAccount {
        this.doSetValue(this.postcode_txt, postcode, WaitEnum.EXIST)
        return this;
    }

    selectCountry(country:string):CreateAccount {
        this.doSelectByVisibleText(this.country_drp, country, WaitEnum.EXIST)
        return this;
    }

    setAdditionalInfo(additonalInfo:string):CreateAccount {
        this.doSetValue(this.additionalInfo_txt, additonalInfo, WaitEnum.DISPLAYED)
        return this;
    }

    setMobilePhone(mobileNo:string):CreateAccount {
        this.doSetValue(this.mobilePhone_txt, mobileNo, WaitEnum.DISPLAYED)
        return this;
    }

    setAddressAlias(addressAlias:string):CreateAccount {
        this.doSetValue(this.addressAlias_txt, addressAlias, WaitEnum.DISPLAYED)
        return this;
    }

    clickOnRegisterButton() {
        this.doClick(this.register_btn, WaitEnum.CLICKABLE)
    }

    getWelcomeMessage():string {
        return this.doGetText(this.welcome_msg, WaitEnum.DISPLAYED)
    }
}
export default new CreateAccount()