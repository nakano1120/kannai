let holiday = new Date();
let day= holiday.getDay();

let judge_holiday = 0
if ( day == 0 ) {
    judge_holiday = 1;
}else if ( day == 6 ){
    judge_holiday = 1
}
let timer    = null,
    textObj  = null,
    execBtn  = null,
    clearBtn = null,
    n        = 0;

let startIntervalFunc = function() {
	if (!timer) timer = setInterval(execIntervalFunc, 1000);
};
let coming_second = [ ///到着時間、[0]に入るのは⓪時、[1]が1時
    [11,26],
    [99,99,99],
    [-1],
    [-1],
    [-1],
    [31,42,54],///5時代
    [2,9,14,19,24,28,33,38,42,47,52,57],
    [1,6,10,15,20,24,29,34,38,43,48,52,57],
    [2,6,11,16,20,25,30,34,39,44,48,53,58],
    [2,7,12,17,22,29,36,43,52],
    [2,12,21,30,36,41,51,59],//10時代
    [5,10,20,29,35,40,50,59],
    [5,10,20,29,35,40,50,59],
    [5,10,20,29,35,40,50,59],
    [5,10,20,29,35,40,50,59],
    [5,10,18,25,31,37,42,48,55],//15時代
    [1,7,12,19,25,31,37,42,48,54,59],
    [5,11,17,23,29,35,41,47,53,59],
    [5,11,17,23,29,35,41,47,53,59],
    [5,11,17,23,29,35,41,47,53,59],
    [5,11,17,23,29,35,41,49,58], ///20時
    [6,13,21,28,36,42,50,58],
    [6,13,21,28,41,49],
    [0,12,23,34,45,58],
    [11,26]
]
let coming_kind = [
    [0,2],
    [3,3,3],
    [-1],
    [-1],
    [-1],
    [0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0],
    [1,0,0,0,1,0,0,0],
    [1,0,0,0,1,0,0,0],
    [1,0,0,0,1,0,0,0],
    [1,0,0,0,1,0,0,0],
    [1,0,0,0,0,1,0,0,0],
    [0,1,0,0,0,0,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,2]
]
let coming_for = [
    [0,0],
    [2,2,2],
    [-1],
    [-1],
    [-1],
    [0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,1],
    [0,0,0,1,0,0,0,1],
    [0,0,0,1,0,0,0,1],
    [0,0,0,1,0,0,0,1],
    [0,0,0,0,1,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0]
]
//0:あざみ野 1:新羽
let kinds=["<div class='local'>普通</div>","<div class='ra'>快速</div>","<div class='local final'>最終</div>","　"]
let kinds_e=["<div class='eng local'>Local</div>","<div class='eng ra'>Rapid</div>","<div class='eng final local'>Final</div>","　"]
let kinds_s=["桜木町からの各駅に停まります","桜木町、横浜、新横浜、新羽からの各駅に停まります","あざみ野行き 最終電車です","　"]
let kinds_for=["あざみ野","新　羽","　"]
let kinds_fore=["Azamino","Nippa","　"]
let execIntervalFunc = function() {
    let jtime = new Date();
    let hour = jtime.getHours();
    let minute = jtime.getMinutes();
    let second = jtime.getSeconds();
    let nowpos = 0
    let bonus = 0;
    document.getElementById("clock").innerText= hour + ":" + minute + ":" + second
    if (second < 10 && minute < 10){  
        document.getElementById("clock").innerText = hour + ":0" + minute + ":0" + second  
    }else if (second < 10){
        document.getElementById("clock").innerText = hour + ":" + minute + ":0" + second
    }else if(minute < 10){
        document.getElementById("clock").innerText = hour + ":0" + minute + ":" + second 
    }
    let minutes = minute;
    let hours=hour;
    if(hour < 5 && hour != 0){
        hours = 5;
        minutes = 0;
    }
    for(let l=0;nowpos != 1;l+=1){
        if(coming_second[hours][l] <= minutes){
            console.log("A")
            continue;
        }else{
            console.log(l)
            console.log(coming_second[hours].length)
            if(l == coming_second[hours].length){
                console.log("B"+coming_second[hours][l-1])
                if(coming_second[hours][l-1] <= minute){
                    console.log("BD")
                    document.getElementById("t1").innerHTML=(hours+1)+":"+(coming_second[hours+1][0]);
                    document.getElementById("k1").innerHTML=kinds[coming_kind[hours+1][0]]
                    console.log("a"+Math.round(minutes/10))
                    if(Math.round(second/10)%2==0){
                        document.getElementById("fj1").innerHTML=kinds_for[coming_for[hours+1][0]]
                    }else{
                        document.getElementById("k1").innerHTML=kinds_e[coming_kind[hours+1][0]]
                        document.getElementById("fj1").innerHTML=kinds_fore[coming_for[hours+1][0]]
                    }
                    document.getElementById("s1").innerHTML=kinds_s[coming_kind[hours+1][0]]
                    ///document.getElementById("fj1").innerHTML=kinds_for[coming_for[hours][l]]
                    ///document.getElementById("fe1").innerHTML=kinds_fore[coming_for[hours][l]]
                    if(coming_second[hours+1][0]<10){
                        document.getElementById("t1").innerHTML=(hours+1)+":0"+(coming_second[hours+1][0]);
                    }
                    document.getElementById("t2").innerHTML=(hours+1)+":"+(coming_second[hours+1][1]);
                    document.getElementById("k2").innerHTML=kinds[coming_kind[hours+1][1]]
                    if(Math.round(second/10)%2==0){
                        document.getElementById("fj2").innerHTML=kinds_for[coming_for[hours+1][1]]
                    }else{
                        document.getElementById("k2").innerHTML=kinds_e[coming_kind[hours+1][1]]
                        document.getElementById("fj2").innerHTML=kinds_fore[coming_for[hours+1][1]]
                    }
                    document.getElementById("s2").innerHTML=kinds_s[coming_kind[hours+1][1]]
                    //document.getElementById("fj2").innerHTML=kinds_for[coming_for[hours][l+1]]
                    //document.getElementById("fe2").innerHTML=kinds_fore[coming_for[hours][l+1]]
                    if(coming_second[hours+1][1]<10){
                        document.getElementById("t2").innerHTML=(hours+1)+":0"+(coming_second[hours+1][1]);
                    }
                    document.getElementById("t3").innerHTML=(hours+1)+":"+(coming_second[hours+1][2]);
                    document.getElementById("k3").innerHTML=kinds[coming_kind[hours+1][2]]
                    if(Math.round(second/10)%2==0){
                        document.getElementById("fj3").innerHTML=kinds_for[coming_for[hours+1][2]]
                    }else{
                        document.getElementById("k3").innerHTML=kinds_e[coming_kind[hours+1][2]]
                        document.getElementById("fj3").innerHTML=kinds_fore[coming_for[hours+1][2]]
                    }
                    document.getElementById("s3").innerHTML=kinds_s[coming_kind[hours+1][2]]
                    ///document.getElementById("fj3").innerHTML=kinds_for[coming_for[hours][l+2]]
                    ///document.getElementById("fe3").innerHTML=kinds_fore[coming_for[hours][l+2]]
                    if(coming_second[hours+1][2]<10){
                        document.getElementById("t3").innerHTML=(hours+1)+":0"+(coming_second[hours+1][2]);
                    }
                }else{
                    console.log("BB")
                    document.getElementById("t1").innerHTML=(hours)+":"+(coming_second[hours][l-1]);
                    document.getElementById("k1").innerHTML=kinds[coming_kind[hours][l-1]]
                    if(Math.round(second/10)%2==0){
                        document.getElementById("fj1").innerHTML=kinds_for[coming_for[hours][l-1]]
                    }else{
                        document.getElementById("k1").innerHTML=kinds_e[coming_kind[hours][l-1]]
                        document.getElementById("fj1").innerHTML=kinds_fore[coming_for[hours][l-1]]
                    }
                    document.getElementById("s1").innerHTML=kinds_s[coming_kind[hours][l-1]]
                    ///document.getElementById("fj1").innerHTML=kinds_for[coming_for[hours][l-1]]
                    ///document.getElementById("fe1").innerHTML=kinds_fore[coming_for[hours][l-1]]
                    if(coming_second[hours][l-1]<10){
                        document.getElementById("t1").innerHTML=(hours)+":0"+(coming_second[hours][l-1]);
                    }
                    document.getElementById("t2").innerHTML=(hours+1)+":"+(coming_second[hours+1][0]);
                    document.getElementById("k2").innerHTML=kinds[coming_kind[hours+1][0]]
                    if(Math.round(second/10)%2==0){
                        document.getElementById("fj2").innerHTML=kinds_for[coming_for[hours+1][0]]
                    }else{
                        document.getElementById("k2").innerHTML=kinds_e[coming_kind[hours+1][0]]
                        document.getElementById("fj2").innerHTML=kinds_fore[coming_for[hours+1][0]]
                    }
                    document.getElementById("s2").innerHTML=kinds_s[coming_kind[hours+1][0]]
                    //document.getElementById("fj2").innerHTML=kinds_for[coming_for[hours+1][0]]
                    //document.getElementById("fe2").innerHTML=kinds_fore[coming_for[hours+1][0]]
                    if(coming_second[hours+1][0]<10){
                        document.getElementById("t2").innerHTML=(hours+1)+":0"+(coming_second[hours+1][0]);
                    }
                    document.getElementById("t3").innerHTML=(hours+1)+":"+(coming_second[hours+1][1]);
                    document.getElementById("k3").innerHTML=kinds[coming_kind[hours+1][1]]
                    if(Math.round(second/10)%2==0){
                        document.getElementById("fj3").innerHTML=kinds_for[coming_for[hours+1][1]]
                    }else{
                        document.getElementById("k3").innerHTML=kinds_e[coming_kind[hours+1][1]]
                        document.getElementById("fj3").innerHTML=kinds_fore[coming_for[hours+1][1]]
                    }
                    document.getElementById("s3").innerHTML=kinds_s[coming_kind[hours+1][1]]
                    //document.getElementById("fj3").innerHTML=kinds_for[coming_for[hours+1][1]]
                    //document.getElementById("fe3").innerHTML=kinds_fore[coming_for[hours+1][1]]
                    if(coming_second[hours+1][1]<10){
                        document.getElementById("t3").innerHTML=(hours+1)+":0"+(coming_second[hours+1][1]);
                    }
                }
            }else if(l+1 == coming_second[hours].length){
                console.log("I")
                document.getElementById("t1").innerHTML=(hours)+":"+(coming_second[hours][l]);
                document.getElementById("k1").innerHTML=kinds[coming_kind[hours][l]]
                console.log("aaa"+Math.round(minutes/10))
                if(Math.round(second/10)%2==0){
                    document.getElementById("fj1").innerHTML=kinds_for[coming_for[hours][l]]
                }else{
                    document.getElementById("k1").innerHTML=kinds_e[coming_kind[hours][l]]
                    document.getElementById("fj1").innerHTML=kinds_fore[coming_for[hours][l]]
                }
                document.getElementById("s1").innerHTML=kinds_s[coming_kind[hours][l]]
                ///document.getElementById("fj1").innerHTML=kinds_for[coming_for[hours][l]]
                ///document.getElementById("fe1").innerHTML=kinds_fore[coming_for[hours][l]]
                if(coming_second[hours][l]<10){
                    document.getElementById("t1").innerHTML=(hours)+":0"+(coming_second[hours][l]);
                }
                document.getElementById("t2").innerHTML=(hours)+":"+(coming_second[hours+1][0]);
                document.getElementById("k2").innerHTML=kinds[coming_kind[hours+1][0]]
                if(Math.round(second/10)%2==0){
                    document.getElementById("fj2").innerHTML=kinds_for[coming_for[hours+1][0]]
                }else{
                    document.getElementById("k2").innerHTML=kinds_e[coming_kind[hours+1][0]]
                    document.getElementById("fj2").innerHTML=kinds_fore[coming_for[hours+1][0]]
                }
                document.getElementById("s2").innerHTML=kinds_s[coming_kind[hours+1][0]]
                //document.getElementById("fj2").innerHTML=kinds_for[coming_for[hours][l+1]]
                //document.getElementById("fe2").innerHTML=kinds_fore[coming_for[hours][l+1]]
                if(coming_second[hours+1][0]<10){
                    document.getElementById("t2").innerHTML=(hours+1)+":0"+(coming_second[hours+1][0]);
                }
                document.getElementById("t3").innerHTML=(hours+1)+":"+(coming_second[hours+1][1]);
                document.getElementById("k3").innerHTML=kinds[coming_kind[hours+1][1]]
                if(Math.round(second/10)%2==0){
                    document.getElementById("fj3").innerHTML=kinds_for[coming_for[hours+1][1]]
                }else{
                    document.getElementById("k3").innerHTML=kinds_e[coming_kind[hours+1][1]]
                    document.getElementById("fj3").innerHTML=kinds_fore[coming_for[hours+1][1]]
                }
                document.getElementById("s3").innerHTML=kinds_s[coming_kind[hours+1][1]]
                //document.getElementById("fj3").innerHTML=kinds_for[coming_for[hours+1][0]]
                //document.getElementById("fe3").innerHTML=kinds_fore[coming_for[hours+1][0]]
                if(coming_second[hours+1][1]<10){
                    document.getElementById("t3").innerHTML=(hours+1)+":0"+(coming_second[hours+1][1]);
                }
            }else if(l+2 == coming_second[hours].length){
                console.log("C")
                document.getElementById("t1").innerHTML=(hours)+":"+(coming_second[hours][l]);
                document.getElementById("k1").innerHTML=kinds[coming_kind[hours][l]]
                console.log("aaa"+Math.round(minutes/10))
                if(Math.round(second/10)%2==0){
                    document.getElementById("fj1").innerHTML=kinds_for[coming_for[hours][l]]
                }else{
                    document.getElementById("k1").innerHTML=kinds_e[coming_kind[hours][l]]
                    document.getElementById("fj1").innerHTML=kinds_fore[coming_for[hours][l]]
                }
                document.getElementById("s1").innerHTML=kinds_s[coming_kind[hours][l]]
                ///document.getElementById("fj1").innerHTML=kinds_for[coming_for[hours][l]]
                ///document.getElementById("fe1").innerHTML=kinds_fore[coming_for[hours][l]]
                if(coming_second[hours][l]<10){
                    document.getElementById("t1").innerHTML=(hours)+":0"+(coming_second[hours][l-1]);
                }
                document.getElementById("t2").innerHTML=(hours)+":"+(coming_second[hours][l+1]);
                document.getElementById("k2").innerHTML=kinds[coming_kind[hours][l+1]]
                if(Math.round(second/10)%2==0){
                    document.getElementById("fj2").innerHTML=kinds_for[coming_for[hours][l+1]]
                }else{
                    document.getElementById("k2").innerHTML=kinds_e[coming_kind[hours][l+1]]
                    document.getElementById("fj2").innerHTML=kinds_fore[coming_for[hours][l+1]]
                }
                document.getElementById("s2").innerHTML=kinds_s[coming_kind[hours][l+1]]
                //document.getElementById("fj2").innerHTML=kinds_for[coming_for[hours][l+1]]
                //document.getElementById("fe2").innerHTML=kinds_fore[coming_for[hours][l+1]]
                if(coming_second[hours][l+1]<10){
                    document.getElementById("t2").innerHTML=(hours)+":0"+(coming_second[hours][l+1]);
                }
                document.getElementById("t3").innerHTML=(hours+1)+":"+(coming_second[hours+1][0]);
                document.getElementById("k3").innerHTML=kinds[coming_kind[hours+1][0]]
                if(Math.round(second/10)%2==0){
                    document.getElementById("fj3").innerHTML=kinds_for[coming_for[hours+1][0]]
                }else{
                    document.getElementById("k3").innerHTML=kinds_e[coming_kind[hours+1][0]]
                    document.getElementById("fj3").innerHTML=kinds_fore[coming_for[hours+1][0]]
                }
                document.getElementById("s3").innerHTML=kinds_s[coming_kind[hours+1][0]]
                //document.getElementById("fj3").innerHTML=kinds_for[coming_for[hours+1][0]]
                //document.getElementById("fe3").innerHTML=kinds_fore[coming_for[hours+1][0]]
                if(coming_second[hours+1][0]<10){
                    document.getElementById("t3").innerHTML=(hours+1)+":0"+(coming_second[hours+1][0]);
                }
            }else{
                console.log("D")
                document.getElementById("t1").innerHTML=(hours)+":"+(coming_second[hours][l]);
                document.getElementById("k1").innerHTML=kinds[coming_kind[hours][l]]
                console.log("aaa"+Math.round(minutes/10))
                if(Math.round(second/10)%2==0){
                    document.getElementById("fj1").innerHTML=kinds_for[coming_for[hours][l]]
                }else{
                    document.getElementById("k1").innerHTML=kinds_e[coming_kind[hours][l]]
                    document.getElementById("fj1").innerHTML=kinds_fore[coming_for[hours][l]]
                }
                document.getElementById("s1").innerHTML=kinds_s[coming_kind[hours][l]]
                ///document.getElementById("fj1").innerHTML=kinds_for[coming_for[hours][l]]
                ///document.getElementById("fe1").innerHTML=kinds_fore[coming_for[hours][l]]
                if(coming_second[hours][l]<10){
                    document.getElementById("t1").innerHTML=(hours)+":0"+(coming_second[hours][l]);
                }
                document.getElementById("t2").innerHTML=(hours)+":"+(coming_second[hours][l+1]);
                document.getElementById("k2").innerHTML=kinds[coming_kind[hours][l+1]]
                if(Math.round(second/10)%2==0){
                    document.getElementById("fj2").innerHTML=kinds_for[coming_for[hours][l+1]]
                }else{
                    document.getElementById("k2").innerHTML=kinds_e[coming_kind[hours][l+1]]
                    document.getElementById("fj2").innerHTML=kinds_fore[coming_for[hours][l+1]]
                }
                document.getElementById("s2").innerHTML=kinds_s[coming_kind[hours][l+1]]
                //document.getElementById("fj2").innerHTML=kinds_for[coming_for[hours][l+1]]
                //document.getElementById("fe2").innerHTML=kinds_fore[coming_for[hours][l+1]]
                if(coming_second[hours][l+1]<10){
                    document.getElementById("t2").innerHTML=(hours)+":0"+(coming_second[hours][l+1]);
                }
                document.getElementById("t3").innerHTML=(hours)+":"+(coming_second[hours][l+2]);
                document.getElementById("k3").innerHTML=kinds[coming_kind[hours][l+2]]
                if(Math.round(second/10)%2==0){
                    document.getElementById("fj3").innerHTML=kinds_for[coming_for[hours][l+2]]
                }else{
                    document.getElementById("k3").innerHTML=kinds_e[coming_kind[hours][l+2]]
                    document.getElementById("fj3").innerHTML=kinds_fore[coming_for[hours][l+2]]
                }
                document.getElementById("s3").innerHTML=kinds_s[coming_kind[hours][l+2]]
                ///document.getElementById("fj3").innerHTML=kinds_for[coming_for[hours][l+2]]
                ///document.getElementById("fe3").innerHTML=kinds_fore[coming_for[hours][l+2]]
                if(coming_second[hours][l+2]<10){
                    document.getElementById("t3").innerHTML=(hours)+":0"+(coming_second[hours][l+2]);
                }
            }
            console.log("と")

            nowpos += 1;
        }
    }
};

let clearIntervalFunc = function() {
	clearInterval(timer);
	time = null;
	n = 0;
	textObj.value = n;
};

startIntervalFunc();