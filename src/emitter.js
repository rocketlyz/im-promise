class Emitter {
    constructor(key) {
       this.listeners = new Map();
    }

    addListener(key, callback) {
        let fns = this.listeners.get(key);
        if(!fns) {
            fns = new Set();
            fns.add(callback);
            this.listeners.set(key, fns);
        } else {
            fns.add(callback)
        }
    }

    removeListener(key, callback) {
        let fns = this.listeners.get(key);
        if (fns) {
            return fns.delete(callback);
        }
    }

    trigger(key, value) {
        let fns = this.listeners.get(key);
        if(fns) {
            fns.forEach(callback => {
                if(callback) callback(value);
            });
        }
    }
}

module.exports =  Emitter;