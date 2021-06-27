class Pptp {
    pptp_state = 0; // 0 - no connection established; 1 - connection established

    constructor(role) {
        this.role = role; // 0 - PAC; 1 - PNS
    }

    start_control_connection(sender_ip) {
        console.log("START CONTROL CONNECTION request from: " + sender_ip);
        return "START CONTROL CONNECTION replay";
    }
    stop_control_connection(sender_ip) {
        console.log("STOP CONTROL CONNECTION request from: " + sender_ip);
        return "STOP CONTROL CONNECTION replay";
    }
    echo(sender_ip) {
        console.log("ECHO recieved from: " + sender_ip);
        return "ECHO replay";
    }
    outgoing_call(sender_ip) {
        console.log("OUTGOING CALL request from: " + sender_ip);
        return "OUTGOING CALL replay";
    }
    incomming_call(sender_ip) {
        console.log("INCOMMING CALL request from: " + sender_ip);
        this.pptp_state = 1;
        return "INCOMMING CALL replay";
    }
    call_clear(sender_ip) {
        console.log("CALL CLEAR request from: " + sender_ip);
        this.pptp_state = 0;
        return "CALL CLEAR replay";
    }
    call_disconnected_notify(sender_ip) {
        console.log("CALL DISCONNECTED NOTIFY from: " + sender_ip);
    }
    wan_error_notify(sender_ip) {
        console.log("WAN ERROR NOTIFY from: " + sender_ip);
    }
    set_link_info(sender_ip) {
        console.log("SET LINK INFO from: " + sender_ip);
    }
}