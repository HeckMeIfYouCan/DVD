console.log("DVD")

var colors = ["red", "green", "yellow", "blue"]
changecounter = 0;

function moveDvd() {

    var elem = document.getElementById("dvdAnimation");   
    var posx = 50;
    var posy = 20;
    clearInterval(id);
    var id = setInterval(frame, 10);
    var currentDirection = 3;
    function frame() {
    
        var change = true;

      if (currentDirection==0) {
        if(posx<=0 && posy<=0){
            currentDirection = 3;
            posx++;
            posy++;
        } else if(posy<=0){
            currentDirection = 1;
            posx--;
            posy++;
        } else if(posx<=0){
            currentDirection = 2;
            posx++;
            posy--;
        } else {
            posx--;
            posy--;
            change = false;
        }  
      }
      else if (currentDirection==1){
        if(posx<=0 && posy>=550){
            currentDirection = 2;
            posx++;
            posy--;
        } else if(posx<=0){
            currentDirection = 3;
            posx++;
            posy++;
        } else if(posy>=550){
            currentDirection = 0;
            posx--;
            posy--;
        } else {
            posx--;
            posy++;
            change = false;
        }  
      }
      else if (currentDirection==2){
        if(posx>=374 && posy<=0){
            currentDirection = 1;
            posx--;
            posy++;
        } else if(posx>=374){
            currentDirection = 0;
            posx--;
            posy--;
        } else if(posy<=0){
            currentDirection = 3;
            posx++;
            posy++;
        } else {
            posx++;
            posy--;
            change = false;
        }  
      }
      else if (currentDirection==3){
        if(posx>=374 && posy>=550){
            currentDirection = 0;
            posx--;
            posy--;
        } else if(posx>=374){
            currentDirection = 1;
            posx--;
            posy++;
        } else if(posy>=550){
            currentDirection = 2;
            posx++;
            posy--;
        } else {
            posx++;
            posy++;
            change = false;
        }  
      }

    elem.style.top = posx + 'px'; 
    elem.style.left = posy + 'px'; 

    if(change){
        changecounter++;
        changecounter = changecounter%4;  
        document.getElementById("dvdlogo").style.fill = colors[changecounter];
        }
    }
      
}

moveDvd();