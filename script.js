window.addEventListener("load",function(){
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    const drop=document.getElementById("drop");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let lastTime = 0;
    let particleArray=[];
    let timer=0;
    let interval;
   
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
    
    class Particle{
    constructor(){
      this.x=Math.random()*canvas.width;
      this.y=Math.random()*canvas.height;
      this.size=Math.random()*10;
      this.color=`rgba(138,240,253,0.2)`;
      this.vy=Math.random()+0.01;
      this.image=drop;
    }
    update(){
      this.y+=this.vy;
     
      
    }
    draw(){
     context.drawImage(drop, this.x, this.y, this.size, this.size);
     
    }
    }
    
      for(let i=0;i<100;i++){
          particleArray.push(new Particle());
      }
    
    
     
    
    function animate(timeStamp) {
      const deltaTime = timeStamp - lastTime;
      lastTime = timeStamp;
      interval=Math.random()*2000+500;
      context.fillStyle='rgba(0,0,0,0.03)';
      context.fillRect(0,0,canvas.width,canvas.height);
      particleArray.forEach(particle => particle.update(deltaTime));
      particleArray.forEach(particle => particle.draw());
      for(let i=0;i<particleArray.length;i++){
          if(particleArray[i].y>canvas.height){
              particleArray.splice(i,1);
              i--;
          }
      }
      if(timer >interval){
      particleArray.push(new Particle());
      timer=0;
     }else{
      timer+=deltaTime;
     }
      requestAnimationFrame(animate);
    }
    animate(0);






});
