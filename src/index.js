const Emitter = require('./emitter');

const STATUS = {
    PENDING: 0,
    FULFILLED: 1,
    REJECTED: 2,
}

class Promise {
    constructor(callback) {
        this.callback = callback;
        this.emitter = new Emitter();
        this.status = STATUS.PENDING;

        this._start();
    }

    _start() {
        this.callback(this._resolve.bind(this), this._reject.bind(this));
    }

    _resolve(value) {
        if (this.status === STATUS.PENDING) {
            this.status = STATUS.FULFILLED;
            setTimeout(() => this.emitter.trigger(STATUS.FULFILLED, value), 0);
        }
    }

    _reject(error) {
        if (this.status === STATUS.PENDING) {
            this.status = STATUS.REJECTED;
            setTimeout(() => this.emitter.trigger(STATUS.REJECTED, error), 0);
        }
    }

    then(onFulfill, onReject) {
        if (onFulfill) {
            this.emitter.addListener(STATUS.FULFILLED, onFulfill);
        }
        if (onReject) {
            this.emitter.addListener(STATUS.REJECTED, onReject);
        }
        return this;
    }

    catch(callback) {
        if(callback) {
            this.emitter.addListener(STATUS.REJECTED, callback);
        }
        return this;
    }
}

module.exports = Promise;