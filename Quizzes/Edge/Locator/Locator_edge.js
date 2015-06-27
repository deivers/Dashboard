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
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['71px', '37px', '407px', '28px', 'auto', 'auto'],
                            text: "Click on the  dot or dots that  represent the most frequent (most common) measurement.",
                            align: "center",
                            userClass: "qText",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'DotPlot',
                            type: 'image',
                            rect: ['28px', '224px', '493px', '115px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"DotPlot.gif",'0px','0px']
                        },
                        {
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['201px', '220px', '27px', '73px', 'auto', 'auto'],
                            overflow: 'visible',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(22,0,255,0.2471)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "answer-button"
                        },
                        {
                            id: 'RoundRectCopy',
                            type: 'rect',
                            rect: ['248px', '220px', '27px', '73px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(22,0,255,0.2471)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "answer-button"
                        },
                        {
                            id: 'RoundRectCopy5',
                            type: 'rect',
                            rect: ['104px', '220px', '27px', '73px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(22,0,255,0.2471)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "answer-button"
                        },
                        {
                            id: 'RoundRectCopy3',
                            type: 'rect',
                            rect: ['393px', '220px', '27px', '73px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(22,0,255,0.2471)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "answer-button"
                        },
                        {
                            id: 'RoundRectCopy4',
                            type: 'rect',
                            rect: ['480px', '220px', '27px', '73px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(22,0,255,0.2471)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "answer-button"
                        },
                        {
                            id: 'RoundRectCopy2',
                            type: 'rect',
                            rect: ['102px', '275px', '407px', '16px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(22,0,255,0.2471)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "answer-button"
                        },
                        {
                            id: 'SubmitButton',
                            type: 'text',
                            rect: ['227px', '402px', '70', '19', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "Submit",
                            align: "center",
                            userClass: "submit button blue",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'config-logResponsesToDashboard',
                            type: 'text',
                            rect: ['1', '-95px', '70px', '16px', 'auto', 'auto'],
                            text: "true",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(164,160,160,1.00)", "100", "none", "", "break-word", ""]
                        },
                        {
                            id: 'config-revealButtonsOnHover',
                            type: 'text',
                            rect: ['1', '-125px', '70px', '16px', 'auto', 'auto'],
                            text: "false",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(164,160,160,1.00)", "100", "none", "", "break-word", ""]
                        },
                        {
                            id: 'config-correctButtonNames',
                            type: 'text',
                            rect: ['1', '-155px', '158px', '16px', 'auto', 'auto'],
                            text: "RoundRect<br>",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(164,160,160,1.00)", "100", "none", "", "break-word", ""]
                        },
                        {
                            id: 'config-nextPageUrl',
                            type: 'text',
                            rect: ['1', '-67px', '325px', '16px', 'auto', 'auto'],
                            text: "",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(164,160,160,1.00)", "100", "none", "", "break-word", ""]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['1', '-30', 'auto', 'auto', 'auto', 'auto'],
                            text: "Note: don't use answer revealing names for anything below<br>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [10, "px"], "rgba(186,184,184,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "nowrap"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '550px', '550px', 'auto', 'auto'],
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Locator_edgeActions.js");
})("EDGE-152311472");
