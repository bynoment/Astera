window.$ = window.jQuery = require("jquery");
const fs = require("fs");
const path = require("path");
const os = require("os");
const { ipcRenderer } = require("electron");
const crypto = require("crypto");
const { Auth } = require("msmc");
const openExternal = require("open");
const request = require("request");
const decompress = require("decompress");
const { Client } = require("minecraft-launcher-core");
const launcher = new Client();
const { globSync } = require("glob");