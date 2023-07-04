class Foo {
    static someMethod() {
        console.log('some method');
    }
    anotherMethod() {
        console.log('anothor method');
    }
}

const foo = new Foo(); //foo is instance of Foo
foo.anotherMethod();
Foo.someMethod();