let arr0: number[] = [1, 234, 3, 43]

//success
let arr1: Array<number> = [12, 534, 5, 65]

//error
// let arr2: Array<number> = ["23", 3, 4]

interface arr {
    [i: number]: string
}
//["hn", "jkdos", "j", undefined]
let arr3: arr = ["hn", "jkdos", "j", ]
// console.log(arr3[3] + "\n")



