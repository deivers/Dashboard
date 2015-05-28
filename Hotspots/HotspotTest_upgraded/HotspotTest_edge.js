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
                            id: 'Lab_floorplan',
                            type: 'image',
                            rect: ['0', '0', '680px', '330px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Lab_floorplan.jpg",'0px','0px']
                        },
                        {
                            id: 'HotspotEllipse2',
                            symbolName: 'HotspotEllipse',
                            type: 'rect',
                            rect: ['361', '41', '102', '76', 'auto', 'auto'],
                            sizeRange: ['30px','undefined','undefined','undefined'],
                            userClass: "hotspot"
                        },
                        {
                            id: 'HotspotEllipse3',
                            symbolName: 'HotspotEllipse',
                            type: 'rect',
                            rect: ['581', '210', '102', '76', 'auto', 'auto'],
                            sizeRange: ['30px','undefined','undefined','undefined'],
                            userClass: "hotspot"
                        },
                        {
                            id: 'HotspotEllipse4',
                            symbolName: 'HotspotEllipse',
                            type: 'rect',
                            rect: ['103', '257', '102', '76', 'auto', 'auto'],
                            sizeRange: ['30px','undefined','undefined','undefined'],
                            userClass: "hotspot"
                        },
                        {
                            id: 'HotspotEllipse',
                            symbolName: 'HotspotEllipse',
                            type: 'rect',
                            rect: ['152', '41', '102', '76', 'auto', 'auto'],
                            sizeRange: ['30px','undefined','undefined','undefined'],
                            userClass: "hotspot"
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '685', '340', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid11",
                            "top",
                            0,
                            0,
                            "linear",
                            "${HotspotEllipse}",
                            '41px',
                            '41px'
                        ],
                        [
                            "eid14",
                            "left",
                            0,
                            0,
                            "linear",
                            "${HotspotEllipse2}",
                            '361px',
                            '361px'
                        ],
                        [
                            "eid10",
                            "left",
                            0,
                            0,
                            "linear",
                            "${HotspotEllipse}",
                            '152px',
                            '152px'
                        ],
                        [
                            "eid15",
                            "top",
                            0,
                            0,
                            "linear",
                            "${HotspotEllipse2}",
                            '41px',
                            '41px'
                        ]
                    ]
                }
            },
            "HotspotEllipse": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            rect: [0, 0, 102, 76, 'auto', 'auto'],
                            filter: ['0', '0deg', '1', '1', '0', '0', '0', '10px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            fi: ['0', '0deg', '1', '1', '0', '0', '0', '10px', 'rgba(0,0,0,0)', '0px', '0px', '0px'],
                            fill: ['rgba(243,0,255,0.35)']
                        },
                        {
                            rect: [40, 23, '30px', '30px', 'auto', 'auto'],
                            sizeRange: ['30px', '', '', ''],
                            id: 'checkmark_outlined2',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/checkmark_outlined.png', '50%', '50%', '30px', '30px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            sizeRange: '3{:}0{:}p{:}x',
                            rect: [null, null, 102, 76]
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("HotspotTest_edgeActions.js");
})("EDGE-465432216");
