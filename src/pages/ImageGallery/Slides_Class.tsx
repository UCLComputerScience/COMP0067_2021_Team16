let Slides = class{
    name: string;
    position: number;
    src: string;
    selected: boolean;
    recording: number;
    default_recording: number;

    constructor(_name:string,_src:string,_position:number,_recording:number,_default_recording:number){
        this.name = _name;
        this.src = _src;
        this.position = _position;
        this.selected = false;
        this.recording = _recording;
        this.default_recording = _default_recording;
    }
}

export default Slides;