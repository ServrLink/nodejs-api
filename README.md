# Introduction

This is a NodeJS wrapper for the [ServrLink](https://servr.link) public API.

# Installation

This package is available in the npm repository. Install it by running `npm i servrlink-api` and then add it to your repository by adding `const servrlink = require('servrlink-api')` to the top of your NodeJS file.

# Example  

```js
const api = require('servrlink-api')

var baseUrl = 'http://go.servr.link/'
var uuid = '3f222668-aff7-47ac-8e48-aca7b69cd333'
var discordId = 1

api.isUUIDRegistered(baseUrl, uuid, (res) => {
  console.log("Was the request succesful? " + res.success)
  console.log("Was the UUID found in the Registry? " + res.registered)
})

api.isDiscordIdRegistered(baseUrl, discordId, (res) => {
  console.log("Was the request succesful? " + res.success)
  console.log("Was the Discord ID found in the Registry? " + res.registered)
})

api.getDiscordId(baseUrl, uuid, (res) => {
  console.log("Was the request succesful? " + res.success)
  console.log("Discord ID: " + res.id) // Will be an empty string if the user is not registered in the Registry
})

api.getUUID(baseUrl, discordId, (res) => {
  console.log("Was the request succesful? " + res.success)
  console.log("Minecraft UUID:: " + res.uuid) // Will be an empty string if the user is not registered in the Registry
})

```
