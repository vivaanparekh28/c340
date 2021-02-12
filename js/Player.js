class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank=0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "Players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('Players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
   getcaratend=async()=>{
     var carsatendref=await database.ref('cars at end')
    await carsatendref.on("value",(data)=>{
      this.rank = data.val()
    })
  }
  static updatecaratend(rank){
    database.ref('/').update({
      "cars at end":rank
    })
  }
}
