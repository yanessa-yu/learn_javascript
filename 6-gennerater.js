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