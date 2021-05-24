class Router extends Device {
    static count = 0;
    constructor() {
        super();
        this.id = 'r-' + Router.count;
        Router.count++;
    }
}
