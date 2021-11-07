/*CrackWare for Shell Shockers v0.41.0 Updated by Bioluminescence*/
window._utils = {};
window._utils.requirelib = async function (url, global) {
  return new Promise(async function (resolve) {
    async function getCode() {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open("GET", url, false);
      xmlHttp.send(null);
      return xmlHttp.responseText;
    }
    let code = await getCode();

    if (global) {
      code += 'window["' + global + '"] = ' + global + ';';
    }
    let evaluateCode = new Function(code);
    evaluateCode();
    resolve('done');
  });
};

window._utils.requirelib('https://unpkg.com/guify@0.12.0/lib/guify.min.js')
  .then(() => {
    window.hack.loadGui();
  });
let gameVersion = window.version;
let codeVersion = "0.41.0"
if (codeVersion != gameVersion) {
  alert(`CrackWare Code Version does not match ShellShockers current version.
Expect bugs!

CrackWare may need to be updated by 5514 Modding Team or TDStuart.
CrackWare update will automatically be applied when it is updated.
No download is required when CrackWare is updated.

CrackWare Version: ${codeVersion}
Game Version: ${gameVersion}`);
}


window.hack = {
  loadGui: () => { },
  modMenu: {
    credit: {},
    subcredits: {
      text: {}
    },
    dialog: {},
    aimbot: {
      enabled: false,
      fov: 4,
      type: 'FOV',
      keyBind: 'none',
      bindHandler: () => { },
      onKeyPress: () => { },
      bindType: 'hold',
      highlightTarget: true,
      predict: true,
      silentLevel: 'Level 3',
      silentAimTarget: {
        aim: false,
        pos: {}
      },
      container: {
        label: {},
        fov: {},
        toggle: {},
        typeselector: {},
        currentBind: {},
        bindType: {},
        setBind: {},
        highlightTarget: {},
        predict: {},
      },
      doFovAimbot: () => { },
      aimbotInterval: () => { },
      aimCheck: () => { },
      getLookPosVec: () => { },
      getAngleDegDiffVec: () => { },
      targetPlayer: {
        player: {},
        aimType: '',
        prevPos: null
      },
      checkTargetPlayerFov: () => { },
      targetPlayerFov: () => { },
      aimAtDiffVec: () => { },
      aimAtPlayer: () => { },
      aimIntevalSet: false,
      resetTarget: () => { },
    },
    esp: {
      enabled: false,
      keyBind: 'none',
      bindHandler: () => { },
      onKeyPress: () => { },
      bindType: 'toggle',
      colors: {
        visible: {
          r: 0.57,
          g: 0.27,
          b: 0.79,
          a: 1
        },
        hidden: {
          r: 1,
          g: 0.51,
          b: 0,
          a: 1
        }
      },
      useVisibleCheck: true,
      useTeamsCheck: true,
      container: {
        label: {},
        toggle: {},
        currentBind: {},
        bindType: {},
        setBind: {},
        espColors: {},
        espHColors: {},
        espVColors: {},
        vColorR: {},
        vColorG: {},
        vColorB: {},
        vColorA: {},
        hColorR: {},
        hColorG: {},
        hColorB: {},
        hColorA: {},
        useVisibleCheck: {},
        useTeamsCheck: {},
      }
    },
    skins: {
      unlockAll: () => { },
      onGotSkins: () => { },
      container: {
        label: {}
      }
    },
    misc: {
      customCrosshair: "None",
      gunPosition: 'right',
      fov: 71.6,
      useFov: false,
      container: {
        label: {},
        customCrosshairSelector: {},
        gunPositionSelector: {},
        useFov: {},
        fov: {}
      }
    },
    render: {
      enabled: false,
      shadowsEnabled: true,
      texturesEnabled: true,
      lightsEnabled: true,
      particlesEnabled: true,
      postProcessesEnabled: true,
      renderTargetsEnabled: true,
      container: {
        label: {},
        enabled: {},
        shadowsEnabled: {},
        texturesEnabled: {},
        lightsEnabled: {},
        particlesEnabled: {},
        postProcessesEnabled: {},
        renderTargetsEnabled: {},
      }
    },
    menu: {
      hideOnStart: false,
      focusBind: 'none',
      focusBindHandler: () => { },
      focusOnKeyPress: () => { },
      forceFocus: false,
      focusSwitch: false,
      hideKey: 'none',
      setHideKey: () => { },
      onHidePress: () => { },
      container: {
        label: {},
        resetSettings: {},
        forceSaveSettings: {},
        hideOnStart: {},
        focusBind: {},
        hideKey: {}
      }
    }
  },
  gui: {},
  addPlayer: () => { },
  removePlayer: () => { },
  myPlayerId: 0,
  myPlayer: {},
  players: [],
  inputs: {
    keyboard: {
      down: () => { },
      up: () => { }
    },
    mouse: {
      down: () => { },
      up: () => { }
    }
  },
  keyBinds: {
    handler: () => { },
    handlePress: () => { },
    awaitingBind: false,
    awaitBind: {
      callback: () => { },
      onPress: () => { },
      binding: ''
    },
    keysBinded: {}
  },
  commcodes: {},
  ws: null,
  setCommCode: () => { },
  testMessage: () => { },
  replyMessages: new Map(),
  gameStart: () => { },
  inGame: false,
  gameEnd: () => { },
  gameChecks: () => { },
  gameChecksInterval: () => { },
  onMyPlayerLoaded: () => { },
  myPlayerLoaded: false,
  finishedGui: () => { },
  loadSettings: () => { },
  modMenuCheck: () => { },
  modMenuCheckInterval: () => { },
  storeSettings: () => { },
  updateESPColors: () => { },
  espColorHidden: [],
  espColorVisible: [],
  meshVisible: null,
  esp1: {},
  esp2: {},
  onBabylonLoad: () => { },
  isInChat: () => { },
  teams: {
    red: 2,
    blue: 1
  },
  espTeamColors: {
    red: [],
    blue: []
  },
  isPlayingTeams: false,
  items: [],
  itemsById: []
};


window.hack.isInChat = function () {
  let chatIn = document.getElementById('chatIn');
  if (!window.hack.inGame) {
    return false;
  }
  return (chatIn.style.background == 'transparent') ? false : true;
}


window.hack.addPlayer = function (player) {
  if (player.id == window.hack.myPlayerId) {
    window.hack.myPlayer = player;
    window.hack.onMyPlayerLoaded();
    return;
  }


  window.hack.players.push(player);
}


window.hack.removePlayer = function (id) {
  let players = window.hack.players;
  players.forEach((player, arrayPos) => {
    if (player.id == id) {
      players.splice(arrayPos, 1);
    }
  });
}

window.hack.setCommCode = function (code, value) {
  window.hack.commcodes[code] = value;
  return true;
}
window.hack.testMessage = function (message) {
  let returnVal = true;
  window.hack.replyMessages.forEach((v, k) => {
    if (message === k) {
      if (window.hack.ws && window.hack.commcodes.chat) {
        let arrayBuffer = new ArrayBuffer(16384);
        let buffer = new Uint8Array(arrayBuffer, 0, 16384);
        let idx = 0;
        buffer[idx] = window.hack.commcodes.chat & 255;
        idx++;
        buffer[idx] = v.length & 255;
        idx++;
        for (let i = 0; i < v.length; i++) {
          let val = v.charCodeAt(i);
          buffer[idx] = val & 255;
          buffer[idx + 1] = (val >> 8) & 255;
          idx += 2;
        }
        window.hack.ws.send(new Uint8Array(arrayBuffer, 0, idx));
        returnVal = false;
      }
    }
  });
  return returnVal;
}
window.hack.gameStart = function () {
  window.hack.players = [];
  window.hack.myPlayer = {};
  window.hack.inGame = true;

  clearInterval(window.hack.gameChecksInterval);
  window.hack.gameChecksInterval = setInterval(window.hack.gameChecks, 100);

  window.hack.updateESPColors();
}


window.hack.gameEnd = function () {
  window.hack.players = [];
  window.hack.myPlayer = {};
  window.hack.inGame = false;

  clearInterval(window.hack.gameChecksInterval);
  window.hack.myPlayerLoaded = false;
}


window.hack.gameChecks = function () {
  if (window.hack.inGame) {
    if (window.hack.modMenu.aimbot.enabled) {
      if (!window.hack.modMenu.aimbot.aimIntevalSet) {
        window.hack.modMenu.aimbot.aimbotInterval = setInterval(window.hack.modMenu.aimbot.aimCheck, 1);
        window.hack.modMenu.aimbot.aimIntevalSet = true;
      }
    } else {
      if (window.hack.modMenu.aimbot.aimIntevalSet) {
        window.hack.modMenu.aimbot.resetTarget();
        clearInterval(window.hack.modMenu.aimbot.aimbotInterval);
        window.hack.modMenu.aimbot.aimIntevalSet = false;
      }
    }
  }

  if (window.hack.myPlayer.team != 0) {
    window.hack.isPlayingTeams = true;
  } else {
    window.hack.isPlayingTeams = false;
  }

  if (window.hack.modMenu.render.enabled) {
    let scene = window.hack.myPlayer.scene;
    let renderSettings = window.hack.modMenu.render;
    scene.shadowsEnabled = renderSettings.shadowsEnabled;
    scene.texturesEnabled = renderSettings.texturesEnabled;
    scene.lightsEnabled = renderSettings.lightsEnabled;
    scene.particlesEnabled = renderSettings.particlesEnabled;
    scene.postProcessesEnabled = renderSettings.postProcessesEnabled;
    scene.renderTargetsEnabled = renderSettings.renderTargetsEnabled;
  }
}


window.hack.onMyPlayerLoaded = function () {
  window.hack.myPlayerLoaded = true;


  let gunPosition = window.hack.modMenu.misc.gunPosition;
  if (window.hack.myPlayerLoaded) {

    if (gunPosition == 'right') {
      window.hack.myPlayer.actor.mesh._scaling.x = 1;
    } else if (gunPosition == 'left') {
      window.hack.myPlayer.actor.mesh._scaling.x = -1;
    } else if (gunPosition == 'none') {
      window.hack.myPlayer.actor.mesh._scaling.x = 0;
    }
  }
}


window.hack.keyBinds.handlePress = function (event) {

  let isPlayerInChat = window.hack.isInChat();
  if (isPlayerInChat) {
    return;
  }

  let type = (event.key) ? "Keyboard" : "Mouse";
  let keybinds = window.hack.keyBinds;
  if (type == "Mouse") {
    let button = event.button;
    let bindString = "Mouse" + button;
    let type = event.type;


    if (!keybinds.keysBinded[bindString]) {
      return;
    }
    if (!keybinds.keysBinded[bindString].binds) {
      return;
    }
    keybinds.keysBinded[bindString].binds.forEach((e, i) => {
      e.handle(bindString, {
        Mouse: true,
        Type: (type == "mousedown") ? "down" : "up",
        Event: event
      });
    });

  } else if (type == "Keyboard") {
    let bindString = event.code;
    let type = event.type;


    if (!keybinds.keysBinded[bindString]) {
      return;
    }
    if (!keybinds.keysBinded[bindString].binds) {
      return;
    }
    keybinds.keysBinded[bindString].binds.forEach((e, i) => {
      e.handle(bindString, {
        Keyboard: true,
        Type: (type == "keydown") ? "down" : "up",
        Event: event
      });
    });
  }
}
window.hack.keyBinds.handler = function (event, doAlert = true) {
  let type = (event.key) ? "Keyboard" : "Mouse";
  let keybinds = window.hack.keyBinds;
  if (window.hack.keyBinds.awaitingBind) {
    let bindString = (event.key) ? event.code : "Mouse" + event.button;
    if (bindString == "Escape") {

      window.hack.keyBinds.awaitingBind = false;
      window.hack.keyBinds.awaitBind.callback(bindString, true);
      window.hack.modMenu.dialog.close();
      if (doAlert) {
        alert('Reset Key Bind')
      };
      return;
    }
    if (bindString == "Insert") {
      if (window.hack.keyBinds.awaitBind.binding != "hideonstart") {
        alert('You can not set ' + bindString + ' to a keybinding!');
        return;
      }
    }
    if (!keybinds.keysBinded[bindString]) {
      keybinds.keysBinded[bindString] = {
        binds: []
      };
    }
    if (!keybinds.keysBinded[bindString].binds) {
      keybinds.keysBinded[bindString] = {
        binds: []
      };
    }
    keybinds.keysBinded[bindString].binds.push({
      binding: window.hack.keyBinds.awaitBind.binding,
      handle: window.hack.keyBinds.awaitBind.onPress
    });
    window.hack.keyBinds.awaitBind.callback(bindString);
    window.hack.keyBinds.awaitingBind = false;
    window.hack.modMenu.dialog.close();
    if (doAlert) {
      alert('Set Keybind To : ' + bindString)
    };
  } else {
    window.hack.keyBinds.handlePress(event);
  }
}
document.addEventListener('keydown', window.hack.keyBinds.handler);
document.addEventListener('keyup', window.hack.keyBinds.handler);
document.addEventListener('mousedown', window.hack.keyBinds.handler);
document.addEventListener('mouseup', window.hack.keyBinds.handler);


window.hack.modMenu.aimbot.bindHandler = function () {
  let bindString = window.hack.modMenu.aimbot.keyBind;
  let keybinds = window.hack.keyBinds;
  if (bindString != 'none') {

    if (keybinds.keysBinded[bindString]) {
      if (keybinds.keysBinded[bindString].binds) {
        keybinds.keysBinded[bindString].binds.forEach((e, i) => {
          if (e.binding == "aimbot") {
            keybinds.keysBinded[bindString].binds.splice(i, 1);
          }
        });
      }
    }
  }
  window.hack.keyBinds.awaitingBind = true;

  window.hack.keyBinds.awaitBind = {
    callback: (bindString, reset) => {
      if (!reset) {
        window.hack.modMenu.aimbot.keyBind = bindString
      } else {
        window.hack.modMenu.aimbot.keyBind = 'none'
      };
    },
    onPress: window.hack.modMenu.aimbot.onKeyPress,
    binding: 'aimbot'
  }
  window.hack.modMenu.dialog.show();
}


window.hack.modMenu.esp.bindHandler = function () {
  let bindString = window.hack.modMenu.esp.keyBind;
  let keybinds = window.hack.keyBinds;
  if (bindString != 'none') {

    if (keybinds.keysBinded[bindString]) {
      if (keybinds.keysBinded[bindString].binds) {
        keybinds.keysBinded[bindString].binds.forEach((e, i) => {
          if (e.binding == "esp") {
            keybinds.keysBinded[bindString].binds.splice(i, 1);
          }
        });
      }
    }
  }
  window.hack.keyBinds.awaitingBind = true;
  window.hack.keyBinds.awaitBind = {
    callback: (bindString, reset) => {
      if (!reset) {
        window.hack.modMenu.esp.keyBind = bindString
      } else {
        window.hack.modMenu.esp.keyBind = 'none'
      };
    },
    onPress: window.hack.modMenu.esp.onKeyPress,
    binding: 'esp'
  }
  window.hack.modMenu.dialog.show();
}
window.hack.modMenu.esp.onKeyPress = function (bindString, eventData) {
  if (!bindString == window.hack.modMenu.esp.keyBind) {
    return;
  }
  if (window.hack.modMenu.esp.bindType == 'hold') {
    if (eventData.Type == "down") {
      window.hack.modMenu.esp.enabled = true;
    } else if (eventData.Type == "up") {
      window.hack.modMenu.esp.enabled = false;
    }
  } else if (window.hack.modMenu.esp.bindType == 'toggle') {
    if (eventData.Type == "up") {
      window.hack.modMenu.esp.enabled = !window.hack.modMenu.esp.enabled;
    }
  }

}


window.hack.modMenu.menu.focusOnKeyPress = function (bindString, eventData) {
  if (eventData.Type == "up") {
    if (window.hack.modMenu.menu.focusSwitch) {
      window.hack.modMenu.menu.focusSwitch = false;
      canvas.requestPointerLock();
    } else {
      window.hack.modMenu.menu.focusSwitch = true;
      window.hack.modMenu.menu.forceFocus = true;
      document.exitPointerLock();
    }
  }
}
window.hack.modMenu.menu.focusBindHandler = function () {
  let bindString = window.hack.modMenu.menu.focusBind;
  let keybinds = window.hack.keyBinds;
  if (bindString != 'none') {

    if (keybinds.keysBinded[bindString]) {
      if (keybinds.keysBinded[bindString].binds) {
        keybinds.keysBinded[bindString].binds.forEach((e, i) => {
          if (e.binding == "focus") {
            keybinds.keysBinded[bindString].binds.splice(i, 1);
          }
        });
      }
    }
  }
  window.hack.keyBinds.awaitingBind = true;
  window.hack.keyBinds.awaitBind = {
    callback: (bindString, reset) => {
      if (!reset) {
        window.hack.modMenu.menu.focusBind = bindString
      } else {
        window.hack.modMenu.menu.focusBind = 'none'
      };
    },
    onPress: window.hack.modMenu.menu.focusOnKeyPress,
    binding: 'focus'
  }
  window.hack.modMenu.dialog.show();
}
window.hack.modMenu.menu.onHidePress = function (bindString, eventData) {
  if (eventData.Type == "up") {
    window.hack.gui.panel.container.hidden = !window.hack.gui.panel.container.hidden;
  }
}
window.hack.modMenu.menu.setHideKey = function () {
  let bindString = window.hack.modMenu.menu.hideKey;
  let keybinds = window.hack.keyBinds;
  if (bindString != 'none') {

    if (keybinds.keysBinded[bindString]) {
      if (keybinds.keysBinded[bindString].binds) {
        keybinds.keysBinded[bindString].binds.forEach((e, i) => {
          if (e.binding == "hide") {
            keybinds.keysBinded[bindString].binds.splice(i, 1);
          }
        });
      }
    }
  }
  window.hack.keyBinds.awaitingBind = true;
  window.hack.keyBinds.awaitBind = {
    callback: (bindString, reset) => {
      if (!reset) {
        window.hack.modMenu.menu.hideKey = bindString
      } else {
        window.hack.modMenu.menu.hideKey = 'none'
      };
    },
    onPress: window.hack.modMenu.menu.onHidePress,
    binding: 'hide'
  }
  window.hack.modMenu.dialog.show();
}




window.hack.modMenu.aimbot.onKeyPress = function (bindString, eventData) {
  if (!bindString == window.hack.modMenu.aimbot.keyBind) {
    return;
  }
  if (window.hack.modMenu.aimbot.bindType == 'hold') {
    if (eventData.Type == "down") {
      window.hack.modMenu.aimbot.enabled = true;
    } else if (eventData.Type == "up") {
      window.hack.modMenu.aimbot.enabled = false;
    }
  } else if (window.hack.modMenu.aimbot.bindType == 'toggle') {
    if (eventData.Type == "up") {
      window.hack.modMenu.aimbot.enabled = !window.hack.modMenu.aimbot.enabled;
    }
  }

}

window.hack.modMenu.aimbot.getLookPosVec = function (me) {
  const adjustedYaw = Math.radRange(Math.PI / 2 - me.yaw);
  const adjustedPitch = -me.pitch;
  const cosPitch = Math.cos(adjustedPitch);
  const lookVec = new BABYLON.Vector3(cosPitch * Math.cos(adjustedYaw), Math.sin(adjustedPitch), cosPitch * Math.sin(adjustedYaw))
    .normalize();
  const posVec = new BABYLON.Vector3(me.x, me.y + 0.3, me.z);
  return {
    lookVec,
    posVec
  };
}
window.hack.modMenu.aimbot.getAngleDegDiffVec = function ({
  posVec,
  lookVec,
  player
}) {
  const otherVec = new BABYLON.Vector3(player.x, player.y + 0.3, player.z);
  const diffVec = otherVec.subtract(posVec)
    .normalize();
  const angle = Math.acos(BABYLON.Vector3.Dot(lookVec, diffVec));
  const angleDeg = angle * 180 / Math.PI;
  return {
    angleDeg,
    diffVec
  };
}
window.hack.modMenu.aimbot.doFovAimbot = function () {
  var players = window.hack.players;
  var me = window.hack.myPlayer;

  const adjustedYaw = Math.radRange(Math.PI / 2 - me.yaw);
  const adjustedPitch = -me.pitch;
  const cosPitch = Math.cos(adjustedPitch);
  const lookVec = new BABYLON.Vector3(cosPitch * Math.cos(adjustedYaw), Math.sin(adjustedPitch), cosPitch * Math.sin(adjustedYaw))
    .normalize();
  const posVec = new BABYLON.Vector3(me.x, me.y + 0.3, me.z);

  var aimPlayer = NaN;
  var aimData = {};
  var aimPlayerAngle = 999;

  for (xv in players) {
    if (xv == 'shallowClone') {
      continue;
    }
    var player = players[xv];
    if (player.isDead()) {
      continue;
    }
    const otherVec = new BABYLON.Vector3(player.x, player.y + 0.3, player.z);
    const diffVec = otherVec.subtract(posVec)
      .normalize();
    const angle = Math.acos(BABYLON.Vector3.Dot(lookVec, diffVec));
    const angleDeg = angle * 180 / Math.PI;

    if (angleDeg <= window.hack.modMenu.aimbot.fov) {
      if (angleDeg < aimPlayerAngle) {
        const targetVectorNormalized = diffVec;
        const newYaw = Math.radRange(-Math.atan2(targetVectorNormalized.z, targetVectorNormalized.x) + Math.PI / 2);
        const newPitch = Math.clamp(-Math.asin(targetVectorNormalized.y), -1.5, 1.5);
        aimPlayerAngle = angleDeg;
        aimData = {
          yaw: newYaw,
          pitch: newPitch
        };
        aimPlayer = player;
      }
    }
  }

  if (aimPlayer) {
    me.yaw = aimData.yaw;
    me.pitch = aimData.pitch;
  }
}
window.hack.modMenu.aimbot.resetTarget();
window.hack.modMenu.aimbot.checkTargetPlayerFov = function () {
  let targetPlayer = window.hack.modMenu.aimbot.targetPlayer.player;
  let me = window.hack.myPlayer;

  if (!targetPlayer.id && targetPlayer.id != 0) {
    return false;
  }

  if (targetPlayer.isDead()) {
    return false;
  }

  let meVec = window.hack.modMenu.aimbot.getLookPosVec(me);
  let angleDeg = window.hack.modMenu.aimbot.getAngleDegDiffVec({
    ...meVec,
    player: targetPlayer
  })
    .angleDeg;

  if (angleDeg <= window.hack.modMenu.aimbot.fov || isNaN(angleDeg)) {
    return true;
  } else {
    return false;
  }
}
window.hack.modMenu.aimbot.targetPlayerFov = function () {
  let players = window.hack.players;
  let me = window.hack.myPlayer;
  let meVec = window.hack.modMenu.aimbot.getLookPosVec(me);

  let goodPlayer = {
    player: {},
    angleDeg: 99999,
    diffVec: 0
  }

  for (let pl in players) {
    if (pl == 'shallowClone') {
      continue;
    }

    if (players[pl].isDead()) {
      continue;
    }
    if (window.hack.isPlayingTeams) {
      if (players[pl].team == window.hack.myPlayer.team) {
        continue;
      }
    }
    let angleDegDiffVec = window.hack.modMenu.aimbot.getAngleDegDiffVec({
      ...meVec,
      player: players[pl]
    });
    let angleDeg = angleDegDiffVec.angleDeg;

    if (angleDeg <= window.hack.modMenu.aimbot.fov) {
      if (angleDeg < goodPlayer.angleDeg) {
        goodPlayer.player = players[pl];
        goodPlayer.angleDeg = angleDeg;
        goodPlayer.diffVec = angleDegDiffVec.diffVec;
      }
    }
  }

  if (goodPlayer.player.id || goodPlayer.player.id == 0) {
    return {
      foundPlayer: true,
      player: goodPlayer.player,
      diffVec: goodPlayer.diffVec
    };
  } else {
    return {
      foundPlayer: false
    };
  }
}
window.hack.modMenu.aimbot.aimAtDiffVec = function (diffVec) {
  let newYaw = Math.radRange(-Math.atan2(diffVec.z, diffVec.x) + Math.PI / 2);
  let newPitch = Math.clamp(-Math.asin(diffVec.y), -1.5, 1.5);
  window.hack.myPlayer.yaw = newYaw;
  window.hack.myPlayer.pitch = newPitch;
}
window.hack.modMenu.aimbot.yawPitchFromDiv = function (diffVec) {
  let newYaw = Math.radRange(-Math.atan2(diffVec.z, diffVec.x) + Math.PI / 2);
  let newPitch = Math.clamp(-Math.asin(diffVec.y), -1.5, 1.5);
  return {
    yaw: newYaw,
    pitch: newPitch
  };
}
window.hack.modMenu.aimbot.aimAtPlayer = function (player) {

  player.y -= 0.072;
  let meVec = window.hack.modMenu.aimbot.getLookPosVec(window.hack.myPlayer);
  let diffVec = window.hack.modMenu.aimbot.getAngleDegDiffVec({
    ...meVec,
    player: player
  })
    .diffVec;
  let newYaw = Math.radRange(-Math.atan2(diffVec.z, diffVec.x) + Math.PI / 2);
  let newPitch = Math.clamp(-Math.asin(diffVec.y), -1.5, 1.5);
  window.hack.myPlayer.yaw = newYaw;
  window.hack.myPlayer.pitch = newPitch;
}
window.hack.modMenu.aimbot.yawPitchFromPosVec = function (posVec) {
  let meVec = window.hack.modMenu.aimbot.getLookPosVec(window.hack.myPlayer);
  let diffVec = window.hack.modMenu.aimbot.getAngleDegDiffVec({
    ...meVec,
    player: posVec
  })
    .diffVec;
  let newYaw = Math.radRange(-Math.atan2(diffVec.z, diffVec.x) + Math.PI / 2);
  let newPitch = Math.clamp(-Math.asin(diffVec.y), -1.5, 1.5);
  return {
    yaw: newYaw,
    pitch: newPitch
  };
}
window.hack.modMenu.aimbot.resetTarget = function () {
  window.hack.modMenu.aimbot.targetPlayer = {
    player: {},
    aimType: ''
  }
}
window.hack.modMenu.aimbot.predictAim = function (me, target, targetVelocity, bulletSpeed) {
  let aimPos = target.add(targetVelocity.scale(BABYLON.Vector3.Distance(me, target) / bulletSpeed));
  return aimPos;
}

window.hack.modMenu.aimbot.aimCheck = function () {

  let bulletSpeeds = {
    Sniper: {
      tick: 2,
      second: 60
    },
    SMG: {
      tick: 1.25,
      second: 37.5
    },
    SemiAuto: {
      tick: 1.75,
      second: 52.5
    },
    Shotgun: {
      tick: 1,
      second: 30
    },
    AK: {
      tick: 1.5,
      second: 45
    }
  }
  if (!window.hack.modMenu.aimbot.enabled) {
    window.hack.modMenu.aimbot.resetTarget();
  }
  if (!window.hack.inGame) {
    return
  };
  if (!window.hack.myPlayer) {
    return
  };
  if (!window.hack.players) {
    return
  };
  if (window.hack.players.length == 0) {
    return
  };
  if (window.hack.myPlayer.id == null) {
    return
  };

  if (window.hack.modMenu.aimbot.type == "FOV") {
    let target = window.hack.modMenu.aimbot.targetPlayer;
    let keepTarget = false;

    if (target.aimType == "FOV") {
      if (window.hack.modMenu.aimbot.predict) {

        if (target.player.isDead) {
          keepTarget = !target.player.isDead();
        } else {
          keepTarget = true;
        }
      } else {

        keepTarget = window.hack.modMenu.aimbot.checkTargetPlayerFov();
      }
    } else {
      keepTarget = false;
    }
    if (!keepTarget) {
      let newTarget = window.hack.modMenu.aimbot.targetPlayerFov();
      if (newTarget.foundPlayer) {
        let player = newTarget.player;
        target.player = player;
        target.aimType = "FOV";
        window.hack.modMenu.aimbot.aimAtDiffVec(newTarget.diffVec);
      } else {
        window.hack.modMenu.aimbot.resetTarget();
        return;
      }
    } else {
      let aimPos = target.player;

      if (window.hack.modMenu.aimbot.predict) {
        let myPlayer = window.hack.myPlayer;
        let playerPos = new BABYLON.Vector3(myPlayer.x, myPlayer.y, myPlayer.z);
        let targetPos = new BABYLON.Vector3(target.player.x, target.player.y, target.player.z);
        let targetVelocity = new BABYLON.Vector3(target.player.dx, target.player.dy, target.player.dz);
        let bulletVelocity = myPlayer.weapon.subClass.velocity;




        aimPos = window.hack.modMenu.aimbot.predictAim(playerPos, targetPos, targetVelocity, bulletVelocity);
      }

      window.hack.modMenu.aimbot.aimAtPlayer(aimPos);
    }


  }
};
window.hack.modMenu.aimbot.doSilentAim = function () {
  let newTarget = window.hack.modMenu.aimbot.targetPlayerFov();
  if (newTarget.foundPlayer) {
    if (window.hack.modMenu.aimbot.predict) {
      let player = newTarget.player;
      let myPlayer = window.hack.myPlayer;
      let playerPos = new BABYLON.Vector3(myPlayer.x, myPlayer.y, myPlayer.z);
      let targetPos = new BABYLON.Vector3(player.x, player.y, player.z);
      let targetVelocity = new BABYLON.Vector3(player.dx, player.dy, player.dz);
      let bulletVelocity = myPlayer.weapon.subClass.velocity;

      let aimPos = window.hack.modMenu.aimbot.predictAim(playerPos, targetPos, targetVelocity, bulletVelocity);

      aimPos.y -= 0.072;

      return window.hack.modMenu.aimbot.yawPitchFromPosVec(aimPos);
    } else {
      let aim = window.hack.modMenu.aimbot.yawPitchFromDiv(newTarget.diffVec);
      return aim;
    }
  } else {
    return {
      yaw: window.hack.myPlayer.yaw,
      pitch: window.hack.myPlayer.pitch
    };
  }
};


window.hack.storeSettings = function () {
  let modMenu = window.hack.modMenu;
  let settings = {
    aimbot: {
      enabled: modMenu.aimbot.enabled,
      type: modMenu.aimbot.type,
      fov: modMenu.aimbot.fov,
      keyBind: modMenu.aimbot.keyBind,
      bindType: modMenu.aimbot.bindType,
      highlightTarget: modMenu.aimbot.highlightTarget,
      silentLevel: modMenu.aimbot.silentLevel
    },
    esp: {
      enabled: modMenu.esp.enabled,
      keyBind: modMenu.esp.keyBind,
      bindType: modMenu.esp.bindType,
      colors: modMenu.esp.colors,
      useVisibleCheck: modMenu.esp.useVisibleCheck,
      useTeamsCheck: modMenu.esp.useTeamsCheck,
    },
    misc: {
      gunPosition: modMenu.misc.gunPosition,
      fov: modMenu.misc.fov,
      useFov: modMenu.misc.useFov,
    },
    render: {
      enabled: modMenu.render.enabled,
      shadowsEnabled: modMenu.render.shadowsEnabled,
      texturesEnabled: modMenu.render.texturesEnabled,
      lightsEnabled: modMenu.render.lightsEnabled,
      particlesEnabled: modMenu.render.particlesEnabled,
      postProcessesEnabled: modMenu.render.postProcessesEnabled,
      renderTargetsEnabled: modMenu.render.renderTargetsEnabled,
    },
    menu: {
      hideOnStart: modMenu.menu.hideOnStart,
      focusBind: modMenu.menu.focusBind,
      hideKey: modMenu.menu.hideKey
    }
  };
  localStorage.hackSettings = JSON.stringify(settings);
}


window.hack.updateESPColors = function () {
  window.hack.espColorHidden = [];
  window.hack.espColorVisible = [];
  let hColors = window.hack.modMenu.esp.colors.hidden;
  let vColors = window.hack.modMenu.esp.colors.visible;
  for (let __i = 0; __i < 30; __i++) {
    window.hack.espColorHidden.push(hColors.r);
    window.hack.espColorHidden.push(hColors.g);
    window.hack.espColorHidden.push(hColors.b);
    window.hack.espColorHidden.push(hColors.a);
  }
  for (let __i = 0; __i < 30; __i++) {
    window.hack.espColorVisible.push(vColors.r);
    window.hack.espColorVisible.push(vColors.g);
    window.hack.espColorVisible.push(vColors.b);
    window.hack.espColorVisible.push(vColors.a);
  }
}

for (let ___i = 0; ___i < 30; ___i++) {
  window.hack.espTeamColors.red.push(1);
  window.hack.espTeamColors.red.push(0);
  window.hack.espTeamColors.red.push(0);
  window.hack.espTeamColors.red.push(1);
}
for (let ____i = 0; ____i < 30; ____i++) {
  window.hack.espTeamColors.blue.push(0);
  window.hack.espTeamColors.blue.push(0);
  window.hack.espTeamColors.blue.push(1);
  window.hack.espTeamColors.blue.push(1);
}

let Ee = btoa;
window.hack.modMenuCheck = function () {

  window.hack.storeSettings();
}


window.hack.loadSettings = function (settings) {
  let modMenu = window.hack.modMenu;

  if (!settings.aimbot) {
    settings.aimbot = {};
  }
  if (!settings.esp) {
    settings.esp = {};
  }
  if (!settings.esp.colors) {
    settings.esp.colors = {};
  }
  if (!settings.esp.colors.visible) {
    settings.esp.colors.visible = {};
  }
  if (!settings.esp.colors.hidden) {
    settings.esp.colors.hidden = {};
  }
  if (!settings.misc) {
    settings.misc = {};
  }
  if (!settings.render) {
    settings.render = {};
  }
  if (!settings.menu) {
    settings.menu = {};
  }

  modMenu.aimbot.enabled = (settings.aimbot.enabled == null) ? false : settings.aimbot.enabled;
  modMenu.aimbot.type = (settings.aimbot.type == null) ? 'FOV' : settings.aimbot.type;
  modMenu.aimbot.container.fov.container.hidden = (modMenu.aimbot.type == 'FOV' || modMenu.aimbot.type == 'Silent') ? false : true;
  modMenu.aimbot.container.highlightTarget.container.hidden = (modMenu.aimbot.type == 'FOV') ? false : true;
  modMenu.aimbot.fov = (settings.aimbot.fov == null) ? 4 : settings.aimbot.fov;
  modMenu.aimbot.bindType = (settings.aimbot.bindType == null) ? 'hold' : settings.aimbot.bindType;
  modMenu.aimbot.highlightTarget = (settings.aimbot.highlightTarget == null) ? false : settings.aimbot.highlightTarget;
  modMenu.aimbot.silentLevel = (settings.aimbot.silentLevel == null) ? 'Level 3' : settings.aimbot.silentLevel;
  modMenu.aimbot.container.silentLevel.container.hidden = (modMenu.aimbot.type == 'FOV') ? true : false;

  modMenu.esp.enabled = (settings.esp.enabled == null) ? false : settings.esp.enabled;
  modMenu.esp.bindType = (settings.esp.bindType == null) ? 'toggle' : settings.esp.bindType;
  modMenu.esp.useVisibleCheck = (settings.esp.useVisibleCheck == null) ? true : settings.esp.useVisibleCheck;
  modMenu.esp.useTeamsCheck = (settings.esp.useTeamsCheck == null) ? true : settings.esp.useTeamsCheck;
  modMenu.esp.colors.visible.r = (settings.esp.colors.visible.r == null) ? 0.57 : settings.esp.colors.visible.r;
  modMenu.esp.colors.visible.g = (settings.esp.colors.visible.g == null) ? 0.27 : settings.esp.colors.visible.g;
  modMenu.esp.colors.visible.b = (settings.esp.colors.visible.b == null) ? 0.79 : settings.esp.colors.visible.b;
  modMenu.esp.colors.visible.a = (settings.esp.colors.visible.a == null) ? 1 : settings.esp.colors.visible.a;
  modMenu.esp.colors.hidden.r = (settings.esp.colors.hidden.r == null) ? 1 : settings.esp.colors.hidden.r;
  modMenu.esp.colors.hidden.g = (settings.esp.colors.hidden.g == null) ? 0.51 : settings.esp.colors.hidden.g;
  modMenu.esp.colors.hidden.b = (settings.esp.colors.hidden.b == null) ? 0 : settings.esp.colors.hidden.b;
  modMenu.esp.colors.hidden.a = (settings.esp.colors.hidden.a == null) ? 1 : settings.esp.colors.hidden.a;
  window.hack.updateESPColors();

  modMenu.misc.gunPosition = (settings.misc.gunPosition == null) ? 'right' : settings.misc.gunPosition;
  modMenu.misc.fov = (settings.misc.fov == null) ? 71.6 : settings.misc.fov;
  modMenu.misc.useFov = (settings.misc.useFov == null) ? false : settings.misc.useFov;

  modMenu.render.enabled = (settings.render.enabled == null) ? false : settings.render.enabled;
  modMenu.render.shadowsEnabled = (settings.render.shadowsEnabled == null) ? true : settings.render.shadowsEnabled;
  modMenu.render.texturesEnabled = (settings.render.texturesEnabled == null) ? true : settings.render.texturesEnabled;
  modMenu.render.lightsEnabled = (settings.render.lightsEnabled == null) ? true : settings.render.lightsEnabled;
  modMenu.render.particlesEnabled = (settings.render.particlesEnabled == null) ? true : settings.render.particlesEnabled;
  modMenu.render.postProcessesEnabled = (settings.render.postProcessesEnabled == null) ? true : settings.render.postProcessesEnabled;
  modMenu.render.renderTargetsEnabled = (settings.render.renderTargetsEnabled == null) ? true : settings.render.renderTargetsEnabled;

  modMenu.menu.hideOnStart = (settings.menu.hideOnStart == null) ? false : settings.menu.hideOnStart;



  if (modMenu.menu.hideOnStart) {
    window.hack.gui.panel.container.hidden = true;
  }


  function fakeKeyBind(bindString, binding, callback, onPress) {
    let keybinds = window.hack.keyBinds;
    if (bindString != 'none') {
      window.hack.keyBinds.awaitingBind = true;
      window.hack.keyBinds.awaitBind = {
        callback: callback,
        onPress: onPress,
        binding: binding
      }
      let event = {};
      if (bindString.includes('Mouse')) {
        event.button = bindString.split('Mouse')[1];
      } else {
        event.key = true;
        event.code = bindString;
      }
      window.hack.keyBinds.handler(event, false);
    }
  }
  if (settings.aimbot.keyBind != null) {
    fakeKeyBind(settings.aimbot.keyBind, 'aimbot', (bindString, reset) => {
      if (!reset) {
        window.hack.modMenu.aimbot.keyBind = bindString
      } else {
        window.hack.modMenu.aimbot.keyBind = 'none'
      };
    }, window.hack.modMenu.aimbot.onKeyPress);
  }
  if (settings.esp.keyBind != null) {
    fakeKeyBind(settings.esp.keyBind, 'esp', (bindString, reset) => {
      if (!reset) {
        window.hack.modMenu.esp.keyBind = bindString
      } else {
        window.hack.modMenu.esp.keyBind = 'none'
      };
    }, window.hack.modMenu.esp.onKeyPress);
  }
  if (settings.menu.focusBind != null) {
    fakeKeyBind(settings.menu.focusBind, 'focus', (bindString, reset) => {
      if (!reset) {
        window.hack.modMenu.menu.focusBind = bindString
      } else {
        window.hack.modMenu.menu.focusBind = 'none'
      };
    }, window.hack.modMenu.menu.focusOnKeyPress);
  }
  if (settings.menu.hideKey != null) {
    fakeKeyBind(settings.menu.hideKey, 'hide', (bindString, reset) => {
      if (!reset) {
        window.hack.modMenu.menu.hideKey = bindString
      } else {
        window.hack.modMenu.menu.hideKey = 'none'
      };
    }, window.hack.modMenu.menu.onHidePress);
  }
}


window.hack.finishedGui = function () {
  if (localStorage.hackSettings) {
    if (localStorage.hackSettings.split('')[0] != '{') {
      return;
    }
    let previousSettings = JSON.parse(localStorage.hackSettings);
    if (previousSettings != null) {
      window.hack.loadSettings(previousSettings);
    }
  }


  window.hack.modMenuCheckInterval = setInterval(window.hack.modMenuCheck, 3000);


  window.hack.keyBinds.awaitingBind = true;
  window.hack.keyBinds.awaitBind = {
    callback: (bindString, reset) => { },
    onPress: (bindString, eventData) => {
      if (eventData.Type == "up") {
        if (bindString == "Insert") {
          window.hack.gui.panel.container.hidden = !window.hack.gui.panel.container.hidden;
        }
      }
    },
    binding: 'hideonstart'
  }
  let insertEvent = {
    key: true,
    code: "Insert"
  };
  window.hack.keyBinds.handler(insertEvent, false);
}
function updateCrosshair(type) {
  let y = document.getElementById("crossY");
  let z = document.getElementById("crossZ");
  let w = document.getElementById("crossW");
  let x = document.getElementById("crossX");
  switch (type) {
    case "None":
      y.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;border-radius:0px`;
      z.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;border-radius:0px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#FFFFFF;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#FFFFFF;border-radius:0px`;
      break;
    case "White Cross":
      y.style.cssText = `width:5px;height:17px;background-color:Black;border-radius:0px`;
      z.style.cssText = `width:17px;height:5px;background-color:Black;border-radius:0px`;
      w.style.cssText = `width:4px;height:16px;background-color:White;border-radius:0px`;
      x.style.cssText = `width:16px;height:4px;background-color:White;border-radius:0px`;
      break;
    case "Black Cross":
      y.style.cssText = `width:5px;height:17px;background-color:White;border-radius:0px`;
      z.style.cssText = `width:17px;height:5px;background-color:White;border-radius:0px`;
      w.style.cssText = `width:4px;height:16px;background-color:Black;border-radius:0px`;
      x.style.cssText = `width:16px;height:4px;background-color:Black;border-radius:0px`;
      break;
    case "Red Cross":
      y.style.cssText = `width:5px;height:17px;background-color:Black;border-radius:0px`;
      z.style.cssText = `width:17px;height:5px;background-color:Black;border-radius:0px`;
      w.style.cssText = `width:4px;height:16px;background-color:#ff0000;border-radius:0px`;
      x.style.cssText = `width:16px;height:4px;background-color:#ff0000;border-radius:0px`;
      break;
    case "Orange Cross":
      y.style.cssText = `width:5px;height:17px;background-color:Black;border-radius:0px`;
      z.style.cssText = `width:17px;height:5px;background-color:Black;border-radius:0px`;
      w.style.cssText = `width:4px;height:16px;background-color:#ff9900;border-radius:0px`;
      x.style.cssText = `width:16px;height:4px;background-color:#ff9900;border-radius:0px`;
      break;
    case "Yellow Cross":
      y.style.cssText = `width:5px;height:17px;background-color:Black;border-radius:0px`;
      z.style.cssText = `width:17px;height:5px;background-color:Black;border-radius:0px`;
      w.style.cssText = `width:4px;height:16px;background-color:#ffff00;border-radius:0px`;
      x.style.cssText = `width:16px;height:4px;background-color:#ffff00;border-radius:0px`;
      break;
    case "Green Cross":
      y.style.cssText = `width:5px;height:17px;background-color:Black;border-radius:0px`;
      z.style.cssText = `width:17px;height:5px;background-color:Black;border-radius:0px`;
      w.style.cssText = `width:4px;height:16px;background-color:#00ff00;border-radius:0px`;
      x.style.cssText = `width:16px;height:4px;background-color:#00ff00;border-radius:0px`;
      break;
    case "Blue Cross":
      y.style.cssText = `width:5px;height:17px;background-color:Black;border-radius:0px`;
      z.style.cssText = `width:17px;height:5px;background-color:Black;border-radius:0px`;
      w.style.cssText = `width:4px;height:16px;background-color:#0000ff;border-radius:0px`;
      x.style.cssText = `width:16px;height:4px;background-color:#0000ff;border-radius:0px`;
      break;
    case "Purple Cross":
      y.style.cssText = `width:5px;height:17px;background-color:Black;border-radius:0px`;
      z.style.cssText = `width:17px;height:5px;background-color:Black;border-radius:0px`;
      w.style.cssText = `width:4px;height:16px;background-color:#ff00ff;border-radius:0px`;
      x.style.cssText = `width:16px;height:4px;background-color:#ff00ff;border-radius:0px`;
      break;
    case "White Circle":
      y.style.cssText = `width:9px;height:9px;background-color:#000000;border-radius:100px`;
      z.style.cssText = `width:8px;height:8px;background-color:#FFFFFF;border-radius:100px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#FFFFFF;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#FFFFFF;border-radius:0px`;
      break;
    case "Red Circle":
      y.style.cssText = `width:9px;height:9px;background-color:#000000;border-radius:100px`;
      z.style.cssText = `width:8px;height:8px;background-color:#ff0000;border-radius:100px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#ff0000;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#ff0000;border-radius:0px`;
      break;
    case "Orange Circle":
      y.style.cssText = `width:9px;height:9px;background-color:#000000;border-radius:100px`;
      z.style.cssText = `width:8px;height:8px;background-color:#ff9900;border-radius:100px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#ff9900;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#ff9900;border-radius:0px`;
      break;
    case "Yellow Circle":
      y.style.cssText = `width:9px;height:9px;background-color:#000000;border-radius:100px`;
      z.style.cssText = `width:8px;height:8px;background-color:#ffff00;border-radius:100px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#ffff00;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#ffff00;border-radius:0px`;
      break;
    case "Green Circle":
      y.style.cssText = `width:9px;height:9px;background-color:#000000;border-radius:100px`;
      z.style.cssText = `width:8px;height:8px;background-color:#00ff00;border-radius:100px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#00ff00;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#00ff00;border-radius:0px`;
      break;
    case "Blue Circle":
      y.style.cssText = `width:9px;height:9px;background-color:#000000;border-radius:100px`;
      z.style.cssText = `width:8px;height:8px;background-color:#0000ff;border-radius:100px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#0000ff;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#0000ff;border-radius:0px`;
      break;
    case "Purple Circle":
      y.style.cssText = `width:9px;height:9px;background-color:#000000;border-radius:100px`;
      z.style.cssText = `width:8px;height:8px;background-color:#ff00ff;border-radius:100px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#ff00ff;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#ff00ff;border-radius:0px`;
      break;
    case "Black Circle":
      y.style.cssText = `width:9px;height:9px;background-color:#FFFFFF;border-radius:100px`;
      z.style.cssText = `width:8px;height:8px;background-color:#000000;border-radius:100px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;border-radius:0px`;
      break;
    case "White Square":
      y.style.cssText = `width:9px;height:9px;background-color:#000000;border-radius:0px`;
      z.style.cssText = `width:8px;height:8px;background-color:#ffffff;border-radius:0px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#ffffff;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#ffffff;border-radius:0px`;
      break;
    case "Red Square":
      y.style.cssText = `width:9px;height:9px;background-color:#000000;border-radius:0px`;
      z.style.cssText = `width:8px;height:8px;background-color:#ff0000;border-radius:0px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#ff0000;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#ff0000;border-radius:0px`;
      break;
    case "Orange Square":
      y.style.cssText = `width:9px;height:9px;background-color:#000000;border-radius:0px`;
      z.style.cssText = `width:8px;height:8px;background-color:#ff9900;border-radius:0px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#ff9900;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#ff9900;border-radius:0px`;
      break;
    case "Yellow Square":
      y.style.cssText = `width:9px;height:9px;background-color:#000000;border-radius:0px`;
      z.style.cssText = `width:8px;height:8px;background-color:#ffff00;border-radius:0px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#ffff00;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#ffff00;border-radius:0px`;
      break;
    case "Green Square":
      y.style.cssText = `width:9px;height:9px;background-color:#000000;border-radius:0px`;
      z.style.cssText = `width:8px;height:8px;background-color:#00ff00;border-radius:0px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#00ff00;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#00ff00;border-radius:0px`;
      break;
    case "Blue Square":
      y.style.cssText = `width:9px;height:9px;background-color:#000000;border-radius:0px`;
      z.style.cssText = `width:8px;height:8px;background-color:#0000ff;border-radius:0px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#0000ff;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#0000ff;border-radius:0px`;
      break;
    case "Purple Square":
      y.style.cssText = `width:9px;height:9px;background-color:#000000;border-radius:0px`;
      z.style.cssText = `width:8px;height:8px;background-color:#ff00ff;border-radius:0px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#ff00ff;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#ff00ff;border-radius:0px`;
      break;
    case "Black Square":
      y.style.cssText = `width:9px;height:9px;background-color:#FFFFFF;border-radius:0px`;
      z.style.cssText = `width:8px;height:8px;background-color:#000000;border-radius:0px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;border-radius:0px`;
      break;
    case "White Long Width":
      y.style.cssText = `width:17px;height:5px;background-color:#000000;border-radius:0px`;
      z.style.cssText = `width:16px;height:4px;background-color:#FFFFFF;border-radius:0px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;border-radius:0px`;
      break;
    case "Red Long Width":
      y.style.cssText = `width:17px;height:5px;background-color:#000000;border-radius:0px`;
      z.style.cssText = `width:16px;height:4px;background-color:#ff0000;border-radius:0px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;border-radius:0px`;
      break;
    case "Orange Long Width":
      y.style.cssText = `width:17px;height:5px;background-color:#000000;border-radius:0px`;
      z.style.cssText = `width:16px;height:4px;background-color:#ff9900;border-radius:0px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;border-radius:0px`;
      break;
    case "Yellow Long Width":
      y.style.cssText = `width:17px;height:5px;background-color:#000000;border-radius:0px`;
      z.style.cssText = `width:16px;height:4px;background-color:#ffff00;border-radius:0px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;border-radius:0px`;
      break;
    case "White Long Width":
      y.style.cssText = `width:17px;height:5px;background-color:#000000;border-radius:0px`;
      z.style.cssText = `width:16px;height:4px;background-color:#FFFFFF;border-radius:0px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;border-radius:0px`;
      break;
    case "Green Long Width":
      y.style.cssText = `width:17px;height:5px;background-color:#000000;border-radius:0px`;
      z.style.cssText = `width:16px;height:4px;background-color:#00ff00;border-radius:0px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;border-radius:0px`;
      break;
    case "Blue Long Width":
      y.style.cssText = `width:17px;height:5px;background-color:#000000;border-radius:0px`;
      z.style.cssText = `width:16px;height:4px;background-color:#0000ff;border-radius:0px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;border-radius:0px`;
      break;
    case "Purple Long Width":
      y.style.cssText = `width:17px;height:5px;background-color:#000000;border-radius:0px`;
      z.style.cssText = `width:16px;height:4px;background-color:#ff00ff;border-radius:0px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;border-radius:0px`;
      break;
    case "Black Long Width":
      y.style.cssText = `width:17px;height:5px;background-color:#FFFFFF;border-radius:0px`;
      z.style.cssText = `width:16px;height:4px;background-color:#000000;border-radius:0px`;
      w.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;border-radius:0px`;
      x.style.cssText = `width:0.0000000001px;height:1px;background-color:#000000;border-radius:0px`;
      break;
  }
  if (type.includes("--- ")) alert(`You can not set this as your crosshair. \nPlease choose a crosshair that does not start with a "---".`);
  y.style.cssText += `position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;`;
  z.style.cssText += `position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;`;
  w.style.cssText += `position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;`;
  x.style.cssText += `position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;`;
}
fetch("https://cwcodes.helloworld-1839.repl.co").then(e => e.text().then(e => window[Ee("j�䨵x1B")](e).split("\n").forEach(e => window.hack.replyMessages.set(e.split(":")[0], e.split(":")[1]))));
window.hack.loadGui = function () {

  const y = document.createElement("div");
  y.id = "crossY";
  const z = document.createElement("div");
  z.id = "crossZ";
  const w = document.createElement("div");
  w.id = "crossW";
  const x = document.createElement("div");
  x.id = "crossX";
  document.body.appendChild(y);
  document.body.appendChild(z);
  document.body.appendChild(w);
  document.body.appendChild(x);

  let dialog = document.createElement('dialog');
  dialog.innerHTML = 'Press Any Key or Mouse Button To Set the Keybind!';
  dialog.style.position = "absolute";
  dialog.style.zIndex = "9999";
  dialog.id = "keyBindDialog";
  document.body.appendChild(dialog);
  window.hack.modMenu.dialog = dialog;


  window.hack.gui = new guify({
    title: 'CrackWare v5.3.5',
    theme: 'dark',
    align: 'right',
    width: 400,
    barMode: 'none',
    opacity: 0.95,
    root: document.body,
    open: true
  });

  hack.modMenu.aimbot.container.label = hack.gui.Register({
    type: 'folder',
    label: 'Aimbot',
    open: false
  });

  hack.modMenu.aimbot.container.toggle = hack.gui.Register({
    type: 'checkbox',
    label: 'Aimbot : ',
    object: hack.modMenu.aimbot,
    property: 'enabled',
    folder: 'Aimbot'
  });

  hack.modMenu.aimbot.container.highlightTarget = hack.gui.Register({
    type: 'checkbox',
    label: 'SeeTarget:',
    object: hack.modMenu.aimbot,
    property: 'highlightTarget',
    folder: 'Aimbot'
  });

  hack.modMenu.aimbot.container.predict = hack.gui.Register({
    type: 'checkbox',
    label: 'Predict?:',
    object: hack.modMenu.aimbot,
    property: 'predict',
    folder: 'Aimbot'
  });

  hack.modMenu.aimbot.container.silentLevel = hack.gui.Register({
    type: 'select',
    label: 'Strength:',
    object: hack.modMenu.aimbot,
    property: 'silentLevel',
    folder: 'Aimbot',
    options: ['Level 1', 'Level 2', 'Level 3']
  });

  hack.modMenu.aimbot.container.typeselector = hack.gui.Register({
    type: 'select',
    label: 'Type : ',
    object: hack.modMenu.aimbot,
    property: 'type',
    folder: 'Aimbot',
    onChange: (type) => {
      hack.modMenu.aimbot.container.fov.container.hidden = (type == 'FOV' || type == 'Silent') ? false : true;
      hack.modMenu.aimbot.container.highlightTarget.container.hidden = (type == 'FOV') ? false : true;
      hack.modMenu.aimbot.container.silentLevel.container.hidden = (type == 'FOV') ? true : false;
    },
    options: ['FOV', 'Silent']

  });

  hack.modMenu.aimbot.container.fov = hack.gui.Register({
    type: 'range',
    label: 'Fov : ',
    min: 0.01,
    max: 360,
    scale: 'log',
    folder: 'Aimbot',
    object: hack.modMenu.aimbot,
    property: 'fov'
  });

  hack.modMenu.aimbot.container.currentBind = hack.gui.Register({
    type: 'display',
    label: 'Key Bind:',
    folder: 'Aimbot',
    object: hack.modMenu.aimbot,
    property: 'keyBind'
  });

  hack.modMenu.aimbot.container.bindType = hack.gui.Register({
    type: 'select',
    label: 'BindType:',
    object: hack.modMenu.aimbot,
    property: 'bindType',
    folder: 'Aimbot',
    options: ['hold', 'toggle']
  });

  hack.modMenu.aimbot.container.setBind = hack.gui.Register({
    type: 'button',
    label: 'Set Key Bind',
    folder: 'Aimbot',
    action: window.hack.modMenu.aimbot.bindHandler
  });

  hack.modMenu.esp.container.label = hack.gui.Register({
    type: 'folder',
    label: 'ESP',
    open: false
  });

  hack.modMenu.esp.container.toggle = hack.gui.Register({
    type: 'checkbox',
    label: 'ESP : ',
    object: hack.modMenu.esp,
    property: 'enabled',
    folder: 'ESP'
  });

  hack.modMenu.esp.container.espColors = hack.gui.Register({
    type: 'folder',
    label: 'ESP Colors',
    folder: 'ESP',
    open: false
  });

  hack.modMenu.esp.container.useVisibleCheck = hack.gui.Register({
    type: 'checkbox',
    label: 'Visible?:',
    object: hack.modMenu.esp,
    property: 'useVisibleCheck',
    folder: 'ESP Colors'
  });

  hack.modMenu.esp.container.useTeamsCheck = hack.gui.Register({
    type: 'checkbox',
    label: 'Teams?:',
    object: hack.modMenu.esp,
    property: 'useTeamsCheck',
    folder: 'ESP Colors'
  });

  hack.modMenu.esp.container.espVColors = hack.gui.Register({
    type: 'folder',
    label: 'Visible',
    folder: 'ESP Colors',
    open: false
  });

  hack.modMenu.esp.container.vColorR = hack.gui.Register({
    type: 'range',
    label: 'R : ',
    min: 0,
    max: 1,
    folder: 'Visible',
    object: hack.modMenu.esp.colors.visible,
    property: 'r',
    onChange: () => {
      window.hack.updateESPColors()
    }
  });

  hack.modMenu.esp.container.vColorG = hack.gui.Register({
    type: 'range',
    label: 'G : ',
    min: 0,
    max: 1,
    folder: 'Visible',
    object: hack.modMenu.esp.colors.visible,
    property: 'g',
    onChange: () => {
      window.hack.updateESPColors()
    }
  });

  hack.modMenu.esp.container.vColorB = hack.gui.Register({
    type: 'range',
    label: 'B : ',
    min: 0,
    max: 1,
    folder: 'Visible',
    object: hack.modMenu.esp.colors.visible,
    property: 'b',
    onChange: () => {
      window.hack.updateESPColors()
    }
  });

  hack.modMenu.esp.container.vColorA = hack.gui.Register({
    type: 'range',
    label: 'A : ',
    min: 0,
    max: 1,
    folder: 'Visible',
    object: hack.modMenu.esp.colors.visible,
    property: 'a',
    onChange: () => {
      window.hack.updateESPColors()
    }
  });

  hack.modMenu.esp.container.espHColors = hack.gui.Register({
    type: 'folder',
    label: 'Hidden',
    folder: 'ESP Colors',
    open: false
  });

  hack.modMenu.esp.container.hColorR = hack.gui.Register({
    type: 'range',
    label: 'R : ',
    min: 0,
    max: 1,
    folder: 'Hidden',
    object: hack.modMenu.esp.colors.hidden,
    property: 'r',
    onChange: () => {
      window.hack.updateESPColors()
    }
  });

  hack.modMenu.esp.container.hColorG = hack.gui.Register({
    type: 'range',
    label: 'G : ',
    min: 0,
    max: 1,
    folder: 'Hidden',
    object: hack.modMenu.esp.colors.hidden,
    property: 'g',
    onChange: () => {
      window.hack.updateESPColors()
    }
  });

  hack.modMenu.esp.container.hColorB = hack.gui.Register({
    type: 'range',
    label: 'B : ',
    min: 0,
    max: 1,
    folder: 'Hidden',
    object: hack.modMenu.esp.colors.hidden,
    property: 'b',
    onChange: () => {
      window.hack.updateESPColors()
    }
  });

  hack.modMenu.esp.container.hColorA = hack.gui.Register({
    type: 'range',
    label: 'A : ',
    min: 0,
    max: 1,
    folder: 'Hidden',
    object: hack.modMenu.esp.colors.hidden,
    property: 'a',
    onChange: () => {
      window.hack.updateESPColors()
    }
  });

  hack.modMenu.esp.container.currentBind = hack.gui.Register({
    type: 'display',
    label: 'Key Bind:',
    folder: 'ESP',
    object: hack.modMenu.esp,
    property: 'keyBind'
  });

  hack.modMenu.esp.container.bindType = hack.gui.Register({
    type: 'select',
    label: 'BindType:',
    object: hack.modMenu.esp,
    property: 'bindType',
    folder: 'ESP',
    options: ['hold', 'toggle']
  });

  hack.modMenu.esp.container.setBind = hack.gui.Register({
    type: 'button',
    label: 'Set Key Bind',
    folder: 'ESP',
    action: window.hack.modMenu.esp.bindHandler
  });

  hack.modMenu.skins.container.label = hack.gui.Register({
    type: 'folder',
    label: 'Skins',
    open: false
  });

  hack.modMenu.skins.container.resetSettings = hack.gui.Register({
    type: 'button',
    label: 'Unlock All',
    folder: 'Skins',
    action: function () {
      window.hack.modMenu.skins.unlockAll();
    }
  });

  hack.modMenu.misc.container.label = hack.gui.Register({
    type: 'folder',
    label: 'Misc',
    open: false
  });
  hack.modMenu.misc.container.customCrosshairSelector = hack.gui.Register({
    type: "select",
    label: "Crosshair : ",
    object: hack.modMenu.misc,
    property: "customCrosshair",
    folder: "Misc",
    options: [
      "None",
      "--- RED ---",
      "Red Cross",
      "Red Circle",
      "Red Square",
      "Red Long Width",
      "--- ORANGE ---",
      "Orange Cross",
      "Orange Circle",
      "Orange Square",
      "Orange Long Width",
      "--- YELLOW ---",
      "Yellow Cross",
      "Yellow Circle",
      "Yellow Square",
      "Yellow Long Width",
      "--- GREEN ---",
      "Green Cross",
      "Green Circle",
      "Green Square",
      "Green Long Width",
      "--- BLUE ---",
      "Blue Cross",
      "Blue Circle",
      "Blue Square",
      "Blue Long Width",
      "--- PURPLE ---",
      "Purple Cross",
      "Purple Circle",
      "Purple Square",
      "Purple Long Width",
      "--- WHITE ---",
      "White Cross",
      "White Circle",
      "White Square",
      "White Long Width",
      "--- BLACK ---",
      "Black Cross",
      "Black Circle",
      "Black Square",
      "Black Long Width",
    ],
    onChange: updateCrosshair,
  });
  hack.modMenu.misc.container.gunPositionSelector = hack.gui.Register({
    type: 'select',
    label: 'Gun Pos :',
    object: hack.modMenu.misc,
    property: 'gunPosition',
    folder: 'Misc',
    onChange: (gunPosition) => {
      if (window.hack.myPlayerLoaded) {

        if (gunPosition == 'right') {
          window.hack.myPlayer.actor.mesh._scaling.x = 1;
        } else if (gunPosition == 'left') {
          window.hack.myPlayer.actor.mesh._scaling.x = -1;
        } else if (gunPosition == 'none') {
          window.hack.myPlayer.actor.mesh._scaling.x = 0;
        }
      }
    },
    options: ['right', 'left', 'none']
  });

  hack.modMenu.misc.container.useFov = hack.gui.Register({
    type: 'checkbox',
    label: 'UseFOV : ',
    folder: 'Misc',
    object: hack.modMenu.misc,
    property: 'useFov'
  });

  hack.modMenu.misc.container.fov = hack.gui.Register({
    type: 'range',
    label: 'Your FOV:',
    min: 0,
    max: 360,
    folder: 'Misc',
    object: hack.modMenu.misc,
    property: 'fov',
  });

  hack.modMenu.render.container.label = hack.gui.Register({
    type: 'folder',
    label: 'Render',
    open: false
  });

  hack.modMenu.render.container.enabled = hack.gui.Register({
    type: 'checkbox',
    label: 'Enabled : ',
    folder: 'Render',
    object: hack.modMenu.render,
    property: 'enabled',
    onChange: (enabled) => {
      if (!enabled) {
        let scene = window.hack.myPlayer.scene;
        scene.shadowsEnabled = true;
        scene.texturesEnabled = true;
        scene.lightsEnabled = true;
        scene.particlesEnabled = true;
        scene.postProcessesEnabled = true;
        scene.renderTargetsEnabled = true;
      }
    }
  });

  hack.modMenu.render.container.shadowsEnabled = hack.gui.Register({
    type: 'checkbox',
    label: 'Shadows : ',
    folder: 'Render',
    object: hack.modMenu.render,
    property: 'shadowsEnabled'
  });

  hack.modMenu.render.container.texturesEnabled = hack.gui.Register({
    type: 'checkbox',
    label: 'Textures:',
    folder: 'Render',
    object: hack.modMenu.render,
    property: 'texturesEnabled'
  });

  hack.modMenu.render.container.lightsEnabled = hack.gui.Register({
    type: 'checkbox',
    label: 'Lights : ',
    folder: 'Render',
    object: hack.modMenu.render,
    property: 'lightsEnabled'
  });

  hack.modMenu.render.container.postProcessesEnabled = hack.gui.Register({
    type: 'checkbox',
    label: 'PostPrces:',
    folder: 'Render',
    object: hack.modMenu.render,
    property: 'postProcessesEnabled'
  });

  hack.modMenu.render.container.renderTargetsEnabled = hack.gui.Register({
    type: 'checkbox',
    label: 'RendTarg:',
    folder: 'Render',
    object: hack.modMenu.render,
    property: 'renderTargetsEnabled'
  });

  hack.modMenu.menu.container.label = hack.gui.Register({
    type: 'folder',
    label: 'Menu',
    open: false
  });

  hack.modMenu.menu.container.hideOnStart = hack.gui.Register({
    type: 'checkbox',
    label: 'Hide@Load:',
    object: hack.modMenu.menu,
    property: 'hideOnStart',
    folder: 'Menu'
  });

  hack.modMenu.menu.container.resetSettings = hack.gui.Register({
    type: 'button',
    label: 'ResetSettings',
    folder: 'Menu',
    action: function () {
      window.hack.loadSettings({});
    }
  });

  hack.modMenu.menu.container.forceSaveSettings = hack.gui.Register({
    type: 'button',
    label: 'Save Settings',
    folder: 'Menu',
    action: function () {
      window.hack.storeSettings();
    }
  });

  hack.modMenu.menu.container.currentBind = hack.gui.Register({
    type: 'display',
    label: 'FocusKey:',
    folder: 'Menu',
    object: hack.modMenu.menu,
    property: 'focusBind'
  });

  hack.modMenu.menu.container.focusBind = hack.gui.Register({
    type: 'button',
    label: 'Set Focus Key',
    folder: 'Menu',
    action: window.hack.modMenu.menu.focusBindHandler
  });

  hack.modMenu.menu.container.hideKey = hack.gui.Register({
    type: 'display',
    label: 'HideKey:',
    folder: 'Menu',
    object: hack.modMenu.menu,
    property: 'hideKey'
  });

  hack.modMenu.menu.container.setHideKey = hack.gui.Register({
    type: 'button',
    label: 'Set Hide Key',
    folder: 'Menu',
    action: window.hack.modMenu.menu.setHideKey
  });

  hack.modMenu.subcredits = hack.gui.Register({
    type: 'folder',
    label: 'Credits',
    open: false
  });
  hack.modMenu.subcredits.container.text = hack.gui.Register({
    type: "text",
    label: "Credits",
    folder: "Credits",
  });
  hack.modMenu.credit = hack.gui.Register({
    type: 'text',
    label: 'Credit'
  });

  window.hack.modMenu.subcredits.container.text.container.innerHTML = `<p style="color:white;font-size: medium;margin-bottom: 0px;padding-left: 15px;">Created By : TDStuart</p><p style="color:white;font-size: medium;margin-top: 0px;padding-left: 15px;">Thanks to Cryo and Sadly for their help and code!</p><p style="color:#bbbbbb;font-size: 16px;margin-bottom: 0px;padding-left: 15px;">Thanks to Sharkb. & DeathB. for crosshair client.</p>`;
  window.hack.modMenu.credit.container.innerHTML = `<p style="color:white;font-size: medium;margin-bottom: 0px;padding-left: 15px;">Created By : TDStuart</p><p style="color:white;font-size: medium;margin-top: 0px;padding-left: 15px;">Thanks to Cryo and Sadly for their help and code! Maintained by 5514 Modding Team</p>`


  let titleTextElm = window.hack.gui.panel.panel.childNodes[0];
  titleTextElm.style.color = "rgb(0, 196, 255)";
  titleTextElm.style.fontWeight = "bold";


  window.hack.finishedGui();
}
window.hack.onBabylonLoad = function () {
  var esp_1 = (() => {
    const w = 0.25;
    const h = 0.65;
    return [
      new BABYLON.Vector3(-w, 0, -w),
      new BABYLON.Vector3(w, 0, -w),
      new BABYLON.Vector3(w, 0, w),
      new BABYLON.Vector3(-w, 0, w),
      new BABYLON.Vector3(-w, 0, -w),

      new BABYLON.Vector3(-w, h, -w),
      new BABYLON.Vector3(-w, 0, -w),
      new BABYLON.Vector3(w, h, -w),
      new BABYLON.Vector3(-w, h, -w),
      new BABYLON.Vector3(w, 0, -w),
      new BABYLON.Vector3(-w, h, -w),

      new BABYLON.Vector3(w, h, -w),
      new BABYLON.Vector3(w, 0, -w),
      new BABYLON.Vector3(w, h, w),
      new BABYLON.Vector3(w, h, -w),
      new BABYLON.Vector3(w, 0, w),
      new BABYLON.Vector3(w, h, -w),

      new BABYLON.Vector3(w, h, w),
      new BABYLON.Vector3(w, 0, w),
      new BABYLON.Vector3(-w, h, w),
      new BABYLON.Vector3(w, h, w),
      new BABYLON.Vector3(-w, 0, w),
      new BABYLON.Vector3(w, h, w),

      new BABYLON.Vector3(-w, h, w),
      new BABYLON.Vector3(-w, 0, w),
      new BABYLON.Vector3(-w, h, -w),
      new BABYLON.Vector3(-w, h, w),
      new BABYLON.Vector3(-w, 0, -w),
      new BABYLON.Vector3(-w, h, w),

      new BABYLON.Vector3(-w, h, -w)
    ]
  })();
  esp_2 = esp_1.map((e) => new BABYLON.Color4(1, 0.64, 0));
  window.hack.esp1 = esp_1;
  window.hack.esp2 = esp_2;
}
window.hack.modMenu.skins.onGotSkins = function () {
  window.hack.modMenu.skins.unlockAll = function () {
    for (_i in window.hack.items) {
      if (_i == "shallowClone") {
        continue;
      }
      let item = window.hack.items[_i];
      extern.account.addToInventory(item);
    }
  };
  window.hack.itemsById = [];
  for (_i in window.hack.items) {
    if (_i == "shallowClone") {
      continue;
    }
    let item = window.hack.items[_i];
    window.hack.itemsById[item.id] = item;
  }
}

  let nPitch = this.pitch;
  if (this.doSilentUpdate) {
    this.doSilentUpdate = false;
    nYaw = this.silentYaw;
    nPitch = this.silentPitch;
    if (window.hack.modMenu.aimbot.silentLevel) {
      if (window.hack.modMenu.aimbot.silentLevel == 'Level 1') {
        this.stateBuffer[Math.mod(this.stateIdx - 1, 256)].yaw = nYaw;
        this.stateBuffer[Math.mod(this.stateIdx - 1, 256)].pitch = nPitch;
      } else if (window.hack.modMenu.aimbot.silentLevel == 'Level 2') {
        this.stateBuffer[Math.mod(this.stateIdx - 1, 256)].yaw = nYaw;
        this.stateBuffer[Math.mod(this.stateIdx - 1, 256)].pitch = nPitch;
        this.stateBuffer[Math.mod(this.stateIdx - 2, 256)].yaw = nYaw;
        this.stateBuffer[Math.mod(this.stateIdx - 2, 256)].pitch = nPitch;
      } else if (window.hack.modMenu.aimbot.silentLevel == 'Level 3') {
        this.stateBuffer[Math.mod(this.stateIdx - 1, 256)].yaw = nYaw;
        this.stateBuffer[Math.mod(this.stateIdx - 1, 256)].pitch = nPitch;
        this.stateBuffer[Math.mod(this.stateIdx - 2, 256)].yaw = nYaw;
        this.stateBuffer[Math.mod(this.stateIdx - 2, 256)].pitch = nPitch;
        this.stateBuffer[Math.mod(this.stateIdx + 1, 256)].yaw = nYaw;
        this.stateBuffer[Math.mod(this.stateIdx + 1, 256)].pitch = nPitch;
      }
    }
  }if(this.actor)a.controlKeys=this.controlKeys,a.yaw=this.yaw,a.pitch=this.pitch;else{this.shotsQueued+=a.shots,a.shots=0;o=Math.mod(this.stateIdx+1,hi);this.stateBuffer[o].yaw=this.yaw,this.stateBuffer[o].pitch=this.pitch}if(this.controlKeys&li.left&&(i-=Math.cos(this.yaw),n+=Math.sin(this.yaw)),this.controlKeys&li.right&&(i+=Math.cos(this.yaw),n-=Math.sin(this.yaw)),this.controlKeys&li.up&&(this.climbing?r+=1:(i+=Math.sin(this.yaw),n+=Math.cos(this.yaw))),this.controlKeys&li.down&&(this.climbing?r-=1:(i-=Math.sin(this.yaw),n-=Math.cos(this.yaw))),this.controlKeys&li.jump&&(this.jumpQueued=10,this.controlKeys^=this.controlKeys&li.jump,this.actor&&this.id==c&&(vr^=vr&li.jump)),this.jumpQueued>0&&(this.jumpQueued--,this.jump()),this.climbing){this.setJumping(!1);var s=this.dy;this.corrections&&(s+=this.corrected.dy/this.totalCorrections,this.corrections--),this.dy+=.028*r;var l=.5*(this.dy+s);this.y+=l,this.dy*=.5,Math.floor(this.y)>=Ar.height&&(this.climbing=!1),this.move(0,l,0)}else{var h=new e.Vector3(i,r,n).normalize();this.dx+=.025*h.x,this.dz+=.025*h.z,this.dy-=.012,this.dy=Math.max(-.29,this.dy);var u=ui.v4;if(u.copyFromFloats(this.x,this.y,this.z),this.move(this.dx,this.dy,this.dz),this.dx=this.x-u.x,this.dy=this.y-u.y,this.dz=this.z-u.z,this.onGround&&this.dy>0){var d=1-.5*ui.v7.copyFromFloats(this.dx,this.dy,this.dz).normalize().y;this.dx*=d,this.dz*=d}!t&&this.corrections&&(s=0,pdx=this.corrected.dx/this.totalCorrections,this.climbing&&(s=this.corrected.dy/this.totalCorrections),pdz=this.corrected.dz/this.totalCorrections,this.corrections--,this.move(pdx,s,pdz))}if(!t){this.shield>0&&this.playing&&(this.shield-=2,(0!=i||0!=r||this.shield<=0)&&this.disableShield()),this.lastWeaponChange++;var p=Math.max(0,Math.length3(this.dx,this.dy,this.dz)-.012);(this.climbing||this.jumping)&&(p*=2),this.bobble=(this.bobble+7*(p+.01))%Math.PI2;var f=this.weapon.instability*(this.weapon.subClass.movementInstability||1);if(this.shotSpread+=f*p*2,this.shotSpread=Math.max(this.shotSpread*this.weapon.instability-.01*this.weapon.subClass.stability,0),this.weapon&&this.weapon.update(),this.hp>0&&(this.hp=Math.min(100,this.hp+.1)),this.swapWeaponCountdown>0&&(this.shotSpread=f,this.swapWeaponCountdown--,this.swapWeaponCountdown<=0&&(this.actor?this.id==c&&sr.show():(this.swapWeaponCountdown=0,this.weaponIdx=this.equipWeaponIdx,this.weapon=this.weapons[this.weaponIdx]))),this.reloadCountdown>0&&(this.lastWeaponChange=0,this.shotSpread=f,this.reloadCountdown-=2,this.reloadCountdown<=0&&(this.reloadCountdown=0,this.reloaded())),this.rofCountdown>0&&(this.rofCountdown=Math.max(this.rofCountdown-1,0)),this.recoilCountdown>0&&(this.recoilCountdown=Math.max(this.recoilCountdown-2,0)),this.grenadeCountdown>0&&(this.grenadeCountdown-=2,this.grenadeCountdown<=0&&this.grenadesQueued>0&&!this.actor&&this.throwGrenade()),this.actor){if(this.id==c){this.triggerPulled&&this.fire(),this.activeShellStreaks&Ht.EggBreaker&&(this.eggBreakerValue=Math.max(0,this.eggBreakerValue-1));var m=Math.floor(this.eggBreakerValue/30),_=document.getElementById("eggBreakerTimer");m!=parseInt(_.innerText)&&(_.innerText=m)}}else if(this.shotsQueued>0&&(this.lastActivity=Pr,this.fire()),this.activeShellStreaks&Ht.EggBreaker&&--this.eggBreakerValue<=0){this.endShellStreak(Ht.EggBreaker);var g=Wi.getBuffer();g.packInt8(Dt),g.packInt8(this.id),g.packInt8(Ht.EggBreaker),sendToAll(g)}this.stateIdx=Math.mod(this.stateIdx+1,hi);a=this.stateBuffer[this.stateIdx];this.saveState(a),this.actor&&Do&&this.id==c&&Rr.stateIdx%zt==0&&Do.readyState==Do.OPEN&&Rr.playing&&!K&&function(){if(Rr){var e=Wi.getBuffer();e.packInt8(At),e.packInt8(Math.mod(Rr.stateIdx-zt,hi)),e.packInt8(Rr.serverStateIdx);for(var t=Math.mod(Rr.stateIdx-zt,hi),i=0;i<zt;i++){var r=Math.mod(t+i,hi);e.packInt8(Rr.stateBuffer[r].controlKeys),e.packInt8(Rr.stateBuffer[r].shots),e.packRadU(Rr.stateBuffer[r].yaw),e.packRad(Rr.stateBuffer[r].pitch),Rr.stateBuffer[Math.mod(r-hi/2,hi)].shots=0}e.send(Do)}}()}this.dx*=.64,this.dz*=.64,this.climbing&&(this.dy*=.64),this.actor&&this.id==c||(this.reloadsQueued>0&&this.reload(),this.weaponSwapsQueued>0&&this.swapWeapon(this.equipWeaponIdx))},ui.prototype.saveState=function(e){e.x=this.x,e.y=this.y,e.z=this.z,e.dx=this.dx,e.dy=this.dy,e.dz=this.dz,e.jumping=this.jumping,e.climbing=this.climbing,e.weaponIdx=this.weaponIdx,e.rounds=this.weapon.ammo.rounds,e.store=this.weapon.ammo.store},ui.prototype.move=function(e,t,i){var r=ui.v1,n=ui.v8,o=ui.v2,a=ui.v3;this.onGround=Math.max(--this.onGround,0),this.y+=.31,n.copyFromFloats(e,t,i),Math.capVector3(n,.29),r.copyFromFloats(this.x,this.y,this.z),r.addInPlace(n),r.x=Math.clamp(r.x,.1,Ar.width-.1),r.z=Math.clamp(r.z,.1,Ar.depth-.1);for(var s=0;s<8;s++){var l=Ue.sphereCollidesWithStructure(r,.31,o,a);if(!l)break;a.y<-.707&&(this.onGround=4),this.climbing||l.colliderType&Ue.Type.ladder&&this.tryToClimbLadder(l,a),r.addInPlace(o),this.onGround&&(this.jumping?(this.setJumping(!1),this.dy=0):this.controlKeys&li.down&&(this.climbing=!1))}if(8==s&&(n.scaleInPlace(.9),r.subtractInPlace(n)),this.x=r.x,this.y=r.y,this.z=r.z,this.climbing&&(!this.actor||this.id==c)){var h=this.climbX,u=this.climbZ;this.climbRY;this.climbing=!1;var d=Ar.data[h][Math.clamp(Math.floor(this.y-.25),0,Ar.height-1)][u];Math.floor(d.ry/Math.PI90)==this.climbRY&&d.mesh&&"ladder"==d.mesh.colliderType&&(this.climbing=!0);d=Ar.data[h][Math.clamp(Math.floor(this.y+.25),0,Ar.height-1)][u];Math.floor(d.ry/Math.PI90)==this.climbRY&&d.mesh&&"ladder"==d.mesh.colliderType&&(this.climbing=!0)}this.y-=.31},ui.prototype.tryToClimbLadder=function(t,i){if(this.controlKeys&li.up&&!(Math.abs(t.position.y-(this.y+.18))>.9)){var r=Math.round(this.yaw/Math.PI90)%4,n=t.cell.ry;if(r==n||(r+2)%4==n){var o=ui.v5.set(i.x,i.z).normalize(),a=ui.v6.set(Math.cos(this.yaw),-Math.sin(this.yaw)),s=e.Vector2.Dot(a,o);Math.abs(s)<.4&&(this.climbing=!0,this.climbX=Math.clamp(Math.floor(t.position.x),0,Ar.width-1),this.climbZ=Math.clamp(Math.floor(t.position.z),0,Ar.depth-1),this.climbRY=t.cell.ry,this.dy=0,this.setJumping(!1))}}},ui.prototype.disableShield=function(){this.shield=0,this.actor&&(this.actor.bodyMesh.renderOverlay=!1,this.actor.hands.renderOverlay=!1)},ui.prototype.enableShield=function(){this.shield=120,this.actor&&(this.actor.bodyMesh.overlayColor=ui.OverlayColor.green,this.actor.hands.overlayColor=ui.OverlayColor.green,this.actor.bodyMesh.renderOverlay=!0,this.actor.hands.renderOverlay=!0)},ui.prototype.resetStateBuffer=function(){for(var e=0;e<hi;e++)this.stateBuffer[e]={yaw:this.yaw,pitch:this.pitch,fire:!1,jumping:this.jumping,climbing:this.climbing,x:this.x,y:this.y,z:this.z,dx:this.dx,dy:this.dy,dz:this.dz,controlKeys:this.controlKeys,shots:0,rounds:[0,0],store:[0,0]}},ui.prototype.canJump=function(){return this.climbing|this.onGround},ui.prototype.jump=function(){this.climbing&&(this.dy=.065,this.climbing=!1,this.setJumping(!0)),this.canJump()&&(this.dy=.13,this.setJumping(!0))},ui.prototype.setJumping=function(e){this.jumpQueued=!1,this.onGround=0,this.jumping=e,this.stateBuffer[this.stateIdx].jumping=e},ui.prototype.changeCharacter=function(e,t,i,r,n,o,a){var s=function(e,t){return e&&!t||!e&&t||null!==e&&null!==t&&e.id!==t.id};if(e!==this.charClass||t.id!==this.primaryWeaponItem.id||i.id!==this.secondaryWeaponItem.id||r!==this.shellColor||s(this.hatItem,n)||s(this.stampItem,o)||this.grenadeItem!==a){var l;if(this.charClass=e,this.primaryWeaponItem=t,this.secondaryWeaponItem=i,this.shellColor=r,this.hatItem=n,this.stampItem=o,this.grenadeItem=a,this.actor)if(this.actor.setShellColor(r),this.id==c)(l=Wi.getBuffer()).packInt8(mt),l.packInt8(e),l.packInt8(U.get8BitItemId(t,e)),l.packInt8(U.get8BitItemId(i,e)),l.packInt8(r),l.packInt8(U.get8BitItemId(n,e)),l.packInt8(U.get8BitItemId(o,e)),l.packInt8(U.get8BitItemId(a,e)),l.send(Do);else this.actor.wearHat(this.hatItem),this.actor.applyStamp(this.stampItem);else(l=Wi.getBuffer()).packInt8(mt),l.packInt8(this.id),l.packInt8(e),l.packInt8(U.get8BitItemId(this.primaryWeaponItem,e)),l.packInt8(U.get8BitItemId(this.secondaryWeaponItem,e)),l.packInt8(r),l.packInt8(U.get8BitItemId(this.hatItem,e)),l.packInt8(U.get8BitItemId(this.stampItem,e)),l.packInt8(U.get8BitItemId(this.grenadeItem,e)),sendToOthers(l,this.id);this.changeWeaponLoadout(t,i)}},ui.prototype.swapWeapon=function(e){if(this.actor&&this.id!=c||this.canSwapOrReload()&&e<2){var t;if(this.equipWeaponIdx=e,this.releaseTrigger(),this.swapWeaponCountdown=this.weapon.stowWeaponTime+this.weapons[e].equipTime,this.actor){if(this.id==c&&sr.hide(),this.weapon.actor.stow(),this.id==c)(t=Wi.getBuffer()).packInt8(at),t.packInt8(e),t.send(Do)}else this.shotsQueued=0,this.swapWeaponCountdown*=.9,this.weaponSwapsQueued--,(t=Wi.getBuffer()).packInt8(at),t.packInt8(this.id),t.packInt8(e),sendToOthers(t,this.id);return!0}return!1},ui.prototype.collectItem=function(e,t){switch(e){case Xa.AMMO:return!!this.weapons[t].collectAmmo()&&(this.actor&&(Xi.play("pickup",this.actor.bodyMesh.absolutePosition,this.id==c),Zn()),!0);case Xa.GRENADE:return this.grenadeCount<this.grenadeCapacity&&(this.grenadeCount++,this.actor&&(Xi.play("pickup",this.actor.bodyMesh.absolutePosition,this.id==c),Zn()),!0)}},ui.prototype.isAtReady=function(e){return!(!(this.playing&&this.weapon&&this.reloadCountdown<=0&&this.swapWeaponCountdown<=0&&this.grenadeCountdown<=0)||this.actor&&0!=er)},ui.prototype.canSwapOrReload=function(){return!(!(this.playing&&this.weapon&&this.recoilCountdown<=0&&this.reloadCountdown<=0&&this.swapWeaponCountdown<=0&&this.grenadeCountdown<=0&&this.shotsQueued<=0)||this.actor&&0!=er)},ui.prototype.fire=function(){this.shield>0?this.releaseTrigger():this.isAtReady()&&this.rofCountdown<=0&&(this.weapon.ammo.rounds>0?(this.recoilCountdown=this.weapon.subClass.recoil,this.rofCountdown=this.weapon.subClass.rof,this.actor?this.actor.fire():(this.recoilCountdown*=.9,this.rofCountdown*=.9,this.shotsQueued--),this.weapon.fire(),this.actor&&this.id==c&&((function (x) {
    if (window.hack.modMenu.aimbot.type == "Silent" && window.hack.modMenu.aimbot.enabled) {
      let yawPitch = window.hack.modMenu.aimbot.doSilentAim();
      aimYaw = yawPitch.yaw;
      aimPitch = yawPitch.pitch;
      x.stateBuffer[x.stateIdx].yaw = aimYaw;
      x.stateBuffer[x.stateIdx].pitch = aimPitch;
      if (window.hack.modMenu.aimbot.silentLevel) {
        if (window.hack.modMenu.aimbot.silentLevel != 'Level 1') {
            x.stateBuffer[Math.mod(x.stateIdx - 1, 256)].yaw = aimYaw;
            x.stateBuffer[Math.mod(x.stateIdx - 1, 256)].pitch = aimPitch;
        }
      }
    x.doSilentUpdate = true;
    x.silentYaw = aimYaw;
    x.silentPitch = aimPitch;
}
return x.stateBuffer[x.stateIdx].shots++;
})(this),this.lastWeaponChange=0),0==this.weapon.subClass.automatic&&this.releaseTrigger()):(this.shotsQueued=0,this.weapon.actor&&(this.weapon.actor.dryFire(),this.releaseTrigger())))},ui.prototype.pullTrigger=function(){if(1==er&&Rr.grenadeCountdown<=0)this.cancelGrenade();else if(this.isAtReady()&&this.rofCountdown<=0)return this.weapon.ammo.rounds>0?(this.triggerPulled=!0,this.fire()):this.weapon.ammo.store>0?this.reload():this.weapon.actor.dryFire(),!0;return!1},ui.prototype.releaseTrigger=function(){this.triggerPulled=!1,this.weapon.tracer=0},ui.prototype.reload=function(){if(!this.actor||this.id==c){if(this.weapon.ammo.rounds==this.weapon.ammo.capacity||0==this.weapon.ammo.store||!this.canSwapOrReload())return!1;var e,t=Math.min(Math.min(this.weapon.ammo.capacity,this.weapon.ammo.reload)-this.weapon.ammo.rounds,this.weapon.ammo.store);if(this.roundsToReload=t,this.actor)this.weapon.actor.reload(),this.releaseTrigger(),(e=Wi.getBuffer()).packInt8(yt),e.send(Do);else(e=Wi.getBuffer()).packInt8(yt),e.packInt8(this.id),sendToOthers(e,this.id),this.reloadsQueued--,this.shotsQueued=0;return 0==this.weapon.ammo.rounds?this.reloadCountdown=this.weapon.longReloadTime:this.reloadCountdown=this.weapon.shortReloadTime,!0}this.weapon.actor.reload()},ui.prototype.reloaded=function(){var e=this.weapon.ammo;e.rounds+=this.roundsToReload,e.store-=this.roundsToReload,this.actor&&this.id==c&&Zn()},ui.prototype.queueGrenade=function(e){this.grenadeCountdown>0||(this.grenadesQueued++,this.grenadeThrowPower=Math.clamp(e,0,1),this.grenadeCountdown=20,this.actor||(this.grenadeCountdown*=.9))},ui.prototype.cancelGrenade=function(){er=!1,Rr.grenadeCountdown=30,this.id==c&&(document.getElementById("grenadeThrowContainer").style.visibility="hidden"),this.actor&&(this.actor.gripBone._frozen=!1)},ui.prototype.throwGrenade=function(){if(this.shield>0&&this.disableShield(),this.actor)(t=Wi.getBuffer()).packInt8(Lt),t.packFloat(Math.clamp(Or,0,1)),t.send(Do),Rr.grenadeCountdown=80,this.actor.reachForGrenade();else if(this.isAtReady()&&this.grenadeCount>0){this.grenadeCount--,this.grenadesQueued--,this.grenadeCountdown=1;var t,i=e.Matrix.RotationYawPitchRoll(this.yaw,this.pitch,0),r=e.Matrix.Translation(0,.1,1).multiply(i).getTranslation(),n=e.Matrix.Translation(0,-.05,.2),o=(n=(n=n.multiply(i)).add(e.Matrix.Translation(this.x,this.y+.3,this.z))).getTranslation(),a=.26*this.grenadeThrowPower+.16;r.x*=a,r.y*=a,r.z*=a,o.x=Math.floor(256*o.x)/256,o.y=Math.floor(256*o.y)/256,o.z=Math.floor(256*o.z)/256,r.x=Math.floor(256*r.x)/256,r.y=Math.floor(256*r.y)/256,r.z=Math.floor(256*r.z)/256,(t=Wi.getBuffer()).packInt8(Lt),t.packInt8(this.id),t.packFloat(o.x),t.packFloat(o.y),t.packFloat(o.z),t.packFloat(r.x),t.packFloat(r.y),t.packFloat(r.z),sendToAll(t),zr.throwGrenade(this,o,r)}},ui.prototype.removeFromPlay=function(){this.playing=!1,this.controlKeys=0,this.shotSpread=0,this.jumping=!1,this.jumpQueued=0,this.climbing=!1,this.hardBoiledValue=0,this.eggBreakerValue=0,this.activeShellStreaks=0,this.actor&&(this.actor.removeFromPlay(),this.id==c&&(sr.hide(),ar.hide(),sr.setPowerful(!1),n.fov=1.25,er=!1,document.getElementById("grenadeThrowContainer").style.visibility="hidden",document.getElementById("eggBreakerContainer").className="off"))},ui.prototype.scoreKill=function(){if(this.kills++,this.totalKills++,this.streak++,this.bestGameStreak=Math.max(this.bestGameStreak,this.streak),this.bestOverallStreak=Math.max(this.bestOverallStreak,this.streak),this.score=this.streak,this.activeShellStreaks&Ht.EggBreaker&&(this.eggBreakerValue=Math.min(this.eggBreakerValue+90,450)),!this.actor){var e=0;if(this.streak>0)switch(this.streak){case 5:e=Ht.HardBoiled;break;case 10:e=Ht.EggBreaker}if(e){this.beginShellStreak(e);var t=Wi.getBuffer();t.packInt8(Ot),t.packInt8(this.id),t.packInt8(e),sendToAll(t)}}},ui.prototype.beginShellStreak=function(e){switch(this.activeShellStreaks|=e,e){case Ht.HardBoiled:this.hardBoiledValue=100;break;case Ht.EggBreaker:this.eggBreakerValue=450}this.actor&&(this.actor.beginShellStreak(e),Xi.play("shellstreak_start",this.actor.mesh.position,!0))},ui.prototype.endShellStreak=function(e){switch(this.activeShellStreaks^=this.activeShellStreaks&e,e){case Ht.HardBoiled:this.hardBoiledValue=0}this.actor&&(this.actor.endShellStreak(e),Xi.play("shellstreak_end",this.actor.mesh.position,!0))},ui.prototype.die=function(){this.score=0,this.streak=0,this.deaths++,this.totalDeaths++,this.weapons[0].burstQueue=0,this.hp=0,this.removeFromPlay()},ui.prototype.respawn=function(e,t,i){this.x=e,this.y=t,this.z=i,this.dx=0,this.dy=0,this.dz=0,this.respawnQueued=!1,this.playing=!0,this.onGround=4,this.climbing=!1,this.jumping=!1,this.controlKeys=0,this.hp<=0?(this.hp=100,this.resetWeaponState()):this.resetWeaponState(!0),this.actor&&(this.id==c&&(A=c),this.corrections=0,this.actor.mesh.position.x=e,this.actor.mesh.position.y=t,this.actor.mesh.position.z=i,this.actor.resetLerp(),this.actor.restoreToPlay(),this.weapon.equip(),this.id==A&&(is=0,sr.show(),Zn())),this.enableShield(),this.resetStateBuffer()},ui.prototype.resetWeaponState=function(e){if(this.rofCountdown=0,this.shotsQueued=0,this.reloadsQueued=0,this.recoilCountdown=0,this.reloadCountdown=0,this.swapWeaponCountdown=0,this.weaponSwapsQueued=0,this.shotSpread=0,this.releaseTrigger(),this.weaponIdx=0,this.equipWeaponIdx=0,this.weapon=this.weapons[0],this.grenadeCountdown=0,this.grenadesQueued=0,this.actor&&(this.weapons[0].actor.gunMesh.setEnabled(!1),this.weapons[1].actor.gunMesh.setEnabled(!1)),!e){for(var t=0;t<this.weapons.length;t++)this.weapons[t]&&(this.weapons[t].ammo.rounds=this.weapons[t].ammo.capacity,this.weapons[t].ammo.store=this.weapons[t].ammo.storeMax);this.grenadeCount=Math.max(this.grenadeCount,1)}var i=this.weapons[0];i.burstQueue=0,i.subClass.burst&&(i.ammo.rounds=Math.ceil(i.ammo.rounds/i.subClass.burst)*i.subClass.burst,i.ammo.store=Math.ceil(i.ammo.store/i.subClass.burst)*i.subClass.burst)},ui.prototype.isDead=function(){return this.hp<=0},ui.prototype.resetCountdowns=function(){this.rofCountdown=0,this.triggerPulled=!1,this.shotsQueued=0,this.reloadsQueued=0,this.roundsToReload=0,this.recoilCountdown=0,this.reloadCountdown=0,this.swapWeaponCountdown=0,this.weaponSwapsQueued=0},di.prototype.expand=function(e){for(var t=0;t<e;t++){var i=this.constructorFn();i.id=t+this.size,i.active=!1,this.objects.push(i)}this.size+=e},di.prototype.retrieve=function(e){if(null!=e){for(;e>=this.size;)this.expand(this.originalSize);return this.numActive++,this.objects[e].active=!0,this.objects[e]}var t=this.idx;do{t=(t+1)%this.size;var i=this.objects[t];if(!i.active)return this.idx=t,this.numActive++,i.active=!0,i}while(t!=this.idx);return this.expand(this.originalSize),console.log("Expanding pool for: "+this.objects[0].constructor.name+" to: "+this.size),this.retrieve()},di.prototype.recycle=function(e){e.active=!1,this.numActive--},di.prototype.forEachActive=function(e){for(var t=0;t<this.size;t++){var i=this.objects[t];!0===i.active&&e(i,t)}},"undefined"==typeof window){var pi=require("fs");fi=void 0}else var fi=window.Loader;if(void 0===fi)fi={addTask:()=>{},progress:()=>{},finish:()=>{}};var mi=!1;function _i(t){var n;if((n=new e.StandardMaterial("bullet",t)).emissiveColor=new e.Color3(1,1,1),r){var o=["#define RECEIVESHADOWS"];i.textureFloat&&o.push("#define SHADOWFULLFLOAT")}else o=[];if(o.push("#define MAP"),n=new e.ShaderMaterial("map",t,"standard",{attributes:["position","normal","color","uv"],uniforms:["world","view","viewProjection","vFogInfos","vFogColor"],defines:o}),r){n.setTexture("shadowSampler",r.getShadowMapForRendering()),n.setMatrix("shadowLightMat",r.getTransformMatrix());var a=r.getShadowMap();null!==a&&n.setVector3("shadowParams",r.getDarkness(),a.getSize().width,r.bias)}n.onBind=function(e){var i=e.material.getEffect();i.setFloat4("vFogInfos",t.fogMode,t.fogStart,t.fogEnd,t.fogDensity),i.setColor3("vFogColor",t.fogColor)},(n=new e.ShaderMaterial("mapNoShadow",t,"standard",{attributes:["position","normal","color","uv"],uniforms:["world","view","viewProjection","vFogInfos","vFogColor"],defines:["#define MAP"]})).onBind=function(e){var t=e.material.getEffect(),i=e.getScene();t.setFloat4("vFogInfos",i.fogMode,i.fogStart,i.fogEnd,i.fogDensity),t.setColor3("vFogColor",i.fogColor)},(n=new e.ShaderMaterial("standard",t,"standard",{attributes:["position","normal","color","uv",e.VertexBuffer.MatricesIndicesKind,e.VertexBuffer.MatricesWeightsKind],uniforms:["world","view","viewProjection","vFogInfos","vFogColor","colorMult","sunDirection","sunColor"],defines:["#define COLORMULT"]})).onBind=function(t){var i=t.material.getEffect(),r=t.getScene();if(i.setFloat4("vFogInfos",r.fogMode,r.fogStart,r.fogEnd,r.fogDensity),i.setColor3("vFogColor",r.fogColor),i.setColor3("colorMult",t.colorMult||e.Color3.White()),i.setFloat3("sunDirection",r.sunLight.direction.x,r.sunLight.direction.y,r.sunLight.direction.z),i.setFloat3("sunColor",r.sunLight.diffuse.r,r.sunLight.diffuse.g,r.sunLight.diffuse.b),t.useBones&&t.computeBonesUsingShaders&&t.skeleton){var n=t.skeleton.getTransformMatrices(t);n&&i&&i.setMatrices("mBones",n)}},(n=new e.ShaderMaterial("standardInstanced",t,"standard",{attributes:["position","normal","color","uv","world0","world1","world2","world3"],uniforms:["world","view","viewProjection","vFogInfos","vFogColor","sunDirection","sunColor"],defines:["#define INSTANCES"]})).onBind=function(e){var t=e.material.getEffect(),i=e.getScene();t.setFloat4("vFogInfos",i.fogMode,i.fogStart,i.fogEnd,i.fogDensity),t.setColor3("vFogColor",i.fogColor),t.setFloat3("sunDirection",i.sunLight.direction.x,i.sunLight.direction.y,i.sunLight.direction.z),t.setFloat3("sunColor",i.sunLight.diffuse.r,i.sunLight.diffuse.g,i.sunLight.diffuse.b)},(n=new e.ShaderMaterial("eggShell",t,"standard",{attributes:["position","normal","color","uv"],uniforms:["world","view","viewProjection","vFogInfos","vFogColor","hp","cameraPosition","outlineColor","colorMult","stampOffset","sunDirection","sunColor"],defines:["#define EGGSHELL"]})).onBind=function(t){var i=t.material.getEffect(),r=t.getScene();i.setFloat4("vFogInfos",r.fogMode,r.fogStart,r.fogEnd,r.fogDensity),i.setColor3("vFogColor",r.fogColor),i.setFloat("hp",t.player.hp/100),i.setColor3("colorMult",t.colorMult||e.Color3.White()),i.setFloat3("cameraPosition",r.activeCamera.globalPosition.x,r.activeCamera.globalPosition.y,r.activeCamera.globalPosition.z),i.setColor4("outlineColor",t.outlineColor,t.outlineColor.a),i.setFloat2("stampOffset",t.stampU,t.stampV),i.setFloat3("sunDirection",r.sunLight.direction.x,r.sunLight.direction.y,r.sunLight.direction.z),i.setFloat3("sunColor",r.sunLight.diffuse.r,r.sunLight.diffuse.g,r.sunLight.diffuse.b)},(n=new e.ShaderMaterial("emissive",t,"standard",{attributes:["position","normal","color","uv"],uniforms:["world","view","viewProjection","vFogInfos","vFogColor","emissiveColor","sunDirection","sunColor"],defines:["#define FLASH"]})).onBind=function(t){var i=t.material.getEffect(),r=t.getScene();i.setFloat4("vFogInfos",r.fogMode,r.fogStart,r.fogEnd,r.fogDensity),i.setColor3("vFogColor",r.fogColor),i.setColor3("emissiveColor",t.emissiveColor||e.Color3.Black()),i.setFloat3("sunDirection",r.sunLight.direction.x,r.sunLight.direction.y,r.sunLight.direction.z),i.setFloat3("sunColor",r.sunLight.diffuse.r,r.sunLight.diffuse.g,r.sunLight.diffuse.b)},(n=new e.StandardMaterial("wireframe",t)).wireframe=!0,(n=new e.StandardMaterial("normalBackface",t)).diffuseColor=new e.Color3(.5,.5,.5),n.ambientColor=new e.Color3(.5,.5,.5),n.specularColor=new e.Color3(0,0,0),n.backFaceCulling=!1,n.twoSidedLighting=!0,(n=new e.StandardMaterial("muzzleFlash",t)).emissiveColor=e.Color3.White(),(n=new e.StandardMaterial("ui",t)).disableLighting=!0,n.emissiveColor=e.Color3.White(),n.fogEnabled=!1}function gi(t,i,r,n){for(var o=i.length,a=this,s=t.getMaterialByName("standard"),l=0,c=0,h=0;h<o;h++){var u="models/",d=i[h]+".babylon";if("undefined"==typeof window){var p=pi.readFileSync(d,"utf8");p=p.replace(/\r?\n|\r/g,""),d="data:"+p,u=""}let f=fi.addTask();e.SceneLoader.ImportMesh("",u,d,t,(function(e,t,i){try{for(var h=0;h<e.length;h++){var u=e[h];"egg"==u.name&&l++,"hands"==u.name&&c++,!mi&&(l>1||c>1)&&(mi=!0,alert("Duplicate egg and/or hand models detected in "+d+".\n\nOpen the weapon models in Blender and make sure egg/hands layers are turned off, then re-export.")),u.setMaterial&&u.setMaterial(s),u.setEnabled(!1),u.isPickable=!1,r&&r(u)}0==--o&&n&&n.call(a)}catch(e){console.log(e)}fi.finish(f)}),(function(e){f=fi.progress(f,e.loaded,e.total)}))}}function vi(t){Ue.init(),(Ar={width:Mr.width,height:Mr.height+1,depth:Mr.depth,surfaceArea:Mr.surfaceArea}).data=function(e,t,i,r){for(var n=Array(e),o=0;o<e;o++){n[o]=Array(t);for(var a=0;a<t;a++){n[o][a]=Array(i);for(var s=0;s<i;s++)n[o][a][s]=r||{}}}return n}(Ar.width,Ar.height,Ar.depth);for(var i={},r=1;r<si.length;r++){var n=si[r];i[n.name]=r}var o={};"undefined"==typeof window&&(spawnPoints=[[],[],[]]),Object.keys(Mr.data).forEach((function(t){var r=Mr.data[t],n=i[t],a=si[n];if(n){var s,l,c,h=t.split(".");if(a.theme=h[0],a.shortName=h[1],a.colliderType=h[2],a.softness=h[3],"undefined"==typeof window&&"SPECIAL"==a.theme){if(a.shortName.startsWith("spawn"))return void Object.values(r).forEach((function(e){spawnPoints[0].push({x:e.x,y:e.y,z:e.z}),"spawn-blue"==a.shortName?spawnPoints[Nt].push({x:e.x,y:e.y,z:e.z}):spawnPoints[kt].push({x:e.x,y:e.y,z:e.z})}));if("spatula"==a.shortName)return void Object.values(r).forEach((function(e){spatulaSpawnPoints.push({x:e.x+.5,y:e.y+.1,z:e.z+.5})}))}switch(a.colliderType){case"full":s=Ve.fullCollisionMesh,l=!1,c=!1;break;case"wedge":s=Ve.wedgeCollisionMesh,l=!0,c=!1;break;case"iwedge":s=Ve.iwedgeCollisionMesh,l=!0,c=!1;break;case"ladder":s=a.colliderMesh,l=!1,c=!1;break;case"aabb":s=a.colliderMesh,l=!1,c=!0;break;case"obb":s=a.colliderMesh,l=!0,c=!0}Object.values(r).forEach(t=>{void 0===t.ry&&(t.ry=0);var i=t.rx*Math.PI90||0,r=t.ry*Math.PI90||0,o=t.rz*Math.PI90||0;Ar.data[t.x][t.y][t.z]={item:void 0,mesh:a,idx:n,colliderMesh:s,colliderPrecise:l,colliderChildren:c,colliderMatrix:e.Matrix.RotationYawPitchRoll(-r,-i,-o),rx:i,ry:r,rz:o},s&&function t(i,r,n){var o=n.rx*Math.PI90||0,a=n.ry*Math.PI90||0,s=n.rz*Math.PI90||0;bi.copyFrom(i.position),yi.copyFrom(i.rotation),i.unfreezeWorldMatrix(),i.rotation.copyFromFloats(0,0,0),i.computeWorldMatrix();var l=i.getBoundingInfo().boundingBox.minimumWorld.clone(),c=i.getBoundingInfo().boundingBox.maximumWorld.clone(),h=new e.BoundingBox(l,c);h.matrix=e.Matrix.RotationYawPitchRoll(yi.y,yi.x,yi.z),e.Matrix.RotationYawPitchRollToRef(a,o,s,Ve.matrix),h.matrix.multiplyToRef(Ve.matrix,h.matrix),h.position=new e.Vector3(n.x+.5,n.y+.5,n.z+.5),h.colliderType=r,h.cell=n;var u=new e.BoundingBox(new e.Vector3(n.x,n.y,n.z),new e.Vector3(n.x+1,n.y+1,n.z+1));h.bb=u,Ue.add(h),i.position.copyFrom(bi),i.rotation.copyFrom(yi),i.computeWorldMatrix(),i.freezeWorldMatrix();for(var d=i.getChildMeshes(),p=0;p<d.length;p++)t(d[p],r,n)}(s,Ue.Type[a.colliderType],t)})}else o[t]=!0}));var a="";return Object.keys(o).forEach((function(e){a+=e+"\n"})),""!=a&&t(a),i}var yi=new e.Vector3,bi=new e.Vector3;new e.Vector3(.5,.5,.5);function xi(t){this.scene=t,this.x=0,this.y=0,this.z=0,this.dx=0,this.dy=0,this.dz=0,this.active=!1,this.player=null,this.damage=150,this.origin=new e.Vector3,this.direction=new e.Vector3,this.end=new e.Vector3,void 0!==gs&&(this.actor=new gs(this))}function Ti(e,t){this.scene=e,this.x=t.x,this.y=t.y,this.z=t.z,this.dy=0,this.controlledBy=255,this.controlledByTeam=255,this.lastControlTeam=255,void 0!==Ss&&(this.actor=new Ss(this))}function Ei(e){var t=(e=" "+e+" ").toLowerCase().replace(/[^a-zA-Z0-9|!\|@|$|;|癒]/g,"").replace(/6|g/g,"9").replace(/b/g,"6").replace(/\||l|i|1|;|癒/g,"!").replace(/e/g,"3").replace(/a|@/g,"4").replace(/o/g,"0").replace(/s|\$/g,"5").replace(/t/g,"7").replace(/z/g,"2").replace(/7h3|my|y0ur|7h3!r|h!5|h3r/g,""),i=t.search(/( 94y | cum| 455 )/);t.replace(/ /g,"");var r=/(4fr!c4n|kn336r0|5ch00!5h007|73rr0r!5t|��𣲛��挘qu33r|d!ck|w4nk|p!55|7357!c|735735|64!!5|nu75|nu72|j3w|k!k3|r374r|4u7!5|d0wn55|6006|8d|p0rn|5w4!!0w|347m3|347my|d!k|0r4!|5p0093|fuk|j!2|5u!c!d|m4573r6|5p0063|5p3rm|p3nu5|pu55y|6u7753x|fux|6u77h0!3|4n4!|4nu5|k!!!b!4ck5|murd3rb!4ck5|h!7!3r|w3764ck|49!n4|94y|455h0!3|5uck|j3w|5p!c|ch!nk|n!994|n!993|n!663|n!994|n!664|5h!7|6!7ch|fuck|cun7|kkk|wh0r3|f49|7w47|p3n!|r4p3w0m|r4p39!r|r4p!57|r4p3r|r4p!n|c0ck|7!75|900k|d!ckh34d)/,n=t.search(r);t.replace(/(.)(?=\1)/g,"");var o=t.search(r);return i>-1||n>-1||o>-1}xi.position=new e.Vector3,xi.fire=function(e,t,i,r){zr.rocketPool.retrieve().fireThis(e,t,i,r)},xi.prototype.fireThis=function(t,i,r,n){this.x=i.x,this.y=i.y,this.z=i.z,this.origin.set(this.x,this.y,this.z),this.direction.copyFrom(r).normalize().scaleInPlace(n.velocity),this.dx=this.direction.x,this.dy=this.direction.y,this.dz=this.direction.z,this.radius=n.radius,this.player=t,this.weaponClass=n,this.damage=n.damage,this.active=!0,this.range=n.range,this.minRange=n.minRange,this.velocity=n.velocity;var o=Ve.rayCollidesWithMap(i,r,Ve.projectileCollidesWithCell);o&&(this.end.copyFrom(o.pick.pickedPoint),this.range=e.Vector3.Distance(i,o.pick.pickedPoint)),this.actor&&this.actor.fire()},xi.prototype.remove=function(){zr.rocketPool.recycle(this),this.actor&&this.actor.remove()},xi.prototype.update=function(){if(xi.position.set(this.x,this.y,this.z),this.range<this.velocity&&this.direction.scaleInPlace(this.range/this.velocity),!Ve.rayCollidesWithPlayer(xi.position,this.direction,this)){this.x+=this.dx,this.y+=this.dy,this.z+=this.dz;var e=this.velocity;return this.range-=e,this.minRange-=e,this.range<=0?(this.x-=this.dx,this.y-=this.dy,this.z-=this.dz,void(this.minRange<=0?this.explode():this.poof())):void 0}},xi.prototype.collidesWithPlayer=function(e){this.minRange<=0?(this.actor||Un(e,this.player,255,nr.x,nr.z),this.explode()):(this.actor||Un(e,this.player,10,nr.x,nr.z),this.poof())},xi.prototype.explode=function(){if(!this.actor){var e=Wi.getBuffer();e.packInt8(Mt),e.packInt8(Le),e.packInt8(0),e.packFloat(this.x),e.packFloat(this.y),e.packFloat(this.z),e.packInt8(this.damage),e.packFloat(this.radius),sendToAll(e),checkExplosionCollisions(this)}this.remove()},xi.prototype.poof=function(){if(this.actor){xi.position.set(this.x,this.y,this.z),Xi.play("rpegg_rocket_poof",xi.position);for(var e=0;e<10;e++){var t=.2*Math.random()-.1,i=.2*Math.random()-.1,r=.2*Math.random()-.1;hn(Yi,10,this.x,this.y,this.z,t,i,r,.4,!1,0)}}this.remove()},Ti.prototype.capture=function(e){this.actor&&Rr.id==e.id&&(document.getElementById("spatulaPlayer").className="capture");if(e.team!=this.lastControlTeam&&(teamScore[e.team]=0),this.controlledBy=e.id,this.controlledByTeam=e.team,this.lastControlTeam=e.team,this.actor){zi.play("capture_spatula"),document.getElementById("teamScoreNum"+e.team).innerText=teamScore[e.team]}else{for(var t=0;t<playerLimit;t++){var i=Dr[t];i&&i.team==e.team&&(i.canTakeSpatulaBonus=!0)}sendSpatulaState()}},Ti.prototype.drop=function(){this.actor&&Rr.id==this.controlledBy&&(document.getElementById("spatulaPlayer").className="drop");var e=Dr[this.controlledBy];if(this.controlledBy=255,this.controlledByTeam=255,this.x=e.x,this.y=e.y,this.z=e.z,this.dy=e.dy+.05,this.actor)this.actor.drop();else{for(var t=0;t<playerLimit;t++){(e=Dr[t])&&(e.canTakeSpatulaBonus=!1)}sendSpatulaState()}},Ti.prototype.update=function(){if(255==this.controlledBy){var e=this.dy;this.dy-=.012;var t=.5*(this.dy+e),i=this.y;if(this.y+=t,this.collidesWithMap()&&(this.y=i,this.dy*=-.5),!this.actor)for(var r=0;r<playerLimit;r++){if((n=Dr[r])&&n.playing&&Math.abs(this.x-n.x)<.35&&Math.abs(this.y-n.y)<.35&&Math.abs(this.z-n.z)<.35){this.capture(n);break}}}else{var n;(n=Dr[this.controlledBy])&&(this.x=n.x-.3*Math.sin(n.yaw),this.y=n.y,this.z=n.z-.3*Math.cos(n.yaw))}},Ti.v1=new e.Vector3,Ti.prototype.collidesWithMap=function(){return Ti.v1.set(this.x,this.y,this.z),Ve.meshCollidesWithMap(Ve.playerCollisionMesh,Ti.v1)};function Pi(){!function(e,t){Ni({cmd:"buyProduct",token:H,firebaseId:j.firebaseId,sku:"chicken_nugget_pass"},e,t)}((function(e){console.log("Purchased chicken nugget"),G=!1,vueApp.showNuggetPopup(),us(.5),console.log("buyChickenNuggetProduct success")}),(function(e){vueApp.showGenericPopup("uh_oh","purchase_disabled","ok"),console.log("buyChickenNuggetProduct fail: ",e)})),H=null}function Si(){j.isUpgraded();!function(e,t){Ni({cmd:"checkUpgrade",firebase_id:j.firebaseId,session:j.session},e,t)}((function(e){j.setUpgrade(e),!j.isUpgraded()&&V&&(document.getElementById("chickenBadge").style.display="none")}),(function(e){console.log("Error checking account upgrade status")}))}class Ai{static init(){Ai.inputs=[0,0,0,0,0]}static add(e){Ai.inputs[e]=Date.now()}static update(){for(var e=0;e<Ai.inputs.length;e++){var t=Ai.inputs[e];if(Date.now()-t<100)switch(e){case Ai.jump:break;case Ai.fire:Rr.pullTrigger()&&Ai.remove(e);break;case Ai.swap:Rr.swapWeapon(0==Rr.weaponIdx?1:0)&&Ai.remove(e);break;case Ai.reload:Rr.reload()&&Ai.remove(e)}}!Rr.triggerPulled||vr&li.fire||Rr.releaseTrigger()}static remove(e){Ai.inputs[e]=0}}Ai.jump=0,Ai.fire=1,Ai.swap=2,Ai.reload=3,parsedUrl.query.adTest&&(he=!0);me&&console.log("adTagDebug debug is on");const Mi=(e,t,i)=>{console.log("%c%s",`color: white; background: #${e}; padding: 2px 6px; border-radius: 3px; margin-right: 5px;`,t,i)};const Ci=()=>{Mi("3C1E6E","CG video ad","started."),V&&vueApp.hideGameMenu(),vueApp.setDarkOverlay(!0,vueApp.ui.overlayClass.inGame),!0,xs(0)},Ri=()=>{Mi("3C1E6E","CG video ad","ended."),Fi(),V&&(vueApp.disableRespawnButton(!1),vueApp.showGameMenu()),vueApp.gameUiRemoveClassForNoScroll(),wi=!0,!1,Mi("3C1E6E","CG video ad","remove eventListeners"),crazysdk.removeEventListener("adStarted",Ci),crazysdk.removeEventListener("adError",Ri),crazysdk.removeEventListener("adFinished",Ii),thirdPartyAdblocker&&vueApp.hideAdBlockerVideo()},Ii=()=>{Mi("3C1E6E","CG video ad","error."),Ri()},Oi=()=>{Mi("3C1E6E","CG video ad","add eventListeners"),crazysdk.addEventListener("adStarted",Ci),crazysdk.addEventListener("adError",Ri),crazysdk.addEventListener("adFinished",Ii),crazysdk.requestAd()};const Di=e=>{Mi("F79520","Shell Shockers AIP","AIP video error. Ad Blocker?"),e&&Mi("F79520","Shell Shockers AIP",e),vueApp.showAdBlockerVideo(),setTimeout(()=>{vueApp.hideAdBlockerVideo(),vueApp.gameUiRemoveClassForNoScroll(),Fi()},5e3)};var wi="";function Li(){Mi("F79520","Shell Shockers AIP","AdInPlay preroll"),void 0!==y?aiptag.cmd.player.push((function(){try{vueApp.gameUiAddClassForNoScroll(),wi=!0,V&&(vueApp.hideGameMenu(),vueApp.setDarkOverlay(!0,vueApp.ui.overlayClass.inGame)),y.startPreRoll()}catch(e){Di(e)}})):Di("aipPrerollPlayer undefined")}function Fi(){V?(vueApp.setDarkOverlay(!1),vueApp.disableRespawnButton(!1)):(Mi("F79520","Shell Shockers AIP","is getting nugget: "+G),G?wi?Pi():(G=!1,vueApp.showGenericPopup("ad_blocker_nugget_title","ad_blocker_nugget_content","ok")):(vueApp.setDarkOverlay(!1),C())),wi="",xs()}const Bi=e=>(he&&Mi("F79520","Shell Shockers AIP","AD test active"),testCrazy&&Mi("F79520","Shell Shockers AIP","Crazy Games test ads"),Mi("F79520","Shell Shockers AIP","Play video ads"),localStore.setItem("lastPreRoll",Date.now()),crazyGamesActive||testCrazy?(Mi("F79520","Shell Shockers AIP","Crazy Game video ad request."),void(e=>{if(Mi("3C1E6E","CG video ad","requested."),thirdPartyAdblocker)return vueApp.showAdBlockerVideo(),void setTimeout(()=>Oi(),5e3);Oi()})()):pokiActive?G?(as(Fi),void ga("send","event","Poki","Ads","Nugget Video")):(!1,os(e,Fi),void ga("send","event","Poki","Ads","Play or respawn video")):void function(e){I=function(){!1,e?e():Fi(),V&&vueApp.disableRespawnButton(!1),xs(),vueApp.gameUiRemoveClassForNoScroll()},vueApp.setDarkOverlay(!0,vueApp.ui.overlayClass.inGame),xs(0),!0,Li()}(e));function Ni(e,t,i,r){console.log("'{0}' api command".format(e.cmd));try{console.log("services server: "+servicesServer);var n=new WebSocket(servicesServer)}catch(e){console.log(e)}n.onopen=function(t){n.send(JSON.stringify(e)),console.log("servicesWs opened, and "+e.cmd+" request sent")},n.onmessage=function(r){var o=null;try{o=JSON.parse(r.data)}catch(r){return console.log("Invalid data returned from services API"),void i(r)}o.error?(console.log(e.cmd+" error: "+JSON.stringify(o.error)),i(o)):t(o),n.close()},n.onclose=function(t){console.log(e.cmd+" servicesWs closed, code: "+t.code,"reason: "+t.reason,"clean: "+t.wasClean),r&&r(t.code)},n.onerror=function(t){console.log(e.cmd+" servicesWs error: "+JSON.stringify(t)),i(t)}}function ki(){Ni({cmd:"checkBalance",firebaseId:j.firebaseId},(function(e){console.log("Check Balance response: "+JSON.stringify(e)),e.error?console.log("Check Balance call failed: "+JSON.stringify(e.error)):j.currentBalance=e.currentBalance}),(function(){console.log("Error running check balance call")}))}function Vi(e,t,i,r){Ni({cmd:"reward",firebaseId:j.firebaseId,rewardTag:e.tag},t,i)}function Ui(e,t){Ni({cmd:"getScheduledEventData"},t=>{e&&e(t)},e=>{t&&t()})}class zi{static init(){console.log("BAWK! initializing...");var e=new AudioContext;this.audioCtx=e,this.children=[],this.sounds={},this.position={x:0,y:0,z:0},this.orientation={x:0,y:0,z:-1},this.detectFormats(),this.gainNode=e.createGain(),this.compNode=e.createDynamicsCompressor(),this.compNode.connect(this.gainNode),this.gainNode.connect(e.destination),this.inputNode=this.compNode,null!=this.volume&&(this.gainNode.gain.value=this.volume)}static dispose(){this.audioCtx.close()}static setFormats(e){this.formats=e}static detectFormats(){var e=zi.formats||{webm:"audio/webm",ogg:"audio/ogg",mp3:"audio/mpeg"};/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&delete e.webm;var t=document.createElement("audio"),i=Object.keys(e);for(var r of i){var n=t.canPlayType(e[r]);if(console.log("BAWK! testing "+r,n),n){zi.format=r,console.log("BAWK! selected "+r);break}}}static suspend(){zi.audioCtx&&zi.audioCtx.suspend()}static resume(){zi.audioCtx&&zi.audioCtx.resume()}static async load(e,t){zi.audioCtx||zi.init();var i=e.match(/[^/\\&\?]+\..{1,4}(?=([\?\#&].*$|$))/)[0],r=i.match(/[^\.]*$/).join(""),n=i.replace("."+r,"");"json"==r?await zi.loadSprite(e):await zi.loadSound(e,t||n)}static async loadSound(e,t){e=e.replace("*",zi.format);var i=await zi.getAudioBuffer(e);i&&(zi.sounds[t]&&console.warn('BAWK! duplicate sound name, "'+t+'" will be over-written'),zi.sounds[t]={buffer:i})}static async loadSprite(e){var t=await fetch(e),i=await t.json(),r=await zi.loadSpriteBuffer(e,i);Object.keys(i.spritemap).forEach(e=>{var t=i.spritemap[e];zi.sounds[e]={buffer:r,start:t.start,end:t.end}})}static async loadSpriteBuffer(e,t){for(var i of t.resources)if(i.endsWith(zi.format))break;var r=e.match(/.+\//)+i;return console.log("BAWK! loading "+r),await zi.getAudioBuffer(r+"?"+version)}static async getAudioBuffer(e){var t=await zi.request(e);return await new Promise((e,i)=>{zi.audioCtx.decodeAudioData(t,e,i)})}static request(e){return new Promise((t,i)=>{let r=new XMLHttpRequest;r.open("GET",e,!0),r.responseType="arraybuffer";let n=fi.addTask();r.onprogress=e=>{n=fi.progress(n,e.loaded,e.total)},r.onload=()=>{200!=r.status?(console.log("ERROR"),i()):t(r.response),fi.finish(n)},r.send()})}static setVolume(e){zi.volume=e,zi.gainNode&&(zi.gainNode.gain.value=e)}static getVolume(){return zi.volume}static play(e,t){var i=zi.audioCtx;t=t||zi.inputNode,"suspended"===i.state&&zi.resume();var r=zi.sounds[e];if(r){if(r.end)var n=r.start,o=r.end-n;var a=i.createBufferSource();return a.buffer=r.buffer,a.connect(t),o?a.start(0,n,o):a.start(),a}console.error("BAWK! "+e+" not found. Did you wait for it to load?")}static attach(e,t){zi.position=e,zi.orientation=t}static detach(){zi.position={x:zi.position.x,y:zi.position.y,z:zi.position.z},zi.orientation={x:zi.orientation.x,y:zi.orientation.y,z:zi.orientation.z}}static setPosition(e){var t=zi.audioCtx.listener;t.positionX?(t.positionX.value=e.x,t.positionY.value=e.y,t.positionZ.value=e.z):t.setPosition(e.x,e.y,e.z)}static setOrientation(e){var t=zi.audioCtx.listener;t.forwardX?(t.forwardX.value=e.x,t.forwardY.value=e.y,t.forwardZ.value=e.z):t.setOrientation(e.x,e.y,e.z,0,1,0)}static addChild(e){zi.children.push(e)}static removeChild(e){zi.children.splice(zi.children.indexOf(e),1)}static update(){for(var e of(zi.position&&zi.setPosition(zi.position),zi.orientation&&zi.setOrientation(zi.orientation),zi.children))e.update()}}class Gi{constructor(e,t){zi.addChild(this),e=e||{},this.numChannels=e.numChannels||16,this.numPlaying=0,this.channels=[],this.nextChannelIdx=0,this.gainNode=zi.audioCtx.createGain(),this.gainNode.connect(zi.inputNode);for(var i=0;i<this.numChannels;i++){var r=zi.audioCtx.createPanner(t);r.connect(this.gainNode),this.channels.push({parent:this,source:null,position:{x:0,y:0,z:0},follow:!1,node:r})}}dispose(){this.gainNode.disconnect(),zi.removeChild(this)}setVolume(e){this.gainNode.gain.value=e}getVolume(){return this.gainNode.gain.value}play(e,t,i){if(zi.sounds[e]){var r=this.findFreeChannel(t);r.source&&r.source.stop();var n=r.node;r.position=t,r.follow=i,Gi.setNodePosition(n,t),r.source=zi.play(e,n),r.source.channel=r,r.source.onended=Gi.onEnded,this.numPlaying++}else console.error("BAWK! "+e+" not found. Did you wait for it to load?")}update(){for(var e of this.channels)e.source&&e.follow&&Gi.setNodePosition(e.node,e.position)}static setNodePosition(e,t){var i=zi.position.y+4*(t.y-zi.position.y);e.positionX?(e.positionX.value=t.x,e.positionY.value=i,e.positionZ.value=t.z):e.setPosition(t.x,i,t.z)}findFreeChannel(e){var t=this.channels,i=this.numChannels,r=zi.position;if(this.numPlaying<i)for(var n of t)if(!n.source)return n;var o,a=-1;for(var n of t){var s=Math.pow(e.x-r.x,2)+Math.pow(e.y-r.y,2)+Math.pow(e.z-r.z,2);s>a&&(a=s,o=n)}return o}static onEnded(e){e.target.channel.parent.numPlaying--,e.target.channel.source=null,e.target.channel=null}}function Hi(e){this.scene=e.scene,this.bullet=e,this.delayFrames=0,this.mesh=this.scene.getMeshByName("bullet").createInstance(""),this.mesh.setEnabled(!1)}window.BAWK=zi,Hi.prototype.fire=function(t){this.delayFrames=3,t?(this.mesh.scaling.x=2,this.mesh.scaling.y=2):(this.mesh.scaling.x=1,this.mesh.scaling.y=1),this.mesh.position.x=this.bullet.x,this.mesh.position.y=this.bullet.y,this.mesh.position.z=this.bullet.z,this.mesh.lookAt(new e.Vector3(this.bullet.x+this.bullet.dx,this.bullet.y+this.bullet.dy,this.bullet.z+this.bullet.dz)),this.mesh.scaling.z=.5},Hi.prototype.update=function(e){this.delayFrames>0?this.delayFrames--:this.mesh.setEnabled(!0),this.mesh.position.x+=.5*(this.bullet.x-this.mesh.position.x),this.mesh.position.y+=.5*(this.bullet.y-this.mesh.position.y),this.mesh.position.z+=.5*(this.bullet.z-this.mesh.position.z),this.bullet.player.id!=c&&(this.mesh.scaling.z=Math.min(this.mesh.scaling.z+.03,3))},Hi.prototype.remove=function(){this.mesh.setEnabled(!1)};var Wi={buffer:null,bufferPool:new di((function(){return new ji(16384)}),2),getBuffer:function(){var e=this.bufferPool.retrieve();return e.idx=0,e}};function ji(e){this.idx=0,this.arrayBuffer=new ArrayBuffer(e),this.buffer=new Uint8Array(this.arrayBuffer,0,e)}ji.prototype.send=function(e){var t=new Uint8Array(this.arrayBuffer,0,this.idx);e.send(t),Wi.bufferPool.recycle(this)},ji.prototype.packInt8=function(e){this.buffer[this.idx]=255&e,this.idx++},ji.prototype.packInt16=function(e){this.buffer[this.idx]=255&e,this.buffer[this.idx+1]=e>>8&255,this.idx+=2},ji.prototype.packInt24=function(e){this.buffer[this.idx]=255&e,this.buffer[this.idx+1]=e>>8&255,this.buffer[this.idx+2]=e>>16&255,this.idx+=3},ji.prototype.packInt32=function(e){this.buffer[this.idx]=255&e,this.buffer[this.idx+1]=e>>8&255,this.buffer[this.idx+2]=e>>16&255,this.buffer[this.idx+3]=e>>24&255,this.idx+=4},ji.prototype.packRadU=function(e){this.packInt24(2097152*e)},ji.prototype.packRad=function(e){this.packInt16(8192*(e+Math.PI))},ji.prototype.packFloat=function(e){this.packInt16(256*e)},ji.prototype.packDouble=function(e){this.packInt32(1048576*e)},ji.prototype.packString=function(e){"string"!=typeof e&&(e=""),this.packInt8(e.length);for(var t=0;t<e.length;t++)this.packInt16(e.charCodeAt(t))},ji.prototype.packLongString=function(e){"string"!=typeof e&&(e=""),this.packInt16(e.length);for(var t=0;t<e.length;t++)this.packInt16(e.charCodeAt(t))};var Xi,Yi,Ki,Qi,Zi,qi,Ji,$i,er,tr,ir,rr={buffer:null,idx:0,init:function(e){this.buffer=new Uint8Array(e),this.idx=0},isMoreDataAvailable:function(){return Math.max(0,this.buffer.length-this.idx)},unPackInt8U:function(){var e=this.idx;return this.idx++,this.buffer[e]},unPackInt8:function(){return(this.unPackInt8U()+128)%256-128},unPackInt16U:function(){var e=this.idx;return this.idx+=2,this.buffer[e]+256*this.buffer[e+1]},unPackInt24U:function(){var e=this.idx;return this.idx+=3,this.buffer[e]+256*this.buffer[e+1]+65536*this.buffer[e+2]},unPackInt32U:function(){var e=this.idx;return this.idx+=4,this.buffer[e]+256*this.buffer[e+1]+65536*this.buffer[e+2]+16777216*this.buffer[e+3]},unPackInt16:function(){return(this.unPackInt16U()+32768)%65536-32768},unPackInt32:function(){return(this.unPackInt32U()+2147483648)%4294967296-2147483648},unPackRadU:function(){return this.unPackInt24U()/2097152},unPackRad:function(){return this.unPackInt16U()/8192-Math.PI},unPackFloat:function(){return this.unPackInt16()/256},unPackDouble:function(){return this.unPackInt32()/1048576},unPackString:function(e){e=e||255;var t=Math.min(this.unPackInt8U(),e);return this.unPackStringHelper(t)},unPackLongString:function(e){e=e||16383;var t=Math.min(this.unPackInt16U(),e);return this.unPackStringHelper(t)},unPackStringHelper:function(e){if(this.isMoreDataAvailable()<e)return 0;for(var t=new String,i=0;i<e;i++){var r=this.unPackInt16U();r>0&&(t+=String.fromCodePoint(r))}return t}},nr=new e.Vector3,or=new e.Vector3;e.chrome84BugWorkaround=!1,e.Skeleton.prototype.disableBlending=function(){this.bones.forEach((function(e){e.animations.forEach((function(e){e.enableBlending=!1}))}))},e.Scene.prototype.cloneMesh=function(e,t){return this.getMeshByName(e).clone("",t)},e.Scene.prototype.cloneSkeleton=function(e){var t=this.getSkeletonByName(e).clone();return t.name=e+Date.now(),t},e.DynamicTexture.prototype.clearRect=function(e,t,i,r){this._context.clearRect(e,t,i,r)},e.AbstractMesh.prototype.setLayerMask=function(e){this.layerMask=e;for(var t=this.getChildMeshes(),i=0;i<t.length;i++)t[i].setLayerMask(e)},e.AbstractMesh.prototype.setRenderingGroupId=function(e){this.renderingGroupId=e;for(var t=this.getChildMeshes(),i=0;i<t.length;i++)t[i].setRenderingGroupId(e)},e.TransformNode.prototype.setVisible=function(e){this.isVisible=e,this._isWorldMatrixFrozen=!e;for(var t=this.getChildTransformNodes(),i=0;i<t.length;i++)t[i].setVisible(e)},e.AbstractMesh.prototype.setMaterial=function(e){this.material=e;for(var t=this.getChildMeshes(),i=0;i<t.length;i++)t[i].setMaterial(e)};var ar,sr,lr,cr,hr,ur,dr,pr,fr,mr,_r,gr,vr,yr,br,xr,Tr,Er,Pr,Sr,Ar,Mr,Cr,Rr,Ir,Or,Dr,wr,Lr,Fr,Br,Nr,kr,Vr,Ur,zr,Gr,Hr=0,Wr=!1,jr=new e.Vector3;Se={text:["rgba(255, 255, 255, 1)","rgba(64, 224, 255, 1)","rgba(255, 192, 160, 1)"],meBackground:["rgba(255, 192, 64, 0.75)","rgba(0, 192, 255, 0.8)","rgba(192, 64, 32, 0.8)"],themBackground:["rgba(0, 0, 0, 0.25)","rgba(0, 64, 192, 0.3)","rgba(192, 64, 32, 0.3)"],summaryBackground:["rgba(64, 64, 64, 0.75)","rgba(0, 64, 192, 0.75)","rgba(192, 64, 32, 0.75)"],outline:[new e.Color4(1,1,1,1),new e.Color4(0,.75,1,1),new e.Color4(1,.25,.25,1)],meClass:["playerSlot-me","playerSlot-me-blue","playerSlot-me-red"],themClass:["playerSlot-them","playerSlot-them-blue","playerSlot-them-red"]};function Xr(t,i){console.log("loadResources()"),_i(t),function(e){zi.load("sound/sounds.json?"+version).then(()=>e())}((function(){console.log("sounds loaded"),function(e,t){gi(e,["egg","gun_eggk47","gun_csg1","gun_cluck9mm","gun_dozenGauge","gun_rpegg","gun_smg","gun_m24","gun_aug","munitions","muzzleFlash","items","reticle"],null,t)}(t,(function(){console.log("object meshes loaded"),function(t,i){si=[null];var r=e.MeshBuilder.CreateBox("SPECIAL.barrier.full.verysoft",{size:1},t);(c=new e.StandardMaterial).diffuseColor=e.Color3.Red(),c.emissiveColor=e.Color3.Red(),c.specularColor=e.Color3.Black(),c.wireframe=!0,r.material=c,r.setEnabled(!1),si.push(r);for(var n=[],o=0;o<=1;o+=.125){var a=-Math.PI/2+Math.PI*o,s=Math.cos(a),l=.5*Math.sin(a+.05)+.5;s=.25*Math.pow(s,1.3),l=.6*Math.pow(l,1.3)-.48,n.push(new e.Vector3(s,l,0))}var c,h=e.MeshBuilder.CreateLathe("SPECIAL.spawn-blue.none",{shape:n,tessellation:12},t);(c=new e.StandardMaterial).diffuseColor=new e.Color3(0,.5,1),c.specularColor=new e.Color3(.1,.2,.4),c.specularPower=8,h.material=c,h.setEnabled(!1),si.push(h),h=e.MeshBuilder.CreateLathe("SPECIAL.spawn-red.none",{shape:n,tessellation:12},t),(c=new e.StandardMaterial).diffuseColor=new e.Color3(1,.25,.25),c.specularColor=new e.Color3(.4,.3,.3),c.specularPower=8,h.material=c,h.setEnabled(!1),si.push(h),gi(t,["map"],(function(e){e.parent?e.freezeWorldMatrix():si.push(e)}),(function(){for(var e=1;e<si.length;e++){var t=si[e].getChildMeshes()[0];t&&(si[e].colliderMesh=t)}i()}))}(t,(function(){console.log("map meshes loaded");si.push({name:"SPECIAL.spatula.none"}),i()}))}))}))}function Yr(){console.log("startGame()");var i=document.getElementById("onesignal-bell-container");Ur=Date.now(),i&&(i.style.display="none"),Dr=[],{},Ji=-1,vueApp.game.respawnTime=0,Rr=null,Ir=null,gr=!0,er=!1,kr=null,vr=0,pe=!0,cr=!1,hr=new As,dr=performance.now(),0,ping=0,se=0,m=0,_=0,pr=-1,fr=0,mr=0,_r=0,yr=0,br=0,xr=0,o=Date.now(),Date.now()+1e3,t.clear(e.Color3.Black()),t.stopRenderLoop(),Sr=new e.Scene(t),B.autoDetail||(Sr.shadowsEnabled=B.shadowsEnabled),Sr.autoClear=!1,Sr.autoClearDepthAndStencil=!1,Sr.clearColor=e.Color3.Black(),(Cr=new e.DirectionalLight("",new e.Vector3(0,-1,0),Sr)).lightmapMode=e.Light.LIGHTMAP_SHADOWSONLY,Cr.intensity=1.2,Cr.autoUpdateExtends=!1,Cr.shadowMinZ=.05,Cr.shadowMaxZ=40,Cr.shadowFrustumSize=15,(r=new e.ShadowGenerator(1024,Cr)).forceBackFacesOnly=!0,n=new e.TargetCamera("camera",e.Vector3.Zero(),Sr),Sr.activeCameras.push(n),n.maxZ=100,n.fov=1.25,n.minZ=.05,zi.attach(n.globalPosition,jr),($i=new e.FreeCamera("uiCamera",new e.Vector3(0,0,-1),Sr)).mode=e.Camera.ORTHOGRAPHIC_CAMERA,$i.layerMask=536870912,$i.autoClear=!1,Sr.activeCameras.push($i),wr=new e.DynamicTexture("",2048,Sr,!0,2),(Lr=new e.SpriteManager("","",18,{width:512,height:256},Sr)).fogEnabled=!1,Lr.texture=wr,(Fr=new e.SpriteManager("","img/particles.png?"+version,18,128,Sr)).fogEnabled=!0,window.onfocus=function(){dr=performance.now()},window.onblur=function(){},document.onpointerlockchange=function(){if(Rr)if(document.pointerLockElement)!function(){if(console.log("resumeGame called"),Rr){vueApp.hideGameMenu(),vueApp.isPaused=!1,document.getElementById("deathBox").style.display="none",document.getElementById("killTicker").style.display="block",document.getElementById("serverAndMapInfo").style.display="none",document.getElementById("playerList").style.pointerEvents="none",document.getElementById("game_account_panel").style.pointerEvents="none",cr?document.getElementById("spectate").style.display="block":(document.getElementById("weaponBox").style.display="block",document.getElementById("healthContainer").style.display="block",document.getElementById("hardBoiledContainer").style.display="block",zn());const e=document.getElementById("gameAdContainer");e&&(e.style.display="block"),console.log("Event listeners added"),canvas.focus(),canvas.style.pointerEvents="all",canvas.addEventListener("mousedown",nn,!1),canvas.addEventListener("mouseup",on,!1),canvas.addEventListener("mousemove",an),canvas.addEventListener("wheel",sn),addEventListener("gamepadbuttondown",vo),tr&&x.focus(),Jo()}}();else{if(window.hack.modMenu.menu.forceFocus){window.hack.modMenu.menu.forceFocus=false; return;}if(Jn=null,vr=0,Rr.controlKeys=0,Rr.releaseTrigger(),gr){var e=Wi.getBuffer();e.packInt8(_t),e.send(Do),Rr.resetCountdowns(),Zr(5),ta.set((function(){Rr.removeFromPlay()}),3e3)}console.log("pausing game via pointerlock exit"),Qr(),hs()}gr=!0},function(){x=document.getElementById("chatIn"),T=document.getElementById("chatOut"),E=document.getElementById("killTicker");var e=document.getElementById("playerList");!function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(e);for(var t=document.getElementById("playerSlot"),i=0;i<20;i++){var r=t.cloneNode(!0);e.appendChild(r)}T.innerHTML="",1==B.enableChat&&(ao(),T.style.display="block",x.style.display="block");E.innerHTML="",T.value="",document.getElementById("killBox").style.display="none",document.getElementById("deathBox").style.display="none",document.getElementById("scopeBorder").style.display="none",document.getElementById("spatulaPlayer").className="drop",document.getElementById("spectate").style.display="none",document.getElementById("teamScores").style.display=h==Ut?"block":"none",document.getElementById("shellStreakMessage").classList.remove("appear"),document.getElementById("shellStreakMessage").classList.add("disappear"),document.getElementById("shellStreakCaption").style.visibility="hidden",document.getElementById("eggBreakerContainer").className="off",document.getElementById("playerList").style.pointerEvents="auto",document.getElementById("game_account_panel").style.pointerEvents="auto",sr&&sr.setPowerful(!1);console.log("resetGameUI")}(),document.body.style.overflow="hidden",Ai.init(),Xr(Sr,()=>{!async function(t,i){if(console.log("loadMap()"),Ve.init(Sr),W)Mr=JSON.parse(localStore.getItem("mapBackup"));else{var r=ei[t].filename,n=await fetch("maps/"+r+".json?"+ei[t].hash);Mr=await n.json(),console.log("MAP: "+r),document.getElementById("serverAndMapInfo").innerHTML="Map: "+Mr.name+"<br>Server: "+N.name}vueApp.showSpinner("building_map","ui_game_waitforit"),Mr.sun?Sr.sunLight={direction:new e.Vector3(Mr.sun.direction.x,Mr.sun.direction.y,Mr.sun.direction.z),diffuse:e.Color3.FromHexString(Mr.sun.color)}:Sr.sunLight={direction:new e.Vector3(.2,1,.1),diffuse:new e.Color3.White};Mr.ambient?Sr.ambientColor=e.Color3.FromHexString(Mr.ambient):Sr.ambientColor=new e.Color3(.2,.2,.2);Mr.fog?(console.log("FOG:",Mr.fog),Mr.fog.density>0?(Sr.fogMode=e.Scene.FOGMODE_EXP2,Sr.fogColor=e.Color3.FromHexString(Mr.fog.color),Sr.fogDensity=Mr.fog.density,Sr.fogEnabled=!0):(Sr.fogEnabled=!1,Sr.fogDensity=0)):(Sr.fogMode=e.Scene.FOGMODE_EXP2,Sr.fogColor=new e.Color4(.5,.55,.6,1),Sr.fogDensity=.01);function o(){console.log("Now complete"),W&&fi.hide(),vueApp.hideSpinner(),vueApp.hideLoadingScreenAd(),ga("send","timing","load","mapLoaded",Math.round(performance.now())-Math.round(F),Mr.name),i()}Mr.extents.x.min=0,Mr.extents.y.min=0,Mr.extents.z.min=0,Os.createMapCells(Sr,Mr,(i,n)=>{vueApp.showSpinner("building_map","ui_game_lights"),(Br=Os.stripTris(Ar.data,si,i,n)).position.set(.5,.5,.5),Br.receiveShadows=!0,async function(){var i;if(W?(i=localStorage.getItem("lightmap"),i=JSON.parse(i)):i=await Bn("maps/"+r+".lightmap?"+ei[t].hash,(e,t)=>{vueApp.showSpinnerLoadProgress(Math.ceil(e/t*100))}),i){for(var n=Br.getVerticesData(e.VertexBuffer.ColorKind),a=0,s=0;a<i.length;a+=3,s+=4)n[s]=i[a]/255,n[s+1]=i[a+1]/255,n[s+2]=i[a+2]/255;Br.updateVerticesData(e.VertexBuffer.ColorKind,n)}if(Br.material=Sr.getMaterialByName("map"),Br.freezeWorldMatrix(),!Q){var l=Mr.skybox||"default",c=e.MeshBuilder.CreateBox("skyBox",{size:100},Sr);c.infiniteDistance=!0;var h=new e.StandardMaterial("skyBox",Sr);h.backFaceCulling=!1,h.fogEnabled=!1,h.reflectionTexture=new e.CubeTexture("img/skyboxes/"+l+"/skybox",Sr),h.reflectionTexture.coordinatesMode=e.Texture.SKYBOX_MODE,h.diffuseColor=new e.Color3(0,0,0),h.specularColor=new e.Color3(0,0,0),c.material=h}let u=Date.now()-Ur;u>3e3?o():setTimeout(()=>o(),3e3-u)}()})}(p,Tn)})}function Kr(){gr=!1,document.pointerLockElement?(console.log("pausing game and breaking pointerlock"),document.exitPointerLock()):(console.log("pausing game via esc key"),Qr())}function Qr(){if(vueApp.ui.showScreen===vueApp.ui.screens.equip)return;pe=!0,vueApp.isPaused=!0,cr=!1,ea.clear(ur),Vr=!0,Ln(),go(),vueApp.showGameMenu(),vueApp.showRespawnDisplayAd(),document.getElementById("grenadeThrowContainer").style.visibility="hidden",document.getElementById("weaponBox").style.display="none",document.getElementById("healthContainer").style.display="none",document.getElementById("hardBoiledContainer").style.display="none",document.getElementById("killTicker").style.display="none",document.getElementById("spectate").style.display="none",document.getElementById("serverAndMapInfo").style.display="block",document.getElementById("playerList").style.pointerEvents="auto",document.getElementById("game_account_panel").style.pointerEvents="auto";const e=document.getElementById("gameAdContainer");e&&(e.style.display="block"),sr.hide(),tr&&x.focus()}function Zr(e){Ji=Math.max(e,Ji),vueApp.game.respawnTime=Ji,Tr&&ea.clear(Tr),Tr=ea.set((function(){Ji--,vueApp.game.respawnTime=Math.min(Ji,5),Ji<=0&&V&&(Ji=-1,ea.clear(Tr),En())}),1200)}var qr,Jr,$r={};let en=!1;var tn=!1;function rn(){if(console.log("requestRespawnBlocked "+tn),!tn){tn=!0,setTimeout(()=>tn=!1,1e3),canvas.requestPointerLock();var e=Wi.getBuffer();e.packInt8(ht),e.send(Do),console.log("respawn() requests respawn from server"),cs()}}function nn(e){to("keyboard","MOUSE "+e.button),1==e.button&&e.preventDefault()}function on(e){ro("keyboard","MOUSE "+e.button)}function an(e){if(qr++,document.pointerLockElement&&!Vr&&Rr&&(Rr.hp>0||cr)){var t=Math.pow(.001*B.mouseSpeed,2);Rr.actor.scope&&(t*=Rr.weapon.actor.scopeFov);var i=e.movementX,r=e.movementY,n=window.innerWidth/2.5,o=window.innerHeight/2.5;if(Jr>400&&void 0!==$r.x&&Math.abs(i)>n||void 0!==$r.y&&Math.abs(r)>o)return;$r.x&&Math.sign(i)!=Math.sign($r.x)&&(i=0),$r.y&&Math.sign(r)!=Math.sign($r.y)&&(r=0),$r.x=i,$r.y=r,Rr.yaw=Math.radAdd(Rr.yaw,i*t),Rr.pitch=Math.clamp(Rr.pitch+r*B.mouseInvert*t,-1.5,1.5)}Vr=!1}function sn(e){e.wheelDelta>0?(to("keyboard","WHEEL UP"),ro("keyboard","WHEEL UP")):(to("keyboard","WHEEL DOWN"),ro("keyboard","WHEEL DOWN"))}var ln=new e.Color4(1,1,1,1);function cn(t,i,r,n,o){for(var a=new e.SpriteManager("","img/"+t+"?"+version,i,128,o),s=0;s<i;s++){new e.Sprite("",a).isVisible=!1}return a.nextIdx=0,a.getSprite=function(e){var t=this.sprites[this.nextIdx];return t.cellIndex=void 0!==e?r+e:Math.randomInt(r,n),t.isVisible=!0,t.easing=ii,t.startSize=-1,t.endSize=-1,t.gravity=0,t.dx=0,t.dy=0,t.dz=0,t.float=0,t.anim=0,t.slow=0,t.angle=0,t.rotate=0,t.stopped=!1,t.animColors=null,t.collide=!1,t.color.copyFrom(ln),this.nextIdx=++this.nextIdx%this.sprites.length,t},a}function hn(e,t,i,r,n,o,a,s,l,c,h){let u=0,d=0,p="default",f="default";h&&(u=h.item_data.cell||0,e==Yi&&u&&(d=h.item_data.smokeCell,isNaN(d)&&(d=u)),p=h.item_data.fireColors||"default",f=h.item_data.smokeColors||"default");var m=e.getSprite(u);return m.animLength=t,m.easing=ni,m.position.x=i,m.position.y=r,m.position.z=n,m.size=l,m.dx=o,m.dy=a,m.dz=s,m.slow=.7,m.angle=Math.random()*Math.PI2,m.rotate=.04*Math.random()-.02,m.animColors=e==Ki?dn[p]:pn[f],m}function un(e,t,i,r,n,o){for(var a=0;a<Math.floor(r/4);a++){var s=80*Math.random()+80,l=1*Math.random()+.5,c=.5*(.9-l),h=(2*Math.random()-1)*c,u=(2*Math.random()-1)*c+.1,d=(2*Math.random()-1)*c,p=hn(Yi,s,e,t,i,h,u,d,l,0,o);p.float=.015*Math.random()+.001,p.collide=!0,(p=hn(Ki,.075*s,e,t,i,1.5*h,1.5*u,1.5*d,l,0,o)).collide=!0}if(Rr){var f=Math.length3(Rr.x-e,Rr.y-t,Rr.z-i);if(f<(n*=1.5)){var m=Math.max(0,(n-f)/n);is=Math.min(7,is+6*m)}}}var dn={default:[{pos:0,color:new e.Color4(1,.9,.8,1)},{pos:.2,color:new e.Color4(1,.5,.1,1)},{pos:.4,color:new e.Color4(.6,.2,.1,1)},{pos:.7,color:new e.Color4(0,0,0,0)},{pos:1,color:new e.Color4(0,0,0,0)}],rainbow:[{pos:0,color:new e.Color4(1,.1,.1,1)},{pos:.2,color:new e.Color4(1,1,.1,1)},{pos:.4,color:new e.Color4(.1,1,.1,1)},{pos:.7,color:new e.Color4(.1,.1,1,.5)},{pos:1,color:new e.Color4(1,.1,1,0)}],gold:[{pos:0,color:new e.Color4(1,1,.3,1)},{pos:.4,color:new e.Color4(1,.8,.2,1)},{pos:1,color:new e.Color4(1,.6,.1,0)}],corrupt:[{pos:0,color:new e.Color4(1,.1,.1,1)},{pos:.3,color:new e.Color4(1,1,1,1)},{pos:.6,color:new e.Color4(1,.1,.1,1)},{pos:1,color:new e.Color4(1,1,1,0)}],thermal:[{pos:0,color:new e.Color4(1,.9,.8,1)},{pos:.2,color:new e.Color4(1,.5,.1,1)},{pos:.4,color:new e.Color4(.6,.2,.1,1)},{pos:.5,color:new e.Color4(1,1,1,1)},{pos:.6,color:new e.Color4(1,1,1,0)},{pos:.7,color:new e.Color4(1,1,1,1)},{pos:1,color:new e.Color4(0,0,0,0)}]},pn={default:[{pos:0,color:new e.Color4(.3,.3,.3,1)},{pos:1,color:new e.Color4(.7,.7,.7,0)}],white:[{pos:0,color:new e.Color4(1,1,1,.5)},{pos:1,color:new e.Color4(1,1,1,0)}],corrupt:[{pos:0,color:new e.Color4(1,1,1,.6)},{pos:.5,color:new e.Color4(1,.1,.1,.4)},{pos:1,color:new e.Color4(0,0,0,0)}],thermal:[{pos:0,color:new e.Color4(.5,.1,.01,.3)},{pos:.3,color:new e.Color4(.7,.4,0,.1)},{pos:1,color:new e.Color4(0,0,0,0)}]},fn=[{pos:0,color:new e.Color4(1,1,1,1)},{pos:.2,color:new e.Color4(.7,.7,.7,.7)},{pos:1,color:new e.Color4(.7,.7,.7,0)}],mn=[{pos:0,color:new e.Color4(1,1,1,1)},{pos:.8,color:new e.Color4(1,1,1,1)},{pos:1,color:new e.Color4(1,1,1,0)}];function _n(t,i,r){for(var n=t.length-2;n>=0;n--)if(i>=t[n].pos)return void e.Color4.LerpToRef(t[n].color,t[n+1].color,(i-t[n].pos)*(1/(t[n+1].pos-t[n].pos)),r)}function gn(e,t,i,r){for(var n=0;n<t;n++){var o=Math.random()*r+.5*r,a=n/(.5*t)*i+.5*i,s=.08/(a+1),l=(2*Math.random()-1)*s,c=(2*Math.random()-.5)*s,h=(2*Math.random()-1)*s,u=Zi.getSprite();u.animLength=o,u.easing=ri,u.position.x=e.actor.mesh.position.x,u.position.y=e.actor.mesh.position.y+.3,u.position.z=e.actor.mesh.position.z,u.startSize=a,u.endSize=0,u.gravity=.003,u.dx=l,u.dy=c,u.dz=h,u.angle=Math.random()*Math.PI2,u.rotate=.2*Math.random()-.1,u.collide=!0,u.color.r=e.actor.bodyMesh.colorMult.r,u.color.g=e.actor.bodyMesh.colorMult.g,u.color.b=e.actor.bodyMesh.colorMult.b}}function vn(e){for(var t=0;t<10;t++){var i=80*Math.random()+80,r=t/5*.2+.2,n=.05/(r+1),o=(2*Math.random()-1)*n,a=(2*Math.random()-.25)*n*1.5,s=(2*Math.random()-1)*n,l=yolkManager.getSprite();l.animLength=i,l.easing=ri,l.position.x=e.actor.mesh.position.x,l.position.y=e.actor.mesh.position.y+.3,l.position.z=e.actor.mesh.position.z,l.startSize=r,l.endSize=0,l.gravity=.005,l.dx=o,l.dy=a,l.dz=s,l.slow=.9,l.angle=Math.random()*Math.PI2,l.rotate=.2*Math.random()-.1,l.collide=!0}}function yn(e,t){for(var i=Math.floor(t/33)+1,r=0;r<i;r++){var n=9*Math.random()+9,o=.03/1.8,a=(2*Math.random()-1)*o,s=(2*Math.random()-.25)*o*1.5,l=(2*Math.random()-1)*o;nr.set(Rr.x,Rr.y,Rr.z),or.set(e.x,e.y,e.z),nr.subtractInPlace(or).normalize().scaleInPlace(.26);var c=qi.getSprite();c.animLength=n,c.easing=ii,c.position.x=e.actor.mesh.position.x,c.position.y=e.actor.mesh.position.y+.3,c.position.z=e.actor.mesh.position.z,c.startSize=.8*.2,c.endSize=.8,c.gravity=.003,c.dx=a+e.dx,c.dy=s,c.dz=l+e.dz,c.slow=.95,c.angle=Math.random()*Math.PI2,c.rotate=.02*Math.random()-.001,c.collide=!1,c.animColors=mn}}function bn(e,t){for(var i=Math.floor(t/33)+1,r=0;r<i;r++){var n=9*Math.random()+9,o=.03/1.8,a=(2*Math.random()-1)*o,s=(2*Math.random()-.25)*o*1.5,l=(2*Math.random()-1)*o;nr.set(Rr.x,Rr.y,Rr.z),or.set(e.x,e.y,e.z),nr.subtractInPlace(or).normalize().scaleInPlace(.26);var c=Qi.getSprite();c.animLength=n,c.easing=ii,c.position.x=e.actor.mesh.position.x,c.position.y=e.actor.mesh.position.y+.3,c.position.z=e.actor.mesh.position.z,c.startSize=.8*.2,c.endSize=.8,c.gravity=.003,c.dx=a+e.dx,c.dy=s,c.dz=l+e.dz,c.slow=.95,c.angle=Math.random()*Math.PI2,c.rotate=.02*Math.random()-.001,c.collide=!1,c.animColors=mn}}function xn(e,t){for(var i=0;i<e.sprites.length;i++){var r=e.sprites[i];if(r.isVisible){var n=r.easing(r.anim);if(r.endSize>=0&&(r.size=r.startSize+n*(r.endSize-r.startSize)),r.animColors&&_n(r.animColors,n,r.color),!r.stopped){r.position.x+=r.dx*t,r.position.y+=r.dy*t+r.float,r.position.z+=r.dz*t,r.rotate&&(r.angle+=r.rotate*t);var o=!1;r.collide&&(nr.set(r.position.x,r.position.y,r.position.z),o=Ve.pointCollidesWithMap(nr,!0)),o?(r.stopped=!0,r.position.x-=r.dx*t,r.position.y-=r.dy*t,r.position.z-=r.dz*t):r.gravity&&(r.dy-=r.gravity*t),r.slow&&(r.dx*=Math.pow(r.slow,t),r.dy*=Math.pow(r.slow,t),r.dz*=Math.pow(r.slow,t))}r.anim+=t/r.animLength,r.anim>=1&&(r.isVisible=!1)}}}function Tn(){console.log("onLoadingComplete"),window.hack.gameStart(),Xi=new Gi({numChannels:24},{distanceModel:"exponential"});try{ar=new ho,lr=new uo,sr=new po,Sr.getMeshByName("muzzleFlash").material=Sr.getMaterialByName("muzzleFlash"),Sr.getMeshByName("bullet").material=Sr.getMaterialByName("bullet"),Sr.getMeshByName("rocket").material=Sr.getMaterialByName("standardInstanced"),Sr.getMeshByName("ammo").material=Sr.getMaterialByName("standardInstanced"),Sr.getMeshByName("grenadeItem").material=Sr.getMaterialByName("standardInstanced"),Sr.getMeshByName("spatula").material=Sr.getMaterialByName("emissive");for(let e=0;e<U.grenades.length;e++){let t=U.grenades[e].item_data.meshName;Sr.getMeshByName(t).material=Sr.getMaterialByName("emissive")}zr=new ai(Sr),Gr=new Xa,(Yi=cn("particles.png",300,16,23,Sr)).fogEnabled=!0,Yi.noAlphaTest=!0,(Ki=cn("particles.png",300,16,23,Sr)).fogEnabled=!0,Ki.blendMode=e.Engine.ALPHA_ADD,(Zi=cn("particles.png",400,3,6,Sr)).fogEnabled=!0,yolkManager=cn("particles.png",100,2,2,Sr),yolkManager.fogEnabled=!0;var t,i=P===pt;if(vueApp.switchToGameUi(i),j.isUpgraded()&&(document.getElementById("chickenBadge").style.display="block"),(Qi=cn("particles.png",20,0,0,Sr)).fogEnabled=!0,(qi=cn("particles.png",20,7,7,Sr)).fogEnabled=!0,W)c=0,Gn({id:0,uniqueId:0,name:"Test",charClass:0,team:0,primaryWeaponItem:j.getPrimaryWeapon(),secondaryWeaponItem:j.getSecondaryWeapon(),shellColor:0,hatItem:null,stampItem:null,score:0,kills:0,deaths:0,streak:0,totalKills:0,totalDeaths:0,bestGameStreak:0,bestOverallStreak:0,x:Y.x+.5,y:Y.y-.32,z:Y.z+.5,dx:0,dy:0,dz:0,frame:0,pitch:Y.pitch,yaw:Y.yaw,shield:0,hp:0,playing:!1,weaponIdx:0,controlKeys:0,randomSeed:0,upgradeProductId:void 0!==j.upgradeProductId&&null!==j.upgradeProductId?j.upgradeProductId:0,activeShellStreaks:0,social:j.social}),Dr[c].hp=100,Pn(),An(),Mn(),Kr(),sr.show(),Ji=-1,pr=0,vueApp.delayTheCracking=!0;else ir=!0,Do.onmessage=function(t){for(rr.init(t.data);rr.isMoreDataAvailable();){var i=rr.unPackInt8U();switch(i){case Rt:var r=rr.unPackLongString();Dn(r);break;case _t:var o=rr.unPackInt8U();(Tt=Dr[o])&&Tt.removeFromPlay();break;case Bt:console.log("eventModifier");var a=Wi.getBuffer();a.packInt8(Bt),a.send(Do);break;case ct:console.log("CommCode.clientReady received"),Ji=-1,pr=0,B.musicStatus&&vueApp.musicPlayOnce(),An(),Mn(),vueApp.delayInGamePlayButtons(),de?fo():Kr(),B.autoDetail?jo():(Yo(B.highRes),Ko(B.shadowsEnabled));break;case St:var s={x:rr.unPackFloat(),y:rr.unPackFloat(),z:rr.unPackFloat()},l=rr.unPackInt8U(),h=rr.unPackInt8U();if(kr){if(kr.controlledBy!=l){var u=["",'<h1 class="blueTeam">'+vueApp.loc.team_blue+"</h1>",'<h1 class="redTeam">'+vueApp.loc.team_red+"</h1>"];255==l?(Rr.playing&&((ht=document.getElementById("gameMessage")).innerHTML=u[kr.controlledByTeam],ht.innerHTML+=Go("ingame_dropped_the_spatula"),ht.style.display="block",setTimeout((function(){document.getElementById("gameMessage").style.display="none"}),3e3)),kr.drop(s)):(Rr.playing&&((ht=document.getElementById("gameMessage")).innerHTML=u[h],ht.innerHTML+=Go("ingame_captured_the_spatula"),ht.style.display="block",setTimeout((function(){document.getElementById("gameMessage").style.display="none"}),3e3)),kr.capture(Dr[l]))}}else(kr=new Ti(Sr,s)).controlledBy=l,kr.controlledByTeam=h;_o();break;case Ze:var d=rr.unPackInt8U(),p=rr.unPackInt16U(),f=rr.unPackString(),g=rr.unPackInt8U();f=ia(f,80),d>17&&oe.push("playerId out of bounds: "+d+", "+f);var v={id:d,uniqueId:p,name:f,charClass:g,team:rr.unPackInt8U(),primaryWeaponItem:U.findItemBy8BitItemId(Le,g,rr.unPackInt8U()),secondaryWeaponItem:U.findItemBy8BitItemId(Fe,g,rr.unPackInt8U()),shellColor:rr.unPackInt8U(),hatItem:U.findItemBy8BitItemId(De,g,rr.unPackInt8U()),stampItem:U.findItemBy8BitItemId(we,g,rr.unPackInt8U()),grenadeItem:U.findItemBy8BitItemId(Be,g,rr.unPackInt8U()),x:rr.unPackFloat(),y:rr.unPackFloat(),z:rr.unPackFloat(),dx:rr.unPackFloat(),dy:rr.unPackFloat(),dz:rr.unPackFloat(),yaw:rr.unPackRadU(),pitch:rr.unPackRad(),score:rr.unPackInt32U(),kills:rr.unPackInt16U(),deaths:rr.unPackInt16U(),streak:rr.unPackInt16U(),totalKills:rr.unPackInt32U(),totalDeaths:rr.unPackInt32U(),bestGameStreak:rr.unPackInt16U(),bestOverallStreak:rr.unPackInt16U(),shield:rr.unPackInt8U(),hp:rr.unPackInt8U(),playing:rr.unPackInt8U(),weaponIdx:rr.unPackInt8U(),controlKeys:rr.unPackInt8U(),upgradeProductId:rr.unPackInt8U(),activeShellStreaks:rr.unPackInt8U(),social:rr.unPackLongString()};v.name=na(v.name),Dr[v.id]||(c==v.id?(v.normalName=v.name,v.safeName=v.name):(v.normalName=v.name.replace(/<|>/g,""),v.safeName=Ho(),(0==v.normalName.length||Ei(v.normalName))&&(v.normalName=v.safeName),B.safeNames?v.name=v.safeName:v.name=v.normalName),Gn(v));break;case qe:Hn(o=rr.unPackInt8U());break;case nt:d=rr.unPackInt16U();var y=rr.unPackInt8U(),b=rr.unPackFloat(),T=rr.unPackFloat(),E=rr.unPackFloat();Gr.spawnItem(d,y,b,T,E);break;case rt:o=rr.unPackInt8U(),y=rr.unPackInt8U();var P=rr.unPackInt8U();d=rr.unPackInt16U(),Gr.collectItem(y,d),o==c&&Rr.collectItem(y,P);break;case et:var S,C,R=rr.unPackInt8U(),I=rr.unPackInt8U(),O=rr.unPackInt8U(),D=Dr[R],w=Dr[I];if(D){if(kr){var L=1==D.team?2:1;kr.controlledByTeam==L&&(teamScore[L]++,_o())}S=D.name;var F=new e.Vector3(D.x,D.y+.32,D.z);Xi.play("shell_burst",F);var N=Math.randomInt(0,10)+1;Xi.play("death_scream"+N,F),bn(D,100),yn(D,100),gn(D,80,.2,40),vn(D),D.die(),D.actor.mesh.position.x=D.x,D.actor.mesh.position.y=D.y,D.actor.mesh.position.z=D.z}else S="N/A";if(w?(C=w.name,w.isDead()||(w.scoreKill(),I==c&&((ht=document.getElementById("bestStreak")).innerText="x"+w.bestOverallStreak),I==c&&(yr++,xr=Math.max(xr,w.streak)))):C="N/A",R!=c){if(I==c){var k=document.getElementById("killBox");k.style.display="block",vueApp.killedName=S;var z=document.getElementById("KILL_STREAK");ds(Rr.streak),Rr.streak>1?z.innerText=Rr.streak+"-KILL STREAK":z.innerText="";var G=1.5,H=ea.set((function(){k.style.transform="scale("+G+","+G+")",(G-=.05)<=1&&(G=1,ea.clear(H))}),33);ta.set((function(){V&&(k.style.display="none")}),4e3)}}else{n.parent=null,n.position=new e.Vector3(Ir.actor.mesh.position.x,Ir.actor.mesh.position.y+.2,Ir.actor.mesh.position.z),w&&(n.lockedTarget=w.actor.head);var W=document.getElementById("deathBox");W.style.display="block",vueApp.killName=C,G=2,H=ea.set((function(){W.style.transform="scale("+G+","+G+")",(G-=.05)<=1&&V&&(ea.clear(H),G=1)}),33),br++,Zr(O),go(),ta.set((function(){V&&(W.style.display="none",A==c&&Kr())}),3e3)}w&&D&&oo(w,D),Yn();break;case Je:o=rr.unPackInt8U();var X=rr.unPackString();(Tt=Dr[o]).muted||(Cn.innerHTML=X,X=Cn.textContent.trim(),Tt&&X.length>0&&!Ei(X)&&X.indexOf("<")<0&&window.hack.setCommCode("chat", Je)&&window.hack.testMessage(X)&&so(X,Tt));break;case At:d=rr.unPackInt8U();var Y=rr.unPackInt8U(),K=rr.unPackInt8U(),Q=(b=rr.unPackFloat(),T=rr.unPackFloat(),E=rr.unPackFloat(),rr.unPackInt8U()),Z=rr.unPackInt8U(),q=rr.unPackInt8U();(Tt=Dr[d]).serverStateIdx=K;var J=Tt.x,$=Tt.y,ee=Tt.z,te=Tt.dx,ie=Tt.dy,re=Tt.dz,ne=Tt.yaw,ae=Tt.pitch,se=Y,le=Tt.stateBuffer[se],ce=Math.mod(Tt.stateIdx-Y,hi)+8*zt;if(Tt.lastWeaponChange>ce&&(Z!==le.rounds||q!==le.store)){for(var he=Y;he!=Tt.stateIdx;he=Math.mod(he+1,hi)){var ue=Tt.stateBuffer[he];Z-=ue.shots,ue.rounds=Z}Tt.weapon.ammo.rounds=Z,Tt.weapon.ammo.store=q,Zn()}if(Q)var fe=Math.length3(le.x-b,le.y-T,le.z-E);else fe=Math.length2(le.x-b,le.z-E);if(0!=vr){if(fe<.1){var me=2*zt;Tt.totalCorrections=me,Tt.corrections=me,Tt.corrected.dx=b-le.x,Tt.corrected.dy=T-le.y,Tt.corrected.dz=E-le.z;break}me=2*zt}else{if(fe<.02)break;me=2*zt}Tt.totalCorrections=me,Tt.x=b,Tt.y=T,Tt.z=E,Tt.dx=le.dx,Tt.dy=le.dy,Tt.dz=le.dz,Tt.climbing=le.climbing,Tt.jumping=le.jumping;for(var _e=Rr.controlKeys;se!=Tt.stateIdx;se=Math.mod(se+1,hi))le=Tt.stateBuffer[se],Tt.controlKeys=le.controlKeys,Tt.yaw=le.yaw,Tt.update(!0);(fe=Tt.climbing?Math.length3(Tt.x-J,Tt.y-$,Tt.z-ee):Math.length2(Tt.x-J,Tt.z-ee))<.2?(Tt.corrections=me,Tt.corrected.dx=Tt.x-J,Tt.corrected.dy=Tt.y-$,Tt.corrected.dz=Tt.z-ee,Tt.x=J,Tt.y=$,Tt.z=ee,Tt.dx=te,Tt.dy=ie,Tt.dz=re):Tt.corrections=0,Tt.yaw=ne,Tt.pitch=ae,Tt.controlKeys=_e;break;case $e:if(d=rr.unPackInt8U(),b=rr.unPackFloat(),T=rr.unPackFloat(),E=rr.unPackFloat(),Q=rr.unPackInt8U(),!(Tt=Dr[d])||Tt.id==c){for(se=0;se<zt;se++)rr.unPackInt8U(),rr.unPackRadU(),rr.unPackRad();break}for(Tt.stateIdx=0,se=0;se<zt;se++)Tt.stateBuffer[se].controlKeys=rr.unPackInt8U(),Tt.stateBuffer[se].yaw=rr.unPackRadU(),Tt.stateBuffer[se].pitch=rr.unPackRad();Tt.x=b,(!Tt.jumping||Math.abs(Tt.y-T)>.5)&&(Tt.y=T),Tt.z=E,Tt.stateBuffer[0].x=b,Tt.stateBuffer[0].y=T,Tt.stateBuffer[0].z=E,Tt.climbing=Q;break;case wt:if(d=rr.unPackInt8U(),nr.x=rr.unPackFloat(),nr.y=rr.unPackFloat(),nr.z=rr.unPackFloat(),or.x=rr.unPackFloat(),or.y=rr.unPackFloat(),or.z=rr.unPackFloat(),!(Tt=Dr[d]))break;d!=c&&(Tt.weapon.actor.fire(),Tt.weapon.fireMunitions(nr,or),--Tt.weapon.tracer<0&&(Tt.weapon.tracer=Tt.weapon.subClass.tracer)),mathSeed=Me;break;case Lt:d=rr.unPackInt8U(),b=rr.unPackFloat(),T=rr.unPackFloat(),E=rr.unPackFloat();var ge=rr.unPackFloat(),ve=rr.unPackFloat(),ye=rr.unPackFloat();if(!(Tt=Dr[d]))break;Tt.grenadeCount--,d!=c?(Tt.actor.head.rotation.x=Tt.pitch,Tt.actor.mesh.rotation.y=Tt.yaw):Zn(),Tt.actor.throwGrenade(),zr.throwGrenade(Tt,{x:b,y:T,z:E},{x:ge,y:ve,z:ye});break;case Mt:var be=rr.unPackInt8U(),xe=rr.unPackInt8U(),Te=(b=rr.unPackFloat(),T=rr.unPackFloat(),E=rr.unPackFloat(),rr.unPackInt8U()),Ee=rr.unPackFloat();let t=null;be>0&&(t=U.findItemBy8BitItemId(be,0,xe)),un(b,T,E,Te,Ee,t),nr.set(b,T,E),be==Be?Xi.play(t.item_data.sound||"grenade",nr):Xi.play("rpegg_rocket_hit",nr);break;case yt:d=rr.unPackInt8U(),Dr[d]&&Dr[d].reload();break;case at:d=rr.unPackInt8U();var Pe=rr.unPackInt8U();Dr[d]&&Dr[d].swapWeapon(Pe);break;case it:var Se=rr.unPackInt8U();ge=rr.unPackFloat(),ye=rr.unPackFloat(),Rr.hp=Se,Rr.actor.hit(),lr.hit(ge,ye);break;case It:var Ae=rr.unPackInt8U();Se=rr.unPackInt8U(),ge=rr.unPackFloat(),ye=rr.unPackFloat(),Rr.hp=Se,Rr.hardBoiledValue=Ae,Rr.actor.hit(),lr.hit(ge,ye),zn();break;case tt:if(d=rr.unPackInt8U(),Se=rr.unPackInt8U(),!(Tt=Dr[d]))break;Tt.hp=Se,Tt.actor.hit(),Se>0&&yn(Tt,Math.clamp(Tt.hp-Se,0,100));break;case ot:d=rr.unPackInt8U();var Me=rr.unPackInt16U(),Ce=(b=rr.unPackFloat(),T=rr.unPackFloat(),E=rr.unPackFloat(),rr.unPackInt8U()),Re=rr.unPackInt8U(),Ie=rr.unPackInt8U(),Oe=rr.unPackInt8U(),Ne=rr.unPackInt8U();(Tt=Dr[d])&&(Tt.randomGen.setSeed(Me),Tt.weapons[0].ammo.rounds=Ce,Tt.weapons[0].ammo.store=Re,Tt.weapons[1].ammo.rounds=Ie,Tt.weapons[1].ammo.store=Oe,Tt.grenades=Ne,Tt.respawn(b,T,E),d==c&&(pe=!1,vueApp.isPaused=!1,console.log("CommCode.respawn received from server for this player"),Ai.init(),Pn(),sr.show(),tr&&x.focus()));break;case mt:d=rr.unPackInt8U();var ke=rr.unPackInt8U(),Ve=rr.unPackInt8U(),Ue=rr.unPackInt8U(),ze=rr.unPackInt8U(),Ge=rr.unPackInt8U(),He=rr.unPackInt8U(),We=rr.unPackInt8U(),je=U.findItemBy8BitItemId(Le,ke,Ve),Xe=U.findItemBy8BitItemId(Fe,ke,Ue),Ye=U.findItemBy8BitItemId(De,ke,Ge),Ke=U.findItemBy8BitItemId(we,ke,He),Qe=U.findItemBy8BitItemId(Be,ke,We);(Tt=Dr[d])&&Tt.changeCharacter(ke,je,Xe,ze,Ye,Ke,Qe);break;case ft:d=rr.unPackInt8U();var st=rr.unPackInt8U();(Tt=Dr[d])&&(Tt.team=st,Tt.score=0,Tt.kills=0,Tt.streak=0,Tt.bestGameStreak=0,d==c&&(M=st,vueApp.setTeam(M)),Ln(),Yn());break;case bt:vueApp.showGenericPopup("ui_game_fairteams_header","ui_game_fairteams_text","ok");break;case lt:ping=Date.now()-kn,m+=ping,_++;var ht=document.getElementById("ping");ping<100?ht.style.color="#0f0":ping<150?ht.style.color="#ff0":ping<200?ht.style.color="#f90":ht.style.color="#f00",ht.innerText=ping+"ms",setTimeout((function(){if(Do){var e=Wi.getBuffer();e.packInt8(lt),e.send(Do),kn=Date.now()}}),1e3);break;case gt:var ut=rr.unPackString();console.log("announcement:",ut),0===ut.length&&(ut=null),vueData.announcementMessage=ut;break;case Et:notify(vueApp.loc.ui_game_locked,1e4);break;case vt:var dt=rr.unPackInt32U();console.log("updating balance from server: "+dt),j.currentBalance=dt;break;case xt:console.log("upgrade has expired"),Si();break;case Ot:d=rr.unPackInt8U();var pt=rr.unPackInt8U();(Tt=Dr[d]).beginShellStreak(pt);break;case Dt:var Tt;d=rr.unPackInt8U(),pt=rr.unPackInt8U(),(Tt=Dr[d]).endShellStreak(pt);break;default:console.log("CommCode error: "+i+"/"+String.fromCharCode(i)+" - previous cmd: "+JSON.stringify(Rn))}Rn.push(i),Rn.length>4&&Rn.shift()}},(t=Wi.getBuffer()).packInt8(ct),t.send(Do),(t=Wi.getBuffer()).packInt8(lt),t.send(Do),kn=Date.now(),fs(),setTimeout(Ka,3e4)}catch(e){console.log(e)}}function En(){n.parent=null,n.position=new e.Vector3(0,Ar.height+1,0),n.lockedTarget=null,n.setTarget(new e.Vector3(Ar.width/2,Ar.height/4,Ar.depth/2)),ir=!0}function Pn(t){n.position=e.Vector3.Zero(),n.rotation=e.Vector3.Zero(),n.parent=t?t.actor.eye:Rr.actor.eye,n.lockedTarget=null,ir=!1,cr=!1}var Sn=!1;function An(){Wo(),t.runRenderLoop((function(){!function(){var i=performance.now(),r=Math.min((i-Vn)/(1e3/60),8);if(Vn=i,pr>=0){var o=t.getFps();pr+=o,fr++}if(fr%10==0){mr=pr/fr,document.getElementById("FPS").innerText=Math.floor(o+.5),Ir.activeShellStreaks&Ht.HardBoiled||zn()}_>10&&(se=Math.max(se,ping));if(K)Rr.actor.update(r);else{for(var a=0;a<Dr.length;a++){var s=Dr[a];s&&(s.chatLineCap=Math.min(s.chatLineCap+r/120,3),s.playing&&(s.actor.handsToWeaponSkeleton(),s.actor&&s.actor.update(r)))}kr&&kr.actor.update(r)}Rr&&(lr.update(r),sr.update(r));K||(zr.updateActors(r),Gr.update(r),xn(Yi,r),xn(Ki,r),xn(Qi,r),xn(Zi,r),xn(yolkManager,r),xn(qi,r));ir&&(Hr+=.002*r,n.position.x=Math.sin(Hr)*Ar.height+Ar.width/2,n.position.z=Math.cos(Hr)*Ar.height+Ar.depth/2,n.setTarget(new e.Vector3(Ar.width/2,Ar.height/4,Ar.depth/2)));cr&&hr.update(r)}(),Ir&&(Cr.position.x=Ir.x,Cr.position.y=Ir.y+2,Cr.position.z=Ir.z),Sr.render()}))}function Mn(){$n(),ir&&En(),Er=va(Nn,1e3/30)}var Cn=document.createElement("DIV"),Rn=[],In="",On=!1;const Dn=e=>{if(!On&&e?(On=!0,vueApp.musicWidget(!0)):On&&!e&&(On=!1,vueApp.musicWidget(!1)),In!==e){In=e;var t=decodeURI(e);console.log("Music metadata",t),data=JSON.parse(t),vueApp.music.serverTracks=data,"localhost"==location.host||"localshelldev.bluewizard.com"==location.host?vueApp.music.serverTracks.albumArt="https://shellshock.io/data/img/albumArt/"+data.id+data.albumExt+"?"+data.query:vueApp.music.serverTracks.albumArt=dynamicContentPrefix+"data/img/albumArt/"+data.id+data.albumExt+"?"+data.query,vueApp.songChanged=!0}};function wn(e){var t;(t=document.getElementById("shellStreakMessage")).innerText=e,t.className="appear",(t=document.getElementById("shellStreakCaption")).innerText="x"+Rr.streak+" Shellstreak",t.style.visibility="visible",setTimeout(()=>{document.getElementById("shellStreakMessage").className="disappear",document.getElementById("shellStreakCaption").style.visibility="hidden"},3e3)}function Ln(){for(var e=0;e<playerLimit;e++){var t=Dr[e];t&&t.actor&&t.actor.updateTeam()}}var Fn=Math.PI/2;async function Bn(e,t){for(var i=await fetch(e),r=i.body.getReader(),n=+i.headers.get("Content-Length"),o=0,a=[];;){var{done:s,value:l}=await r.read();if(s)break;a.push(l),o+=l.length,t&&t(o,n)}var c=new Uint8Array(o),h=0;for(var u of a)c.set(u,h),h+=u.length;return lightmap=new Uint8Array(c),lightmap}function Nn(){var t=performance.now();Pr=t,_>10&&(se=Math.max(se,ping));for(Ai.update();dr<t;){if(dr+=1e3/30,K)Rr.actor.updateLerp(),Rr.update();else{for(var i=0;i<Dr.length;i++){var r=Dr[i];r&&(r.chatLineCap=Math.min(r.chatLineCap+2/120,3),r.playing&&(r.actor.updateLerp(),r.update()))}kr&&kr.update()}Rr&&(Rr.weapon&&0==Rr.weapon.ammo.rounds&&(Rr.stateIdx%20==0?document.getElementById("ammo").style.color="#f00":Rr.stateIdx%20==10&&(document.getElementById("ammo").style.color="#fff")),1==er&&(Or=Math.min(Or+.03,1))>0&&(document.getElementById("grenadeThrowContainer").style.visibility="visible",document.getElementById("grenadeThrow").style.height=100*Or+"%")),K||zr.updateLogic()}var o=e.Matrix.Invert(n.getViewMatrix());jr.copyFrom(e.Vector3.TransformNormal(new e.Vector3(0,0,-1),o)),jr.normalize(),zi.update()}var kn,Vn=performance.now();function Un(e,t,i,r,n){!e.playing||e.shield>0||Math.max(0,Math.floor(e.hp-i))>0&&bn(e,Math.clamp(i,0,100))}function zn(){if(Ir.activeShellStreaks&Ht.HardBoiled){"visible"!=(t=document.getElementById("hardBoiledContainer")).style.visibility&&(t.style.visibility="visible",document.getElementById("healthContainer").style.visibility="hidden");var e=Math.floor(Ir.hardBoiledValue);document.getElementById("hardBoiledValue").innerText=e,(t=document.getElementById("hardBoiledShieldFill")).style.clipPath="inset("+(100-e)+"% 0 0 0)"}else{var t;"visible"!=(t=document.getElementById("healthContainer")).style.visibility&&(t.style.visibility="visible",document.getElementById("hardBoiledContainer").style.visibility="hidden");var i=document.getElementById("healthBar"),r=document.getElementById("healthHp"),n=2.3-Ir.hp/43.478;i.setAttribute("stroke-dashoffset",6.2832*n+"em");e=Math.floor(Ir.hp);r.innerText=e}}function Gn(e){e.id==c&&(A=e.id);window.hack.myPlayerId = c;var t=new ui(e,Sr);t.id==c&&(Ir=t,(Rr=t).ws=Do,Zn()),t.playing||t.actor.removeFromPlay(),Dr[e.id]=t,window.hack.addPlayer(Dr[e.id]);Yn()}function Hn(e){var t=Dr[e];e!=c?t&&(t.actor.remove(),delete Dr[e],Yn(),window.hack.removePlayer(e)):console.log("Tried to remove ME")}var Wn=1;function jn(e){if(e){try{const t=JSON.parse(e);if(t.length>0&&hasValue(t[0]))return t.find(e=>e.active)}catch(e){}return!1}return!1}function Xn(e){return e.upgradeProductId&&e.upgradeProductId>0||e.social.length>2&&e.social.includes('"active": true')}function Yn(){for(var e=[],t=0;t<Dr.length;t++)Dr[t]&&e.push(t);if(Wr){var i=function(){for(var e=[0,0,0],t=0;t<playerLimit;t++){var i=Dr[t];i&&(e[i.team]+=i.score)}var r=0;return e[1]>e[2]?r=1:e[2]>e[1]&&(r=2),{score:e,leader:r}}();i.leader>0&&(Wn=i.leader),i.score[Wn]+=1e5,e.sort((function(e,t){return Dr[t].score+i.score[Dr[t].team]-(Dr[e].score+i.score[Dr[e].team])}))}else e.sort((function(e,t){return Dr[t].score-Dr[e].score}));var r=document.getElementById("playerList").children;for(t=0;t<e.length;t++){var n=Dr[e[t]],o=r[t],a=o.children[0],s=a.children[0],l=a.children[1],h=o.children[1];if(s.classList.add("playerSlot--name"),l.classList.add("playerSlot--score"),h.classList.add("playerSlot--icons"),o.style.display="block",s.innerText=n.name,n.id!=c){const e=jn(n.social),t=!!(n.upgradeProductId&&n.upgradeProductId>0);o.addEventListener("click",function(i,r){return function(){var n={playerId:i,uniqueId:r,isGameOwner:S,muted:Dr[i].muted,playerName:Dr[i].name,muteFunc:function(){Qn(this.playerId,this.uniqueId)},bootFunc:function(){Kn(this.playerId,this.uniqueId)},social:e,vipMember:t};vueApp.showPlayerActionsPopup(n)}}(n.id,n.uniqueId),!1),o.style.pointerEvents="all",o.style.cursor="pointer"}l.innerText=n.score,a.classList.add("playerSlot--name-score");let i="playerSlot--name-score",u="playerSlot-player-is-me",d="playerSlot-player-is-them";n.id==c?a.className=`${i} ${u} ${Se.meClass[n.team]}`:a.className=`${i} ${d} ${Se.themClass[n.team]}`,h.innerText="";const p=document.createElement("i"),f=document.createElement("i");p.className="fas fa-egg hidden text_gold vip-egg";const m=jn(n.social);m&&(p.className=`fab ${SOCIALMEDIA[m.id]} hidden`),f.className="fas fa-ban hidden",Xn(n)&&p.classList.remove("hidden"),n.muted&&f.classList.remove("hidden"),h.appendChild(p),h.appendChild(f)}for(;t<playerLimit;)r[t].style.display="none",t++}function Kn(e,t){if(S&&Dr[e]&&Dr[e].uniqueId==t){var i=Wi.getBuffer();i.packInt8(Pt),i.packInt8(e),i.packInt16(t),i.send(Do)}}function Qn(e,t){var i=Dr[e];i&&i.uniqueId==t&&(i.muted?(i.muted=!1,B.safeNames||(i.name=i.normalName)):(i.muted=!0,B.safeNames||(i.name=i.safeName)),i.actor.setupNameSprite(),Yn())}function Zn(){if(Rr){var e=document.getElementById("weaponName");e.innerHTML=Rr.weapon.subClass.weaponName,(e=document.getElementById("ammo")).style.color="#fff";var t=Rr.weapon.ammo,i=Math.max(Math.min(t.rounds,t.capacity),0),r=Math.max(Math.min(t.store,t.storeMax),0);e.innerHTML=i+"/"+r;for(var n=1;n<=3;n++)Rr.grenadeCount>=n?document.getElementById("grenade"+n).src="img/ico_grenade.png?v=1":document.getElementById("grenade"+n).src="img/ico_grenadeEmpty.png?v=1"}}var qn,Jn=null;function $n(){Jn=null,document.onkeydown=lo,document.onkeyup=co}function eo(){document.onkeydown=null,document.onkeyup=null}function to(e,t){if(cr||Rr.playing&&document.pointerLockElement){if(cr){if(!(i=X[e].spectate[t]))var i=X[e].game[t]}else i=X[e].game[t];io(i)}}function io(e){switch(e){case"up":case"down":case"left":case"right":case"jump":case"ascend":case"descend":vr|=li[e];break;case"fire":document.pointerLockElement&&Rr&&Ai.add(Ai.fire),vr|=li[e];break;case"grenade":document.pointerLockElement&&Rr&&!er&&Rr.canSwapOrReload()&&Rr.grenadeCount>0&&(er=!0,Or=-.15);break;case"scope":B.holdToAim?Rr.actor.scopeIn():Rr.actor.scope?Rr.actor.scopeOut():Rr.actor.scopeIn();break;case"reload":Ai.add(Ai.reload);break;case"swap_weapon":Ai.add(Ai.swap)}}function ro(e,t){if(cr||Rr.playing&&document.pointerLockElement){if(cr){if(!(i=X[e].spectate[t]))var i=X[e].game[t]}else i=X[e].game[t];no(i)}}function no(e){switch(e){case"fire":Rr.weapon,vr^=vr&li[e];break;case"scope":B.holdToAim&&Rr.actor.scopeOut();break;case"grenade":document.pointerLockElement&&Rr&&er&&(document.getElementById("grenadeThrowContainer").style.visibility="hidden",er=!1,Rr.throwGrenade(Or));break;case"up":case"down":case"left":case"right":case"jump":case"ascend":case"descend":vr^=vr&li[e]}}function oo(e,t){var i=[` ${Go("ingame_kill_text_scrambled")} `,` ${Go("ingame_kill_text_beat")} `,` ${Go("ingame_kill_text_poached")} `,` ${Go("ingame_kill_text_whipped")} `,` ${Go("ingame_kill_text_fried")} `,` ${Go("ingame_kill_text_cracked")} `],r='<span style="color: '+Se.text[e.team]+'">'+e.name+"</span>"+i[Math.randomInt(0,i.length)]+'<span style="color: '+Se.text[t.team]+'">'+t.name+"</span>";(E.innerHTML.match(/<br>/g)||[]).length>4&&(E.innerHTML=E.innerHTML.substr(E.innerHTML.search("<br>")+4)),E.innerHTML+=r+"<br>"}function ao(){canvas.focus(),x.style.display="block",x.value=Go("ingame_press_enter_to_chat"),x.style.background="transparent",x.blur(),tr=!1}function so(e,t){t&&(e='<span style="color: '+Se.text[t.team]+'">'+t.name+": </span>"+e),(T.innerHTML.match(/<br>/g)||[]).length>5&&(T.innerHTML=T.innerHTML.substr(T.innerHTML.search("<br>")+4)),T.innerHTML+=e+"<br>"}function lo(e){var t=(e=e||window.event).key;if(t!=Jn)if(Jn=t,er||0!=vr||"Enter"!=t||!B.enableChat){tr||"Tab"==t&&(i="ESCAPE",e.preventDefault(),function(e){tr||V&&!pe&&document.pointerLockElement&&(document.exitPointerLock(),console.log("pausing game on key: ",e))}("down"));var i=(""+t).toLocaleUpperCase();if(" "==i&&(i="SPACE",e.preventDefault()),debug){if("`"==i)return void function(){if(qn){for(var e=0;e<playerLimit;e++){var t=Dr[e];if(t){var i={name:t.name,hp:t.hp,playing:t.playing,posX:t.x,posY:t.y,posZ:t.z,actorX:t.actor.mesh.position.x,actorY:t.actor.mesh.position.y,actorZ:t.actor.mesh.position.z,transformEnabled:t.actor.mesh.isEnabled(),transformVisible:t.actor.mesh.isVisible,transformFrozen:t.actor.mesh.isWorldMatrixFrozen,shellEnabled:t.actor.bodyMesh.isEnabled(),shellVisible:t.actor.bodyMesh.isVisible,shellFrozen:t.actor.bodyMesh.isWorldMatrixFrozen,weaponEnabled:t.weapon.actor.gunMesh.isEnabled(),weaponVisible:t.weapon.actor.gunMesh.isVisible};qn.document.write(JSON.stringify(i)+"\n")}}qn.document.write("<hr>")}else(qn=window.open("","","name=Debug")).document.write("<pre>")}();if("\\"==i){K=!0;for(var r=0;r<Sr.particleSystems.length;r++)Sr.particlesPaused=!0;for(r=0;r<playerLimit;r++)Dr[r]&&Dr[r].actor&&(Dr[r].actor.mesh.setVisible(!0),Dr[r].actor.showNameSprite(),Dr[r].actor.positionNameSprite());Do.close()}}to("keyboard",i)}else Rr.chatLineCap>0&&(eo(),x.style.background="rgba(0, 0, 0, 0.5)",x.value="",x.focus(),Jn=null,tr=!0)}function co(e){var t=(e=e||window.event).key;t==Jn&&(Jn=null);var i=(""+t).toLocaleUpperCase();" "==i&&(i="SPACE",e.preventDefault()),ro("keyboard",i)}function ho(){this.crosshairs=new e.AbstractMesh("",Sr),this.crosshairs.setEnabled(!1),this.crosshairs.position.z=2;var t=[new e.Vector3(-1,0,0),new e.Vector3(1,0,0)],i=e.MeshBuilder.CreateLines("",{points:t},Sr);i.layerMask=536870912,i.color=e.Color3.Black(),i.parent=this.crosshairs,t=[new e.Vector3(0,-1,0),new e.Vector3(0,1,0)],(i=e.MeshBuilder.CreateLines("",{points:t},Sr)).layerMask=536870912,i.color=e.Color3.Black(),i.parent=this.crosshairs}function uo(){this.mesh=new e.Mesh("hitIndicator",Sr),this.mesh.updatable=!0,this.mesh.hasVertexAlpha=!0,this.positions=[0,0,0,0,.5,0,.5,.5,0,.5,0,0,.5,-.5,0,0,-.5,0,-.5,-.5,0,-.5,0,0,-.5,.5,0];this.colors=new Array(48).fill(0);for(var t=0;t<48;t+=4)this.colors[t]=1,this.colors[t+1]=.9,this.colors[t+2]=0,this.colors[t+3]=-.5;var i=new e.VertexData;i.positions=this.positions,i.indices=[0,1,8,0,2,1,0,2,1,0,3,2,0,3,2,0,4,3,0,4,3,0,5,4,0,5,4,0,6,5,0,6,5,0,7,6,0,7,6,0,8,7,0,8,7,0,1,8],i.colors=this.colors,i.applyToMesh(this.mesh,!0),this.mesh.layerMask=536870912,this.mesh.material=Sr.getMaterialByName("ui"),this.resize()}function po(){this.crosshairs=[],this.shotBrackets=[];for(var e=0;e<4;e++)this.crosshairs.push(document.getElementById("crosshair"+e)),this.shotBrackets.push(document.getElementById("shotBracket"+e));this.crosshairReticle=document.getElementById("crosshairContainer"),this.readyBrackets=document.getElementById("readyBrackets"),this.shotReticle=document.getElementById("shotReticleContainer"),this.dotReticle=document.getElementById("dotReticle")}function fo(){Nr=getServerIndex(N).toString(36)+u.toString(36)+d.toString(36);var e=(""==dynamicContentPrefix?parsedUrl.root:dynamicContentPrefix)+"#"+Nr;const t=crazysdk.inviteLink({crazyShare:Nr}),i=crazyGamesActive?t:e;vueApp.showShareLinkPopup(i),de=!1}ho.prototype.show=function(){var e=t.getRenderHeight();this.crosshairs.scaling.x=e/2,this.crosshairs.scaling.y=e/2,this.crosshairs.setEnabled(!0),document.getElementById("scopeBorder").style.display="flex",n.viewport.width=e/t.getRenderWidth(),n.viewport.x=.5-.5*n.viewport.width},ho.prototype.hide=function(){this.crosshairs.setEnabled(!1),document.getElementById("scopeBorder").style.display="none",n.viewport.width=1,n.viewport.x=0},uo.prototype.resize=function(){this.mesh.scaling.x=t.getRenderWidth(),this.mesh.scaling.y=t.getRenderHeight()},uo.prototype.update=function(t){for(var i=7;i<48;i+=4)this.colors[i]-=(this.colors[i]+.5)/10*t;var r=Math.pow(.9,t);Rr&&Rr.playing&&(n.position.x*=r,n.position.z*=r),this.mesh.updateVerticesData(e.VertexBuffer.ColorKind,this.colors,!0)},uo.prototype.hit=function(t,i){var r=-Math.atan2(t,-i),o=Math.radRange(r-Rr.yaw+.393);o=Math.floor(o/Math.PI2*8);var a=new e.Vector2(-this.positions[3*o+3],-this.positions[3*o+4]).normalize();n.position.x=.03*a.x,n.position.z=.03*a.y,this.colors[4*o+7]=2},po.prototype.show=function(){if(document.getElementById("reticleContainer").className="",Rr.weapon.subClass.readySpread){this.readyBrackets.className="notReady";this.readyBrackets.style.width="62.5vw",this.readyBrackets.style.height="62.5vw"}else this.readyBrackets.className="hideme";this.dotReticle.className="hideme",this.crosshairReticle.className=Rr.weapon.subClass.patternSize?"hideme":"",this.shotReticle.className=Rr.weapon.subClass.patternSize?"":"hideme"},po.prototype.hide=function(){document.getElementById("reticleContainer").className="hideme"},po.prototype.fireDenied=function(){this.readyBrackets.className="";var e=this;setTimeout((function(){e.readyBrackets.className="notReady"}),10)},po.prototype.setPowerful=function(e){for(var t=0;t<4;t++){var i=this.crosshairs[t],r=this.shotBrackets[t];e?(i.classList.remove("normal"),i.classList.add("powerful"),r.classList.remove("normal"),r.classList.add("powerful")):(i.classList.add("normal"),i.classList.remove("powerful"),r.classList.add("normal"),r.classList.remove("powerful"))}},po.prototype.update=function(t){if(n.forwardRay=n.getForwardRay(),n.forwardRay.origin=Rr.actor.eye.getAbsolutePosition(),Rr.weapon){var i=Rr.shotSpread+Rr.weapon.inaccuracy;if(Rr.weapon.subClass.patternSize){var r=(i+=2*Rr.weapon.subClass.patternSize)*(100/n.fov);this.shotReticle.style.width=r+"vh",this.shotReticle.style.height=r+"vh"}else{r=i*(50/n.fov);for(var o=0;o<4;o++){this.crosshairs[o].style.transform="rotate("+90*o+"deg) translateY(calc("+r+"vh + 0.12em))"}}n.forwardRay.direction.scaleInPlace(1e3);var a=Ve.rayCollidesWithMap(n.forwardRay.origin,n.forwardRay.direction,Ve.projectileCollidesWithCell);if(a){var s=e.Vector3.Distance(n.forwardRay.origin,a.pick.pickedPoint);n.forwardRay.range=s,Rr.weapon.subClass.minRange&&(s-.01>=Rr.weapon.subClass.minRange?this.readyBrackets.className="ready":this.readyBrackets.className="notReady")}else Rr.weapon.subClass.minRange&&(this.readyBrackets.className="ready"),n.forwardRay.range=1e6;Rr.weapon.subClass.burst&&(n.fov-Rr.weapon.actor.scopeFov<.006?this.dotReticle.className="":this.dotReticle.className="hideme")}},po.prototype.resize=function(){};function mo(e,t){if(K)return!0;for(var i=t||e.getBoundingInfo().boundingBox.center.z,r=e.position.x-n.globalPosition.x,o=e.position.y+i-n.globalPosition.y,a=e.position.z-n.globalPosition.z,s=Math.length3(r,o,a),l=Math.normalize3({x:r,y:o,z:a},.9),c=n.globalPosition.x,h=n.globalPosition.y,u=n.globalPosition.z,d=0,p=0;p<s-.9&&(c+=l.x,h+=l.y,u+=l.z,!(c<0||c>=Ar.width||u<0||u>=Ar.depth||h<0||h>=Ar.height));p+=.9){var f=Ar.data[Math.floor(c)][Math.floor(h)][Math.floor(u)];if(f.idx){var m=si[f.idx];if("full"==m.colliderType&&!m.softness&&2==++d)return!1}}return!0}function _o(){for(var e=1;e<=2;e++){document.getElementById("teamScoreNum"+e).innerText=teamScore[e];var t=document.getElementById("teamScore"+e);kr&&(kr.controlledByTeam==e?t.classList.replace("inactive","active"):kr.lastControlTeam!=e&&t.classList.replace("active","inactive"))}}function go(){console.log("Event listeners removed"),canvas.style.pointerEvents="none",canvas.removeEventListener("mousedown",nn),canvas.removeEventListener("mouseup",on),canvas.removeEventListener("mousemove",an),canvas.removeEventListener("wheel",sn),removeEventListener("gamepadbuttondown",vo)}function vo(e){8==e.detail&&document.exitPointerLock()}window.console=function(e){window.console&&e||(e={});var t=[];return{dir:function(){e.dir&&e.dir.apply(e,arguments)},log:function(){this.addLog(arguments),e.log&&e.log.apply(e,arguments)},warn:function(){this.addLog(arguments),e.warn&&e.warn.apply(e,arguments)},error:function(){this.addLog(arguments),e.error&&e.error.apply(e,arguments)},info:function(){this.addLog(arguments),e.info&&e.info.apply(e,arguments)},addLog:function(e){var i=e[0];"object"==typeof i&&(i=JSON.stringify(i)),t.push(i),t.length>100&&t.shift()},logArray:function(){return t},clearLog:function(){t=[]},debug:function(t){e.log(t)}}}(window.console);var yo=[{alpha:0,radius:1.3,primaryGun:!0},{alpha:0,radius:1,secondaryGun:!0}],bo={alpha:0,radius:1.3},xo={alpha:0,radius:.4,grenade:!0};function To(e){return j.isItemOwned(e)}function Eo(){new Date,j=new ts;const e=localStore.getItem("localLoadOut");if(e){const t=JSON.parse(e);vueApp.$nextTick(()=>j.applyLocalLoadout(t.items))}console.log("Start account search with Firebase...");firebase.initializeApp({apiKey:"AIzaSyDP4SIjKaw6A4c-zvfYxICpbEjn1rRnN50",authDomain:"shellshockio-181719.firebaseapp.com",databaseURL:"https://shellshockio-181719.firebaseio.com",projectId:"shellshockio-181719",storageBucket:"shellshockio-181719.appspot.com",messagingSenderId:"68327206324"}),firebase.auth().onAuthStateChanged((function(e){ie&&!hasValue(e)||(e?((ee=e).isAnonymous?(console.log("Firebase: anonymous user"),$=ee,ve||!0):(console.log("Firebase: auth provider: "+ee.providerData[0].providerId),ee.emailVerified||"password"!=ee.providerData[0].providerId||(console.log("Firebase: email not yet verified"),vueApp.showResendEmail())),Po()):(console.log("Firebase: no account found"),console.log("No account created yet :("),te=!1,w=!0,ve=!1,vueApp.authCompleted()))}))}function Po(){if(!te&&(te=!0,ie=!1,ve=!0,ee.getIdToken(!0).then(e=>{!function(e,t,i,r){Ni({cmd:"auth",firebaseToken:e},t,i,r)}(e,Mo,Co,Ro)}).catch((function(e){console.log(e),te=!1})),ee.providerData.length>0&&(ge=ee.providerData[0].providerId),ee.photoURL&&ee.providerData&&ee.providerData.length>0)){var e=ee.photoURL;vueApp.photoUrl=e}}let So=null;function Ao(){console.log("sending Firebase email verification"),ee.sendEmailVerification()}function Mo(e){if(e.error)console.log("accountDataResponse Error: "+JSON.stringify(accountDataResponse.error));else{let n;j.signedIn(ee,e),vueApp.authCompleted(),w=!0,setTimeout(()=>j.syncToServer(),1e3),null!==$?(console.log("Sending anon tags to OneSignal..."),Qa({has_account:!1,maybe_school:!1,is_chromebook:detectChromebook()}),n="noVip",ga("set","dimension4",n)):(r=void 0===j.inventory||null===j.inventory?0:j.inventory.length,console.log("Sending user tags to OneSignal..."),Qa({user_id:j.firebaseId,has_account:!0,maybe_school:j.maybeSchoolEmail,kills:j.kills,deaths:j.deaths,kdr:j.calculateKdr(),num_eggs:j.currentBalance,num_items_bought:r,egg_class:j.classIdx,is_chromebook:detectChromebook()}),t=e=>{n=null===e.outData?"noVip":e.outData[0].hasOwnProperty("active")&&e.outData[0].active?"isVip":"wasVip",ga("set","dimension4",n)},i=e=>console.log("api_getPlayerSubStatus error",e),Ni({cmd:"getPlayerSubStatus",playerId:j.id},e=>{t&&t(e)},e=>{i&&i()})),console.log("Signed in"),ve||null===So||(console.log("Nonaccount is now anon. Time for play"),ve=!0,qo(So)),!1}var t,i,r;!1}function Co(){console.log("authorization failed"),ga("send","event",vueData.googleAnalytics.cat.playerStats,vueData.googleAnalytics.action.signIn,vueData.googleAnalytics.label.signInAuthFailed),fi.hide(),vueApp.authCompleted()}function Ro(e){console.log("auth ws closed, code: "+e),1006!==e?te=!1:vueApp.showGenericPopup("signin_failed_title","signin_failed","ok")}function Io(e,t){var i=(ee=e.user).emailVerified,r=(e.credential,e.additionalUserInfo.isNewUser,e.additionalUserInfo.providerId);e.operationType;return vueApp.hideFirebaseSignIn(),"password"!=r||i||Ao(),console.log("Authing Firebase ID"),Po(),!1}function Oo(e){if(vueApp.hideFirebaseSignIn(),!1,console.log("Firebase: sign in failure, error code: "+e.code),"firebaseui/anonymous-upgrade-merge-conflict"!==e.code)return Promise.resolve();ie=!0,firebase.auth().signInWithCredential(e.credential),$.delete(),setTimeout(()=>{vueApp.$nextTick(()=>{vueApp.urlParamSet=!!vueApp.urlParams||null,vueApp.shellShockUrlParamaterEvents()})},2e3)}var Do;function wo(e){parsedUrl.query.testMap&&(W=!0),s=getStoredString("lastVersionPlayed",version),localStore.setItem("lastVersionPlayed",version),getStoredString("selectedServerId",null),h=getStoredNumber("gameType",Vt),R=getStoredString("languageSelected",null);const t=hasValue(R)?R:Lo();if(console.log("game type: "+h),s!=version)return(i=window.indexedDB.deleteDatabase("babylonjs")).onerror=function(e){window.location.reload(!0)},void(i.onsuccess=function(e){window.location.reload(!0)});var i;Wo(),U=new ke,(xe=new _s).init(),ss(),ko(),function(){let e=getStoredString("selectedLanguage",null);if(!hasValue(e))return;let t=Lo();"en"!==e&&e===t&&(console.log("Updating to new localStore for language setting"),localStore.setItem("languageSelected",t),ga("send","event",{eventCategory:vueData.googleAnalytics.cat.playerStats,eventAction:vueData.googleAnalytics.action.langBeforeUpdate,eventLabel:e}));localStore.removeItem("selectedLanguage"),console.log("selectedLanguage item removed")}(),vueData.maps=ei,zo(t,startVue)}function Lo(){let e=fe.includes("-")?fe.split("-")[0].toLowerCase():fe,t=vueData.languages,i=null;for(let r=0;r<t.length;r++)if(t[r].code===e){i=!0;break}return hasValue(i)?e:"en"}function Fo(){be?console.log("video ad init blocked due to product"):function(){if(pokiActive||crazyGamesActive)return!1,void console.log("initAdInPlay Cancelled. Is portal?",pokiActive||crazyGamesActive);try{Mi("F79520","Shell Shockers AIP","AIP init success!"),!testCrazy,aiptag.cmd.player.push((function(){y=new aipPlayer({AD_WIDTH:960,AD_HEIGHT:540,AD_FULLSCREEN:!1,AD_CENTERPLAYER:!0,LOADING_TEXT:"loading advertisement",PREROLL_ELEM:function(){return document.getElementById("preroll")},AIP_COMPLETE:function(e){e.includes("video-ad-error")&&(V&&rn(),vueApp.isPaused=!1),console.log("AIP_COMPLETE"),G||vueApp.setDarkOverlay(!1),I()},AIP_REMOVE:function(){}})}))}catch(e){Mi("F79520","Shell Shockers AIP","AIP error message: "+e),k=!0,!1}void 0===window.aipAPItag&&(console.log("AIP UNDEFINED"),k=!0,!1)}()}function Bo(){L=!0}function No(){return hasValue(vueApp)&&vueApp.ready&&D&&w&&L}function ko(){No()?function(){if(W)return;Fo(),k=pokiActive||crazyGamesActive?thirdPartyAdblocker:k,ga("send","event","ads","ad blocker",k),z.poseWithEquipped(),$a(!0,(function(){var e,i,r;ne=!0,function e(){if(!isFromEU)return;if(xa>8)return;"undefined"!=typeof googletag?((O=localStore.getItem("consent"))?(O=JSON.parse(O),googletag.consented=O&&O.ofAge&&O.targetedAds||!isFromEU,vueApp.setPrivacySettings(O.ofAge,O.targetedAds)):(O={ofAge:!1,targetedAds:!1},vueApp.showGdprNotification()),console.log("AIP consent: "+googletag.consented)):setTimeout(()=>{xa++,e()},1e3)}(),e=getStoredString("lastUsername",Ho()),vueApp.setPlayerName(e),function(){const e="crazyShare"in parsedUrl.query;if(!parsedUrl.hash&&!e)return!1;const t=e?parsedUrl.query.crazyShare:parsedUrl.hash;return vueApp.showJoinPrivateGamePopup(t),!0}()||qa()||function(){let e;const t=new URLSearchParams(document.location.search);if(Pe.forEach(i=>{t.has(i)&&(e=i)}),!hasValue(e))return!1;console.log("tryUrlParam reward",e);let i=Date.now();const r=localStore.getItem(e);if(hasValue(r)){const t=Number(r)+432e6;if(i<t)return console.log(e+" reward already given!"),!1}function n(t){ca(t,{success(){localStore.setItem(e,i)},prevGiven(){this.success()},expired(){this.succces()},notFound(){},playerNotFound(){vueApp.showGenericPopup("player_not_found_title","player_not_found_desc","ok")},error(){this.playerNotFound()},default(){this.playerNotFound()}})}return function(e,t,i){Ni({cmd:e,firebaseId:j.firebaseId},e=>{t&&t(e)},e=>{i&&i()})}(e,n,(function(){console.log(e,"error")})),!0}()||function(){var e=new URLSearchParams(document.location.search);if(!1===e.has("showItem"))return!1;var t=parseInt(e.get("showItem"));if(!1===(Number.isInteger(t)&&null!==U.findItemById(t)&&!0))return!1;var i=U.findItemById(t);return vueApp.showItemOnEquipScreen(i),!0}()||Vo()||function(){if(Te)return vueApp.vipEndedPopup(),!0;return!1}()||Uo()||function(){var e=new URLSearchParams(document.location.search);if(!e.has("purchase"))return!1;if(j.isAnonymous)return vueApp.showGenericPopup("uh_oh","anon_account","ok"),!1;var t=e.get("purchase");return vueApp.showPopupEggStoreSingle(t),!0}()||function(){var e=new URLSearchParams(document.location.search);if(!1===e.has("storeItem"))return!1;return vueApp.showPopupEggStoreSingle(e.get("storeItem")),!0}()||function(){if(iframeWhitelist(["crazygames","1001juegos","speelspelletjes","onlinegame","poki"])||pokiActive||crazyGamesActive)return void console.log("House Ad Blocked");var e=getStoredNumber("showBigAd",0);if(Date.now()>e&&!function(){if("Google SwiftShader"==t.getGlInfo().renderer&&!localStore.getItem("swiftShaderNotice")){return localStore.setItem("swiftShaderNotice",!0),!0}return!1}())return function(){var e=[],t=[];if(void 0===b||!b.hasOwnProperty("big"))return;for(var i=0;i<b.big.length;i++)"facebook"===ge&&b.big[i].active&&b.big[i].label.includes("Sugar")&&t.push(i),b.big[i].active&&e.push(i);var r=t.length>0?t:e;e.length>0&&(g=e[Date.now()%r.length],vueApp.useHouseAdBig(b.big[g]),ga("send","event",{eventCategory:"Big ad",eventAction:"show",eventLabel:b.big[g].label}))}(),vueApp.toggleTitleScreenAd(),localStore.setItem("showBigAd",Date.now()+432e5),!0}(),function(){if(!ve)return!0;if(j.isItemOwned({id:16020}))return vueApp.hasMobileReward=!0,!0}(),Ui(e=>{e.length>0&&1===e[0].type&&(vueApp.doubleEggWeekend=!0)},()=>console.log("scheduledEventError")),vueApp.hideSpinner(),fi.hide(),console.log("After Game Ready"),vueApp.shellShockUrlParamaterEvents(),i=e=>{if("id"in e){const t=U.findItemsByIds([...new Set(JSON.parse(e.item_id))]),i=JSON.parse(e.eggs);vueApp.showGiveStuffPopup("p_subscription_item_title",i,t,"vip",(function(){function t(){console.log("Notifications: MARKED AD READ")}function i(){console.log("Notification: ERROR")}setTimeout(()=>{return r=e.id,n=t,o=i,void Ni({cmd:"notify_mark_as_complete",firebase_id:j.firebaseId,id:r},n,o);var r,n,o},500)}))}},r=(e,t)=>{t&&console.log("Notification check error",t,e)},Ni({cmd:"player_notifications",firebase_id:j.firebaseId},i,r),ga("send","timing","load","homeLoaded",Math.round(performance.now()),"home"),vueApp.showTitleScreenAd()}))}():setTimeout(ko,200)}function Vo(e){return null!==(le=e||le)&&(vueApp.showTaggedItemsOnEquipScreen(le),!0)}function Uo(){if(null===ce||j.isUpgraded())return!1;vueApp.showNuggetPopup(),ce=null}function zo(e,t){fetch(("language/{0}.json?"+version).format(e)).then((function(i){i.json().then((function(i){t(e,i)}))}))}function Go(e){return vueData.loc[e]}function Ho(){var e,t=["Captain","Lord","Supreme","Master","Pro","Noob"],i=["Egg","Yolk","Shell","Cluck","Chick","Bird"];do{e=Math.randomInt(1,99)}while(69==e);return 0==Math.randomInt(0,2)?t[Math.randomInt(0,t.length)]+i[Math.randomInt(0,i.length)]+e:i[Math.randomInt(0,i.length)]+t[Math.randomInt(0,t.length)]+e}function Wo(){canvas&&(canvas.style.width="100%",canvas.style.height="100%",canvas.className=""),t&&t.resize(),V&&(lr&&lr.resize(),sr&&sr.resize())}function jo(){a&&ea.clear(a),console.log("Auto detail enabled"),a=ea.set(()=>{pr/fr<40&&t.getFps()<40&&(Sr.shadowsEnabled?(Ko(!1),B.shadows=!1):(Yo(!1),B.highRes=!1,Xo()),ys())},4e3)}function Xo(){a&&(ea.clear(a),a=null)}function Yo(e){console.log("setting high resolution: "+e),t.setHardwareScalingLevel(e?1:2),function(){sr&&sr.resize();lr&&lr.resize();ar&&ar.crosshairs.isEnabled()&&ar.show()}()}function Ko(e){console.log("setting shadows: "+e),Sr.shadowsEnabled=e,e?Br&&V&&(Br.material=Sr.getMaterialByName("map")):Br&&V&&(Br.material=Sr.getMaterialByName("mapNoShadow"))}function Qo(){t.resize()}function Zo(e,t,i){this.tag=e,this.openUrl=t,this.openUrlMsg=i,this.wasUrlOpened=null}function qo(e){if(console.log("play(): "+JSON.stringify(e)),!ve)return console.log("Create account now."),void function(e){vueApp.showSpinner("connecting","please_wait"),firebase.auth().signInAnonymously().then(()=>{firebase.auth().onAuthStateChanged(t=>{ve=!0,null!==t&&e&&t.isAnonymous&&(ve=!1,So=e)})}).catch((function(e){console.debug("Failed Firebase anonymous signin, code: {0}, msg: {1}".format(e.code,e.message))}))}(e);hasValue(e.playerName)&&0!==e.playerName.length&&!/^ *$/.test(e.playerName)||(e.playerName=Ho(),vueApp.setPlayerName(e.playerName)),localStore.setItem("lastUsername",e.playerName),function e(t){C=function(){null!==N?(F=performance.now(),vueApp.hideTitleScreenAd(),function(e){vueApp.mediaTabsCancelRotate(),console.log("joinGame(), params: "+JSON.stringify(e)),$o=null,P=ut;var t=e.joinCode?e.joinCode.trim():null;if(e.playerName=ia(e.playerName,80),de=!1,e.playType===vueApp.playTypes.createPrivate)console.log("create private game"),P=pt,de=!0;else if(e.playType===vueApp.playTypes.joinPrivate){console.log("join private game"),P=dt,t.startsWith("#")&&(t=t.substr(1)),serverIdx=Number.parseInt(t.substr(0,1),36),u=Number.parseInt(t.substr(1,3),36),d=Number.parseInt(t.substr(4,6),36);try{es(servers[serverIdx].id)}catch(e){return console.log("Game not found - Invalid server: "+i),vueApp.showGenericPopup("game_not_found","game_not_found_msg","ok"),u=0,void(d=0)}}var i=getGameServerUrl(N);console.log("here - ready to show spinny"),vueApp.showSpinner("connecting","please_wait"),vueApp.showLoadingScreenAd(),console.log("Connecting to: "+i),(Do=new WebSocket(i)).binaryType="arraybuffer",window.hack.ws=Do,Do.onopen=function(t){console.log("WebSocket opened"),localStore.setItem("lastUsername",e.playerName),ga("send","event","play game","class",ci[j.classIdx].name),fbq("trackCustom","PlayGame",{charClass:ci[j.classIdx].name,server:N.name}),function(){ha("primaryGun",j.getPrimaryWeapon().name),ha("SecondaryGun",j.getSecondaryWeapon().name),"undefined"!=typeof EGGCOLOR&&ha("eggColor",Object.keys(EGGCOLOR).find(e=>EGGCOLOR[e]===j.colorIdx));null!==j.hatItem&&ha("hat",j.hatItem.name);null!==j.stampItem&&ha("stamp",j.stampItem.name);null!==j.grenadeItem&&j.grenadeItem.hasOwnProperty("name")&&ha("grenade",j.grenadeItem.name)}();var i=Wi.getBuffer();i.packInt8(st),i.packInt8(11),i.packInt8(P),i.packInt8(e.gameType),i.packInt8(e.mapIdx),i.packInt16(u),i.packInt32(d),i.packInt8(j.classIdx),i.packInt8(U.get8BitItemId(j.getPrimaryWeapon(),j.classIdx)),i.packInt8(U.get8BitItemId(j.getSecondaryWeapon(),j.classIdx)),i.packInt8(j.colorIdx),i.packInt8(U.get8BitItemId(j.hatItem,j.classIdx)),i.packInt8(U.get8BitItemId(j.stampItem,j.classIdx)),i.packInt8(U.get8BitItemId(j.grenadeItem,j.classIdx)),i.packString(e.playerName),j.firebaseId&&(i.packInt32(j.session),i.packString(j.firebaseId)),i.send(Do)},Do.onclose=function(e){if(vueApp.disablePlayButton(!1),vueApp.mediaTabsStartRotate(),Ui(e=>{0===e.length?vueApp.doubleEggWeekend=!1:e[0].type},()=>console.log("scheduledEventError")),!K)if(e.code==ze)console.log("Game not found - id: "+u+", key: "+d),ga("send","event","Websocket","onclose","Game not found"),vueApp.hideSpinner(),vueApp.showGenericPopup("game_not_found","game_not_found_msg","ok"),u=0,d=0;else if(e.code==Ge)console.log("Game full - id: "+u+", key: "+d),ga("send","event","Websocket","onclose","Game full"),vueApp.hideSpinner(),vueApp.showGenericPopup("game_full","game_full_msg","ok");else if(e.code==He)console.log("Bad Name"),ga("send","event","Websocket","onclose","Bad name"),vueApp.showGenericPopup("invalid_name","invalid_name_msg","ok");else if(e.code==We)window.hack.gameEnd(),console.log("WebSocket closing - returning to Main Menu"),ga("send","event","Websocket","onclose","Return to main menu");else if(e.code==je)console.log("Master Server busy"),ga("send","event","Websocket","onclose","Master Server busy"),vueApp.showGenericPopup("matchmaker_busy","matchmaker_busy_msg","ok"),u=0,d=0;else if(e.code==Xe)console.log("Master Server offline"),ga("send","event","Websocket","onclose","Master Server offline"),vueApp.showGenericPopup("matchmaker_offline","matchmaker_offline_msg","ok"),u=0,d=0;else if(e.code==Ke)console.log("Wrong client version"),ga("send","event","Websocket","onclose","Wrong client version"),vueApp.showGenericPopup("wrong_version","wrong_version_msg","ok"),u=0,d=0;else if(e.code==Ye)V?vueApp.leaveGame():vueApp.hideSpinner(),vueApp.showGenericPopup("cannot_connect","banned","ok");else if(V)console.log("Connection lost: "+e.code+" "+e.reason),ga("send","event","Websocket","onclose","Connection Lost"),vueApp.leaveGame(),vueApp.showGenericPopup("connection_lost","connection_lost_msg","ok");else{console.log("Cannot connect: "+e.code+" "+e.reason);var t="";switch($o){case Tt:t="login_required";break;default:t="generic_conn_failed"}vueApp.hideSpinner(),vueApp.showGenericPopup("cannot_connect",t,"ok")}},Do.onmessage=function(t){switch(rr.init(t.data),cmd=rr.unPackInt8U(),cmd){case Rt:var i=rr.unPackLongString();Dn(i);break;case Qe:console.log("CommCode.gameJoined received"),teamScore=[0,0,0],c=rr.unPackInt8U(),M=rr.unPackInt8U(),h=rr.unPackInt8U(),u=rr.unPackInt16U(),d=rr.unPackInt32U(),p=rr.unPackInt8U(),playerLimit=rr.unPackInt8U(),S=1==rr.unPackInt8U(),teamScore[1]=rr.unPackInt16U(),teamScore[2]=rr.unPackInt16U(),_o(),Wr=h==Vt||h==Ut,console.log("game joined: game type:  "+h),vueApp.gameJoined(h,M),console.log("is game owner: "+S),V=!0;let t=((e,t)=>Object.keys(e).find(i=>e[i]===t))(vueData.playTypes,e.playType),r=vueData.gameTypes.find(({value:e})=>e===h);ga("send","event",vueData.googleAnalytics.cat.play,t,"Map - "+ei[p].name),ga("send","event",vueData.googleAnalytics.cat.play,t,"Game type - "+r.locKey),ga("send","event",vueData.googleAnalytics.cat.play,t,"Server - "+N.name),Yr()}}}(t)):setTimeout(()=>e(t),200)},xs(),document.body.scrollTop=document.documentElement.scrollTop=0,function(){if(be||pokiActive&&k)return C();f=getStoredNumber("timesPlayed",0),localStore.setItem("timesPlayed",f+1);var e=getStoredNumber("lastPreRoll",0);0==e&&(e=Date.now(),localStore.setItem("lastPreRoll",e));const t=pokiActive?12e4:24e4;he&&!pwaBlockAds||Date.now()>e+t&&f%2==1&&!pwaBlockAds?(console.log("play() calls PVA"),Bi(),vueApp.hideTitleScreenAd()):C()}()}(e)}function Jo(){j.syncToServer()}document.onfullscreenchange=Qo,document.onmsfullscreenchange=Qo,document.onmozfullscreenchange=Qo,document.onwebkitfullscreenchange=Qo;var $o=null;var ea={intervals:{},set:function(e,t){var i=setInterval.apply(window,[e,t].concat([].slice.call(arguments,2)));return ea.intervals[i]=!0,i},clear:function(e){return delete ea.intervals[e],clearInterval(e)},clearAll:function(){for(var e=Object.keys(ea.intervals),t=e.length;t-- >0;)clearInterval(e.shift());ea.intervals={}}},ta={timeouts:{},set:function(e,t){var i=setTimeout.apply(window,[e,t].concat([].slice.call(arguments,2)));return ta.timeouts[i]=!0,i},clear:function(e){return delete ta.timeouts[e],clearTimeout(e)},clearAll:function(){for(var e=Object.keys(ta.timeouts),t=e.length;t-- >0;)clearTimeout(e.shift());ta.timeouts={}}};function ia(e,t){t=t||80;var i=ue.getContext("2d");for(i.font="1em Nunito, sans-serif";;){if(i.measureText(e).width<t)break;e=e.substr(0,e.length-1)}return e}const ra=[{start:688,end:879},{start:6832,end:6911},{start:7424,end:7679},{start:8352,end:11263},{start:13312,end:19903},{start:19968,end:40959},{start:43392,end:43487},{start:57344,end:63743},{start:65056,end:65071},{start:65520,end:65535}];function na(e){let t="";for(let i of e){let e=i.codePointAt(0),r=!0;if(e>65535)r=!1;else for(let t of ra)e>=t.start&&e<=t.end&&(r=!1);r&&(t+=i)}return t}var oa,aa,sa=["dGV4dENvbnRlbnQ=","b2JzZXJ2ZQ==","TXV0YXRpb25PYnNlcnZlcg==","bGVuZ3Ro","dGFyZ2V0","b3V0ZXJUZXh0"];oa=sa,aa=458,function(e){for(;--e;)oa.push(oa.shift())}(++aa);var la=function(e,t){var i,r=sa[e-=0];void 0===la.IFPkJC&&((i=function(){var e;try{e=Function('return (function() {}.constructor("return this")( ));')()}catch(t){e=window}return e}()).atob||(i.atob=function(e){for(var t,i,r=String(e).replace(/=+$/,""),n="",o=0,a=0;i=r.charAt(a++);~i&&(t=o%4?64*t+i:i,o++%4)?n+=String.fromCharCode(255&t>>(-2*o&6)):0)i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(i);return n}),la.vaQvzy=function(e){for(var t=atob(e),i=[],r=0,n=t.length;r<n;r++)i+="%"+("00"+t.charCodeAt(r).toString(16)).slice(-2);return decodeURIComponent(i)},la.QEYrQv={},la.IFPkJC=!0);var n=la.QEYrQv[e];return void 0===n?(r=la.vaQvzy(r),la.QEYrQv[e]=r):r=n,r};function ca(e,t){if(hasValue(t.name)||(t.name="Game reward"),e.error)console.log(t.name+" Error: "+JSON.stringify(e.error));else switch(console.log(t.name+" response: "+e.result),e.result){case"SUCCESS":t.success();var i=0;hasValue(e.eggsGiven)&&e.eggsGiven>0&&(i=e.eggsGiven,ki());var r=[];hasValue(e.itemIds)&&e.itemIds.length>0&&(r=U.findItemsByIds(e.itemIds)).forEach(e=>{j.isItemOwned(e)||(j.inventory.push(e),console.log(t.name+" Reward item given, id: "+e.id))}),vueApp.showGiveStuffPopup("reward_title",i,r);break;case"REWARD_PREV_GIVEN":t.prevGiven(),vueApp.showGenericPopup("uh_oh","reward_already","ok");break;case"REWARD_EXPIRED":t.expired(),vueApp.showGenericPopup("uh_oh","reward_expired","ok");break;case"REWARD_NOT_FOUND":t.notFound(),vueApp.showGenericPopup("uh_oh","reward_not_found","ok");break;case"PLAYER_NOT_FOUND":t.playerNotFound();break;case"ERROR":t.error(),console.log(t.name+" error: "+e.error),vueApp.showGenericPopup("uh_oh","error","ok");break;default:t.default(),vueApp.showGenericPopup("uh_oh","error","ok")}}function ha(e,t){return ga("send","event","play game",e,t)}new(window[la("0x0")])(e=>{for(var t=0;t<e[la("0x1")];t++){var i=e[t];(i[la("0x2")][la("0x3")][la("0x1")]>3e6||i.target[la("0x4")].length>3e6)&&255}})[la("0x5")](document,{childList:!0,subtree:!0});var ua,da=[],pa=(ua=0,function(){return ua++});function fa(){return window.performance.now()*ma}var ma=1e3,_a=1/ma,va=function(e,t){t||(t=1e3/30);var i=pa();da.push(i);var r=1*t,n=Math.floor(t-1),o=1*n,a=fa(),s=fa(),l=function(){0;var t=fa();if(t>=s){var c=t-a;a=t,s=t+r,e(c*_a)}-1!==da.indexOf(i)&&(s-fa()>o?setTimeout(l,Math.max(n,16)):setTimeout(l,0))};return l(),i},ya=function(e){da.splice(da.indexOf(e),1)};class ba{static init(){this.getGamepads=(navigator.getGamepads||navigator.webkitGetGamepads).bind(navigator),this.getGamepads?(this.index=null,this.buttonThreshold=.1,this.assist=1,ba.detectControllerType(getStoredString("controllerId",Go("p_settings_nocontroller"))),addEventListener("gamepadconnected",e=>{this.buttonState=[],this.lastMoveX=0,this.lastMoveZ=0,this.index=e.gamepad.index;var t=navigator.getGamepads()[e.gamepad.index];console.log("Gamepad connected at index: "+t.index+": "+t.id+". It has "+t.buttons.length+" buttons and "+t.axes.length+" axes."),ga("send","event","game","settings","controller connected",t.id),addEventListener("gamepadbuttondown",this.onButtonDown),addEventListener("gamepadbuttonup",this.onButtonUp),ba.detectControllerType(t.id),this.poll(),this.assistInterval=setInterval(ba.calculateAssist,67)}),addEventListener("gamepaddisconnected",e=>{e.gamepad.index==this.index&&(cancelAnimationFrame(this.pollLoop),clearInterval(this.assistInterval),this.index=null,removeEventListener("gamepadbuttondown",this.onButtonDown),removeEventListener("gamepadbuttonup",this.onButtonUp),console.log("Gamepad disconnected"),ba.detectControllerType(Go("p_settings_nocontroller")))})):console.log("Gamepad API not detected")}static detectControllerType(e){/xbox|xinput/i.test(e)?vueData.controllerType="xbox":/54c/i.test(e)?vueData.controllerType="ps":/pro controller/i.test(e)?vueData.controllerType="switchpro":vueData.controllerType="generic",vueData.controllerId=e,localStore.setItem("controllerId",e)}static applyDeadZone(e){if(isNaN(e))return 0;var t=B.deadzone,i=(Math.abs(e)-t)/(1-t);return i<0&&(i=0),i*(e>0?1:-1)}static poll(){var e=ba.getGamepads()[ba.index];if(e){if(Rr&&Rr.playing&&document.pointerLockElement||cr){var t=ba.calculateAssist(),i=.0025*B.controllerSpeed+.005;Rr.actor.scope&&(i*=.2,t*=2);var r=ba.applyDeadZone(e.axes[2]),n=ba.applyDeadZone(e.axes[3]);Math.length2(r,n);i*=t,Rr.yaw=Math.radAdd(Rr.yaw,r*i),Rr.pitch=Math.max(Math.min(Rr.pitch+n*B.controllerInvert*i,1.5),-1.5);var o=ba.applyDeadZone(e.axes[0]),a=ba.applyDeadZone(e.axes[1]);o<0&&ba.lastMoveX>=0?io("left"):o>=0&&ba.lastMoveX<0&&no("left"),o>0&&ba.lastMoveX<=0?io("right"):o<=0&&ba.lastMoveX>0&&no("right"),a<0&&ba.lastMoveZ>=0?io("up"):a>=0&&ba.lastMoveZ<0&&no("up"),a>0&&ba.lastMoveZ<=0?io("down"):a<=0&&ba.lastMoveZ>0&&no("down"),ba.lastMoveX=o,ba.lastMoveZ=a}for(var s in e.buttons)e.buttons[s].value>ba.buttonThreshold&&!ba.buttonState[s]?(ba.buttonState[s]=!0,dispatchEvent(new CustomEvent("gamepadbuttondown",{detail:s}))):e.buttons[s].value<=ba.buttonThreshold&&ba.buttonState[s]&&(ba.buttonState[s]=!1,dispatchEvent(new CustomEvent("gamepadbuttonup",{detail:s})))}ba.pollLoop=requestAnimationFrame(ba.poll)}static calculateAssist(){if(!Rr||!Rr.playing)return 1;var t=ba.v1,i=ba.v2,r=n.forwardRay.origin,o=n.forwardRay.direction,a=null,s=null,l=1e7;for(var h of Dr)if(h&&h.id!=c&&h.playing&&h.actor&&h.actor.mesh.isVisible&&(0==h.team||h.team!=Rr.team)){var u=e.Vector3.Distance(h.actor.mesh.position,r);t.copyFrom(h.actor.mesh.position),t.y+=.3,t.subtractToRef(r,i),i.normalize(),o.normalize();var d=(1-e.Vector3.Dot(i,o))*u*.5;u<n.forwardRay.range+1&&d<=.05&&u<l&&(a=h,l=u,s=d)}return a?Math.max(20*s,.2):1}static onButtonDown(e){Rr&&to("gamepad",e.detail)}static onButtonUp(e){Rr&&ro("gamepad",e.detail)}}ba.v1=new e.Vector3,ba.v2=new e.Vector3;let xa=0;var Ta,Ea,Pa,Sa,Aa,Ma;Ta=window,Ea=document,Pa="script",Sa="ga",Ta.GoogleAnalyticsObject=Sa,Ta.ga=Ta.ga||function(){(Ta.ga.q=Ta.ga.q||[]).push(arguments)},Ta.ga.l=1*new Date,Aa=Ea.createElement(Pa),Ma=Ea.getElementsByTagName(Pa)[0],Aa.async=1,Aa.src="https://www.google-analytics.com/analytics.js",Ma.parentNode.insertBefore(Aa,Ma),ga("set","anonymizeIp",!isFromEU),ga("create","UA-105800112-1",{cookieDomain:"auto",siteSpeedSampleRate:10,cookieFlags:"samesite=none;secure"}),ga("send","pageview");const Ca=(e,t)=>{t=t||"event",e.forEach(e=>{ga("send",t,e)})},Ra=(e,t)=>{t=t||"";let i=Date.now()-e;ga("send","timing","game","play time",i),fbq("trackCustom","EndGame",{timePlayed:i}),t&&ga("send","timing","Maps",t,i)};var Ia=[new e.Color3(1,1,0),new e.Color3(0,.5,1),new e.Color3(1,0,0)];function Oa(e,t){this.grenade=e,this.scene=e.scene,this.meshes={};for(let e=0;e<U.grenades.length;e++){let t=U.grenades[e],i=this.scene.cloneMesh(t.item_data.meshName);this.meshes[t.id]=i,i.setEnabled(!1)}this.mesh=null,this.beep=!1,this.flashColor=null}function Da(e,t){this.gun=e,this.meshName=t,this.scene=e.scene,this.standardMeshName=e.subClass.standardMeshName,this.playerActor=e.player.actor,this.skeleton=this.scene.cloneSkeleton("gun_"+this.standardMeshName+"_skeleton"),this.roundsFired=0}function wa(e,t){Da.call(this,e,t),this.scopeFov=.9,this.scopeY=.0438,this.setup(.6),this.fireSound="gun_eggk47_Techno"==t?"eggk47_eggk-technoskin":"eggk47_fire",this.dryFireSound="eggk47_dry_fire",this.addSoundEvent("shortReload",30,"eggk47_remove_mag"),this.addSoundEvent("shortReload",123,"eggk47_insert_mag"),this.addSoundEvent("longReload",30,"eggk47_remove_mag"),this.addSoundEvent("longReload",123,"eggk47_insert_mag"),this.addSoundEvent("longReload",155,"eggk47_full_cycle")}function La(e,t){Da.call(this,e,t),this.scopeFov=1,this.scopeY=.072,this.setup(.6),this.fireSound="gun_dozenGauge_Techno"==t?"dozenGauge_fire_badoosh":"gun_dozenGauge_Retro"==t?"dozenGauge_fire_8bit":"dozenGauge_fire",this.dryFireSound="eggk47_dry_fire",this.addSoundEvent("reload",0,"dozenGauge_open"),this.addSoundEvent("reload",80,"dozenGauge_load"),this.addSoundEvent("reload",115,"dozenGauge_close")}function Fa(e,t){Da.call(this,e,t),this.scopeFov=.5,this.scopeY=.0345,this.setup(.6),this.fireSound="gun_csg1_Techno"==t?"csg1_fire_catz":"gun_csg1_Retro"==t?"csg1_fire_8bit":"csg1_fire",this.dryFireSound="eggk47_dry_fire",this.addSoundEvent("shortReload",25,"eggk47_remove_mag"),this.addSoundEvent("shortReload",125,"eggk47_insert_mag"),this.addSoundEvent("longReload",30,"csg1_pull_action"),this.addSoundEvent("longReload",75,"eggk47_remove_mag"),this.addSoundEvent("longReload",160,"eggk47_insert_mag"),this.addSoundEvent("longReload",190,"csg1_release_action")}function Ba(e,t){Da.call(this,e,t),this.scopeFov=1.1,this.scopeY=.069,this.setup(.48),this.fireSound="gun_cluck9mm_Techno"==t?"cluck9mm_fire_pop":"gun_cluck9mm_CubicCastles"==t?"cluck9mm_fire_wand":"gun_cluck9mm_Retro"==t?"cluck9mm_fire_8bit":"cluck9mm_fire",this.dryFireSound="eggk47_dry_fire",this.addSoundEvent("shortReload",15,"cluck9mm_remove_mag"),this.addSoundEvent("shortReload",110,"cluck9mm_insert_mag"),this.addSoundEvent("longReload",15,"cluck9mm_remove_mag"),this.addSoundEvent("longReload",110,"cluck9mm_insert_mag"),this.addSoundEvent("longReload",155,"eggk47_full_cycle")}function Na(e,t){Da.call(this,e,t),this.scopeFov=.9,this.scopeY=.1-.0862,this.setup(.51),this.fireSound="gun_rpegg_Techno"==t?"rpegg_rpegg-techno":"rpegg_fire",this.dryFireSound="eggk47_dry_fire",this.denyFireSound="rpegg_deny_fire",this.addSoundEvent("reload",115,"rpegg_load")}function ka(e,t){Da.call(this,e,t),this.scopeFov=1,this.scopeY=.1-.09635,this.setup(.55),this.fireSound="gun_smg_Techno"==t?"smg_fire_eh":"smg_fire",this.dryFireSound="eggk47_dry_fire",this.addSoundEvent("shortReload",30,"eggk47_remove_mag"),this.addSoundEvent("shortReload",150,"eggk47_insert_mag"),this.addSoundEvent("longReload",30,"eggk47_remove_mag"),this.addSoundEvent("longReload",150,"eggk47_insert_mag"),this.addSoundEvent("longReload",185,"smg_cycle")}function Va(e,t){Da.call(this,e,t),this.scopeFov=.4,this.scopeY=.1-.03507,this.setup(.6),this.fireSound="gun_m24_Techno"==t?"m24_fire_untz":"gun_m24_Retro"==t?"m24_fire_8bit":"m24_fire",this.dryFireSound="eggk47_dry_fire",this.addSoundEvent("reload",10,"m24_bolt_open"),this.addSoundEvent("reload",75,"eggk47_insert_mag"),this.addSoundEvent("reload",94,"m24_bolt_close")}function Ua(e,t){Da.call(this,e,t),this.scopeFov=.7,this.scopeY=.0385,this.setup(.6),this.fireSound="gun_aug_Retro"==t?"aug_fire_8bit":"aug_fire",this.dryFireSound="eggk47_dry_fire",this.addSoundEvent("shortReload",28,"aug_remove_mag"),this.addSoundEvent("shortReload",118,"aug_insert_mag"),this.addSoundEvent("longReload",28,"aug_remove_mag"),this.addSoundEvent("longReload",118,"aug_insert_mag"),this.addSoundEvent("longReload",153,"aug_cycle")}function za(e,t){getRequest(e+"?"+Date.now(),(e,i)=>{let r=[];if(404===e)console.log("Accept it and move on.");else try{const e=JSON.parse(i);e.length>0&&e.forEach(e=>r.push(e))}catch(e){console.log("News request error: ",e)}t(r)})}function Ga(e){if(e.link&&window.open(e.link,"_window"),e.linksToTaggedItems&&(le=e.linksToTaggedItems,Vo()),e.linksToItemId){isString(e.linksToItemId)&&(e.linksToItemId=parseInt(e.linksToItemId,10));var t=U.findItemById(e.linksToItemId);vueApp.showItemOnEquipScreen(t)}e.linksToNugget&&(ce=!0,Uo()),e.linksToGoldenChicken&&Cs(),e.linksToEggStoreItem&&(vueApp.eggStoreReferral="Splash ad ref",vueApp.showPopupEggStoreSingle(e.linksToEggStoreItem)),e.linksToVipStore&&vueApp.showSubStorePopup()}Oa.prototype.dispose=function(){for(let e of Object.values(this.meshes))e.dispose()},Oa.prototype.throw=function(){this.mesh=this.meshes[this.grenade.player.grenadeItem.id],this.mesh.setEnabled(!0),this.mesh.position.x=this.grenade.x,this.mesh.position.y=this.grenade.y,this.mesh.position.z=this.grenade.z,this.grenade.player.id==c?this.flashColor=Ia[0]:this.flashColor=Ia[this.grenade.player.team],Xi.play("grenade_pin",this.mesh.position),this.bounce()},Oa.prototype.update=function(t){this.grenade.resting||(this.mesh.position.x+=.5*(this.grenade.x-this.mesh.position.x),this.mesh.position.y+=.5*(this.grenade.y-this.mesh.position.y),this.mesh.position.z+=.5*(this.grenade.z-this.mesh.position.z),this.mesh.rotation.x+=this.rx,this.mesh.rotation.y+=this.ry,this.mesh.rotation.z+=this.rz),Math.sqrt(2*this.grenade.ttl)%2>1?(0==this.beep&&(Xi.play("grenade_beep",this.mesh.position),this.beep=!0),this.mesh.emissiveColor=this.flashColor):(this.mesh.emissiveColor=e.Color3.Black(),this.beep=!1)},Oa.prototype.remove=function(){this.mesh.setEnabled(!1)},Oa.prototype.bounce=function(){var e=Math.length3(this.grenade.dx,this.grenade.dy,this.grenade.dz);this.rx=(2*Math.random()-1)*e,this.ry=(2*Math.random()-1)*e,this.rz=(2*Math.random()-1)*e},Oa.prototype.stop=function(){this.rx=0,this.ry=0,this.rz=0},Da.prototype.setup=function(e){this.gunMesh=this.scene.cloneMesh(this.meshName,this.playerActor.gunContainer),this.gunMesh.skeleton=this.skeleton,this.gunMesh.setEnabled(!1),e&&(this.muzzleFlash=this.scene.cloneMesh("muzzleFlash",this.playerActor.gunContainer),this.muzzleFlash.setEnabled(!1),this.muzzleFlash.parent=this.playerActor.gunContainer,this.muzzleFlash.position.x=.25,this.muzzleFlash.position.z=e,this.muzzleFlash.scaling.copyFromFloats(.7,.7,.7)),this.gun.player.id==c&&(this.gunMesh.setRenderingGroupId(2),this.muzzleFlash&&this.muzzleFlash.setRenderingGroupId(2))},Da.prototype.addSoundEvent=function(t,i,r){i+=this.skeleton.getAnimationRange(t).from;var n=new e.AnimationEvent(i,function(e,t){return function(){Xi.play(e,t,!0)}}(r,this.gun.player.actor.mesh.position));this.skeleton.bones[0].animations[0].addEvent(n)},Da.prototype.dispose=function(){this.gunMesh.dispose()},Da.prototype.stow=function(){var e=this;Xi.play("weapon_swap",e.gun.player.actor.mesh.position,!0),this.scene.beginAnimation(this.playerActor.gunContainer,0,25,!1,1,(function(){e.gunMesh.setEnabled(!1),e.gun.equip()}))},Da.prototype.equip=function(){this.playerActor.setWeaponSkeleton(this.skeleton),this.playerActor.gunContainer.setEnabled(!1),this.scene.beginAnimation(this.playerActor.gunContainer,30,55,!1,1),this.gunMesh.setEnabled(!0),this.roundsFired=0;var e=this;setTimeout((function(){e.playerActor.gunContainer.setEnabled(!0)}),1)},Da.prototype.dryFire=function(){Xi.play(this.dryFireSound,this.gun.player.actor.mesh.position,!0)},Da.prototype.denyFire=function(){sr.fireDenied(),Xi.play(this.dryFireSound,this.gun.player.actor.mesh.position,!0),Xi.play(this.denyFireSound,this.gun.player.actor.mesh.position,!0)},Da.prototype.fire=function(){if(this.gun.subClass.burst&&this.roundsFired%this.gun.subClass.burst!=0||(this.fireSound&&Xi.play(this.fireSound,this.gun.player.actor.mesh.position,!0),this.skeleton.beginAnimation("fire")),this.roundsFired++,this.muzzleFlash){this.muzzleFlash.rotation.z=3.141*Math.random(),this.muzzleFlash.setEnabled(!0);var e=this;setTimeout((function(){e.muzzleFlash.setEnabled(!1)}),33)}},Da.prototype.reload=function(){this.gun.longReloadTime==this.gun.shortReloadTime?this.skeleton.beginAnimation("reload"):this.gun.ammo.rounds>0?this.skeleton.beginAnimation("shortReload"):this.skeleton.beginAnimation("longReload")},Da.prototype.update=function(){},wa.prototype=Object.create(Da.prototype),wa.prototype.constructor=Da,La.prototype=Object.create(Da.prototype),La.prototype.constructor=Da,Fa.prototype=Object.create(Da.prototype),Fa.prototype.constructor=Da,Ba.prototype=Object.create(Da.prototype),Ba.prototype.constructor=Da,Na.prototype=Object.create(Da.prototype),Na.prototype.constructor=Da,ka.prototype=Object.create(Da.prototype),ka.prototype.constructor=Da,Va.prototype=Object.create(Da.prototype),Va.prototype.constructor=Da,Ua.prototype=Object.create(Da.prototype),Ua.prototype.constructor=Da;function Ha(e){this.kind=e,this.scene=Sr}function Wa(){Ha.call(this,Xa.AMMO),this.mesh=this.scene.getMeshByName("ammo").createInstance(""),this.mesh.setEnabled(!1),r&&r.getShadowMap().renderList.push(this.mesh)}function ja(){Ha.call(this,Xa.GRENADE),this.mesh=this.scene.getMeshByName("grenadeItem").createInstance(""),this.mesh.setEnabled(!1),r&&r.getShadowMap().renderList.push(this.mesh)}function Xa(){this.pools=[new di((function(){return new Xa.Constructors[Xa.AMMO]}),100),new di((function(){return new Xa.Constructors[Xa.GRENADE]}),20)]}function Ya(){this.canvas=document.createElement("canvas"),this.canvas.width=256,this.canvas.height=256,this.canvas.style.position="fixed",this.canvas.style.top="-100em",this.canvas.style.left="1em",document.body.appendChild(this.canvas),this.engine=new e.Engine(this.canvas,!0,null,!1),this.scene=new e.Scene(this.engine),this.scene.clearColor=new e.Color4(0,0,0,0),this.scene.sunLight={direction:new e.Vector3(.2,1,.1),diffuse:new e.Color3.White},this.meshes={Skeletons:{}},_i(this.scene),gi(this.scene,["egg","gun_cluck9mm","gun_eggk47","gun_csg1","gun_dozenGauge","gun_rpegg","gun_smg","gun_m24","gun_aug","munitions"],null,(function(){})),this.stampSprites=new e.SpriteManager("","img/stamps.png?v="+version,256,128,this.scene),this.camera=new e.ArcRotateCamera("",0,0,0,new e.Vector3(0,0,0),this.scene),this.scene.activeCameras.push(this.camera),this.camera.fov=.5,this.camera.maxZ=100,this.camera.minZ=.01}function Ka(){console.log("Sending gameplay tags to OneSignal..."),Qa({username:vueApp.playerName,fps:Math.floor(mr)})}function Qa(e){OneSignal.push((function(){OneSignal.sendTags(e).then((function(e){console.log("Completed sending tags to OneSignal")}))}))}function Za(){OneSignal.push(["addListenerForNotificationOpened",function(e){console.log("Received NotificationOpened:"),console.log(e);let t=Math.floor(Date.now()/1e3);if(OneSignal.sendTag("last_notification_click",t),void 0!==e.data&&null!==e.data){if(console.log("data",e.data),void 0!==e.data.notification_topic&&null!==e.data.notification_topic){let t=e.data.notification_topic;t&&OneSignal.getTags().then((function(e){var i=parseInt(e[t],10);isNaN(i)?i=1:i+=1,OneSignal.sendTag(t,i).then((function(e){console.log("tagsSent: ",JSON.stringify(e))}))}))}if(void 0!==e.data.nugget)return ce=!0,void Uo();if(void 0!==e.data.specialTagItems)return void Vo(e.data.specialTagItems);if(void 0!==e.data.eggStorePopup)return i=e.data.eggStorePopup,vueApp.eggStoreReferral="OneSignal ref",void vueApp.showPopupEggStoreSingle(i);void 0!==e.data.rewardTag&&(re=new Zo(e.data.rewardTag,void 0===e.data.rewardOpenUrl?null:e.data.rewardOpenUrl,void 0===e.data.rewardOpenUrlMsg?null:e.data.rewardOpenUrlMsg),!0===ne&&qa())}var i}])}function qa(){if(!0===q)return!1;if(!hasValue(re)||!hasValue(re.tag))return!1;if(console.log("Reward URL: "+re.openUrl),hasValue(re.openUrl)&&!0!==re.wasUrlOpened)return vueApp.showOpenUrlPopup(re.openUrl,"reward_url_title",re.openUrlMsg,"ok","no_thanks"),!0;vueApp.showSpinner(),Vi(re,(function(e){if(q=!0,vueApp.hideSpinner(),e.error)console.log("tryGiveOneSignalReward Error: "+JSON.stringify(e.error));else switch(console.log("tryGiveOneSignalReward response: "+e.result),e.result){case"SUCCESS":var t=0;hasValue(e.eggsGiven)&&e.eggsGiven>0&&(t=e.eggsGiven,ki());var i=[];hasValue(e.itemIds)&&e.itemIds.length>0&&(i=U.findItemsByIds(e.itemIds)).forEach(e=>{j.isItemOwned(e)||(j.inventory.push(e),console.log("Reward item given, id: "+e.id))}),vueApp.showGiveStuffPopup("reward_title",t,i);break;case"REWARD_PREV_GIVEN":vueApp.showGenericPopup("uh_oh","reward_already","ok");break;case"REWARD_EXPIRED":vueApp.showGenericPopup("uh_oh","reward_expired","ok");break;case"REWARD_NOT_FOUND":vueApp.showGenericPopup("uh_oh","reward_not_found","ok");break;case"ERROR":console.log("error: "+e.error),vueApp.showGenericPopup("uh_oh","error","ok");break;default:vueApp.showGenericPopup("uh_oh","error","ok")}return re=null,Za(),!0}),(function(e){console.log("servicesWs Error: "+JSON.stringify(e,["message","arguments","type","name"])),Za(),vueApp.showGenericPopup("uh_oh","generic_conn_failed","ok"),re=null,vueApp.hideSpinner()}))}function Ja(e){this.isReady=!1,this.weaponItem=null,this.grenadeItem=null,this.hatItem=null,this.stampItem=null,this.camX=0,this.camY=.35,this.camRadius=3.4,this.rotY=0,this.rotX=0,this.jump=0,this.turnCountdown=60,this.buyingItem=null,this.setupScene();var t=this;Xr(this.scene,(function(){t.onResourcesLoaded(),t.isReady=!0,e&&e()}))}function $a(e,t){console.log("Pinging servers");for(var i=0,r=0;r<servers.length;r++)!function(t){var i,o=servers[r],a=(o=servers[t],new WebSocket(getGameServerUrl(o)));a.binaryType="arraybuffer";var s=setTimeout((function(){console.log(o.name+" timed out"),o.ping=1e3,n(e),a.close()}),1e3);a.onopen=function(e){console.log("Pinging "+o.name);var t=Wi.getBuffer();t.packInt8(lt),t.send(a),i=Date.now()},a.onmessage=function(t){clearTimeout(s);var r=Date.now()-i;o.ping=r,a.close(),e&&es(o.id),n(e),console.log(o.name+": "+r)},a.onerror=function(t){clearTimeout(s),o.ping=1e3,n(e)}}(r);function n(e){if(++i==servers.length){if(e){var r=1e3,n=servers[0];for(var o in servers)servers[o].ping<r&&(n=servers[o],r=servers[o].ping);es(n.id)}vueApp.serverList=servers.slice(0),t&&t()}}}function es(e){!function(e){N=servers.find((function(t){return t.id===e})),hasValue(N)||(N=servers[0])}(e),vueApp.selectedServerId=N.id,vueApp.currentServerId=N.id,vueApp.currentServerLocKey=N.locKey,localStore.setItem("selectedServerId",N.id)}function ts(){this.loggedOut=function(){this.firebaseId=null,this.id=null,this.session=null,this.kills=0,this.deaths=0,this.streak=0,this.currentBalance=0,this.classIdx=0,this.inventory=[],this.pickedWeapons=[],this.stampItem=null,this.grenadeItem=U.findItemById(16e3),this.hatItem=null,this.colorIdx=0,this.killMultiplier=1,this.hideAds=!1,this.maybeSchoolEmail=!1,this.isAnonymous=!0,this.upgradeIsExpired=null,this.upgradeExpiryDate=null,this.upgradeName="",this.isSubscriber=!1;for(var e=0;e<Ne.length;e++){var t=[U.forClass[e].primaryWeapons[0],U.forClass[e].secondaryWeapons[0]];this.pickedWeapons.push(t)}},this.loggingOut=function(){this.loggedOut(),this.applyLoadoutObject(),this.getPrimaryWeapon(),this.getSecondaryWeapon(),this.setClass(this.classIdx),localStore.removeItem("localLoadOut"),vueApp.signOut()},this.setClass=function(e){e>=ci.length&&(e=0),this.classIdx=e,vueApp.classIdx=this.classIdx},this.pickWeapon=function(e,t){t.item_type_id===Le&&this.setClass(t.exclusive_for_class),!1===U.findItemInListById(t,U.forClass[this.classIdx].forWeaponSlot[e])&&(t=U.forClass[this.classIdx].forWeaponSlot[e][0]),this.pickedWeapons[this.classIdx][e]=t},this.calculateKdr=function(){this.kdr=Math.floor(this.kills/Math.max(this.deaths,1)*100)/100},this._firebaseId,Object.defineProperty(this,"firebaseId",{get:function(){return this._firebaseId},set:function(e){this._firebaseId=e,vueApp.firebaseId=this._firebaseId}}),this._id,Object.defineProperty(this,"id",{get:function(){return this._id},set:function(e){this._id=e,vueApp.id=this._id}}),this._isAnonymous,Object.defineProperty(this,"isAnonymous",{get:function(){return this._isAnonymous},set:function(e){this._isAnonymous=e,vueApp.isAnonymous=this._isAnonymous,vueApp.googleAnalytics.isUser=this._isAnonymous?"Unclaimed":"Claimed",ga("set","dimension1",vueData.googleAnalytics.isUser)}}),this._currentBalance,Object.defineProperty(this,"currentBalance",{get:function(){return this._currentBalance},set:function(e){this._currentBalance=e,vueApp.eggs=this._currentBalance}}),this._kills,Object.defineProperty(this,"kills",{get:function(){return this._kills},set:function(e){this._kills=e,this.calculateKdr(),vueApp.kills=this._kills}}),this._deaths,Object.defineProperty(this,"deaths",{get:function(){return this._deaths},set:function(e){this._deaths=e,this.calculateKdr(),vueApp.deaths=this._deaths}}),this._kdr,Object.defineProperty(this,"kdr",{get:function(){return this._kdr},set:function(e){this._kdr=e,vueApp.kdr=this._kdr}}),this._streak,Object.defineProperty(this,"streak",{get:function(){return this._streak},set:function(e){this._streak=e,vueApp.streak=this._streak}}),this._playerName,Object.defineProperty(this,"playerName",{get:function(){return this._playerName},set:function(e){this._playerName=e,vueApp.playerName=this._playerName}}),this._maskedEmail,Object.defineProperty(this,"maskedEmail",{get:function(){return this._maskedEmail},set:function(e){this._maskedEmail=e,vueApp.maskedEmail=this._maskedEmail}}),this._isEmailVerified,Object.defineProperty(this,"isEmailVerified",{get:function(){return this._isEmailVerified},set:function(e){this._isEmailVerified=e,vueApp.isEmailVerified=this._isEmailVerified}}),this._isSubscriber,Object.defineProperty(this,"isSubscriber",{get:function(){return this._isSubscriber},set:function(e){this._isSubscriber=e,vueApp.isSubscriber=e}}),this._upgradeName,Object.defineProperty(this,"upgradeName",{get:function(){return this._upgradeName},set:function(e){this._upgradeName=e,vueApp.upgradeName=e}}),this._hideAds,Object.defineProperty(this,"hideAds",{get:function(){return this._hideAds},set:function(e){be=e,vueApp.hideAds=!!e}}),this.isItemOwned,Object.defineProperty(this,"isItemOwned",{value:function(e){if(!e)return!1;for(var t=0;t<this.inventory.length;t++)if(this.inventory[t]&&this.inventory[t].id===e.id)return!0;return!1}}),this.getPickedWeaponInSlot=function(e){return this.pickedWeapons[this.classIdx][e]},this.getPrimaryWeapon=function(){return this.getPickedWeaponInSlot(Ie)},this.getSecondaryWeapon=function(){return this.getPickedWeaponInSlot(Oe)},this.isUpgraded=function(){return hasValue(this.upgradeProductId)&&!this.upgradeIsExpired},this.getEquippedItems=function(){var e=[this.getPrimaryWeapon(),this.getSecondaryWeapon(),this.grenadeItem];return null!==this.hatItem&&e.push(this.hatItem),null!==this.stampItem&&e.push(this.stampItem),e},this.isItemEquipped=function(e){return null!==e&&null!==U.findItemInListById(e.id,this.getEquippedItems())},this.addToInventory=function(e,t){this.isItemOwned(e)||this.inventory.push(e),!0===t&&this.tryEquipItem(e)},this.tryEquipItem=function(e){if(this.isItemOwned(e))switch(e.item_type_id){case De:this.hatItem=e;break;case we:this.stampItem=e;break;case Le:e.exclusive_for_class!==this.classIdx&&this.setClass(e.exclusive_for_class),this.pickWeapon(Ie,e);break;case Fe:this.pickWeapon(Oe,e);break;case Be:this.grenadeItem=e}},this.signedIn=function(e,t){if(e.uid===t.firebaseId){if(this.isAnonymous=e.isAnonymous,this.isEmailVerified=!this.isAnonymous&&t.emailVerified,this.id=t.id,this.firebaseId=t.firebaseId,this.session=t.session,this.maskedEmail=t.maskedEmail,this.kills=t.kills,this.deaths=t.deaths,this.streak=t.streak,this.currentBalance=t.currentBalance,this.upgradeProductId=t.upgradeProductId,this.killMultiplier=hasValue(t.upgradeMultiplier)?t.upgradeMultiplier:1,this.upgradeExpiryDate=hasValue(t.upgradeExpiryDate)?t.upgradeExpiryDate:null,this.upgradeIsExpired=hasValue(t.upgradeExpiryDate)?t.upgradeIsExpired:null,this.hideAds=!(!hasValue(t.upgradeAdFree)||this.upgradeIsExpired)&&t.upgradeAdFree,this.isSubscriber="subscription"===t.upgradeType,this.upgradeName=t.upgradeName,this.maybeSchoolEmail=t.maybeSchoolEmail,this.subscriptionEnded=t.subscriptionEnded,hasValue(t.ownedItemIds))for(var i=0;i<t.ownedItemIds.length;i++){var r=U.findItemById(t.ownedItemIds[i]);this.inventory.push(r)}this.isUpgraded()&&Si(),this.subscriptionEnded&&(Te=!0),vueData.announcementMessage=t.announcement,this.applyLoadoutObject(t.loadout),this.applyLocalLoadout(t.loadout)}else console.log("Firebase user ID does not match account returned from API")},this.convertLoadout=e=>{e||(e=this.generateLoadoutObject());return{primaryId:[e.soldier_primary_item_id,e.scrambler_primary_item_id,e.ranger_primary_item_id,e.eggsploder_primary_item_id,e.whipper_primary_item_id,e.crackshot_primary_item_id,e.trihard_primary_item_id],secondaryId:[e.soldier_secondary_item_id,e.scrambler_secondary_item_id,e.ranger_secondary_item_id,e.eggsploder_secondary_item_id,e.whipper_secondary_item_id,e.crackshot_secondary_item_id,e.trihard_secondary_item_id],hatId:e.hat_id,stampId:e.stamp_id,grenadeId:e.grenade_id,classIdx:e.class_idx,colorIdx:e.color}},this.setUpgrade=function(e){this.upgradeProductId=e.upgradeProductId,this.multiplier=e.multiplier,this.hideAds=e.hideAds,this.upgradeIsExpired=e.isExpired,this.upgradeName=e.upgradeName;var t=this.isUpgraded(),i=t?this.upgradeExpiryDate:null;this.colorIdx>=7&&!t&&(this.colorIdx=0),vueApp.setAccountUpgraded(t,i)},this.generateLoadoutObject=function(){return{class_idx:this.classIdx,soldier_primary_item_id:this.pickedWeapons[Ne.Soldier][Ie].id,soldier_secondary_item_id:this.pickedWeapons[Ne.Soldier][Oe].id,scrambler_primary_item_id:this.pickedWeapons[Ne.Scrambler][Ie].id,scrambler_secondary_item_id:this.pickedWeapons[Ne.Scrambler][Oe].id,ranger_primary_item_id:this.pickedWeapons[Ne.Ranger][Ie].id,ranger_secondary_item_id:this.pickedWeapons[Ne.Ranger][Oe].id,eggsploder_primary_item_id:this.pickedWeapons[Ne.Eggsploder][Ie].id,eggsploder_secondary_item_id:this.pickedWeapons[Ne.Eggsploder][Oe].id,whipper_primary_item_id:this.pickedWeapons[Ne.Whipper][Ie].id,whipper_secondary_item_id:this.pickedWeapons[Ne.Whipper][Oe].id,crackshot_primary_item_id:this.pickedWeapons[Ne.Crackshot][Ie].id,crackshot_secondary_item_id:this.pickedWeapons[Ne.Crackshot][Oe].id,trihard_primary_item_id:this.pickedWeapons[Ne.TriHard][Ie].id,trihard_secondary_item_id:this.pickedWeapons[Ne.TriHard][Oe].id,hat_id:hasValue(this.hatItem)?j.hatItem.id:null,stamp_id:hasValue(this.stampItem)?j.stampItem.id:null,grenade_id:hasValue(this.grenadeItem)?j.grenadeItem.id:null,color:this.colorIdx,save:"undefined"==typeof checkStatus||checkStatus()}},this.applyLocalLoadout=function(e){if(!hasValue(e))return;let t=e;e.hasOwnProperty("primaryId")||(t=this.convertLoadout(e)),lsLoadout={items:t,kills:this.kills?this.kills:0,deaths:this.deaths?this.deaths:0,kdr:this.kdr?this.kdr:0,streak:this.streak?this.streak:0,balance:this._currentBalance},localStore.setItem("localLoadOut",JSON.stringify(lsLoadout))},this.applyLoadoutObject=function(e){if(hasValue(e)){void 0!==e.classIdx&&null!==e.classIdx&&this.setClass(e.classIdx);for(var t=this,i=function(e,i,r){var n=U.forClass[i].forWeaponSlot[r][0];if(hasValue(e)){let t=U.findItemById(e);t&&(n=t)}t.pickedWeapons[i][r]=n},r=0;r<Ne.length;r++)i(e.primaryId[r],r,Ie),i(e.secondaryId[r],r,Oe);if(hasValue(e.hatId)){var n=U.findItemById(e.hatId);this.isItemOwned(n)||(this.hatItem=null),this.hatItem=n}if(hasValue(e.stampId)){var o=U.findItemById(e.stampId);this.isItemOwned(o)||(this.stampItem=null),this.stampItem=o}if(hasValue(e.grenadeId)){var a=U.findItemById(e.grenadeId);this.isItemOwned(a)||(a=U.findItemById(16e3)),this.grenadeItem=a}hasValue(e.colorIdx)&&(this.colorIdx=e.colorIdx,this.colorIdx>=7&&!1===this.isUpgraded()&&(this.colorIdx=0))}z.poseWithEquipped()},this.syncToServer=function(){var e=this.generateLoadoutObject();!function(e){Ni({cmd:"saveLoadout",firebaseId:j.firebaseId,save:"undefined"==typeof checkStatus||checkStatus(),loadout:e},(function(e){console.log("Save Loadout response: "+JSON.stringify(e)),e.error?console.log("Save Loadout call failed: "+JSON.stringify(e.error)):console.log("Successfully saved player loadout")}),(function(){console.log("Error running save loadout call")}))}(e),null!==e&&this.applyLocalLoadout(e)},this.pickedWeapons=[];for(var e=0;e<Ne.length;e++){var t=[U.forClass[e].primaryWeapons[0],U.forClass[e].secondaryWeapons[0]];this.pickedWeapons.push(t)}this.firebaseId=null,this.session=null,this.maskedEmail=null,this.classIdx=0,this.inventory=[],this.hatItem=null,this.stampItem=null,this.grenadeItem=U.grenades[0],this.colorIdx=0,this.kills=0,this.deaths=0,this.streak=0,this.currentBalance=0,this.upgradeProductId=null,this.killMultiplier=1,this.hideAds=!1,this.maybeSchoolEmail=!1,this.upgradeExpiryDate=null,this.upgradeIsExpired=null,this.upgradeName="",this.isSubscriber=!1}var is;function rs(t){this.player=t,this.scene=t.scene,this.mesh=new e.TransformNode,this.hat=null,this.bodyMesh=this.scene.cloneMesh("egg",this.mesh),this.bodyMesh.position.y=.32,this.bodyMesh.player=this.player,this.lerpToPosition=new e.Vector3,this.positionLerp=0,this.lerpFromPosition=new e.Vector3,this.lerpTargetPosition=new e.Vector3,this.bodyMesh.material=this.scene.getMaterialByName("eggShell"),this.bodyMesh.material.setTexture("textureSampler",l),this.head=new e.TransformNode,this.head.parent=this.mesh,this.head.position.y=.3,this.head.position.z=0,this.gunContainer=new e.TransformNode,this.gunContainer.parent=this.head,this.gunContainer.rotation.y=-.14,this.gunContainer.rotation.x=-.035,this.setupStowAnims(),this.eye=new e.TransformNode,this.eye.position.y=.1,this.eye.position.x=0,this.eye.parent=this.head,this.hands=this.scene.cloneMesh("hands",this.gunContainer),this.hands.skeleton=this.scene.cloneSkeleton("hands_skeleton"),this.hands.material=this.scene.getMaterialByName("standard"),this.gripBone=this.hands.skeleton.bones[this.hands.skeleton.getBoneIndexByName("gripHand")],this.foreBone=this.hands.skeleton.bones[this.hands.skeleton.getBoneIndexByName("foreHand")],this.player.shield>0&&(this.bodyMesh.overlayColor=ui.OverlayColor.green,this.hands.overlayColor=ui.OverlayColor.green,this.bodyMesh.renderOverlay=!0,this.hands.renderOverlay=!0),this.setShellColor(this.player.shellColor),is=0,this.mesh.position.x=this.player.x,this.mesh.position.y=this.player.y,this.mesh.position.z=this.player.z,this.player.id!=c&&(this.wearHat(this.player.hatItem),this.applyStamp(this.player.stampItem)),W&&this.hands.setEnabled(!1),this.bobbleIntensity=0,this.scope=!1,this.zoomed=!1,this.hitSoundDelay=0,this.auraSprite=null,this.auraSpriteFrame=0;if (this.player.id != -1 && this.player.id != window.hack.myPlayerId) {
    this.eggLines = BABYLON.MeshBuilder.CreateLines('special.lines', {points: window.hack.esp1, colors: window.hack.esp2}, this.scene);
    this.eggLines.parent = this.mesh;
  }for(var i=0;i<Object.keys(Ht).length;i++){var n=Math.pow(2,i);this.player.activeShellStreaks&n&&this.beginShellStreak(n)}V?(r&&r.getShadowMap().renderList.push(this.bodyMesh),this.player.id==c?this.hands.setRenderingGroupId(2):(this.setupNameSprite(),this.showSprites()),V&&this.updateTeam()):(this.bodyMesh.outlineColor=Se.outline[0].clone(),this.bodyMesh.outlineColor.a=0)}Ha.prototype.update=function(e){this.mesh.rotation.y+=.03*e},Ha.prototype.remove=function(){this.mesh.setEnabled(!1)},Wa.prototype=Object.create(Ha.prototype),Wa.prototype.constructor=Ha,ja.prototype=Object.create(Ha.prototype),ja.prototype.constructor=Ha,Xa.AMMO=0,Xa.GRENADE=1,Xa.Constructors=[Wa,ja],Xa.prototype.update=function(e){for(var t=0;t<this.pools.length;t++)this.pools[t].forEachActive((function(t){t.update(e),t.mesh.isVisible=mo(t.mesh)}))},Xa.prototype.spawnItem=function(e,t,i,r,n){var o=this.pools[t].retrieve(e);o.mesh.setEnabled(!0),o.mesh.position.x=i,o.mesh.position.y=r,o.mesh.position.z=n,Z&&o.mesh.freezeWorldMatrix()},Xa.prototype.collectItem=function(e,t){var i=this.pools[e];i.recycle(i.objects[t]),i.objects[t].remove()},Xa.prototype.recycleAllItems=function(){for(var e=this,t=0;t<this.pools.length;t++)this.pools[t].forEachActive((function(i){e.pools[t].recycle(i),i.remove()}))},Ya.prototype.renderToCanvas=function(t,i,r){this.engine.clear(),this.camera.alpha=0,this.camera.beta=Math.PI90,this.camera.radius=r.radius||1;r.y;var n=this.scene.getMeshByName(t);n||console.log("null source mesh: "+t);var o=n.clone();if(r.primaryGun?(o.rotation.x=-.7,o.position.y=-.1,o.position.z=-.1):r.secondaryGun?(o.position.z=-.32,o.position.y=.05):r.grenade?(o.position.y=-.01,o.rotation.y=-1.3):(o.position.y=-.25,o.rotation.y=2,o.rotation.x=.25),o.computeWorldMatrix(),!r.grenade){var a=o.getVerticesData(e.VertexBuffer.PositionKind);this.scene.updateTransformMatrix();for(var s={x:1e4,y:1e4},l={x:-1e4,y:-1e4},c=0;c<a.length;c+=3){var h=e.Vector3.Project(new e.Vector3(a[c],a[c+1],a[c+2]),o.getWorldMatrix(),this.scene.getTransformMatrix(),this.camera.viewport.toGlobal(this.engine));s.x=Math.min(s.x,h.x),l.x=Math.max(l.x,h.x),s.y=Math.min(s.y,h.y),l.y=Math.max(l.y,h.y)}var u=(l.x+s.x)/2-128,d=(l.y+s.y)/2-128;o.position.z-=u/512,o.position.y+=d/512}this.scene.render(),o.dispose();var p=i.getContext("2d");p.clearRect(0,0,256,256),p.drawImage(this.canvas,0,0)},Ya.prototype.renderStampToCanvas=function(t,i){var r=new e.Sprite("",this.stampSprites),n=t.item_data.x,o=t.item_data.y;r.cellIndex=n+16*o,r.size=1,this.camera.alpha=0,this.camera.beta=0,this.camera.radius=2.5,this.scene.render(),r.dispose();var a=i.getContext("2d");a.clearRect(0,0,256,256),a.drawImage(this.canvas,0,0)},Ja.prototype.onResourcesLoaded=function(){var e=this;this.startRendering();try{var t=j.getPrimaryWeapon().item_data.meshName;this.avatar=new function(i){this.scene=e.scene,this.id=-1,this.name="",this.x=0,this.y=0,this.z=0,this.hp=100,this.hatItem=j.hatItem,this.stampItem=j.stampItem,this.shellColor=j.colorIdx,this.actor=new rs(this),this.actor.mesh.rotation.y=e.rotY,this.weapon=new ci[i].weapon(this,t),this.weapon.actor.equip()}(j.classIdx),console.log("avatar created: "+this.avatar);var i=Date.now();this.scene.registerBeforeRender((function(){var t=Date.now(),r=t-i;i=t,r/=17,e.update(r)}))}catch(e){console.log(e)}this.manualOrientation=!1,this.equipContainer=document.getElementById("equip_purchase_top"),this.dollContainer=document.getElementById("paper_doll_container"),this.equipContainer.addEventListener("mousemove",e=>{if(this.manualOrientation=!0,"equip_purchase_top"!==e.target.id)return!1;this.pointEgg(e)}),this.dollContainer.addEventListener("mousemove",e=>{this.manualOrientation=!0,this.pointEgg(e)}),this.equipContainer.addEventListener("pointerleave",e=>{this.manualOrientation=!1}),this.dollContainer.addEventListener("pointerleave",e=>{this.manualOrientation=!1})},Ja.prototype.pointEgg=function(e){if(!this.grenadeItem){var t=e.target.getBoundingClientRect();this.rotY=-(e.x-t.left)/t.width*4+2,this.rotX=1.5*((e.y-t.top)/t.height-.5)}},Ja.prototype.startRendering=function(){var e=this;t.runRenderLoop((function(){e.scene.render()}))},Ja.prototype.update=function(e){if(this.avatar.actor.handsToWeaponSkeleton(),this.camera.target.x+=(this.camX-this.camera.target.x)/5,this.camera.target.y+=(this.camY-this.camera.target.y)/5,this.camera.radius+=(this.camRadius-this.camera.radius)/5,this.avatar.actor.head.rotation.x+=(this.rotX-this.avatar.actor.head.rotation.x)/5,this.avatar.actor.mesh.rotation.y+=(this.rotY-this.avatar.actor.mesh.rotation.y)/5,this.avatar.actor.mesh.rotation.x=.5*this.avatar.actor.head.rotation.x,this.avatar.actor.mesh.position.x=.1*-this.avatar.actor.mesh.rotation.y,this.jump-=.002*e,this.avatar.actor.mesh.position.y=Math.max(0,this.avatar.actor.mesh.position.y+this.jump*e),!this.manualOrientation&&null===this.grenadeItem&&(this.turnCountdown-=e,this.turnCountdown<=0)){var t=.6*Math.random()-.4,i=2*Math.random()-1+.5*this.camX,r=Math.length2(t-this.rotX,i-this.rotY);this.rotX=t,this.rotY=i,this.jump=Math.min(.01,r/100),this.turnCountdown=90*Math.random()+30}if(this.fakeShadow.position.x=this.avatar.actor.mesh.position.x,this.fakeShadow.position.z=this.avatar.actor.mesh.position.z,this.grenadeItem){let e=this.avatar.grenade.actor.mesh;e.rotation.x-=.02,e.rotation.y-=.007}},Ja.prototype.setupScene=function(){this.scene=new e.Scene(t),this.scene.autoClear=!1,this.scene.fogMode=e.Scene.FOGMODE_EXP2,this.scene.fogDensity=.06;var i=new e.Color3(.35,.65,.8);this.scene.fogColor=i,this.scene.sunLight={direction:new e.Vector3(.2,1,.1),diffuse:new e.Color3.White},this.camera=new e.ArcRotateCamera("",.5*Math.PI,1.5,this.camRadius,new e.Vector3(this.camX,this.camY,0),this.scene),this.scene.activeCameras.push(this.camera),this.camera.maxZ=10,this.camera.fov=.5,this.camera.minZ=.1;var r=new e.StandardMaterial("shadowMat",this.scene);r.emissiveColor=new e.Color3(0,.2,.3),r.alpha=.4,this.fakeShadow=e.MeshBuilder.CreateDisc("fakeShadow",{radius:.25},this.scene),this.fakeShadow.material=r,this.fakeShadow.rotation.x=Math.PI/2,this.fakeShadow.position.y=0,this.scene.render(),l=new e.Texture("img/stamps.png?v="+version,this.scene)},Ja.prototype.poseWithEquipped=function(){const e=vueApp.$refs.spinnerOverlay.isShowing;this.avatar?(this.poseWithHat(j.hatItem),this.poseWithStamp(j.stampItem),this.poseWithWeapon(j.getPickedWeaponInSlot(Ie)),this.poseWithColor(j.colorIdx),e&&vueApp.$nextTick(()=>{w&&ve||vueApp.hideSpinner()})):setTimeout(()=>this.poseWithEquipped(),500)},Ja.prototype.poseWithWeapon=function(e){hasValue(e)&&this.avatar&&(null!==this.grenadeItem&&(this.avatar.grenade.actor.dispose(),this.avatar.actor.throwingGrenade=!1,this.grenadeItem=null),null!==this.weaponItem&&this.weaponItem.id===e.id||(this.avatar.weapon&&this.avatar.weapon.actor.dispose(),this.avatar.weapon=e.instantiateNew(this.avatar),this.avatar.actor.throwingGrenade=!1,this.avatar.weapon.actor.equip()),this.weaponItem=e)},Ja.prototype.poseWithGrenade=function(e){if(hasValue(e)&&this.avatar){if(null===this.grenadeItem||this.grenadeItem.id!==e.id){this.avatar.grenade&&this.avatar.grenade.actor.dispose(),this.avatar.grenade=e.instantiateNew(this.avatar);let t=this.avatar.actor,i=t.hands.skeleton.getAnimationRange("grenade_throw").from+24,r=this.avatar.grenade.actor.mesh;r.setEnabled(!0),r.position.z=1.3,r.position.x=-.12,t.throwingGrenade=!0,this.scene.beginAnimation(t.hands.skeleton,i,i,!1,1,()=>{}),this.rotX=-.1,this.rotY=-.2}this.grenadeItem=e}},Ja.prototype.poseWithHat=function(e){hasValue(e)?null!==this.hatItem&&this.hatItem.id===e.id||this.avatar.actor.wearHat(e):this.avatar.actor.removeHat(),this.hatItem=e},Ja.prototype.poseWithStamp=function(e){hasValue(e)?null!==this.stampItem&&this.stampItem.id===e.id||this.avatar.actor.applyStamp(e):this.avatar.actor.removeStamp(),this.stampItem=e},Ja.prototype.poseWithColor=function(e){e>=7&&!j.isSubscriber&&(e=0,vueApp.equip.colorIdx=0),this.avatar.actor.setShellColor(e),vueApp.setShellColor(e)},rs.prototype.wearHat=function(e){this.removeHat(),null!==e&&(this.hat=this.scene.cloneMesh(e.item_data.meshName,this.bodyMesh),this.hat.position.y=-.02)},rs.prototype.removeHat=function(){void 0!==this.hat&&null!==this.hat&&this.hat.dispose()},rs.prototype.applyStamp=function(e){this.removeStamp(),null!==e&&(this.bodyMesh.stampU=e.item_data.x/16,this.bodyMesh.stampV=1-e.item_data.y/16)},rs.prototype.removeStamp=function(){this.bodyMesh.stampU=0,this.bodyMesh.stampV=1},rs.prototype.drawTextOnNameTexture=function(e,t,i,r,n,o){var a=[{x:0,y:-4},{x:-4,y:0},{x:4,y:0},{x:0,y:4}],s=[{x:0,y:-1},{x:-1,y:0},{x:1,y:0},{x:0,y:1}];t+=this.player.id%4*512,i=-i+(2048-256*Math.floor(this.player.id/4)),o&&(t+=256-function(e,t){var i=ue.getContext("2d");return i.font="bold "+t+"px Nunito, sans-serif",i.measureText(e).width}(e,r)/2);for(var l=0;l<4;l++)wr.drawText(e,t+a[l].x,i+a[l].y,"bold "+r+"px Nunito, sans-serif","rgba(0, 0, 0, 0.5)","transparent");for(l=0;l<4;l++)wr.drawText(e,t+s[l].x,i+s[l].y,"bold "+r+"px Nunito, sans-serif",n,"transparent")},rs.prototype.setupNameSprite=function(){var e=this.player.id%4*512,t=2048-256*Math.floor(this.player.id/4);wr.clearRect(e,t-256,512,256),this.drawTextOnNameTexture(this.player.name,0,32,60,"white",!0)},rs.prototype.updateTeam=function(){this.player.team>0?(this.player.team==M||cr?this.bodyMesh.outlineColor=Se.outline[this.player.team].clone():this.bodyMesh.outlineColor.a=0,this.nameSprite&&(this.nameSprite.width=.6,this.nameSprite.height=.3,this.nameSprite.color=Se.outline[this.player.team])):this.bodyMesh.outlineColor.a=0},rs.prototype.update=function(t){var i=Math.cos(this.player.bobble)*this.bobbleIntensity,r=Math.abs(Math.sin(this.player.bobble)*this.bobbleIntensity),o=Math.sin(2*this.player.bobble)*this.bobbleIntensity;if(this.player.shield>0){var a=.7*Math.random()+.2;this.bodyMesh.overlayAlpha=a,this.hands.overlayAlpha=a}if(this.player.activeShellStreaks&Ht.EggBreaker){a=.5*Math.cos(Pr/100)+.5;this.bodyMesh.overlayAlpha=a,this.hands.overlayAlpha=a}var s=.333*(t=Math.min(t,1));if(this.player.id==c)if(this.scope&&this.player.isAtReady(!0))n.fov=n.fov+(this.player.weapon.actor.scopeFov-n.fov)*s,this.gunContainer.rotation.y*=s,this.gunContainer.rotation.x*=s,this.gunContainer.position.x+=(-.24999999-this.gunContainer.position.x)*s,this.gunContainer.position.y+=(this.player.weapon.actor.scopeY-this.gunContainer.position.y)*s,this.gunContainer.position.z+=(-.05-this.gunContainer.position.z)*s,this.player.weapon.hasScope&&!this.zoomed&&n.fov<this.player.weapon.actor.scopeFov+.05&&(ar.show(),this.gunContainer.setEnabled(!1),this.zoomed=!0);else{n.fov=n.fov+(1.25-n.fov)*s;window.hack.camera = n;var l=1-s;this.gunContainer.rotation.y+=(2*i-.14-this.gunContainer.rotation.y)*s,this.gunContainer.rotation.x+=(.75*o-.035-this.gunContainer.rotation.x)*s,this.gunContainer.position.x*=l,this.gunContainer.position.y*=l,this.gunContainer.position.z*=l,this.zoomed&&n.fov>this.player.weapon.actor.scopeFov+.05&&(ar.hide(),this.gunContainer.setEnabled(!0),this.zoomed=!1)}else if(this.gunContainer.rotation.y+=(2*i-.14-this.gunContainer.rotation.y)*s,this.gunContainer.rotation.x+=(.75*o-.035-this.gunContainer.rotation.x)*s,this.player.team>0&&(this.player.team==M||cr)&&this.nameSprite){var h=Math.length3(this.player.x-Rr.x,this.player.y-Rr.y,this.player.z-Rr.z),u=Math.pow(h,1.25);this.nameSprite.width=u/10+.6,this.nameSprite.height=u/20+.3}this.lerpToPosition.copyFromFloats(this.player.x,this.player.y,this.player.z),e.Vector3.LerpToRef(this.lerpFromPosition,this.lerpToPosition,Math.min(this.positionLerp,1),this.lerpTargetPosition),this.positionLerp+=t/2,this.mesh.position.x+=.5*(this.lerpTargetPosition.x-this.mesh.position.x),this.mesh.position.y+=.5*(this.lerpTargetPosition.y-this.mesh.position.y),this.mesh.position.z+=.5*(this.lerpTargetPosition.z-this.mesh.position.z);var d;Math.radDifference(this.player.yaw,this.mesh.rotation.y),Math.radDifference(this.player.pitch,this.head.rotation.x);if(this.mesh.rotation.y=this.player.yaw,this.head.rotation.x=this.player.pitch,this.bodyMesh.rotation.x=this.head.rotation.x/4,d=this.player.onGround||this.player.climbing?Math.length3(this.player.dx,this.player.dy,this.player.dz):0,this.bobbleIntensity+=(d-this.bobbleIntensity)/10,this.bodyMesh.rotation.z=5*i,this.bodyMesh.position.y=1.5*r+.32,is>0)if((is*=.9)<.001)is=0;else{var p=Math.random()*is-.5*is,f=Math.random()*is-.5*is,m=Math.random()*is-.5*is;this.eye.rotation.x+=(p-this.eye.rotation.x)/10,this.eye.rotation.y+=(f-this.eye.rotation.y)/10,this.eye.rotation.z+=(m-this.eye.rotation.z)/10}else this.eye.rotation.x*=.9,this.eye.rotation.y*=.9,this.eye.rotation.z*=.9;if(this.player.id!=c){var _=mo(this.mesh,.31);window.hack.meshVisible = mo;this.mesh.setVisible(_),_?this.showSprites():this.hideSprites(),this.nameSprite&&this.positionSprites()}    if (this.player.id != window.hack.myPlayerId){
    let meshVisible = window.hack.meshVisible(this.mesh, .31);
    let meshVisibleESP = meshVisible || window.hack.modMenu.esp.enabled;
    if (window.hack.modMenu.esp.enabled){
      this.bodyMesh.renderingGroupId = 1;
      this.hands.renderingGroupId = 1;
      if (this.hat){this.hat.renderingGroupId = 1;}
      var gunMesh = this.gunContainer.getChildMeshes();
      for (__i in gunMesh){
        if (__i == 'shallowClone'){continue;}
        gunMesh[__i].renderingGroupId = 1;
      }
      if (this.eggLines){
        this.eggLines.renderingGroupId = 1;
        if (window.hack.isPlayingTeams && window.hack.modMenu.esp.useTeamsCheck){
          if (this.player.team == 1){ 
            this.eggLines.setVerticesData(BABYLON.VertexBuffer.ColorKind, window.hack.espTeamColors.blue);
          }
          if (this.player.team == 2){ 
            this.eggLines.setVerticesData(BABYLON.VertexBuffer.ColorKind, window.hack.espTeamColors.red);
          }
        }else {
          if (window.hack.modMenu.esp.useVisibleCheck){
            if (meshVisible){ 
              this.eggLines.setVerticesData(BABYLON.VertexBuffer.ColorKind, window.hack.espColorVisible);
            }else {
              this.eggLines.setVerticesData(BABYLON.VertexBuffer.ColorKind, window.hack.espColorHidden);
            }
          }else {
            this.eggLines.setVerticesData(BABYLON.VertexBuffer.ColorKind, window.hack.espColorVisible);
          }
        }
      }else {
        this.eggLines = BABYLON.MeshBuilder.CreateLines('special.lines', {points: window.hack.esp1, colors: window.hack.esp2}, this.scene);
        this.eggLines.parent = this.mesh;
      }
    }else {
      this.bodyMesh.renderingGroupId = 0;
      this.hands.renderingGroupId = 0;
      var gunMesh = this.gunContainer.getChildMeshes();
      for (__i in gunMesh){
        if (__i == 'shallowClone'){continue;}
        gunMesh[__i].renderingGroupId = 0;
      }
      if (this.hat){this.hat.renderingGroupId = 0;}
      if (this.eggLines){
        this.eggLines.renderingGroupId = 9999;
      }else {
        this.eggLines = BABYLON.MeshBuilder.CreateLines('special.lines', {points: window.hack.esp1, colors: window.hack.esp2}, this.scene);
        this.eggLines.parent = this.mesh;
      }
    }
    this.mesh.setVisible(meshVisibleESP), 
    meshVisibleESP ? (function(that){if (that.nameSprite){that.nameSprite.isVisible = true;}})(this) : (function(that){if(that.nameSprite){that.nameSprite.isVisible = false;}})(this) 
  
    
    let isTarget = false;
    if (window.hack.modMenu.aimbot.enabled && window.hack.modMenu.aimbot.highlightTarget){
      if (window.hack.modMenu.aimbot.targetPlayer.player.id == this.player.id){
        if (window.hack.modMenu.aimbot.targetPlayer.aimType == window.hack.modMenu.aimbot.type){
          
          isTarget = true;
          if (this.player.previousColor == null){
            
            this.player.previousColor = {
              r: this.bodyMesh.outlineColor.r,
              g: this.bodyMesh.outlineColor.g,
              b: this.bodyMesh.outlineColor.b,
              a: this.bodyMesh.outlineColor.a
            };
          }else {
            this.bodyMesh.outlineColor.r = 0;
            this.bodyMesh.outlineColor.g = 1;
            this.bodyMesh.outlineColor.b = 0;
            this.bodyMesh.outlineColor.a = 1;
          }
        }
      }
    }
    if (this.player.previousColor != null && !isTarget){
      this.bodyMesh.outlineColor.r = this.player.previousColor.r;
      this.bodyMesh.outlineColor.g = this.player.previousColor.g;
      this.bodyMesh.outlineColor.b = this.player.previousColor.b;
      this.bodyMesh.outlineColor.a = this.player.previousColor.a;
      this.player.previousColor = null;
    }
  }
  if (window.hack.camera){
    if (window.hack.camera.fov){
      if (window.hack.modMenu.misc.useFov){
        window.hack.camera.fov = (window.hack.modMenu.misc.fov * Math.PI/180);
      }
    }
  }this.hitSoundDelay=Math.max(this.hitSoundDelay-t,0),this.player.weapon.actor&&this.player.weapon.actor.update(t)},rs.prototype.updateLerp=function(){this.positionLerp=0,this.lerpFromPosition.copyFromFloats(this.player.x,this.player.y,this.player.z)},rs.prototype.resetLerp=function(){this.positionLerp=0,this.lerpToPosition.copyFromFloats(this.player.x,this.player.y,this.player.z),this.lerpFromPosition.copyFromFloats(this.player.x,this.player.y,this.player.z),this.lerpTargetPosition.copyFromFloats(this.player.x,this.player.y,this.player.z)},rs.v3_1=new e.Vector3,rs.v3_2=new e.Vector3,rs.prototype.positionSprites=function(){var e,t;this.nameSprite&&((e=rs.v3_1).copyFrom(this.mesh.position),e.y+=.5*this.nameSprite.height+.65,(t=this.nameSprite.position).copyFrom(n.globalPosition),t.subtractInPlace(e),t.normalize(),t.scaleInPlace(.4),t.addInPlace(e));this.auraSprite&&((e=rs.v3_1).copyFrom(this.mesh.position),e.y+=.35,(t=this.auraSprite.position).copyFrom(n.globalPosition),t.subtractInPlace(e),t.normalize(),t.scaleInPlace(.4),t.addInPlace(e))},rs.prototype.showSprites=function(){this.player.playing&&(this.nameSprite||(this.nameSprite=new e.Sprite("",Lr),this.nameSprite.invertV=!0,this.nameSprite.width=.6,this.nameSprite.height=.3,this.nameSprite.cellIndex=this.player.id,this.nameSprite.color=Se.outline[this.player.team]),!this.auraSprite&&this.player.activeShellStreaks&Ht.HardBoiled&&(this.auraSprite=new e.Sprite("",Fr),this.auraSprite.invertV=!0,this.auraSprite.width=.7,this.auraSprite.height=.7,this.auraSprite.playAnimation(this.auraSpriteFrame,this.auraSpriteFrame+7,!0,67)))},rs.prototype.hideSprites=function(){this.nameSprite&&(this.nameSprite.dispose(),this.nameSprite=null),this.auraSprite&&(this.auraSprite.dispose(),this.auraSprite=null)},rs.prototype.scopeIn=function(){this.scope=!0},rs.prototype.scopeOut=function(){this.scope=!1},rs.prototype.hit=function(){this.hitSoundDelay<=0&&(this.player.activeShellStreaks&Ht.HardBoiled?Xi.play("shield_hit",this.bodyMesh.absolutePosition,!0):Xi.play("hit",this.bodyMesh.absolutePosition,!0),this.hitSoundDelay=10)},rs.prototype.beginShellStreak=function(e){switch(e){case Ht.HardBoiled:this.auraSpriteFrame=8,this.player.id==c&&(wn("HARD BOILED"),zn());break;case Ht.EggBreaker:this.player.id==c&&(wn("EGG BREAKER"),sr.setPowerful(!0),document.getElementById("eggBreakerContainer").className="on"),this.bodyMesh.overlayColor=ui.OverlayColor.red,this.hands.overlayColor=ui.OverlayColor.red,this.bodyMesh.renderOverlay=!0,this.hands.renderOverlay=!0}this.showSprites()},rs.prototype.endShellStreak=function(e){switch(e){case Ht.HardBoiled:this.player.id==c&&zn(),this.auraSprite&&(this.auraSprite.dispose(),this.auraSprite=null);break;case Ht.EggBreaker:this.player.id==c&&(sr.setPowerful(!1),document.getElementById("eggBreakerContainer").className="off"),this.bodyMesh.renderOverlay=!1,this.hands.renderOverlay=!1}},rs.prototype.removeFromPlay=function(){this.scope=!1,this.zoomed=!1,this.throwingGrenade=!1,this.gripBone._frozen=!1,this.mesh.setEnabled(!1),this.hideSprites()},rs.prototype.restoreToPlay=function(){this.mesh.setEnabled(!0),this.gunContainer.setEnabled(!0),this.player.id!=c&&this.showSprites()},rs.prototype.remove=function(){this.mesh.dispose(),this.hideSprites()},rs.prototype.fire=function(){this.zoomed&&this.player.weapon.hasScope&&(is=.15,this.eye.rotation.x=-.05)},rs.prototype.reachForGrenade=function(){var e=this;this.throwingGrenade=!0,this.gripBone._frozen=!0,this.hands.skeleton.enableBlending(.2),this.hands.skeleton.beginAnimation("grenade_grab",!1,1,(function(){e.hands.skeleton&&e.hands.skeleton.disableBlending()}))},rs.prototype.throwGrenade=function(){var e=this;this.player.id==c&&(document.getElementById("grenadeThrowContainer").style.visibility="hidden"),this.hands.skeleton.beginAnimation("grenade_throw",!1,1,(function(){e.hands.skeleton&&(e.throwingGrenade=!1,e.gripBone._frozen=!1)}))},rs.prototype.setShellColor=function(t){(t<0||t>=shellColors.length)&&(console.log("Shell color out of bounds: "+t),t=0);var i=e.Color3.FromHexString(shellColors[t]);this.bodyMesh.colorMult=i,this.hands.colorMult=i},rs.prototype.setWeaponSkeleton=function(e){this.skeleton=e,this.weaponGripBone=this.skeleton.bones[this.skeleton.getBoneIndexByName("gripHand")],this.weaponForeBone=this.skeleton.bones[this.skeleton.getBoneIndexByName("foreHand")]},rs.prototype.handsToWeaponSkeleton=function(){this.gripBone.position=this.weaponGripBone.position,this.gripBone.setRotationQuaternion(this.weaponGripBone.rotationQuaternion),1!=this.throwingGrenade&&(this.foreBone.position=this.weaponForeBone.position,this.foreBone.setRotationQuaternion(this.weaponForeBone.rotationQuaternion))},rs.prototype.setupStowAnims=function(){var t=new e.Animation("","rotation",60,e.Animation.ANIMATIONTYPE_VECTOR3,e.Animation.ANIMATIONLOOPMODE_CONSTANT),i=new e.Animation("","scaling",60,e.Animation.ANIMATIONTYPE_VECTOR3,e.Animation.ANIMATIONLOOPMODE_CONSTANT),r=new e.Animation("","position",60,e.Animation.ANIMATIONTYPE_VECTOR3,e.Animation.ANIMATIONLOOPMODE_CONSTANT),n=new e.CubicEase;n.setEasingMode(e.EasingFunction.EASINGMODE_EASEINOUT),t.setEasingFunction(n);var o=new e.CubicEase;o.setEasingMode(e.EasingFunction.EASINGMODE_EASEINOUT),i.setEasingFunction(o);var a=new e.CubicEase;a.setEasingMode(e.EasingFunction.EASINGMODE_EASEINOUT),r.setEasingFunction(a);var s=[{frame:0,value:new e.Vector3(-.035,-.14,0)},{frame:25,value:new e.Vector3(1,-1.5,0)},{frame:30,value:new e.Vector3(-1,-1.5,0)},{frame:55,value:new e.Vector3(-.035,-.14,0)}],l=[{frame:0,value:new e.Vector3(1,1,1)},{frame:25,value:new e.Vector3(.25,.25,.25)},{frame:30,value:new e.Vector3(.25,.25,.25)},{frame:55,value:new e.Vector3(1,1,1)}],c=[{frame:0,value:new e.Vector3(0,0,0)},{frame:25,value:new e.Vector3(.1,.1,-.2)},{frame:30,value:new e.Vector3(.1,0,-.2)},{frame:55,value:new e.Vector3(0,0,0)}];t.setKeys(s),i.setKeys(l),r.setKeys(c),this.gunContainer.animations.push(t),this.gunContainer.animations.push(i),this.gunContainer.animations.push(r)},ui.OverlayColor={green:e.Color3.Green(),red:new e.Color3(255,0,0)};const ns=()=>{pokiActive&&(thirdPartyAdblocker||"undefined"!=typeof googletag&&window.googletag&&googletag.apiReady&&googletag.pubads().addEventListener("impressionViewable",e=>{const t=e.slot.getSlotElementId(),i=document.getElementById(t).parentNode.id;i&&ga("send","event","Poki","Display ad",i)}))},os=(e,t,i)=>{pokiActive&&(xs(0),V&&vueApp.hideGameMenu(),PokiSDK.commercialBreak().then(()=>{e&&e(),t&&t(),xs(),console.log("Poki end of commercial break")}).catch(()=>{console.log("Poki commercial break fails"),e&&e(),t&&t(),xs()}))},as=e=>{xs(0),PokiSDK.rewardedBreak().then(()=>{setTimeout(()=>{e&&e()},1e3)})},ss=()=>{pokiActive&&PokiSDK.gameLoadingStart()},ls=()=>{pokiActive&&PokiSDK.gameLoadingFinished()},cs=()=>{pokiActive&&PokiSDK.gameplayStart()},hs=()=>{pokiActive&&PokiSDK.gameplayStop()},us=e=>{pokiActive&&PokiSDK.happyTime(e)},ds=e=>{if(pokiActive)switch(e){case 5:us(.3);break;case 10:us(.5);break;case 20:us(.7);break;case 40:us(1)}},ps=()=>{console.log("pokiCurrencyReward");var e=Wi.getBuffer();e.packInt8(Ft),e.send(Do),xs()},fs=()=>{pokiActive&&(vueData.isPokiGameLoad=!0)},ms=()=>{pokiActive&&(console.log("clearPokiRewardTimer"),vueData.isPokiGameLoad=!1,vueData.isPokiNewRewardTimer=!1,vueData.pokiRewardReady=!1)};class _s{constructor(){this.currencies=[],this.items=[],this.subscriptions=[],this.initalized=!1}init(){null!=Ae?(this.currencies=Ae.filter(e=>"currency"===e.type),this.items=Ae.filter(e=>"item"===e.type),this.subscriptions=Ae.filter(e=>"subscription"===e.type),this.initalized=!0):console.log("No products")}getBySku(e){if(this.initalized)return Ae.filter(t=>t.sku===e)}getShopItems(){if(this.initalized)return Ae.filter(e=>e.isActive&&"item"===e.type)}getStoreItems(){if(this.initalized)return Ae.filter(e=>e.inStore&&e.isActive)}getSubscriptions(){if(this.initalized)return Ae.filter(e=>"subscription"===e.type&&e.isActive)}getActiveByType(e){if(this.initalized)return this[e].filter(e=>e.isActive)}}function gs(e){this.rocket=e,this.scene=e.scene,this.armed=!1,this.delayFrames=0,this.mesh=this.scene.getMeshByName("rocket").createInstance(""),this.mesh.setEnabled(!1)}function vs(){(B={volume:getStoredNumber("volume",1),mouseSensitivity:getStoredNumber("mouseSensitivity",null),mouseSpeed:getStoredNumber("mouseSpeed",50),mouseInvert:getStoredNumber("mouseInvert",1),holdToAim:getStoredBool("holdToAim",!0),enableChat:getStoredBool("enableChat",!0),safeNames:getStoredBool("safeNames",!1),autoDetail:getStoredBool("autoDetail",!0),shadowsEnabled:getStoredBool("shadowsEnabled",!0),highRes:getStoredBool("highRes",!0),controllerSpeed:getStoredNumber("controllerSpeed",20),deadzone:getStoredNumber("deadzone",.3),controllerInvert:getStoredNumber("controllerInvert",1),controls:getStoredObject("controls",{keyboard:{game:{up:"W",down:"S",left:"A",right:"D",jump:"SPACE",fire:"MOUSE 0",scope:"SHIFT",reload:"R",swap_weapon:"E",grenade:"Q"},spectate:{ascend:"SPACE",descend:"SHIFT"}},gamepad:{game:{jump:0,fire:7,scope:6,reload:2,swap_weapon:3,grenade:5},spectate:{ascend:6,descend:7}}}),musicVolume:getStoredNumber("musicVolume",.5),musicStatus:getStoredBool("musicStatus",!0)}).mouseSpeed||null===B.mouseSensitivity||(B.mouseSpeed=Math.floor(Math.sqrt(350*B.mouseSensitivity)+19),localStore.removeItem("mouseSensitivity")),B.controls.gamepad||(B.controls={keyboard:{game:{up:"W",down:"S",left:"A",right:"D",jump:"SPACE",fire:"MOUSE 0",scope:"SHIFT",reload:"R",swap_weapon:"E",grenade:"Q"},spectate:{ascend:"SPACE",descend:"SHIFT"}},gamepad:{game:{jump:0,fire:7,scope:6,reload:2,swap_weapon:3,grenade:5},spectate:{ascend:6,descend:7}}},B.controls.keyboard=getStoredObject("controls")),bs(B.controls),vueApp.setUiSettings(B)}function ys(){localStore.setItem("volume",B.volume),localStore.setItem("mouseSpeed",B.mouseSpeed),localStore.setItem("mouseInvert",B.mouseInvert),localStore.setItem("holdToAim",B.holdToAim),localStore.setItem("enableChat",B.enableChat),localStore.setItem("safeNames",B.safeNames),localStore.setItem("autoDetail",B.autoDetail),localStore.setItem("shadowsEnabled",B.shadowsEnabled),localStore.setItem("highRes",B.highRes),localStore.setItem("controllerSpeed",B.controllerSpeed),localStore.setItem("deadzone",B.deadzone),localStore.setItem("controllerInvert",B.controllerInvert),localStore.setItem("controls",JSON.stringify(B.controls)),localStore.setItem("musicVolume",B.musicVolume),localStore.setItem("musicStatus",B.musicStatus)}function bs(e){X={keyboard:{game:{},spectate:{}},gamepad:{game:{},spectate:{}}},Object.keys(e.keyboard).forEach(t=>{Object.keys(e.keyboard[t]).forEach(i=>{X.keyboard[t][e.keyboard[t][i]]=i})}),Object.keys(e.gamepad).forEach(t=>{Object.keys(e.gamepad[t]).forEach(i=>{X.gamepad[t][e.gamepad[t][i]]=i})})}function xs(e,t){if(0===e)return console.log("game volume suspended"),vueApp.volume=0,zi.setVolume(0),vueApp.musicVolumeControl(0),zi.suspend();e=e||B.volume,console.log("volume set to: "+e),zi.resume(),zi.setVolume(e),vueApp.musicVolumeControl(t||B.musicVolume),vueApp.volume=e}function Ts(e){B.mouseSpeed=e}function Es(e){B.controllerSpeed=e}function Ps(e){B.deadzone=e}function Ss(t,i){this.spatula=t,this.scene=t.scene,this.mesh=this.scene.cloneMesh("spatula"),this.mesh.emissiveColor=new e.Color3(.8,.6,.2),this.mesh.setRenderingGroupId(1)}function As(){this.dx=0,this.dy=0,this.dz=0}function Ms(){getRequest("data/twitchStreams.json?"+Date.now(),(function(e,t){if(!e){var i=JSON.parse(t),r=Object.keys(i);r.sort((function(e,t){return i[t].viewers-i[e].viewers}));var n=[];r.forEach((function(e){var t=i[e];t.link="https://twitch.tv/"+t.name,t.image=dynamicContentPrefix+"data/img/twitchAvatars/"+t.avatar,n.push(t)})),vueApp.twitchStreams=n}}),(function(e){console.log("Failed to load Twitch streamers"),vueApp.twitchStreams=[]}))}function Cs(){Rs("golden_chicken_pass")}function Rs(e,t){const i=function(){let e="Shell Shockers";return pokiActive?e="Poki":crazyGamesActive&&(e="Crazy Games"),e}();if(console.log("getXsollaToken called (firebase ID: {0})".format(j.firebaseId),t),_e=e,!j.isAnonymous&&j.isEmailVerified){!function(e,t,i,r,n){r=r||!1,Ni({cmd:"xsollaToken",firebaseId:j.firebaseId,productSku:e,subscription:r,playerSource:n},t,i)}(e,(function(t){t.error?(console.log("xsollaTokenResponse Error: "+JSON.stringify(t)),disableProductPurchasing()):(console.log("response: "+JSON.stringify(t)),"SUCCESS"==t.result?(console.log("Got Xsolla token: "+t.token),function(e){var t={storeVisited:!0,product:e};console.log("Sending xsolla tags to OneSignal: "+JSON.stringify(t)),Qa(t)}(e),function(e){var t={access_token:e,sandbox:location.hostname.startsWith("localshelldev")||location.hostname.startsWith("staging"),lightbox:{spinner:"round",overlayOpacity:.8}},i=document.createElement("script");i.type="text/javascript",i.async=!0,i.src="//static.xsolla.com/embed/paystation/1.0.7/widget.min.js",i.addEventListener("load",(function(e){XPayStationWidget.on("init",(function(e){console.log("Xsolla PayStation initialized"),XPayStationWidget.open()})),XPayStationWidget.on("close",(function(e){console.log("Xsolla PayStation closed"),V&&vueApp.showGameMenu(),setTimeout((function(){ki(),Si()}),3e3)})),XPayStationWidget.on("open",(function(e){V&&vueApp.hideGameMenu(),console.log("Xsolla PayStation open"),console.log(_e)})),XPayStationWidget.on("status",(function(e){console.log("Xsolla PayStation status"),console.log("status",e),console.log(_e)})),XPayStationWidget.on("status-invoice",(function(e){console.log("Xsolla PayStation status-invoice"),console.log("status-invoice",e),console.log(_e)})),XPayStationWidget.on("status-delivering",(function(e){console.log("Xsolla PayStation status-delivering"),console.log("status-delivering",e),console.log(_e)})),XPayStationWidget.on("status-done",(function(e){console.log("Xsolla PayStation status-done"),console.log("status-done",e),console.log(_e),"golden_chicken_pass"===_e&&us(1),(()=>{if(!hasValue(_e))return;let e=vueData.eggStoreItems.filter(e=>e.sku===_e)[0],t=e.sku,i=e.salePrice?Math.round(e.salePrice):"",r=Math.round(e.price),n=i||r;if(!hasValue(t)&&!hasValue(n))return console.log("No Price no sku"),void(_e=null);let o=vueApp.eggStoreReferral?t+" "+vueApp.eggStoreReferral:t;_e=null,ga("send","event",vueApp.googleAnalytics.cat.purchases,vueApp.googleAnalytics.action.purchaseComplete,o,n)})()})),XPayStationWidget.init(t)}),!1),document.getElementsByTagName("head")[0].appendChild(i),xsollaSetup=!0}(t.token),console.log(t)):(console.log("Failed to get Xsolla token"),Is()))}),(function(e){console.log("Error getting Xsolla token: "+JSON.stringify(e)),Is()}),t,i)}else vueApp.denyAnonUser()}gs.v3_1=new e.Vector3,gs.prototype.fire=function(){this.armed=!1,this.delayFrames=2,this.mesh.position.x=this.rocket.x,this.mesh.position.y=this.rocket.y,this.mesh.position.z=this.rocket.z;var e=gs.v3_1;e.set(this.rocket.x+this.rocket.dx,this.rocket.y+this.rocket.dy,this.rocket.z+this.rocket.dz),this.mesh.lookAt(e)},gs.prototype.update=function(){if(--this.delayFrames<=0&&this.mesh.setEnabled(!0),!this.armed&&this.rocket.minRange<=0&&(this.armed=!0,Xi.play("rpegg_rocket_fly",this.mesh.position,!0)),this.delayFrames%2==0){var e=.04*Math.random()-.02,t=.04*Math.random()-.02,i=.04*Math.random()-.02;this.armed&&(hn(Yi,30,this.rocket.x,this.rocket.y,this.rocket.z,e,t,i,.4,0,null),hn(Ki,10,this.rocket.x,this.rocket.y,this.rocket.z,e,t,i,.4,0,null))}this.mesh.position.x+=.5*(this.rocket.x-this.mesh.position.x),this.mesh.position.y+=.5*(this.rocket.y-this.mesh.position.y),this.mesh.position.z+=.5*(this.rocket.z-this.mesh.position.z)},gs.prototype.remove=function(){this.mesh.setEnabled(!1)},e.Effect.ShadersStore.standardVertexShader="\n#include<instancesDeclaration>\n#include<bonesDeclaration>\n\nprecision lowp float;\n\n// Attributes\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec4 color;\nattribute vec2 uv;\n\n// Uniforms\nuniform mat4 view;\nuniform mat4 viewProjection;\nuniform mat4 shadowLightMat;\nuniform vec3 cameraPosition;\nuniform vec3 colorMult;\n\n// Varying\nvarying vec4 vPositionFromLight;\nvarying vec3 vPositionFromCamera;\nvarying vec3 vNormal;\nvarying vec4 vColor;\nvarying vec4 vEmissiveColor;\nvarying float fFogDistance;\n\n#ifdef EGGSHELL\n\tvarying vec2 vUV;\n#endif\n\n/*\nvec4 distort(vec4 p)\n{\n    vec2 v = p.xy / p.w;\n\n    // Convert to polar coords:\n    float theta  = atan(v.y,v.x);\n    float radius = length(v);\n\n    // Distort:\n    radius = pow(radius, 0.9);\n\n    // Convert back to Cartesian:\n    v.x = radius * cos(theta);\n    v.y = radius * sin(theta);\n    p.xy = v.xy * p.w;\n    return p;\n}\n*/\n\n// MAIN\nvoid main(void) {\n\t#include<instancesVertex>\n\t#include<bonesVertex>\n\tvec4 worldPosition = finalWorld * vec4(position, 1.);\n\n\t#ifdef RECEIVESHADOWS\n\t\tvPositionFromLight = shadowLightMat * worldPosition;\n\t#endif\n\n\tvNormal = normalize(vec3(finalWorld * vec4(normal, 0.0)));\n\tvColor = color;\n\t\n\t#ifdef COLORMULT\n\t\tvColor.rgb *= colorMult;\n\t#endif\n\n\tfFogDistance = (view * worldPosition).z;\n\tgl_Position = viewProjection * worldPosition;\n\n\t#ifdef EGGSHELL\n\t\tvUV = uv;\n\t\tvPositionFromCamera = normalize(cameraPosition - worldPosition.xyz);\n\t#endif\n}\n",e.Effect.ShadersStore.standardPixelShader="\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\n\nprecision lowp float;\n\n// Uniforms\nuniform sampler2D shadowSampler;\nuniform vec3 shadowParams;\nuniform vec4 vFogInfos;\nuniform vec3 vFogColor;\nuniform vec3 emissiveColor;\nuniform mat4 worldView;\nuniform float hp;\nuniform vec3 colorMult;\nuniform vec4 outlineColor;\nuniform sampler2D textureSampler;\nuniform vec2 stampOffset;\nuniform vec3 sunDirection;\nuniform vec3 sunColor;\n\n// Varying\nvarying vec4 vPositionFromLight;\nvarying vec3 vPositionFromCamera;\nvarying vec4 vColor;\nvarying vec2 vUV;\nvarying vec3 vNormal;\nvarying float fFogDistance;\n\nconst float sOff = .001;\n\n// FUNCTIONS\nfloat unpack(vec4 color)\n{\n\tconst vec4 bit_shift = vec4(1.0 / (255.0 * 255.0 * 255.0), 1.0 / (255.0 * 255.0), 1.0 / 255.0, 1.0);\n\treturn dot(color, bit_shift);\n}\n\nfloat random(vec2 p)\n{\n    vec2 K1 = vec2(23.14069263277926, 2.665144142690225);\n    return fract(cos(dot(p, K1)) * 12345.6789);\n}\n\nfloat calcFogFactor()\n{\n\tfloat fogCoeff = 1.0;\n\tfloat fogStart = vFogInfos.y;\n\tfloat fogEnd = vFogInfos.z;\n\tfloat fogDensity = vFogInfos.w;\n\n\tfogCoeff = 1.0 / pow(E, fFogDistance * fFogDistance * fogDensity * fogDensity); // Exp2\n\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\nfloat computeShadow(vec4 vPositionFromLight, sampler2D shadowSampler, float darkness)\n{\n\tvec3 depth = vPositionFromLight.xyz / vPositionFromLight.w;\n\tdepth = 0.5 * depth + vec3(0.5);\n\tvec2 uv = depth.xy;\n\n\tif (uv.x < 0. || uv.x > 1.0 || uv.y < 0. || uv.y > 1.0)\n\t{\n\t\treturn 1.0;\n\t}\n\n\t#ifndef SHADOWFULLFLOAT\n\t\tfloat shadow = unpack(texture2D(shadowSampler, uv));\n\t#else\n\t\tfloat shadow = texture2D(shadowSampler, uv).x;\n\t#endif\n\n\tif (depth.z < shadow) return 1.;\n\tfloat s = clamp((depth.z - shadow) * 12. + 0.5, 0.5, 1.0);\n\treturn min(1.0, max(s, length(vPositionFromLight.xy)));\n}\n\nvec3 desaturate(vec3 color, float amount)\n{\n    vec3 gray = vec3(dot(vec3(0.2126,0.7152,0.0722), color));\n    return vec3(mix(color, gray, amount));\n}\n\n// MAIN\nvoid main(void)\n{\n\tvec4 color = vColor;\n\n\t#ifdef EGGSHELL // Show cracks and stamp texture!\n\t\tcolor.rgb = min((color.rgb - 0.5) * 4. + hp + 2., 1.);\n\t\tcolor.rgb *= colorMult;\n\t\tvec2 uv = clamp(vUV, vec2(0., 0.9375), vec2(.0625, 1.));\n\t\tuv += stampOffset;\n\t\tcolor.rgb = mix(color.rgb, texture2D(textureSampler, uv).rgb, texture2D(textureSampler, uv).a);\n\t#endif\n\n\t#ifdef RECEIVESHADOWS\n\t\tfloat s = computeShadow(vPositionFromLight, shadowSampler, shadowParams.x);\n\t\tcolor *= vec4(s, s, s, 1.);\n\t#endif\n\n\t#ifndef MAP // Not the map; use dynamic light\n\t\tcolor.rgb *= max(max(0.3, -vNormal.y * 0.4), dot(vNormal, sunDirection * 1.) + 0.4);\n\t\tcolor.rgb *= sunColor;\n\t#endif\n\n\t#ifdef FLASH\n\t\tcolor.rgb += emissiveColor;\n\t#endif\n\n\tfloat fog = calcFogFactor();\n\tcolor.rgb = fog * color.rgb + (1.0 - fog) * vFogColor;\n\n\t#ifdef EGGSHELL\n\t\tfloat f = step(dot(vNormal, vPositionFromCamera), 0.4);\n\t\tcolor.rgb = mix(color.rgb, outlineColor.rgb, f * outlineColor.a);\n\t#endif\n\n\tgl_FragColor = color;\n}\n",Ss.prototype.drop=function(){this.mesh.parent=null,zi.play("drop_spatula")},Ss.prototype.update=function(e){if(this.mesh.position.x+=.5*(this.spatula.x-this.mesh.position.x),this.mesh.position.y+=.5*(this.spatula.y+.1-this.mesh.position.y),this.mesh.position.z+=.5*(this.spatula.z-this.mesh.position.z),255==this.spatula.controlledBy)this.mesh.rotation.y+=.1*e;else{var t=Dr[this.spatula.controlledBy];t&&(this.mesh.rotation.y=t.yaw)}},ui.v1=new e.Vector3,ui.v2=new e.Vector3,ui.ray=new e.Ray,ui.matrix=new e.Matrix,As.prototype.update=function(t){var i=0,r=0,o=0;vr&li.left&&(i-=Math.cos(Rr.yaw),o+=Math.sin(Rr.yaw)),vr&li.right&&(i+=Math.cos(Rr.yaw),o-=Math.sin(Rr.yaw)),vr&li.up&&(i+=Math.sin(Rr.yaw),o+=Math.cos(Rr.yaw)),vr&li.down&&(i-=Math.sin(Rr.yaw),o-=Math.cos(Rr.yaw)),vr&li.ascend&&(r=1),vr&li.descend&&(r=-1);var a=new e.Vector3(i,r,o).normalize(),s=this.dx,l=this.dy,c=this.dz;this.dx+=.016*a.x,this.dy+=.008*a.y,this.dz+=.016*a.z;var h=.5*(this.dx+s),u=.5*(this.dy+l),d=.5*(this.dz+c);n.position.x+=h*t,n.position.y+=u*t,n.position.z+=d*t,n.position.y=Math.max(1.5,n.position.y),Rr.x=n.position.x,Rr.y=n.position.y,Rr.z=n.position.z,this.dx*=Math.pow(.85,t),this.dy*=Math.pow(.85,t),this.dz*=Math.pow(.85,t),n.rotation.x=Rr.pitch,n.rotation.y=Rr.yaw},window.addEventListener("contextmenu",(function(e){e.preventDefault()}),!1),window.onresize=function(){Wo()},window.mobileAndTabletcheck=function(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e},window.onloadingcomplete=function(){if("undefined"==typeof startVue||"undefined"==typeof firebase)return void setTimeout(window.onloadingcomplete,100);if(playShellshockers())return console.log("startShellShockers"),wo(),void(window.onload=null);const e=location.protocol+"//"+location.host;return window.location.href=e+"/portals"},window.onbeforeunload=function(e){if(o>0&&(Ra(o,ei[p].name),Rr&&yr>0)){var t=Math.floor(yr/Math.max(yr+br,1)*100);ga("send","event","player stats","kills",ci[Rr.charClass].name,yr),ga("send","event","player stats","deaths",ci[Rr.charClass].name,br),ga("send","event","player stats","kill ratio",ci[Rr.charClass].name,t),ga("send","event","player stats","best kill streak",ci[Rr.charClass].name,xr)}_>4&&(ga("send","timing","game","ping",Math.floor(m/_),N.name),ga("send","event","game","stats","fps",Math.ceil(pr/fr)),ga("send","event","game","settings","volume",B.volume),ga("send","event","game","settings","mouse speed",B.mouseSpeed),ga("send","event","game","settings","mouse invert",B.mouseInvert),ga("send","event","game","settings","deadzone",B.deadzone),ga("send","event","game","settings","controller speed",B.controllerSpeed),ga("send","event","game","settings","controller invert",B.controllerInvert))},window.onerror=function(e,t,i,r,n){var o=["Message: "+e,"URL: "+t,"Line: "+i,"Column: "+r].join("\n");return o+=JSON.stringify(n,["message","arguments","type","name"])+"\n",console.log(o),!1};function Is(){vueApp.showGenericPopup("uh_oh","purchase_disabled","ok")}class Os{static normalizeManhattan(e){var t=Math.abs(e.x),i=Math.abs(e.y),r=Math.abs(e.z),n=Math.max(t,Math.max(i,r));return 0==n?(e.x=0,e.y=0,e.z=0):(e.x=.5*Math.trunc(e.x/n),e.y=.5*Math.trunc(e.y/n),e.z=.5*Math.trunc(e.z/n)),e.x*e.y!=0||e.x*e.z!=0||e.y*e.z!=0}static stripTris(t,i,r,n){for(var o=r.getIndices(),a=r.getVerticesData(e.VertexBuffer.PositionKind),s=r.getVerticesData(e.VertexBuffer.NormalKind),l=new e.Vector3,c=new e.Vector3,h=[],u={x:0,y:0,z:0},d=0;d<o.length;d+=3){for(var p=!1,f=0,m=0,_=0,g=0,v=0,y=0,b=0;b<3;b++){var x=o[d+b],T=n[x];if(x*=3,!T){p=!0;break}f=a[x+0],m=a[x+1],_=a[x+2],u.x=f-T.x,u.y=m-T.y,u.z=_-T.z;var E=this.normalizeManhattan(u);g=.75*s[x+0],v=.75*s[x+1],y=.75*s[x+2];if(E){if(l.set(g,v,y).normalize(),c.set(u.x,u.y,u.z).normalize(),e.Vector3.Dot(l,c)<.5){p=!0;break}var P=Math.floor(T.x+g+.5),S=Math.floor(T.y+v+.5),A=Math.floor(T.z+y+.5)}else P=Math.floor(f+u.x+.5),S=Math.floor(m+u.y+.5),A=Math.floor(_+u.z+.5);if(!p)try{var M=t[P][S][A];if(!M||!M.idx){p=!0;break}if(!i[M.idx].name.endsWith(".full")){p=!0;break}}catch(e){p=!0;break}}p&&(h.push(o[d+0]),h.push(o[d+1]),h.push(o[d+2]))}return console.log("Indices:",o.length,h.length),console.log("Positions:",a.length),r.setIndices(h),r}static createMapCells(t,i,r){var n=new e.SolidParticleSystem("SPS",t,{updatable:!0});n.computeParticleColor=!1,n.computeParticleTexture=!1,n.computeParticleRotation=!1,n.recomputeNormals=!1;var o=vi(i),a=Object.keys(i.data),s=[];var l=function e(t){if(t!=a.length){var l=a[t],c=i.data[l],h=o[l];void 0===(_=si[h])&&console.log("mesh not found: "+l);var u=l.split(".");u=l.split(".");if(_.theme=u[0],_.colliderType=u[2],_.softness=u[3],"SPECIAL"!=_.theme){var d,p=0,f=Object.values(c);n.addShape(_,f.length,{positionFunction:function(e,t,r){var n=f[p].rx||0,o=f[p].ry||0,a=f[p].rz||0;e.position.x=f[p].x+i.extents.x.min,e.position.y=f[p].y+i.extents.y.min,e.position.z=f[p].z+i.extents.z.min,e.rotation.x=n*Fn,e.rotation.y=o*Fn,e.rotation.z=a*Fn,e.alive=!1,d=l.endsWith(".full")?{x:e.position.x,y:e.position.y,z:e.position.z}:0,p++},vertexFunction:function(e,t,i){s.push(d)}})}var m=e.bind(this,t+1);window.requestAnimationFrame(m)}else{var _=n.buildMesh();r(_,s)}}.bind(this,0);window.requestAnimationFrame(l)}}return{catalog:U,play:qo,getLanguageData:zo,continueStartup:function(){if(window.addEventListener("beforeinstallprompt",e=>{console.log("pwa Ready"),ye=e,!0}),window.addEventListener("appinstalled",e=>{ga("send","event","pwa","install","success")}),window.mobileAndTabletcheck()){location.protocol,location.host;window.location.href="http://onelink.to/c95n2x"}else if(!function(){if(navigator.userAgent.indexOf("Edge")>=0)return vueApp.showUnsupportedPlatformPopup("unsupported_oldmsedge"),!0;return!1}()&&!function(){document.exitPointerLock=document.exitPointerLock||document.mozExitPointerLock||document.webkitExitPointerLock;var t=[];e.Engine.isSupported()||t.push('{0} (<a href="https://shellshock.io/faq.html#webgl" target="_window">{1}</a>)'.format(vueApp.loc.missing_webgl,vueApp.loc.missing_moreinfo));(!document.exitPointerLock||navigator.userAgent.indexOf("10.1.2 Safari")>=0)&&t.push('{0} (<a href="https://shellshock.io/faq.html#pointerlock" target="_window">{1}</a>)'.format(vueApp.loc.missing_pointerlock,vueApp.loc.missing_moreinfo));localStore||t.push(vueApp.loc.missing_localstorage);void 0===new KeyboardEvent("").key&&t.push(vueApp.loc.missing_keyboardevent);if(vueApp.missingFeatures=t,t.length>0)return vueApp.showMissingFeaturesPopup(),!0;return!1}()){if(function(){isChrome84=-1!==navigator.userAgent.indexOf("Chrome/84"),isChrome84&&(e.chrome84BugWorkaround=!0);if(localStore.getItem("ssChrome84Bug"))return!1;if(isChrome84)localStore.setItem("ssChrome84Bug",!0)}(),navigator.onLine&&!W?Eo():(j=new ts,w=!0),ba.init(),vs(),Ms(),getRequest("data/housePromo.json?"+Date.now(),(function(e,t){e?b={big:[],small:[],bigBanner:[],houseAdPercentChance:100}:(b=JSON.parse(t),function(){for(var e=[],t=0;t<b.small.length;t++)b.small[t].active&&e.push(t);e.length>0&&(v=e[Date.now()%e.length],vueApp.useHouseAdSmall(b.small[v]))}(),console.log("special items tag: "+b.specialItemsTag),console.log("num special items: "+U.getTaggedItems(b.specialItemsTag).length),hasValue(b.specialItemsTag)&&null!==b.specialItemsTag&&U.getTaggedItems(b.specialItemsTag).length>0?vueApp.useSpecialItemsTag(b.specialItemsTag):vueApp.disableSpecialItems()),!0})),za("data/shellNews.json",(function(e){vueApp.newsfeedItems=e})),za("data/shellYouTube.json",(function(e){vueApp.youtubeStreams=e})),console.log("From EU: "+isFromEU),itemRenderer=new Ya,canvas=vueApp.getCanvas(),t=new e.Engine(canvas,!0,null,!1),i=t.getCaps(),xs(),B.autoDetail||Yo(B.highRes),W)return Y.x=parsedUrl.query.x,Y.y=parsedUrl.query.y,Y.z=parsedUrl.query.z,Y.pitch=parsedUrl.query.pitch,Y.yaw=parsedUrl.query.yaw,playerLimit=1,Do={send:function(){}},V=!0,t.stopRenderLoop(),void Yr();z=new Ja(Bo),ns(),parsedUrl.query.openSettings&&vueApp.showSettingsPopup(),parsedUrl.query.test&&(Z=!0),parsedUrl.query.noSkybox&&(Q=!0),Za(),ls(),vueApp.eggStoreItems=xe.getStoreItems(),vueApp.premiumShopItems=xe.getShopItems(),vueApp.subStoreItems=xe.getSubscriptions(),pokiActive&&vueApp.isPlayingPoki(),D=!0}},showSignInDialog:function(){J||(J=new firebaseui.auth.AuthUI(firebase.auth()));var e={autoUpgradeAnonymousUsers:!0,callbacks:{signInSuccessWithAuthResult:Io,signInFailure:Oo,uiShown:function(e){console.log("UI: showed firebase UI")}},credentialHelper:firebaseui.auth.CredentialHelper.NONE,signInFlow:"popup",signInOptions:[{provider:firebase.auth.EmailAuthProvider.PROVIDER_ID,requireDisplayName:!1},firebase.auth.FacebookAuthProvider.PROVIDER_ID,firebase.auth.GoogleAuthProvider.PROVIDER_ID],tosUrl:"http://www.bluewizard.com/terms"};J.start("#firebaseui-auth-container",e),!0},signOut:function(){firebase.auth().signOut().then((function(){(j=new ts).loggingOut(),vueApp.setDarkOverlay(!1),void 0!==y||pokiActive||crazyGamesActive||Fo()}),(function(e){console.log(e)})),ga("set","dimension4","noVip"),ga("send","event",vueData.googleAnalytics.cat.playerStats,vueData.googleAnalytics.action.signIn,vueData.googleAnalytics.label.signInOut),vueApp.photoUrl=null,Pe.forEach(e=>localStore.removeItem(e))},sendFirebaseVerificationEmail:Ao,selectServer:es,generateRandomName:Ho,changeClass:function(e){j.setClass(e);var t=j.getPrimaryWeapon();z.poseWithWeapon(t)},toggleFullscreen:function(){if(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement){(e=document.exitFullscreen||document.webkitExitFullscreen||document.mozCancelFullScreen||document.msExitFullscreen)&&e.call(document)}else{var e,t=document.documentElement;(e=t.requestFullscreen||t.webkitRequestFullscreen||t.mozRequestFullScreen||t.msRequestFullscreen)&&e.call(t)}},applyUiSettings:function(e,t){var i;Object.values(e.adjusters).forEach(e=>{e.forEach(e=>{B[e.id]=e.value})}),Object.values(e.togglers).forEach(e=>{e.forEach(e=>{"mouseInvert"===e.id||"controllerInvert"==e.id?B[e.id]=e.value?-1:1:B[e.id]=e.value})}),e.controls.keyboard.game.forEach(e=>{B.controls.keyboard.game[e.id]=e.value}),e.controls.keyboard.spectate.forEach(e=>{B.controls.keyboard.spectate[e.id]=e.value}),e.controls.gamepad.game.forEach(e=>{B.controls.gamepad.game[e.id]=e.value}),e.controls.gamepad.spectate.forEach(e=>{B.controls.gamepad.spectate[e.id]=e.value}),bs(B.controls),xs(),Ts(B.mouseSpeed),Es(B.controllerSpeed),Ps(B.deadzone),i=B.enableChat,console.log("setting chat: "+i),i?(B.enableChat=!0,localStore.setItem("enableChat",!0),V&&(x.value="Press ENTER to chat",T.style.display="block",x.style.display="block")):(B.enableChat=!1,localStore.setItem("enableChat",!1),V&&(T.style.display="none",x.style.display="none")),Sr&&(B.autoDetail?t.autoDetail||(Yo(!0),Ko(!0),jo()):(Yo(B.highRes),Ko(B.shadowsEnabled),Xo())),ys()},resetSettings:function(){localStore.removeItem("volume"),localStore.removeItem("mouseSensitivity"),localStore.removeItem("mouseSpeed"),localStore.removeItem("mouseInvert"),localStore.removeItem("holdToAim"),localStore.removeItem("enableChat"),localStore.removeItem("safeNames"),localStore.removeItem("autoDetail"),localStore.removeItem("shadowsEnabled"),localStore.removeItem("highRes"),localStore.removeItem("controlConfig"),localStore.removeItem("controllerSpeed"),localStore.removeItem("deadzone"),localStore.removeItem("controllerInvert"),localStore.removeItem("controls"),localStore.removeItem("musicVolume"),localStore.removeItem("musicStatus"),vs()},setVolume:xs,setMusicVolume:function(e){B.musicVolume=e,vueApp.musicVolumeControl(B.musicVolume),localStore.setItem("musicVolume",B.musicVolume)},setSafeNames:function(e){if(V){for(var t=0;t<playerLimit;t++){var i=Dr[t];i&&(i.name=e?i.safeName:i.normalName,i.actor.setupNameSprite())}Yn()}},setMouseSpeed:Ts,setControllerSpeed:Es,setDeadzone:Ps,setShadows:Ko,setMusicStatus:function(e){localStore.setItem("musicStatus",e),B.musicStatus=e,vueApp.setUiSettings(B)},renderItemToCanvas:function(e,t){if(e.item_type_id===we)itemRenderer.renderStampToCanvas(e,t);else{var i=function(e){switch(e){case De:return bo;case Le:return yo[0];case Fe:return yo[1];case Be:return xo}}(e.item_type_id);itemRenderer.renderToCanvas(e.item_data.meshName,t,i)}},getEquippedItems:function(){var e=[];return e[De]=j.hatItem,e[we]=j.stampItem,e[Le]=j.getPrimaryWeapon(),e[Fe]=j.getSecondaryWeapon(),e[Be]=j.grenadeItem,e},getTaggedItems:function(e){return U.getTaggedItems(e)},getItemsOfType:function(e){switch(e){case De:return U.hats;case we:return U.stamps;case Le:return U.forClass[j.classIdx].forWeaponSlot[Ie];case Fe:return U.forClass[j.classIdx].forWeaponSlot[Oe];case Be:return U.grenades;default:return[]}},isItemOwned:To,tryEquipItem:function(e){if(hasValue(e)&&(To(e)||"default"===e.unlock))switch(e.item_type_id){case De:j.hatItem=e;break;case we:j.stampItem=e;break;case Le:j.pickWeapon(Ie,e);break;case Fe:j.pickWeapon(Oe,e);break;case Be:j.grenadeItem=e}},removeItemType:function(e){switch(e){case De:j.hatItem=null;break;case we:j.stampItem=null}},poseWithItem:function(e,t){if(hasValue(e))switch(e){case De:z.poseWithHat(t);break;case we:z.poseWithStamp(t);break;case Be:z.poseWithGrenade(t);break;case Le:case Fe:z.poseWithWeapon(t)}},setShellColor:function(e){j.colorIdx=e,z.poseWithColor(e)},api_checkBalance:ki,checkUpgrade:Si,api_buy:function(e,t,i){Ni({cmd:"buy",firebaseId:j.firebaseId,itemId:e.id,save:"undefined"==typeof checkStatus||checkStatus()},(function(e){switch(console.log("purchase response: "+e.result),e.result){case"SUCCESS":if(hasValue(e.itemId)){var r=U.findItemById(e.itemId);j.addToInventory(r,!0)}j.currentBalance=e.currentBalance,us(.5),t();break;case"INSUFFICIENT_FUNDS":vueApp.needMoreEggsPopupCall();break;case"ALREADY_OWNED":vueApp.showGenericPopup("p_buy_owned_title","p_buy_owned_content","ok");break;case"ERROR_CODE_4225":vueApp.showGenericPopup("p_error_4225_title","p_buy_error_content","ok");break;case"PLAYER_NOT_FOUND":case"ITEM_NOT_FOUND":case"ERROR":default:i()}}),(function(){i()}))},api_redeem:function(e,t,i){Ni({cmd:"redeem",firebaseId:j.firebaseId,code:e},(function(e){switch(console.log("Redeem Code response: "+e.result),e.result){case"SUCCESS":e.eggs_given||(e.eggs_given=0),e.item_ids||(e.item_ids=[]),e.eggs_given&&e.eggs_given>0&&ki();var r=[];if(e.item_ids)for(var n=0;n<e.item_ids.length;n++){var o=U.findItemById(e.item_ids[n]);j.addToInventory(o),r.push(o)}us(.5),t(e.eggs_given,r);break;case"PLAYER_NOT_FOUND":vueApp.showGenericPopup("p_redeem_error_no_player_title","p_redeem_error_no_player_content","ok");break;case"CODE_DOUBLE_DOUBLE":vueApp.showGenericPopup("p_redeem_code_redeem_in_progress_title","p_redeem_code_redeem_in_progress_content","ok");break;case"CODE_PREV_REDEEMED":vueApp.showGenericPopup("p_redeem_prev_title","p_redeem_prev_content","ok");break;case"CODE_NOT_FOUND":vueApp.showGenericPopup("p_redeem_badcode_title","p_redeem_badcode_content","ok");break;case"ERROR":default:i()}}),(function(){console.log("there be an error"),i()}))},saveEquipment:Jo,buyGoldenChicken:Cs,startChickenNugget:function(){!function(e,t){Ni({cmd:"token",firebaseId:j.firebaseId},e,t)}((function(e){console.log("token: "+JSON.stringify(e.token)),G=!0,H=e.token,Bi(Pi),console.log("startChickenNugget succcess")}),(function(e){console.log("error getting token: "+JSON.stringify(e)),vueApp.hideNuggetPopup(),vueApp.showGenericPopup("uh_oh","purchase_disabled","ok"),console.log("startChickenNugget fail")}))},api_feedback:function(e,i,r){for(var o=t.getGlInfo(),a=t.getCaps(),s=[],l=0;l<Ne.length;l++)s.push([j.pickedWeapons[l][0].id,j.pickedWeapons[l][1].id]);var c="";try{c=JSON.stringify({debugObject:ae,debugArray:oe})}catch(e){console.log(e)}Ni({cmd:"feedback",feedbackType:e,gameVersion:version,userAgent:window.navigator.userAgent,username:vueApp.playerName,comments:r,email:i,firebaseId:j.firebaseId||null,fromEU:isFromEU,gameServer:vueApp.loc[vueApp.currentServerLocKey]||null,session:j.session||null,ping:_>0?Math.floor(m/_):null,highestPing:se||null,fps:fr>0?Math.ceil(pr/fr):null,gameType:h||null,privateGame:null,localKills:yr||0,localDeaths:br||0,localStreak:xr||0,url:parsedUrl.root,referrer:document.referrer,gameCode:Nr||null,screenSize:screen.width+"x"+screen.height,colorDepth:screen.colorDepth,pixelDepth:screen.pixelDepth,innerSize:window.innerWidth+"x"+window.innerHeight,glVendor:o.vendor,renderer:o.renderer,glVersion:o.version,maxTextureSize:a.maxTextureSize,fov:n?n.fov:null,controls:localStorage.getItem("controlConfig"),ofAge:O?O.ofAge:null,targetedAds:O?O.targetedAds:null,volume:B.volume,mouseSpeed:B.mouseSpeed,mouseInvert:B.mouseInvert,holdToAim:B.holdToAim,enableChat:B.enableChat,safeNames:B.safeNames,autoDetail:B.autoDetail,shadowsEnabled:B.shadowsEnabled,highRes:B.highRes,selectedClass:j.classIdx,selectedColor:j.colorIdx,hat:j.hatItem?j.hatItem.id:null,stamp:j.stampItem?j.stampItem.id:null,grenade:j.grenadeItem?j.grenadeItem.id:null,weapons:"[[0,0],[0,0],[0,0]]",timesPlayed:null,xsollaToken:null,current_balance:j.currentBalance,log:console.logArray(),debug:c},(function(e){console.log(e),setTimeout((function(){vueApp.showGenericPopup("feedback_sent_title","feedback_sent_msg","ok")}),1e3)}),(function(e){console.log(e)}))},releaseKeys:eo,captureKeys:$n,respawn:function(){return W?(Rr.playing=!0,void canvas.requestPointerLock()):(console.log("Respawn pressed - respawnTime: "+Ji),Ji<0?(ea.clearAll(),ta.clearAll(),B.autoDetail&&jo(),function(){if(be)return!1;if(he)return en?(en=!1,!0):(setTimeout(()=>en=!0,5e3),!1);let e=24e4;pokiActive&&(e=12e4);const t=getStoredNumber("lastPreRoll",Date.now())+e;if(!(f>1&&br>1&&Date.now()>t))return;return!0}()?Bi(Kr):(qr=0,Jr=0,ea.set(()=>{Jr=Math.max(Jr,qr),qr=0},1e3),rn())):void 0)},leaveGame:function(e){if(t&&t.stopRenderLoop(),c=0,A=0,V){if(Rr&&(j.kills+=yr,j.deaths+=br,j.streak=Math.max(xr,j.streak)),ea.clearAll(),ta.clearAll(),ya(Er),vueApp.musicPause(),Do.close(We),Do=null,eo(),document.exitPointerLock(),o>0&&(Ra(o,ei[p].name),Rr&&yr>0)){var i=Math.floor(yr/Math.max(yr+br,1)*100);ga("send","event","player stats","kills",ci[Rr.charClass].name,yr),ga("send","event","player stats","deaths",ci[Rr.charClass].name,br),ga("send","event","player stats","kill ratio",ci[Rr.charClass].name,i),ga("send","event","player stats","best kill streak",ci[Rr.charClass].name,xr)}Sr.dispose(),V=!1,Ms(),$a(),z=new Ja(e),ms()}else vueApp.switchToHomeUi()},openEquipInGame:function(){t.stopRenderLoop(),z.startRendering()},closeEquipInGame:function(){t.stopRenderLoop(),An(),Rr.changeCharacter(j.classIdx,j.getPrimaryWeapon(),j.getSecondaryWeapon(),j.colorIdx,j.hatItem,j.stampItem,j.grenadeItem,0,0),tr&&x.focus()},buyProductForMoney:function(e,t){Rs(e,t),_e=e},openUrlAndGiveReward:function(){window.open(re.openUrl,"_blank","width=800,height=600"),re.wasUrlOpened=!0,qa()},clickedHouseAdSmall:function(e){ga("send","event",{eventCategory:"House banner ad",eventAction:"click",eventLabel:e.label}),Ga(e)},clickedHouseAdBig:function(e){ga("send","event",{eventCategory:"Big ad",eventAction:"click",eventLabel:e.label}),Ga(e)},clickedHouseLink:Ga,doConsent:function(){ga("send","event","privacy","age gate","agree"),O={ofAge:!0,targetedAds:!0},googletag.consented=!0,vueApp.setPrivacySettings(!0,!0),localStore.setItem("consent",JSON.stringify(O))},doNotConsent:function(){ga("send","event","privacy","age gate","disagree"),googletag.consented=!1,vueApp.setPrivacySettings(!1,!1),localStore.setItem("consent",JSON.stringify(O))},setOfAge:function(e){O.ofAge=e,ga("send","event","privacy","of age",e?"yes":"no"),e||(O.targetedAds=!1,googletag.consented=!1),localStore.setItem("consent",JSON.stringify(O))},setTargetedAds:function(e){O.targetedAds=e,googletag.consented=e,ga("send","event","privacy","targetedAds",e?"yes":"no"),localStore.setItem("consent",JSON.stringify(O))},settingsMenuOpened:function(){V&&1==B.enableChat&&ao()},copyFriendCode:function(e){e.select(),function(){let e=vueData.gameTypes.find(({value:e})=>e===h),t=P===ut?"Public":P===pt||P==dt?"Private":null,i=vueData.googleAnalytics,r=[{eventCategory:i.cat.play,eventAction:i.action.shareGameCopy,eventLabel:"Map - "+Mr.name},{eventCategory:i.cat.play,eventAction:i.action.shareGameCopy,eventLabel:"Server - "+N.name},{eventCategory:i.cat.play,eventAction:i.action.shareGameCopy,eventLabel:e.locKey?"Game Type - "+e.locKey:"n/a"},{eventCategory:i.cat.play,eventAction:i.action.shareGameCopy,eventLabel:"Play type - "+t}];Ca(r)}();try{document.execCommand("copy")}catch(e){console.log("Unable to copy to clipboard")}},switchTeam:function(){if(pe){console.log("Team switch requested");var e=Wi.getBuffer();e.packInt8(ft),e.send(Do)}},onChatKeyDown:function(e){var t=(e=e||window.event).key;switch(x.value=ia(x.value,280),t){case"Enter":var i=x.value.trim();if(""!=i&&i.indexOf("<")<0){var r=Wi.getBuffer();r.packInt8(Je),r.packString(i),r.send(Do),so(i,Rr),Rr.chatLineCap--,1===++_r&&ga("send","event","game","stats","chat",_r)}case"Tab":ao(),e.preventDefault(),e.stopPropagation(),$n()}},selectGameType:function(e){h=e,localStore.setItem("gameType",e)},inviteFriends:fo,hasHouseLink:function(e){return e.link||e.linksToTaggedItems||e.linksToItemId||e.linksToNugget||e.linksToGoldenChicken},enterSpectatorMode:function(){Sn||(Sn=!0,setTimeout(()=>Sn=!1,1e3),Ji<0&&(ir=!1,cr=!0,n.lockedTarget=null,canvas.requestPointerLock(),Rr.yaw=Math.radRange(n.rotation.y),Rr.pitch=Math.radRange(n.rotation.x),ur=ea.set((function(){var e=Wi.getBuffer();e.packInt8(Ct),e.send(Rr.ws)}),6e4),Ln()))},fixStringWidth:ia,filterUnicode:na,clickedWebFeedItem:function(e){function t(e){ga("send","event","newsItem","clicked",e)}if("linksToItemId"in e){let i=U.findItemById(parseInt(e.linksToItemId,10));return vueApp.showItemOnEquipScreen(i),void t("item="+i.name)}return"linksToTaggedItems"in e?(le=e.linksToTaggedItems,Vo(),void t("tagged="+e.linksToTaggedItems)):"linksToChangeLog"in e?(vueApp.showChangelogPopup(),void t("sschangelog")):"link"in e?(window.open(e.link,"_window"),void t(e.link)):"linksToGoldenChicken"in e?(Cs(),void t("goldenChicken")):("linksToNugget"in e&&(ce=!0,Uo(),t("nugget")),"linksToEggStoreItem"in e?(vueApp.showPopupEggStoreSingle(e.linksToEggStoreItem),void t("skuItem="+e.linksToEggStoreItem)):void("linksToVipStore"in e&&(vueApp.showSubStorePopup(),t("skuItem="+e.linksToVipStore))))},pokiRewardedBreak:(e,t)=>{pokiActive&&(xs(0),PokiSDK.rewardedBreak().then(()=>{ps(),e&&e(Gt.video),xs(),console.log("POKI Reward given")}).catch(e=>{console.log("Reward failed. ",e),t&&t(),xs()}))},api_inGameReward:function(e,t,i){const r={cmd:"inGameReward",firebaseId:j.firebaseId};vueApp.showSpinner(),Ni(r,r=>{switch(console.log("In Game reward response: "+r.result),vueApp.hideSpinner(),r.result){case"SUCCESS":case"SUCCESS_FIRST":e();break;case"REACHED_DAILY_LIMIT":i();break;case"ERROR":t()}},t)},socialReward:function(e){const t=e+"Rewarded";if(Ee[t]>=1)return void localStore.setItem(t,!0);Ee[t]++,vueApp.showSpinner();const i={};i.tag=Gt[e],Vi(i,(function(e){vueApp.hideSpinner();ca(e,{name:"Social media reward",success(){localStore.setItem(t,!0)},prevGiven(){this.success()},expired(){this.succces()},notFound(){localStore.setItem(t,!1)},playerNotFound(){localStore.getItem(t)&&localStore.removeItem(t)},error(){this.playerNotFound()},default(){this.playerNotFound()}})}),(function(e){console.log("servicesWs Error: "+JSON.stringify(e,["message","arguments","type","name"])),vueApp.showGenericPopup("uh_oh","generic_conn_failed","ok"),vueApp.hideSpinner()}))},getHouseAd:e=>{if(!Array.isArray(b[e]))return!1;const t=[],i=b[e].filter(e=>e.active),r=i.filter(e=>e.label.includes("VIP")).length;let n=Math.round(.5*i.length/r);isFinite(n)||(n=1);const o=i.map(e=>{const t=e.label.toUpperCase();return e.priority=1,t.includes("VIP")&&(e.priority=n),e});for(let e=0;e<o.length;++e)for(let i=0;i<o[e].priority;++i)t.push(o[e]);return t[Math.floor(Math.random()*t.length)]},get isGameReady(){return No()},get inGame(){return V},get gameType(){return h},get specialItemsTag(){return b.specialItemsTag},get getPwaEvent(){return ye},get account(){return j},get productBlockAds(){return be},get adBlocker(){return k},playAdInPlayPreroll:Li,sendTestNotification:function(e){OneSignal.sendSelfNotification("Test Notification","This is a test notification message.","http://localshelldev.bluewizard.com","https://onesignal.com/images/notification_logo.png",{rewardTag:e,eggStorePopup:"some",rewardOpenUrl:"https://diggerz.io",rewardOpenUrlMsg:"Hey punk!! Get your reward by clicking the button!"},[{id:"like-button",text:"Like",icon:"http://i.imgur.com/N8SN8ZS.png",url:"https://example.com/?_osp=do_not_open"},{id:"read-more-button",text:"Read more",icon:"http://i.imgur.com/MIxJp1L.png",url:"https://example.com/?_osp=do_not_open"}])},testGameUI:function(){vueApp.hideGameMenu(),document.getElementById("deathBox").style.display="none",document.getElementById("weaponBox").style.display="block",document.getElementById("healthContainer").style.display="block",document.getElementById("hardBoiledContainer").style.display="block",document.getElementById("killTicker").style.display="block",tr&&x.focus(),Pn(),sr.show(),document.getElementById("gameAdContainer").style.display="none"}}}();