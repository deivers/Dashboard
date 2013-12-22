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
            id:'NextPageButton',
            type:'rect',
            rect:['551','612','auto','auto','auto','auto']
         },
         {
            id:'cellmodel',
            type:'image',
            rect:['92px','139px','488px','317px','auto','auto'],
            fill:["rgba(0,0,0,0)",'cellmodel.png','0px','0px']
         },
         {
            id:'TextCopy2',
            type:'text',
            rect:['438px','133px','160px','21px','auto','auto'],
            text:"Nucleolus",
            userClass:"textSource",
            font:['Arial, Helvetica, sans-serif',15,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'TextCopy3',
            type:'text',
            rect:['489px','164px','160px','21px','auto','auto'],
            text:"Nucleus",
            userClass:"textSource",
            font:['Arial, Helvetica, sans-serif',15,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'TextCopy4',
            type:'text',
            rect:['537px','192px','160px','21px','auto','auto'],
            text:"Ribosome",
            userClass:"textSource",
            font:['Arial, Helvetica, sans-serif',15,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'TextCopy10',
            type:'text',
            rect:['580px','233px','160px','21px','auto','auto'],
            text:"Vesicle",
            userClass:"textSource",
            font:['Arial, Helvetica, sans-serif',15,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'TextCopy6',
            type:'text',
            rect:['537px','350px','160px','21px','auto','auto'],
            text:"Golgi body",
            userClass:"textSource",
            font:['Arial, Helvetica, sans-serif',15,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'TextCopy8',
            type:'text',
            rect:['17px','433px','160px','21px','auto','auto'],
            text:"Endoplasmic reticulum",
            userClass:"textSource",
            font:['Arial, Helvetica, sans-serif',15,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'TextCopy5',
            type:'text',
            rect:['12px','174px','160px','21px','auto','auto'],
            text:"Mitochondrion",
            userClass:"textSource",
            font:['Arial, Helvetica, sans-serif',15,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'Text',
            type:'text',
            rect:['296px','506px','160px','21px','auto','auto'],
            text:"animal cell",
            userClass:"textSource",
            font:['Arial, Helvetica, sans-serif',15,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'TextCopy13',
            type:'text',
            rect:['120px','506px','171px','21px','auto','auto'],
            text:"Which kind of cell is this?",
            font:['Arial, Helvetica, sans-serif',15,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'TextCopy',
            type:'text',
            rect:['-190px','366px','160px','21px','auto','auto'],
            text:"plant cell",
            userClass:"textSource",
            font:['Arial, Helvetica, sans-serif',15,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'TextCopy9',
            type:'text',
            rect:['-190px','164px','160px','21px','auto','auto'],
            text:"Lysosome",
            userClass:"textSource",
            font:['Arial, Helvetica, sans-serif',15,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'TextCopy11',
            type:'text',
            rect:['-190px','221px','160px','21px','auto','auto'],
            text:"Vacuole",
            userClass:"textSource",
            font:['Arial, Helvetica, sans-serif',15,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'TextCopy12',
            type:'text',
            rect:['-190px','283px','160px','21px','auto','auto'],
            text:"Centriole",
            userClass:"textSource",
            font:['Arial, Helvetica, sans-serif',15,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'SubmitAnswersButton',
            type:'rect',
            rect:['569','527','auto','auto','auto','auto']
         },
         {
            id:'Text2',
            type:'text',
            rect:['215px','30px','auto','auto','auto','auto'],
            text:"Cell Anatomy",
            font:['Arial, Helvetica, sans-serif',36,"rgba(0,0,0,1)","normal","none",""]
         }],
         symbolInstances: [
         {
            id:'NextPageButton',
            symbolName:'NextPageButton'
         },
         {
            id:'SubmitAnswersButton',
            symbolName:'SubmitAnswersButton'
         }
         ]
      },
   states: {
      "Base State": {
         "${_TextCopy13}": [
            ["style", "top", '506px'],
            ["style", "height", '21px'],
            ["style", "font-size", '15px'],
            ["style", "left", '120px'],
            ["style", "width", '171px']
         ],
         "${_Text2}": [
            ["style", "top", '30px'],
            ["style", "left", '215px'],
            ["style", "font-size", '36px']
         ],
         "${_TextCopy2}": [
            ["style", "top", '133px'],
            ["style", "height", '21px'],
            ["style", "width", '160px'],
            ["style", "left", '438px'],
            ["style", "font-size", '15px']
         ],
         "${_TextCopy10}": [
            ["style", "top", '233px'],
            ["style", "height", '21px'],
            ["style", "width", '160px'],
            ["style", "left", '580px'],
            ["style", "font-size", '15px']
         ],
         "${_TextCopy4}": [
            ["style", "top", '192px'],
            ["style", "height", '21px'],
            ["style", "width", '160px'],
            ["style", "left", '537px'],
            ["style", "font-size", '15px']
         ],
         "${_TextCopy3}": [
            ["style", "top", '164px'],
            ["style", "height", '21px'],
            ["style", "width", '160px'],
            ["style", "left", '489px'],
            ["style", "font-size", '15px']
         ],
         "${_TextCopy5}": [
            ["style", "top", '174px'],
            ["style", "height", '21px'],
            ["style", "width", '160px'],
            ["style", "left", '12px'],
            ["style", "font-size", '15px']
         ],
         "${_TextCopy12}": [
            ["style", "top", '283px'],
            ["style", "height", '21px'],
            ["style", "width", '160px'],
            ["style", "left", '-190px'],
            ["style", "font-size", '15px']
         ],
         "${_NextPageButton}": [
            ["style", "top", '527px'],
            ["style", "left", '518px']
         ],
         "${_TextCopy6}": [
            ["style", "top", '350px'],
            ["style", "height", '21px'],
            ["style", "width", '160px'],
            ["style", "left", '537px'],
            ["style", "font-size", '15px']
         ],
         "${_TextCopy11}": [
            ["style", "top", '221px'],
            ["style", "height", '21px'],
            ["style", "font-size", '15px'],
            ["style", "left", '-190px'],
            ["style", "width", '160px']
         ],
         "${_TextCopy8}": [
            ["style", "top", '433px'],
            ["style", "height", '21px'],
            ["style", "width", '160px'],
            ["style", "left", '17px'],
            ["style", "font-size", '15px']
         ],
         "${_Text}": [
            ["style", "top", '506px'],
            ["style", "height", '21px'],
            ["style", "width", '160px'],
            ["style", "left", '296px'],
            ["style", "font-size", '15px']
         ],
         "${_cellmodel}": [
            ["style", "height", '317px'],
            ["style", "top", '139px'],
            ["style", "left", '92px'],
            ["style", "width", '488px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "width", '754px'],
            ["style", "height", '700px'],
            ["style", "overflow", 'hidden']
         ],
         "${_SubmitAnswersButton}": [
            ["style", "left", '518px']
         ],
         "${_TextCopy}": [
            ["style", "top", '366px'],
            ["style", "height", '21px'],
            ["style", "width", '160px'],
            ["style", "left", '-190px'],
            ["style", "font-size", '15px']
         ],
         "${_TextCopy9}": [
            ["style", "top", '164px'],
            ["style", "height", '21px'],
            ["style", "font-size", '15px'],
            ["style", "left", '-190px'],
            ["style", "width", '160px']
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
            { id: "eid1", tween: [ "style", "${_SubmitAnswersButton}", "left", '518px', { fromValue: '518px'}], position: 0, duration: 0 },
            { id: "eid3", tween: [ "style", "${_NextPageButton}", "left", '518px', { fromValue: '518px'}], position: 0, duration: 0 },
            { id: "eid6", tween: [ "style", "${_NextPageButton}", "top", '527px', { fromValue: '527px'}], position: 0, duration: 0 }         ]
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
      font: ['Arial, Helvetica, sans-serif',16,'rgba(255,255,255,1.00)','500','none',''],
      type: 'text',
      align: 'center',
      id: 'Text',
      text: 'Submit<br>',
      cursor: ['pointer'],
      rect: ['30px','6px','72px','auto','auto','auto']
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
"NextPageButton": {
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
      rect: ['0px','1px','129px','27px','auto','auto'],
      title: 'Check answers',
      type: 'rect',
      id: 'RoundRect',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(93,93,93,1.00)',[270,[['rgba(0,127,42,1.00)',0],['rgba(0,72,23,1.00)',100]]]]
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(255,255,255,1.00)','500','none',''],
      type: 'text',
      align: 'center',
      id: 'Text',
      text: 'Next page',
      cursor: ['pointer'],
      rect: ['0px','6px','131px','21px','auto','auto']
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
            ["style", "top", '1px'],
            ["style", "border-bottom-left-radius", [14,14], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["gradient", "background-image", [270,[['rgba(0,127,42,1.00)',0],['rgba(0,72,23,1.00)',100]]]],
            ["style", "height", '27px'],
            ["style", "border-width", '1px'],
            ["style", "left", '0px'],
            ["style", "border-top-right-radius", [14,14], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Text}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '131px'],
            ["style", "top", '6px'],
            ["style", "text-align", 'center'],
            ["style", "height", '21px'],
            ["style", "left", '0px'],
            ["style", "font-size", '16px']
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
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-749678393");
