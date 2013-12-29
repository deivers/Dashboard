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
            id:'Lab_floorplan',
            type:'image',
            rect:['0px','0px','680px','330px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Lab_floorplan.jpg",'0px','0px']
         },
         {
            id:'HotspotEllipse2',
            type:'rect',
            rect:['327','314','auto','auto','auto','auto'],
            userClass:"hotspot"
         },
         {
            id:'HotspotEllipse3',
            type:'rect',
            rect:['581','210','auto','auto','auto','auto'],
            userClass:"hotspot"
         },
         {
            id:'HotspotEllipse4',
            type:'rect',
            rect:['103','257','auto','auto','auto','auto'],
            userClass:"hotspot"
         },
         {
            id:'HotspotEllipse',
            type:'rect',
            rect:['204','160','auto','auto','auto','auto'],
            userClass:"hotspot"
         }],
         symbolInstances: [
         {
            id:'HotspotEllipse',
            symbolName:'HotspotEllipse'
         },
         {
            id:'HotspotEllipse4',
            symbolName:'HotspotEllipse'
         },
         {
            id:'HotspotEllipse3',
            symbolName:'HotspotEllipse'
         },
         {
            id:'HotspotEllipse2',
            symbolName:'HotspotEllipse'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '685px'],
            ["style", "height", '340px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Lab_floorplan}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_HotspotEllipse}": [
            ["style", "left", '152px'],
            ["style", "top", '41px']
         ],
         "${_HotspotEllipse2}": [
            ["style", "left", '361px'],
            ["style", "top", '41px']
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
            { id: "eid15", tween: [ "style", "${_HotspotEllipse2}", "top", '41px', { fromValue: '41px'}], position: 0, duration: 0 },
            { id: "eid11", tween: [ "style", "${_HotspotEllipse}", "top", '41px', { fromValue: '41px'}], position: 0, duration: 0 },
            { id: "eid14", tween: [ "style", "${_HotspotEllipse2}", "left", '361px', { fromValue: '361px'}], position: 0, duration: 0 },
            { id: "eid10", tween: [ "style", "${_HotspotEllipse}", "left", '152px', { fromValue: '152px'}], position: 0, duration: 0 }         ]
      }
   }
},
"HotspotEllipse": {
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
      rect: ['0px','0px','102px','76px','auto','auto'],
      type: 'ellipse',
      borderRadius: ['50%','50%','50%','50%'],
      filter: [0,0,1,1,0,0,0,10,'rgba(0,0,0,0)',0,0,0],
      id: 'Ellipse',
      stroke: [0,'rgba(0,0,0,1)','none'],
      cursor: ['pointer'],
      fill: ['rgba(243,0,255,0.35)']
   },
   {
      rect: ['40px','23px','30px','30px','auto','auto'],
      source: ['30px','','',''],
      sizeRange: ['30px','','',''],
      id: 'checkmark_outlined2',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/checkmark_outlined.png','50%','50%','30px','30px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_checkmark_outlined2}": [
            ["style", "top", '23px'],
            ["style", "min-width", '30px'],
            ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "cursor", 'pointer'],
            ["style", "left", '40px']
         ],
         "${_Ellipse}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(243,0,255,0.35)'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '76px'],
            ["subproperty", "filter.blur", '10px'],
            ["style", "left", '0px'],
            ["style", "width", '102px']
         ],
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "min-width", '30px'],
            ["style", "width", '102px']
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
})(jQuery, AdobeEdge, "EDGE-465432216");
