(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{484:function(e,t,a){"use strict";a.r(t);var s=a(7),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("In most travel models, the geographic area being analyzed is split into many smaller spatial units or zones. These "),a("span",[a("div",{staticClass:"hint--html hint--top hint--hoverable"},[e._v("\nTAZ\n"),a("div",{staticClass:"hint__content"},[a("h3",[e._v("TAZ")]),e._v(" "),a("p",[e._v("Traffic Analysis Zone")]),a("p",{staticClass:"hint__tiny__left"},[a("a",{attrs:{href:"/topics/Traffic_Analysis_Zone"}},[e._v("More info")])]),e._v(" "),a("p",{staticClass:"hint__tiny"},[e._v("See the full "),a("a",{attrs:{href:"/topics/glossary"}},[e._v("TFR Glossary")])])])])]),e._v("s (which stands for travel, transportation, or traffic analysis zones) may have several uses, depending on how a travel model is structured, including: storing information about the people and places in each zone, serving as origins and destinations of trips, and calculating travel times between (and within) zones. There are no specific requirements for how TAZs must be defined or about their size or number, and some models may use multiple zonal hierarchies.")]),e._v(" "),a("h2",{attrs:{id:"how-tazs-are-used"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-tazs-are-used"}},[e._v("#")]),e._v(" How TAZs are used")]),e._v(" "),a("p",[e._v("TAZs are usually used to organize and store "),a("a",{attrs:{href:"Spatial_data"}},[e._v("spatial data")]),e._v(" that are used as inputs to the travel model, including: demographic and socio-economic information about the people and households residing in each zone; land use and employment information about the places and the people working and studying in each zone; information about the transportation system within each zone (especially related to supply, cost, or time); and other zonal measures of the built environment.")]),e._v(" "),a("p",[e._v("In "),a("a",{attrs:{href:"Trip_based_models"}},[e._v("trip-based models")]),e._v(", TAZs are critical elements in the modeling process and are actually the spatial unit at which most calculations take place. "),a("a",{attrs:{href:"Trip_Generation"}},[e._v("Trip generation models")]),e._v(" predict the number of trips produced by or attracted to each zone, and "),a("a",{attrs:{href:"Trip_distribution"}},[e._v("trip distribution models")]),e._v(" (or "),a("a",{attrs:{href:"Destination_Choice_Models"}},[e._v("destination choice models")]),e._v(") link zonal trip productions and attractions. These steps generate trip tables (matrices) where each cell represents a flow of trips between two zones (often segmented by purpose and mode). "),a("a",{attrs:{href:"Trip_distribution"}},[e._v("Trip distribution")]),e._v(" and "),a("a",{attrs:{href:"Mode_choice"}},[e._v("mode choice")]),e._v(" models often use similar "),a("a",{attrs:{href:"Skim_Matrix"}},[e._v("skim matrices")]),e._v(", which contain zone-to-zone measures of "),a("a",{attrs:{href:"Impedance"}},[e._v("impedances")]),e._v(" like travel times. TAZs are the smallest available spatial unit when describing model outputs.")]),e._v(" "),a("p",[e._v("In "),a("a",{attrs:{href:"Activity_based_models"}},[e._v("activity-based models")]),e._v(", the sub-models operate on individual people and trips instead of zones, yet TAZs are still very important for many of the same reasons as in trip-based models, such as for structuring spatial input data, performing intermediate calculations about impedances, and spatially summarizing model outputs.")]),e._v(" "),a("h2",{attrs:{id:"zonal-sizes-and-structures"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zonal-sizes-and-structures"}},[e._v("#")]),e._v(" Zonal sizes and structures")]),e._v(" "),a("p",[e._v("TAZs can be of any shape or size, but some choices make it easier to assemble input data and perform model calculations. The borders of zones usually follow streets and roads and contain one or more blocks of land, so that the "),a("a",{attrs:{href:"Highway_networks"}},[e._v("street network")]),e._v(" defines the borders of zones. The shapes of zones should usually be compact and contiguous—avoiding narrow strip, horseshoe, or doughnut shapes—because "),a("a",{attrs:{href:"Skim_Matrix"}},[e._v("skim matrices")]),e._v(" assume the same travel time or "),a("a",{attrs:{href:"Impedance"}},[e._v("impedance")]),e._v(" from every point in a particular zone. Also, the land uses within zones should often be fairly homogenous, so that single values for certain zonal characteristics can more accurately characterize the contents of that zone. In the U.S., it is often convenient for zones to be consistent with (containing or nested within) Census block groups or tracts, since the demographic and socio-economic data uses in travel modeling is frequently obtained from such sources. However, it is possible for zones to be as small as individual parcels or buildings.")]),e._v(" "),a("p",[e._v("The number of zones in an area depends upon the size of the geographic area being modeled, the desired level of spatial detail, the availability of input data, and the sophistication of the travel model. In general, smaller and more numerous zones provide a greater sensitivity to small-scale variations in the built environment and transportation system, can improve "),a("a",{attrs:{href:"Accessibility"}},[e._v("accessibility")]),e._v(" calculations for short-distance modes like walking and walking to transit, and reduces aggregation bias. But, a fine-grained level of spatial detail requires sufficient input data and results in greater computational burden and longer model run times. In particular, the size of trip tables and "),a("a",{attrs:{href:"Skim_Matrix"}},[e._v("skim matrices")]),e._v(" grows exponentially with the number of zones. In the U.S., many regional transportation planning models contain in the range of 500 to 5,000 TAZs.")]),e._v(" "),a("p",[e._v("Some travel models contain multiple zonal structures, each for different modeling tasks. For example, several thousand TAZs could be used to represent automobile travel times, whereas several tens-of-thousands of “microzones” could be to calculate travel times by walking and bicycling.")]),e._v(" "),a("p",[e._v("Travel modeling systems could use spatial analysis units that are of a uniform shape and size, such as squares or hexagons. However, the use of uniform grid cells or hexagonal-shaped zones (as opposed to network-bounded TAZs) is much less common in practice.")]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("p",[a("a",{attrs:{href:"Content_Charrette_Destination_Choice_Models"}},[e._v("Content Charrette: Destination Choice Models")])]),e._v(" "),a("p",[e._v("Castiglione, J., Bradley, M., & Gliebe, J. (2015). "),a("em",[e._v("Activity-based travel demand models: A primer")]),e._v(" (SHRP 2 Report SR-C46-RR-1). Transportation Research Board. https://doi.org/10.17226/22357")]),e._v(" "),a("p",[e._v("Miller, H. J., & Shih-Lung S. (2001). "),a("em",[e._v("Geographic information systems for transportation")]),e._v(". Oxford University Press.")]),e._v(" "),a("p",[e._v("Ortúzar, J. d. D., & Willumsen, L. G. (2011). "),a("em",[e._v("Modelling transport")]),e._v(" (4th ed.). Wiley.")])])}),[],!1,null,null,null);t.default=o.exports}}]);