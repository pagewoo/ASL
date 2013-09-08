// JavaScript Document

function NavCtrl($scope) {
	
	// validate email
	
}

function SignupCtrl($scope, $http) {
	
	// validate email
	
	$scope.validate_email = function validateEmail(email) { 
		var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;  
	   return emailPattern.test(elementValue);  
	} 
	
	//$scope.signup_url = 'http://app.pagewoo.com/signup';	
	$scope.signup_url = 'http://127.0.0.1:8082/signup';	
	$scope.email = '';
	$scope.name = '';
	
	$scope.login = function() {
		
		document.location = '/login'
		
	}

	$scope.signup = function() {
	 
		console.log('signup!');
	 
		var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;  
		if (emailPattern.test($scope.email)) {
		
			console.log('valid');	
			$http({ 
					method: 'GET', 
					url: $scope.signup_url + '?email=' + $scope.email + '&name=' + $scope.name
			}). 
			success(function(data, status) { 
			
				$('#signup_form').css('display', 'none');
				
				$('#signup_complete').css('display', 'block');
				$('#signup_complete').css('opacity', 0);
				$('#signup_complete').animate({opacity:1});
	
			});	
			 
		} else {
		
			console.log('invalid');
			$('#signup_input').$valid = false;
			
		}	 

	 };
	
}

function PageCtrl($scope, $http, $location) {
	
	//var app_path = 'http://app.pagewoo.com/';
	var app_path = 'http://127.0.0.1:8082/';
	
	$scope.page_id = 0;
	$scope.new_page_url = app_path + 'newpage';
	$scope.signup_url = app_path + 'newadvertiser';
	//$scope.new_page_url = 'http://127.0.0.1:8082/newpage';
	
	$scope.page_url = '';
	
	$scope.pagedata = {'headline':'', 'business_name':'', 'content':'', 'cta':'', 'action_url':'', 'has_content':false, 'header_theme':'i', 'button_theme':'i'};
	$scope.signup_data = {'name':'', 'email':''};
	
	$scope.headline = ''
	
	$scope.small_page = true;
	
	$scope.set_page_width = function(w) {
		if (w < 850) {
			$scope.small_page = false;
		} else {
			$scope.small_page = true;
		}		
		//console.log ('small page ' + $scope.small_page);
		$scope.change();
		$scope.$apply();
	}
	
	$scope.done = function(val) {
		console.log('done!');	
	}
	
	$scope.button_select = function(val) {
		//console.log('button ' + val);
		$scope.pagedata.button_theme = val;
		$scope.change();
	}
	
	$scope.header_select = function(val) {
		//console.log('header ' + val);
		$scope.pagedata.header_theme = val;
		$scope.change();
	}	
	
	$scope.change = function() {
		$('#phone_content').get(0).contentWindow.update($scope.pagedata);
		//console.log('CHANGED!')
		//console.log ('has_content ' + $scope.pagedata.has_content);
		//alert ('company ' + $scope.pagedata.business_name + " has content " + $scope.pagedata.has_content);
	}

	$scope.new_page = function() {
	 
	 	console.log('new page!');
	 
		$http({ 
				method: 'POST', 
				url: $scope.new_page_url, 
				data: $scope.pagedata
		}). 
		success(function(data, status) { 
		
			$('#pub_form').css('display', 'none');
			$scope.page_url = data.url;
			$scope.page_id = data._id.$oid
			
			$('#pub_complete').css('display', 'block');
			$('#pub_complete').css('opacity', 0);
			$('#pub_complete').animate({opacity:1});
			//$scope.status = status; 
			//$scope.data = data; 
		})

	 };
	 

	 $scope.new_signup = function() {
		$('#pub_form').css('display', 'none');
		$('#pub_complete').css('display', 'none');
		
		$('#new_signup_form').css('display', 'block');
		$('#new_signup_form').css('opacity', 0);
		$('#new_signup_form').animate({opacity:1}); 
	 }
	 
	 $scope.cancel_signup = function() {
		$('#new_signup_form').css('display', 'none');
		
		$('#pub_form').css('display', 'block');
		$('#pub_form').css('opacity', 0);
		$('#pub_form').animate({opacity:1}); 	 
	 }
	 
	 $scope.process_signup = function() {

		console.log('pageid ' + $scope.page_id)
		document.location = $scope.signup_url + '/' + $scope.page_id;
		
		//console.log('new page!');
		//$scope.signup_data.page_data = $scope.page_data
		//$http({ 
		//		method: 'GET', 
		//		url: $scope.signup_url, 
		//		data: $scope.signup_data
		//}). 
		//success(function(data, status) { 
		
		//	$('#new_signup_form').css('display', 'none');
			
		//	$('#content_signup_complete').css('display', 'block');
		//	$('#content_signup_complete').css('opacity', 0);
		//	$('#content_signup_complete').animate({opacity:1});
			//$scope.status = status; 
			//$scope.data = data; 
		//})	 
	 }	 
	
}