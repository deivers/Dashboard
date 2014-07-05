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
                rect: ['51px', '233px','170px','22px','auto', 'auto'],
                text: "Mitochondrion",
                userClass: "textSource",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy6',
                type: 'text',
                rect: ['539px', '375px','170px','22px','auto', 'auto'],
                text: "Golgi body",
                userClass: "textSource",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy8',
                type: 'text',
                rect: ['557px', '287px','170px','20px','auto', 'auto'],
                text: "Endoplasmic reticulum",
                userClass: "textSource",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy3',
                type: 'text',
                rect: ['556px', '122px','170px','22px','auto', 'auto'],
                text: "Nucleus",
                userClass: "textSource",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy2',
                type: 'text',
                rect: ['172px', '132px','170px','22px','auto', 'auto'],
                text: "Nucleolus",
                userClass: "textSource",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy4',
                type: 'text',
                rect: ['-190px', '310px','170px','22px','auto', 'auto'],
                text: "Ribosome",
                userClass: "textSource decoy",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy10',
                type: 'text',
                rect: ['-190px', '239px','170px','22px','auto', 'auto'],
                text: "Vesicle",
                userClass: "textSource decoy",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy13',
                type: 'text',
                rect: ['160px', '494px','200px','21px','auto', 'auto'],
                text: "Which kind of cell is this?",
                align: "right",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy',
                type: 'text',
                rect: ['-190px', '354px','170px','22px','auto', 'auto'],
                text: "plant cell",
                userClass: "textSource decoy",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy7',
                type: 'text',
                rect: ['-190px', '420px','170px','22px','auto', 'auto'],
                text: "single cell",
                userClass: "textSource decoy",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy9',
                type: 'text',
                rect: ['-190px', '152px','170px','22px','auto', 'auto'],
                text: "Lysosome",
                userClass: "textSource decoy",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy12',
                type: 'text',
                rect: ['-190px', '271px','170px','22px','auto', 'auto'],
                text: "Centriole",
                userClass: "textSource decoy",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy11',
                type: 'text',
                rect: ['-190px', '209px','170px','22px','auto', 'auto'],
                text: "Vacuole",
                userClass: "textSource decoy",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['372px', '493px','170px','22px','auto', 'auto'],
                text: "animal cell",
                userClass: "textSource",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", ""]
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
            },
            {
                id: 'Text3Copy',
                type: 'text',
                rect: ['777px', '547px','174px','60px','auto', 'auto'],
                text: "Note: don't style the Submit button here.  The code will center it and apply css styling at run time.",
                font: ['Arial, Helvetica, sans-serif', 12, "rgba(255,255,255,1.00)", "normal", "none", ""]
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
            "${_TextCopy9}": [
                ["style", "top", '152px'],
                ["style", "width", '170px'],
                ["style", "height", '22px'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["transform", "scaleX", '1'],
                ["style", "left", '-190px'],
                ["style", "font-size", '16px']
            ],
            "${_Text3Copy}": [
                ["style", "top", '547px'],
                ["style", "width", '174px'],
                ["style", "height", '60px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "left", '777px'],
                ["style", "font-size", '12px']
            ],
            "${_Text3}": [
                ["style", "top", '558px'],
                ["style", "text-align", 'center'],
                ["style", "width", '70px'],
                ["style", "height", '19px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '322px'],
                ["style", "font-size", '18px']
            ],
            "${_Text2}": [
                ["style", "top", '30px'],
                ["style", "left", '215px'],
                ["style", "font-size", '36px']
            ],
            "${_arrow2Copy}": [
                ["transform", "scaleX", '0.66822'],
                ["style", "top", '342px'],
                ["style", "left", '409px'],
                ["transform", "rotateZ", '-149deg']
            ],
            "${_TextCopy2}": [
                ["style", "top", '132px'],
                ["style", "font-size", '16px'],
                ["style", "height", '22px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '172px'],
                ["style", "width", '170px']
            ],
            "${_TextCopy10}": [
                ["style", "top", '239px'],
                ["style", "font-size", '16px'],
                ["style", "height", '22px'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["transform", "scaleX", '1'],
                ["style", "left", '-190px'],
                ["style", "width", '170px']
            ],
            "${_CopyrightAndCredits}": [
                ["style", "left", '77px'],
                ["style", "top", '630px']
            ],
            "${_TextCopy}": [
                ["style", "top", '354px'],
                ["style", "font-size", '16px'],
                ["style", "height", '22px'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["transform", "scaleX", '1'],
                ["style", "left", '-190px'],
                ["style", "width", '170px']
            ],
            "${_TextCopy4}": [
                ["style", "top", '310px'],
                ["style", "font-size", '16px'],
                ["style", "height", '22px'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["transform", "scaleX", '1'],
                ["style", "left", '-190px'],
                ["style", "width", '170px']
            ],
            "${_TextCopy3}": [
                ["style", "top", '122px'],
                ["style", "height", '22px'],
                ["style", "font-size", '16px'],
                ["style", "left", '556px'],
                ["style", "width", '170px']
            ],
            "${_TextCopy6}": [
                ["style", "top", '375px'],
                ["style", "font-size", '16px'],
                ["style", "height", '22px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '539px'],
                ["style", "width", '170px']
            ],
            "${_TextCopy5}": [
                ["style", "top", '233px'],
                ["style", "font-size", '16px'],
                ["style", "height", '22px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '51px'],
                ["style", "width", '170px']
            ],
            "${_TextCopy12}": [
                ["style", "top", '271px'],
                ["style", "font-size", '16px'],
                ["style", "height", '22px'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["transform", "scaleX", '1'],
                ["style", "left", '-190px'],
                ["style", "width", '170px']
            ],
            "${_arrow2Copy2}": [
                ["transform", "scaleX", '0.66822'],
                ["style", "top", '143px'],
                ["style", "left", '420px'],
                ["transform", "rotateZ", '-207deg']
            ],
            "${_arrow2Copy3}": [
                ["style", "top", '165px'],
                ["transform", "scaleX", '0.66822'],
                ["style", "left", '281px'],
                ["transform", "rotateZ", '-326deg']
            ],
            "${_TextCopy13}": [
                ["style", "top", '494px'],
                ["style", "text-align", 'right'],
                ["style", "width", '200px'],
                ["transform", "scaleX", '1'],
                ["style", "height", '21px'],
                ["style", "left", '160px'],
                ["style", "font-size", '16px']
            ],
            "${_arrow2}": [
                ["style", "top", '260px'],
                ["transform", "scaleX", '0.66822'],
                ["style", "left", '459px'],
                ["transform", "rotateZ", '-162deg']
            ],
            "${_TextCopy8}": [
                ["style", "top", '287px'],
                ["style", "font-size", '16px'],
                ["style", "height", '20px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '557px'],
                ["style", "width", '170px']
            ],
            "${_Text}": [
                ["style", "top", '493px'],
                ["style", "font-size", '16px'],
                ["style", "height", '22px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '372px'],
                ["style", "width", '170px']
            ],
            "${_TextCopy11}": [
                ["style", "top", '209px'],
                ["style", "width", '170px'],
                ["style", "height", '22px'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["transform", "scaleX", '1'],
                ["style", "left", '-190px'],
                ["style", "font-size", '16px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '700px'],
                ["style", "width", '754px']
            ],
            "${_arrow2Copy4}": [
                ["transform", "scaleX", '0.66822'],
                ["style", "top", '271px'],
                ["style", "left", '136px'],
                ["transform", "rotateZ", '-326deg']
            ],
            "${_TextCopy7}": [
                ["style", "top", '420px'],
                ["style", "width", '170px'],
                ["style", "height", '22px'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["transform", "scaleX", '1'],
                ["style", "left", '-190px'],
                ["style", "font-size", '16px']
            ],
            "${_cell_cutaway}": [
                ["style", "height", '350px'],
                ["style", "top", '121px'],
                ["style", "left", '126px'],
                ["style", "width", '500px']
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
                { id: "eid9", tween: [ "style", "${_CopyrightAndCredits}", "left", '77px', { fromValue: '77px'}], position: 0, duration: 0 },
                { id: "eid10", tween: [ "style", "${_CopyrightAndCredits}", "top", '630px', { fromValue: '630px'}], position: 0, duration: 0 }            ]
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
                        text: 'Copyright 2014 North Carolina State University. Code by One Time Software. Version 1.4 July 2014.',
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
                symbolName: 'codeByButton',
                autoPlay: {

               }
            },
            {
                id: 'copyrightButton',
                symbolName: 'copyrightButton',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Group}": [
                ["style", "height", '36px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '700px']
            ],
            "${_Text}": [
                ["style", "top", '2px'],
                ["style", "text-align", 'center'],
                ["style", "width", '602px'],
                ["color", "color", 'rgba(119,119,119,1.00)'],
                ["style", "height", '16px'],
                ["style", "left", '0px'],
                ["style", "font-size", '12px']
            ],
            "${_TextCopy2}": [
                ["style", "top", '20px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '12px'],
                ["color", "color", 'rgba(119,119,119,1.00)'],
                ["style", "height", '16px'],
                ["style", "left", '0px'],
                ["style", "width", '602px']
            ],
            "${symbolSelector}": [
                ["style", "height", '19px'],
                ["style", "width", '600px']
            ],
            "${_codeByButton}": [
                ["style", "top", '0px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '327px']
            ],
            "${_TextCopy}": [
                ["style", "top", '2px'],
                ["style", "font-size", '12px'],
                ["color", "color", 'rgba(119,119,119,1.00)'],
                ["style", "height", '16px'],
                ["style", "left", '0px'],
                ["style", "width", '602px']
            ],
            "${_copyrightButton}": [
                ["style", "top", '2px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '101px']
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
            "${symbolSelector}": [
                ["style", "height", '16px'],
                ["style", "width", '106px']
            ],
            "${_RoundRect}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
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
                    opacity: 0,
                    id: 'RoundRect2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RoundRect2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '168px']
            ],
            "${symbolSelector}": [
                ["style", "height", '16px'],
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
