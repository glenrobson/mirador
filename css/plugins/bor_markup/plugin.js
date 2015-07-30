/**
 * plugin.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

/*jshint unused:false */
/*global tinymce:true */

/**
 * Example plugin that adds a toolbar button and menu item.
 */
tinymce.PluginManager.add('bor_markup', function (editor, url) {
    // Add a button for rank
    editor.addButton('rank', {
      text: 'rank',
      tooltip: 'Highlight Rank',
      icon: false,
      style:'color:red;',
        onPostRender: function () {
            var button = this;
            editor.on('NodeChange', function (e) {
                if (editor.formatter.match('rank')) {
                    button.active(true);
                } else {
                    button.active(false);
                }
            });
        },
        onclick: function () {
            selection = tinyMCE.activeEditor.selection.getContent();
            node = tinymce.activeEditor.selection.getNode();
            nodeName = node.nodeName;

            if (nodeName !== 'SPAN'|| (nodeName === 'SPAN' && tinyMCE.activeEditor.dom.getAttrib(node, 'id') === '_mce_caret')) {
                tinymce.activeEditor.formatter.toggle('rank');
                tinymce.activeEditor.theme.panel.find('toolbar *').active(false);
                this.active(true);
            } else if (tinyMCE.activeEditor.dom.getAttrib(node, 'class') === 'rank') {
                tinymce.activeEditor.formatter.toggle('rank');
                this.active(false);
            } else {
                tinyMCE.activeEditor.dom.setAttrib(node, 'property', 'ns:rank');
                tinyMCE.activeEditor.dom.setAttrib(node, 'class', 'rank');
                tinymce.activeEditor.theme.panel.find('toolbar *').active(false);
                this.active(true);
            }
        }
    })
    editor.addButton('name', {
        text: 'name',
        icon: false,
        onPostRender: function () {
            var button = this;
            editor.on('NodeChange', function (e) {
                if (editor.formatter.match('name')) {
                    button.active(true);
                } else {
                    button.active(false);
                }
            });
        },
        onclick: function () {
            selection = tinyMCE.activeEditor.selection.getContent();
            node = tinymce.activeEditor.selection.getNode();
            nodeName = node.nodeName;

            if (nodeName !== 'SPAN' || (nodeName === 'SPAN' && tinyMCE.activeEditor.dom.getAttrib(node, 'id') === '_mce_caret')) {
                tinymce.activeEditor.formatter.toggle('name');
                tinymce.activeEditor.theme.panel.find('toolbar *').active(false);
                this.active(true);
            } else if (tinyMCE.activeEditor.dom.getAttrib(node, 'class') === 'name') {
                tinymce.activeEditor.formatter.toggle('name');
                this.active(false);
            } else {
                tinyMCE.activeEditor.dom.setAttrib(node, 'property', 'ns:name');
                tinyMCE.activeEditor.dom.setAttrib(node, 'class', 'name');
                tinymce.activeEditor.theme.panel.find('toolbar *').active(false);
                this.active(true);
            }
        }
    })
    editor.addButton('ship', {
        text: 'ship',
        icon: false,
        onPostRender: function () {
            var button = this;
            editor.on('NodeChange', function (e) {
                if (editor.formatter.match('ship')) {
                    button.active(true);
                } else {
                    button.active(false);
                }
            });
        },
        onclick: function () {
            selection = tinyMCE.activeEditor.selection.getContent();
            node = tinymce.activeEditor.selection.getNode();
            nodeName = node.nodeName;

            if (nodeName !== 'SPAN' || (nodeName === 'SPAN' && tinyMCE.activeEditor.dom.getAttrib(node, 'id') === '_mce_caret')) {
                tinymce.activeEditor.formatter.toggle('ship');
                tinymce.activeEditor.theme.panel.find('toolbar *').active(false);
                this.active(true);
            } else if (tinyMCE.activeEditor.dom.getAttrib(node, 'class') === 'ship') {
                tinymce.activeEditor.formatter.toggle('ship');
                this.active(false);
            } else {
                tinyMCE.activeEditor.dom.setAttrib(node, 'property', 'ns:ship');
                tinyMCE.activeEditor.dom.setAttrib(node, 'class', 'ship');
                tinymce.activeEditor.theme.panel.find('toolbar *').active(false);
                this.active(true);
            }
        }
    })
    editor.addButton('place', {
        text: 'place',
        icon: false,
        onPostRender: function () {
            var button = this;
            editor.on('NodeChange', function (e) {
                if (editor.formatter.match('place')) {
                    button.active(true);
                } else {
                    button.active(false);
                }
            });
        },
        onclick: function () {
            selection = tinyMCE.activeEditor.selection.getContent();
            node = tinymce.activeEditor.selection.getNode();
            nodeName = node.nodeName;

            if (nodeName !== 'SPAN' || (nodeName === 'SPAN' && tinyMCE.activeEditor.dom.getAttrib(node, 'id') === '_mce_caret')) {
                tinymce.activeEditor.formatter.toggle('place');
                tinymce.activeEditor.theme.panel.find('toolbar *').active(false);
                this.active(true);
            } else if (tinyMCE.activeEditor.dom.getAttrib(node, 'class') === 'place') {
                tinymce.activeEditor.formatter.toggle('place');
                this.active(false);
            } else {
                tinyMCE.activeEditor.dom.setAttrib(node, 'property', 'ns:place');
                tinyMCE.activeEditor.dom.setAttrib(node, 'class', 'place');
                tinymce.activeEditor.theme.panel.find('toolbar *').active(false);
                this.active(true);
            }
        }
    })
    editor.addButton('service', {
        text: 'service',
        icon: false,
        onPostRender: function () {
            var button = this;
            editor.on('NodeChange', function (e) {
                if (editor.formatter.match('service')) {
                    button.active(true);
                } else {
                    button.active(false);
                }
            });
        },
        onclick: function () {
            selection = tinyMCE.activeEditor.selection.getContent();
            node = tinymce.activeEditor.selection.getNode();
            nodeName = node.nodeName;

            if (nodeName !== 'SPAN' || (nodeName === 'SPAN' && tinyMCE.activeEditor.dom.getAttrib(node, 'id') === '_mce_caret')) {
                tinymce.activeEditor.formatter.toggle('service');
                tinymce.activeEditor.theme.panel.find('toolbar *').active(false);
                this.active(true);
            } else if (tinyMCE.activeEditor.dom.getAttrib(node, 'class') === 'service') {
                tinymce.activeEditor.formatter.toggle('service');
                this.active(false);
            } else {
                tinyMCE.activeEditor.dom.setAttrib(node, 'property', 'ns:service');
                tinyMCE.activeEditor.dom.setAttrib(node, 'class', 'service');
                tinymce.activeEditor.theme.panel.find('toolbar *').active(false);
                this.active(true);
            }
        }
    })
    editor.addButton('heading', {
      text: 'heading',
      tooltip: 'Highlight heading',
      icon: false,
      style:'color:red;',
        onPostRender: function () {
            var button = this;
            editor.on('NodeChange', function (e) {
                if (editor.formatter.match('heading')) {
                    button.active(true);
                } else {
                    button.active(false);
                }
            });
        },
        onclick: function () {
            selection = tinyMCE.activeEditor.selection.getContent();
            node = tinymce.activeEditor.selection.getNode();
            nodeName = node.nodeName;

            if (nodeName !== 'SPAN' || (nodeName === 'SPAN' && tinyMCE.activeEditor.dom.getAttrib(node, 'id') === '_mce_caret')) {
                tinymce.activeEditor.formatter.toggle('heading');
                tinymce.activeEditor.theme.panel.find('toolbar *').active(false);
                this.active(true);
            } else if (tinyMCE.activeEditor.dom.getAttrib(node, 'class') === 'heading') {
                tinymce.activeEditor.formatter.toggle('heading');
                this.active(false);
            } else {
                tinyMCE.activeEditor.dom.setAttrib(node, 'property', 'ns:heading');
                tinyMCE.activeEditor.dom.setAttrib(node, 'class', 'heading');
                tinymce.activeEditor.theme.panel.find('toolbar *').active(false);
                this.active(true);
            }
        }
    })
});
