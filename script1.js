
let timer1    = null,
    textObj1  = null,
    exec1Btn  = null,
    clearBtn1 = null,
    n1        = 0;

let start1IntervalFunc = function() {
	if (!timer1) timer1 = setInterval(exec1IntervalFunc, 1000);
};
let coming1_second1 = [ ///到着時間、[0]に入るのは⓪時、[1]が1時
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
let coming1_kind = [
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
let coming1_for = [
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
let kinds1=["<div class='jr_lo'>普通</div>","<div class='ra'>快速</div>","<div class='yoko'>横浜線</div>",,"<div class='local'>最終</div>"]
let kinds1_e=["<div class='eng local'>Local</div>","<div class='eng ra'>Rapid</div>","<div class='eng local'>Local</div>","<div class='eng local'>Final</div>"]
let kinds1_s=["伊勢佐木長者町から各駅に停まります","上大岡、上永谷と、戸塚からの各駅に停まります","湘南台行き 最終電車です","上永谷行き 最終電車です"]
let kinds1_for=["湘南台","踊場","上永谷"]
let kinds1_fore=["Shonandai","Odoriba","Kaminagaya"]
let exec1IntervalFunc = function() {
    let jtime = new Date();
    let hour1 = jtime.getHours();
    let minute1 = jtime.getMinutes();
    let second1 = jtime.getSeconds();
    let nowpos1 = 0
    let minute1s = minute1;
    let hour1s=hour1;
    if(hour1 < 5){
        hour1s = 5;
        minute1s = 0;
    }
    for(let l=0;nowpos1 != 1;l+=1){
        if(coming1_second1[hour1s][l] <= minute1s){
            console.log("A")
            continue;
        }else{
            console.log(l)
            console.log(coming1_second1[hour1s].length)
            if(l == coming1_second1[hour1s].length){
                console.log("B"+coming1_second1[hour1s][l-1])
                if(coming1_second1[hour1s][l-1] <= minute1){
                    console.log("BD")
                    document.getElementById("t11").innerHTML=(hour1s+1)+":"+(coming1_second1[hour1s+1][0]);
                    document.getElementById("k11").innerHTML=kinds1[coming1_kind[hour1s+1][0]]
                    console.log("a"+Math.round(minute1s/10))
                    if(Math.round(second1/10)%2==0){
                        document.getElementById("fj11").innerHTML=kinds1_for[coming1_for[hour1s+1][0]]
                    }else{
                        document.getElementById("k11").innerHTML=kinds1_e[coming1_kind[hour1s+1][0]]
                        document.getElementById("fj11").innerHTML=kinds1_fore[coming1_for[hour1s+1][0]]
                    }
                    ///document.getElementById("fj11").innerHTML=kinds1_for[coming1_for[hour1s][l]]
                    ///document.getElementById("fe1").innerHTML=kinds1_fore[coming1_for[hour1s][l]]
                    if(coming1_second1[hour1s+1][0]<10){
                        document.getElementById("t11").innerHTML=(hour1s+1)+":0"+(coming1_second1[hour1s+1][0]);
                    }
                    document.getElementById("t12").innerHTML=(hour1s+1)+":"+(coming1_second1[hour1s+1][1]);
                    document.getElementById("k12").innerHTML=kinds1[coming1_kind[hour1s+1][1]]
                    if(Math.round(second1/10)%2==0){
                        document.getElementById("fj12").innerHTML=kinds1_for[coming1_for[hour1s+1][1]]
                    }else{
                        document.getElementById("k12").innerHTML=kinds1_e[coming1_kind[hour1s+1][1]]
                        document.getElementById("fj12").innerHTML=kinds1_fore[coming1_for[hour1s+1][1]]
                    }
                    //document.getElementById("fj12").innerHTML=kinds1_for[coming1_for[hour1s][l+1]]
                    //document.getElementById("fe2").innerHTML=kinds1_fore[coming1_for[hour1s][l+1]]
                    if(coming1_second1[hour1s+1][1]<10){
                        document.getElementById("t12").innerHTML=(hour1s+1)+":0"+(coming1_second1[hour1s+1][1]);
                    }
                    document.getElementById("t13").innerHTML=(hour1s+1)+":"+(coming1_second1[hour1s+1][2]);
                    document.getElementById("k13").innerHTML=kinds1[coming1_kind[hour1s+1][2]]
                    if(Math.round(second1/10)%2==0){
                        document.getElementById("fj13").innerHTML=kinds1_for[coming1_for[hour1s+1][2]]
                    }else{
                        document.getElementById("k13").innerHTML=kinds1_e[coming1_kind[hour1s+1][2]]
                        document.getElementById("fj13").innerHTML=kinds1_fore[coming1_for[hour1s+1][2]]
                    }
                    ///document.getElementById("fj13").innerHTML=kinds1_for[coming1_for[hour1s][l+2]]
                    ///document.getElementById("fe3").innerHTML=kinds1_fore[coming1_for[hour1s][l+2]]
                    if(coming1_second1[hour1s+1][2]<10){
                        document.getElementById("t13").innerHTML=(hour1s+1)+":0"+(coming1_second1[hour1s+1][2]);
                    }
                }else{
                    console.log("BB")
                    document.getElementById("t11").innerHTML=(hour1s)+":"+(coming1_second1[hour1s][l-1]);
                    document.getElementById("k11").innerHTML=kinds1[coming1_kind[hour1s][l-1]]
                    if(Math.round(second1/10)%2==0){
                        document.getElementById("fj11").innerHTML=kinds1_for[coming1_for[hour1s][l-1]]
                    }else{
                        document.getElementById("k11").innerHTML=kinds1_e[coming1_kind[hour1s][l-1]]
                        document.getElementById("fj11").innerHTML=kinds1_fore[coming1_for[hour1s][l-1]]
                    }
                    ///document.getElementById("fj11").innerHTML=kinds1_for[coming1_for[hour1s][l-1]]
                    ///document.getElementById("fe1").innerHTML=kinds1_fore[coming1_for[hour1s][l-1]]
                    if(coming1_second1[hour1s][l-1]<10){
                        document.getElementById("t11").innerHTML=(hour1s)+":0"+(coming1_second1[hour1s][l-1]);
                    }
                    document.getElementById("t12").innerHTML=(hour1s+1)+":"+(coming1_second1[hour1s+1][0]);
                    document.getElementById("k12").innerHTML=kinds1[coming1_kind[hour1s+1][0]]
                    if(Math.round(second1/10)%2==0){
                        document.getElementById("fj12").innerHTML=kinds1_for[coming1_for[hour1s+1][0]]
                    }else{
                        document.getElementById("k12").innerHTML=kinds1_e[coming1_kind[hour1s+1][0]]
                        document.getElementById("fj12").innerHTML=kinds1_fore[coming1_for[hour1s+1][0]]
                    }
                    //document.getElementById("fj12").innerHTML=kinds1_for[coming1_for[hour1s+1][0]]
                    //document.getElementById("fe2").innerHTML=kinds1_fore[coming1_for[hour1s+1][0]]
                    if(coming1_second1[hour1s+1][0]<10){
                        document.getElementById("t12").innerHTML=(hour1s+1)+":0"+(coming1_second1[hour1s+1][0]);
                    }
                    document.getElementById("t13").innerHTML=(hour1s+1)+":"+(coming1_second1[hour1s+1][1]);
                    document.getElementById("k13").innerHTML=kinds1[coming1_kind[hour1s+1][1]]
                    if(Math.round(second1/10)%2==0){
                        document.getElementById("fj13").innerHTML=kinds1_for[coming1_for[hour1s+1][1]]
                    }else{
                        document.getElementById("k13").innerHTML=kinds1_e[coming1_kind[hour1s+1][1]]
                        document.getElementById("fj13").innerHTML=kinds1_fore[coming1_for[hour1s+1][1]]
                    }
                    //document.getElementById("fj13").innerHTML=kinds1_for[coming1_for[hour1s+1][1]]
                    //document.getElementById("fe3").innerHTML=kinds1_fore[coming1_for[hour1s+1][1]]
                    if(coming1_second1[hour1s+1][1]<10){
                        document.getElementById("t13").innerHTML=(hour1s+1)+":0"+(coming1_second1[hour1s+1][1]);
                    }
                }
            }else if(l+1 == coming1_second1[hour1s].length){
                console.log("I")
                document.getElementById("t11").innerHTML=(hour1s)+":"+(coming1_second1[hour1s][l]);
                document.getElementById("k11").innerHTML=kinds1[coming1_kind[hour1s][l]]
                console.log("aaa"+Math.round(minute1s/10))
                if(Math.round(second1/10)%2==0){
                    document.getElementById("fj11").innerHTML=kinds1_for[coming1_for[hour1s][l]]
                }else{
                    document.getElementById("k11").innerHTML=kinds1_e[coming1_kind[hour1s][l]]
                    document.getElementById("fj11").innerHTML=kinds1_fore[coming1_for[hour1s][l]]
                }
                ///document.getElementById("fj11").innerHTML=kinds1_for[coming1_for[hour1s][l]]
                ///document.getElementById("fe1").innerHTML=kinds1_fore[coming1_for[hour1s][l]]
                if(coming1_second1[hour1s][l]<10){
                    document.getElementById("t11").innerHTML=(hour1s)+":0"+(coming1_second1[hour1s][l]);
                }
                document.getElementById("t12").innerHTML=(hour1s)+":"+(coming1_second1[hour1s+1][0]);
                document.getElementById("k12").innerHTML=kinds1[coming1_kind[hour1s+1][0]]
                if(Math.round(second1/10)%2==0){
                    document.getElementById("fj12").innerHTML=kinds1_for[coming1_for[hour1s+1][0]]
                }else{
                    document.getElementById("k12").innerHTML=kinds1_e[coming1_kind[hour1s+1][0]]
                    document.getElementById("fj12").innerHTML=kinds1_fore[coming1_for[hour1s+1][0]]
                }
                //document.getElementById("fj12").innerHTML=kinds1_for[coming1_for[hour1s][l+1]]
                //document.getElementById("fe2").innerHTML=kinds1_fore[coming1_for[hour1s][l+1]]
                if(coming1_second1[hour1s+1][0]<10){
                    document.getElementById("t12").innerHTML=(hour1s+1)+":0"+(coming1_second1[hour1s+1][0]);
                }
                document.getElementById("t13").innerHTML=(hour1s+1)+":"+(coming1_second1[hour1s+1][1]);
                document.getElementById("k13").innerHTML=kinds1[coming1_kind[hour1s+1][1]]
                if(Math.round(second1/10)%2==0){
                    document.getElementById("fj13").innerHTML=kinds1_for[coming1_for[hour1s+1][1]]
                }else{
                    document.getElementById("k13").innerHTML=kinds1_e[coming1_kind[hour1s+1][1]]
                    document.getElementById("fj13").innerHTML=kinds1_fore[coming1_for[hour1s+1][1]]
                }
                //document.getElementById("fj13").innerHTML=kinds1_for[coming1_for[hour1s+1][0]]
                //document.getElementById("fe3").innerHTML=kinds1_fore[coming1_for[hour1s+1][0]]
                if(coming1_second1[hour1s+1][1]<10){
                    document.getElementById("t13").innerHTML=(hour1s+1)+":0"+(coming1_second1[hour1s+1][1]);
                }
            }else if(l+2 == coming1_second1[hour1s].length){
                console.log("C")
                document.getElementById("t11").innerHTML=(hour1s)+":"+(coming1_second1[hour1s][l]);
                document.getElementById("k11").innerHTML=kinds1[coming1_kind[hour1s][l]]
                console.log("aaa"+Math.round(minute1s/10))
                if(Math.round(second1/10)%2==0){
                    document.getElementById("fj11").innerHTML=kinds1_for[coming1_for[hour1s][l]]
                }else{
                    document.getElementById("k11").innerHTML=kinds1_e[coming1_kind[hour1s][l]]
                    document.getElementById("fj11").innerHTML=kinds1_fore[coming1_for[hour1s][l]]
                }
                ///document.getElementById("fj11").innerHTML=kinds1_for[coming1_for[hour1s][l]]
                ///document.getElementById("fe1").innerHTML=kinds1_fore[coming1_for[hour1s][l]]
                if(coming1_second1[hour1s][l]<10){
                    document.getElementById("t11").innerHTML=(hour1s)+":0"+(coming1_second1[hour1s][l-1]);
                }
                document.getElementById("t12").innerHTML=(hour1s)+":"+(coming1_second1[hour1s][l+1]);
                document.getElementById("k12").innerHTML=kinds1[coming1_kind[hour1s][l+1]]
                if(Math.round(second1/10)%2==0){
                    document.getElementById("fj12").innerHTML=kinds1_for[coming1_for[hour1s][l+1]]
                }else{
                    document.getElementById("k12").innerHTML=kinds1_e[coming1_kind[hour1s][l+1]]
                    document.getElementById("fj12").innerHTML=kinds1_fore[coming1_for[hour1s][l+1]]
                }
                //document.getElementById("fj12").innerHTML=kinds1_for[coming1_for[hour1s][l+1]]
                //document.getElementById("fe2").innerHTML=kinds1_fore[coming1_for[hour1s][l+1]]
                if(coming1_second1[hour1s][l+1]<10){
                    document.getElementById("t12").innerHTML=(hour1s)+":0"+(coming1_second1[hour1s][l+1]);
                }
                document.getElementById("t13").innerHTML=(hour1s+1)+":"+(coming1_second1[hour1s+1][0]);
                document.getElementById("k13").innerHTML=kinds1[coming1_kind[hour1s+1][0]]
                if(Math.round(second1/10)%2==0){
                    document.getElementById("fj13").innerHTML=kinds1_for[coming1_for[hour1s+1][0]]
                }else{
                    document.getElementById("k13").innerHTML=kinds1_e[coming1_kind[hour1s+1][0]]
                    document.getElementById("fj13").innerHTML=kinds1_fore[coming1_for[hour1s+1][0]]
                }
                //document.getElementById("fj13").innerHTML=kinds1_for[coming1_for[hour1s+1][0]]
                //document.getElementById("fe3").innerHTML=kinds1_fore[coming1_for[hour1s+1][0]]
                if(coming1_second1[hour1s+1][0]<10){
                    document.getElementById("t13").innerHTML=(hour1s+1)+":0"+(coming1_second1[hour1s+1][0]);
                }
            }else{
                console.log("D")
                document.getElementById("t11").innerHTML=(hour1s)+":"+(coming1_second1[hour1s][l]);
                document.getElementById("k11").innerHTML=kinds1[coming1_kind[hour1s][l]]
                console.log("aaa"+Math.round(minute1s/10))
                if(Math.round(second1/10)%2==0){
                    document.getElementById("fj11").innerHTML=kinds1_for[coming1_for[hour1s][l]]
                }else{
                    document.getElementById("k11").innerHTML=kinds1_e[coming1_kind[hour1s][l]]
                    document.getElementById("fj11").innerHTML=kinds1_fore[coming1_for[hour1s][l]]
                }
                ///document.getElementById("fj11").innerHTML=kinds1_for[coming1_for[hour1s][l]]
                ///document.getElementById("fe1").innerHTML=kinds1_fore[coming1_for[hour1s][l]]
                if(coming1_second1[hour1s][l]<10){
                    document.getElementById("t11").innerHTML=(hour1s)+":0"+(coming1_second1[hour1s][l]);
                }
                document.getElementById("t12").innerHTML=(hour1s)+":"+(coming1_second1[hour1s][l+1]);
                document.getElementById("k12").innerHTML=kinds1[coming1_kind[hour1s][l+1]]
                if(Math.round(second1/10)%2==0){
                    document.getElementById("fj12").innerHTML=kinds1_for[coming1_for[hour1s][l+1]]
                }else{
                    document.getElementById("k12").innerHTML=kinds1_e[coming1_kind[hour1s][l+1]]
                    document.getElementById("fj12").innerHTML=kinds1_fore[coming1_for[hour1s][l+1]]
                }
                //document.getElementById("fj12").innerHTML=kinds1_for[coming1_for[hour1s][l+1]]
                //document.getElementById("fe2").innerHTML=kinds1_fore[coming1_for[hour1s][l+1]]
                if(coming1_second1[hour1s][l+1]<10){
                    document.getElementById("t12").innerHTML=(hour1s)+":0"+(coming1_second1[hour1s][l+1]);
                }
                document.getElementById("t13").innerHTML=(hour1s)+":"+(coming1_second1[hour1s][l+2]);
                document.getElementById("k13").innerHTML=kinds1[coming1_kind[hour1s][l+2]]
                if(Math.round(second1/10)%2==0){
                    document.getElementById("fj13").innerHTML=kinds1_for[coming1_for[hour1s][l+2]]
                }else{
                    document.getElementById("k13").innerHTML=kinds1_e[coming1_kind[hour1s][l+2]]
                    document.getElementById("fj13").innerHTML=kinds1_fore[coming1_for[hour1s][l+2]]
                }
                ///document.getElementById("fj13").innerHTML=kinds1_for[coming1_for[hour1s][l+2]]
                ///document.getElementById("fe3").innerHTML=kinds1_fore[coming1_for[hour1s][l+2]]
                if(coming1_second1[hour1s][l+2]<10){
                    document.getElementById("t13").innerHTML=(hour1s)+":0"+(coming1_second1[hour1s][l+2]);
                }
            }
            console.log("と")

            nowpos1 += 1;
        }
    }
};

let clear1IntervalFunc = function() {
	clearInterval(timer1);
	time = null;
	n1 = 0;
	textObj1.value = n;
};

start1IntervalFunc();