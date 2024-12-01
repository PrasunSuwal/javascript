//Immediately Invoked Function Expression (IIFE)

(function database(){
    //named iife
    console.log("DB Connected");
})();//; is a must when using iife in order stop our invoked func exe

((name)=>{
    //simple iife/unnamed iife
    console.log(`db connected two ${name}`);
    
})('prasun');