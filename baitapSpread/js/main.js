let getHeading = ()=>{
    document.getElementsByClassName("heading");
} 
for (let i = 0; i < getHeading.length; i++) {
    let textHeading = getHeading[i].innerText;
    let str = [...textHeading];
    console.log(str)
}