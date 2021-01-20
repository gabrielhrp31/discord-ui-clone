import { action, makeObservable, observable } from "mobx";



export default class Store {
    @observable public open: string = "";

    constructor() {
        makeObservable(this);
    }

    @action.bound
    setOpen(value: string) {
        this.open = value;
    }
}
