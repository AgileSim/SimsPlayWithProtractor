'use strict';

let fs = require('fs');
let path = require('path');
let decache = require('decache');

let self = {
  load: function (dataPath) {
    let basePath = (dataPath.endsWith("/")) ? dataPath.slice(0, dataPath.length - 1) : dataPath;
    let usersPath = 'people';
    let composedPath = path.resolve(`${basePath}/${usersPath}`);
    log.debug(`Users data path: ${composedPath}`);

    let docs = self.loadUsersFromFolderRecursively(composedPath);
    log.debug(`Loaded ${docs.length} users`)

    return docs;
  },

  loadUsersFromFolderRecursively: function (composedPath) {
    let users = [];
    fs.readdirSync(composedPath).forEach(function (fileName) {
      let filePath = `${composedPath}/${fileName}`;
      let stat = fs.statSync(filePath);
      if (stat && stat.isDirectory()) {
        users = users.concat(loadUsersFromFolderRecursively(filePath));
      } else if (filePath.endsWith(".js") || filePath.endsWith(".json")) {
        log.debug(`Loading file: ${filePath}`);
        let user;
        try {
          decache(filePath);
          user = require(filePath);
        } catch (error) {
          log.error(`[error] Unable to load user <${filePath}> file.`);
          log.error(`[error] ${error}`);
        }
        if (user) {
          users.push(user);
        }
      } else {
        log.warn(`[warning] Skipping file: ${fileRelativePath}`);
      }
    });
    return users;


  }
}

module.exports = self;