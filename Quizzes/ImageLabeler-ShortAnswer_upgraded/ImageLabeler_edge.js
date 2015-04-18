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
            js+"jquery-2.0.3.min.js"
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
                            id: 'Text2',
                            type: 'text',
                            rect: ['183', '25', 'auto', 'auto', 'auto', 'auto'],
                            text: "Short Answer Questions<br>",
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
                            rect: ['77', '654', '600', '19', 'auto', 'auto']
                        },
                        {
                            id: 'TextCopy4',
                            type: 'text',
                            rect: ['-190', '310', '170', '22', 'auto', 'auto'],
                            text: "enzyme",
                            userClass: "textSource decoy",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'TextCopy10',
                            type: 'text',
                            rect: ['-190', '239', '170', '22', 'auto', 'auto'],
                            text: "metabolism",
                            userClass: "textSource decoy",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'TextCopy13',
                            type: 'text',
                            rect: ['74', '171', '619', '49', 'auto', 'auto'],
                            text: "1. The process by which plants use the energy of sunlight and simple chemicals to produce their own food:",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'TextCopy5',
                            type: 'text',
                            rect: ['74', '258', '600', '49', 'auto', 'auto'],
                            text: "2. The full name of the molecule depicted in the following image:",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['183', '67', '388', '66', 'auto', 'auto'],
                            text: "Instructions: type the first few letters of your answer and if the word or phrase is auto-completed, then it MAY BE the correct answer. If you don't get auto-completion, then it's definitely not correct. Answer all questions before pressing the Submit button.",
                            align: "justify",
                            font: ['Arial, Helvetica, sans-serif', [13, "px"], "rgba(154,154,154,1.00)", "300", "none", "", "break-word", ""]
                        },
                        {
                            id: 'TextCopy',
                            type: 'text',
                            rect: ['0', '2', '602', '16', 'auto', 'auto'],
                            text: "protein",
                            userClass: "textSource decoy",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(119,119,119,1.00)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'TextCopy7',
                            type: 'text',
                            rect: ['-190', '420', '170', '22', 'auto', 'auto'],
                            text: "denatured alcohol",
                            userClass: "textSource decoy",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'TextCopy6',
                            type: 'text',
                            rect: ['-190', '470', '170', '22', 'auto', 'auto'],
                            text: "amino acid",
                            userClass: "textSource decoy",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'TextCopy9',
                            type: 'text',
                            rect: ['-190', '152', '170', '22', 'auto', 'auto'],
                            text: "meiosis",
                            userClass: "textSource decoy",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'TextCopy12',
                            type: 'text',
                            rect: ['-190', '271', '170', '22', 'auto', 'auto'],
                            text: "respiration",
                            userClass: "textSource decoy",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'TextCopy11',
                            type: 'text',
                            rect: ['-190', '209', '170', '22', 'auto', 'auto'],
                            text: "mitosis",
                            userClass: "textSource decoy",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'TextCopy3',
                            type: 'text',
                            rect: ['255', '194', '170', '22', 'auto', 'auto'],
                            text: "photosynthesis",
                            userClass: "textSource",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'TextCopy2',
                            type: 'text',
                            rect: ['539', '257', '170', '22', 'auto', 'auto'],
                            text: "deoxyribonucleic acid",
                            userClass: "textSource",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'DNA',
                            type: 'image',
                            rect: ['147', '233', '170px', '316px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"DNA.png",'0px','0px'],
                            transform: [[],['90']]
                        },
                        {
                            id: 'Text3Copy',
                            type: 'text',
                            rect: ['770', '547', '174', '60', 'auto', 'auto'],
                            text: "Note: don't style the Submit button here.  The code will center it and apply css styling at run time.",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(255,255,255,1)", "normal", "none", "", "break-word", ""]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '754', '700', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid14",
                            "top",
                            0,
                            0,
                            "linear",
                            "${CopyrightAndCredits}",
                            '654px',
                            '654px'
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
                            rect: [0, 0, 700, 36, 'auto', 'auto'],
                            id: 'Group',
                            type: 'group',
                            c: [
                            {
                                type: 'text',
                                rect: [0, 2, 602, 16, 'auto', 'auto'],
                                id: 'Text',
                                text: 'Copyright 2014 North Carolina State University. Code by One Time Software. Version 1.4 July 2014.',
                                align: 'center',
                                font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(119,119,119,1.00)', 'normal', 'none', '', '', '']
                            },
                            {
                                type: 'text',
                                rect: [0, 20, 602, 16, 'auto', 'auto'],
                                id: 'TextCopy2',
                                text: 'Free for academic use when displaying this notice.',
                                align: 'center',
                                font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(119,119,119,1.00)', 'normal', 'none', '', '', '']
                            },
                            {
                                rect: [327, 0, 106, 16, 'auto', 'auto'],
                                id: 'codeByButton',
                                symbolName: 'codeByButton',
                                cursor: 'pointer',
                                type: 'rect'
                            },
                            {
                                rect: [101, 2, 168, 16, 'auto', 'auto'],
                                id: 'copyrightButton',
                                symbolName: 'copyrightButton',
                                cursor: 'pointer',
                                type: 'rect'
                            }]
                        }
                    ],
                    style: {
                        '${TextCopy}': {
                            font: '{:}12px{:}rgba(119,119,119,1.00){:}{:}{:}{:}{:}',
                            rect: [0, 2, 602, 16]
                        },
                        '${symbolSelector}': {
                            rect: [null, null, 600, 19]
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("ImageLabeler_edgeActions.js");
})("EDGE-749678393");
