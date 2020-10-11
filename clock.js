const clockContainer=document.querySelector(".js-clock");
const clockTitle=clockContainer.querySelector("h1");     
const detailClock1=clockContainer.querySelector(".seconds");
const detailClock2=clockContainer.querySelector(".AMPM");

function getTime(){
    const date= new Date();
    // console.log(date) Thu Oct 08 2020 15:10:58 GMT+0900 (대한민국 표준시)

    const hours= date.getHours();
    const minutes=date.getMinutes();
    const seconds=date.getSeconds();

    clockTitle.innerText=`${hours<10? `0${hours}`:`${hours>12? `0${hours-12}`:`${hours}`}`}:${minutes<10? `0${minutes}`:`${minutes}`}`;
    detailClock1.innerText=`${seconds<10? `0${seconds}`:`${seconds}`}`;
    detailClock2.innerText=`${hours>11? `PM`:`AM`}`;
}


function init(){
    getTime();
    setInterval(getTime,1000);
}

init();