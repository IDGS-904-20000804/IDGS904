(() => {
    class PilaInteger {
        private vec: number[] = [];
        insert( x: number ){
            this.vec.push( x );
        }

        extract(){
            (this.vec.length > 0 ) ? this.vec.pop() : null;
        }
    }

    const pila1 = new PilaInteger();
    pila1.insert(1);
    pila1.insert(2);
    pila1.insert(3);
    pila1.extract();

    class PilaString {
        private vec: string[] = [];
        insert( x: string ){
            this.vec.push( x );
        }

        extract(){
            (this.vec.length > 0 ) ? this.vec.pop() : null;
        }
    }
    
    const pila2 = new PilaString();
    pila2.insert('h');
    pila2.insert('o');
    pila2.insert('l');
    pila2.insert('a');
    pila2.extract();

    class Pila<T> {
        private vec: T[] = [];
        insert( x: T ){
            this.vec.push( x );
        }

        extract(){
            (this.vec.length > 0 ) ? this.vec.pop() : null;
        }
    }

    const pila3 = new Pila<boolean>();
    pila3.insert(true);
    pila3.insert(true);
    pila3.insert(false);
    pila3.insert(true);
    pila3.extract();
});