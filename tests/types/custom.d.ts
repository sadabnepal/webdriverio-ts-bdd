export type CreateAccountType = {
    firstName: string,
    lastName: string,
    address: string,
    city: string,
    state: string,
    zipCode: string,
    phoneNo: string,
    ssn: string,
    userName: string,
    password: string,
    confirm: string
}

export type BillPaymentType = {
    PayeeName: string,
    Address: string,
    City: string,
    State: string,
    ZipCode: string,
    PhoneNo: string,
    AccountNumber: string,
    Amount: number
}