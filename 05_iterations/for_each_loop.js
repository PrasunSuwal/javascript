const coding = ["js", "cpp", "java", "python"]

// coding.forEach( function (item){
//     console.log(item);
    
// })

// coding.forEach( (val)=>{
//     console.log(val);
    
// })

function printMe(item){
    console.log(item);
    
}
// coding.forEach(printMe)

coding.forEach((item, index, arr)=>{
    // console.log(item, index, arr);
    
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileNam: "js"
    },
    {
        languageName: "java",
        languageFileNam: "java"
    },
    {
        languageName: "python",
        languageFileNam: "py"
    }
]

myCoding.forEach( (val)=>{

    console.log(val.languageFileNam);
    
})