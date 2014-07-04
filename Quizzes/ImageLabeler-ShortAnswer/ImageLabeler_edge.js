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
                id: 'Text2',
                type: 'text',
                rect: ['183px', '25px','auto','auto','auto', 'auto'],
                text: "Short Answer Questions<br>",
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
                id: 'TextCopy4',
                type: 'text',
                rect: ['-190px', '310px','170px','22px','auto', 'auto'],
                text: "enzyme",
                userClass: "textSource",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy10',
                type: 'text',
                rect: ['-190px', '239px','170px','22px','auto', 'auto'],
                text: "metabolism",
                userClass: "textSource",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy13',
                type: 'text',
                rect: ['74px', '171px','619px','49px','auto', 'auto'],
                text: "1. The process by which plants use the energy of sunlight and simple chemicals to produce their own food:",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy5',
                type: 'text',
                rect: ['74px', '258px','600px','49px','auto', 'auto'],
                text: "2. The full name of the molecule depicted in the following image:",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['183px', '67px','388px','66px','auto', 'auto'],
                text: "Instructions: type the first few letters of your answer and if the word or phrase is auto-completed, then it MAY BE the correct answer. If you don't get auto-completion, then it's definitely not correct. Answer all questions before pressing the Submit button.",
                align: "justify",
                font: ['Arial, Helvetica, sans-serif', 13, "rgba(154,154,154,1.00)", "300", "none", ""]
            },
            {
                id: 'TextCopy',
                type: 'text',
                rect: ['-190px', '354px','170px','22px','auto', 'auto'],
                text: "protein",
                userClass: "textSource",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy7',
                type: 'text',
                rect: ['-190px', '420px','170px','22px','auto', 'auto'],
                text: "denatured alcohol",
                userClass: "textSource",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy6',
                type: 'text',
                rect: ['-190px', '470px','170px','22px','auto', 'auto'],
                text: "amino acid",
                userClass: "textSource",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy9',
                type: 'text',
                rect: ['-190px', '152px','170px','22px','auto', 'auto'],
                text: "meiosis",
                userClass: "textSource",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy12',
                type: 'text',
                rect: ['-190px', '271px','170px','22px','auto', 'auto'],
                text: "respiration",
                userClass: "textSource",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy11',
                type: 'text',
                rect: ['-190px', '209px','170px','22px','auto', 'auto'],
                text: "mitosis",
                userClass: "textSource",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy3',
                type: 'text',
                rect: ['255px', '194px','170px','22px','auto', 'auto'],
                text: "photosynthesis",
                userClass: "textSource",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'TextCopy2',
                type: 'text',
                rect: ['539px', '257px','170px','22px','auto', 'auto'],
                text: "deoxyribonucleic acid",
                userClass: "textSource",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'DNA',
                type: 'image',
                rect: ['147px', '233px','170px','316px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"DNA.png",'0px','0px'],
                transform: [[],['90']]
            },
            {
                id: 'Text3Copy',
                type: 'text',
                rect: ['770px', '547px','174px','60px','auto', 'auto'],
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
            "${_TextCopy13}": [
                ["style", "line-height", '24px'],
                ["style", "font-size", '16px'],
                ["style", "text-align", 'left'],
                ["style", "top", '171px'],
                ["transform", "scaleX", '1'],
                ["style", "height", '49px'],
                ["style", "left", '74px'],
                ["style", "width", '619px']
            ],
            "${_Text3Copy}": [
                ["style", "top", '547px'],
                ["style", "width", '174px'],
                ["style", "height", '60px'],
                ["color", "color", 'rgba(255,255,255,1)'],
                ["style", "left", '770px'],
                ["style", "font-size", '12px']
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
                ["style", "top", '25px'],
                ["style", "left", '183px'],
                ["style", "font-size", '36px']
            ],
            "${_TextCopy2}": [
                ["style", "line-height", '24px'],
                ["style", "width", '170px'],
                ["style", "top", '257px'],
                ["style", "height", '22px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '539px'],
                ["style", "font-size", '16px']
            ],
            "${_TextCopy10}": [
                ["style", "top", '239px'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "width", '170px'],
                ["style", "height", '22px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '-190px'],
                ["style", "font-size", '16px']
            ],
            "${_CopyrightAndCredits}": [
                ["style", "left", '77px'],
                ["style", "top", '654px']
            ],
            "${_DNA}": [
                ["style", "top", '233px'],
                ["style", "left", '147px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${_TextCopy4}": [
                ["style", "top", '310px'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "width", '170px'],
                ["style", "height", '22px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '-190px'],
                ["style", "font-size", '16px']
            ],
            "${_TextCopy3}": [
                ["style", "line-height", '24px'],
                ["style", "width", '170px'],
                ["style", "height", '22px'],
                ["style", "top", '194px'],
                ["style", "left", '255px'],
                ["style", "font-size", '16px']
            ],
            "${_TextCopy5}": [
                ["style", "top", '258px'],
                ["style", "width", '600px'],
                ["style", "text-align", 'left'],
                ["style", "line-height", '24px'],
                ["transform", "scaleX", '1'],
                ["style", "height", '49px'],
                ["style", "left", '74px'],
                ["style", "font-size", '16px']
            ],
            "${_TextCopy12}": [
                ["style", "top", '271px'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "width", '170px'],
                ["style", "height", '22px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '-190px'],
                ["style", "font-size", '16px']
            ],
            "${_TextCopy7}": [
                ["style", "top", '420px'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "font-size", '16px'],
                ["style", "height", '22px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '-190px'],
                ["style", "width", '170px']
            ],
            "${_Text}": [
                ["transform", "scaleX", '1'],
                ["style", "font-weight", '300'],
                ["style", "left", '183px'],
                ["style", "font-size", '13px'],
                ["style", "top", '67px'],
                ["style", "text-align", 'justify'],
                ["style", "height", '66px'],
                ["color", "color", 'rgba(154,154,154,1.00)'],
                ["style", "width", '388px']
            ],
            "${_TextCopy6}": [
                ["style", "top", '470px'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "width", '170px'],
                ["style", "height", '22px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '-190px'],
                ["style", "font-size", '16px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '754px'],
                ["style", "height", '700px'],
                ["style", "overflow", 'hidden']
            ],
            "${_TextCopy9}": [
                ["style", "top", '152px'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "font-size", '16px'],
                ["style", "height", '22px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '-190px'],
                ["style", "width", '170px']
            ],
            "${_TextCopy}": [
                ["style", "top", '354px'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "width", '170px'],
                ["style", "height", '22px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '-190px'],
                ["style", "font-size", '16px']
            ],
            "${_TextCopy11}": [
                ["style", "top", '209px'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "font-size", '16px'],
                ["style", "height", '22px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '-190px'],
                ["style", "width", '170px']
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
                { id: "eid14", tween: [ "style", "${_CopyrightAndCredits}", "top", '654px', { fromValue: '654px'}], position: 0, duration: 0 },
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
                        text: 'Copyright 2014 North Carolina State University. Code by One Time Software. Version 1.4 July 2014.',
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
