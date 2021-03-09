import "./UnlockSlider.css";
import {useState} from 'react';
import { useHistory } from "react-router-dom";

const UnlockSlider: React.FC = () => {

  const screenwidth = window.screen.width;
  const slidermaxwidth = screenwidth*0.9 - 40;
  const maxwidthstr = slidermaxwidth + 'px';
  const unlockratio = 0.75;
  const unlockwidth = Math.round(slidermaxwidth*unlockratio);

  const [dragging,SetDragging] =useState<boolean>(false);
  const [x,SetX] = useState<number>(()=>0);
  const history = useHistory();
  
  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  
  function reset_slider(event){
    SetDragging(false);
    SetX(0);
    SetX(event.pageX || (event.clientX + document.body.scrollLeft - document.body.clientLeft));
    //slidertrack.innerHTML = '';
    set_to_zero();
  }

  function move_start(event){
    SetDragging(true);
    SetX(event.pageX || (event.clientX + document.body.scrollLeft - document.body.clientLeft));
  }
  
  function set_to_zero(){
    sliderbutton.style.left = '0px';
    slidertrack.style.width = '0px';
  }

  function unlock(event){
    sliderbutton.style.left = maxwidthstr;
    slidertrack.style.width = maxwidthstr;
    demo.classList.add('item')
    slidertrack.innerHTML = 'Unlocked!!';
    sleep(1000);
    history.push("/SelectionPage");
    reset_slider(event);
  }
  
  function move_handler(event){
    if(dragging){
      let mousex = event.pageX || (event.clientX + document.body.scrollLeft - document.body.clientLeft);
      let leftx = sliderbutton.style.left.replace('px','') as unknown as number;
      if (leftx >= 0 && leftx < slidermaxwidth) {
        sliderbutton.style.left = mousex - x + 'px';
        slidertrack.style.width = mousex - x + 'px';
      }else if(leftx<0){
        set_to_zero()
      }  else {
          unlock(event);
      }
    }
  }

  function move_end(event){
    SetDragging(false)
    sliderbutton.onmousemove = null;
    demo.onmousemove = null;
    let leftx = sliderbutton.style.left.replace('px','') as unknown as number;
    if (leftx <= unlockwidth) {
      let timer = setInterval(function(){
        --leftx
        if (leftx <=0) {
          clearInterval(timer);
          set_to_zero();
        }else{
          sliderbutton.style.left = leftx + 'px';
          slidertrack.style.width = leftx + 'px';
        }
      }, 0.01);
    }else{
      let timer = setInterval(function(){
        ++leftx
        if (leftx >= slidermaxwidth) {
          clearInterval(timer)
          unlock(event);
        }else{
          sliderbutton.style.left = leftx + 'px';
          slidertrack.style.width = leftx + 'px';
        }
      }, 0.01);
    }
  }
  
  return(
        <div className="demo" id="demo" onMouseMove={e=>move_handler(e)}>
            Slide to Unlock
            <div className="slidertrack" id="slidertrack"></div>
            <div 
              className="sliderbutton" 
              id="sliderbutton" 
              onMouseDown={e=>move_start(e)} 
              onMouseMove={e=>move_handler(e)} 
              onMouseUp={e => move_end(e)}
            />
        </div>
  );

}

export default UnlockSlider;