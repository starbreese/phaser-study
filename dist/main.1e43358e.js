// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/CST.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CST = void 0;
var CST = {
  SCENES: {
    LOAD: "LOAD",
    MENU: "MENU"
  },
  IMAGE: {
    LOGO: "logo.png",
    OPTIONS: "options_button.png",
    PLAY: "play_button.png",
    TITLE: "title_bg.jpg"
  },
  AUDIO: {
    TITLE: "shuinvy-childhood.mp3"
  },
  SPRITE: {
    CAT: "cat.png"
  }
};
exports.CST = CST;
},{}],"src/scenes/LoadScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadScene = void 0;

var _CST = require("../CST");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LoadScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(LoadScene, _Phaser$Scene);

  function LoadScene() {
    _classCallCheck(this, LoadScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(LoadScene).call(this, {
      key: _CST.CST.SCENES.LOAD
    }));
  }

  _createClass(LoadScene, [{
    key: "init",
    value: function init() {}
  }, {
    key: "loadImages",
    value: function loadImages() {
      this.load.setPath("./assets/image");

      for (var prop in _CST.CST.IMAGE) {
        //@ts-ignore
        this.load.image(_CST.CST.IMAGE[prop], _CST.CST.IMAGE[prop]);
      }
    }
  }, {
    key: "loadAudio",
    value: function loadAudio() {
      this.load.setPath("./assets/audio");

      for (var prop in _CST.CST.AUDIO) {
        //@ts-ignore
        this.load.audio(_CST.CST.AUDIO[prop], _CST.CST.AUDIO[prop]);
      }
    }
  }, {
    key: "loadSprites",
    value: function loadSprites(frameConfig) {
      this.load.setPath("./assets/sprite");

      for (var prop in _CST.CST.SPRITE) {
        //@ts-ignore
        this.load.spritesheet(_CST.CST.SPRITE[prop], _CST.CST.SPRITE[prop], frameConfig);
      }
    }
  }, {
    key: "preload",
    value: function preload() {
      var _this = this;

      this.load.spritesheet("anna", "./assets/sprite/anna.png", {
        frameHeight: 64,
        frameWidth: 64
      }); //load atlases

      this.load.atlas("characters", "./assets/sprite/characters.png", "./assets/sprite/characters.json");
      this.load.atlas("daze", "./assets/sprite/daze.png", "./assets/sprite/daze.json");
      this.load.spritesheet("rapier", "./assets/sprite/WEAPON_rapier.png", {
        frameHeight: 192,
        frameWidth: 192
      }); //load image, spritesheet, sound

      this.loadAudio();
      this.loadSprites({
        frameHeight: 32,
        frameWidth: 32
      });
      this.loadImages(); // //create loading bar

      var loadingBar = this.add.graphics({
        fillStyle: {
          color: 0xffffff //white

        }
      });
      this.load.on("progress", function (percent) {
        loadingBar.fillRect(_this.game.renderer.width / 2, 0, 50, _this.game.renderer.height * percent);
        console.log(percent);
      });
    }
  }, {
    key: "create",
    value: function create() {
      console.log(111);
      this.scene.start(_CST.CST.SCENES.MENU);
    }
  }]);

  return LoadScene;
}(Phaser.Scene);

exports.LoadScene = LoadScene;
},{"../CST":"src/CST.js"}],"src/scenes/MenuScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuScene = void 0;

var _CST = require("../CST");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MenuScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(MenuScene, _Phaser$Scene);

  function MenuScene() {
    _classCallCheck(this, MenuScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(MenuScene).call(this, {
      key: _CST.CST.SCENES.MENU
    }));
  }

  _createClass(MenuScene, [{
    key: "init",
    value: function init(data) {
      console.log(data);
      console.log('I Got it');
    }
  }, {
    key: "preload",
    value: function preload() {}
  }, {
    key: "create",
    value: function create() {
      var _this = this;

      //creating the menu screen
      //create images (z order)
      this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.20, _CST.CST.IMAGE.LOGO).setDepth(1);
      this.add.image(0, 0, _CST.CST.IMAGE.TITLE).setOrigin(0).setDepth(0);
      var playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, _CST.CST.IMAGE.PLAY).setDepth(1);
      var optionsButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 100, _CST.CST.IMAGE.OPTIONS).setDepth(1); //create sprites (if using pixel art, remove sharpen)

      var hoverSprite = this.add.sprite(100, 100, _CST.CST.SPRITE.CAT);
      hoverSprite.setScale(2);
      hoverSprite.setVisible(false); //create audio, disable pauseonblur
      // this.sound.pauseOnBlur = false;
      //this.sound.play(CST.AUDIO.TITLE, {loop: true})
      //create animation

      this.anims.create({
        key: "walk",
        frameRate: 4,
        repeat: -1,
        //repeat forever,
        frames: this.anims.generateFrameNumbers(_CST.CST.SPRITE.CAT, {
          frames: [0, 1, 2, 3]
        })
      }); //make image buttons interactive

      /* 
          PointerEvents:
              pointerover - hovering
              pointerout - not hovering
              pointerup - click and release
              pointerdown - just click
      */

      playButton.setInteractive();
      playButton.on("pointerover", function () {
        hoverSprite.setVisible(true);
        hoverSprite.play("walk");
        hoverSprite.x = playButton.x - playButton.width;
        hoverSprite.y = playButton.y;
      });
      playButton.on("pointerout", function () {
        hoverSprite.setVisible(false);
      });
      playButton.on("pointerup", function () {
        _this.scene.start(_CST.CST.SCENES.PLAY);
      });
      optionsButton.setInteractive();
      optionsButton.on("pointerover", function () {
        hoverSprite.setVisible(true);
        hoverSprite.play("walk");
        hoverSprite.x = optionsButton.x - optionsButton.width;
        hoverSprite.y = optionsButton.y;
      });
      optionsButton.on("pointerout", function () {
        hoverSprite.setVisible(false);
      });
      optionsButton.on("pointerup", function () {//this.scene.launch();
      });
    }
  }]);

  return MenuScene;
}(Phaser.Scene);

exports.MenuScene = MenuScene;
},{"../CST":"src/CST.js"}],"src/CharacterSprite.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CharacterSprite = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CharacterSprite =
/*#__PURE__*/
function (_Phaser$Physics$Arcad) {
  _inherits(CharacterSprite, _Phaser$Physics$Arcad);

  function CharacterSprite(scene, x, y, texture, frame) {
    var _this;

    _classCallCheck(this, CharacterSprite);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CharacterSprite).call(this, scene, x, y, texture, frame));
    scene.sys.updateList.add(_assertThisInitialized(_this));
    scene.sys.displayList.add(_assertThisInitialized(_this));

    _this.setScale(2);

    scene.physics.world.enableBody(_assertThisInitialized(_this));

    _this.setImmovable(true);

    _this.hp = 10;
    return _this;
  }

  return CharacterSprite;
}(Phaser.Physics.Arcade.Sprite);

exports.CharacterSprite = CharacterSprite;
},{}],"src/Sprite.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sprite = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Sprite =
/*#__PURE__*/
function (_Phaser$GameObjects$S) {
  _inherits(Sprite, _Phaser$GameObjects$S);

  function Sprite(scene, x, y, texture, frame) {
    var _this;

    _classCallCheck(this, Sprite);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Sprite).call(this, scene, x, y, texture, frame));
    scene.sys.updateList.add(_assertThisInitialized(_this));
    scene.sys.displayList.add(_assertThisInitialized(_this));
    return _this;
  }

  return Sprite;
}(Phaser.GameObjects.Sprite);

exports.Sprite = Sprite;
},{}],"src/scenes/PlayScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayScene = void 0;

var _CST = require("../CST");

var _CharacterSprite = require("../CharacterSprite");

var _Sprite = require("../Sprite");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PlayScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(PlayScene, _Phaser$Scene);

  // anna!: Phaser.Physics.Arcade.Sprite;
  // hooded!: Phaser.Physics.Arcade.Sprite;
  // keyboard!: { [index: string]: Phaser.Input.Keyboard.Key };
  // assassins!: Phaser.Physics.Arcade.Group;
  // fireAttacks!: Phaser.Physics.Arcade.Group;
  // player!: Phaser.GameObjects.Container;
  // anna;
  // hooded;
  // keyboard;
  // assassins;
  // fireAttacks;
  // player;
  function PlayScene() {
    _classCallCheck(this, PlayScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(PlayScene).call(this, {
      key: _CST.CST.SCENES.PLAY
    }));
  }

  _createClass(PlayScene, [{
    key: "preload",
    value: function preload() {
      this.anims.create({
        key: "left",
        frameRate: 10,
        frames: this.anims.generateFrameNumbers("anna", {
          start: 9,
          end: 17
        })
      });
      this.anims.create({
        key: "down",
        frameRate: 10,
        frames: this.anims.generateFrameNumbers("anna", {
          start: 18,
          end: 26
        })
      });
      this.anims.create({
        key: "up",
        frameRate: 10,
        frames: this.anims.generateFrameNumbers("anna", {
          start: 0,
          end: 8
        })
      });
      this.anims.create({
        key: "right",
        frameRate: 10,
        frames: this.anims.generateFrameNumbers("anna", {
          start: 27,
          end: 35
        })
      });
      this.anims.create({
        key: "blaze",
        duration: 50,
        frames: this.anims.generateFrameNames("daze", {
          prefix: "fire0",
          suffix: ".png",
          end: 55
        }),
        showOnStart: true,
        hideOnComplete: true
      });
      this.textures.addSpriteSheetFromAtlas("hooded", {
        frameHeight: 64,
        frameWidth: 64,
        atlas: "characters",
        frame: "hooded"
      });
      this.textures.addSpriteSheetFromAtlas("mandy", {
        frameHeight: 64,
        frameWidth: 64,
        atlas: "characters",
        frame: "mandy"
      });
      this.load.image("terrain", "./assets/image/terrain_atlas.png");
      this.load.image("items", "./assets/image/items.png");
      this.load.tilemapTiledJSON("mappy", "./assets/maps/mappy.json");
      this.anims.create({
        key: "mandyswordleft",
        frameRate: 5,
        frames: this.anims.generateFrameNumbers("mandy", {
          start: 169,
          end: 174
        })
      });
      this.anims.create({
        key: "sword_left",
        frameRate: 5,
        frames: this.anims.generateFrameNumbers("rapier", {
          start: 6,
          end: 11
        }),
        showOnStart: true,
        hideOnComplete: true
      });
    }
  }, {
    key: "create",
    value: function create() {
      var _this = this;

      this.player = this.add.container(200, 200, [this.add.sprite(0, 0, "mandy", 26), this.add.sprite(0, 0, "rapier").setVisible(false)]).setDepth(1).setScale(2);
      window.player = this.player;
      this.input.keyboard.on("keydown-F", function () {
        _this.player.list[0].play("mandyswordleft");

        _this.player.list[1].play("sword_left");
      });
      this.anna = new _CharacterSprite.CharacterSprite(this, 400, 400, "anna", 26);
      this.hooded = this.physics.add.sprite(200, 200, "hooded", 26).setScale(2).setImmovable(true);
      this.fireAttacks = this.physics.add.group();
      this.assassins = this.physics.add.group({
        immovable: true
      });
      this.assassins.add(this.hooded); //this.physics.add.existing() manual add 

      window.hooded = this.hooded;
      window.anna = this.anna; //set smaller hitbox

      this.anna.setSize(40, 50).setOffset(10, 10);
      this.anna.setCollideWorldBounds(true);
      this.keyboard = this.input.keyboard.addKeys("W, A, S, D");
      this.input.on("pointermove", function (pointer) {
        if (pointer.isDown) {
          //is clicking
          var fire = _this.add.sprite(pointer.worldX, pointer.worldY, "daze", "fire00.png").play("blaze");

          _this.fireAttacks.add(fire);

          fire.on("animationcomplete", function () {
            fire.destroy();
          });
        }
      });
      this.physics.world.addCollider(this.anna, this.assassins, function (anna, hooded) {
        anna.hp--;

        if (anna.hp <= 0) {
          anna.destroy();
        }

        hooded.destroy();
      });
      this.physics.world.addCollider(this.fireAttacks, this.assassins, function (fireAttacks, hooded) {
        fireAttacks.destroy();
        hooded.destroy();
        var x = 0;
        var y = 0;

        switch (Phaser.Math.Between(0, 1)) {
          case 0:
            x = Phaser.Math.Between(0, _this.game.renderer.width);
            break;

          case 1:
            y = Phaser.Math.Between(0, _this.game.renderer.height);
        }

        for (var i = 0; i < 2; i++) {
          //spawn 2
          _this.assassins.add(_this.physics.add.sprite(x, y, "hooded", 26).setScale(2).setImmovable(true));
        }
      });
      var mappy = this.add.tilemap("mappy");
      var terrain = mappy.addTilesetImage("terrain_atlas", "terrain");
      var itemset = mappy.addTilesetImage("items"); //layers

      var botLayer = mappy.createStaticLayer("bot", [terrain], 0, 0).setDepth(-1);
      var topLayer = mappy.createStaticLayer("top", [terrain], 0, 0); //map collisions

      this.physics.add.collider(this.anna, topLayer); //by tile property

      topLayer.setCollisionByProperty({
        collides: true
      }); //by tile index

      topLayer.setCollision([269, 270, 271, 301, 302, 303, 333, 334, 335]); //map events
      //by location

      topLayer.setTileLocationCallback(10, 8, 1, 1, function () {
        alert("the sword calls to you!!!!"); //@ts-ignore

        topLayer.setTileLocationCallback(10, 8, 1, 1, null);
      }); //by index

      topLayer.setTileIndexCallback([272, 273, 274, 304, 305, 306, 336, 337, 338], function () {
        console.log("STOP STEPPING ON LAVA >:(");
      }); //INTERACTIVE ITEMS FROM OBJECT LAYER

      var items = mappy.createFromObjects("pickup", 1114, {
        key: _CST.CST.SPRITE.CAT
      }).map(function (sprite) {
        sprite.setScale(2);
        sprite.setInteractive();
      });
      this.input.on("gameobjectdown", function (pointer, obj) {
        obj.destroy();
      });
      this.input.on("pointerdown", function (pointer) {
        //pixel position to tile position
        var tile = mappy.getTileAt(mappy.worldToTileX(pointer.x), mappy.worldToTileY(pointer.y));

        if (tile) {
          console.log(tile);
        }
      });
      this.cameras.main.startFollow(this.anna);
      this.physics.world.setBounds(0, 0, mappy.widthInPixels, mappy.heightInPixels); //draw debug render hitboxes

      topLayer.renderDebug(this.add.graphics(), {
        tileColor: null,
        //non-colliding tiles
        collidingTileColor: new Phaser.Display.Color(243, 134, 48, 200),
        // Colliding tiles,
        faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Colliding face edges

      });
    }
  }, {
    key: "update",
    value: function update(time, delta) {
      //delta 16.666 @ 60fps
      for (var i = 0; i < this.assassins.getChildren().length; i++) {
        this.physics.accelerateToObject(this.assassins.getChildren()[i], this.anna);
      }

      if (this.anna.active === true) {
        if (this.keyboard.D.isDown === true) {
          this.anna.setVelocityX(128);
        }

        if (this.keyboard.W.isDown === true) {
          this.anna.setVelocityY(-128);
        }

        if (this.keyboard.S.isDown === true) {
          this.anna.setVelocityY(128);
        }

        if (this.keyboard.A.isDown === true) {
          this.anna.setVelocityX(-128);
        }

        if (this.keyboard.A.isUp && this.keyboard.D.isUp) {
          //not moving on X axis
          this.anna.setVelocityX(0);
        }

        if (this.keyboard.W.isUp && this.keyboard.S.isUp) {
          //not pressing y movement
          this.anna.setVelocityY(0);
        }

        if (this.anna.body.velocity.x > 0) {
          //moving right
          this.anna.play("right", true);
        } else if (this.anna.body.velocity.x < 0) {
          //moving left
          this.anna.anims.playReverse("left", true);
        } else if (this.anna.body.velocity.y < 0) {
          //moving up
          this.anna.play("up", true);
        } else if (this.anna.body.velocity.y > 0) {
          //moving down
          this.anna.play("down", true);
        }
      }
    }
  }]);

  return PlayScene;
}(Phaser.Scene);

exports.PlayScene = PlayScene;
},{"../CST":"src/CST.js","../CharacterSprite":"src/CharacterSprite.js","../Sprite":"src/Sprite.js"}],"src/main.js":[function(require,module,exports) {
"use strict";

var _LoadScene = require("./scenes/LoadScene");

var _MenuScene = require("./scenes/MenuScene");

var _PlayScene = require("./scenes/PlayScene");

var game = new Phaser.Game({
  width: 800,
  height: 600,
  scene: [_LoadScene.LoadScene, _MenuScene.MenuScene, _PlayScene.PlayScene],
  render: {
    pixelArt: true
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: true
    }
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
});
},{"./scenes/LoadScene":"src/scenes/LoadScene.js","./scenes/MenuScene":"src/scenes/MenuScene.js","./scenes/PlayScene":"src/scenes/PlayScene.js"}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57725" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/main.js"], null)
//# sourceMappingURL=/main.1e43358e.js.map