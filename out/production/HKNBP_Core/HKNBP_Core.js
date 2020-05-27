if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'HKNBP_Core'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'HKNBP_Core'.");
}var HKNBP_Core = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var throwCCE = Kotlin.throwCCE;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var ArrayList = Kotlin.kotlin.collections.ArrayList;
  var Random = Kotlin.kotlin.random.Random;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var equals = Kotlin.equals;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var toString = Kotlin.toString;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var sortWith = Kotlin.kotlin.collections.sortWith_nqfjgj$;
  var wrapFunction = Kotlin.wrapFunction;
  var Comparator = Kotlin.kotlin.Comparator;
  var Unit = Kotlin.kotlin.Unit;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var padStart = Kotlin.kotlin.text.padStart_vrc1nu$;
  var toBoolean = Kotlin.kotlin.text.toBoolean_pdl1vz$;
  var numberToInt = Kotlin.numberToInt;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var Math_0 = Math;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var toShort = Kotlin.toShort;
  var numberToDouble = Kotlin.numberToDouble;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var split_0 = Kotlin.kotlin.text.split_o64adg$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var toDoubleOrNull = Kotlin.kotlin.text.toDoubleOrNull_pdl1vz$;
  var getOrNull_0 = Kotlin.kotlin.text.getOrNull_94bcnn$;
  var lastOrNull = Kotlin.kotlin.collections.lastOrNull_2p1efm$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var ArrayList_init_1 = Kotlin.kotlin.collections.ArrayList_init_mqih57$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var Exception = Kotlin.kotlin.Exception;
  TabbableUI.prototype = Object.create(UserInterface.prototype);
  TabbableUI.prototype.constructor = TabbableUI;
  Window.prototype = Object.create(TabbableUI.prototype);
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
  DialogueBox.prototype = Object.create(TabbableUI.prototype);
  DialogueBox.prototype.constructor = DialogueBox;
  CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox.prototype = Object.create(DialogueBox.prototype);
  CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox.prototype.constructor = CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox;
  CustomChannelsSettingWindow.prototype = Object.create(Window.prototype);
  CustomChannelsSettingWindow.prototype.constructor = CustomChannelsSettingWindow;
  DocumentStoreWindow.prototype = Object.create(Window.prototype);
  DocumentStoreWindow.prototype.constructor = DocumentStoreWindow;
  EPG.prototype = Object.create(TabbableUI.prototype);
  EPG.prototype.constructor = EPG;
  EnteringNumberBox.prototype = Object.create(UserInterface.prototype);
  EnteringNumberBox.prototype.constructor = EnteringNumberBox;
  FeedbackWebWindow.prototype = Object.create(Window.prototype);
  FeedbackWebWindow.prototype.constructor = FeedbackWebWindow;
  FullScreenButton.prototype = Object.create(UserInterface.prototype);
  FullScreenButton.prototype.constructor = FullScreenButton;
  GithubWebWindow.prototype = Object.create(Window.prototype);
  GithubWebWindow.prototype.constructor = GithubWebWindow;
  MultiLanguageString.prototype = Object.create(ArrayLinkList.prototype);
  MultiLanguageString.prototype.constructor = MultiLanguageString;
  MutedDescription.prototype = Object.create(UserInterface.prototype);
  MutedDescription.prototype.constructor = MutedDescription;
  NativeAppInstallButton.prototype = Object.create(UserInterface.prototype);
  NativeAppInstallButton.prototype.constructor = NativeAppInstallButton;
  OfficialChannels$ChannelsSearchDisplay.prototype = Object.create(UserInterface.prototype);
  OfficialChannels$ChannelsSearchDisplay.prototype.constructor = OfficialChannels$ChannelsSearchDisplay;
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
  ScreenOrientationButton.prototype = Object.create(UserInterface.prototype);
  ScreenOrientationButton.prototype.constructor = ScreenOrientationButton;
  SettingWindow.prototype = Object.create(Window.prototype);
  SettingWindow.prototype.constructor = SettingWindow;
  ShareWindow.prototype = Object.create(TabbableUI.prototype);
  ShareWindow.prototype.constructor = ShareWindow;
  SubtitleDescription.prototype = Object.create(UserInterface.prototype);
  SubtitleDescription.prototype.constructor = SubtitleDescription;
  UserControlPanel.prototype = Object.create(TabbableUI.prototype);
  UserControlPanel.prototype.constructor = UserControlPanel;
  UserControlPanelShower.prototype = Object.create(TabbableUI.prototype);
  UserControlPanelShower.prototype.constructor = UserControlPanelShower;
  VideoDescription.prototype = Object.create(UserInterface.prototype);
  VideoDescription.prototype.constructor = VideoDescription;
  VolumeDescription.prototype = Object.create(UserInterface.prototype);
  VolumeDescription.prototype.constructor = VolumeDescription;
  WatchingCounterWebWindow.prototype = Object.create(Window.prototype);
  WatchingCounterWebWindow.prototype.constructor = WatchingCounterWebWindow;
  XMLTV$Programme$ProgrammeList.prototype = Object.create(ArrayList.prototype);
  XMLTV$Programme$ProgrammeList.prototype.constructor = XMLTV$Programme$ProgrammeList;
  function AboutWindow() {
    AboutWindow_instance = this;
    Window.call(this, '', '\n            <div style="font-size:2.5vh;">\n                <div><img src="img/logo.png" style="width:20vh;height:20vh;"/><\/div>\n                <div style="font-size:6vh;">\u9999\u6E2F\u7DB2\u8DEF\u5EE3\u64AD\u5E73\u53F0<\/div>\n                <br>\n                <div>Core\u7248\u672C: <div style="display:inline;" id="aboutWindowCoreVersionText"><\/div><\/div>\n                <div>App\u7248\u672C: <div style="display:inline;" id="aboutWindowAppVersionText"><\/div><\/div>\n                <br>\n                <br>\n                <div style="font-size:2vh;">Contributor<\/div>\n                <div>\n                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/IntelliJ_IDEA_Logo.svg/320px-IntelliJ_IDEA_Logo.svg.png" style="width:auto;height:4vh;margin:.5vh;"/><!--IDEA-->\n                    <img src="https://rocket-seo.com/wp-content/uploads/google-analytics-logo.png" style="width:auto;height:4vh;margin:.5vh;"/><!--GoogleAnalytics-->\n                    <img src="https://gregtrevellick.gallerycdn.vsassets.io/extensions/gregtrevellick/openinandroidstudio/1.1.52/1540120323482/ThirdPartyLogo.png" style="width:auto;height:4vh;margin:.5vh;"/><!--AndroidStudio-->\n                    <img src="https://camo.githubusercontent.com/627c774e3070482b180c3abd858ef2145d46303b/68747470733a2f2f656c656374726f6e6a732e6f72672f696d616765732f656c656374726f6e2d6c6f676f2e737667" style="width:auto;height:4vh;margin:.5vh;"/><!--Electron-->\n                    <img src="https://informsuiuc.files.wordpress.com/2016/10/github-bb449e0ffbacbcb7f9c703db85b1cf0b.png" style="width:auto;height:4vh;margin:.5vh;filter:invert(100%);"/><!--Github-->\n                    <img src="https://camo.githubusercontent.com/fd8e51a1c5161fbcff241c09b4e1001c20768b3f/68747470733a2f2f7261776769746875622e636f6d2f666f6e74656c6c6f2f666f6e74656c6c6f2f6d61737465722f666f6e74656c6c6f2d696d6167652e737667" style="width:auto;height:4vh;margin:.5vh;filter:invert(100%);"/><!--fontello-->\n                    <img src="http://webostv.developer.lge.com/download_file/view_inline/1016/" style="width:auto;height:4vh;margin:.5vh;"/><!--WebOS-->\n                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Tizen-Lockup-On-Dark-RGB.png/800px-Tizen-Lockup-On-Dark-RGB.png" style="width:auto;height:4vh;margin:.5vh;"/><!--Tizen-->\n                    <img src="https://upload.wikimedia.org/wikipedia/en/0/0c/Xcode_icon.png" style="width:auto;height:4vh;margin:.5vh;"/><!--Xcode-->\n                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png" style="width:auto;height:4vh;margin:.5vh;"/><!--Youtube-->\n                    <img src="https://avatars0.githubusercontent.com/u/12976866?s=400&v=4" style="width:auto;height:4vh;margin:.5vh;"/><!--XMLTV-->\n                    <img src="https://user-images.githubusercontent.com/110953/28352645-7a8a66d8-6c0c-11e7-83af-752609e7e072.png" style=4width:auto;height:5vh;margin:.5vh;"/><!--Workbox-->\n                    <img src="https://corp.hapyak.com/wp-content/uploads/videojs-logo.png" style="width:auto;height:4vh;margin:.5vh;"/><!--videojs-->\n                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/AddToAny_logo_PNG.png" style=4width:auto;height:5vh;margin:.5vh;"/><!--AddToAny-->\n                    <img src="https://i1.wp.com/soyemprendedora.com.ar/wp-content/uploads/2016/08/descarga-2.png?resize=300%2C99" style="width:auto;height:4vh;margin:.5vh;"/><!--GoogleForms-->\n                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/JQuery_logo_text.svg/1280px-JQuery_logo_text.svg.png" style="width:auto;height:4vh;margin:.5vh;filter:invert(100%);"/><!--JQuery-->\n                    <img src="https://cdn.worldvectorlogo.com/logos/polyfillio.svg" style="width:auto;height:4vh;margin:.5vh;"/><!--Polyfillio-->\n                    <div>CORS Anywhere<\/div>\n                    <div>jQuery.tabbable<\/div>\n                    <div>platform.js<\/div>\n                    <div>can-autoplay.js<\/div>\n                    <div style="color:#888;font-size:1.5vh;">\u5982\u672A\u5217\u51FA\u53EF\u6703\u77E5\u672C\u5E73\u53F0<\/div>\n                <\/div>\n                <br>\n                <br>\n                <a href="consent.html" target="_blank"  id="aboutWindowConsentText" style="text-decoration:underline;font-size:2vh;">Consent<\/a>\n                <br>\n                <div style="font-size:3vh;" onclick="window.open(\'https://github.com/HKNBP\', \'_blank\')" >\n                    <div style="display:inline;font-size:2vh;">\n                        <i class="icon-font">&#xf121;<\/i> with <i class="icon-font">&#xe81a;<\/i> by\n                    <\/div>\n                    <i class="icon-font">&#xf09b;<\/i>GitHub\n                <\/div>\n                <br>\n                <div style="font-size:1vh;">The source code is licensed under GPL v3. License is available\n                    <a href="https://github.com/HKNBP/HKNBP_Core/blob/master/LICENSE" target="_blank">here<\/a>.\n                <\/div>\n                <div style="font-size:1vh;">Copyright \xA9 2016-2020 \u539F\u5319 All rights reserved.<\/div>\n            <\/div>\n        ');
    var tmp$, tmp$_0;
    this.coreVersionText_0 = Kotlin.isType(tmp$ = document.getElementById('aboutWindowCoreVersionText'), HTMLDivElement) ? tmp$ : throwCCE();
    this.appVersionText_0 = Kotlin.isType(tmp$_0 = document.getElementById('aboutWindowAppVersionText'), HTMLDivElement) ? tmp$_0 : throwCCE();
  }
  AboutWindow.prototype.show_s8ev37$ = function (showTime) {
    Window.prototype.show_s8ev37$.call(this, showTime);
    this.coreVersionText_0.innerHTML = coreVersion;
    this.appVersionText_0.innerHTML = appVersion;
  };
  AboutWindow.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AboutWindow',
    interfaces: [Window]
  };
  var AboutWindow_instance = null;
  function AboutWindow_getInstance() {
    if (AboutWindow_instance === null) {
      new AboutWindow();
    }return AboutWindow_instance;
  }
  function AppDownloadWindow() {
    AppDownloadWindow_instance = this;
    Window.call(this, '\u7A0B\u5F0F\u4E0B\u8F09', '\n            <iframe style="width:100%;height:100%;" frameBorder="0" src="app-download.html"><\/iframe>\n        ');
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
    }return AppDownloadWindow_instance;
  }
  function ArrayLinkList() {
    this.onElementsChangedListeners_pvpdd0$_0 = ArrayList_init();
    this.isRunOnElementsChangedListeners_oauyiz$_0 = false;
    this.onNodeEventListeners_907qg9$_0 = ArrayList_init();
    this.lastTimeNode_rxcek8$_0 = null;
    this.node_ns7zwb$_0 = null;
  }
  function ArrayLinkList$OnElementsChangedListener() {
  }
  ArrayLinkList$OnElementsChangedListener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'OnElementsChangedListener',
    interfaces: []
  };
  ArrayLinkList.prototype.addOnElementsChangedListener_9f6p79$ = function (onElementsChangedListener) {
    this.onElementsChangedListeners_pvpdd0$_0.add_11rb$(onElementsChangedListener);
  };
  function ArrayLinkList$runOnElementsChangedListeners$lambda(this$ArrayLinkList) {
    return function () {
      var tmp$;
      try {
        tmp$ = this$ArrayLinkList.onElementsChangedListeners_pvpdd0$_0.iterator();
        while (tmp$.hasNext()) {
          var onElementsChangedListener = tmp$.next();
          onElementsChangedListener.onElementsChanged();
        }
      } catch (e) {
        println(e);
      }
      this$ArrayLinkList.isRunOnElementsChangedListeners_oauyiz$_0 = false;
    };
  }
  ArrayLinkList.prototype.runOnElementsChangedListeners_ux0ez9$_0 = function () {
    if (!this.isRunOnElementsChangedListeners_oauyiz$_0) {
      this.isRunOnElementsChangedListeners_oauyiz$_0 = true;
      window.setTimeout(ArrayLinkList$runOnElementsChangedListeners$lambda(this), 1000);
    }};
  ArrayLinkList.prototype.add_11rb$ = function (element) {
    var returnValue = ArrayList.prototype.add_11rb$.call(this, element);
    this.runOnElementsChangedListeners_ux0ez9$_0();
    return returnValue;
  };
  ArrayLinkList.prototype.add_wxm5ur$ = function (index, element) {
    ArrayList.prototype.add_wxm5ur$.call(this, index, element);
    this.runOnElementsChangedListeners_ux0ez9$_0();
  };
  ArrayLinkList.prototype.addAll_brywnq$ = function (elements) {
    var returnValue = ArrayList.prototype.addAll_brywnq$.call(this, elements);
    this.runOnElementsChangedListeners_ux0ez9$_0();
    return returnValue;
  };
  ArrayLinkList.prototype.addAll_u57x28$ = function (index, elements) {
    var returnValue = ArrayList.prototype.addAll_u57x28$.call(this, index, elements);
    this.runOnElementsChangedListeners_ux0ez9$_0();
    return returnValue;
  };
  ArrayLinkList.prototype.clear = function () {
    ArrayList.prototype.clear.call(this);
    this.runOnElementsChangedListeners_ux0ez9$_0();
  };
  ArrayLinkList.prototype.remove_11rb$ = function (element) {
    var returnValue = ArrayList.prototype.remove_11rb$.call(this, element);
    this.runOnElementsChangedListeners_ux0ez9$_0();
    return returnValue;
  };
  ArrayLinkList.prototype.removeAll_brywnq$ = function (elements) {
    var returnValue = ArrayList.prototype.removeAll_brywnq$.call(this, elements);
    this.runOnElementsChangedListeners_ux0ez9$_0();
    return returnValue;
  };
  ArrayLinkList.prototype.removeAt_za3lpa$ = function (index) {
    var returnValue = ArrayList.prototype.removeAt_za3lpa$.call(this, index);
    this.runOnElementsChangedListeners_ux0ez9$_0();
    return returnValue;
  };
  ArrayLinkList.prototype.removeRange_vux9f0$ = function (fromIndex, toIndex) {
    ArrayList.prototype.removeRange_vux9f0$.call(this, fromIndex, toIndex);
    this.runOnElementsChangedListeners_ux0ez9$_0();
  };
  ArrayLinkList.prototype.set_wxm5ur$ = function (index, element) {
    var returnValue = ArrayList.prototype.set_wxm5ur$.call(this, index, element);
    this.runOnElementsChangedListeners_ux0ez9$_0();
    return returnValue;
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
    } else {
      var index = ArrayList.prototype.indexOf_11rb$.call(this, element);
      if (index === -1) {
        return null;
      } else {
        return index;
      }
    }
  };
  Object.defineProperty(ArrayLinkList.prototype, 'node', {
    get: function () {
      if (this.indexOfOrNull_11rb$(this.node_ns7zwb$_0) == null) {
        this.node_ns7zwb$_0 = null;
      }if (this.node_ns7zwb$_0 == null) {
        if (0 < this.size) {
          this.node_ns7zwb$_0 = getOrNull(this, Random.Default.nextInt_vux9f0$(0, this.size));
        }}return this.node_ns7zwb$_0;
    },
    set: function (value) {
      var tmp$, tmp$_0, tmp$_1;
      this.lastTimeNode_rxcek8$_0 = this.node;
      var preChangeNodeID = this.nodeID;
      this.node_ns7zwb$_0 = value;
      tmp$ = this.onNodeEventListeners_907qg9$_0.iterator();
      while (tmp$.hasNext()) {
        var onNodeEventListener = tmp$.next();
        tmp$_0 = this.nodeID;
        if (preChangeNodeID != null) {
          tmp$_1 = getOrNull(this, preChangeNodeID);
        } else {
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
  ArrayLinkList.prototype.next = function () {
    var index = this.indexOfOrNull_11rb$(this.node);
    if (index != null) {
      this.node = getOrNull(this, (index + 1 | 0) % this.size);
      return true;
    }return false;
  };
  ArrayLinkList.prototype.previous = function () {
    var tmp$;
    var index = this.indexOfOrNull_11rb$(this.node);
    if (index != null) {
      if ((index - 1 | 0) === -1) {
        tmp$ = get_lastIndex(this);
      } else {
        tmp$ = index - 1 | 0;
      }
      this.node = getOrNull(this, tmp$);
      return true;
    }return false;
  };
  ArrayLinkList.prototype.designated_za3lpa$ = function (nodeID) {
    if (0 <= nodeID && nodeID < this.size) {
      this.node = getOrNull(this, nodeID);
      return true;
    }return false;
  };
  ArrayLinkList.prototype.designated_11rb$ = function (node) {
    var tmp$;
    var index = this.indexOfOrNull_11rb$(node);
    if (index != null) {
      tmp$ = this.designated_za3lpa$(index);
    } else {
      tmp$ = false;
    }
    return tmp$;
  };
  ArrayLinkList.prototype.lastTime = function () {
    if (this.lastTimeNode_rxcek8$_0 != null) {
      this.node = this.lastTimeNode_rxcek8$_0;
    } else {
      this.node = this.node;
    }
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
    } else {
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
    } else {
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
    } else {
      $this.node = getOrNull($this, 0);
    }
    return $this;
  }
  function AudioDescription() {
    AudioDescription_instance = this;
    var tmp$;
    UserInterface.call(this, Kotlin.isType(tmp$ = document.getElementById('trackDescription'), HTMLElement) ? tmp$ : throwCCE());
    var tmp$_0;
    this.trackDescription_0 = Kotlin.isType(tmp$_0 = document.getElementById('trackDescription'), HTMLDivElement) ? tmp$_0 : throwCCE();
    this.audioIconHTML_0 = '<i class="icon-font nestle-bottom" style="display:inline;">&#xe81c;<\/i>';
  }
  AudioDescription.prototype.show_s8ev37$ = function (showTime) {
    var tmp$, tmp$_0;
    UserInterface.prototype.show_s8ev37$.call(this, showTime);
    var audioNameHTML = '<div style=' + '"' + 'display:inline;' + '"' + '>' + ((tmp$_0 = (tmp$ = Player_getInstance().audioTracks.node) != null ? tmp$.name : null) != null ? tmp$_0 : '') + '<\/div>';
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
    }return AudioDescription_instance;
  }
  function CanAutoplay() {
    CanAutoplay_instance = this;
    this.video_0 = {type: 'video', method: 'video', params: null};
    this.videoMuted_0 = {type: 'videoMuted', method: 'video', params: {muted: true}};
    this.videoInline_0 = {type: 'videoInline', method: 'video', params: {inline: true}};
    this.videoInlineMuted_0 = {type: 'videoInlineMuted', method: 'video', params: {inline: true, muted: true}};
    this.checkCanAutoplay_0(CanAutoplay_init$lambda, CanAutoplay_init$lambda_0(this), this.video_0);
    this.checkCanAutoplay_0(CanAutoplay_init$lambda_1, CanAutoplay_init$lambda_2(this), this.videoMuted_0);
    this.checkCanAutoplay_0(CanAutoplay_init$lambda_3, CanAutoplay_init$lambda_4(this), this.videoInline_0);
    this.checkCanAutoplay_0(CanAutoplay_init$lambda_5, CanAutoplay_init$lambda_6(this), this.videoInlineMuted_0);
  }
  CanAutoplay.prototype.isNotUseCanAutoplayOnThisRunner_0 = function () {
    var isNotUse = false;
    if (RunnerInfo_getInstance().isTizen()) {
      isNotUse = true;
    }if (RunnerInfo_getInstance().isWebOS()) {
      isNotUse = true;
    }return isNotUse;
  };
  function CanAutoplay$checkCanAutoplay$lambda(closure$onCanAutoplay, closure$onCanNotAutoplay) {
    return function (obj) {
      var result = false;
      try {
        result = obj.result;
      } catch (e) {
      }
      if (result === true) {
        closure$onCanAutoplay();
      } else {
        closure$onCanNotAutoplay();
      }
    };
  }
  CanAutoplay.prototype.checkCanAutoplay_0 = function (onCanAutoplay, onCanNotAutoplay, autoplayType) {
    try {
      if (this.isNotUseCanAutoplayOnThisRunner_0()) {
        onCanAutoplay();
      } else {
        var _canAutoplay = canAutoplay;
        _canAutoplay[autoplayType.method](autoplayType.params).then(CanAutoplay$checkCanAutoplay$lambda(onCanAutoplay, onCanNotAutoplay));
      }
    } catch (e) {
      onCanAutoplay();
    }
  };
  CanAutoplay.prototype.checkVideoAutoPlayNeedToMute_9dmrm4$ = function (onNotNeedToMuteCanAutoplay, onNeedToMuteCanAutoplay) {
    this.checkCanAutoplay_0(onNotNeedToMuteCanAutoplay, onNeedToMuteCanAutoplay, this.videoInline_0);
  };
  function CanAutoplay_init$lambda() {
  }
  function CanAutoplay_init$lambda_0(this$CanAutoplay) {
    return function () {
      println(this$CanAutoplay.video_0.type + ': \u5514\u53EF\u4EE5\u81EA\u52D5\u64AD\u653E');
    };
  }
  function CanAutoplay_init$lambda_1() {
  }
  function CanAutoplay_init$lambda_2(this$CanAutoplay) {
    return function () {
      println(this$CanAutoplay.videoMuted_0.type + ': \u5514\u53EF\u4EE5\u81EA\u52D5\u64AD\u653E');
    };
  }
  function CanAutoplay_init$lambda_3() {
  }
  function CanAutoplay_init$lambda_4(this$CanAutoplay) {
    return function () {
      println(this$CanAutoplay.videoInline_0.type + ': \u5514\u53EF\u4EE5\u81EA\u52D5\u64AD\u653E');
    };
  }
  function CanAutoplay_init$lambda_5() {
  }
  function CanAutoplay_init$lambda_6(this$CanAutoplay) {
    return function () {
      println(this$CanAutoplay.videoInlineMuted_0.type + ': \u5514\u53EF\u4EE5\u81EA\u52D5\u64AD\u653E');
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
    }return CanAutoplay_instance;
  }
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
  Channel$Source.prototype.equals = function (other) {
    if (Kotlin.isType(other, Channel$Source)) {
      var isDescriptionEqual = equals(this.description, other.description);
      var isIFramePlayerSrcEqual = equals(this.iFramePlayerSrc, other.iFramePlayerSrc);
      var isLinkEqual = equals(this.link, other.link);
      if (isDescriptionEqual && isIFramePlayerSrcEqual && isLinkEqual) {
        return true;
      }}return false;
  };
  Channel$Source.prototype.getLinkOfHttpsGetAble = function () {
    if (startsWith(this.link, 'http://')) {
      var proxy_url = 'https://hknbp-proxy.herokuapp.com/';
      return proxy_url + this.link;
    }return this.link;
  };
  Channel$Source.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Source',
    interfaces: []
  };
  Channel$Source.prototype.component1 = function () {
    return this.description;
  };
  Channel$Source.prototype.component2 = function () {
    return this.iFramePlayerSrc;
  };
  Channel$Source.prototype.component3 = function () {
    return this.link;
  };
  Channel$Source.prototype.copy_6hosri$ = function (description, iFramePlayerSrc, link) {
    return new Channel$Source(description === void 0 ? this.description : description, iFramePlayerSrc === void 0 ? this.iFramePlayerSrc : iFramePlayerSrc, link === void 0 ? this.link : link);
  };
  Channel$Source.prototype.toString = function () {
    return 'Source(description=' + Kotlin.toString(this.description) + (', iFramePlayerSrc=' + Kotlin.toString(this.iFramePlayerSrc)) + (', link=' + Kotlin.toString(this.link)) + ')';
  };
  Channel$Source.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    result = result * 31 + Kotlin.hashCode(this.iFramePlayerSrc) | 0;
    result = result * 31 + Kotlin.hashCode(this.link) | 0;
    return result;
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
    } else {
      onLoadedXMLTVListener((tmp$ = this.xmltv_0) != null ? tmp$ : new XMLTV());
    }
  };
  Channel$Information.prototype.equals = function (other) {
    if (Kotlin.isType(other, Channel$Information)) {
      var isEpgIdEqual = equals(this.epgID, other.epgID);
      var isSrcEqual = equals(this.src, other.src);
      if (isEpgIdEqual && isSrcEqual) {
        return true;
      }}return false;
  };
  Channel$Information.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Information',
    interfaces: []
  };
  Channel$Information.prototype.component1 = function () {
    return this.epgID;
  };
  Channel$Information.prototype.component2 = function () {
    return this.src;
  };
  Channel$Information.prototype.copy_puj7f4$ = function (epgID, src) {
    return new Channel$Information(epgID === void 0 ? this.epgID : epgID, src === void 0 ? this.src : src);
  };
  Channel$Information.prototype.toString = function () {
    return 'Information(epgID=' + Kotlin.toString(this.epgID) + (', src=' + Kotlin.toString(this.src)) + ')';
  };
  Channel$Information.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.epgID) | 0;
    result = result * 31 + Kotlin.hashCode(this.src) | 0;
    return result;
  };
  Channel.prototype.equals = function (other) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (Kotlin.isType(other, Channel)) {
      var isNumberEqual = this.number === other.number;
      var isNameEqual = (tmp$ = this.name) != null ? tmp$.equals(other.name) : null;
      tmp$_0 = this.sources.iterator();
      while (tmp$_0.hasNext()) {
        var thisSource = tmp$_0.next();
        var isHaveSameSource = false;
        tmp$_1 = other.sources.iterator();
        while (tmp$_1.hasNext()) {
          var otherSource = tmp$_1.next();
          if (thisSource != null ? thisSource.equals(otherSource) : null) {
            isHaveSameSource = true;
          }}
        if (!isHaveSameSource) {
          return false;
        }}
      var isInformationEqual = (tmp$_2 = this.information) != null ? tmp$_2.equals(other.information) : null;
      if (isNumberEqual && isNameEqual && isInformationEqual) {
        return true;
      }}return false;
  };
  Channel.prototype.toXMLString_0 = function ($receiver) {
    return '<name lang=' + '"' + toString($receiver.lang) + '"' + '>' + $receiver.string + '<\/name>';
  };
  Channel.prototype.toXMLString_1 = function ($receiver) {
    var tmp$;
    var nameMultiLangString = '';
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var name = tmp$.next();
      nameMultiLangString += this.toXMLString_0(name);
    }
    return nameMultiLangString;
  };
  Channel.prototype.toXMLString_2 = function ($receiver) {
    return '<source description=' + '"' + $receiver.description + '"' + ' iframeplayersrc=' + '"' + $receiver.iFramePlayerSrc + '"' + ' link=' + '"' + $receiver.link + '"' + '/>';
  };
  Channel.prototype.toXMLString_3 = function ($receiver) {
    var tmp$;
    var sourcesString = '';
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var source = tmp$.next();
      sourcesString += this.toXMLString_2(source);
    }
    return sourcesString;
  };
  Channel.prototype.toXMLString = function () {
    return '<channel number=' + '"' + this.number + '"' + '>' + '\n' + '    ' + this.toXMLString_1(this.name) + '\n' + '    ' + this.toXMLString_3(this.sources) + '\n' + '    <information epgid=' + '"' + this.information.epgID + '"' + ' src=' + '"' + this.information.src + '"' + '/>' + '\n' + '<\/channel>' + '\n';
  };
  Channel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Channel',
    interfaces: []
  };
  Channel.prototype.component1 = function () {
    return this.number;
  };
  Channel.prototype.component2 = function () {
    return this.name;
  };
  Channel.prototype.component3 = function () {
    return this.sources;
  };
  Channel.prototype.component4 = function () {
    return this.information;
  };
  Channel.prototype.copy_s2fi4q$ = function (number, name, sources, information) {
    return new Channel(number === void 0 ? this.number : number, name === void 0 ? this.name : name, sources === void 0 ? this.sources : sources, information === void 0 ? this.information : information);
  };
  Channel.prototype.toString = function () {
    return 'Channel(number=' + Kotlin.toString(this.number) + (', name=' + Kotlin.toString(this.name)) + (', sources=' + Kotlin.toString(this.sources)) + (', information=' + Kotlin.toString(this.information)) + ')';
  };
  Channel.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.number) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.sources) | 0;
    result = result * 31 + Kotlin.hashCode(this.information) | 0;
    return result;
  };
  function designatedByChannelNumber$lambda(dialogues) {
    var tmp$, tmp$_0;
    new PromptBox((tmp$_0 = (tmp$ = dialogues.node) != null ? tmp$.canNotFind : null) != null ? tmp$_0 : '');
  }
  function designatedByChannelNumber($receiver, channelNumber) {
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.number === channelNumber) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }}
      firstOrNull$result = null;
    }
     while (false);
    var channelNumberNodeID = $receiver.indexOfOrNull_11rb$(firstOrNull$result);
    if (channelNumberNodeID != null) {
      $receiver.designated_za3lpa$(channelNumberNodeID);
      return true;
    } else {
      Dialogue$Companion_getInstance().getDialogues_fs1aqo$(designatedByChannelNumber$lambda);
      return false;
    }
  }
  function changeToRecentlyWatchedChannel$lambda(this$changeToRecentlyWatchedChannel) {
    return function () {
      var tmp$;
      var channelParam = (tmp$ = (new URL(window.location.href)).searchParams) != null ? tmp$.get('channel') : null;
      var tmp$_0 = this$changeToRecentlyWatchedChannel;
      var $receiver = this$changeToRecentlyWatchedChannel;
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$_1;
        tmp$_1 = $receiver.iterator();
        while (tmp$_1.hasNext()) {
          var element = tmp$_1.next();
          if (element.number === (channelParam != null ? toIntOrNull(channelParam) : null)) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }}
        firstOrNull$result = null;
      }
       while (false);
      var toIndexOfChannelNumber = tmp$_0.indexOfOrNull_11rb$(firstOrNull$result);
      var customChannel = getOrNull(parseChannels_0(decodeURIComponent(channelParam != null ? channelParam : '')), 0);
      if (customChannel != null) {
        var $receiver_0 = this$changeToRecentlyWatchedChannel;
        var firstOrNull$result_0;
        firstOrNull$break: do {
          var tmp$_2;
          tmp$_2 = $receiver_0.iterator();
          while (tmp$_2.hasNext()) {
            var element_0 = tmp$_2.next();
            if (equals(element_0, customChannel)) {
              firstOrNull$result_0 = element_0;
              break firstOrNull$break;
            }}
          firstOrNull$result_0 = null;
        }
         while (false);
        if (firstOrNull$result_0 == null) {
          this$changeToRecentlyWatchedChannel.add_11rb$(customChannel);
        }toIndexOfChannelNumber = this$changeToRecentlyWatchedChannel.lastIndexOf_11rb$(customChannel);
      }return toIndexOfChannelNumber;
    };
  }
  function changeToRecentlyWatchedChannel$lambda_0(this$changeToRecentlyWatchedChannel) {
    return function () {
      var tmp$;
      var recentlyWatchedChannel = (tmp$ = localStorage.getItem('RecentlyWatchedChannel')) != null ? toInt(tmp$) : null;
      if (recentlyWatchedChannel != null) {
        if (recentlyWatchedChannel < this$changeToRecentlyWatchedChannel.size) {
          return recentlyWatchedChannel;
        } else {
          return get_lastIndex(this$changeToRecentlyWatchedChannel);
        }
      } else {
        return null;
      }
    };
  }
  function changeToRecentlyWatchedChannel($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    try {
      tmp$_1 = (tmp$ = changeToRecentlyWatchedChannel$lambda($receiver)()) != null ? tmp$ : changeToRecentlyWatchedChannel$lambda_0($receiver)();
      if (tmp$_1 == null) {
        if ($receiver.size <= 0) {
          tmp$_0 = 0;
        } else {
          tmp$_0 = Random.Default.nextInt_vux9f0$(0, $receiver.size);
        }
        tmp$_1 = tmp$_0;
      }tmp$_2 = tmp$_1;
    } catch (e) {
      tmp$_2 = 0;
    }
    $receiver.designated_za3lpa$(tmp$_2);
  }
  function channels$lambda$ObjectLiteral(closure$channels) {
    this.closure$channels = closure$channels;
  }
  channels$lambda$ObjectLiteral.prototype.onNodeChanged_t4rudg$ = function (preChangeNodeID, postChangeNodeID, preChangeNode, postChangeNode) {
    var tmp$;
    localStorage.setItem('RecentlyWatchedChannel', toString(postChangeNodeID));
    if (postChangeNode != null) {
      if (postChangeNode.number < 0) {
        updateURLParameter('channel', encodeURIComponent(postChangeNode.toXMLString()));
      } else {
        updateURLParameter('channel', postChangeNode.number.toString());
      }
    }Player_getInstance().playChannel_e3jjlp$((tmp$ = this.closure$channels.node) != null ? tmp$ : new Channel(0));
  };
  channels$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ArrayLinkList$OnNodeEventListener]
  };
  function channels$lambda$ObjectLiteral_0(closure$channels) {
    this.closure$channels = closure$channels;
  }
  function channels$lambda$ObjectLiteral$onElementsChanged$lambda(channel) {
    return channel.number;
  }
  channels$lambda$ObjectLiteral_0.prototype.onElementsChanged = function () {
    var $receiver = this.closure$channels;
    if ($receiver.size > 1) {
      sortWith($receiver, new Comparator$ObjectLiteral(compareBy$lambda(channels$lambda$ObjectLiteral$onElementsChanged$lambda)));
    }localStorage.setItem('channels', '<channels>' + toXMLString(this.closure$channels) + '<\/channels>');
  };
  channels$lambda$ObjectLiteral_0.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ArrayLinkList$OnElementsChangedListener]
  };
  function channels$lambda() {
    var tmp$, tmp$_0;
    var channels = (tmp$_0 = (tmp$ = localStorage.getItem('channels')) != null ? parseChannels_0(tmp$) : null) != null ? tmp$_0 : ArrayLinkList_init([]);
    channels.addOnNodeEventListener_ljxrtv$(new channels$lambda$ObjectLiteral(channels));
    channels.addOnElementsChangedListener_9f6p79$(new channels$lambda$ObjectLiteral_0(channels));
    changeToRecentlyWatchedChannel(channels);
    return channels;
  }
  var channels;
  function getName(element) {
    var tmp$, tmp$_0, tmp$_1;
    var multiLangName = new MultiLanguageString();
    var i = 0;
    var nameTag = element.getElementsByTagName('name');
    while (i < nameTag.length) {
      tmp$ = nameTag[i];
      if (tmp$ == null) {
        break;
      }var nameElement = tmp$;
      var lang = (tmp$_0 = nameElement.getAttribute('lang')) != null ? tmp$_0 : '';
      var name = (tmp$_1 = nameElement.textContent) != null ? tmp$_1 : '';
      multiLangName.add_11rb$(new MultiLanguageString$LanguageString(lang, name));
      i = i + 1 | 0;
    }
    return multiLangName;
  }
  function getSources(element) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var sources = ArrayLinkList_init([]);
    var i = 0;
    var sourceTag = element.getElementsByTagName('source');
    while (i < sourceTag.length) {
      tmp$ = sourceTag[i];
      if (tmp$ == null) {
        break;
      }var sourceElement = tmp$;
      var description = (tmp$_0 = sourceElement.getAttribute('description')) != null ? tmp$_0 : '';
      var iframeplayersrc = (tmp$_1 = sourceElement.getAttribute('iframeplayersrc')) != null ? tmp$_1 : '';
      var link = (tmp$_2 = sourceElement.getAttribute('link')) != null ? tmp$_2 : '';
      sources.add_11rb$(new Channel$Source(description, iframeplayersrc, link));
      i = i + 1 | 0;
    }
    return sources;
  }
  function getInformation(element) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var informationTag = element.getElementsByTagName('information');
    return new Channel$Information((tmp$_0 = (tmp$ = informationTag[0]) != null ? tmp$.getAttribute('epgid') : null) != null ? tmp$_0 : '', (tmp$_2 = (tmp$_1 = informationTag[0]) != null ? tmp$_1.getAttribute('src') : null) != null ? tmp$_2 : '');
  }
  function getChannels(document) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var channels = ArrayLinkList_init([]);
    var i = 0;
    var channelTag = document != null ? document.getElementsByTagName('channel') : null;
    while (i < ((tmp$ = channelTag != null ? channelTag.length : null) != null ? tmp$ : 0)) {
      tmp$_0 = channelTag != null ? channelTag[i] : null;
      if (tmp$_0 == null) {
        break;
      }var channelElement = tmp$_0;
      var number = (tmp$_2 = (tmp$_1 = channelElement.getAttribute('number')) != null ? toIntOrNull(tmp$_1) : null) != null ? tmp$_2 : 0;
      var name = getName(channelElement);
      var sources = getSources(channelElement);
      var information = getInformation(channelElement);
      channels.add_11rb$(new Channel(number, name, sources, information));
      i = i + 1 | 0;
    }
    return channels;
  }
  function parseChannels$lambda(max, value) {
  }
  function parseChannels$lambda_0(closure$onParsedChannelsListener) {
    return function (xmlHttp) {
      closure$onParsedChannelsListener(getChannels(xmlHttp.responseXML));
    };
  }
  function parseChannels$lambda_1(closure$onFailedParseChannelsListener) {
    return function () {
      closure$onFailedParseChannelsListener();
    };
  }
  function parseChannels(onProgress, onParsedChannelsListener, onFailedParseChannelsListener, xmlSrc) {
    LoadFile_getInstance().load_1gxz9p$(parseChannels$lambda, parseChannels$lambda_0(onParsedChannelsListener), parseChannels$lambda_1(onFailedParseChannelsListener), xmlSrc);
  }
  function parseChannels_0($receiver) {
    return getChannels((new DOMParser()).parseFromString($receiver, 'text/xml'));
  }
  function toXMLString($receiver) {
    var tmp$;
    var channelsString = '';
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var channel = tmp$.next();
      channelsString += channel.toXMLString();
    }
    return channelsString;
  }
  function ChannelDescription() {
    ChannelDescription_instance = this;
    var tmp$;
    UserInterface.call(this, Kotlin.isType(tmp$ = document.getElementById('channelDescription'), HTMLElement) ? tmp$ : throwCCE());
    var tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9;
    this.channelDescription_0 = Kotlin.isType(tmp$_0 = document.getElementById('channelDescription'), HTMLDivElement) ? tmp$_0 : throwCCE();
    this.currentChannelName_0 = Kotlin.isType(tmp$_1 = document.getElementById('channelDescriptionCurrentChannelName'), HTMLDivElement) ? tmp$_1 : throwCCE();
    this.currentChannelNumber_0 = Kotlin.isType(tmp$_2 = document.getElementById('channelDescriptionCurrentChannelNumber'), HTMLDivElement) ? tmp$_2 : throwCCE();
    this.currentDate_0 = Kotlin.isType(tmp$_3 = document.getElementById('channelDescriptionCurrentDate'), HTMLDivElement) ? tmp$_3 : throwCCE();
    this.currentProgrammeTitle_0 = Kotlin.isType(tmp$_4 = document.getElementById('channelDescriptionCurrentProgrammeTitle'), HTMLDivElement) ? tmp$_4 : throwCCE();
    this.currentProgrammeSubTitle_0 = Kotlin.isType(tmp$_5 = document.getElementById('channelDescriptionCurrentProgrammeSubTitle'), HTMLDivElement) ? tmp$_5 : throwCCE();
    this.currentProgrammeEpisode_0 = Kotlin.isType(tmp$_6 = document.getElementById('channelDescriptionCurrentProgrammeEpisode'), HTMLDivElement) ? tmp$_6 : throwCCE();
    this.currentProgrammeBroadcastTime_0 = Kotlin.isType(tmp$_7 = document.getElementById('channelDescriptionCurrentProgrammeBroadcastTime'), HTMLDivElement) ? tmp$_7 : throwCCE();
    this.currentProgrammeDesc_0 = Kotlin.isType(tmp$_8 = document.getElementById('channelDescriptionCurrentProgrammeDesc'), HTMLDivElement) ? tmp$_8 : throwCCE();
    this.currentProgrammeCategory_0 = Kotlin.isType(tmp$_9 = document.getElementById('channelDescriptionCurrentProgrammeCategory'), HTMLDivElement) ? tmp$_9 : throwCCE();
    this.currentDateTimer_0 = 0;
    this.channelStatusPrompt_s58cq2$_0 = null;
    this.setCurrentDate_0();
    channels.addOnNodeEventListener_ljxrtv$(new ChannelDescription_init$ObjectLiteral());
    Player_getInstance().addOnPlayerEventListener_j8fzjz$(new ChannelDescription_init$ObjectLiteral_0());
  }
  ChannelDescription.prototype.setCurrentChannelName_0 = function () {
    var tmp$, tmp$_0;
    this.currentChannelName_0.innerHTML = ((tmp$_0 = (tmp$ = channels.node) != null ? tmp$.name : null) != null ? tmp$_0 : '').toString();
  };
  ChannelDescription.prototype.setCurrentChannelNumber_0 = function () {
    var tmp$, tmp$_0, tmp$_1;
    this.currentChannelNumber_0.innerHTML = (tmp$_1 = (tmp$_0 = (tmp$ = channels.node) != null ? tmp$.number : null) != null ? toStringBackwardZeroPadding(tmp$_0, 3) : null) != null ? tmp$_1 : '';
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
        episodeInnerHTML += (tmp$_4 = (tmp$_3 = (tmp$_2 = dialogues.node) != null ? tmp$_2.season : null) != null ? replace(tmp$_3, '${season}', season.toString()) : null) != null ? tmp$_4 : '';
      }var episode = (tmp$_7 = (tmp$_6 = (tmp$_5 = closure$xmltv.programmes) != null ? tmp$_5.getProgrammeByTime() : null) != null ? tmp$_6.episodeNum : null) != null ? tmp$_7.getEpisode() : null;
      if (episode != null) {
        episodeInnerHTML += (tmp$_10 = (tmp$_9 = (tmp$_8 = dialogues.node) != null ? tmp$_8.episode : null) != null ? replace(tmp$_9, '${episode}', episode.toString()) : null) != null ? tmp$_10 : '';
      }this$ChannelDescription.currentProgrammeEpisode_0.innerHTML = episodeInnerHTML;
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
      } else {
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
  Object.defineProperty(ChannelDescription.prototype, 'channelStatusPrompt_0', {
    get: function () {
      return this.channelStatusPrompt_s58cq2$_0;
    },
    set: function (value) {
      var tmp$;
      (tmp$ = this.channelStatusPrompt_s58cq2$_0) != null ? (tmp$.hide(), Unit) : null;
      this.channelStatusPrompt_s58cq2$_0 = value;
    }
  });
  function ChannelDescription_init$ObjectLiteral() {
  }
  ChannelDescription_init$ObjectLiteral.prototype.onNodeChanged_t4rudg$ = function (preChangeNodeID, postChangeNodeID, preChangeNode, postChangeNode) {
    ChannelDescription_getInstance().update();
    ChannelDescription_getInstance().show_s8ev37$(null);
  };
  ChannelDescription_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ArrayLinkList$OnNodeEventListener]
  };
  function ChannelDescription_init$ObjectLiteral_0() {
    this.isFirstPlaying_0 = true;
    this.isPlaying_0 = false;
    ChannelDescription_getInstance().update();
    ChannelDescription_getInstance().show_s8ev37$(null);
  }
  function ChannelDescription_init$ObjectLiteral$on$lambda(this$) {
    return function () {
      this$.isFirstPlaying_0 = false;
    };
  }
  function ChannelDescription_init$ObjectLiteral$on$lambda$lambda(dialogues) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$_1 = (tmp$_0 = (tmp$ = dialogues.node) != null ? tmp$.poorSignalReception : null) != null ? tmp$_0 : '';
    ChannelDescription_getInstance().channelStatusPrompt_0 = new PromptBox(tmp$_1, null);
  }
  function ChannelDescription_init$ObjectLiteral$on$lambda_0(this$) {
    return function () {
      if (!this$.isPlaying_0) {
        ChannelDescription_getInstance().update();
        ChannelDescription_getInstance().show_s8ev37$(null);
        Dialogue$Companion_getInstance().getDialogues_fs1aqo$(ChannelDescription_init$ObjectLiteral$on$lambda$lambda);
      }};
  }
  function ChannelDescription_init$ObjectLiteral$on$lambda_1(dialogues) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$_1 = (tmp$_0 = (tmp$ = dialogues.node) != null ? tmp$.thisDeviceDoesNotSupportThisChannelSignal : null) != null ? tmp$_0 : '';
    ChannelDescription_getInstance().channelStatusPrompt_0 = new PromptBox(tmp$_1, null);
  }
  function ChannelDescription_init$ObjectLiteral$on$lambda_2(dialogues) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$_1 = (tmp$_0 = (tmp$ = dialogues.node) != null ? tmp$.cannotReceiveChannelSignal : null) != null ? tmp$_0 : '';
    ChannelDescription_getInstance().channelStatusPrompt_0 = new PromptBox(tmp$_1, null);
  }
  ChannelDescription_init$ObjectLiteral_0.prototype.on_mdxcb7$ = function (onPlayerEvent) {
    switch (onPlayerEvent.name) {
      case 'turnChannel':
        this.isFirstPlaying_0 = true;
        ChannelDescription_getInstance().channelStatusPrompt_0 = null;
        break;
      case 'playing':
        this.isPlaying_0 = true;
        if (!this.isFirstPlaying_0) {
          ChannelDescription_getInstance().hide();
        } else {
          ChannelDescription_getInstance().update();
          ChannelDescription_getInstance().show_s8ev37$(5000);
        }

        window.setTimeout(ChannelDescription_init$ObjectLiteral$on$lambda(this), 5000);
        ChannelDescription_getInstance().channelStatusPrompt_0 = null;
        break;
      case 'notPlaying':
        this.isPlaying_0 = false;
        window.setTimeout(ChannelDescription_init$ObjectLiteral$on$lambda_0(this), 5000);
        break;
      case 'deviceNotSupportFormat':
        this.isPlaying_0 = false;
        ChannelDescription_getInstance().update();
        ChannelDescription_getInstance().show_s8ev37$(null);
        Dialogue$Companion_getInstance().getDialogues_fs1aqo$(ChannelDescription_init$ObjectLiteral$on$lambda_1);
        break;
      case 'cannotReceiveChannelSignal':
        this.isPlaying_0 = false;
        ChannelDescription_getInstance().update();
        ChannelDescription_getInstance().show_s8ev37$(null);
        Dialogue$Companion_getInstance().getDialogues_fs1aqo$(ChannelDescription_init$ObjectLiteral$on$lambda_2);
        break;
    }
  };
  ChannelDescription_init$ObjectLiteral_0.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Player$OnPlayerEventListener]
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
    }return ChannelDescription_instance;
  }
  function ConsentPanel() {
    ConsentPanel_instance = this;
    var tmp$;
    UserInterface.call(this, Kotlin.isType(tmp$ = document.getElementById('consentPanel'), HTMLElement) ? tmp$ : throwCCE());
    var tmp$_0, tmp$_1;
    this.consentPanel_0 = Kotlin.isType(tmp$_0 = document.getElementById('consentPanel'), HTMLDivElement) ? tmp$_0 : throwCCE();
    this.agreeConsentButton_0 = Kotlin.isType(tmp$_1 = document.getElementById('consentPanelAgreeConsentButton'), HTMLButtonElement) ? tmp$_1 : throwCCE();
    this.consentPanel_0.style.cursor = 'auto';
    if (this.isAgreeConsent() !== true) {
      this.show_s8ev37$(null);
      this.agreeConsentButton_0.focus();
    }Dialogue$Companion_getInstance().getDialogues_fs1aqo$(ConsentPanel_init$lambda(this));
    this.agreeConsentButton_0.onclick = ConsentPanel_init$lambda_0(this);
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
    }return ConsentPanel_instance;
  }
  function CustomChannels() {
    CustomChannels_instance = this;
  }
  CustomChannels.prototype.get = function () {
    var tmp$;
    var customChannels = ArrayList_init();
    tmp$ = channels.iterator();
    while (tmp$.hasNext()) {
      var channel = tmp$.next();
      if (channel.number < 0) {
        customChannels.add_11rb$(channel);
      }}
    return customChannels;
  };
  CustomChannels.prototype.set_506v0t$ = function (index, customChannel) {
    var $receiver = channels;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element != null ? element.equals(customChannel) : null) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }}
      firstOrNull$result = null;
    }
     while (false);
    if (firstOrNull$result == null) {
      channels.set_wxm5ur$(index, customChannel);
    }};
  CustomChannels.prototype.add_e3jjlp$ = function (customChannel) {
    var $receiver = channels;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element != null ? element.equals(customChannel) : null) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }}
      firstOrNull$result = null;
    }
     while (false);
    if (firstOrNull$result == null) {
      channels.add_11rb$(customChannel);
    }};
  CustomChannels.prototype.remove_e3jjlp$ = function (customChannel) {
    channels.remove_11rb$(customChannel);
  };
  CustomChannels.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CustomChannels',
    interfaces: []
  };
  var CustomChannels_instance = null;
  function CustomChannels_getInstance() {
    if (CustomChannels_instance === null) {
      new CustomChannels();
    }return CustomChannels_instance;
  }
  function Comparator$ObjectLiteral_0(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_0.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareByDescending$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(b), selector(a));
      };
    };
  });
  function CustomChannelsSettingWindow() {
    CustomChannelsSettingWindow_instance = this;
    Window.call(this, '\u81EA\u8A02\u983B\u9053\u8A2D\u5B9A', '\n            <div style="display:flex;display:-webkit-flex;">\n                <div style="flex:3;-webkit-flex:3;">\n                    <select id="customChannelsSettingChannelsSelect" size="7" style="font-size:5vh;width:100%;"><\/select>\n                    <div style="display:flex;display:-webkit-flex;">\n                        <div style="flex:1;-webkit-flex:1;">\n                            <button id="customChannelsSettingChannelsImportButton" style="display:none;font-size:5vh;margin:.2vh;">\u532F\u5165<\/button>\n                        <\/div>\n                        <div style="flex:1;-webkit-flex:1;">\n                            <button id="customChannelsSettingChannelsExportButton" style="display:none;font-size:5vh;margin:.2vh;">\u532F\u51FA<\/button>\n                        <\/div>\n                    <\/div>\n                <\/div>\n                <div style="flex:1;-webkit-flex:1;">\n                    <button id="customChannelsSettingChannelAddButton" style="font-size:5vh;margin:.2vh;">\n                        <i class="icon-font">&#xe82e;<\/i>\n                    <\/button>\n                    <button id="customChannelsSettingChannelMoveUpButton" style="font-size:5vh;margin:.2vh;">\n                        <i class="icon-font">&#xe821;<\/i>\n                    <\/button>\n                    <button id="customChannelsSettingChannelMoveDownButton" style="font-size:5vh;margin:.2vh;">\n                        <i class="icon-font">&#xe80a;<\/i>\n                    <\/button>\n                    <button id="customChannelsSettingChannelRemoveButton" style="font-size:5vh;margin:.2vh;">\n                        <i class="icon-font">&#xe82f;<\/i>\n                    <\/button>\n                    <button id="customChannelsSettingChannelEditButton" style="font-size:5vh;margin:.2vh;">\n                        <i class="icon-font">&#xe810;<\/i>\n                    <\/button>\n                <\/div>\n            <\/div>\n        ');
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    this.channelsSelect_0 = Kotlin.isType(tmp$ = document.getElementById('customChannelsSettingChannelsSelect'), HTMLSelectElement) ? tmp$ : throwCCE();
    this.channelAddButton_0 = Kotlin.isType(tmp$_0 = document.getElementById('customChannelsSettingChannelAddButton'), HTMLButtonElement) ? tmp$_0 : throwCCE();
    this.channelRemoveButton_0 = Kotlin.isType(tmp$_1 = document.getElementById('customChannelsSettingChannelRemoveButton'), HTMLButtonElement) ? tmp$_1 : throwCCE();
    this.channelMoveUpButton_0 = Kotlin.isType(tmp$_2 = document.getElementById('customChannelsSettingChannelMoveUpButton'), HTMLButtonElement) ? tmp$_2 : throwCCE();
    this.channelMoveDownButton_0 = Kotlin.isType(tmp$_3 = document.getElementById('customChannelsSettingChannelMoveDownButton'), HTMLButtonElement) ? tmp$_3 : throwCCE();
    this.channelEditButton_0 = Kotlin.isType(tmp$_4 = document.getElementById('customChannelsSettingChannelEditButton'), HTMLButtonElement) ? tmp$_4 : throwCCE();
    this.channelsImportButton_0 = Kotlin.isType(tmp$_5 = document.getElementById('customChannelsSettingChannelsImportButton'), HTMLButtonElement) ? tmp$_5 : throwCCE();
    this.channelsExportButton_0 = Kotlin.isType(tmp$_6 = document.getElementById('customChannelsSettingChannelsExportButton'), HTMLButtonElement) ? tmp$_6 : throwCCE();
    this.channelOptionList_0 = ArrayLinkList_init([]);
    this.initChannelsSelect_1();
    this.channelAddButton_0.onclick = CustomChannelsSettingWindow_init$lambda(this);
    this.channelRemoveButton_0.onclick = CustomChannelsSettingWindow_init$lambda_0(this);
    this.channelMoveUpButton_0.onclick = CustomChannelsSettingWindow_init$lambda_1(this);
    this.channelMoveDownButton_0.onclick = CustomChannelsSettingWindow_init$lambda_2(this);
    this.channelEditButton_0.onclick = CustomChannelsSettingWindow_init$lambda_3(this);
  }
  function CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox(initValueOfChannelXmlString) {
    if (initValueOfChannelXmlString === void 0)
      initValueOfChannelXmlString = '';
    DialogueBox.call(this, '\u65B0\u589E\u81EA\u8A02\u983B\u9053', '\n        <div style="display:flex;display:-webkit-flex;">\n            <div style="text-align:left;font-size:3vh;">\n                <input id="customChannelsSettingChannelNumberInputNumber" type="number" placeholder="\u983B\u9053\u865F\u78BC" style="font-size:3vh;margin:.2vh;width:25vh;" min="-999" max="-1">\n                <input id="customChannelsSettingChannelNameInputText" type="Text" placeholder="\u983B\u9053\u540D\u7A31" style="font-size:3vh;margin:.2vh;">\n                <input id="customChannelsSettingChannelSourceLinkInputText" type="Text" placeholder="\u983B\u9053\u6E90\u9023\u7D50" style="font-size:3vh;margin:.2vh;">\n                <form style="margin:.5vh;">\n                    \u983B\u9053\u6E90\u64AD\u653E\u5668<br>\n                    <input id="customChannelsSettingChannelSourceIframelayerSrcVideoJsInputRadio" type="radio" name="IframelayerSrc" style="width:3vh;height:3vh;" checked>VideoJS<br>\n                    <input id="customChannelsSettingChannelSourceIframelayerSrcYoutubeApiInputRadio" type="radio" name="IframelayerSrc" style="width:3vh;height:3vh;">YoutubeAPI<br>\n                    <input id="customChannelsSettingChannelSourceIframelayerSrcOtherInputRadio" type="radio" name="IframelayerSrc" style="width:3vh;height:3vh;">\n                    <input id="customChannelsSettingChannelSourceIframelayerSrcOtherInputText" type="Text" placeholder="\u5176\u4ED6\u6E90\u64AD\u653E\u5668\u9023\u7D50" style="font-size:3vh;width:25vh;"><br>\n                <\/form>\n                <input id="customChannelsSettingChannelInformationEpgIdInputText" type="Text" placeholder="EPG ID" style="font-size:3vh;margin:.2vh;">\n                <input id="customChannelsSettingChannelInformationSrcInputText" type="Text" placeholder="EPG Src" style="font-size:3vh;margin:.2vh;">\n            <\/div>\n        <\/div>\n        <div>\n            <textarea id="customChannelsSettingChannelXmlStringTextArea" rows="5" style="font-size:1vh;width:100%;white-space:nowrap;" tabindex="-1"><\/textarea>\n        <\/div>\n        ');
    this.initValueOfChannelXmlString = initValueOfChannelXmlString;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    this.channelNumberInputNumber_0 = Kotlin.isType(tmp$ = document.getElementById('customChannelsSettingChannelNumberInputNumber'), HTMLInputElement) ? tmp$ : throwCCE();
    this.channelNameInputText_0 = Kotlin.isType(tmp$_0 = document.getElementById('customChannelsSettingChannelNameInputText'), HTMLInputElement) ? tmp$_0 : throwCCE();
    this.channelSourceLinkInputText_0 = Kotlin.isType(tmp$_1 = document.getElementById('customChannelsSettingChannelSourceLinkInputText'), HTMLInputElement) ? tmp$_1 : throwCCE();
    this.channelSourceIframelayerSrcVideoJsInputRadio_0 = Kotlin.isType(tmp$_2 = document.getElementById('customChannelsSettingChannelSourceIframelayerSrcVideoJsInputRadio'), HTMLInputElement) ? tmp$_2 : throwCCE();
    this.channelSourceIframelayerSrcYoutubeApiInputRadio_0 = Kotlin.isType(tmp$_3 = document.getElementById('customChannelsSettingChannelSourceIframelayerSrcYoutubeApiInputRadio'), HTMLInputElement) ? tmp$_3 : throwCCE();
    this.channelSourceIframelayerSrcOtherInputRadio_0 = Kotlin.isType(tmp$_4 = document.getElementById('customChannelsSettingChannelSourceIframelayerSrcOtherInputRadio'), HTMLInputElement) ? tmp$_4 : throwCCE();
    this.channelSourceIframelayerSrcOtherInputText_0 = Kotlin.isType(tmp$_5 = document.getElementById('customChannelsSettingChannelSourceIframelayerSrcOtherInputText'), HTMLInputElement) ? tmp$_5 : throwCCE();
    this.channelInformationEpgIdInputText_0 = Kotlin.isType(tmp$_6 = document.getElementById('customChannelsSettingChannelInformationEpgIdInputText'), HTMLInputElement) ? tmp$_6 : throwCCE();
    this.channelInformationSrcInputText_0 = Kotlin.isType(tmp$_7 = document.getElementById('customChannelsSettingChannelInformationSrcInputText'), HTMLInputElement) ? tmp$_7 : throwCCE();
    this.channelXmlStringTextArea_0 = Kotlin.isType(tmp$_8 = document.getElementById('customChannelsSettingChannelXmlStringTextArea'), HTMLTextAreaElement) ? tmp$_8 : throwCCE();
    this.okButtonScript = CustomChannelsSettingWindow$CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox_init$lambda;
    this.initChannelNumberInputNumber_0();
    this.initChannelNameInputText_0();
    this.initChannelSourceLinkInputText_0();
    this.initChannelSourceIframelayerSrcInputRadio_0();
    this.initChannelInformationEpgIdInputText_0();
    this.initChannelInformationSrcInputText_0();
    this.initChannelXmlStringTextArea_0();
  }
  CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox.prototype.changeMustNegativeNumber_0 = function ($receiver) {
    return new Channel(toNegative($receiver.number), $receiver.name, $receiver.sources, $receiver.information);
  };
  function CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox$getEditChannelDialogBoxInformation$lambda(this$CustomChannelEditChannelDialogBox) {
    return function () {
      var tmp$;
      if (true === this$CustomChannelEditChannelDialogBox.channelSourceIframelayerSrcVideoJsInputRadio_0.checked)
        tmp$ = 'iframePlayer/videojs.html';
      else if (true === this$CustomChannelEditChannelDialogBox.channelSourceIframelayerSrcYoutubeApiInputRadio_0.checked)
        tmp$ = 'iframePlayer/youtube_api.html';
      else if (true === this$CustomChannelEditChannelDialogBox.channelSourceIframelayerSrcOtherInputRadio_0.checked)
        tmp$ = this$CustomChannelEditChannelDialogBox.channelSourceIframelayerSrcOtherInputText_0.value;
      else {
        tmp$ = '';
      }
      return tmp$;
    };
  }
  CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox.prototype.getEditChannelDialogBoxInformation = function () {
    var tmp$, tmp$_0;
    var getIframelayerSrc = CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox$getEditChannelDialogBoxInformation$lambda(this);
    return new Channel((tmp$_0 = (tmp$ = toIntOrNull(this.channelNumberInputNumber_0.value)) != null ? toNegative(tmp$) : null) != null ? tmp$_0 : -1, new MultiLanguageString(ArrayLinkList_init([new MultiLanguageString$LanguageString('', this.channelNameInputText_0.value)])), ArrayLinkList_init([new Channel$Source(getIframelayerSrc(), getIframelayerSrc(), this.channelSourceLinkInputText_0.value)]), new Channel$Information(this.channelInformationEpgIdInputText_0.value, this.channelInformationSrcInputText_0.value));
  };
  CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox.prototype.setChannelXmlStringTextArea_0 = function () {
    this.channelXmlStringTextArea_0.value = this.getEditChannelDialogBoxInformation().toXMLString();
  };
  function CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox$initChannelNumberInputNumber$lambda(this$CustomChannelEditChannelDialogBox) {
    return function (event) {
      this$CustomChannelEditChannelDialogBox.setChannelXmlStringTextArea_0();
    };
  }
  function CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox$initChannelNumberInputNumber$lambda_0(this$CustomChannelEditChannelDialogBox) {
    return function (event) {
      this$CustomChannelEditChannelDialogBox.setChannelXmlStringTextArea_0();
    };
  }
  function CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox$initChannelNumberInputNumber$lambda_1(this$CustomChannelEditChannelDialogBox) {
    return function (event) {
      this$CustomChannelEditChannelDialogBox.setChannelXmlStringTextArea_0();
    };
  }
  CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox.prototype.initChannelNumberInputNumber_0 = function () {
    this.channelNumberInputNumber_0.onclick = CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox$initChannelNumberInputNumber$lambda(this);
    this.channelNumberInputNumber_0.onchange = CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox$initChannelNumberInputNumber$lambda_0(this);
    this.channelNumberInputNumber_0.onkeyup = CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox$initChannelNumberInputNumber$lambda_1(this);
  };
  function CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox$initChannelNameInputText$lambda(this$CustomChannelEditChannelDialogBox) {
    return function (event) {
      this$CustomChannelEditChannelDialogBox.setChannelXmlStringTextArea_0();
    };
  }
  CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox.prototype.initChannelNameInputText_0 = function () {
    this.channelNameInputText_0.onkeyup = CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox$initChannelNameInputText$lambda(this);
  };
  function CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox$initChannelSourceLinkInputText$lambda(this$CustomChannelEditChannelDialogBox) {
    return function (event) {
      this$CustomChannelEditChannelDialogBox.setChannelXmlStringTextArea_0();
    };
  }
  CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox.prototype.initChannelSourceLinkInputText_0 = function () {
    this.channelSourceLinkInputText_0.onkeyup = CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox$initChannelSourceLinkInputText$lambda(this);
  };
  function CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox$initChannelSourceIframelayerSrcInputRadio$lambda(this$CustomChannelEditChannelDialogBox) {
    return function (event) {
      this$CustomChannelEditChannelDialogBox.setChannelXmlStringTextArea_0();
    };
  }
  function CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox$initChannelSourceIframelayerSrcInputRadio$lambda_0(this$CustomChannelEditChannelDialogBox) {
    return function (event) {
      this$CustomChannelEditChannelDialogBox.setChannelXmlStringTextArea_0();
    };
  }
  function CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox$initChannelSourceIframelayerSrcInputRadio$lambda_1(this$CustomChannelEditChannelDialogBox) {
    return function (event) {
      this$CustomChannelEditChannelDialogBox.setChannelXmlStringTextArea_0();
    };
  }
  function CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox$initChannelSourceIframelayerSrcInputRadio$lambda_2(this$CustomChannelEditChannelDialogBox) {
    return function (event) {
      this$CustomChannelEditChannelDialogBox.setChannelXmlStringTextArea_0();
    };
  }
  CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox.prototype.initChannelSourceIframelayerSrcInputRadio_0 = function () {
    this.channelSourceIframelayerSrcVideoJsInputRadio_0.onchange = CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox$initChannelSourceIframelayerSrcInputRadio$lambda(this);
    this.channelSourceIframelayerSrcYoutubeApiInputRadio_0.onchange = CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox$initChannelSourceIframelayerSrcInputRadio$lambda_0(this);
    this.channelSourceIframelayerSrcOtherInputRadio_0.onchange = CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox$initChannelSourceIframelayerSrcInputRadio$lambda_1(this);
    this.channelSourceIframelayerSrcOtherInputText_0.onkeyup = CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox$initChannelSourceIframelayerSrcInputRadio$lambda_2(this);
  };
  function CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox$initChannelInformationEpgIdInputText$lambda(this$CustomChannelEditChannelDialogBox) {
    return function (event) {
      this$CustomChannelEditChannelDialogBox.setChannelXmlStringTextArea_0();
    };
  }
  CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox.prototype.initChannelInformationEpgIdInputText_0 = function () {
    this.channelInformationEpgIdInputText_0.onkeyup = CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox$initChannelInformationEpgIdInputText$lambda(this);
  };
  function CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox$initChannelInformationSrcInputText$lambda(this$CustomChannelEditChannelDialogBox) {
    return function (event) {
      this$CustomChannelEditChannelDialogBox.setChannelXmlStringTextArea_0();
    };
  }
  CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox.prototype.initChannelInformationSrcInputText_0 = function () {
    this.channelInformationSrcInputText_0.onkeyup = CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox$initChannelInformationSrcInputText$lambda(this);
  };
  function CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox$initChannelXmlStringTextArea$update(this$CustomChannelEditChannelDialogBox) {
    return function () {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12;
      var channel = getOrNull(parseChannels_0(this$CustomChannelEditChannelDialogBox.channelXmlStringTextArea_0.value), 0);
      this$CustomChannelEditChannelDialogBox.channelNumberInputNumber_0.value = ((tmp$ = channel != null ? channel.number : null) != null ? tmp$ : '').toString();
      this$CustomChannelEditChannelDialogBox.channelNameInputText_0.value = ((tmp$_0 = channel != null ? channel.name : null) != null ? tmp$_0 : '').toString();
      this$CustomChannelEditChannelDialogBox.channelSourceLinkInputText_0.value = ((tmp$_3 = (tmp$_2 = (tmp$_1 = channel != null ? channel.sources : null) != null ? tmp$_1.node : null) != null ? tmp$_2.link : null) != null ? tmp$_3 : '').toString();
      switch ((tmp$_5 = (tmp$_4 = channel != null ? channel.sources : null) != null ? tmp$_4.node : null) != null ? tmp$_5.iFramePlayerSrc : null) {
        case 'iframePlayer/videojs.html':
          this$CustomChannelEditChannelDialogBox.channelSourceIframelayerSrcVideoJsInputRadio_0.checked = true;
          break;
        case 'iframePlayer/youtube_api.html':
          this$CustomChannelEditChannelDialogBox.channelSourceIframelayerSrcYoutubeApiInputRadio_0.checked = true;
          break;
        default:this$CustomChannelEditChannelDialogBox.channelSourceIframelayerSrcOtherInputRadio_0.checked = true;
          this$CustomChannelEditChannelDialogBox.channelSourceIframelayerSrcOtherInputText_0.value = ((tmp$_8 = (tmp$_7 = (tmp$_6 = channel != null ? channel.sources : null) != null ? tmp$_6.node : null) != null ? tmp$_7.iFramePlayerSrc : null) != null ? tmp$_8 : '').toString();
          break;
      }
      this$CustomChannelEditChannelDialogBox.channelInformationEpgIdInputText_0.value = ((tmp$_10 = (tmp$_9 = channel != null ? channel.information : null) != null ? tmp$_9.epgID : null) != null ? tmp$_10 : '').toString();
      this$CustomChannelEditChannelDialogBox.channelInformationSrcInputText_0.value = ((tmp$_12 = (tmp$_11 = channel != null ? channel.information : null) != null ? tmp$_11.src : null) != null ? tmp$_12 : '').toString();
    };
  }
  function CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox$initChannelXmlStringTextArea$lambda(closure$update) {
    return function (event) {
      closure$update();
    };
  }
  CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox.prototype.initChannelXmlStringTextArea_0 = function () {
    var update = CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox$initChannelXmlStringTextArea$update(this);
    this.channelXmlStringTextArea_0.onkeyup = CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox$initChannelXmlStringTextArea$lambda(update);
    this.channelXmlStringTextArea_0.value = this.initValueOfChannelXmlString;
    update();
  };
  function CustomChannelsSettingWindow$CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox_init$lambda() {
  }
  CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CustomChannelEditChannelDialogBox',
    interfaces: [DialogueBox]
  };
  function CustomChannelsSettingWindow$ChannelOption(channel, option) {
    this.channel = channel;
    this.option = option;
  }
  CustomChannelsSettingWindow$ChannelOption.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChannelOption',
    interfaces: []
  };
  CustomChannelsSettingWindow.prototype.createChannelOption_0 = function (channel) {
    var tmp$;
    var option = Kotlin.isType(tmp$ = document.createElement('option'), HTMLOptionElement) ? tmp$ : throwCCE();
    option.text = toStringBackwardZeroPadding(channel.number, 3) + ' ' + channel.name;
    option.value = channel.number.toString();
    return option;
  };
  CustomChannelsSettingWindow.prototype.initChannelsSelect_0 = function (channels) {
    var tmp$;
    this.channelsSelect_0.innerHTML = '';
    tmp$ = channels.iterator();
    while (tmp$.hasNext()) {
      var channel = tmp$.next();
      var option = this.createChannelOption_0(channel);
      this.channelOptionList_0.add_11rb$(new CustomChannelsSettingWindow$ChannelOption(channel, option));
      this.channelsSelect_0.appendChild(option);
    }
  };
  CustomChannelsSettingWindow.prototype.initChannelsSelect_1 = function () {
    this.initChannelsSelect_0(CustomChannels_getInstance().get());
  };
  CustomChannelsSettingWindow.prototype.saveCustomChannels_0 = function () {
    var tmp$;
    var list = ArrayLinkList_init([]);
    tmp$ = this.channelOptionList_0.iterator();
    while (tmp$.hasNext()) {
      var channelOption = tmp$.next();
      list.add_11rb$(channelOption.channel);
    }
  };
  CustomChannelsSettingWindow.prototype.getChannelOption_0 = function ($receiver) {
    var tmp$;
    tmp$ = this.channelOptionList_0.iterator();
    while (tmp$.hasNext()) {
      var channelOption = tmp$.next();
      if (channelOption.channel === $receiver) {
        return channelOption;
      }}
    return null;
  };
  CustomChannelsSettingWindow.prototype.getOption_0 = function ($receiver) {
    var tmp$;
    return (tmp$ = this.getChannelOption_0($receiver)) != null ? tmp$.option : null;
  };
  CustomChannelsSettingWindow.prototype.getChannelOption_1 = function ($receiver) {
    var tmp$;
    tmp$ = this.channelOptionList_0.iterator();
    while (tmp$.hasNext()) {
      var channelOption = tmp$.next();
      if (channelOption.option === $receiver) {
        return channelOption;
      }}
    return null;
  };
  CustomChannelsSettingWindow.prototype.getChannel_0 = function ($receiver) {
    var tmp$;
    return (tmp$ = this.getChannelOption_1($receiver)) != null ? tmp$.channel : null;
  };
  CustomChannelsSettingWindow.prototype.changeNumber_0 = function ($receiver, changeToNumber) {
    var changedNumberChannel = new Channel(changeToNumber, $receiver.name, $receiver.sources, $receiver.information);
    return new CustomChannelsSettingWindow$ChannelOption(changedNumberChannel, this.createChannelOption_0(changedNumberChannel));
  };
  CustomChannelsSettingWindow.prototype.changeNumber_1 = function ($receiver, changeToNumber) {
    var tmp$;
    return (tmp$ = this.getChannel_0($receiver)) != null ? this.changeNumber_0(tmp$, changeToNumber) : null;
  };
  CustomChannelsSettingWindow.prototype.indexOfOrNull_0 = function ($receiver, option) {
    var tmp$;
    var options = $receiver.options;
    tmp$ = options.length;
    for (var i = 0; i < tmp$; i++) {
      if (options[i] === option) {
        return i;
      }}
    return null;
  };
  CustomChannelsSettingWindow.prototype.remove_0 = function ($receiver, option) {
    var tmp$;
    tmp$ = this.indexOfOrNull_0($receiver, option);
    if (tmp$ == null) {
      return false;
    }$receiver.remove(tmp$);
    return true;
  };
  function CustomChannelsSettingWindow$sort$lambda(channelOption) {
    return channelOption.channel.number;
  }
  CustomChannelsSettingWindow.prototype.sort_0 = function ($receiver) {
    var tmp$;
    var $receiver_0 = this.channelOptionList_0;
    if ($receiver_0.size > 1) {
      sortWith($receiver_0, new Comparator$ObjectLiteral_0(compareByDescending$lambda(CustomChannelsSettingWindow$sort$lambda)));
    }$receiver.innerHTML = '';
    tmp$ = this.channelOptionList_0.iterator();
    while (tmp$.hasNext()) {
      var channelOption = tmp$.next();
      $receiver.appendChild(channelOption.option);
    }
  };
  CustomChannelsSettingWindow.prototype.select_0 = function ($receiver, option) {
    option.selected = true;
  };
  function CustomChannelsSettingWindow_init$lambda$lambda(closure$dialogBox, this$CustomChannelsSettingWindow) {
    return function () {
      var goToSetChannel = closure$dialogBox.getEditChannelDialogBoxInformation();
      var goToSetOption = this$CustomChannelsSettingWindow.createChannelOption_0(goToSetChannel);
      this$CustomChannelsSettingWindow.channelOptionList_0.add_11rb$(new CustomChannelsSettingWindow$ChannelOption(goToSetChannel, goToSetOption));
      CustomChannels_getInstance().add_e3jjlp$(goToSetChannel);
      this$CustomChannelsSettingWindow.channelsSelect_0.add(goToSetOption);
      this$CustomChannelsSettingWindow.sort_0(this$CustomChannelsSettingWindow.channelsSelect_0);
      this$CustomChannelsSettingWindow.select_0(this$CustomChannelsSettingWindow.channelsSelect_0, goToSetOption);
      this$CustomChannelsSettingWindow.saveCustomChannels_0();
    };
  }
  function CustomChannelsSettingWindow_init$lambda(this$CustomChannelsSettingWindow) {
    return function (event) {
      var dialogBox = new CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox();
      dialogBox.okButtonScript = CustomChannelsSettingWindow_init$lambda$lambda(dialogBox, this$CustomChannelsSettingWindow);
    };
  }
  function CustomChannelsSettingWindow_init$lambda_0(this$CustomChannelsSettingWindow) {
    return function (event) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      var options = this$CustomChannelsSettingWindow.channelsSelect_0.selectedOptions;
      tmp$ = options.length;
      for (var i = 0; i < tmp$; i++) {
        tmp$_0 = options[i];
        if (tmp$_0 == null) {
          return;
        }tmp$_2 = this$CustomChannelsSettingWindow.getChannelOption_1(Kotlin.isType(tmp$_1 = tmp$_0, HTMLOptionElement) ? tmp$_1 : throwCCE());
        if (tmp$_2 == null) {
          return;
        }var goToRemoveChannelOption = tmp$_2;
        this$CustomChannelsSettingWindow.channelOptionList_0.remove_11rb$(goToRemoveChannelOption);
        CustomChannels_getInstance().remove_e3jjlp$(goToRemoveChannelOption.channel);
        this$CustomChannelsSettingWindow.remove_0(this$CustomChannelsSettingWindow.channelsSelect_0, goToRemoveChannelOption.option);
        this$CustomChannelsSettingWindow.saveCustomChannels_0();
      }
    };
  }
  function CustomChannelsSettingWindow_init$lambda$lambda_0(closure$selectedOption, this$CustomChannelsSettingWindow) {
    return function () {
      var tmp$, tmp$_0;
      var number = ((tmp$_0 = (tmp$ = this$CustomChannelsSettingWindow.getChannel_0(closure$selectedOption)) != null ? tmp$.number : null) != null ? tmp$_0 : -1) + 1 | 0;
      if (-1 < number) {
        return -1;
      } else {
        return number;
      }
    };
  }
  function CustomChannelsSettingWindow_init$lambda_1(this$CustomChannelsSettingWindow) {
    return function (event) {
      var tmp$, tmp$_0, tmp$_1;
      var selectedOption = Kotlin.isType(tmp$ = this$CustomChannelsSettingWindow.channelsSelect_0.selectedOptions[0], HTMLOptionElement) ? tmp$ : throwCCE();
      tmp$_0 = this$CustomChannelsSettingWindow.getChannelOption_1(selectedOption);
      if (tmp$_0 == null) {
        return;
      }var currentChannelOption = tmp$_0;
      tmp$_1 = this$CustomChannelsSettingWindow.changeNumber_1(selectedOption, CustomChannelsSettingWindow_init$lambda$lambda_0(selectedOption, this$CustomChannelsSettingWindow)());
      if (tmp$_1 == null) {
        return;
      }var goToSetChannelOption = tmp$_1;
      var goToSetChannelOnChannelOptionListIndex = this$CustomChannelsSettingWindow.channelOptionList_0.indexOfOrNull_11rb$(currentChannelOption);
      if (goToSetChannelOnChannelOptionListIndex != null) {
        this$CustomChannelsSettingWindow.channelOptionList_0.set_wxm5ur$(goToSetChannelOnChannelOptionListIndex, goToSetChannelOption);
      }var goToSetChannelOnChannelsIndex = channels.indexOfOrNull_11rb$(currentChannelOption.channel);
      if (goToSetChannelOnChannelsIndex != null) {
        CustomChannels_getInstance().set_506v0t$(goToSetChannelOnChannelsIndex, goToSetChannelOption.channel);
      }var goToSetChannelOnChannelsSelectIndex = this$CustomChannelsSettingWindow.indexOfOrNull_0(this$CustomChannelsSettingWindow.channelsSelect_0, currentChannelOption.option);
      if (goToSetChannelOnChannelsSelectIndex != null) {
        this$CustomChannelsSettingWindow.channelsSelect_0[goToSetChannelOnChannelsSelectIndex] = goToSetChannelOption.option;
      }this$CustomChannelsSettingWindow.sort_0(this$CustomChannelsSettingWindow.channelsSelect_0);
      this$CustomChannelsSettingWindow.select_0(this$CustomChannelsSettingWindow.channelsSelect_0, goToSetChannelOption.option);
      this$CustomChannelsSettingWindow.saveCustomChannels_0();
    };
  }
  function CustomChannelsSettingWindow_init$lambda_2(this$CustomChannelsSettingWindow) {
    return function (event) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
      var selectedOption = Kotlin.isType(tmp$ = this$CustomChannelsSettingWindow.channelsSelect_0.selectedOptions[0], HTMLOptionElement) ? tmp$ : throwCCE();
      tmp$_0 = this$CustomChannelsSettingWindow.getChannelOption_1(selectedOption);
      if (tmp$_0 == null) {
        return;
      }var currentChannelOption = tmp$_0;
      tmp$_3 = ((tmp$_2 = (tmp$_1 = this$CustomChannelsSettingWindow.getChannel_0(selectedOption)) != null ? tmp$_1.number : null) != null ? tmp$_2 : 0) - 1 | 0;
      tmp$_4 = this$CustomChannelsSettingWindow.changeNumber_1(selectedOption, tmp$_3);
      if (tmp$_4 == null) {
        return;
      }var goToSetChannelOption = tmp$_4;
      var goToSetChannelOnChannelOptionListIndex = this$CustomChannelsSettingWindow.channelOptionList_0.indexOfOrNull_11rb$(currentChannelOption);
      if (goToSetChannelOnChannelOptionListIndex != null) {
        this$CustomChannelsSettingWindow.channelOptionList_0.set_wxm5ur$(goToSetChannelOnChannelOptionListIndex, goToSetChannelOption);
      }var goToSetChannelOnChannelsIndex = channels.indexOfOrNull_11rb$(currentChannelOption.channel);
      if (goToSetChannelOnChannelsIndex != null) {
        CustomChannels_getInstance().set_506v0t$(goToSetChannelOnChannelsIndex, goToSetChannelOption.channel);
      }var goToSetChannelOnChannelsSelectIndex = this$CustomChannelsSettingWindow.indexOfOrNull_0(this$CustomChannelsSettingWindow.channelsSelect_0, currentChannelOption.option);
      if (goToSetChannelOnChannelsSelectIndex != null) {
        this$CustomChannelsSettingWindow.channelsSelect_0[goToSetChannelOnChannelsSelectIndex] = goToSetChannelOption.option;
      }this$CustomChannelsSettingWindow.sort_0(this$CustomChannelsSettingWindow.channelsSelect_0);
      this$CustomChannelsSettingWindow.select_0(this$CustomChannelsSettingWindow.channelsSelect_0, goToSetChannelOption.option);
      this$CustomChannelsSettingWindow.saveCustomChannels_0();
    };
  }
  function CustomChannelsSettingWindow_init$lambda$lambda_1(closure$selectedOption, this$CustomChannelsSettingWindow, closure$dialogBox) {
    return function () {
      var tmp$;
      tmp$ = this$CustomChannelsSettingWindow.getChannelOption_1(closure$selectedOption);
      if (tmp$ == null) {
        return;
      }var currentChannelOption = tmp$;
      var goToSetChannel = closure$dialogBox.getEditChannelDialogBoxInformation();
      var goToSetOption = this$CustomChannelsSettingWindow.createChannelOption_0(closure$dialogBox.getEditChannelDialogBoxInformation());
      var goToSetChannelOption = new CustomChannelsSettingWindow$ChannelOption(goToSetChannel, goToSetOption);
      var goToSetChannelOnChannelOptionListIndex = this$CustomChannelsSettingWindow.channelOptionList_0.indexOfOrNull_11rb$(currentChannelOption);
      if (goToSetChannelOnChannelOptionListIndex != null) {
        this$CustomChannelsSettingWindow.channelOptionList_0.set_wxm5ur$(goToSetChannelOnChannelOptionListIndex, goToSetChannelOption);
      }var goToSetChannelOnChannelsIndex = channels.indexOfOrNull_11rb$(currentChannelOption.channel);
      if (goToSetChannelOnChannelsIndex != null) {
        CustomChannels_getInstance().set_506v0t$(goToSetChannelOnChannelsIndex, goToSetChannelOption.channel);
      }var goToSetChannelOnChannelsSelectIndex = this$CustomChannelsSettingWindow.indexOfOrNull_0(this$CustomChannelsSettingWindow.channelsSelect_0, currentChannelOption.option);
      if (goToSetChannelOnChannelsSelectIndex != null) {
        this$CustomChannelsSettingWindow.channelsSelect_0[goToSetChannelOnChannelsSelectIndex] = goToSetChannelOption.option;
      }this$CustomChannelsSettingWindow.sort_0(this$CustomChannelsSettingWindow.channelsSelect_0);
      this$CustomChannelsSettingWindow.select_0(this$CustomChannelsSettingWindow.channelsSelect_0, goToSetChannelOption.option);
      this$CustomChannelsSettingWindow.saveCustomChannels_0();
    };
  }
  function CustomChannelsSettingWindow_init$lambda_3(this$CustomChannelsSettingWindow) {
    return function (event) {
      var tmp$, tmp$_0;
      var selectedOption = Kotlin.isType(tmp$ = this$CustomChannelsSettingWindow.channelsSelect_0.selectedOptions[0], HTMLOptionElement) ? tmp$ : throwCCE();
      var selectedChannel = (tmp$_0 = this$CustomChannelsSettingWindow.getChannel_0(selectedOption)) != null ? tmp$_0 : new Channel(-1);
      var dialogBox = new CustomChannelsSettingWindow$CustomChannelEditChannelDialogBox(selectedChannel.toXMLString());
      dialogBox.okButtonScript = CustomChannelsSettingWindow_init$lambda$lambda_1(selectedOption, this$CustomChannelsSettingWindow, dialogBox);
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
    }return CustomChannelsSettingWindow_instance;
  }
  function Dialogue(language, agree, canNotFind, canNotReadData, cannotReceiveChannelSignal, episode, part, poorSignalReception, thisDeviceDoesNotSupportThisChannelSignal, totalEpisode, totalSeason, totalPart, season) {
    Dialogue$Companion_getInstance();
    if (language === void 0)
      language = '';
    if (agree === void 0)
      agree = '';
    if (canNotFind === void 0)
      canNotFind = '';
    if (canNotReadData === void 0)
      canNotReadData = '';
    if (cannotReceiveChannelSignal === void 0)
      cannotReceiveChannelSignal = '';
    if (episode === void 0)
      episode = '';
    if (part === void 0)
      part = '';
    if (poorSignalReception === void 0)
      poorSignalReception = '';
    if (thisDeviceDoesNotSupportThisChannelSignal === void 0)
      thisDeviceDoesNotSupportThisChannelSignal = '';
    if (totalEpisode === void 0)
      totalEpisode = '';
    if (totalSeason === void 0)
      totalSeason = '';
    if (totalPart === void 0)
      totalPart = '';
    if (season === void 0)
      season = '';
    this.language = language;
    this.agree = agree;
    this.canNotFind = canNotFind;
    this.canNotReadData = canNotReadData;
    this.cannotReceiveChannelSignal = cannotReceiveChannelSignal;
    this.episode = episode;
    this.part = part;
    this.poorSignalReception = poorSignalReception;
    this.thisDeviceDoesNotSupportThisChannelSignal = thisDeviceDoesNotSupportThisChannelSignal;
    this.totalEpisode = totalEpisode;
    this.totalSeason = totalSeason;
    this.totalPart = totalPart;
    this.season = season;
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
      }}
    return 0;
  };
  function Dialogue$Companion$getDialogues$lambda(max, value) {
  }
  function Dialogue$Companion$getDialogues$lambda$ObjectLiteral() {
  }
  Dialogue$Companion$getDialogues$lambda$ObjectLiteral.prototype.onNodeChanged_t4rudg$ = function (preChangeNodeID, postChangeNodeID, preChangeNode, postChangeNode) {
    localStorage.setItem('SelectedLanguage', toString(postChangeNodeID));
  };
  Dialogue$Companion$getDialogues$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ArrayLinkList$OnNodeEventListener]
  };
  function Dialogue$Companion$getDialogues$lambda_0(this$Dialogue$, closure$onLoadedDialogueListener) {
    return function (xmlHttp) {
      var tmp$, tmp$_0, tmp$_1;
      if (xmlHttp.responseText !== '') {
        var dialogues = ArrayLinkList_init_1(JSON.parse(xmlHttp.responseText));
        dialogues.addOnNodeEventListener_ljxrtv$(new Dialogue$Companion$getDialogues$lambda$ObjectLiteral());
        dialogues.designated_za3lpa$((tmp$_0 = (tmp$ = localStorage.getItem('SelectedLanguage')) != null ? toInt(tmp$) : null) != null ? tmp$_0 : 0);
        this$Dialogue$.dialogues_0 = dialogues;
        closure$onLoadedDialogueListener((tmp$_1 = this$Dialogue$.dialogues_0) != null ? tmp$_1 : ArrayLinkList_init([]));
      }};
  }
  function Dialogue$Companion$getDialogues$lambda_1() {
  }
  Dialogue$Companion.prototype.getDialogues_fs1aqo$ = function (onLoadedDialogueListener) {
    var tmp$;
    if (this.dialogues_0 == null) {
      LoadFile_getInstance().load_or1oyb$(Dialogue$Companion$getDialogues$lambda, Dialogue$Companion$getDialogues$lambda_0(this, onLoadedDialogueListener), Dialogue$Companion$getDialogues$lambda_1, ['data/dialogue.json']);
    } else {
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
    }return Dialogue$Companion_instance;
  }
  Dialogue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Dialogue',
    interfaces: []
  };
  function DialogueBox(title, dialogueHTML, okButtonString, okButtonScript, cancelButtonString, cancelButtonScript, titleDiv, dialogueDiv, okButton, cancelButton, dialogueBox, focusOutArea, placeArea) {
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
    if (titleDiv === void 0)
      titleDiv = DialogueBox_init$lambda(title)();
    if (dialogueDiv === void 0)
      dialogueDiv = DialogueBox_init$lambda_0(dialogueHTML)();
    if (okButton === void 0)
      okButton = DialogueBox_init$lambda_1(okButtonString)();
    if (cancelButton === void 0)
      cancelButton = DialogueBox_init$lambda_2(cancelButtonString)();
    if (dialogueBox === void 0)
      dialogueBox = DialogueBox_init$lambda_3(titleDiv, dialogueDiv, okButton, cancelButton)();
    if (focusOutArea === void 0)
      focusOutArea = DialogueBox_init$lambda_4(dialogueBox)();
    if (placeArea === void 0)
      placeArea = DialogueBox_init$lambda_5();
    TabbableUI.call(this, placeArea, $(cancelButton), null);
    this.title = title;
    this.dialogueHTML = dialogueHTML;
    this.okButtonString = okButtonString;
    this.okButtonScript = okButtonScript;
    this.cancelButtonString = cancelButtonString;
    this.cancelButtonScript = cancelButtonScript;
    this.titleDiv_qz7zl2$_0 = titleDiv;
    this.dialogueDiv_j08gec$_0 = dialogueDiv;
    this.okButton_1xhiep$_0 = okButton;
    this.cancelButton_mtr15f$_0 = cancelButton;
    this.dialogueBox_j09lvi$_0 = dialogueBox;
    this.focusOutArea_clvags$_0 = focusOutArea;
    this.placeArea_8uhv9d$_0 = placeArea;
    this.okButton_1xhiep$_0.onclick = DialogueBox_init$lambda_6(this);
    this.cancelButton_mtr15f$_0.onclick = DialogueBox_init$lambda_7(this);
    this.placeArea_8uhv9d$_0.appendChild(this.focusOutArea_clvags$_0);
    this.show_s8ev37$(null);
  }
  DialogueBox.prototype.hide = function () {
    var tmp$;
    TabbableUI.prototype.hide.call(this);
    var dynamicUserInterfaceArea = Kotlin.isType(tmp$ = document.getElementById('dynamicUserInterfaceArea'), HTMLDivElement) ? tmp$ : throwCCE();
    dynamicUserInterfaceArea.removeChild(this.placeArea_8uhv9d$_0);
  };
  function DialogueBox_init$lambda(closure$title) {
    return function () {
      var tmp$;
      var titleDiv = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : throwCCE();
      titleDiv.style.textAlign = 'left';
      titleDiv.innerHTML = closure$title;
      return titleDiv;
    };
  }
  function DialogueBox_init$lambda_0(closure$dialogueHTML) {
    return function () {
      var tmp$;
      var dialogueDiv = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : throwCCE();
      dialogueDiv.innerHTML = closure$dialogueHTML;
      return dialogueDiv;
    };
  }
  function DialogueBox_init$lambda_1(closure$okButtonString) {
    return function () {
      var tmp$;
      var okButton = Kotlin.isType(tmp$ = document.createElement('button'), HTMLButtonElement) ? tmp$ : throwCCE();
      okButton.style.flex = '1';
      okButton.style.color = '#FFF';
      okButton.style.fontWeight = 'bold';
      okButton.style.fontSize = '4vh';
      okButton.innerHTML = closure$okButtonString;
      return okButton;
    };
  }
  function DialogueBox_init$lambda_2(closure$cancelButtonString) {
    return function () {
      var tmp$;
      var cancelButton = Kotlin.isType(tmp$ = document.createElement('button'), HTMLButtonElement) ? tmp$ : throwCCE();
      cancelButton.style.flex = '1';
      cancelButton.style.color = '#FFF';
      cancelButton.style.fontWeight = 'bold';
      cancelButton.style.fontSize = '4vh';
      cancelButton.innerHTML = closure$cancelButtonString;
      return cancelButton;
    };
  }
  function DialogueBox_init$lambda$createFlexArea(elements) {
    var tmp$, tmp$_0;
    var flexArea = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : throwCCE();
    flexArea.style.display = 'flex';
    flexArea.style.width = '100%';
    for (tmp$_0 = 0; tmp$_0 !== elements.length; ++tmp$_0) {
      var element = elements[tmp$_0];
      flexArea.appendChild(element);
    }
    return flexArea;
  }
  function DialogueBox_init$lambda$lambda(event) {
    event.stopPropagation();
  }
  function DialogueBox_init$lambda_3(closure$titleDiv, closure$dialogueDiv, closure$okButton, closure$cancelButton) {
    return function () {
      var tmp$;
      var createFlexArea = DialogueBox_init$lambda$createFlexArea;
      var dialogueBox = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : throwCCE();
      dialogueBox.style.position = 'relative';
      dialogueBox.style.backgroundColor = '#303030';
      dialogueBox.style.cursor = 'auto';
      dialogueBox.onclick = DialogueBox_init$lambda$lambda;
      dialogueBox.appendChild(closure$titleDiv);
      dialogueBox.appendChild(closure$dialogueDiv);
      dialogueBox.appendChild(createFlexArea([closure$okButton, closure$cancelButton]));
      return dialogueBox;
    };
  }
  function DialogueBox_init$lambda_4(closure$dialogueBox) {
    return function () {
      var tmp$;
      var focusOutArea = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : throwCCE();
      focusOutArea.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
      focusOutArea.style.display = 'flex';
      focusOutArea.style.position = 'absolute';
      focusOutArea.style.top = '0';
      focusOutArea.style.bottom = '0';
      focusOutArea.style.left = '0';
      focusOutArea.style.right = '0';
      focusOutArea.style.zIndex = '90';
      focusOutArea.style.alignItems = 'center';
      focusOutArea.style.justifyContent = 'center';
      focusOutArea.appendChild(closure$dialogueBox);
      return focusOutArea;
    };
  }
  function DialogueBox_init$lambda_5() {
    var tmp$, tmp$_0;
    var placeArea = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : throwCCE();
    placeArea.id = 'dialogue' + Random.Default.nextInt_vux9f0$(0, 99999999);
    placeArea.style.display = 'none';
    placeArea.style.position = 'absolute';
    placeArea.style.top = '0';
    placeArea.style.bottom = '0';
    placeArea.style.left = '0';
    placeArea.style.right = '0';
    placeArea.style.zIndex = '90';
    var dynamicUserInterfaceArea = Kotlin.isType(tmp$_0 = document.getElementById('dynamicUserInterfaceArea'), HTMLDivElement) ? tmp$_0 : throwCCE();
    dynamicUserInterfaceArea.appendChild(placeArea);
    return placeArea;
  }
  function DialogueBox_init$lambda_6(this$DialogueBox) {
    return function (event) {
      var tmp$;
      (tmp$ = this$DialogueBox.okButtonScript) != null ? tmp$() : null;
      this$DialogueBox.hide();
    };
  }
  function DialogueBox_init$lambda_7(this$DialogueBox) {
    return function (event) {
      var tmp$;
      (tmp$ = this$DialogueBox.cancelButtonScript) != null ? tmp$() : null;
      this$DialogueBox.hide();
    };
  }
  DialogueBox.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DialogueBox',
    interfaces: [TabbableUI]
  };
  function DocumentStoreWindow() {
    DocumentStoreWindow_instance = this;
    Window.call(this, '\u7A0B\u5F0F\u4E0B\u8F09', '\n            <iframe style="width:100%;height:100%;" frameBorder="0" src="https://drive.google.com/drive/folders/1c8rb7Yrfe8IV_32pSDGF9oP5n-7Qs3PO"><\/iframe>\n        ', void 0, void 0, true);
  }
  DocumentStoreWindow.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DocumentStoreWindow',
    interfaces: [Window]
  };
  var DocumentStoreWindow_instance = null;
  function DocumentStoreWindow_getInstance() {
    if (DocumentStoreWindow_instance === null) {
      new DocumentStoreWindow();
    }return DocumentStoreWindow_instance;
  }
  function EPG() {
    EPG_instance = this;
    var tmp$;
    TabbableUI.call(this, Kotlin.isType(tmp$ = document.getElementById('epg'), HTMLElement) ? tmp$ : throwCCE());
    var tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20, tmp$_21, tmp$_22, tmp$_23;
    this.epg_0 = Kotlin.isType(tmp$_0 = document.getElementById('epg'), HTMLElement) ? tmp$_0 : throwCCE();
    this.displayCurrentDateBox_0 = Kotlin.isType(tmp$_1 = document.getElementById('epgDisplayCurrentDateBox'), HTMLElement) ? tmp$_1 : throwCCE();
    this.hideButton_0 = Kotlin.isType(tmp$_2 = document.getElementById('epgHideButton'), HTMLElement) ? tmp$_2 : throwCCE();
    this.programmeInformationTitle_0 = Kotlin.isType(tmp$_3 = document.getElementById('epgProgrammeInformationTitle'), HTMLElement) ? tmp$_3 : throwCCE();
    this.programmeInformationSubTitle_0 = Kotlin.isType(tmp$_4 = document.getElementById('epgProgrammeInformationSubTitle'), HTMLElement) ? tmp$_4 : throwCCE();
    this.programmeInformationDesc_0 = Kotlin.isType(tmp$_5 = document.getElementById('epgProgrammeInformationDesc'), HTMLElement) ? tmp$_5 : throwCCE();
    this.programmeInformationCredit_0 = Kotlin.isType(tmp$_6 = document.getElementById('epgProgrammeInformationCredit'), HTMLElement) ? tmp$_6 : throwCCE();
    this.programmeInformationDate_0 = Kotlin.isType(tmp$_7 = document.getElementById('epgProgrammeInformationDate'), HTMLElement) ? tmp$_7 : throwCCE();
    this.programmeInformationCategory_0 = Kotlin.isType(tmp$_8 = document.getElementById('epgProgrammeInformationCategory'), HTMLElement) ? tmp$_8 : throwCCE();
    this.programmeInformationKeyword_0 = Kotlin.isType(tmp$_9 = document.getElementById('epgProgrammeInformationKeyword'), HTMLElement) ? tmp$_9 : throwCCE();
    this.programmeInformationLanguage_0 = Kotlin.isType(tmp$_10 = document.getElementById('epgProgrammeInformationLanguage'), HTMLElement) ? tmp$_10 : throwCCE();
    this.programmeInformationOrigLanguage_0 = Kotlin.isType(tmp$_11 = document.getElementById('epgProgrammeInformationOrigLanguage'), HTMLElement) ? tmp$_11 : throwCCE();
    this.programmeInformationLength_0 = Kotlin.isType(tmp$_12 = document.getElementById('epgProgrammeInformationLength'), HTMLElement) ? tmp$_12 : throwCCE();
    this.programmeInformationIcon_0 = Kotlin.isType(tmp$_13 = document.getElementById('epgProgrammeInformationIcon'), HTMLImageElement) ? tmp$_13 : throwCCE();
    this.programmeInformationUrl_0 = Kotlin.isType(tmp$_14 = document.getElementById('epgProgrammeInformationUrl'), HTMLElement) ? tmp$_14 : throwCCE();
    this.programmeInformationCountry_0 = Kotlin.isType(tmp$_15 = document.getElementById('epgProgrammeInformationCountry'), HTMLElement) ? tmp$_15 : throwCCE();
    this.programmeInformationEpisodeNum_0 = Kotlin.isType(tmp$_16 = document.getElementById('epgProgrammeInformationEpisodeNum'), HTMLElement) ? tmp$_16 : throwCCE();
    this.programmeInformationPreviouslyShown_0 = Kotlin.isType(tmp$_17 = document.getElementById('epgProgrammeInformationPreviouslyShown'), HTMLElement) ? tmp$_17 : throwCCE();
    this.programmeInformationBroadcastDateSlot_0 = Kotlin.isType(tmp$_18 = document.getElementById('epgProgrammeInformationBroadcastDateSlot'), HTMLElement) ? tmp$_18 : throwCCE();
    this.programmeInformationBroadcastTimeSlot_0 = Kotlin.isType(tmp$_19 = document.getElementById('epgProgrammeInformationBroadcastTimeSlot'), HTMLElement) ? tmp$_19 : throwCCE();
    this.programmeListCurrentDisplayDate_0 = Kotlin.isType(tmp$_20 = document.getElementById('epgProgrammeListCurrentDisplayDate'), HTMLElement) ? tmp$_20 : throwCCE();
    this.programmeListTimeLine_0 = Kotlin.isType(tmp$_21 = document.getElementById('epgProgrammeListTimeLine'), HTMLElement) ? tmp$_21 : throwCCE();
    this.programmeListChannelList_0 = Kotlin.isType(tmp$_22 = document.getElementById('epgProgrammeListChannelList'), HTMLElement) ? tmp$_22 : throwCCE();
    this.programmeListTable_0 = Kotlin.isType(tmp$_23 = document.getElementById('epgProgrammeListTable'), HTMLElement) ? tmp$_23 : throwCCE();
    this.tabIndexZ_0 = 9;
    this.updateDisplayCurrentDateBoxTimer_0 = 0;
    this.fromDate_0 = this.nowDateWithoutMinute_0();
    this.toDate_0 = this.addDay_0(this.nowDateWithoutMinute_0(), 2);
    this.epg_0.style.cursor = 'auto';
    this.hideButton_0.onclick = EPG_init$lambda(this);
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
    } else {
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
    }if (((tmp$_11 = (tmp$_10 = (tmp$_9 = programme.credits) != null ? tmp$_9.actors : null) != null ? tmp$_10.size : null) != null ? tmp$_11 : 0) > 0) {
      tmp$_13 = this.programmeInformationCredit_0;
      tmp$_14 = tmp$_13.innerHTML;
      if (equals(this.programmeInformationCredit_0.innerHTML, '')) {
        tmp$_12 = '';
      } else {
        tmp$_12 = '<br/>';
      }
      tmp$_13.innerHTML = tmp$_14 + (tmp$_12 + '\u6F14\u54E1: ');
      tmp$_18 = (tmp$_17 = (tmp$_16 = (tmp$_15 = programme.credits) != null ? tmp$_15.actors : null) != null ? tmp$_16.size : null) != null ? tmp$_17 : 0;
      for (var i_0 = 0; i_0 < tmp$_18; i_0++) {
        tmp$_27 = this.programmeInformationCredit_0;
        tmp$_27.innerHTML = tmp$_27.innerHTML + (((tmp$_22 = (tmp$_21 = (tmp$_20 = (tmp$_19 = programme.credits) != null ? tmp$_19.actors : null) != null ? getOrNull(tmp$_20, i_0) : null) != null ? tmp$_21.actor : null) != null ? tmp$_22 : '') + '-' + toString((tmp$_26 = (tmp$_25 = (tmp$_24 = (tmp$_23 = programme.credits) != null ? tmp$_23.actors : null) != null ? getOrNull(tmp$_24, i_0) : null) != null ? tmp$_25.role : null) != null ? tmp$_26 : '') + ' ');
      }
    }if (((tmp$_30 = (tmp$_29 = (tmp$_28 = programme.credits) != null ? tmp$_28.writers : null) != null ? tmp$_29.size : null) != null ? tmp$_30 : 0) > 0) {
      tmp$_32 = this.programmeInformationCredit_0;
      tmp$_33 = tmp$_32.innerHTML;
      if (equals(this.programmeInformationCredit_0.innerHTML, '')) {
        tmp$_31 = '';
      } else {
        tmp$_31 = '<br/>';
      }
      tmp$_32.innerHTML = tmp$_33 + (tmp$_31 + '\u7DE8\u5287: ');
      tmp$_37 = (tmp$_36 = (tmp$_35 = (tmp$_34 = programme.credits) != null ? tmp$_34.writers : null) != null ? tmp$_35.size : null) != null ? tmp$_36 : 0;
      for (var i_1 = 0; i_1 < tmp$_37; i_1++) {
        this.programmeInformationCredit_0.innerHTML = this.programmeInformationCredit_0.innerHTML + (((tmp$_40 = (tmp$_39 = (tmp$_38 = programme.credits) != null ? tmp$_38.writers : null) != null ? getOrNull(tmp$_39, i_1) : null) != null ? tmp$_40 : '') + ' ');
      }
    }if (((tmp$_43 = (tmp$_42 = (tmp$_41 = programme.credits) != null ? tmp$_41.adapters : null) != null ? tmp$_42.size : null) != null ? tmp$_43 : 0) > 0) {
      tmp$_45 = this.programmeInformationCredit_0;
      tmp$_46 = tmp$_45.innerHTML;
      if (equals(this.programmeInformationCredit_0.innerHTML, '')) {
        tmp$_44 = '';
      } else {
        tmp$_44 = '<br/>';
      }
      tmp$_45.innerHTML = tmp$_46 + (tmp$_44 + '\u6539\u7DE8: ');
      tmp$_50 = (tmp$_49 = (tmp$_48 = (tmp$_47 = programme.credits) != null ? tmp$_47.adapters : null) != null ? tmp$_48.size : null) != null ? tmp$_49 : 0;
      for (var i_2 = 0; i_2 < tmp$_50; i_2++) {
        this.programmeInformationCredit_0.innerHTML = this.programmeInformationCredit_0.innerHTML + (((tmp$_53 = (tmp$_52 = (tmp$_51 = programme.credits) != null ? tmp$_51.adapters : null) != null ? getOrNull(tmp$_52, i_2) : null) != null ? tmp$_53 : '') + ' ');
      }
    }if (((tmp$_56 = (tmp$_55 = (tmp$_54 = programme.credits) != null ? tmp$_54.producers : null) != null ? tmp$_55.size : null) != null ? tmp$_56 : 0) > 0) {
      tmp$_58 = this.programmeInformationCredit_0;
      tmp$_59 = tmp$_58.innerHTML;
      if (equals(this.programmeInformationCredit_0.innerHTML, '')) {
        tmp$_57 = '';
      } else {
        tmp$_57 = '<br/>';
      }
      tmp$_58.innerHTML = tmp$_59 + (tmp$_57 + '\u88FD\u7247\u4EBA: ');
      tmp$_63 = (tmp$_62 = (tmp$_61 = (tmp$_60 = programme.credits) != null ? tmp$_60.producers : null) != null ? tmp$_61.size : null) != null ? tmp$_62 : 0;
      for (var i_3 = 0; i_3 < tmp$_63; i_3++) {
        this.programmeInformationCredit_0.innerHTML = this.programmeInformationCredit_0.innerHTML + (((tmp$_66 = (tmp$_65 = (tmp$_64 = programme.credits) != null ? tmp$_64.producers : null) != null ? getOrNull(tmp$_65, i_3) : null) != null ? tmp$_66 : '') + ' ');
      }
    }if (((tmp$_69 = (tmp$_68 = (tmp$_67 = programme.credits) != null ? tmp$_67.composers : null) != null ? tmp$_68.size : null) != null ? tmp$_69 : 0) > 0) {
      tmp$_71 = this.programmeInformationCredit_0;
      tmp$_72 = tmp$_71.innerHTML;
      if (equals(this.programmeInformationCredit_0.innerHTML, '')) {
        tmp$_70 = '';
      } else {
        tmp$_70 = '<br/>';
      }
      tmp$_71.innerHTML = tmp$_72 + (tmp$_70 + '\u4F5C\u66F2\u5BB6: ');
      tmp$_76 = (tmp$_75 = (tmp$_74 = (tmp$_73 = programme.credits) != null ? tmp$_73.composers : null) != null ? tmp$_74.size : null) != null ? tmp$_75 : 0;
      for (var i_4 = 0; i_4 < tmp$_76; i_4++) {
        this.programmeInformationCredit_0.innerHTML = this.programmeInformationCredit_0.innerHTML + (((tmp$_79 = (tmp$_78 = (tmp$_77 = programme.credits) != null ? tmp$_77.composers : null) != null ? getOrNull(tmp$_78, i_4) : null) != null ? tmp$_79 : '') + ' ');
      }
    }if (((tmp$_82 = (tmp$_81 = (tmp$_80 = programme.credits) != null ? tmp$_80.editors : null) != null ? tmp$_81.size : null) != null ? tmp$_82 : 0) > 0) {
      tmp$_84 = this.programmeInformationCredit_0;
      tmp$_85 = tmp$_84.innerHTML;
      if (equals(this.programmeInformationCredit_0.innerHTML, '')) {
        tmp$_83 = '';
      } else {
        tmp$_83 = '<br/>';
      }
      tmp$_84.innerHTML = tmp$_85 + (tmp$_83 + '\u7DE8\u8F2F: ');
      tmp$_89 = (tmp$_88 = (tmp$_87 = (tmp$_86 = programme.credits) != null ? tmp$_86.editors : null) != null ? tmp$_87.size : null) != null ? tmp$_88 : 0;
      for (var i_5 = 0; i_5 < tmp$_89; i_5++) {
        this.programmeInformationCredit_0.innerHTML = this.programmeInformationCredit_0.innerHTML + (((tmp$_92 = (tmp$_91 = (tmp$_90 = programme.credits) != null ? tmp$_90.editors : null) != null ? getOrNull(tmp$_91, i_5) : null) != null ? tmp$_92 : '') + ' ');
      }
    }if (((tmp$_95 = (tmp$_94 = (tmp$_93 = programme.credits) != null ? tmp$_93.presenters : null) != null ? tmp$_94.size : null) != null ? tmp$_95 : 0) > 0) {
      tmp$_97 = this.programmeInformationCredit_0;
      tmp$_98 = tmp$_97.innerHTML;
      if (equals(this.programmeInformationCredit_0.innerHTML, '')) {
        tmp$_96 = '';
      } else {
        tmp$_96 = '<br/>';
      }
      tmp$_97.innerHTML = tmp$_98 + (tmp$_96 + '\u4E3B\u6301: ');
      tmp$_102 = (tmp$_101 = (tmp$_100 = (tmp$_99 = programme.credits) != null ? tmp$_99.presenters : null) != null ? tmp$_100.size : null) != null ? tmp$_101 : 0;
      for (var i_6 = 0; i_6 < tmp$_102; i_6++) {
        this.programmeInformationCredit_0.innerHTML = this.programmeInformationCredit_0.innerHTML + (((tmp$_105 = (tmp$_104 = (tmp$_103 = programme.credits) != null ? tmp$_103.presenters : null) != null ? getOrNull(tmp$_104, i_6) : null) != null ? tmp$_105 : '') + ' ');
      }
    }if (((tmp$_108 = (tmp$_107 = (tmp$_106 = programme.credits) != null ? tmp$_106.commentators : null) != null ? tmp$_107.size : null) != null ? tmp$_108 : 0) > 0) {
      tmp$_110 = this.programmeInformationCredit_0;
      tmp$_111 = tmp$_110.innerHTML;
      if (equals(this.programmeInformationCredit_0.innerHTML, '')) {
        tmp$_109 = '';
      } else {
        tmp$_109 = '<br/>';
      }
      tmp$_110.innerHTML = tmp$_111 + (tmp$_109 + '\u8A55\u8AD6\u54E1: ');
      tmp$_115 = (tmp$_114 = (tmp$_113 = (tmp$_112 = programme.credits) != null ? tmp$_112.commentators : null) != null ? tmp$_113.size : null) != null ? tmp$_114 : 0;
      for (var i_7 = 0; i_7 < tmp$_115; i_7++) {
        this.programmeInformationCredit_0.innerHTML = this.programmeInformationCredit_0.innerHTML + (((tmp$_118 = (tmp$_117 = (tmp$_116 = programme.credits) != null ? tmp$_116.commentators : null) != null ? getOrNull(tmp$_117, i_7) : null) != null ? tmp$_118 : '') + ' ');
      }
    }if (((tmp$_121 = (tmp$_120 = (tmp$_119 = programme.credits) != null ? tmp$_119.guests : null) != null ? tmp$_120.size : null) != null ? tmp$_121 : 0) > 0) {
      tmp$_123 = this.programmeInformationCredit_0;
      tmp$_124 = tmp$_123.innerHTML;
      if (equals(this.programmeInformationCredit_0.innerHTML, '')) {
        tmp$_122 = '';
      } else {
        tmp$_122 = '<br/>';
      }
      tmp$_123.innerHTML = tmp$_124 + (tmp$_122 + '\u5609\u8CD3: ');
      tmp$_128 = (tmp$_127 = (tmp$_126 = (tmp$_125 = programme.credits) != null ? tmp$_125.guests : null) != null ? tmp$_126.size : null) != null ? tmp$_127 : 0;
      for (var i_8 = 0; i_8 < tmp$_128; i_8++) {
        this.programmeInformationCredit_0.innerHTML = this.programmeInformationCredit_0.innerHTML + (((tmp$_131 = (tmp$_130 = (tmp$_129 = programme.credits) != null ? tmp$_129.guests : null) != null ? getOrNull(tmp$_130, i_8) : null) != null ? tmp$_131 : '') + ' ');
      }
    }};
  EPG.prototype.setProgrammeInformationDate_0 = function (programme) {
    this.programmeInformationDate_0.innerHTML = '';
    var date = programme.date;
    if (date != null) {
      this.programmeInformationDate_0.innerHTML = '\u767C\u884C\u671F: ' + date;
    }};
  EPG.prototype.setProgrammeInformationCategory_0 = function (programme) {
    this.programmeInformationCategory_0.innerHTML = '';
    var category = programme.category;
    if (category != null) {
      this.programmeInformationCategory_0.innerHTML = '\u7247\u985E: ' + toString(category);
    }};
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
    }};
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
        }this.programmeInformationLanguage_0.innerHTML = this.programmeInformationLanguage_0.innerHTML + language;
      }
      this.programmeInformationLanguage_0.innerHTML = this.programmeInformationLanguage_0.innerHTML + ']';
    }};
  EPG.prototype.setProgrammeInformationOrigLanguage_0 = function (programme) {
    this.programmeInformationOrigLanguage_0.innerHTML = '';
    var origLanguage = programme.origLanguage;
    if (origLanguage != null) {
      this.programmeInformationOrigLanguage_0.innerHTML = '\u539F\u8A9E\u8A00: ' + toString(origLanguage);
    }};
  EPG.prototype.setProgrammeInformationLength_0 = function (programme) {
    var tmp$, tmp$_0, tmp$_1;
    this.programmeInformationLength_0.innerHTML = '';
    var length = (tmp$ = programme.length) != null ? tmp$.length : null;
    if (length != null) {
      this.programmeInformationLength_0.innerHTML = '\u7247\u9577: ' + length + toString((tmp$_1 = (tmp$_0 = programme.length) != null ? tmp$_0.units : null) != null ? tmp$_1 : '');
    }};
  EPG.prototype.setProgrammeInformationIcon_0 = function (programme) {
    var tmp$, tmp$_0;
    this.programmeInformationIcon_0.src = (tmp$_0 = (tmp$ = programme.icon) != null ? tmp$.src : null) != null ? tmp$_0 : 'img/nullIcon.png';
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
    }};
  function EPG$setProgrammeInformationEpisodeNum$lambda(closure$programme, this$EPG) {
    return function (dialogues) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20, tmp$_21, tmp$_22;
      var episodeInnerHTML = '';
      var season = (tmp$ = closure$programme.episodeNum) != null ? tmp$.getSeason() : null;
      if (season != null) {
        episodeInnerHTML += (tmp$_2 = (tmp$_1 = (tmp$_0 = dialogues.node) != null ? tmp$_0.season : null) != null ? replace(tmp$_1, '${season}', season.toString()) : null) != null ? tmp$_2 : '';
      }var episode = (tmp$_3 = closure$programme.episodeNum) != null ? tmp$_3.getEpisode() : null;
      if (episode != null) {
        episodeInnerHTML += (tmp$_6 = (tmp$_5 = (tmp$_4 = dialogues.node) != null ? tmp$_4.episode : null) != null ? replace(tmp$_5, '${episode}', episode.toString()) : null) != null ? tmp$_6 : '';
      }var part = (tmp$_7 = closure$programme.episodeNum) != null ? tmp$_7.getPart() : null;
      if (part != null) {
        episodeInnerHTML += (tmp$_10 = (tmp$_9 = (tmp$_8 = dialogues.node) != null ? tmp$_8.part : null) != null ? replace(tmp$_9, '${part}', part.toString()) : null) != null ? tmp$_10 : '';
      }var totalSeason = (tmp$_11 = closure$programme.episodeNum) != null ? tmp$_11.getTotalSeason() : null;
      if (totalSeason != null) {
        episodeInnerHTML += (tmp$_14 = (tmp$_13 = (tmp$_12 = dialogues.node) != null ? tmp$_12.totalSeason : null) != null ? replace(tmp$_13, '${totalSeason}', totalSeason.toString()) : null) != null ? tmp$_14 : '';
      }var totalEpisode = (tmp$_15 = closure$programme.episodeNum) != null ? tmp$_15.getTotalEpisode() : null;
      if (totalEpisode != null) {
        episodeInnerHTML += (tmp$_18 = (tmp$_17 = (tmp$_16 = dialogues.node) != null ? tmp$_16.totalEpisode : null) != null ? replace(tmp$_17, '${totalEpisode}', totalEpisode.toString()) : null) != null ? tmp$_18 : '';
      }var totalPart = (tmp$_19 = closure$programme.episodeNum) != null ? tmp$_19.getTotalPart() : null;
      if (totalPart != null) {
        episodeInnerHTML += (tmp$_22 = (tmp$_21 = (tmp$_20 = dialogues.node) != null ? tmp$_20.totalPart : null) != null ? replace(tmp$_21, '${totalPart}', totalPart.toString()) : null) != null ? tmp$_22 : '';
      }this$EPG.programmeInformationEpisodeNum_0.innerHTML = episodeInnerHTML;
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
    }var previouslyShownChannel = (tmp$_1 = programme.previouslyShown) != null ? tmp$_1.channel : null;
    if (previouslyShownChannel != null) {
      this.programmeInformationPreviouslyShown_0.innerHTML = this.programmeInformationPreviouslyShown_0.innerHTML + ('\u4E0A\u6B21\u64AD\u653E\u983B\u9053: ' + previouslyShownChannel);
    }};
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
      line.appendChild(this.newProgrammeListBlock_0('8vh', 'channelNumber', '#222', toStringBackwardZeroPadding(channel.number, 3)));
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
    } else {
      tmp$ = this.fromDate_0;
    }
    var addProgrammeFromTime = tmp$;
    if (programme.stop.getTime() < this.toDate_0.getTime()) {
      tmp$_0 = programme.stop;
    } else {
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
      }var id = 'channel' + closure$channel.number + 'ProgrammeTimeLine';
      var timeLine = Kotlin.isType(tmp$ = document.getElementById(id), HTMLDivElement) ? tmp$ : throwCCE();
      timeLine.innerHTML = '';
      var currentSettedLastTime = this$EPG.fromDate_0;
      var nextProgrammeStartTime = this$EPG.fromDate_0;
      while (currentSettedLastTime.getTime() < this$EPG.toDate_0.getTime()) {
        var addToShowProgramme = xmltv.programmes.getProgrammeByTime_qjzqsm$(currentSettedLastTime);
        if (addToShowProgramme != null) {
          nextProgrammeStartTime = addToShowProgramme.stop;
        } else {
          addToShowProgramme = xmltv.programmes.getClosestNextProgrammeByTime_qjzqsm$(currentSettedLastTime);
          if (addToShowProgramme != null) {
            if (addToShowProgramme.start.getTime() < this$EPG.toDate_0.getTime()) {
              nextProgrammeStartTime = addToShowProgramme.stop;
            } else {
              nextProgrammeStartTime = this$EPG.toDate_0;
            }
          } else {
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
      } else {
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
  function EPG$syncScroll$lambda(event) {
    $('#epgProgrammeListChannelList').scrollTop($(this).scrollTop());
    $('#epgProgrammeListTimeLine').scrollLeft($(this).scrollLeft());
  }
  EPG.prototype.syncScroll_0 = function () {
    $('#epgProgrammeListTable').on('scroll', EPG$syncScroll$lambda);
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
  EPG.prototype.show_s8ev37$ = function (showTime) {
    TabbableUI.prototype.show_s8ev37$.call(this, showTime);
    this.setDisplayCurrentDateBox_0();
    this.setProgrammeList_0();
  };
  EPG.prototype.hide = function () {
    TabbableUI.prototype.hide.call(this);
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
    interfaces: [TabbableUI]
  };
  var EPG_instance = null;
  function EPG_getInstance() {
    if (EPG_instance === null) {
      new EPG();
    }return EPG_instance;
  }
  function EnteringNumberBox() {
    EnteringNumberBox_instance = this;
    var tmp$;
    UserInterface.call(this, Kotlin.isType(tmp$ = document.getElementById('enteringNumberBox'), HTMLElement) ? tmp$ : throwCCE());
    this.enteringNumberBox_0 = document.getElementById('enteringNumberBox');
    this.text_0 = document.getElementById('enteringNumberBoxText');
    this.enteringNumber_0 = '';
    this.enteringMinus_0 = '';
    this.enteringNumberWaitingTime_0 = 3500;
    this.enteringNumberDirectTime_0 = 500;
    this.enteringNumberWaitingTimer_v3wr9j$_0 = 0;
  }
  EnteringNumberBox.prototype.update = function () {
    this.text_0.innerHTML = this.enteringMinus_0 + this.enteringNumber_0;
  };
  EnteringNumberBox.prototype.show_s8ev37$ = function (showTime) {
    this.update();
    UserInterface.prototype.show_s8ev37$.call(this, showTime);
  };
  EnteringNumberBox.prototype.enteringNumberToDesignatedChannelRun_0 = function () {
    this.hide();
    var channelNumber = toIntOrNull(this.enteringMinus_0 + this.enteringNumber_0);
    if (channelNumber != null) {
      designatedByChannelNumber(channels, channelNumber);
    }this.enteringNumber_0 = '';
    this.enteringMinus_0 = '';
  };
  Object.defineProperty(EnteringNumberBox.prototype, 'enteringNumberWaitingTimer_0', {
    get: function () {
      return this.enteringNumberWaitingTimer_v3wr9j$_0;
    },
    set: function (value) {
      window.clearTimeout(this.enteringNumberWaitingTimer_v3wr9j$_0);
      this.enteringNumberWaitingTimer_v3wr9j$_0 = value;
    }
  });
  function EnteringNumberBox$enter$lambda(this$EnteringNumberBox) {
    return function () {
      this$EnteringNumberBox.enteringNumberToDesignatedChannelRun_0();
    };
  }
  EnteringNumberBox.prototype.enter_61zpoe$ = function (numberString) {
    var tmp$;
    if (this.enteringNumber_0.length < 3) {
      var number = toIntOrNull(numberString);
      if (number != null) {
        this.enteringNumber_0 += number;
      } else if (equals(numberString, '-')) {
        if (equals(this.enteringMinus_0, '')) {
          this.enteringMinus_0 = '-';
        } else {
          this.enteringMinus_0 = '';
        }
      }this.show_s8ev37$(null);
      if (this.enteringNumber_0.length < 3) {
        tmp$ = this.enteringNumberWaitingTime_0;
      } else {
        tmp$ = this.enteringNumberDirectTime_0;
      }
      this.enteringNumberWaitingTimer_0 = window.setTimeout(EnteringNumberBox$enter$lambda(this), tmp$);
    }};
  EnteringNumberBox.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'EnteringNumberBox',
    interfaces: [UserInterface]
  };
  var EnteringNumberBox_instance = null;
  function EnteringNumberBox_getInstance() {
    if (EnteringNumberBox_instance === null) {
      new EnteringNumberBox();
    }return EnteringNumberBox_instance;
  }
  function FeedbackWebWindow() {
    FeedbackWebWindow_instance = this;
    Window.call(this, '', '', void 0, void 0, true);
  }
  FeedbackWebWindow.prototype.show_s8ev37$ = function (showTime) {
    var formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSehWsf1J8sSzPpXHRfFg7mqAsCC1q5dJpef2W6YvNFCrIW-8g/viewform?usp=pp_url';
    var coreVersionArg = 'entry.133709146=' + coreVersion;
    var appVersionArg = 'entry.759953459=' + appVersion;
    var runningOsArg = 'entry.272098163=' + toString(RunnerInfo_getInstance().getOsName());
    var runningBrowserArg = 'entry.1391825326=' + toString(RunnerInfo_getInstance().getBrowserName());
    var logArg = 'entry.1270012498=' + encodeURIComponent(getConsoleLogs());
    var src = formUrl + '&' + coreVersionArg + '&' + appVersionArg + '&' + runningOsArg + '&' + runningBrowserArg + '&' + logArg;
    this.contentArea.innerHTML = '<iframe style=' + '"' + 'width:100%;height:100%;' + '"' + ' frameBorder=' + '"' + '0' + '"' + ' src=' + '"' + src + '"' + '><\/iframe>';
    Window.prototype.show_s8ev37$.call(this, showTime);
  };
  FeedbackWebWindow.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FeedbackWebWindow',
    interfaces: [Window]
  };
  var FeedbackWebWindow_instance = null;
  function FeedbackWebWindow_getInstance() {
    if (FeedbackWebWindow_instance === null) {
      new FeedbackWebWindow();
    }return FeedbackWebWindow_instance;
  }
  function FullScreenButton() {
    FullScreenButton_instance = this;
    var tmp$;
    UserInterface.call(this, Kotlin.isType(tmp$ = document.getElementById('fullScreenButton'), HTMLElement) ? tmp$ : throwCCE());
    var tmp$_0;
    this.fullScreenButton_0 = Kotlin.isType(tmp$_0 = document.getElementById('fullScreenButton'), HTMLButtonElement) ? tmp$_0 : throwCCE();
    this.enterFullscreenIcon_0 = '<i class="icon-font">&#xe80c;<\/i>';
    this.exitFullscreenIcon_0 = '<i class="icon-font">&#xe80b;<\/i>';
    if (document.fullscreenEnabled) {
      this.show_s8ev37$(null);
    } else {
      this.hide();
    }
    this.fullScreenButton_0.onclick = FullScreenButton_init$lambda(this);
  }
  FullScreenButton.prototype.enterFullscreen = function () {
    var element = document.body;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }};
  FullScreenButton.prototype.exitFullscreen = function () {
    var document_0 = document;
    if (document_0.exitFullscreen) {
      document_0.exitFullscreen();
    } else if (document_0.mozCancelFullScreen) {
      document_0.mozCancelFullScreen();
    } else if (document_0.webkitExitFullscreen) {
      document_0.webkitExitFullscreen();
    } else if (document_0.msExitFullscreen) {
      document_0.msExitFullscreen();
    }};
  FullScreenButton.prototype.isFullscreen = function () {
    return (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) != undefined;
  };
  FullScreenButton.prototype.enterExitFullScreenAlternately = function () {
    if (this.isFullscreen()) {
      this.exitFullscreen();
      this.fullScreenButton_0.innerHTML = this.enterFullscreenIcon_0;
    } else {
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
    }return FullScreenButton_instance;
  }
  function GithubWebWindow() {
    GithubWebWindow_instance = this;
    Window.call(this, '', '\n            <iframe style="width:100%;height:100%;" frameBorder="0" src="https://github.com/HKNBP"><\/iframe>\n        ', void 0, void 0, true);
  }
  GithubWebWindow.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'GithubWebWindow',
    interfaces: [Window]
  };
  var GithubWebWindow_instance = null;
  function GithubWebWindow_getInstance() {
    if (GithubWebWindow_instance === null) {
      new GithubWebWindow();
    }return GithubWebWindow_instance;
  }
  var get_jq = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.get_jq', function () {
    return $;
  });
  var jqThis = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.jqThis', function () {
    return $(this);
  });
  var get_length = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.get_length_vwohdt$', function ($receiver) {
    return $receiver.length;
  });
  var on = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.on_pdziuy$', function ($receiver, events, handler) {
    return $receiver.on(events, handler);
  });
  var on_0 = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.on_hpc46g$', function ($receiver, events, selector, handler) {
    return $receiver.on(events, selector, handler);
  });
  var on_1 = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.on_qwka2j$', function ($receiver, events, selector, data, handler) {
    return $receiver.on(events, selector, data, handler);
  });
  var on_2 = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.on_v89ba5$', function ($receiver, events) {
    return $receiver.on(events);
  });
  var on_3 = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.on_zc05ld$', function ($receiver, events, selector) {
    return $receiver.on(events, selector);
  });
  var on_4 = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.on_drqu84$', function ($receiver, events, selector, data) {
    return $receiver.on(events, selector, data);
  });
  var index = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.index_vwohdt$', function ($receiver) {
    return $receiver.index();
  });
  var index_0 = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.index_v89ba5$', function ($receiver, selector) {
    return $receiver.index(selector);
  });
  var index_1 = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.index_k8fgrm$', function ($receiver, element) {
    return $receiver.index(element);
  });
  var index_2 = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.index_5kxll9$', function ($receiver, element) {
    return $receiver.index(element);
  });
  var eq = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.eq_fjcsf1$', function ($receiver, index) {
    return $receiver.eq(index);
  });
  var focus = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.focus_vwohdt$', function ($receiver) {
    return $receiver.focus();
  });
  var focus_0 = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.focus_656v9o$', function ($receiver, handler) {
    return $receiver.focus(handler);
  });
  var focus_1 = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.focus_rgoa8n$', function ($receiver, eventData, handler) {
    return $receiver.focus(eventData, handler);
  });
  var scrollTop = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.scrollTop_vwohdt$', function ($receiver) {
    return $receiver.scrollTop();
  });
  var scrollTop_0 = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.scrollTop_o1vs4d$', function ($receiver, value) {
    return $receiver.scrollTop(value);
  });
  var scrollLeft = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.scrollLeft_vwohdt$', function ($receiver) {
    return $receiver.scrollLeft();
  });
  var scrollLeft_0 = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.scrollLeft_o1vs4d$', function ($receiver, value) {
    return $receiver.scrollLeft(value);
  });
  var mouseleave = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.mouseleave_vwohdt$', function ($receiver) {
    return $receiver.mouseleave();
  });
  var mouseleave_0 = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.mouseleave_656v9o$', function ($receiver, handler) {
    return $receiver.mouseleave(handler);
  });
  var mouseleave_1 = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.mouseleave_rgoa8n$', function ($receiver, eventData, handler) {
    return $receiver.mouseleave(eventData, handler);
  });
  var mouseout = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.mouseout_vwohdt$', function ($receiver) {
    return $receiver.mouseout();
  });
  var mouseout_0 = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.mouseout_656v9o$', function ($receiver, handler) {
    return $receiver.mouseout(handler);
  });
  var mouseout_1 = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.mouseout_rgoa8n$', function ($receiver, eventData, handler) {
    return $receiver.mouseout(eventData, handler);
  });
  var tabPrev = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.tabPrev_vwohdt$', function ($receiver) {
    return $receiver.tabPrev();
  });
  var tabNext = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.tabNext_vwohdt$', function ($receiver) {
    return $receiver.tabNext();
  });
  var css = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.css_v89ba5$', function ($receiver, propertyName) {
    return $receiver.css(propertyName);
  });
  var css_0 = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.css_u5828f$', function ($receiver, propertyNames) {
    return $receiver.css(propertyNames);
  });
  var css_1 = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.css_siqd7z$', function ($receiver, propertyName, value) {
    return $receiver.css(propertyName, value);
  });
  var css_2 = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.css_zc05ld$', function ($receiver, propertyName, value) {
    return $receiver.css(propertyName, value);
  });
  var css_3 = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.css_5msqvn$', function ($receiver, propertyName, function_0) {
    return $receiver.css(propertyName, function_0);
  });
  var css_4 = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.css_pm4xy9$', function ($receiver, properties) {
    return $receiver.css(properties);
  });
  var prev = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.prev_v89ba5$', function ($receiver, selector) {
    return $receiver.prev(selector);
  });
  var children = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.children_v89ba5$', function ($receiver, selector) {
    return $receiver.children(selector);
  });
  var find = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.find_v89ba5$', function ($receiver, selector) {
    return $receiver.find(selector);
  });
  var find_0 = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.find_k8fgrm$', function ($receiver, selector) {
    return $receiver.find(selector);
  });
  var find_1 = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.find_5kxll9$', function ($receiver, selector) {
    return $receiver.find(selector);
  });
  var get_0 = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.get_vwohdt$', function ($receiver) {
    return $receiver.get();
  });
  var get_1 = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.get_fjcsf1$', function ($receiver, index) {
    return $receiver.get(index);
  });
  var ajax = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.ajax_v89ba5$', function ($receiver, url) {
    return $receiver.ajax(url);
  });
  var ajax_0 = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.ajax_m2903z$', function ($receiver, url, settings) {
    return $receiver.ajax(url, settings);
  });
  var ajax_1 = defineInlineFunction('HKNBP_Core.org.sourcekey.hknbp.hknbp_core.ajax_pm4xy9$', function ($receiver, settings) {
    return $receiver.ajax(settings);
  });
  function LoadFile() {
    LoadFile_instance = this;
    this.cacheShelfLife_0 = 604800;
    this.proxyUrlList_0 = LoadFile$proxyUrlList$lambda();
  }
  LoadFile.prototype.load_19mbxw$ = function (cacheShelfLife, filePath) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', filePath, false);
    xmlhttp.setRequestHeader('cache-control', 'max-age=' + cacheShelfLife);
    xmlhttp.send();
    return xmlhttp;
  };
  LoadFile.prototype.load_61zpoe$ = function (filePath) {
    return this.load_19mbxw$(this.cacheShelfLife_0, filePath);
  };
  function LoadFile$load$lambda$lambda(this$LoadFile, closure$path) {
    return function () {
      var tmp$;
      var isAddedProxy = false;
      tmp$ = this$LoadFile.proxyUrlList_0.iterator();
      while (tmp$.hasNext()) {
        var url = tmp$.next();
        if (startsWith(closure$path, url)) {
          isAddedProxy = true;
        }}
      return isAddedProxy;
    };
  }
  function LoadFile$load$lambda(closure$filePaths, this$LoadFile) {
    return function () {
      var tmp$, tmp$_0, tmp$_1;
      tmp$ = closure$filePaths.node;
      if (tmp$ == null) {
        return;
      }var path = tmp$;
      var isAddedProxy = LoadFile$load$lambda$lambda(this$LoadFile, path)();
      if (startsWith(path, 'http') && !isAddedProxy) {
        tmp$_0 = closure$filePaths.nodeID;
        if (tmp$_0 == null) {
          return;
        }var addTagetIndex = tmp$_0 + 1 | 0;
        tmp$_1 = this$LoadFile.proxyUrlList_0.iterator();
        while (tmp$_1.hasNext()) {
          var proxyUrl = tmp$_1.next();
          closure$filePaths.add_wxm5ur$(addTagetIndex, proxyUrl + path);
        }
      }};
  }
  function LoadFile$load$lambda$lambda_0(closure$onFailedLoadFile) {
    return function () {
      closure$onFailedLoadFile();
      return null;
    };
  }
  function LoadFile$load$lambda_0(closure$isFailedLoadFile, closure$filePaths, closure$useProxy, closure$onFailedLoadFile, closure$onProgress, closure$onLoadedFile, this$LoadFile) {
    return function () {
      var tmp$, tmp$_0;
      if (!closure$isFailedLoadFile.v) {
        closure$isFailedLoadFile.v = true;
        println('\u672A\u80FD\u8B80\u53D6: ' + toString(closure$filePaths.node));
        closure$useProxy();
        tmp$_0 = (tmp$ = closure$filePaths.nodeID) != null ? tmp$ : LoadFile$load$lambda$lambda_0(closure$onFailedLoadFile)();
        if (tmp$_0 == null) {
          return;
        }if (tmp$_0 < (closure$filePaths.size - 1 | 0)) {
          closure$filePaths.next();
          this$LoadFile.load_7tssx3$(closure$onProgress, closure$onLoadedFile, closure$onFailedLoadFile, closure$filePaths);
        } else {
          closure$onFailedLoadFile();
        }
      }};
  }
  function LoadFile$load$lambda_1(closure$xmlhttp, closure$onFailedLoadFileProgram) {
    return function (event) {
      if (closure$xmlhttp.readyState === toShort(4) && closure$xmlhttp.status === toShort(404)) {
        closure$onFailedLoadFileProgram();
      }};
  }
  function LoadFile$load$lambda_2(closure$xmlhttp, closure$filePaths, closure$onLoadedFile, closure$onFailedLoadFileProgram) {
    return function (event) {
      if (closure$xmlhttp.status === 200) {
        println('\u6210\u529F\u8B80\u53D6: ' + toString(closure$filePaths.node));
        closure$onLoadedFile(closure$xmlhttp);
      } else {
        closure$onFailedLoadFileProgram();
      }
    };
  }
  function LoadFile$load$lambda_3(closure$onProgress) {
    return function (event) {
      if (event.lengthComputable) {
        closure$onProgress(numberToDouble(event.total), numberToDouble(event.loaded));
      }};
  }
  LoadFile.prototype.load_tx2pwz$ = function (onProgress, onLoadedFile, onFailedLoadFile, cacheShelfLife, filePaths) {
    var tmp$;
    var xmlhttp = new XMLHttpRequest();
    var useProxy = LoadFile$load$lambda(filePaths, this);
    var isFailedLoadFile = {v: false};
    var onFailedLoadFileProgram = LoadFile$load$lambda_0(isFailedLoadFile, filePaths, useProxy, onFailedLoadFile, onProgress, onLoadedFile, this);
    xmlhttp.ontimeout = onFailedLoadFileProgram;
    xmlhttp.onerror = onFailedLoadFileProgram;
    xmlhttp.onreadystatechange = LoadFile$load$lambda_1(xmlhttp, onFailedLoadFileProgram);
    xmlhttp.onload = LoadFile$load$lambda_2(xmlhttp, filePaths, onLoadedFile, onFailedLoadFileProgram);
    xmlhttp.onprogress = LoadFile$load$lambda_3(onProgress);
    xmlhttp.open('GET', (tmp$ = filePaths.node) != null ? tmp$ : '', true);
    xmlhttp.setRequestHeader('cache-control', 'max-age=' + cacheShelfLife);
    xmlhttp.send();
  };
  LoadFile.prototype.load_e0kky5$ = function (onProgress, onLoadedFile, onFailedLoadFile, cacheShelfLife, filePath) {
    this.load_tx2pwz$(onProgress, onLoadedFile, onFailedLoadFile, cacheShelfLife, ArrayLinkList_init_1(filePath));
  };
  LoadFile.prototype.load_t59dxv$ = function (onProgress, onLoadedFile, onFailedLoadFile, cacheShelfLife, filePath) {
    this.load_e0kky5$(onProgress, onLoadedFile, onFailedLoadFile, cacheShelfLife, filePath);
  };
  LoadFile.prototype.load_7tssx3$ = function (onProgress, onLoadedFile, onFailedLoadFile, filePaths) {
    this.load_tx2pwz$(onProgress, onLoadedFile, onFailedLoadFile, this.cacheShelfLife_0, filePaths);
  };
  LoadFile.prototype.load_1gxz9p$ = function (onProgress, onLoadedFile, onFailedLoadFile, filePath) {
    this.load_tx2pwz$(onProgress, onLoadedFile, onFailedLoadFile, this.cacheShelfLife_0, ArrayLinkList_init_1(filePath));
  };
  LoadFile.prototype.load_or1oyb$ = function (onProgress, onLoadedFile, onFailedLoadFile, filePath) {
    this.load_e0kky5$(onProgress, onLoadedFile, onFailedLoadFile, this.cacheShelfLife_0, filePath);
  };
  function LoadFile$proxyUrlList$lambda() {
    var proxyUrlList = ArrayList_init();
    proxyUrlList.add_11rb$('https://hknbp-proxy.herokuapp.com/');
    proxyUrlList.add_11rb$('https://cors-anywhere.herokuapp.com/');
    return proxyUrlList;
  }
  LoadFile.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LoadFile',
    interfaces: []
  };
  var LoadFile_instance = null;
  function LoadFile_getInstance() {
    if (LoadFile_instance === null) {
      new LoadFile();
    }return LoadFile_instance;
  }
  function LongClickEvent() {
    LongClickEvent_instance = this;
    this.onLongClick_kh28lv$_0 = new LongClickEvent$OnLongClick(LongClickEvent$onLongClick$lambda);
    var leftKey = 1;
    $('button').mousedown(LongClickEvent_init$lambda(leftKey, this)).mouseup(LongClickEvent_init$lambda_0(leftKey, this)).mouseout(LongClickEvent_init$lambda_1(leftKey, this));
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
      }};
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
        var button = $(this);
        this$LongClickEvent.onLongClick_0 = new LongClickEvent$OnLongClick(LongClickEvent_init$lambda$lambda(button));
        this$LongClickEvent.onLongClick_0.mousedown();
      }};
  }
  function LongClickEvent_init$lambda_0(closure$leftKey, this$LongClickEvent) {
    return function (event) {
      if (equals(closure$leftKey, event.which)) {
        this$LongClickEvent.onLongClick_0.mouseup();
      }};
  }
  function LongClickEvent_init$lambda_1(closure$leftKey, this$LongClickEvent) {
    return function (event) {
      if (equals(closure$leftKey, event.which)) {
        this$LongClickEvent.onLongClick_0.mouseup();
      }};
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
    }return LongClickEvent_instance;
  }
  function initConsoleLogsListener$lambda() {
    try {
      console.stdlog = console.log.bind(console);
      console.logs = [];
      return console.log = function (message) {
        if (1000 < console.logs.length) {
          console.logs.shift();
        }console.logs.push(message);
        console.stdlog.apply(console, arguments);
      };
    } catch (e) {
      return println('setConsoleLogListener\u54C0\u5DE6: ' + e.toString()), Unit;
    }
  }
  var initConsoleLogsListener;
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
    } catch (e) {
      println('getConsoleLog\u54C0\u5DE6: ' + e.toString());
    }
    return '';
  }
  var getConsoleLogs;
  function toStringBackwardZeroPadding$lambda(this$toStringBackwardZeroPadding, closure$length) {
    return function () {
      var tmp$, tmp$_0;
      var isNegativeNumber = this$toStringBackwardZeroPadding < 0;
      if (isNegativeNumber) {
        tmp$ = -1 * this$toStringBackwardZeroPadding | 0;
      } else {
        tmp$ = this$toStringBackwardZeroPadding;
      }
      var mustPositiveNumber = tmp$;
      if (isNegativeNumber) {
        tmp$_0 = '-';
      } else {
        tmp$_0 = '';
      }
      return tmp$_0 + padStart(mustPositiveNumber.toString(), closure$length, 48);
    };
  }
  function toStringBackwardZeroPadding($receiver, length) {
    return toStringBackwardZeroPadding$lambda($receiver, length)();
  }
  function toNegative($receiver) {
    if (-1 < $receiver) {
      return -$receiver | 0;
    }return $receiver;
  }
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
      }tempArray = split(ensureNotNull(additionalURL), ['&']);
      tmp$ = tempArray.size;
      for (var i = 0; i < tmp$; i++) {
        if (!equals((tmp$_1 = (tmp$_0 = getOrNull(tempArray, i)) != null ? split_0(tmp$_0, Kotlin.charArrayOf(61)) : null) != null ? getOrNull(tmp$_1, 0) : null, param)) {
          newAdditionalURL += temp + getOrNull(tempArray, i);
          temp = '&';
        }}
    } else {
      var tmpAnchor_0 = split(ensureNotNull(baseURL), ['#']);
      var TheParams_0 = getOrNull(tmpAnchor_0, 0);
      TheAnchor = getOrNull(tmpAnchor_0, 1);
      if (TheParams_0 != null) {
        baseURL = TheParams_0;
      }}
    var _paramVal = paramVal;
    if (TheAnchor != null) {
      _paramVal += '#' + TheAnchor;
    }var rows_txt = temp + '' + param + '=' + _paramVal;
    window.history.replaceState('', '', baseURL + '?' + newAdditionalURL + rows_txt);
  }
  var rootURL;
  function coreVersion$lambda() {
    return 'v2020.05_3-test11';
  }
  var coreVersion;
  var appVersion;
  function reductionTo(w, h) {
    var arr = new Int32Array(2);
    var p = w;
    var q = h;
    var a = p;
    var b = q;
    if (a >= b) {
      a = p;
      b = q;
    } else {
      a = q;
      b = p;
    }
    if (p !== 1 && q !== 1) {
      for (var i = b; i >= 2; i--) {
        if (p % i === 0 && q % i === 0) {
          p = p / i | 0;
          q = q / i | 0;
        }}
    }arr[0] = p;
    arr[1] = q;
    return arr;
  }
  function main(args) {
    try {
      OfficialChannels_getInstance();
      UserControlPanelShower_getInstance();
      UserControlPanel_getInstance();
      ConsentPanel_getInstance();
      VirtualRemote_getInstance();
      LongClickEvent_getInstance();
      ChannelDescription_getInstance();
    } catch (e) {
      println('\u4ECB\u9762\u521D\u59CB\u5316\u54C0\u5DE6: ' + e.toString());
    }
  }
  function MultiLanguageString(langStringList) {
    MultiLanguageString$Companion_getInstance();
    if (langStringList === void 0)
      langStringList = ArrayLinkList_init([]);
    ArrayLinkList_init_3(langStringList, this);
    this.langStringList_0 = langStringList;
    this.addOnElementsChangedListener_9f6p79$(new MultiLanguageString_init$ObjectLiteral(this));
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
  MultiLanguageString$Companion$userSelectLanguageSequence$lambda$ObjectLiteral.prototype.onElementsChanged = function () {
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
    interfaces: [ArrayLinkList$OnElementsChangedListener]
  };
  function MultiLanguageString$Companion$userSelectLanguageSequence$lambda(this$MultiLanguageString$) {
    return function () {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      var languageSelect = Kotlin.isType(tmp$ = document.createElement('select'), HTMLSelectElement) ? tmp$ : throwCCE();
      languageSelect.innerHTML = (tmp$_0 = localStorage.getItem('userSelectLanguageOptionSequence')) != null ? tmp$_0 : '<option>' + this$MultiLanguageString$.currentUserSystemLanguage_0 + '<\/option>';
      var sequence = ArrayLinkList_init([]);
      sequence.addOnElementsChangedListener_9f6p79$(new MultiLanguageString$Companion$userSelectLanguageSequence$lambda$ObjectLiteral(sequence));
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
    }return MultiLanguageString$Companion_instance;
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
  MultiLanguageString.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (Kotlin.isType(other, MultiLanguageString)) {
      if (this.size === other.size) {
        tmp$ = this.iterator();
        while (tmp$.hasNext()) {
          var thisLangString = tmp$.next();
          var isHaveSameLangString = false;
          tmp$_0 = other.iterator();
          while (tmp$_0.hasNext()) {
            var otherLangString = tmp$_0.next();
            var isLangEqual = equals(thisLangString.lang, otherLangString.lang);
            var isStringEqual = equals(thisLangString.string, otherLangString.string);
            if (isLangEqual && isStringEqual) {
              isHaveSameLangString = true;
            }}
          if (!isHaveSameLangString) {
            return false;
          }}
        return true;
      }}return false;
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
        }}
      allString = findSelectLanguageListTemp;
    }
    if (allString.size === 0) {
      tmp$_3 = null;
    } else {
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
      }}
    if (langStringList.size < 1) {
      tmp$_1 = null;
    } else {
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
    } else {
      this.node = getOrNull(this, 0);
    }
  };
  function MultiLanguageString_init$ObjectLiteral(this$MultiLanguageString) {
    this.this$MultiLanguageString = this$MultiLanguageString;
  }
  MultiLanguageString_init$ObjectLiteral.prototype.onElementsChanged = function () {
    this.this$MultiLanguageString.changeToNeedToSelectLanguageOfFirst_0();
  };
  MultiLanguageString_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ArrayLinkList$OnElementsChangedListener]
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
  function MutedDescription() {
    MutedDescription_instance = this;
    var tmp$;
    UserInterface.call(this, Kotlin.isType(tmp$ = document.getElementById('mutedDescription'), HTMLElement) ? tmp$ : throwCCE());
    var tmp$_0;
    this.mutedDescriptionButton_0 = Kotlin.isType(tmp$_0 = document.getElementById('mutedDescriptionButton'), HTMLButtonElement) ? tmp$_0 : throwCCE();
    this.mutedDescriptionButton_0.onclick = MutedDescription_init$lambda;
  }
  MutedDescription.prototype.update_6taknv$ = function (muted) {
    if (muted) {
      this.show_s8ev37$(null);
    } else {
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
      Player_getInstance().getMuted_y8twos$(MutedDescription$update$lambda$lambda(this$MutedDescription));
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
    var script = MutedDescription$update$lambda(this);
    script();
    window.setTimeout(MutedDescription$update$lambda_0(script), 1000);
    window.setTimeout(MutedDescription$update$lambda_1(script), 10000);
    window.setTimeout(MutedDescription$update$lambda_2(script), 60000);
  };
  function MutedDescription_init$lambda$lambda(muted) {
    Player_getInstance().setMuted_6taknv$(!muted);
  }
  function MutedDescription_init$lambda(event) {
    Player_getInstance().getMuted_y8twos$(MutedDescription_init$lambda$lambda);
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
    }return MutedDescription_instance;
  }
  function NativeAppInstallButton() {
    NativeAppInstallButton_instance = this;
    var tmp$;
    UserInterface.call(this, Kotlin.isType(tmp$ = document.getElementById('nativeAppInstallButton'), HTMLElement) ? tmp$ : throwCCE());
    var tmp$_0;
    this.nativeAppInstallButton_0 = Kotlin.isType(tmp$_0 = document.getElementById('nativeAppInstallButton'), HTMLButtonElement) ? tmp$_0 : throwCCE();
    this.installPromptEvent_0 = null;
    this.hide();
    window.addEventListener('appinstalled', NativeAppInstallButton_init$lambda(this));
    window.addEventListener('beforeinstallprompt', NativeAppInstallButton_init$lambda_0(this));
    this.nativeAppInstallButton_0.onclick = NativeAppInstallButton_init$lambda_1(this);
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
      this$NativeAppInstallButton.show_s8ev37$(null);
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
    }return NativeAppInstallButton_instance;
  }
  function OfficialChannels() {
    OfficialChannels_instance = this;
    this.updateChannels();
  }
  OfficialChannels.prototype.set_0 = function (needSetOfficialChannels) {
    var tmp$;
    var needRemoveOfficialChannels = ArrayList_init();
    tmp$ = channels.iterator();
    while (tmp$.hasNext()) {
      var channel = tmp$.next();
      if (-1 < channel.number) {
        needRemoveOfficialChannels.add_11rb$(channel);
      }}
    channels.removeAll_brywnq$(needRemoveOfficialChannels);
    channels.addAll_brywnq$(needSetOfficialChannels);
  };
  function OfficialChannels$ChannelsSearchDisplay(channelsSearchDisplayId, message, focusOutArea, placeArea) {
    if (channelsSearchDisplayId === void 0)
      channelsSearchDisplayId = 'ChannelsSearchDisplay' + Random.Default.nextInt_vux9f0$(0, 99999999);
    if (message === void 0)
      message = OfficialChannels$OfficialChannels$ChannelsSearchDisplay_init$lambda();
    if (focusOutArea === void 0)
      focusOutArea = OfficialChannels$OfficialChannels$ChannelsSearchDisplay_init$lambda_0(message)();
    if (placeArea === void 0)
      placeArea = OfficialChannels$OfficialChannels$ChannelsSearchDisplay_init$lambda_1(channelsSearchDisplayId, focusOutArea)();
    UserInterface.call(this, placeArea);
    this.channelsSearchDisplayId = channelsSearchDisplayId;
    this.message_0 = message;
    this.focusOutArea_0 = focusOutArea;
    this.placeArea_0 = placeArea;
    this.show_s8ev37$(null);
  }
  OfficialChannels$ChannelsSearchDisplay.prototype.update_lu1900$ = function (max, value) {
  };
  OfficialChannels$ChannelsSearchDisplay.prototype.hide = function () {
    var tmp$;
    UserInterface.prototype.hide.call(this);
    (Kotlin.isType(tmp$ = document.getElementById('dynamicUserInterfaceArea'), HTMLDivElement) ? tmp$ : throwCCE()).removeChild(this.placeArea_0);
  };
  function OfficialChannels$OfficialChannels$ChannelsSearchDisplay_init$lambda$lambda(event) {
    event.stopPropagation();
  }
  function OfficialChannels$OfficialChannels$ChannelsSearchDisplay_init$lambda() {
    var tmp$;
    var message = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : throwCCE();
    message.style.position = 'relative';
    message.style.top = '0';
    message.style.bottom = '0';
    message.style.left = '0';
    message.style.right = '0';
    message.style.cursor = 'auto';
    message.innerHTML = '<i class="icon-font animate-spin">&#xe835;<\/i> \u641C\u7D22\u983B\u9053\u4E2D...';
    message.onclick = OfficialChannels$OfficialChannels$ChannelsSearchDisplay_init$lambda$lambda;
    return message;
  }
  function OfficialChannels$OfficialChannels$ChannelsSearchDisplay_init$lambda_0(closure$message) {
    return function () {
      var tmp$;
      var focusOutArea = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : throwCCE();
      focusOutArea.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
      focusOutArea.style.display = 'flex';
      focusOutArea.style.position = 'absolute';
      focusOutArea.style.top = '0';
      focusOutArea.style.bottom = '0';
      focusOutArea.style.left = '0';
      focusOutArea.style.right = '0';
      focusOutArea.style.zIndex = '90';
      focusOutArea.style.alignItems = 'center';
      focusOutArea.style.justifyContent = 'center';
      focusOutArea.tabIndex = -1;
      focusOutArea.appendChild(closure$message);
      return focusOutArea;
    };
  }
  function OfficialChannels$OfficialChannels$ChannelsSearchDisplay_init$lambda_1(closure$channelsSearchDisplayId, closure$focusOutArea) {
    return function () {
      var tmp$, tmp$_0;
      var placeArea = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : throwCCE();
      placeArea.id = closure$channelsSearchDisplayId;
      placeArea.style.display = 'none';
      placeArea.style.position = 'absolute';
      placeArea.style.top = '0';
      placeArea.style.bottom = '0';
      placeArea.style.left = '0';
      placeArea.style.right = '0';
      placeArea.style.zIndex = '90';
      placeArea.appendChild(closure$focusOutArea);
      var dynamicUserInterfaceArea = Kotlin.isType(tmp$_0 = document.getElementById('dynamicUserInterfaceArea'), HTMLDivElement) ? tmp$_0 : throwCCE();
      dynamicUserInterfaceArea.appendChild(placeArea);
      return placeArea;
    };
  }
  OfficialChannels$ChannelsSearchDisplay.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChannelsSearchDisplay',
    interfaces: [UserInterface]
  };
  function OfficialChannels$updateChannels$lambda(max, value) {
  }
  function OfficialChannels$updateChannels$lambda_0(this$OfficialChannels, closure$channelsSearchDisplay) {
    return function (officialChannels) {
      var tmp$;
      if (channels.size < 1) {
        this$OfficialChannels.set_0(officialChannels);
        changeToRecentlyWatchedChannel(channels);
      } else {
        this$OfficialChannels.set_0(officialChannels);
      }
      (tmp$ = closure$channelsSearchDisplay.v) != null ? (tmp$.hide(), Unit) : null;
    };
  }
  function OfficialChannels$updateChannels$lambda_1() {
  }
  OfficialChannels.prototype.updateChannels = function () {
    var channelsSearchDisplay = {v: null};
    if (channels.size < 1) {
      channelsSearchDisplay.v = new OfficialChannels$ChannelsSearchDisplay();
    }parseChannels(OfficialChannels$updateChannels$lambda, OfficialChannels$updateChannels$lambda_0(this, channelsSearchDisplay), OfficialChannels$updateChannels$lambda_1, ['https://official-channels.hknbp.org/official_channels.xml']);
  };
  OfficialChannels.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'OfficialChannels',
    interfaces: []
  };
  var OfficialChannels_instance = null;
  function OfficialChannels_getInstance() {
    if (OfficialChannels_instance === null) {
      new OfficialChannels();
    }return OfficialChannels_instance;
  }
  function PictureInPictureButton() {
    PictureInPictureButton_instance = this;
    var tmp$;
    UserInterface.call(this, Kotlin.isType(tmp$ = document.getElementById('pictureInPictureButton'), HTMLElement) ? tmp$ : throwCCE());
    var tmp$_0;
    this.pictureInPictureButton_0 = Kotlin.isType(tmp$_0 = document.getElementById('pictureInPictureButton'), HTMLButtonElement) ? tmp$_0 : throwCCE();
    this.hide();
    Player_getInstance().addOnPlayerEventListener_j8fzjz$(new PictureInPictureButton_init$ObjectLiteral());
    this.pictureInPictureButton_0.onclick = PictureInPictureButton_init$lambda;
  }
  function PictureInPictureButton_init$ObjectLiteral() {
  }
  function PictureInPictureButton_init$ObjectLiteral$on$lambda(isEnabled) {
    if (isEnabled) {
      PictureInPictureButton_getInstance().show_s8ev37$(null);
    } else {
      PictureInPictureButton_getInstance().hide();
    }
    return Unit;
  }
  PictureInPictureButton_init$ObjectLiteral.prototype.on_mdxcb7$ = function (onPlayerEvent) {
    switch (onPlayerEvent.name) {
      case 'turnChannel':
        PictureInPictureButton_getInstance().hide();
        break;
      case 'playing':
        Player_getInstance().isPictureInPictureEnabled_y8twos$(PictureInPictureButton_init$ObjectLiteral$on$lambda);
        break;
    }
  };
  PictureInPictureButton_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Player$OnPlayerEventListener]
  };
  function PictureInPictureButton_init$lambda(event) {
    Player_getInstance().pictureInPictureModeSwitch();
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
    }return PictureInPictureButton_instance;
  }
  function Player() {
    Player_instance = this;
    var tmp$;
    UserInterface.call(this, Kotlin.isType(tmp$ = document.getElementById('player'), HTMLElement) ? tmp$ : throwCCE());
    this.playingChannel_0 = null;
    this.iframePlayer_0 = document.getElementById('iframePlayer');
    this.watchingCounter_0 = null;
    this.onPlayerEvents_0 = ArrayList_init();
    this.callIframePlayerFunctionList_0 = ArrayList_init();
    this.checkNeedCanTouchIframePlayerModeTimer_14c6cd$_0 = 0;
    this.videoTracks_15iau4$_0 = Player$videoTracks$lambda(this)();
    this.audioTracks_oydct3$_0 = Player$audioTracks$lambda(this)();
    this.subtitleTracks_my27pv$_0 = Player$subtitleTracks$lambda(this)();
    var tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    this.volume_qn3165$_0 = (tmp$_1 = (tmp$_0 = localStorage.getItem('RecentlyVolume')) != null ? toDoubleOrNull(tmp$_0) : null) != null ? tmp$_1 : 100.0;
    this.volumeUp = Player$volumeUp$lambda(this);
    this.volumeDown = Player$volumeDown$lambda(this);
    this.iframePlayerVolumeInit_0 = Player$iframePlayerVolumeInit$lambda(this)();
    this.muted_u89vz8$_0 = (tmp$_3 = (tmp$_2 = localStorage.getItem('RecentlyMuted')) != null ? toBoolean(tmp$_2) : null) != null ? tmp$_3 : false;
    this.tryUnmuteCount_0 = 0;
    this.volumeMute_mj46gq$_0 = Player$volumeMute$lambda(this);
    this.iframePlayerMutedInit_0 = Player$iframePlayerMutedInit$lambda(this)();
    this.onTurnChannel_0 = Player$onTurnChannel$lambda(this);
    this.onPlaying_0 = Player$onPlaying$lambda(this);
    this.onNotPlaying_0 = Player$onNotPlaying$lambda(this);
    this.onDeviceNotSupportFormat_0 = Player$onDeviceNotSupportFormat$lambda(this);
    this.onCannotReceiveChannelSignal_0 = Player$onCannotReceiveChannelSignal$lambda(this);
    this.onNoNetwork_0 = Player$onNoNetwork$lambda(this);
    this.initListenIframePlayerMessage_0 = Player$initListenIframePlayerMessage$lambda(this)();
    if (!RunnerInfo_getInstance().isBelowIOS10()) {
      this.addOnPlayerEventListener_j8fzjz$(new Player_init$ObjectLiteral());
    }}
  function Player$OnPlayerEvent(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Player$OnPlayerEvent_initFields() {
    Player$OnPlayerEvent_initFields = function () {
    };
    Player$OnPlayerEvent$turnChannel_instance = new Player$OnPlayerEvent('turnChannel', 0);
    Player$OnPlayerEvent$playing_instance = new Player$OnPlayerEvent('playing', 1);
    Player$OnPlayerEvent$notPlaying_instance = new Player$OnPlayerEvent('notPlaying', 2);
    Player$OnPlayerEvent$deviceNotSupportFormat_instance = new Player$OnPlayerEvent('deviceNotSupportFormat', 3);
    Player$OnPlayerEvent$cannotReceiveChannelSignal_instance = new Player$OnPlayerEvent('cannotReceiveChannelSignal', 4);
    Player$OnPlayerEvent$noNetwork_instance = new Player$OnPlayerEvent('noNetwork', 5);
  }
  var Player$OnPlayerEvent$turnChannel_instance;
  function Player$OnPlayerEvent$turnChannel_getInstance() {
    Player$OnPlayerEvent_initFields();
    return Player$OnPlayerEvent$turnChannel_instance;
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
  var Player$OnPlayerEvent$deviceNotSupportFormat_instance;
  function Player$OnPlayerEvent$deviceNotSupportFormat_getInstance() {
    Player$OnPlayerEvent_initFields();
    return Player$OnPlayerEvent$deviceNotSupportFormat_instance;
  }
  var Player$OnPlayerEvent$cannotReceiveChannelSignal_instance;
  function Player$OnPlayerEvent$cannotReceiveChannelSignal_getInstance() {
    Player$OnPlayerEvent_initFields();
    return Player$OnPlayerEvent$cannotReceiveChannelSignal_instance;
  }
  var Player$OnPlayerEvent$noNetwork_instance;
  function Player$OnPlayerEvent$noNetwork_getInstance() {
    Player$OnPlayerEvent_initFields();
    return Player$OnPlayerEvent$noNetwork_instance;
  }
  Player$OnPlayerEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OnPlayerEvent',
    interfaces: [Enum]
  };
  function Player$OnPlayerEvent$values() {
    return [Player$OnPlayerEvent$turnChannel_getInstance(), Player$OnPlayerEvent$playing_getInstance(), Player$OnPlayerEvent$notPlaying_getInstance(), Player$OnPlayerEvent$deviceNotSupportFormat_getInstance(), Player$OnPlayerEvent$cannotReceiveChannelSignal_getInstance(), Player$OnPlayerEvent$noNetwork_getInstance()];
  }
  Player$OnPlayerEvent.values = Player$OnPlayerEvent$values;
  function Player$OnPlayerEvent$valueOf(name) {
    switch (name) {
      case 'turnChannel':
        return Player$OnPlayerEvent$turnChannel_getInstance();
      case 'playing':
        return Player$OnPlayerEvent$playing_getInstance();
      case 'notPlaying':
        return Player$OnPlayerEvent$notPlaying_getInstance();
      case 'deviceNotSupportFormat':
        return Player$OnPlayerEvent$deviceNotSupportFormat_getInstance();
      case 'cannotReceiveChannelSignal':
        return Player$OnPlayerEvent$cannotReceiveChannelSignal_getInstance();
      case 'noNetwork':
        return Player$OnPlayerEvent$noNetwork_getInstance();
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
  function Player$callIframePlayerFunction$lambda(returnValue) {
  }
  function Player$callIframePlayerFunction$lambda_0(this$Player, closure$caller) {
    return function () {
      this$Player.callIframePlayerFunctionList_0.remove_11rb$(closure$caller);
    };
  }
  Player.prototype.callIframePlayerFunction_0 = function (evalScript, onReturn) {
    if (onReturn === void 0)
      onReturn = Player$callIframePlayerFunction$lambda;
    var caller = {};
    caller.evalScript = evalScript;
    caller.name = 'HKNBPCore';
    caller.id = (new Date()).getTime().toString() + toString(Random.Default.nextInt_vux9f0$(0, 99999999));
    caller.onReturn = onReturn;
    this.callIframePlayerFunctionList_0.add_11rb$(caller);
    window.setTimeout(Player$callIframePlayerFunction$lambda_0(this, caller), 60000);
    try {
      this.iframePlayer_0.contentWindow.postMessage(JSON.stringify(caller), '*');
    } catch (e) {
      println('iframePlayer\u6709\u5572Function\u6435\u5514\u5230\u6216\u767C\u751F\u554F\u984C: ' + e.toString());
    }
  };
  Player.prototype.kotlinValueToEvalScriptUseableValue_0 = function (kotlinValue) {
    var obj = {};
    obj.value = kotlinValue;
    return 'JSON.parse(' + "'" + JSON.stringify(obj) + "'" + ').value';
  };
  Object.defineProperty(Player.prototype, 'checkNeedCanTouchIframePlayerModeTimer_0', {
    get: function () {
      return this.checkNeedCanTouchIframePlayerModeTimer_14c6cd$_0;
    },
    set: function (value) {
      window.clearTimeout(this.checkNeedCanTouchIframePlayerModeTimer_0);
      this.checkNeedCanTouchIframePlayerModeTimer_14c6cd$_0 = value;
    }
  });
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
    new PromptBox((tmp$_0 = (tmp$ = dialogues.node) != null ? tmp$.canNotFind : null) != null ? tmp$_0 : '');
  }
  Player.prototype.designatedVideoTrack = function (videoTrackID) {
    var videoTracksNodeID = TrackDescription$Companion_getInstance().toTracksNodeID_w1sgja$(this.videoTracks, videoTrackID);
    if (videoTracksNodeID != null) {
      this.videoTracks.designated_za3lpa$(videoTracksNodeID);
      return true;
    } else {
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
    new PromptBox((tmp$_0 = (tmp$ = dialogues.node) != null ? tmp$.canNotFind : null) != null ? tmp$_0 : '');
  }
  Player.prototype.designatedAudioTrack = function (audioTrackID) {
    var audioTracksNodeID = TrackDescription$Companion_getInstance().toTracksNodeID_w1sgja$(this.audioTracks, audioTrackID);
    if (audioTracksNodeID != null) {
      this.audioTracks.designated_za3lpa$(audioTracksNodeID);
      return true;
    } else {
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
    new PromptBox((tmp$_0 = (tmp$ = dialogues.node) != null ? tmp$.canNotFind : null) != null ? tmp$_0 : '');
  }
  Player.prototype.designatedSubtitleTrack = function (subtitleTrackID) {
    var subtitleTracksNodeID = TrackDescription$Companion_getInstance().toTracksNodeID_w1sgja$(this.subtitleTracks, subtitleTrackID);
    if (subtitleTracksNodeID != null) {
      this.subtitleTracks.designated_za3lpa$(subtitleTracksNodeID);
      return true;
    } else {
      Dialogue$Companion_getInstance().getDialogues_fs1aqo$(Player$designatedSubtitleTrack$lambda);
      return false;
    }
  };
  Object.defineProperty(Player.prototype, 'volume_0', {
    get: function () {
      return this.volume_qn3165$_0;
    },
    set: function (value) {
      localStorage.setItem('RecentlyVolume', this.volume_0.toString());
      this.volume_qn3165$_0 = value;
    }
  });
  Player.prototype.setVolume_14dthe$ = function (volume) {
    var volumeChecked = volume;
    if (100 < volumeChecked) {
      volumeChecked = 100.0;
    }if (volumeChecked < 0) {
      volumeChecked = 0.0;
    }this.callIframePlayerFunction_0('onSetIframePlayerVolume(' + this.kotlinValueToEvalScriptUseableValue_0(volumeChecked) + ')');
    this.volume_0 = volumeChecked;
    VolumeDescription_getInstance().show_s8ev37$(3000);
  };
  function Player$getVolume$lambda(closure$onReturn) {
    return function (returnValue) {
      var tmp$, tmp$_0;
      closure$onReturn((tmp$_0 = (tmp$ = returnValue != null ? returnValue.toString() : null) != null ? toDoubleOrNull(tmp$) : null) != null ? tmp$_0 : 100.0);
    };
  }
  Player.prototype.getVolume_huw4wd$ = function (onReturn) {
    this.callIframePlayerFunction_0('onGetIframePlayerVolume(onReturn)', Player$getVolume$lambda(onReturn));
  };
  Object.defineProperty(Player.prototype, 'muted_0', {
    get: function () {
      return this.muted_u89vz8$_0;
    },
    set: function (value) {
      localStorage.setItem('RecentlyMuted', this.muted_0.toString());
      this.muted_u89vz8$_0 = value;
    }
  });
  function Player$setMuted$lambda(this$Player) {
    return function (muted) {
      this$Player.callIframePlayerFunction_0('onSetIframePlayerMuted(' + this$Player.kotlinValueToEvalScriptUseableValue_0(muted) + ')');
      MutedDescription_getInstance().update_6taknv$(muted);
    };
  }
  function Player$setMuted$lambda_0(closure$muted, this$Player, closure$setScript) {
    return function () {
      this$Player.muted_0 = closure$muted;
      closure$setScript(closure$muted);
    };
  }
  function Player$setMuted$lambda_1(closure$setScript) {
    return function () {
      closure$setScript(true);
    };
  }
  Player.prototype.setMuted_6taknv$ = function (muted) {
    var setScript = Player$setMuted$lambda(this);
    CanAutoplay_getInstance().checkVideoAutoPlayNeedToMute_9dmrm4$(Player$setMuted$lambda_0(muted, this, setScript), Player$setMuted$lambda_1(setScript));
  };
  function Player$getMuted$lambda(this$Player, closure$onReturn) {
    return function (returnValue) {
      var tmp$, tmp$_0;
      MutedDescription_getInstance().update_6taknv$(this$Player.muted_0);
      closure$onReturn((tmp$_0 = (tmp$ = returnValue != null ? returnValue.toString() : null) != null ? toBoolean(tmp$) : null) != null ? tmp$_0 : true);
    };
  }
  Player.prototype.getMuted_y8twos$ = function (onReturn) {
    this.callIframePlayerFunction_0('onGetIframePlayerMuted(onReturn)', Player$getMuted$lambda(this, onReturn));
  };
  function Player$set_Player$volumeMute$lambda$lambda(this$Player, closure$value) {
    return function (muted) {
      if (muted) {
        this$Player.setMuted_6taknv$(false);
      } else {
        this$Player.setMuted_6taknv$(false);
        closure$value();
      }
    };
  }
  function Player$set_Player$volumeMute$lambda(this$Player, closure$value) {
    return function () {
      this$Player.getMuted_y8twos$(Player$set_Player$volumeMute$lambda$lambda(this$Player, closure$value));
    };
  }
  Object.defineProperty(Player.prototype, 'volumeMute', {
    get: function () {
      return this.volumeMute_mj46gq$_0;
    },
    set: function (value) {
      this.volumeMute_mj46gq$_0 = Player$set_Player$volumeMute$lambda(this, value);
    }
  });
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
    this.callIframePlayerFunction_0('onClickProgrammableButton(' + this.kotlinValueToEvalScriptUseableValue_0(colorString) + ')');
  };
  function Player$isPictureInPictureEnabled$lambda(closure$onReturn) {
    return function (returnValue) {
      var tmp$, tmp$_0;
      closure$onReturn((tmp$_0 = (tmp$ = returnValue != null ? returnValue.toString() : null) != null ? toBoolean(tmp$) : null) != null ? tmp$_0 : false);
    };
  }
  Player.prototype.isPictureInPictureEnabled_y8twos$ = function (onReturn) {
    this.callIframePlayerFunction_0('\n            function onGetIframePlayerIsPictureInPictureEnabled(onReturn){\n                try {\n                    onReturn(\n                        document.pictureInPictureEnabled &&\n                        document.getElementsByTagName("video").length > 0\n                    );\n                }catch(error){\n                    console.log(error);\n                    onReturn(false);\n                }\n            }\n            onGetIframePlayerIsPictureInPictureEnabled(onReturn);\n        ', Player$isPictureInPictureEnabled$lambda(onReturn));
  };
  Player.prototype.pictureInPictureModeSwitch = function () {
    this.callIframePlayerFunction_0('\n            async function pictureInPictureModeSwitch(){\n                try {\n                    //console.log(document.pictureInPictureEnabled);\n                    for(var i=0; document.getElementsByTagName("video").length; i++){\n                        var video = document.getElementsByTagName("video")[i];\n                        if (video !== document.pictureInPictureElement){\n                            await video.requestPictureInPicture();\n                        }else{\n                            await document.exitPictureInPicture();\n                        }\n                    }\n                }catch(error){console.log(error);}\n            }\n            pictureInPictureModeSwitch();\n        ');
  };
  Player.prototype.play = function () {
    this.callIframePlayerFunction_0('onSetIframePlayerPlay()');
  };
  Player.prototype.reload = function () {
    this.callIframePlayerFunction_0('onSetIframePlayerReload()');
  };
  Player.prototype.reloadIframePlayer = function () {
    var tmp$;
    tmp$ = this.playingChannel_0;
    if (tmp$ == null) {
      return;
    }this.playChannel_e3jjlp$(tmp$);
  };
  function Player$playChannel$getLink(this$Player) {
    return function () {
      var tmp$, tmp$_0, tmp$_1;
      var link = (tmp$_1 = (tmp$_0 = (tmp$ = this$Player.playingChannel_0) != null ? tmp$.sources : null) != null ? tmp$_0.node : null) != null ? tmp$_1.iFramePlayerSrc : null;
      if (link == null || equals(link, '')) {
        return 'iframePlayer/videojs.html';
      }return link;
    };
  }
  Player.prototype.playChannel_e3jjlp$ = function (channel) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    this.playingChannel_0 = channel;
    var getLink = Player$playChannel$getLink(this);
    tmp$_4 = this.iframePlayer_0;
    tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = this.playingChannel_0) != null ? tmp$.sources : null) != null ? tmp$_0.node : null) != null ? tmp$_1.getLinkOfHttpsGetAble() : null) != null ? tmp$_2 : '';
    tmp$_4 != null ? (tmp$_4.src = getLink() + '?sourceSrc=' + encodeURIComponent(tmp$_3)) : null;
    this.watchingCounter_0 = new WatchingCounter(channel);
    this.onTurnChannel_0();
  };
  function Player$videoTracks$lambda$ObjectLiteral() {
  }
  function Player$videoTracks$lambda$ObjectLiteral$on$lambda$lambda$ObjectLiteral() {
  }
  Player$videoTracks$lambda$ObjectLiteral$on$lambda$lambda$ObjectLiteral.prototype.onNodeChanged_t4rudg$ = function (preChangeNodeID, postChangeNodeID, preChangeNode, postChangeNode) {
    var tmp$, tmp$_0, tmp$_1;
    Player_getInstance().callIframePlayerFunction_0('onSetIframePlayerVideoTrack(' + Player_getInstance().kotlinValueToEvalScriptUseableValue_0(postChangeNode) + ')');
    tmp$_0 = 'RecentlyChannel' + toString((tmp$ = Player_getInstance().playingChannel_0) != null ? tmp$.number : null) + 'VideoTrackID';
    tmp$_1 = toString(postChangeNodeID);
    localStorage.setItem(tmp$_0, tmp$_1);
    VirtualRemote_getInstance().updateVideoInformation();
  };
  Player$videoTracks$lambda$ObjectLiteral$on$lambda$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ArrayLinkList$OnNodeEventListener]
  };
  function Player$videoTracks$lambda$ObjectLiteral$on$lambda$lambda(closure$tracks) {
    return function (track) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      Player_getInstance().videoTracks = TrackDescription$Companion_getInstance().fromIframePlayerReturnTrackDescriptionsToKotilnUseableTrackDescriptions_wn2jw4$(closure$tracks, track);
      Player_getInstance().videoTracks.addOnNodeEventListener_ljxrtv$(new Player$videoTracks$lambda$ObjectLiteral$on$lambda$lambda$ObjectLiteral());
      tmp$_3 = Player_getInstance().videoTracks;
      tmp$_0 = 'RecentlyChannel' + toString((tmp$ = Player_getInstance().playingChannel_0) != null ? tmp$.number : null) + 'VideoTrackID';
      tmp$_3.designated_za3lpa$((tmp$_2 = (tmp$_1 = localStorage.getItem(tmp$_0)) != null ? toIntOrNull(tmp$_1) : null) != null ? tmp$_2 : 0);
    };
  }
  function Player$videoTracks$lambda$ObjectLiteral$on$lambda(tracks) {
    Player_getInstance().callIframePlayerFunction_0('onGetIframePlayerVideoTrack(onReturn)', Player$videoTracks$lambda$ObjectLiteral$on$lambda$lambda(tracks));
  }
  Player$videoTracks$lambda$ObjectLiteral.prototype.on_mdxcb7$ = function (onPlayerEvent) {
    if (equals(onPlayerEvent, Player$OnPlayerEvent$playing_getInstance())) {
      Player_getInstance().videoTracks = ArrayLinkList_init([new TrackDescription(-5, '-------')]);
      Player_getInstance().callIframePlayerFunction_0('onGetIframePlayerVideoTracks(onReturn)', Player$videoTracks$lambda$ObjectLiteral$on$lambda);
    }};
  Player$videoTracks$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Player$OnPlayerEventListener]
  };
  function Player$videoTracks$lambda(this$Player) {
    return function () {
      this$Player.addOnPlayerEventListener_j8fzjz$(new Player$videoTracks$lambda$ObjectLiteral());
      return ArrayLinkList_init([new TrackDescription(-5, '-------')]);
    };
  }
  function Player$audioTracks$lambda$ObjectLiteral() {
  }
  function Player$audioTracks$lambda$ObjectLiteral$on$lambda$lambda$ObjectLiteral() {
  }
  Player$audioTracks$lambda$ObjectLiteral$on$lambda$lambda$ObjectLiteral.prototype.onNodeChanged_t4rudg$ = function (preChangeNodeID, postChangeNodeID, preChangeNode, postChangeNode) {
    var tmp$, tmp$_0, tmp$_1;
    Player_getInstance().callIframePlayerFunction_0('onSetIframePlayerAudioTrack(' + Player_getInstance().kotlinValueToEvalScriptUseableValue_0(postChangeNode) + ')');
    tmp$_0 = 'RecentlyChannel' + toString((tmp$ = Player_getInstance().playingChannel_0) != null ? tmp$.number : null) + 'AudioTrackID';
    tmp$_1 = toString(postChangeNodeID);
    localStorage.setItem(tmp$_0, tmp$_1);
    VirtualRemote_getInstance().updateAudioInformation();
  };
  Player$audioTracks$lambda$ObjectLiteral$on$lambda$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ArrayLinkList$OnNodeEventListener]
  };
  function Player$audioTracks$lambda$ObjectLiteral$on$lambda$lambda(closure$tracks) {
    return function (track) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      Player_getInstance().audioTracks = TrackDescription$Companion_getInstance().fromIframePlayerReturnTrackDescriptionsToKotilnUseableTrackDescriptions_wn2jw4$(closure$tracks, track);
      Player_getInstance().audioTracks.addOnNodeEventListener_ljxrtv$(new Player$audioTracks$lambda$ObjectLiteral$on$lambda$lambda$ObjectLiteral());
      tmp$_3 = Player_getInstance().audioTracks;
      tmp$_0 = 'RecentlyChannel' + toString((tmp$ = Player_getInstance().playingChannel_0) != null ? tmp$.number : null) + 'AudioTrackID';
      tmp$_3.designated_za3lpa$((tmp$_2 = (tmp$_1 = localStorage.getItem(tmp$_0)) != null ? toIntOrNull(tmp$_1) : null) != null ? tmp$_2 : 0);
    };
  }
  function Player$audioTracks$lambda$ObjectLiteral$on$lambda(tracks) {
    Player_getInstance().callIframePlayerFunction_0('onGetIframePlayerAudioTrack(onReturn)', Player$audioTracks$lambda$ObjectLiteral$on$lambda$lambda(tracks));
  }
  Player$audioTracks$lambda$ObjectLiteral.prototype.on_mdxcb7$ = function (onPlayerEvent) {
    if (equals(onPlayerEvent, Player$OnPlayerEvent$playing_getInstance())) {
      Player_getInstance().audioTracks = ArrayLinkList_init([new TrackDescription(-5, '-------')]);
      Player_getInstance().callIframePlayerFunction_0('onGetIframePlayerAudioTracks(onReturn)', Player$audioTracks$lambda$ObjectLiteral$on$lambda);
    }};
  Player$audioTracks$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Player$OnPlayerEventListener]
  };
  function Player$audioTracks$lambda(this$Player) {
    return function () {
      this$Player.addOnPlayerEventListener_j8fzjz$(new Player$audioTracks$lambda$ObjectLiteral());
      return ArrayLinkList_init([new TrackDescription(-5, '-------')]);
    };
  }
  function Player$subtitleTracks$lambda$ObjectLiteral() {
  }
  function Player$subtitleTracks$lambda$ObjectLiteral$on$lambda$lambda$ObjectLiteral() {
  }
  Player$subtitleTracks$lambda$ObjectLiteral$on$lambda$lambda$ObjectLiteral.prototype.onNodeChanged_t4rudg$ = function (preChangeNodeID, postChangeNodeID, preChangeNode, postChangeNode) {
    var tmp$, tmp$_0, tmp$_1;
    Player_getInstance().callIframePlayerFunction_0('onSetIframePlayerSubtitleTrack(' + Player_getInstance().kotlinValueToEvalScriptUseableValue_0(postChangeNode) + ')');
    tmp$_0 = 'RecentlyChannel' + toString((tmp$ = Player_getInstance().playingChannel_0) != null ? tmp$.number : null) + 'SubtitleTrackID';
    tmp$_1 = toString(postChangeNodeID);
    localStorage.setItem(tmp$_0, tmp$_1);
    VirtualRemote_getInstance().updateSubtitleInformation();
  };
  Player$subtitleTracks$lambda$ObjectLiteral$on$lambda$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ArrayLinkList$OnNodeEventListener]
  };
  function Player$subtitleTracks$lambda$ObjectLiteral$on$lambda$lambda(closure$tracks) {
    return function (track) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      Player_getInstance().subtitleTracks = TrackDescription$Companion_getInstance().fromIframePlayerReturnTrackDescriptionsToKotilnUseableTrackDescriptions_wn2jw4$(closure$tracks, track);
      Player_getInstance().subtitleTracks.addOnNodeEventListener_ljxrtv$(new Player$subtitleTracks$lambda$ObjectLiteral$on$lambda$lambda$ObjectLiteral());
      tmp$_3 = Player_getInstance().subtitleTracks;
      tmp$_0 = 'RecentlyChannel' + toString((tmp$ = Player_getInstance().playingChannel_0) != null ? tmp$.number : null) + 'SubtitleTrackID';
      tmp$_3.designated_za3lpa$((tmp$_2 = (tmp$_1 = localStorage.getItem(tmp$_0)) != null ? toIntOrNull(tmp$_1) : null) != null ? tmp$_2 : 0);
    };
  }
  function Player$subtitleTracks$lambda$ObjectLiteral$on$lambda(tracks) {
    Player_getInstance().callIframePlayerFunction_0('onGetIframePlayerSubtitleTrack(onReturn)', Player$subtitleTracks$lambda$ObjectLiteral$on$lambda$lambda(tracks));
  }
  Player$subtitleTracks$lambda$ObjectLiteral.prototype.on_mdxcb7$ = function (onPlayerEvent) {
    if (equals(onPlayerEvent, Player$OnPlayerEvent$playing_getInstance())) {
      Player_getInstance().subtitleTracks = ArrayLinkList_init([new TrackDescription(-5, '-------')]);
      Player_getInstance().callIframePlayerFunction_0('onGetIframePlayerSubtitleTracks(onReturn)', Player$subtitleTracks$lambda$ObjectLiteral$on$lambda);
    }};
  Player$subtitleTracks$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Player$OnPlayerEventListener]
  };
  function Player$subtitleTracks$lambda(this$Player) {
    return function () {
      this$Player.addOnPlayerEventListener_j8fzjz$(new Player$subtitleTracks$lambda$ObjectLiteral());
      return ArrayLinkList_init([new TrackDescription(-5, '-------')]);
    };
  }
  function Player$volumeUp$lambda$lambda(this$Player) {
    return function (volume) {
      this$Player.setVolume_14dthe$(volume + 1.0);
    };
  }
  function Player$volumeUp$lambda(this$Player) {
    return function () {
      this$Player.getVolume_huw4wd$(Player$volumeUp$lambda$lambda(this$Player));
    };
  }
  function Player$volumeDown$lambda$lambda(this$Player) {
    return function (volume) {
      this$Player.setVolume_14dthe$(volume - 1.0);
    };
  }
  function Player$volumeDown$lambda(this$Player) {
    return function () {
      this$Player.getVolume_huw4wd$(Player$volumeDown$lambda$lambda(this$Player));
    };
  }
  function Player$iframePlayerVolumeInit$lambda$ObjectLiteral() {
  }
  Player$iframePlayerVolumeInit$lambda$ObjectLiteral.prototype.on_mdxcb7$ = function (onPlayerEvent) {
    if (equals(onPlayerEvent, Player$OnPlayerEvent$playing_getInstance()))
      Player_getInstance().callIframePlayerFunction_0('onSetIframePlayerVolume(' + Player_getInstance().kotlinValueToEvalScriptUseableValue_0(Player_getInstance().volume_0) + ')');
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
  function Player$volumeMute$lambda$lambda(this$Player) {
    return function (muted) {
      this$Player.setMuted_6taknv$(!muted);
    };
  }
  function Player$volumeMute$lambda(this$Player) {
    return function () {
      this$Player.getMuted_y8twos$(Player$volumeMute$lambda$lambda(this$Player));
    };
  }
  function Player$iframePlayerMutedInit$lambda$ObjectLiteral() {
  }
  Player$iframePlayerMutedInit$lambda$ObjectLiteral.prototype.on_mdxcb7$ = function (onPlayerEvent) {
    if (equals(onPlayerEvent, Player$OnPlayerEvent$playing_getInstance()))
      Player_getInstance().setMuted_6taknv$(Player_getInstance().muted_0);
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
  function Player$onTurnChannel$lambda(this$Player) {
    return function () {
      var tmp$;
      tmp$ = this$Player.onPlayerEvents_0.iterator();
      while (tmp$.hasNext()) {
        var event = tmp$.next();
        event.on_mdxcb7$(Player$OnPlayerEvent$turnChannel_getInstance());
      }
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
  function Player$onDeviceNotSupportFormat$lambda(this$Player) {
    return function () {
      var tmp$;
      tmp$ = this$Player.onPlayerEvents_0.iterator();
      while (tmp$.hasNext()) {
        var event = tmp$.next();
        event.on_mdxcb7$(Player$OnPlayerEvent$deviceNotSupportFormat_getInstance());
      }
    };
  }
  function Player$onCannotReceiveChannelSignal$lambda(this$Player) {
    return function () {
      var tmp$;
      tmp$ = this$Player.onPlayerEvents_0.iterator();
      while (tmp$.hasNext()) {
        var event = tmp$.next();
        event.on_mdxcb7$(Player$OnPlayerEvent$cannotReceiveChannelSignal_getInstance());
      }
    };
  }
  function Player$onNoNetwork$lambda(this$Player) {
    return function () {
      var tmp$;
      tmp$ = this$Player.onPlayerEvents_0.iterator();
      while (tmp$.hasNext()) {
        var event = tmp$.next();
        event.on_mdxcb7$(Player$OnPlayerEvent$noNetwork_getInstance());
      }
    };
  }
  function Player$initListenIframePlayerMessage$lambda$lambda(this$Player) {
    return function (event) {
      var tmp$;
      try {
        var callMessage = JSON.parse(event.data.toString());
        if (callMessage.name == null) {
          return;
        } else if (callMessage.name == 'HKNBPCore') {
          tmp$ = this$Player.callIframePlayerFunctionList_0.iterator();
          while (tmp$.hasNext()) {
            var obj = tmp$.next();
            if (obj.id == callMessage.id) {
              obj.onReturn(callMessage.returnValue);
              this$Player.callIframePlayerFunctionList_0.remove_11rb$(obj);
            }}
        } else if (callMessage.name == 'IframePlayer') {
          var onPlaying = this$Player.onPlaying_0;
          var onNotPlaying = this$Player.onNotPlaying_0;
          var onDeviceNotSupportFormat = this$Player.onDeviceNotSupportFormat_0;
          var onCannotReceiveChannelSignal = this$Player.onCannotReceiveChannelSignal_0;
          var functionName = callMessage.functionName;
          if (equals(functionName, 'onPlaying') || equals(functionName, 'onNotPlaying') || equals(functionName, 'onError')) {
            eval(functionName + '()');
          }}} catch (e) {
        println('callIframePlayerFunction\u8870\u5DE6: ' + e.toString() + '\n' + ('JSON\u5B57\u4E32(message)\u5167\u5BB9: ' + event.data.toString()) + '\n' + ('Event\u5167\u5BB9: ' + JSON.stringify(event)));
      }
    };
  }
  function Player$initListenIframePlayerMessage$lambda(this$Player) {
    return function () {
      window.addEventListener('message', Player$initListenIframePlayerMessage$lambda$lambda(this$Player), false);
      return Unit;
    };
  }
  function Player_init$ObjectLiteral() {
    this.isPlayed_0 = false;
    this.isPlaying_0 = false;
    this.timerList_0 = ArrayList_init();
    this.notPlayingToPlayingFrequency_0 = 0;
    this.currentChannelNumber_0 = 0;
    this.currentChannelNotPlayingFrequency_0 = 0;
  }
  function Player_init$ObjectLiteral$on$lambda(this$) {
    return function () {
      if (!this$.isPlaying_0) {
        Player_getInstance().reload();
      }};
  }
  function Player_init$ObjectLiteral$on$lambda_0(this$) {
    return function () {
      if (!this$.isPlaying_0) {
        Player_getInstance().reloadIframePlayer();
      }};
  }
  function Player_init$ObjectLiteral$on$lambda_1(this$) {
    return function () {
      if (!this$.isPlaying_0) {
        Player_getInstance().reload();
      }};
  }
  Player_init$ObjectLiteral.prototype.on_mdxcb7$ = function (onPlayerEvent) {
    var tmp$;
    switch (onPlayerEvent.name) {
      case 'turnChannel':
        this.isPlayed_0 = false;
        break;
      case 'playing':
        this.isPlayed_0 = true;
        this.isPlaying_0 = true;
        tmp$ = this.timerList_0.iterator();
        while (tmp$.hasNext()) {
          var timer = tmp$.next();
          window.clearTimeout(timer);
        }

        this.timerList_0.clear();
        this.notPlayingToPlayingFrequency_0 = 0;
        break;
      case 'notPlaying':
        this.isPlaying_0 = false;
        if (this.notPlayingToPlayingFrequency_0 < 1) {
          this.timerList_0.add_11rb$(window.setInterval(Player_init$ObjectLiteral$on$lambda(this), 20000));
          this.timerList_0.add_11rb$(window.setTimeout(Player_init$ObjectLiteral$on$lambda_0(this), 1200000));
        }
        this.notPlayingToPlayingFrequency_0 = this.notPlayingToPlayingFrequency_0 + 1 | 0;
        break;
      case 'noNetwork':
        this.timerList_0.add_11rb$(window.setInterval(Player_init$ObjectLiteral$on$lambda_1(this), 30000));
        break;
    }
  };
  Player_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Player$OnPlayerEventListener]
  };
  Player.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Player',
    interfaces: [UserInterface]
  };
  var Player_instance = null;
  function Player_getInstance() {
    if (Player_instance === null) {
      new Player();
    }return Player_instance;
  }
  function PromptBox(message, time, promptBoxId, promptBox) {
    if (time === void 0)
      time = 3500;
    if (promptBoxId === void 0)
      promptBoxId = 'promptBox' + Random.Default.nextInt_vux9f0$(0, 99999999);
    if (promptBox === void 0)
      promptBox = PromptBox_init$lambda(promptBoxId)();
    UserInterface.call(this, promptBox);
    this.message = message;
    this.time = time;
    this.promptBoxId = promptBoxId;
    this.promptBox = promptBox;
    this.promptBox.innerHTML = this.message;
    this.show_s8ev37$(this.time);
  }
  PromptBox.prototype.hide = function () {
    var tmp$;
    UserInterface.prototype.hide.call(this);
    (Kotlin.isType(tmp$ = document.getElementById('dynamicUserInterfaceArea'), HTMLDivElement) ? tmp$ : throwCCE()).removeChild(this.promptBox);
  };
  function PromptBox_init$lambda(closure$promptBoxId) {
    return function () {
      var tmp$, tmp$_0;
      var promptBox = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : throwCCE();
      promptBox.id = closure$promptBoxId;
      promptBox.style.backgroundColor = '#111111';
      promptBox.style.cssFloat = 'right';
      promptBox.style.fontSize = '5vh';
      promptBox.style.display = 'none';
      promptBox.style.position = 'absolute';
      promptBox.style.bottom = '0';
      promptBox.style.right = '0';
      promptBox.style.paddingLeft = '1.5vh';
      promptBox.style.paddingRight = '1.5vh';
      promptBox.style.textAlign = 'center';
      promptBox.style.verticalAlign = 'middle';
      promptBox.style.zIndex = '100';
      var dynamicUserInterfaceArea = Kotlin.isType(tmp$_0 = document.getElementById('dynamicUserInterfaceArea'), HTMLDivElement) ? tmp$_0 : throwCCE();
      dynamicUserInterfaceArea.appendChild(promptBox);
      return promptBox;
    };
  }
  PromptBox.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PromptBox',
    interfaces: [UserInterface]
  };
  function RealRemote() {
    RealRemote_instance = this;
    this.enter_0 = 13;
    this.alt_0 = 18;
    this.pause_0 = 19;
    this.pageUp_0 = 33;
    this.pageDown_0 = 34;
    this.arrowLeft_0 = 37;
    this.arrowUp_0 = 38;
    this.arrowRight_0 = 39;
    this.arrowDown_0 = 40;
    this.digit0_0 = 48;
    this.digit1_0 = 49;
    this.digit2_0 = 50;
    this.digit3_0 = 51;
    this.digit4_0 = 52;
    this.digit5_0 = 53;
    this.digit6_0 = 54;
    this.digit7_0 = 55;
    this.digit8_0 = 56;
    this.digit9_0 = 57;
    this.minus_0 = 189;
    this.tizenColorF0Red_0 = 403;
    this.tizenColorF1Green_0 = 404;
    this.tizenColorF2Yellow_0 = 405;
    this.tizenColorF3Blue_0 = 406;
    this.tizenMediaRewind_0 = 412;
    this.tizenMediaFastForward_0 = 417;
    this.tizenMediaPlay_0 = 415;
    this.tizenMediaStop_0 = 413;
    this.tizenMediaRecord_0 = 416;
    this.tizenChannelUp_0 = 427;
    this.tizenChannelDown_0 = 428;
    this.tizenVolumeUp_0 = 447;
    this.tizenVolumeDown_0 = 448;
    this.tizenVolumeMute_0 = 449;
    this.tizenInfo_0 = 457;
    this.tizenGuide_0 = 458;
    this.tizenCaption_0 = 460;
    this.tizenBack_0 = 461;
    this.tizenSource_0 = 10072;
    this.tizenChannelList_0 = 10073;
    this.tizenTools_0 = 10135;
    this.tizenPictureSize_0 = 10140;
    this.tizenE_Manual_0 = 10146;
    this.tizenExit_0 = 10182;
    this.tizenPreviousChannel_0 = 10190;
    this.tizenMTS_0 = 10195;
    this.tizenKey_3D_0 = 10199;
    this.tizenTeletext_0 = 10200;
    this.tizenSearch_0 = 10225;
    this.tizenSoccer_0 = 10228;
    this.tizenMediaTrackPrevious_0 = 10232;
    this.tizenMediaTrackNext_0 = 10233;
    this.tizenMediaPlayPause_0 = 10252;
    this.tizenExtra_0 = 10253;
    $(window).on('keydown', RealRemote_init$lambda);
  }
  RealRemote.prototype.jqWindow_0 = function () {
    return $(window);
  };
  function RealRemote_init$lambda(event) {
    switch (toIntOrNull(event.which.toString())) {
      case 13:
        VirtualRemote_getInstance().centerButton.click();
        break;
      case 18:
        VirtualRemote_getInstance().menuButton.click();
        break;
      case 33:
        VirtualRemote_getInstance().nextChannelButton.click();
        break;
      case 34:
        VirtualRemote_getInstance().previousChannelButton.click();
        break;
      case 48:
        VirtualRemote_getInstance().number0Button.click();
        break;
      case 49:
        VirtualRemote_getInstance().number1Button.click();
        break;
      case 50:
        VirtualRemote_getInstance().number2Button.click();
        break;
      case 51:
        VirtualRemote_getInstance().number3Button.click();
        break;
      case 52:
        VirtualRemote_getInstance().number4Button.click();
        break;
      case 53:
        VirtualRemote_getInstance().number5Button.click();
        break;
      case 54:
        VirtualRemote_getInstance().number6Button.click();
        break;
      case 55:
        VirtualRemote_getInstance().number7Button.click();
        break;
      case 56:
        VirtualRemote_getInstance().number8Button.click();
        break;
      case 57:
        VirtualRemote_getInstance().number9Button.click();
        break;
      case 189:
        VirtualRemote_getInstance().minusButton.click();
        break;
      case 37:
        VirtualRemote_getInstance().leftButton.click();
        event.preventDefault();
        break;
      case 38:
        VirtualRemote_getInstance().upButton.click();
        event.preventDefault();
        break;
      case 39:
        VirtualRemote_getInstance().rightButton.click();
        event.preventDefault();
        break;
      case 40:
        VirtualRemote_getInstance().downButton.click();
        event.preventDefault();
        break;
      case 403:
        VirtualRemote_getInstance().programmableRedButton.click();
        break;
      case 404:
        VirtualRemote_getInstance().programmableGreenButton.click();
        break;
      case 405:
        VirtualRemote_getInstance().programmableYellowButton.click();
        break;
      case 406:
        VirtualRemote_getInstance().programmableBlueButton.click();
        break;
      case 427:
        VirtualRemote_getInstance().nextChannelButton.click();
        break;
      case 428:
        VirtualRemote_getInstance().previousChannelButton.click();
        break;
      case 447:
        VirtualRemote_getInstance().volumeUpButton.click();
        break;
      case 448:
        VirtualRemote_getInstance().volumeDownButton.click();
        break;
      case 449:
        VirtualRemote_getInstance().volumeMuteButton.click();
        break;
      case 457:
        VirtualRemote_getInstance().channelDescriptionButton.click();
        break;
      case 458:
        VirtualRemote_getInstance().epgButton.click();
        break;
      case 460:
        VirtualRemote_getInstance().nextSubtitleButton.click();
        break;
      case 461:
        VirtualRemote_getInstance().returnButton.click();
        break;
      case 10073:
        VirtualRemote_getInstance().epgButton.click();
        break;
      case 10135:
        VirtualRemote_getInstance().menuButton.click();
        break;
      case 10140:
        VirtualRemote_getInstance().nextVideoButton.click();
        break;
      case 10190:
        VirtualRemote_getInstance().lastTimeChannelButton.click();
        break;
      case 10195:
        VirtualRemote_getInstance().nextAudioButton.click();
        break;
    }
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
    }return RealRemote_instance;
  }
  function RunnerInfo() {
    RunnerInfo_instance = this;
    this.platform = platform;
  }
  RunnerInfo.prototype.getOsFamily = function () {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$_0 = (tmp$ = this.platform) != null ? tmp$.os : null) != null ? tmp$_0.family : null) != null ? tmp$_1.toString() : null;
  };
  RunnerInfo.prototype.getOsName = function () {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.platform) != null ? tmp$.os : null) != null ? tmp$_0.toString() : null;
  };
  RunnerInfo.prototype.getBrowserName = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    return ((tmp$_0 = (tmp$ = this.platform) != null ? tmp$.name : null) != null ? tmp$_0.toString() : null) + ' ' + ((tmp$_2 = (tmp$_1 = this.platform) != null ? tmp$_1.version : null) != null ? tmp$_2.toString() : null);
  };
  RunnerInfo.prototype.getIOSVersion = function () {
    var tmp$;
    var iOSVersion = typeof (tmp$ = function () {
      try {
        if (/iP(hone|od|ad)/.test(navigator.platform)) {
          var v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
          return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)][0];
        }} catch (e) {
        return null;
      }
      return null;
    }) === 'function' ? tmp$ : throwCCE();
    return iOSVersion();
  };
  RunnerInfo.prototype.isBelowIOS10 = function () {
    var tmp$;
    return equals(this.getOsFamily(), 'iOS') && ((tmp$ = this.getIOSVersion()) != null ? tmp$ : 10) < 10;
  };
  RunnerInfo.prototype.isTizen = function () {
    return equals(this.getOsFamily(), 'Tizen');
  };
  RunnerInfo.prototype.isWebOS = function () {
    var tmp$, tmp$_0;
    return 0 < ((tmp$_0 = (tmp$ = appVersion.match('webOS')) != null ? tmp$.length : null) != null ? tmp$_0 : 0);
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
    }return RunnerInfo_instance;
  }
  function ScreenOrientationButton() {
    ScreenOrientationButton_instance = this;
    var tmp$;
    UserInterface.call(this, Kotlin.isType(tmp$ = document.getElementById('screenOrientationButton'), HTMLElement) ? tmp$ : throwCCE());
    var tmp$_0;
    this.screenOrientationButton_0 = Kotlin.isType(tmp$_0 = document.getElementById('screenOrientationButton'), HTMLButtonElement) ? tmp$_0 : throwCCE();
    this.orientation_0 = screen.orientation || screen.mozOrientation;
    if (this.isNeedOrientation()) {
      this.show_s8ev37$(null);
    } else {
      this.hide();
    }
    this.screenOrientationButton_0.onclick = ScreenOrientationButton_init$lambda(this);
  }
  ScreenOrientationButton.prototype.isNeedOrientation = function () {
    return window.innerHeight >= window.innerWidth;
  };
  ScreenOrientationButton.prototype.currentType = function () {
    return this.orientation_0.type;
  };
  ScreenOrientationButton.prototype.orientation = function () {
    if (equals(this.currentType(), 'portrait') || equals(this.currentType(), 'portrait-primary') || equals(this.currentType(), 'portrait-secondary')) {
      FullScreenButton_getInstance().enterFullscreen();
      this.orientation_0.lock('landscape');
    } else {
      FullScreenButton_getInstance().exitFullscreen();
    }
  };
  function ScreenOrientationButton_init$lambda(this$ScreenOrientationButton) {
    return function (event) {
      this$ScreenOrientationButton.orientation();
    };
  }
  ScreenOrientationButton.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ScreenOrientationButton',
    interfaces: [UserInterface]
  };
  var ScreenOrientationButton_instance = null;
  function ScreenOrientationButton_getInstance() {
    if (ScreenOrientationButton_instance === null) {
      new ScreenOrientationButton();
    }return ScreenOrientationButton_instance;
  }
  function SettingWindow() {
    SettingWindow_instance = this;
    Window.call(this, '\u8A2D\u5B9A', '\n            <div style="display:flex;margin-bottom:1vh;margin-up:1vh;"><!--display:flex;-->\n                <div style="flex:1">\n                    \u81EA\u8A02\u983B\u9053:\n                <\/div>\n                <div style="flex:4">\n                    <button id="customChannelsSettingOpenButton" style="font-size:4vh;width:13vh;">\u8A2D\u7F6E<\/button>\n                <\/div>\n            <\/div>\n            <div style="display:none;margin-bottom:1vh;margin-up:1vh;"><!--display:flex;-->\n                <div style="flex:2">\n                    \u8A9E\u8A00:\n                <\/div>\n                <div style="flex:2">\n                    <button id="settingWindowLanguageSetHonJyutElegantSet" style="font-size:4vh;margin:1vh;width:23vh;">\n                        \u6F22\u6587-\u7CB5\u8A9E\u96C5\u8A00\n                    <\/button>\n                    <button id="settingWindowLanguageSetHonJyutColloquialSet" style="font-size:4vh;margin:1vh;width:23vh;">\n                        \u6F22\u6587-\u7CB5\u8A9E\u53E3\u8A9E\n                    <\/button>\n                    <button id="settingWindowLanguageSetEnglishSet" style="font-size:4vh;margin:1vh;width:23vh;">\n                        English\n                    <\/button>\n                    <button id="settingWindowLanguageSetPresetSet" style="font-size:4vh;margin:1vh;width:23vh;">\n                        \u9810\u8A2D\n                    <\/button>\n                <\/div>\n                <div style="flex:3">\n                    <input id="settingWindowLanguageSetLanguageISOCodeInput"\n                           style="font-size:6vh;width:28vh;margin:1vh;" type="text" placeholder="ISO Code">\n                    <select id="settingWindowLanguageSelectSequenceList" size="5"\n                            style="font-size:5vh;width:28vh;margin:1vh;">\n                    <\/select>\n                <\/div>\n                <div style="flex:1">\n                    <button id="settingWindowLanguageAddLanguage" style="font-size:6vh;margin:1vh;width:100%;">\n                        <i class="icon-font">&#xe82e;<\/i>\n                    <\/button>\n                    <button id="settingWindowLanguageMoveUpLanguage" style="font-size:6vh;margin:1vh;width:100%;">\n                        <i class="icon-font">&#xe821;<\/i>\n                    <\/button>\n                    <button id="settingWindowLanguageMoveDownLanguage" style="font-size:6vh;margin:1vh;width:100%;">\n                        <i class="icon-font">&#xe80a;<\/i>\n                    <\/button>\n                    <button id="settingWindowLanguageRemoveLanguage" style="font-size:6vh;margin:1vh;width:100%;">\n                        <i class="icon-font">&#xe82f;<\/i>\n                    <\/button>\n                <\/div>\n            <\/div>\n            <div style="display:flex;margin-bottom:1vh;margin-up:1vh;">\n                <div style="flex:1">\n                    \u8A2D\u5B9A\u79FB\u9664:\n                <\/div>\n                <div style="flex:4">\n                    <button id="clearSettingButton" style="font-size:5vh;width:13vh;"><i\n                            class="icon-font">&#xe82b;<\/i><\/button>\n                <\/div>\n            <\/div>\n            <div style="display:flex;margin-bottom:1vh;margin-up:1vh;">\n                <div style="flex:1">\n                    Dev\u6A21\u5F0F:\n                <\/div>\n                <div style="flex:4">\n                        <input id="DevModeCheckbox" type="checkbox" style="width:6vh;height:6vh;">\n                <\/div>\n            <\/div>\n        ');
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.customChannelsSettingOpenButton_0 = Kotlin.isType(tmp$ = document.getElementById('customChannelsSettingOpenButton'), HTMLButtonElement) ? tmp$ : throwCCE();
    this.clearSettingButton_0 = Kotlin.isType(tmp$_0 = document.getElementById('clearSettingButton'), HTMLButtonElement) ? tmp$_0 : throwCCE();
    this.devConsole = Kotlin.isType(tmp$_1 = document.getElementById('devConsole'), HTMLDivElement) ? tmp$_1 : throwCCE();
    this.devModeCheckbox_0 = Kotlin.isType(tmp$_2 = document.getElementById('DevModeCheckbox'), HTMLInputElement) ? tmp$_2 : throwCCE();
    this.initCustomChannelsSettingOpenButton();
    this.initClearSetting();
    this.initDevModeCheckbox();
  }
  function SettingWindow$initCustomChannelsSettingOpenButton$lambda(event) {
    CustomChannelsSettingWindow_getInstance().show_s8ev37$(null);
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
        this$SettingWindow.devConsole.style.display = 'block';
        try {
          var _devConsole = this$SettingWindow.devConsole;
          var _getConsoleLogs = getConsoleLogs;
          _devConsole.innerHTML = _getConsoleLogs();
          console.log = function (message) {
            console.logs.push(message);
            console.stdlog.apply(console, arguments);
            _devConsole.innerHTML = _getConsoleLogs();
            _devConsole.scrollTop = _devConsole.scrollHeight;
          };
        } catch (e) {
          println('DevModeCheckbox\u54C0\u5DE6: ' + e.toString());
        }
      } else {
        this$SettingWindow.devConsole.style.display = 'none';
      }
    };
  }
  SettingWindow.prototype.initDevModeCheckbox = function () {
    this.devModeCheckbox_0.onchange = SettingWindow$initDevModeCheckbox$lambda(this);
  };
  SettingWindow.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SettingWindow',
    interfaces: [Window]
  };
  var SettingWindow_instance = null;
  function SettingWindow_getInstance() {
    if (SettingWindow_instance === null) {
      new SettingWindow();
    }return SettingWindow_instance;
  }
  function ShareWindow() {
    ShareWindow_instance = this;
    var tmp$;
    TabbableUI.call(this, Kotlin.isType(tmp$ = document.getElementById('shareWindow'), HTMLElement) ? tmp$ : throwCCE());
    var tmp$_0, tmp$_1;
    this.hideButton_0 = Kotlin.isType(tmp$_0 = document.getElementById('shareWindowHideButton'), HTMLButtonElement) ? tmp$_0 : throwCCE();
    this.buttonList_0 = Kotlin.isType(tmp$_1 = document.getElementById('shareWindowShareButtonList'), HTMLDivElement) ? tmp$_1 : throwCCE();
    this.hideButton_0.onclick = ShareWindow_init$lambda(this);
  }
  ShareWindow.prototype.show_s8ev37$ = function (showTime) {
    TabbableUI.prototype.show_s8ev37$.call(this, showTime);
    this.buttonList_0.setAttribute('data-a2a-url', window.location.href);
  };
  function ShareWindow_init$lambda(this$ShareWindow) {
    return function (event) {
      this$ShareWindow.hide();
    };
  }
  ShareWindow.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ShareWindow',
    interfaces: [TabbableUI]
  };
  var ShareWindow_instance = null;
  function ShareWindow_getInstance() {
    if (ShareWindow_instance === null) {
      new ShareWindow();
    }return ShareWindow_instance;
  }
  function SubtitleDescription() {
    SubtitleDescription_instance = this;
    var tmp$;
    UserInterface.call(this, Kotlin.isType(tmp$ = document.getElementById('trackDescription'), HTMLElement) ? tmp$ : throwCCE());
    var tmp$_0;
    this.trackDescription_0 = Kotlin.isType(tmp$_0 = document.getElementById('trackDescription'), HTMLDivElement) ? tmp$_0 : throwCCE();
    this.subtitleIconHTML_0 = '<i class="icon-font nestle-bottom" style="display:inline;">&#xe81d;<\/i>';
  }
  SubtitleDescription.prototype.show_s8ev37$ = function (showTime) {
    var tmp$, tmp$_0, tmp$_1;
    UserInterface.prototype.show_s8ev37$.call(this, showTime);
    var subtitleNameHTML = '<div style=' + '"' + 'display:inline;' + '"' + '>' + ((tmp$_1 = (tmp$_0 = (tmp$ = Player_getInstance().subtitleTracks) != null ? tmp$.node : null) != null ? tmp$_0.name : null) != null ? tmp$_1 : '') + '<\/div>';
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
    }return SubtitleDescription_instance;
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
    }return Tab3dIndex$Companion_instance;
  }
  Tab3dIndex.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Tab3dIndex',
    interfaces: []
  };
  function TabbableUI(mainFrameElement, firstFocusJqElement, transpositionFocusHideTime, isFocusTriggerShowEventElement, isFocusOutHide) {
    TabbableUI$Companion_getInstance();
    if (firstFocusJqElement === void 0)
      firstFocusJqElement = null;
    if (transpositionFocusHideTime === void 0)
      transpositionFocusHideTime = 120000;
    if (isFocusTriggerShowEventElement === void 0)
      isFocusTriggerShowEventElement = true;
    if (isFocusOutHide === void 0)
      isFocusOutHide = false;
    UserInterface.call(this, mainFrameElement);
    this.firstFocusJqElement = firstFocusJqElement;
    this.transpositionFocusHideTime = transpositionFocusHideTime;
    this.isFocusTriggerShowEventElement = isFocusTriggerShowEventElement;
    this.isFocusOutHide = isFocusOutHide;
    this.isAddThisToTabbableUIList_elivbw$_0 = false;
    $(mainFrameElement).on('hover', 'button,select,option,input', TabbableUI_init$lambda(this));
    $(mainFrameElement).on('focus', 'button,select,option,input', TabbableUI_init$lambda_0(this));
    $(mainFrameElement).on('scroll', TabbableUI_init$lambda_1(this));
    $(mainFrameElement).on('mousemove', TabbableUI_init$lambda_2(this));
    UserInterface$Companion_getInstance().allUserInterfaceList.add_11rb$(this);
  }
  function TabbableUI$Companion() {
    TabbableUI$Companion_instance = this;
    this.tabbableUIList_0 = ArrayList_init();
  }
  TabbableUI$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TabbableUI$Companion_instance = null;
  function TabbableUI$Companion_getInstance() {
    if (TabbableUI$Companion_instance === null) {
      new TabbableUI$Companion();
    }return TabbableUI$Companion_instance;
  }
  TabbableUI.prototype.show_s8ev37$ = function (showTime) {
    var tmp$, tmp$_0;
    if (!this.isAddThisToTabbableUIList_elivbw$_0) {
      this.isAddThisToTabbableUIList_elivbw$_0 = true;
      tmp$ = TabbableUI$Companion_getInstance().tabbableUIList_0.iterator();
      while (tmp$.hasNext()) {
        var tabbableUI = tmp$.next();
        tabbableUI.pushEventHide();
      }
      TabbableUI$Companion_getInstance().tabbableUIList_0.add_11rb$(this);
    }UserInterface.prototype.show_s8ev37$.call(this, showTime);
    if ((tmp$_0 = this.firstFocusJqElement) != null) {
      tmp$_0.focus();
    }};
  TabbableUI.prototype.pushEventHide = function () {
    UserInterface.prototype.hide.call(this);
  };
  TabbableUI.prototype.hide = function () {
    var tmp$;
    UserInterface.prototype.hide.call(this);
    TabbableUI$Companion_getInstance().tabbableUIList_0.remove_11rb$(this);
    this.isAddThisToTabbableUIList_elivbw$_0 = false;
    (tmp$ = lastOrNull(TabbableUI$Companion_getInstance().tabbableUIList_0)) != null ? (tmp$.show_s8ev37$(this.transpositionFocusHideTime), Unit) : null;
  };
  function TabbableUI_init$lambda(this$TabbableUI) {
    return function (event) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      var isEquals = false;
      tmp$ = $(this).length;
      for (var i = 0; i < tmp$; i++) {
        tmp$_2 = (tmp$_1 = (tmp$_0 = this$TabbableUI.firstFocusJqElement) != null ? tmp$_0.length : null) != null ? tmp$_1 : 0;
        for (var j = 0; j < tmp$_2; j++) {
          if (equals($(this).get(i), (tmp$_3 = this$TabbableUI.firstFocusJqElement) != null ? tmp$_3.get(j) : null)) {
            isEquals = true;
          }}
      }
      if (!isEquals) {
        $(this).focus();
      }};
  }
  function TabbableUI_init$lambda_0(this$TabbableUI) {
    return function (event) {
      if (!$('this').is(':focus')) {
        this$TabbableUI.firstFocusJqElement = $(this);
        this$TabbableUI.setHideTimer_s8ev37$(this$TabbableUI.transpositionFocusHideTime);
      }};
  }
  function TabbableUI_init$lambda_1(this$TabbableUI) {
    return function (event) {
      this$TabbableUI.setHideTimer_s8ev37$(this$TabbableUI.transpositionFocusHideTime);
    };
  }
  function TabbableUI_init$lambda_2(this$TabbableUI) {
    return function (event) {
      this$TabbableUI.setHideTimer_s8ev37$(this$TabbableUI.transpositionFocusHideTime);
    };
  }
  TabbableUI.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TabbableUI',
    interfaces: [UserInterface]
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
        }}}
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
            }}}
      }}
    return trackDescriptions;
  };
  TrackDescription$Companion.prototype.fromIframePlayerReturnTrackDescriptionsToKotilnUseableTrackDescriptions_wn2jw4$ = function (fromIframePlayerGetTracksValue, fromIframePlayerGetTrackValue) {
    var tmp$;
    try {
      var trackDescriptions = this.sortTrackDescriptions_gwog88$(ArrayLinkList_init_1(JSON.parse(JSON.stringify(fromIframePlayerGetTracksValue))));
      trackDescriptions.designated_za3lpa$((tmp$ = this.toTracksNodeID_w1sgja$(trackDescriptions, JSON.parse(JSON.stringify(fromIframePlayerGetTrackValue)).id)) != null ? tmp$ : 0);
      return trackDescriptions;
    } catch (e) {
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
    }return TrackDescription$Companion_instance;
  }
  TrackDescription.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TrackDescription',
    interfaces: []
  };
  function UpdatePrompt() {
    UpdatePrompt_instance = this;
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
    }return UpdatePrompt_instance;
  }
  function UserControlPanel() {
    UserControlPanel_instance = this;
    var tmp$, tmp$_0;
    TabbableUI.call(this, Kotlin.isType(tmp$ = document.getElementById('userControlPanel'), HTMLElement) ? tmp$ : throwCCE(), $(Kotlin.isType(tmp$_0 = document.getElementById('onHeadNextAudioButton'), HTMLElement) ? tmp$_0 : throwCCE()));
    var tmp$_1;
    this.panel_0 = Kotlin.isType(tmp$_1 = document.getElementById('userControlPanel'), HTMLDivElement) ? tmp$_1 : throwCCE();
    this.onShowUserControlPanel = UserControlPanel$onShowUserControlPanel$lambda;
    this.onHideUserControlPanel = UserControlPanel$onHideUserControlPanel$lambda;
    VirtualRemote_getInstance();
    NativeAppInstallButton_getInstance();
    PictureInPictureButton_getInstance();
    ScreenOrientationButton_getInstance();
    FullScreenButton_getInstance();
    this.panel_0.onmousemove = UserControlPanel_init$lambda(this);
    this.panel_0.onscroll = UserControlPanel_init$lambda_0(this);
    if (RunnerInfo_getInstance().isBelowIOS10()) {
      window.setInterval(UserControlPanel_init$lambda_1(this), 1000);
    }}
  UserControlPanel.prototype.show_s8ev37$ = function (showTime) {
    TabbableUI.prototype.show_s8ev37$.call(this, showTime);
    this.onShowUserControlPanel();
  };
  UserControlPanel.prototype.hide = function () {
    TabbableUI.prototype.hide.call(this);
    this.onHideUserControlPanel();
  };
  function UserControlPanel$onShowUserControlPanel$lambda() {
  }
  function UserControlPanel$onHideUserControlPanel$lambda() {
  }
  function UserControlPanel_init$lambda(this$UserControlPanel) {
    return function (event) {
      event.stopPropagation();
      this$UserControlPanel.show_s8ev37$(30000);
    };
  }
  function UserControlPanel_init$lambda_0(this$UserControlPanel) {
    return function (event) {
      this$UserControlPanel.show_s8ev37$(30000);
    };
  }
  function UserControlPanel_init$lambda_1(this$UserControlPanel) {
    return function () {
      if (!this$UserControlPanel.isShow) {
        this$UserControlPanel.show_s8ev37$(null);
      }};
  }
  UserControlPanel.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'UserControlPanel',
    interfaces: [TabbableUI]
  };
  var UserControlPanel_instance = null;
  function UserControlPanel_getInstance() {
    if (UserControlPanel_instance === null) {
      new UserControlPanel();
    }return UserControlPanel_instance;
  }
  function UserControlPanelShower() {
    UserControlPanelShower_instance = this;
    var tmp$, tmp$_0;
    TabbableUI.call(this, Kotlin.isType(tmp$ = document.createElement('div'), HTMLElement) ? tmp$ : throwCCE(), $(Kotlin.isType(tmp$_0 = document.getElementById('userControlPanelShower'), HTMLElement) ? tmp$_0 : throwCCE()), null);
    var tmp$_1;
    this.shower_0 = Kotlin.isType(tmp$_1 = document.getElementById('userControlPanelShower'), HTMLButtonElement) ? tmp$_1 : throwCCE();
    this.hideMouseTimer_fjcaw6$_0 = 0;
    this.show_s8ev37$(null);
    this.shower_0.onclick = UserControlPanelShower_init$lambda;
    this.shower_0.onmousemove = UserControlPanelShower_init$lambda_0(this);
    this.shower_0.ondblclick = UserControlPanelShower_init$lambda_1;
    this.set_ontouchstart_0(this.shower_0, UserControlPanelShower_init$lambda_2);
    if (RunnerInfo_getInstance().isBelowIOS10()) {
      this.canTouchIframePlayerMode();
    }}
  UserControlPanelShower.prototype.get_ontouchstart_0 = function ($receiver) {
    return this.get_ontouchstart_0($receiver);
  };
  UserControlPanelShower.prototype.set_ontouchstart_0 = function ($receiver, value) {
  };
  Object.defineProperty(UserControlPanelShower.prototype, 'hideMouseTimer_0', {
    get: function () {
      return this.hideMouseTimer_fjcaw6$_0;
    },
    set: function (value) {
      window.clearTimeout(this.hideMouseTimer_fjcaw6$_0);
      this.hideMouseTimer_fjcaw6$_0 = value;
    }
  });
  UserControlPanelShower.prototype.show_s8ev37$ = function (showTime) {
    TabbableUI.prototype.show_s8ev37$.call(this, null);
    this.shower_0.style.cursor = 'auto';
  };
  function UserControlPanelShower$hide$lambda(this$UserControlPanelShower) {
    return function () {
      this$UserControlPanelShower.shower_0.style.cursor = 'none';
    };
  }
  UserControlPanelShower.prototype.hide = function () {
    this.hideMouseTimer_0 = window.setTimeout(UserControlPanelShower$hide$lambda(this), 2000);
  };
  UserControlPanelShower.prototype.setIframeOnClick_a4mwiz$ = function (iframeId, onClick) {
  };
  UserControlPanelShower.prototype.canTouchIframePlayerMode = function () {
    this.shower_0.style.top = 'auto';
    this.shower_0.style.height = '10vh';
    this.shower_0.innerHTML = '<i class="icon-font" style="font-size: 10vh;">&#xe831;<\/i>';
  };
  UserControlPanelShower.prototype.cannotTouchIframePlayerMode = function () {
    if (!equals(RunnerInfo_getInstance().getOsFamily(), 'iOS')) {
      this.shower_0.style.top = '0';
      this.shower_0.style.height = '100%';
      this.shower_0.innerHTML = '';
    }};
  function UserControlPanelShower_init$lambda(event) {
    UserControlPanel_getInstance().showHideAlternately_s8ev37$(30000);
    Player_getInstance().play();
  }
  function UserControlPanelShower_init$lambda$lambda(this$UserControlPanelShower) {
    return function () {
      this$UserControlPanelShower.shower_0.style.cursor = 'none';
    };
  }
  function UserControlPanelShower_init$lambda_0(this$UserControlPanelShower) {
    return function (event) {
      this$UserControlPanelShower.shower_0.style.cursor = 'auto';
      this$UserControlPanelShower.hideMouseTimer_0 = window.setTimeout(UserControlPanelShower_init$lambda$lambda(this$UserControlPanelShower), 2000);
    };
  }
  function UserControlPanelShower_init$lambda_1(event) {
    FullScreenButton_getInstance().enterExitFullScreenAlternately();
  }
  function UserControlPanelShower_init$lambda_2(event) {
    event.preventDefault();
    UserControlPanel_getInstance().showHideAlternately_s8ev37$(15000);
  }
  UserControlPanelShower.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'UserControlPanelShower',
    interfaces: [TabbableUI]
  };
  var UserControlPanelShower_instance = null;
  function UserControlPanelShower_getInstance() {
    if (UserControlPanelShower_instance === null) {
      new UserControlPanelShower();
    }return UserControlPanelShower_instance;
  }
  function UserInterface(mainFrameElement) {
    UserInterface$Companion_getInstance();
    this.mainFrameElement = mainFrameElement;
    this.hideTimer_1c3smv$_0 = 0;
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
    }return UserInterface$Companion_instance;
  }
  UserInterface.prototype.update = function () {
  };
  Object.defineProperty(UserInterface.prototype, 'hideTimer', {
    get: function () {
      return this.hideTimer_1c3smv$_0;
    },
    set: function (value) {
      window.clearTimeout(this.hideTimer_1c3smv$_0);
      this.hideTimer_1c3smv$_0 = value;
    }
  });
  Object.defineProperty(UserInterface.prototype, 'isShow', {
    get: function () {
      return !equals(this.mainFrameElement.style.display, 'none');
    }
  });
  function UserInterface$setHideTimer$lambda(this$UserInterface) {
    return function () {
      this$UserInterface.hide();
    };
  }
  UserInterface.prototype.setHideTimer_s8ev37$ = function (showTime) {
    var tmp$;
    if (showTime != null) {
      tmp$ = window.setTimeout(UserInterface$setHideTimer$lambda(this), showTime);
    } else {
      tmp$ = 0;
    }
    this.hideTimer = tmp$;
  };
  UserInterface.prototype.show_s8ev37$ = function (showTime) {
    this.mainFrameElement.style.display = 'block';
    this.setHideTimer_s8ev37$(showTime);
  };
  UserInterface.prototype.hide = function () {
    this.hideTimer = 0;
    this.mainFrameElement.style.display = 'none';
  };
  UserInterface.prototype.showHideAlternately_s8ev37$ = function (showTime) {
    if (this.isShow) {
      this.hide();
    } else {
      this.show_s8ev37$(showTime);
    }
  };
  UserInterface.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserInterface',
    interfaces: []
  };
  function VideoDescription() {
    VideoDescription_instance = this;
    var tmp$;
    UserInterface.call(this, Kotlin.isType(tmp$ = document.getElementById('trackDescription'), HTMLElement) ? tmp$ : throwCCE());
    var tmp$_0;
    this.trackDescription_0 = Kotlin.isType(tmp$_0 = document.getElementById('trackDescription'), HTMLDivElement) ? tmp$_0 : throwCCE();
    this.videoIconHTML_0 = '<i class="icon-font nestle-bottom" style="display:inline;">&#xe815;<\/i>';
  }
  VideoDescription.prototype.show_s8ev37$ = function (showTime) {
    var tmp$, tmp$_0;
    UserInterface.prototype.show_s8ev37$.call(this, showTime);
    var videoNameHTML = '<div style=' + '"' + 'display:inline;' + '"' + '>' + ((tmp$_0 = (tmp$ = Player_getInstance().videoTracks.node) != null ? tmp$.name : null) != null ? tmp$_0 : '') + '<\/div>';
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
    }return VideoDescription_instance;
  }
  function Comparator$ObjectLiteral_1(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_1.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_1.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareByDescending$lambda_0 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(b), selector(a));
      };
    };
  });
  function Comparator$ObjectLiteral_2(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_2.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_2.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareBy$lambda_0 = wrapFunction(function () {
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
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20, tmp$_21, tmp$_22, tmp$_23, tmp$_24, tmp$_25, tmp$_26, tmp$_27, tmp$_28, tmp$_29, tmp$_30, tmp$_31, tmp$_32, tmp$_33, tmp$_34, tmp$_35, tmp$_36, tmp$_37, tmp$_38, tmp$_39, tmp$_40, tmp$_41, tmp$_42, tmp$_43, tmp$_44, tmp$_45, tmp$_46, tmp$_47, tmp$_48, tmp$_49, tmp$_50, tmp$_51, tmp$_52, tmp$_53, tmp$_54, tmp$_55, tmp$_56, tmp$_57;
    this.virtualRemote = Kotlin.isType(tmp$ = document.getElementById('virtualRemote'), HTMLDivElement) ? tmp$ : throwCCE();
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
    this.feedbackWebWindowButton = Kotlin.isType(tmp$_40 = document.getElementById('feedbackWebButton'), HTMLButtonElement) ? tmp$_40 : throwCCE();
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
    this.hideVirtualRemoteButton.onclick = VirtualRemote_init$lambda;
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
    this.feedbackWebWindowButton.onclick = VirtualRemote_init$lambda_38;
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
    this.menuButton.onclick = VirtualRemote_init$lambda_50;
    this.videoDescriptionButton.onclick = VirtualRemote_init$lambda_51;
    this.audioDescriptionButton.onclick = VirtualRemote_init$lambda_52;
    this.subtitleDescriptionButton.onclick = VirtualRemote_init$lambda_53;
    this.volumeDescriptionButton.onclick = VirtualRemote_init$lambda_54;
    this.returnButton.onclick = VirtualRemote_init$lambda_55;
    this.update();
    channels.addOnNodeEventListener_ljxrtv$(new VirtualRemote_init$ObjectLiteral());
    channels.addOnElementsChangedListener_9f6p79$(new VirtualRemote_init$ObjectLiteral_0());
    Player_getInstance().addOnPlayerEventListener_j8fzjz$(new VirtualRemote_init$ObjectLiteral_1());
  }
  VirtualRemote.prototype.updateChannelDescription = function () {
    var tmp$, tmp$_0;
    var channelOptionHTMLString = '';
    tmp$ = channels.iterator();
    while (tmp$.hasNext()) {
      var channel = tmp$.next();
      channelOptionHTMLString = '' + ('<option value=' + channel.number + '>') + (toStringBackwardZeroPadding(channel.number, 3) + ' ' + channel.name) + '<\/option>' + channelOptionHTMLString;
    }
    this.designateChannelSelect.innerHTML = channelOptionHTMLString;
    this.designateChannelSelect.value = toString((tmp$_0 = channels.node) != null ? tmp$_0.number : null);
  };
  VirtualRemote.prototype.updateVideoInformation = function () {
    var tmp$, tmp$_0, tmp$_1;
    var videoOptionHTMLString = '';
    tmp$ = Player_getInstance().videoTracks.iterator();
    while (tmp$.hasNext()) {
      var videoTracks = tmp$.next();
      videoOptionHTMLString = '<option value=' + videoTracks.id + '>' + videoTracks.name + '<\/option>' + videoOptionHTMLString;
    }
    this.designateVideoSelect.innerHTML = videoOptionHTMLString;
    this.designateVideoSelect.value = ((tmp$_1 = (tmp$_0 = Player_getInstance().videoTracks.node) != null ? tmp$_0.id : null) != null ? tmp$_1 : 0).toString();
  };
  VirtualRemote.prototype.updateAudioInformation = function () {
    var tmp$, tmp$_0, tmp$_1;
    var audioOptionHTMLString = '';
    tmp$ = Player_getInstance().audioTracks.iterator();
    while (tmp$.hasNext()) {
      var audioTracks = tmp$.next();
      audioOptionHTMLString = '<option value=' + audioTracks.id + '>' + audioTracks.name + '<\/option>' + audioOptionHTMLString;
    }
    this.designateAudioSelect.innerHTML = audioOptionHTMLString;
    this.designateAudioSelect.value = ((tmp$_1 = (tmp$_0 = Player_getInstance().audioTracks.node) != null ? tmp$_0.id : null) != null ? tmp$_1 : 0).toString();
  };
  VirtualRemote.prototype.updateSubtitleInformation = function () {
    var tmp$, tmp$_0, tmp$_1;
    var subtitleOptionHTMLString = '';
    tmp$ = Player_getInstance().subtitleTracks.iterator();
    while (tmp$.hasNext()) {
      var subtitleTracks = tmp$.next();
      subtitleOptionHTMLString = '<option value=' + subtitleTracks.id + '>' + subtitleTracks.name + '<\/option>' + subtitleOptionHTMLString;
    }
    this.designateSubtitleSelect.innerHTML = subtitleOptionHTMLString;
    this.designateSubtitleSelect.value = ((tmp$_1 = (tmp$_0 = Player_getInstance().subtitleTracks.node) != null ? tmp$_0.id : null) != null ? tmp$_1 : 0).toString();
  };
  VirtualRemote.prototype.update = function () {
    this.updateChannelDescription();
    this.updateVideoInformation();
    this.updateAudioInformation();
    this.updateSubtitleInformation();
  };
  function VirtualRemote_init$lambda(event) {
    event.stopPropagation();
    UserControlPanel_getInstance().hide();
  }
  function VirtualRemote_init$lambda_0(event) {
    EPG_getInstance().showHideAlternately_s8ev37$(null);
  }
  function VirtualRemote_init$lambda_1(event) {
    channels.next();
  }
  function VirtualRemote_init$lambda_2(event) {
    channels.previous();
  }
  function VirtualRemote_init$lambda_3(this$VirtualRemote) {
    return function (event) {
      designatedByChannelNumber(channels, toInt(this$VirtualRemote.designateChannelSelect.value));
    };
  }
  function VirtualRemote_init$lambda_4(this$VirtualRemote) {
    return function (event) {
      designatedByChannelNumber(channels, toInt(this$VirtualRemote.designateChannelInputText.value));
    };
  }
  function VirtualRemote_init$lambda_5(event) {
    channels.lastTime();
  }
  function VirtualRemote_init$lambda_6(event) {
    Player_getInstance().nextVideoTrack();
    VideoDescription_getInstance().show_s8ev37$(3000);
  }
  function VirtualRemote_init$lambda_7(event) {
    Player_getInstance().previousVideoTrack();
    VideoDescription_getInstance().show_s8ev37$(3000);
  }
  function VirtualRemote_init$lambda_8(this$VirtualRemote) {
    return function (event) {
      Player_getInstance().designatedVideoTrack(toInt(this$VirtualRemote.designateVideoSelect.value));
      VideoDescription_getInstance().show_s8ev37$(3000);
    };
  }
  function VirtualRemote_init$lambda_9(event) {
    Player_getInstance().nextAudioTrack();
    AudioDescription_getInstance().show_s8ev37$(3000);
  }
  function VirtualRemote_init$lambda_10(event) {
    Player_getInstance().previousAudioTrack();
    AudioDescription_getInstance().show_s8ev37$(3000);
  }
  function VirtualRemote_init$lambda_11(this$VirtualRemote) {
    return function (event) {
      Player_getInstance().designatedAudioTrack(toInt(this$VirtualRemote.designateAudioSelect.value));
      AudioDescription_getInstance().show_s8ev37$(3000);
    };
  }
  function VirtualRemote_init$lambda_12(event) {
    Player_getInstance().nextAudioTrack();
    AudioDescription_getInstance().show_s8ev37$(3000);
  }
  function VirtualRemote_init$lambda_13(event) {
    Player_getInstance().nextSubtitleTrack();
    SubtitleDescription_getInstance().show_s8ev37$(3000);
  }
  function VirtualRemote_init$lambda_14(event) {
    Player_getInstance().previousSubtitleTrack();
    SubtitleDescription_getInstance().show_s8ev37$(3000);
  }
  function VirtualRemote_init$lambda_15(this$VirtualRemote) {
    return function (event) {
      Player_getInstance().designatedSubtitleTrack(toInt(this$VirtualRemote.designateSubtitleSelect.value));
      SubtitleDescription_getInstance().show_s8ev37$(3000);
    };
  }
  function VirtualRemote_init$lambda_16(event) {
    Player_getInstance().nextSubtitleTrack();
    SubtitleDescription_getInstance().show_s8ev37$(3000);
  }
  function VirtualRemote_init$lambda_17(event) {
    Player_getInstance().volumeMute();
  }
  function VirtualRemote_init$lambda_18(event) {
    Player_getInstance().volumeUp();
  }
  function VirtualRemote_init$lambda_19(event) {
    Player_getInstance().volumeDown();
  }
  function VirtualRemote_init$lambda_20(event) {
    Player_getInstance().programmable(Player$ProgrammableColor$red_getInstance());
  }
  function VirtualRemote_init$lambda_21(event) {
    Player_getInstance().programmable(Player$ProgrammableColor$green_getInstance());
  }
  function VirtualRemote_init$lambda_22(event) {
    Player_getInstance().programmable(Player$ProgrammableColor$yellow_getInstance());
  }
  function VirtualRemote_init$lambda_23(event) {
    Player_getInstance().programmable(Player$ProgrammableColor$blue_getInstance());
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
    Player_getInstance().reloadIframePlayer();
  }
  function VirtualRemote_init$lambda_36(event) {
    if (ChannelDescription_getInstance().isShow) {
      ChannelDescription_getInstance().hide();
    } else {
      ChannelDescription_getInstance().show_s8ev37$(60000);
    }
  }
  function VirtualRemote_init$lambda_37(event) {
    AboutWindow_getInstance().showHideAlternately_s8ev37$(null);
  }
  function VirtualRemote_init$lambda_38(event) {
    FeedbackWebWindow_getInstance().showHideAlternately_s8ev37$(null);
  }
  function VirtualRemote_init$lambda_39(event) {
    ShareWindow_getInstance().showHideAlternately_s8ev37$(null);
  }
  function VirtualRemote_init$lambda_40(event) {
    SettingWindow_getInstance().showHideAlternately_s8ev37$(null);
  }
  function VirtualRemote_init$lambda_41(event) {
    AppDownloadWindow_getInstance().showHideAlternately_s8ev37$(null);
  }
  function VirtualRemote_init$lambda_42(event) {
    window.open('https://github.com/HKNBP', '_blank');
  }
  function VirtualRemote_init$lambda_43(event) {
    window.open('https://drive.google.com/drive/folders/1c8rb7Yrfe8IV_32pSDGF9oP5n-7Qs3PO', '_blank');
  }
  function VirtualRemote_init$lambda_44(event) {
    window.open('https://datastudio.google.com/reporting/1GKlAWHEsDdryWh2PRdQFmWzQ_ksRQ8BK/page/1M', '_blank');
  }
  function VirtualRemote_init$lambda_45(event) {
    var focusingElement = $(':focus').get(0);
    if (!(Kotlin.isType(focusingElement, HTMLButtonElement) || Kotlin.isType(focusingElement, HTMLInputElement) || Kotlin.isType(focusingElement, HTMLSelectElement) || Kotlin.isType(focusingElement, HTMLOptionElement))) {
      $('#userControlPanelShower').focus();
    }if (!(RunnerInfo_getInstance().isTizen() || RunnerInfo_getInstance().isWebOS())) {
      $(':focus').click();
    }}
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
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    var selectables = $(':tabbable');
    var current = $(':focus');
    var currentIndex = (tmp$ = selectables.index(current)) != null ? tmp$ : 0;
    var currentTabIndex = Tab3dIndex$Companion_getInstance().toTab3dIndex_61zpoe$((tmp$_0 = current.attr('tabIndex')) != null ? tmp$_0 : '');
    for (var i = currentIndex - 1 | 0; i >= 0; i--) {
      var tabIndexForCheck = Tab3dIndex$Companion_getInstance().toTab3dIndex_61zpoe$((tmp$_1 = selectables.eq(i).attr('tabIndex')) != null ? tmp$_1 : '');
      if (tabIndexForCheck.y === currentTabIndex.y && tabIndexForCheck.z === currentTabIndex.z) {
        if (tabIndexForCheck.x >= currentTabIndex.x) {
          selectables.eq(i).focus();
          return;
        }}}
    var needTabIndex = {v: currentTabIndex};
    var tabIndexList = Tab3dIndex$Companion_getInstance().getTab3dIndexList_za3rmp$(selectables);
    if (tabIndexList.size > 1) {
      sortWith(tabIndexList, new Comparator$ObjectLiteral_1(compareByDescending$lambda_0(VirtualRemote_init$lambda$lambda)));
    }if (needTabIndex.v.y === last(tabIndexList).y) {
      needTabIndex.v = new Tab3dIndex(currentTabIndex.x, ((tmp$_3 = (tmp$_2 = getOrNull(tabIndexList, 0)) != null ? tmp$_2.y : null) != null ? tmp$_3 : 0) + 1 | 0, currentTabIndex.z);
    }var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_9;
      tmp$_9 = tabIndexList.iterator();
      loop_label: while (tmp$_9.hasNext()) {
        var element = tmp$_9.next();
        var predicate$result;
        predicate$break: do {
          if (needTabIndex.v.z === element.z) {
            predicate$result = needTabIndex.v.y > element.y;
            break predicate$break;
          }predicate$result = false;
        }
         while (false);
        if (predicate$result) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }}
      firstOrNull$result = null;
    }
     while (false);
    var nextTabIndex = (tmp$_4 = firstOrNull$result) != null ? tmp$_4 : new Tab3dIndex(0, 0, 0);
    var closestIndex = {v: null};
    for (var i_0 = (tmp$_5 = toIntOrNull(selectables.length.toString())) != null ? tmp$_5 : 0; i_0 >= 0; i_0--) {
      var tabIndexForCheck_0 = Tab3dIndex$Companion_getInstance().toTab3dIndex_61zpoe$((tmp$_6 = selectables.eq(i_0).attr('tabIndex')) != null ? tmp$_6 : '');
      if (tabIndexForCheck_0.y === nextTabIndex.y && tabIndexForCheck_0.z === nextTabIndex.z) {
        if (tabIndexForCheck_0.x === currentTabIndex.x) {
          selectables.eq(i_0).focus();
          return;
        }(tmp$_7 = closestIndex.v) != null ? tmp$_7 : (VirtualRemote_init$lambda$lambda_0(i_0, closestIndex)(), Unit);
      }}
    selectables.eq((tmp$_8 = closestIndex.v) != null ? tmp$_8 : 0).focus();
  }
  function VirtualRemote_init$lambda$lambda_1(element) {
    var tmp$;
    return (tmp$ = toIntOrNull(Tab3dIndex$Companion_getInstance().toUnparsedTabIndex_lvro24$(element))) != null ? tmp$ : 0;
  }
  function VirtualRemote_init$lambda_47(event) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    var selectables = $(':tabbable');
    var current = $(':focus');
    var currentIndex = (tmp$ = selectables.index(current)) != null ? tmp$ : 0;
    var currentTabIndex = Tab3dIndex$Companion_getInstance().toTab3dIndex_61zpoe$((tmp$_0 = current.attr('tabIndex')) != null ? tmp$_0 : '');
    tmp$_2 = (tmp$_1 = toIntOrNull(selectables.length.toString())) != null ? tmp$_1 : 0;
    for (var i = currentIndex + 1 | 0; i < tmp$_2; i++) {
      var tabIndexForCheck = Tab3dIndex$Companion_getInstance().toTab3dIndex_61zpoe$((tmp$_3 = selectables.eq(i).attr('tabIndex')) != null ? tmp$_3 : '');
      if (tabIndexForCheck.y === currentTabIndex.y && tabIndexForCheck.z === currentTabIndex.z) {
        if (tabIndexForCheck.x <= currentTabIndex.x) {
          selectables.eq(i).focus();
          return;
        }}}
    var needTabIndex = {v: currentTabIndex};
    var tabIndexList = Tab3dIndex$Companion_getInstance().getTab3dIndexList_za3rmp$(selectables);
    if (tabIndexList.size > 1) {
      sortWith(tabIndexList, new Comparator$ObjectLiteral_2(compareBy$lambda_0(VirtualRemote_init$lambda$lambda_1)));
    }if (needTabIndex.v.y === last(tabIndexList).y) {
      needTabIndex.v = new Tab3dIndex(currentTabIndex.x, -1, currentTabIndex.z);
    }var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_8;
      tmp$_8 = tabIndexList.iterator();
      loop_label: while (tmp$_8.hasNext()) {
        var element = tmp$_8.next();
        var predicate$result;
        predicate$break: do {
          if (needTabIndex.v.z === element.z) {
            predicate$result = needTabIndex.v.y < element.y;
            break predicate$break;
          }predicate$result = false;
        }
         while (false);
        if (predicate$result) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }}
      firstOrNull$result = null;
    }
     while (false);
    var nextTabIndex = (tmp$_4 = firstOrNull$result) != null ? tmp$_4 : new Tab3dIndex(0, 0, 0);
    var closestIndex = 0;
    tmp$_6 = ((tmp$_5 = toIntOrNull(selectables.length.toString())) != null ? tmp$_5 : 0) - 1 | 0;
    for (var i_0 = 0; i_0 < tmp$_6; i_0++) {
      var tabIndexForCheck_0 = Tab3dIndex$Companion_getInstance().toTab3dIndex_61zpoe$((tmp$_7 = selectables.eq(i_0).attr('tabIndex')) != null ? tmp$_7 : '');
      if (tabIndexForCheck_0.y === nextTabIndex.y && tabIndexForCheck_0.z === nextTabIndex.z) {
        if (tabIndexForCheck_0.x === currentTabIndex.x) {
          selectables.eq(i_0).focus();
          return;
        }closestIndex = i_0;
      }}
    selectables.eq(closestIndex).focus();
  }
  function VirtualRemote_init$lambda_48(event) {
    $.tabPrev();
  }
  function VirtualRemote_init$lambda_49(event) {
    $.tabNext();
  }
  function VirtualRemote_init$lambda_50(event) {
    UserControlPanel_getInstance().showHideAlternately_s8ev37$(60000);
  }
  function VirtualRemote_init$lambda_51(event) {
    VideoDescription_getInstance().show_s8ev37$(5000);
  }
  function VirtualRemote_init$lambda_52(event) {
    AudioDescription_getInstance().show_s8ev37$(5000);
  }
  function VirtualRemote_init$lambda_53(event) {
    SubtitleDescription_getInstance().show_s8ev37$(5000);
  }
  function VirtualRemote_init$lambda_54(event) {
    VolumeDescription_getInstance().show_s8ev37$(5000);
  }
  function VirtualRemote_init$lambda_55(event) {
    UserInterface$Companion_getInstance().hideAllUserInterface();
  }
  function VirtualRemote_init$ObjectLiteral() {
  }
  VirtualRemote_init$ObjectLiteral.prototype.onNodeChanged_t4rudg$ = function (preChangeNodeID, postChangeNodeID, preChangeNode, postChangeNode) {
    VirtualRemote_getInstance().update();
  };
  VirtualRemote_init$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ArrayLinkList$OnNodeEventListener]
  };
  function VirtualRemote_init$ObjectLiteral_0() {
  }
  VirtualRemote_init$ObjectLiteral_0.prototype.onElementsChanged = function () {
    VirtualRemote_getInstance().update();
  };
  VirtualRemote_init$ObjectLiteral_0.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ArrayLinkList$OnElementsChangedListener]
  };
  function VirtualRemote_init$ObjectLiteral_1() {
  }
  VirtualRemote_init$ObjectLiteral_1.prototype.on_mdxcb7$ = function (onPlayerEvent) {
    if (equals(onPlayerEvent, Player$OnPlayerEvent$playing_getInstance()))
      VirtualRemote_getInstance().update();
  };
  VirtualRemote_init$ObjectLiteral_1.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Player$OnPlayerEventListener]
  };
  VirtualRemote.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'VirtualRemote',
    interfaces: []
  };
  var VirtualRemote_instance = null;
  function VirtualRemote_getInstance() {
    if (VirtualRemote_instance === null) {
      new VirtualRemote();
    }return VirtualRemote_instance;
  }
  function VolumeDescription() {
    VolumeDescription_instance = this;
    var tmp$;
    UserInterface.call(this, Kotlin.isType(tmp$ = document.getElementById('volumeDescription'), HTMLElement) ? tmp$ : throwCCE());
    var tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    this.volumeUpButton_0 = Kotlin.isType(tmp$_0 = document.getElementById('volumeDescriptionVolumeUpButton'), HTMLButtonElement) ? tmp$_0 : throwCCE();
    this.volumeDownButton_0 = Kotlin.isType(tmp$_1 = document.getElementById('volumeDescriptionVolumeDownButton'), HTMLButtonElement) ? tmp$_1 : throwCCE();
    this.volumeValue_0 = Kotlin.isType(tmp$_2 = document.getElementById('volumeDescriptionVolumeValue'), HTMLDivElement) ? tmp$_2 : throwCCE();
    this.volumeIconList_0 = Kotlin.isType(tmp$_3 = document.getElementById('volumeDescriptionVolumeIconList'), HTMLDivElement) ? tmp$_3 : throwCCE();
    this.volumeIcon_0 = '<i class="icon-font">&#xe82a;<\/i>';
    this.volumeUpButton_0.onclick = VolumeDescription_init$lambda;
    this.volumeDownButton_0.onclick = VolumeDescription_init$lambda_0;
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
    Player_getInstance().getVolume_huw4wd$(VolumeDescription$show$lambda$lambda);
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
  VolumeDescription.prototype.show_s8ev37$ = function (showTime) {
    UserInterface.prototype.show_s8ev37$.call(this, showTime);
    var script = VolumeDescription$show$lambda;
    script();
    window.setTimeout(VolumeDescription$show$lambda_0(script), 100);
    window.setTimeout(VolumeDescription$show$lambda_1(script), 500);
    window.setTimeout(VolumeDescription$show$lambda_2(script), 1000);
    window.setTimeout(VolumeDescription$show$lambda_3(script), 10000);
    window.setTimeout(VolumeDescription$show$lambda_4(script), 60000);
  };
  function VolumeDescription_init$lambda(event) {
    Player_getInstance().volumeUp();
  }
  function VolumeDescription_init$lambda_0(event) {
    Player_getInstance().volumeDown();
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
    }return VolumeDescription_instance;
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
    }return WatchingCounter$Companion_instance;
  }
  function WatchingCounter_init$lambda(this$WatchingCounter) {
    return function () {
      this$WatchingCounter.iframeWatchingCounter_0.src = 'https://hknbp.org/watching-counter.html?' + ('channel=' + this$WatchingCounter.channel_0.number) + '&' + ('coreVersion=' + coreVersion) + '&' + ('appVersion=' + appVersion);
    };
  }
  WatchingCounter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WatchingCounter',
    interfaces: []
  };
  function WatchingCounterWebWindow() {
    WatchingCounterWebWindow_instance = this;
    Window.call(this, '', '\n            <iframe style="width:100%;height:100%;" frameBorder="0" src="https://datastudio.google.com/reporting/1GKlAWHEsDdryWh2PRdQFmWzQ_ksRQ8BK/page/1M"><\/iframe>\n        ', void 0, void 0, true);
  }
  WatchingCounterWebWindow.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'WatchingCounterWebWindow',
    interfaces: [Window]
  };
  var WatchingCounterWebWindow_instance = null;
  function WatchingCounterWebWindow_getInstance() {
    if (WatchingCounterWebWindow_instance === null) {
      new WatchingCounterWebWindow();
    }return WatchingCounterWebWindow_instance;
  }
  function Window(title, contentHTML, width, height, isBoundless, windowId, titleArea, closeButton, contentArea, window_0, focusOutArea, placeArea) {
    if (title === void 0)
      title = '';
    if (width === void 0)
      width = '100vh';
    if (height === void 0)
      height = '70vh';
    if (isBoundless === void 0)
      isBoundless = false;
    if (windowId === void 0)
      windowId = 'window' + Random.Default.nextInt_vux9f0$(0, 99999999);
    if (titleArea === void 0)
      titleArea = Window_init$lambda(title)();
    if (closeButton === void 0)
      closeButton = Window_init$lambda_0();
    if (contentArea === void 0)
      contentArea = Window_init$lambda_1(isBoundless, contentHTML)();
    if (window_0 === void 0)
      window_0 = Window_init$lambda_2(width, height, titleArea, closeButton, contentArea)();
    if (focusOutArea === void 0)
      focusOutArea = Window_init$lambda_3(window_0)();
    if (placeArea === void 0)
      placeArea = Window_init$lambda_4(windowId, focusOutArea)();
    TabbableUI.call(this, placeArea, $(closeButton), void 0, void 0, true);
    this.title = title;
    this.contentHTML = contentHTML;
    this.width = width;
    this.height = height;
    this.isBoundless = isBoundless;
    this.windowId = windowId;
    this.titleArea = titleArea;
    this.closeButton = closeButton;
    this.contentArea = contentArea;
    this.window = window_0;
    this.focusOutArea = focusOutArea;
    this.placeArea = placeArea;
    this.closeButton.onclick = Window_init$lambda_5(this);
    this.focusOutArea.onclick = Window_init$lambda_6(this);
  }
  function Window_init$lambda(closure$title) {
    return function () {
      var tmp$;
      var _title = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : throwCCE();
      _title.style.position = 'absolute';
      _title.style.top = '0';
      _title.style.left = '0';
      _title.style.fontWeight = 'bold';
      _title.style.zIndex = '91';
      _title.innerHTML = closure$title;
      return _title;
    };
  }
  function Window_init$lambda_0() {
    var tmp$;
    var closeButton = Kotlin.isType(tmp$ = document.createElement('button'), HTMLButtonElement) ? tmp$ : throwCCE();
    closeButton.style.background = 'rgba(0, 0, 0, 0)';
    closeButton.style.color = '#FFF';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '0';
    closeButton.style.right = '0';
    closeButton.style.width = '8vh';
    closeButton.style.height = '8vh';
    closeButton.style.fontWeight = 'bold';
    closeButton.style.fontSize = '6vh';
    closeButton.style.zIndex = '91';
    closeButton.innerHTML = '<i class="icon-font">&#xe801;<\/i>';
    return closeButton;
  }
  function Window_init$lambda_1(closure$isBoundless, closure$contentHTML) {
    return function () {
      var tmp$, tmp$_0, tmp$_1;
      var contentArea = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : throwCCE();
      contentArea.style.position = 'absolute';
      contentArea.style.top = '0';
      contentArea.style.bottom = '0';
      contentArea.style.left = '0';
      contentArea.style.right = '0';
      tmp$_1 = contentArea.style;
      if (closure$isBoundless) {
        tmp$_0 = '0';
      } else {
        tmp$_0 = '6vh';
      }
      tmp$_1.padding = tmp$_0;
      contentArea.style.overflowY = 'scroll';
      contentArea.innerHTML = closure$contentHTML;
      return contentArea;
    };
  }
  function Window_init$lambda$lambda(event) {
    event.stopPropagation();
  }
  function Window_init$lambda_2(closure$width, closure$height, closure$titleArea, closure$closeButton, closure$contentArea) {
    return function () {
      var tmp$;
      var window_0 = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : throwCCE();
      window_0.style.position = 'relative';
      window_0.style.width = closure$width;
      window_0.style.height = closure$height;
      window_0.style.backgroundColor = '#303030';
      window_0.style.cursor = 'auto';
      window_0.onclick = Window_init$lambda$lambda;
      window_0.appendChild(closure$titleArea);
      window_0.appendChild(closure$closeButton);
      window_0.appendChild(closure$contentArea);
      return window_0;
    };
  }
  function Window_init$lambda_3(closure$window) {
    return function () {
      var tmp$;
      var focusOutArea = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : throwCCE();
      focusOutArea.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
      focusOutArea.style.display = 'flex';
      focusOutArea.style.position = 'absolute';
      focusOutArea.style.top = '0';
      focusOutArea.style.bottom = '0';
      focusOutArea.style.left = '0';
      focusOutArea.style.right = '0';
      focusOutArea.style.zIndex = '90';
      focusOutArea.style.alignItems = 'center';
      focusOutArea.style.justifyContent = 'center';
      focusOutArea.tabIndex = -1;
      focusOutArea.appendChild(closure$window);
      return focusOutArea;
    };
  }
  function Window_init$lambda_4(closure$windowId, closure$focusOutArea) {
    return function () {
      var tmp$, tmp$_0;
      var placeArea = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : throwCCE();
      placeArea.id = closure$windowId;
      placeArea.style.display = 'none';
      placeArea.style.position = 'absolute';
      placeArea.style.top = '0';
      placeArea.style.bottom = '0';
      placeArea.style.left = '0';
      placeArea.style.right = '0';
      placeArea.style.zIndex = '90';
      placeArea.appendChild(closure$focusOutArea);
      var dynamicUserInterfaceArea = Kotlin.isType(tmp$_0 = document.getElementById('dynamicUserInterfaceArea'), HTMLDivElement) ? tmp$_0 : throwCCE();
      dynamicUserInterfaceArea.appendChild(placeArea);
      return placeArea;
    };
  }
  function Window_init$lambda_5(this$Window) {
    return function (event) {
      this$Window.hide();
    };
  }
  function Window_init$lambda_6(this$Window) {
    return function (event) {
      this$Window.hide();
    };
  }
  Window.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Window',
    interfaces: [TabbableUI]
  };
  function Comparator$ObjectLiteral_3(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_3.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_3.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareBy$lambda_1 = wrapFunction(function () {
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
      } else {
        tmp$_5 = number;
      }
    } else {
      tmp$_5 = null;
    }
    return tmp$_5;
  };
  XMLTV$Programme$EpisodeNum.prototype.getTotalSeason = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    if (equals(this.system, 'xmltv_ns')) {
      tmp$_5 = (tmp$_4 = (tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = this.episodeNum) != null ? split(tmp$, ['.']) : null) != null ? getOrNull(tmp$_0, 0) : null) != null ? split(tmp$_1, ['/']) : null) != null ? getOrNull(tmp$_2, 1) : null) != null ? Regex_init('[^0-9]').replace_x2uqeu$(tmp$_3, '') : null) != null ? toIntOrNull(tmp$_4) : null;
    } else {
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
      } else {
        tmp$_5 = number;
      }
    } else {
      tmp$_5 = null;
    }
    return tmp$_5;
  };
  XMLTV$Programme$EpisodeNum.prototype.getTotalEpisode = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    if (equals(this.system, 'xmltv_ns')) {
      tmp$_5 = (tmp$_4 = (tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = this.episodeNum) != null ? split(tmp$, ['.']) : null) != null ? getOrNull(tmp$_0, 1) : null) != null ? split(tmp$_1, ['/']) : null) != null ? getOrNull(tmp$_2, 1) : null) != null ? Regex_init('[^0-9]').replace_x2uqeu$(tmp$_3, '') : null) != null ? toIntOrNull(tmp$_4) : null;
    } else {
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
      } else {
        tmp$_5 = number;
      }
    } else {
      tmp$_5 = null;
    }
    return tmp$_5;
  };
  XMLTV$Programme$EpisodeNum.prototype.getTotalPart = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    if (equals(this.system, 'xmltv_ns')) {
      tmp$_5 = (tmp$_4 = (tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = this.episodeNum) != null ? split(tmp$, ['.']) : null) != null ? getOrNull(tmp$_0, 2) : null) != null ? split(tmp$_1, ['/']) : null) != null ? getOrNull(tmp$_2, 1) : null) != null ? Regex_init('[^0-9]').replace_x2uqeu$(tmp$_3, '') : null) != null ? toIntOrNull(tmp$_4) : null;
    } else {
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
      }}
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
      }}
    return null;
  };
  XMLTV$Programme$ProgrammeList.prototype.getClosestPreviousProgrammeByTime_qjzqsm$ = function (date) {
    var i = this.size - 1 | 0;
    while (0 < i) {
      if (XMLTV$Companion_getInstance().compareTo_fsx041$(this.get_za3lpa$(i).stop, date) <= 0) {
        return this.get_za3lpa$(i);
      }i = i - 1 | 0;
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
      sortWith($this, new Comparator$ObjectLiteral_3(compareBy$lambda_1(XMLTV$Programme$XMLTV$Programme$ProgrammeList_init$lambda)));
    }return $this;
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
      sortWith($this, new Comparator$ObjectLiteral_3(compareBy$lambda_1(XMLTV$Programme$XMLTV$Programme$ProgrammeList_init$lambda_0)));
    }return $this;
  }
  function XMLTV$Programme$XMLTV$Programme$ProgrammeList_init$lambda_0(programme) {
    return programme.start.getTime();
  }
  function XMLTV$Programme$XMLTV$Programme$ProgrammeList_init_2(elements, $this) {
    $this = $this || Object.create(XMLTV$Programme$ProgrammeList.prototype);
    ArrayList_init_1(elements, $this);
    XMLTV$Programme$ProgrammeList.call($this);
    if ($this.size > 1) {
      sortWith($this, new Comparator$ObjectLiteral_3(compareBy$lambda_1(XMLTV$Programme$XMLTV$Programme$ProgrammeList_init$lambda_1)));
    }return $this;
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
  function XMLTV$Companion$parseXMLTV$lambda(max, value) {
  }
  function XMLTV$Companion$parseXMLTV$lambda_0(closure$onParsedXMLTVListener, closure$epgID, this$XMLTV$) {
    return function (xmlHttp) {
      closure$onParsedXMLTVListener(this$XMLTV$.getXMLTV_0(xmlHttp.responseXML, closure$epgID));
    };
  }
  function XMLTV$Companion$parseXMLTV$lambda_1(closure$onFailedParseXMLTVListener) {
    return function () {
      closure$onFailedParseXMLTVListener();
    };
  }
  XMLTV$Companion.prototype.parseXMLTV_22edlo$ = function (onParsedXMLTVListener, onFailedParseXMLTVListener, epgID, xmltvSrc) {
    LoadFile_getInstance().load_1gxz9p$(XMLTV$Companion$parseXMLTV$lambda, XMLTV$Companion$parseXMLTV$lambda_0(onParsedXMLTVListener, epgID, this), XMLTV$Companion$parseXMLTV$lambda_1(onFailedParseXMLTVListener), xmltvSrc);
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
      }switch (timeZoneString.charCodeAt(0)) {
        case 43:
        case 45:
          timeZoneHour *= toDouble(String.fromCharCode(timeZoneString.charCodeAt(0)) + '1');
          timeZoneMinute *= toDouble(String.fromCharCode(timeZoneString.charCodeAt(0)) + '1');
          break;
        default:return null;
      }
      return numberToInt((timeZoneHour + timeZoneMinute / 60) * 60);
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        return null;
      } else
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
    } catch (e) {
      if (Kotlin.isType(e, Exception)) {
        return null;
      } else
        throw e;
    }
  };
  XMLTV$Companion.prototype.getXMLTV_0 = function (xmltvDoc, epgID) {
    var subElements = xmltvDoc != null ? xmltvDoc.getElementsByTagName('channel') : null;
    if (subElements == null || subElements.length < 1) {
      return new XMLTV();
    }var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      if (equals(subElement != null ? subElement.getAttribute('id') : null, epgID)) {
        return new XMLTV(this.getDisplayName_0(subElement), this.getIcon_0(subElement), this.getUrls_0(subElement), this.getProgrammes_0(xmltvDoc, epgID));
      }i = i + 1 | 0;
    }
    return new XMLTV();
  };
  XMLTV$Companion.prototype.getDisplayName_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('displayName') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }var multiLangDisplayName = new MultiLanguageString();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var lang = this.getLang_0(subElement);
      var displayName = subElement != null ? subElement.textContent : null;
      if (displayName != null) {
        multiLangDisplayName.add_11rb$(new MultiLanguageString$LanguageString(lang != null ? lang : '', displayName));
      }i = i + 1 | 0;
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
    }return new XMLTV$Icon(this.getSrc_0(subElements[0]), this.getWidth_0(subElements[0]), this.getHeight_0(subElements[0]));
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
    }var urls = ArrayList_init();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var url = subElement != null ? subElement.textContent : null;
      if (url != null) {
        urls.add_11rb$(url);
      }i = i + 1 | 0;
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
    }var programmes = XMLTV$Programme$XMLTV$Programme$ProgrammeList_init();
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
        }}i = i + 1 | 0;
    }
    if (programmes.size > 1) {
      sortWith(programmes, new Comparator$ObjectLiteral_3(compareBy$lambda_1(XMLTV$Companion$getProgrammes$lambda)));
    }return programmes;
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
    }var multiLangTitle = new MultiLanguageString();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var lang = this.getLang_0(subElement);
      var title = subElement != null ? subElement.textContent : null;
      if (title != null) {
        multiLangTitle.add_11rb$(new MultiLanguageString$LanguageString(lang != null ? lang : '', title));
      }i = i + 1 | 0;
    }
    return multiLangTitle;
  };
  XMLTV$Companion.prototype.getSubTitle_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('sub-title') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }var multiLangSubTitle = new MultiLanguageString();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var lang = this.getLang_0(subElement);
      var subTitle = subElement != null ? subElement.textContent : null;
      if (subTitle != null) {
        multiLangSubTitle.add_11rb$(new MultiLanguageString$LanguageString(lang != null ? lang : '', subTitle));
      }i = i + 1 | 0;
    }
    return multiLangSubTitle;
  };
  XMLTV$Companion.prototype.getDesc_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('desc') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }var multiLangDesc = new MultiLanguageString();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var lang = this.getLang_0(subElement);
      var desc = subElement != null ? subElement.textContent : null;
      if (desc != null) {
        multiLangDesc.add_11rb$(new MultiLanguageString$LanguageString(lang != null ? lang : '', desc));
      }i = i + 1 | 0;
    }
    return multiLangDesc;
  };
  XMLTV$Companion.prototype.getCredits_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('credits') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }return new XMLTV$Programme$Credits(this.getDirectors_0(subElements[0]), this.getActors_0(subElements[0]), this.getWriters_0(subElements[0]), this.getAdapters_0(subElements[0]), this.getProducers_0(subElements[0]), this.getComposers_0(subElements[0]), this.getEditors_0(subElements[0]), this.getPresenters_0(subElements[0]), this.getCommentators_0(subElements[0]), this.getGuests_0(subElements[0]));
  };
  XMLTV$Companion.prototype.getDirectors_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('director') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }var directors = ArrayList_init();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var director = subElement != null ? subElement.textContent : null;
      if (director != null) {
        directors.add_11rb$(director);
      }i = i + 1 | 0;
    }
    return directors;
  };
  XMLTV$Companion.prototype.getActors_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('actor') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }var actors = ArrayList_init();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var role = this.getRole_0(subElement);
      var actor = subElement != null ? subElement.textContent : null;
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
    }var writers = ArrayList_init();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var writer = subElement != null ? subElement.textContent : null;
      if (writer != null) {
        writers.add_11rb$(writer);
      }i = i + 1 | 0;
    }
    return writers;
  };
  XMLTV$Companion.prototype.getAdapters_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('adapter') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }var adapters = ArrayList_init();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var adapter = subElement != null ? subElement.textContent : null;
      if (adapter != null) {
        adapters.add_11rb$(adapter);
      }i = i + 1 | 0;
    }
    return adapters;
  };
  XMLTV$Companion.prototype.getProducers_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('producer') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }var producers = ArrayList_init();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var producer = subElement != null ? subElement.textContent : null;
      if (producer != null) {
        producers.add_11rb$(producer);
      }i = i + 1 | 0;
    }
    return producers;
  };
  XMLTV$Companion.prototype.getComposers_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('composer') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }var composers = ArrayList_init();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var composer = subElement != null ? subElement.textContent : null;
      if (composer != null) {
        composers.add_11rb$(composer);
      }i = i + 1 | 0;
    }
    return composers;
  };
  XMLTV$Companion.prototype.getEditors_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('editor') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }var editors = ArrayList_init();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var editor = subElement != null ? subElement.textContent : null;
      if (editor != null) {
        editors.add_11rb$(editor);
      }i = i + 1 | 0;
    }
    return editors;
  };
  XMLTV$Companion.prototype.getPresenters_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('presenter') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }var presenters = ArrayList_init();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var presenter = subElement != null ? subElement.textContent : null;
      if (presenter != null) {
        presenters.add_11rb$(presenter);
      }i = i + 1 | 0;
    }
    return presenters;
  };
  XMLTV$Companion.prototype.getCommentators_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('commentator') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }var commentators = ArrayList_init();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var commentator = subElement != null ? subElement.textContent : null;
      if (commentator != null) {
        commentators.add_11rb$(commentator);
      }i = i + 1 | 0;
    }
    return commentators;
  };
  XMLTV$Companion.prototype.getGuests_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('guest') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }var guests = ArrayList_init();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var guest = subElement != null ? subElement.textContent : null;
      if (guest != null) {
        guests.add_11rb$(guest);
      }i = i + 1 | 0;
    }
    return guests;
  };
  XMLTV$Companion.prototype.getDate_0 = function (element) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = element != null ? element.getElementsByTagName('date') : null) != null ? tmp$[0] : null) != null ? tmp$_0.textContent : null;
  };
  XMLTV$Companion.prototype.getCategory_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('category') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }var multiLangCategory = new MultiLanguageString();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var lang = this.getLang_0(subElement);
      var category = subElement != null ? subElement.textContent : null;
      if (category != null) {
        multiLangCategory.add_11rb$(new MultiLanguageString$LanguageString(lang != null ? lang : '', category));
      }i = i + 1 | 0;
    }
    return multiLangCategory;
  };
  XMLTV$Companion.prototype.getKeyword_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('keyword') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }var multiLangKeyword = new MultiLanguageString();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var lang = this.getLang_0(subElement);
      var keyword = subElement != null ? subElement.textContent : null;
      if (keyword != null) {
        multiLangKeyword.add_11rb$(new MultiLanguageString$LanguageString(lang != null ? lang : '', keyword));
      }i = i + 1 | 0;
    }
    return multiLangKeyword;
  };
  XMLTV$Companion.prototype.getLanguage_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('language') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }var multiLangLanguage = new MultiLanguageString();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var lang = this.getLang_0(subElement);
      var language = subElement != null ? subElement.textContent : null;
      if (language != null) {
        multiLangLanguage.add_11rb$(new MultiLanguageString$LanguageString(lang != null ? lang : '', language));
      }i = i + 1 | 0;
    }
    return multiLangLanguage;
  };
  XMLTV$Companion.prototype.getOrigLanguage_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('origLanguage') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }var multiLangOrigLanguage = new MultiLanguageString();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var lang = this.getLang_0(subElement);
      var origLanguage = subElement != null ? subElement.textContent : null;
      if (origLanguage != null) {
        multiLangOrigLanguage.add_11rb$(new MultiLanguageString$LanguageString(lang != null ? lang : '', origLanguage));
      }i = i + 1 | 0;
    }
    return multiLangOrigLanguage;
  };
  XMLTV$Companion.prototype.getLength_0 = function (element) {
    var tmp$;
    var subElements = element != null ? element.getElementsByTagName('length') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }return new XMLTV$Programme$Length(this.getUnits_0(subElements[0]), (tmp$ = subElements[0]) != null ? tmp$.textContent : null);
  };
  XMLTV$Companion.prototype.getUnits_0 = function (element) {
    return element != null ? element.getAttribute('units') : null;
  };
  XMLTV$Companion.prototype.getCountry_0 = function (element) {
    var tmp$;
    var subElements = element != null ? element.getElementsByTagName('country') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }var multiLangCountry = new MultiLanguageString();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var lang = this.getLang_0(subElement);
      var country = (tmp$ = (element != null ? element.getElementsByTagName('wcountry') : null)[i]) != null ? tmp$.textContent : null;
      if (country != null) {
        multiLangCountry.add_11rb$(new MultiLanguageString$LanguageString(lang != null ? lang : '', country));
      }i = i + 1 | 0;
    }
    return multiLangCountry;
  };
  XMLTV$Companion.prototype.getEpisodeNum_0 = function (element) {
    var tmp$;
    var subElements = element != null ? element.getElementsByTagName('episode-num') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }return new XMLTV$Programme$EpisodeNum(this.getSystem_0(subElements[0]), (tmp$ = subElements[0]) != null ? tmp$.textContent : null);
  };
  XMLTV$Companion.prototype.getSystem_0 = function (element) {
    return element != null ? element.getAttribute('system') : null;
  };
  XMLTV$Companion.prototype.getVideo_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('video') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }return new XMLTV$Programme$Video(this.getPresent_0(subElements[0]), this.getColour_0(subElements[0]), this.getAspect_0(subElements[0]), this.getQuality_0(subElements[0]));
  };
  XMLTV$Companion.prototype.getPresent_0 = function (element) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = element != null ? element.getElementsByTagName('present') : null) != null ? tmp$[0] : null) != null ? tmp$_0.textContent : null;
  };
  XMLTV$Companion.prototype.getColour_0 = function (element) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = element != null ? element.getElementsByTagName('colour') : null) != null ? tmp$[0] : null) != null ? tmp$_0.textContent : null;
  };
  XMLTV$Companion.prototype.getAspect_0 = function (element) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = element != null ? element.getElementsByTagName('aspect') : null) != null ? tmp$[0] : null) != null ? tmp$_0.textContent : null;
  };
  XMLTV$Companion.prototype.getQuality_0 = function (element) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = element != null ? element.getElementsByTagName('quality') : null) != null ? tmp$[0] : null) != null ? tmp$_0.textContent : null;
  };
  XMLTV$Companion.prototype.getAudio_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('audio') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }return new XMLTV$Programme$Audio(this.getPresent_0(subElements[0]), this.getStereo_0(subElements[0]));
  };
  XMLTV$Companion.prototype.getStereo_0 = function (element) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = element != null ? element.getElementsByTagName('stereo') : null) != null ? tmp$[0] : null) != null ? tmp$_0.textContent : null;
  };
  XMLTV$Companion.prototype.getPreviouslyShown_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('previously-shown') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }return new XMLTV$Programme$PreviouslyShown(this.getStart_0(subElements[0]), this.getChannel_0(subElements[0]));
  };
  XMLTV$Companion.prototype.getChannel_0 = function (element) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = element != null ? element.getElementsByTagName('channel') : null) != null ? tmp$[0] : null) != null ? tmp$_0.textContent : null;
  };
  XMLTV$Companion.prototype.getPremiere_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('premiere') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }var multiLangPremiere = new MultiLanguageString();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var lang = this.getLang_0(subElement);
      var premiere = subElement != null ? subElement.textContent : null;
      if (premiere != null) {
        multiLangPremiere.add_11rb$(new MultiLanguageString$LanguageString(lang != null ? lang : '', premiere));
      }i = i + 1 | 0;
    }
    return multiLangPremiere;
  };
  XMLTV$Companion.prototype.getLastChance_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('last-chance') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }var multiLangLastChance = new MultiLanguageString();
    var i = 0;
    while (i < subElements.length) {
      var subElement = subElements[i];
      var lang = this.getLang_0(subElement);
      var lastChance = subElement != null ? subElement.textContent : null;
      if (lastChance != null) {
        multiLangLastChance.add_11rb$(new MultiLanguageString$LanguageString(lang != null ? lang : '', lastChance));
      }i = i + 1 | 0;
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
    }return new XMLTV$Programme$Subtitles(this.getType_0(subElements[0]), toString(this.getLanguage_0(subElements[0])));
  };
  XMLTV$Companion.prototype.getType_0 = function (element) {
    return element != null ? element.getAttribute('type') : null;
  };
  XMLTV$Companion.prototype.getRating_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('rating') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }return new XMLTV$Programme$Rating(this.getSystem_0(subElements[0]), this.getValue_0(subElements[0]), this.getIcon_0(subElements[0]));
  };
  XMLTV$Companion.prototype.getValue_0 = function (element) {
    return element != null ? element.getAttribute('value') : null;
  };
  XMLTV$Companion.prototype.getStarRating_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('star-rating') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }return new XMLTV$Programme$StarRating(this.getSystem_0(subElements[0]), this.getValue_0(subElements[0]), this.getIcon_0(subElements[0]));
  };
  XMLTV$Companion.prototype.getReview_0 = function (element) {
    var subElements = element != null ? element.getElementsByTagName('review') : null;
    if (subElements == null || subElements.length < 1) {
      return null;
    }var multiLangType = new MultiLanguageString();
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
      var review = subElement != null ? subElement.textContent : null;
      if (type != null) {
        multiLangType.add_11rb$(new MultiLanguageString$LanguageString(lang != null ? lang : '', type));
      }if (source != null) {
        multiLangSource.add_11rb$(new MultiLanguageString$LanguageString(lang != null ? lang : '', source));
      }if (reviewer != null) {
        multiLangReviewer.add_11rb$(new MultiLanguageString$LanguageString(lang != null ? lang : '', reviewer));
      }if (review != null) {
        multiLangReview.add_11rb$(new MultiLanguageString$LanguageString(lang != null ? lang : '', review));
      }i = i + 1 | 0;
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
    }return XMLTV$Companion_instance;
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
  ArrayLinkList.OnElementsChangedListener = ArrayLinkList$OnElementsChangedListener;
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
  package$hknbp_core.designatedByChannelNumber_fxc9mp$ = designatedByChannelNumber;
  package$hknbp_core.changeToRecentlyWatchedChannel_rkhcm7$ = changeToRecentlyWatchedChannel;
  Object.defineProperty(package$hknbp_core, 'channels', {
    get: function () {
      return channels;
    }
  });
  package$hknbp_core.parseChannels_ld0ywg$ = parseChannels;
  package$hknbp_core.parseChannels_pdl1vz$ = parseChannels_0;
  package$hknbp_core.toXMLString_qjwm3l$ = toXMLString;
  Object.defineProperty(package$hknbp_core, 'ChannelDescription', {
    get: ChannelDescription_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'ConsentPanel', {
    get: ConsentPanel_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'CustomChannels', {
    get: CustomChannels_getInstance
  });
  CustomChannelsSettingWindow.prototype.ChannelOption = CustomChannelsSettingWindow$ChannelOption;
  Object.defineProperty(package$hknbp_core, 'CustomChannelsSettingWindow', {
    get: CustomChannelsSettingWindow_getInstance
  });
  Object.defineProperty(Dialogue, 'Companion', {
    get: Dialogue$Companion_getInstance
  });
  package$hknbp_core.Dialogue = Dialogue;
  package$hknbp_core.DialogueBox = DialogueBox;
  Object.defineProperty(package$hknbp_core, 'DocumentStoreWindow', {
    get: DocumentStoreWindow_getInstance
  });
  $$importsForInline$$.HKNBP_Core = _;
  Object.defineProperty(package$hknbp_core, 'EPG', {
    get: EPG_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'EnteringNumberBox', {
    get: EnteringNumberBox_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'FeedbackWebWindow', {
    get: FeedbackWebWindow_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'FullScreenButton', {
    get: FullScreenButton_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'GithubWebWindow', {
    get: GithubWebWindow_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'jq', {
    get: get_jq
  });
  package$hknbp_core.jqThis = jqThis;
  package$hknbp_core.get_length_vwohdt$ = get_length;
  package$hknbp_core.on_pdziuy$ = on;
  package$hknbp_core.on_hpc46g$ = on_0;
  package$hknbp_core.on_qwka2j$ = on_1;
  package$hknbp_core.on_v89ba5$ = on_2;
  package$hknbp_core.on_zc05ld$ = on_3;
  package$hknbp_core.on_drqu84$ = on_4;
  package$hknbp_core.index_vwohdt$ = index;
  package$hknbp_core.index_v89ba5$ = index_0;
  package$hknbp_core.index_k8fgrm$ = index_1;
  package$hknbp_core.index_5kxll9$ = index_2;
  package$hknbp_core.eq_fjcsf1$ = eq;
  package$hknbp_core.focus_vwohdt$ = focus;
  package$hknbp_core.focus_656v9o$ = focus_0;
  package$hknbp_core.focus_rgoa8n$ = focus_1;
  package$hknbp_core.scrollTop_vwohdt$ = scrollTop;
  package$hknbp_core.scrollTop_o1vs4d$ = scrollTop_0;
  package$hknbp_core.scrollLeft_vwohdt$ = scrollLeft;
  package$hknbp_core.scrollLeft_o1vs4d$ = scrollLeft_0;
  package$hknbp_core.mouseleave_vwohdt$ = mouseleave;
  package$hknbp_core.mouseleave_656v9o$ = mouseleave_0;
  package$hknbp_core.mouseleave_rgoa8n$ = mouseleave_1;
  package$hknbp_core.mouseout_vwohdt$ = mouseout;
  package$hknbp_core.mouseout_656v9o$ = mouseout_0;
  package$hknbp_core.mouseout_rgoa8n$ = mouseout_1;
  package$hknbp_core.tabPrev_vwohdt$ = tabPrev;
  package$hknbp_core.tabNext_vwohdt$ = tabNext;
  package$hknbp_core.css_v89ba5$ = css;
  package$hknbp_core.css_u5828f$ = css_0;
  package$hknbp_core.css_siqd7z$ = css_1;
  package$hknbp_core.css_zc05ld$ = css_2;
  package$hknbp_core.css_5msqvn$ = css_3;
  package$hknbp_core.css_pm4xy9$ = css_4;
  package$hknbp_core.prev_v89ba5$ = prev;
  package$hknbp_core.children_v89ba5$ = children;
  package$hknbp_core.find_v89ba5$ = find;
  package$hknbp_core.find_k8fgrm$ = find_0;
  package$hknbp_core.find_5kxll9$ = find_1;
  package$hknbp_core.get_vwohdt$ = get_0;
  package$hknbp_core.get_fjcsf1$ = get_1;
  package$hknbp_core.ajax_v89ba5$ = ajax;
  package$hknbp_core.ajax_m2903z$ = ajax_0;
  package$hknbp_core.ajax_pm4xy9$ = ajax_1;
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
  package$hknbp_core.toStringBackwardZeroPadding_dqglrj$ = toStringBackwardZeroPadding;
  package$hknbp_core.toNegative_s8ev3n$ = toNegative;
  package$hknbp_core.updateURLParameter_puj7f4$ = updateURLParameter;
  Object.defineProperty(package$hknbp_core, 'rootURL', {
    get: function () {
      return rootURL;
    }
  });
  Object.defineProperty(package$hknbp_core, 'coreVersion', {
    get: function () {
      return coreVersion;
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
  Object.defineProperty(Player$OnPlayerEvent, 'turnChannel', {
    get: Player$OnPlayerEvent$turnChannel_getInstance
  });
  Object.defineProperty(Player$OnPlayerEvent, 'playing', {
    get: Player$OnPlayerEvent$playing_getInstance
  });
  Object.defineProperty(Player$OnPlayerEvent, 'notPlaying', {
    get: Player$OnPlayerEvent$notPlaying_getInstance
  });
  Object.defineProperty(Player$OnPlayerEvent, 'deviceNotSupportFormat', {
    get: Player$OnPlayerEvent$deviceNotSupportFormat_getInstance
  });
  Object.defineProperty(Player$OnPlayerEvent, 'cannotReceiveChannelSignal', {
    get: Player$OnPlayerEvent$cannotReceiveChannelSignal_getInstance
  });
  Object.defineProperty(Player$OnPlayerEvent, 'noNetwork', {
    get: Player$OnPlayerEvent$noNetwork_getInstance
  });
  Player.prototype.OnPlayerEvent = Player$OnPlayerEvent;
  Player.prototype.OnPlayerEventListener = Player$OnPlayerEventListener;
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
  Player.prototype.ProgrammableColor = Player$ProgrammableColor;
  Object.defineProperty(package$hknbp_core, 'Player', {
    get: Player_getInstance
  });
  package$hknbp_core.PromptBox = PromptBox;
  Object.defineProperty(package$hknbp_core, 'RealRemote', {
    get: RealRemote_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'RunnerInfo', {
    get: RunnerInfo_getInstance
  });
  Object.defineProperty(package$hknbp_core, 'ScreenOrientationButton', {
    get: ScreenOrientationButton_getInstance
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
  Object.defineProperty(TabbableUI, 'Companion', {
    get: TabbableUI$Companion_getInstance
  });
  package$hknbp_core.TabbableUI = TabbableUI;
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
  Object.defineProperty(package$hknbp_core, 'UserControlPanelShower', {
    get: UserControlPanelShower_getInstance
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
  Object.defineProperty(package$hknbp_core, 'WatchingCounterWebWindow', {
    get: WatchingCounterWebWindow_getInstance
  });
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
  channels = channels$lambda();
  initConsoleLogsListener = initConsoleLogsListener$lambda();
  getConsoleLogs = getConsoleLogs$lambda;
  rootURL = 'https://hknbp.org/';
  coreVersion = coreVersion$lambda();
  appVersion = coreVersion + '-PWA';
  main([]);
  Kotlin.defineModule('HKNBP_Core', _);
  return _;
}(typeof HKNBP_Core === 'undefined' ? {} : HKNBP_Core, kotlin);
