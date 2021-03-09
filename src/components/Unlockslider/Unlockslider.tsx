import "./UnlockSlider.css";
import {useRef, useState} from 'react';

const UnlockSlider: React.FC = () => {

  const [dragging,SetDragging] =useState<boolean>(false);
  const [x,SetX] = useState<number>(()=>0);
  
  //let sliderbutton = useRef <HTMLDivElement>(null);

  function move_start(event){
    SetDragging(true);
    SetX(event.pageX || (event.clientX + document.body.scrollLeft - document.body.clientLeft));
  }
  
  function set_to_zero(){
    sliderbutton.style.left = '0px';
    slidertrack.style.width = '0px';
  }

  function unlock(){
    sliderbutton.style.left = '320px';
    slidertrack.style.width = '320px';
    demo.classList.add('item')
    slidertrack.innerHTML = 'Unlocked!!'
  }
  
  function move_handler(event){
    if(dragging){
      let mousex = event.pageX || (event.clientX + document.body.scrollLeft - document.body.clientLeft);
      let leftx = sliderbutton.style.left.replace('px','') as unknown as number;
      if (leftx >=0 && leftx<320) {
        sliderbutton.style.left = mousex - x + 'px';
        slidertrack.style.width = mousex - x + 'px';
      }else if(leftx<0){
        set_to_zero()
      }  else {
          unlock()
      }
    }
  }

  function move_end(event){
    SetDragging(false)
    sliderbutton.onmousemove = null;
    demo.onmousemove = null;
    let leftx = sliderbutton.style.left.replace('px','') as unknown as number;
    if (leftx <= 240) {
      let timer = setInterval(function(){
        --leftx
        if (leftx <=0) {
          clearInterval(timer)
          sliderbutton.style.left = '0px';
          slidertrack.style.width = '0px';
        }else{
          sliderbutton.style.left = leftx + 'px';
          slidertrack.style.width = leftx + 'px';
        }
      }, 0.5);
    }else{
      let timer = setInterval(function(){
        ++leftx
        if (leftx >= 320) {
          clearInterval(timer)
          sliderbutton.style.left = '320px';
          slidertrack.style.width = '320px';
          // sliderbutton.innerHTML = 'open'
          demo.classList.add('item')
          slidertrack.innerHTML = 'Unlocked!!'
        }else{
          sliderbutton.style.left = leftx + 'px';
          slidertrack.style.width = leftx + 'px';
        }
      }, 0.5);
    }
  }
  
  return(
        <div className="demo" id="demo" onMouseMove={e=>move_handler(e)}>
            Slide to Unlock
            <div className="slidertrack" id="slidertrack"></div>
            <div className="sliderbutton" id="sliderbutton" onMouseDown={e=>move_start(e)} onMouseMove={e=>move_handler(e)} onMouseUp={e=>move_end(e)}></div>
        </div>
  );

}

export default UnlockSlider;