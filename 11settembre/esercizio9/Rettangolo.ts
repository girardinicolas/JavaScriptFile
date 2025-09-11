import { Forma } from './Forma';

export class Rettangolo extends Forma {
    private base: number;
    private altezza: number;

    constructor(base: number, altezza: number) {
        super();
        this.base = base;
        this.altezza = altezza;
    }

    public area(): number {
        return this.base * this.altezza;
    }
}

// Test
const rettangolo = new Rettangolo(5, 10);
console.log("Area del rettangolo:", rettangolo.area());
