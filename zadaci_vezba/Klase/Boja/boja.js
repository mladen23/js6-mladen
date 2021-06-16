export class Boja {
    constructor ( nm, zasicenje, intenzitet ){
        this.nm = nm;
        this.zasicenje = zasicenje;
        this.intenzitet = intenzitet;
    }

    set nm (nm){this._nm = nm};
    set zasicenje (zasicenje) {this._zasicenje = zasicenje};
    set intenzitet (intenzitet) {this._intenzitet = intenzitet};

    get nm (){return this._nm};
    get zasicenje (){return this._zasicenje};
    get intenzitet(){return this._intenzitet};
}