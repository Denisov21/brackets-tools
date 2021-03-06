/*
 * Copyright (c) 2012 Yasin Kuyu - twitter.com/yasinkuyu. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, brackets, window, $, Mustache, navigator */

define(function (require, exports, module) {
    "use strict";
    
    // Brackets modules
    var PreferencesManager          = brackets.getModule("preferences/PreferencesManager"),
        Commands                    = brackets.getModule("command/Commands"),
        CommandManager              = brackets.getModule("command/CommandManager"),
        ExtensionUtils              = brackets.getModule("utils/ExtensionUtils"),
        Strings                     = brackets.getModule("strings"),
        StringUtils                 = brackets.getModule("utils/StringUtils"),
        Menus                       = brackets.getModule("command/Menus"),
        DefaultDialogs              = brackets.getModule("widgets/DefaultDialogs"),
        Dialogs                     = brackets.getModule("widgets/Dialogs"),
        wordHighlight               = require("lib/wordHighlight"),
        newDocument                 = require("lib/newDoc"),
        stringConvert               = require("lib/stringConvert"),
        Localize                    = require("strings");
    
    /* Extension const */
    var commandId                   = "insya-command",
        menuId                      = "insya-menu",
        moduleName                  = "insya-module";
    
    /* Extension's preferences */
    var prefs = PreferencesManager.getExtensionPrefs(moduleName);

    ExtensionUtils.loadStyleSheet(module, "styles/styles.css");
    // More tools coming soon...
    
});
