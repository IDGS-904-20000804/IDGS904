(() => {
    class Person {
        name: string = "No name";
        old: number = 0;
        constructor( name: string, old: number ){
            this.name = name;
            this.old = old;
        };

        toString(): string {
            return `{name: ${this.name}, old: ${this.old}}`;
        };
    }

    const ivan: Person = new Person( 'Ivan', 20 );
    console.log(ivan.toString());


    class Dado {
        private valor: number = 0;
        
        public drop(){
            this.generate();
        }
        
        private generate(){
            this.valor = ( Math.random() * 6 ) + 1;
        }

        toString(): string {
            return `{valor: ${this.valor}}`;
        };
    }

    const dado1: Dado = new Dado();
    dado1.drop();
    dado1.toString();

    class Person2 {
        constructor( public name: string, public old: number ){};

        toString(): string {
            return `{name: ${this.name}, old: ${this.old}}`;
        };
    }

    const ivan2: Person2 = new Person2( 'Ivan', 20 );
    console.log( ivan2.toString() );

});