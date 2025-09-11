class Repository<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    all(): T[] {
        return this.items;
    }
}

// Uso con stringhe
const repoStringhe = new Repository<string>();
repoStringhe.add("ciao");
repoStringhe.add("mondo");
console.log(repoStringhe.all());

// Uso con numeri
const repoNumeri = new Repository<number>();
repoNumeri.add(1);
repoNumeri.add(2);
console.log(repoNumeri.all());
