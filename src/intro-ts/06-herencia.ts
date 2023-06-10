(() => {
    class Person {
        constructor( protected name: string, protected old: number ){};

        toString(): string {
            return `{name: ${this.name}, old: ${this.old}}`;
        };
    }

    class Employee extends Person {
        private sueldo: number;
        constructor( sueldo: number, name: string, old: number ){
            super(name, old);
            this.sueldo = sueldo;
        };

        toString(): string {
            return `{sueldo: ${this.sueldo}}`;
        };
    }
});