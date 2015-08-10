/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js",
            js+"jquery-ui-touch-combo.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'qHint1',
                            type: 'text',
                            rect: ['21', '69px', '133', '117', 'auto', 'auto'],
                            overflow: 'auto',
                            cursor: 'default',
                            opacity: '0',
                            text: "<br><br>type a hint for this question here<br>",
                            align: "center",
                            userClass: "qHint",
                            font: ['Arial, Helvetica, sans-serif', [15, "px"], "rgba(0,0,0,1.00)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "normal", "", ""]
                        },
                        {
                            id: 'dragHint1',
                            type: 'text',
                            rect: ['749px', '96px', '133', '108', 'auto', 'auto'],
                            overflow: 'auto',
                            cursor: 'default',
                            opacity: '0',
                            text: "<br><br>type a hint for this answer here<br>",
                            align: "center",
                            userClass: "aHint",
                            font: ['Arial, Helvetica, sans-serif', [15, "px"], "rgba(0,0,0,1.00)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "normal", "", ""]
                        },
                        {
                            id: 'Group3',
                            type: 'group',
                            rect: ['196', '67px', '190', '90', 'auto', 'auto'],
                            c: [
                            {
                                id: 'q1',
                                type: 'rect',
                                rect: ['0px', '0px', '188', '88px', 'auto', 'auto'],
                                borderRadius: ["15px 15px", "15px 15px", "0px 0px", "0px 0px"],
                                fill: ["rgba(97,131,159,1.00)"],
                                stroke: [1,"rgb(0, 0, 0)","solid"],
                                c: [
                                {
                                    id: 'qText1',
                                    type: 'text',
                                    rect: ['7', '0', '173', '88px', 'auto', 'auto'],
                                    text: "<br>abc",
                                    align: "center",
                                    userClass: "qText",
                                    font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", ""],
                                    textStyle: ["", "", "30px", "", ""]
                                }]
                            }]
                        },
                        {
                            id: 'zone1',
                            type: 'rect',
                            rect: ['196', '156px', '186', '26', 'auto', 'auto'],
                            borderRadius: ["0px 0px", "0px 0px", "15px 15px", "15px 15px"],
                            fill: ["rgba(220,217,217,1.00)"],
                            stroke: [2,"rgba(0,0,0,1)","dashed"],
                            userClass: "dropZone"
                        },
                        {
                            id: 'qHint1Copy',
                            type: 'text',
                            rect: ['20', '213px', '133', '117', 'auto', 'auto'],
                            overflow: 'auto',
                            cursor: 'default',
                            opacity: '0',
                            text: "<br><br>type a hint for this question here<br>",
                            align: "center",
                            userClass: "qHint",
                            font: ['Arial, Helvetica, sans-serif', [15, "px"], "rgba(0,0,0,1.00)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "normal", "", ""]
                        },
                        {
                            id: 'dragHint1Copy',
                            type: 'text',
                            rect: ['749px', '185px', '133', '108', 'auto', 'auto'],
                            overflow: 'auto',
                            cursor: 'default',
                            opacity: '0.97',
                            text: "<br><br>type a hint for this answer here<br>",
                            align: "center",
                            userClass: "aHint",
                            font: ['Arial, Helvetica, sans-serif', [15, "px"], "rgba(0,0,0,1.00)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "normal", "", ""]
                        },
                        {
                            id: 'Group4',
                            type: 'group',
                            rect: ['195', '211px', '190', '90', 'auto', 'auto'],
                            c: [
                            {
                                id: 'q2',
                                type: 'rect',
                                rect: ['0px', '0px', '188', '88px', 'auto', 'auto'],
                                borderRadius: ["15px 15px", "15px 15px", "0px 0px", "0px 0px"],
                                fill: ["rgba(97,131,159,1.00)"],
                                stroke: [1,"rgb(0, 0, 0)","solid"],
                                c: [
                                {
                                    id: 'qText1Copy',
                                    type: 'text',
                                    rect: ['7', '0', '173', '88px', 'auto', 'auto'],
                                    text: "<br>xyz",
                                    align: "center",
                                    userClass: "qText",
                                    font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", ""],
                                    textStyle: ["", "", "30px", "", ""]
                                }]
                            }]
                        },
                        {
                            id: 'zone2',
                            type: 'rect',
                            rect: ['195', '300px', '186', '26', 'auto', 'auto'],
                            borderRadius: ["0px 0px", "0px 0px", "15px 15px", "15px 15px"],
                            fill: ["rgba(220,217,217,1.00)"],
                            stroke: [2,"rgba(0,0,0,1)","dashed"],
                            userClass: "dropZone"
                        },
                        {
                            id: 'Group',
                            type: 'group',
                            rect: ['531px', '225px', '190', '30', 'auto', 'auto'],
                            c: [
                            {
                                id: 'drag2',
                                type: 'rect',
                                rect: ['0px', '0px', '188', '28', 'auto', 'auto'],
                                cursor: 'move',
                                borderRadius: ["0px 0px", "0px 0px", "15px 15px", "15px 15px"],
                                opacity: '0',
                                fill: ["rgba(97,112,159,1.00)"],
                                stroke: [1,"rgba(0,0,0,1)","solid"],
                                userClass: "dragTab",
                                c: [
                                {
                                    id: 'dragText1Copy',
                                    type: 'text',
                                    rect: ['9', '-2px', '173', '30', 'auto', 'auto'],
                                    opacity: '0',
                                    text: "xyz",
                                    align: "center",
                                    userClass: "aText",
                                    font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", ""],
                                    textStyle: ["", "", "30px", "", ""]
                                }]
                            }]
                        },
                        {
                            id: 'qHint1Copy2',
                            type: 'text',
                            rect: ['21px', '357px', '133', '117', 'auto', 'auto'],
                            overflow: 'auto',
                            cursor: 'default',
                            opacity: '0',
                            text: "<br><br>type a hint for this question here<br>",
                            align: "center",
                            userClass: "qHint",
                            font: ['Arial, Helvetica, sans-serif', [15, "px"], "rgba(0,0,0,1.00)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "normal", "", ""]
                        },
                        {
                            id: 'dragHint1Copy2',
                            type: 'text',
                            rect: ['749px', '278px', '133', '108', 'auto', 'auto'],
                            overflow: 'auto',
                            cursor: 'default',
                            opacity: '0.97',
                            text: "<br><br>type a hint for this answer here<br>",
                            align: "center",
                            userClass: "aHint",
                            font: ['Arial, Helvetica, sans-serif', [15, "px"], "rgba(0,0,0,1.00)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "normal", "", ""]
                        },
                        {
                            id: 'Group4Copy',
                            type: 'group',
                            rect: ['196px', '355px', '190', '90', 'auto', 'auto'],
                            c: [
                            {
                                id: 'q2Copy',
                                type: 'rect',
                                rect: ['0px', '0px', '188', '88px', 'auto', 'auto'],
                                borderRadius: ["15px 15px", "15px 15px", "0px 0px", "0px 0px"],
                                fill: ["rgba(97,131,159,1.00)"],
                                stroke: [1,"rgb(0, 0, 0)","solid"],
                                c: [
                                {
                                    id: 'qText1Copy2',
                                    type: 'text',
                                    rect: ['7', '0', '173', '88px', 'auto', 'auto'],
                                    text: "<br>123",
                                    align: "center",
                                    userClass: "qText",
                                    font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", ""],
                                    textStyle: ["", "", "30px", "", ""]
                                }]
                            }]
                        },
                        {
                            id: 'zone2Copy',
                            type: 'rect',
                            rect: ['196px', '444px', '186', '26', 'auto', 'auto'],
                            borderRadius: ["0px 0px", "0px 0px", "15px 15px", "15px 15px"],
                            fill: ["rgba(220,217,217,1.00)"],
                            stroke: [2,"rgba(0,0,0,1)","dashed"],
                            userClass: "dropZone"
                        },
                        {
                            id: 'GroupCopy',
                            type: 'group',
                            rect: ['531px', '316px', '190', '30', 'auto', 'auto'],
                            c: [
                            {
                                id: 'drag2Copy',
                                type: 'rect',
                                rect: ['0px', '0px', '188', '28', 'auto', 'auto'],
                                cursor: 'move',
                                borderRadius: ["0px 0px", "0px 0px", "15px 15px", "15px 15px"],
                                opacity: '0',
                                fill: ["rgba(97,112,159,1.00)"],
                                stroke: [1,"rgba(0,0,0,1)","solid"],
                                userClass: "dragTab",
                                c: [
                                {
                                    id: 'dragText1Copy2',
                                    type: 'text',
                                    rect: ['9', '-2px', '173', '30', 'auto', 'auto'],
                                    opacity: '0',
                                    text: "123",
                                    align: "center",
                                    userClass: "aText",
                                    font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", ""],
                                    textStyle: ["", "", "30px", "", ""]
                                }]
                            }]
                        },
                        {
                            id: 'dragHint1Copy3',
                            type: 'text',
                            rect: ['749px', '367px', '133', '108', 'auto', 'auto'],
                            overflow: 'auto',
                            cursor: 'default',
                            opacity: '0.97',
                            text: "<br><br>type a hint for this answer here<br>",
                            align: "center",
                            userClass: "aHint",
                            font: ['Arial, Helvetica, sans-serif', [15, "px"], "rgba(0,0,0,1.00)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "normal", "", ""]
                        },
                        {
                            id: 'GroupCopy2',
                            type: 'group',
                            rect: ['531px', '406px', '190', '30', 'auto', 'auto'],
                            c: [
                            {
                                id: 'drag2Copy2',
                                type: 'rect',
                                rect: ['1px', '0px', '188', '28', 'auto', 'auto'],
                                cursor: 'move',
                                borderRadius: ["0px 0px", "0px 0px", "15px 15px", "15px 15px"],
                                opacity: '0',
                                fill: ["rgba(97,112,159,1.00)"],
                                stroke: [1,"rgba(0,0,0,1)","solid"],
                                userClass: "dragTab",
                                c: [
                                {
                                    id: 'dragText1Copy3',
                                    type: 'text',
                                    rect: ['9', '-2', '173', '30', 'auto', 'auto'],
                                    opacity: '0',
                                    text: "456",
                                    align: "center",
                                    userClass: "aText",
                                    font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", ""],
                                    textStyle: ["", "", "30px", "", ""]
                                }]
                            }]
                        },
                        {
                            id: 'Group2',
                            type: 'group',
                            rect: ['531px', '135px', '190', '30', 'auto', 'auto'],
                            c: [
                            {
                                id: 'drag1',
                                type: 'rect',
                                rect: ['0px', '0px', '188', '28', 'auto', 'auto'],
                                cursor: 'move',
                                borderRadius: ["0px 0px", "0px 0px", "15px 15px", "15px 15px"],
                                opacity: '0',
                                fill: ["rgba(97,112,159,1.00)"],
                                stroke: [1,"rgba(0,0,0,1)","solid"],
                                userClass: "dragTab",
                                c: [
                                {
                                    id: 'dragText1',
                                    type: 'text',
                                    rect: ['9', '-2px', '173', '30', 'auto', 'auto'],
                                    opacity: '0',
                                    text: "abc",
                                    align: "center",
                                    userClass: "aText",
                                    font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", ""],
                                    textStyle: ["", "", "30px", "", ""]
                                }]
                            }]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['429px', '582px', '70', '19', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "Submit",
                            align: "center",
                            userClass: "submit button blue",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'Text3Copy',
                            type: 'text',
                            rect: ['429px', '627px', '70', '19', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin:0px\">RESET</p>",
                            align: "center",
                            userClass: "reset",
                            font: ['Arial, Helvetica, sans-serif', [13, "px"], "rgba(121,121,121,1.00)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'Note',
                            type: 'text',
                            rect: ['-201px', '538px', '174', '117px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 12px; color: rgba(191, 191, 191, 0.992157); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: start; text-indent: 0px; line-height: normal;\">Note: don't style the Submit button here. The code will position it and apply css styling at run time.​</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 12px; color: rgba(191, 191, 191, 0.992157); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: start; text-indent: 0px; line-height: normal;\">​</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 12px; color: rgba(191, 191, 191, 0.992157); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: start; text-indent: 0px; line-height: normal;\">​Same for the Reset button.</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 12px; color: rgba(191, 191, 191, 0.992157); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: start; text-indent: 0px; line-height: normal;\">​</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 12px; color: rgba(191, 191, 191, 0.992157); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: start; text-indent: 0px; line-height: normal;\">​Leave at least an inch of vertical space for these buttons and for the footer.</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 12px; color: rgba(191, 191, 191, 0.992157); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: start; text-indent: 0px; line-height: normal;\">​</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 12px; color: rgba(191, 191, 191, 0.992157); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: start; text-indent: 0px; line-height: normal;\">Remember: don't use answer revealing names for items on the timeline below.​</p>",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(191,191,191,0.99)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'NoteCopy',
                            type: 'text',
                            rect: ['-201px', '135px', '174', '60', 'auto', 'auto'],
                            text: "If you don't want a hint, double click to edit (delete) it's text but don't delete the text box itself",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(191,191,191,0.99)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'config-nextPageUrl',
                            type: 'text',
                            rect: ['-230px', '-40px', '212px', '18px', 'auto', 'auto'],
                            text: "",
                            align: "right",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(214,214,214,1.00)", "700", "none", "", "break-word", ""]
                        },
                        {
                            id: 'config-pointsOnLastTry',
                            type: 'text',
                            rect: ['-230px', '-72px', '212px', '18px', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">3​</p>",
                            align: "right",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(214,214,214,1.00)", "700", "none", "", "break-word", ""]
                        },
                        {
                            id: 'config-pointsOnFirstTry',
                            type: 'text',
                            rect: ['-230px', '-104px', '212px', '18px', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">10​</p>",
                            align: "right",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(214,214,214,1.00)", "700", "none", "", "break-word", ""]
                        },
                        {
                            id: 'config-logResponsesToDashboard',
                            type: 'text',
                            rect: ['-230px', '-136px', '212px', '18px', 'auto', 'auto'],
                            text: "true",
                            align: "right",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(214,214,214,1.00)", "700", "none", "", "break-word", ""]
                        },
                        {
                            id: 'config-introAnimation',
                            type: 'text',
                            rect: ['-230px', '-168px', '212px', '18px', 'auto', 'auto'],
                            text: "true",
                            align: "right",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(214,214,214,1.00)", "700", "none", "", "break-word", ""]
                        },
                        {
                            id: 'config-requireCompletion',
                            type: 'text',
                            rect: ['-230px', '-200px', '212px', '18px', 'auto', 'auto'],
                            text: "true",
                            align: "right",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(214,214,214,1.00)", "700", "none", "", "break-word", ""]
                        },
                        {
                            id: 'config-rejectWrongAnswers',
                            type: 'text',
                            rect: ['-230px', '-231px', '212px', '18px', 'auto', 'auto'],
                            text: "true",
                            align: "right",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(214,214,214,1.00)", "700", "none", "", "break-word", ""]
                        },
                        {
                            id: 'configInstructions',
                            type: 'text',
                            rect: ['0px', '-232px', '434px', '216px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">Reject (reveal) wrong answers? &nbsp;(true/false)</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Require completion before checking answers? &nbsp;(true/false)</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Do fly-in animation? &nbsp;(true/false)</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​Log responses to the dashboard? &nbsp;(true/false)</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px; text-align: left;\">​Points awarded if correctly answered on the first try &nbsp;(integer)</p><p style=\"margin: 0px; text-align: left;\">​</p><p style=\"margin: 0px; text-align: left;\">​Points awarded if correctly answered eventually &nbsp;(integer)</p><p style=\"margin: 0px; text-align: left;\">​</p><p style=\"margin: 0px; text-align: left; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 14px; color: rgb(144, 143, 143); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-indent: 0px; line-height: normal;\">Next page url&nbsp;(if this is the last question in the quiz, leave this empty)</p><p style=\"margin: 0px;\">​​</p><p style=\"margin:0px\">​</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(144,143,143,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '900', '710', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid48",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${dragHint1Copy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid49",
                            "opacity",
                            2000,
                            0,
                            "linear",
                            "${dragHint1Copy2}",
                            '0',
                            '0.97'
                        ],
                        [
                            "eid34",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${dragHint1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid35",
                            "opacity",
                            2000,
                            0,
                            "linear",
                            "${dragHint1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid40",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${dragHint1Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid41",
                            "opacity",
                            2000,
                            0,
                            "linear",
                            "${dragHint1Copy}",
                            '0',
                            '0.97'
                        ],
                        [
                            "eid38",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${dragText1Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid39",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${dragText1Copy}",
                            '0',
                            '0.98'
                        ],
                        [
                            "eid44",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${drag2Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid45",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${drag2Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid52",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${drag2Copy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid53",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${drag2Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid42",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${qHint1Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid43",
                            "opacity",
                            2000,
                            0,
                            "linear",
                            "${qHint1Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${drag1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid3",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${drag1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid46",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${dragText1Copy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid47",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${dragText1Copy2}",
                            '0',
                            '0.98'
                        ],
                        [
                            "eid2",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${dragText1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid4",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${dragText1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid50",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${qHint1Copy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid51",
                            "opacity",
                            2000,
                            0,
                            "linear",
                            "${qHint1Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid36",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${drag2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid37",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${drag2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid9",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${qHint1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11",
                            "opacity",
                            2000,
                            0,
                            "linear",
                            "${qHint1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid54",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${dragText1Copy3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid55",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${dragText1Copy3}",
                            '0',
                            '0.98'
                        ],
                        [
                            "eid56",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${dragHint1Copy3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid57",
                            "opacity",
                            2000,
                            0,
                            "linear",
                            "${dragHint1Copy3}",
                            '0',
                            '0.97'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("matchup_edgeActions.js");
})("EDGE-86546566");
