var Repository = /** @class */ (function () {
    function Repository() {
        this.items = [];
    }
    Repository.prototype.add = function (item) {
        this.items.push(item);
    };
    Repository.prototype.all = function () {
        return this.items;
    };
    return Repository;
}());
// Uso con stringhe
var repoStringhe = new Repository();
repoStringhe.add("ciao");
repoStringhe.add("mondo");
console.log(repoStringhe.all());
// Uso con numeri
var repoNumeri = new Repository();
repoNumeri.add(1);
repoNumeri.add(2);
console.log(repoNumeri.all());
