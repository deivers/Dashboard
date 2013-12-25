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
            id:'HotspotEllipse',
            type:'rect',
            rect:['204','160','auto','auto','auto','auto'],
            userClass:"hotspot"
         }],
         symbolInstances: [
         {
            id:'HotspotEllipse',
            symbolName:'HotspotEllipse'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '400px'],
            ["style", "width", '550px']
         ],
         "${_HotspotEllipse}": [
            ["style", "left", '224px'],
            ["style", "top", '162px']
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
            { id: "eid3", tween: [ "style", "${_HotspotEllipse}", "top", '162px', { fromValue: '162px'}], position: 0, duration: 0 },
            { id: "eid1", tween: [ "style", "${_HotspotEllipse}", "left", '224px', { fromValue: '224px'}], position: 0, duration: 0 }         ]
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
      type: 'ellipse',
      rect: ['0px','0px','102px','76px','auto','auto'],
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
      fill: ['rgba(0,0,0,0)','images/checkmark_outlined.png','50%','50%','30px','30px'],
      id: 'checkmark_outlined2',
      type: 'image',
      cursor: ['pointer'],
      sizeRange: ['30px','','','']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_checkmark_outlined2}": [
            ["style", "top", '23px'],
            ["style", "min-width", '30px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '40px'],
            ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ]
         ],
         "${_Ellipse}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(243,0,255,0.35)'],
            ["style", "left", '0px'],
            ["style", "height", '76px'],
            ["subproperty", "filter.blur", '10px'],
            ["style", "cursor", 'pointer'],
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
