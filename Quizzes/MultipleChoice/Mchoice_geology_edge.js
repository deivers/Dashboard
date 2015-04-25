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
                            id: 'Text',
                            type: 'text',
                            rect: ['91', '17', '518', '36', 'auto', 'auto'],
                            text: "Which of the following is an example of limestone?",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [22, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['230', '700', '247', '18', 'auto', 'auto'],
                            text: "photo credit: http://www.earthscienceworld.org",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [11, "px"], "rgba(118,118,118,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'geo3',
                            type: 'image',
                            rect: ['233', '71', '205', '145', 'auto', 'auto'],
                            clip: 'rect(0px 205px 145px 30px)',
                            fill: ["rgba(0,0,0,0)",im+"geo3.jpg",'0px','0px']
                        },
                        {
                            id: 'geo2',
                            type: 'image',
                            rect: ['263', '487', '205', '137', 'auto', 'auto'],
                            clip: 'rect(0px 175px 137px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"geo2.jpg",'0px','0px']
                        },
                        {
                            id: 'geo4',
                            type: 'image',
                            rect: ['233', '216', '205', '137', 'auto', 'auto'],
                            clip: 'rect(0px 205px 137px 30px)',
                            fill: ["rgba(0,0,0,0)",im+"geo4.jpg",'0px','0px']
                        },
                        {
                            id: 'geo1',
                            type: 'image',
                            rect: ['233', '353', '205', '134', 'auto', 'auto'],
                            clip: 'rect(0px 205px 134px 30px)',
                            fill: ["rgba(0,0,0,0)",im+"geo1.jpg",'0px','0px']
                        },
                        {
                            id: 'Checkbox1',
                            symbolName: 'Checkbox',
                            type: 'rect',
                            rect: ['224', '135', '18', '18', 'auto', 'auto'],
                            userClass: "checkbox"
                        },
                        {
                            id: 'Checkbox2',
                            symbolName: 'Checkbox',
                            type: 'rect',
                            rect: ['224', '276', '18', '18', 'auto', 'auto'],
                            userClass: "checkbox"
                        },
                        {
                            id: 'Checkbox3',
                            symbolName: 'Checkbox',
                            type: 'rect',
                            rect: ['224', '411', '18', '18', 'auto', 'auto'],
                            opacity: '0.99',
                            userClass: "checkbox"
                        },
                        {
                            id: 'Checkbox4',
                            symbolName: 'Checkbox',
                            type: 'rect',
                            rect: ['223', '546', '18', '18', 'auto', 'auto'],
                            userClass: "checkbox"
                        },
                        {
                            id: 'CopyrightAndCredits',
                            symbolName: 'CopyrightAndCredits',
                            type: 'rect',
                            rect: ['54', '726', '600', '19', 'auto', 'auto']
                        },
                        {
                            id: 'Feedback1',
                            type: 'text',
                            rect: ['465', '118', '227', '95', 'auto', 'auto'],
                            cursor: 'default',
                            text: "Feedback if student selects this answer",
                            userClass: "feedback",
                            font: ['Arial, Helvetica, sans-serif', [15, "px"], "rgba(90,90,90,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'Feedback1Copy',
                            type: 'text',
                            rect: ['465', '251', '227', '95', 'auto', 'auto'],
                            cursor: 'default',
                            text: "Feedback if student selects this answer",
                            userClass: "feedback",
                            font: ['Arial, Helvetica, sans-serif', [15, "px"], "rgba(90,90,90,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'Feedback1Copy2',
                            type: 'text',
                            rect: ['465', '386', '227', '95', 'auto', 'auto'],
                            cursor: 'default',
                            text: "Feedback if student selects this answer",
                            userClass: "feedback",
                            font: ['Arial, Helvetica, sans-serif', [15, "px"], "rgba(90,90,90,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'Feedback1Copy3',
                            type: 'text',
                            rect: ['465', '521', '227', '95', 'auto', 'auto'],
                            cursor: 'default',
                            text: "This is granite.  Click here to read more about it.",
                            userClass: "feedback",
                            font: ['Arial, Helvetica, sans-serif', [15, "px"], "rgba(90,90,90,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'SubmitButton',
                            type: 'text',
                            rect: ['298', '648', '70', '19', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "Submit",
                            align: "center",
                            userClass: "submit button blue",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['721', '649', '174', '60', 'auto', 'auto'],
                            text: "Note: don't style the Submit button here.  The code will center it and apply css styling at run time.",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", ""]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '700', '770', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
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
            "Checkbox": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 16, 16, 'auto', 'auto'],
                            borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                            id: 'box_rounded',
                            stroke: ['1px', 'rgba(0,0,0,0.70)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)', [270, [['rgba(167,167,167,1.00)', 0], ['rgba(222,222,222,1.00)', 100]]]]
                        },
                        {
                            type: 'image',
                            id: 'checkmark',
                            rect: [0, 0, 18, 18, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/checkmark_outlined_centered.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 18, 18]
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
                            type: 'group',
                            id: 'Group',
                            rect: [0, 0, 700, 36, 'auto', 'auto'],
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
                            font: '{{:}:undefined{:}}{:}1{:}2{:}p{:}x{:}{',
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Mchoice_geology_edgeActions.js");
})("EDGE-276373753");
