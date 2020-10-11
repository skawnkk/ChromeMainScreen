const dateInfo = document.querySelector(".js-date");

function getDate(){

    const todayDate = new Date;
    console.log(todayDate); //Sun Oct 11 2020 18:33:12 GMT+0900 (대한민국 표준시)

    const year = todayDate.getFullYear();
    const month = todayDate.getMonth()+1; //jan == 0
    const date= todayDate.getDate();
    const day = todayDate.getDay(); //0은 일요일

    const dayArray = ['일','월','화','수','목','금','토'];
    console.log(year,month,date,dayArray[day]);

    dateInfo.innerHTML=`${year}년 ${month}월 ${date}일 ${dayArray[day]}요일`;

}


function init(){
    getDate();

}

init();