
export const formInputElementByLabel = (label: string) => $(`//b[text()='${label}:']/..//following-sibling::td/input`);

export const formAmountElementByLabel = (label: string) => $(`//b[text()='${label}: $']/..//following-sibling::td/input`)
