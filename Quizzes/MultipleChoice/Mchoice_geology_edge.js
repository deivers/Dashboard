/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Text',
            type:'text',
            rect:['91px','17px','518px','36px','auto','auto'],
            text:"Which of the following is an example of limestone?",
            align:"center",
            font:['Arial, Helvetica, sans-serif',22,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'Text2',
            type:'text',
            rect:['230px','700px','247px','18px','auto','auto'],
            text:"photo credit: http://www.earthscienceworld.org",
            align:"center",
            font:['Arial, Helvetica, sans-serif',11,"rgba(118,118,118,1.00)","normal","none","normal"]
         },
         {
            id:'geo3',
            type:'image',
            rect:['243px','68px','205px','145px','auto','auto'],
            clip:['rect(0px 205px 145px 30px)'],
            fill:["rgba(0,0,0,0)",im+"geo3.jpg",'0px','0px']
         },
         {
            id:'geo2',
            type:'image',
            rect:['273px','484px','205px','137px','auto','auto'],
            clip:['rect(0px 175px 137px 0px)'],
            fill:["rgba(0,0,0,0)",im+"geo2.jpg",'0px','0px']
         },
         {
            id:'geo4',
            type:'image',
            rect:['243px','213px','205px','137px','auto','auto'],
            clip:['rect(0px 205px 137px 30px)'],
            fill:["rgba(0,0,0,0)",im+"geo4.jpg",'0px','0px']
         },
         {
            id:'geo1',
            type:'image',
            rect:['243px','350px','205px','134px','auto','auto'],
            clip:['rect(0px 205px 134px 30px)'],
            fill:["rgba(0,0,0,0)",im+"geo1.jpg",'0px','0px']
         },
         {
            id:'Checkbox1',
            type:'rect',
            rect:['234px','132px','auto','auto','auto','auto']
         },
         {
            id:'Checkbox2',
            type:'rect',
            rect:['234px','273px','auto','auto','auto','auto']
         },
         {
            id:'Checkbox3',
            type:'rect',
            rect:['234px','408px','auto','auto','auto','auto'],
            opacity:0.99
         },
         {
            id:'Checkbox4',
            type:'rect',
            rect:['234px','544px','auto','auto','auto','auto']
         },
         {
            id:'checkAnswers',
            type:'rect',
            rect:['284px','650px','auto','auto','auto','auto']
         },
         {
            id:'CopyrightAndCredits',
            type:'rect',
            rect:['54px','726px','auto','auto','auto','auto'],
            transform:[]
         },
         {
            id:'Feedback',
            type:'rect',
            rect:['464','116','auto','auto','auto','auto']
         },
         {
            id:'FeedbackCopy',
            type:'rect',
            rect:['464','251px','auto','auto','auto','auto']
         },
         {
            id:'FeedbackCopy2',
            type:'rect',
            rect:['464','386px','auto','auto','auto','auto']
         },
         {
            id:'FeedbackCopy3',
            type:'rect',
            rect:['464','522px','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'FeedbackCopy2',
            symbolName:'Feedback'
         },
         {
            id:'Checkbox1',
            symbolName:'Checkbox'
         },
         {
            id:'Checkbox2',
            symbolName:'Checkbox'
         },
         {
            id:'Feedback',
            symbolName:'Feedback'
         },
         {
            id:'FeedbackCopy',
            symbolName:'Feedback'
         },
         {
            id:'FeedbackCopy3',
            symbolName:'Feedback'
         },
         {
            id:'CopyrightAndCredits',
            symbolName:'CopyrightAndCredits'
         },
         {
            id:'Checkbox3',
            symbolName:'Checkbox'
         },
         {
            id:'Checkbox4',
            symbolName:'Checkbox'
         },
         {
            id:'checkAnswers',
            symbolName:'SubmitAnswersButton'
         }
         ]
      },
   states: {
      "Base State": {
         "${_geo2}": [
            ["style", "top", '484px'],
            ["style", "height", '137px'],
            ["style", "left", '273px'],
            ["style", "clip", [0,175,137,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '205px']
         ],
         "${_FeedbackCopy2}": [
            ["style", "top", '386px']
         ],
         "${_geo4}": [
            ["style", "top", '213px'],
            ["style", "height", '137px'],
            ["style", "left", '243px'],
            ["style", "clip", [0,205,137,30], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '205px']
         ],
         "${_Checkbox2}": [
            ["style", "left", '234px'],
            ["style", "top", '273px']
         ],
         "${_Checkbox4}": [
            ["style", "left", '234px'],
            ["style", "top", '544px']
         ],
         "${_Checkbox3}": [
            ["style", "top", '408px'],
            ["style", "opacity", '0.99'],
            ["style", "left", '234px']
         ],
         "${_Text2}": [
            ["style", "top", '700px'],
            ["style", "font-size", '11px'],
            ["color", "color", 'rgba(118,118,118,1.00)'],
            ["style", "height", '18px'],
            ["style", "left", '230px'],
            ["style", "width", '247px']
         ],
         "${_FeedbackCopy3}": [
            ["style", "top", '522px']
         ],
         "${_geo1}": [
            ["style", "top", '350px'],
            ["style", "height", '134px'],
            ["style", "left", '243px'],
            ["style", "clip", [0,205,134,30], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '205px']
         ],
         "${_FeedbackCopy}": [
            ["style", "top", '251px']
         ],
         "${_geo3}": [
            ["style", "top", '68px'],
            ["style", "height", '145px'],
            ["style", "left", '243px'],
            ["style", "clip", [0,205,145,30], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
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
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '770px'],
            ["style", "width", '700px']
         ],
         "${_checkAnswers}": [
            ["style", "top", '650px'],
            ["style", "left", '284px'],
            ["style", "cursor", 'auto']
         ],
         "${_CopyrightAndCredits}": [
            ["style", "top", '726px'],
            ["style", "left", '54px']
         ],
         "${_Checkbox1}": [
            ["style", "left", '234px'],
            ["style", "top", '132px']
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
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','16px','16px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      id: 'box_rounded',
      stroke: [1,'rgba(0,0,0,0.70)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)',[270,[['rgba(167,167,167,1.00)',0],['rgba(222,222,222,1.00)',100]]]]
   },
   {
      id: 'checkmark',
      type: 'image',
      rect: ['0px','0px','18px','18px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/checkmark_outlined_centered.png','0px','0px']
   }],
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
"SubmitAnswersButton": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      borderRadius: ['14px 14px','14px 14px','14px 14px','14px 14px'],
      rect: ['0px','0px','129px','27px','auto','auto'],
      title: 'Check answers',
      type: 'rect',
      id: 'RoundRect',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(93,93,93,1.00)',[270,[['rgba(125,125,125,1.00)',0],['rgba(73,73,73,1.00)',100]]]]
   },
   {
      rect: ['30px','6px','72px','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(255,255,255,1.00)','500','none',''],
      align: 'center',
      id: 'Text',
      text: 'Submit<br>',
      cursor: ['pointer'],
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(93,93,93,1.00)'],
            ["style", "border-top-left-radius", [14,14], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [14,14], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '129px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [14,14], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [14,14], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '27px'],
            ["style", "left", '0px'],
            ["style", "border-width", '1px'],
            ["gradient", "background-image", [270,[['rgba(125,125,125,1.00)',0],['rgba(73,73,73,1.00)',100]]]]
         ],
         "${_Text}": [
            ["style", "top", '6px'],
            ["style", "font-size", '16px'],
            ["style", "text-align", 'center'],
            ["style", "left", '30px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '72px']
         ],
         "${symbolSelector}": [
            ["style", "height", '31px'],
            ["style", "width", '131px']
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
"CopyrightAndCredits": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Group',
      type: 'group',
      rect: ['0px','0px','700px','36px','auto','auto'],
      c: [
      {
         rect: ['0px','2px','602px','16px','auto','auto'],
         font: ['Arial, Helvetica, sans-serif',12,'rgba(119,119,119,1.00)','normal','none',''],
         id: 'Text',
         text: 'Copyright 2013 North Carolina State University. Code by One Time Software. Version 1.0 November 2013.',
         align: 'center',
         type: 'text'
      },
      {
         rect: ['0px','20px','602px','16px','auto','auto'],
         font: ['Arial, Helvetica, sans-serif',12,'rgba(119,119,119,1.00)','normal','none',''],
         id: 'TextCopy2',
         text: 'Free for academic use when displaying this notice.',
         align: 'center',
         type: 'text'
      },
      {
         id: 'codeByButton',
         type: 'rect',
         cursor: ['pointer'],
         rect: ['327px','0px','auto','auto','auto','auto']
      },
      {
         id: 'copyrightButton',
         type: 'rect',
         cursor: ['pointer'],
         rect: ['101px','2px','auto','auto','auto','auto']
      }]
   }],
   symbolInstances: [
   {
      id: 'codeByButton',
      symbolName: 'codeByButton'
   },
   {
      id: 'copyrightButton',
      symbolName: 'copyrightButton'
   }   ]
   },
   states: {
      "Base State": {
         "${_TextCopy}": [
            ["style", "top", '2px'],
            ["style", "width", '602px'],
            ["color", "color", 'rgba(119,119,119,1.00)'],
            ["style", "height", '16px'],
            ["style", "left", '0px'],
            ["style", "font-size", '12px']
         ],
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
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','106px','16px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   }],
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
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','168px','16px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'RoundRect2',
      opacity: 0,
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   }],
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
},
"Feedback": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(90,90,90,1.00)','normal','none',''],
      id: 'Feedback1',
      text: 'Feedback if student selects this answer',
      type: 'text',
      rect: ['0px','0px','227px','95px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Feedback1}": [
            ["style", "top", '0px'],
            ["style", "width", '227px'],
            ["style", "height", '95px'],
            ["color", "color", 'rgba(90,90,90,1.00)'],
            ["style", "left", '0px'],
            ["style", "font-size", '16px']
         ],
         "${symbolSelector}": [
            ["style", "height", '95px'],
            ["style", "width", '227px']
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
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-276373753");
