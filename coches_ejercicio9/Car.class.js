export class Car{
    #id;
    year; make; model; type;

    constructor(id, make){
        this.#id = id;
        this.make = make;
    }

    get id(){
        return this.#id;
    }

    set id(id){
        this.#id = id;
    }

    get year(){
        return this.year;
    }

    set year(year){
        this.year = year;
    }

    get make(){
        return this.make;
    }

    set make(make){
        this.make = make;
    }

    get model(){
        return this.model;
    }

    set model(model){
        this.model = model;
    }

    get type(){
        return this.type;
    }

    set type(type){
        this.type = type;
    }
}