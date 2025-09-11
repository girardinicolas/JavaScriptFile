var Anime = /** @class */ (function () {
    function Anime(name, description, image, toWatch, ongoing, seen) {
        if (toWatch === void 0) { toWatch = false; }
        if (ongoing === void 0) { ongoing = false; }
        if (seen === void 0) { seen = false; }
        this.name = name;
        this.description = description;
        this.image = image;
        this.toWatch = toWatch;
        this.ongoing = ongoing;
        this.seen = seen;
    }
    Anime.prototype.displayInfo = function () {
        return "".concat(this.name, ": ").concat(this.description);
    };
    return Anime;
}());
