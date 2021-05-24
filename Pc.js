class Pc extends Device {
    static count = 0;
    constructor() {
        super();
        this.id = 'p-' + Pc.count;
        Pc.count++;
    }
}
