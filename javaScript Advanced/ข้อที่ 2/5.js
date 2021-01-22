const changeStringtoThaiDate = (date) => {

    let str = date.split("");

    const day = (str[0] + str[1]);
    const month1 = (str[3] + str[4]);
    const years = (str[6] + str[7] + str[8] + str[9]);

    const numDay = Number(day);
    const numMonth1 = Number(month1);

    let monthNames = [
        "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน",
        "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม.",
        "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
    ];

    const is30 = (arr) => {

        let newArr = arr.split("");

        if (newArr[-1] === "ม") {
            return true;
        } else {
            return false;
        }
    }
    
    if(numDay > 30 && !is30(monthNames[numMonth1])) {
        return "Error";
    }
    if(numMonth1 > 12) {
        return "Error";
    }

    let dateOb = new Date(`${years}-${month1}-${day}`);

    let year = dateOb.getFullYear() + 543;
    let month = monthNames[Number(month1)-1];
    let numOfDay = dateOb.getDate();


    return `วันที่ ${numOfDay} เดือน${month} พ.ศ. ${year} `;
    
}

let date1 = "12-11-1996"
let date2 = "31-11-1996"
let date3 = "12-13-1996"


console.log(changeStringtoThaiDate(date1)); // วันที่ 12 เดือนพฤศจิกายน พ.ศ. 2539 
console.log(changeStringtoThaiDate(date2)); // Error
console.log(changeStringtoThaiDate(date3)); // Error
