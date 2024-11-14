
let timer2    = null,
    textObj2  = null,
    exec2Btn  = null,
    clearBtn2 = null,
    n2        = 0;

let start2IntervalFunc = function() {
	if (!timer2) timer2 = setInterval(exec2IntervalFunc, 1000);
};
let coming2_second2 = [ ///到着時間、[0]に入るのは⓪時、[1]が1時
    [7,13,21,30,34,40],
    [99,99,99],
    [-1],
    [-1],
    [42,55],
    [27,40,53],///5時代
    [2,12,20,24,28,36,45,51,56],
    [4,12,15,20,29,32,35,42,45,50,56],
    [1,5,9,15,19,23,28,32,36,39,43,47,50,53],
    [0,3,10,14,17,24,27,32,36,39,43,51,57],
    [3,8,12,18,24,30,33,41,44,49,53],//10時代
    [0,10,15,20,30,35,40,50,54],
    [0,10,15,20,30,34,40,50,55],
    [0,10,14,20,30,35,40,50,54],
    [0,10,14,20,30,34,40,50,55],
    [0,10,14,20,30,34,39,49,55],//15時代
    [0,10,14,22,31,34,41,51,54],
    [0,4,10,19,24,29,39,44,49,56],
    [0,4,8,15,23,29,34,37,41,47,52,55],
    [0,9,12,16,22,25,31,35,40,47,53,57],
    [4,9,14,17,25,28,35,39,45,49,56],///20時
    [1,10,20,25,30,35,41,50,55],
    [2,5,12,16,20,32,43,55],
    [7,13,21,25,33,43,49,57],
    [7,13,21,30,34,40]
]
let coming2_kind = [
    [0,0,0,1,0,2],
    [3,3,3],
    [-1],
    [-1],
    [0,0],
    [0,0,0],///5
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],///10
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],///15
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],///20
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,1,0,2]
]
let coming2_for = [
    [0,1,1,0,1,1],
    [3,3,3],
    [-1],
    [-1],
    [0,0],
    [0,0,0],///5
    [0,0,0,0,0,0,0,1,0],
    [0,0,1,0,0,1,0,1,0,1,0],
    [1,0,0,0,1,0,0,1,0,0,0,0,1,0],
    [0,1,0,0,1,0,1,0,0,1,0,0,1],
    [0,0,1,0,1,0,1,0,1,0,1],///10
    [0,0,1,0,0,1,0,0,1],
    [0,0,1,0,0,1,0,0,1],
    [0,0,1,0,0,1,0,0,1],
    [0,0,1,0,0,1,0,0,1],
    [0,0,1,0,0,1,0,0,0],///15
    [0,0,1,0,0,1,0,0,1],
    [0,1,0,0,1,0,0,1,0,0],
    [1,0,1,0,0,0,0,1,0,0,1,0],
    [0,0,1,0,0,1,0,1,0,1,0,1],
    [0,1,0,1,0,1,0,1,0,1,0],///20
    [1,0,0,1,0,1,0,0,1],
    [0,1,0,1,0,0,0,0],
    [0,1,0,1,0,0,1,0],
    [0,1,1,0,1,1]
]
///0:大船 1:磯子
let kinds2=["<div class='jr_lo'>各駅停車</div>","<div class='jr_lo'>各駅停車</div>","<div class='final local'>最終</div>","　"]
let kinds2_e=["<div class='eng jr_lo'>Local</div>","<div class='eng yoko'>Local</div>","<div class='eng final jr_lo'>Final</div>","　"]
let kinds2_s=["各駅に停まります","大船行き 最終電車です","磯子行き 最終電車です","　"]
let kinds2_for=["大　船","磯　子","　"]
let kinds2_fore=["Ofuna","Isogo","　"]
let exec2IntervalFunc = function() {
    let jtime = new Date();
    let hour2 = jtime.getHours();
    let minute2 = jtime.getMinutes();
    let second2 = jtime.getSeconds();
    let nowpos2 = 0
    let minute2s = minute2;
    let hour2s=hour2;
    if(hour2 < 5 && hour2 != 0){
        hour2s = 5;
        minute2s = 0;
    }
    for(let l=0;nowpos2 != 1;l+=1){
        if(coming2_second2[hour2s][l] <= minute2s){
            console.log("A")
            continue;
        }else{
            console.log(l)
            console.log(coming2_second2[hour2s].length)
            if(l == coming2_second2[hour2s].length){
                console.log("B"+coming2_second2[hour2s][l-1])
                if(coming2_second2[hour2s][l-1] <= minute2){
                    console.log("BD")
                    document.getElementById("t21").innerHTML=(hour2s+1)+":"+(coming2_second2[hour2s+1][0]);
                    document.getElementById("k21").innerHTML=kinds2[coming2_kind[hour2s+1][0]]
                    console.log("a"+Math.round(minute2s/10))
                    if(Math.round(second2/10)%2==0){
                        document.getElementById("fj21").innerHTML=kinds2_for[coming2_for[hour2s+1][0]]
                    }else{
                        document.getElementById("k21").innerHTML=kinds2_e[coming2_kind[hour2s+1][0]]
                        document.getElementById("fj21").innerHTML=kinds2_fore[coming2_for[hour2s+1][0]]
                    }
                    document.getElementById("s21").innerHTML=kinds2_s[coming2_kind[hour2s+1][0]]
                    ///document.getElementById("fj21").innerHTML=kinds2_for[coming2_for[hour2s][l]]
                    ///document.getElementById("fe1").innerHTML=kinds2_fore[coming2_for[hour2s][l]]
                    if(coming2_second2[hour2s+1][0]<10){
                        document.getElementById("t21").innerHTML=(hour2s+1)+":0"+(coming2_second2[hour2s+1][0]);
                    }
                    document.getElementById("t22").innerHTML=(hour2s+1)+":"+(coming2_second2[hour2s+1][1]);
                    document.getElementById("k22").innerHTML=kinds2[coming2_kind[hour2s+1][1]]
                    if(Math.round(second2/10)%2==0){
                        document.getElementById("fj22").innerHTML=kinds2_for[coming2_for[hour2s+1][1]]
                    }else{
                        document.getElementById("k22").innerHTML=kinds2_e[coming2_kind[hour2s+1][1]]
                        document.getElementById("fj22").innerHTML=kinds2_fore[coming2_for[hour2s+1][1]]
                    }
                    document.getElementById("s22").innerHTML=kinds2_s[coming2_kind[hour2s+1][1]]
                    //document.getElementById("fj22").innerHTML=kinds2_for[coming2_for[hour2s][l+1]]
                    //document.getElementById("fe2").innerHTML=kinds2_fore[coming2_for[hour2s][l+1]]
                    if(coming2_second2[hour2s+1][1]<10){
                        document.getElementById("t22").innerHTML=(hour2s+1)+":0"+(coming2_second2[hour2s+1][1]);
                    }
                    document.getElementById("t23").innerHTML=(hour2s+1)+":"+(coming2_second2[hour2s+1][2]);
                    document.getElementById("k23").innerHTML=kinds2[coming2_kind[hour2s+1][2]]
                    if(Math.round(second2/10)%2==0){
                        document.getElementById("fj23").innerHTML=kinds2_for[coming2_for[hour2s+1][2]]
                    }else{
                        document.getElementById("k23").innerHTML=kinds2_e[coming2_kind[hour2s+1][2]]
                        document.getElementById("fj23").innerHTML=kinds2_fore[coming2_for[hour2s+1][2]]
                    }
                    document.getElementById("s23").innerHTML=kinds2_s[coming2_kind[hour2s+1][2]]
                    ///document.getElementById("fj23").innerHTML=kinds2_for[coming2_for[hour2s][l+2]]
                    ///document.getElementById("fe3").innerHTML=kinds2_fore[coming2_for[hour2s][l+2]]
                    if(coming2_second2[hour2s+1][2]<10){
                        document.getElementById("t23").innerHTML=(hour2s+1)+":0"+(coming2_second2[hour2s+1][2]);
                    }
                }else{
                    console.log("BB")
                    document.getElementById("t21").innerHTML=(hour2s)+":"+(coming2_second2[hour2s][l-1]);
                    document.getElementById("k21").innerHTML=kinds2[coming2_kind[hour2s][l-1]]
                    if(Math.round(second2/10)%2==0){
                        document.getElementById("fj21").innerHTML=kinds2_for[coming2_for[hour2s][l-1]]
                    }else{
                        document.getElementById("k21").innerHTML=kinds2_e[coming2_kind[hour2s][l-1]]
                        document.getElementById("fj21").innerHTML=kinds2_fore[coming2_for[hour2s][l-1]]
                    }
                    document.getElementById("s21").innerHTML=kinds2_s[coming2_kind[hour2s][l-1]]
                    ///document.getElementById("fj21").innerHTML=kinds2_for[coming2_for[hour2s][l-1]]
                    ///document.getElementById("fe1").innerHTML=kinds2_fore[coming2_for[hour2s][l-1]]
                    if(coming2_second2[hour2s][l-1]<10){
                        document.getElementById("t21").innerHTML=(hour2s)+":0"+(coming2_second2[hour2s][l-1]);
                    }
                    document.getElementById("t22").innerHTML=(hour2s+1)+":"+(coming2_second2[hour2s+1][0]);
                    document.getElementById("k22").innerHTML=kinds2[coming2_kind[hour2s+1][0]]
                    if(Math.round(second2/10)%2==0){
                        document.getElementById("fj22").innerHTML=kinds2_for[coming2_for[hour2s+1][0]]
                    }else{
                        document.getElementById("k22").innerHTML=kinds2_e[coming2_kind[hour2s+1][0]]
                        document.getElementById("fj22").innerHTML=kinds2_fore[coming2_for[hour2s+1][0]]
                    }
                    document.getElementById("s22").innerHTML=kinds2_s[coming2_kind[hour2s+1][0]]
                    //document.getElementById("fj22").innerHTML=kinds2_for[coming2_for[hour2s+1][0]]
                    //document.getElementById("fe2").innerHTML=kinds2_fore[coming2_for[hour2s+1][0]]
                    if(coming2_second2[hour2s+1][0]<10){
                        document.getElementById("t22").innerHTML=(hour2s+1)+":0"+(coming2_second2[hour2s+1][0]);
                    }
                    document.getElementById("t23").innerHTML=(hour2s+1)+":"+(coming2_second2[hour2s+1][1]);
                    document.getElementById("k23").innerHTML=kinds2[coming2_kind[hour2s+1][1]]
                    if(Math.round(second2/10)%2==0){
                        document.getElementById("fj23").innerHTML=kinds2_for[coming2_for[hour2s+1][1]]
                    }else{
                        document.getElementById("k23").innerHTML=kinds2_e[coming2_kind[hour2s+1][1]]
                        document.getElementById("fj23").innerHTML=kinds2_fore[coming2_for[hour2s+1][1]]
                    }
                    document.getElementById("s23").innerHTML=kinds2_s[coming2_kind[hour2s+1][1]]
                    //document.getElementById("fj23").innerHTML=kinds2_for[coming2_for[hour2s+1][1]]
                    //document.getElementById("fe3").innerHTML=kinds2_fore[coming2_for[hour2s+1][1]]
                    if(coming2_second2[hour2s+1][1]<10){
                        document.getElementById("t23").innerHTML=(hour2s+1)+":0"+(coming2_second2[hour2s+1][1]);
                    }
                }
            }else if(l+1 == coming2_second2[hour2s].length){
                console.log("I")
                document.getElementById("t21").innerHTML=(hour2s)+":"+(coming2_second2[hour2s][l]);
                document.getElementById("k21").innerHTML=kinds2[coming2_kind[hour2s][l]]
                console.log("aaa"+Math.round(minute2s/10))
                if(Math.round(second2/10)%2==0){
                    document.getElementById("fj21").innerHTML=kinds2_for[coming2_for[hour2s][l]]
                }else{
                    document.getElementById("k21").innerHTML=kinds2_e[coming2_kind[hour2s][l]]
                    document.getElementById("fj21").innerHTML=kinds2_fore[coming2_for[hour2s][l]]
                }
                document.getElementById("s21").innerHTML=kinds2_s[coming2_kind[hour2s][l]]
                ///document.getElementById("fj21").innerHTML=kinds2_for[coming2_for[hour2s][l]]
                ///document.getElementById("fe1").innerHTML=kinds2_fore[coming2_for[hour2s][l]]
                if(coming2_second2[hour2s][l]<10){
                    document.getElementById("t21").innerHTML=(hour2s)+":0"+(coming2_second2[hour2s][l]);
                }
                document.getElementById("t22").innerHTML=(hour2s)+":"+(coming2_second2[hour2s+1][0]);
                document.getElementById("k22").innerHTML=kinds2[coming2_kind[hour2s+1][0]]
                if(Math.round(second2/10)%2==0){
                    document.getElementById("fj22").innerHTML=kinds2_for[coming2_for[hour2s+1][0]]
                }else{
                    document.getElementById("k22").innerHTML=kinds2_e[coming2_kind[hour2s+1][0]]
                    document.getElementById("fj22").innerHTML=kinds2_fore[coming2_for[hour2s+1][0]]
                }
                document.getElementById("s22").innerHTML=kinds2_s[coming2_kind[hour2s+1][0]]
                //document.getElementById("fj22").innerHTML=kinds2_for[coming2_for[hour2s][l+1]]
                //document.getElementById("fe2").innerHTML=kinds2_fore[coming2_for[hour2s][l+1]]
                if(coming2_second2[hour2s+1][0]<10){
                    document.getElementById("t22").innerHTML=(hour2s+1)+":0"+(coming2_second2[hour2s+1][0]);
                }
                document.getElementById("t23").innerHTML=(hour2s+1)+":"+(coming2_second2[hour2s+1][1]);
                document.getElementById("k23").innerHTML=kinds2[coming2_kind[hour2s+1][1]]
                if(Math.round(second2/10)%2==0){
                    document.getElementById("fj23").innerHTML=kinds2_for[coming2_for[hour2s+1][1]]
                }else{
                    document.getElementById("k23").innerHTML=kinds2_e[coming2_kind[hour2s+1][1]]
                    document.getElementById("fj23").innerHTML=kinds2_fore[coming2_for[hour2s+1][1]]
                }
                document.getElementById("s23").innerHTML=kinds2_s[coming2_kind[hour2s+1][1]]
                //document.getElementById("fj23").innerHTML=kinds2_for[coming2_for[hour2s+1][0]]
                //document.getElementById("fe3").innerHTML=kinds2_fore[coming2_for[hour2s+1][0]]
                if(coming2_second2[hour2s+1][1]<10){
                    document.getElementById("t23").innerHTML=(hour2s+1)+":0"+(coming2_second2[hour2s+1][1]);
                }
            }else if(l+2 == coming2_second2[hour2s].length){
                console.log("C")
                document.getElementById("t21").innerHTML=(hour2s)+":"+(coming2_second2[hour2s][l]);
                document.getElementById("k21").innerHTML=kinds2[coming2_kind[hour2s][l]]
                console.log("aaa"+Math.round(minute2s/10))
                if(Math.round(second2/10)%2==0){
                    document.getElementById("fj21").innerHTML=kinds2_for[coming2_for[hour2s][l]]
                }else{
                    document.getElementById("k21").innerHTML=kinds2_e[coming2_kind[hour2s][l]]
                    document.getElementById("fj21").innerHTML=kinds2_fore[coming2_for[hour2s][l]]
                }
                document.getElementById("s21").innerHTML=kinds2_s[coming2_kind[hour2s][l]]
                ///document.getElementById("fj21").innerHTML=kinds2_for[coming2_for[hour2s][l]]
                ///document.getElementById("fe1").innerHTML=kinds2_fore[coming2_for[hour2s][l]]
                if(coming2_second2[hour2s][l]<10){
                    document.getElementById("t21").innerHTML=(hour2s)+":0"+(coming2_second2[hour2s][l-1]);
                }
                document.getElementById("t22").innerHTML=(hour2s)+":"+(coming2_second2[hour2s][l+1]);
                document.getElementById("k22").innerHTML=kinds2[coming2_kind[hour2s][l+1]]
                if(Math.round(second2/10)%2==0){
                    document.getElementById("fj22").innerHTML=kinds2_for[coming2_for[hour2s][l+1]]
                }else{
                    document.getElementById("k22").innerHTML=kinds2_e[coming2_kind[hour2s][l+1]]
                    document.getElementById("fj22").innerHTML=kinds2_fore[coming2_for[hour2s][l+1]]
                }
                document.getElementById("s22").innerHTML=kinds2_s[coming2_kind[hour2s][l+1]]
                //document.getElementById("fj22").innerHTML=kinds2_for[coming2_for[hour2s][l+1]]
                //document.getElementById("fe2").innerHTML=kinds2_fore[coming2_for[hour2s][l+1]]
                if(coming2_second2[hour2s][l+1]<10){
                    document.getElementById("t22").innerHTML=(hour2s)+":0"+(coming2_second2[hour2s][l+1]);
                }
                document.getElementById("t23").innerHTML=(hour2s+1)+":"+(coming2_second2[hour2s+1][0]);
                document.getElementById("k23").innerHTML=kinds2[coming2_kind[hour2s+1][0]]
                if(Math.round(second2/10)%2==0){
                    document.getElementById("fj23").innerHTML=kinds2_for[coming2_for[hour2s+1][0]]
                }else{
                    document.getElementById("k23").innerHTML=kinds2_e[coming2_kind[hour2s+1][0]]
                    document.getElementById("fj23").innerHTML=kinds2_fore[coming2_for[hour2s+1][0]]
                }
                document.getElementById("s23").innerHTML=kinds2_s[coming2_kind[hour2s+1][0]]
                //document.getElementById("fj23").innerHTML=kinds2_for[coming2_for[hour2s+1][0]]
                //document.getElementById("fe3").innerHTML=kinds2_fore[coming2_for[hour2s+1][0]]
                if(coming2_second2[hour2s+1][0]<10){
                    document.getElementById("t23").innerHTML=(hour2s+1)+":0"+(coming2_second2[hour2s+1][0]);
                }
            }else{
                console.log("D")
                document.getElementById("t21").innerHTML=(hour2s)+":"+(coming2_second2[hour2s][l]);
                document.getElementById("k21").innerHTML=kinds2[coming2_kind[hour2s][l]]
                console.log("aaa"+Math.round(minute2s/10))
                if(Math.round(second2/10)%2==0){
                    document.getElementById("fj21").innerHTML=kinds2_for[coming2_for[hour2s][l]]
                }else{
                    document.getElementById("k21").innerHTML=kinds2_e[coming2_kind[hour2s][l]]
                    document.getElementById("fj21").innerHTML=kinds2_fore[coming2_for[hour2s][l]]
                }
                document.getElementById("s21").innerHTML=kinds2_s[coming2_kind[hour2s][l]]
                ///document.getElementById("fj21").innerHTML=kinds2_for[coming2_for[hour2s][l]]
                ///document.getElementById("fe1").innerHTML=kinds2_fore[coming2_for[hour2s][l]]
                if(coming2_second2[hour2s][l]<10){
                    document.getElementById("t21").innerHTML=(hour2s)+":0"+(coming2_second2[hour2s][l]);
                }
                document.getElementById("t22").innerHTML=(hour2s)+":"+(coming2_second2[hour2s][l+1]);
                document.getElementById("k22").innerHTML=kinds2[coming2_kind[hour2s][l+1]]
                if(Math.round(second2/10)%2==0){
                    document.getElementById("fj22").innerHTML=kinds2_for[coming2_for[hour2s][l+1]]
                }else{
                    document.getElementById("k22").innerHTML=kinds2_e[coming2_kind[hour2s][l+1]]
                    document.getElementById("fj22").innerHTML=kinds2_fore[coming2_for[hour2s][l+1]]
                }
                document.getElementById("s22").innerHTML=kinds2_s[coming2_kind[hour2s][l+1]]
                //document.getElementById("fj22").innerHTML=kinds2_for[coming2_for[hour2s][l+1]]
                //document.getElementById("fe2").innerHTML=kinds2_fore[coming2_for[hour2s][l+1]]
                if(coming2_second2[hour2s][l+1]<10){
                    document.getElementById("t22").innerHTML=(hour2s)+":0"+(coming2_second2[hour2s][l+1]);
                }
                document.getElementById("t23").innerHTML=(hour2s)+":"+(coming2_second2[hour2s][l+2]);
                document.getElementById("k23").innerHTML=kinds2[coming2_kind[hour2s][l+2]]
                if(Math.round(second2/10)%2==0){
                    document.getElementById("fj23").innerHTML=kinds2_for[coming2_for[hour2s][l+2]]
                }else{
                    document.getElementById("k23").innerHTML=kinds2_e[coming2_kind[hour2s][l+2]]
                    document.getElementById("fj23").innerHTML=kinds2_fore[coming2_for[hour2s][l+2]]
                }
                document.getElementById("s23").innerHTML=kinds2_s[coming2_kind[hour2s][l+2]]
                ///document.getElementById("fj23").innerHTML=kinds2_for[coming2_for[hour2s][l+2]]
                ///document.getElementById("fe3").innerHTML=kinds2_fore[coming2_for[hour2s][l+2]]
                if(coming2_second2[hour2s][l+2]<10){
                    document.getElementById("t23").innerHTML=(hour2s)+":0"+(coming2_second2[hour2s][l+2]);
                }
            }
            console.log("と")

            nowpos2 += 1;
        }
    }
};

let clear2IntervalFunc = function() {
	clearInterval(timer2);
	time = null;
	n2 = 0;
	textObj2.value = n;
};

start2IntervalFunc();