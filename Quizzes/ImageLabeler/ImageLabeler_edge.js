/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'cellmodel',
                type: 'image',
                rect: ['92px', '115px','488px','317px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'cellmodel.png','0px','0px']
            },
            {
                id: 'TextCopy2',
                type: 'text',
                rect: ['438px', '109px','160px','21px','auto', 'auto'],
                text: "Nucleolus",
                userClass: "textSource",
                font: ['Arial, Helvetica, sans-serif', 15, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy3',
                type: 'text',
                rect: ['489px', '140px','160px','21px','auto', 'auto'],
                text: "Nucleus",
                userClass: "textSource",
                font: ['Arial, Helvetica, sans-serif', 15, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy4',
                type: 'text',
                rect: ['537px', '168px','160px','21px','auto', 'auto'],
                text: "Ribosome",
                userClass: "textSource",
                font: ['Arial, Helvetica, sans-serif', 15, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy10',
                type: 'text',
                rect: ['580px', '209px','160px','21px','auto', 'auto'],
                text: "Vesicle",
                userClass: "textSource",
                font: ['Arial, Helvetica, sans-serif', 15, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy6',
                type: 'text',
                rect: ['537px', '326px','160px','21px','auto', 'auto'],
                text: "Golgi body",
                userClass: "textSource",
                font: ['Arial, Helvetica, sans-serif', 15, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy8',
                type: 'text',
                rect: ['17px', '409px','160px','21px','auto', 'auto'],
                text: "Endoplasmic reticulum",
                userClass: "textSource",
                font: ['Arial, Helvetica, sans-serif', 15, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy5',
                type: 'text',
                rect: ['12px', '150px','160px','21px','auto', 'auto'],
                text: "Mitochondrion",
                userClass: "textSource",
                font: ['Arial, Helvetica, sans-serif', 15, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['296px', '494px','160px','21px','auto', 'auto'],
                text: "animal cell",
                userClass: "textSource",
                font: ['Arial, Helvetica, sans-serif', 15, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy13',
                type: 'text',
                rect: ['120px', '494px','171px','21px','auto', 'auto'],
                text: "Which kind of cell is this?",
                font: ['Arial, Helvetica, sans-serif', 15, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy',
                type: 'text',
                rect: ['-190px', '354px','160px','21px','auto', 'auto'],
                text: "plant cell",
                userClass: "textSource",
                font: ['Arial, Helvetica, sans-serif', 15, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy9',
                type: 'text',
                rect: ['-190px', '152px','160px','21px','auto', 'auto'],
                text: "Lysosome",
                userClass: "textSource",
                font: ['Arial, Helvetica, sans-serif', 15, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy11',
                type: 'text',
                rect: ['-190px', '209px','160px','21px','auto', 'auto'],
                text: "Vacuole",
                userClass: "textSource",
                font: ['Arial, Helvetica, sans-serif', 15, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy12',
                type: 'text',
                rect: ['-190px', '271px','160px','21px','auto', 'auto'],
                text: "Centriole",
                userClass: "textSource",
                font: ['Arial, Helvetica, sans-serif', 15, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['215px', '30px','auto','auto','auto', 'auto'],
                text: "Cell Anatomy",
                font: ['Arial, Helvetica, sans-serif', 36, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['322px', '558px','70px','19px','auto', 'auto'],
                cursor: ['pointer'],
                text: "Submit",
                align: "center",
                userClass: "submit button blue",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'CopyrightAndCredits',
                type: 'rect',
                rect: ['92', '621','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'CopyrightAndCredits',
                symbolName: 'CopyrightAndCredits',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_TextCopy13}": [
                ["style", "top", '494px'],
                ["style", "height", '21px'],
                ["style", "font-size", '15px'],
                ["style", "left", '120px'],
                ["style", "width", '171px']
            ],
            "${_Text3}": [
                ["style", "top", '558px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '18px'],
                ["style", "height", '19px'],
                ["style", "left", '322px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '70px']
            ],
            "${_Text2}": [
                ["style", "top", '30px'],
                ["style", "left", '215px'],
                ["style", "font-size", '36px']
            ],
            "${_TextCopy2}": [
                ["style", "top", '109px'],
                ["style", "height", '21px'],
                ["style", "width", '160px'],
                ["style", "left", '438px'],
                ["style", "font-size", '15px']
            ],
            "${_TextCopy10}": [
                ["style", "top", '209px'],
                ["style", "height", '21px'],
                ["style", "width", '160px'],
                ["style", "left", '580px'],
                ["style", "font-size", '15px']
            ],
            "${_CopyrightAndCredits}": [
                ["style", "left", '77px'],
                ["style", "top", '630px']
            ],
            "${_TextCopy4}": [
                ["style", "top", '168px'],
                ["style", "height", '21px'],
                ["style", "width", '160px'],
                ["style", "left", '537px'],
                ["style", "font-size", '15px']
            ],
            "${_TextCopy3}": [
                ["style", "top", '140px'],
                ["style", "height", '21px'],
                ["style", "width", '160px'],
                ["style", "left", '489px'],
                ["style", "font-size", '15px']
            ],
            "${_TextCopy5}": [
                ["style", "top", '150px'],
                ["style", "height", '21px'],
                ["style", "width", '160px'],
                ["style", "left", '12px'],
                ["style", "font-size", '15px']
            ],
            "${_TextCopy12}": [
                ["style", "top", '271px'],
                ["style", "height", '21px'],
                ["style", "width", '160px'],
                ["style", "left", '-190px'],
                ["style", "font-size", '15px']
            ],
            "${_TextCopy11}": [
                ["style", "top", '209px'],
                ["style", "height", '21px'],
                ["style", "font-size", '15px'],
                ["style", "left", '-190px'],
                ["style", "width", '160px']
            ],
            "${_TextCopy8}": [
                ["style", "top", '409px'],
                ["style", "height", '21px'],
                ["style", "width", '160px'],
                ["style", "left", '17px'],
                ["style", "font-size", '15px']
            ],
            "${_Text}": [
                ["style", "top", '494px'],
                ["style", "height", '21px'],
                ["style", "width", '160px'],
                ["style", "left", '296px'],
                ["style", "font-size", '15px']
            ],
            "${_TextCopy6}": [
                ["style", "top", '326px'],
                ["style", "height", '21px'],
                ["style", "width", '160px'],
                ["style", "left", '537px'],
                ["style", "font-size", '15px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '754px'],
                ["style", "height", '700px'],
                ["style", "overflow", 'hidden']
            ],
            "${_TextCopy9}": [
                ["style", "top", '152px'],
                ["style", "height", '21px'],
                ["style", "font-size", '15px'],
                ["style", "left", '-190px'],
                ["style", "width", '160px']
            ],
            "${_TextCopy}": [
                ["style", "top", '354px'],
                ["style", "height", '21px'],
                ["style", "width", '160px'],
                ["style", "left", '-190px'],
                ["style", "font-size", '15px']
            ],
            "${_cellmodel}": [
                ["style", "height", '317px'],
                ["style", "top", '115px'],
                ["style", "left", '92px'],
                ["style", "width", '488px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid10", tween: [ "style", "${_CopyrightAndCredits}", "top", '630px', { fromValue: '630px'}], position: 0, duration: 0 },
                { id: "eid9", tween: [ "style", "${_CopyrightAndCredits}", "left", '77px', { fromValue: '77px'}], position: 0, duration: 0 }            ]
        }
    }
},
"CopyrightAndCredits": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'Group',
                    type: 'group',
                    rect: ['0px', '0px', '700px', '36px', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '2px', '602px', '16px', 'auto', 'auto'],
                        font: ['Arial, Helvetica, sans-serif', 12, 'rgba(119,119,119,1.00)', 'normal', 'none', ''],
                        id: 'Text',
                        text: 'Copyright 2013 North Carolina State University. Code by One Time Software. Version 1.0 November 2013.',
                        align: 'center',
                        type: 'text'
                    },
                    {
                        rect: ['0px', '20px', '602px', '16px', 'auto', 'auto'],
                        font: ['Arial, Helvetica, sans-serif', 12, 'rgba(119,119,119,1.00)', 'normal', 'none', ''],
                        id: 'TextCopy2',
                        text: 'Free for academic use when displaying this notice.',
                        align: 'center',
                        type: 'text'
                    },
                    {
                        id: 'codeByButton',
                        type: 'rect',
                        cursor: ['pointer'],
                        rect: ['327px', '0px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'copyrightButton',
                        type: 'rect',
                        cursor: ['pointer'],
                        rect: ['101px', '2px', 'auto', 'auto', 'auto', 'auto']
                    }]
                }
            ],
            symbolInstances: [
            {
                id: 'codeByButton',
                symbolName: 'codeByButton'
            },
            {
                id: 'copyrightButton',
                symbolName: 'copyrightButton'
            }            ]
        },
    states: {
        "Base State": {
            "${_Group}": [
                ["style", "top", '0px'],
                ["style", "height", '36px'],
                ["style", "left", '0px'],
                ["style", "width", '700px']
            ],
            "${_Text}": [
                ["style", "top", '2px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '12px'],
                ["color", "color", 'rgba(119,119,119,1.00)'],
                ["style", "height", '16px'],
                ["style", "left", '0px'],
                ["style", "width", '602px']
            ],
            "${_TextCopy2}": [
                ["style", "top", '20px'],
                ["style", "text-align", 'center'],
                ["style", "width", '602px'],
                ["color", "color", 'rgba(119,119,119,1.00)'],
                ["style", "height", '16px'],
                ["style", "left", '0px'],
                ["style", "font-size", '12px']
            ],
            "${_TextCopy}": [
                ["style", "top", '2px'],
                ["style", "width", '602px'],
                ["color", "color", 'rgba(119,119,119,1.00)'],
                ["style", "height", '16px'],
                ["style", "left", '0px'],
                ["style", "font-size", '12px']
            ],
            "${_codeByButton}": [
                ["style", "top", '0px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '327px']
            ],
            "${_copyrightButton}": [
                ["style", "top", '2px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '101px']
            ],
            "${symbolSelector}": [
                ["style", "height", '19px'],
                ["style", "width", '600px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"codeByButton": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '106px', '16px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'RoundRect',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RoundRect}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '16px'],
                ["style", "width", '106px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"copyrightButton": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '168px', '16px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'RoundRect2',
                    opacity: 0,
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '16px'],
                ["style", "width", '168px']
            ],
            "${_RoundRect2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '168px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-749678393");
