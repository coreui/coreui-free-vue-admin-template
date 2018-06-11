<template>
  <div>
    <span id="userCount">connecting...</span>
  </div>
</template>
<script>
  import ws from './ws';
  var gameserver;
  export default {
    name: 'CountBingoUsers',
    mounted: function(){
      gameserver = new ws.gameserver();

      gameserver.onMessage(function (evt) {

        console.log("onMessage: " + evt.data);

        var msg = JSON.parse(evt.data);

        if (msg.type == "com.tangelogames.games.bingo.protocol.profile.BingoLoginProfile") {
          setInterval(function(){
            gameserver.sendTo(
              'RoomService',
              'com.tangelogames.games.bingo.protocol.room.AskAllConnectedUsers'
            );
          },5000);

        }

        if (msg.type == "com.tangelogames.games.bingo.protocol.room.AllConnectedUsers") {
          document.getElementById("userCount").innerText = msg.data.totalUsersConnected;
        }

      });

      gameserver.open("wss://bingoserver-dev.devel.akamon.com/ws1");

      //readyState=1 means that the websocket is connected
      console.log(gameserver.channel.readyState);
      document.getElementById("userCount").innerText = "connecting... " + gameserver.channel.readyState;
      if(gameserver.channel.readyState == 0){
        setTimeout(function(){console.log("waiting")}, 5000);
      }
      gameserver.send(
        'com.tangelogames.protocol.sessions.TakeSessionRequest',
        {
          clientUUID : "ef7ae655-44d8-4b6f-4d3f-32ffc79f613d",
          id : ""
        }
      );
    }
  }
</script>
