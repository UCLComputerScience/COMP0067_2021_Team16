let Settings = class{
    slide_duration: number;
    animation_speed: number;
    shuffle: boolean;
    audio_option: string;
    default_soundtrack: string;
    
    constructor(_slide_duration: number,_animation_speed: number,_shuffle: boolean,_audio_option: string,_default_soundtrack: string){
        this.slide_duration = _slide_duration;
        this.animation_speed = _animation_speed;
        this.shuffle = _shuffle;
        this.audio_option = _audio_option;
        this.default_soundtrack = _default_soundtrack;
    }


}

export default Settings;