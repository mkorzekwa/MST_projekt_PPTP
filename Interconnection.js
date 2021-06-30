class Interconnection {
    static count = 0;
    constructor(device1, device2) {
        this.device1 = device1;
        this.device2 = device2;
        device1.connect_device(device2);
        device2.connect_device(device1);
        this.id = 'i-' + Interconnection.count;
        Interconnection.count++;
        $(document).ready(function() {
            $('#'+(device1.id).toString()).connections({to: '#'+(device2.id).toString(), 'class': 'demo', borderClasses: {
                top: 'connection-border-top',
                right: 'connection-border-right',
                bottom: 'connection-border-bottom',
                left: 'connection-border-left'
            }});
         });
        

    }


}
