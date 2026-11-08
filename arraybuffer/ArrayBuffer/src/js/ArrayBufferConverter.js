export default class ArrayBufferConverter {
    load(buffer) {
        this.buffer = buffer;
    }

    toString() {
        const newBuffer = new Uint16Array(this.buffer);
        let result = "";

        for(let i = 0; i < newBuffer.length; i += 1) {
            result += String.fromCharCode(newBuffer[i]);
        }

        return result;
    }
}