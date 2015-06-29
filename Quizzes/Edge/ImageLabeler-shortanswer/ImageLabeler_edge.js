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
            "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"
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
                            id: 'cell_cutaway',
                            type: 'image',
                            rect: ['126', '121', '500', '350', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cell_cutaway.png",'0px','0px']
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['215', '30', 'auto', 'auto', 'auto', 'auto'],
                            text: "Cell Anatomy",
                            userClass: "qText",
                            font: ['Arial, Helvetica, sans-serif', [36, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['322', '558', '70', '19', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "Submit",
                            align: "center",
                            userClass: "submit button blue",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'CopyrightAndCredits',
                            symbolName: 'CopyrightAndCredits',
                            type: 'rect',
                            rect: ['77', '630', '600', '19', 'auto', 'auto']
                        },
                        {
                            id: 'TextCopy5',
                            type: 'text',
                            rect: ['59px', '234px', '170', '22', 'auto', 'auto'],
                            text: "Mitochondrion",
                            userClass: "textSource",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'TextCopy6',
                            type: 'text',
                            rect: ['539', '375', '170', '22', 'auto', 'auto'],
                            text: "Golgi body",
                            userClass: "textSource",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'TextCopy8',
                            type: 'text',
                            rect: ['557', '287', '170', '20', 'auto', 'auto'],
                            text: "Endoplasmic reticulum",
                            userClass: "textSource",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'TextCopy3',
                            type: 'text',
                            rect: ['556', '122', '170', '22', 'auto', 'auto'],
                            text: "Nucleus",
                            userClass: "textSource",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'TextCopy2',
                            type: 'text',
                            rect: ['187px', '130px', '170', '22', 'auto', 'auto'],
                            text: "Nucleolus",
                            userClass: "textSource",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'TextCopy4',
                            type: 'text',
                            rect: ['-190', '310', '170', '22', 'auto', 'auto'],
                            text: "Ribosome",
                            userClass: "textSource decoy",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(166,166,166,1.00)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'TextCopy10',
                            type: 'text',
                            rect: ['-190', '239', '170', '22', 'auto', 'auto'],
                            text: "Vesicle",
                            userClass: "textSource decoy",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(166,166,166,1.00)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'TextCopy13',
                            type: 'text',
                            rect: ['160', '494', '200', '21', 'auto', 'auto'],
                            text: "Which kind of cell is this?",
                            align: "right",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'TextCopy7',
                            type: 'text',
                            rect: ['-190', '364px', '170', '22', 'auto', 'auto'],
                            text: "single cell",
                            userClass: "textSource decoy",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(166,166,166,1.00)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'TextCopy9',
                            type: 'text',
                            rect: ['-190', '171px', '170', '22', 'auto', 'auto'],
                            text: "Lysosome",
                            userClass: "textSource decoy",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(166,166,166,1.00)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'TextCopy12',
                            type: 'text',
                            rect: ['-190', '271', '170', '22', 'auto', 'auto'],
                            text: "Centriole",
                            userClass: "textSource decoy",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(166,166,166,1.00)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'TextCopy11',
                            type: 'text',
                            rect: ['-190', '209', '170', '22', 'auto', 'auto'],
                            text: "Vacuole",
                            userClass: "textSource decoy",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(166,166,166,1.00)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['372px', '493px', '170', '22', 'auto', 'auto'],
                            text: "animal cell",
                            userClass: "textSource",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'arrow2',
                            type: 'image',
                            rect: ['459', '260', '180px', '20px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px'],
                            transform: [[],['-162'],[],['0.66822']]
                        },
                        {
                            id: 'arrow2Copy2',
                            type: 'image',
                            rect: ['420', '143', '180px', '20px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px'],
                            transform: [[],['-207'],[],['0.66822']]
                        },
                        {
                            id: 'arrow2Copy3',
                            type: 'image',
                            rect: ['281', '165', '180px', '20px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px'],
                            transform: [[],['-326'],[],['0.66822']]
                        },
                        {
                            id: 'arrow2Copy4',
                            type: 'image',
                            rect: ['136', '271', '180px', '20px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px'],
                            transform: [[],['-326'],[],['0.66822']]
                        },
                        {
                            id: 'arrow2Copy',
                            type: 'image',
                            rect: ['409', '342', '180px', '20px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px'],
                            transform: [[],['-149'],[],['0.66822']]
                        },
                        {
                            id: 'Text3Copy',
                            type: 'text',
                            rect: ['-181px', '568px', '174', '60', 'auto', 'auto'],
                            text: "Note: don't style the Submit button here.  The code will center it and apply css styling at run time.",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(191,191,191,0.99)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'Text3Copy2',
                            type: 'text',
                            rect: ['-181px', '670px', '174', '60', 'auto', 'auto'],
                            text: "Remember:  don't use answer revealing names for items on the timeline below.",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(191,191,191,0.99)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'config-nextPageUrl',
                            type: 'text',
                            rect: ['60', '-64px', '212px', '18px', 'auto', 'auto'],
                            text: "",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(255,255,255,1.00)", "400", "none", "", "break-word", ""]
                        },
                        {
                            id: 'config-logResponsesToDashboard',
                            type: 'text',
                            rect: ['60', '-93px', '212px', '18px', 'auto', 'auto'],
                            text: "true<br>",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(255,255,255,1.00)", "400", "none", "", "break-word", ""]
                        },
                        {
                            id: 'config-showWrongAnswers',
                            type: 'text',
                            rect: ['60', '-122px', '212px', '18px', 'auto', 'auto'],
                            text: "true<br>",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(255,255,255,1.00)", "400", "none", "", "break-word", ""]
                        },
                        {
                            id: 'config-answerTypeIsMenus',
                            type: 'text',
                            rect: ['60', '-151px', '212px', '18px', 'auto', 'auto'],
                            text: "false<br>",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(255,255,255,1.00)", "400", "none", "", "break-word", ""]
                        },
                        {
                            id: 'resetBtn',
                            symbolName: 'resetButton',
                            type: 'rect',
                            rect: ['332px', '586px', '56', '24', 'auto', 'auto'],
                            cursor: 'pointer',
                            userClass: "reset"
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '754', '700', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(221,221,221,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid11",
                            "left",
                            0,
                            0,
                            "linear",
                            "${resetBtn}",
                            '332px',
                            '332px'
                        ],
                        [
                            "eid10",
                            "top",
                            0,
                            0,
                            "linear",
                            "${CopyrightAndCredits}",
                            '630px',
                            '630px'
                        ],
                        [
                            "eid12",
                            "top",
                            0,
                            0,
                            "linear",
                            "${resetBtn}",
                            '586px',
                            '586px'
                        ],
                        [
                            "eid9",
                            "left",
                            0,
                            0,
                            "linear",
                            "${CopyrightAndCredits}",
                            '77px',
                            '77px'
                        ]
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
                            rect: ['0', '0', '700', '36', 'auto', 'auto'],
                            id: 'Group',
                            type: 'group',
                            c: [
                            {
                                font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(119,119,119,1.00)', 'normal', 'none', '', 'break-word', ''],
                                type: 'text',
                                id: 'Text',
                                text: 'Copyright 2015 North Carolina State University. Code by One Time Software. Version 2.0 June 2015.',
                                align: 'center',
                                rect: ['0', '2', '602', '16', 'auto', 'auto']
                            },
                            {
                                font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(119,119,119,1.00)', 'normal', 'none', '', 'break-word', ''],
                                type: 'text',
                                id: 'TextCopy2',
                                text: 'Free for academic use when displaying this notice.',
                                align: 'center',
                                rect: ['0', '20', '602', '16', 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                id: 'codeByButton',
                                symbolName: 'codeByButton',
                                cursor: 'pointer',
                                rect: ['327', '0', '106', '16', 'auto', 'auto']
                            },
                            {
                                type: 'rect',
                                id: 'copyrightButton',
                                symbolName: 'copyrightButton',
                                cursor: 'pointer',
                                rect: ['101', '2', '168', '16', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '600', '19']
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
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'RoundRect',
                            opacity: '0',
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
                            opacity: '0',
                            id: 'RoundRect2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
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
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(115,115,115,1.00)', '400', 'none', 'normal', '', 'nowrap'],
                            type: 'text',
                            id: 'resetButton',
                            text: 'RESET',
                            align: 'center',
                            rect: [5, 6, 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            rect: [0, 0, 56, 24, 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [1, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("ImageLabeler_edgeActions.js");
})("EDGE-749678393");
