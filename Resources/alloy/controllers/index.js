function Controller() {
    function doClickMaps() {
        Ti.Platform.openURL("maps://maps.google.com/maps?q=440+Bernardo+Ave,+Mountain+View,+CA&hl=en&sll=42.746632,-75.770041&sspn=6.364676,10.305176&oq=44&hnear=440+Bernardo+Ave,+Mountain+View,+Santa+Clara,+California+94043&t=m&z=17");
    }
    function doClickSMS() {
        Ti.Platform.openURL("sms:+12345678901");
    }
    function doClickDialer() {
        Ti.Platform.openURL("tel://408-555-1234");
    }
    function doClickYouTube() {
        Ti.Platform.openURL("http://www.youtube.com/watch?v=iodEa0eitag");
    }
    function doClickStore() {
        alert("This example won't work in the simulator, You must run it on a device");
    }
    function urlParser(url) {
        url = url.replace(/[Uu]rlschemes:\/\/\?/, "");
        return url.split("&");
    }
    function grabArguments() {
        var args = Ti.App.getArguments();
        if (args.url) {
            var parsedArgs = urlParser(args.url);
            switch (parsedArgs[0]) {
              case "maps":
                doClickMaps();
                break;

              case "youtube":
                doClickYouTube();
            }
        }
    }
    function doClickSkype() {
        Ti.Platform.openURL("skype://");
    }
    function doClickGmail() {
        Ti.Platform.openURL("googlemail://");
    }
    function doClickSafari() {
        Ti.Platform.openURL("http://");
    }
    function doClickMusic() {
        Ti.Platform.openURL("music://");
    }
    function doClickBook() {
        Ti.Platform.openURL("ibooks://");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        height: "100%",
        width: "100%",
        contentHeight: "auto",
        contentWidth: "auto"
    });
    $.__views.index.add($.__views.scrollView);
    $.__views.containView = Ti.UI.createView({
        layout: "vertical",
        id: "containView"
    });
    $.__views.scrollView.add($.__views.containView);
    $.__views.btn_maps = Ti.UI.createButton({
        top: 20,
        width: "90%",
        height: "40dp",
        color: "black",
        title: "Open Maps",
        id: "btn_maps"
    });
    $.__views.containView.add($.__views.btn_maps);
    doClickMaps ? $.__views.btn_maps.addEventListener("click", doClickMaps) : __defers["$.__views.btn_maps!click!doClickMaps"] = true;
    $.__views.btn_sms = Ti.UI.createButton({
        top: 20,
        width: "90%",
        height: "40dp",
        color: "black",
        title: "Open SMS",
        id: "btn_sms"
    });
    $.__views.containView.add($.__views.btn_sms);
    doClickSMS ? $.__views.btn_sms.addEventListener("click", doClickSMS) : __defers["$.__views.btn_sms!click!doClickSMS"] = true;
    $.__views.btn_dialer = Ti.UI.createButton({
        top: 20,
        width: "90%",
        height: "40dp",
        color: "black",
        title: "Open Dialer",
        id: "btn_dialer"
    });
    $.__views.containView.add($.__views.btn_dialer);
    doClickDialer ? $.__views.btn_dialer.addEventListener("click", doClickDialer) : __defers["$.__views.btn_dialer!click!doClickDialer"] = true;
    $.__views.btn_youtube = Ti.UI.createButton({
        top: 20,
        width: "90%",
        height: "40dp",
        color: "black",
        title: "Open YouTube",
        id: "btn_youtube"
    });
    $.__views.containView.add($.__views.btn_youtube);
    doClickYouTube ? $.__views.btn_youtube.addEventListener("click", doClickYouTube) : __defers["$.__views.btn_youtube!click!doClickYouTube"] = true;
    $.__views.btn_store = Ti.UI.createButton({
        top: 20,
        width: "90%",
        height: "40dp",
        color: "black",
        title: "Open App Store / Market",
        id: "btn_store"
    });
    $.__views.containView.add($.__views.btn_store);
    doClickStore ? $.__views.btn_store.addEventListener("click", doClickStore) : __defers["$.__views.btn_store!click!doClickStore"] = true;
    $.__views.btn_skype = Ti.UI.createButton({
        top: 20,
        width: "90%",
        height: "40dp",
        color: "black",
        title: "Open Skype",
        id: "btn_skype"
    });
    $.__views.containView.add($.__views.btn_skype);
    doClickSkype ? $.__views.btn_skype.addEventListener("click", doClickSkype) : __defers["$.__views.btn_skype!click!doClickSkype"] = true;
    $.__views.btn_gmail = Ti.UI.createButton({
        top: 20,
        width: "90%",
        height: "40dp",
        color: "black",
        title: "Open Gmail",
        id: "btn_gmail"
    });
    $.__views.containView.add($.__views.btn_gmail);
    doClickGmail ? $.__views.btn_gmail.addEventListener("click", doClickGmail) : __defers["$.__views.btn_gmail!click!doClickGmail"] = true;
    $.__views.btn_safari = Ti.UI.createButton({
        top: 20,
        width: "90%",
        height: "40dp",
        color: "black",
        title: "Open Safari",
        id: "btn_safari"
    });
    $.__views.containView.add($.__views.btn_safari);
    doClickSafari ? $.__views.btn_safari.addEventListener("click", doClickSafari) : __defers["$.__views.btn_safari!click!doClickSafari"] = true;
    $.__views.btn_music = Ti.UI.createButton({
        top: 20,
        width: "90%",
        height: "40dp",
        color: "black",
        title: "Open Music",
        id: "btn_music"
    });
    $.__views.containView.add($.__views.btn_music);
    doClickMusic ? $.__views.btn_music.addEventListener("click", doClickMusic) : __defers["$.__views.btn_music!click!doClickMusic"] = true;
    $.__views.btn_Book = Ti.UI.createButton({
        top: 20,
        width: "90%",
        height: "40dp",
        color: "black",
        title: "Open iBook",
        id: "btn_Book"
    });
    $.__views.containView.add($.__views.btn_Book);
    doClickBook ? $.__views.btn_Book.addEventListener("click", doClickBook) : __defers["$.__views.btn_Book!click!doClickBook"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    grabArguments();
    Ti.App.addEventListener("resumed", grabArguments);
    $.index.open();
    __defers["$.__views.btn_maps!click!doClickMaps"] && $.__views.btn_maps.addEventListener("click", doClickMaps);
    __defers["$.__views.btn_sms!click!doClickSMS"] && $.__views.btn_sms.addEventListener("click", doClickSMS);
    __defers["$.__views.btn_dialer!click!doClickDialer"] && $.__views.btn_dialer.addEventListener("click", doClickDialer);
    __defers["$.__views.btn_youtube!click!doClickYouTube"] && $.__views.btn_youtube.addEventListener("click", doClickYouTube);
    __defers["$.__views.btn_store!click!doClickStore"] && $.__views.btn_store.addEventListener("click", doClickStore);
    __defers["$.__views.btn_skype!click!doClickSkype"] && $.__views.btn_skype.addEventListener("click", doClickSkype);
    __defers["$.__views.btn_gmail!click!doClickGmail"] && $.__views.btn_gmail.addEventListener("click", doClickGmail);
    __defers["$.__views.btn_safari!click!doClickSafari"] && $.__views.btn_safari.addEventListener("click", doClickSafari);
    __defers["$.__views.btn_music!click!doClickMusic"] && $.__views.btn_music.addEventListener("click", doClickMusic);
    __defers["$.__views.btn_Book!click!doClickBook"] && $.__views.btn_Book.addEventListener("click", doClickBook);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;