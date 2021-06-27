class Interconnection {
    static count = 0;
    constructor(device1, device2) {
        this.device1 = device1;
        this.device2 = device2;
        device1.connect_device(device2);
        device2.connect_device(device1);
        this.id = 'i-' + Interconnection.count;
        Interconnection.count++;
    }
}
