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
                            id: 'Reminder',
                            type: 'text',
                            rect: ['-188px', '729px', '174', '60', 'auto', 'auto'],
                            text: "Remember:  don't use answer revealing names for items on the timeline below.",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(191,191,191,0.99)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'SubmitBtn',
                            type: 'text',
                            rect: ['310px', '670px', '70', '19', 'auto', 'auto'],
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
                            rect: ['54px', '719px', '600', '19', 'auto', 'auto']
                        },
                        {
                            id: 'Note',
                            type: 'text',
                            rect: ['-188px', '643px', '174', '60', 'auto', 'auto'],
                            text: "Note: don't style the Submit button here.  The code will center it and apply css styling at run time.",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(191,191,191,0.99)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['84px', '17', '518', '36', 'auto', 'auto'],
                            text: "Which of the following is an example of limestone?",
                            align: "center",
                            userClass: "qText",
                            font: ['Arial, Helvetica, sans-serif', [22, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'geo3',
                            type: 'image',
                            rect: ['226px', '71', '205', '145', 'auto', 'auto'],
                            clip: 'rect(0px 205px 145px 30px)',
                            fill: ["rgba(0,0,0,0)",im+"geo3.jpg",'0px','0px']
                        },
                        {
                            id: 'geo2',
                            type: 'image',
                            rect: ['256px', '487', '205', '137', 'auto', 'auto'],
                            clip: 'rect(0px 175px 137px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"geo2.jpg",'0px','0px']
                        },
                        {
                            id: 'geo4',
                            type: 'image',
                            rect: ['226px', '216', '205', '137', 'auto', 'auto'],
                            clip: 'rect(0px 205px 137px 30px)',
                            fill: ["rgba(0,0,0,0)",im+"geo4.jpg",'0px','0px']
                        },
                        {
                            id: 'geo1',
                            type: 'image',
                            rect: ['226px', '353', '205', '134', 'auto', 'auto'],
                            clip: 'rect(0px 205px 134px 30px)',
                            fill: ["rgba(0,0,0,0)",im+"geo1.jpg",'0px','0px']
                        },
                        {
                            id: 'Checkbox1',
                            symbolName: 'Checkbox',
                            type: 'rect',
                            rect: ['217px', '135', '18', '18', 'auto', 'auto'],
                            userClass: "checkbox"
                        },
                        {
                            id: 'Checkbox2',
                            symbolName: 'Checkbox',
                            type: 'rect',
                            rect: ['217px', '276', '18', '18', 'auto', 'auto'],
                            userClass: "checkbox"
                        },
                        {
                            id: 'Checkbox3',
                            symbolName: 'Checkbox',
                            type: 'rect',
                            rect: ['217px', '411', '18', '18', 'auto', 'auto'],
                            opacity: '0.99',
                            userClass: "checkbox"
                        },
                        {
                            id: 'Checkbox4',
                            symbolName: 'Checkbox',
                            type: 'rect',
                            rect: ['216px', '546', '18', '18', 'auto', 'auto'],
                            userClass: "checkbox"
                        },
                        {
                            id: 'Feedback1Copy3',
                            type: 'text',
                            rect: ['458px', '118', '227', '95', 'auto', 'auto'],
                            cursor: 'default',
                            text: "Feedback if student selects this answer",
                            userClass: "feedback",
                            font: ['Arial, Helvetica, sans-serif', [15, "px"], "rgba(90,90,90,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'Feedback1Copy2',
                            type: 'text',
                            rect: ['458px', '251', '227', '95', 'auto', 'auto'],
                            cursor: 'default',
                            text: "Feedback if student selects this answer",
                            userClass: "feedback",
                            font: ['Arial, Helvetica, sans-serif', [15, "px"], "rgba(90,90,90,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'Feedback1Copy',
                            type: 'text',
                            rect: ['458px', '386', '227', '95', 'auto', 'auto'],
                            cursor: 'default',
                            text: "Feedback if student selects this answer",
                            userClass: "feedback",
                            font: ['Arial, Helvetica, sans-serif', [15, "px"], "rgba(90,90,90,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'Feedback1',
                            type: 'text',
                            rect: ['458px', '521', '227', '95', 'auto', 'auto'],
                            cursor: 'default',
                            text: "This is granite.  Click here to read more about it.",
                            userClass: "feedback",
                            font: ['Arial, Helvetica, sans-serif', [15, "px"], "rgba(90,90,90,1)", "normal", "none", "", "break-word", ""]
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
                            text: "true",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(255,255,255,1.00)", "400", "none", "", "break-word", ""]
                        },
                        {
                            id: 'resetBtn',
                            symbolName: 'resetButton',
                            type: 'rect',
                            rect: ['317px', '692px', '56', '24', 'auto', 'auto'],
                            cursor: 'pointer',
                            userClass: "reset"
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '700px', '770px', 'auto', 'auto'],
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
                            "eid27",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Checkbox4}",
                            '216px',
                            '216px'
                        ],
                        [
                            "eid14",
                            "top",
                            0,
                            0,
                            "linear",
                            "${CopyrightAndCredits}",
                            '719px',
                            '719px'
                        ],
                        [
                            "eid13",
                            "left",
                            0,
                            0,
                            "linear",
                            "${CopyrightAndCredits}",
                            '54px',
                            '54px'
                        ],
                        [
                            "eid28",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Checkbox3}",
                            '217px',
                            '217px'
                        ],
                        [
                            "eid35",
                            "left",
                            0,
                            0,
                            "linear",
                            "${resetBtn}",
                            '317px',
                            '317px'
                        ],
                        [
                            "eid32",
                            "top",
                            0,
                            0,
                            "linear",
                            "${resetBtn}",
                            '692px',
                            '692px'
                        ],
                        [
                            "eid29",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Checkbox2}",
                            '217px',
                            '217px'
                        ],
                        [
                            "eid30",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Checkbox1}",
                            '217px',
                            '217px'
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
                            id: 'Group',
                            type: 'group',
                            rect: ['0', '0', '700', '36', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0', '2', '602', '16', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(119,119,119,1.00)', 'normal', 'none', '', 'break-word', ''],
                                id: 'Text',
                                text: 'Copyright 2015 North Carolina State University. Code by One Time Software. Version 2.0 June 2015.',
                                align: 'center',
                                type: 'text'
                            },
                            {
                                rect: ['0', '20', '602', '16', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(119,119,119,1.00)', 'normal', 'none', '', 'break-word', ''],
                                id: 'TextCopy2',
                                text: 'Free for academic use when displaying this notice.',
                                align: 'center',
                                type: 'text'
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
                            isStage: 'true',
                            rect: [undefined, undefined, '600', '19']
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
                            rect: [0, 0, 18, 18, 'auto', 'auto'],
                            id: 'checkmark',
                            type: 'image',
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("MCMS_edgeActions.js");
})("EDGE-749678393");
