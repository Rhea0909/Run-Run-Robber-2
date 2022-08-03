class Game {
    constructor() {
      this.resetTitle = createElement("h2");
      this.resetButton = createButton("");
  
      this.leadeboardTitle = createElement("h2");
  
      this.leader1 = createElement("h2");
      this.leader2 = createElement("h2");
      this.playerMoving = false;
      //C41//TA
      this.leftKeyActive = false;
    
    }
    
    robber = createSprite(width / 2 - 50, height - 100)
    robber.addImage("robber.png",robberImg)
    robber.scale = 0.07
    
   police1 = new Group()
   police2 = new Group()


}