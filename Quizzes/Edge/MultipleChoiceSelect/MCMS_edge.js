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
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'SubmitBtn',
                            type: 'text',
                            rect: ['310px', '654px', '70', '19', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "Submit",
                            align: "center",
                            userClass: "submit button blue",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'SubmitBtnCopy',
                            type: 'text',
                            rect: ['310px', '698px', '70', '19', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin:0px\">RESET</p>",
                            align: "center",
                            userClass: "reset",
                            font: ['Arial, Helvetica, sans-serif', [13, "px"], "rgba(127,127,127,1.00)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'Note',
                            type: 'text',
                            rect: ['-188px', '577px', '174', '60', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">Note: don't style the Submit button here. The code will position it and apply css styling at run time.​</p><p style=\"margin:0px\">​</p><p style=\"margin:0px\">​Same for the Reset button.</p><p style=\"margin:0px\">​</p><p style=\"margin:0px\">​Leave at least an inch of vertical space for these buttons and for the footer.</p><p style=\"margin:0px\">​</p><p style=\"margin:0px\">​Remember: don't use answer revealing names for items on the timeline below.</p><p style=\"margin:0px\">​</p>",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(144,143,143,1.00)", "normal", "none", "", "break-word", ""]
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
                            id: 'config-pointsOnLastTry',
                            type: 'text',
                            rect: ['-240px', '-86px', '212px', '18px', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">​3</p>",
                            align: "right",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(255,255,255,1.00)", "400", "none", "", "break-word", ""]
                        },
                        {
                            id: 'config-pointsOnFirstTry',
                            type: 'text',
                            rect: ['-240px', '-117px', '212px', '18px', 'auto', 'auto'],
                            text: "10",
                            align: "right",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(255,255,255,1.00)", "400", "none", "", "break-word", ""]
                        },
                        {
                            id: 'config-nextPageUrl',
                            type: 'text',
                            rect: ['-240px', '-52px', '212px', '18px', 'auto', 'auto'],
                            text: "",
                            align: "right",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(255,255,255,1.00)", "400", "none", "", "break-word", ""]
                        },
                        {
                            id: 'config-logResponsesToDashboard',
                            type: 'text',
                            rect: ['-240px', '-148px', '212px', '18px', 'auto', 'auto'],
                            text: "true",
                            align: "right",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(255,255,255,1.00)", "400", "none", "", "break-word", ""]
                        },
                        {
                            id: 'configInstructions',
                            type: 'text',
                            rect: ['-3px', '-148px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">Log student responses to the Dashboard? &nbsp;(true or false)</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px; text-align: left;\">​Points awarded if correctly answered on the first try &nbsp;(integer)</p><p style=\"margin: 0px; text-align: left;\">​</p><p style=\"margin: 0px; text-align: left;\">​Points awarded if correctly answered eventually &nbsp;(integer)</p><p style=\"margin: 0px; text-align: left;\">​</p><p style=\"margin: 0px; text-align: left; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 14px; color: rgb(144, 143, 143); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-indent: 0px; line-height: normal;\">Next page url&nbsp;(if this is the last question in the quiz, leave this empty)</p><p style=\"margin: 0px;\">​​</p><p></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(144,143,143,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
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
            "Checkbox": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("MCMS_edgeActions.js");
})("EDGE-749678393");
