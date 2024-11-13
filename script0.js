
let timer0    = null,
    textObj0  = null,
    exec0Btn  = null,
    clearBtn0 = null,
    n0        = 0;

let start0IntervalFunc = function() {
	if (!timer0) timer0 = setInterval(exec0IntervalFunc, 1000);
};
let coming0_second0 = [ ///到着時間、[0]に入るのは⓪時、[1]が1時
    [1,15,25],
    [-1],
    [-1],
    [-1],
    [-1],
    [25,34,46,57],///5時代
    [8,17,23,32,41,46,51,55],
    [1,5,10,14,19,23,28,33,37,42,47,51,56],
    [1,5,10,15,19,24,29,33,38,43,47,52,57],
    [1,6,11,15,21,27,33,38,48,57],
    [2,8,16,25,31,36,46,55],//10時代
    [1,6,16,25,31,36,46,55],
    [1,6,16,25,31,36,46,55],
    [1,6,16,25,31,36,46,55],
    [1,6,16,25,31,36,46,55],
    [1,6,12,19,25,31,36,42,48,55],//15時代
    [1,6,13,20,27,33,38,45,53,59],
    [5,11,17,23,29,35,41,47,53,59],
    [5,11,17,23,29,35,41,47,53,59],
    [5,11,17,23,29,35,41,47,53,59],
    [5,10,17,23,29,35,41,47,54],///20時
    [5,11,17,23,29,35,41,47,54],
    [1,8,16,23,31,40,49,54],
    [11,22,36,49],
    [1,15,25]
]
let coming0_kind = [
    [0,2,3],
    [-1],
    [-1],
    [-1],
    [-1],
    [0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0],
    [1,0,0,0,1,0,0,0],
    [1,0,0,0,1,0,0,0],
    [1,0,0,0,1,0,0,0],
    [1,0,0,0,1,0,0,0],
    [1,0,0,0,0,1,0,0,0,0],
    [1,0,0,0,0,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0],
    [0,2,3]
]
let coming0_for = [
    [0,2,3],
    [-1],
    [-1],
    [-1],
    [-1],
    [0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,2,0,0,0],
    [2,0,2,0,0,0,2,0,0,0],
    [1,0,0,1,0,0,0,1],
    [0,0,0,1,0,0,0,1],
    [0,0,0,1,0,0,0,1],
    [0,0,0,1,0,0,0,1],
    [0,0,0,1,0,0,0,1],
    [0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0],
    [0,0,2]
]
///0:湘南台 1:上永谷
let kinds0=["<div class='local'>普通</div>","<div class='ra'>快速</div>","<div class='local'>普通</div>",,"<div class='local'>最終</div>"]
let kinds0_e=["<div class='eng local'>Local</div>","<div class='eng ra'>Rapid</div>","<div class='eng local'>Local</div>","<div class='eng local'>Final</div>"]
let kinds0_s=["伊勢佐木長者町から各駅に停まります","上大岡、上永谷と、戸塚からの各駅に停まります","湘南台行き 最終電車です","上永谷行き 最終電車です"]
let kinds0_for=["湘南台","踊場","上永谷"]
let kinds0_fore=["Shonandai","Odoriba","Kaminagaya"]
let exec0IntervalFunc = function() {
    let jtime = new Date();
    let hour0 = jtime.getHours();
    let minute0 = jtime.getMinutes();
    let second0 = jtime.getSeconds();
    let nowpos0 = 0
    let minute0s = minute0;
    let hour0s=hour0;
    if(hour0 < 5){
        hour0s = 5;
        minute0s = 0;
    }
    for(let l=0;nowpos0 != 1;l+=1){
        if(coming0_second0[hour0s][l] <= minute0s){
            console.log("A")
            continue;
        }else{
            console.log(l)
            console.log(coming0_second0[hour0s].length)
            if(l == coming0_second0[hour0s].length){
                console.log("B"+coming0_second0[hour0s][l-1])
                if(coming0_second0[hour0s][l-1] <= minute0){
                    console.log("BD")
                    document.getElementById("t01").innerHTML=(hour0s+1)+":"+(coming0_second0[hour0s+1][0]);
                    document.getElementById("k01").innerHTML=kinds0[coming0_kind[hour0s+1][0]]
                    console.log("a"+Math.round(minute0s/10))
                    if(Math.round(second0/10)%2==0){
                        document.getElementById("fj01").innerHTML=kinds0_for[coming0_for[hour0s+1][0]]
                    }else{
                        document.getElementById("k01").innerHTML=kinds0_e[coming0_kind[hour0s+1][0]]
                        document.getElementById("fj01").innerHTML=kinds0_fore[coming0_for[hour0s+1][0]]
                    }
                    document.getElementById("s01").innerHTML=kinds0_s[coming0_kind[hour0s+1][0]]
                    ///document.getElementById("fj01").innerHTML=kinds0_for[coming0_for[hour0s][l]]
                    ///document.getElementById("fe1").innerHTML=kinds0_fore[coming0_for[hour0s][l]]
                    if(coming0_second0[hour0s+1][0]<10){
                        document.getElementById("t01").innerHTML=(hour0s+1)+":0"+(coming0_second0[hour0s+1][0]);
                    }
                    document.getElementById("t02").innerHTML=(hour0s+1)+":"+(coming0_second0[hour0s+1][1]);
                    document.getElementById("k02").innerHTML=kinds0[coming0_kind[hour0s+1][1]]
                    if(Math.round(second0/10)%2==0){
                        document.getElementById("fj02").innerHTML=kinds0_for[coming0_for[hour0s+1][1]]
                    }else{
                        document.getElementById("k02").innerHTML=kinds0_e[coming0_kind[hour0s+1][1]]
                        document.getElementById("fj02").innerHTML=kinds0_fore[coming0_for[hour0s+1][1]]
                    }
                    document.getElementById("s02").innerHTML=kinds0_s[coming0_kind[hour0s+1][1]]
                    //document.getElementById("fj02").innerHTML=kinds0_for[coming0_for[hour0s][l+1]]
                    //document.getElementById("fe2").innerHTML=kinds0_fore[coming0_for[hour0s][l+1]]
                    if(coming0_second0[hour0s+1][1]<10){
                        document.getElementById("t02").innerHTML=(hour0s+1)+":0"+(coming0_second0[hour0s+1][1]);
                    }
                    document.getElementById("t03").innerHTML=(hour0s+1)+":"+(coming0_second0[hour0s+1][2]);
                    document.getElementById("k03").innerHTML=kinds0[coming0_kind[hour0s+1][2]]
                    if(Math.round(second0/10)%2==0){
                        document.getElementById("fj03").innerHTML=kinds0_for[coming0_for[hour0s+1][2]]
                    }else{
                        document.getElementById("k03").innerHTML=kinds0_e[coming0_kind[hour0s+1][2]]
                        document.getElementById("fj03").innerHTML=kinds0_fore[coming0_for[hour0s+1][2]]
                    }
                    document.getElementById("s03").innerHTML=kinds0_s[coming0_kind[hour0s+1][2]]
                    ///document.getElementById("fj03").innerHTML=kinds0_for[coming0_for[hour0s][l+2]]
                    ///document.getElementById("fe3").innerHTML=kinds0_fore[coming0_for[hour0s][l+2]]
                    if(coming0_second0[hour0s+1][2]<10){
                        document.getElementById("t03").innerHTML=(hour0s+1)+":0"+(coming0_second0[hour0s+1][2]);
                    }
                }else{
                    console.log("BB")
                    document.getElementById("t01").innerHTML=(hour0s)+":"+(coming0_second0[hour0s][l-1]);
                    document.getElementById("k01").innerHTML=kinds0[coming0_kind[hour0s][l-1]]
                    if(Math.round(second0/10)%2==0){
                        document.getElementById("fj01").innerHTML=kinds0_for[coming0_for[hour0s][l-1]]
                    }else{
                        document.getElementById("k01").innerHTML=kinds0_e[coming0_kind[hour0s][l-1]]
                        document.getElementById("fj01").innerHTML=kinds0_fore[coming0_for[hour0s][l-1]]
                    }
                    document.getElementById("s01").innerHTML=kinds0_s[coming0_kind[hour0s][l-1]]
                    ///document.getElementById("fj01").innerHTML=kinds0_for[coming0_for[hour0s][l-1]]
                    ///document.getElementById("fe1").innerHTML=kinds0_fore[coming0_for[hour0s][l-1]]
                    if(coming0_second0[hour0s][l-1]<10){
                        document.getElementById("t01").innerHTML=(hour0s)+":0"+(coming0_second0[hour0s][l-1]);
                    }
                    document.getElementById("t02").innerHTML=(hour0s+1)+":"+(coming0_second0[hour0s+1][0]);
                    document.getElementById("k02").innerHTML=kinds0[coming0_kind[hour0s+1][0]]
                    if(Math.round(second0/10)%2==0){
                        document.getElementById("fj02").innerHTML=kinds0_for[coming0_for[hour0s+1][0]]
                    }else{
                        document.getElementById("k02").innerHTML=kinds0_e[coming0_kind[hour0s+1][0]]
                        document.getElementById("fj02").innerHTML=kinds0_fore[coming0_for[hour0s+1][0]]
                    }
                    document.getElementById("s02").innerHTML=kinds0_s[coming0_kind[hour0s+1][0]]
                    //document.getElementById("fj02").innerHTML=kinds0_for[coming0_for[hour0s+1][0]]
                    //document.getElementById("fe2").innerHTML=kinds0_fore[coming0_for[hour0s+1][0]]
                    if(coming0_second0[hour0s+1][0]<10){
                        document.getElementById("t02").innerHTML=(hour0s+1)+":0"+(coming0_second0[hour0s+1][0]);
                    }
                    document.getElementById("t03").innerHTML=(hour0s+1)+":"+(coming0_second0[hour0s+1][1]);
                    document.getElementById("k03").innerHTML=kinds0[coming0_kind[hour0s+1][1]]
                    if(Math.round(second0/10)%2==0){
                        document.getElementById("fj03").innerHTML=kinds0_for[coming0_for[hour0s+1][1]]
                    }else{
                        document.getElementById("k03").innerHTML=kinds0_e[coming0_kind[hour0s+1][1]]
                        document.getElementById("fj03").innerHTML=kinds0_fore[coming0_for[hour0s+1][1]]
                    }
                    document.getElementById("s03").innerHTML=kinds0_s[coming0_kind[hour0s+1][1]]
                    //document.getElementById("fj03").innerHTML=kinds0_for[coming0_for[hour0s+1][1]]
                    //document.getElementById("fe3").innerHTML=kinds0_fore[coming0_for[hour0s+1][1]]
                    if(coming0_second0[hour0s+1][1]<10){
                        document.getElementById("t03").innerHTML=(hour0s+1)+":0"+(coming0_second0[hour0s+1][1]);
                    }
                }
            }else if(l+1 == coming0_second0[hour0s].length){
                console.log("I")
                document.getElementById("t01").innerHTML=(hour0s)+":"+(coming0_second0[hour0s][l]);
                document.getElementById("k01").innerHTML=kinds0[coming0_kind[hour0s][l]]
                console.log("aaa"+Math.round(minute0s/10))
                if(Math.round(second0/10)%2==0){
                    document.getElementById("fj01").innerHTML=kinds0_for[coming0_for[hour0s][l]]
                }else{
                    document.getElementById("k01").innerHTML=kinds0_e[coming0_kind[hour0s][l]]
                    document.getElementById("fj01").innerHTML=kinds0_fore[coming0_for[hour0s][l]]
                }
                document.getElementById("s01").innerHTML=kinds0_s[coming0_kind[hour0s][l]]
                ///document.getElementById("fj01").innerHTML=kinds0_for[coming0_for[hour0s][l]]
                ///document.getElementById("fe1").innerHTML=kinds0_fore[coming0_for[hour0s][l]]
                if(coming0_second0[hour0s][l]<10){
                    document.getElementById("t01").innerHTML=(hour0s)+":0"+(coming0_second0[hour0s][l]);
                }
                document.getElementById("t02").innerHTML=(hour0s)+":"+(coming0_second0[hour0s+1][0]);
                document.getElementById("k02").innerHTML=kinds0[coming0_kind[hour0s+1][0]]
                if(Math.round(second0/10)%2==0){
                    document.getElementById("fj02").innerHTML=kinds0_for[coming0_for[hour0s+1][0]]
                }else{
                    document.getElementById("k02").innerHTML=kinds0_e[coming0_kind[hour0s+1][0]]
                    document.getElementById("fj02").innerHTML=kinds0_fore[coming0_for[hour0s+1][0]]
                }
                document.getElementById("s02").innerHTML=kinds0_s[coming0_kind[hour0s+1][0]]
                //document.getElementById("fj02").innerHTML=kinds0_for[coming0_for[hour0s][l+1]]
                //document.getElementById("fe2").innerHTML=kinds0_fore[coming0_for[hour0s][l+1]]
                if(coming0_second0[hour0s+1][0]<10){
                    document.getElementById("t02").innerHTML=(hour0s+1)+":0"+(coming0_second0[hour0s+1][0]);
                }
                document.getElementById("t03").innerHTML=(hour0s+1)+":"+(coming0_second0[hour0s+1][1]);
                document.getElementById("k03").innerHTML=kinds0[coming0_kind[hour0s+1][1]]
                if(Math.round(second0/10)%2==0){
                    document.getElementById("fj03").innerHTML=kinds0_for[coming0_for[hour0s+1][1]]
                }else{
                    document.getElementById("k03").innerHTML=kinds0_e[coming0_kind[hour0s+1][1]]
                    document.getElementById("fj03").innerHTML=kinds0_fore[coming0_for[hour0s+1][1]]
                }
                document.getElementById("s03").innerHTML=kinds0_s[coming0_kind[hour0s+1][1]]
                //document.getElementById("fj03").innerHTML=kinds0_for[coming0_for[hour0s+1][0]]
                //document.getElementById("fe3").innerHTML=kinds0_fore[coming0_for[hour0s+1][0]]
                if(coming0_second0[hour0s+1][1]<10){
                    document.getElementById("t03").innerHTML=(hour0s+1)+":0"+(coming0_second0[hour0s+1][1]);
                }
            }else if(l+2 == coming0_second0[hour0s].length){
                console.log("C")
                document.getElementById("t01").innerHTML=(hour0s)+":"+(coming0_second0[hour0s][l]);
                document.getElementById("k01").innerHTML=kinds0[coming0_kind[hour0s][l]]
                console.log("aaa"+Math.round(minute0s/10))
                if(Math.round(second0/10)%2==0){
                    document.getElementById("fj01").innerHTML=kinds0_for[coming0_for[hour0s][l]]
                }else{
                    document.getElementById("k01").innerHTML=kinds0_e[coming0_kind[hour0s][l]]
                    document.getElementById("fj01").innerHTML=kinds0_fore[coming0_for[hour0s][l]]
                }
                document.getElementById("s01").innerHTML=kinds0_s[coming0_kind[hour0s][l]]
                ///document.getElementById("fj01").innerHTML=kinds0_for[coming0_for[hour0s][l]]
                ///document.getElementById("fe1").innerHTML=kinds0_fore[coming0_for[hour0s][l]]
                if(coming0_second0[hour0s][l]<10){
                    document.getElementById("t01").innerHTML=(hour0s)+":0"+(coming0_second0[hour0s][l-1]);
                }
                document.getElementById("t02").innerHTML=(hour0s)+":"+(coming0_second0[hour0s][l+1]);
                document.getElementById("k02").innerHTML=kinds0[coming0_kind[hour0s][l+1]]
                if(Math.round(second0/10)%2==0){
                    document.getElementById("fj02").innerHTML=kinds0_for[coming0_for[hour0s][l+1]]
                }else{
                    document.getElementById("k02").innerHTML=kinds0_e[coming0_kind[hour0s][l+1]]
                    document.getElementById("fj02").innerHTML=kinds0_fore[coming0_for[hour0s][l+1]]
                }
                document.getElementById("s02").innerHTML=kinds0_s[coming0_kind[hour0s][l+1]]
                //document.getElementById("fj02").innerHTML=kinds0_for[coming0_for[hour0s][l+1]]
                //document.getElementById("fe2").innerHTML=kinds0_fore[coming0_for[hour0s][l+1]]
                if(coming0_second0[hour0s][l+1]<10){
                    document.getElementById("t02").innerHTML=(hour0s)+":0"+(coming0_second0[hour0s][l+1]);
                }
                document.getElementById("t03").innerHTML=(hour0s+1)+":"+(coming0_second0[hour0s+1][0]);
                document.getElementById("k03").innerHTML=kinds0[coming0_kind[hour0s+1][0]]
                if(Math.round(second0/10)%2==0){
                    document.getElementById("fj03").innerHTML=kinds0_for[coming0_for[hour0s+1][0]]
                }else{
                    document.getElementById("k03").innerHTML=kinds0_e[coming0_kind[hour0s+1][0]]
                    document.getElementById("fj03").innerHTML=kinds0_fore[coming0_for[hour0s+1][0]]
                }
                document.getElementById("s03").innerHTML=kinds0_s[coming0_kind[hour0s+1][0]]
                //document.getElementById("fj03").innerHTML=kinds0_for[coming0_for[hour0s+1][0]]
                //document.getElementById("fe3").innerHTML=kinds0_fore[coming0_for[hour0s+1][0]]
                if(coming0_second0[hour0s+1][0]<10){
                    document.getElementById("t03").innerHTML=(hour0s+1)+":0"+(coming0_second0[hour0s+1][0]);
                }
            }else{
                console.log("D")
                document.getElementById("t01").innerHTML=(hour0s)+":"+(coming0_second0[hour0s][l]);
                document.getElementById("k01").innerHTML=kinds0[coming0_kind[hour0s][l]]
                console.log("aaa"+Math.round(minute0s/10))
                if(Math.round(second0/10)%2==0){
                    document.getElementById("fj01").innerHTML=kinds0_for[coming0_for[hour0s][l]]
                }else{
                    document.getElementById("k01").innerHTML=kinds0_e[coming0_kind[hour0s][l]]
                    document.getElementById("fj01").innerHTML=kinds0_fore[coming0_for[hour0s][l]]
                }
                document.getElementById("s01").innerHTML=kinds0_s[coming0_kind[hour0s][l]]
                ///document.getElementById("fj01").innerHTML=kinds0_for[coming0_for[hour0s][l]]
                ///document.getElementById("fe1").innerHTML=kinds0_fore[coming0_for[hour0s][l]]
                if(coming0_second0[hour0s][l]<10){
                    document.getElementById("t01").innerHTML=(hour0s)+":0"+(coming0_second0[hour0s][l]);
                }
                document.getElementById("t02").innerHTML=(hour0s)+":"+(coming0_second0[hour0s][l+1]);
                document.getElementById("k02").innerHTML=kinds0[coming0_kind[hour0s][l+1]]
                if(Math.round(second0/10)%2==0){
                    document.getElementById("fj02").innerHTML=kinds0_for[coming0_for[hour0s][l+1]]
                }else{
                    document.getElementById("k02").innerHTML=kinds0_e[coming0_kind[hour0s][l+1]]
                    document.getElementById("fj02").innerHTML=kinds0_fore[coming0_for[hour0s][l+1]]
                }
                document.getElementById("s02").innerHTML=kinds0_s[coming0_kind[hour0s][l+1]]
                //document.getElementById("fj02").innerHTML=kinds0_for[coming0_for[hour0s][l+1]]
                //document.getElementById("fe2").innerHTML=kinds0_fore[coming0_for[hour0s][l+1]]
                if(coming0_second0[hour0s][l+1]<10){
                    document.getElementById("t02").innerHTML=(hour0s)+":0"+(coming0_second0[hour0s][l+1]);
                }
                document.getElementById("t03").innerHTML=(hour0s)+":"+(coming0_second0[hour0s][l+2]);
                document.getElementById("k03").innerHTML=kinds0[coming0_kind[hour0s][l+2]]
                if(Math.round(second0/10)%2==0){
                    document.getElementById("fj03").innerHTML=kinds0_for[coming0_for[hour0s][l+2]]
                }else{
                    document.getElementById("k03").innerHTML=kinds0_e[coming0_kind[hour0s][l+2]]
                    document.getElementById("fj03").innerHTML=kinds0_fore[coming0_for[hour0s][l+2]]
                }
                document.getElementById("s03").innerHTML=kinds0_s[coming0_kind[hour0s][l+2]]
                ///document.getElementById("fj03").innerHTML=kinds0_for[coming0_for[hour0s][l+2]]
                ///document.getElementById("fe3").innerHTML=kinds0_fore[coming0_for[hour0s][l+2]]
                if(coming0_second0[hour0s][l+2]<10){
                    document.getElementById("t03").innerHTML=(hour0s)+":0"+(coming0_second0[hour0s][l+2]);
                }
            }
            console.log("と")

            nowpos0 += 1;
        }
    }
};

let clear0IntervalFunc = function() {
	clear0Interval(timer);
	time = null;
	n = 0;
	textObj0.value = n;
};

start0IntervalFunc();