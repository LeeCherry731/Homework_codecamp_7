
let thousand = 0;
let fiveHundred = 0;
let oneHundred = 0;
let fifty = 0;
let twenty = 0;
let ten = 0;
let five = 0;
let two = 0;
let one = 0;

let result = "dd";
// let count = 0;

const toChange = (money) => {

    if (money < 1) {
        result =  `แบงค์พัน ${thousand} ใบ / แบงค์ห้าร้อย ${fiveHundred} ใบ / แบงค์ร้อย ${oneHundred} ใบ / แบงค์ห้าสิบ ${fifty} ใบ / แบงค์ยี่สิบ ${twenty} ใบ / เหรียญสิบ ${ten} เหรียญ / เหรียญห้า ${five} เหรียญ / เหรียญสองบาท ${two} เหรียญ / เหรียญบาท ${one} เหรียญ`
    }
    else if (money >= 1000) {
        console.log("hi 1000")
        thousand++;
        toChange(money - 1000);
    } 
    else if (money >= 500) {
        fiveHundred++;
        toChange(money - 500);
    } 
    else if (money >= 100) {
        oneHundred++;
        toChange(money - 100);
    } 
    else if (money >= 50) {
        fifty++;
        toChange(money - 50);
    } 
    else if (money >= 20) {
        twenty++;
        toChange(money -20);
    } 
    else if (money >= 10) {
        ten++;
        toChange(money - 10);
    } 
    else if (money >= 5) {
        five++;
        toChange(money - 5);
    } 
    else if (money >= 2) {
        two++;
        toChange(money - 2);
    } 
    else if (money >= 1) {
        one++;
        toChange(money - 1);
    } 

}

toChange(788)

console.log(result)

