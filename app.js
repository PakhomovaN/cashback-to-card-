console.log('worked');

// за обычные покупки - 1%
// повышенный кэшбэк - 5%
// спец.предложения - 30%

const usualAmount = 1000;
const highAmount = 2000;
const specialAmount = 50000;

const usualPurchases = 0.01;
const highCashback = 0.05;
const specialOffer = 0.3;

const maxCashback = 3000;

const usualBonuses = usualAmount * usualPurchases;
const highBonuses = highAmount * highCashback;
const specialBonuses = specialAmount * specialOffer;

const totalCashback = usualBonuses + highBonuses + specialBonuses;

let totalAmountCashback;
if (totalCashback >= 3000) {
    totalAmountCashback = 3000
};

// console.log(usualBonuses);
// console.log(highBonuses);
// console.log(specialBonuses);

// console.log(totalCashback);

console.log(totalAmountCashback);

