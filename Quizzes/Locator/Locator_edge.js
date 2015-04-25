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
                            id: 'RoundRectCopy2',
                            type: 'rect',
                            rect: ['102px', '275px', '407px', '16px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(22,0,255,0.2471)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "answer-button"
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '550px', '400px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Locator_edgeActions.js");
})("EDGE-152311472");
