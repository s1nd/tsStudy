interface Sb {
    name: string,
    age: number
}

//must implement all properties, can not more or less
let tomCat: Sb = {
    name: "Tom",
    age: 12
}


//optional property
interface Family {
    father: string,
    mother: string,
    son?: string
}

let me: Family = {
    father: 'fafa',
    mother: 'momo'
}

//any property

interface cainiao {
    hight: number,
    [PropNmae: string]: any
    [PropNmae: number]: any
}

let jsCainiao: cainiao = {
    hight: 180,
    name: "js",
    time: "long",
    2: "kdk"
}
console.log(jsCainiao[2])

//readonly
interface user {
    f: boolean,
    readonly id: number
}

let meme: user = {
    f: true,
    id: 12112,
} 

//error
// meme.id = 1;

//error
// let youyou:user = {
//     f:false
// }
