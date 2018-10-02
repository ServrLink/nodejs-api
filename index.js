const http = require('http')

/*
  Retrieves whether the specified Minecraft account has been registered through ServrLink.
  Returns a JSON object with 2 params:
    - success (Whether the request to the Registry was sucessful)
    - registered (Whether the UUID is registered)
*/
module.exports.isUUIDRegistered = (baseUrl, uuid, callback) => {
  var url = baseUrl
  if(!url.endsWith('/')) {
    url += '/'
  }

  url += `api/minecraft/isregistered?uuid=${uuid}`

  http.get(url, (res) => {
    var body = '';
    res.on('data', (d) => {
      body += d
    })

    res.on('end', () => {
      callback(JSON.parse(body))
    })
  })
}

/*
  Retrieves whether the specified Discord account has been registered through ServrLink.
  Returns a JSON object with 2 params:
    - success (Whether the request to the Registry was sucessful)
    - registered (Whether the Discord ID is registered)
*/
module.exports.isDiscordIdRegistered = (baseUrl, id, callback) => {
  var url = baseUrl
  if(!url.endsWith('/')) {
    url += '/'
  }

  url += `api/discord/isregistered?id=${id}`

  http.get(url, (res) => {
    var body = '';
    res.on('data', (d) => {
      body += d
    })

    res.on('end', () => {
      callback(JSON.parse(body))
    })
  })
}

/*
  Retrieves the Discord user ID associated with a Minecraft account
  Returns a JSON object with 2 params:
    - success (Whether the request to the Registry was sucessful)
    - id (The associated Discord ID)
*/
module.exports.getDiscordId = (baseUrl, uuid, callback) => {
  var url = baseUrl
  if(!url.endsWith('/')) {
    url += '/'
  }

  url += `api/minecraft/getid?uuid=${uuid}`

  http.get(url, (res) => {
    var body = '';
    res.on('data', (d) => {
      body += d
    })

    res.on('end', () => {
      callback(JSON.parse(body))
    })
  })
}

/*
  Retrieves the Minecraft UUID associated with a Discord account
  Returns a JSON object with 2 params:
    - success (Whether the request to the Registry was sucessful)
    - id (The associated Minecraft UUID)
*/
module.exports.getUUID = (baseUrl, id, callback) => {
  var url = baseUrl
  if(!url.endsWith('/')) {
    url += '/'
  }

  url += `api/discord/getuuid?id=${id}`

  http.get(url, (res) => {
    var body = '';
    res.on('data', (d) => {
      body += d
    })

    res.on('end', () => {
      callback(JSON.parse(body))
    })
  })
}
