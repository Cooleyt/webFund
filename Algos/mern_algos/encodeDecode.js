//You are given a string that may contain sequences of consecutive characters.
//Create a function to shorten a string by including the character, then the 
//number of times it appears. For "aaaabbcddd" return "a4b2c1d3"
//no built in functions!!!! parseInt() is ok
const encode = (str) => {
    var output = "";
    var count = 1;
    output += str[0];
    for(var i = 1; i < str.length; ++i){
        if(str[i] === str[i-1]){
            ++count;
        }else{
            output += count;
            output += str[i];
            count -1;
        }
    }
    output += count;
    return output;
}

// console.log(encode("aaabbcccc"));
// console.log(encode("ddddeeeeeffgggg"));
// console.log(encode("aaaaabbbbbbbc"));
// console.log(encode("bb"));

//given an encoded string, decode and return it
//given "a3b2c1d3" return "aaabbcddd"
//parseInt() is ok
//special note: can your function handle "g14f12"?
const decode = (str) => {
    var output="";
    var num;
    var char = "";
    for(var i = 0; i < str.length; ++i){
        if(!isNaN(str[i])){
            num += str[i];
        }else{
            output += char.repeat(parseInt(num));
            char = str[i];
            num ="";
        }
    }
    output += char.repeat(parseInt(num));
    return output;   
}

console.log(decode("a3b2c4"));
console.log(decode("t2h10j4"));