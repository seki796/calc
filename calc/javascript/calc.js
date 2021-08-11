var summand = "";//被加数
var addend = "";//加数
var operator = "";

//AC操作
function clickAC(){
    summand="";
    addend="";
    operator="";
    s="";
    document.getElementById("showScreen").value = summand+operator+addend;
}

function clickBack(){
    if(addend.length>0){
        addend = addend.substring(0,addend.length-1);
    }else if(operator.length>0){
        operator = operator.substring(0,operator.length-1);
    }else if(summand.length>0){
        summand = summand.substring(0,summand.length-1);
    }
    document.getElementById("showScreen").value = summand+operator+addend;
} 

function chickNum(num){
    if(operator==""){
        summand = summand+num;
    }else{
        addend = addend+num;
    }
    document.getElementById("showScreen").value = summand+operator+addend;
    console.log("被加数"+summand);
    console.log("加数"+addend);
}

function clickOperator(f){
    if(operator==""&&(summand!=""||s!="")){
        operator = f;
        if(s!=""&& summand==""){
            summand=s;
            s="";
        }
    document.getElementById("showScreen").value = summand+operator;
    }
}
var s = "";
function clickEqual(){
    if(summand!=""&&addend!=""){
        var x = parseFloat(summand);
        var y = parseFloat(addend);
        if(operator=="+"){
            s = x+y+"";
        }else if(operator=="-"){
            s = x-y+"";
        }else if(operator=="*"){
            s = x*y+"";
        }else if(operator=="/"){
            s = x/y+"";      
        }
        document.getElementById("showScreen").value = s;
        //清理工作
        summand="";
        addend="";
        operator="";
    }else{
        alert("请输入需要做运算的两个数字")
    }
}

function clickDot(){
    if (operator==""){
        if(summand.length>0 && summand.indexOf(".")== -1){
            summand = summand+".";
        }
        
    }else{
        if(addend.length>0 && addend.indexOf(".")== -1){
            addend = addend+".";
        }
    }
    document.getElementById("showScreen").value = summand+operator+addend;
}