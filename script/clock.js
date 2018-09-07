var hourHand = document.getElementById("hourHand");
var minuteHand = document.getElementById("minuteHand");
var mDegree = 0;
var hDegree = 0;


function clockWork(mDeg,hDeg){
    mDeg = mDegree + 30;
    minuteHand.style.transform = "rotate("+mDeg+"deg)";
    mDegree = mDeg;
    if(mDegree === 360){
        mDeg = 0;
        mDegree = 0;
        if(hDegree === 360){
            hDeg = 0;
            hDegree = 0;
        }   
        hDeg = hDegree + 30;
        hourHand.style.transform = "rotate("+hDeg+"deg)";
        hDegree = hDeg;
    
    }
}

setInterval(clockWork,1000);

