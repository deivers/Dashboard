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
                id: 'Text',
                type: 'text',
                rect: ['91px', '17px','518px','36px','auto', 'auto'],
                text: "Which of the following is an example of limestone?",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 22, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['230px', '700px','247px','18px','auto', 'auto'],
                text: "photo credit: http://www.earthscienceworld.org",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 11, "rgba(118,118,118,1.00)", "normal", "none", "normal"]
            },
            {
                id: 'geo3',
                type: 'image',
                rect: ['233px', '71px','205px','145px','auto', 'auto'],
                clip: ['rect(0px 205px 145px 30px)'],
                fill: ["rgba(0,0,0,0)",im+"geo3.jpg",'0px','0px']
            },
            {
                id: 'geo2',
                type: 'image',
                rect: ['263px', '487px','205px','137px','auto', 'auto'],
                clip: ['rect(0px 175px 137px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"geo2.jpg",'0px','0px']
            },
            {
                id: 'geo4',
                type: 'image',
                rect: ['233px', '216px','205px','137px','auto', 'auto'],
                clip: ['rect(0px 205px 137px 30px)'],
                fill: ["rgba(0,0,0,0)",im+"geo4.jpg",'0px','0px']
            },
            {
                id: 'geo1',
                type: 'image',
                rect: ['233px', '353px','205px','134px','auto', 'auto'],
                clip: ['rect(0px 205px 134px 30px)'],
                fill: ["rgba(0,0,0,0)",im+"geo1.jpg",'0px','0px']
            },
            {
                id: 'Checkbox1',
                type: 'rect',
                rect: ['224px', '135px','auto','auto','auto', 'auto'],
                userClass: "checkbox"
            },
            {
                id: 'Checkbox2',
                type: 'rect',
                rect: ['224px', '276px','auto','auto','auto', 'auto'],
                userClass: "checkbox"
            },
            {
                id: 'Checkbox3',
                type: 'rect',
                rect: ['224px', '411px','auto','auto','auto', 'auto'],
                opacity: 0.99,
                userClass: "checkbox"
            },
            {
                id: 'Checkbox4',
                type: 'rect',
                rect: ['223px', '546px','auto','auto','auto', 'auto'],
                userClass: "checkbox"
            },
            {
                id: 'CopyrightAndCredits',
                type: 'rect',
                rect: ['54px', '726px','auto','auto','auto', 'auto']
            },
            {
                id: 'Feedback1',
                type: 'text',
                rect: ['465px', '118px','227px','95px','auto', 'auto'],
                cursor: ['default'],
                text: "Feedback if student selects this answer",
                userClass: "feedback",
                font: ['Arial, Helvetica, sans-serif', 15, "rgba(90,90,90,1.00)", "normal", "none", ""]
            },
            {
                id: 'Feedback1Copy',
                type: 'text',
                rect: ['465px', '251px','227px','95px','auto', 'auto'],
                cursor: ['default'],
                text: "Feedback if student selects this answer",
                userClass: "feedback",
                font: ['Arial, Helvetica, sans-serif', 15, "rgba(90,90,90,1.00)", "normal", "none", ""]
            },
            {
                id: 'Feedback1Copy2',
                type: 'text',
                rect: ['465px', '386px','227px','95px','auto', 'auto'],
                cursor: ['default'],
                text: "Feedback if student selects this answer",
                userClass: "feedback",
                font: ['Arial, Helvetica, sans-serif', 15, "rgba(90,90,90,1.00)", "normal", "none", ""]
            },
            {
                id: 'Feedback1Copy3',
                type: 'text',
                rect: ['465px', '521px','227px','95px','auto', 'auto'],
                cursor: ['default'],
                text: "This is granite.  Click here to read more about it.",
                userClass: "feedback",
                font: ['Arial, Helvetica, sans-serif', 15, "rgba(90,90,90,1.00)", "normal", "none", ""]
            },
            {
                id: 'SubmitButton',
                type: 'text',
                rect: ['298px', '648px','70px','19px','auto', 'auto'],
                cursor: ['pointer'],
                text: "Submit",
                align: "center",
                userClass: "submit button blue",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['721px', '649px','174px','60px','auto', 'auto'],
                text: "Note: don't style the Submit button here.  The code will center it and apply css styling at run time.",
                font: ['Arial, Helvetica, sans-serif', 12, "rgba(255,255,255,1.00)", "normal", "none", ""]
            }],
            symbolInstances: [
            {
                id: 'Checkbox4',
                symbolName: 'Checkbox',
                autoPlay: {

                }
            },
            {
                id: 'CopyrightAndCredits',
                symbolName: 'CopyrightAndCredits',
                autoPlay: {

                }
            },
            {
                id: 'Checkbox3',
                symbolName: 'Checkbox',
                autoPlay: {

                }
            },
            {
                id: 'Checkbox1',
                symbolName: 'Checkbox',
                autoPlay: {

                }
            },
            {
                id: 'Checkbox2',
                symbolName: 'Checkbox',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_geo2}": [
                ["style", "top", '487px'],
                ["style", "height", '137px'],
                ["style", "left", '263px'],
                ["style", "clip", [0,175,137,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '205px']
            ],
            "${_Checkbox2}": [
                ["style", "left", '224px'],
                ["style", "top", '276px']
            ],
            "${_Text3}": [
                ["style", "top", '649px'],
                ["style", "width", '174px'],
                ["style", "height", '60px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '721px'],
                ["style", "font-size", '12px']
            ],
            "${_Text2}": [
                ["style", "top", '700px'],
                ["style", "font-size", '11px'],
                ["color", "color", 'rgba(118,118,118,1.00)'],
                ["style", "height", '18px'],
                ["style", "left", '230px'],
                ["style", "width", '247px']
            ],
            "${_SubmitButton}": [
                ["style", "top", '648px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '18px'],
                ["style", "height", '19px'],
                ["style", "left", '298px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '70px']
            ],
            "${_geo3}": [
                ["style", "top", '71px'],
                ["style", "height", '145px'],
                ["style", "left", '233px'],
                ["style", "clip", [0,205,145,30], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '205px']
            ],
            "${_Feedback1}": [
                ["style", "top", '118px'],
                ["style", "font-size", '15px'],
                ["style", "left", '465px'],
                ["style", "height", '95px'],
                ["color", "color", 'rgba(90,90,90,1)'],
                ["style", "cursor", 'default'],
                ["style", "width", '227px']
            ],
            "${_CopyrightAndCredits}": [
                ["style", "top", '726px'],
                ["style", "left", '54px']
            ],
            "${_Checkbox1}": [
                ["style", "left", '224px'],
                ["style", "top", '135px']
            ],
            "${_Checkbox4}": [
                ["style", "left", '223px'],
                ["style", "top", '546px']
            ],
            "${_Checkbox3}": [
                ["style", "top", '411px'],
                ["style", "opacity", '0.99'],
                ["style", "left", '224px']
            ],
            "${_geo1}": [
                ["style", "top", '353px'],
                ["style", "height", '134px'],
                ["style", "left", '233px'],
                ["style", "clip", [0,205,134,30], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '205px']
            ],
            "${_Text}": [
                ["style", "top", '17px'],
                ["style", "text-align", 'center'],
                ["style", "height", '36px'],
                ["style", "width", '518px'],
                ["style", "left", '91px'],
                ["style", "font-size", '22px']
            ],
            "${_Feedback1Copy3}": [
                ["style", "top", '521px'],
                ["style", "width", '227px'],
                ["style", "left", '465px'],
                ["style", "height", '95px'],
                ["color", "color", 'rgba(90,90,90,1)'],
                ["style", "cursor", 'default'],
                ["style", "font-size", '15px']
            ],
            "${_Feedback1Copy2}": [
                ["style", "top", '386px'],
                ["style", "font-size", '15px'],
                ["style", "left", '465px'],
                ["style", "height", '95px'],
                ["color", "color", 'rgba(90,90,90,1)'],
                ["style", "cursor", 'default'],
                ["style", "width", '227px']
            ],
            "${_geo4}": [
                ["style", "top", '216px'],
                ["style", "height", '137px'],
                ["style", "left", '233px'],
                ["style", "clip", [0,205,137,30], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '205px']
            ],
            "${_Feedback1Copy}": [
                ["style", "top", '251px'],
                ["style", "width", '227px'],
                ["style", "left", '465px'],
                ["style", "height", '95px'],
                ["color", "color", 'rgba(90,90,90,1)'],
                ["style", "cursor", 'default'],
                ["style", "font-size", '15px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '770px'],
                ["style", "width", '700px']
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
            ]
        }
    }
},
"Checkbox": {
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
                    rect: ['0px', '0px', '16px', '16px', 'auto', 'auto'],
                    borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                    id: 'box_rounded',
                    stroke: [1, 'rgba(0,0,0,0.70)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)', [270, [['rgba(167,167,167,1.00)', 0], ['rgba(222,222,222,1.00)', 100]]]]
                },
                {
                    id: 'checkmark',
                    type: 'image',
                    rect: ['0px', '0px', '18px', '18px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/checkmark_outlined_centered.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '18px'],
                ["style", "width", '18px']
            ],
            "${_box_rounded}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["gradient", "background-image", [270,[['rgba(167,167,167,1.00)',0],['rgba(222,222,222,1.00)',100]]]],
                ["style", "left", '0px'],
                ["style", "width", '16px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '16px'],
                ["color", "border-color", 'rgba(0,0,0,0.70)'],
                ["style", "border-width", '1px'],
                ["style", "border-style", 'solid']
            ],
            "${_checkmark}": [
                ["style", "height", '18px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '18px']
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
})(jQuery, AdobeEdge, "EDGE-276373753");
