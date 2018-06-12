export default {
  name: 'GameServer',
  GameServer: function GameServer () {
    this.channel = null

    this.open = function (url) {
      this.close()
      this.channel = new WebSocket(url)
    }

    this.close = function () {
      if (this.channel != null) {
        this.channel.close()
        this.channel = null
      }
    }

    this.send = function (message, parameters) {
      this.sendTo('BingoService', message, parameters)
    }

    this.sendTo = function (to, message, parameters) {
      if (this.channel == null) {
        return
      }

      var json = JSON.stringify({ type: message, to: to, data: (parameters == null) ? {} : parameters })
      this.channel.send(json)
    }

    this.onOpen = function (handler) {
      if (this.channel != null) {
        this.channel.onopen = handler
      }
    }

    this.onClose = function (handler) {
      if (this.channel != null) {
        this.channel.onclose = handler
      }
    }

    this.onMessage = function (handler) {
      if (this.channel != null) {
        this.channel.onmessage = handler
      }
    }
  }

}
