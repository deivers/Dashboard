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
            js+"jquery-1.7.1.min.js",
            js+"jquery-ui-touch-combo.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'resetButton3',
                            symbolName: 'resetButton',
                            type: 'rect',
                            rect: ['439px', '637', '56', '24', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'qHint1',
                            type: 'text',
                            rect: ['21', '48', '133', '117', 'auto', 'auto'],
                            overflow: 'auto',
                            cursor: 'default',
                            opacity: '0',
                            text: "<br><br>type a hint for the question here<br>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [15, "px"], "rgba(0,0,0,1.00)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "normal", ""]
                        },
                        {
                            id: 'dragHint1',
                            type: 'text',
                            rect: ['748', '44', '133', '108', 'auto', 'auto'],
                            overflow: 'auto',
                            cursor: 'default',
                            opacity: '0',
                            text: "<br><br>type a hint for the question here<br>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [15, "px"], "rgba(0,0,0,1.00)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "normal", ""]
                        },
                        {
                            id: 'q1',
                            type: 'rect',
                            rect: ['196', '46', '188', '88px', 'auto', 'auto'],
                            borderRadius: ["15px 15px", "15px 15px", "0px 0px", "0px 0px"],
                            fill: ["rgba(97,131,159,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"],
                            c: [
                            {
                                id: 'qText1',
                                type: 'text',
                                rect: ['7', '0', '173', '88px', 'auto', 'auto'],
                                text: "<br>xyz",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", ""],
                                textStyle: ["", "", "30px", ""]
                            }]
                        },
                        {
                            id: 'zone1',
                            type: 'rect',
                            rect: ['196', '135', '186', '26', 'auto', 'auto'],
                            borderRadius: ["0px 0px", "0px 0px", "15px 15px", "15px 15px"],
                            fill: ["rgba(220,217,217,1.00)"],
                            stroke: [2,"rgba(0,0,0,1)","dashed"],
                            userClass: "dropZone"
                        },
                        {
                            id: 'qHint1Copy',
                            type: 'text',
                            rect: ['20', '192', '133', '117', 'auto', 'auto'],
                            overflow: 'auto',
                            cursor: 'default',
                            opacity: '0',
                            text: "<br><br>type a hint for the question here<br>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [15, "px"], "rgba(0,0,0,1.00)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "normal", ""]
                        },
                        {
                            id: 'dragHint1Copy',
                            type: 'text',
                            rect: ['747', '188', '133', '108', 'auto', 'auto'],
                            overflow: 'auto',
                            cursor: 'default',
                            opacity: '0',
                            text: "<br><br>type a hint for the question here<br>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [15, "px"], "rgba(0,0,0,1.00)", "normal", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "normal", ""]
                        },
                        {
                            id: 'q2',
                            type: 'rect',
                            rect: ['195', '190', '188', '88px', 'auto', 'auto'],
                            borderRadius: ["15px 15px", "15px 15px", "0px 0px", "0px 0px"],
                            fill: ["rgba(97,131,159,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"],
                            c: [
                            {
                                id: 'qText1Copy',
                                type: 'text',
                                rect: ['7', '0', '173', '88px', 'auto', 'auto'],
                                text: "<br>abc",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", ""],
                                textStyle: ["", "", "30px", ""]
                            }]
                        },
                        {
                            id: 'zone2',
                            type: 'rect',
                            rect: ['195', '279', '186', '26', 'auto', 'auto'],
                            borderRadius: ["0px 0px", "0px 0px", "15px 15px", "15px 15px"],
                            fill: ["rgba(220,217,217,1.00)"],
                            stroke: [2,"rgba(0,0,0,1)","dashed"],
                            userClass: "dropZone"
                        },
                        {
                            id: 'drag2',
                            type: 'rect',
                            rect: ['529', '227', '188', '28', 'auto', 'auto'],
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
                                rect: ['9', '-2', '173', '30', 'auto', 'auto'],
                                opacity: '0',
                                text: "xyz",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", ""],
                                textStyle: ["", "", "30px", ""]
                            }]
                        },
                        {
                            id: 'drag1',
                            type: 'rect',
                            rect: ['530', '83', '188', '28', 'auto', 'auto'],
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
                                rect: ['9', '-2', '173', '30', 'auto', 'auto'],
                                opacity: '0',
                                text: "abc",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", ""],
                                textStyle: ["", "", "30px", ""]
                            }]
                        },
                        {
                            id: 'CopyrightAndCredits',
                            symbolName: 'CopyrightAndCredits',
                            type: 'rect',
                            rect: ['162', '684', '575', '18', 'auto', 'auto'],
                            opacity: '0.44488525390625'
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['432px', '601px', '70', '19', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "Submit",
                            align: "center",
                            userClass: "submit button blue",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
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
                        ]
                    ]
                }
            },
            "checkAnswers": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            borderRadius: ['14px 14px', '14px 14px', '14px 14px', '14px 14px'],
                            id: 'RoundRect',
                            stroke: [2, 'rgb(0, 0, 0)', 'solid'],
                            cursor: 'pointer',
                            rect: [0, 0, 129, 27, 'auto', 'auto'],
                            title: 'Check answers',
                            fill: ['rgba(112,100,252,1.00)']
                        },
                        {
                            rect: [12, 7, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1.00)', '500', 'none', '', '', 'nowrap'],
                            id: 'Text',
                            text: 'Check answers',
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 133, 31]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "resetButton": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [5, 6, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(115,115,115,1.00)', '400', 'none', 'normal', '', 'nowrap'],
                            id: 'resetButton',
                            text: 'RESET',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [1, 'rgb(0, 0, 0)', 'none'],
                            rect: [0, 0, 56, 24, 'auto', 'auto'],
                            fill: ['rgba(97,112,159,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 56, 24]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "CopyrightAndCredits": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '575', '18', 'auto', 'auto'],
                            id: 'Group',
                            type: 'group',
                            c: [
                            {
                                font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                                type: 'text',
                                id: 'Text',
                                text: 'Copyright 2013 North Carolina State University. Code by One Time Software. Version 1.0 July 2013.',
                                align: 'center',
                                rect: [0, 2, 575, 16, 'auto', 'auto']
                            },
                            {
                                rect: [327, 0, 106, 16, 'auto', 'auto'],
                                id: 'codeByButton',
                                symbolName: 'codeByButton',
                                cursor: 'pointer',
                                type: 'rect'
                            },
                            {
                                rect: [102, 2, 168, 16, 'auto', 'auto'],
                                id: 'copyrightButton',
                                symbolName: 'copyrightButton',
                                cursor: 'pointer',
                                type: 'rect'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 575, 18]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "codeByButton": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '106px', '16px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            opacity: '0',
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 106, 16]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "copyrightButton": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 168, '16px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'RoundRect2',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 168, 16]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("matchup_edgeActions.js");
})("EDGE-86546566");
