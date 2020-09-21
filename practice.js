const clockContainer=document.querySelector(".js-clock");
const clockTitle=clockContainer.querySelector("h1");     

function getTime(){
    const date= new Date();

    const hours= date.getHours();
    const minutes=date.getMinutes();
    const seconds=date.getSeconds();

    clockTitle.innerText=`${hours <10? `AM 0${hours}`:`${hours>12? `PM 0${hours-12}`:`${hours}`}`}:${minutes<10? `0${minutes}`:`${minutes}`}:${seconds<10? `0${seconds}`:`${seconds}`}`;

    // ${hours>12? `${hours-12}`:`${hours}`}
   

}


function init(){
    console.log('start');
    getTime();
    setInterval(getTime,1000);
}

init();