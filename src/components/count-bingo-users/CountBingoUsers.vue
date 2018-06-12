<template>
  <div>
    <input id="connect" type="button" value="connect"/>
    <input id="disconnect" type="button" value="disconnect"/>
    <input id="state" type="text" value="" placeholder="State"/>
    <input id="connectedUsers" type="text" value="" placeholder="Users connected"/>
  </div>
</template>

<script>
import ws from './ws'

var delay = 5000
var gameserver
var url = 'wss://bingoserver-dev.devel.akamon.com/ws1'
var userID = 'ef7ae655-44d8-4b6f-4d3f-32ffc79f613d'

export default {
  name: 'CountBingoUsers',
  mounted: function () {
    gameserver = new ws.GameServer()

    document.getElementById('connect').onclick = function () {
      gameserver.open(url)

      gameserver.onOpen(function () {
        document.getElementById('state').value = 'Connected'
        gameserver.send(
          'com.tangelogames.protocol.sessions.TakeSessionRequest',
          {
            clientUUID: userID,
            id: ''
          }
        )
        document.getElementById('state').value = 'TakeSession ok'
      })

      gameserver.onClose(function () {
        document.getElementById('state').value = 'Connection closed'
      })

      gameserver.onMessage(function (evt) {
        var msg = JSON.parse(evt.data)

        if (msg.type === 'com.tangelogames.games.bingo.protocol.profile.BingoLoginProfile') {
          document.getElementById('state').value = 'Bingo profile ok '
          askAllConnectedPeriodic()
        }

        if (msg.type === 'com.tangelogames.games.bingo.protocol.room.AllConnectedUsers') {
          document.getElementById('connectedUsers').value = 'Connected users: ' + msg.data.totalUsersConnected
          askAllConnectedPeriodic()
        }

        function askAllConnectedPeriodic () {
          setInterval(function () {
            gameserver.sendTo(
              'RoomService',
              'com.tangelogames.games.bingo.protocol.room.AskAllConnectedUsers'
            )
          }, delay)
        }
      })
    }

    document.getElementById('disconnect').onclick = function () {
      gameserver.close()
    }
  }
}
</script>
