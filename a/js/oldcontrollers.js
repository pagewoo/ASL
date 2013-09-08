function mainCtrl($scope, $http, $location){
  $(document).mousemove(function(e){
    //console.log('moving1')
    $('#overlay').css('top', e.clientY-87 + $(document).scrollTop()).css('left', e.clientX-89);
  });

//START ANIMATION 
  $scope.loading_places = false;
  $scope.loading_address = false;
//END ANIMATION

  var map;
  var geocoder;

  $scope.place_added = function() {
    console.log('place added ' + selected_places)

    $scope.num_places_selected = selected_places.length;
    $scope.total_spend = $scope.num_places_selected * 10;

    $scope.$apply()
  }

  $scope.place_removed = function() {
    console.log('place added ' + selected_places)
  }

  $scope.places_loaded = function() {
    $scope.show_loading = false; 

    $scope.$apply();
  }

//START DATA
  $scope.places = [];
  $scope.markers = [];
  $scope.new_place = {};
  $scope.selected_places = [];
  $scope.current_place = {};
  $scope.business_type = $scope.states();
  $scope.fake_list = $scope.fake_anal_list();
  $scope.faq_list = $scope.app_faq_list();
  $scope.business = {name:'', type:'', url:''}
  $scope.campaign = {type:'', phone_number:'', email:'', line1:'', line2:''}
  $scope.payment = {creditcard:'', cvc:'', exp_month:'', exp_year:''}
  $scope.contact = {reason:'', message:'', email:''}
  $scope.help_items = ['faq', 'contact', 'terms'];
  $scope.help_selection = $scope.help_items[0];
  $scope.reason_items = ['payment error', 'email error', 'callback error']
//END DATA

//START DIVS
  $scope.flag_map_clicker = true;
  $scope.start_div = true;
  $scope.location_div = true;
  //$scope.price_div= true;
  $scope.business_div = true;
  $scope.campaign_div = true;
  $scope.login_div = true;
  $scope.logout_div = true;
  $scope.account_div = true;
  $scope.payment_div = true;
  $scope.analytics_div = true;
  $scope.help_div = true;
//END DIVS

//doorman
  $scope.door_man();
//doorman


//START SUBMIT BUTTONS
  $scope.price_btn = function(message){
    if(message == 0){
      alert('please pick a block');
    }else{
      console.log('map clicker')
      $scope.map_active = false;
    }
  }

  $scope.business_btn = function(){
    //add $http.post('/', dataset).success(function(data){})
     alert('business')
  }

  $scope.campaign_btn = function(){
    //add $http.post('/', dataset).success(function(data){})
    //alert('campaign');
  }

  $scope.payment_btn = function(){
    //add $http.post('/', dataset).success(function(data){})
    alert('payment');
  }

  $scope.contact_form_btn = function(){
    //add $http.post('/', dataset).success(function(data){})
    alert('thanks your for your message');
  }
//END SUBMIT BUTTONS

//START PAYMENT


//END PAYMENT


//START ADDRESS LOCATION
  $scope.address_location = '';
 


  $scope.get_address_lat_lng = function ( address_location) {
    $scope.loading_address = true;
    //$scope.geo_status = 'ZERO_RESULTS';
    var address = address_location;
    geocoder.geocode( { 'address': address_location}, function(results, status) {
       $scope.geo_status = status
        console.log($scope.geo_status)
      if (status == google.maps.GeocoderStatus.OK) {
        var address_lat = results[0].geometry.location.lat();
        var address_lng = results[0].geometry.location.lng();
        console.log(address_lat + " " + address_lng)
        find_neighbors(address_lat, address_lng);        
      } else {
        $scope.loading_address = false;
      }
    });
  }


//END ADDRESS LOCATION


//START FIND NEIGHBORS
  // $scope.find_neighbors = function(lat, lng){
  //   $http.get(host + '/nearestneighbors/' + lat + '/' + lng + '/7/' + 'block_group' + '/True').success(function(data) {
  //     console.log('get geo blocks')
  //     for (var i in data){
  //       var boundaries = $scope.make_points(data[i].polygon)
  //       try{
  //       var center_pt = new google.maps.LatLng(parseFloat(data[i].location[0]), parseFloat(data[i].location[1]))  
  //       console.log(center_pt)
  //       var poly = make_poly($scope, map, data[i].name, data[i].geoid, center_pt, boundaries);
  //       poly.setMap(map);

  //       console.log('set poly')

  //       $scope.places.push({'polygon':poly, 'data': data[i]})
  //       }catch(err){console.log(err)}

  //     }
  //     var bounds = $scope.find_boundaries(data)
  //     map.fitBounds(bounds)
  //     map.setZoom(map.getZoom())

  //     $scope.loading_places = false;

  //     });

  // }

//END FIND NEIGHBORS

//START CURRENT LOCATION
  $scope.get_current_geo = function(){
    $scope.loading_places = true;

    if(geo_position_js.init()){
      geo_position_js.getCurrentPosition(success_callback,error_callback,{enableHighAccuracy:true});
      }
      else{
        alert("Functionality not available");
      }

    function success_callback(p)
      {
      $scope.current_lat = p.coords.latitude
      $scope.current_lng = p.coords.longitude
      $scope.find_neighbors($scope.current_lat, $scope.current_lng)
      console.log('lat='+p.coords.latitude +';lon='+p.coords.longitude);
      }
    
    function error_callback(p)
      {
      alert('error='+p.message);
      }
      
    }
//END CURRENT LOCATION

   
//START MAP CRUD 
 

  //  $scope.add_selected_place = function(obj) {
  //     console.log('add place')
  //     for(var i=0; i < $scope.selected_places.length; i++){
  //       if ($scope.selected_places[i].geoid == obj.geoid){
  //         console.log('place not added')
  //         return false;
  //       }
  //     }

  //     $scope.selected_places.push(obj)
  //     console.log('place added')
  //     $scope.$apply()

  //  }

  // $scope.remove_place = function(idx) {

  //     //console.log('removing ' + idx)
  //     var geoid = $scope.selected_places[idx].geoid;
  //     //$scope.remove_place_by_geoid($scope.selected_places[idx].geoid)
  //     //$scope.selected_places[idx].marker.setMap(null);
  //     $scope.selected_places.splice(idx, 1);


  //     // turn off selected place
  //     for (var i in $scope.places) {
  //       //console.log('checking ' + $scope.places[i].polygon.geoid)
  //       //console.log('vs ' + geoid)
  //       if ($scope.places[i].polygon.geoid == geoid) {
  //         $scope.places[i].polygon.setOptions({fillOpacity: .3, fillColor:'yellow'});
  //       }
  //     }

  //   }


   $scope.remove_place_by_geoid = function(geoid){
    for (var place_idx in $scope.selected_places) {
      if($scope.selected_places[place_idx].geoid == geoid){
        $scope.remove_place(place_idx);
        $scope.$apply();
        return true;
      }
    }
   }

//END MAP CRUD




//START MAP MAIN
 

//END MAP MAIN

 //var map_stuff = new google.maps.Map(document.getElementById("map_stuff"), mapOptions2);



//START SCREEN SIZE
   $(window).resize(function() {
      $scope.onresize();
      $scope.$apply();
    });


    $scope.onresize = function(){
      screen_size = $(window).width()
      screen_height = $(window).height()
      console.log('new size ' + screen_size)   
      console.log('mobile ' + $scope.show_mobile)
      console.log('height' + screen_height)

      if (screen_size < 480) {
        $scope.show_mobile = true;
      } else {
        $scope.show_mobile = true;
      }
   }
   $scope.onresize();
//END SCREEN SIZE