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
            "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Image-vagina',
                            type: 'image',
                            rect: ['111px', '32px', '477px', '331px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"vagina.png",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['146px', '386px', '407px', '63px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 18px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">Tap on the stratified epithelium.​</p>",
                            align: "center",
                            userClass: "qText",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'right',
                            type: 'rect',
                            rect: ['343px', '38px', '194px', '325px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(22,0,255,0.2471)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "answer-button"
                        },
                        {
                            id: 'Text-instructions2',
                            type: 'text',
                            rect: ['-236px', '473px', '220px', '42px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Do not style or remove the Submit</p><p style=\"margin: 0px;\">​button. &nbsp;At run time it will be hidden by the code, but it needs to exist here.</p><p style=\"margin: 0px;\">​</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(164,160,160,1)", "100", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text-instructions1',
                            type: 'text',
                            rect: ['-241px', '198px', '220px', '88px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">The hotspot buttons are colored for ease of authoring. &nbsp;At run time they will be hidden. &nbsp;If you want them to be visible on hover, set the second parameter above to true. &nbsp;If you want the wrong buttons to animate red on click and the right buttons to animate green on click, then set the third parameter above to true</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(164,160,160,1)", "100", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'left',
                            type: 'rect',
                            rect: ['122px', '38px', '211px', '325px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(22,0,255,0.2471)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "answer-button"
                        },
                        {
                            id: 'SubmitButton',
                            type: 'text',
                            rect: ['307px', '494px', '70', '19', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "Submit",
                            align: "center",
                            userClass: "submit button blue",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'config-nextPageUrl',
                            type: 'text',
                            rect: ['1', '-67px', '325px', '16px', 'auto', 'auto'],
                            text: "",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(164,160,160,1.00)", "100", "none", "", "break-word", ""]
                        },
                        {
                            id: 'config-logResponsesToDashboard',
                            type: 'text',
                            rect: ['1', '-95px', '70px', '16px', 'auto', 'auto'],
                            text: "true",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(164,160,160,1.00)", "100", "none", "", "break-word", ""]
                        },
                        {
                            id: 'config-colorAnimationOnClick',
                            type: 'text',
                            rect: ['1', '-126px', '70px', '16px', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">false​</p>",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(164,160,160,1.00)", "100", "none", "", "break-word", ""]
                        },
                        {
                            id: 'config-revealButtonsOnHover',
                            type: 'text',
                            rect: ['1', '-156px', '70px', '16px', 'auto', 'auto'],
                            text: "false",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(164,160,160,1.00)", "100", "none", "", "break-word", ""]
                        },
                        {
                            id: 'config-correctButtonNames',
                            type: 'text',
                            rect: ['1', '-186px', '158px', '16px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​B1 B2</p>",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(164,160,160,1.00)", "100", "none", "", "break-word", ""]
                        },
                        {
                            id: 'FooterText1',
                            type: 'text',
                            rect: ['49px', '550px', '602', '16', 'auto', 'auto'],
                            text: "Copyright 2015 North Carolina State University. Code by One Time Software. Version 2.0 June 2015.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(119,119,119,1.00)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'FooterText2',
                            type: 'text',
                            rect: ['49px', '568px', '602', '16', 'auto', 'auto'],
                            text: "Free for academic use when displaying this notice.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(119,119,119,1.00)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'copyrightButton',
                            symbolName: 'copyrightButton',
                            type: 'rect',
                            rect: ['165px', '550px', '168', '16', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'codeByButton',
                            symbolName: 'codeByButton',
                            type: 'rect',
                            rect: ['386px', '550px', '106', '16', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'B1',
                            type: 'rect',
                            rect: ['495px', '38px', '83px', '63px', 'auto', 'auto'],
                            overflow: 'visible',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(22,0,255,0.2471)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "answer-button"
                        },
                        {
                            id: 'B2',
                            type: 'rect',
                            rect: ['520px', '103px', '58px', '248px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(22,0,255,0.2471)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "answer-button",
                            transform: [[],['8']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '700px', '620px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid18",
                            "top",
                            0,
                            0,
                            "linear",
                            "${copyrightButton}",
                            '550px',
                            '550px'
                        ],
                        [
                            "eid19",
                            "top",
                            0,
                            0,
                            "linear",
                            "${codeByButton}",
                            '550px',
                            '550px'
                        ],
                        [
                            "eid11",
                            "left",
                            0,
                            0,
                            "linear",
                            "${copyrightButton}",
                            '165px',
                            '165px'
                        ],
                        [
                            "eid15",
                            "left",
                            0,
                            0,
                            "linear",
                            "${codeByButton}",
                            '386px',
                            '386px'
                        ]
                    ]
                }
            },
            "resetButton": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
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
            "copyrightButton": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
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
            "codeByButton": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Locator_edgeActions.js");
})("EDGE-152311472");
