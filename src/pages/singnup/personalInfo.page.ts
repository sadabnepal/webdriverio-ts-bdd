class PersonalInfoPage {

    get title() { return $("//input[@id='id_gender2']") }
    get firstName() { return $("//input[@id='customer_firstname']") }
    get lastName() { return $("//input[@id='customer_lastname']") }
    get passwordTextbox() { return $("//input[@id='passwd']") }
    get dateDropdown() { return $("//select[@id='days']") }
    get monthDropdown() { return $("//select[@id='months']") }
    get yearDropdown() { return $("//select[@id='years']") }
    get check() { return $("//input[@id='optin']") }
    get companyName() { return $("//input[@id='company']") }
    get address1() { return $("//input[@id='address1']") }
    get cityName() { return $("//input[@id='city']") }
    get stateName() { return $("//select[@id='id_state']") }
    get countryName() { return $("//select[@id='id_country']") }
    get postalcode() { return $("//input[@id='postcode']") }
    get mobNumber() { return $("//input[@id='phone_mobile']") }
    get aliasAdd() { return $("//input[@id='alias']") }
    get registerBtn() { return $("//span[text()='Register']") }
    get headerElement() { return $("//h1[@class='page-heading']") }

    async clickTitle() {
        await this.title.click()
    }

    async setFirstAndLastName(name: { firstname: string, lastname: string }) {
        await this.firstName.setValue(name.firstname)
        await this.lastName.setValue(name.lastname)
    }

    async setPassword(password: string) {
        await this.passwordTextbox.setValue(password)
    }

    async selectDateOfBirth(date: { day: number, month: number, year: number }) {
        await this.dateDropdown.selectByIndex(date.day)
        await this.monthDropdown.selectByAttribute('value', date.month)
        await this.yearDropdown.selectByIndex(date.year)
    }

    async clickCheck() {
        await this.check.click()
    }

    async setCompany(company: string) {
        await this.companyName.setValue(company)
    }

    async setAddress(address: { address1: string, pincode: number, city: string }) {
        await this.address1.setValue(address.address1)
        await this.cityName.setValue(address.city)
        await this.stateName.selectByIndex(3)
        await this.countryName.selectByIndex(1)
        await this.postalcode.setValue(address.pincode)
    }

    async setMobileNumber(mobileNumber: string) {
        await this.mobNumber.setValue(mobileNumber)
    }

    async setAliasAddress(myaddress: string) {
        await this.aliasAdd.setValue(myaddress)
    }

    async clickRegister() {
        await this.registerBtn.click()
    }
}
export default new PersonalInfoPage()