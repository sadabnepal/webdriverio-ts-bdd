import basepage from 'src/pages/BasePage'
import signupdata from 'src/testdata/SignUp.json'

class createAccount extends basepage {
    get createAccountHeader() { return $('#center_column>div>h1') }
    get accountCreationForm() { return $('#account-creation_form') }
    get pagesubHeading() { return $$('.page-subheading') }
    get titleMr_radio() { return $('#id_gender1') }
    get titleMrs_radio() { return $('#id_gender2') }
    get firstname_txt() { return $('#customer_firstname') }
    get lastname_txt() { return $('#customer_lastname')}
    get email_txt() { return $('#email') }
    get password_txt() { return $('#passwd') }
    get dob_day_drp() { return $('#days') }
    get dob_month_drp() { return $('#months') }
    get dob_year_drp() { return $('#years') }
    get addressFname_txt() { return $('#firstname') }
    get addressLname_txt() { return $('#lastname') }
    get company_txt() { return $('#company') }
    get address1_txt() { return $('#address1') }
    get address2_txt() { return $('#address2') }
    get city_txt() { return $('#city') }
    get state_drp() { return $('#id_state') }
    get postcode_txt() { return $('#postcode') }
    get country_drp() { return $('#id_country') }
    get additionalInfo_txt() { return $('#other') }
    get homePhone_txt() { return $('#phone') }
    get mobilePhone_txt() { return $('#phone_mobile') }
    get addressAlias_txt() { return $('#alias') }
    get register_btn() { return $('#submitAccount') }
    get alert_danger() { return $('.alert.alert-danger>ol>li') }
    get welcome_msg() { return $('.info-account') }


    getAccountCreationHeaderText():string {
        return this.doGetText(this.createAccountHeader)
    }

    accountCreationForm_isDisplayed():boolean {
        return this.doIsDisplayed(this.accountCreationForm)
    }

    submitAccountCreationForm(password: string) {
        this.doSetValue(this.firstname_txt, signupdata.First_Name)
        this.doSetValue(this.lastname_txt, signupdata.Last_Name)
        this.doSetValue(this.password_txt, password)
        this.doSelectByAttribute(this.dob_day_drp, 'value', signupdata.DOB_Day)
        this.doSelectByAttribute(this.dob_month_drp, 'value', signupdata.DOB_Month)
        this.doSelectByAttribute(this.dob_year_drp, 'value', signupdata.DOB_Year)
        this.doSetValue(this.addressFname_txt, signupdata.First_Name)
        this.doSetValue(this.addressLname_txt, signupdata.Last_Name)
        this.doSetValue(this.company_txt, signupdata.Company)
        this.doSetValue(this.address1_txt, signupdata.Address1)
        this.doSetValue(this.city_txt, signupdata.City)
        this.doSelectByVisibleText(this.state_drp, signupdata.State)
        this.doSetValue(this.postcode_txt, signupdata.PostCode)
        this.doSelectByVisibleText(this.country_drp, signupdata.Country)
        this.doSetValue(this.additionalInfo_txt, signupdata.Additional_Info)
        this.doSetValue(this.mobilePhone_txt, signupdata.Mobile_No)
        this.doSetValue(this.addressAlias_txt, signupdata.Address_Alias)
        this.doClick(this.register_btn)
    }

    getError():boolean {
        return this.doIsExists(this.alert_danger)
    }

    getWelcomeMessage():string {
        return this.doGetText(this.welcome_msg)
    }
}
export default new createAccount()