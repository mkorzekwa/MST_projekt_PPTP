class Device {
    ip_address;
    constructor(ip){
        this.ip_address = ip;
    }
    connect_device(dev) {
        this.conn = dev;
    }
    start_pptp(role) {
        this.pptp_instance = new Pptp(role);
    }
    establish_connection() {
        var replay = "";
        replay = this.conn.pptp_instance.start_control_connection(this.ip_address);
        console.log(replay);
        replay = this.conn.pptp_instance.incomming_call(this.ip_address);
        console.log(replay);
        replay = this.conn.pptp_instance.incomming_call(this.ip_address);
        console.log(replay);
        this.pptp_instance.pptp_state = 1;
    }
    end_connection() {
        replay = "";
        replay = this.conn.pptp_instance.stop_control_connection(this.ip_address);
        console.log(replay);
        replay = this.conn.pptp_instance.call_clear(this.ip_address);
        console.log(replay);
        this.pptp_instance.pptp_state = 0;
    }
}
