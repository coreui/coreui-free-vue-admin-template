<template>
  <div>
    <input id="connect" type="button" value="connect"/>
    <input id="disconnect" type="button" value="disconnect"/>
    <input id="state" type="text" value="" placeholder="State"/>
    <input id="connectedUsers" type="text" value="" placeholder="Users connected"/>
    <div class=“small-box> <!-- bg-yellow”-->
      <div class=“inner”>
        <h3>44</h3>
        <p>Connected users</p>
      </div>
      <!--<div class=“icon”>
        <i class=“ion ion-person-add”></i>
      </div>-->
     <!-- <a href=“#” class=“small-box-footer”>More info <i class=“fa fa-arrow-circle-right”></i></a> -->
    </div>
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

<style>
  .fa-arrow-circle-right:before {
    content: "\f0a9";
  }

  .icon {
          transition: all $transition-speed linear;
          position: absolute;
          top: -10px;
          right: 10px;
          z-index: 0;
          font-size: 90px;
          color: rgba(0, 0, 0, 0.15);
        }
  /*
   * Component: Small Box
   * --------------------
   */
  .small-box {
    border-radius: 0.25rem;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.125), 0 1px 3px rgba(0, 0, 0, 0.2);
    position: relative;
    display: block;
    margin-bottom: 20px;
  }

  .small-box > .inner {
    padding: 10px;
  }

  .small-box > .small-box-footer {
    position: relative;
    text-align: center;
    padding: 3px 0;
    color: #ffffff;
    color: rgba(255, 255, 255, 0.8);
    display: block;
    z-index: 10;
    background: rgba(0, 0, 0, 0.1);
    text-decoration: none;
  }

  .small-box > .small-box-footer:hover {
    color: #ffffff;
    background: rgba(0, 0, 0, 0.15);
  }

  .small-box h3 {
    font-size: 38px;
    font-weight: bold;
    margin: 0 0 10px 0;
    white-space: nowrap;
    padding: 0;
  }

  .small-box p {
    font-size: 15px;
  }

  .small-box p > small {
    display: block;
    color: #f9f9f9;
    font-size: 13px;
    margin-top: 5px;
  }

  .small-box h3, .small-box p {
    z-index: 5;
  }

  .small-box .icon {
    transition: all 0.3s linear;
    position: absolute;
    top: -10px;
    right: 10px;
    z-index: 0;
    font-size: 90px;
    color: rgba(0, 0, 0, 0.15);
  }

  .small-box:hover {
    text-decoration: none;
  }

  .small-box:hover .icon {
    font-size: 95px;
  }

  @media (max-width: 767.98px) {
    .small-box {
      text-align: center;
    }
    .small-box .icon {
      display: none;
    }
    .small-box p {
      font-size: 12px;
    }
  }

</style>
