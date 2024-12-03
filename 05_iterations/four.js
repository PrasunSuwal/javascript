const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb:'ruby'
}

for (const key in myObject) {
    // console.log(`${key} shortuct is for ${myObject[key]}`);
    
}

const programming = ["js", "rb", "cpp"]
for (const key in programming) {
    // console.log(programming[key]);//gives value
    // console.log(key[key]);//gives key

}

const map = new Map()
map.set('NP', "Nepal")
map.set('IN', "INDIA")
map.set('Fr', "France")

for (const key in map) {
    console.log(key);
}
