export const initialState = 0;

interface DepositAction{
    type:"deposit"
    payload:number
}

interface WithdrawAction {
    type:"withdraw"
    payload:number
}

interface BankrupAction{
    type:'bankrupt'
}

export type Action = DepositAction | WithdrawAction | BankrupAction