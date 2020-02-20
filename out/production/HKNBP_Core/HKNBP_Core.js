if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'HKNBP_Core'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'HKNBP_Core'.");
}
var HKNBP_Core = function (_, Kotlin) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var ArrayList = Kotlin.kotlin.collections.ArrayList;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var toString = Kotlin.toString;
  var padStart = Kotlin.kotlin.text.padStart_vrc1nu$;
  var Unit = Kotlin.kotlin.Unit;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var toBoolean = Kotlin.kotlin.text.toBoolean_pdl1vz$;
  var sortWith = Kotlin.kotlin.collections.sortWith_nqfjgj$;
  var wrapFunction = Kotlin.wrapFunction;
  var Comparator = Kotlin.kotlin.Comparator;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var equals = Kotlin.equals;
  var numberToInt = Kotlin.numberToInt;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var Math_0 = Math;
  var toShort = Kotlin.toShort;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var split_0 = Kotlin.kotlin.text.split_o64adg$;
  var Random = Kotlin.kotlin.random.Random;
  var toDoubleOrNull = Kotlin.kotlin.text.toDoubleOrNull_pdl1vz$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var getOrNull_0 = Kotlin.kotlin.text.getOrNull_94bcnn$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var ArrayList_init_1 = Kotlin.kotlin.collections.ArrayList_init_mqih57$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var Exception = Kotlin.kotlin.Exception;
  Window.prototype = Object.create(UserInterface.prototype);
  Window.prototype.constructor = Window;
  AboutWindow.prototype = Object.create(Window.prototype);
  AboutWindow.prototype.constructor = AboutWindow;
  AppDownloadWindow.prototype = Object.create(Window.prototype);
  AppDownloadWindow.prototype.constructor = AppDownloadWindow;
  ArrayLinkList.prototype = Object.create(ArrayList.prototype);
  ArrayLinkList.prototype.constructor = ArrayLinkList;
  AudioDescription.prototype = Object.create(UserInterface.prototype);
  AudioDescription.prototype.constructor = AudioDescription;
  ChannelDescription.prototype = Object.create(UserInterface.prototype);
  ChannelDescription.prototype.constructor = ChannelDescription;
  ConsentPanel.prototype = Object.create(UserInterface.prototype);
  ConsentPanel.prototype.constructor = ConsentPanel;
  DialogueBox.prototype = Object.create(UserInterface.prototype);
  DialogueBox.prototype.constructor = DialogueBox;
  CustomChannelEditChannelDialogBox.prototype = Object.create(DialogueBox.prototype);
  CustomChannelEditChannelDialogBox.prototype.constructor = CustomChannelEditChannelDialogBox;
  CustomChannels.prototype = Object.create(ChannelsReader.prototype);
  CustomChannels.prototype.constructor = CustomChannels;
  CustomChannelsSettingWindow.prototype = Object.create(Window.prototype);
  CustomChannelsSettingWindow.prototype.constructor = CustomChannelsSettingWindow;
  EPG.prototype = Object.create(UserInterface.prototype);
  EPG.prototype.constructor = EPG;
  EnteringNumberBox.prototype = Object.create(UserInterface.prototype);
  EnteringNumberBox.prototype.constructor = EnteringNumberBox;
  FullScreenButton.prototype = Object.create(UserInterface.prototype);
  FullScreenButton.prototype.constructor = FullScreenButton;
  MultiLanguageString.prototype = Object.create(ArrayLinkList.prototype);
  MultiLanguageString.prototype.constructor = MultiLanguageString;
  MutedDescription.prototype = Object.create(UserInterface.prototype);
  MutedDescription.prototype.constructor = MutedDescription;
  NativeAppInstallButton.prototype = Object.create(UserInterface.prototype);
  NativeAppInstallButton.prototype.constructor = NativeAppInstallButton;
  OfficialChannels.prototype = Object.create(ChannelsReader.prototype);
  OfficialChannels.prototype.constructor = OfficialChannels;
  PictureInPictureButton.prototype = Object.create(UserInterface.prototype);
  PictureInPictureButton.prototype.constructor = PictureInPictureButton;
  Player$OnPlayerEvent.prototype = Object.create(Enum.prototype);
  Player$OnPlayerEvent.prototype.constructor = Player$OnPlayerEvent;
  Player$ProgrammableColor.prototype = Object.create(Enum.prototype);
  Player$ProgrammableColor.prototype.constructor = Player$ProgrammableColor;
  Player.prototype = Object.create(UserInterface.prototype);
  Player.prototype.constructor = Player;
  PromptBox.prototype = Object.create(UserInterface.prototype);
  PromptBox.prototype.constructor = PromptBox;
  SettingWindow.prototype = Object.create(Window.prototype);
  SettingWindow.prototype.constructor = SettingWindow;
  ShareWindow.prototype = Object.create(Window.prototype);
  ShareWindow.prototype.constructor = ShareWindow;
  SubtitleDescription.prototype = Object.create(UserInterface.prototype);
  SubtitleDescription.prototype.constructor = SubtitleDescription;
  UserControlPanel.prototype = Object.create(UserInterface.prototype);
  UserControlPanel.prototype.constructor = UserControlPanel;
  VideoDescription.prototype = Object.create(UserInterface.prototype);
  VideoDescription.prototype.constructor = VideoDescription;
  VirtualRemote.prototype = Object.create(UserInterface.prototype);
  VirtualRemote.prototype.constructor = VirtualRemote;
  VolumeDescription.prototype = Object.create(UserInterface.prototype);
  VolumeDescription.prototype.constructor = VolumeDescription;
  XMLTV$Programme$ProgrammeList.prototype = Object.create(ArrayList.prototype);
  XMLTV$Programme$ProgrammeList.prototype.constructor = XMLTV$Programme$ProgrammeList;
  function AboutWindow() {
    AboutWindow_instance = this;
    Window.call(this, 'aboutWindow', 'aboutWindowHideButton');
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    this.aboutWindow_0 = Kotlin.isType(tmp$ = document.getElementById('aboutWindow'), HTMLDivElement) ? tmp$ : throwCCE();
    this.hideButton_0 = Kotlin.isType(tmp$_0 = document.getElementById('aboutWindowHideButton'), HTMLButtonElement) ? tmp$_0 : throwCCE();
    this.coreVersionText_0 = Kotlin.isType(tmp$_1 = document.getElementById('aboutWindowCoreVersionText'), HTMLDivElement) ? tmp$_1 : throwCCE();
    this.appVersionText_0 = Kotlin.isType(tmp$_2 = document.getElementById('aboutWindowAppVersionText'), HTMLDivElement) ? tmp$_2 : throwCCE();
    this.consentText_0 = Kotlin.isType(tmp$_3 = document.getElementById('aboutWindowConsentText'), HTMLElement) ? tmp$_3 : throwCCE();
    this.hideButton_0.onclick = AboutWindow_init$lambda(this);
    this.consentText_0.onclick = AboutWindow_init$lambda_0;
    println('Init AboutWindow');
  }
  AboutWindow.prototype.show = function () {
    Window.prototype.show.call(this);
    this.coreVersionText_0.innerHTML = coreVersion_0;
    this.appVersionText_0.innerHTML = appVersion;
  };
  function AboutWindow_init$lambda(this$AboutWindow) {
    return function (event) {
      this$AboutWindow.hide();
    };
  }
  function AboutWindow_init$lambda_0(event) {
    ConsentPanel_getInstance().show();
  }
  AboutWindow.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AboutWindow',
    interfaces: [Window]
  };
  var AboutWindow_instance = null;
  function AboutWindow_getInstance() {
    if (AboutWindow_instance === null) {
      new AboutWindow();
    }
    return AboutWindow_instance;
  }
  function AppDownloadWindow() {
    AppDownloadWindow_instance = this;
    Window.call(this, 'appDownloadWindow', 'appDownloadWindowHideButton');
    var tmp$, tmp$_0;
    this.appDownloadWindow_0 = Kotlin.isType(tmp$ = document.getElementById('appDownloadWindow'), HTMLDivElement) ? tmp$ : throwCCE();
    this.hideButton_0 = Kotlin.isType(tmp$_0 = document.getElementById('appDownloadWindowHideButton'), HTMLButtonElement) ? tmp$_0 : throwCCE();
    this.hideButton_0.onclick = AppDownloadWindow_init$lambda(this);
    println('Init AppDownloadWindow');
  }
  function AppDownloadWindow_init$lambda(this$AppDownloadWindow) {
    return function (event) {
      this$AppDownloadWindow.hide();
    };
  }
  AppDownloadWindow.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AppDownloadWindow',
    interfaces: [Window]
  };
  var AppDownloadWindow_instance = null;
  function AppDownloadWindow_getInstance() {
    if (AppDownloadWindow_instance === null) {
      new AppDownloadWindow();
    }
    return AppDownloadWindow_instance;
  }
  function ArrayLinkList() {
    this.onElementsChangeListeners_snldi6$_0 = ArrayList_init();
    this.node_ns7zwb$_0 = null;
    this.lastTimeNode_rxcek8$_0 = null;
    this.onNodeEventListeners_907qg9$_0 = ArrayList_init();
  }
  function ArrayLinkList$OnElementsChangeListener() {
  }
  ArrayLinkList$OnElementsChangeListener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'OnElementsChangeListener',
    interfaces: []
  };
  ArrayLinkList.prototype.addOnElementsChangeListener_9bqafr$ = function (onElementsChangeListener) {
    this.onElementsChangeListeners_snldi6$_0.add_11rb$(onElementsChangeListener);
  };
  ArrayLinkList.prototype.add_11rb$ = function (element) {
    var tmp$;
    tmp$ = this.onElementsChangeListeners_snldi6$_0.iterator();
    while (tmp$.hasNext()) {
      var onElementsChangeListener = tmp$.next();
      onElementsChangeListener.onElementsChange();
    }
    return ArrayList.prototype.add_11rb$.call(this, element);
  };
  ArrayLinkList.prototype.add_wxm5ur$ = function (index, element) {
    var tmp$;
    tmp$ = this.onElementsChangeListeners_snldi6$_0.iterator();
    while (tmp$.hasNext()) {
      var onElementsChangeListener = tmp$.next();
      onElementsChangeListener.onElementsChange();
    }
    ArrayList.prototype.add_wxm5ur$.call(this, index, element);
  };
  ArrayLinkList.prototype.addAll_brywnq$ = function (elements) {
    var tmp$;
    tmp$ = this.onElementsChangeListeners_snldi6$_0.iterator();
    while (tmp$.hasNext()) {
      var onElementsChangeListener = tmp$.next();
      onElementsChangeListener.onElementsChange();
    }
    return ArrayList.prototype.addAll_brywnq$.call(this, elements);
  };
  ArrayLinkList.prototype.addAll_u57x28$ = function (index, elements) {
    var tmp$;
    tmp$ = this.onElementsChangeListeners_snldi6$_0.iterator();
    while (tmp$.hasNext()) {
      var onElementsChangeListener = tmp$.next();
      onElementsChangeListener.onElementsChange();
    }
    return ArrayList.prototype.addAll_u57x28$.call(this, index, elements);
  };
  ArrayLinkList.prototype.clear = function () {
    var tmp$;
    tmp$ = this.onElementsChangeListeners_snldi6$_0.iterator();
    while (tmp$.hasNext()) {
      var onElementsChangeListener = tmp$.next();
      onElementsChangeListener.onElementsChange();
    }
    ArrayList.prototype.clear.call(this);
  };
  ArrayLinkList.prototype.remove_11rb$ = function (element) {
    var tmp$;
    tmp$ = this.onElementsChangeListeners_snldi6$_0.iterator();
    while (tmp$.hasNext()) {
      var onElementsChangeListener = tmp$.next();
      onElementsChangeListener.onElementsChange();
    }
    return ArrayList.prototype.remove_11rb$.call(this, element);
  };
  ArrayLinkList.prototype.removeAll_brywnq$ = function (elements) {
    var tmp$;
    tmp$ = this.onElementsChangeListeners_snldi6$_0.iterator();
    while (tmp$.hasNext()) {
      var onElementsChangeListener = tmp$.next();
      onElementsChangeListener.onElementsChange();
    }
    return ArrayList.prototype.removeAll_brywnq$.call(this, elements);
  };
  ArrayLinkList.prototype.removeAt_za3lpa$ = function (index) {
    var tmp$;
    tmp$ = this.onElementsChangeListeners_snldi6$_0.iterator();
    while (tmp$.hasNext()) {
      var onElementsChangeListener = tmp$.next();
      onElementsChangeListener.onElementsChange();
    }
    return ArrayList.prototype.removeAt_za3lpa$.call(this, index);
  };
  ArrayLinkList.prototype.removeRange_vux9f0$ = function (fromIndex, toIndex) {
    var tmp$;
    tmp$ = this.onElementsChangeListeners_snldi6$_0.iterator();
    while (tmp$.hasNext()) {
      var onElementsChangeListener = tmp$.next();
      onElementsChangeListener.onElementsChange();
    }
    ArrayList.prototype.removeRange_vux9f0$.call(this, fromIndex, toIndex);
  };
  ArrayLinkList.prototype.set_wxm5ur$ = function (index, element) {
    var tmp$;
    tmp$ = this.onElementsChangeListeners_snldi6$_0.iterator();
    while (tmp$.hasNext()) {
      var onElementsChangeListener = tmp$.next();
      onElementsChangeListener.onElementsChange();
    }
    return ArrayList.prototype.set_wxm5ur$.call(this, index, element);
  };
  Object.defineProperty(ArrayLinkList.prototype, 'node', {
    get: function () {
      if (this.indexOfOrNull_11rb$(this.node_ns7zwb$_0) == null) {
        this.node_ns7zwb$_0 = null;
      }
      if (this.node_ns7zwb$_0 == null) {
        if (0 < this.size) {
          this.node_ns7zwb$_0 = getOrNull(this, 0);
        }
      }
      return this.node_ns7zwb$_0;
    },
    set: function (value) {
      var tmp$, tmp$_0, tmp$_1;
      var preChangeNodeID = this.nodeID;
      this.node_ns7zwb$_0 = value;
      tmp$ = this.onNodeEventListeners_907qg9$_0.iterator();
      while (tmp$.hasNext()) {
        var onNodeEventListener = tmp$.next();
        tmp$_0 = this.nodeID;
        if (preChangeNodeID != null) {
          tmp$_1 = getOrNull(this, preChangeNodeID);
        }
         else {
          tmp$_1 = null;
        }
        onNodeEventListener.onNodeChanged_t4rudg$(preChangeNodeID, tmp$_0, tmp$_1, this.node);
      }
    }
  });
  Object.defineProperty(ArrayLinkList.prototype, 'nodeID', {
    get: function () {
      return this.indexOfOrNull_11rb$(this.node);
    }
  });
  ArrayLinkList.prototype.saveLastTimeNode_8x70b$_0 = function () {
    this.lastTimeNode_rxcek8$_0 = this.node;
  };
  function ArrayLinkList$OnNodeEventListener() {
  }
  ArrayLinkList$OnNodeEventListener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'OnNodeEventListener',
    interfaces: []
  };
  ArrayLinkList.prototype.addOnNodeEventListener_ljxrtv$ = function (onNodeEventListener) {
    this.onNodeEventListeners_907qg9$_0.add_11rb$(onNodeEventListener);
  };
  ArrayLinkList.prototype.indexOfOrNull_11rb$ = function (element) {
    if (element == null) {
      return null;
    }
     else {
      if (ArrayList.prototype.indexOf_11rb$.call(this, element) === -1) {
        return null;
      }
       else {
        return ArrayList.prototype.indexOf_11rb$.call(this, element);
      }
    }
  };
  ArrayLinkList.prototype.next = function () {
    var index = this.indexOfOrNull_11rb$(this.node);
    if (index != null) {
      this.saveLastTimeNode_8x70b$_0();
      this.node = getOrNull(this, (index + 1 | 0) % this.size);
      return true;
    }
    return false;
  };
  ArrayLinkList.prototype.previous = function () {
    var tmp$;
    var index = this.indexOfOrNull_11rb$(this.node);
    if (index != null) {
      this.saveLastTimeNode_8x70b$_0();
      if ((index - 1 | 0) === -1) {
        tmp$ = get_lastIndex(this);
      }
       else {
        tmp$ = index - 1 | 0;
      }
      this.node = getOrNull(this, tmp$);
      return true;
    }
    return false;
  };
  ArrayLinkList.prototype.designated_za3lpa$ = function (nodeID) {
    if (0 <= nodeID && nodeID < this.size) {
      this.saveLastTimeNode_8x70b$_0();
      this.node = getOrNull(this, nodeID);
      return true;
    }
    return false;
  };
  ArrayLinkList.prototype.designated_11rb$ = function (node) {
    var tmp$;
    var index = this.indexOfOrNull_11rb$(node);
    if (index != null) {
      tmp$ = this.designated_za3lpa$(index);
    }
     else {
      tmp$ = false;
    }
    return tmp$;
  };
  ArrayLinkList.prototype.lastTime = function () {
    var toNode = this.lastTimeNode_rxcek8$_0;
    this.saveLastTimeNode_8x70b$_0();
    this.node = toNode;
  };
  ArrayLinkList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArrayLinkList',
    interfaces: [ArrayList]
  };
  function ArrayLinkList_init(initElements, $this) {
    $this = $this || Object.create(ArrayLinkList.prototype);
    ArrayList_init($this);
    ArrayLinkList.call($this);
    var tmp$;
    for (tmp$ = 0; tmp$ !== initElements.length; ++tmp$) {
      var initElement = initElements[tmp$];
      $this.add_11rb$(initElement);
    }
    $this.node = getOrNull($this, 0);
    return $this;
  }
  function ArrayLinkList_init_0(initNodeID, initElements, $this) {
    $this = $this || Object.create(ArrayLinkList.prototype);
    ArrayList_init($this);
    ArrayLinkList.call($this);
    var tmp$;
    for (tmp$ = 0; tmp$ !== initElements.length; ++tmp$) {
      var initElement = initElements[tmp$];
      $this.add_11rb$(initElement);
    }
    if (0 <= initNodeID && initNodeID < initElements.length) {
      $this.node = getOrNull($this, initNodeID);
    }
     else {
      $this.node = getOrNull($this, 0);
    }
    return $this;
  }
  function ArrayLinkList_init_1(initElements, $this) {
    $this = $this || Object.create(ArrayLinkList.prototype);
    ArrayList_init($this);
    ArrayLinkList.call($this);
    var tmp$;
    for (tmp$ = 0; tmp$ !== initElements.length; ++tmp$) {
      var initElement = initElements[tmp$];
      $this.add_11rb$(initElement);
    }
    $this.node = getOrNull($this, 0);
    return $this;
  }
  function ArrayLinkList_init_2(initNodeID, initElements, $this) {
    $this = $this || Object.create(ArrayLinkList.prototype);
    ArrayList_init($this);
    ArrayLinkList.call($this);
    var tmp$;
    for (tmp$ = 0; tmp$ !== initElements.length; ++tmp$) {
      var initElement = initElements[tmp$];
      $this.add_11rb$(initElement);
    }
    if (0 <= initNodeID && initNodeID < initElements.length) {
      $this.node = getOrNull($this, initNodeID);
    }
     else {
      $this.node = getOrNull($this, 0);
    }
    return $this;
  }
  function ArrayLinkList_init_3(initElements, $this) {
    $this = $this || Object.create(ArrayLinkList.prototype);
    ArrayList_init($this);
    ArrayLinkList.call($this);
    var tmp$;
    tmp$ = initElements.iterator();
    while (tmp$.hasNext()) {
      var initElement = tmp$.next();
      $this.add_11rb$(initElement);
    }
    $this.node = getOrNull($this, 0);
    return $this;
  }
  function ArrayLinkList_init_4(initNodeID, initElements, $this) {
    $this = $this || Object.create(ArrayLinkList.prototype);
    ArrayList_init($this);
    ArrayLinkList.call($this);
    var tmp$;
    tmp$ = initElements.iterator();
    while (tmp$.hasNext()) {
      var initElement = tmp$.next();
      $this.add_11rb$(initElement);
    }
    if (0 <= initNodeID && initNodeID < initElements.size) {
      $this.node = getOrNull($this, initNodeID);
    }
     else {
      $this.node = getOrNull($this, 0);
    }
    return $this;
  }
  function AudioDescription() {
    AudioDescription_instance = this;
    UserInterface.call(this, 'trackDescription');
    var tmp$;
    this.trackDescription_0 = Kotlin.isType(tmp$ = document.getElementById('trackDescription'), HTMLDivElement) ? tmp$ : throwCCE();
    this.audioIconHTML_0 = '<i class="icon-font nestle-bottom" style="display:inline;">&#xe81c;<\/i>';
    println('Init AudioDescription');
  }
  AudioDescription.prototype.show = function () {
    var tmp$, tmp$_0, tmp$_1;
    UserInterface.prototype.show.call(this);
    var audioNameHTML = '<div style=' + '"' + 'display:inline;' + '"' + '>' + ((tmp$_1 = (tmp$_0 = (tmp$ = player != null ? player.audioTracks : null) != null ? tmp$.node : null) != null ? tmp$_0.name : null) != null ? tmp$_1 : '') + '<\/div>';
    this.trackDescription_0.innerHTML = this.audioIconHTML_0 + '&nbsp' + audioNameHTML;
  };
  AudioDescription.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AudioDescription',
    interfaces: [UserInterface]
  };
  var AudioDescription_instance = null;
  function AudioDescription_getInstance() {
    if (AudioDescription_instance === null) {
      new AudioDescription();
    }
    return AudioDescription_instance;
  }
  function CanAutoplay() {
    CanAutoplay_instance = this;
    this.video = {type: 'video', method: 'video', params: null};
    this.videoMuted = {type: 'videoMuted', method: 'video', params: {muted: true}};
    this.videoInline = {type: 'videoInline', method: 'video', params: {inline: true}};
    this.videoInlineMuted = {type: 'videoInlineMuted', method: 'video', params: {inline: true, muted: true}};
    this.checkCanAutoplay_0(CanAutoplay_init$lambda(this), CanAutoplay_init$lambda_0(this), this.video);
    this.checkCanAutoplay_0(CanAutoplay_init$lambda_1(this), CanAutoplay_init$lambda_2(this), this.videoMuted);
    this.checkCanAutoplay_0(CanAutoplay_init$lambda_3(this), CanAutoplay_init$lambda_4(this), this.videoInline);
    this.checkCanAutoplay_0(CanAutoplay_init$lambda_5(this), CanAutoplay_init$lambda_6(this), this.videoInlineMuted);
    println('Init CanAutoplay');
  }
  function CanAutoplay$checkCanAutoplay$lambda(closure$onCanAutoplay, closure$onCanNotAutoplay) {
    return function (obj) {
      var result = false;
      try {
        result = obj.result;
      }
       catch (e) {
      }
      if (result === true) {
        closure$onCanAutoplay();
      }
       else {
        closure$onCanNotAutoplay();
      }
    };
  }
  CanAutoplay.prototype.checkCanAutoplay_0 = function (onCanAutoplay, onCanNotAutoplay, autoplayType) {
    var _canAutoplay = canAutoplay;
    _canAutoplay[autoplayType.method](autoplayType.params).then(CanAutoplay$checkCanAutoplay$lambda(onCanAutoplay, onCanNotAutoplay));
  };
  CanAutoplay.prototype.checkVideoAutoPlayNeedToMute_9dmrm4$ = function (onNotNeedToMuteCanAutoplay, onNeedToMuteCanAutoplay) {
    this.checkCanAutoplay_0(onNotNeedToMuteCanAutoplay, onNeedToMuteCanAutoplay, this.video);
  };
  function CanAutoplay_init$lambda(this$CanAutoplay) {
    return function () {
      println(this$CanAutoplay.video.type + ': \u53EF\u4EE5\u81EA\u52D5\u64AD\u653E');
    };
  }
  function CanAutoplay_init$lambda_0(this$CanAutoplay) {
    return function () {
      println(this$CanAutoplay.video.type + ': \u5514\u53EF\u4EE5\u81EA\u52D5\u64AD\u653E');
    };
  }
  function CanAutoplay_init$lambda_1(this$CanAutoplay) {
    return function () {
      println(this$CanAutoplay.videoMuted.type + ': \u53EF\u4EE5\u81EA\u52D5\u64AD\u653E');
    };
  }
  function CanAutoplay_init$lambda_2(this$CanAutoplay) {
    return function () {
      println(this$CanAutoplay.videoMuted.type + ': \u5514\u53EF\u4EE5\u81EA\u52D5\u64AD\u653E');
    };
  }
  function CanAutoplay_init$lambda_3(this$CanAutoplay) {
    return function () {
      println(this$CanAutoplay.videoInline.type + ': \u53EF\u4EE5\u81EA\u52D5\u64AD\u653E');
    };
  }
  function CanAutoplay_init$lambda_4(this$CanAutoplay) {
    return function () {
      println(this$CanAutoplay.videoInline.type + ': \u5514\u53EF\u4EE5\u81EA\u52D5\u64AD\u653E');
    };
  }
  function CanAutoplay_init$lambda_5(this$CanAutoplay) {
    return function () {
      println(this$CanAutoplay.videoInlineMuted.type + ': \u53EF\u4EE5\u81EA\u52D5\u64AD\u653E');
    };
  }
  function CanAutoplay_init$lambda_6(this$CanAutoplay) {
    return function () {
      println(this$CanAutoplay.videoInlineMuted.type + ': \u5514\u53EF\u4EE5\u81EA\u52D5\u64AD\u653E');
    };
  }
  CanAutoplay.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CanAutoplay',
    interfaces: []
  };
  var CanAutoplay_instance = null;
  function CanAutoplay_getInstance() {
    if (CanAutoplay_instance === null) {
      new CanAutoplay();
    }
    return CanAutoplay_instance;
  }
  function Channel(number, name, sources, information) {
    if (name === void 0)
      name = new MultiLanguageString();
    if (sources === void 0)
      sources = ArrayLinkList_init([]);
    if (information === void 0)
      information = new Channel$Information();
    this.number = number;
    this.name = name;
    this.sources = sources;
    this.information = information;
  }
  function Channel$Source(description, iFramePlayerSrc, link) {
    if (description === void 0)
      description = '';
    this.description = description;
    this.iFramePlayerSrc = iFramePlayerSrc;
    this.link = link;
  }
  Channel$Source.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Source',
    interfaces: []
  };
  function Channel$Information(epgID, src) {
    if (epgID === void 0)
      epgID = '';
    if (src === void 0)
      src = '';
    this.epgID = epgID;
    this.src = src;
    this.xmltv_0 = null;
  }
  function Channel$Information$getXMLTV$lambda(this$Information, closure$onLoadedXMLTVListener) {
    return function (xmltv) {
      var tmp$;
      this$Information.xmltv_0 = xmltv;
      closure$onLoadedXMLTVListener((tmp$ = this$Information.xmltv_0) != null ? tmp$ : new XMLTV());
    };
  }
  function Channel$Information$getXMLTV$lambda_0() {
  }
  Channel$Information.prototype.getXMLTV_29qkou$ = function (onLoadedXMLTVListener) {
    var tmp$;
    if (this.xmltv_0 == null) {
      XMLTV$Companion_getInstance().parseXMLTV_22edlo$(Channel$Information$getXMLTV$lambda(this, onLoadedXMLTVListener), Channel$Information$getXMLTV$lambda_0, this.epgID, [this.src]);
    }
     else {
      onLoadedXMLTVListener((tmp$ = this.xmltv_0) != null ? tmp$ : new XMLTV());
    }
  };
  Channel$Information.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Information',
    interfaces: []
  };
  Channel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Channel',
    interfaces: []
  };
  function ChannelDescription() {
    ChannelDescription_instance = this;
    UserInterface.call(this, 'channelDescription');
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    this.channelDescription_0 = Kotlin.isType(tmp$ = document.getElementById('channelDescription'), HTMLDivElement) ? tmp$ : throwCCE();
    this.currentChannelName_0 = Kotlin.isType(tmp$_0 = document.getElementById('channelDescriptionCurrentChannelName'), HTMLDivElement) ? tmp$_0 : throwCCE();
    this.currentChannelNumber_0 = Kotlin.isType(tmp$_1 = document.getElementById('channelDescriptionCurrentChannelNumber'), HTMLDivElement) ? tmp$_1 : throwCCE();
    this.currentDate_0 = Kotlin.isType(tmp$_2 = document.getElementById('channelDescriptionCurrentDate'), HTMLDivElement) ? tmp$_2 : throwCCE();
    this.currentProgrammeTitle_0 = Kotlin.isType(tmp$_3 = document.getElementById('channelDescriptionCurrentProgrammeTitle'), HTMLDivElement) ? tmp$_3 : throwCCE();
    this.currentProgrammeSubTitle_0 = Kotlin.isType(tmp$_4 = document.getElementById('channelDescriptionCurrentProgrammeSubTitle'), HTMLDivElement) ? tmp$_4 : throwCCE();
    this.currentProgrammeEpisode_0 = Kotlin.isType(tmp$_5 = document.getElementById('channelDescriptionCurrentProgrammeEpisode'), HTMLDivElement) ? tmp$_5 : throwCCE();
    this.currentProgrammeBroadcastTime_0 = Kotlin.isType(tmp$_6 = document.getElementById('channelDescriptionCurrentProgrammeBroadcastTime'), HTMLDivElement) ? tmp$_6 : throwCCE();
    this.currentProgrammeDesc_0 = Kotlin.isType(tmp$_7 = document.getElementById('channelDescriptionCurrentProgrammeDesc'), HTMLDivElement) ? tmp$_7 : throwCCE();
    this.currentProgrammeCategory_0 = Kotlin.isType(tmp$_8 = document.getElementById('channelDescriptionCurrentProgrammeCategory'), HTMLDivElement) ? tmp$_8 : throwCCE();
    this.currentDateTimer_0 = 0;
    this.setCurrentDate_0();
    println('Init ChannelDescription');
  }
  ChannelDescription.prototype.setCurrentChannelName_0 = function () {
    var tmp$;
    this.currentChannelName_0.innerHTML = toString((tmp$ = channels.node) != null ? tmp$.name : null);
  };
  ChannelDescription.prototype.setCurrentChannelNumber_0 = function () {
    var tmp$, tmp$_0;
    this.currentChannelNumber_0.innerHTML = padStart(((tmp$_0 = (tmp$ = channels.node) != null ? tmp$.number : null) != null ? tmp$_0 : '').toString(), 3, 48);
  };
  function ChannelDescription$setCurrentDate$lambda(this$ChannelDescription) {
    return function () {
      this$ChannelDescription.currentDate_0.innerHTML = (new Date()).toLocaleString();
    };
  }
  ChannelDescription.prototype.setCurrentDate_0 = function () {
    var script = ChannelDescription$setCurrentDate$lambda(this);
    script();
    this.currentDateTimer_0 = window.setInterval(script, 1000);
  };
  function ChannelDescription$setCurrentProgrammeTitle$lambda(this$ChannelDescription) {
    return function (xmltv) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      this$ChannelDescription.currentProgrammeTitle_0.innerHTML = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = xmltv.programmes) != null ? tmp$.getProgrammeByTime() : null) != null ? tmp$_0.title : null) != null ? tmp$_1.toString() : null) != null ? tmp$_2 : '';
    };
  }
  ChannelDescription.prototype.setCurrentProgrammeTitle_0 = function () {
    var tmp$, tmp$_0;
    this.currentProgrammeTitle_0.innerHTML = '';
    (tmp$_0 = (tmp$ = channels.node) != null ? tmp$.information : null) != null ? (tmp$_0.getXMLTV_29qkou$(ChannelDescription$setCurrentProgrammeTitle$lambda(this)), Unit) : null;
  };
  function ChannelDescription$setCurrentProgrammeSubTitle$lambda(this$ChannelDescription) {
    return function (xmltv) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      this$ChannelDescription.currentProgrammeSubTitle_0.innerHTML = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = xmltv.programmes) != null ? tmp$.getProgrammeByTime() : null) != null ? tmp$_0.subTitle : null) != null ? tmp$_1.toString() : null) != null ? tmp$_2 : '';
    };
  }
  ChannelDescription.prototype.setCurrentProgrammeSubTitle_0 = function () {
    var tmp$, tmp$_0;
    this.currentProgrammeSubTitle_0.innerHTML = '';
    (tmp$_0 = (tmp$ = channels.node) != null ? tmp$.information : null) != null ? (tmp$_0.getXMLTV_29qkou$(ChannelDescription$setCurrentProgrammeSubTitle$lambda(this)), Unit) : null;
  };
  function ChannelDescription$setCurrentProgrammeEpisode$lambda$lambda(closure$xmltv, this$ChannelDescription) {
    return function (dialogues) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10;
      var episodeInnerHTML = '';
      var season = (tmp$_1 = (tmp$_0 = (tmp$ = closure$xmltv.programmes) != null ? tmp$.getProgrammeByTime() : null) != null ? tmp$_0.episodeNum : null) != null ? tmp$_1.getSeason() : null;
      if (season != null) {
        episodeInnerHTML += (tmp$_4 = (tmp$_3 = (tmp$_2 = dialogues.node) != null ? tmp$_2.programmeSeason : null) != null ? replace(tmp$_3, '${season}', season.toString()) : null) != null ? tmp$_4 : '';
      }
      var episode = (tmp$_7 = (tmp$_6 = (tmp$_5 = closure$xmltv.programmes) != null ? tmp$_5.getProgrammeByTime() : null) != null ? tmp$_6.episodeNum : null) != null ? tmp$_7.getEpisode() : null;
      if (episode != null) {
        episodeInnerHTML += (tmp$_10 = (tmp$_9 = (tmp$_8 = dialogues.node) != null ? tmp$_8.programmeEpisode : null) != null ? replace(tmp$_9, '${episode}', episode.toString()) : null) != null ? tmp$_10 : '';
      }
      this$ChannelDescription.currentProgrammeEpisode_0.innerHTML = episodeInnerHTML;
    };
  }
  function ChannelDescription$setCurrentProgrammeEpisode$lambda(this$ChannelDescription) {
    return function (xmltv) {
      Dialogue$Companion_getInstance().getDialogues_fs1aqo$(ChannelDescription$setCurrentProgrammeEpisode$lambda$lambda(xmltv, this$ChannelDescription));
    };
  }
  ChannelDescription.prototype.setCurrentProgrammeEpisode_0 = function () {
    var tmp$, tmp$_0;
    this.currentProgrammeEpisode_0.innerHTML = '';
    (tmp$_0 = (tmp$ = channels.node) != null ? tmp$.information : null) != null ? (tmp$_0.getXMLTV_29qkou$(ChannelDescription$setCurrentProgrammeEpisode$lambda(this)), Unit) : null;
  };
  function ChannelDescription$setCurrentProgrammeBroadcastTime$lambda(this$ChannelDescription) {
    return function (xmltv) {
      var tmp$;
      var programmeTime = (tmp$ = xmltv.programmes) != null ? tmp$.getProgrammeByTime() : null;
      if (programmeTime != null) {
        var fromTime = padStart(programmeTime.start.getHours().toString(), 2, 48) + ':' + padStart(programmeTime.start.getMinutes().toString(), 2, 48);
        var toTime = padStart(programmeTime.stop.getHours().toString(), 2, 48) + ':' + padStart(programmeTime.stop.getMinutes().toString(), 2, 48);
        this$ChannelDescription.currentProgrammeBroadcastTime_0.innerHTML = fromTime + '-' + toTime;
      }
       else {
        this$ChannelDescription.currentProgrammeBroadcastTime_0.innerHTML = '';
      }
    };
  }
  ChannelDescription.prototype.setCurrentProgrammeBroadcastTime_0 = function () {
    var tmp$, tmp$_0;
    this.currentProgrammeBroadcastTime_0.innerHTML = '';
    (tmp$_0 = (tmp$ = channels.node) != null ? tmp$.information : null) != null ? (tmp$_0.getXMLTV_29qkou$(ChannelDescription$setCurrentProgrammeBroadcastTime$lambda(this)), Unit) : null;
  };
  function ChannelDescription$setCurrentProgrammeDesc$lambda(this$ChannelDescription) {
    return function (xmltv) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      this$ChannelDescription.currentProgrammeDesc_0.innerHTML = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = xmltv.programmes) != null ? tmp$.getProgrammeByTime() : null) != null ? tmp$_0.desc : null) != null ? tmp$_1.toString() : null) != null ? tmp$_2 : '';
    };
  }
  ChannelDescription.prototype.setCurrentProgrammeDesc_0 = function () {
    var tmp$, tmp$_0;
    this.currentProgrammeDesc_0.innerHTML = '';
    (tmp$_0 = (tmp$ = channels.node) != null ? tmp$.information : null) != null ? (tmp$_0.getXMLTV_29qkou$(ChannelDescription$setCurrentProgrammeDesc$lambda(this)), Unit) : null;
  };
  function ChannelDescription$setCurrentProgrammeCategory$lambda(this$ChannelDescription) {
    return function (xmltv) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      this$ChannelDescription.currentProgrammeCategory_0.innerHTML = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = xmltv.programmes) != null ? tmp$.getProgrammeByTime() : null) != null ? tmp$_0.category : null) != null ? tmp$_1.toString() : null) != null ? tmp$_2 : '';
    };
  }
  ChannelDescription.prototype.setCurrentProgrammeCategory_0 = function () {
    var tmp$, tmp$_0;
    this.currentProgrammeCategory_0.innerHTML = '';
    (tmp$_0 = (tmp$ = channels.node) != null ? tmp$.information : null) != null ? (tmp$_0.getXMLTV_29qkou$(ChannelDescription$setCurrentProgrammeCategory$lambda(this)), Unit) : null;
  };
  ChannelDescription.prototype.update = function () {
    this.setCurrentChannelName_0();
    this.setCurrentChannelNumber_0();
    this.setCurrentProgrammeTitle_0();
    this.setCurrentProgrammeSubTitle_0();
    this.setCurrentProgrammeEpisode_0();
    this.setCurrentProgrammeDesc_0();
    this.setCurrentProgrammeBroadcastTime_0();
    this.setCurrentProgrammeCategory_0();
  };
  ChannelDescription.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ChannelDescription',
    interfaces: [UserInterface]
  };
  var ChannelDescription_instance = null;
  function ChannelDescription_getInstance() {
    if (ChannelDescription_instance === null) {
      new ChannelDescription();
    }
    return ChannelDescription_instance;
  }
  function ChannelsReader() {
  }
  ChannelsReader.prototype.getName_ejp6n4$ = function (element) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var multiLangName = new MultiLanguageString();
    var i = 0;
    var nameTag = element != null ? element.getElementsByTagName('name') : null;
    while (i < ((tmp$ = nameTag != null ? nameTag.length : null) != null ? tmp$ : 0)) {
      var lang = (tmp$_1 = (tmp$_0 = nameTag != null ? nameTag[i] : null) != null ? tmp$_0.getAttribute('lang') : null) != null ? tmp$_1 : '';
      var name = (tmp$_3 = (tmp$_2 = nameTag != null ? nameTag[i] : null) != null ? tmp$_2.innerHTML : null) != null ? tmp$_3 : '';
      multiLangName.add_11rb$(new MultiLanguageString$LanguageString(lang, name));
      i = i + 1 | 0;
    }
    return multiLangName;
  };
  ChannelsReader.prototype.getSources_ejp6n4$ = function (element) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    var sources = ArrayLinkList_init([]);
    var i = 0;
    var sourceTag = element != null ? element.getElementsByTagName('source') : null;
    while (i < ((tmp$ = sourceTag != null ? sourceTag.length : null) != null ? tmp$ : 0)) {
      var description = (tmp$_1 = (tmp$_0 = sourceTag != null ? sourceTag[i] : null) != null ? tmp$_0.getAttribute('description') : null) != null ? tmp$_1 : '';
      var iframeplayersrc = (tmp$_3 = (tmp$_2 = sourceTag != null ? sourceTag[i] : null) != null ? tmp$_2.getAttribute('iframeplayersrc') : null) != null ? tmp$_3 : '';
      var link = (tmp$_5 = (tmp$_4 = sourceTag != null ? sourceTag[i] : null) != null ? tmp$_4.getAttribute('link') : null) != null ? tmp$_5 : '';
      sources.add_11rb$(new Channel$Source(description, iframeplayersrc, link));
      i = i + 1 | 0;
    }
    return sources;
  };
  ChannelsReader.prototype.getInformation_ejp6n4$ = function (element) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var informationTag = element != null ? element.getElementsByTagName('information') : null;
    return new Channel$Information((tmp$_0 = (tmp$ = informationTag != null ? informationTag[0] : null) != null ? tmp$.getAttribute('epgid') : null) != null ? tmp$_0 : '', (tmp$_2 = (tmp$_1 = informationTag != null ? informationTag[0] : null) != null ? tmp$_1.getAttribute('src') : null) != null ? tmp$_2 : '');
  };
  ChannelsReader.prototype.getChannels_4wc2m1$ = function (document) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var channels = ArrayLinkList_init([]);
    var i = 0;
    var channelTag = document != null ? document.getElementsByTagName('channel') : null;
    while (i < ((tmp$ = channelTag != null ? channelTag.length : null) != null ? tmp$ : 0)) {
      var number = (tmp$_2 = (tmp$_1 = (tmp$_0 = channelTag != null ? channelTag[i] : null) != null ? tmp$_0.getAttribute('number') : null) != null ? toIntOrNull(tmp$_1) : null) != null ? tmp$_2 : 0;
      var name = this.getName_ejp6n4$(channelTag != null ? channelTag[i] : null);
      var sources = this.getSources_ejp6n4$(channelTag != null ? channelTag[i] : null);
      var information = this.getInformation_ejp6n4$(channelTag != null ? channelTag[i] : null);
      channels.add_11rb$(new Channel(number, name, sources, information));
      i = i + 1 | 0;
    }
    return channels;
  };
  function ChannelsReader$parseChannels$lambda(closure$onParsedChannelsListener, this$ChannelsReader) {
    return function (xmlHttp) {
      closure$onParsedChannelsListener(this$ChannelsReader.getChannels_4wc2m1$(xmlHttp.responseXML));
    };
  }
  function ChannelsReader$parseChannels$lambda_0(closure$onFailedParseChannelsListener) {
    return function () {
      closure$onFailedParseChannelsListener();
    };
  }
  ChannelsReader.prototype.parseChannels_d7jqb7$ = function (onParsedChannelsListener, onFailedParseChannelsListener, xmlSrc) {
    LoadFile_getInstance().load_y8xsdy$(ChannelsReader$parseChannels$lambda(onParsedChannelsListener, this), ChannelsReader$parseChannels$lambda_0(onFailedParseChannelsListener), xmlSrc);
  };
  ChannelsReader.prototype.parseChannels_61zpoe$ = function (xmlString) {
    return this.getChannels_4wc2m1$((new DOMParser()).parseFromString(xmlString, 'text/xml'));
  };
  ChannelsReader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChannelsReader',
    interfaces: []
  };
  function ConsentPanel() {
    ConsentPanel_instance = this;
    UserInterface.call(this, 'consentPanel', 'consentPanelAgreeConsentButton', false, void 0, true);
    var tmp$, tmp$_0;
    this.consentPanel_0 = Kotlin.isType(tmp$ = document.getElementById('consentPanel'), HTMLDivElement) ? tmp$ : throwCCE();
    this.agreeConsentButton_0 = Kotlin.isType(tmp$_0 = document.getElementById('consentPanelAgreeConsentButton'), HTMLButtonElement) ? tmp$_0 : throwCCE();
    this.consentPanel_0.style.cursor = 'auto';
    if (this.isAgreeConsent() !== true) {
      this.show();
      this.agreeConsentButton_0.focus();
    }
    Dialogue$Companion_getInstance().getDialogues_fs1aqo$(ConsentPanel_init$lambda(this));
    this.agreeConsentButton_0.onclick = ConsentPanel_init$lambda_0(this);
    println('Init ConsentPanel');
  }
  ConsentPanel.prototype.isAgreeConsent = function () {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = localStorage.getItem('IsAgreeConsent')) != null ? toBoolean(tmp$) : null) != null ? tmp$_0 : false;
  };
  function ConsentPanel_init$lambda(this$ConsentPanel) {
    return function (dialagues) {
      var tmp$, tmp$_0;
      this$ConsentPanel.agreeConsentButton_0.innerHTML = (tmp$_0 = (tmp$ = dialagues.node) != null ? tmp$.agree : null) != null ? tmp$_0 : '\u540C\u610F';
    };
  }
  function ConsentPanel_init$lambda_0(this$ConsentPanel) {
    return function (event) {
      localStorage.setItem('IsAgreeConsent', true.toString());
      this$ConsentPanel.hide();
    };
  }
  ConsentPanel.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ConsentPanel',
    interfaces: [UserInterface]
  };
  var ConsentPanel_instance = null;
  function ConsentPanel_getInstance() {
    if (ConsentPanel_instance === null) {
      new ConsentPanel();
    }
    return ConsentPanel_instance;
  }
  function CustomChannelEditChannelDialogBox() {
    DialogueBox.call(this, '\u65B0\u589E\u81EA\u8A02\u983B\u9053', '\n        <div style="display:flex;">\n            <div style="text-align:left;font-size:3vh;">\n                <input id="customChannelsSettingChannelNumberInputNumber" type="number" placeholder="\u983B\u9053\u865F\u78BC" style="font-size:3vh;margin:.2vh;width:25vh;" min="-999" max="-1">\n                <input id="customChannelsSettingChannelNameInputText" type="Text" placeholder="\u983B\u9053\u540D\u7A31" style="font-size:3vh;margin:.2vh;">\n                <input id="customChannelsSettingChannelSourceLinkInputText" type="Text" placeholder="\u983B\u9053\u6E90\u9023\u7D50" style="font-size:3vh;margin:.2vh;">\n                <form style="margin:.5vh;">\n                    \u983B\u9053\u6E90\u64AD\u653E\u5668<br>\n                    <input id="customChannelsSettingChannelSourceIframelayerSrcVideoJsHlsInputRadio" type="radio" name="IframelayerSrc" style="width:3vh;height:3vh;" checked>HLS<br>\n                    <input id="customChannelsSettingChannelSourceIframelayerSrcVideoJsDashInputRadio" type="radio" name="IframelayerSrc" style="width:3vh;height:3vh;">DASH<br>\n                    <input id="customChannelsSettingChannelSourceIframelayerSrcYoutubeApiInputRadio" type="radio" name="IframelayerSrc" style="width:3vh;height:3vh;">YoutubeAPI<br>\n                    <input id="customChannelsSettingChannelSourceIframelayerSrcOtherInputRadio" type="radio" name="IframelayerSrc" style="width:3vh;height:3vh;">\n                    <input id="customChannelsSettingChannelSourceIframelayerSrcOtherInputText" type="Text" placeholder="\u5176\u4ED6\u6E90\u64AD\u653E\u5668\u9023\u7D50" style="font-size:3vh;width:25vh;"><br>\n                <\/form>\n                <input id="customChannelsSettingChannelInformationEpgIdInputText" type="Text" placeholder="EPG ID" style="font-size:3vh;margin:.2vh;">\n                <input id="customChannelsSettingChannelInformationSrcInputText" type="Text" placeholder="EPG Src" style="font-size:3vh;margin:.2vh;">\n            <\/div>\n        <\/div>\n        <div>\n            <textarea id="customChannelsSettingChannelXmlString" rows="5" style="font-size:1vh;width:100%;white-space:nowrap;"><\/textarea>\n        <\/div>\n        ');
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9;
    this.channelNumberInputNumber_0 = Kotlin.isType(tmp$ = document.getElementById('customChannelsSettingChannelNumberInputNumber'), HTMLInputElement) ? tmp$ : throwCCE();
    this.channelNameInputText_0 = Kotlin.isType(tmp$_0 = document.getElementById('customChannelsSettingChannelNameInputText'), HTMLInputElement) ? tmp$_0 : throwCCE();
    this.channelSourceLinkInputText_0 = Kotlin.isType(tmp$_1 = document.getElementById('customChannelsSettingChannelSourceLinkInputText'), HTMLInputElement) ? tmp$_1 : throwCCE();
    this.channelSourceIframelayerSrcVideoJsHlsInputRadio_0 = Kotlin.isType(tmp$_2 = document.getElementById('customChannelsSettingChannelSourceIframelayerSrcVideoJsHlsInputRadio'), HTMLInputElement) ? tmp$_2 : throwCCE();
    this.channelSourceIframelayerSrcVideoJsDashInputRadio_0 = Kotlin.isType(tmp$_3 = document.getElementById('customChannelsSettingChannelSourceIframelayerSrcVideoJsDashInputRadio'), HTMLInputElement) ? tmp$_3 : throwCCE();
    this.channelSourceIframelayerSrcYoutubeApiInputRadio_0 = Kotlin.isType(tmp$_4 = document.getElementById('customChannelsSettingChannelSourceIframelayerSrcYoutubeApiInputRadio'), HTMLInputElement) ? tmp$_4 : throwCCE();
    this.channelSourceIframelayerSrcOtherInputRadio_0 = Kotlin.isType(tmp$_5 = document.getElementById('customChannelsSettingChannelSourceIframelayerSrcOtherInputRadio'), HTMLInputElement) ? tmp$_5 : throwCCE();
    this.channelSourceIframelayerSrcOtherInputText_0 = Kotlin.isType(tmp$_6 = document.getElementById('customChannelsSettingChannelSourceIframelayerSrcOtherInputText'), HTMLInputElement) ? tmp$_6 : throwCCE();
    this.channelInformationEpgIdInputText_0 = Kotlin.isType(tmp$_7 = document.getElementById('customChannelsSettingChannelInformationEpgIdInputText'), HTMLInputElement) ? tmp$_7 : throwCCE();
    this.channelInformationSrcInputText_0 = Kotlin.isType(tmp$_8 = document.getElementById('customChannelsSettingChannelInformationSrcInputText'), HTMLInputElement) ? tmp$_8 : throwCCE();
    this.channelXmlString_0 = Kotlin.isType(tmp$_9 = document.getElementById('customChannelsSettingChannelXmlString'), HTMLTextAreaElement) ? tmp$_9 : throwCCE();
    this.okButton.onclick = CustomChannelEditChannelDialogBox_init$lambda(this);
    this.initChannelNumberInputNumber_0();
    this.initChannelNameInputText_0();
    this.initChannelSourceLinkInputText_0();
    this.initChannelSourceIframelayerSrcInputRadio_0();
    this.initChannelInformationEpgIdInputText_0();
    this.initChannelInformationSrcInputText_0();
    this.initChannelXmlString_0();
  }
  function CustomChannelEditChannelDialogBox$getEditChannelDialogBoxInformation$lambda(number) {
    if (-1 < number) {
      return -number | 0;
    }
    return number;
  }
  function CustomChannelEditChannelDialogBox$getEditChannelDialogBoxInformation$lambda_0(this$CustomChannelEditChannelDialogBox) {
    return function () {
      var tmp$;
      if (true === this$CustomChannelEditChannelDialogBox.channelSourceIframelayerSrcVideoJsHlsInputRadio_0.checked)
        tmp$ = 'iframePlayer/videojs_hls.html';
      else if (true === this$CustomChannelEditChannelDialogBox.channelSourceIframelayerSrcVideoJsDashInputRadio_0.checked)
        tmp$ = 'iframePlayer/videojs_dash.html';
      else if (true === this$CustomChannelEditChannelDialogBox.channelSourceIframelayerSrcYoutubeApiInputRadio_0.checked)
        tmp$ = 'iframePlayer/youtube_api.html';
      else if (true === this$CustomChannelEditChannelDialogBox.channelSourceIframelayerSrcOtherInputRadio_0.checked) {
        println(this$CustomChannelEditChannelDialogBox.channelSourceIframelayerSrcOtherInputText_0.value);
        tmp$ = this$CustomChannelEditChannelDialogBox.channelSourceIframelayerSrcOtherInputText_0.value;
      }
       else {
        tmp$ = '';
      }
      return tmp$;
    };
  }
  CustomChannelEditChannelDialogBox.prototype.getEditChannelDialogBoxInformation_0 = function () {
    var tmp$;
    var mustNegativeNumber = CustomChannelEditChannelDialogBox$getEditChannelDialogBoxInformation$lambda;
    var getIframelayerSrc = CustomChannelEditChannelDialogBox$getEditChannelDialogBoxInformation$lambda_0(this);
    return new Channel(mustNegativeNumber((tmp$ = toIntOrNull(this.channelNumberInputNumber_0.value)) != null ? tmp$ : -1), new MultiLanguageString(ArrayLinkList_init([new MultiLanguageString$LanguageString('', this.channelNameInputText_0.value)])), ArrayLinkList_init([new Channel$Source(getIframelayerSrc(), getIframelayerSrc(), this.channelSourceLinkInputText_0.value)]), new Channel$Information(this.channelInformationEpgIdInputText_0.value, this.channelInformationSrcInputText_0.value));
  };
  CustomChannelEditChannelDialogBox.prototype.setChannelXmlString_0 = function () {
    println(CustomChannels_getInstance().setChannelToXMLString_e3jjlp$(this.getEditChannelDialogBoxInformation_0()));
    this.channelXmlString_0.value = CustomChannels_getInstance().setChannelToXMLString_e3jjlp$(this.getEditChannelDialogBoxInformation_0());
  };
  function CustomChannelEditChannelDialogBox$initChannelNumberInputNumber$lambda(this$CustomChannelEditChannelDialogBox) {
    return function (event) {
      this$CustomChannelEditChannelDialogBox.setChannelXmlString_0();
    };
  }
  function CustomChannelEditChannelDialogBox$initChannelNumberInputNumber$lambda_0(this$CustomChannelEditChannelDialogBox) {
    return function (event) {
      this$CustomChannelEditChannelDialogBox.setChannelXmlString_0();
    };
  }
  function CustomChannelEditChannelDialogBox$initChannelNumberInputNumber$lambda_1(this$CustomChannelEditChannelDialogBox) {
    return function (event) {
      this$CustomChannelEditChannelDialogBox.setChannelXmlString_0();
    };
  }
  CustomChannelEditChannelDialogBox.prototype.initChannelNumberInputNumber_0 = function () {
    this.channelNumberInputNumber_0.onclick = CustomChannelEditChannelDialogBox$initChannelNumberInputNumber$lambda(this);
    this.channelNumberInputNumber_0.onchange = CustomChannelEditChannelDialogBox$initChannelNumberInputNumber$lambda_0(this);
    this.channelNumberInputNumber_0.onkeyup = CustomChannelEditChannelDialogBox$initChannelNumberInputNumber$lambda_1(this);
  };
  function CustomChannelEditChannelDialogBox$initChannelNameInputText$lambda(this$CustomChannelEditChannelDialogBox) {
    return function (event) {
      this$CustomChannelEditChannelDialogBox.setChannelXmlString_0();
    };
  }
  CustomChannelEditChannelDialogBox.prototype.initChannelNameInputText_0 = function () {
    this.channelNameInputText_0.onkeyup = CustomChannelEditChannelDialogBox$initChannelNameInputText$lambda(this);
  };
  function CustomChannelEditChannelDialogBox$initChannelSourceLinkInputText$lambda(this$CustomChannelEditChannelDialogBox) {
    return function (event) {
      this$CustomChannelEditChannelDialogBox.setChannelXmlString_0();
    };
  }
  CustomChannelEditChannelDialogBox.prototype.initChannelSourceLinkInputText_0 = function () {
    this.channelSourceLinkInputText_0.onkeyup = CustomChannelEditChannelDialogBox$initChannelSourceLinkInputText$lambda(this);
  };
  function CustomChannelEditChannelDialogBox$initChannelSourceIframelayerSrcInputRadio$lambda(this$CustomChannelEditChannelDialogBox) {
    return function (event) {
      this$CustomChannelEditChannelDialogBox.setChannelXmlString_0();
    };
  }
  function CustomChannelEditChannelDialogBox$initChannelSourceIframelayerSrcInputRadio$lambda_0(this$CustomChannelEditChannelDialogBox) {
    return function (event) {
      this$CustomChannelEditChannelDialogBox.setChannelXmlString_0();
    };
  }
  function CustomChannelEditChannelDialogBox$initChannelSourceIframelayerSrcInputRadio$lambda_1(this$CustomChannelEditChannelDialogBox) {
    return function (event) {
      this$CustomChannelEditChannelDialogBox.setChannelXmlString_0();
    };
  }
  function CustomChannelEditChannelDialogBox$initChannelSourceIframelayerSrcInputRadio$lambda_2(this$CustomChannelEditChannelDialogBox) {
    return function (event) {
      this$CustomChannelEditChannelDialogBox.setChannelXmlString_0();
    };
  }
  function CustomChannelEditChannelDialogBox$initChannelSourceIframelayerSrcInputRadio$lambda_3(this$CustomChannelEditChannelDialogBox) {
    return function (event) {
      this$CustomChannelEditChannelDialogBox.setChannelXmlString_0();
    };
  }
  CustomChannelEditChannelDialogBox.prototype.initChannelSourceIframelayerSrcInputRadio_0 = function () {
    this.channelSourceIframelayerSrcVideoJsHlsInputRadio_0.onchange = CustomChannelEditChannelDialogBox$initChannelSourceIframelayerSrcInputRadio$lambda(this);
    this.channelSourceIframelayerSrcVideoJsDashInputRadio_0.onchange = CustomChannelEditChannelDialogBox$initChannelSourceIframelayerSrcInputRadio$lambda_0(this);
    this.channelSourceIframelayerSrcYoutubeApiInputRadio_0.onchange = CustomChannelEditChannelDialogBox$initChannelSourceIframelayerSrcInputRadio$lambda_1(this);
    this.channelSourceIframelayerSrcOtherInputRadio_0.onchange = CustomChannelEditChannelDialogBox$initChannelSourceIframelayerSrcInputRadio$lambda_2(this);
    this.channelSourceIframelayerSrcOtherInputText_0.onkeyup = CustomChannelEditChannelDialogBox$initChannelSourceIframelayerSrcInputRadio$lambda_3(this);
  };
  function CustomChannelEditChannelDialogBox$initChannelInformationEpgIdInputText$lambda(this$CustomChannelEditChannelDialogBox) {
    return function (event) {
      this$CustomChannelEditChannelDialogBox.setChannelXmlString_0();
    };
  }
  CustomChannelEditChannelDialogBox.prototype.initChannelInformationEpgIdInputText_0 = function () {
    this.channelInformationEpgIdInputText_0.onkeyup = CustomChannelEditChannelDialogBox$initChannelInformationEpgIdInputText$lambda(this);
  };
  function CustomChannelEditChannelDialogBox$initChannelInformationSrcInputText$lambda(this$CustomChannelEditChannelDialogBox) {
    return function (event) {
      this$CustomChannelEditChannelDialogBox.setChannelXmlString_0();
    };
  }
  CustomChannelEditChannelDialogBox.prototype.initChannelInformationSrcInputText_0 = function () {
    this.channelInformationSrcInputText_0.onkeyup = CustomChannelEditChannelDialogBox$initChannelInformationSrcInputText$lambda(this);
  };
  function CustomChannelEditChannelDialogBox$initChannelXmlString$lambda(this$CustomChannelEditChannelDialogBox) {
    return function (event) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
      var channel = getOrNull(CustomChannels_getInstance().parseChannels_61zpoe$(this$CustomChannelEditChannelDialogBox.channelXmlString_0.value), 0);
      this$CustomChannelEditChannelDialogBox.channelNumberInputNumber_0.value = toString(channel != null ? channel.number : null);
      this$CustomChannelEditChannelDialogBox.channelNameInputText_0.value = toString(channel != null ? channel.name : null);
      this$CustomChannelEditChannelDialogBox.channelSourceLinkInputText_0.value = toString((tmp$_0 = (tmp$ = channel != null ? channel.sources : null) != null ? tmp$.node : null) != null ? tmp$_0.link : null);
      switch ((tmp$_2 = (tmp$_1 = channel != null ? channel.sources : null) != null ? tmp$_1.node : null) != null ? tmp$_2.iFramePlayerSrc : null) {
        case 'iframePlayer/videojs_hls.html':
          this$CustomChannelEditChannelDialogBox.channelSourceIframelayerSrcVideoJsHlsInputRadio_0.checked = true;
          break;
        case 'iframePlayer/videojs_dash.html':
          this$CustomChannelEditChannelDialogBox.channelSourceIframelayerSrcVideoJsDashInputRadio_0.checked = true;
          break;
        case 'iframePlayer/youtube_api.html':
          this$CustomChannelEditChannelDialogBox.channelSourceIframelayerSrcYoutubeApiInputRadio_0.checked = true;
          break;
        default:this$CustomChannelEditChannelDialogBox.channelSourceIframelayerSrcOtherInputRadio_0.checked = true;
          this$CustomChannelEditChannelDialogBox.channelSourceIframelayerSrcOtherInputText_0.value = toString((tmp$_4 = (tmp$_3 = channel != null ? channel.sources : null) != null ? tmp$_3.node : null) != null ? tmp$_4.iFramePlayerSrc : null);
          break;
      }
      this$CustomChannelEditChannelDialogBox.channelInformationEpgIdInputText_0.value = toString((tmp$_5 = channel != null ? channel.information : null) != null ? tmp$_5.epgID : null);
      this$CustomChannelEditChannelDialogBox.channelInformationSrcInputText_0.value = toString((tmp$_6 = channel != null ? channel.information : null) != null ? tmp$_6.src : null);
    };
  }
  CustomChannelEditChannelDialogBox.prototype.initChannelXmlString_0 = function () {
    this.channelXmlString_0.onkeyup = CustomChannelEditChannelDialogBox$initChannelXmlString$lambda(this);
  };
  function CustomChannelEditChannelDialogBox_init$lambda(this$CustomChannelEditChannelDialogBox) {
    return function (event) {
      CustomChannels_getInstance().setCustomChannels_a1yrdc$(ArrayLinkList_init([this$CustomChannelEditChannelDialogBox.getEditChannelDialogBoxInformation_0()]));
    };
  }
  CustomChannelEditChannelDialogBox.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CustomChannelEditChannelDialogBox',
    interfaces: [DialogueBox]
  };
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function CustomChannels() {
    CustomChannels_instance = this;
    ChannelsReader.call(this);
    println('Init CustomChannels');
  }
  CustomChannels.prototype.setSourceToXMLString_0 = function (source) {
    return '<source description=' + '"' + source.description + '"' + ' iframeplayersrc=' + '"' + source.iFramePlayerSrc + '"' + ' link=' + '"' + source.link + '"' + '/>';
  };
  CustomChannels.prototype.setSourcesToXMLString_0 = function (sources) {
    var tmp$;
    var sourcesString = '';
    tmp$ = sources.iterator();
    while (tmp$.hasNext()) {
      var source = tmp$.next();
      sourcesString += this.setSourceToXMLString_0(source);
    }
    return sourcesString;
  };
  CustomChannels.prototype.setChannelToXMLString_e3jjlp$ = function (channel) {
    return '<channel number=' + '"' + channel.number + '"' + '>' + '\n' + '    <name lang=' + '"' + '"' + '>' + channel.name + '<\/name>' + '\n' + '    ' + this.setSourcesToXMLString_0(channel.sources) + '\n' + '    <information epgid=' + '"' + channel.information.epgID + '"' + ' src=' + '"' + channel.information.src + '"' + '/>' + '\n' + '<\/channel>';
  };
  CustomChannels.prototype.setChannelsToXMLString_a1yrdc$ = function (customChannels) {
    var tmp$;
    var channelsString = '';
    tmp$ = customChannels.iterator();
    while (tmp$.hasNext()) {
      var channel = tmp$.next();
      channelsString += this.setChannelToXMLString_e3jjlp$(channel);
    }
    return channelsString;
  };
  CustomChannels.prototype.getCustomChannels = function () {
    var tmp$;
    return this.parseChannels_61zpoe$((tmp$ = localStorage.getItem('customChannels')) != null ? tmp$ : '');
  };
  function CustomChannels$setCustomChannels$lambda(channel) {
    return channel.number;
  }
  CustomChannels.prototype.setCustomChannels_a1yrdc$ = function (customChannels) {
    var tmp$;
    var currentCustomChannels = this.getCustomChannels();
    tmp$ = customChannels.iterator();
    while (tmp$.hasNext()) {
      var channel = tmp$.next();
      currentCustomChannels.add_11rb$(channel);
    }
    if (currentCustomChannels.size > 1) {
      sortWith(currentCustomChannels, new Comparator$ObjectLiteral(compareBy$lambda(CustomChannels$setCustomChannels$lambda)));
    }
    localStorage.setItem('customChannels', this.setChannelsToXMLString_a1yrdc$(currentCustomChannels));
    updateChannels();
  };
  CustomChannels.prototype.setCustomChannels_61zpoe$ = function (customChannelsXMLString) {
    this.setCustomChannels_a1yrdc$(this.parseChannels_61zpoe$(customChannelsXMLString));
  };
  function CustomChannels$setCustomChannel$lambda(channel) {
    return channel.number;
  }
  CustomChannels.prototype.setCustomChannel_e3jjlp$ = function (customChannel) {
    var currentCustomChannels = this.getCustomChannels();
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      tmp$ = currentCustomChannels.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.number === customChannel.number) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    var isNumberHaveChannel = firstOrNull$result != null;
    if (!isNumberHaveChannel) {
      currentCustomChannels.add_11rb$(customChannel);
    }
     else {
      return false;
    }
    if (currentCustomChannels.size > 1) {
      sortWith(currentCustomChannels, new Comparator$ObjectLiteral(compareBy$lambda(CustomChannels$setCustomChannel$lambda)));
    }
    localStorage.setItem('customChannels', this.setChannelsToXMLString_a1yrdc$(currentCustomChannels));
    updateChannels();
    return true;
  };
  CustomChannels.prototype.addCustomChannel_e3jjlp$ = function (customChannel) {
    return this.setCustomChannel_e3jjlp$(customChannel);
  };
  CustomChannels.prototype.removeCustomChannel_e3jjlp$ = function (customChannel) {
    var currentCustomChannels = this.getCustomChannels();
    currentCustomChannels.remove_11rb$(customChannel);
    localStorage.setItem('customChannels', this.setChannelsToXMLString_a1yrdc$(currentCustomChannels));
    updateChannels();
  };
  CustomChannels.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CustomChannels',
    interfaces: [ChannelsReader]
  };
  var CustomChannels_instance = null;
  function CustomChannels_getInstance() {
    if (CustomChannels_instance === null) {
      new CustomChannels();
    }
    return CustomChannels_instance;
  }
  function CustomChannelsSettingWindow() {
    CustomChannelsSettingWindow_instance = this;
    Window.call(this, 'customChannelsSettingWindow', 'customChannelsSettingWindowHideButton');
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    this.hideButton_0 = Kotlin.isType(tmp$ = document.getElementById('customChannelsSettingWindowHideButton'), HTMLButtonElement) ? tmp$ : throwCCE();
    this.channelsSelect_0 = Kotlin.isType(tmp$_0 = document.getElementById('customChannelsSettingChannelsSelect'), HTMLSelectElement) ? tmp$_0 : throwCCE();
    this.channelAddButton_0 = Kotlin.isType(tmp$_1 = document.getElementById('customChannelsSettingChannelAddButton'), HTMLInputElement) ? tmp$_1 : throwCCE();
    this.channelRemoveButton_0 = Kotlin.isType(tmp$_2 = document.getElementById('customChannelsSettingChannelRemoveButton'), HTMLInputElement) ? tmp$_2 : throwCCE();
    this.channelMoveUpButton_0 = Kotlin.isType(tmp$_3 = document.getElementById('customChannelsSettingChannelMoveUpButton'), HTMLInputElement) ? tmp$_3 : throwCCE();
    this.channelMoveDownButton_0 = Kotlin.isType(tmp$_4 = document.getElementById('customChannelsSettingChannelMoveDownButton'), HTMLInputElement) ? tmp$_4 : throwCCE();
    this.channelEditButton_0 = Kotlin.isType(tmp$_5 = document.getElementById('customChannelsSettingChannelEditButton'), HTMLInputElement) ? tmp$_5 : throwCCE();
    this.channelsImportButton_0 = Kotlin.isType(tmp$_6 = document.getElementById('customChannelsSettingChannelImportButton'), HTMLInputElement) ? tmp$_6 : throwCCE();
    this.channelsExportButton_0 = Kotlin.isType(tmp$_7 = document.getElementById('customChannelsSettingChannelExportButton'), HTMLInputElement) ? tmp$_7 : throwCCE();
    this.initChannelsSelect_1();
    this.hideButton_0.onclick = CustomChannelsSettingWindow_init$lambda(this);
    this.channelAddButton_0.onclick = CustomChannelsSettingWindow_init$lambda_0(this);
    this.channelRemoveButton_0.onclick = CustomChannelsSettingWindow_init$lambda_1(this);
    this.channelMoveUpButton_0.onclick = CustomChannelsSettingWindow_init$lambda_2(this);
    this.channelMoveDownButton_0.onclick = CustomChannelsSettingWindow_init$lambda_3(this);
  }
  CustomChannelsSettingWindow.prototype.createChannelOption_0 = function (channel) {
    var tmp$;
    var option = Kotlin.isType(tmp$ = document.createElement('option'), HTMLOptionElement) ? tmp$ : throwCCE();
    option.text = padStart(channel.number.toString(), 3, 48) + ' ' + channel.name;
    option.value = channel.number.toString();
    return option;
  };
  CustomChannelsSettingWindow.prototype.initChannelsSelect_0 = function (channels) {
    var tmp$;
    this.channelsSelect_0.innerHTML = '';
    tmp$ = channels.iterator();
    while (tmp$.hasNext()) {
      var channel = tmp$.next();
      this.channelsSelect_0.append(this.createChannelOption_0(channel));
    }
  };
  CustomChannelsSettingWindow.prototype.initChannelsSelect_1 = function () {
    this.initChannelsSelect_0(CustomChannels_getInstance().getCustomChannels());
  };
  CustomChannelsSettingWindow.prototype.getChannelFromChannelNumber_0 = function (channelNumber) {
    var tmp$;
    var customChannels = CustomChannels_getInstance().getCustomChannels();
    tmp$ = customChannels.iterator();
    while (tmp$.hasNext()) {
      var channel = tmp$.next();
      if (channel.number === channelNumber) {
        return channel;
      }
    }
    return null;
  };
  CustomChannelsSettingWindow.prototype.changeChannelNumber_0 = function (currentNumber, changeToNumber) {
    var channel = this.getChannelFromChannelNumber_0(currentNumber);
    if (channel != null) {
      CustomChannels_getInstance().setCustomChannel_e3jjlp$(new Channel(changeToNumber, channel.name, channel.sources, channel.information));
    }
  };
  CustomChannelsSettingWindow.prototype.optionSortBy_0 = function (by) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var options = this.channelsSelect_0.options;
    tmp$ = options.length - 1 | 0;
    for (var i = 0; i < tmp$; i++) {
      tmp$_0 = options.length;
      for (var j = i + 1 | 0; j < tmp$_0; j++) {
        var optionI = Kotlin.isType(tmp$_2 = (tmp$_1 = options[i]) != null ? tmp$_1 : document.createElement('option'), HTMLOptionElement) ? tmp$_2 : throwCCE();
        var optionJ = Kotlin.isType(tmp$_4 = (tmp$_3 = options[j]) != null ? tmp$_3 : document.createElement('option'), HTMLOptionElement) ? tmp$_4 : throwCCE();
        if (by(optionI) < by(optionJ)) {
          this.channelsSelect_0[i] = optionJ;
          this.channelsSelect_0[j] = optionI;
        }
      }
    }
  };
  function CustomChannelsSettingWindow$sortChannelsSelect$lambda(option) {
    var tmp$;
    return (tmp$ = toIntOrNull(option.value)) != null ? tmp$ : 0;
  }
  CustomChannelsSettingWindow.prototype.sortChannelsSelect_0 = function () {
    this.optionSortBy_0(CustomChannelsSettingWindow$sortChannelsSelect$lambda);
  };
  CustomChannelsSettingWindow.prototype.saveChannelsSelect_0 = function () {
  };
  function CustomChannelsSettingWindow_init$lambda(this$CustomChannelsSettingWindow) {
    return function (event) {
      this$CustomChannelsSettingWindow.hide();
    };
  }
  function CustomChannelsSettingWindow_init$lambda_0(this$CustomChannelsSettingWindow) {
    return function (event) {
      new CustomChannelEditChannelDialogBox();
      this$CustomChannelsSettingWindow.initChannelsSelect_1();
    };
  }
  function CustomChannelsSettingWindow_init$lambda_1(this$CustomChannelsSettingWindow) {
    return function (event) {
      var tmp$, tmp$_0;
      var options = this$CustomChannelsSettingWindow.channelsSelect_0.selectedOptions;
      tmp$ = options.length;
      for (var i = 0; i < tmp$; i++) {
        var channelNumber = toIntOrNull((Kotlin.isType(tmp$_0 = options[i], HTMLOptionElement) ? tmp$_0 : throwCCE()).value);
        if (channelNumber != null) {
          var channel = this$CustomChannelsSettingWindow.getChannelFromChannelNumber_0(channelNumber);
          if (channel != null) {
            CustomChannels_getInstance().removeCustomChannel_e3jjlp$(channel);
          }
        }
      }
      this$CustomChannelsSettingWindow.channelsSelect_0.remove(this$CustomChannelsSettingWindow.channelsSelect_0.selectedIndex);
    };
  }
  function CustomChannelsSettingWindow_init$lambda_2(this$CustomChannelsSettingWindow) {
    return function (event) {
      var tmp$, tmp$_0, tmp$_1;
      if (0 < this$CustomChannelsSettingWindow.channelsSelect_0.selectedIndex) {
        var optionAIndex = this$CustomChannelsSettingWindow.channelsSelect_0.selectedIndex;
        var optionBIndex = this$CustomChannelsSettingWindow.channelsSelect_0.selectedIndex - 1 | 0;
        var options = ArrayList_init();
        tmp$ = this$CustomChannelsSettingWindow.channelsSelect_0.length;
        for (var index = 0; index < tmp$; index++) {
          options.add_11rb$(Kotlin.isType(tmp$_0 = this$CustomChannelsSettingWindow.channelsSelect_0.options[index], HTMLOptionElement) ? tmp$_0 : throwCCE());
        }
        var optionA = options.get_za3lpa$(optionAIndex);
        var optionB = options.get_za3lpa$(optionBIndex);
        options.set_wxm5ur$(optionAIndex, optionB);
        options.set_wxm5ur$(optionBIndex, optionA);
        this$CustomChannelsSettingWindow.channelsSelect_0.innerHTML = '';
        tmp$_1 = options.size;
        for (var index_0 = 0; index_0 < tmp$_1; index_0++) {
          var option = getOrNull(options, index_0);
          if (option != null) {
            this$CustomChannelsSettingWindow.channelsSelect_0.append(option);
          }
        }
      }
    };
  }
  function CustomChannelsSettingWindow_init$lambda_3(this$CustomChannelsSettingWindow) {
    return function (event) {
      var tmp$, tmp$_0, tmp$_1;
      if (this$CustomChannelsSettingWindow.channelsSelect_0.selectedIndex < this$CustomChannelsSettingWindow.channelsSelect_0.length) {
        var optionAIndex = this$CustomChannelsSettingWindow.channelsSelect_0.selectedIndex;
        var optionBIndex = this$CustomChannelsSettingWindow.channelsSelect_0.selectedIndex + 1 | 0;
        var options = ArrayList_init();
        tmp$ = this$CustomChannelsSettingWindow.channelsSelect_0.length;
        for (var index = 0; index < tmp$; index++) {
          options.add_11rb$(Kotlin.isType(tmp$_0 = this$CustomChannelsSettingWindow.channelsSelect_0.options[index], HTMLOptionElement) ? tmp$_0 : throwCCE());
        }
        var optionA = options.get_za3lpa$(optionAIndex);
        var optionB = options.get_za3lpa$(optionBIndex);
        options.set_wxm5ur$(optionAIndex, optionB);
        options.set_wxm5ur$(optionBIndex, optionA);
        this$CustomChannelsSettingWindow.channelsSelect_0.innerHTML = '';
        tmp$_1 = options.size;
        for (var index_0 = 0; index_0 < tmp$_1; index_0++) {
          var option = getOrNull(options, index_0);
          if (option != null) {
            this$CustomChannelsSettingWindow.channelsSelect_0.append(option);
          }
        }
      }
    };
  }
  CustomChannelsSettingWindow.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CustomChannelsSettingWindow',
    interfaces: [Window]
  };
  var CustomChannelsSettingWindow_instance = null;
  function CustomChannelsSettingWindow_getInstance() {
    if (CustomChannelsSettingWindow_instance === null) {
      new CustomChannelsSettingWindow();
    }
    return CustomChannelsSettingWindow_instance;
  }
  function Dialogue(language, agree, programmeSeason, programmeTotalSeason, programmeEpisode, programmeTotalEpisode, programmePart, programmeTotalPart, canNotFind, canNotReadData) {
    Dialogue$Companion_getInstance();
    if (language === void 0)
      language = '';
    if (agree === void 0)
      agree = '';
    if (programmeSeason === void 0)
      programmeSeason = '';
    if (programmeTotalSeason === void 0)
      programmeTotalSeason = '';
    if (programmeEpisode === void 0)
      programmeEpisode = '';
    if (programmeTotalEpisode === void 0)
      programmeTotalEpisode = '';
    if (programmePart === void 0)
      programmePart = '';
    if (programmeTotalPart === void 0)
      programmeTotalPart = '';
    if (canNotFind === void 0)
      canNotFind = '';
    if (canNotReadData === void 0)
      canNotReadData = '';
    this.language = language;
    this.agree = agree;
    this.programmeSeason = programmeSeason;
    this.programmeTotalSeason = programmeTotalSeason;
    this.programmeEpisode = programmeEpisode;
    this.programmeTotalEpisode = programmeTotalEpisode;
    this.programmePart = programmePart;
    this.programmeTotalPart = programmeTotalPart;
    this.canNotFind = canNotFind;
    this.canNotReadData = canNotReadData;
  }
  function Dialogue$Companion() {
    Dialogue$Companion_instance = this;
    this.dialogues_0 = null;
  }
  Dialogue$Companion.prototype.getDialoguesNodeID_0 = function (dialogues, language) {
    var tmp$;
    var dialogueNodeID = 0;
    tmp$ = dialogues.iterator();
    while (tmp$.hasNext()) {
      var dialogue = tmp$.next();
      dialogueNodeID = dialogueNodeID + 1 | 0;
      if (language === dialogue.language) {
        return dialogueNodeID;
      }
    }
    return 0;
  };
  function Dialogue$Companion$getDialogues$lambda$ObjectLiteral() {
  }
  Dialogue$Companion$getDialogues$lambda$ObjectLiteral.prototype.onNodeChanged_t4rudg$ = function (preChangeNodeID, postChangeNodeID, preChangeNode, postChangeNode) {
    localStorage.setItem('SelectedLanguage', toString(postChangeNodeID));
  };
  Dialogue$Companion$getDialogues$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ArrayLinkList$OnNodeEventListener]
  };
  function Dialogue$Companion$getDialogues$lambda(this$Dialogue$, closure$onLoadedDialogueListener) {
    return function (xmlHttp) {
      var tmp$, tmp$_0, tmp$_1;
      if (xmlHttp.responseText !== '') {
        var dialogues = ArrayLinkList_init_1(JSON.parse(xmlHttp.responseText));
        dialogues.addOnNodeEventListener_ljxrtv$(new Dialogue$Companion$getDialogues$lambda$ObjectLiteral());
        dialogues.designated_za3lpa$((tmp$_0 = (tmp$ = localStorage.getItem('SelectedLanguage')) != null ? toInt(tmp$) : null) != null ? tmp$_0 : 0);
        this$Dialogue$.dialogues_0 = dialogues;
        closure$onLoadedDialogueListener((tmp$_1 = this$Dialogue$.dialogues_0) != null ? tmp$_1 : ArrayLinkList_init([]));
      }
    };
  }
  function Dialogue$Companion$getDialogues$lambda_0() {
  }
  Dialogue$Companion.prototype.getDialogues_fs1aqo$ = function (onLoadedDialogueListener) {
    var tmp$;
    if (this.dialogues_0 == null) {
      LoadFile_getInstance().load_h2maru$(Dialogue$Companion$getDialogues$lambda(this, onLoadedDialogueListener), Dialogue$Companion$getDialogues$lambda_0, ['data/dialogue.json']);
    }
     else {
      onLoadedDialogueListener((tmp$ = this.dialogues_0) != null ? tmp$ : ArrayLinkList_init([]));
    }
  };
  Dialogue$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Dialogue$Companion_instance = null;
  function Dialogue$Companion_getInstance() {
    if (Dialogue$Companion_instance === null) {
      new Dialogue$Companion();
    }
    return Dialogue$Companion_instance;
  }
  Dialogue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Dialogue',
    interfaces: []
  };
  function DialogueBox(title, dialogueHTML, okButtonString, okButtonScript, cancelButtonString, cancelButtonScript) {
    if (title === void 0)
      title = '';
    if (okButtonString === void 0)
      okButtonString = 'OK';
    if (okButtonScript === void 0)
      okButtonScript = null;
    if (cancelButtonString === void 0)
      cancelButtonString = 'Cancel';
    if (cancelButtonScript === void 0)
      cancelButtonScript = null;
    UserInterface.call(this, 'dialogueBox', void 0, void 0, void 0, void 0, void 0, null);
    this.title = title;
    this.dialogueHTML = dialogueHTML;
    this.okButtonString = okButtonString;
    this.okButtonScript = okButtonScript;
    this.cancelButtonString = cancelButtonString;
    this.cancelButtonScript = cancelButtonScript;
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.titleDiv = Kotlin.isType(tmp$ = document.getElementById('dialogueBoxTitleDiv'), HTMLDivElement) ? tmp$ : throwCCE();
    this.dialogueDiv = Kotlin.isType(tmp$_0 = document.getElementById('dialogueBoxDialogueDiv'), HTMLDivElement) ? tmp$_0 : throwCCE();
    this.okButton = Kotlin.isType(tmp$_1 = document.getElementById('dialogueBoxOkButton'), HTMLButtonElement) ? tmp$_1 : throwCCE();
    this.cancelButton = Kotlin.isType(tmp$_2 = document.getElementById('dialogueBoxCancelButton'), HTMLButtonElement) ? tmp$_2 : throwCCE();
    this.titleDiv.innerHTML = this.title;
    this.dialogueDiv.innerHTML = this.dialogueHTML;
    this.okButton.innerHTML = this.okButtonString;
    this.okButton.onclick = DialogueBox_init$lambda(this);
    this.cancelButton.innerHTML = this.cancelButtonString;
    this.cancelButton.onclick = DialogueBox_init$lambda_0(this);
    this.show();
  }
  function DialogueBox_init$lambda(this$DialogueBox) {
    return function (event) {
      var tmp$;
      (tmp$ = this$DialogueBox.okButtonScript) != null ? tmp$() : null;
      this$DialogueBox.hide();
    };
  }
  function DialogueBox_init$lambda_0(this$DialogueBox) {
    return function (event) {
      var tmp$;
      (tmp$ = this$DialogueBox.cancelButtonScript) != null ? tmp$() : null;
      this$DialogueBox.hide();
    };
  }
  DialogueBox.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DialogueBox',
    interfaces: [UserInterface]
  };
  function EPG() {
    EPG_instance = this;
    UserInterface.call(this, 'epg');
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20, tmp$_21, tmp$_22;
    this.epg_0 = Kotlin.isType(tmp$ = document.getElementById('epg'), HTMLElement) ? tmp$ : throwCCE();
    this.displayCurrentDateBox_0 = Kotlin.isType(tmp$_0 = document.getElementById('epgDisplayCurrentDateBox'), HTMLElement) ? tmp$_0 : throwCCE();
    this.hideButton_0 = Kotlin.isType(tmp$_1 = document.getElementById('epgHideButton'), HTMLElement) ? tmp$_1 : throwCCE();
    this.programmeInformationTitle_0 = Kotlin.isType(tmp$_2 = document.getElementById('epgProgrammeInformationTitle'), HTMLElement) ? tmp$_2 : throwCCE();
    this.programmeInformationSubTitle_0 = Kotlin.isType(tmp$_3 = document.getElementById('epgProgrammeInformationSubTitle'), HTMLElement) ? tmp$_3 : throwCCE();
    this.programmeInformationDesc_0 = Kotlin.isType(tmp$_4 = document.getElementById('epgProgrammeInformationDesc'), HTMLElement) ? tmp$_4 : throwCCE();
    this.programmeInformationCredit_0 = Kotlin.isType(tmp$_5 = document.getElementById('epgProgrammeInformationCredit'), HTMLElement) ? tmp$_5 : throwCCE();
    this.programmeInformationDate_0 = Kotlin.isType(tmp$_6 = document.getElementById('epgProgrammeInformationDate'), HTMLElement) ? tmp$_6 : throwCCE();
    this.programmeInformationCategory_0 = Kotlin.isType(tmp$_7 = document.getElementById('epgProgrammeInformationCategory'), HTMLElement) ? tmp$_7 : throwCCE();
    this.programmeInformationKeyword_0 = Kotlin.isType(tmp$_8 = document.getElementById('epgProgrammeInformationKeyword'), HTMLElement) ? tmp$_8 : throwCCE();
    this.programmeInformationLanguage_0 = Kotlin.isType(tmp$_9 = document.getElementById('epgProgrammeInformationLanguage'), HTMLElement) ? tmp$_9 : throwCCE();
    this.programmeInformationOrigLanguage_0 = Kotlin.isType(tmp$_10 = document.getElementById('epgProgrammeInformationOrigLanguage'), HTMLElement) ? tmp$_10 : throwCCE();
    this.programmeInformationLength_0 = Kotlin.isType(tmp$_11 = document.getElementById('epgProgrammeInformationLength'), HTMLElement) ? tmp$_11 : throwCCE();
    this.programmeInformationIcon_0 = Kotlin.isType(tmp$_12 = document.getElementById('epgProgrammeInformationIcon'), HTMLImageElement) ? tmp$_12 : throwCCE();
    this.programmeInformationUrl_0 = Kotlin.isType(tmp$_13 = document.getElementById('epgProgrammeInformationUrl'), HTMLElement) ? tmp$_13 : throwCCE();
    this.programmeInformationCountry_0 = Kotlin.isType(tmp$_14 = document.getElementById('epgProgrammeInformationCountry'), HTMLElement) ? tmp$_14 : throwCCE();
    this.programmeInformationEpisodeNum_0 = Kotlin.isType(tmp$_15 = document.getElementById('epgProgrammeInformationEpisodeNum'), HTMLElement) ? tmp$_15 : throwCCE();
    this.programmeInformationPreviouslyShown_0 = Kotlin.isType(tmp$_16 = document.getElementById('epgProgrammeInformationPreviouslyShown'), HTMLElement) ? tmp$_16 : throwCCE();
    this.programmeInformationBroadcastDateSlot_0 = Kotlin.isType(tmp$_17 = document.getElementById('epgProgrammeInformationBroadcastDateSlot'), HTMLElement) ? tmp$_17 : throwCCE();
    this.programmeInformationBroadcastTimeSlot_0 = Kotlin.isType(tmp$_18 = document.getElementById('epgProgrammeInformationBroadcastTimeSlot'), HTMLElement) ? tmp$_18 : throwCCE();
    this.programmeListCurrentDisplayDate_0 = Kotlin.isType(tmp$_19 = document.getElementById('epgProgrammeListCurrentDisplayDate'), HTMLElement) ? tmp$_19 : throwCCE();
    this.programmeListTimeLine_0 = Kotlin.isType(tmp$_20 = document.getElementById('epgProgrammeListTimeLine'), HTMLElement) ? tmp$_20 : throwCCE();
    this.programmeListChannelList_0 = Kotlin.isType(tmp$_21 = document.getElementById('epgProgrammeListChannelList'), HTMLElement) ? tmp$_21 : throwCCE();
    this.programmeListTable_0 = Kotlin.isType(tmp$_22 = document.getElementById('epgProgrammeListTable'), HTMLElement) ? tmp$_22 : throwCCE();
    this.tabIndexZ_0 = 9;
    this.updateDisplayCurrentDateBoxTimer_0 = 0;
    this.fromDate_0 = this.nowDateWithoutMinute_0();
    this.toDate_0 = this.addDay_0(this.nowDateWithoutMinute_0(), 2);
    this.epg_0.style.cursor = 'auto';
    this.hideButton_0.onclick = EPG_init$lambda(this);
    println('Init EPG');
  }
  function EPG$setDisplayCurrentDateBox$lambda(this$EPG) {
    return function () {
      this$EPG.displayCurrentDateBox_0.innerHTML = (new Date()).toLocaleString();
    };
  }
  EPG.prototype.setDisplayCurrentDateBox_0 = function () {
    var script = EPG$setDisplayCurrentDateBox$lambda(this);
    script();
    this.updateDisplayCurrentDateBoxTimer_0 = window.setInterval(script, 1000);
  };
  EPG.prototype.setProgrammeInformationTitle_0 = function (programme) {
    var tmp$, tmp$_0;
    this.programmeInformationTitle_0.innerHTML = (tmp$_0 = (tmp$ = programme.title) != null ? tmp$.toString() : null) != null ? tmp$_0 : '';
  };
  EPG.prototype.setProgrammeInformationSubTitle_0 = function (programme) {
    var string = programme.subTitle;
    if (string != null) {
      this.programmeInformationSubTitle_0.innerHTML = ' : ' + toString(string);
    }
     else {
      this.programmeInformationSubTitle_0.innerHTML = '';
    }
  };
  EPG.prototype.setProgrammeInformationDesc_0 = function (programme) {
    var tmp$, tmp$_0;
    this.programmeInformationDesc_0.innerHTML = (tmp$_0 = (tmp$ = programme.desc) != null ? tmp$.toString() : null) != null ? tmp$_0 : '';
  };
  EPG.prototype.setProgrammeInformationCredit_0 = function (programme) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20, tmp$_21, tmp$_22, tmp$_23, tmp$_24, tmp$_25, tmp$_26, tmp$_27, tmp$_28, tmp$_29, tmp$_30, tmp$_31, tmp$_32, tmp$_33, tmp$_34, tmp$_35, tmp$_36, tmp$_37, tmp$_38, tmp$_39, tmp$_40, tmp$_41, tmp$_42, tmp$_43, tmp$_44, tmp$_45, tmp$_46, tmp$_47, tmp$_48, tmp$_49, tmp$_50, tmp$_51, tmp$_52, tmp$_53, tmp$_54, tmp$_55, tmp$_56, tmp$_57, tmp$_58, tmp$_59, tmp$_60, tmp$_61, tmp$_62, tmp$_63, tmp$_64, tmp$_65, tmp$_66, tmp$_67, tmp$_68, tmp$_69, tmp$_70, tmp$_71, tmp$_72, tmp$_73, tmp$_74, tmp$_75, tmp$_76, tmp$_77, tmp$_78, tmp$_79, tmp$_80, tmp$_81, tmp$_82, tmp$_83, tmp$_84, tmp$_85, tmp$_86, tmp$_87, tmp$_88, tmp$_89, tmp$_90, tmp$_91, tmp$_92, tmp$_93, tmp$_94, tmp$_95, tmp$_96, tmp$_97, tmp$_98, tmp$_99, tmp$_100, tmp$_101, tmp$_102, tmp$_103, tmp$_104, tmp$_105, tmp$_106, tmp$_107, tmp$_108, tmp$_109, tmp$_110, tmp$_111, tmp$_112, tmp$_113, tmp$_114, tmp$_115, tmp$_116, tmp$_117, tmp$_118, tmp$_119, tmp$_120, tmp$_121, tmp$_122, tmp$_123, tmp$_124, tmp$_125, tmp$_126, tmp$_127, tmp$_128, tmp$_129, tmp$_130, tmp$_131;
    this.programmeInformationCredit_0.innerHTML = '';
    if (((tmp$_1 = (tmp$_0 = (tmp$ = programme.credits) != null ? tmp$.directors : null) != null ? tmp$_0.size : null) != null ? tmp$_1 : 0) > 0) {
      this.programmeInformationCredit_0.innerHTML = this.programmeInformationCredit_0.innerHTML + '\u5C0E\u6F14: ';
      tmp$_5 = (tmp$_4 = (tmp$_3 = (tmp$_2 = programme.credits) != null ? tmp$_2.directors : null) != null ? tmp$_3.size : null) != null ? tmp$_4 : 0;
      for (var i = 0; i < tmp$_5; i++) {
        this.programmeInformationCredit_0.innerHTML = this.programmeInformationCredit_0.innerHTML + (((tmp$_8 = (tmp$_7 = (tmp$_6 = programme.credits) != null ? tmp$_6.directors : null) != null ? getOrNull(tmp$_7, i) : null) != null ? tmp$_8 : '') + ' ');
      }
    }
    if (((tmp$_11 = (tmp$_10 = (tmp$_9 = programme.credits) != null ? tmp$_9.actors : null) != null ? tmp$_10.size : null) != null ? tmp$_11 : 0) > 0) {
      tmp$_13 = this.programmeInformationCredit_0;
      tmp$_14 = tmp$_13.innerHTML;
      if (equals(this.programmeInformationCredit_0.innerHTML, '')) {
        tmp$_12 = '';
      }
       else {
        tmp$_12 = '<br/>';
      }
      tmp$_13.innerHTML = tmp$_14 + (tmp$_12 + '\u6F14\u54E1: ');
      tmp$_18 = (tmp$_17 = (tmp$_16 = (tmp$_15 = programme.credits) != null ? tmp$_15.actors : null) != null ? tmp$_16.size : null) != null ? tmp$_17 : 0;
      for (var i_0 = 0; i_0 < tmp$_18; i_0++) {
        tmp$_27 = this.programmeInformationCredit_0;
        tmp$_27.innerHTML = tmp$_27.innerHTML + (((tmp$_22 = (tmp$_21 = (tmp$_20 = (tmp$_19 = programme.credits) != null ? tmp$_19.actors : null) != null ? getOrNull(tmp$_20, i_0) : null) != null ? tmp$_21.actor : null) != null ? tmp$_22 : '') + '-' + toString((tmp$_26 = (tmp$_25 = (tmp$_24 = (tmp$_23 = programme.credits) != null ? tmp$_23.actors : null) != null ? getOrNull(tmp$_24, i_0) : null) != null ? tmp$_25.role : null) != null ? tmp$_26 : '') + ' ');
      }
    }
    if (((tmp$_30 = (tmp$_29 = (tmp$_28 = programme.credits) != null ? tmp$_28.writers : null) != null ? tmp$_29.size : null) != null ? tmp$_30 : 0) > 0) {
      tmp$_32 = this.programmeInformationCredit_0;
      tmp$_33 = tmp$_32.innerHTML;
      if (equals(this.programmeInformationCredit_0.innerHTML, '')) {
        tmp$_31 = '';
      }
       else {
        tmp$_31 = '<br/>';
      }
      tmp$_32.innerHTML = tmp$_33 + (tmp$_31 + '\u7DE8\u5287: ');
      tmp$_37 = (tmp$_36 = (tmp$_35 = (tmp$_34 = programme.credits) != null ? tmp$_34.writers : null) != null ? tmp$_35.size : null) != null ? tmp$_36 : 0;
      for (var i_1 = 0; i_1 < tmp$_37; i_1++) {
        this.programmeInformationCredit_0.innerHTML = this.programmeInformationCredit_0.innerHTML + (((tmp$_40 = (tmp$_39 = (tmp$_38 = programme.credits) != null ? tmp$_38.writers : null) != null ? getOrNull(tmp$_39, i_1) : null) != null ? tmp$_40 : '') + ' ');
      }
    }
    if (((tmp$_43 = (tmp$_42 = (tmp$_41 = programme.credits) != null ? tmp$_41.adapters : null) != null ? tmp$_42.size : null) != null ? tmp$_43 : 0) > 0) {
      tmp$_45 = this.programmeInformationCredit_0;
      tmp$_46 = tmp$_45.innerHTML;
      if (equals(this.programmeInformationCredit_0.innerHTML, '')) {
        tmp$_44 = '';
      }
       else {
        tmp$_44 = '<br/>';
      }
      tmp$_45.innerHTML = tmp$_46 + (tmp$_44 + '\u6539\u7DE8: ');
      tmp$_50 = (tmp$_49 = (tmp$_48 = (tmp$_47 = programme.credits) != null ? tmp$_47.adapters : null) != null ? tmp$_48.size : null) != null ? tmp$_49 : 0;
      for (var i_2 = 0; i_2 < tmp$_50; i_2++) {
        this.programmeInformationCredit_0.innerHTML = this.programmeInformationCredit_0.innerHTML + (((tmp$_53 = (tmp$_52 = (tmp$_51 = programme.credits) != null ? tmp$_51.adapters : null) != null ? getOrNull(tmp$_52, i_2) : null) != null ? tmp$_53 : '') + ' ');
      }
    }
    if (((tmp$_56 = (tmp$_55 = (tmp$_54 = programme.credits) != null ? tmp$_54.producers : null) != null ? tmp$_55.size : null) != null ? tmp$_56 : 0) > 0) {
      tmp$_58 = this.programmeInformationCredit_0;
      tmp$_59 = tmp$_58.innerHTML;
      if (equals(this.programmeInformationCredit_0.innerHTML, '')) {
        tmp$_57 = '';
      }
       else {
        tmp$_57 = '<br/>';
      }
      tmp$_58.innerHTML = tmp$_59 + (tmp$_57 + '\u88FD\u7247\u4EBA: ');
      tmp$_63 = (tmp$_62 = (tmp$_61 = (tmp$_60 = programme.credits) != null ? tmp$_60.producers : null) != null ? tmp$_61.size : null) != null ? tmp$_62 : 0;
      for (var i_3 = 0; i_3 < tmp$_63; i_3++) {
        this.programmeInformationCredit_0.innerHTML = this.programmeInformationCredit_0.innerHTML + (((tmp$_66 = (tmp$_65 = (tmp$_64 = programme.credits) != null ? tmp$_64.producers : null) != null ? getOrNull(tmp$_65, i_3) : null) != null ? tmp$_66 : '') + ' ');
      }
    }
    if (((tmp$_69 = (tmp$_68 = (tmp$_67 = programme.credits) != null ? tmp$_67.composers : null) != null ? tmp$_68.size : null) != null ? tmp$_69 : 0) > 0) {
      tmp$_71 = this.programmeInformationCredit_0;
      tmp$_72 = tmp$_71.innerHTML;
      if (equals(this.programmeInformationCredit_0.innerHTML, '')) {
        tmp$_70 = '';
      }
       else {
        tmp$_70 = '<br/>';
      }
      tmp$_71.innerHTML = tmp$_72 + (tmp$_70 + '\u4F5C\u66F2\u5BB6: ');
      tmp$_76 = (tmp$_75 = (tmp$_74 = (tmp$_73 = programme.credits) != null ? tmp$_73.composers : null) != null ? tmp$_74.size : null) != null ? tmp$_75 : 0;
      for (var i_4 = 0; i_4 < tmp$_76; i_4++) {
        this.programmeInformationCredit_0.innerHTML = this.programmeInformationCredit_0.innerHTML + (((tmp$_79 = (tmp$_78 = (tmp$_77 = programme.credits) != null ? tmp$_77.composers : null) != null ? getOrNull(tmp$_78, i_4) : null) != null ? tmp$_79 : '') + ' ');
      }
    }
    if (((tmp$_82 = (tmp$_81 = (tmp$_80 = programme.credits) != null ? tmp$_80.editors : null) != null ? tmp$_81.size : null) != null ? tmp$_82 : 0) > 0) {
      tmp$_84 = this.programmeInformationCredit_0;
      tmp$_85 = tmp$_84.innerHTML;
      if (equals(this.programmeInformationCredit_0.innerHTML, '')) {
        tmp$_83 = '';
      }
       else {
        tmp$_83 = '<br/>';
      }
      tmp$_84.innerHTML = tmp$_85 + (tmp$_83 + '\u7DE8\u8F2F: ');
      tmp$_89 = (tmp$_88 = (tmp$_87 = (tmp$_86 = programme.credits) != null ? tmp$_86.editors : null) != null ? tmp$_87.size : null) != null ? tmp$_88 : 0;
      for (var i_5 = 0; i_5 < tmp$_89; i_5++) {
        this.programmeInformationCredit_0.innerHTML = this.programmeInformationCredit_0.innerHTML + (((tmp$_92 = (tmp$_91 = (tmp$_90 = programme.credits) != null ? tmp$_90.editors : null) != null ? getOrNull(tmp$_91, i_5) : null) != null ? tmp$_92 : '') + ' ');
      }
    }
    if (((tmp$_95 = (tmp$_94 = (tmp$_93 = programme.credits) != null ? tmp$_93.presenters : null) != null ? tmp$_94.size : null) != null ? tmp$_95 : 0) > 0) {
      tmp$_97 = this.programmeInformationCredit_0;
      tmp$_98 = tmp$_97.innerHTML;
      if (equals(this.programmeInformationCredit_0.innerHTML, '')) {
        tmp$_96 = '';
      }
       else {
        tmp$_96 = '<br/>';
      }
      tmp$_97.innerHTML = tmp$_98 + (tmp$_96 + '\u4E3B\u6301: ');
      tmp$_102 = (tmp$_101 = (tmp$_100 = (tmp$_99 = programme.credits) != null ? tmp$_99.presenters : null) != null ? tmp$_100.size : null) != null ? tmp$_101 : 0;
      for (var i_6 = 0; i_6 < tmp$_102; i_6++) {
        this.programmeInformationCredit_0.innerHTML = this.programmeInformationCredit_0.innerHTML + (((tmp$_105 = (tmp$_104 = (tmp$_103 = programme.credits) != null ? tmp$_103.presenters : null) != null ? getOrNull(tmp$_104, i_6) : null) != null ? tmp$_105 : '') + ' ');
      }
    }
    if (((tmp$_108 = (tmp$_107 = (tmp$_106 = programme.credits) != null ? tmp$_106.commentators : null) != null ? tmp$_107.size : null) != null ? tmp$_108 : 0) > 0) {
      tmp$_110 = this.programmeInformationCredit_0;
      tmp$_111 = tmp$_110.innerHTML;
      if (equals(this.programmeInformationCredit_0.innerHTML, '')) {
        tmp$_109 = '';
      }
       else {
        tmp$_109 = '<br/>';
      }
      tmp$_110.innerHTML = tmp$_111 + (tmp$_109 + '\u8A55\u8AD6\u54E1: ');
      tmp$_115 = (tmp$_114 = (tmp$_113 = (tmp$_112 = programme.credits) != null ? tmp$_112.commentators : null) != null ? tmp$_113.size : null) != null ? tmp$_114 : 0;
      for (var i_7 = 0; i_7 < tmp$_115; i_7++) {
        this.programmeInformationCredit_0.innerHTML = this.programmeInformationCredit_0.innerHTML + (((tmp$_118 = (tmp$_117 = (tmp$_116 = programme.credits) != null ? tmp$_116.commentators : null) != null ? getOrNull(tmp$_117, i_7) : null) != null ? tmp$_118 : '') + ' ');
      }
    }
    if (((tmp$_121 = (tmp$_120 = (tmp$_119 = programme.credits) != null ? tmp$_119.guests : null) != null ? tmp$_120.size : null) != null ? tmp$_121 : 0) > 0) {
      tmp$_123 = this.programmeInformationCredit_0;
      tmp$_124 = tmp$_123.innerHTML;
      if (equals(this.programmeInformationCredit_0.innerHTML, '')) {
        tmp$_122 = '';
      }
       else {
        tmp$_122 = '<br/>';
      }
      tmp$_123.innerHTML = tmp$_124 + (tmp$_122 + '\u5609\u8CD3: ');
      tmp$_128 = (tmp$_127 = (tmp$_126 = (tmp$_125 = programme.credits) != null ? tmp$_125.guests : null) != null ? tmp$_126.size : null) != null ? tmp$_127 : 0;
      for (var i_8 = 0; i_8 < tmp$_128; i_8++) {
        this.programmeInformationCredit_0.innerHTML = this.programmeInformationCredit_0.innerHTML + (((tmp$_131 = (tmp$_130 = (tmp$_129 = programme.credits) != null ? tmp$_129.guests : null) != null ? getOrNull(tmp$_130, i_8) : null) != null ? tmp$_131 : '') + ' ');
      }
    }
  };
  EPG.prototype.setProgrammeInformationDate_0 = function (programme) {
    this.programmeInformationDate_0.innerHTML = '';
    var date = programme.date;
    if (date != null) {
      this.programmeInformationDate_0.innerHTML = '\u767C\u884C\u671F: ' + date;
    }
  };
  EPG.prototype.setProgrammeInformationCategory_0 = function (programme) {
    this.programmeInformationCategory_0.innerHTML = '';
    var category = programme.category;
    if (category != null) {
      this.programmeInformationCategory_0.innerHTML = '\u7247\u985E: ' + toString(category);
    }
  };
  EPG.prototype.setProgrammeInformationKeyword_0 = function (programme) {
    var tmp$, tmp$_0;
    this.programmeInformationKeyword_0.innerHTML = '';
    var keywordList = (tmp$ = programme.keyword) != null ? tmp$.getAllStringByLanguage() : null;
    if (keywordList != null) {
      this.programmeInformationKeyword_0.innerHTML = this.programmeInformationKeyword_0.innerHTML + '\u95DC\u9375\u8A5E: ';
      tmp$_0 = keywordList.iterator();
      while (tmp$_0.hasNext()) {
        var keyword = tmp$_0.next();
        this.programmeInformationKeyword_0.innerHTML = this.programmeInformationKeyword_0.innerHTML + keyword;
      }
    }
  };
  EPG.prototype.setProgrammeInformationLanguage_0 = function (programme) {
    var tmp$, tmp$_0;
    this.programmeInformationLanguage_0.innerHTML = '';
    var languageList = (tmp$ = programme.language) != null ? tmp$.getAllStringByLanguage() : null;
    if (languageList != null) {
      this.programmeInformationLanguage_0.innerHTML = this.programmeInformationLanguage_0.innerHTML + '[';
      tmp$_0 = languageList.iterator();
      while (tmp$_0.hasNext()) {
        var language = tmp$_0.next();
        if (this.programmeInformationLanguage_0.innerHTML !== '[') {
          this.programmeInformationLanguage_0.innerHTML = this.programmeInformationLanguage_0.innerHTML + '/';
        }
        this.programmeInformationLanguage_0.innerHTML = this.programmeInformationLanguage_0.innerHTML + language;
      }
      this.programmeInformationLanguage_0.innerHTML = this.programmeInformationLanguage_0.innerHTML + ']';
    }
  };
  EPG.prototype.setProgrammeInformationOrigLanguage_0 = function (programme) {
    this.programmeInformationOrigLanguage_0.innerHTML = '';
    var origLanguage = programme.origLanguage;
    if (origLanguage != null) {
      this.programmeInformationOrigLanguage_0.innerHTML = '\u539F\u8A9E\u8A00: ' + toString(origLanguage);
    }
  };
  EPG.prototype.setProgrammeInformationLength_0 = function (programme) {
    var tmp$, tmp$_0, tmp$_1;
    this.programmeInformationLength_0.innerHTML = '';
    var length = (tmp$ = programme.length) != null ? tmp$.length : null;
    if (length != null) {
      this.programmeInformationLength_0.innerHTML = '\u7247\u9577: ' + length + toString((tmp$_1 = (tmp$_0 = programme.length) != null ? tmp$_0.units : null) != null ? tmp$_1 : '');
    }
  };
  EPG.prototype.setProgrammeInformationIcon_0 = function (programme) {
    var tmp$, tmp$_0;
    this.programmeInformationIcon_0.src = (tmp$_0 = (tmp$ = programme.icon) != null ? tmp$.src : null) != null ? tmp$_0 : 'img/programmeNullIcon.png';
  };
  EPG.prototype.setProgrammeInformationUrl_0 = function (programme) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    this.programmeInformationUrl_0.innerHTML = '';
    tmp$_1 = (tmp$_0 = (tmp$ = programme.urls) != null ? tmp$.size : null) != null ? tmp$_0 : 0;
    for (var i = 0; i < tmp$_1; i++) {
      var link = (tmp$_3 = (tmp$_2 = programme.urls) != null ? getOrNull(tmp$_2, i) : null) != null ? tmp$_3 : '';
      this.programmeInformationUrl_0.innerHTML = this.programmeInformationUrl_0.innerHTML + ('<br/><a href=' + '"' + link + '"' + '>' + link + '<\/a>');
    }
  };
  EPG.prototype.setProgrammeInformationCountry_0 = function (programme) {
    this.programmeInformationCountry_0.innerHTML = '';
    var country = programme.country;
    if (country != null) {
      this.programmeInformationCountry_0.innerHTML = '\u570B\u5BB6: ' + toString(country);
    }
  };
  function EPG$setProgrammeInformationEpisodeNum$lambda(closure$programme, this$EPG) {
    return function (dialogues) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20, tmp$_21, tmp$_22;
      var episodeInnerHTML = '';
      var season = (tmp$ = closure$programme.episodeNum) != null ? tmp$.getSeason() : null;
      if (season != null) {
        episodeInnerHTML += (tmp$_2 = (tmp$_1 = (tmp$_0 = dialogues.node) != null ? tmp$_0.programmeSeason : null) != null ? replace(tmp$_1, '${season}', season.toString()) : null) != null ? tmp$_2 : '';
      }
      var episode = (tmp$_3 = closure$programme.episodeNum) != null ? tmp$_3.getEpisode() : null;
      if (episode != null) {
        episodeInnerHTML += (tmp$_6 = (tmp$_5 = (tmp$_4 = dialogues.node) != null ? tmp$_4.programmeEpisode : null) != null ? replace(tmp$_5, '${episode}', episode.toString()) : null) != null ? tmp$_6 : '';
      }
      var part = (tmp$_7 = closure$programme.episodeNum) != null ? tmp$_7.getPart() : null;
      if (part != null) {
        episodeInnerHTML += (tmp$_10 = (tmp$_9 = (tmp$_8 = dialogues.node) != null ? tmp$_8.programmePart : null) != null ? replace(tmp$_9, '${part}', part.toString()) : null) != null ? tmp$_10 : '';
      }
      var totalSeason = (tmp$_11 = closure$programme.episodeNum) != null ? tmp$_11.getTotalSeason() : null;
      if (totalSeason != null) {
        episodeInnerHTML += (tmp$_14 = (tmp$_13 = (tmp$_12 = dialogues.node) != null ? tmp$_12.programmeTotalSeason : null) != null ? replace(tmp$_13, '${totalSeason}', totalSeason.toString()) : null) != null ? tmp$_14 : '';
      }
      var totalEpisode = (tmp$_15 = closure$programme.episodeNum) != null ? tmp$_15.getTotalEpisode() : null;
      if (totalEpisode != null) {
        episodeInnerHTML += (tmp$_18 = (tmp$_17 = (tmp$_16 = dialogues.node) != null ? tmp$_16.programmeTotalEpisode : null) != null ? replace(tmp$_17, '${totalEpisode}', totalEpisode.toString()) : null) != null ? tmp$_18 : '';
      }
      var totalPart = (tmp$_19 = closure$programme.episodeNum) != null ? tmp$_19.getTotalPart() : null;
      if (totalPart != null) {
        episodeInnerHTML += (tmp$_22 = (tmp$_21 = (tmp$_20 = dialogues.node) != null ? tmp$_20.programmeTotalPart : null) != null ? replace(tmp$_21, '${totalPart}', totalPart.toString()) : null) != null ? tmp$_22 : '';
      }
      this$EPG.programmeInformationEpisodeNum_0.innerHTML = episodeInnerHTML;
    };
  }
  EPG.prototype.setProgrammeInformationEpisodeNum_0 = function (programme) {
    Dialogue$Companion_getInstance().getDialogues_fs1aqo$(EPG$setProgrammeInformationEpisodeNum$lambda(programme, this));
  };
  EPG.prototype.setProgrammeInformationVideo_0 = function (programme) {
  };
  EPG.prototype.setProgrammeInformationAudio_0 = function (programme) {
  };
  EPG.prototype.setProgrammeInformationPreviouslyShown_0 = function (programme) {
    var tmp$, tmp$_0, tmp$_1;
    this.programmeInformationPreviouslyShown_0.innerHTML = '';
    var previouslyShownDate = (tmp$_0 = (tmp$ = programme.previouslyShown) != null ? tmp$.start : null) != null ? tmp$_0.toLocaleString() : null;
    if (previouslyShownDate != null) {
      this.programmeInformationPreviouslyShown_0.innerHTML = this.programmeInformationPreviouslyShown_0.innerHTML + ('\u4E0A\u6B21\u64AD\u653E\u6642\u9593: ' + previouslyShownDate + '\n');
    }
    var previouslyShownChannel = (tmp$_1 = programme.previouslyShown) != null ? tmp$_1.channel : null;
    if (previouslyShownChannel != null) {
      this.programmeInformationPreviouslyShown_0.innerHTML = this.programmeInformationPreviouslyShown_0.innerHTML + ('\u4E0A\u6B21\u64AD\u653E\u983B\u9053: ' + previouslyShownChannel);
    }
  };
  EPG.prototype.setProgrammeInformationPremiere_0 = function (programme) {
  };
  EPG.prototype.setProgrammeInformationLastChance_0 = function (programme) {
  };
  EPG.prototype.setProgrammeInformationNew_0 = function (programme) {
  };
  EPG.prototype.setProgrammeInformationSubtitles_0 = function (programme) {
  };
  EPG.prototype.setProgrammeInformationRating_0 = function (programme) {
  };
  EPG.prototype.setProgrammeInformationStarRating_0 = function (programme) {
  };
  EPG.prototype.setProgrammeInformationReview_0 = function (programme) {
  };
  EPG.prototype.setProgrammeInformationBroadcastDateSlot_0 = function (programme) {
    this.programmeInformationBroadcastDateSlot_0.innerHTML = programme.start.toLocaleDateString();
  };
  EPG.prototype.setProgrammeInformationBroadcastTimeSlot_0 = function (programme) {
    var fromTime = padStart(programme.start.getHours().toString(), 2, 48) + ':' + padStart(programme.start.getMinutes().toString(), 2, 48);
    var toTime = padStart(programme.stop.getHours().toString(), 2, 48) + ':' + padStart(programme.stop.getMinutes().toString(), 2, 48);
    this.programmeInformationBroadcastTimeSlot_0.innerHTML = fromTime + '-' + toTime;
  };
  EPG.prototype.setProgrammeInformation_0 = function (programme) {
    this.setProgrammeInformationTitle_0(programme);
    this.setProgrammeInformationSubTitle_0(programme);
    this.setProgrammeInformationDesc_0(programme);
    this.setProgrammeInformationCredit_0(programme);
    this.setProgrammeInformationDate_0(programme);
    this.setProgrammeInformationCategory_0(programme);
    this.setProgrammeInformationKeyword_0(programme);
    this.setProgrammeInformationLanguage_0(programme);
    this.setProgrammeInformationOrigLanguage_0(programme);
    this.setProgrammeInformationLength_0(programme);
    this.setProgrammeInformationIcon_0(programme);
    this.setProgrammeInformationUrl_0(programme);
    this.setProgrammeInformationCountry_0(programme);
    this.setProgrammeInformationEpisodeNum_0(programme);
    this.setProgrammeInformationVideo_0(programme);
    this.setProgrammeInformationAudio_0(programme);
    this.setProgrammeInformationPreviouslyShown_0(programme);
    this.setProgrammeInformationPremiere_0(programme);
    this.setProgrammeInformationLastChance_0(programme);
    this.setProgrammeInformationNew_0(programme);
    this.setProgrammeInformationSubtitles_0(programme);
    this.setProgrammeInformationRating_0(programme);
    this.setProgrammeInformationStarRating_0(programme);
    this.setProgrammeInformationReview_0(programme);
    this.setProgrammeInformationBroadcastDateSlot_0(programme);
    this.setProgrammeInformationBroadcastTimeSlot_0(programme);
  };
  EPG.prototype.nowDateWithoutMinute_0 = function () {
    return new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate(), (new Date()).getHours());
  };
  EPG.prototype.addDay_0 = function (dateForChange, numberOfDay) {
    return new Date(dateForChange.getTime() + ((((numberOfDay * 24 | 0) * 60 | 0) * 60 | 0) * 1000 | 0));
  };
  EPG.prototype.dateToDateDifferenceMinute_0 = function (fromDate, toDate) {
    var x = toDate.getTime() - fromDate.getTime();
    var differenceTime = Math_0.abs(x);
    var x_0 = differenceTime / 60000;
    return numberToInt(Math_0.ceil(x_0));
  };
  EPG.prototype.oneHourLengthPX_0 = function () {
    return this.programmeListTable_0.scrollWidth / (this.dateToDateDifferenceMinute_0(this.fromDate_0, this.toDate_0) / 60 | 0) | 0;
  };
  EPG.prototype.getDateByProgrammeListTableScrollLeft_0 = function (scrollLeftValue) {
    var numberOfHour = (scrollLeftValue - scrollLeftValue % this.oneHourLengthPX_0()) / this.oneHourLengthPX_0();
    var currentScrollValueTime = numberOfHour * 60 * 60 * 1000;
    return new Date(this.fromDate_0.getTime() + currentScrollValueTime);
  };
  function EPG$newProgrammeListBlock$lambda(event) {
  }
  EPG.prototype.newProgrammeListBlock_0 = function (width, addClass_0, backgroundColor, innerHTML, tabIndex, onfocus) {
    if (addClass_0 === void 0)
      addClass_0 = '';
    if (backgroundColor === void 0)
      backgroundColor = '#000';
    if (innerHTML === void 0)
      innerHTML = '';
    if (tabIndex === void 0)
      tabIndex = -1;
    if (onfocus === void 0)
      onfocus = EPG$newProgrammeListBlock$lambda;
    var tmp$, tmp$_0;
    var button = Kotlin.isType(tmp$ = document.createElement('button'), HTMLButtonElement) ? tmp$ : throwCCE();
    button.style.backgroundColor = backgroundColor;
    button.style.color = '#FFFFFF';
    button.style.fontWeight = 'bold';
    button.style.fontSize = '3.5vh';
    button.style.overflowX = 'hidden';
    button.style.overflowY = 'hidden';
    button.style.textAlign = 'left';
    button.style.width = 'inherit';
    button.style.height = '5.5vh';
    button.style.margin = '0.25vh';
    button.style.marginLeft = '0.5vh';
    button.style.marginRight = '0.5vh';
    button.innerHTML = innerHTML;
    button.tabIndex = tabIndex;
    button.onfocus = onfocus;
    var div = Kotlin.isType(tmp$_0 = document.createElement('div'), HTMLDivElement) ? tmp$_0 : throwCCE();
    addClass(div, [addClass_0]);
    div.style.display = 'inline-block';
    div.style.width = width;
    div.appendChild(button);
    return div;
  };
  EPG.prototype.newProgrammeListBlockLine_0 = function (id) {
    if (id === void 0)
      id = '';
    var tmp$;
    var div = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : throwCCE();
    div.id = id;
    div.style.whiteSpace = 'nowrap';
    div.style.width = 'max-content';
    return div;
  };
  function EPG$setProgrammeListCurrentDisplayDate$lambda(this$EPG) {
    return function (innerHTML) {
      this$EPG.programmeListCurrentDisplayDate_0.innerHTML = '';
      var block = this$EPG.newProgrammeListBlock_0('30vh', void 0, '#111', innerHTML);
      var blockLine = this$EPG.newProgrammeListBlockLine_0();
      blockLine.appendChild(block);
      this$EPG.programmeListCurrentDisplayDate_0.appendChild(blockLine);
    };
  }
  function EPG$setProgrammeListCurrentDisplayDate$lambda_0(closure$updateDisplayDate, this$EPG) {
    return function (event) {
      closure$updateDisplayDate(this$EPG.getDateByProgrammeListTableScrollLeft_0(this$EPG.programmeListTable_0.scrollLeft).toLocaleDateString());
    };
  }
  EPG.prototype.setProgrammeListCurrentDisplayDate_0 = function () {
    var updateDisplayDate = EPG$setProgrammeListCurrentDisplayDate$lambda(this);
    updateDisplayDate(this.fromDate_0.toLocaleDateString());
    this.programmeListTable_0.onscroll = EPG$setProgrammeListCurrentDisplayDate$lambda_0(updateDisplayDate, this);
  };
  EPG.prototype.setProgrammeListTimeLine_0 = function () {
    this.programmeListTimeLine_0.innerHTML = '';
    var line = this.newProgrammeListBlockLine_0();
    var increaseHour = 0;
    while (this.fromDate_0.getTime() + (((increaseHour * 60 | 0) * 60 | 0) * 1000 | 0) < this.toDate_0.getTime()) {
      var hour = padStart((new Date(this.fromDate_0.getTime() + (((increaseHour * 60 | 0) * 60 | 0) * 1000 | 0))).getHours().toString(), 2, 48);
      line.appendChild(this.newProgrammeListBlock_0('30vh', 'time', '#222222', hour + ':00'));
      line.appendChild(this.newProgrammeListBlock_0('30vh', 'time', '#222222', hour + ':30'));
      increaseHour = increaseHour + 1 | 0;
    }
    this.programmeListTimeLine_0.appendChild(line);
  };
  EPG.prototype.setProgrammeListChannelList_0 = function () {
    var tmp$;
    this.programmeListChannelList_0.innerHTML = '';
    tmp$ = channels.iterator();
    while (tmp$.hasNext()) {
      var channel = tmp$.next();
      var line = this.newProgrammeListBlockLine_0();
      line.appendChild(this.newProgrammeListBlock_0('8vh', 'channelNumber', '#222', padStart(channel.number.toString(), 3, 48)));
      line.appendChild(this.newProgrammeListBlock_0('22vh', 'channelName', '#222', channel.name.toString()));
      this.programmeListChannelList_0.appendChild(line);
    }
  };
  function EPG$addProgrammeOnTimeLine$lambda(closure$programme, this$EPG) {
    return function (event) {
      this$EPG.setProgrammeInformation_0(closure$programme);
    };
  }
  EPG.prototype.addProgrammeOnTimeLine_0 = function (timeLine, channel, programme) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (this.fromDate_0.getTime() < programme.start.getTime()) {
      tmp$ = programme.start;
    }
     else {
      tmp$ = this.fromDate_0;
    }
    var addProgrammeFromTime = tmp$;
    if (programme.stop.getTime() < this.toDate_0.getTime()) {
      tmp$_0 = programme.stop;
    }
     else {
      tmp$_0 = this.toDate_0;
    }
    var addProgrammeToTime = tmp$_0;
    var timeLength = this.dateToDateDifferenceMinute_0(addProgrammeFromTime, addProgrammeToTime);
    var title = programme.title;
    timeLine.appendChild(this.newProgrammeListBlock_0(timeLength.toString() + 'vh', 'programme', '#333', toString(title), (tmp$_2 = toIntOrNull(Tab3dIndex$Companion_getInstance().toUnparsedTabIndex_lvro24$(new Tab3dIndex((tmp$_1 = toIntOrNull(padStart(programme.start.getDate().toString(), 2, 48) + padStart(programme.start.getHours().toString(), 2, 48))) != null ? tmp$_1 : 0, channel.number, this.tabIndexZ_0)))) != null ? tmp$_2 : 0, EPG$addProgrammeOnTimeLine$lambda(programme, this)));
  };
  function EPG$loadProgrammeListTableContentChannelProgrammeTimeLine$lambda(closure$channel, this$EPG) {
    return function (xmltv) {
      var tmp$;
      if (xmltv.programmes == null) {
        return;
      }
      var id = 'channel' + closure$channel.number + 'ProgrammeTimeLine';
      var timeLine = Kotlin.isType(tmp$ = document.getElementById(id), HTMLDivElement) ? tmp$ : throwCCE();
      timeLine.innerHTML = '';
      var currentSettedLastTime = this$EPG.fromDate_0;
      var nextProgrammeStartTime = this$EPG.fromDate_0;
      while (currentSettedLastTime.getTime() < this$EPG.toDate_0.getTime()) {
        var addToShowProgramme = xmltv.programmes.getProgrammeByTime_qjzqsm$(currentSettedLastTime);
        if (addToShowProgramme != null) {
          nextProgrammeStartTime = addToShowProgramme.stop;
        }
         else {
          addToShowProgramme = xmltv.programmes.getClosestNextProgrammeByTime_qjzqsm$(currentSettedLastTime);
          if (addToShowProgramme != null) {
            if (addToShowProgramme.start.getTime() < this$EPG.toDate_0.getTime()) {
              nextProgrammeStartTime = addToShowProgramme.stop;
            }
             else {
              nextProgrammeStartTime = this$EPG.toDate_0;
            }
          }
           else {
            nextProgrammeStartTime = this$EPG.toDate_0;
          }
          addToShowProgramme = new XMLTV$Programme(currentSettedLastTime, nextProgrammeStartTime, void 0, void 0, void 0, void 0, void 0, new MultiLanguageString(ArrayLinkList_init([new MultiLanguageString$LanguageString('', '\u6B64\u6642\u6BB5\u7121\u8CC7\u8A0A')])));
        }
        this$EPG.addProgrammeOnTimeLine_0(timeLine, closure$channel, addToShowProgramme);
        currentSettedLastTime = nextProgrammeStartTime;
      }
    };
  }
  EPG.prototype.loadProgrammeListTableContentChannelProgrammeTimeLine_0 = function (channel) {
    channel.information.getXMLTV_29qkou$(EPG$loadProgrammeListTableContentChannelProgrammeTimeLine$lambda(channel, this));
  };
  function EPG$focusCurrentProgramme$lambda(this$EPG) {
    return function (xmltv) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
      var currentProgrammeOrNull = (tmp$ = xmltv.programmes) != null ? tmp$.getProgrammeByTime() : null;
      if (currentProgrammeOrNull != null) {
        tmp$_0 = currentProgrammeOrNull;
      }
       else {
        this$EPG.hideButton_0.focus();
        return;
      }
      var currentProgramme = tmp$_0;
      var firstFocusTabIndex = Tab3dIndex$Companion_getInstance().toUnparsedTabIndex_lvro24$(new Tab3dIndex((tmp$_1 = toIntOrNull(padStart(currentProgramme.start.getDate().toString(), 2, 48) + padStart(currentProgramme.start.getHours().toString(), 2, 48))) != null ? tmp$_1 : 0, (tmp$_3 = (tmp$_2 = channels.node) != null ? tmp$_2.number : null) != null ? tmp$_3 : 0, this$EPG.tabIndexZ_0));
      (Kotlin.isType(tmp$_4 = document.querySelector('[tabindex=' + '"' + firstFocusTabIndex + '"' + ']'), HTMLElement) ? tmp$_4 : throwCCE()).focus();
    };
  }
  EPG.prototype.focusCurrentProgramme_0 = function () {
    var tmp$, tmp$_0;
    (tmp$_0 = (tmp$ = channels.node) != null ? tmp$.information : null) != null ? (tmp$_0.getXMLTV_29qkou$(EPG$focusCurrentProgramme$lambda(this)), Unit) : null;
  };
  EPG.prototype.setChannelProgrammeTimeLineContent_0 = function () {
    var tmp$, tmp$_0;
    tmp$ = channels.iterator();
    while (tmp$.hasNext()) {
      var channel = tmp$.next();
      var id = 'channel' + channel.number + 'ProgrammeTimeLine';
      this.addProgrammeOnTimeLine_0(Kotlin.isType(tmp$_0 = document.getElementById(id), HTMLDivElement) ? tmp$_0 : throwCCE(), channel, new XMLTV$Programme(this.fromDate_0, this.toDate_0, void 0, void 0, void 0, void 0, void 0, new MultiLanguageString(ArrayLinkList_init([new MultiLanguageString$LanguageString('', '\u66AB\u7121\u8CC7\u8A0A')]))));
      this.loadProgrammeListTableContentChannelProgrammeTimeLine_0(channel);
    }
  };
  EPG.prototype.newChannelProgrammeTimeLineArea_0 = function () {
    var tmp$;
    tmp$ = channels.iterator();
    while (tmp$.hasNext()) {
      var channel = tmp$.next();
      this.programmeListTable_0.appendChild(this.newProgrammeListBlockLine_0('channel' + channel.number + 'ProgrammeTimeLine'));
    }
  };
  function EPG$syncScroll$lambda() {
    jQuery('#epgProgrammeListChannelList').scrollTop(jQuery(this).scrollTop());
    jQuery('#epgProgrammeListTimeLine').scrollLeft(jQuery(this).scrollLeft());
  }
  EPG.prototype.syncScroll_0 = function () {
    jQuery('#epgProgrammeListTable').on('scroll', EPG$syncScroll$lambda);
  };
  EPG.prototype.setProgrammeListTable_0 = function () {
    this.programmeListTable_0.innerHTML = '';
    this.newChannelProgrammeTimeLineArea_0();
    this.setChannelProgrammeTimeLineContent_0();
    this.syncScroll_0();
    this.focusCurrentProgramme_0();
  };
  EPG.prototype.setProgrammeList_0 = function () {
    this.setProgrammeListCurrentDisplayDate_0();
    this.setProgrammeListTimeLine_0();
    this.setProgrammeListChannelList_0();
    this.setProgrammeListTable_0();
  };
  EPG.prototype.show = function () {
    UserInterface.prototype.show.call(this);
    this.setDisplayCurrentDateBox_0();
    this.setProgrammeList_0();
  };
  EPG.prototype.hide = function () {
    UserInterface.prototype.hide.call(this);
    window.clearTimeout(this.updateDisplayCurrentDateBoxTimer_0);
  };
  function EPG_init$lambda(this$EPG) {
    return function (event) {
      this$EPG.hide();
    };
  }
  EPG.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'EPG',
    interfaces: [UserInterface]
  };
  var EPG_instance = null;
  function EPG_getInstance() {
    if (EPG_instance === null) {
      new EPG();
    }
    return EPG_instance;
  }
  function EnteringNumberBox() {
    EnteringNumberBox_instance = this;
    UserInterface.call(this, 'enteringNumberBox');
    this.enteringNumberBox_0 = document.getElementById('enteringNumberBox');
    this.text_0 = document.getElementById('enteringNumberBoxText');
    this.enteringNumber_0 = 0;
    this.enteringMinus_0 = '';
    this.isEnteringNumber_0 = false;
    this.enteringNumberWaitingTime_0 = 3500;
    println('Init EnteringNumberBox');
  }
  EnteringNumberBox.prototype.update = function () {
    this.text_0.innerHTML = this.enteringMinus_0 + toString(this.enteringNumber_0);
  };
  EnteringNumberBox.prototype.enteringNumberToDesignatedChannelRun_0 = function () {
    this.hide();
    var channelNumber = toIntOrNull(this.enteringMinus_0 + toString(this.enteringNumber_0));
    if (channelNumber != null) {
      designatedChannel(channelNumber);
    }
    this.enteringNumber_0 = 0;
    this.enteringMinus_0 = '';
    this.isEnteringNumber_0 = false;
  };
  function EnteringNumberBox$enter$lambda(this$EnteringNumberBox) {
    return function () {
      this$EnteringNumberBox.enteringNumberToDesignatedChannelRun_0();
    };
  }
  EnteringNumberBox.prototype.enter_61zpoe$ = function (numberString) {
    if (!this.isEnteringNumber_0) {
      window.setTimeout(EnteringNumberBox$enter$lambda(this), this.enteringNumberWaitingTime_0);
    }
    var number = toIntOrNull(numberString);
    if (number != null) {
      this.enteringNumber_0 = (this.enteringNumber_0 * 10 | 0) + number | 0;
    }
     else if (equals(numberString, '-')) {
      if (equals(this.enteringMinus_0, '')) {
        this.enteringMinus_0 = '-';
      }
       else {
        this.enteringMinus_0 = '';
      }
    }
    this.isEnteringNumber_0 = true;
    this.update();
    this.show();
  };
  EnteringNumberBox.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'EnteringNumberBox',
    interfaces: [UserInterface]
  };
  var EnteringNumberBox_instance = null;
  function EnteringNumberBox_getInstance() {
    if (EnteringNumberBox_instance === null) {
      new EnteringNumberBox();
    }
    return EnteringNumberBox_instance;
  }
  function FullScreenButton() {
    FullScreenButton_instance = this;
    UserInterface.call(this, 'fullScreenButton');
    var tmp$;
    this.fullScreenButton_0 = Kotlin.isType(tmp$ = document.getElementById('fullScreenButton'), HTMLButtonElement) ? tmp$ : throwCCE();
    this.enterFullscreenIcon_0 = '<i class="icon-font">&#xe80c;<\/i>';
    this.exitFullscreenIcon_0 = '<i class="icon-font">&#xe80b;<\/i>';
    if (document.fullscreenEnabled) {
      this.show();
    }
     else {
      this.hide();
    }
    this.fullScreenButton_0.onclick = FullScreenButton_init$lambda(this);
    println('Init FullScreenButton');
  }
  FullScreenButton.prototype.enterFullscreen = function () {
    var element = document.body;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    }
     else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    }
     else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    }
     else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  };
  FullScreenButton.prototype.exitFullscreen = function () {
    var document_0 = document;
    if (document_0.exitFullscreen) {
      document_0.exitFullscreen();
    }
     else if (document_0.mozCancelFullScreen) {
      document_0.mozCancelFullScreen();
    }
     else if (document_0.webkitExitFullscreen) {
      document_0.webkitExitFullscreen();
    }
     else if (document_0.msExitFullscreen) {
      document_0.msExitFullscreen();
    }
  };
  FullScreenButton.prototype.isFullscreen = function () {
    return (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) != undefined;
  };
  FullScreenButton.prototype.enterExitFullScreenAlternately = function () {
    if (this.isFullscreen()) {
      this.exitFullscreen();
      this.fullScreenButton_0.innerHTML = this.enterFullscreenIcon_0;
    }
     else {
      this.enterFullscreen();
      this.fullScreenButton_0.innerHTML = this.exitFullscreenIcon_0;
    }
  };
  function FullScreenButton_init$lambda(this$FullScreenButton) {
    return function (event) {
      this$FullScreenButton.enterExitFullScreenAlternately();
    };
  }
  FullScreenButton.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FullScreenButton',
    interfaces: [UserInterface]
  };
  var FullScreenButton_instance = null;
  function FullScreenButton_getInstance() {
    if (FullScreenButton_instance === null) {
      new FullScreenButton();
    }
    return FullScreenButton_instance;
  }
  function HKNBPAppLayerBridge() {
    HKNBPAppLayerBridge_instance = this;
    this.confirmHKNBPCoreLoaded = HKNBPAppLayerBridge$confirmHKNBPCoreLoaded$lambda;
    window.addEventListener('message', HKNBPAppLayerBridge_init$lambda(this), false);
    println('Init HKNBPAppLayerBridge');
  }
  function HKNBPAppLayerBridge$confirmHKNBPCoreLoaded$lambda() {
    var responder = {};
    responder.name = 'HKNBP_Core';
    responder.message = true;
    window.parent.postMessage(JSON.stringify(responder), '*');
  }
  function HKNBPAppLayerBridge_init$lambda(this$HKNBPAppLayerBridge) {
    return function (event) {
      try {
        var confirmHKNBPCoreLoaded = this$HKNBPAppLayerBridge.confirmHKNBPCoreLoaded;
        var callMessage = JSON.parse(event.data.toString());
        if (callMessage.name == 'HKNBP_AppLayer') {
          eval(callMessage.expr);
        }
      }
       catch (e) {
        println('ListenHKNBPAppLayerCall\u8870\u5DE6: ' + e.toString() + '\n' + event.data.toString());
      }
    };
  }
  HKNBPAppLayerBridge.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'HKNBPAppLayerBridge',
    interfaces: []
  };
  var HKNBPAppLayerBridge_instance = null;
  function HKNBPAppLayerBridge_getInstance() {
    if (HKNBPAppLayerBridge_instance === null) {
      new HKNBPAppLayerBridge();
    }
    return HKNBPAppLayerBridge_instance;
  }
  function LoadFile() {
    LoadFile_instance = this;
    this.cacheShelfLife = 604800;
    println('Init LoadFile');
  }
  LoadFile.prototype.load_19mbxw$ = function (cacheShelfLife, filePath) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', filePath, false);
    xmlhttp.setRequestHeader('cache-control', 'max-age=' + cacheShelfLife);
    xmlhttp.send();
    return xmlhttp;
  };
  LoadFile.prototype.load_61zpoe$ = function (filePath) {
    return this.load_19mbxw$(this.cacheShelfLife, filePath);
  };
  function LoadFile$load$lambda$lambda(closure$isLoaded, closure$onFailedLoadFile, closure$filePaths, closure$onLoadedFile, this$LoadFile) {
    return function () {
      var tmp$;
      if (!closure$isLoaded.v) {
        closure$onFailedLoadFile();
        tmp$ = closure$filePaths.nodeID;
        if (tmp$ == null) {
          return;
        }
        if (tmp$ < (closure$filePaths.size - 1 | 0)) {
          closure$filePaths.next();
          this$LoadFile.load_uq4zwc$(closure$onLoadedFile, closure$onFailedLoadFile, closure$filePaths);
        }
      }
    };
  }
  function LoadFile$load$lambda(closure$isLoaded, closure$onFailedLoadFile, closure$filePaths, closure$onLoadedFile, this$LoadFile) {
    return function () {
      window.setTimeout(LoadFile$load$lambda$lambda(closure$isLoaded, closure$onFailedLoadFile, closure$filePaths, closure$onLoadedFile, this$LoadFile), 2000);
    };
  }
  function LoadFile$load$lambda_0(closure$xmlhttp, closure$isLoaded, closure$onLoadedFile, closure$onFailedLoadFileProgram) {
    return function (event) {
      if (closure$xmlhttp.readyState === toShort(4) && closure$xmlhttp.status === toShort(200)) {
        closure$isLoaded.v = true;
        closure$onLoadedFile(closure$xmlhttp);
      }
       else {
        closure$onFailedLoadFileProgram();
      }
    };
  }
  LoadFile.prototype.load_duo3m8$ = function (onLoadedFile, onFailedLoadFile, cacheShelfLife, filePaths) {
    var tmp$;
    var xmlhttp = new XMLHttpRequest();
    var isLoaded = {v: false};
    var onFailedLoadFileProgram = LoadFile$load$lambda(isLoaded, onFailedLoadFile, filePaths, onLoadedFile, this);
    xmlhttp.onreadystatechange = LoadFile$load$lambda_0(xmlhttp, isLoaded, onLoadedFile, onFailedLoadFileProgram);
    xmlhttp.ontimeout = onFailedLoadFileProgram;
    xmlhttp.onerror = onFailedLoadFileProgram;
    var path = (tmp$ = filePaths.node) != null ? tmp$ : '';
    if (startsWith(path, 'http')) {
      var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
      path = cors_api_url + path;
    }
    xmlhttp.open('GET', path, true);
    xmlhttp.setRequestHeader('cache-control', 'max-age=' + cacheShelfLife);
    xmlhttp.send();
  };
  LoadFile.prototype.load_1ihi1i$ = function (onLoadedFile, onFailedLoadFile, cacheShelfLife, filePath) {
    this.load_duo3m8$(onLoadedFile, onFailedLoadFile, cacheShelfLife, ArrayLinkList_init_1(filePath));
  };
  LoadFile.prototype.load_q2uuwa$ = function (onLoadedFile, onFailedLoadFile, cacheShelfLife, filePath) {
    this.load_1ihi1i$(onLoadedFile, onFailedLoadFile, cacheShelfLife, filePath);
  };
  LoadFile.prototype.load_uq4zwc$ = function (onLoadedFile, onFailedLoadFile, filePaths) {
    this.load_duo3m8$(onLoadedFile, onFailedLoadFile, this.cacheShelfLife, filePaths);
  };
  LoadFile.prototype.load_y8xsdy$ = function (onLoadedFile, onFailedLoadFile, filePath) {
    this.load_duo3m8$(onLoadedFile, onFailedLoadFile, this.cacheShelfLife, ArrayLinkList_init_1(filePath));
  };
  LoadFile.prototype.load_h2maru$ = function (onLoadedFile, onFailedLoadFile, filePath) {
    this.load_1ihi1i$(onLoadedFile, onFailedLoadFile, this.cacheShelfLife, filePath);
  };
  LoadFile.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LoadFile',
    interfaces: []
  };
  var LoadFile_instance = null;
  function LoadFile_getInstance() {
    if (LoadFile_instance === null) {
      new LoadFile();
    }
    return LoadFile_instance;
  }
  function LongClickEvent() {
    LongClickEvent_instance = this;
    this.onLongClick_kh28lv$_0 = new LongClickEvent$OnLongClick(LongClickEvent$onLongClick$lambda);
    var leftKey = 1;
    jQuery('button').mousedown(LongClickEvent_init$lambda(leftKey, this)).mouseup(LongClickEvent_init$lambda_0(leftKey, this)).mouseout(LongClickEvent_init$lambda_1(leftKey, this));
    println('Init LongClickEvent');
  }
  function LongClickEvent$OnLongClick(onLongClickProgram) {
    this.onLongClickProgram = onLongClickProgram;
    this.pressTimer_0 = 0;
    this.isPressDown = false;
  }
  function LongClickEvent$OnLongClick$mousedown$lambda$lambda(this$OnLongClick) {
    return function () {
      this$OnLongClick.onLongClickProgram();
    };
  }
  function LongClickEvent$OnLongClick$mousedown$lambda(this$OnLongClick) {
    return function () {
      if (this$OnLongClick.isPressDown) {
        this$OnLongClick.pressTimer_0 = window.setInterval(LongClickEvent$OnLongClick$mousedown$lambda$lambda(this$OnLongClick), 100);
      }
    };
  }
  LongClickEvent$OnLongClick.prototype.mousedown = function () {
    this.isPressDown = true;
    window.setTimeout(LongClickEvent$OnLongClick$mousedown$lambda(this), 500);
    return false;
  };
  LongClickEvent$OnLongClick.prototype.mouseup = function () {
    this.isPressDown = false;
    window.clearInterval(this.pressTimer_0);
    return false;
  };
  LongClickEvent$OnLongClick.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OnLongClick',
    interfaces: []
  };
  Object.defineProperty(LongClickEvent.prototype, 'onLongClick_0', {
    get: function () {
      return this.onLongClick_kh28lv$_0;
    },
    set: function (value) {
      this.onLongClick_kh28lv$_0.mouseup();
      this.onLongClick_kh28lv$_0 = value;
    }
  });
  function LongClickEvent$onLongClick$lambda() {
  }
  function LongClickEvent_init$lambda$lambda(closure$button) {
    return function () {
      closure$button.click();
    };
  }
  function LongClickEvent_init$lambda(closure$leftKey, this$LongClickEvent) {
    return function (event) {
      if (equals(closure$leftKey, event.which)) {
        var button = jQuery(this);
        this$LongClickEvent.onLongClick_0 = new LongClickEvent$OnLongClick(LongClickEvent_init$lambda$lambda(button));
        this$LongClickEvent.onLongClick_0.mousedown();
      }
    };
  }
  function LongClickEvent_init$lambda_0(closure$leftKey, this$LongClickEvent) {
    return function (event) {
      if (equals(closure$leftKey, event.which)) {
        this$LongClickEvent.onLongClick_0.mouseup();
      }
    };
  }
  function LongClickEvent_init$lambda_1(closure$leftKey, this$LongClickEvent) {
    return function (event) {
      if (equals(closure$leftKey, event.which)) {
        this$LongClickEvent.onLongClick_0.mouseup();
      }
    };
  }
  LongClickEvent.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LongClickEvent',
    interfaces: []
  };
  var LongClickEvent_instance = null;
  function LongClickEvent_getInstance() {
    if (LongClickEvent_instance === null) {
      new LongClickEvent();
    }
    return LongClickEvent_instance;
  }
  function Comparator$ObjectLiteral_0(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_0.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareBy$lambda_0 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function setConsoleLogsListener$lambda() {
    try {
      console.stdlog = console.log.bind(console);
      console.logs = [];
      return console.log = function () {
        if (1000 < console.logs.length) {
          console.logs.shift();
        }
        console.logs.push(Array.from(arguments));
        console.stdlog.apply(console, arguments);
      };
    }
     catch (e) {
      return println('setConsoleLogListener\u54C0\u5DE6: ' + e.toString()), Unit;
    }
  }
  var setConsoleLogsListener;
  function getConsoleLogs$lambda() {
    var tmp$;
    try {
      var consoleLogs = console.logs;
      var logs = '';
      var i = 0;
      while (i < ((tmp$ = toIntOrNull(consoleLogs.length.toString())) != null ? tmp$ : 0)) {
        logs += consoleLogs[i] + '\n';
        i = i + 1 | 0;
      }
      return logs;
    }
     catch (e) {
      println('getConsoleLog\u54C0\u5DE6: ' + e.toString());
    }
    return '';
  }
  var getConsoleLogs;
  var jQuery;
  function updateURLParameter(param, paramVal) {
    var tmp$, tmp$_0, tmp$_1;
    var url = window.location.href;
    var TheAnchor = null;
    var newAdditionalURL = '';
    var tempArray = split(url, ['?']);
    var baseURL = getOrNull(tempArray, 0);
    var additionalURL = getOrNull(tempArray, 1);
    var temp = '';
    if (additionalURL != null) {
      var tmpAnchor = split(additionalURL, ['#']);
      var TheParams = getOrNull(tmpAnchor, 0);
      TheAnchor = getOrNull(tmpAnchor, 1);
      if (TheAnchor != null) {
        additionalURL = TheParams;
      }
      tempArray = split(ensureNotNull(additionalURL), ['&']);
      tmp$ = tempArray.size;
      for (var i = 0; i < tmp$; i++) {
        if (!equals((tmp$_1 = (tmp$_0 = getOrNull(tempArray, i)) != null ? split_0(tmp$_0, Kotlin.charArrayOf(61)) : null) != null ? getOrNull(tmp$_1, 0) : null, param)) {
          newAdditionalURL += temp + getOrNull(tempArray, i);
          temp = '&';
        }
      }
    }
     else {
      var tmpAnchor_0 = split(ensureNotNull(baseURL), ['#']);
      var TheParams_0 = getOrNull(tmpAnchor_0, 0);
      TheAnchor = getOrNull(tmpAnchor_0, 1);
      if (TheParams_0 != null) {
        baseURL = TheParams_0;
      }
    }
    var _paramVal = paramVal;
    if (TheAnchor != null) {
      _paramVal += '#' + TheAnchor;
    }
    var rows_txt = temp + '' + param + '=' + _paramVal;
    window.history.replaceState('', '', baseURL + '?' + newAdditionalURL + rows_txt);
  }
  var rootURL;
  function coreVersion$lambda() {
    var tmp$;
    var value = '';
    var savedValue = (tmp$ = localStorage.getItem('CoreVersion')) != null ? tmp$ : '';
    try {
      value = coreVersion != null ? coreVersion : savedValue;
    }
     catch (e) {
      value = savedValue;
    }
    localStorage.setItem('CoreVersion', value);
    return value;
  }
  var coreVersion_0;
  var appVersion;
  var player;
  function updateChannels$ObjectLiteral() {
  }
  updateChannels$ObjectLiteral.prototype.onNodeChanged_t4rudg$ = function (preChangeNodeID, postChangeNodeID, preChangeNode, postChangeNode) {
    var tmp$;
    localStorage.setItem('RecentlyWatchedChannel', toString(postChangeNodeID));
    if (((tmp$ = postChangeNode != null ? postChangeNode.number : null) != null ? tmp$ : 0) < 0) {
      updateURLParameter('channelXmlString', toString(postChangeNode != null ? postChangeNode.number : null));
    }
     else {
      updateURLParameter('channel', toString(postChangeNode != null ? postChangeNode.number : null));
    }
    updateChannel();
  };
  updateChannels$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ArrayLinkList$OnNodeEventListener]
  };
  function updateChannels$lambda$lambda(channel) {
    return channel.number;
  }
  function updateChannels$lambda$lambda_0() {
    var tmp$;
    var channelParam = (tmp$ = (new URL(window.location.href)).searchParams.get('channel')) != null ? toIntOrNull(tmp$) : null;
    var tmp$_0 = channels;
    var $receiver = channels;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_1;
      tmp$_1 = $receiver.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        if (element.number === channelParam) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return tmp$_0.indexOfOrNull_11rb$(firstOrNull$result);
  }
  function updateChannels$lambda$lambda_1() {
    var tmp$;
    var recentlyWatchedChannel = (tmp$ = localStorage.getItem('RecentlyWatchedChannel')) != null ? toInt(tmp$) : null;
    if (recentlyWatchedChannel != null) {
      if (recentlyWatchedChannel < channels.size) {
        return recentlyWatchedChannel;
      }
       else {
        return get_lastIndex(channels);
      }
    }
     else {
      return null;
    }
  }
  function updateChannels$lambda(officialChannels) {
    var tmp$, tmp$_0, tmp$_1;
    channels.addAll_brywnq$(officialChannels);
    channels.addAll_brywnq$(CustomChannels_getInstance().getCustomChannels());
    var $receiver = channels;
    if ($receiver.size > 1) {
      sortWith($receiver, new Comparator$ObjectLiteral_0(compareBy$lambda_0(updateChannels$lambda$lambda)));
    }
    tmp$_1 = (tmp$ = updateChannels$lambda$lambda_0()) != null ? tmp$ : updateChannels$lambda$lambda_1();
    if (tmp$_1 == null) {
      if (channels.size <= 0) {
        tmp$_0 = 0;
      }
       else {
        tmp$_0 = Random.Default.nextInt_vux9f0$(0, channels.size);
      }
      tmp$_1 = tmp$_0;
    }
    channels.designated_za3lpa$(tmp$_1);
  }
  function updateChannels() {
    channels = ArrayLinkList_init([]);
    channels.addOnNodeEventListener_ljxrtv$(new updateChannels$ObjectLiteral());
    OfficialChannels_getInstance().getOfficialChannels_u69gef$(updateChannels$lambda);
    updateChannel();
    return channels;
  }
  var channels;
  function designatedChannel$lambda(dialogues) {
    var tmp$, tmp$_0;
    PromptBox_getInstance().promptMessage((tmp$_0 = (tmp$ = dialogues.node) != null ? tmp$.canNotFind : null) != null ? tmp$_0 : '');
  }
  function designatedChannel(channelNumber) {
    var tmp$ = channels;
    var $receiver = channels;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (element.number === channelNumber) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    var channelNumberNodeID = tmp$.indexOfOrNull_11rb$(firstOrNull$result);
    if (channelNumberNodeID != null) {
      channels.designated_za3lpa$(channelNumberNodeID);
      return true;
    }
     else {
      Dialogue$Companion_getInstance().getDialogues_fs1aqo$(designatedChannel$lambda);
      return false;
    }
  }
  function updateChannel$ObjectLiteral() {
    this.currentPlayer_0 = null;
    this.isPlaying_0 = false;
  }
  function updateChannel$ObjectLiteral$on$lambda(this$) {
    return function () {
      if (!this$.isPlaying_0 && equals(player, this$.currentPlayer_0)) {
        updateChannel();
      }
    };
  }
  updateChannel$ObjectLiteral.prototype.on_mdxcb7$ = function (onPlayerEvent) {
    switch (onPlayerEvent.name) {
      case 'playing':
        this.currentPlayer_0 = player;
        this.isPlaying_0 = true;
        break;
      case 'notPlaying':
        this.isPlaying_0 = false;
        window.setTimeout(updateChannel$ObjectLiteral$on$lambda(this), 15000);
        break;
      default:Kotlin.noWhenBranchMatched();
        break;
    }
  };
  updateChannel$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Player$OnPlayerEventListener]
  };
  function updateChannel() {
    var tmp$;
    player = new Player((tmp$ = channels.node) != null ? tmp$ : new Channel(0));
    player != null ? (player.addOnPlayerEventListener_j8fzjz$(new updateChannel$ObjectLiteral()), Unit) : null;
    player != null ? (player.play(), Unit) : null;
    VirtualRemote_getInstance().update();
  }
  function reductionTo(w, h) {
    var arr = new Int32Array(2);
    var p = w;
    var q = h;
    var a = p;
    var b = q;
    if (a >= b) {
      a = p;
      b = q;
    }
     else {
      a = q;
      b = p;
    }
    if (p !== 1 && q !== 1) {
      for (var i = b; i >= 2; i--) {
        if (p % i === 0 && q % i === 0) {
          p = p / i | 0;
          q = q / i | 0;
        }
      }
    }
    arr[0] = p;
    arr[1] = q;
    return arr;
  }
  function main(args) {
    try {
      UserControlPanel_getInstance();
      VirtualRemote_getInstance().show();
      ConsentPanel_getInstance();
      VirtualRemote_getInstance();
      LongClickEvent_getInstance();
      println('\u4ECB\u9762\u521D\u59CB\u5316\u5B8C\u6210');
    }
     catch (e) {
      println('\u4ECB\u9762\u521D\u59CB\u5316\u54C0\u5DE6: ' + e.toString());
    }
    println('Init Main');
  }
  function MultiLanguageString(langStringList) {
    MultiLanguageString$Companion_getInstance();
    if (langStringList === void 0)
      langStringList = ArrayLinkList_init([]);
    ArrayLinkList_init_3(langStringList, this);
    this.langStringList_0 = langStringList;
    this.addOnElementsChangeListener_9bqafr$(new MultiLanguageString_init$ObjectLiteral(this));
    this.changeToNeedToSelectLanguageOfFirst_0();
  }
  function MultiLanguageString$Companion() {
    MultiLanguageString$Companion_instance = this;
    var tmp$;
    this.currentUserSystemLanguage_0 = typeof (tmp$ = navigator.language || navigator.userLanguage) === 'string' ? tmp$ : throwCCE();
    this.userSelectLanguageSequence = MultiLanguageString$Companion$userSelectLanguageSequence$lambda(this)();
  }
  function MultiLanguageString$Companion$userSelectLanguageSequence$lambda$ObjectLiteral(closure$sequence) {
    this.closure$sequence = closure$sequence;
  }
  MultiLanguageString$Companion$userSelectLanguageSequence$lambda$ObjectLiteral.prototype.onElementsChange = function () {
    var tmp$;
    var languageOptionSequence = '';
    tmp$ = this.closure$sequence.iterator();
    while (tmp$.hasNext()) {
      var lang = tmp$.next();
      languageOptionSequence += '<option>' + MultiLanguageString$Companion_getInstance().currentUserSystemLanguage_0 + '<\/option>';
    }
    localStorage.setItem('userSelectLanguageOptionSequence', languageOptionSequence);
  };
  MultiLanguageString$Companion$userSelectLanguageSequence$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ArrayLinkList$OnElementsChangeListener]
  };
  function MultiLanguageString$Companion$userSelectLanguageSequence$lambda(this$MultiLanguageString$) {
    return function () {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      var languageSelect = Kotlin.isType(tmp$ = document.createElement('select'), HTMLSelectElement) ? tmp$ : throwCCE();
      languageSelect.innerHTML = (tmp$_0 = localStorage.getItem('userSelectLanguageOptionSequence')) != null ? tmp$_0 : '<option>' + this$MultiLanguageString$.currentUserSystemLanguage_0 + '<\/option>';
      var sequence = ArrayLinkList_init([]);
      sequence.addOnElementsChangeListener_9bqafr$(new MultiLanguageString$Companion$userSelectLanguageSequence$lambda$ObjectLiteral(sequence));
      tmp$_1 = languageSelect.length;
      for (var index = 0; index < tmp$_1; index++) {
        sequence.add_11rb$((Kotlin.isType(tmp$_2 = languageSelect.options[index], HTMLOptionElement) ? tmp$_2 : throwCCE()).text);
      }
      return sequence;
    };
  }
  MultiLanguageString$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MultiLanguageString$Companion_instance = null;
  function MultiLanguageString$Companion_getInstance() {
    if (MultiLanguageString$Companion_instance === null) {
      new MultiLanguageString$Companion();
    }
    return MultiLanguageString$Companion_instance;
  }
  function MultiLanguageString$LanguageString(lang, string) {
    this.lang_klsrhp$_0 = lang;
    this.string_ejq9ps$_0 = string;
  }
  Object.defineProperty(MultiLanguageString$LanguageString.prototype, 'lang', {
    get: function () {
      return this.lang_klsrhp$_0;
    }
  });
  Object.defineProperty(MultiLanguageString$LanguageString.prototype, 'string', {
    get: function () {
      return this.string_ejq9ps$_0;
    }
  });
  MultiLanguageString$LanguageString.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LanguageString',
    interfaces: []
  };
  Object.defineProperty(MultiLanguageString.prototype, 'lang', {
    get: function () {
      var tmp$;
      return (tmp$ = this.node) != null ? tmp$.lang : null;
    }
  });
  Object.defineProperty(MultiLanguageString.prototype, 'string', {
    get: function () {
      var tmp$;
      return (tmp$ = this.node) != null ? tmp$.string : null;
    }
  });
  MultiLanguageString.prototype.toString = function () {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.node) != null ? tmp$.string : null) != null ? tmp$_0 : 'null';
  };
  MultiLanguageString.prototype.getAllStringByLanguage_61zpoe$ = function (lang) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var langElementList = split(lang, ['-']);
    var allString = this;
    tmp$ = langElementList.size;
    for (var index = 0; index < tmp$; index++) {
      var langElement = getOrNull(langElementList, index);
      var findSelectLanguageListTemp = ArrayList_init();
      tmp$_0 = allString.iterator();
      while (tmp$_0.hasNext()) {
        var findSelectLanguageListElement = tmp$_0.next();
        var compareElement = (tmp$_2 = (tmp$_1 = findSelectLanguageListElement.lang) != null ? split(tmp$_1, ['-']) : null) != null ? getOrNull(tmp$_2, index) : null;
        if ((langElement != null ? langElement.toUpperCase() : null) === (compareElement != null ? compareElement.toUpperCase() : null)) {
          findSelectLanguageListTemp.add_11rb$(findSelectLanguageListElement);
        }
      }
      allString = findSelectLanguageListTemp;
    }
    if (allString.size === 0) {
      tmp$_3 = null;
    }
     else {
      tmp$_3 = allString;
    }
    return tmp$_3;
  };
  MultiLanguageString.prototype.getAllStringByLanguage_un5gdn$ = function (langs) {
    var tmp$, tmp$_0, tmp$_1;
    var langStringList = ArrayList_init();
    tmp$ = langs.iterator();
    while (tmp$.hasNext()) {
      var lang = tmp$.next();
      var selectLanguage = (tmp$_0 = this.getAllStringByLanguage_61zpoe$(lang)) != null ? getOrNull(tmp$_0, 0) : null;
      if (selectLanguage != null) {
        langStringList.add_11rb$(selectLanguage);
      }
    }
    if (langStringList.size < 1) {
      tmp$_1 = null;
    }
     else {
      tmp$_1 = langStringList;
    }
    return tmp$_1;
  };
  MultiLanguageString.prototype.getAllStringByLanguage = function () {
    return this.getAllStringByLanguage_un5gdn$(MultiLanguageString$Companion_getInstance().userSelectLanguageSequence);
  };
  MultiLanguageString.prototype.changeToNeedToSelectLanguageOfFirst_0 = function () {
    var tmp$;
    var selectLanguage = (tmp$ = this.getAllStringByLanguage_un5gdn$(MultiLanguageString$Companion_getInstance().userSelectLanguageSequence)) != null ? getOrNull(tmp$, 0) : null;
    if (selectLanguage != null) {
      this.designated_11rb$(selectLanguage);
    }
     else {
      this.node = getOrNull(this, 0);
    }
  };
  function MultiLanguageString_init$ObjectLiteral(this$MultiLanguageString) {
    this.this$MultiLanguageString = this$MultiLanguageString;
  }
  MultiLanguageString_init$ObjectLiteral.prototype.onElementsChange = function () {
    this.this$MultiLanguageString.changeToNeedToSelectLanguageOfFirst_0();
  };
  MultiLanguageString_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ArrayLinkList$OnElementsChangeListener]
  };
  MultiLanguageString.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MultiLanguageString',
    interfaces: [ArrayLinkList]
  };
  MultiLanguageString.prototype.component1_0 = function () {
    return this.langStringList_0;
  };
  MultiLanguageString.prototype.copy_2rd0lw$ = function (langStringList) {
    return new MultiLanguageString(langStringList === void 0 ? this.langStringList_0 : langStringList);
  };
  MultiLanguageString.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.langStringList_0) | 0;
    return result;
  };
  MultiLanguageString.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.langStringList_0, other.langStringList_0))));
  };
  function MutedDescription() {
    MutedDescription_instance = this;
    UserInterface.call(this, 'mutedDescription');
    var tmp$, tmp$_0;
    this.mutedDescription_0 = Kotlin.isType(tmp$ = document.getElementById('mutedDescription'), HTMLDivElement) ? tmp$ : throwCCE();
    this.mutedDescriptionButton_0 = Kotlin.isType(tmp$_0 = document.getElementById('mutedDescriptionButton'), HTMLButtonElement) ? tmp$_0 : throwCCE();
    this.mutedDescriptionButton_0.onclick = MutedDescription_init$lambda;
    println('Init MutedDescription');
  }
  MutedDescription.prototype.update_6taknv$ = function (muted) {
    println('MDupdateV');
    if (muted) {
      this.show();
    }
     else {
      this.hide();
    }
  };
  function MutedDescription$update$lambda$lambda(this$MutedDescription) {
    return function (muted) {
      this$MutedDescription.update_6taknv$(muted);
    };
  }
  function MutedDescription$update$lambda(this$MutedDescription) {
    return function () {
      Player$Companion_getInstance().getMuted_y8twos$(MutedDescription$update$lambda$lambda(this$MutedDescription));
    };
  }
  function MutedDescription$update$lambda_0(closure$script) {
    return function () {
      closure$script();
    };
  }
  function MutedDescription$update$lambda_1(closure$script) {
    return function () {
      closure$script();
    };
  }
  function MutedDescription$update$lambda_2(closure$script) {
    return function () {
      closure$script();
    };
  }
  MutedDescription.prototype.update = function () {
    println('MDupdate');
    var script = MutedDescription$update$lambda(this);
    script();
    window.setTimeout(MutedDescription$update$lambda_0(script), 1000);
    window.setTimeout(MutedDescription$update$lambda_1(script), 10000);
    window.setTimeout(MutedDescription$update$lambda_2(script), 60000);
  };
  function MutedDescription_init$lambda$lambda(muted) {
    Player$Companion_getInstance().setMuted_6taknv$(!muted);
  }
  function MutedDescription_init$lambda(event) {
    Player$Companion_getInstance().getMuted_y8twos$(MutedDescription_init$lambda$lambda);
  }
  MutedDescription.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MutedDescription',
    interfaces: [UserInterface]
  };
  var MutedDescription_instance = null;
  function MutedDescription_getInstance() {
    if (MutedDescription_instance === null) {
      new MutedDescription();
    }
    return MutedDescription_instance;
  }
  function NativeAppInstallButton() {
    NativeAppInstallButton_instance = this;
    UserInterface.call(this, 'nativeAppInstallButton');
    var tmp$;
    this.nativeAppInstallButton_0 = Kotlin.isType(tmp$ = document.getElementById('nativeAppInstallButton'), HTMLButtonElement) ? tmp$ : throwCCE();
    this.installPromptEvent_0 = null;
    this.hide();
    window.addEventListener('appinstalled', NativeAppInstallButton_init$lambda(this));
    window.addEventListener('beforeinstallprompt', NativeAppInstallButton_init$lambda_0(this));
    this.nativeAppInstallButton_0.onclick = NativeAppInstallButton_init$lambda_1(this);
    println('Init NativeAppInstallButton');
  }
  function NativeAppInstallButton_init$lambda(this$NativeAppInstallButton) {
    return function (event) {
      this$NativeAppInstallButton.hide();
    };
  }
  function NativeAppInstallButton_init$lambda_0(this$NativeAppInstallButton) {
    return function (event) {
      event.preventDefault();
      this$NativeAppInstallButton.installPromptEvent_0 = event;
      this$NativeAppInstallButton.show();
    };
  }
  function NativeAppInstallButton_init$lambda_1(this$NativeAppInstallButton) {
    return function (event) {
      this$NativeAppInstallButton.installPromptEvent_0.prompt();
    };
  }
  NativeAppInstallButton.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NativeAppInstallButton',
    interfaces: [UserInterface]
  };
  var NativeAppInstallButton_instance = null;
  function NativeAppInstallButton_getInstance() {
    if (NativeAppInstallButton_instance === null) {
      new NativeAppInstallButton();
    }
    return NativeAppInstallButton_instance;
  }
  function Comparator$ObjectLiteral_1(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_1.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_1.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareBy$lambda_1 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function OfficialChannels() {
    OfficialChannels_instance = this;
    ChannelsReader.call(this);
    println('Init OfficialChannels');
  }
  function OfficialChannels$getOfficialChannels$lambda$lambda(channel) {
    return channel.number;
  }
  function OfficialChannels$getOfficialChannels$lambda(closure$onLoadedChannelsListener) {
    return function (channels) {
      if (channels.size > 1) {
        sortWith(channels, new Comparator$ObjectLiteral_1(compareBy$lambda_1(OfficialChannels$getOfficialChannels$lambda$lambda)));
      }
      println('\u6210\u529F\u8B80\u53D6official_channels.xml' + '\n' + '\u6B64OfficialChannels\u6709' + channels.size + '\u689D\u983B\u9053');
      closure$onLoadedChannelsListener(channels);
    };
  }
  function OfficialChannels$getOfficialChannels$lambda_0() {
    println('\u672A\u80FD\u8B80\u53D6official_channels.xml');
  }
  OfficialChannels.prototype.getOfficialChannels_u69gef$ = function (onLoadedChannelsListener) {
    this.parseChannels_d7jqb7$(OfficialChannels$getOfficialChannels$lambda(onLoadedChannelsListener), OfficialChannels$getOfficialChannels$lambda_0, ['https://hknbp.org/data/official_channels.xml', 'data/official_channels.xml']);
  };
  OfficialChannels.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'OfficialChannels',
    interfaces: [ChannelsReader]
  };
  var OfficialChannels_instance = null;
  function OfficialChannels_getInstance() {
    if (OfficialChannels_instance === null) {
      new OfficialChannels();
    }
    return OfficialChannels_instance;
  }
  function PictureInPictureButton() {
    PictureInPictureButton_instance = this;
    UserInterface.call(this, 'pictureInPictureButton');
    var tmp$;
    this.pictureInPictureButton_0 = Kotlin.isType(tmp$ = document.getElementById('pictureInPictureButton'), HTMLButtonElement) ? tmp$ : throwCCE();
    this.pictureInPictureButton_0.style.display = 'none';
    this.pictureInPictureButton_0.onclick = PictureInPictureButton_init$lambda;
    println('Init PictureInPictureButton');
  }
  function PictureInPictureButton_init$lambda(event) {
    player != null ? (player.pictureInPictureModeSwitch(), Unit) : null;
  }
  PictureInPictureButton.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PictureInPictureButton',
    interfaces: [UserInterface]
  };
  var PictureInPictureButton_instance = null;
  function PictureInPictureButton_getInstance() {
    if (PictureInPictureButton_instance === null) {
      new PictureInPictureButton();
    }
    return PictureInPictureButton_instance;
  }
  function Player(channel) {
    Player$Companion_getInstance();
    UserInterface.call(this, 'player');
    this.channel_0 = channel;
    this.watchingCounter_0 = new WatchingCounter(this.channel_0);
    this.onPlayerEvents_0 = ArrayList_init();
    this.videoTracks_15iau4$_0 = Player$videoTracks$lambda(this)();
    this.audioTracks_oydct3$_0 = Player$audioTracks$lambda(this)();
    this.subtitleTracks_my27pv$_0 = Player$subtitleTracks$lambda(this)();
    this.iframePlayerVolumeInit_0 = Player$iframePlayerVolumeInit$lambda(this)();
    this.iframePlayerMutedInit_0 = Player$iframePlayerMutedInit$lambda(this)();
    this.onPlaying_0 = Player$onPlaying$lambda(this);
    this.onNotPlaying_0 = Player$onNotPlaying$lambda(this);
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    (tmp$_1 = Player$Companion_getInstance().iframePlayer_0) != null ? (tmp$_1.src = (tmp$_0 = (tmp$ = this.channel_0.sources.node) != null ? tmp$.iFramePlayerSrc : null) != null ? tmp$_0 : 'iframePlayer/videojs_hls.html') : null;
    (tmp$_2 = Player$Companion_getInstance().iframePlayer_0) != null ? (tmp$_2.onload = Player_init$lambda(this)) : null;
    this.addOnPlayerEventListener_j8fzjz$(new Player_init$ObjectLiteral(this));
  }
  function Player$Companion() {
    Player$Companion_instance = this;
    this.iframePlayer_0 = document.getElementById('iframePlayer');
    this.callIframePlayerFunctionList_0 = ArrayList_init();
    this.listenIframePlayerScript_0 = Player$Companion$listenIframePlayerScript$lambda;
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.volume_xu8cq7$_0 = (tmp$_0 = (tmp$ = localStorage.getItem('RecentlyVolume')) != null ? toDoubleOrNull(tmp$) : null) != null ? tmp$_0 : 100.0;
    this.volumeUp = Player$Companion$volumeUp$lambda(this);
    this.volumeDown = Player$Companion$volumeDown$lambda(this);
    this.muted_oj2db2$_0 = (tmp$_2 = (tmp$_1 = localStorage.getItem('RecentlyMuted')) != null ? toBoolean(tmp$_1) : null) != null ? tmp$_2 : false;
    this.volumeMute_5wo648$_0 = Player$Companion$volumeMute$lambda(this);
    this.isCheckVideoAutoPlayNeedToMute_0 = true;
    this.checkNeedCanTouchIframePlayerModeTimer_r3xwh1$_0 = 0;
    this.checkIsLowSignalShowChannelDescriptionTimer_nk3s78$_0 = 0;
    this.setListenIframePlayerMessage_0();
  }
  function Player$Companion$callIframePlayerFunction$lambda(returnValue) {
  }
  function Player$Companion$callIframePlayerFunction$lambda_0(this$Player$, closure$caller) {
    return function () {
      this$Player$.callIframePlayerFunctionList_0.remove_11rb$(closure$caller);
    };
  }
  Player$Companion.prototype.callIframePlayerFunction_0 = function (evalScript, onReturn) {
    if (onReturn === void 0)
      onReturn = Player$Companion$callIframePlayerFunction$lambda;
    var caller = {};
    caller.evalScript = evalScript;
    caller.name = 'HKNBPCore';
    caller.id = (new Date()).getTime().toString() + toString(Random.Default.nextInt_vux9f0$(0, 99999999));
    caller.onReturn = onReturn;
    this.callIframePlayerFunctionList_0.add_11rb$(caller);
    window.setTimeout(Player$Companion$callIframePlayerFunction$lambda_0(this, caller), 60000);
    try {
      this.iframePlayer_0.contentWindow.postMessage(JSON.stringify(caller), '*');
    }
     catch (e) {
      println('iframePlayer\u6709\u5572Function\u6435\u5514\u5230\u6216\u767C\u751F\u554F\u984C: ' + e.toString());
    }
  };
  Player$Companion.prototype.kotlinValueToEvalScriptUseableValue_0 = function (kotlinValue) {
    var obj = {};
    obj.value = kotlinValue;
    return 'JSON.parse(' + "'" + JSON.stringify(obj) + "'" + ').value';
  };
  function Player$Companion$setListenIframePlayerMessage$lambda(this$Player$) {
    return function (event) {
      this$Player$.listenIframePlayerScript_0(event);
    };
  }
  Player$Companion.prototype.setListenIframePlayerMessage_0 = function () {
    window.addEventListener('message', Player$Companion$setListenIframePlayerMessage$lambda(this), false);
  };
  Object.defineProperty(Player$Companion.prototype, 'volume_0', {
    get: function () {
      return this.volume_xu8cq7$_0;
    },
    set: function (value) {
      localStorage.setItem('RecentlyVolume', this.volume_0.toString());
      this.volume_xu8cq7$_0 = value;
    }
  });
  Player$Companion.prototype.setVolume_14dthe$ = function (volume) {
    var volumeChecked = volume;
    if (100 < volumeChecked) {
      volumeChecked = 100.0;
    }
    if (volumeChecked < 0) {
      volumeChecked = 0.0;
    }
    this.callIframePlayerFunction_0('onSetIframePlayerVolume(' + this.kotlinValueToEvalScriptUseableValue_0(volumeChecked) + ')');
    Player$Companion_getInstance().volume_0 = volumeChecked;
    VolumeDescription_getInstance().show_za3lpa$(3000);
  };
  function Player$Companion$getVolume$lambda(closure$onReturn) {
    return function (returnValue) {
      var tmp$, tmp$_0;
      closure$onReturn((tmp$_0 = (tmp$ = returnValue != null ? returnValue.toString() : null) != null ? toDoubleOrNull(tmp$) : null) != null ? tmp$_0 : 100.0);
    };
  }
  Player$Companion.prototype.getVolume_huw4wd$ = function (onReturn) {
    this.callIframePlayerFunction_0('onGetIframePlayerVolume(onReturn)', Player$Companion$getVolume$lambda(onReturn));
  };
  Object.defineProperty(Player$Companion.prototype, 'muted_0', {
    get: function () {
      return this.muted_oj2db2$_0;
    },
    set: function (value) {
      localStorage.setItem('RecentlyMuted', this.muted_0.toString());
      this.muted_oj2db2$_0 = value;
    }
  });
  function Player$Companion$setMuted$lambda(this$Player$) {
    return function (muted) {
      this$Player$.callIframePlayerFunction_0('onSetIframePlayerMuted(' + this$Player$.kotlinValueToEvalScriptUseableValue_0(muted) + ')');
      MutedDescription_getInstance().update_6taknv$(muted);
    };
  }
  function Player$Companion$setMuted$lambda_0(closure$muted, closure$setScript) {
    return function () {
      Player$Companion_getInstance().muted_0 = closure$muted;
      closure$setScript(closure$muted);
    };
  }
  function Player$Companion$setMuted$lambda_1(closure$setScript) {
    return function () {
      closure$setScript(true);
    };
  }
  Player$Companion.prototype.setMuted_6taknv$ = function (muted) {
    var setScript = Player$Companion$setMuted$lambda(this);
    if (this.isCheckVideoAutoPlayNeedToMute_0) {
      CanAutoplay_getInstance().checkVideoAutoPlayNeedToMute_9dmrm4$(Player$Companion$setMuted$lambda_0(muted, setScript), Player$Companion$setMuted$lambda_1(setScript));
    }
     else {
      Player$Companion_getInstance().muted_0 = muted;
      setScript(muted);
    }
  };
  function Player$Companion$getMuted$lambda(this$Player$, closure$onReturn) {
    return function (returnValue) {
      var tmp$, tmp$_0;
      MutedDescription_getInstance().update_6taknv$(this$Player$.muted_0);
      closure$onReturn((tmp$_0 = (tmp$ = returnValue != null ? returnValue.toString() : null) != null ? toBoolean(tmp$) : null) != null ? tmp$_0 : true);
    };
  }
  Player$Companion.prototype.getMuted_y8twos$ = function (onReturn) {
    this.callIframePlayerFunction_0('onGetIframePlayerMuted(onReturn)', Player$Companion$getMuted$lambda(this, onReturn));
  };
  function Player$Companion$set_Player$Companion$volumeMute$lambda$lambda(this$Player$, closure$value) {
    return function (muted) {
      if (muted) {
        this$Player$.setMuted_6taknv$(false);
      }
       else {
        this$Player$.setMuted_6taknv$(false);
        closure$value();
      }
    };
  }
  function Player$Companion$set_Player$Companion$volumeMute$lambda(this$Player$, closure$value) {
    return function () {
      this$Player$.getMuted_y8twos$(Player$Companion$set_Player$Companion$volumeMute$lambda$lambda(this$Player$, closure$value));
    };
  }
  Object.defineProperty(Player$Companion.prototype, 'volumeMute', {
    get: function () {
      return this.volumeMute_5wo648$_0;
    },
    set: function (value) {
      this.volumeMute_5wo648$_0 = Player$Companion$set_Player$Companion$volumeMute$lambda(this, value);
    }
  });
  Object.defineProperty(Player$Companion.prototype, 'checkNeedCanTouchIframePlayerModeTimer_0', {
    get: function () {
      return this.checkNeedCanTouchIframePlayerModeTimer_r3xwh1$_0;
    },
    set: function (value) {
      window.clearTimeout(this.checkNeedCanTouchIframePlayerModeTimer_0);
      this.checkNeedCanTouchIframePlayerModeTimer_r3xwh1$_0 = value;
    }
  });
  Object.defineProperty(Player$Companion.prototype, 'checkIsLowSignalShowChannelDescriptionTimer_0', {
    get: function () {
      return this.checkIsLowSignalShowChannelDescriptionTimer_nk3s78$_0;
    },
    set: function (value) {
      window.clearTimeout(this.checkIsLowSignalShowChannelDescriptionTimer_0);
      this.checkIsLowSignalShowChannelDescriptionTimer_nk3s78$_0 = value;
    }
  });
  function Player$Companion$listenIframePlayerScript$lambda(event) {
  }
  function Player$Companion$volumeUp$lambda$lambda(this$Player$) {
    return function (volume) {
      this$Player$.setVolume_14dthe$(volume + 1.0);
    };
  }
  function Player$Companion$volumeUp$lambda(this$Player$) {
    return function () {
      this$Player$.getVolume_huw4wd$(Player$Companion$volumeUp$lambda$lambda(this$Player$));
    };
  }
  function Player$Companion$volumeDown$lambda$lambda(this$Player$) {
    return function (volume) {
      this$Player$.setVolume_14dthe$(volume - 1.0);
    };
  }
  function Player$Companion$volumeDown$lambda(this$Player$) {
    return function () {
      this$Player$.getVolume_huw4wd$(Player$Companion$volumeDown$lambda$lambda(this$Player$));
    };
  }
  function Player$Companion$volumeMute$lambda$lambda(this$Player$) {
    return function (muted) {
      this$Player$.setMuted_6taknv$(!muted);
    };
  }
  function Player$Companion$volumeMute$lambda(this$Player$) {
    return function () {
      this$Player$.getMuted_y8twos$(Player$Companion$volumeMute$lambda$lambda(this$Player$));
    };
  }
  Player$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Player$Companion_instance = null;
  function Player$Companion_getInstance() {
    if (Player$Companion_instance === null) {
      new Player$Companion();
    }
    return Player$Companion_instance;
  }
  function Player$OnPlayerEvent(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Player$OnPlayerEvent_initFields() {
    Player$OnPlayerEvent_initFields = function () {
    };
    Player$OnPlayerEvent$playing_instance = new Player$OnPlayerEvent('playing', 0);
    Player$OnPlayerEvent$notPlaying_instance = new Player$OnPlayerEvent('notPlaying', 1);
  }
  var Player$OnPlayerEvent$playing_instance;
  function Player$OnPlayerEvent$playing_getInstance() {
    Player$OnPlayerEvent_initFields();
    return Player$OnPlayerEvent$playing_instance;
  }
  var Player$OnPlayerEvent$notPlaying_instance;
  function Player$OnPlayerEvent$notPlaying_getInstance() {
    Player$OnPlayerEvent_initFields();
    return Player$OnPlayerEvent$notPlaying_instance;
  }
  Player$OnPlayerEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OnPlayerEvent',
    interfaces: [Enum]
  };
  function Player$OnPlayerEvent$values() {
    return [Player$OnPlayerEvent$playing_getInstance(), Player$OnPlayerEvent$notPlaying_getInstance()];
  }
  Player$OnPlayerEvent.values = Player$OnPlayerEvent$values;
  function Player$OnPlayerEvent$valueOf(name) {
    switch (name) {
      case 'playing':
        return Player$OnPlayerEvent$playing_getInstance();
      case 'notPlaying':
        return Player$OnPlayerEvent$notPlaying_getInstance();
      default:throwISE('No enum constant org.sourcekey.hknbp.hknbp_core.Player.OnPlayerEvent.' + name);
    }
  }
  Player$OnPlayerEvent.valueOf_61zpoe$ = Player$OnPlayerEvent$valueOf;
  function Player$OnPlayerEventListener() {
  }
  Player$OnPlayerEventListener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'OnPlayerEventListener',
    interfaces: []
  };
  Player.prototype.addOnPlayerEventListener_j8fzjz$ = function (onPlayerEventListener) {
    this.onPlayerEvents_0.add_11rb$(onPlayerEventListener);
  };
  Object.defineProperty(Player.prototype, 'videoTracks', {
    get: function () {
      return this.videoTracks_15iau4$_0;
    },
    set: function (videoTracks) {
      this.videoTracks_15iau4$_0 = videoTracks;
    }
  });
  Player.prototype.nextVideoTrack = function () {
    this.videoTracks.next();
  };
  Player.prototype.previousVideoTrack = function () {
    this.videoTracks.previous();
  };
  function Player$designatedVideoTrack$lambda(dialogues) {
    var tmp$, tmp$_0;
    PromptBox_getInstance().promptMessage((tmp$_0 = (tmp$ = dialogues.node) != null ? tmp$.canNotFind : null) != null ? tmp$_0 : '');
  }
  Player.prototype.designatedVideoTrack = function (videoTrackID) {
    var videoTracksNodeID = TrackDescription$Companion_getInstance().toTracksNodeID_w1sgja$(this.videoTracks, videoTrackID);
    if (videoTracksNodeID != null) {
      this.videoTracks.designated_za3lpa$(videoTracksNodeID);
      return true;
    }
     else {
      Dialogue$Companion_getInstance().getDialogues_fs1aqo$(Player$designatedVideoTrack$lambda);
      return false;
    }
  };
  Object.defineProperty(Player.prototype, 'audioTracks', {
    get: function () {
      return this.audioTracks_oydct3$_0;
    },
    set: function (audioTracks) {
      this.audioTracks_oydct3$_0 = audioTracks;
    }
  });
  Player.prototype.nextAudioTrack = function () {
    this.audioTracks.next();
  };
  Player.prototype.previousAudioTrack = function () {
    this.audioTracks.previous();
  };
  function Player$designatedAudioTrack$lambda(dialogues) {
    var tmp$, tmp$_0;
    PromptBox_getInstance().promptMessage((tmp$_0 = (tmp$ = dialogues.node) != null ? tmp$.canNotFind : null) != null ? tmp$_0 : '');
  }
  Player.prototype.designatedAudioTrack = function (audioTrackID) {
    var audioTracksNodeID = TrackDescription$Companion_getInstance().toTracksNodeID_w1sgja$(this.audioTracks, audioTrackID);
    if (audioTracksNodeID != null) {
      this.audioTracks.designated_za3lpa$(audioTracksNodeID);
      return true;
    }
     else {
      Dialogue$Companion_getInstance().getDialogues_fs1aqo$(Player$designatedAudioTrack$lambda);
      return false;
    }
  };
  Object.defineProperty(Player.prototype, 'subtitleTracks', {
    get: function () {
      return this.subtitleTracks_my27pv$_0;
    },
    set: function (subtitleTracks) {
      this.subtitleTracks_my27pv$_0 = subtitleTracks;
    }
  });
  Player.prototype.nextSubtitleTrack = function () {
    this.subtitleTracks.next();
  };
  Player.prototype.previousSubtitleTrack = function () {
    this.subtitleTracks.previous();
  };
  function Player$designatedSubtitleTrack$lambda(dialogues) {
    var tmp$, tmp$_0;
    PromptBox_getInstance().promptMessage((tmp$_0 = (tmp$ = dialogues.node) != null ? tmp$.canNotFind : null) != null ? tmp$_0 : '');
  }
  Player.prototype.designatedSubtitleTrack = function (subtitleTrackID) {
    var subtitleTracksNodeID = TrackDescription$Companion_getInstance().toTracksNodeID_w1sgja$(this.subtitleTracks, subtitleTrackID);
    if (subtitleTracksNodeID != null) {
      this.subtitleTracks.designated_za3lpa$(subtitleTracksNodeID);
      return true;
    }
     else {
      Dialogue$Companion_getInstance().getDialogues_fs1aqo$(Player$designatedSubtitleTrack$lambda);
      return false;
    }
  };
  function Player$ProgrammableColor(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Player$ProgrammableColor_initFields() {
    Player$ProgrammableColor_initFields = function () {
    };
    Player$ProgrammableColor$red_instance = new Player$ProgrammableColor('red', 0);
    Player$ProgrammableColor$green_instance = new Player$ProgrammableColor('green', 1);
    Player$ProgrammableColor$yellow_instance = new Player$ProgrammableColor('yellow', 2);
    Player$ProgrammableColor$blue_instance = new Player$ProgrammableColor('blue', 3);
  }
  var Player$ProgrammableColor$red_instance;
  function Player$ProgrammableColor$red_getInstance() {
    Player$ProgrammableColor_initFields();
    return Player$ProgrammableColor$red_instance;
  }
  var Player$ProgrammableColor$green_instance;
  function Player$ProgrammableColor$green_getInstance() {
    Player$ProgrammableColor_initFields();
    return Player$ProgrammableColor$green_instance;
  }
  var Player$ProgrammableColor$yellow_instance;
  function Player$ProgrammableColor$yellow_getInstance() {
    Player$ProgrammableColor_initFields();
    return Player$ProgrammableColor$yellow_instance;
  }
  var Player$ProgrammableColor$blue_instance;
  function Player$ProgrammableColor$blue_getInstance() {
    Player$ProgrammableColor_initFields();
    return Player$ProgrammableColor$blue_instance;
  }
  Player$ProgrammableColor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProgrammableColor',
    interfaces: [Enum]
  };
  function Player$ProgrammableColor$values() {
    return [Player$ProgrammableColor$red_getInstance(), Player$ProgrammableColor$green_getInstance(), Player$ProgrammableColor$yellow_getInstance(), Player$ProgrammableColor$blue_getInstance()];
  }
  Player$ProgrammableColor.values = Player$ProgrammableColor$values;
  function Player$ProgrammableColor$valueOf(name) {
    switch (name) {
      case 'red':
        return Player$ProgrammableColor$red_getInstance();
      case 'green':
        return Player$ProgrammableColor$green_getInstance();
      case 'yellow':
        return Player$ProgrammableColor$yellow_getInstance();
      case 'blue':
        return Player$ProgrammableColor$blue_getInstance();
      default:throwISE('No enum constant org.sourcekey.hknbp.hknbp_core.Player.ProgrammableColor.' + name);
    }
  }
  Player$ProgrammableColor.valueOf_61zpoe$ = Player$ProgrammableColor$valueOf;
  Player.prototype.programmable = function (color) {
    var colorString = '';
    switch (color.name) {
      case 'red':
        colorString = 'red';
        break;
      case 'green':
        colorString = 'green';
        break;
      case 'yellow':
        colorString = 'yellow';
        break;
      case 'blue':
        colorString = 'blue';
        break;
    }
    Player$Companion_getInstance().callIframePlayerFunction_0('onClickProgrammableButton(' + Player$Companion_getInstance().kotlinValueToEvalScriptUseableValue_0(colorString) + ')');
  };
  Player.prototype.pictureInPictureModeSwitch = function () {
    Player$Companion_getInstance().callIframePlayerFunction_0('\n            async function pictureInPictureModeSwitch(){\n                try {\n                //console.log(document.pictureInPictureEnabled);\n                    var video = document.getElementsByTagName("video")[0]\n                    if (video !== document.pictureInPictureElement){\n                        await video.requestPictureInPicture();\n                    }else{\n                        await document.exitPictureInPicture();\n                    }\n                }catch(error){console.log(error);}\n            }\n            pictureInPictureModeSwitch();\n        ');
  };
  Player.prototype.play = function () {
    Player$Companion_getInstance().callIframePlayerFunction_0('onSetIframePlayerPlay()');
  };
  function Player$setListenIframePlayerScript$lambda(this$Player) {
    return function (event) {
      var tmp$;
      try {
        var callMessage = JSON.parse(event.data.toString());
        if (callMessage.name == null) {
          return;
        }
         else if (callMessage.name == 'HKNBPCore') {
          tmp$ = Player$Companion_getInstance().callIframePlayerFunctionList_0.iterator();
          while (tmp$.hasNext()) {
            var obj = tmp$.next();
            if (obj.id == callMessage.id) {
              obj.onReturn(callMessage.returnValue);
              Player$Companion_getInstance().callIframePlayerFunctionList_0.remove_11rb$(obj);
            }
          }
        }
         else if (callMessage.name == 'IframePlayer') {
          var onPlaying = this$Player.onPlaying_0;
          var onNotPlaying = this$Player.onNotPlaying_0;
          eval(callMessage.functionName + '()');
        }
      }
       catch (e) {
        println('callIframePlayerFunction\u8870\u5DE6: ' + e.toString() + '\n' + ('JSON\u5B57\u4E32(message)\u5167\u5BB9: ' + event.data.toString()) + '\n' + ('Event\u5167\u5BB9: ' + JSON.stringify(event)));
      }
    };
  }
  Player.prototype.setListenIframePlayerScript_0 = function () {
    Player$Companion_getInstance().listenIframePlayerScript_0 = Player$setListenIframePlayerScript$lambda(this);
  };
  function Player$videoTracks$lambda$ObjectLiteral(this$Player) {
    this.this$Player = this$Player;
    this.isInit = false;
  }
  function Player$videoTracks$lambda$ObjectLiteral$on$lambda$lambda$ObjectLiteral(this$Player) {
    this.this$Player = this$Player;
  }
  Player$videoTracks$lambda$ObjectLiteral$on$lambda$lambda$ObjectLiteral.prototype.onNodeChanged_t4rudg$ = function (preChangeNodeID, postChangeNodeID, preChangeNode, postChangeNode) {
    Player$Companion_getInstance().callIframePlayerFunction_0('onSetIframePlayerVideoTrack(' + Player$Companion_getInstance().kotlinValueToEvalScriptUseableValue_0(postChangeNode) + ')');
    localStorage.setItem('RecentlyChannel' + this.this$Player.channel_0.number + 'VideoTrackID', toString(postChangeNodeID));
    VirtualRemote_getInstance().updateVideoInformation();
  };
  Player$videoTracks$lambda$ObjectLiteral$on$lambda$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ArrayLinkList$OnNodeEventListener]
  };
  function Player$videoTracks$lambda$ObjectLiteral$on$lambda$lambda(closure$tracks, this$Player) {
    return function (track) {
      var tmp$, tmp$_0;
      this$Player.videoTracks = TrackDescription$Companion_getInstance().fromIframePlayerReturnTrackDescriptionsToKotilnUseableTrackDescriptions_wn2jw4$(closure$tracks, track);
      this$Player.videoTracks.addOnNodeEventListener_ljxrtv$(new Player$videoTracks$lambda$ObjectLiteral$on$lambda$lambda$ObjectLiteral(this$Player));
      this$Player.videoTracks.designated_za3lpa$((tmp$_0 = (tmp$ = localStorage.getItem('RecentlyChannel' + this$Player.channel_0.number + 'VideoTrackID')) != null ? toIntOrNull(tmp$) : null) != null ? tmp$_0 : 0);
    };
  }
  function Player$videoTracks$lambda$ObjectLiteral$on$lambda(this$Player) {
    return function (tracks) {
      Player$Companion_getInstance().callIframePlayerFunction_0('onGetIframePlayerVideoTrack(onReturn)', Player$videoTracks$lambda$ObjectLiteral$on$lambda$lambda(tracks, this$Player));
    };
  }
  Player$videoTracks$lambda$ObjectLiteral.prototype.on_mdxcb7$ = function (onPlayerEvent) {
    if (equals(onPlayerEvent, Player$OnPlayerEvent$playing_getInstance()))
      if (!this.isInit) {
        Player$Companion_getInstance().callIframePlayerFunction_0('onGetIframePlayerVideoTracks(onReturn)', Player$videoTracks$lambda$ObjectLiteral$on$lambda(this.this$Player));
        this.isInit = true;
      }
  };
  Player$videoTracks$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Player$OnPlayerEventListener]
  };
  function Player$videoTracks$lambda(this$Player) {
    return function () {
      this$Player.addOnPlayerEventListener_j8fzjz$(new Player$videoTracks$lambda$ObjectLiteral(this$Player));
      return ArrayLinkList_init([new TrackDescription(-5, '-------')]);
    };
  }
  function Player$audioTracks$lambda$ObjectLiteral(this$Player) {
    this.this$Player = this$Player;
    this.isInit = false;
  }
  function Player$audioTracks$lambda$ObjectLiteral$on$lambda$lambda$ObjectLiteral(this$Player) {
    this.this$Player = this$Player;
  }
  Player$audioTracks$lambda$ObjectLiteral$on$lambda$lambda$ObjectLiteral.prototype.onNodeChanged_t4rudg$ = function (preChangeNodeID, postChangeNodeID, preChangeNode, postChangeNode) {
    Player$Companion_getInstance().callIframePlayerFunction_0('onSetIframePlayerAudioTrack(' + Player$Companion_getInstance().kotlinValueToEvalScriptUseableValue_0(postChangeNode) + ')');
    localStorage.setItem('RecentlyChannel' + this.this$Player.channel_0.number + 'AudioTrackID', toString(postChangeNodeID));
    VirtualRemote_getInstance().updateAudioInformation();
  };
  Player$audioTracks$lambda$ObjectLiteral$on$lambda$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ArrayLinkList$OnNodeEventListener]
  };
  function Player$audioTracks$lambda$ObjectLiteral$on$lambda$lambda(closure$tracks, this$Player) {
    return function (track) {
      var tmp$, tmp$_0;
      this$Player.audioTracks = TrackDescription$Companion_getInstance().fromIframePlayerReturnTrackDescriptionsToKotilnUseableTrackDescriptions_wn2jw4$(closure$tracks, track);
      this$Player.audioTracks.addOnNodeEventListener_ljxrtv$(new Player$audioTracks$lambda$ObjectLiteral$on$lambda$lambda$ObjectLiteral(this$Player));
      this$Player.audioTracks.designated_za3lpa$((tmp$_0 = (tmp$ = localStorage.getItem('RecentlyChannel' + this$Player.channel_0.number + 'AudioTrackID')) != null ? toIntOrNull(tmp$) : null) != null ? tmp$_0 : 0);
    };
  }
  function Player$audioTracks$lambda$ObjectLiteral$on$lambda(this$Player) {
    return function (tracks) {
      Player$Companion_getInstance().callIframePlayerFunction_0('onGetIframePlayerAudioTrack(onReturn)', Player$audioTracks$lambda$ObjectLiteral$on$lambda$lambda(tracks, this$Player));
    };
  }
  Player$audioTracks$lambda$ObjectLiteral.prototype.on_mdxcb7$ = function (onPlayerEvent) {
    if (equals(onPlayerEvent, Player$OnPlayerEvent$playing_getInstance()))
      if (!this.isInit) {
        Player$Companion_getInstance().callIframePlayerFunction_0('onGetIframePlayerAudioTracks(onReturn)', Player$audioTracks$lambda$ObjectLiteral$on$lambda(this.this$Player));
        this.isInit = true;
      }
  };
  Player$audioTracks$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Player$OnPlayerEventListener]
  };
  function Player$audioTracks$lambda(this$Player) {
    return function () {
      this$Player.addOnPlayerEventListener_j8fzjz$(new Player$audioTracks$lambda$ObjectLiteral(this$Player));
      return ArrayLinkList_init([new TrackDescription(-5, '-------')]);
    };
  }
  function Player$subtitleTracks$lambda$ObjectLiteral(this$Player) {
    this.this$Player = this$Player;
    this.isInit = false;
  }
  function Player$subtitleTracks$lambda$ObjectLiteral$on$lambda$lambda$ObjectLiteral(this$Player) {
    this.this$Player = this$Player;
  }
  Player$subtitleTracks$lambda$ObjectLiteral$on$lambda$lambda$ObjectLiteral.prototype.onNodeChanged_t4rudg$ = function (preChangeNodeID, postChangeNodeID, preChangeNode, postChangeNode) {
    Player$Companion_getInstance().callIframePlayerFunction_0('onSetIframePlayerSubtitleTrack(' + Player$Companion_getInstance().kotlinValueToEvalScriptUseableValue_0(postChangeNode) + ')');
    localStorage.setItem('RecentlyChannel' + this.this$Player.channel_0.number + 'SubtitleTrackID', toString(postChangeNodeID));
    VirtualRemote_getInstance().updateSubtitleInformation();
  };
  Player$subtitleTracks$lambda$ObjectLiteral$on$lambda$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ArrayLinkList$OnNodeEventListener]
  };
  function Player$subtitleTracks$lambda$ObjectLiteral$on$lambda$lambda(closure$tracks, this$Player) {
    return function (track) {
      var tmp$, tmp$_0;
      this$Player.subtitleTracks = TrackDescription$Companion_getInstance().fromIframePlayerReturnTrackDescriptionsToKotilnUseableTrackDescriptions_wn2jw4$(closure$tracks, track);
      this$Player.subtitleTracks.addOnNodeEventListener_ljxrtv$(new Player$subtitleTracks$lambda$ObjectLiteral$on$lambda$lambda$ObjectLiteral(this$Player));
      this$Player.subtitleTracks.designated_za3lpa$((tmp$_0 = (tmp$ = localStorage.getItem('RecentlyChannel' + this$Player.channel_0.number + 'SubtitleTrackID')) != null ? toIntOrNull(tmp$) : null) != null ? tmp$_0 : 0);
    };
  }
  function Player$subtitleTracks$lambda$ObjectLiteral$on$lambda(this$Player) {
    return function (tracks) {
      Player$Companion_getInstance().callIframePlayerFunction_0('onGetIframePlayerSubtitleTrack(onReturn)', Player$subtitleTracks$lambda$ObjectLiteral$on$lambda$lambda(tracks, this$Player));
    };
  }
  Player$subtitleTracks$lambda$ObjectLiteral.prototype.on_mdxcb7$ = function (onPlayerEvent) {
    if (equals(onPlayerEvent, Player$OnPlayerEvent$playing_getInstance()))
      if (!this.isInit) {
        Player$Companion_getInstance().callIframePlayerFunction_0('onGetIframePlayerSubtitleTracks(onReturn)', Player$subtitleTracks$lambda$ObjectLiteral$on$lambda(this.this$Player));
        this.isInit = true;
      }
  };
  Player$subtitleTracks$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Player$OnPlayerEventListener]
  };
  function Player$subtitleTracks$lambda(this$Player) {
    return function () {
      this$Player.addOnPlayerEventListener_j8fzjz$(new Player$subtitleTracks$lambda$ObjectLiteral(this$Player));
      return ArrayLinkList_init([new TrackDescription(-5, '-------')]);
    };
  }
  function Player$iframePlayerVolumeInit$lambda$ObjectLiteral() {
    this.isInit = false;
  }
  Player$iframePlayerVolumeInit$lambda$ObjectLiteral.prototype.on_mdxcb7$ = function (onPlayerEvent) {
    if (equals(onPlayerEvent, Player$OnPlayerEvent$playing_getInstance()))
      if (!this.isInit) {
        Player$Companion_getInstance().callIframePlayerFunction_0('onSetIframePlayerVolume(' + Player$Companion_getInstance().kotlinValueToEvalScriptUseableValue_0(Player$Companion_getInstance().volume_0) + ')');
        this.isInit = true;
      }
  };
  Player$iframePlayerVolumeInit$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Player$OnPlayerEventListener]
  };
  function Player$iframePlayerVolumeInit$lambda(this$Player) {
    return function () {
      this$Player.addOnPlayerEventListener_j8fzjz$(new Player$iframePlayerVolumeInit$lambda$ObjectLiteral());
      return Unit;
    };
  }
  function Player$iframePlayerMutedInit$lambda$ObjectLiteral() {
    this.isInit = false;
  }
  Player$iframePlayerMutedInit$lambda$ObjectLiteral.prototype.on_mdxcb7$ = function (onPlayerEvent) {
    if (equals(onPlayerEvent, Player$OnPlayerEvent$playing_getInstance()))
      if (!this.isInit) {
        Player$Companion_getInstance().setMuted_6taknv$(Player$Companion_getInstance().muted_0);
        this.isInit = true;
      }
  };
  Player$iframePlayerMutedInit$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Player$OnPlayerEventListener]
  };
  function Player$iframePlayerMutedInit$lambda(this$Player) {
    return function () {
      this$Player.addOnPlayerEventListener_j8fzjz$(new Player$iframePlayerMutedInit$lambda$ObjectLiteral());
      return Unit;
    };
  }
  function Player$onPlaying$lambda(this$Player) {
    return function () {
      var tmp$;
      tmp$ = this$Player.onPlayerEvents_0.iterator();
      while (tmp$.hasNext()) {
        var event = tmp$.next();
        event.on_mdxcb7$(Player$OnPlayerEvent$playing_getInstance());
      }
    };
  }
  function Player$onNotPlaying$lambda(this$Player) {
    return function () {
      var tmp$;
      tmp$ = this$Player.onPlayerEvents_0.iterator();
      while (tmp$.hasNext()) {
        var event = tmp$.next();
        event.on_mdxcb7$(Player$OnPlayerEvent$notPlaying_getInstance());
      }
    };
  }
  function Player_init$lambda(this$Player) {
    return function () {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      this$Player.setListenIframePlayerScript_0();
      tmp$_1 = (tmp$_0 = (tmp$ = this$Player.channel_0.sources.node) != null ? tmp$.link : null) != null ? tmp$_0 : '';
      tmp$_2 = 'onIframePlayerInit(' + Player$Companion_getInstance().kotlinValueToEvalScriptUseableValue_0(tmp$_1) + ')';
      Player$Companion_getInstance().callIframePlayerFunction_0(tmp$_2);
    };
  }
  function Player_init$ObjectLiteral(this$Player) {
    this.this$Player = this$Player;
    this.isPlaying_0 = false;
    this.numberOfPlaying_0 = 0;
    this.isLowSignalShowChannelDescription_0 = false;
    ChannelDescription_getInstance().show();
    ChannelDescription_getInstance().update();
  }
  function Player_init$ObjectLiteral$on$lambda(this$) {
    return function () {
      if (!this$.isPlaying_0) {
        this$.isLowSignalShowChannelDescription_0 = true;
        ChannelDescription_getInstance().show();
        PromptBox_getInstance().promptMessage('\u8A0A\u865F\u63A5\u6536\u4E0D\u826F');
      }
    };
  }
  Player_init$ObjectLiteral.prototype.on_mdxcb7$ = function (onPlayerEvent) {
    switch (onPlayerEvent.name) {
      case 'playing':
        this.isPlaying_0 = true;
        this.numberOfPlaying_0 = this.numberOfPlaying_0 + 1 | 0;
        if (this.isLowSignalShowChannelDescription_0) {
          this.isLowSignalShowChannelDescription_0 = false;
          ChannelDescription_getInstance().hide();
        }

        if (this.numberOfPlaying_0 <= 1) {
          ChannelDescription_getInstance().show_za3lpa$(5000);
        }

        VirtualRemote_getInstance().update();
        UserControlPanel_getInstance().cannotTouchIframePlayerMode();
        println('Playing \u983B\u9053' + this.this$Player.channel_0.number);
        break;
      case 'notPlaying':
        this.isPlaying_0 = false;
        if (0 < this.numberOfPlaying_0) {
          Player$Companion_getInstance().checkIsLowSignalShowChannelDescriptionTimer_0 = window.setTimeout(Player_init$ObjectLiteral$on$lambda(this), 5000);
        }

        break;
    }
  };
  Player_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Player$OnPlayerEventListener]
  };
  Player.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Player',
    interfaces: [UserInterface]
  };
  function PromptBox() {
    PromptBox_instance = this;
    UserInterface.call(this, 'promptBox');
    this.promptBox_0 = document.getElementById('promptBox');
    println('Init PromptBox');
  }
  PromptBox.prototype.promptMessage = function (promptMessage) {
    this.promptBox_0.innerHTML = promptMessage;
    this.show_za3lpa$(3500);
    return 0;
  };
  PromptBox.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PromptBox',
    interfaces: [UserInterface]
  };
  var PromptBox_instance = null;
  function PromptBox_getInstance() {
    if (PromptBox_instance === null) {
      new PromptBox();
    }
    return PromptBox_instance;
  }
  function RealRemote() {
    RealRemote_instance = this;
    window.addEventListener('keypress', RealRemote_init$lambda);
    println('Init RealRemote');
  }
  function RealRemote_init$lambda(event) {
    event.keyCode;
  }
  RealRemote.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RealRemote',
    interfaces: []
  };
  var RealRemote_instance = null;
  function RealRemote_getInstance() {
    if (RealRemote_instance === null) {
      new RealRemote();
    }
    return RealRemote_instance;
  }
  function RunnerInfo() {
    RunnerInfo_instance = this;
    this.platform = platform;
    println('Init RunnerInfo');
  }
  RunnerInfo.prototype.getOsFamily = function () {
    var tmp$;
    var _getOS = typeof (tmp$ = function () {
      var userAgent = window.navigator.userAgent, platform = window.navigator.platform, macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'], windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'], iosPlatforms = ['iPhone', 'iPad', 'iPod'], os = '';
      if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'Mac OS';
      }
       else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'iOS';
      }
       else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
      }
       else if (/Android/.test(userAgent)) {
        os = 'Android';
      }
       else if (!os && /Linux/.test(platform)) {
        os = 'Linux';
      }
      return os;
    }) === 'function' ? tmp$ : throwCCE();
    return _getOS();
  };
  RunnerInfo.prototype.getOsName = function () {
    return this.platform.os.toString();
  };
  RunnerInfo.prototype.getBrowserName = function () {
    return this.platform.name.toString() + ' ' + this.platform.version.toString();
  };
  RunnerInfo.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RunnerInfo',
    interfaces: []
  };
  var RunnerInfo_instance = null;
  function RunnerInfo_getInstance() {
    if (RunnerInfo_instance === null) {
      new RunnerInfo();
    }
    return RunnerInfo_instance;
  }
  function SettingWindow() {
    SettingWindow_instance = this;
    Window.call(this, 'settingWindow', 'settingWindowHideButton');
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    this.settingWindow_0 = Kotlin.isType(tmp$ = document.getElementById('settingWindow'), HTMLDivElement) ? tmp$ : throwCCE();
    this.hideButton_0 = Kotlin.isType(tmp$_0 = document.getElementById('settingWindowHideButton'), HTMLButtonElement) ? tmp$_0 : throwCCE();
    this.customChannelsSettingOpenButton_0 = Kotlin.isType(tmp$_1 = document.getElementById('customChannelsSettingOpenButton'), HTMLButtonElement) ? tmp$_1 : throwCCE();
    this.clearSettingButton_0 = Kotlin.isType(tmp$_2 = document.getElementById('clearSettingButton'), HTMLButtonElement) ? tmp$_2 : throwCCE();
    this.devConsole_0 = Kotlin.isType(tmp$_3 = document.getElementById('devConsole'), HTMLDivElement) ? tmp$_3 : throwCCE();
    this.devModeCheckbox_0 = Kotlin.isType(tmp$_4 = document.getElementById('DevModeCheckbox'), HTMLInputElement) ? tmp$_4 : throwCCE();
    this.settingWindow_0.style.cursor = 'auto';
    this.hideButton_0.onclick = SettingWindow_init$lambda(this);
    this.initCustomChannelsSettingOpenButton();
    this.initClearSetting();
    this.initDevModeCheckbox();
    println('Init SettingWindow');
  }
  function SettingWindow$initCustomChannelsSettingOpenButton$lambda(event) {
    CustomChannelsSettingWindow_getInstance().show();
  }
  SettingWindow.prototype.initCustomChannelsSettingOpenButton = function () {
    this.customChannelsSettingOpenButton_0.onclick = SettingWindow$initCustomChannelsSettingOpenButton$lambda;
  };
  function SettingWindow$initClearSetting$lambda(event) {
    localStorage.clear();
    location.reload();
  }
  SettingWindow.prototype.initClearSetting = function () {
    this.clearSettingButton_0.onclick = SettingWindow$initClearSetting$lambda;
  };
  function SettingWindow$initDevModeCheckbox$lambda(this$SettingWindow) {
    return function (event) {
      if (this$SettingWindow.devModeCheckbox_0.checked) {
        this$SettingWindow.devConsole_0.style.display = 'block';
        try {
          var _devConsole = this$SettingWindow.devConsole_0;
          var _getConsoleLogs = getConsoleLogs;
          _devConsole.innerHTML = _getConsoleLogs();
          console.log = function () {
            console.logs.push(Array.from(arguments));
            console.stdlog.apply(console, arguments);
            _devConsole.innerHTML = _getConsoleLogs();
            _devConsole.scrollTop = _devConsole.scrollHeight;
          };
        }
         catch (e) {
          println('DevModeCheckbox\u54C0\u5DE6: ' + e.toString());
        }
      }
       else {
        this$SettingWindow.devConsole_0.style.display = 'none';
      }
    };
  }
  SettingWindow.prototype.initDevModeCheckbox = function () {
    this.devModeCheckbox_0.onchange = SettingWindow$initDevModeCheckbox$lambda(this);
  };
  function SettingWindow_init$lambda(this$SettingWindow) {
    return function (event) {
      this$SettingWindow.hide();
    };
  }
  SettingWindow.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SettingWindow',
    interfaces: [Window]
  };
  var SettingWindow_instance = null;
  function SettingWindow_getInstance() {
    if (SettingWindow_instance === null) {
      new SettingWindow();
    }
    return SettingWindow_instance;
  }
  function ShareWindow() {
    ShareWindow_instance = this;
    Window.call(this, 'shareWindow', 'shareWindowHideButton');
    var tmp$, tmp$_0, tmp$_1;
    this.shareWindow_0 = Kotlin.isType(tmp$ = document.getElementById('shareWindow'), HTMLDivElement) ? tmp$ : throwCCE();
    this.hideButton_0 = Kotlin.isType(tmp$_0 = document.getElementById('shareWindowHideButton'), HTMLButtonElement) ? tmp$_0 : throwCCE();
    this.buttonList_0 = Kotlin.isType(tmp$_1 = document.getElementById('shareWindowShareButtonList'), HTMLDivElement) ? tmp$_1 : throwCCE();
    this.hideButton_0.onclick = ShareWindow_init$lambda(this);
    println('Init ShareWindow');
  }
  ShareWindow.prototype.show = function () {
    Window.prototype.show.call(this);
    ShareWindow_getInstance().buttonList_0.setAttribute('data-a2a-url', window.location.href);
  };
  function ShareWindow_init$lambda(this$ShareWindow) {
    return function (event) {
      this$ShareWindow.hide();
    };
  }
  ShareWindow.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ShareWindow',
    interfaces: [Window]
  };
  var ShareWindow_instance = null;
  function ShareWindow_getInstance() {
    if (ShareWindow_instance === null) {
      new ShareWindow();
    }
    return ShareWindow_instance;
  }
  function SubtitleDescription() {
    SubtitleDescription_instance = this;
    UserInterface.call(this, 'trackDescription');
    var tmp$;
    this.trackDescription_0 = Kotlin.isType(tmp$ = document.getElementById('trackDescription'), HTMLDivElement) ? tmp$ : throwCCE();
    this.subtitleIconHTML_0 = '<i class="icon-font nestle-bottom" style="display:inline;">&#xe81d;<\/i>';
    println('Init SubtitleDescription');
  }
  SubtitleDescription.prototype.show = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    UserInterface.prototype.show.call(this);
    this.trackDescription_0.innerHTML = (tmp$_1 = (tmp$_0 = (tmp$ = player != null ? player.subtitleTracks : null) != null ? tmp$.node : null) != null ? tmp$_0.name : null) != null ? tmp$_1 : '';
    var subtitleNameHTML = '<div style=' + '"' + 'display:inline;' + '"' + '>' + ((tmp$_4 = (tmp$_3 = (tmp$_2 = player != null ? player.subtitleTracks : null) != null ? tmp$_2.node : null) != null ? tmp$_3.name : null) != null ? tmp$_4 : '') + '<\/div>';
    this.trackDescription_0.innerHTML = this.subtitleIconHTML_0 + '&nbsp' + subtitleNameHTML;
  };
  SubtitleDescription.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SubtitleDescription',
    interfaces: [UserInterface]
  };
  var SubtitleDescription_instance = null;
  function SubtitleDescription_getInstance() {
    if (SubtitleDescription_instance === null) {
      new SubtitleDescription();
    }
    return SubtitleDescription_instance;
  }
  function Tab3dIndex(x, y, z) {
    Tab3dIndex$Companion_getInstance();
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    if (z === void 0)
      z = 0;
    this.x = x;
    this.y = y;
    this.z = z;
  }
  function Tab3dIndex$Companion() {
    Tab3dIndex$Companion_instance = this;
  }
  Tab3dIndex$Companion.prototype.getTab3dIndexList_za3rmp$ = function (elements) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var list = ArrayList_init();
    var i = 0;
    while (i < ((tmp$_1 = (tmp$_0 = (tmp$ = elements != null ? elements.length : null) != null ? tmp$.toString() : null) != null ? toIntOrNull(tmp$_0) : null) != null ? tmp$_1 : 0)) {
      list.add_11rb$(this.toTab3dIndex_61zpoe$((tmp$_4 = (tmp$_3 = (tmp$_2 = elements != null ? elements.eq(i) : null) != null ? tmp$_2.attr('tabIndex') : null) != null ? tmp$_3.toString() : null) != null ? tmp$_4 : ''));
      i = i + 1 | 0;
    }
    return list;
  };
  Tab3dIndex$Companion.prototype.toTab3dIndex_61zpoe$ = function (unparsedTabIndex) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10;
    var z = String.fromCharCode((tmp$ = getOrNull_0(unparsedTabIndex, unparsedTabIndex.length - 9 | 0)) != null ? tmp$ : 48);
    var y = String.fromCharCode((tmp$_0 = getOrNull_0(unparsedTabIndex, unparsedTabIndex.length - 8 | 0)) != null ? tmp$_0 : 48) + String.fromCharCode((tmp$_1 = getOrNull_0(unparsedTabIndex, unparsedTabIndex.length - 7 | 0)) != null ? tmp$_1 : 48) + String.fromCharCode((tmp$_2 = getOrNull_0(unparsedTabIndex, unparsedTabIndex.length - 6 | 0)) != null ? tmp$_2 : 48) + String.fromCharCode((tmp$_3 = getOrNull_0(unparsedTabIndex, unparsedTabIndex.length - 5 | 0)) != null ? tmp$_3 : 48);
    var x = String.fromCharCode((tmp$_4 = getOrNull_0(unparsedTabIndex, unparsedTabIndex.length - 4 | 0)) != null ? tmp$_4 : 48) + String.fromCharCode((tmp$_5 = getOrNull_0(unparsedTabIndex, unparsedTabIndex.length - 3 | 0)) != null ? tmp$_5 : 48) + String.fromCharCode((tmp$_6 = getOrNull_0(unparsedTabIndex, unparsedTabIndex.length - 2 | 0)) != null ? tmp$_6 : 48) + String.fromCharCode((tmp$_7 = getOrNull_0(unparsedTabIndex, unparsedTabIndex.length - 1 | 0)) != null ? tmp$_7 : 48);
    return new Tab3dIndex((tmp$_8 = toIntOrNull(x)) != null ? tmp$_8 : 0, (tmp$_9 = toIntOrNull(y)) != null ? tmp$_9 : 0, (tmp$_10 = toIntOrNull(z)) != null ? tmp$_10 : 0);
  };
  Tab3dIndex$Companion.prototype.toUnparsedTabIndex_lvro24$ = function (tab3dIndex) {
    return padStart(tab3dIndex.z.toString(), 1, 48) + padStart(tab3dIndex.y.toString(), 4, 48) + padStart(tab3dIndex.x.toString(), 4, 48);
  };
  Tab3dIndex$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Tab3dIndex$Companion_instance = null;
  function Tab3dIndex$Companion_getInstance() {
    if (Tab3dIndex$Companion_instance === null) {
      new Tab3dIndex$Companion();
    }
    return Tab3dIndex$Companion_instance;
  }
  Tab3dIndex.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Tab3dIndex',
    interfaces: []
  };
  function TrackDescription(id, name) {
    TrackDescription$Companion_getInstance();
    if (id === void 0)
      id = 0;
    if (name === void 0)
      name = '';
    this.id = id;
    this.name = name;
  }
  function TrackDescription$Companion() {
    TrackDescription$Companion_instance = this;
  }
  TrackDescription$Companion.prototype.toTracksNodeID_w1sgja$ = function (tracks, trackID) {
    var tmp$;
    var tracksNodeID = null;
    tmp$ = tracks.size;
    for (var i = 0; i < tmp$; i++) {
      var track = getOrNull(tracks, i);
      if (track != null) {
        if (track.id === trackID) {
          tracksNodeID = i;
        }
      }
    }
    return tracksNodeID;
  };
  TrackDescription$Companion.prototype.sortTrackDescriptions_gwog88$ = function (trackDescriptions) {
    for (var i = 0; i !== trackDescriptions.size; ++i) {
      var tmp$;
      var trackDescription_I = getOrNull(trackDescriptions, i);
      if (trackDescription_I != null) {
        tmp$ = trackDescriptions.size;
        for (var j = i + 1 | 0; j < tmp$; j++) {
          var trackDescription_J = getOrNull(trackDescriptions, j);
          if (trackDescription_J != null) {
            if (trackDescription_I.id > trackDescription_J.id) {
              var temporary = trackDescription_I;
              trackDescriptions.set_wxm5ur$(i, trackDescription_J);
              trackDescriptions.set_wxm5ur$(j, temporary);
            }
          }
        }
      }
    }
    return trackDescriptions;
  };
  TrackDescription$Companion.prototype.fromIframePlayerReturnTrackDescriptionsToKotilnUseableTrackDescriptions_wn2jw4$ = function (fromIframePlayerGetTracksValue, fromIframePlayerGetTrackValue) {
    var tmp$;
    try {
      var trackDescriptions = this.sortTrackDescriptions_gwog88$(ArrayLinkList_init_1(JSON.parse(JSON.stringify(fromIframePlayerGetTracksValue))));
      trackDescriptions.designated_za3lpa$((tmp$ = this.toTracksNodeID_w1sgja$(trackDescriptions, JSON.parse(JSON.stringify(fromIframePlayerGetTrackValue)).id)) != null ? tmp$ : 0);
      return trackDescriptions;
    }
     catch (e) {
      return ArrayLinkList_init([new TrackDescription(-5, '-------')]);
    }
  };
  TrackDescription$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TrackDescription$Companion_instance = null;
  function TrackDescription$Companion_getInstance() {
    if (TrackDescription$Companion_instance === null) {
      new TrackDescription$Companion();
    }
    return TrackDescription$Companion_instance;
  }
  TrackDescription.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TrackDescription',
    interfaces: []
  };
  function UpdatePrompt() {
    UpdatePrompt_instance = this;
    println('Init UpdatePrompt');
  }
  UpdatePrompt.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'UpdatePrompt',
    interfaces: []
  };
  var UpdatePrompt_instance = null;
  function UpdatePrompt_getInstance() {
    if (UpdatePrompt_instance === null) {
      new UpdatePrompt();
    }
    return UpdatePrompt_instance;
  }
  function UserControlPanel() {
    UserControlPanel_instance = this;
    UserInterface.call(this, 'userControlPanel', 'onHeadNextAudioButton', void 0, void 0, true);
    var tmp$, tmp$_0;
    this.panel_0 = Kotlin.isType(tmp$ = document.getElementById('userControlPanel'), HTMLDivElement) ? tmp$ : throwCCE();
    this.shower_0 = Kotlin.isType(tmp$_0 = document.getElementById('userControlPanelShower'), HTMLButtonElement) ? tmp$_0 : throwCCE();
    this.hideMouseTimer_r29tyc$_0 = 0;
    this.onShowUserControlPanel = UserControlPanel$onShowUserControlPanel$lambda;
    this.onHideUserControlPanel = UserControlPanel$onHideUserControlPanel$lambda;
    VirtualRemote_getInstance();
    NativeAppInstallButton_getInstance();
    PictureInPictureButton_getInstance();
    FullScreenButton_getInstance();
    this.shower_0.onclick = UserControlPanel_init$lambda(this);
    this.shower_0.onmousemove = UserControlPanel_init$lambda_0(this);
    this.panel_0.onmousemove = UserControlPanel_init$lambda_1(this);
    this.panel_0.onscroll = UserControlPanel_init$lambda_2(this);
    jQuery('body').mouseleave(UserControlPanel_init$lambda_3(this));
    this.shower_0.ondblclick = UserControlPanel_init$lambda_4;
    var _shower = this.shower_0;
    _shower.ontouchstart = UserControlPanel_init$lambda_5(this);
    if (equals(RunnerInfo_getInstance().getOsFamily(), 'iOS')) {
      this.canTouchIframePlayerMode();
    }
    println('Init UserControlPanel');
  }
  Object.defineProperty(UserControlPanel.prototype, 'hideMouseTimer_0', {
    get: function () {
      return this.hideMouseTimer_r29tyc$_0;
    },
    set: function (value) {
      window.clearTimeout(this.hideMouseTimer_r29tyc$_0);
      this.hideMouseTimer_r29tyc$_0 = value;
    }
  });
  UserControlPanel.prototype.show = function () {
    UserInterface.prototype.show.call(this);
    this.onShowUserControlPanel();
    jQuery('#userControlPanelShower').css('cursor', 'auto');
  };
  function UserControlPanel$hide$lambda() {
    jQuery('#userControlPanelShower').css('cursor', 'none');
  }
  UserControlPanel.prototype.hide = function () {
    UserInterface.prototype.hide.call(this);
    this.onHideUserControlPanel();
    this.hideMouseTimer_0 = window.setTimeout(UserControlPanel$hide$lambda, 2000);
  };
  UserControlPanel.prototype.setIframeOnClick_a4mwiz$ = function (iframeId, onClick) {
  };
  UserControlPanel.prototype.canTouchIframePlayerMode = function () {
    this.shower_0.style.right = 'auto';
    this.shower_0.style.width = '10vh';
    this.shower_0.style.backgroundColor = '#303030';
    this.shower_0.innerHTML = '<i class="icon-font" style="font-size: 5vh;">&#xe825;<\/i>';
  };
  UserControlPanel.prototype.cannotTouchIframePlayerMode = function () {
    if (!equals(RunnerInfo_getInstance().getOsFamily(), 'iOS')) {
      this.shower_0.style.right = '0';
      this.shower_0.style.width = '100%';
      this.shower_0.style.backgroundColor = 'rgba(0, 0, 0, 0)';
      this.shower_0.innerHTML = '';
    }
  };
  function UserControlPanel$onShowUserControlPanel$lambda() {
  }
  function UserControlPanel$onHideUserControlPanel$lambda() {
  }
  function UserControlPanel_init$lambda(this$UserControlPanel) {
    return function (event) {
      this$UserControlPanel.showHideAlternately();
      player != null ? (player.play(), Unit) : null;
    };
  }
  function UserControlPanel_init$lambda$lambda() {
    jQuery('#userControlPanelShower').css('cursor', 'none');
  }
  function UserControlPanel_init$lambda_0(this$UserControlPanel) {
    return function (event) {
      jQuery('#userControlPanelShower').css('cursor', 'auto');
      this$UserControlPanel.hideMouseTimer_0 = window.setTimeout(UserControlPanel_init$lambda$lambda, 2000);
    };
  }
  function UserControlPanel_init$lambda_1(this$UserControlPanel) {
    return function (event) {
      event.stopPropagation();
      this$UserControlPanel.show_za3lpa$(30000);
    };
  }
  function UserControlPanel_init$lambda_2(this$UserControlPanel) {
    return function (event) {
      this$UserControlPanel.show_za3lpa$(30000);
    };
  }
  function UserControlPanel_init$lambda_3(this$UserControlPanel) {
    return function () {
      this$UserControlPanel.hide();
    };
  }
  function UserControlPanel_init$lambda_4(event) {
    FullScreenButton_getInstance().enterExitFullScreenAlternately();
  }
  function UserControlPanel_init$lambda_5(this$UserControlPanel) {
    return function (event) {
      event.preventDefault();
      if (this$UserControlPanel.panel_0.style.display === 'block') {
        this$UserControlPanel.hide();
      }
       else {
        this$UserControlPanel.show_za3lpa$(15000);
      }
    };
  }
  UserControlPanel.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'UserControlPanel',
    interfaces: [UserInterface]
  };
  var UserControlPanel_instance = null;
  function UserControlPanel_getInstance() {
    if (UserControlPanel_instance === null) {
      new UserControlPanel();
    }
    return UserControlPanel_instance;
  }
  function UserInterface(mainFrameElementID, firstFocusElementID, isFocusCountdownHide, isFocusOutHide, isHideFocusToUserControlPanelShower, isShowToHideUserControlPanel, conversionFocusHideTime) {
    UserInterface$Companion_getInstance();
    if (firstFocusElementID === void 0)
      firstFocusElementID = null;
    if (isFocusCountdownHide === void 0)
      isFocusCountdownHide = true;
    if (isFocusOutHide === void 0)
      isFocusOutHide = false;
    if (isHideFocusToUserControlPanelShower === void 0)
      isHideFocusToUserControlPanelShower = false;
    if (isShowToHideUserControlPanel === void 0)
      isShowToHideUserControlPanel = false;
    if (conversionFocusHideTime === void 0)
      conversionFocusHideTime = 15000;
    this.mainFrameElementID_lg8aaf$_0 = mainFrameElementID;
    this.firstFocusElementID_ydky23$_0 = firstFocusElementID;
    this.isFocusCountdownHide_768iff$_0 = isFocusCountdownHide;
    this.isFocusOutHide_o0rj94$_0 = isFocusOutHide;
    this.isHideFocusToUserControlPanelShower_bpmi6v$_0 = isHideFocusToUserControlPanelShower;
    this.isShowToHideUserControlPanel_8ypqtg$_0 = isShowToHideUserControlPanel;
    this.conversionFocusHideTime_igwo47$_0 = conversionFocusHideTime;
    var tmp$, tmp$_0, tmp$_1;
    this.htmlElement_sdspbr$_0 = Kotlin.isType(tmp$ = document.getElementById(this.mainFrameElementID_lg8aaf$_0), HTMLElement) ? tmp$ : throwCCE();
    this.lastTimeFocusElement_bd4klp$_0 = UserInterface$lastTimeFocusElement$lambda(this)();
    this.isShowUserInterfaceFirstFocus_mby111$_0 = false;
    this.hideTimer_1c3smv$_rf6tp$_0 = 0;
    (tmp$_0 = jQuery('#' + this.mainFrameElementID_lg8aaf$_0 + ' button' + ',' + ('#' + this.mainFrameElementID_lg8aaf$_0 + ' select') + ',' + ('#' + this.mainFrameElementID_lg8aaf$_0 + ' option') + ',' + ('#' + this.mainFrameElementID_lg8aaf$_0 + ' input'))) != null ? tmp$_0.focus(UserInterface_init$lambda(this)) : null;
    (tmp$_1 = jQuery('#' + this.mainFrameElementID_lg8aaf$_0 + ' button' + ',' + ('#' + this.mainFrameElementID_lg8aaf$_0 + ' select') + ',' + ('#' + this.mainFrameElementID_lg8aaf$_0 + ' option') + ',' + ('#' + this.mainFrameElementID_lg8aaf$_0 + ' input'))) != null ? tmp$_1.hover(UserInterface_init$lambda_0) : null;
    UserInterface$Companion_getInstance().allUserInterfaceList.add_11rb$(this);
  }
  function UserInterface$Companion() {
    UserInterface$Companion_instance = this;
    this.allUserInterfaceList = ArrayList_init();
  }
  UserInterface$Companion.prototype.hideAllUserInterface = function () {
    var tmp$;
    tmp$ = this.allUserInterfaceList.iterator();
    while (tmp$.hasNext()) {
      var userInterface = tmp$.next();
      userInterface.hide();
    }
  };
  UserInterface$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var UserInterface$Companion_instance = null;
  function UserInterface$Companion_getInstance() {
    if (UserInterface$Companion_instance === null) {
      new UserInterface$Companion();
    }
    return UserInterface$Companion_instance;
  }
  UserInterface.prototype.update = function () {
  };
  Object.defineProperty(UserInterface.prototype, 'hideTimer_1c3smv$_0', {
    get: function () {
      return this.hideTimer_1c3smv$_rf6tp$_0;
    },
    set: function (value) {
      window.clearTimeout(this.hideTimer_1c3smv$_rf6tp$_0);
      this.hideTimer_1c3smv$_rf6tp$_0 = value;
    }
  });
  Object.defineProperty(UserInterface.prototype, 'isShow', {
    get: function () {
      return equals(this.htmlElement_sdspbr$_0.style.display, 'block');
    }
  });
  UserInterface.prototype.show = function () {
    var tmp$;
    this.htmlElement_sdspbr$_0.style.display = 'block';
    this.isShowUserInterfaceFirstFocus_mby111$_0 = true;
    if (this.isShow) {
      (tmp$ = this.lastTimeFocusElement_bd4klp$_0) != null ? tmp$.focus() : null;
    }
  };
  function UserInterface$setHideTimer$lambda(this$UserInterface) {
    return function () {
      this$UserInterface.hide();
    };
  }
  UserInterface.prototype.setHideTimer_djwtaz$_0 = function (showTime) {
    this.hideTimer_1c3smv$_0 = window.setTimeout(UserInterface$setHideTimer$lambda(this), showTime);
  };
  UserInterface.prototype.show_za3lpa$ = function (showTime) {
    this.show();
    this.setHideTimer_djwtaz$_0(showTime);
  };
  UserInterface.prototype.hide = function () {
    var tmp$;
    this.htmlElement_sdspbr$_0.style.display = 'none';
    if (this.isHideFocusToUserControlPanelShower_bpmi6v$_0) {
      (Kotlin.isType(tmp$ = document.getElementById('userControlPanelShower'), HTMLElement) ? tmp$ : throwCCE()).focus();
    }
  };
  UserInterface.prototype.showHideAlternately = function () {
    if (this.isShow) {
      this.hide();
    }
     else {
      this.show();
    }
  };
  UserInterface.prototype.showHideAlternately_za3lpa$ = function (showTime) {
    if (this.isShow) {
      this.hide();
    }
     else {
      this.show_za3lpa$(showTime);
    }
  };
  function UserInterface$lastTimeFocusElement$lambda(this$UserInterface) {
    return function () {
      if (this$UserInterface.firstFocusElementID_ydky23$_0 != null) {
        try {
          return jQuery('#' + toString(this$UserInterface.firstFocusElementID_ydky23$_0));
        }
         catch (e) {
          return null;
        }
      }
       else {
        return null;
      }
    };
  }
  function UserInterface_init$lambda(this$UserInterface) {
    return function () {
      var tmp$;
      if (!$('this').is(':focus')) {
        (tmp$ = jQuery(this)) != null ? tmp$.hover() : null;
        this$UserInterface.lastTimeFocusElement_bd4klp$_0 = jQuery(this);
        if (!this$UserInterface.isShowUserInterfaceFirstFocus_mby111$_0 && this$UserInterface.isFocusCountdownHide_768iff$_0) {
          this$UserInterface.isShowUserInterfaceFirstFocus_mby111$_0 = false;
          if (this$UserInterface.conversionFocusHideTime_igwo47$_0 != null) {
            this$UserInterface.setHideTimer_djwtaz$_0(this$UserInterface.conversionFocusHideTime_igwo47$_0);
          }
        }
      }
    };
  }
  function UserInterface_init$lambda_0() {
    var tmp$;
    (tmp$ = jQuery(this)) != null ? tmp$.focus() : null;
  }
  UserInterface.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserInterface',
    interfaces: []
  };
  function VideoDescription() {
    VideoDescription_instance = this;
    UserInterface.call(this, 'trackDescription');
    var tmp$;
    this.trackDescription_0 = Kotlin.isType(tmp$ = document.getElementById('trackDescription'), HTMLDivElement) ? tmp$ : throwCCE();
    this.videoIconHTML_0 = '<i class="icon-font nestle-bottom" style="display:inline;">&#xe815;<\/i>';
    println('Init VideoDescription');
  }
  VideoDescription.prototype.show = function () {
    var tmp$, tmp$_0, tmp$_1;
    UserInterface.prototype.show.call(this);
    var videoNameHTML = '<div style=' + '"' + 'display:inline;' + '"' + '>' + ((tmp$_1 = (tmp$_0 = (tmp$ = player != null ? player.videoTracks : null) != null ? tmp$.node : null) != null ? tmp$_0.name : null) != null ? tmp$_1 : '') + '<\/div>';
    this.trackDescription_0.innerHTML = this.videoIconHTML_0 + '&nbsp' + videoNameHTML;
  };
  VideoDescription.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'VideoDescription',
    interfaces: [UserInterface]
  };
  var VideoDescription_instance = null;
  function VideoDescription_getInstance() {
    if (VideoDescription_instance === null) {
      new VideoDescription();
    }
    return VideoDescription_instance;
  }
  function Comparator$ObjectLiteral_2(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_2.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_2.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareByDescending$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(b), selector(a));
      };
    };
  });
  function Comparator$ObjectLiteral_3(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_3.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_3.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareBy$lambda_2 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function VirtualRemote() {
    VirtualRemote_instance = this;
    UserInterface.call(this, 'virtualRemote');
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20, tmp$_21, tmp$_22, tmp$_23, tmp$_24, tmp$_25, tmp$_26, tmp$_27, tmp$_28, tmp$_29, tmp$_30, tmp$_31, tmp$_32, tmp$_33, tmp$_34, tmp$_35, tmp$_36, tmp$_37, tmp$_38, tmp$_39, tmp$_40, tmp$_41, tmp$_42, tmp$_43, tmp$_44, tmp$_45, tmp$_46, tmp$_47, tmp$_48, tmp$_49, tmp$_50, tmp$_51, tmp$_52, tmp$_53, tmp$_54, tmp$_55, tmp$_56, tmp$_57;
    this.virtualRemote_0 = Kotlin.isType(tmp$ = document.getElementById('virtualRemote'), HTMLDivElement) ? tmp$ : throwCCE();
    this.hideVirtualRemoteButton = Kotlin.isType(tmp$_0 = document.getElementById('hideVirtualRemoteButton'), HTMLButtonElement) ? tmp$_0 : throwCCE();
    this.epgButton = Kotlin.isType(tmp$_1 = document.getElementById('epgButton'), HTMLButtonElement) ? tmp$_1 : throwCCE();
    this.nextChannelButton = Kotlin.isType(tmp$_2 = document.getElementById('nextChannelButton'), HTMLButtonElement) ? tmp$_2 : throwCCE();
    this.previousChannelButton = Kotlin.isType(tmp$_3 = document.getElementById('previousChannelButton'), HTMLButtonElement) ? tmp$_3 : throwCCE();
    this.designateChannelSelect = Kotlin.isType(tmp$_4 = document.getElementById('designateChannelSelect'), HTMLSelectElement) ? tmp$_4 : throwCCE();
    this.designateChannelInputText = Kotlin.isType(tmp$_5 = document.getElementById('designateChannelInputText'), HTMLInputElement) ? tmp$_5 : throwCCE();
    this.designateChannelButton = Kotlin.isType(tmp$_6 = document.getElementById('designateChannelButton'), HTMLButtonElement) ? tmp$_6 : throwCCE();
    this.lastTimeChannelButton = Kotlin.isType(tmp$_7 = document.getElementById('lastTimeChannelButton'), HTMLButtonElement) ? tmp$_7 : throwCCE();
    this.nextVideoButton = Kotlin.isType(tmp$_8 = document.getElementById('nextVideoButton'), HTMLButtonElement) ? tmp$_8 : throwCCE();
    this.previousVideoButton = Kotlin.isType(tmp$_9 = document.getElementById('previousVideoButton'), HTMLButtonElement) ? tmp$_9 : throwCCE();
    this.designateVideoSelect = Kotlin.isType(tmp$_10 = document.getElementById('designateVideoSelect'), HTMLSelectElement) ? tmp$_10 : throwCCE();
    this.nextAudioButton = Kotlin.isType(tmp$_11 = document.getElementById('nextAudioButton'), HTMLButtonElement) ? tmp$_11 : throwCCE();
    this.previousAudioButton = Kotlin.isType(tmp$_12 = document.getElementById('previousAudioButton'), HTMLButtonElement) ? tmp$_12 : throwCCE();
    this.designateAudioSelect = Kotlin.isType(tmp$_13 = document.getElementById('designateAudioSelect'), HTMLSelectElement) ? tmp$_13 : throwCCE();
    this.onHeadNextAudioButton = Kotlin.isType(tmp$_14 = document.getElementById('onHeadNextAudioButton'), HTMLButtonElement) ? tmp$_14 : throwCCE();
    this.nextSubtitleButton = Kotlin.isType(tmp$_15 = document.getElementById('nextSubtitleButton'), HTMLButtonElement) ? tmp$_15 : throwCCE();
    this.previousSubtitleButton = Kotlin.isType(tmp$_16 = document.getElementById('previousSubtitleButton'), HTMLButtonElement) ? tmp$_16 : throwCCE();
    this.designateSubtitleSelect = Kotlin.isType(tmp$_17 = document.getElementById('designateSubtitleSelect'), HTMLSelectElement) ? tmp$_17 : throwCCE();
    this.onHeadNextSubtitleButton = Kotlin.isType(tmp$_18 = document.getElementById('onHeadNextSubtitleButton'), HTMLButtonElement) ? tmp$_18 : throwCCE();
    this.volumeMuteButton = Kotlin.isType(tmp$_19 = document.getElementById('volumeMuteButton'), HTMLButtonElement) ? tmp$_19 : throwCCE();
    this.volumeUpButton = Kotlin.isType(tmp$_20 = document.getElementById('volumeUpButton'), HTMLButtonElement) ? tmp$_20 : throwCCE();
    this.volumeDownButton = Kotlin.isType(tmp$_21 = document.getElementById('volumeDownButton'), HTMLButtonElement) ? tmp$_21 : throwCCE();
    this.programmableRedButton = Kotlin.isType(tmp$_22 = document.getElementById('programmableRedButton'), HTMLButtonElement) ? tmp$_22 : throwCCE();
    this.programmableGreenButton = Kotlin.isType(tmp$_23 = document.getElementById('programmableGreenButton'), HTMLButtonElement) ? tmp$_23 : throwCCE();
    this.programmableYellowButton = Kotlin.isType(tmp$_24 = document.getElementById('programmableYellowButton'), HTMLButtonElement) ? tmp$_24 : throwCCE();
    this.programmableBlueButton = Kotlin.isType(tmp$_25 = document.getElementById('programmableBlueButton'), HTMLButtonElement) ? tmp$_25 : throwCCE();
    this.number0Button = Kotlin.isType(tmp$_26 = document.getElementById('number0Button'), HTMLButtonElement) ? tmp$_26 : throwCCE();
    this.number1Button = Kotlin.isType(tmp$_27 = document.getElementById('number1Button'), HTMLButtonElement) ? tmp$_27 : throwCCE();
    this.number2Button = Kotlin.isType(tmp$_28 = document.getElementById('number2Button'), HTMLButtonElement) ? tmp$_28 : throwCCE();
    this.number3Button = Kotlin.isType(tmp$_29 = document.getElementById('number3Button'), HTMLButtonElement) ? tmp$_29 : throwCCE();
    this.number4Button = Kotlin.isType(tmp$_30 = document.getElementById('number4Button'), HTMLButtonElement) ? tmp$_30 : throwCCE();
    this.number5Button = Kotlin.isType(tmp$_31 = document.getElementById('number5Button'), HTMLButtonElement) ? tmp$_31 : throwCCE();
    this.number6Button = Kotlin.isType(tmp$_32 = document.getElementById('number6Button'), HTMLButtonElement) ? tmp$_32 : throwCCE();
    this.number7Button = Kotlin.isType(tmp$_33 = document.getElementById('number7Button'), HTMLButtonElement) ? tmp$_33 : throwCCE();
    this.number8Button = Kotlin.isType(tmp$_34 = document.getElementById('number8Button'), HTMLButtonElement) ? tmp$_34 : throwCCE();
    this.number9Button = Kotlin.isType(tmp$_35 = document.getElementById('number9Button'), HTMLButtonElement) ? tmp$_35 : throwCCE();
    this.minusButton = Kotlin.isType(tmp$_36 = document.getElementById('minusButton'), HTMLButtonElement) ? tmp$_36 : throwCCE();
    this.refreshButton = Kotlin.isType(tmp$_37 = document.getElementById('refreshButton'), HTMLButtonElement) ? tmp$_37 : throwCCE();
    this.channelDescriptionButton = Kotlin.isType(tmp$_38 = document.getElementById('channelDescriptionButton'), HTMLButtonElement) ? tmp$_38 : throwCCE();
    this.aboutWindowButton = Kotlin.isType(tmp$_39 = document.getElementById('aboutWindowButton'), HTMLButtonElement) ? tmp$_39 : throwCCE();
    this.feedbackWebButton = Kotlin.isType(tmp$_40 = document.getElementById('feedbackWebButton'), HTMLButtonElement) ? tmp$_40 : throwCCE();
    this.shareWindowButton = Kotlin.isType(tmp$_41 = document.getElementById('shareWindowButton'), HTMLButtonElement) ? tmp$_41 : throwCCE();
    this.settingWindowButton = Kotlin.isType(tmp$_42 = document.getElementById('settingWindowButton'), HTMLButtonElement) ? tmp$_42 : throwCCE();
    this.appDownloadWindowButton = Kotlin.isType(tmp$_43 = document.getElementById('appDownloadWindowButton'), HTMLButtonElement) ? tmp$_43 : throwCCE();
    this.githubWebButton = Kotlin.isType(tmp$_44 = document.getElementById('githubWebButton'), HTMLButtonElement) ? tmp$_44 : throwCCE();
    this.documentStoreButton = Kotlin.isType(tmp$_45 = document.getElementById('documentStoreButton'), HTMLButtonElement) ? tmp$_45 : throwCCE();
    this.watchingCounterWebButton = Kotlin.isType(tmp$_46 = document.getElementById('watchingCounterWebButton'), HTMLButtonElement) ? tmp$_46 : throwCCE();
    this.centerButton = Kotlin.isType(tmp$_47 = document.createElement('button'), HTMLButtonElement) ? tmp$_47 : throwCCE();
    this.upButton = Kotlin.isType(tmp$_48 = document.createElement('button'), HTMLButtonElement) ? tmp$_48 : throwCCE();
    this.downButton = Kotlin.isType(tmp$_49 = document.createElement('button'), HTMLButtonElement) ? tmp$_49 : throwCCE();
    this.leftButton = Kotlin.isType(tmp$_50 = document.createElement('button'), HTMLButtonElement) ? tmp$_50 : throwCCE();
    this.rightButton = Kotlin.isType(tmp$_51 = document.createElement('button'), HTMLButtonElement) ? tmp$_51 : throwCCE();
    this.menuButton = Kotlin.isType(tmp$_52 = document.createElement('button'), HTMLButtonElement) ? tmp$_52 : throwCCE();
    this.videoDescriptionButton = Kotlin.isType(tmp$_53 = document.createElement('button'), HTMLButtonElement) ? tmp$_53 : throwCCE();
    this.audioDescriptionButton = Kotlin.isType(tmp$_54 = document.createElement('button'), HTMLButtonElement) ? tmp$_54 : throwCCE();
    this.subtitleDescriptionButton = Kotlin.isType(tmp$_55 = document.createElement('button'), HTMLButtonElement) ? tmp$_55 : throwCCE();
    this.volumeDescriptionButton = Kotlin.isType(tmp$_56 = document.createElement('button'), HTMLButtonElement) ? tmp$_56 : throwCCE();
    this.returnButton = Kotlin.isType(tmp$_57 = document.createElement('button'), HTMLButtonElement) ? tmp$_57 : throwCCE();
    this.hideVirtualRemoteButton.onclick = VirtualRemote_init$lambda(this);
    this.epgButton.onclick = VirtualRemote_init$lambda_0;
    this.nextChannelButton.onclick = VirtualRemote_init$lambda_1;
    this.previousChannelButton.onclick = VirtualRemote_init$lambda_2;
    this.designateChannelSelect.onchange = VirtualRemote_init$lambda_3(this);
    this.designateChannelButton.onclick = VirtualRemote_init$lambda_4(this);
    this.lastTimeChannelButton.onclick = VirtualRemote_init$lambda_5;
    this.nextVideoButton.onclick = VirtualRemote_init$lambda_6;
    this.previousVideoButton.onclick = VirtualRemote_init$lambda_7;
    this.designateVideoSelect.onchange = VirtualRemote_init$lambda_8(this);
    this.nextAudioButton.onclick = VirtualRemote_init$lambda_9;
    this.previousAudioButton.onclick = VirtualRemote_init$lambda_10;
    this.designateAudioSelect.onchange = VirtualRemote_init$lambda_11(this);
    this.onHeadNextAudioButton.onclick = VirtualRemote_init$lambda_12;
    this.nextSubtitleButton.onclick = VirtualRemote_init$lambda_13;
    this.previousSubtitleButton.onclick = VirtualRemote_init$lambda_14;
    this.designateSubtitleSelect.onchange = VirtualRemote_init$lambda_15(this);
    this.onHeadNextSubtitleButton.onclick = VirtualRemote_init$lambda_16;
    this.volumeMuteButton.onclick = VirtualRemote_init$lambda_17;
    this.volumeUpButton.onclick = VirtualRemote_init$lambda_18;
    this.volumeDownButton.onclick = VirtualRemote_init$lambda_19;
    this.programmableRedButton.onclick = VirtualRemote_init$lambda_20;
    this.programmableGreenButton.onclick = VirtualRemote_init$lambda_21;
    this.programmableYellowButton.onclick = VirtualRemote_init$lambda_22;
    this.programmableBlueButton.onclick = VirtualRemote_init$lambda_23;
    this.number0Button.onclick = VirtualRemote_init$lambda_24;
    this.number1Button.onclick = VirtualRemote_init$lambda_25;
    this.number2Button.onclick = VirtualRemote_init$lambda_26;
    this.number3Button.onclick = VirtualRemote_init$lambda_27;
    this.number4Button.onclick = VirtualRemote_init$lambda_28;
    this.number5Button.onclick = VirtualRemote_init$lambda_29;
    this.number6Button.onclick = VirtualRemote_init$lambda_30;
    this.number7Button.onclick = VirtualRemote_init$lambda_31;
    this.number8Button.onclick = VirtualRemote_init$lambda_32;
    this.number9Button.onclick = VirtualRemote_init$lambda_33;
    this.minusButton.onclick = VirtualRemote_init$lambda_34;
    this.refreshButton.onclick = VirtualRemote_init$lambda_35;
    this.channelDescriptionButton.onclick = VirtualRemote_init$lambda_36;
    this.aboutWindowButton.onclick = VirtualRemote_init$lambda_37;
    this.feedbackWebButton.onclick = VirtualRemote_init$lambda_38;
    this.shareWindowButton.onclick = VirtualRemote_init$lambda_39;
    this.settingWindowButton.onclick = VirtualRemote_init$lambda_40;
    this.appDownloadWindowButton.onclick = VirtualRemote_init$lambda_41;
    this.githubWebButton.onclick = VirtualRemote_init$lambda_42;
    this.documentStoreButton.onclick = VirtualRemote_init$lambda_43;
    this.watchingCounterWebButton.onclick = VirtualRemote_init$lambda_44;
    this.centerButton.onclick = VirtualRemote_init$lambda_45;
    this.upButton.onclick = VirtualRemote_init$lambda_46;
    this.downButton.onclick = VirtualRemote_init$lambda_47;
    this.leftButton.onclick = VirtualRemote_init$lambda_48;
    this.rightButton.onclick = VirtualRemote_init$lambda_49;
    this.menuButton.onclick = VirtualRemote_init$lambda_50(this);
    this.videoDescriptionButton.onclick = VirtualRemote_init$lambda_51;
    this.audioDescriptionButton.onclick = VirtualRemote_init$lambda_52;
    this.subtitleDescriptionButton.onclick = VirtualRemote_init$lambda_53;
    this.volumeDescriptionButton.onclick = VirtualRemote_init$lambda_54;
    this.returnButton.onclick = VirtualRemote_init$lambda_55;
    println('Init VirtualRemote');
  }
  VirtualRemote.prototype.updateChannelDescription = function () {
    var tmp$, tmp$_0;
    var channelOptionHTMLString = '';
    tmp$ = channels.iterator();
    while (tmp$.hasNext()) {
      var channel = tmp$.next();
      channelOptionHTMLString = '' + ('<option value=' + channel.number + '>') + (padStart(channel.number.toString(), 3, 48) + ' ' + channel.name) + '<\/option>' + channelOptionHTMLString;
    }
    this.designateChannelSelect.innerHTML = channelOptionHTMLString;
    this.designateChannelSelect.value = toString((tmp$_0 = channels.node) != null ? tmp$_0.number : null);
  };
  VirtualRemote.prototype.updateVideoInformation = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var videoOptionHTMLString = '';
    tmp$_0 = ((tmp$ = player != null ? player.videoTracks : null) != null ? tmp$ : ArrayLinkList_init([])).iterator();
    while (tmp$_0.hasNext()) {
      var videoTracks = tmp$_0.next();
      videoOptionHTMLString += '<option value=' + videoTracks.id + '>' + videoTracks.name + '<\/option>';
    }
    this.designateVideoSelect.innerHTML = videoOptionHTMLString;
    this.designateVideoSelect.value = ((tmp$_3 = (tmp$_2 = (tmp$_1 = player != null ? player.videoTracks : null) != null ? tmp$_1.node : null) != null ? tmp$_2.id : null) != null ? tmp$_3 : 0).toString();
  };
  VirtualRemote.prototype.updateAudioInformation = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var audioOptionHTMLString = '';
    tmp$_0 = ((tmp$ = player != null ? player.audioTracks : null) != null ? tmp$ : ArrayLinkList_init([])).iterator();
    while (tmp$_0.hasNext()) {
      var audioTracks = tmp$_0.next();
      audioOptionHTMLString += '<option value=' + audioTracks.id + '>' + audioTracks.name + '<\/option>';
    }
    this.designateAudioSelect.innerHTML = audioOptionHTMLString;
    this.designateAudioSelect.value = ((tmp$_3 = (tmp$_2 = (tmp$_1 = player != null ? player.audioTracks : null) != null ? tmp$_1.node : null) != null ? tmp$_2.id : null) != null ? tmp$_3 : 0).toString();
  };
  VirtualRemote.prototype.updateSubtitleInformation = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var subtitleOptionHTMLString = '';
    tmp$_0 = ((tmp$ = player != null ? player.subtitleTracks : null) != null ? tmp$ : ArrayLinkList_init([])).iterator();
    while (tmp$_0.hasNext()) {
      var subtitleTracks = tmp$_0.next();
      subtitleOptionHTMLString += '<option value=' + subtitleTracks.id + '>' + subtitleTracks.name + '<\/option>';
    }
    this.designateSubtitleSelect.innerHTML = subtitleOptionHTMLString;
    this.designateSubtitleSelect.value = ((tmp$_3 = (tmp$_2 = (tmp$_1 = player != null ? player.subtitleTracks : null) != null ? tmp$_1.node : null) != null ? tmp$_2.id : null) != null ? tmp$_3 : 0).toString();
  };
  VirtualRemote.prototype.update = function () {
    this.updateChannelDescription();
    this.updateVideoInformation();
    this.updateAudioInformation();
    this.updateSubtitleInformation();
  };
  Object.defineProperty(VirtualRemote.prototype, 'isShow', {
    get: function () {
      return UserControlPanel_getInstance().isShow;
    }
  });
  VirtualRemote.prototype.show = function () {
    UserControlPanel_getInstance().show();
  };
  VirtualRemote.prototype.hide = function () {
    UserControlPanel_getInstance().hide();
  };
  function VirtualRemote_init$lambda(this$VirtualRemote) {
    return function (event) {
      event.stopPropagation();
      this$VirtualRemote.hide();
    };
  }
  function VirtualRemote_init$lambda_0(event) {
    EPG_getInstance().showHideAlternately();
  }
  function VirtualRemote_init$lambda_1(event) {
    channels.next();
  }
  function VirtualRemote_init$lambda_2(event) {
    channels.previous();
  }
  function VirtualRemote_init$lambda_3(this$VirtualRemote) {
    return function (event) {
      designatedChannel(toInt(this$VirtualRemote.designateChannelSelect.value));
    };
  }
  function VirtualRemote_init$lambda_4(this$VirtualRemote) {
    return function (event) {
      designatedChannel(toInt(this$VirtualRemote.designateChannelInputText.value));
    };
  }
  function VirtualRemote_init$lambda_5(event) {
    channels.lastTime();
  }
  function VirtualRemote_init$lambda_6(event) {
    player != null ? (player.nextVideoTrack(), Unit) : null;
    VideoDescription_getInstance().show_za3lpa$(3000);
    window.history.pushState('12134', '', '');
  }
  function VirtualRemote_init$lambda_7(event) {
    player != null ? (player.previousVideoTrack(), Unit) : null;
    VideoDescription_getInstance().show_za3lpa$(3000);
    window.history.back();
  }
  function VirtualRemote_init$lambda_8(this$VirtualRemote) {
    return function (event) {
      player != null ? player.designatedVideoTrack(toInt(this$VirtualRemote.designateVideoSelect.value)) : null;
      VideoDescription_getInstance().show_za3lpa$(3000);
    };
  }
  function VirtualRemote_init$lambda_9(event) {
    player != null ? (player.nextAudioTrack(), Unit) : null;
    AudioDescription_getInstance().show_za3lpa$(3000);
  }
  function VirtualRemote_init$lambda_10(event) {
    player != null ? (player.previousAudioTrack(), Unit) : null;
    AudioDescription_getInstance().show_za3lpa$(3000);
  }
  function VirtualRemote_init$lambda_11(this$VirtualRemote) {
    return function (event) {
      player != null ? player.designatedAudioTrack(toInt(this$VirtualRemote.designateAudioSelect.value)) : null;
      AudioDescription_getInstance().show_za3lpa$(3000);
    };
  }
  function VirtualRemote_init$lambda_12(event) {
    player != null ? (player.nextAudioTrack(), Unit) : null;
    AudioDescription_getInstance().show_za3lpa$(3000);
  }
  function VirtualRemote_init$lambda_13(event) {
    player != null ? (player.nextSubtitleTrack(), Unit) : null;
    SubtitleDescription_getInstance().show_za3lpa$(3000);
  }
  function VirtualRemote_init$lambda_14(event) {
    player != null ? (player.previousSubtitleTrack(), Unit) : null;
    SubtitleDescription_getInstance().show_za3lpa$(3000);
  }
  function VirtualRemote_init$lambda_15(this$VirtualRemote) {
    return function (event) {
      player != null ? player.designatedSubtitleTrack(toInt(this$VirtualRemote.designateSubtitleSelect.value)) : null;
      SubtitleDescription_getInstance().show_za3lpa$(3000);
    };
  }
  function VirtualRemote_init$lambda_16(event) {
    player != null ? (player.nextSubtitleTrack(), Unit) : null;
    SubtitleDescription_getInstance().show_za3lpa$(3000);
  }
  function VirtualRemote_init$lambda_17(event) {
    Player$Companion_getInstance().volumeMute();
  }
  function VirtualRemote_init$lambda_18(event) {
    Player$Companion_getInstance().volumeUp();
  }
  function VirtualRemote_init$lambda_19(event) {
    Player$Companion_getInstance().volumeDown();
  }
  function VirtualRemote_init$lambda_20(event) {
    player != null ? (player.programmable(Player$ProgrammableColor$red_getInstance()), Unit) : null;
  }
  function VirtualRemote_init$lambda_21(event) {
    player != null ? (player.programmable(Player$ProgrammableColor$green_getInstance()), Unit) : null;
  }
  function VirtualRemote_init$lambda_22(event) {
    player != null ? (player.programmable(Player$ProgrammableColor$yellow_getInstance()), Unit) : null;
  }
  function VirtualRemote_init$lambda_23(event) {
    player != null ? (player.programmable(Player$ProgrammableColor$blue_getInstance()), Unit) : null;
  }
  function VirtualRemote_init$lambda_24(event) {
    EnteringNumberBox_getInstance().enter_61zpoe$('0');
  }
  function VirtualRemote_init$lambda_25(event) {
    EnteringNumberBox_getInstance().enter_61zpoe$('1');
  }
  function VirtualRemote_init$lambda_26(event) {
    EnteringNumberBox_getInstance().enter_61zpoe$('2');
  }
  function VirtualRemote_init$lambda_27(event) {
    EnteringNumberBox_getInstance().enter_61zpoe$('3');
  }
  function VirtualRemote_init$lambda_28(event) {
    EnteringNumberBox_getInstance().enter_61zpoe$('4');
  }
  function VirtualRemote_init$lambda_29(event) {
    EnteringNumberBox_getInstance().enter_61zpoe$('5');
  }
  function VirtualRemote_init$lambda_30(event) {
    EnteringNumberBox_getInstance().enter_61zpoe$('6');
  }
  function VirtualRemote_init$lambda_31(event) {
    EnteringNumberBox_getInstance().enter_61zpoe$('7');
  }
  function VirtualRemote_init$lambda_32(event) {
    EnteringNumberBox_getInstance().enter_61zpoe$('8');
  }
  function VirtualRemote_init$lambda_33(event) {
    EnteringNumberBox_getInstance().enter_61zpoe$('9');
  }
  function VirtualRemote_init$lambda_34(event) {
    EnteringNumberBox_getInstance().enter_61zpoe$('-');
  }
  function VirtualRemote_init$lambda_35(event) {
    updateChannel();
  }
  function VirtualRemote_init$lambda_36(event) {
    if (ChannelDescription_getInstance().isShow) {
      ChannelDescription_getInstance().hide();
    }
     else {
      ChannelDescription_getInstance().show_za3lpa$(60000);
    }
  }
  function VirtualRemote_init$lambda_37(evebt) {
    AboutWindow_getInstance().showHideAlternately();
  }
  function VirtualRemote_init$lambda_38(evebt) {
    var formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSehWsf1J8sSzPpXHRfFg7mqAsCC1q5dJpef2W6YvNFCrIW-8g/viewform?usp=pp_url';
    var coreVersionArg = 'entry.133709146=' + coreVersion_0;
    var appVersionArg = 'entry.759953459=' + appVersion;
    var runningOsArg = 'entry.272098163=' + RunnerInfo_getInstance().getOsName();
    var runningBrowserArg = 'entry.1391825326=' + RunnerInfo_getInstance().getBrowserName();
    var logArg = 'entry.1270012498=' + encodeURIComponent(getConsoleLogs());
    window.open(formUrl + '&' + coreVersionArg + '&' + appVersionArg + '&' + runningOsArg + '&' + runningBrowserArg + '&' + logArg, '_blank');
  }
  function VirtualRemote_init$lambda_39(evebt) {
    ShareWindow_getInstance().showHideAlternately();
  }
  function VirtualRemote_init$lambda_40(event) {
    SettingWindow_getInstance().showHideAlternately();
  }
  function VirtualRemote_init$lambda_41(evebt) {
    AppDownloadWindow_getInstance().showHideAlternately();
  }
  function VirtualRemote_init$lambda_42(evebt) {
    window.open('https://github.com/HKNBP', '_blank');
  }
  function VirtualRemote_init$lambda_43(event) {
    window.open('https://drive.google.com/drive/folders/1c8rb7Yrfe8IV_32pSDGF9oP5n-7Qs3PO', '_blank');
  }
  function VirtualRemote_init$lambda_44(evebt) {
    window.open('https://datastudio.google.com/reporting/1GKlAWHEsDdryWh2PRdQFmWzQ_ksRQ8BK/page/1M', '_blank');
  }
  function VirtualRemote_init$lambda_45(event) {
    var tmp$;
    (tmp$ = jQuery(':focus')) != null ? tmp$.click() : null;
  }
  function VirtualRemote_init$lambda$lambda(element) {
    var tmp$;
    return (tmp$ = toIntOrNull(Tab3dIndex$Companion_getInstance().toUnparsedTabIndex_lvro24$(element))) != null ? tmp$ : 0;
  }
  function VirtualRemote_init$lambda$lambda_0(closure$i, closure$closestIndex) {
    return function () {
      closure$closestIndex.v = closure$i;
      return Unit;
    };
  }
  function VirtualRemote_init$lambda_46(event) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17;
    var selectables = jQuery(':tabbable');
    var current = jQuery(':focus');
    var currentIndex = (tmp$ = selectables != null ? selectables.index(current) : null) != null ? tmp$ : 0;
    var currentTabIndex = Tab3dIndex$Companion_getInstance().toTab3dIndex_61zpoe$((tmp$_1 = (tmp$_0 = current != null ? current.attr('tabIndex') : null) != null ? tmp$_0.toString() : null) != null ? tmp$_1 : '');
    for (var i = currentIndex - 1 | 0; i >= 0; i--) {
      var tabIndexForCheck = Tab3dIndex$Companion_getInstance().toTab3dIndex_61zpoe$((tmp$_4 = (tmp$_3 = (tmp$_2 = selectables != null ? selectables.eq(i) : null) != null ? tmp$_2.attr('tabIndex') : null) != null ? tmp$_3.toString() : null) != null ? tmp$_4 : '');
      if (tabIndexForCheck.y === currentTabIndex.y && tabIndexForCheck.z === currentTabIndex.z) {
        if (tabIndexForCheck.x >= currentTabIndex.x) {
          (tmp$_5 = selectables != null ? selectables.eq(i) : null) != null ? tmp$_5.focus() : null;
          return;
        }
      }
    }
    var needTabIndex = {v: currentTabIndex};
    var tabIndexList = Tab3dIndex$Companion_getInstance().getTab3dIndexList_za3rmp$(selectables);
    if (tabIndexList.size > 1) {
      sortWith(tabIndexList, new Comparator$ObjectLiteral_2(compareByDescending$lambda(VirtualRemote_init$lambda$lambda)));
    }
    if (needTabIndex.v.y === last(tabIndexList).y) {
      needTabIndex.v = new Tab3dIndex(currentTabIndex.x, ((tmp$_7 = (tmp$_6 = getOrNull(tabIndexList, 0)) != null ? tmp$_6.y : null) != null ? tmp$_7 : 0) + 1 | 0, currentTabIndex.z);
    }
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_18;
      tmp$_18 = tabIndexList.iterator();
      loop_label: while (tmp$_18.hasNext()) {
        var element = tmp$_18.next();
        var predicate$result;
        predicate$break: do {
          if (needTabIndex.v.z === element.z) {
            predicate$result = needTabIndex.v.y > element.y;
            break predicate$break;
          }
          predicate$result = false;
        }
         while (false);
        if (predicate$result) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    var nextTabIndex = (tmp$_8 = firstOrNull$result) != null ? tmp$_8 : new Tab3dIndex(0, 0, 0);
    var closestIndex = {v: null};
    for (var i_0 = (tmp$_11 = (tmp$_10 = (tmp$_9 = selectables != null ? selectables.length : null) != null ? tmp$_9.toString() : null) != null ? toIntOrNull(tmp$_10) : null) != null ? tmp$_11 : 0; i_0 >= 0; i_0--) {
      var tabIndexForCheck_0 = Tab3dIndex$Companion_getInstance().toTab3dIndex_61zpoe$((tmp$_14 = (tmp$_13 = (tmp$_12 = selectables != null ? selectables.eq(i_0) : null) != null ? tmp$_12.attr('tabIndex') : null) != null ? tmp$_13.toString() : null) != null ? tmp$_14 : '');
      if (tabIndexForCheck_0.y === nextTabIndex.y && tabIndexForCheck_0.z === nextTabIndex.z) {
        if (tabIndexForCheck_0.x === currentTabIndex.x) {
          (tmp$_15 = selectables != null ? selectables.eq(i_0) : null) != null ? tmp$_15.focus() : null;
          return;
        }
        (tmp$_16 = closestIndex.v) != null ? tmp$_16 : (VirtualRemote_init$lambda$lambda_0(i_0, closestIndex)(), Unit);
      }
    }
    (tmp$_17 = selectables != null ? selectables.eq(closestIndex.v) : null) != null ? tmp$_17.focus() : null;
  }
  function VirtualRemote_init$lambda$lambda_1(element) {
    var tmp$;
    return (tmp$ = toIntOrNull(Tab3dIndex$Companion_getInstance().toUnparsedTabIndex_lvro24$(element))) != null ? tmp$ : 0;
  }
  function VirtualRemote_init$lambda_47(event) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19;
    var selectables = jQuery(':tabbable');
    var current = jQuery(':focus');
    var currentIndex = (tmp$ = selectables != null ? selectables.index(current) : null) != null ? tmp$ : 0;
    var currentTabIndex = Tab3dIndex$Companion_getInstance().toTab3dIndex_61zpoe$((tmp$_1 = (tmp$_0 = current != null ? current.attr('tabIndex') : null) != null ? tmp$_0.toString() : null) != null ? tmp$_1 : '');
    tmp$_5 = (tmp$_4 = (tmp$_3 = (tmp$_2 = selectables != null ? selectables.length : null) != null ? tmp$_2.toString() : null) != null ? toIntOrNull(tmp$_3) : null) != null ? tmp$_4 : 0;
    for (var i = currentIndex + 1 | 0; i < tmp$_5; i++) {
      var tabIndexForCheck = Tab3dIndex$Companion_getInstance().toTab3dIndex_61zpoe$((tmp$_8 = (tmp$_7 = (tmp$_6 = selectables != null ? selectables.eq(i) : null) != null ? tmp$_6.attr('tabIndex') : null) != null ? tmp$_7.toString() : null) != null ? tmp$_8 : '');
      if (tabIndexForCheck.y === currentTabIndex.y && tabIndexForCheck.z === currentTabIndex.z) {
        if (tabIndexForCheck.x <= currentTabIndex.x) {
          (tmp$_9 = selectables != null ? selectables.eq(i) : null) != null ? tmp$_9.focus() : null;
          return;
        }
      }
    }
    var needTabIndex = {v: currentTabIndex};
    var tabIndexList = Tab3dIndex$Companion_getInstance().getTab3dIndexList_za3rmp$(selectables);
    if (tabIndexList.size > 1) {
      sortWith(tabIndexList, new Comparator$ObjectLiteral_3(compareBy$lambda_2(VirtualRemote_init$lambda$lambda_1)));
    }
    if (needTabIndex.v.y === last(tabIndexList).y) {
      needTabIndex.v = new Tab3dIndex(currentTabIndex.x, -1, currentTabIndex.z);
    }
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_20;
      tmp$_20 = tabIndexList.iterator();
      loop_label: while (tmp$_20.hasNext()) {
        var element = tmp$_20.next();
        var predicate$result;
        predicate$break: do {
          if (needTabIndex.v.z === element.z) {
            predicate$result = needTabIndex.v.y < element.y;
            break predicate$break;
          }
          predicate$result = false;
        }
         while (false);
        if (predicate$result) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    var nextTabIndex = (tmp$_10 = firstOrNull$result) != null ? tmp$_10 : new Tab3dIndex(0, 0, 0);
    var closestIndex = 0;
    tmp$_14 = ((tmp$_13 = (tmp$_12 = (tmp$_11 = selectables != null ? selectables.length : null) != null ? tmp$_11.toString() : null) != null ? toIntOrNull(tmp$_12) : null) != null ? tmp$_13 : 0) - 1 | 0;
    for (var i_0 = 0; i_0 < tmp$_14; i_0++) {
      var tabIndexForCheck_0 = Tab3dIndex$Companion_getInstance().toTab3dIndex_61zpoe$((tmp$_17 = (tmp$_16 = (tmp$_15 = selectables != null ? selectables.eq(i_0) : null) != null ? tmp$_15.attr('tabIndex') : null) != null ? tmp$_16.toString() : null) != null ? tmp$_17 : '');
      if (tabIndexForCheck_0.y === nextTabIndex.y && tabIndexForCheck_0.z === nextTabIndex.z) {
        if (tabIndexForCheck_0.x === currentTabIndex.x) {
          (tmp$_18 = selectables != null ? selectables.eq(i_0) : null) != null ? tmp$_18.focus() : null;
          return;
        }
        closestIndex = i_0;
      }
    }
    (tmp$_19 = selectables != null ? selectables.eq(closestIndex) : null) != null ? tmp$_19.focus() : null;
  }
  function VirtualRemote_init$lambda_48(event) {
    jQuery != null ? jQuery.tabPrev() : null;
  }
  function VirtualRemote_init$lambda_49(event) {
    jQuery != null ? jQuery.tabNext() : null;
  }
  function VirtualRemote_init$lambda_50(this$VirtualRemote) {
    return function (event) {
      if (this$VirtualRemote.isShow) {
        this$VirtualRemote.hide();
      }
       else {
        this$VirtualRemote.show_za3lpa$(60000);
      }
    };
  }
  function VirtualRemote_init$lambda_51(event) {
    VideoDescription_getInstance().show_za3lpa$(5000);
  }
  function VirtualRemote_init$lambda_52(event) {
    AudioDescription_getInstance().show_za3lpa$(5000);
  }
  function VirtualRemote_init$lambda_53(event) {
    SubtitleDescription_getInstance().show_za3lpa$(5000);
  }
  function VirtualRemote_init$lambda_54(event) {
    VolumeDescription_getInstance().show_za3lpa$(5000);
  }
  function VirtualRemote_init$lambda_55(event) {
    UserInterface$Companion_getInstance().hideAllUserInterface();
  }
  VirtualRemote.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'VirtualRemote',
    interfaces: [UserInterface]
  };
  var VirtualRemote_instance = null;
  function VirtualRemote_getInstance() {
    if (VirtualRemote_instance === null) {
      new VirtualRemote();
    }
    return VirtualRemote_instance;
  }
  function VolumeDescription() {
    VolumeDescription_instance = this;
    UserInterface.call(this, 'volumeDescription');
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    this.volumeDescription_0 = Kotlin.isType(tmp$ = document.getElementById('volumeDescription'), HTMLDivElement) ? tmp$ : throwCCE();
    this.volumeUpButton_0 = Kotlin.isType(tmp$_0 = document.getElementById('volumeDescriptionVolumeUpButton'), HTMLButtonElement) ? tmp$_0 : throwCCE();
    this.volumeDownButton_0 = Kotlin.isType(tmp$_1 = document.getElementById('volumeDescriptionVolumeDownButton'), HTMLButtonElement) ? tmp$_1 : throwCCE();
    this.volumeValue_0 = Kotlin.isType(tmp$_2 = document.getElementById('volumeDescriptionVolumeValue'), HTMLDivElement) ? tmp$_2 : throwCCE();
    this.volumeIconList_0 = Kotlin.isType(tmp$_3 = document.getElementById('volumeDescriptionVolumeIconList'), HTMLDivElement) ? tmp$_3 : throwCCE();
    this.volumeIcon_0 = '<i class="icon-font">&#xe82a;<\/i>';
    this.volumeUpButton_0.onclick = VolumeDescription_init$lambda;
    this.volumeDownButton_0.onclick = VolumeDescription_init$lambda_0;
    println('Init VolumeDescription');
  }
  function VolumeDescription$show$lambda$lambda(volume) {
    var tmp$;
    VolumeDescription_getInstance().volumeValue_0.innerHTML = numberToInt(volume).toString();
    VolumeDescription_getInstance().volumeIconList_0.innerHTML = '';
    tmp$ = numberToInt(volume / 10);
    for (var i = 0; i < tmp$; i++) {
      VolumeDescription_getInstance().volumeIconList_0.innerHTML = VolumeDescription_getInstance().volumeIconList_0.innerHTML + VolumeDescription_getInstance().volumeIcon_0;
    }
  }
  function VolumeDescription$show$lambda() {
    Player$Companion_getInstance().getVolume_huw4wd$(VolumeDescription$show$lambda$lambda);
  }
  function VolumeDescription$show$lambda_0(closure$script) {
    return function () {
      closure$script();
    };
  }
  function VolumeDescription$show$lambda_1(closure$script) {
    return function () {
      closure$script();
    };
  }
  function VolumeDescription$show$lambda_2(closure$script) {
    return function () {
      closure$script();
    };
  }
  function VolumeDescription$show$lambda_3(closure$script) {
    return function () {
      closure$script();
    };
  }
  function VolumeDescription$show$lambda_4(closure$script) {
    return function () {
      closure$script();
    };
  }
  VolumeDescription.prototype.show = function () {
    UserInterface.prototype.show.call(this);
    var script = VolumeDescription$show$lambda;
    script();
    window.setTimeout(VolumeDescription$show$lambda_0(script), 100);
    window.setTimeout(VolumeDescription$show$lambda_1(script), 500);
    window.setTimeout(VolumeDescription$show$lambda_2(script), 1000);
    window.setTimeout(VolumeDescription$show$lambda_3(script), 10000);
    window.setTimeout(VolumeDescription$show$lambda_4(script), 60000);
  };
  function VolumeDescription_init$lambda(event) {
    Player$Companion_getInstance().volumeUp();
  }
  function VolumeDescription_init$lambda_0(event) {
    Player$Companion_getInstance().volumeDown();
  }
  VolumeDescription.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'VolumeDescription',
    interfaces: [UserInterface]
  };
  var VolumeDescription_instance = null;
  function VolumeDescription_getInstance() {
    if (VolumeDescription_instance === null) {
      new VolumeDescription();
    }
    return VolumeDescription_instance;
  }
  function WatchingCounter(channel) {
    WatchingCounter$Companion_getInstance();
    this.channel_0 = channel;
    this.iframeWatchingCounter_0 = document.getElementById('iframeWatchingCounter');
    WatchingCounter$Companion_getInstance().timer_0 = window.setTimeout(WatchingCounter_init$lambda(this), 60000);
  }
  function WatchingCounter$Companion() {
    WatchingCounter$Companion_instance = this;
    this.timer_kk3exo$_0 = 0;
  }
  Object.defineProperty(WatchingCounter$Companion.prototype, 'timer_0', {
    get: function () {
      return this.timer_kk3exo$_0;
    },
    set: function (value) {
      window.clearTimeout(this.timer_0);
      this.timer_kk3exo$_0 = value;
    }
  });
  WatchingCounter$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var WatchingCounter$Companion_instance = null;
  function WatchingCounter$Companion_getInstance() {
    if (WatchingCounter$Companion_instance === null) {
      new WatchingCounter$Companion();
    }
    return WatchingCounter$Companion_instance;
  }
  function WatchingCounter_init$lambda(this$WatchingCounter) {
    return function () {
      this$WatchingCounter.iframeWatchingCounter_0.src = 'https://hknbp.org//watching-counter.html?' + ('channel=' + this$WatchingCounter.channel_0.number) + '&' + ('coreVersion=' + coreVersion_0) + '&' + ('appVersion=' + appVersion);
    };
  }
  WatchingCounter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WatchingCounter',
    interfaces: []
  };
  function Window(mainFrameElementID, firstFocusElementID, isFocusCountdownHide, isFocusOutHide, isHideFocusToUserControlPanelShower, isShowToHideUserControlPanel, conversionFocusHideTime) {
    if (firstFocusElementID === void 0)
      firstFocusElementID = null;
    if (isFocusCountdownHide === void 0)
      isFocusCountdownHide = true;
    if (isFocusOutHide === void 0)
      isFocusOutHide = true;
    if (isHideFocusToUserControlPanelShower === void 0)
      isHideFocusToUserControlPanelShower = true;
    if (isShowToHideUserControlPanel === void 0)
      isShowToHideUserControlPanel = true;
    if (conversionFocusHideTime === void 0)
      conversionFocusHideTime = 15000;
    UserInterface.call(this, mainFrameElementID, firstFocusElementID, isFocusCountdownHide, isFocusOutHide, isHideFocusToUserControlPanelShower, isShowToHideUserControlPanel, conversionFocusHideTime);
  }
  Window.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Window',
    interfaces: [UserInterface]
  };
  function Comparator$ObjectLiteral_4(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_4.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_4.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareBy$lambda_3 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function XMLTV(displayName, icon, urls, programmes) {
    XMLTV$Companion_getInstance();
    if (displayName === void 0)
      displayName = null;
    if (icon === void 0)
      icon = null;
    if (urls === void 0)
      urls = null;
    if (programmes === void 0)
      programmes = null;
    this.displayName = displayName;
    this.icon = icon;
    this.urls = urls;
    this.programmes = programmes;
  }
  function XMLTV$Icon(src, width, height) {
    if (src === void 0)
      src = null;
    if (width === void 0)
      width = null;
    if (height === void 0)
      height = null;
    this.src = src;
    this.width = width;
    this.height = height;
  }
  XMLTV$Icon.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Icon',
    interfaces: []
  };
  function XMLTV$Programme(start, stop, pdcStart, vpsStart, showView, videoPlus, clumpidx, title, subTitle, desc, credits, date, category, keyword, language, origLanguage, length, icon, urls, country, episodeNum, video, audio, previouslyShown, premiere, lastChance, new_0, subtitles, rating, starRating, review) {
    if (pdcStart === void 0)
      pdcStart = null;
    if (vpsStart === void 0)
      vpsStart = null;
    if (showView === void 0)
      showView = null;
    if (videoPlus === void 0)
      videoPlus = null;
    if (clumpidx === void 0)
      clumpidx = null;
    if (title === void 0)
      title = null;
    if (subTitle === void 0)
      subTitle = null;
    if (desc === void 0)
      desc = null;
    if (credits === void 0)
      credits = null;
    if (date === void 0)
      date = null;
    if (category === void 0)
      category = null;
    if (keyword === void 0)
      keyword = null;
    if (language === void 0)
      language = null;
    if (origLanguage === void 0)
      origLanguage = null;
    if (length === void 0)
      length = null;
    if (icon === void 0)
      icon = null;
    if (urls === void 0)
      urls = null;
    if (country === void 0)
      country = null;
    if (episodeNum === void 0)
      episodeNum = null;
    if (video === void 0)
      video = null;
    if (audio === void 0)
      audio = null;
    if (previouslyShown === void 0)
      previouslyShown = null;
    if (premiere === void 0)
      premiere = null;
    if (lastChance === void 0)
      lastChance = null;
    if (new_0 === void 0)
      new_0 = false;
    if (subtitles === void 0)
      subtitles = null;
    if (rating === void 0)
      rating = null;
    if (starRating === void 0)
      starRating = null;
    if (review === void 0)
      review = null;
    this.start = start;
    this.stop = stop;
    this.pdcStart = pdcStart;
    this.vpsStart = vpsStart;
    this.showView = showView;
    this.videoPlus = videoPlus;
    this.clumpidx = clumpidx;
    this.title = title;
    this.subTitle = subTitle;
    this.desc = desc;
    this.credits = credits;
    this.date = date;
    this.category = category;
    this.keyword = keyword;
    this.language = language;
    this.origLanguage = origLanguage;
    this.length = length;
    this.icon = icon;
    this.urls = urls;
    this.country = country;
    this.episodeNum = episodeNum;
    this.video = video;
    this.audio = audio;
    this.previouslyShown = previouslyShown;
    this.premiere = premiere;
    this.lastChance = lastChance;
    this.new = new_0;
    this.subtitles = subtitles;
    this.rating = rating;
    this.starRating = starRating;
    this.review = review;
  }
  function XMLTV$Programme$Credits(directors, actors, writers, adapters, producers, composers, editors, presenters, commentators, guests) {
    if (directors === void 0)
      directors = null;
    if (actors === void 0)
      actors = null;
    if (writers === void 0)
      writers = null;
    if (adapters === void 0)
      adapters = null;
    if (producers === void 0)
      producers = null;
    if (composers === void 0)
      composers = null;
    if (editors === void 0)
      editors = null;
    if (presenters === void 0)
      presenters = null;
    if (commentators === void 0)
      commentators = null;
    if (guests === void 0)
      guests = null;
    this.directors = directors;
    this.actors = actors;
    this.writers = writers;
    this.adapters = adapters;
    this.producers = producers;
    this.composers = composers;
    this.editors = editors;
    this.presenters = presenters;
    this.commentators = commentators;
    this.guests = guests;
  }
  function XMLTV$Programme$Credits$Actor(role, actor) {
    if (role === void 0)
      role = null;
    if (actor === void 0)
      actor = null;
    this.role = role;
    this.actor = actor;
  }
  XMLTV$Programme$Credits$Actor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Actor',
    interfaces: []
  };
  XMLTV$Programme$Credits.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Credits',
    interfaces: []
  };
  function XMLTV$Programme$Length(units, length) {
    if (units === void 0)
      units = null;
    if (length === void 0)
      length = null;
    this.units = units;
    this.length = length;
  }
  XMLTV$Programme$Length.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Length',
    interfaces: []
  };
  function XMLTV$Programme$EpisodeNum(system, episodeNum) {
    if (system === void 0)
      system = null;
    if (episodeNum === void 0)
      episodeNum = null;
    this.system = system;
    this.episodeNum = episodeNum;
  }
  XMLTV$Programme$EpisodeNum.prototype.getSeason = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    if (equals(this.system, 'xmltv_ns')) {
      var number = (tmp$_4 = (tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = this.episodeNum) != null ? split(tmp$, ['.']) : null) != null ? getOrNull(tmp$_0, 0) : null) != null ? split(tmp$_1, ['/']) : null) != null ? getOrNull(tmp$_2, 0) : null) != null ? Regex_init('[^0-9]').replace_x2uqeu$(tmp$_3, '') : null) != null ? toIntOrNull(tmp$_4) : null;
      if (number != null) {
        tmp$_5 = number + 1 | 0;
      }
       else {
        tmp$_5 = number;
      }
    }
     else {
      tmp$_5 = null;
    }
    return tmp$_5;
  };
  XMLTV$Programme$EpisodeNum.prototype.getTotalSeason = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    if (equals(this.system, 'xmltv_ns')) {
      tmp$_5 = (tmp$_4 = (tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = this.episodeNum) != null ? split(tmp$, ['.']) : null) != null ? getOrNull(tmp$_0, 0) : null) != null ? split(tmp$_1, ['/']) : null) != null ? getOrNull(tmp$_2, 1) : null) != null ? Regex_init('[^0-9]').replace_x2uqeu$(tmp$_3, '') : null) != null ? toIntOrNull(tmp$_4) : null;
    }
     else {
      tmp$_5 = null;
    }
    return tmp$_5;
  };
  XMLTV$Programme$EpisodeNum.prototype.getEpisode = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    if (equals(this.system, 'xmltv_ns')) {
      var number = (tmp$_4 = (tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = this.episodeNum) != null ? split(tmp$, ['.']) : null) != null ? getOrNull(tmp$_0, 1) : null) != null ? split(tmp$_1, ['/']) : null) != null ? getOrNull(tmp$_2, 0) : null) != null ? Regex_init('[^0-9]').replace_x2uqeu$(tmp$_3, '') : null) != null ? toIntOrNull(tmp$_4) : null;
      if (number != null) {
        tmp$_5 = number + 1 | 0;
      }
       else {
        tmp$_5 = number;
      }
    }
     else {
      tmp$_5 = null;
    }
    return tmp$_5;
  };
  XMLTV$Programme$EpisodeNum.prototype.getTotalEpisode = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    if (equals(this.system, 'xmltv_ns')) {
      tmp$_5 = (tmp$_4 = (tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = this.episodeNum) != null ? split(tmp$, ['.']) : null) != null ? getOrNull(tmp$_0, 1) : null) != null ? split(tmp$_1, ['/']) : null) != null ? getOrNull(tmp$_2, 1) : null) != null ? Regex_init('[^0-9]').replace_x2uqeu$(tmp$_3, '') : null) != null ? toIntOrNull(tmp$_4) : null;
    }
     else {
      tmp$_5 = null;
    }
    return tmp$_5;
  };
  XMLTV$Programme$EpisodeNum.prototype.getPart = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    if (equals(this.system, 'xmltv_ns')) {
      var number = (tmp$_4 = (tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = this.episodeNum) != null ? split(tmp$, ['.']) : null) != null ? getOrNull(tmp$_0, 2) : null) != null ? split(tmp$_1, ['/']) : null) != null ? getOrNull(tmp$_2, 0) : null) != null ? Regex_init('[^0-9]').replace_x2uqeu$(tmp$_3, '') : null) != null ? toIntOrNull(tmp$_4) : null;
      if (number != null) {
        tmp$_5 = number + 1 | 0;
      }
       else {
        tmp$_5 = number;
      }
    }
     else {
      tmp$_5 = null;
    }
    return tmp$_5;
  };
  XMLTV$Programme$EpisodeNum.prototype.getTotalPart = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    if (equals(this.system, 'xmltv_ns')) {
      tmp$_5 = (tmp$_4 = (tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = this.episodeNum) != null ? split(tmp$, ['.']) : null) != null ? getOrNull(tmp$_0, 2) : null) != null ? split(tmp$_1, ['/']) : null) != null ? getOrNull(tmp$_2, 1) : null) != null ? Regex_init('[^0-9]').replace_x2uqeu$(tmp$_3, '') : null) != null ? toIntOrNull(tmp$_4) : null;
    }
     else {
      tmp$_5 = null;
    }
    return tmp$_5;
  };
  XMLTV$Programme$EpisodeNum.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EpisodeNum',
    interfaces: []
  };
  function XMLTV$Programme$Video(present, colour, aspect, quality) {
    if (present === void 0)
      present = null;
    if (colour === void 0)
      colour = null;
    if (aspect === void 0)
      aspect = null;
    if (quality === void 0)
      quality = null;
    this.present = present;
    this.colour = colour;
    this.aspect = aspect;
    this.quality = quality;
  }
  XMLTV$Programme$Video.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Video',
    interfaces: []
  };
  function XMLTV$Programme$Audio(present, stereo) {
    if (present === void 0)
      present = null;
    if (stereo === void 0)
      stereo = null;
    this.present = present;
    this.stereo = stereo;
  }
  XMLTV$Programme$Audio.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Audio',
    interfaces: []
  };
  function XMLTV$Programme$PreviouslyShown(start, channel) {
    if (start === void 0)
      start = null;
    if (channel === void 0)
      channel = null;
    this.start = start;
    this.channel = channel;
  }
  XMLTV$Programme$PreviouslyShown.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PreviouslyShown',
    interfaces: []
  };
  function XMLTV$Programme$Subtitles(type, language) {
    if (type === void 0)
      type = null;
    if (language === void 0)
      language = null;
    this.type = type;
    this.language = language;
  }
  XMLTV$Programme$Subtitles.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Subtitles',
    interfaces: []
  };
  function XMLTV$Programme$Rating(system, value, icon) {
    if (system === void 0)
      system = null;
    if (value === void 0)
      value = null;
    if (icon === void 0)
      icon = null;
    this.system = system;
    this.value = value;
    this.icon = icon;
  }
  XMLTV$Programme$Rating.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Rating',
    interfaces: []
  };
  function XMLTV$Programme$StarRating(system, value, icon) {
    if (system === void 0)
      system = null;
    if (value === void 0)
      value = null;
    if (icon === void 0)
      icon = null;
    this.system = system;
    this.value = value;
    this.icon = icon;
  }
  XMLTV$Programme$StarRating.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StarRating',
    interfaces: []
  };
  function XMLTV$Programme$Review(type, source, reviewer, review) {
    if (type === void 0)
      type = null;
    if (source === void 0)
      source = null;
    if (reviewer === void 0)
      reviewer = null;
    if (review === void 0)
      review = null;
    this.type = type;
    this.source = source;
    this.reviewer = reviewer;
    this.review = review;
  }
  XMLTV$Programme$Review.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Review',
    interfaces: []
  };
  function XMLTV$Programme$ProgrammeList() {
  }
  XMLTV$Programme$ProgrammeList.prototype.getProgrammeByTime_qjzqsm$ = function (date) {
    var tmp$;
    tmp$ = this.iterator();
    while (tmp$.hasNext()) {
      var programme = tmp$.next();
      if (XMLTV$Companion_getInstance().compareTo_fsx041$(programme.start, date) <= 0 && XMLTV$Companion_getInstance().compareTo_fsx041$(date, programme.stop) < 0) {
        return programme;
      }
    }
    return null;
  };
  XMLTV$Programme$ProgrammeList.prototype.getProgrammeByTime = function () {
    return this.getProgrammeByTime_qjzqsm$(new Date());
  };
  XMLTV$Programme$ProgrammeList.prototype.getClosestNextProgrammeByTime_qjzqsm$ = function (date) {
    var tmp$;
    tmp$ = this.iterator();
    while (tmp$.hasNext()) {
      var programme = tmp$.next();
      if (XMLTV$Companion_getInstance().compareTo_fsx041$(date, programme.start) <= 0) {
        return programme;
      }
    }
    return null;
  };
  XMLTV$Programme$ProgrammeList.prototype.getClosestPreviousProgrammeByTime_qjzqsm$ = function (date) {
    var i = this.size - 1 | 0;
    while (0 < i) {
      if (XMLTV$Companion_getInstance().compareTo_fsx041$(this.get_za3lpa$(i).stop, date) <= 0) {
        return this.get_za3lpa$(i);
      }
      i = i - 1 | 0;
    }
    return null;
  };
  XMLTV$Programme$ProgrammeList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProgrammeList',
    interfaces: [ArrayList]
  };
  function XMLTV$Programme$XMLTV$Programme$ProgrammeList_init($this) {
    $this = $this || Object.create(XMLTV$Programme$ProgrammeList.prototype);
    ArrayList_init($this);
    XMLTV$Programme$ProgrammeList.call($this);
    if ($this.size > 1) {
      sortWith($this, new Comparator$ObjectLiteral_4(compareBy$lambda_3(XMLTV$Programme$XMLTV$Programme$ProgrammeList_init$lambda)));
    }
    return $this;
  }
  function XMLTV$Programme$XMLTV$Programme$ProgrammeList_init$lambda(programme) {
    return programme.start.getTime();
  }
  function XMLTV$Programme$XMLTV$Programme$ProgrammeList_init_0(initElements, $this) {
    $this = $this || Object.create(XMLTV$Programme$ProgrammeList.prototype);
    ArrayList_init($this);
    XMLTV$Programme$ProgrammeList.call($this);
    var tmp$;
    for (tmp$ = 0; tmp$ !== initElements.length; ++tmp$) {
      var initElement = initElements[tmp$];
      $this.add_11rb$(initElement);
    }
    return $this;
  }
  function XMLTV$Programme$XMLTV$Programme$ProgrammeList_init_1(initialCapacity, $this) {
    $this = $this || Object.create(XMLTV$Programme$ProgrammeList.prototype);
    ArrayList_init_0(initialCapacity, $this);
    XMLTV$Programme$ProgrammeList.call($this);
    if ($this.size > 1) {
      sortWith($this, new Comparator$ObjectLiteral_4(compareBy$lambda_3(XMLTV$Programme$XMLTV$Programme$ProgrammeList_init$lambda_0)));
    }
    return $this;
  }
  function XMLTV$Programme$XMLTV$Programme$ProgrammeList_init$lambda_0(programme) {
    return programme.start.getTime();
  }
  function XMLTV$Programme$XMLTV$Programme$ProgrammeList_init_2(elements, $this) {
    $this = $this || Object.create(XMLTV$Programme$ProgrammeList.prototype);
    ArrayList_init_1(elements, $this);
    XMLTV$Programme$ProgrammeList.call($this);
    if ($this.size > 1) {
      sortWith($this, new Comparator$ObjectLiteral_4(compareBy$lambda_3(XMLTV$Programme$XMLTV$Programme$ProgrammeList_init$lambda_1)));
    }
    return $this;
  }
  function XMLTV$Programme$XMLTV$Programme$ProgrammeList_init$lambda_1(programme) {
    return programme.start.getTime();
  }
  XMLTV$Programme.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Programme',
    interfaces: []
  };
  function XMLTV$Companion() {
    XMLTV$Companion_instance = this;
  }
  function XMLTV$Companion$parseXMLTV$lambda(closure$onParsedXMLTVListener, closure$epgID, this$XMLTV$) {
    return function (xmlHttp) {
      closure$onParsedXMLTVListener(this$XMLTV$.getXMLTV_0(xmlHttp.responseXML, closure$epgID));
    };
  }
  function XMLTV$Companion$parseXMLTV$lambda_0(closure$onFailedParseXMLTVListener) {
    return function () {
      closure$onFailedParseXMLTVListener();
    };
  }
  XMLTV$Companion.prototype.parseXMLTV_22edlo$ = function (onParsedXMLTVListener, onFailedParseXMLTVListener, epgID, xmltvSrc) {
    LoadFile_getInstance().load_y8xsdy$(XMLTV$Companion$parseXMLTV$lambda(onParsedXMLTVListener, epgID, this), XMLTV$Companion$parseXMLTV$lambda_0(onFailedParseXMLTVListener), xmltvSrc);
  };
  XMLTV$Companion.prototype.compareTo_fsx041$ = function ($receiver, date) {
    return numberToInt($receiver.getTime() - date.getTime());
  };
  XMLTV$Companion.prototype.timeZoneStringToTimeZone_0 = function (timeZoneString) {
    try {
      var timeZoneHour = toDouble(String.fromCharCode(timeZoneString.charCodeAt(1)) + String.fromCharCode(timeZoneString.charCodeAt(2)));
      var timeZoneMinute = toDouble(String.fromCharCode(timeZoneString.charCodeAt(3)) + String.fromCharCode(timeZoneString.charCodeAt(4)));
      if (24 < timeZoneHour || 60 < timeZoneMinute) {
        return null;
      }
      switch (timeZoneString.charCodeAt(0)) {
        case 43:
        case 45:
          timeZoneHour *= toDouble(String.fromCharCode(timeZoneString.charCodeAt(0)) + '1');
          timeZoneMinute *= toDouble(String.fromCharCode(timeZoneString.charCodeAt(0)) + '1');
          break;
        default:return null;
      }
      return numberToInt((timeZoneHour + timeZoneMinute / 60) * 60);
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        return null;
      }
       else
        throw e;
    }
  };
  XMLTV$Companion.prototype.changeTimeZone_0 = function (date, timeZone) {
    var utc = date.getTime() - ((timeZone * 60 | 0) * 1000 | 0);
    return new Date(utc + (((-date.getTimezoneOffset() | 0) * 60 | 0) * 1000 | 0));
  };
  XMLTV$Companion.prototype.dateStringToDate_0 = function (dateString) {
    var tmp$;
    try {
      var year = toInt(String.fromCharCode(dateString.charCodeAt(0)) + String.fromCharCode(dateString.charCodeAt(1)) + String.fromCharCode(dateString.charCodeAt(2)) + String.fromCharCode(dateString.charCodeAt(3)));
      var month = toInt(String.fromCharCode(dateString.charCodeAt(4)) + String.fromCharCode(dateString.charCodeAt(5)));
      var day = toInt(String.fromCharCode(dateString.charCodeAt(6)) + String.fromCharCode(dateString.charCodeAt(7)));
      var hour = toInt(String.fromCharCode(dateString.charCodeAt(8)) + String.fromCharCode(dateString.charCodeAt(9)));
      var minute = toInt(String.fromCharCode(dateString.charCodeAt(10)) + String.fromCharCode(dateString.charCodeAt(11)));
      var second = toInt(String.fromCharCode(dateString.charCodeAt(12)) + String.fromCharCode(dateString.charCodeAt(13)));
      var timeZone = String.fromCharCode(dateString.charCodeAt(15)) + String.fromCharCode(dateString.charCodeAt(16)) + String.fromCharCode(dateString.charCodeAt(17)) + String.fromCharCode(dateString.charCodeAt(18)) + String.fromCharCode(dateString.charCodeAt(19));
      return this.changeTimeZone_0(new Date(year, month - 1 | 0, day, hour, minute, second), (tmp$ = this.timeZoneStringToTimeZone_0(timeZone)) != null ? tmp$ : 0);
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        return null;
      }
       else
        throw e;
    }
  };
  XMLTV$Companion.prototype.getXMLTV_0 = function (xmltvDoc, epgID) {
    var subElements = xmltvDoc != null ? xmltvDoc.getElementsByTagName('channel') : null;
    if (subElements == null || subElements.length < 1) {
      return new XMLTV();
    }
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      if (equals(subElement != null ? subElement.getAttribute('id') : null, epgID)) {
        return new XMLTV(this.getDisplayName_0(subElement), this.getIcon_0(subElement), this.getUrls_0(subElement), this.getProgrammes_0(xmltvDoc, epgID));
      }
      i = i + 1 | 0;
    }
    return new XMLTV();
  };
  XMLTV$Companion.prototype.getDisplayName_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('displayName') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }
    var multiLangDisplayName = new MultiLanguageString();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var lang = this.getLang_0(subElement);
      var displayName = subElement != null ? subElement.innerHTML : null;
      if (displayName != null) {
        multiLangDisplayName.add_11rb$(new MultiLanguageString$LanguageString(lang != null ? lang : '', displayName));
      }
      i = i + 1 | 0;
    }
    return multiLangDisplayName;
  };
  XMLTV$Companion.prototype.getLang_0 = function (element) {
    return element != null ? element.getAttribute('Lang') : null;
  };
  XMLTV$Companion.prototype.getIcon_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('icon') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }
    return new XMLTV$Icon(this.getSrc_0(subElements[0]), this.getWidth_0(subElements[0]), this.getHeight_0(subElements[0]));
  };
  XMLTV$Companion.prototype.getSrc_0 = function (element) {
    return element != null ? element.getAttribute('src') : null;
  };
  XMLTV$Companion.prototype.getWidth_0 = function (element) {
    var tmp$;
    return (tmp$ = element != null ? element.getAttribute('width') : null) != null ? toIntOrNull(tmp$) : null;
  };
  XMLTV$Companion.prototype.getHeight_0 = function (element) {
    var tmp$;
    return (tmp$ = element != null ? element.getAttribute('height') : null) != null ? toIntOrNull(tmp$) : null;
  };
  XMLTV$Companion.prototype.getUrls_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('url') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }
    var urls = ArrayList_init();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var url = subElement != null ? subElement.innerHTML : null;
      if (url != null) {
        urls.add_11rb$(url);
      }
      i = i + 1 | 0;
    }
    return urls;
  };
  function XMLTV$Companion$getProgrammes$lambda(programme) {
    return programme.start.getTime();
  }
  XMLTV$Companion.prototype.getProgrammes_0 = function (xmltvDoc, epgID) {
    var subElements = xmltvDoc != null ? xmltvDoc.getElementsByTagName('programme') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }
    var programmes = XMLTV$Programme$XMLTV$Programme$ProgrammeList_init();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      if (equals(subElement != null ? subElement.getAttribute('channel') : null, epgID)) {
        var start = this.getStart_0(subElement);
        var stop = this.getStop_0(subElement);
        var pdcStart = this.getPDCStart_0(subElement);
        var vpsStart = this.getVPSStart_0(subElement);
        var showView = this.getShowView_0(subElement);
        var videoPlus = this.getVideoPlus_0(subElement);
        var clumpidx = this.getClumpidx_0(subElement);
        var title = this.getTitle_0(subElement);
        var subTitle = this.getSubTitle_0(subElement);
        var desc = this.getDesc_0(subElement);
        var credits = this.getCredits_0(subElement);
        var date = this.getDate_0(subElement);
        var category = this.getCategory_0(subElement);
        var keyword = this.getKeyword_0(subElement);
        var language = this.getLanguage_0(subElement);
        var origLanguage = this.getOrigLanguage_0(subElement);
        var length = this.getLength_0(subElement);
        var icon = this.getIcon_0(subElement);
        var urls = this.getUrls_0(subElement);
        var country = this.getCountry_0(subElement);
        var episodeNum = this.getEpisodeNum_0(subElement);
        var video = this.getVideo_0(subElement);
        var audio = this.getAudio_0(subElement);
        var previouslyShown = this.getPreviouslyShown_0(subElement);
        var premiere = this.getPremiere_0(subElement);
        var lastChance = this.getLastChance_0(subElement);
        var new_0 = this.getNew_0(subElement);
        var subtitles = this.getSubtitles_0(subElement);
        var rating = this.getRating_0(subElement);
        var starRating = this.getStarRating_0(subElement);
        var reviews = this.getReview_0(subElement);
        if (start != null && stop != null && this.compareTo_fsx041$(start, stop) < 0) {
          programmes.add_11rb$(new XMLTV$Programme(start, stop, pdcStart, vpsStart, showView, videoPlus, clumpidx, title, subTitle, desc, credits, date, category, keyword, language, origLanguage, length, icon, urls, country, episodeNum, video, audio, previouslyShown, premiere, lastChance, new_0, subtitles, rating, starRating, reviews));
        }
      }
      i = i + 1 | 0;
    }
    if (programmes.size > 1) {
      sortWith(programmes, new Comparator$ObjectLiteral_4(compareBy$lambda_3(XMLTV$Companion$getProgrammes$lambda)));
    }
    return programmes;
  };
  XMLTV$Companion.prototype.getStart_0 = function (element) {
    var tmp$;
    return this.dateStringToDate_0((tmp$ = element != null ? element.getAttribute('start') : null) != null ? tmp$ : '');
  };
  XMLTV$Companion.prototype.getStop_0 = function (element) {
    var tmp$;
    return this.dateStringToDate_0((tmp$ = element != null ? element.getAttribute('stop') : null) != null ? tmp$ : '');
  };
  XMLTV$Companion.prototype.getPDCStart_0 = function (element) {
    return element != null ? element.getAttribute('pdc-start') : null;
  };
  XMLTV$Companion.prototype.getVPSStart_0 = function (element) {
    return element != null ? element.getAttribute('vps-start') : null;
  };
  XMLTV$Companion.prototype.getShowView_0 = function (element) {
    return element != null ? element.getAttribute('showview') : null;
  };
  XMLTV$Companion.prototype.getVideoPlus_0 = function (element) {
    return element != null ? element.getAttribute('videoplus') : null;
  };
  XMLTV$Companion.prototype.getClumpidx_0 = function (element) {
    return element != null ? element.getAttribute('clumpidx') : null;
  };
  XMLTV$Companion.prototype.getTitle_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('title') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }
    var multiLangTitle = new MultiLanguageString();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var lang = this.getLang_0(subElement);
      var title = subElement != null ? subElement.innerHTML : null;
      if (title != null) {
        multiLangTitle.add_11rb$(new MultiLanguageString$LanguageString(lang != null ? lang : '', title));
      }
      i = i + 1 | 0;
    }
    return multiLangTitle;
  };
  XMLTV$Companion.prototype.getSubTitle_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('sub-title') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }
    var multiLangSubTitle = new MultiLanguageString();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var lang = this.getLang_0(subElement);
      var subTitle = subElement != null ? subElement.innerHTML : null;
      if (subTitle != null) {
        multiLangSubTitle.add_11rb$(new MultiLanguageString$LanguageString(lang != null ? lang : '', subTitle));
      }
      i = i + 1 | 0;
    }
    return multiLangSubTitle;
  };
  XMLTV$Companion.prototype.getDesc_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('desc') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }
    var multiLangDesc = new MultiLanguageString();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var lang = this.getLang_0(subElement);
      var desc = subElement != null ? subElement.innerHTML : null;
      if (desc != null) {
        multiLangDesc.add_11rb$(new MultiLanguageString$LanguageString(lang != null ? lang : '', desc));
      }
      i = i + 1 | 0;
    }
    return multiLangDesc;
  };
  XMLTV$Companion.prototype.getCredits_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('credits') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }
    return new XMLTV$Programme$Credits(this.getDirectors_0(subElements[0]), this.getActors_0(subElements[0]), this.getWriters_0(subElements[0]), this.getAdapters_0(subElements[0]), this.getProducers_0(subElements[0]), this.getComposers_0(subElements[0]), this.getEditors_0(subElements[0]), this.getPresenters_0(subElements[0]), this.getCommentators_0(subElements[0]), this.getGuests_0(subElements[0]));
  };
  XMLTV$Companion.prototype.getDirectors_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('director') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }
    var directors = ArrayList_init();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var director = subElement != null ? subElement.innerHTML : null;
      if (director != null) {
        directors.add_11rb$(director);
      }
      i = i + 1 | 0;
    }
    return directors;
  };
  XMLTV$Companion.prototype.getActors_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('actor') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }
    var actors = ArrayList_init();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var role = this.getRole_0(subElement);
      var actor = subElement != null ? subElement.innerHTML : null;
      actors.add_11rb$(new XMLTV$Programme$Credits$Actor(role, actor));
      i = i + 1 | 0;
    }
    return actors;
  };
  XMLTV$Companion.prototype.getRole_0 = function (element) {
    return element != null ? element.getAttribute('rote') : null;
  };
  XMLTV$Companion.prototype.getWriters_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('writer') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }
    var writers = ArrayList_init();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var writer = subElement != null ? subElement.innerHTML : null;
      if (writer != null) {
        writers.add_11rb$(writer);
      }
      i = i + 1 | 0;
    }
    return writers;
  };
  XMLTV$Companion.prototype.getAdapters_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('adapter') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }
    var adapters = ArrayList_init();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var adapter = subElement != null ? subElement.innerHTML : null;
      if (adapter != null) {
        adapters.add_11rb$(adapter);
      }
      i = i + 1 | 0;
    }
    return adapters;
  };
  XMLTV$Companion.prototype.getProducers_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('producer') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }
    var producers = ArrayList_init();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var producer = subElement != null ? subElement.innerHTML : null;
      if (producer != null) {
        producers.add_11rb$(producer);
      }
      i = i + 1 | 0;
    }
    return producers;
  };
  XMLTV$Companion.prototype.getComposers_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('composer') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }
    var composers = ArrayList_init();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var composer = subElement != null ? subElement.innerHTML : null;
      if (composer != null) {
        composers.add_11rb$(composer);
      }
      i = i + 1 | 0;
    }
    return composers;
  };
  XMLTV$Companion.prototype.getEditors_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('editor') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }
    var editors = ArrayList_init();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var editor = subElement != null ? subElement.innerHTML : null;
      if (editor != null) {
        editors.add_11rb$(editor);
      }
      i = i + 1 | 0;
    }
    return editors;
  };
  XMLTV$Companion.prototype.getPresenters_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('presenter') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }
    var presenters = ArrayList_init();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var presenter = subElement != null ? subElement.innerHTML : null;
      if (presenter != null) {
        presenters.add_11rb$(presenter);
      }
      i = i + 1 | 0;
    }
    return presenters;
  };
  XMLTV$Companion.prototype.getCommentators_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('commentator') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }
    var commentators = ArrayList_init();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var commentator = subElement != null ? subElement.innerHTML : null;
      if (commentator != null) {
        commentators.add_11rb$(commentator);
      }
      i = i + 1 | 0;
    }
    return commentators;
  };
  XMLTV$Companion.prototype.getGuests_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('guest') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }
    var guests = ArrayList_init();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var guest = subElement != null ? subElement.innerHTML : null;
      if (guest != null) {
        guests.add_11rb$(guest);
      }
      i = i + 1 | 0;
    }
    return guests;
  };
  XMLTV$Companion.prototype.getDate_0 = function (element) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = element != null ? element.getElementsByTagName('date') : null) != null ? tmp$[0] : null) != null ? tmp$_0.innerHTML : null;
  };
  XMLTV$Companion.prototype.getCategory_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('category') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }
    var multiLangCategory = new MultiLanguageString();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var lang = this.getLang_0(subElement);
      var category = subElement != null ? subElement.innerHTML : null;
      if (category != null) {
        multiLangCategory.add_11rb$(new MultiLanguageString$LanguageString(lang != null ? lang : '', category));
      }
      i = i + 1 | 0;
    }
    return multiLangCategory;
  };
  XMLTV$Companion.prototype.getKeyword_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('keyword') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }
    var multiLangKeyword = new MultiLanguageString();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var lang = this.getLang_0(subElement);
      var keyword = subElement != null ? subElement.innerHTML : null;
      if (keyword != null) {
        multiLangKeyword.add_11rb$(new MultiLanguageString$LanguageString(lang != null ? lang : '', keyword));
      }
      i = i + 1 | 0;
    }
    return multiLangKeyword;
  };
  XMLTV$Companion.prototype.getLanguage_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('language') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }
    var multiLangLanguage = new MultiLanguageString();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var lang = this.getLang_0(subElement);
      var language = subElement != null ? subElement.innerHTML : null;
      if (language != null) {
        multiLangLanguage.add_11rb$(new MultiLanguageString$LanguageString(lang != null ? lang : '', language));
      }
      i = i + 1 | 0;
    }
    return multiLangLanguage;
  };
  XMLTV$Companion.prototype.getOrigLanguage_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('origLanguage') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }
    var multiLangOrigLanguage = new MultiLanguageString();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var lang = this.getLang_0(subElement);
      var origLanguage = subElement != null ? subElement.innerHTML : null;
      if (origLanguage != null) {
        multiLangOrigLanguage.add_11rb$(new MultiLanguageString$LanguageString(lang != null ? lang : '', origLanguage));
      }
      i = i + 1 | 0;
    }
    return multiLangOrigLanguage;
  };
  XMLTV$Companion.prototype.getLength_0 = function (element) {
    var tmp$;
    var subElements = element != null ? element.getElementsByTagName('length') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }
    return new XMLTV$Programme$Length(this.getUnits_0(subElements[0]), (tmp$ = subElements[0]) != null ? tmp$.innerHTML : null);
  };
  XMLTV$Companion.prototype.getUnits_0 = function (element) {
    return element != null ? element.getAttribute('units') : null;
  };
  XMLTV$Companion.prototype.getCountry_0 = function (element) {
    var tmp$;
    var subElements = element != null ? element.getElementsByTagName('country') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }
    var multiLangCountry = new MultiLanguageString();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var lang = this.getLang_0(subElement);
      var country = (tmp$ = (element != null ? element.getElementsByTagName('wcountry') : null)[i]) != null ? tmp$.innerHTML : null;
      if (country != null) {
        multiLangCountry.add_11rb$(new MultiLanguageString$LanguageString(lang != null ? lang : '', country));
      }
      i = i + 1 | 0;
    }
    return multiLangCountry;
  };
  XMLTV$Companion.prototype.getEpisodeNum_0 = function (element) {
    var tmp$;
    var subElements = element != null ? element.getElementsByTagName('episode-num') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }
    return new XMLTV$Programme$EpisodeNum(this.getSystem_0(subElements[0]), (tmp$ = subElements[0]) != null ? tmp$.innerHTML : null);
  };
  XMLTV$Companion.prototype.getSystem_0 = function (element) {
    return element != null ? element.getAttribute('system') : null;
  };
  XMLTV$Companion.prototype.getVideo_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('video') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }
    return new XMLTV$Programme$Video(this.getPresent_0(subElements[0]), this.getColour_0(subElements[0]), this.getAspect_0(subElements[0]), this.getQuality_0(subElements[0]));
  };
  XMLTV$Companion.prototype.getPresent_0 = function (element) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = element != null ? element.getElementsByTagName('present') : null) != null ? tmp$[0] : null) != null ? tmp$_0.innerHTML : null;
  };
  XMLTV$Companion.prototype.getColour_0 = function (element) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = element != null ? element.getElementsByTagName('colour') : null) != null ? tmp$[0] : null) != null ? tmp$_0.innerHTML : null;
  };
  XMLTV$Companion.prototype.getAspect_0 = function (element) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = element != null ? element.getElementsByTagName('aspect') : null) != null ? tmp$[0] : null) != null ? tmp$_0.innerHTML : null;
  };
  XMLTV$Companion.prototype.getQuality_0 = function (element) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = element != null ? element.getElementsByTagName('quality') : null) != null ? tmp$[0] : null) != null ? tmp$_0.innerHTML : null;
  };
  XMLTV$Companion.prototype.getAudio_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('audio') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }
    return new XMLTV$Programme$Audio(this.getPresent_0(subElements[0]), this.getStereo_0(subElements[0]));
  };
  XMLTV$Companion.prototype.getStereo_0 = function (element) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = element != null ? element.getElementsByTagName('stereo') : null) != null ? tmp$[0] : null) != null ? tmp$_0.innerHTML : null;
  };
  XMLTV$Companion.prototype.getPreviouslyShown_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('previously-shown') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }
    return new XMLTV$Programme$PreviouslyShown(this.getStart_0(subElements[0]), this.getChannel_0(subElements[0]));
  };
  XMLTV$Companion.prototype.getChannel_0 = function (element) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = element != null ? element.getElementsByTagName('channel') : null) != null ? tmp$[0] : null) != null ? tmp$_0.innerHTML : null;
  };
  XMLTV$Companion.prototype.getPremiere_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('premiere') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }
    var multiLangPremiere = new MultiLanguageString();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var lang = this.getLang_0(subElement);
      var premiere = subElement != null ? subElement.innerHTML : null;
      if (premiere != null) {
        multiLangPremiere.add_11rb$(new MultiLanguageString$LanguageString(lang != null ? lang : '', premiere));
      }
      i = i + 1 | 0;
    }
    return multiLangPremiere;
  };
  XMLTV$Companion.prototype.getLastChance_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('last-chance') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }
    var multiLangLastChance = new MultiLanguageString();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var lang = this.getLang_0(subElement);
      var lastChance = subElement != null ? subElement.innerHTML : null;
      if (lastChance != null) {
        multiLangLastChance.add_11rb$(new MultiLanguageString$LanguageString(lang != null ? lang : '', lastChance));
      }
      i = i + 1 | 0;
    }
    return multiLangLastChance;
  };
  XMLTV$Companion.prototype.getNew_0 = function (element) {
    var tmp$;
    return ((tmp$ = element != null ? element.getElementsByTagName('new') : null) != null ? tmp$[0] : null) != null;
  };
  XMLTV$Companion.prototype.getSubtitles_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('subtitles') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }
    return new XMLTV$Programme$Subtitles(this.getType_0(subElements[0]), toString(this.getLanguage_0(subElements[0])));
  };
  XMLTV$Companion.prototype.getType_0 = function (element) {
    return element != null ? element.getAttribute('type') : null;
  };
  XMLTV$Companion.prototype.getRating_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('rating') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }
    return new XMLTV$Programme$Rating(this.getSystem_0(subElements[0]), this.getValue_0(subElements[0]), this.getIcon_0(subElements[0]));
  };
  XMLTV$Companion.prototype.getValue_0 = function (element) {
    return element != null ? element.getAttribute('value') : null;
  };
  XMLTV$Companion.prototype.getStarRating_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('star-rating') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }
    return new XMLTV$Programme$StarRating(this.getSystem_0(subElements[0]), this.getValue_0(subElements[0]), this.getIcon_0(subElements[0]));
  };
  XMLTV$Companion.prototype.getReview_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('review') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }
    var multiLangType = new MultiLanguageString();
    var multiLangSource = new MultiLanguageString();
    var multiLangReviewer = new MultiLanguageString();
    var multiLangReview = new MultiLanguageString();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var type = this.getType_0(subElement);
      var source = this.getSource_0(subElement);
      var reviewer = this.getReviewer_0(subElement);
      var lang = this.getLang_0(subElement);
      var review = subElement != null ? subElement.innerHTML : null;
      if (type != null) {
        multiLangType.add_11rb$(new MultiLanguageString$LanguageString(lang != null ? lang : '', type));
      }
      if (source != null) {
        multiLangSource.add_11rb$(new MultiLanguageString$LanguageString(lang != null ? lang : '', source));
      }
      if (reviewer != null) {
        multiLangReviewer.add_11rb$(new MultiLanguageString$LanguageString(lang != null ? lang : '', reviewer));
      }
      if (review != null) {
        multiLangReview.add_11rb$(new MultiLanguageString$LanguageString(lang != null ? lang : '', review));
      }
      i = i + 1 | 0;
    }
    return new XMLTV$Programme$Review(multiLangType, multiLangSource, multiLangReviewer, multiLangReview);
  };
  XMLTV$Companion.prototype.getSource_0 = function (element) {
    return element != null ? element.getAttribute('source') : null;
  };
  XMLTV$Companion.prototype.getReviewer_0 = function (element) {
    return element != null ? element.getAttribute('reviewer') : null;
  };
  XMLTV$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var XMLTV$Companion_instance = null;
  function XMLTV$Companion_getInstance() {
    if (XMLTV$Companion_instance === null) {
      new XMLTV$Companion();
    }
    return XMLTV$Companion_instance;
  }
  XMLTV.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'XMLTV',
    interfaces: []
  };
  var package$org = _.org || (_.org = {});
  var package$sourcekey = package$org.sourcekey || (package$org.sourcekey = {});
  var package$hknbp = package$sourcekey.hknbp || (package$sourcekey.hknbp = {});
  var package$hknbp_core = package$hknbp.hknbp_core || (package$hknbp.hknbp_core = {});
  Object.defineProperty(package$hknbp_core, 'AboutWindow', {
    get: AboutWindow_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'AppDownloadWindow', {
    get: AppDownloadWindow_getInstance
  });
  ArrayLinkList.OnElementsChangeListener = ArrayLinkList$OnElementsChangeListener;
  ArrayLinkList.OnNodeEventListener = ArrayLinkList$OnNodeEventListener;
  package$hknbp_core.ArrayLinkList_init_i5x0yv$ = ArrayLinkList_init;
  package$hknbp_core.ArrayLinkList_init_vzjx9f$ = ArrayLinkList_init_0;
  package$hknbp_core.ArrayLinkList_init_5x1j0d$ = ArrayLinkList_init_1;
  package$hknbp_core.ArrayLinkList_init_y3505j$ = ArrayLinkList_init_2;
  package$hknbp_core.ArrayLinkList_init_h5wnxp$ = ArrayLinkList_init_3;
  package$hknbp_core.ArrayLinkList_init_ivph99$ = ArrayLinkList_init_4;
  package$hknbp_core.ArrayLinkList = ArrayLinkList;
  Object.defineProperty(package$hknbp_core, 'AudioDescription', {
    get: AudioDescription_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'CanAutoplay', {
    get: CanAutoplay_getInstance
  });
  Channel.Source = Channel$Source;
  Channel.Information = Channel$Information;
  package$hknbp_core.Channel = Channel;
  Object.defineProperty(package$hknbp_core, 'ChannelDescription', {
    get: ChannelDescription_getInstance
  });
  package$hknbp_core.ChannelsReader = ChannelsReader;
  Object.defineProperty(package$hknbp_core, 'ConsentPanel', {
    get: ConsentPanel_getInstance
  });
  package$hknbp_core.CustomChannelEditChannelDialogBox = CustomChannelEditChannelDialogBox;
  Object.defineProperty(package$hknbp_core, 'CustomChannels', {
    get: CustomChannels_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'CustomChannelsSettingWindow', {
    get: CustomChannelsSettingWindow_getInstance
  });
  Object.defineProperty(Dialogue, 'Companion', {
    get: Dialogue$Companion_getInstance
  });
  package$hknbp_core.Dialogue = Dialogue;
  package$hknbp_core.DialogueBox = DialogueBox;
  Object.defineProperty(package$hknbp_core, 'EPG', {
    get: EPG_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'EnteringNumberBox', {
    get: EnteringNumberBox_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'FullScreenButton', {
    get: FullScreenButton_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'HKNBPAppLayerBridge', {
    get: HKNBPAppLayerBridge_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'LoadFile', {
    get: LoadFile_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'LongClickEvent', {
    get: LongClickEvent_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'getConsoleLogs', {
    get: function () {
      return getConsoleLogs;
    }
  });
  Object.defineProperty(package$hknbp_core, 'jQuery', {
    get: function () {
      return jQuery;
    }
  });
  package$hknbp_core.updateURLParameter_puj7f4$ = updateURLParameter;
  Object.defineProperty(package$hknbp_core, 'rootURL', {
    get: function () {
      return rootURL;
    }
  });
  Object.defineProperty(package$hknbp_core, 'coreVersion', {
    get: function () {
      return coreVersion_0;
    }
  });
  Object.defineProperty(package$hknbp_core, 'appVersion', {
    get: function () {
      return appVersion;
    },
    set: function (value) {
      appVersion = value;
    }
  });
  Object.defineProperty(package$hknbp_core, 'player', {
    get: function () {
      return player;
    },
    set: function (value) {
      player = value;
    }
  });
  package$hknbp_core.updateChannels = updateChannels;
  Object.defineProperty(package$hknbp_core, 'channels', {
    get: function () {
      return channels;
    },
    set: function (value) {
      channels = value;
    }
  });
  package$hknbp_core.designatedChannel = designatedChannel;
  package$hknbp_core.updateChannel = updateChannel;
  package$hknbp_core.reductionTo_vux9f0$ = reductionTo;
  package$hknbp_core.main_kand9s$ = main;
  Object.defineProperty(MultiLanguageString, 'Companion', {
    get: MultiLanguageString$Companion_getInstance
  });
  MultiLanguageString.LanguageString = MultiLanguageString$LanguageString;
  package$hknbp_core.MultiLanguageString = MultiLanguageString;
  Object.defineProperty(package$hknbp_core, 'MutedDescription', {
    get: MutedDescription_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'NativeAppInstallButton', {
    get: NativeAppInstallButton_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'OfficialChannels', {
    get: OfficialChannels_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'PictureInPictureButton', {
    get: PictureInPictureButton_getInstance
  });
  Object.defineProperty(Player, 'Companion', {
    get: Player$Companion_getInstance
  });
  Object.defineProperty(Player$OnPlayerEvent, 'playing', {
    get: Player$OnPlayerEvent$playing_getInstance
  });
  Object.defineProperty(Player$OnPlayerEvent, 'notPlaying', {
    get: Player$OnPlayerEvent$notPlaying_getInstance
  });
  Player.OnPlayerEvent = Player$OnPlayerEvent;
  Player.OnPlayerEventListener = Player$OnPlayerEventListener;
  Object.defineProperty(Player$ProgrammableColor, 'red', {
    get: Player$ProgrammableColor$red_getInstance
  });
  Object.defineProperty(Player$ProgrammableColor, 'green', {
    get: Player$ProgrammableColor$green_getInstance
  });
  Object.defineProperty(Player$ProgrammableColor, 'yellow', {
    get: Player$ProgrammableColor$yellow_getInstance
  });
  Object.defineProperty(Player$ProgrammableColor, 'blue', {
    get: Player$ProgrammableColor$blue_getInstance
  });
  Player.ProgrammableColor = Player$ProgrammableColor;
  package$hknbp_core.Player = Player;
  Object.defineProperty(package$hknbp_core, 'PromptBox', {
    get: PromptBox_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'RealRemote', {
    get: RealRemote_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'RunnerInfo', {
    get: RunnerInfo_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'SettingWindow', {
    get: SettingWindow_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'ShareWindow', {
    get: ShareWindow_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'SubtitleDescription', {
    get: SubtitleDescription_getInstance
  });
  Object.defineProperty(Tab3dIndex, 'Companion', {
    get: Tab3dIndex$Companion_getInstance
  });
  package$hknbp_core.Tab3dIndex = Tab3dIndex;
  Object.defineProperty(TrackDescription, 'Companion', {
    get: TrackDescription$Companion_getInstance
  });
  package$hknbp_core.TrackDescription = TrackDescription;
  Object.defineProperty(package$hknbp_core, 'UpdatePrompt', {
    get: UpdatePrompt_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'UserControlPanel', {
    get: UserControlPanel_getInstance
  });
  Object.defineProperty(UserInterface, 'Companion', {
    get: UserInterface$Companion_getInstance
  });
  package$hknbp_core.UserInterface = UserInterface;
  Object.defineProperty(package$hknbp_core, 'VideoDescription', {
    get: VideoDescription_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'VirtualRemote', {
    get: VirtualRemote_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'VolumeDescription', {
    get: VolumeDescription_getInstance
  });
  Object.defineProperty(WatchingCounter, 'Companion', {
    get: WatchingCounter$Companion_getInstance
  });
  package$hknbp_core.WatchingCounter = WatchingCounter;
  package$hknbp_core.Window = Window;
  XMLTV.Icon = XMLTV$Icon;
  XMLTV$Programme$Credits.Actor = XMLTV$Programme$Credits$Actor;
  XMLTV$Programme.Credits = XMLTV$Programme$Credits;
  XMLTV$Programme.Length = XMLTV$Programme$Length;
  XMLTV$Programme.EpisodeNum = XMLTV$Programme$EpisodeNum;
  XMLTV$Programme.Video = XMLTV$Programme$Video;
  XMLTV$Programme.Audio = XMLTV$Programme$Audio;
  XMLTV$Programme.PreviouslyShown = XMLTV$Programme$PreviouslyShown;
  XMLTV$Programme.Subtitles = XMLTV$Programme$Subtitles;
  XMLTV$Programme.Rating = XMLTV$Programme$Rating;
  XMLTV$Programme.StarRating = XMLTV$Programme$StarRating;
  XMLTV$Programme.Review = XMLTV$Programme$Review;
  XMLTV$Programme.ProgrammeList_init_j9a0lr$ = XMLTV$Programme$XMLTV$Programme$ProgrammeList_init;
  XMLTV$Programme.ProgrammeList_init_lrtxsc$ = XMLTV$Programme$XMLTV$Programme$ProgrammeList_init_0;
  XMLTV$Programme.ProgrammeList_init_1dvcoh$ = XMLTV$Programme$XMLTV$Programme$ProgrammeList_init_1;
  XMLTV$Programme.ProgrammeList_init_ntr9i2$ = XMLTV$Programme$XMLTV$Programme$ProgrammeList_init_2;
  XMLTV$Programme.ProgrammeList = XMLTV$Programme$ProgrammeList;
  XMLTV.Programme = XMLTV$Programme;
  Object.defineProperty(XMLTV, 'Companion', {
    get: XMLTV$Companion_getInstance
  });
  package$hknbp_core.XMLTV = XMLTV;
  setConsoleLogsListener = setConsoleLogsListener$lambda();
  getConsoleLogs = getConsoleLogs$lambda;
  jQuery = $;
  rootURL = 'https://hknbp.org/';
  coreVersion_0 = coreVersion$lambda();
  appVersion = coreVersion_0 + '-PWA';
  player = null;
  channels = updateChannels();
  main([]);
  Kotlin.defineModule('HKNBP_Core', _);
  return _;
}(typeof HKNBP_Core === 'undefined' ? {} : HKNBP_Core, kotlin);
