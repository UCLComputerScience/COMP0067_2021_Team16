let Slideshow = class{
    slideshow_name: string;
    position: number;
    enabled: boolean;

    constructor(_name,_position,_enabled){
        this.slideshow_name = _name;
        this.position = _position;
        this.enabled = _enabled;
    }
}

export default Slideshow;