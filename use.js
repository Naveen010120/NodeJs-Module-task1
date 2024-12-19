function otp(){
    let otp='';
    str=Math.floor(Math.floor(Math.random()*1000));
    otp+=str;
    return otp;
}
function sum(a,b){
    return a+b;
}
module.exports={otp,sum}
