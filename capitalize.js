let format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const capitalize = (str) => {
    if(str.length === 0) return "ERROR";
    else if(typeof str !== "string") return"ERROR";
    else if(str[0] === str[0].toUpperCase) return str;
    else if(!isNaN(Number(str[0]))) return 'ERROR';
    else if(format.test(str)) return 'ERROR';
    return str[0].toUpperCase()+str.slice(1);
}

module.exports=capitalize;