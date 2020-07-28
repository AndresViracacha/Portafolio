var a =0;

for(var i=1; i<=100000000;i++){
    var signo = Math.pow(-1,i-1)
    var a = a + (1/(i*2-1))*signo;
}

document.write(a*4)
