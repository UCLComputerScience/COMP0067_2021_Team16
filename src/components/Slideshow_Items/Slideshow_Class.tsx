let Slideshow = class{
    name: string;
    position: number;
    enabled: boolean;

    constructor(_name,_position,_enabled){
        this.name = _name;
        this.position = _position;
        this.enabled = _enabled;
    }
}

export default Slideshow;