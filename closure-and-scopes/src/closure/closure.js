const moneyBox = (coins) => {
    var saveCoins = 0
    saveCoins +=  coins
    console.log(`MoneyBox: $${saveCoins}`)
}
moneyBox(5)
moneyBox(5)

const moneyBoxClosure = () => {
    var saveCoins = 0
    const countCoins = (coins) => {
        saveCoins += coins 
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins
}
let myMoneyBox = moneyBoxClosure()
myMoneyBox(5)
myMoneyBox(5)
