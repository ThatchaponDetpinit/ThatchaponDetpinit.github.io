let check = function(str){
    regexp = /^[A-Z]/;
    if (regexp.test(str)){
        console.log(str+" has the first character as uppercase")
    } else{
        console.log(str+" does not have the first character as uppercase")
    }
}

check("Kku")
check("kku")

