export class Cart {
    static instance = new Cart();
    items = [];

    constructor() {
        this._load();
    }

    addItem(item) {
        this.items.push(item);
        this._save();
    }

    removeItem(id) {
        this.items = this.items.filter(item => item !== id);
        this._save();
    }

    getItems() {
        return this.items;
    }

    clear() {
        this.items = [];
        this._save();
    }

    _save() {
        localStorage.setItem('items', JSON.stringify(this.items));
    }
    _load() {
        this.items = JSON.parse(localStorage.getItem('items'));
    }
}