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
                            text: "<p style=\"margin: 0px;\">​Do not style or remove the Submit</p><p style=\"margin: 0px;\">​button. &nbsp;At run time it will be hidden by the code, but it needs to exist here.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​Leave at least an inch of vertical space for the Submit button and for the footer.</p><p style=\"margin: 0px;\">​</p>",
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
                            rect: ['-341px', '-41px', '325px', '16px', 'auto', 'auto'],
                            text: "",
                            align: "right",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(215,207,207,1.00)", "700", "none", "", "break-word", ""]
                        },
                        {
                            id: 'config-pointsOnLastTry',
                            type: 'text',
                            rect: ['-86px', '-72px', '70px', '16px', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">​1</p>",
                            align: "right",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(215,207,207,1.00)", "700", "none", "", "break-word", ""]
                        },
                        {
                            id: 'config-pointsOnFirstTry',
                            type: 'text',
                            rect: ['-86px', '-104px', '70px', '16px', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">5​</p>",
                            align: "right",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(215,207,207,1.00)", "700", "none", "", "break-word", ""]
                        },
                        {
                            id: 'config-logResponsesToDashboard',
                            type: 'text',
                            rect: ['-86px', '-136px', '70px', '16px', 'auto', 'auto'],
                            text: "true",
                            align: "right",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(215,207,207,1.00)", "700", "none", "", "break-word", ""]
                        },
                        {
                            id: 'config-colorAnimationOnClick',
                            type: 'text',
                            rect: ['-86px', '-168px', '70px', '16px', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">false​</p>",
                            align: "right",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(215,207,207,1.00)", "700", "none", "", "break-word", ""]
                        },
                        {
                            id: 'config-revealButtonsOnHover',
                            type: 'text',
                            rect: ['-86px', '-200px', '70px', '16px', 'auto', 'auto'],
                            text: "false",
                            align: "right",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(215,207,207,1.00)", "700", "none", "", "break-word", ""]
                        },
                        {
                            id: 'config-correctButtonNames',
                            type: 'text',
                            rect: ['-174px', '-230px', '158px', '16px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​B1 B2</p>",
                            align: "right",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(215,207,207,1.00)", "700", "none", "", "break-word", ""]
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
                        },
                        {
                            id: 'configInstructions',
                            type: 'text',
                            rect: ['0px', '-232px', '434px', '216px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">List the names of the correct buttons separated by single spaces</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 100; font-style: normal; text-decoration: none; font-size: 12px; color: rgb(164, 160, 160); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">​</p><p style=\"margin: 0px;\">Reveal buttons on hover? &nbsp;(true/false)</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Animate color on click? &nbsp;(true or false)</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​Log responses to the dashboard? &nbsp;(true/false)</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px; text-align: left;\">​Points awarded if correctly answered on the first try &nbsp;(integer)</p><p style=\"margin: 0px; text-align: left;\">​</p><p style=\"margin: 0px; text-align: left;\">​Points awarded if correctly answered eventually &nbsp;(integer)</p><p style=\"margin: 0px; text-align: left;\">​</p><p style=\"margin: 0px; text-align: left; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 14px; color: rgb(144, 143, 143); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-indent: 0px; line-height: normal;\">Next page url&nbsp;(if this is the last question in the quiz, leave this empty)</p><p style=\"margin: 0px;\">​​</p><p style=\"margin:0px\">​</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(144,143,143,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
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

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Locator_edgeActions.js");
})("EDGE-152311472");
