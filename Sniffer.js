class Sniffer extends Device {
    static count = 0;
    constructor() {
        super(ip);
        this.id = 's-' + Sniffer.count;
        Sniffer.count++;
    }
}
