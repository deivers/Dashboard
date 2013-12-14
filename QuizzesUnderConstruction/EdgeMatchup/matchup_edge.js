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
            id:'resetButton3',
            type:'rect',
            rect:['422px','637px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'checkAnswersButton',
            type:'rect',
            rect:['383px','587px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'qHint1',
            type:'text',
            rect:['21px','48px','133px','117px','auto','auto'],
            cursor:['default'],
            text:"<br><br>type a hint for the question here<br>",
            align:"center",
            font:['Arial, Helvetica, sans-serif',15,"rgba(0,0,0,1.00)","normal","none","normal"]
         },
         {
            id:'dragHint1',
            type:'text',
            rect:['748px','44px','133px','108px','auto','auto'],
            cursor:['default'],
            text:"<br><br>type a hint for the question here<br>",
            align:"center",
            font:['Arial, Helvetica, sans-serif',15,"rgba(0,0,0,1.00)","normal","none","normal"]
         },
         {
            id:'q1',
            type:'rect',
            rect:['196px','46px','188px','88px','auto','auto'],
            borderRadius:["15px 15px","15px 15px","0px 0px","0px 0px"],
            fill:["rgba(97,131,159,1.00)"],
            stroke:[1,"rgb(0, 0, 0)","solid"],
            c:[
            {
               id:'qText1',
               type:'text',
               rect:['7px','0px','173px','88px','auto','auto'],
               text:"<br>xyz",
               align:"center",
               font:['Arial, Helvetica, sans-serif',20,"rgba(255,255,255,1.00)","normal","none",""]
            }]
         },
         {
            id:'zone1',
            type:'rect',
            rect:['196px','135px','186px','26px','auto','auto'],
            borderRadius:["0px 0px","0px 0px","15px 15px","15px 15px"],
            fill:["rgba(220,217,217,1.00)"],
            stroke:[2,"rgba(0,0,0,1)","dashed"]
         },
         {
            id:'qHint1Copy',
            type:'text',
            rect:['20px','192px','133px','117px','auto','auto'],
            cursor:['default'],
            text:"<br><br>type a hint for the question here<br>",
            align:"center",
            font:['Arial, Helvetica, sans-serif',15,"rgba(0,0,0,1.00)","normal","none","normal"]
         },
         {
            id:'dragHint1Copy',
            type:'text',
            rect:['747px','188px','133px','108px','auto','auto'],
            cursor:['default'],
            text:"<br><br>type a hint for the question here<br>",
            align:"center",
            font:['Arial, Helvetica, sans-serif',15,"rgba(0,0,0,1.00)","normal","none","normal"]
         },
         {
            id:'q2',
            type:'rect',
            rect:['195px','190px','188px','88px','auto','auto'],
            borderRadius:["15px 15px","15px 15px","0px 0px","0px 0px"],
            fill:["rgba(97,131,159,1.00)"],
            stroke:[1,"rgb(0, 0, 0)","solid"],
            c:[
            {
               id:'qText1Copy',
               type:'text',
               rect:['7px','0px','173px','88px','auto','auto'],
               text:"<br>abc",
               align:"center",
               font:['Arial, Helvetica, sans-serif',20,"rgba(255,255,255,1.00)","normal","none",""]
            }]
         },
         {
            id:'zone2',
            type:'rect',
            rect:['195px','279px','186px','26px','auto','auto'],
            borderRadius:["0px 0px","0px 0px","15px 15px","15px 15px"],
            fill:["rgba(220,217,217,1.00)"],
            stroke:[2,"rgba(0,0,0,1)","dashed"]
         },
         {
            id:'drag2',
            type:'rect',
            rect:['529px','227px','188px','28px','auto','auto'],
            cursor:['move'],
            borderRadius:["0px 0px","0px 0px","15px 15px","15px 15px"],
            opacity:1,
            fill:["rgba(97,112,159,1.00)"],
            stroke:[1,"rgba(0,0,0,1)","solid"],
            userClass:"dragTab",
            c:[
            {
               id:'dragText1Copy',
               type:'text',
               rect:['9px','-2px','173px','30px','auto','auto'],
               opacity:1,
               text:"xyz",
               align:"center",
               font:['Arial, Helvetica, sans-serif',18,"rgba(255,255,255,1.00)","normal","none",""]
            }]
         },
         {
            id:'drag1',
            type:'rect',
            rect:['530px','83px','188px','28px','auto','auto'],
            cursor:['move'],
            borderRadius:["0px 0px","0px 0px","15px 15px","15px 15px"],
            opacity:1,
            fill:["rgba(97,112,159,1.00)"],
            stroke:[1,"rgba(0,0,0,1)","solid"],
            userClass:"dragTab",
            c:[
            {
               id:'dragText1',
               type:'text',
               rect:['9px','-2px','173px','30px','auto','auto'],
               opacity:1,
               text:"abc",
               align:"center",
               font:['Arial, Helvetica, sans-serif',18,"rgba(255,255,255,1.00)","normal","none",""]
            }]
         },
         {
            id:'CopyrightAndCredits',
            type:'rect',
            rect:['162px','684px','auto','auto','auto','auto'],
            opacity:0.44488525390625
         }],
         symbolInstances: [
         {
            id:'CopyrightAndCredits',
            symbolName:'CopyrightAndCredits'
         },
         {
            id:'resetButton3',
            symbolName:'resetButton'
         },
         {
            id:'checkAnswersButton',
            symbolName:'checkAnswers'
         }
         ]
      },
   states: {
      "Base State": {
         "${_drag2}": [
            ["color", "background-color", 'rgba(97,112,159,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0'],
            ["style", "left", '529px'],
            ["style", "width", '188px'],
            ["style", "top", '227px'],
            ["style", "border-bottom-left-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '28px'],
            ["style", "cursor", 'move'],
            ["style", "border-width", '1px'],
            ["style", "border-style", 'solid']
         ],
         "${_qHint1Copy}": [
            ["style", "line-height", 'normal'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '20px'],
            ["style", "font-size", '15px'],
            ["style", "top", '192px'],
            ["style", "overflow", 'auto'],
            ["style", "height", '117px'],
            ["style", "cursor", 'default'],
            ["style", "width", '133px']
         ],
         "${_q1}": [
            ["color", "background-color", 'rgba(97,131,159,1.00)'],
            ["style", "border-top-left-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-top-right-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '188px'],
            ["style", "top", '46px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-width", '1px'],
            ["style", "left", '196px']
         ],
         "${_qHint1}": [
            ["style", "line-height", 'normal'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '21px'],
            ["style", "font-size", '15px'],
            ["style", "top", '48px'],
            ["style", "overflow", 'auto'],
            ["style", "height", '117px'],
            ["style", "width", '133px'],
            ["style", "cursor", 'default']
         ],
         "${_CopyrightAndCredits}": [
            ["style", "top", '684px'],
            ["style", "opacity", '0.44488525390625'],
            ["style", "left", '162px']
         ],
         "${_checkAnswersButton}": [
            ["style", "top", '587px'],
            ["style", "left", '383px'],
            ["style", "cursor", 'pointer']
         ],
         "${_dragHint1}": [
            ["style", "line-height", 'normal'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '748px'],
            ["style", "font-size", '15px'],
            ["style", "top", '44px'],
            ["style", "overflow", 'auto'],
            ["style", "height", '108px'],
            ["style", "cursor", 'default'],
            ["style", "width", '133px']
         ],
         "${_resetButton3}": [
            ["style", "top", '637px'],
            ["style", "left", '422px'],
            ["style", "cursor", 'pointer']
         ],
         "${_q2}": [
            ["color", "background-color", 'rgba(97,131,159,1.00)'],
            ["style", "border-top-left-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-top-right-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '188px'],
            ["style", "top", '190px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '195px'],
            ["style", "border-width", '1px']
         ],
         "${_dragText1Copy}": [
            ["style", "line-height", '30px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '9px'],
            ["style", "width", '173px'],
            ["style", "top", '-2px'],
            ["style", "text-align", 'center'],
            ["style", "height", '30px'],
            ["style", "font-size", '18px']
         ],
         "${_dragHint1Copy}": [
            ["style", "line-height", 'normal'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '747px'],
            ["style", "font-size", '15px'],
            ["style", "top", '188px'],
            ["style", "overflow", 'auto'],
            ["style", "height", '108px'],
            ["style", "width", '133px'],
            ["style", "cursor", 'default']
         ],
         "${_qText1Copy}": [
            ["style", "top", '0px'],
            ["style", "text-align", 'center'],
            ["style", "width", '173px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "line-height", '30px'],
            ["style", "left", '7px'],
            ["style", "font-size", '20px']
         ],
         "${_zone1}": [
            ["color", "background-color", 'rgba(220,217,217,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'dashed'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '186px'],
            ["style", "top", '135px'],
            ["style", "border-bottom-left-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '26px'],
            ["style", "left", '196px'],
            ["style", "border-width", '2px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '710px'],
            ["style", "width", '900px']
         ],
         "${_qText1}": [
            ["style", "top", '0px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '20px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "line-height", '30px'],
            ["style", "left", '7px'],
            ["style", "width", '173px']
         ],
         "${_zone2}": [
            ["color", "background-color", 'rgba(220,217,217,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'dashed'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '186px'],
            ["style", "top", '279px'],
            ["style", "border-bottom-left-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '26px'],
            ["style", "border-width", '2px'],
            ["style", "left", '195px']
         ],
         "${_drag1}": [
            ["color", "background-color", 'rgba(97,112,159,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0'],
            ["style", "left", '530px'],
            ["style", "width", '188px'],
            ["style", "top", '83px'],
            ["style", "border-bottom-left-radius", [15,15], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "height", '28px'],
            ["style", "border-width", '1px'],
            ["style", "cursor", 'move'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_dragText1}": [
            ["style", "line-height", '30px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '9px'],
            ["style", "width", '173px'],
            ["style", "top", '-2px'],
            ["style", "text-align", 'center'],
            ["style", "height", '30px'],
            ["style", "font-size", '18px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid42", tween: [ "style", "${_qHint1Copy}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid43", tween: [ "style", "${_qHint1Copy}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 0 },
            { id: "eid40", tween: [ "style", "${_dragHint1Copy}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid41", tween: [ "style", "${_dragHint1Copy}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 0 },
            { id: "eid38", tween: [ "style", "${_dragText1Copy}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid39", tween: [ "style", "${_dragText1Copy}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 0 },
            { id: "eid9", tween: [ "style", "${_qHint1}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid11", tween: [ "style", "${_qHint1}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 0 },
            { id: "eid34", tween: [ "style", "${_dragHint1}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid35", tween: [ "style", "${_dragHint1}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 0 },
            { id: "eid2", tween: [ "style", "${_dragText1}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid4", tween: [ "style", "${_dragText1}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 0 },
            { id: "eid36", tween: [ "style", "${_drag2}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid37", tween: [ "style", "${_drag2}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 0 },
            { id: "eid1", tween: [ "style", "${_drag1}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid3", tween: [ "style", "${_drag1}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 0 }         ]
      }
   }
},
"checkAnswers": {
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
      stroke: [2,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(112,100,252,1.00)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(255,255,255,1.00)','500','none',''],
      type: 'text',
      id: 'Text',
      text: 'Check answers',
      align: 'center',
      rect: ['12px','7px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(112,100,252,1.00)'],
            ["style", "border-top-left-radius", [14,14], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [14,14], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '129px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [14,14], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '27px'],
            ["style", "left", '0px'],
            ["style", "border-top-right-radius", [14,14], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Text}": [
            ["style", "top", '7px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '12px'],
            ["style", "font-size", '16px']
         ],
         "${symbolSelector}": [
            ["style", "height", '31px'],
            ["style", "width", '133px']
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
"resetButton": {
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
      font: ['Arial, Helvetica, sans-serif',13,'rgba(115,115,115,1.00)','400','none','normal'],
      type: 'text',
      id: 'resetButton',
      text: 'RESET',
      align: 'center',
      rect: ['5px','6px','auto','auto','auto','auto']
   },
   {
      type: 'rect',
      id: 'Rectangle2',
      stroke: [1,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','56px','24px','auto','auto'],
      fill: ['rgba(97,112,159,0.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_resetButton}": [
            ["style", "top", '6px'],
            ["color", "color", 'rgba(115,115,115,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '5px'],
            ["style", "font-size", '13px']
         ],
         "${_Rectangle2}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(97,112,159,0.00)'],
            ["style", "height", '24px'],
            ["style", "border-style", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '56px']
         ],
         "${symbolSelector}": [
            ["style", "height", '24px'],
            ["style", "width", '56px']
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
      rect: ['0px','0px','575','18','auto','auto'],
      c: [
      {
         type: 'text',
         rect: ['0px','2px','575px','16px','auto','auto'],
         id: 'Text',
         text: 'Copyright 2013 North Carolina State University. Code by One Time Software. Version 1.0 July 2013.',
         align: 'center',
         font: ['Arial, Helvetica, sans-serif',12,'rgba(0,0,0,1)','normal','none','']
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
         rect: ['102px','2px','auto','auto','auto','auto']
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
         "${_Group}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text}": [
            ["style", "top", '2px'],
            ["style", "text-align", 'center'],
            ["style", "height", '16px'],
            ["style", "font-size", '12px'],
            ["style", "left", '0px'],
            ["style", "width", '575px']
         ],
         "${symbolSelector}": [
            ["style", "height", '18px'],
            ["style", "width", '575px']
         ],
         "${_codeByButton}": [
            ["style", "top", '0px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '327px']
         ],
         "${_copyrightButton}": [
            ["style", "top", '2px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '102px']
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
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-86546566");
