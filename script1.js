
let timer1    = null,
    textObj1  = null,
    exec1Btn  = null,
    clearBtn1 = null,
    n1        = 0;

let start1IntervalFunc = function() {
	if (!timer1) timer1 = setInterval(exec1IntervalFunc, 1000);
};
let coming1_second1 = [ ///到着時間、[0]に入るのは⓪時、[1]が1時
    [13],
    [99,99,99],
    [-1],
    [-1],
    [30,42,54],
    [8,23,40,48,57],///5時代
    [7,11,19,24,31,38,45,50,57],
    [0,7,10,13,17,21,24,27,31,35,38,42,45,49,53,57],
    [2,6,9,13,18,22,27,34,37,44,50,54],
    [1,5,10,15,20,24,27,32,36,45,52,57],
    [2,12,17,22,31,37,46,53,57],//10時代
    [7,13,17,27,33,37,47,53,57],
    [7,13,17,27,33,37,47,53,57],
    [7,13,17,27,33,37,47,53,57],
    [7,13,17,27,33,37,47,53,57],
    [7,13,17,27,33,37,47,53,57],//15時代
    [7,10,17,24,31,36,45,52,55],
    [2,5,10,14,21,29,32,38,42,50,53,56],
    [0,6,9,15,18,25,29,36,40,45,53],
    [0,6,11,19,22,26,30,37,42,45,52,55],
    [0,5,8,12,17,22,27,32,38,42,50,57],///20時
    [2,12,19,22,26,32,37,42,52,57],
    [0,7,13,19,26,37,47],
    [0,12,17,23,36,54],
    [13]
]
let coming1_kind = [
    [5],
    [6,6,6],
    [-1],
    [-1],
    [0,0,0],
    [0,0,0,0,0],///5
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,2,0,2,0],
    [0,2,0,0,0,2,0,0,0,1,1,1],
    [1,1,1,1,1,1,1,1,1],///10
    [1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0],///15
    [0,0,0,0,0,0,0,0,0],
    [0,0,2,0,0,0,0,2,0,0,0,0],
    [0,0,0,0,0,0,0,0,2,0,0],
    [0,0,0,0,2,0,0,0,2,0,0,0],
    [0,2,0,0,0,0,0,0,0,0,0,0],///20
    [0,0,2,0,0,0,0,0,0,0],
    [2,0,0,0,0,0,0],
    [0,0,0,0,3,4],
    [5]
]
let coming1_for = [
    [4],
    [7,7,7],
    [-1],
    [-1],
    [0,0,0],
    [0,0,0,0,0],///5
    [0,0,0,1,0,1,1,1,0],
    [0,0,0,0,2,0,0,0,0,1,0,1,0,0,0,1],
    [1,0,1,1,2,0,0,0,5,1,5,1],
    [2,5,1,0,1,5,0,1,0,0,1,0],
    [1,1,0,1,1,0,0,1,0],///10
    [0,1,0,0,1,0,0,1,0],
    [0,1,0,0,1,0,0,1,0],
    [0,1,0,0,1,0,0,1,0],
    [0,1,0,0,1,0,0,0,0],
    [1,0,0,0,0,0,0,0,0],///15
    [0,0,0,0,0,0,1,1,0],
    [0,0,5,0,0,0,1,5,0,1,0,0],
    [0,0,1,0,1,0,0,0,6,0,1],
    [0,0,1,0,6,1,0,0,5,0,0,1],
    [0,5,0,1,0,1,0,0,0,0,0,0],///20
    [1,0,5,0,0,1,0,0,0,0],
    [5,0,0,0,0,0,0],
    [0,0,1,1,1,3],
    [4]
]
///0:湘南台 1:上永谷
let kinds1=["<div class='jr_lo'>各駅停車</div>","<div class='ra'>快速</div>","<div class='yoko'>横浜線</div>","<div class='jr_lo'>各駅停車</div>","<div class='jr_lo'>各駅停車</div>","<div class='final local'>最終</div>","　"]
let kinds1_e=["<div class='eng jr_lo'>Local</div>","<div class='eng ra'>Rapid</div>","<div class='eng yoko'>Local</div>","<div class='eng jr_lo'>Local</div>","<div class='eng jr_lo'>Local</div>","<div class='eng final jr_lo'>Final</div>","　"]
let kinds1_s=["各駅に停まります","浜松町から快速運転","東神奈川から横浜線直通","南浦和行き 最終電車です","上野行き 最終電車です","蒲田行き 最終電車です","　"]
let kinds1_for=["大　宮","南浦和","赤　羽","上　野","蒲　田","八王子","橋　本","　"]
let kinds1_fore=["Omiya","Minami-Urawa","Akabane","Ueno","蒲田","Hachioji","Hashimoto","　"]
let exec1IntervalFunc = function() {
    let jtime = new Date();
    let hour1 = jtime.getHours();
    let minute1 = jtime.getMinutes();
    let second1 = jtime.getSeconds();
    let nowpos1 = 0
    let minute1s = minute1;
    let hour1s=hour1;
    if(hour1 < 5 && hour1 != 0){
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
                    document.getElementById("s11").innerHTML=kinds1_s[coming1_kind[hour1s+1][0]]
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
                    document.getElementById("s12").innerHTML=kinds1_s[coming1_kind[hour1s+1][1]]
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
                    document.getElementById("s13").innerHTML=kinds1_s[coming1_kind[hour1s+1][2]]
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
                    document.getElementById("s11").innerHTML=kinds1_s[coming1_kind[hour1s][l-1]]
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
                    document.getElementById("s12").innerHTML=kinds1_s[coming1_kind[hour1s+1][0]]
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
                    document.getElementById("s13").innerHTML=kinds1_s[coming1_kind[hour1s+1][1]]
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
                document.getElementById("s11").innerHTML=kinds1_s[coming1_kind[hour1s][l]]
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
                document.getElementById("s12").innerHTML=kinds1_s[coming1_kind[hour1s+1][0]]
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
                document.getElementById("s13").innerHTML=kinds1_s[coming1_kind[hour1s+1][1]]
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
                document.getElementById("s11").innerHTML=kinds1_s[coming1_kind[hour1s][l]]
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
                document.getElementById("s12").innerHTML=kinds1_s[coming1_kind[hour1s][l+1]]
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
                document.getElementById("s13").innerHTML=kinds1_s[coming1_kind[hour1s+1][0]]
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
                document.getElementById("s11").innerHTML=kinds1_s[coming1_kind[hour1s][l]]
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
                document.getElementById("s12").innerHTML=kinds1_s[coming1_kind[hour1s][l+1]]
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
                document.getElementById("s13").innerHTML=kinds1_s[coming1_kind[hour1s][l+2]]
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