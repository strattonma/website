(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{294:function(e,t,a){"use strict";a.r(t);var r=a(7),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("PagesInCategory",{attrs:{category:"Network Assignment"}}),e._v(" "),a("p",[e._v("Dynamic network assignment models (also referred to as dynamic traffic assignment models or DTA) capture the changes in network performance by detailed time-of-day, and can be used to generate time varying measures of this performance. They occupy the middle ground between static macroscopic traffic assignment and microscopic traffic simulation models. The same level of network and zonal resolution used in regional travel models are often used in DTA models, but at a much finer level of temporal detail. Because they typically employ link-based simulation models they produce more robust estimates of link flows and travel times. DTA models are often used for both small and large-scale traffic studies, but traditionally have not been used with regional travel models. That is rapidly changing, as the integration of DTA and "),a("a",{attrs:{href:"https://tfresource.github.io/topics/Activity_based_models.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Activity-Based_Models"),a("OutboundLink")],1),e._v(" is a hot topic in travel forecasting.")]),e._v(" "),a("h2",{attrs:{id:"background"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[e._v("#")]),e._v(" Background")]),e._v(" "),a("p",[e._v("Traditional user equilibrium highway assignment models predict the effects of congestion and the routing changes of traffic as a result of that congestion. They neglect, however, many of the details of real-world traffic operations, such as queuing, shock waves, and signalization. Currently, it is common practice to feed the results of user equilibrium traffic assignments into dynamic network models as a mechanism for evaluating these policies. The simulation models themselves, however, do not predict the routing of traffic, and therefore are unable to account for re-routing owing to changes in congestion levels or policy, and can be inconsistent with the routes determined by the assignment. Dynamic network models overcome this dichotomy by combining a time-dependent shortest path algorithm with some type of simulation (often meso or macroscopic) of link travel times and delay. In doing so it allows added reality and consistency in the assignment step, as well as the ability to evaluate policies designed to improve traffic operations. These are some of the main "),a("a",{attrs:{href:"Benefits_of_dynamic_network_models"}},[e._v("benefits of dynamic network models")]),e._v(".")]),e._v(" "),a("p",[e._v("DTA models can generally be classified by how they model link or intersection delay. Analytical DTA models treat it in the same manner as static equilibrium assignment models, with no explicit representation of signals. Link capacity functions, often similar or identical to those used in static assignment, are used to calculate link travel times. Analytical models have been widely used in research and for real-time control system applications. Simulation-based DTA models include explicit representation of traffic control devices. Such models require detailed signal parameters to include phasing, cycle length, and offsets for each signal in the network. Delay is calculated for each approach, with vehicles moving from one link to the next only if available downstream capacity is available. The underlying traffic model is often different, but at the network level such models behave in a similar fashion.")]),e._v(" "),a("p",[e._v("Demand is specified in the form of origin–destination matrices for short time intervals, typically 15 minutes each. Trips are typically randomly loaded onto the network during each time interval. As with traffic microsimulation models, adequate downstream capacity must be present to load the trips onto the network. The shortest paths through time and space are found for each origin–destination pair, and flows loaded to these paths. A generalized flowchart of the process is shown below.")]),e._v(" "),a("p",[a("img",{attrs:{src:"Dta-flowchart.png",alt:"Typical DTA model flow",title:"Typical DTA model flow"}})]),e._v(" "),a("p",[a("br"),e._v(" "),a("br"),e._v("\nAs with static assignment models, the process shown above is iteratively solved until a stable solution is reached. The memory and computing requirements of DTA, however, are orders of magnitude larger than for static assignment, reducing the number of iterations and paths that can be kept in memory. Instead of a single time period, as with static assignment, DTA models must store data for each time interval as well. A three-hour static assignment would involve only one time interval. A DTA model of the same period, however, might require 12 intervals, each 15 minutes in duration. These are all in addition to the memory requirements imposed by the number of user classes and zones.")]),e._v(" "),a("h2",{attrs:{id:"early-experiences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#early-experiences"}},[e._v("#")]),e._v(" Early Experiences")]),e._v(" "),a("p",[e._v("Research into DTA dates back several decades, but was largely limited to academics working on its formulation and theoretical aspects. DTA overcomes the limitations of static assignment models, although at the cost of increased data requirements and computational burden. Moreover, software platforms capable of solving the DTA problem for large urban systems and experience in their use are recent developments.")]),e._v(" "),a("p",[e._v("Although its use in planning studies was perhaps always intended ("),a("a",{attrs:{href:"http://link.springer.com/article/10.1023%2FA%3A1012827724856?LI=true",target:"_blank",rel:"noopener noreferrer"}},[e._v("Peeta and Ziliaskopoulos 2001"),a("OutboundLink")],1),e._v("), most of the early investigations focused on freeway control and ITS applications ("),a("a",{attrs:{href:"http://www.sciencedirect.com/science/article/pii/0191260788900489",target:"_blank",rel:"noopener noreferrer"}},[e._v("Van Aerde and Yagar 1988"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://trid.trb.org/view.aspx?id=690616",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mahmassani et al. 1994"),a("OutboundLink")],1),e._v("). Only a few large-scale applications in tandem with regional travel demand models have been attempted. "),a("a",{attrs:{href:"https://www.inrosoftware.com/en/products/dynameq/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dynameq"),a("OutboundLink")],1),e._v(" has been successfully applied to a large subarea of Calgary and to analyses of the Rue Notre-Dame in Montreal. Although user group presentations of both applications have been made, and reported very encouraging results, the work is currently unpublished and inaccessible except through contact with the developers.")]),e._v(" "),a("p",[e._v("The largest known DTA application to date is described by "),a("a",{attrs:{href:"http://www.trb.org/Publications/Blurbs/160461.aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hicks (2008)"),a("OutboundLink")],1),e._v(". The network from the Atlanta Regional Commission (ARC) regional travel model formed the starting point for the DTA network. Intersections were coded, centroid connectors were re-defined, and network coding errors were corrected. A signal synthesizer derived locally optimal timing parameters for more than 2,200 signalized intersections in the network. Trip matrices from the ARC model were divided into 15-minute intervals for the specification of demand. Approximately 40 runs of the model were required to diagnose coding and software errors. Unfortunately, the execution time for the model was approximately one week per run. The resulting model eventually validated well to observed conditions; however, the length of time required to render it operational and the run time required prevented it from being used in studies as originally intended. Subsequent work by the developer has resulted in substantial reductions in run time, but this remains a significant issue that must be overcome before such models can be more widely used.")]),e._v(" "),a("h2",{attrs:{id:"current-practices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#current-practices"}},[e._v("#")]),e._v(" Current Practices")]),e._v(" "),a("h2",{attrs:{id:"research-needs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#research-needs"}},[e._v("#")]),e._v(" Research Needs")]),e._v(" "),a("p",[e._v("A number of cities are currently testing DTA models, but are not far enough along in their work to share even preliminary results. At least a dozen such cases are known to be in varying stages of planning or execution, suggesting that the use of DTA models in planning applications is about to expand dramatically. However, in addition to the issue of long run times, a number of other issues must be addressed before such models are likely to be widely adopted:")]),e._v(" "),a("ul",[a("li",[e._v("The integration of DTA and travel demand models has only been attempted on an ad hoc basis, although the topic has received considerable research interest ("),a("a",{attrs:{href:"http://journals.sagepub.com/doi/abs/10.1068/a180485",target:"_blank",rel:"noopener noreferrer"}},[e._v("Boyce 1986"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"http://www.caee.utexas.edu/prof/bhat/ABSTRACTS/CEMDAP_VISTA_pub.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lin et al. 2008"),a("OutboundLink")],1),e._v("). Operational models formally incorporating feedback between the two modeling realms was attempted as part of SHRP 2 C10 project in "),a("a",{attrs:{href:"http://apps.trb.org/cmsfeed/TRBNetProjectDisplay.asp?ProjectID=2828",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sacramento"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"http://apps.trb.org/cmsfeed/TRBNetProjectDisplay.asp?ProjectID=2829",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jacksonville"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("ul",[a("li",[e._v("Transit has only been recently tackled in DTA models. The development of "),a("a",{attrs:{href:"https://github.com/MetropolitanTransportationCommission/fast-trips",target:"_blank",rel:"noopener noreferrer"}},[e._v("fast-trips"),a("OutboundLink")],1),e._v(" is ongoing, and several vendors of commercial packages are thought to be working towards the same capabilities.")])]),e._v(" "),a("ul",[a("li",[e._v("Traffic signal timings have a significant effect on network performance. However, most of the research on DTA models has been on node-abstract analytical solutions. Practical and scalable methods for developing signal timing inputs to regional DTA models have yet to emerge despite considerable evidence of its influence on capacity and operations ("),a("a",{attrs:{href:"https://trid.trb.org/view.aspx?id=174269",target:"_blank",rel:"noopener noreferrer"}},[e._v("Berg and Do 1981"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://trid.trb.org/view.aspx?id=367767",target:"_blank",rel:"noopener noreferrer"}},[e._v("Boyce et al. 1989"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"http://www.civil.uwaterloo.ca/bhellinga/publications/Publications/TRB%201996%20Integration%20Features.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rakha & Van Aerde 1996"),a("OutboundLink")],1),e._v(").")])]),e._v(" "),a("ul",[a("li",[e._v("Criteria for the validation of such models have not been widely accepted. The paucity of traffic counts in most urban areas, and especially at 15, 30, or 60 minute intervals, is a significant barrier to definitive assessment of these models.")])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);