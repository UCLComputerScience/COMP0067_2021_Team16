    let sliderbutton = document.getElementById('sliderbutton');
    let slidertrack = document.getElementById('slidertrack');
    let demo = document.getElementById('demo');

    sliderbutton.addEventListener('mousedown', function(e) {
        e.preventDefault();
        //set x coordinate
        let x = e.pageX || (e.clientX + document.body.scrollLeft - document.body.clientLeft);
        sliderbutton.onmousemove = function(event){
          let mx = event.pageX || (event.clientX + document.body.scrollLeft - document.body.clientLeft);
          let leftx = sliderbutton.style.left.replace('px','') as unknown as number;
          if (leftx >=0 && leftx<320) {
            sliderbutton.style.left = mx - x + 'px';
            slidertrack.style.width = mx - x + 'px';
          }else if(leftx<0){
            sliderbutton.style.left = '0px';
            slidertrack.style.width = '0px';
          }  else {
            sliderbutton.style.left = '320px';
            slidertrack.style.width = '320px';
            demo.classList.add('item')
            slidertrack.innerHTML = 'IDK what is happening'
          }
        }
        demo.onmousemove = function(event){
          let mx = event.pageX || (event.clientX + document.body.scrollLeft - document.body.clientLeft);
          let leftx = sliderbutton.style.left.replace('px','') as unknown as number;
          if (leftx >=0 && leftx<320) {
            sliderbutton.style.left = mx - x + 'px';
            slidertrack.style.width = mx - x + 'px';
          }else if(leftx<0){
            sliderbutton.style.left = '0px';
            slidertrack.style.width = '0px';
          }  else {
            sliderbutton.style.left = '320px';
            slidertrack.style.width = '320px';
            demo.classList.add('item')
            slidertrack.innerHTML = 'Unlocked1!!'
          }
        }
        this.addEventListener('mouseup', function(event){
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
                slidertrack.innerHTML = 'Unlocked2!!'
              }else{
                sliderbutton.style.left = leftx + 'px';
                slidertrack.style.width = leftx + 'px';
              }
            }, 0.5);
          }
        }, false)
      }, false)