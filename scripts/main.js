// let myHeading = document.querySelector('h1')
// myHeading.textContent = 'Hello world!'

// 변수 선언
// var myVariable 
// python에서는 snake_case, js에서는 camelCase/ PascalCase

// 값 할당
// myVariable = 10

// 변수 선언과 할당을 동시에 할 수 있음
var myVariable = 10

console.log(myVariable)

// ES6 이전 문법: var
var myV1 = 1 

// ES6 이후의 최신 문법: let, const
let myV2 = 2

const myV3 = 3

// 선언 할 때 앞에 (var, let, const)와 같은 키워드를 붙이고
// 선언된 변수를 사용할 때는 별다른 키워드 없이 바로 불러올 수 있다. 

myV1 = 10
var myV1 = 100

// let 변수는 재할당이 가능 (변수를 쓸 때 `let`를 사용한다.)
myV2 = 20
// 하지만 let 변수는 재선언은 불가능능
// let myV2 = 20

// const 변수는 재할당이 불가능 (상수값을 쓸 때 `const`를 사용한다.)
// myV3 = 30
// const는 재할당도 재선언도 불가능능
// const myV3 = 30

let a = 'bob'
// string
let b = 10
let c = true
// boolean
let d = [1, 2, 3]
// list는 array라고 부름.
let e = {
    'apple': '사과'
}
// object
// console.log(a, b, c, d, e)

// console.log(1+2)
// console.log("Hello"+"World")

let varA = '10'
let varB = 10

console.log(varA === varB)
console.log(varA == varB)
console.log(varA !== varB)

// Array
let myArray = [1, 2, 3]
myArray.push('hello')
myArray.push('world')
// python의 append()와 비슷한 기능
console.log(myArray)
myArray.pop()
// python의 pop()과 동일
console.log(myArray)
console.log(myArray[0])
// index 접근이 가능하다. 

// Object
let myObject = {
    'apple': '사과',
}
// python에서는 dict [key]로 접근
// js에서는 .으로 접근
console.log(myObject.apple)

myObject.grape = '포도'
// 점(.) 표기법으로 key를 추가하고, 값을 할당할 수 있습니다.
// 기존 객체에 속성을 자유롭게 추가할 수 있습니다.

console.log(myObject)

// 조건문
let iceCream = "chocolate"
if (iceCream === "chocolate") {
    alert("Yay, I love chocolate ice cream!")
// alert는 팝업창을 브라우저에 띄워줌.
}  else if (iceCream === "vanilla") {
    console.log('vanilla')
} else {
    console.log("Awwww, but chocolate is my favourite....")
}

// 반복문
// while문
console.log('---while---')
let i = 0
while (i < 10) {
    console.log(i)
    i++
    // python: i +=1  / i = i + 1
}

// for문 (1)
console.log('---for1---')
for (let i = 0; i < 10; i++) {
    console.log(i)}

// for문 (2)
console.log('---for2---')
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i])}


let arrayA = ['a', 'b', 'c']
// for문 (3)
console.log('---for3---')
for (let i = 0; i < arrayA.length; i++) {
    console.log(arrayA[i])}
    // python 의 len(arrayA) == arrayA.length

// for문 (4)
console.log('---for in---')
for (let index in arrayA) {
    console.log(arrayA[index])}

// for of 와 for each를 가장 많이 쓰게 될 것임

console.log('---for of---')
for (let item of arrayA) {
    console.log(item)
}

console.log('---forEach---')
arrayA.forEach(function(item, index, array){
    console.log(item, index, array)
})

// 함수
// def func():

//  곱셈 함수
function multiply(a, b) {
   let result = a * b
    return result
}

console.log(multiply(10, 20))

// 곱셈 합수 - 함수 표현식
let multiply2 = function(a, b) {
    return a * b
}

console.log(multiply2(10, 20))

// 화살표 함수
let multiply3 = (a, b) => {
    return a * b
}

console.log(multiply3(10, 20))

// 화살표 함수 (1): {}생략 - {}안에 코드가 return하는 문장이 하나만 있다면, {}, return을 생략할 수 있음
let multiply4 = (a, b) => a * b

console.log(multiply4(10, 20))


let multiply5 = (a) => a * 2

console.log(multiply5(10))

// 화살표 함수 (3) // 화살표 함수 (2): ()안에 매개변수가 하나만 있다면, ()를 생략할 수 있음
let multiply6 = a => a * 3

console.log(multiply6(10))

// 화살표 함수 (4)
let multiply7 = a => {
    return a * 4
}

console.log(multiply7(10))

// 이벤트
// onclick: 어디를 클릭하던지 404 팝업창이 alert로 뜸
// document.querySelector('html').onclick = function() {
//     alert('404')
// }

// 이벤트리스너
let myH1 = document.querySelector('h1')
// addEventListener(무슨일이 일어났을때, 무슨 행동을 할지)
myH1.addEventListener('click', function(e){
    // alert('404')
    console.log(e)
    console.log(e.clientX, e.clientY) 
    // 내가 어디를 클릭했는지를 출력
})

let MyImg = document.querySelector('img')
// 이미지태그가 여러개있다면, img에 각 클래스를 달아줘서 찾을 수 있음
MyImg.addEventListener('click', function(){
    let src = MyImg.getAttribute('src')
    if(src === 'images/19.jpg'){
        MyImg.setAttribute('src', 'images/16.jpg')
    }else{
        MyImg.setAttribute('src', 'images/19.jpg')
    }
})

let myInput = document.querySelector('input')

myInput.addEventListener('keydown', function(e){
    // console.log(e)
    console.log(myInput.value)
})
