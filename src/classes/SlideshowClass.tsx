let SlideshowClass = class{
    slideshow_name: string;
    position: number;
    enabled: boolean;
    default_id: number;

    constructor(_name,_position,_enabled,_default_id){
        this.slideshow_name = _name;
        this.position = _position;
        this.enabled = _enabled;
        this.default_id = _default_id;
    }
}

export default SlideshowClass;