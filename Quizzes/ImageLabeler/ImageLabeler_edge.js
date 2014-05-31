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
                id: 'cell_cutaway',
                type: 'image',
                rect: ['126px', '121px','500px','350px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cell_cutaway.jpg",'0px','0px']
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
            },
            {
                id: 'TextCopy5',
                type: 'text',
                rect: ['51px', '233px','160px','21px','auto', 'auto'],
                text: "Mitochondrion",
                userClass: "textSource",
                font: ['Arial, Helvetica, sans-serif', 15, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy6',
                type: 'text',
                rect: ['539px', '375px','160px','21px','auto', 'auto'],
                text: "Golgi body",
                userClass: "textSource",
                font: ['Arial, Helvetica, sans-serif', 15, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy8',
                type: 'text',
                rect: ['573px', '287px','160px','21px','auto', 'auto'],
                text: "Endoplasmic reticulum",
                userClass: "textSource",
                font: ['Arial, Helvetica, sans-serif', 15, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy3',
                type: 'text',
                rect: ['556px', '122px','160px','21px','auto', 'auto'],
                text: "Nucleus",
                userClass: "textSource",
                font: ['Arial, Helvetica, sans-serif', 15, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy2',
                type: 'text',
                rect: ['172px', '132px','160px','21px','auto', 'auto'],
                text: "Nucleolus",
                userClass: "textSource",
                font: ['Arial, Helvetica, sans-serif', 15, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy4',
                type: 'text',
                rect: ['-190px', '310px','160px','21px','auto', 'auto'],
                text: "Ribosome",
                userClass: "textSource",
                font: ['Arial, Helvetica, sans-serif', 15, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy10',
                type: 'text',
                rect: ['-190px', '239px','160px','21px','auto', 'auto'],
                text: "Vesicle",
                userClass: "textSource",
                font: ['Arial, Helvetica, sans-serif', 15, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy13',
                type: 'text',
                rect: ['195px', '494px','171px','21px','auto', 'auto'],
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
                id: 'TextCopy7',
                type: 'text',
                rect: ['-190px', '420px','160px','21px','auto', 'auto'],
                text: "single cell",
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
                id: 'TextCopy12',
                type: 'text',
                rect: ['-190px', '271px','160px','21px','auto', 'auto'],
                text: "Centriole",
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
                id: 'Text',
                type: 'text',
                rect: ['371px', '494px','160px','21px','auto', 'auto'],
                text: "animal cell",
                userClass: "textSource",
                font: ['Arial, Helvetica, sans-serif', 15, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'arrow2',
                type: 'image',
                rect: ['459px', '260px','180px','20px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px'],
                transform: [[],['-162'],[],['0.66822']]
            },
            {
                id: 'arrow2Copy2',
                type: 'image',
                rect: ['420px', '143px','180px','20px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px'],
                transform: [[],['-207'],[],['0.66822']]
            },
            {
                id: 'arrow2Copy3',
                type: 'image',
                rect: ['281px', '165px','180px','20px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px'],
                transform: [[],['-326'],[],['0.66822']]
            },
            {
                id: 'arrow2Copy4',
                type: 'image',
                rect: ['136px', '271px','180px','20px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px'],
                transform: [[],['-326'],[],['0.66822']]
            },
            {
                id: 'arrow2Copy',
                type: 'image',
                rect: ['409px', '342px','180px','20px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px'],
                transform: [[],['-149'],[],['0.66822']]
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
                ["style", "left", '195px'],
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
            "${_TextCopy9}": [
                ["style", "top", '152px'],
                ["style", "height", '21px'],
                ["style", "font-size", '15px'],
                ["style", "left", '-190px'],
                ["style", "width", '160px']
            ],
            "${_arrow2Copy}": [
                ["style", "top", '342px'],
                ["transform", "scaleX", '0.66822'],
                ["style", "left", '409px'],
                ["transform", "rotateZ", '-149deg']
            ],
            "${_cell_cutaway}": [
                ["style", "top", '121px'],
                ["style", "height", '350px'],
                ["style", "left", '126px'],
                ["style", "width", '500px']
            ],
            "${_TextCopy2}": [
                ["style", "top", '132px'],
                ["style", "height", '21px'],
                ["style", "width", '160px'],
                ["style", "left", '172px'],
                ["style", "font-size", '15px']
            ],
            "${_arrow2Copy2}": [
                ["style", "top", '143px'],
                ["transform", "scaleX", '0.66822'],
                ["style", "left", '420px'],
                ["transform", "rotateZ", '-207deg']
            ],
            "${_TextCopy10}": [
                ["style", "top", '239px'],
                ["style", "height", '21px'],
                ["style", "width", '160px'],
                ["style", "left", '-190px'],
                ["style", "font-size", '15px']
            ],
            "${_CopyrightAndCredits}": [
                ["style", "left", '77px'],
                ["style", "top", '630px']
            ],
            "${_arrow2}": [
                ["transform", "scaleX", '0.66822'],
                ["style", "top", '260px'],
                ["style", "left", '459px'],
                ["transform", "rotateZ", '-162deg']
            ],
            "${_TextCopy4}": [
                ["style", "top", '310px'],
                ["style", "height", '21px'],
                ["style", "width", '160px'],
                ["style", "left", '-190px'],
                ["style", "font-size", '15px']
            ],
            "${_TextCopy3}": [
                ["style", "top", '122px'],
                ["style", "height", '21px'],
                ["style", "width", '160px'],
                ["style", "left", '556px'],
                ["style", "font-size", '15px']
            ],
            "${_TextCopy5}": [
                ["style", "top", '233px'],
                ["style", "height", '21px'],
                ["style", "width", '160px'],
                ["style", "left", '51px'],
                ["style", "font-size", '15px']
            ],
            "${_TextCopy12}": [
                ["style", "top", '271px'],
                ["style", "height", '21px'],
                ["style", "width", '160px'],
                ["style", "left", '-190px'],
                ["style", "font-size", '15px']
            ],
            "${_arrow2Copy3}": [
                ["transform", "scaleX", '0.66822'],
                ["style", "top", '165px'],
                ["style", "left", '281px'],
                ["transform", "rotateZ", '-326deg']
            ],
            "${_TextCopy11}": [
                ["style", "top", '209px'],
                ["style", "height", '21px'],
                ["style", "font-size", '15px'],
                ["style", "left", '-190px'],
                ["style", "width", '160px']
            ],
            "${_TextCopy7}": [
                ["style", "top", '420px'],
                ["style", "height", '21px'],
                ["style", "font-size", '15px'],
                ["style", "left", '-190px'],
                ["style", "width", '160px']
            ],
            "${_TextCopy8}": [
                ["style", "top", '287px'],
                ["style", "height", '21px'],
                ["style", "width", '160px'],
                ["style", "left", '573px'],
                ["style", "font-size", '15px']
            ],
            "${_Text}": [
                ["style", "top", '494px'],
                ["style", "height", '21px'],
                ["style", "width", '160px'],
                ["style", "left", '371px'],
                ["style", "font-size", '15px']
            ],
            "${_TextCopy6}": [
                ["style", "top", '375px'],
                ["style", "height", '21px'],
                ["style", "width", '160px'],
                ["style", "left", '539px'],
                ["style", "font-size", '15px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '754px'],
                ["style", "height", '700px'],
                ["style", "overflow", 'hidden']
            ],
            "${_arrow2Copy4}": [
                ["style", "top", '271px'],
                ["transform", "scaleX", '0.66822'],
                ["style", "left", '136px'],
                ["transform", "rotateZ", '-326deg']
            ],
            "${_TextCopy}": [
                ["style", "top", '354px'],
                ["style", "height", '21px'],
                ["style", "width", '160px'],
                ["style", "left", '-190px'],
                ["style", "font-size", '15px']
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
                        type: 'text',
                        rect: ['0px', '2px', '602px', '16px', 'auto', 'auto'],
                        id: 'Text',
                        text: 'Copyright 2013 North Carolina State University. Code by One Time Software. Version 1.0 November 2013.',
                        align: 'center',
                        font: ['Arial, Helvetica, sans-serif', 12, 'rgba(119,119,119,1.00)', 'normal', 'none', '']
                    },
                    {
                        type: 'text',
                        rect: ['0px', '20px', '602px', '16px', 'auto', 'auto'],
                        id: 'TextCopy2',
                        text: 'Free for academic use when displaying this notice.',
                        align: 'center',
                        font: ['Arial, Helvetica, sans-serif', 12, 'rgba(119,119,119,1.00)', 'normal', 'none', '']
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
            "${_copyrightButton}": [
                ["style", "top", '2px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '101px']
            ],
            "${_codeByButton}": [
                ["style", "top", '0px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '327px']
            ],
            "${_TextCopy}": [
                ["style", "top", '2px'],
                ["style", "width", '602px'],
                ["color", "color", 'rgba(119,119,119,1.00)'],
                ["style", "height", '16px'],
                ["style", "left", '0px'],
                ["style", "font-size", '12px']
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
