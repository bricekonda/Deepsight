app.controller("controller_blog",function($scope, $routeParams, $http, $timeout){
//Site Web Data//

var vm = this;	

$scope.team_member = [
	{"name":"Brice","education":"Msc in Computer Science at Ecole Centrale Paris","role":"CEO & Co-Founder","path":"../photos/bricekondateammember.png","link":"https://www.linkedin.com/in/bricekonda","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
	{"name":"Valentin","education":"Msc in Applied Mathematics at Ecole Centrale Paris","role":"CTO & Co-Founder","path":"../photos/valentinpignoletteammember.png","link":"https://www.linkedin.com/in/valentin-pignolet-97330584?authType=NAME_SEARCH&authToken=YfG8&locale=fr_FR&srchid=2662867011464336774636&srchindex=1&srchtotal=1&trk=vsrp_people_res_name&trkInfo=VSRPsearchId%3A2662867011464336774636%2CVSRPtargetId%3A299354919%2CVSRPcmpt%3Aprimary%2CVSRPnm%3Atrue%2CauthType%3ANAME_SEARCH","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
	{"name":"Adrien","education":"Msc in Applied Mathematics at ENS, PhD at University of Montreal","role":"DP Specialist","path":"../photos/edouardneuvilleteammember.png","link":"https://www.linkedin.com/in/adrien-ali-ta%C3%AFga-2b72615b?authType=NAME_SEARCH&authToken=hXbm&locale=fr_FR&srchid=2662867011464336794757&srchindex=1&srchtotal=1&trk=vsrp_people_res_name&trkInfo=VSRPsearchId%3A2662867011464336794757%2CVSRPtargetId%3A212629099%2CVSRPcmpt%3Aprimary%2CVSRPnm%3Atrue%2CauthType%3ANAME_SEARCH","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "},
	{"name":"Edouard","education":"Msc in Applied Mathematics at Ecole Centrale Paris","role":"NLP Specialist","path":"../photos/edouardneuvilleteammember.png","link":"https://www.linkedin.com/in/edouard-neuville-a4962b74?authType=NAME_SEARCH&authToken=7xQj&locale=fr_FR&srchid=2662867011464336684750&srchindex=1&srchtotal=1&trk=vsrp_people_res_name&trkInfo=VSRPsearchId%3A2662867011464336684750%2CVSRPtargetId%3A264321561%2CVSRPcmpt%3Aprimary%2CVSRPnm%3Atrue%2CauthType%3ANAME_SEARCH","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "}
];

$scope.all_case_studies =[

	{	
		"id":"0",
		"prevtitle":"Customer segmentation",
		"title":"1 PREDICTIVE MODEL FACTORY FOR RETAILING ",
		"subtitle":"1 Each operator saves now 3h/day which allow the operating cost to decrease by 7% and save up $4M",
		"title_problem":"1 Context and Problem",
		"content_problem":"1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
		"title_solution":"1 Solution",
		"content_solution":"1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
		"title_illustration":"1 Illustration",
		"path_illustration":"1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
		"title_technology":"1 Technology",
		"techno_1_technology":"1 Deep Learning",
		"techno_2_technology":"1 Deep Learning",
		"techno_3_technology":"1 Deep Learning",
		"language_1_technology":"../photos/cpp.jpg",
		"language_2_technology":"../photos/R.png",
		"language_3_technology":"../photos/python.png",
	},
		{
		"id":"1",
		"prevtitle":"Scoring",
		"title":"2 PREDICTIVE MODEL FACTORY FOR RETAILING 2",
		"subtitle":"2 Each operator saves now 3h/day which allow the operating cost to decrease by 7% and save up $4M",
		"title_problem":"2 Context and Problem",
		"content_problem":"2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
		"title_solution":"2 Solution",
		"content_solution":"2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
		"title_illustration":"2 Illustration",
		"path_illustration":"2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
		"title_technology":"2 Technology",
		"techno_1_technology":"2 Deep Learning",
		"techno_2_technology":"2 Deep Learning",
		"techno_3_technology":"2 Deep Learning",
		"language_1_technology":"../photos/cpp.jpg",
		"language_2_technology":"../photos/R.png",
		"language_3_technology":"../photos/python.png",
	},
		{
		"id":"2",
		"prevtitle":"Visual recognition",
		"title":"3 PREDICTIVE MODEL FACTORY FOR RETAILING 3",
		"subtitle":"3 Each operator saves now 3h/day which allow the operating cost to decrease by 7% and save up $4M",
		"title_problem":"3 Context and Problem",
		"content_problem":"3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
		"title_solution":"3 Solution",
		"content_solution":"3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
		"title_illustration":"3 Illustration",
		"path_illustration":"3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
		"title_technology":"3 Technology",
		"techno_1_technology":"3 Deep Learning",
		"techno_2_technology":"3 Deep Learning",
		"techno_3_technology":"3 Deep Learning",
		"language_1_technology":"../photos/cpp.jpg",
		"language_2_technology":"../photos/R.png",
		"language_3_technology":"../photos/python.png"
	}
];

$scope.use_case_displayed = $scope.all_case_studies[0];

console.log($scope.all_case_studies[0]);
console.log($scope.use_case_displayed);

$scope.use_case_to_display = function(element){

	$scope.use_case_displayed = $scope.all_case_studies[element]
};

console.log($scope.team_member);

});


