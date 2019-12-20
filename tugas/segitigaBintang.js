for(let i=9; i>0; i--){
    console.log("*".repeat(i));
 }

 function BuatPiramid(maxbintang)
{
for(let baris=0;baris<maxbintang;baris++) {
let output="";
    for(let kolom=0;kolom<maxbintang-baris;kolom++) {
        output+=" ";
    }
    for(let btg=0;btg<=baris;btg++) {    
       output += "* ";
    }
    console.log(output);  
}  
}
BuatPiramid('12')