let Settings_Class = class{
    
    //default values
    default_slide_duration:number = 5000;
    default_animation_speed:number = 400;
    default_shuffle:boolean = false;
    default_audio_option:string = "Music and Recordings";
    default_soundtrack:string = null;

    //ranges
    min_slide_duration = 1000;
    max_slide_duration = 20000;
    min_animation_speed = 0;
    max_animation_speed = 20000;
    audio_option_choices:Array<string> = ["Mute","Music only","Recording only","Music and Recordings"];

    
    slide_duration: number;
    animation_speed: number;
    shuffle: boolean;
    audio_option: string;
    background_soundtrack: string;
    
    constructor(){
        
        if(localStorage.getItem("slide_duration")){
            this.slide_duration = parseFloat(localStorage.getItem("slide_duration"));
        }
        else{
            this.set_slide_duration(this.default_slide_duration);
        }
        
        if(localStorage.getItem("animation_speed")){
            this.animation_speed = parseFloat(localStorage.getItem("animation_speed"));
        }
        else{
            this.set_animation_speed(this.default_animation_speed);
        }
        
        if(localStorage.getItem("shuffle")){
            this.shuffle = (localStorage.getItem("shuffle") == "true");
        }
        else{
            this.set_shuffle(this.default_shuffle);
        }

        if(localStorage.getItem("audio_option")){
            this.audio_option = localStorage.getItem("audio_option");
        }else{
            this.set_audio_option(this.default_audio_option);
        }
        
        if(localStorage.getItem("background_soundtrack")){
            this.background_soundtrack = localStorage.getItem("background_soundtrack");
        }else{
            this.set_background_soundtrack(this.default_soundtrack);
        }
    }

    set_slide_duration(x:number){
        if(this.min_slide_duration <= x && x <= this.max_slide_duration){
            this.slide_duration = x;
            localStorage.setItem("slide_duration",this.slide_duration.toString());
        }
        else{
            console.log("Slide duration out of bounds");
        }
        
    }

    set_animation_speed(x:number){
        if(this.min_animation_speed <= x && x <= this.max_animation_speed){
            this.animation_speed = x;
            localStorage.setItem("animation_speed",this.animation_speed.toString());
        }
        else{
            console.log("Animation speed out of bounds");
        }
        
    }

    set_shuffle(x:boolean){
        this.shuffle = x;
        localStorage.setItem("shuffle",this.shuffle.toString());
    }

    set_audio_option(x:string){
        if(this.audio_option_choices.includes(x)){
            this.audio_option = x;
            localStorage.setItem("audio_option",this.audio_option);
        }
        else{
            console.log("You need to insert a valid value here. Please refer to the Settings_Class.tsx to see your options")
        }
    }

    set_background_soundtrack(x:string){
        this.background_soundtrack = x;
        localStorage.setItem("background_soundtrack",this.background_soundtrack);
    }
}

export default Settings_Class;