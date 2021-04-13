function * genF(){
    yield 1;
    yield 2;
    yield 3;
}

var gen = genF()
console.log(gen.next())
for (const iterator of gen) {
    console.log(iterator)
}