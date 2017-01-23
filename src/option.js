"use strict";
class Option {

    constructor(value){
        this.value = value;
    }

    isPresent() {
        return (this.value !== null && this.value !== undefined);
    }

    static none(){
        return new Option(null);
    }

    some(callback){
        if (this.isPresent()){
            console.info('THIS in Option : ', this.value);
            callback(this.value);
        }
        return this;
    }

    orElse(callback){
        if (!this.isPresent()){
            callback();
        }
        return this;
    }
}


class ActEditor{
    open(number){

        if (number>0){
            return Promise.resolve(new Option("I have an Act"));
        }else{
            return Promise.resolve(Option.none());
        }
    }
}

class MyController{


    constructor(){
        this.user = 'Nicolas';
    }

    openModal(){

        const actEditor = new ActEditor();

        actEditor.open(12).then(option => {
            option
                .some(value =>console.info('value found ok :', value, this.user))
                .orElse(() => console.info('Should not be there : CANCELED', this.user))
        });

        actEditor.open(-10).then(option => {
            option
                .some(value =>console.info('Should not be there : value found :', value,  this.user))
                .orElse(() => console.info('CANCELED ok', this.user))
        });
    }
}


new MyController().openModal();