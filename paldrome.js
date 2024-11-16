var s=prompt("enter a string")
var s1=s.length
var ispal=false
for(var i=0;i<=s1/2;i++){
if (s[i]==s[s1-1-i]){
ispal=true
break

}
}
if (ispal==true){
    document.write("its a palindrome")

}
else{
    document.write("not a palindrome")
}