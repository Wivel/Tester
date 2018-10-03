
function getOST(num1,delitnum) {
    var flager = 0;
    while (num1>delitnum){
        num1-=delitnum;
        flager++;
    }
    return flager
}