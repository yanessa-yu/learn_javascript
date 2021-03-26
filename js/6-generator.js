function* fun(){
    yield 1;
    yield 2;
    yield 3;
    return 4;
}
var f = fun()
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());


//generator生成器
function * gen(){
    yield 1;
    yield 2;
    yield 3;
}

var g = gen()

// for of 遍历generator对象
for(let i of g){
    console.log(i)
}

//yield*
console.log('---------------------yield*------------------')
function* genA(){
    yield 1;
    yield 2;
}
function* genB(){
    yield 'a';
    // for(let i of genA()){
    //     console.log(i)
    // }
    yield genA();
    yield 'b'
}

for(let i of genB()){
    console.log(i)
}


