export interface Parser {
  email: string,
  bankAccountName: string,
  hasHeader: boolean,
  dateCol: number,
  amountCol: number,
  payeeCol: number,
  typeCol: number,
}
