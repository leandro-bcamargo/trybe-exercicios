const purchaseCost = -5;
const sellingPrice = 150;
const conditions = purchaseCost >= 0 && sellingPrice >= 0;
const taxes = purchaseCost * .2;
const taxedCost = purchaseCost + taxes;
const profitPerItem = sellingPrice - taxedCost;
const overallProfit = profitPerItem * 1000;

if (conditions) {
    console.log(overallProfit);
}
else {
    console.log("Please enter valid values.")
}