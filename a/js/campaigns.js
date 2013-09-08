function sort_reviews(a,b) {
  if (a.rating > b.rating)
     return -1;
  if (a.rating < b.rating)
    return 1;
  return 0;
}


function bannerCtrl($scope, $location, $http, $routeParams, $timeout, $analytics){
  
  select_nav(3);

  $scope.loading = true;
  $scope.step = 0;
  
  $scope.content = [0];

  // $scope.times = ['12:00','1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00' , '8:00', '9:00' ,'10:00', '11:00']
  // $scope.parts = ['am', 'pm']
  // $scope.zones = ['US/Pacific' , 'US/Eastern', 'US/Mountain', 'US/Central']

  // $scope.testtime = function(){
  //   //console.log($scope.schedule)
  //   var str = $scope.schedule.start_time
  //   var hours = parseInt(str.split(":")[0])
  //   if ($scope.schedule.start_part === 'pm'){
  //     $scope.schedule.start_time = hours + 12
  //   }else{
  //     $scope.schedule.start_time = hours
  //   }
  //   //console.log('new hours')
  //   //console.log($scope.schedule)
  // }

  $http.get(host + '/fetchyelp?key=' + $routeParams.gae_key).success(function(data) {
    
    // testing locally
    // $scope.loaded_campaign({"photos": [{"width": 640, "url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv966vlVS23brK1ykr6JeMr26gi81JXZc1H8ifDUBldynq4mx9nB45qwuWLBF8wQJCs7GNzkbcMWMEgplZD0X28Bm_9qNzqNypgL2jMW2JZGqO6j7nhlLSRHELyluJo5QjXGwKtEzATiblzAK3AyiEc6YMncJrw?width=480&height=853", "caption": "Big yelp images", "height": 480, "id": ""}, {"width": 533, "url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv953QllDm4q80qfciiQHzXIWoFJ0aIYNo7-pOV4FKLBEDzdHxyXBJld4kDnob92HkVY7u5RVNQ-4t8HAbtBsCuvzaLTgAX44IMYoTZRQvF7E0IW-8QNo9dha4zGtoCvqlxkG2ib2uDFHOOmCfVmapweA_c1V6Q?width=175&height=131", "caption": "Big yelp images", "height": 400, "id": ""}, {"width": 533, "url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv94-ChmS7jcl2BAjOA8JzQjSGu77_ovUX2jzPR55xjFHdaDBHFyL8mpp7bnDA7_Gn2Uz92NIp8i5Ss2sPJ_4jRFZjToasIVQUVFWdPJv53cCuV0E3CFfuVhkp7VTcLriX7A8qkGj24Id0t0u4MQKQZXIGbs51g?width=533&height=400", "caption": "Big yelp images", "height": 400, "id": ""}, {"width": 533, "url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv96aGTAoSKoKREsB3WYZT6q7LN95hK9JYHd5FZ4A6-_0skrJcZ4xgsynYGuC5oWQX0VoxDXNVQv1b6xIVjDO_mT_T3ujqLsmHULI1X4-kE2d45Aj-clEiqCeMwNpbGhkCFWkyQAFvO2lW1DLeZNk8u7iWLibHQ?width=640&height=480", "caption": "Big yelp images", "height": 400, "id": ""}, {"width": 500, "url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv9777fdyLT5pYtlfvygJhyjz5NHOrqa95fg6MGxKizyn0UN4NYXVwQXV5w8kRjR8o81_5VFKx2bo5nMJBnM7dwVfaVR5AGT3mE9sawgUVrabXMygwFKzvx3R2OHEQjTM_M85sD-WbPr53oQmd4lcADgbPg9gRQ?width=480&height=360", "caption": "Big yelp images", "height": 429, "id": ""}, {"width": 298, "url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv96qHDjpnk67w59GDfz0RYyRMlKqw6jYBfiC9q6r7GvmoE0yasLYDOA1POc-mLmdM0Gf2qGNrn1dZYMdDvbEu5rumYRZ5iGlstVpzQ9aLWzwYDWQiMlPJCdjy6PKfzfcMsIhOBL9lc1MO8tjRKD54UcFC_iQCA?width=438&height=386", "caption": "Big yelp images", "height": 400, "id": ""}, {"width": 100, "url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv946bCHrOQNONXoJ2TBJsF1XP0zLNkRRCE7dwhdK2_rtZUU3LVkt7fpMkT91PVRJ-YF_eT-grc6MC2VemLtRhOQ1OyZwPT6uaKegCVwdiUZO-Kji2HUIxMSArIhqk54OpfrpsFNGaqUi56R3o19gPEyEUNGGlw?width=626&height=360", "caption": "Big yelp images", "height": 100, "id": ""}, {"width": 845, "url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv94AgGrfYErXQQKcIjCsvjzQCfgHjClo-L-XWIHQqiJr6xMimTH7FYkw-JIQ4ox6wFTSYlS_VviJlKBZ5uIaXo4yFDyazQVSU_uP-ksJ0S3w1KzCJUIVlmdqp1MciIIHoLndAq2grop1v-0rynZQWByaszGFsA?width=480&height=853", "caption": "from google images", "height": 565, "id": ""}, {"width": 640, "url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv94dGDu8k8nYalazIyVJMMZuGGyzLR3Vioj7MsaTysvyb8uNWDG_VDndGvg-6Q7akLbtu1hWcpLLXaxhsAo_kWPvPv8z6h67oY_tjbXEolSKksb1kqXoz2LtY-iHaJiQqA4a2bfj0HJiv1O7qleKBqzWEhTuCQ?width=533&height=400", "caption": "from google images", "height": 480, "id": ""}, {"width": 640, "url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv95cF2VSCXpVakgdqW9a6Umv8ofecbyB_ZjYBbP8CCqZ_zPrkrunT6ZP1ajIh7jkQwaXWvZM_NHjzKLiH_b5TJREnqCAczs7TYoDADrVVBoKH2NUHKMBLoc5WpYt4ToIIWwcdl8MZEDpupmyiIj9HYwxDu0f2Q?width=533&height=400", "caption": "from google images", "height": 480, "id": ""}, {"width": 640, "url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv97P1qfeoNqrQgUvtQzr4pDrp3DgGnpw2aJntvJF44oLX-aIgroJlY3ye4LEF1AdBnIxGCVQ_FXyPsPbHzDdDraJTxwrApyF5My2WP5QBDZGmlWwdz5rCwUTdnxhW04GzJO2lkVagOgmhgzlcF1LKFxrl_RFdQ?width=298&height=400", "caption": "from google images", "height": 480, "id": ""}, {"width": 626, "url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv94UtsbZwNJfwUuHXuraYk_ofHYzArZA8w5XNgSVhOTrECwLvJP7d-6G8DZNgoC7q7NTUA1OvBINed3Y5mABOU0uxbuOa47e705e_PAfjzhTNisvm4PM6TeaQRJCsPpEi8rJeKQIwQMauIh9_JcoMpQmZADCvg?width=600&height=291", "caption": "from google images", "height": 360, "id": ""}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv96AGP7Ak5IvucanBnV5k3aGRDVbnfnMYEFKtWwnafiEChV0S2Gx2M5xTUfnGLPQ7KCerJPhI2i0fvYctYLG3jv6_zQ3ZOKk0_phUwV3BJ0dJdxMvYd_cGVg6rbSTiORMv9jXNNh1YzmDrZIaEMH3xD6ru0C-g?width=300&height=400", "is_primary": false, "caption": "First time not bad.will review in a few", "id": "QvksCmziFYxugjk-BXnSow", "height": 291, "width": 600}, {"width": 590, "url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv94OCSHJTZBjm1pBqMKZovqwnFSmWk6iW6IY9FrA-ZM1tLwQdsQZpsjzmMZt6_uovGx3bjbc6F36edZgjymKn4aPhZT7LSHScZcb-w1K7ouqPANzvf-puJZ8Ia8qGov0loZz-DyNE5RQbfeO72mja-1ZnB5R1w?width=533&height=400", "caption": "from google images", "height": 590, "id": ""}, {"width": 560, "url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv94dhh1-_JLt-oSQb61VEtXdFUamgOk7F4EnN5ZSl6h0KwH6lfBWNJQyPa5XPEUXJvQ70H450scmJac0845niqvHw2mFRSGDngtETEmWmWsILDh9-knvTODXXajnhzN6CBK_51MjMVL5y2tpcFl-cTgvS6GQ5A?width=298&height=400", "caption": "from google images", "height": 420, "id": ""}], "gae_key": "ag1zfnRlc3RuZWFyd29vchILEgpZZWxwSnNvbkRTGPzMAww", "city": "Houston", "business_id": "brothers-pizza-houston-3", "state": "http://127.0.0.1:8082/c/index.html#/approve/ag9kZXZ-dGVzdG5lYXJ3b29yFwsSClllbHBKc29uRFMYgICAgIDArwoM", "latitude": 29.8213716, "phone": "7136922020", "scraped_data": {"photos": [{"width": 640, "url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv966vlVS23brK1ykr6JeMr26gi81JXZc1H8ifDUBldynq4mx9nB45qwuWLBF8wQJCs7GNzkbcMWMEgplZD0X28Bm_9qNzqNypgL2jMW2JZGqO6j7nhlLSRHELyluJo5QjXGwKtEzATiblzAK3AyiEc6YMncJrw?width=480&height=853", "caption": "Big yelp images", "height": 480, "id": ""}, {"width": 533, "url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv953QllDm4q80qfciiQHzXIWoFJ0aIYNo7-pOV4FKLBEDzdHxyXBJld4kDnob92HkVY7u5RVNQ-4t8HAbtBsCuvzaLTgAX44IMYoTZRQvF7E0IW-8QNo9dha4zGtoCvqlxkG2ib2uDFHOOmCfVmapweA_c1V6Q?width=175&height=131", "caption": "Big yelp images", "height": 400, "id": ""}, {"width": 533, "url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv94-ChmS7jcl2BAjOA8JzQjSGu77_ovUX2jzPR55xjFHdaDBHFyL8mpp7bnDA7_Gn2Uz92NIp8i5Ss2sPJ_4jRFZjToasIVQUVFWdPJv53cCuV0E3CFfuVhkp7VTcLriX7A8qkGj24Id0t0u4MQKQZXIGbs51g?width=533&height=400", "caption": "Big yelp images", "height": 400, "id": ""}, {"width": 533, "url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv96aGTAoSKoKREsB3WYZT6q7LN95hK9JYHd5FZ4A6-_0skrJcZ4xgsynYGuC5oWQX0VoxDXNVQv1b6xIVjDO_mT_T3ujqLsmHULI1X4-kE2d45Aj-clEiqCeMwNpbGhkCFWkyQAFvO2lW1DLeZNk8u7iWLibHQ?width=640&height=480", "caption": "Big yelp images", "height": 400, "id": ""}, {"width": 500, "url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv9777fdyLT5pYtlfvygJhyjz5NHOrqa95fg6MGxKizyn0UN4NYXVwQXV5w8kRjR8o81_5VFKx2bo5nMJBnM7dwVfaVR5AGT3mE9sawgUVrabXMygwFKzvx3R2OHEQjTM_M85sD-WbPr53oQmd4lcADgbPg9gRQ?width=480&height=360", "caption": "Big yelp images", "height": 429, "id": ""}, {"width": 298, "url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv96qHDjpnk67w59GDfz0RYyRMlKqw6jYBfiC9q6r7GvmoE0yasLYDOA1POc-mLmdM0Gf2qGNrn1dZYMdDvbEu5rumYRZ5iGlstVpzQ9aLWzwYDWQiMlPJCdjy6PKfzfcMsIhOBL9lc1MO8tjRKD54UcFC_iQCA?width=438&height=386", "caption": "Big yelp images", "height": 400, "id": ""}, {"width": 100, "url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv946bCHrOQNONXoJ2TBJsF1XP0zLNkRRCE7dwhdK2_rtZUU3LVkt7fpMkT91PVRJ-YF_eT-grc6MC2VemLtRhOQ1OyZwPT6uaKegCVwdiUZO-Kji2HUIxMSArIhqk54OpfrpsFNGaqUi56R3o19gPEyEUNGGlw?width=626&height=360", "caption": "Big yelp images", "height": 100, "id": ""}, {"width": 845, "url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv94AgGrfYErXQQKcIjCsvjzQCfgHjClo-L-XWIHQqiJr6xMimTH7FYkw-JIQ4ox6wFTSYlS_VviJlKBZ5uIaXo4yFDyazQVSU_uP-ksJ0S3w1KzCJUIVlmdqp1MciIIHoLndAq2grop1v-0rynZQWByaszGFsA?width=480&height=853", "caption": "from google images", "height": 565, "id": ""}, {"width": 640, "url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv94dGDu8k8nYalazIyVJMMZuGGyzLR3Vioj7MsaTysvyb8uNWDG_VDndGvg-6Q7akLbtu1hWcpLLXaxhsAo_kWPvPv8z6h67oY_tjbXEolSKksb1kqXoz2LtY-iHaJiQqA4a2bfj0HJiv1O7qleKBqzWEhTuCQ?width=533&height=400", "caption": "from google images", "height": 480, "id": ""}, {"width": 640, "url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv95cF2VSCXpVakgdqW9a6Umv8ofecbyB_ZjYBbP8CCqZ_zPrkrunT6ZP1ajIh7jkQwaXWvZM_NHjzKLiH_b5TJREnqCAczs7TYoDADrVVBoKH2NUHKMBLoc5WpYt4ToIIWwcdl8MZEDpupmyiIj9HYwxDu0f2Q?width=533&height=400", "caption": "from google images", "height": 480, "id": ""}, {"width": 640, "url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv97P1qfeoNqrQgUvtQzr4pDrp3DgGnpw2aJntvJF44oLX-aIgroJlY3ye4LEF1AdBnIxGCVQ_FXyPsPbHzDdDraJTxwrApyF5My2WP5QBDZGmlWwdz5rCwUTdnxhW04GzJO2lkVagOgmhgzlcF1LKFxrl_RFdQ?width=298&height=400", "caption": "from google images", "height": 480, "id": ""}, {"width": 626, "url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv94UtsbZwNJfwUuHXuraYk_ofHYzArZA8w5XNgSVhOTrECwLvJP7d-6G8DZNgoC7q7NTUA1OvBINed3Y5mABOU0uxbuOa47e705e_PAfjzhTNisvm4PM6TeaQRJCsPpEi8rJeKQIwQMauIh9_JcoMpQmZADCvg?width=600&height=291", "caption": "from google images", "height": 360, "id": ""}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv96AGP7Ak5IvucanBnV5k3aGRDVbnfnMYEFKtWwnafiEChV0S2Gx2M5xTUfnGLPQ7KCerJPhI2i0fvYctYLG3jv6_zQ3ZOKk0_phUwV3BJ0dJdxMvYd_cGVg6rbSTiORMv9jXNNh1YzmDrZIaEMH3xD6ru0C-g?width=300&height=400", "is_primary": false, "caption": "First time not bad.will review in a few", "id": "QvksCmziFYxugjk-BXnSow", "height": 291, "width": 600}, {"width": 590, "url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv94OCSHJTZBjm1pBqMKZovqwnFSmWk6iW6IY9FrA-ZM1tLwQdsQZpsjzmMZt6_uovGx3bjbc6F36edZgjymKn4aPhZT7LSHScZcb-w1K7ouqPANzvf-puJZ8Ia8qGov0loZz-DyNE5RQbfeO72mja-1ZnB5R1w?width=533&height=400", "caption": "from google images", "height": 590, "id": ""}, {"width": 560, "url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv94dhh1-_JLt-oSQb61VEtXdFUamgOk7F4EnN5ZSl6h0KwH6lfBWNJQyPa5XPEUXJvQ70H450scmJac0845niqvHw2mFRSGDngtETEmWmWsILDh9-knvTODXXajnhzN6CBK_51MjMVL5y2tpcFl-cTgvS6GQ5A?width=298&height=400", "caption": "from google images", "height": 420, "id": ""}], "gae_key": "ag1zfnRlc3RuZWFyd29vchILEgpZZWxwSnNvbkRTGPzMAww", "business_id": "brothers-pizza-houston-3", "city": "Houston", "menu": {"menu_url": "http://www.yelp.com/redir?url=http%3A%2F%2Fwww.brotherspizzeriahouston.com%2Fmenus.html&s=2bf59e585657e38ff8d430481cdeb2cb5cae0ff7ab55b5a95cb70347a1b7d72d"}, "latitude": 29.8213716, "phone": "7136922020", "hours": {"hours_list": ["Mon-Sat 11 am - 9 pm"]}, "reviews": {"reviews": [{"review": "There is no question this is one of the best pizza places (if not the best) in Houston. NY style all the way. Slices cost $2.25 for plain and $2.75 with a topping. I am specifically talking about the one on Shepard and 38th StThe owner is a really nice guy. He always says hello and calls me by my name.If  you want NY style pizza in Houston - this particular Brother's pizza is the place to go - WITHOU AN OUNCE OF DOUBT.This pizza is so good - even the crust is delicious!While i have not had any of the subs they look delicious.Enjoy fellow yelpers, ENJOY!!!!If you cannot get here, Romano's on Grey Street is very good. Not as good as Brother's, but still very good!", "rating": 4.5, "name": "Frank A."}, {"review": "I finally gave this place a 2nd chance after the line at Subway a few doors down was nearly out the door.  I wasn't thrilled about eating here again since my first visit had been such a fail.I decided to go for the Brother's Special this time since the 2 toppings slice I'd gotten last time wasn't very good.  This time my pizza was night and day better- the crust was perfectly crunchy and chewy, the toppings were fresh tasting and the cheese was gooey and oily in all the right ways.I enjoyed my pizza so much more this time- based on this visit, I'd consider coming here again, and take them off the Black List :)", "rating": 5, "name": "Lora P."}, {"review": "We switched over to Brother's Pizza instead of continuing to go to the rather pricey Pink's Pizza which is practically next door. Brother's may not be the most appealing pizzeria but their pizza is tasty, very affordable and right down the road. Who cares if they don't deliver, just call them and they'll have it ready to pick-up by the time you get there!They even offer alfredo sauce on their pizza which is what I'm all for! Their pepperoni and canadian bacon are winning toppings and their crust is scrumptious!Too bad I'm on my wedding diet now because after this review, I'm craving me some Brother's Pizza!!!", "rating": 4, "name": "Laura S."}, {"review": "Love Luani and his team!We go here often for date nights and/or delivery on a lazy Friday night =)My bf is from NY, so he definitely knows quality - Luani can do it right!!!!!", "rating": 4, "name": "Amanda M."}, {"review": "Brother's Pizza is amazing!! I called and ordered about ten minutes ahead of time, so I could pick up some yummy pizza for my lunch break and bring it right back to the office. The order was ready by the time I got there, the staff is friendly, and the pizza is EXCELLENT!THANK YOU! I will be coming back.", "rating": 5, "name": "Asher R."}, {"review": "Simply put...awesome NY style pizza and reasonably priced. Glad to have one in our neighborhood so we can stop by easily. Very laid back environment and had a neighborhood feel. Not pretentious at all--decor is plain and simple.I prefer it over Pink's Pizza (they are just overpriced).We went for a take out pizza, and the lady was super nice to us and offered us a drinks at their soda machine while we waited...Not sure if they do this everytime, but we certainly appreciated the offer.", "rating": 5, "name": "Albert Y."}, {"review": "Took me back to 1985 :)Ran across this place when my friend was in town and had to stop and ask if it was the same as the one that use to be in Greenspoint Mall way back in the days - and indeed it is!Stopped in to grab a slice of pizza and some wings. I ordered one slice of pizza with two toppings (onions/mushrooms) for a mere $3.25 (w/tax). The wings come 10 to an order for $7 (w/tax).....winning.This was nostalgia. Totally took me back to the late 80s when this was the spot to be. Pizza still taste the same -- GOOD and the people there are still so friendly.They also sell whole pizzas along with calzones, strombolis, and pasta.Will definitely hit this spot. I'm so excited - and it's less than 8 min from my house....WINNING!And for the record, this place serves pizza the way it was meant to be eaten. It's not a ritzy spitzy spot like Star (which I love). It's just an old fashion pizzeria. YUM!", "rating": 5, "name": "Leena C."}, {"review": "LOVE LOVE LOVE this place!   This is family owned and run and the pizza is THE BEST!!    The family part of this equation is wonderful. Everyone here is nice and friendly....  This place is becoming a weekly habit!!!  YUM.", "rating": 4, "name": "Rick C."}, {"review": "Great Pizza! Always hot and ready. Also try their sandwiches, they are delicious. I prefer Brother's over Pink's and That pizza place on ella. Best pizza on Garden Oaks.", "rating": 5, "name": "Danyel R."}, {"review": "I did not care to much for the pizza. It was under cooked. The very friendly girl at the register said they could have cooked it longer. \"well why didn't you\" nearly raw pizza is not good. When i think of thin crust pizza. I want a lightly browned crispy thin crust. Is it just me but i think that is how it's done here in Houston Tx.   However i will try this place it again. They were nice enough to personalize a feta, spinach, tomato, meat, and garlic pizza. This place has potential to be very good. I hope they make it!", "rating": 5, "name": "Ron L."}]}, "rating": 4.5, "category_list": [["Pizza", "pizza"]], "address": "3820 N Shepherd Dr, Independence Heights, Houston, TX 77018", "biz_url": "http://www.yelp.com/biz/brothers-pizza-houston-3", "longitude": -95.4102231, "name": "Brother's Pizza"}, "email": "alskdjf@sdlfkj.com", "geoids": [{"tapsegnam": "Metropolitans", "geoid": "block_group_482015302001", "lifecode": "L3", "domtap": "pop22"}], "reviews": [{"rating_image_large_url": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png", "rating_image_url": "http://s3-media4.ak.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png", "time_created": 1373652348, "excerpt": "I finally gave this place a 2nd chance after the line at Subway a few doors down was nearly out the door.  I wasn't thrilled about eating here again since...", "id": "nQ7pgkRIOmxGr80Dw59UyA", "rating": 4, "user": {"name": "Lora P.", "image_url": "http://s3-media2.ak.yelpcdn.com/photo/ohNciSIYodN7CvDT7V5xyg/ms.jpg", "id": "1yPjXNjirAJ-UeT7uQM3FA"}, "rating_image_small_url": "http://s3-media4.ak.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png"}, {"rating_image_large_url": "http://s3-media3.ak.yelpcdn.com/assets/2/www/img/22affc4e6c38/ico/stars/v1/stars_large_5.png", "rating_image_url": "http://s3-media1.ak.yelpcdn.com/assets/2/www/img/f1def11e4e79/ico/stars/v1/stars_5.png", "time_created": 1362433876, "excerpt": "There is no question this is one of the best pizza places (if not the best) in Houston. NY style all the way. Slices cost $2.25 for plain and $2.75 with a...", "id": "tDcTnx9LCm_SFbjhFrPuCQ", "rating": 5, "user": {"name": "Frank A.", "image_url": "http://s3-media3.ak.yelpcdn.com/photo/ECUNywb0StdI_YVTbzL4rQ/ms.jpg", "id": "cCxqGumSKdvWSZ14tEVZUQ"}, "rating_image_small_url": "http://s3-media1.ak.yelpcdn.com/assets/2/www/img/c7623205d5cd/ico/stars/v1/stars_small_5.png"}, {"rating_image_large_url": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png", "rating_image_url": "http://s3-media4.ak.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png", "time_created": 1358177245, "excerpt": "We switched over to Brother's Pizza instead of continuing to go to the rather pricey Pink's Pizza which is practically next door. Brother's may not be the...", "id": "GODTV6S5Z04_E2VsbMg3Tw", "rating": 4, "user": {"name": "Laura S.", "image_url": "http://s3-media3.ak.yelpcdn.com/photo/nzBBeKnx_VFSkdMWfIQSsA/ms.jpg", "id": "kzpaeoon3-BK2ZH9ITcF-w"}, "rating_image_small_url": "http://s3-media4.ak.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png"}], "rating": 4.5, "category_list": [["Pizza", "pizza"]], "address": "3820 N Shepherd Dr, Independence Heights, Houston, TX 77018", "banner": {"img_idx":2, "marginTop": -70, "image_url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv946bCHrOQNONXoJ2TBJsF1XP0zLNkRRCE7dwhdK2_rtZUU3LVkt7fpMkT91PVRJ-YF_eT-grc6MC2VemLtRhOQ1OyZwPT6uaKegCVwdiUZO-Kji2HUIxMSArIhqk54OpfrpsFNGaqUi56R3o19gPEyEUNGGlw?width=626&height=360"}, "biz_url": "http://www.yelp.com/biz/brothers-pizza-houston-3", "page_src": "/page/ag9kZXZ-dGVzdG5lYXJ3b29yHgsSEU5lYXJXb29DYW1wYWlnbkRTGICAgICA-MULDA", "person": "asldkfj", "longitude": -95.4102231, "banner_src": "/banner/ag9kZXZ-dGVzdG5lYXJ3b29yHgsSEU5lYXJXb29DYW1wYWlnbkRTGICAgICA-MULDA", "name": "Brother's Pizza"})


    //console.log('photos on load');
    //console.log(data.photos);
    $scope.loaded_campaign(data)
  
  })


  $scope.save = function() {
    // //console.log($scope.yelp_data.banner.top_line)


    // $scope.yelp_data.schedule.hours = $scope.yelp_data.schedule.start_time.getHours();
    // $scope.yelp_data.schedule.minutes = $scope.yelp_data.schedule.start_time.getMinutes();

    if($scope.yelp_data.banner.top_line === undefined || $scope.yelp_data.banner.top_line ==='' || $scope.yelp_data.banner.bottom_line === undefined || $scope.yelp_data.banner.bottom_line ==='' || $scope.yelp_data.banner.bottom_line2 === undefined || $scope.yelp_data.banner.bottom_line2 ===''){
        $scope.form_message = "Don't forget your Ad copy! : )" ;
        $scope.show_content(1)
    }else{
    // $scope.yelp_data.start_time = $scope.schedule
    //console.log($scope.yelp_data)
    $scope.yelp_data.banner.image_url = $scope.yelp_data.photos[$scope.yelp_data.banner.img_idx].url;
    //console.log('banner url ' + $scope.yelp_data.banner.image_url)
    $scope.yelp_data['state'] = host + '/c/index.html#/approve/' + $routeParams.gae_key
    //console.log('saving gae key ' + $scope.yelp_data.gae_key)
    //console.log($scope.yelp_data.photos)

    $analytics.eventTrack('savebanner', {category: 'checkout_funnel'});

    $http.post(host + '/makecontent/' + $routeParams.gae_key, $scope.yelp_data).success(function(data) {
      $location.path('/approve/' + $routeParams.gae_key)
    });
    }
  }

  $scope.show_content = function(idx) {
    $scope.content = [idx]
  }

  $scope.scoot_up = function() {
    $scope.yelp_data.banner.marginTop -= 10;
    // $('#banner-img').animate({
    //     marginTop: '-=10'
    //   }, 250, function() {
    //     // Animation complete.
    //   });
  }

  $scope.scoot_down = function() {
    $scope.yelp_data.banner.marginTop += 10;
    // $('#banner-img').animate({
    //     marginTop: '+=10'
    //   }, 250, function() {
    //     // Animation complete.
    //   });
  }

  $scope.toggle_content = function(idx) {
    if ($scope.content.indexOf(idx) == -1) {
      $scope.content.push(idx)
    } else {
      $scope.content.splice($scope.content.indexOf(idx),1)
    }
  }

  $scope.show_content = function(idx) {
    $scope.content = [idx]
  }

  $scope.select_img = function(idx) {
    $scope.yelp_data.banner.img_idx = idx;
  }

  // $scope.tz_idx = 0;
  // $scope.tz_list = ['PST', 'MST', 'CST', 'EST']
  
 
 //  $scope.change_tz = function() {
	// $scope.tz_idx += 1;
	// if ($scope.tz_idx > 3) {
	// 	$scope.tz_idx = 0;	
	// }
	// $scope.yelp_data.schedule.tz = $scope.tz_list[$scope.tz_idx];
 //  }


  $scope.loaded_campaign = function(data) {
    
 //    if (!data.hasOwnProperty('schedule')) {

	// var d = new Date();
	// d.setHours( 1 );
	// d.setMinutes( 0 );
	// //console.log('calling tz');

	// data.schedule = {start_time:d, tz:$scope.tz_list[$scope.tz_idx]}

 //    } else {

	// var d = new Date();
	// d.setHours( data.schedule.hours );
	// d.setMinutes( data.schedule.minutes );
	// //console.log('calling tz');

	// data.schedule.start_time = d;

	// data.tz_idx = $scope.tz_list.indexOf(data.schedule.tz);

 //    }


    $scope.step = 2;
    $scope.loading = false;
    $scope.yelp_data = data;
    //console.log('yelp data');

    if (!$scope.yelp_data.hasOwnProperty('banner')) {

      $scope.yelp_data.banner = {marginTop:-10, img_idx:0}
      $scope.yelp_data.banner.top_line = $scope.yelp_data.name;
      $scope.yelp_data.banner.bottom_line = $scope.yelp_data.headline;
      $scope.yelp_data.banner.bottom_line2 = $scope.yelp_data.line2;
    }

    $scope.show_images = false;

    $timeout($scope.set_img_idx, 300)
  }
  $scope.set_img_idx = function() {
    //console.log('setting idx ' + $scope.yelp_data.banner.img_idx)
    $scope.yelp_data.banner.img_idx = $scope.yelp_data.banner.img_idx;
  }

 $scope.create_upload_url =function(){
    //console.log('create upload url')
    $http.get('/media/getuploadurl').success(function(data){
      $scope.upload_url = data.data
      //console.log('upload url: ' + $scope.upload_url)
    })
  }

  $scope.create_upload_url();

 $scope.setFiles = function(element) {
    $scope.$apply(function($scope) {
       //console.log('files: for banner', element.files);
       // Turn the FileList object into an Array
       $scope.files = []
          for (var i = 0; i < element.files.length; i++) {
             $scope.files.push(element.files[i])
          }
          //console.log('image width and height')
          //console.log(element.files.width)
         $scope.uploadFile();
    });
  };


    $scope.uploadFile = function() {
        var fd = new FormData()
        for (var i in $scope.files) {
            fd.append("uploadedFile", $scope.files[i])
            //console.log('file size: ' + $scope.files[i].size)
            if ($scope.files[i].size > 1000000) {
              alert("Whoa, That's a big file!  Please keep it under 1MB. Thanks!")
              return;
            }
        }

        var xhr = new XMLHttpRequest()
        xhr.addEventListener("load", uploadComplete, false)
        xhr.addEventListener("error", uploadFailed, false)
        xhr.addEventListener("abort", uploadCanceled, false)
        xhr.open("POST", $scope.upload_url)
        $scope.progressVisible = true
        xhr.send(fd)
    }

    function uploadComplete(evt) {
        /* This event is raised when the server send back a response */
         $scope.$apply(function(){
            $scope.image_src = evt.target.responseText
            var response = JSON.parse(evt.target.responseText)
            ////console.log(evt);
            //console.log(response);
            //console.log(response.data);
            $scope.fileToUpload = ''

        
            var img_url = host + response.data
            $scope.yelp_data.photos.unshift({caption:'Uploaded Image', id:'', url: img_url})
            //console.log('photos after upload');
            //console.log($scope.yelp_data.photos)
            $scope.create_upload_url();

        })

    }


    function uploadFailed(evt) {
        alert("There was an error attempting to upload the file.")
    }

    function uploadCanceled(evt) {
        $scope.$apply(function(){
            $scope.progressVisible = false
        })
        alert("The upload has been canceled by the user or the browser dropped the connection.")
    }

}

function campaignCtrl($scope, $location, $http, $routeParams, $timeout, $analytics){
  //console.log('create campaign');
  select_nav(2)
  $scope.loading = true;
  $scope.page_name = 'Create Your Campaign';
  $scope.step = 0;
  $scope.selected_img_idx = 0;
  $scope.page_name = 'Neighborhoods';
  $scope.no_photo_message = false;
  // $scope.no_review_message = 'false';

  $("#main-img").draggable({ grid: [ 0, 1 ] });

  $http.get(host + '/fetchcampaign?key=' + $routeParams.gae_key).success(function(data) {
    //console.log('fetch camp by key');
    
    // testing locally
    //$scope.loaded_campaign({"rating": 4.5, "biz_url": "http://www.yelp.com/biz/brothers-pizza-houston-3", "name": "Brother's Pizza", "category_list": [["Pizza", "pizza"]], "phone": "7136922020", "scraped_data": {"rating": 4.5, "biz_url": "http://www.yelp.com/biz/brothers-pizza-houston-3", "name": "Brother's Pizza", "category_list": [["Pizza", "pizza"]], "photos": [{"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv966vlVS23brK1ykr6JeMr26gi81JXZc1H8ifDUBldynq4mx9nB45qwuWLBF8wQJCs7GNzkbcMWMEgplZD0X28Bm_9qNzqNypgL2jMW2JZGqO6j7nhlLSRHELyluJo5QjXGwKtEzATiblzAK3AyiEc6YMncJrw?width=480&height=853", "caption": "Big yelp images", "width": 640, "id": "", "height": 480}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv953QllDm4q80qfciiQHzXIWoFJ0aIYNo7-pOV4FKLBEDzdHxyXBJld4kDnob92HkVY7u5RVNQ-4t8HAbtBsCuvzaLTgAX44IMYoTZRQvF7E0IW-8QNo9dha4zGtoCvqlxkG2ib2uDFHOOmCfVmapweA_c1V6Q?width=175&height=131", "caption": "Big yelp images", "width": 533, "id": "", "height": 400}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv94-ChmS7jcl2BAjOA8JzQjSGu77_ovUX2jzPR55xjFHdaDBHFyL8mpp7bnDA7_Gn2Uz92NIp8i5Ss2sPJ_4jRFZjToasIVQUVFWdPJv53cCuV0E3CFfuVhkp7VTcLriX7A8qkGj24Id0t0u4MQKQZXIGbs51g?width=533&height=400", "caption": "Big yelp images", "width": 533, "id": "", "height": 400}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv96aGTAoSKoKREsB3WYZT6q7LN95hK9JYHd5FZ4A6-_0skrJcZ4xgsynYGuC5oWQX0VoxDXNVQv1b6xIVjDO_mT_T3ujqLsmHULI1X4-kE2d45Aj-clEiqCeMwNpbGhkCFWkyQAFvO2lW1DLeZNk8u7iWLibHQ?width=640&height=480", "caption": "Big yelp images", "width": 533, "id": "", "height": 400}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv9777fdyLT5pYtlfvygJhyjz5NHOrqa95fg6MGxKizyn0UN4NYXVwQXV5w8kRjR8o81_5VFKx2bo5nMJBnM7dwVfaVR5AGT3mE9sawgUVrabXMygwFKzvx3R2OHEQjTM_M85sD-WbPr53oQmd4lcADgbPg9gRQ?width=480&height=360", "caption": "Big yelp images", "width": 500, "id": "", "height": 429}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv96qHDjpnk67w59GDfz0RYyRMlKqw6jYBfiC9q6r7GvmoE0yasLYDOA1POc-mLmdM0Gf2qGNrn1dZYMdDvbEu5rumYRZ5iGlstVpzQ9aLWzwYDWQiMlPJCdjy6PKfzfcMsIhOBL9lc1MO8tjRKD54UcFC_iQCA?width=438&height=386", "caption": "Big yelp images", "width": 298, "id": "", "height": 400}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv946bCHrOQNONXoJ2TBJsF1XP0zLNkRRCE7dwhdK2_rtZUU3LVkt7fpMkT91PVRJ-YF_eT-grc6MC2VemLtRhOQ1OyZwPT6uaKegCVwdiUZO-Kji2HUIxMSArIhqk54OpfrpsFNGaqUi56R3o19gPEyEUNGGlw?width=626&height=360", "caption": "Big yelp images", "width": 100, "id": "", "height": 100}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv94AgGrfYErXQQKcIjCsvjzQCfgHjClo-L-XWIHQqiJr6xMimTH7FYkw-JIQ4ox6wFTSYlS_VviJlKBZ5uIaXo4yFDyazQVSU_uP-ksJ0S3w1KzCJUIVlmdqp1MciIIHoLndAq2grop1v-0rynZQWByaszGFsA?width=480&height=853", "caption": "from google images", "width": 845, "id": "", "height": 565}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv94dGDu8k8nYalazIyVJMMZuGGyzLR3Vioj7MsaTysvyb8uNWDG_VDndGvg-6Q7akLbtu1hWcpLLXaxhsAo_kWPvPv8z6h67oY_tjbXEolSKksb1kqXoz2LtY-iHaJiQqA4a2bfj0HJiv1O7qleKBqzWEhTuCQ?width=533&height=400", "caption": "from google images", "width": 640, "id": "", "height": 480}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv95cF2VSCXpVakgdqW9a6Umv8ofecbyB_ZjYBbP8CCqZ_zPrkrunT6ZP1ajIh7jkQwaXWvZM_NHjzKLiH_b5TJREnqCAczs7TYoDADrVVBoKH2NUHKMBLoc5WpYt4ToIIWwcdl8MZEDpupmyiIj9HYwxDu0f2Q?width=533&height=400", "caption": "from google images", "width": 640, "id": "", "height": 480}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv97P1qfeoNqrQgUvtQzr4pDrp3DgGnpw2aJntvJF44oLX-aIgroJlY3ye4LEF1AdBnIxGCVQ_FXyPsPbHzDdDraJTxwrApyF5My2WP5QBDZGmlWwdz5rCwUTdnxhW04GzJO2lkVagOgmhgzlcF1LKFxrl_RFdQ?width=298&height=400", "caption": "from google images", "width": 640, "id": "", "height": 480}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv94UtsbZwNJfwUuHXuraYk_ofHYzArZA8w5XNgSVhOTrECwLvJP7d-6G8DZNgoC7q7NTUA1OvBINed3Y5mABOU0uxbuOa47e705e_PAfjzhTNisvm4PM6TeaQRJCsPpEi8rJeKQIwQMauIh9_JcoMpQmZADCvg?width=600&height=291", "caption": "from google images", "width": 626, "id": "", "height": 360}, {"caption": "First time not bad.will review in a few", "url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv96AGP7Ak5IvucanBnV5k3aGRDVbnfnMYEFKtWwnafiEChV0S2Gx2M5xTUfnGLPQ7KCerJPhI2i0fvYctYLG3jv6_zQ3ZOKk0_phUwV3BJ0dJdxMvYd_cGVg6rbSTiORMv9jXNNh1YzmDrZIaEMH3xD6ru0C-g?width=300&height=400", "is_primary": false, "height": 291, "width": 600, "id": "QvksCmziFYxugjk-BXnSow"}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv94OCSHJTZBjm1pBqMKZovqwnFSmWk6iW6IY9FrA-ZM1tLwQdsQZpsjzmMZt6_uovGx3bjbc6F36edZgjymKn4aPhZT7LSHScZcb-w1K7ouqPANzvf-puJZ8Ia8qGov0loZz-DyNE5RQbfeO72mja-1ZnB5R1w?width=533&height=400", "caption": "from google images", "width": 590, "id": "", "height": 590}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv94dhh1-_JLt-oSQb61VEtXdFUamgOk7F4EnN5ZSl6h0KwH6lfBWNJQyPa5XPEUXJvQ70H450scmJac0845niqvHw2mFRSGDngtETEmWmWsILDh9-knvTODXXajnhzN6CBK_51MjMVL5y2tpcFl-cTgvS6GQ5A?width=298&height=400", "caption": "from google images", "width": 560, "id": "", "height": 420}], "reviews": {"reviews": [{"rating": 4.5, "review": "There is no question this is one of the best pizza places (if not the best) in Houston. NY style all the way. Slices cost $2.25 for plain and $2.75 with a topping. I am specifically talking about the one on Shepard and 38th StThe owner is a really nice guy. He always says hello and calls me by my name.If  you want NY style pizza in Houston - this particular Brother's pizza is the place to go - WITHOU AN OUNCE OF DOUBT.This pizza is so good - even the crust is delicious!While i have not had any of the subs they look delicious.Enjoy fellow yelpers, ENJOY!!!!If you cannot get here, Romano's on Grey Street is very good. Not as good as Brother's, but still very good!", "name": "Frank A."}, {"rating": 5.0, "review": "I finally gave this place a 2nd chance after the line at Subway a few doors down was nearly out the door.  I wasn't thrilled about eating here again since my first visit had been such a fail.I decided to go for the Brother's Special this time since the 2 toppings slice I'd gotten last time wasn't very good.  This time my pizza was night and day better- the crust was perfectly crunchy and chewy, the toppings were fresh tasting and the cheese was gooey and oily in all the right ways.I enjoyed my pizza so much more this time- based on this visit, I'd consider coming here again, and take them off the Black List :)", "name": "Lora P."}, {"rating": 4.0, "review": "We switched over to Brother's Pizza instead of continuing to go to the rather pricey Pink's Pizza which is practically next door. Brother's may not be the most appealing pizzeria but their pizza is tasty, very affordable and right down the road. Who cares if they don't deliver, just call them and they'll have it ready to pick-up by the time you get there!They even offer alfredo sauce on their pizza which is what I'm all for! Their pepperoni and canadian bacon are winning toppings and their crust is scrumptious!Too bad I'm on my wedding diet now because after this review, I'm craving me some Brother's Pizza!!!", "name": "Laura S."}, {"rating": 4.0, "review": "Love Luani and his team!We go here often for date nights and/or delivery on a lazy Friday night =)My bf is from NY, so he definitely knows quality - Luani can do it right!!!!!", "name": "Amanda M."}, {"rating": 5.0, "review": "Brother's Pizza is amazing!! I called and ordered about ten minutes ahead of time, so I could pick up some yummy pizza for my lunch break and bring it right back to the office. The order was ready by the time I got there, the staff is friendly, and the pizza is EXCELLENT!THANK YOU! I will be coming back.", "name": "Asher R."}, {"rating": 5.0, "review": "Simply put...awesome NY style pizza and reasonably priced. Glad to have one in our neighborhood so we can stop by easily. Very laid back environment and had a neighborhood feel. Not pretentious at all--decor is plain and simple.I prefer it over Pink's Pizza (they are just overpriced).We went for a take out pizza, and the lady was super nice to us and offered us a drinks at their soda machine while we waited...Not sure if they do this everytime, but we certainly appreciated the offer.", "name": "Albert Y."}, {"rating": 5.0, "review": "Took me back to 1985 :)Ran across this place when my friend was in town and had to stop and ask if it was the same as the one that use to be in Greenspoint Mall way back in the days - and indeed it is!Stopped in to grab a slice of pizza and some wings. I ordered one slice of pizza with two toppings (onions/mushrooms) for a mere $3.25 (w/tax). The wings come 10 to an order for $7 (w/tax).....winning.This was nostalgia. Totally took me back to the late 80s when this was the spot to be. Pizza still taste the same -- GOOD and the people there are still so friendly.They also sell whole pizzas along with calzones, strombolis, and pasta.Will definitely hit this spot. I'm so excited - and it's less than 8 min from my house....WINNING!And for the record, this place serves pizza the way it was meant to be eaten. It's not a ritzy spitzy spot like Star (which I love). It's just an old fashion pizzeria. YUM!", "name": "Leena C."}, {"rating": 4.0, "review": "LOVE LOVE LOVE this place!   This is family owned and run and the pizza is THE BEST!!    The family part of this equation is wonderful. Everyone here is nice and friendly....  This place is becoming a weekly habit!!!  YUM.", "name": "Rick C."}, {"rating": 5.0, "review": "Great Pizza! Always hot and ready. Also try their sandwiches, they are delicious. I prefer Brother's over Pink's and That pizza place on ella. Best pizza on Garden Oaks.", "name": "Danyel R."}, {"rating": 5.0, "review": "I did not care to much for the pizza. It was under cooked. The very friendly girl at the register said they could have cooked it longer. \"well why didn't you\" nearly raw pizza is not good. When i think of thin crust pizza. I want a lightly browned crispy thin crust. Is it just me but i think that is how it's done here in Houston Tx.   However i will try this place it again. They were nice enough to personalize a feta, spinach, tomato, meat, and garlic pizza. This place has potential to be very good. I hope they make it!", "name": "Ron L."}]}, "menu": {"menu_url": "http://www.yelp.com/redir?url=http%3A%2F%2Fwww.brotherspizzeriahouston.com%2Fmenus.html&s=2bf59e585657e38ff8d430481cdeb2cb5cae0ff7ab55b5a95cb70347a1b7d72d"}, "business_id": "brothers-pizza-houston-3", "longitude": -95.410223099999996, "hours": {"hours_list": ["Mon-Sat 11 am - 9 pm"]}, "phone": "7136922020", "address": "3820 N Shepherd Dr, Independence Heights, Houston, TX 77018", "latitude": 29.821371599999999, "city": "Houston", "gae_key": "ag1zfnRlc3RuZWFyd29vchILEgpZZWxwSnNvbkRTGPzMAww"}, "business_id": "brothers-pizza-houston-3", "longitude": -95.410223099999996, "geoids": [{"domtap": "pop22", "geoid": "block_group_482015302001", "lifecode": "L3", "tapsegnam": "Metropolitans"}], "reviews": [{"rating": 4, "excerpt": "I finally gave this place a 2nd chance after the line at Subway a few doors down was nearly out the door.  I wasn't thrilled about eating here again since...", "time_created": 1373652348, "rating_image_url": "http://s3-media4.ak.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png", "rating_image_small_url": "http://s3-media4.ak.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png", "user": {"image_url": "http://s3-media2.ak.yelpcdn.com/photo/ohNciSIYodN7CvDT7V5xyg/ms.jpg", "id": "1yPjXNjirAJ-UeT7uQM3FA", "name": "Lora P."}, "rating_image_large_url": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png", "id": "nQ7pgkRIOmxGr80Dw59UyA"}, {"rating": 5, "excerpt": "There is no question this is one of the best pizza places (if not the best) in Houston. NY style all the way. Slices cost $2.25 for plain and $2.75 with a...", "time_created": 1362433876, "rating_image_url": "http://s3-media1.ak.yelpcdn.com/assets/2/www/img/f1def11e4e79/ico/stars/v1/stars_5.png", "rating_image_small_url": "http://s3-media1.ak.yelpcdn.com/assets/2/www/img/c7623205d5cd/ico/stars/v1/stars_small_5.png", "user": {"image_url": "http://s3-media3.ak.yelpcdn.com/photo/ECUNywb0StdI_YVTbzL4rQ/ms.jpg", "id": "cCxqGumSKdvWSZ14tEVZUQ", "name": "Frank A."}, "rating_image_large_url": "http://s3-media3.ak.yelpcdn.com/assets/2/www/img/22affc4e6c38/ico/stars/v1/stars_large_5.png", "id": "tDcTnx9LCm_SFbjhFrPuCQ"}, {"rating": 4, "excerpt": "We switched over to Brother's Pizza instead of continuing to go to the rather pricey Pink's Pizza which is practically next door. Brother's may not be the...", "time_created": 1358177245, "rating_image_url": "http://s3-media4.ak.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png", "rating_image_small_url": "http://s3-media4.ak.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png", "user": {"image_url": "http://s3-media3.ak.yelpcdn.com/photo/nzBBeKnx_VFSkdMWfIQSsA/ms.jpg", "id": "kzpaeoon3-BK2ZH9ITcF-w", "name": "Laura S."}, "rating_image_large_url": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png", "id": "GODTV6S5Z04_E2VsbMg3Tw"}], "photos": [{"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv966vlVS23brK1ykr6JeMr26gi81JXZc1H8ifDUBldynq4mx9nB45qwuWLBF8wQJCs7GNzkbcMWMEgplZD0X28Bm_9qNzqNypgL2jMW2JZGqO6j7nhlLSRHELyluJo5QjXGwKtEzATiblzAK3AyiEc6YMncJrw?width=480&height=853", "caption": "Big yelp images", "width": 640, "id": "", "height": 480}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv953QllDm4q80qfciiQHzXIWoFJ0aIYNo7-pOV4FKLBEDzdHxyXBJld4kDnob92HkVY7u5RVNQ-4t8HAbtBsCuvzaLTgAX44IMYoTZRQvF7E0IW-8QNo9dha4zGtoCvqlxkG2ib2uDFHOOmCfVmapweA_c1V6Q?width=175&height=131", "caption": "Big yelp images", "width": 533, "id": "", "height": 400}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv94-ChmS7jcl2BAjOA8JzQjSGu77_ovUX2jzPR55xjFHdaDBHFyL8mpp7bnDA7_Gn2Uz92NIp8i5Ss2sPJ_4jRFZjToasIVQUVFWdPJv53cCuV0E3CFfuVhkp7VTcLriX7A8qkGj24Id0t0u4MQKQZXIGbs51g?width=533&height=400", "caption": "Big yelp images", "width": 533, "id": "", "height": 400}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv96aGTAoSKoKREsB3WYZT6q7LN95hK9JYHd5FZ4A6-_0skrJcZ4xgsynYGuC5oWQX0VoxDXNVQv1b6xIVjDO_mT_T3ujqLsmHULI1X4-kE2d45Aj-clEiqCeMwNpbGhkCFWkyQAFvO2lW1DLeZNk8u7iWLibHQ?width=640&height=480", "caption": "Big yelp images", "width": 533, "id": "", "height": 400}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv9777fdyLT5pYtlfvygJhyjz5NHOrqa95fg6MGxKizyn0UN4NYXVwQXV5w8kRjR8o81_5VFKx2bo5nMJBnM7dwVfaVR5AGT3mE9sawgUVrabXMygwFKzvx3R2OHEQjTM_M85sD-WbPr53oQmd4lcADgbPg9gRQ?width=480&height=360", "caption": "Big yelp images", "width": 500, "id": "", "height": 429}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv96qHDjpnk67w59GDfz0RYyRMlKqw6jYBfiC9q6r7GvmoE0yasLYDOA1POc-mLmdM0Gf2qGNrn1dZYMdDvbEu5rumYRZ5iGlstVpzQ9aLWzwYDWQiMlPJCdjy6PKfzfcMsIhOBL9lc1MO8tjRKD54UcFC_iQCA?width=438&height=386", "caption": "Big yelp images", "width": 298, "id": "", "height": 400}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv946bCHrOQNONXoJ2TBJsF1XP0zLNkRRCE7dwhdK2_rtZUU3LVkt7fpMkT91PVRJ-YF_eT-grc6MC2VemLtRhOQ1OyZwPT6uaKegCVwdiUZO-Kji2HUIxMSArIhqk54OpfrpsFNGaqUi56R3o19gPEyEUNGGlw?width=626&height=360", "caption": "Big yelp images", "width": 100, "id": "", "height": 100}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv94AgGrfYErXQQKcIjCsvjzQCfgHjClo-L-XWIHQqiJr6xMimTH7FYkw-JIQ4ox6wFTSYlS_VviJlKBZ5uIaXo4yFDyazQVSU_uP-ksJ0S3w1KzCJUIVlmdqp1MciIIHoLndAq2grop1v-0rynZQWByaszGFsA?width=480&height=853", "caption": "from google images", "width": 845, "id": "", "height": 565}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv94dGDu8k8nYalazIyVJMMZuGGyzLR3Vioj7MsaTysvyb8uNWDG_VDndGvg-6Q7akLbtu1hWcpLLXaxhsAo_kWPvPv8z6h67oY_tjbXEolSKksb1kqXoz2LtY-iHaJiQqA4a2bfj0HJiv1O7qleKBqzWEhTuCQ?width=533&height=400", "caption": "from google images", "width": 640, "id": "", "height": 480}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv95cF2VSCXpVakgdqW9a6Umv8ofecbyB_ZjYBbP8CCqZ_zPrkrunT6ZP1ajIh7jkQwaXWvZM_NHjzKLiH_b5TJREnqCAczs7TYoDADrVVBoKH2NUHKMBLoc5WpYt4ToIIWwcdl8MZEDpupmyiIj9HYwxDu0f2Q?width=533&height=400", "caption": "from google images", "width": 640, "id": "", "height": 480}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv97P1qfeoNqrQgUvtQzr4pDrp3DgGnpw2aJntvJF44oLX-aIgroJlY3ye4LEF1AdBnIxGCVQ_FXyPsPbHzDdDraJTxwrApyF5My2WP5QBDZGmlWwdz5rCwUTdnxhW04GzJO2lkVagOgmhgzlcF1LKFxrl_RFdQ?width=298&height=400", "caption": "from google images", "width": 640, "id": "", "height": 480}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv94UtsbZwNJfwUuHXuraYk_ofHYzArZA8w5XNgSVhOTrECwLvJP7d-6G8DZNgoC7q7NTUA1OvBINed3Y5mABOU0uxbuOa47e705e_PAfjzhTNisvm4PM6TeaQRJCsPpEi8rJeKQIwQMauIh9_JcoMpQmZADCvg?width=600&height=291", "caption": "from google images", "width": 626, "id": "", "height": 360}, {"caption": "First time not bad.will review in a few", "url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv96AGP7Ak5IvucanBnV5k3aGRDVbnfnMYEFKtWwnafiEChV0S2Gx2M5xTUfnGLPQ7KCerJPhI2i0fvYctYLG3jv6_zQ3ZOKk0_phUwV3BJ0dJdxMvYd_cGVg6rbSTiORMv9jXNNh1YzmDrZIaEMH3xD6ru0C-g?width=300&height=400", "is_primary": false, "height": 291, "width": 600, "id": "QvksCmziFYxugjk-BXnSow"}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv94OCSHJTZBjm1pBqMKZovqwnFSmWk6iW6IY9FrA-ZM1tLwQdsQZpsjzmMZt6_uovGx3bjbc6F36edZgjymKn4aPhZT7LSHScZcb-w1K7ouqPANzvf-puJZ8Ia8qGov0loZz-DyNE5RQbfeO72mja-1ZnB5R1w?width=533&height=400", "caption": "from google images", "width": 590, "id": "", "height": 590}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv94dhh1-_JLt-oSQb61VEtXdFUamgOk7F4EnN5ZSl6h0KwH6lfBWNJQyPa5XPEUXJvQ70H450scmJac0845niqvHw2mFRSGDngtETEmWmWsILDh9-knvTODXXajnhzN6CBK_51MjMVL5y2tpcFl-cTgvS6GQ5A?width=298&height=400", "caption": "from google images", "width": 560, "id": "", "height": 420}], "state": "http://testnearwoo.appspot.com/c/index.html#/campaign/ag1zfnRlc3RuZWFyd29vchILEgpZZWxwSnNvbkRTGPzMAww", "person": "asldkfj", "email": "alskdjf@sdlfkj.com", "address": "3820 N Shepherd Dr, Independence Heights, Houston, TX 77018", "latitude": 29.821371599999999, "city": "Houston", "gae_key": "ag1zfnRlc3RuZWFyd29vchILEgpZZWxwSnNvbkRTGPzMAww"})
    $scope.loaded_campaign(data);
    //console.log('data after fetch campaign');
    //console.log(data);
    

  }).error(function(data){
      $timeout($scope.retry,3000)
  })

  $scope.retry = function() {
    $http.get(host + '/fetchcampaign?key=' + $routeParams.gae_key).success(function(data) {
    //console.log('fetch camp by key');
    
    // testing locally
    // $scope.loaded_campaign({"rating": 4.5, "biz_url": "http://www.yelp.com/biz/brothers-pizza-houston-3", "name": "Brother's Pizza", "category_list": [["Pizza", "pizza"]], "phone": "7136922020", "scraped_data": {"rating": 4.5, "biz_url": "http://www.yelp.com/biz/brothers-pizza-houston-3", "name": "Brother's Pizza", "category_list": [["Pizza", "pizza"]], "photos": [{"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv966vlVS23brK1ykr6JeMr26gi81JXZc1H8ifDUBldynq4mx9nB45qwuWLBF8wQJCs7GNzkbcMWMEgplZD0X28Bm_9qNzqNypgL2jMW2JZGqO6j7nhlLSRHELyluJo5QjXGwKtEzATiblzAK3AyiEc6YMncJrw?width=480&height=853", "caption": "Big yelp images", "width": 640, "id": "", "height": 480}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv953QllDm4q80qfciiQHzXIWoFJ0aIYNo7-pOV4FKLBEDzdHxyXBJld4kDnob92HkVY7u5RVNQ-4t8HAbtBsCuvzaLTgAX44IMYoTZRQvF7E0IW-8QNo9dha4zGtoCvqlxkG2ib2uDFHOOmCfVmapweA_c1V6Q?width=175&height=131", "caption": "Big yelp images", "width": 533, "id": "", "height": 400}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv94-ChmS7jcl2BAjOA8JzQjSGu77_ovUX2jzPR55xjFHdaDBHFyL8mpp7bnDA7_Gn2Uz92NIp8i5Ss2sPJ_4jRFZjToasIVQUVFWdPJv53cCuV0E3CFfuVhkp7VTcLriX7A8qkGj24Id0t0u4MQKQZXIGbs51g?width=533&height=400", "caption": "Big yelp images", "width": 533, "id": "", "height": 400}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv96aGTAoSKoKREsB3WYZT6q7LN95hK9JYHd5FZ4A6-_0skrJcZ4xgsynYGuC5oWQX0VoxDXNVQv1b6xIVjDO_mT_T3ujqLsmHULI1X4-kE2d45Aj-clEiqCeMwNpbGhkCFWkyQAFvO2lW1DLeZNk8u7iWLibHQ?width=640&height=480", "caption": "Big yelp images", "width": 533, "id": "", "height": 400}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv9777fdyLT5pYtlfvygJhyjz5NHOrqa95fg6MGxKizyn0UN4NYXVwQXV5w8kRjR8o81_5VFKx2bo5nMJBnM7dwVfaVR5AGT3mE9sawgUVrabXMygwFKzvx3R2OHEQjTM_M85sD-WbPr53oQmd4lcADgbPg9gRQ?width=480&height=360", "caption": "Big yelp images", "width": 500, "id": "", "height": 429}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv96qHDjpnk67w59GDfz0RYyRMlKqw6jYBfiC9q6r7GvmoE0yasLYDOA1POc-mLmdM0Gf2qGNrn1dZYMdDvbEu5rumYRZ5iGlstVpzQ9aLWzwYDWQiMlPJCdjy6PKfzfcMsIhOBL9lc1MO8tjRKD54UcFC_iQCA?width=438&height=386", "caption": "Big yelp images", "width": 298, "id": "", "height": 400}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv946bCHrOQNONXoJ2TBJsF1XP0zLNkRRCE7dwhdK2_rtZUU3LVkt7fpMkT91PVRJ-YF_eT-grc6MC2VemLtRhOQ1OyZwPT6uaKegCVwdiUZO-Kji2HUIxMSArIhqk54OpfrpsFNGaqUi56R3o19gPEyEUNGGlw?width=626&height=360", "caption": "Big yelp images", "width": 100, "id": "", "height": 100}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv94AgGrfYErXQQKcIjCsvjzQCfgHjClo-L-XWIHQqiJr6xMimTH7FYkw-JIQ4ox6wFTSYlS_VviJlKBZ5uIaXo4yFDyazQVSU_uP-ksJ0S3w1KzCJUIVlmdqp1MciIIHoLndAq2grop1v-0rynZQWByaszGFsA?width=480&height=853", "caption": "from google images", "width": 845, "id": "", "height": 565}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv94dGDu8k8nYalazIyVJMMZuGGyzLR3Vioj7MsaTysvyb8uNWDG_VDndGvg-6Q7akLbtu1hWcpLLXaxhsAo_kWPvPv8z6h67oY_tjbXEolSKksb1kqXoz2LtY-iHaJiQqA4a2bfj0HJiv1O7qleKBqzWEhTuCQ?width=533&height=400", "caption": "from google images", "width": 640, "id": "", "height": 480}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv95cF2VSCXpVakgdqW9a6Umv8ofecbyB_ZjYBbP8CCqZ_zPrkrunT6ZP1ajIh7jkQwaXWvZM_NHjzKLiH_b5TJREnqCAczs7TYoDADrVVBoKH2NUHKMBLoc5WpYt4ToIIWwcdl8MZEDpupmyiIj9HYwxDu0f2Q?width=533&height=400", "caption": "from google images", "width": 640, "id": "", "height": 480}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv97P1qfeoNqrQgUvtQzr4pDrp3DgGnpw2aJntvJF44oLX-aIgroJlY3ye4LEF1AdBnIxGCVQ_FXyPsPbHzDdDraJTxwrApyF5My2WP5QBDZGmlWwdz5rCwUTdnxhW04GzJO2lkVagOgmhgzlcF1LKFxrl_RFdQ?width=298&height=400", "caption": "from google images", "width": 640, "id": "", "height": 480}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv94UtsbZwNJfwUuHXuraYk_ofHYzArZA8w5XNgSVhOTrECwLvJP7d-6G8DZNgoC7q7NTUA1OvBINed3Y5mABOU0uxbuOa47e705e_PAfjzhTNisvm4PM6TeaQRJCsPpEi8rJeKQIwQMauIh9_JcoMpQmZADCvg?width=600&height=291", "caption": "from google images", "width": 626, "id": "", "height": 360}, {"caption": "First time not bad.will review in a few", "url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv96AGP7Ak5IvucanBnV5k3aGRDVbnfnMYEFKtWwnafiEChV0S2Gx2M5xTUfnGLPQ7KCerJPhI2i0fvYctYLG3jv6_zQ3ZOKk0_phUwV3BJ0dJdxMvYd_cGVg6rbSTiORMv9jXNNh1YzmDrZIaEMH3xD6ru0C-g?width=300&height=400", "is_primary": false, "height": 291, "width": 600, "id": "QvksCmziFYxugjk-BXnSow"}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv94OCSHJTZBjm1pBqMKZovqwnFSmWk6iW6IY9FrA-ZM1tLwQdsQZpsjzmMZt6_uovGx3bjbc6F36edZgjymKn4aPhZT7LSHScZcb-w1K7ouqPANzvf-puJZ8Ia8qGov0loZz-DyNE5RQbfeO72mja-1ZnB5R1w?width=533&height=400", "caption": "from google images", "width": 590, "id": "", "height": 590}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv94dhh1-_JLt-oSQb61VEtXdFUamgOk7F4EnN5ZSl6h0KwH6lfBWNJQyPa5XPEUXJvQ70H450scmJac0845niqvHw2mFRSGDngtETEmWmWsILDh9-knvTODXXajnhzN6CBK_51MjMVL5y2tpcFl-cTgvS6GQ5A?width=298&height=400", "caption": "from google images", "width": 560, "id": "", "height": 420}], "reviews": {"reviews": [{"rating": 4.5, "review": "There is no question this is one of the best pizza places (if not the best) in Houston. NY style all the way. Slices cost $2.25 for plain and $2.75 with a topping. I am specifically talking about the one on Shepard and 38th StThe owner is a really nice guy. He always says hello and calls me by my name.If  you want NY style pizza in Houston - this particular Brother's pizza is the place to go - WITHOU AN OUNCE OF DOUBT.This pizza is so good - even the crust is delicious!While i have not had any of the subs they look delicious.Enjoy fellow yelpers, ENJOY!!!!If you cannot get here, Romano's on Grey Street is very good. Not as good as Brother's, but still very good!", "name": "Frank A."}, {"rating": 5.0, "review": "I finally gave this place a 2nd chance after the line at Subway a few doors down was nearly out the door.  I wasn't thrilled about eating here again since my first visit had been such a fail.I decided to go for the Brother's Special this time since the 2 toppings slice I'd gotten last time wasn't very good.  This time my pizza was night and day better- the crust was perfectly crunchy and chewy, the toppings were fresh tasting and the cheese was gooey and oily in all the right ways.I enjoyed my pizza so much more this time- based on this visit, I'd consider coming here again, and take them off the Black List :)", "name": "Lora P."}, {"rating": 4.0, "review": "We switched over to Brother's Pizza instead of continuing to go to the rather pricey Pink's Pizza which is practically next door. Brother's may not be the most appealing pizzeria but their pizza is tasty, very affordable and right down the road. Who cares if they don't deliver, just call them and they'll have it ready to pick-up by the time you get there!They even offer alfredo sauce on their pizza which is what I'm all for! Their pepperoni and canadian bacon are winning toppings and their crust is scrumptious!Too bad I'm on my wedding diet now because after this review, I'm craving me some Brother's Pizza!!!", "name": "Laura S."}, {"rating": 4.0, "review": "Love Luani and his team!We go here often for date nights and/or delivery on a lazy Friday night =)My bf is from NY, so he definitely knows quality - Luani can do it right!!!!!", "name": "Amanda M."}, {"rating": 5.0, "review": "Brother's Pizza is amazing!! I called and ordered about ten minutes ahead of time, so I could pick up some yummy pizza for my lunch break and bring it right back to the office. The order was ready by the time I got there, the staff is friendly, and the pizza is EXCELLENT!THANK YOU! I will be coming back.", "name": "Asher R."}, {"rating": 5.0, "review": "Simply put...awesome NY style pizza and reasonably priced. Glad to have one in our neighborhood so we can stop by easily. Very laid back environment and had a neighborhood feel. Not pretentious at all--decor is plain and simple.I prefer it over Pink's Pizza (they are just overpriced).We went for a take out pizza, and the lady was super nice to us and offered us a drinks at their soda machine while we waited...Not sure if they do this everytime, but we certainly appreciated the offer.", "name": "Albert Y."}, {"rating": 5.0, "review": "Took me back to 1985 :)Ran across this place when my friend was in town and had to stop and ask if it was the same as the one that use to be in Greenspoint Mall way back in the days - and indeed it is!Stopped in to grab a slice of pizza and some wings. I ordered one slice of pizza with two toppings (onions/mushrooms) for a mere $3.25 (w/tax). The wings come 10 to an order for $7 (w/tax).....winning.This was nostalgia. Totally took me back to the late 80s when this was the spot to be. Pizza still taste the same -- GOOD and the people there are still so friendly.They also sell whole pizzas along with calzones, strombolis, and pasta.Will definitely hit this spot. I'm so excited - and it's less than 8 min from my house....WINNING!And for the record, this place serves pizza the way it was meant to be eaten. It's not a ritzy spitzy spot like Star (which I love). It's just an old fashion pizzeria. YUM!", "name": "Leena C."}, {"rating": 4.0, "review": "LOVE LOVE LOVE this place!   This is family owned and run and the pizza is THE BEST!!    The family part of this equation is wonderful. Everyone here is nice and friendly....  This place is becoming a weekly habit!!!  YUM.", "name": "Rick C."}, {"rating": 5.0, "review": "Great Pizza! Always hot and ready. Also try their sandwiches, they are delicious. I prefer Brother's over Pink's and That pizza place on ella. Best pizza on Garden Oaks.", "name": "Danyel R."}, {"rating": 5.0, "review": "I did not care to much for the pizza. It was under cooked. The very friendly girl at the register said they could have cooked it longer. \"well why didn't you\" nearly raw pizza is not good. When i think of thin crust pizza. I want a lightly browned crispy thin crust. Is it just me but i think that is how it's done here in Houston Tx.   However i will try this place it again. They were nice enough to personalize a feta, spinach, tomato, meat, and garlic pizza. This place has potential to be very good. I hope they make it!", "name": "Ron L."}]}, "menu": {"menu_url": "http://www.yelp.com/redir?url=http%3A%2F%2Fwww.brotherspizzeriahouston.com%2Fmenus.html&s=2bf59e585657e38ff8d430481cdeb2cb5cae0ff7ab55b5a95cb70347a1b7d72d"}, "business_id": "brothers-pizza-houston-3", "longitude": -95.410223099999996, "hours": {"hours_list": ["Mon-Sat 11 am - 9 pm"]}, "phone": "7136922020", "address": "3820 N Shepherd Dr, Independence Heights, Houston, TX 77018", "latitude": 29.821371599999999, "city": "Houston", "gae_key": "ag1zfnRlc3RuZWFyd29vchILEgpZZWxwSnNvbkRTGPzMAww"}, "business_id": "brothers-pizza-houston-3", "longitude": -95.410223099999996, "geoids": [{"domtap": "pop22", "geoid": "block_group_482015302001", "lifecode": "L3", "tapsegnam": "Metropolitans"}], "reviews": [{"rating": 4, "excerpt": "I finally gave this place a 2nd chance after the line at Subway a few doors down was nearly out the door.  I wasn't thrilled about eating here again since...", "time_created": 1373652348, "rating_image_url": "http://s3-media4.ak.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png", "rating_image_small_url": "http://s3-media4.ak.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png", "user": {"image_url": "http://s3-media2.ak.yelpcdn.com/photo/ohNciSIYodN7CvDT7V5xyg/ms.jpg", "id": "1yPjXNjirAJ-UeT7uQM3FA", "name": "Lora P."}, "rating_image_large_url": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png", "id": "nQ7pgkRIOmxGr80Dw59UyA"}, {"rating": 5, "excerpt": "There is no question this is one of the best pizza places (if not the best) in Houston. NY style all the way. Slices cost $2.25 for plain and $2.75 with a...", "time_created": 1362433876, "rating_image_url": "http://s3-media1.ak.yelpcdn.com/assets/2/www/img/f1def11e4e79/ico/stars/v1/stars_5.png", "rating_image_small_url": "http://s3-media1.ak.yelpcdn.com/assets/2/www/img/c7623205d5cd/ico/stars/v1/stars_small_5.png", "user": {"image_url": "http://s3-media3.ak.yelpcdn.com/photo/ECUNywb0StdI_YVTbzL4rQ/ms.jpg", "id": "cCxqGumSKdvWSZ14tEVZUQ", "name": "Frank A."}, "rating_image_large_url": "http://s3-media3.ak.yelpcdn.com/assets/2/www/img/22affc4e6c38/ico/stars/v1/stars_large_5.png", "id": "tDcTnx9LCm_SFbjhFrPuCQ"}, {"rating": 4, "excerpt": "We switched over to Brother's Pizza instead of continuing to go to the rather pricey Pink's Pizza which is practically next door. Brother's may not be the...", "time_created": 1358177245, "rating_image_url": "http://s3-media4.ak.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png", "rating_image_small_url": "http://s3-media4.ak.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png", "user": {"image_url": "http://s3-media3.ak.yelpcdn.com/photo/nzBBeKnx_VFSkdMWfIQSsA/ms.jpg", "id": "kzpaeoon3-BK2ZH9ITcF-w", "name": "Laura S."}, "rating_image_large_url": "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png", "id": "GODTV6S5Z04_E2VsbMg3Tw"}], "photos": [{"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv966vlVS23brK1ykr6JeMr26gi81JXZc1H8ifDUBldynq4mx9nB45qwuWLBF8wQJCs7GNzkbcMWMEgplZD0X28Bm_9qNzqNypgL2jMW2JZGqO6j7nhlLSRHELyluJo5QjXGwKtEzATiblzAK3AyiEc6YMncJrw?width=480&height=853", "caption": "Big yelp images", "width": 640, "id": "", "height": 480}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv953QllDm4q80qfciiQHzXIWoFJ0aIYNo7-pOV4FKLBEDzdHxyXBJld4kDnob92HkVY7u5RVNQ-4t8HAbtBsCuvzaLTgAX44IMYoTZRQvF7E0IW-8QNo9dha4zGtoCvqlxkG2ib2uDFHOOmCfVmapweA_c1V6Q?width=175&height=131", "caption": "Big yelp images", "width": 533, "id": "", "height": 400}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv94-ChmS7jcl2BAjOA8JzQjSGu77_ovUX2jzPR55xjFHdaDBHFyL8mpp7bnDA7_Gn2Uz92NIp8i5Ss2sPJ_4jRFZjToasIVQUVFWdPJv53cCuV0E3CFfuVhkp7VTcLriX7A8qkGj24Id0t0u4MQKQZXIGbs51g?width=533&height=400", "caption": "Big yelp images", "width": 533, "id": "", "height": 400}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv96aGTAoSKoKREsB3WYZT6q7LN95hK9JYHd5FZ4A6-_0skrJcZ4xgsynYGuC5oWQX0VoxDXNVQv1b6xIVjDO_mT_T3ujqLsmHULI1X4-kE2d45Aj-clEiqCeMwNpbGhkCFWkyQAFvO2lW1DLeZNk8u7iWLibHQ?width=640&height=480", "caption": "Big yelp images", "width": 533, "id": "", "height": 400}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv9777fdyLT5pYtlfvygJhyjz5NHOrqa95fg6MGxKizyn0UN4NYXVwQXV5w8kRjR8o81_5VFKx2bo5nMJBnM7dwVfaVR5AGT3mE9sawgUVrabXMygwFKzvx3R2OHEQjTM_M85sD-WbPr53oQmd4lcADgbPg9gRQ?width=480&height=360", "caption": "Big yelp images", "width": 500, "id": "", "height": 429}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv96qHDjpnk67w59GDfz0RYyRMlKqw6jYBfiC9q6r7GvmoE0yasLYDOA1POc-mLmdM0Gf2qGNrn1dZYMdDvbEu5rumYRZ5iGlstVpzQ9aLWzwYDWQiMlPJCdjy6PKfzfcMsIhOBL9lc1MO8tjRKD54UcFC_iQCA?width=438&height=386", "caption": "Big yelp images", "width": 298, "id": "", "height": 400}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv946bCHrOQNONXoJ2TBJsF1XP0zLNkRRCE7dwhdK2_rtZUU3LVkt7fpMkT91PVRJ-YF_eT-grc6MC2VemLtRhOQ1OyZwPT6uaKegCVwdiUZO-Kji2HUIxMSArIhqk54OpfrpsFNGaqUi56R3o19gPEyEUNGGlw?width=626&height=360", "caption": "Big yelp images", "width": 100, "id": "", "height": 100}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv94AgGrfYErXQQKcIjCsvjzQCfgHjClo-L-XWIHQqiJr6xMimTH7FYkw-JIQ4ox6wFTSYlS_VviJlKBZ5uIaXo4yFDyazQVSU_uP-ksJ0S3w1KzCJUIVlmdqp1MciIIHoLndAq2grop1v-0rynZQWByaszGFsA?width=480&height=853", "caption": "from google images", "width": 845, "id": "", "height": 565}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv94dGDu8k8nYalazIyVJMMZuGGyzLR3Vioj7MsaTysvyb8uNWDG_VDndGvg-6Q7akLbtu1hWcpLLXaxhsAo_kWPvPv8z6h67oY_tjbXEolSKksb1kqXoz2LtY-iHaJiQqA4a2bfj0HJiv1O7qleKBqzWEhTuCQ?width=533&height=400", "caption": "from google images", "width": 640, "id": "", "height": 480}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv95cF2VSCXpVakgdqW9a6Umv8ofecbyB_ZjYBbP8CCqZ_zPrkrunT6ZP1ajIh7jkQwaXWvZM_NHjzKLiH_b5TJREnqCAczs7TYoDADrVVBoKH2NUHKMBLoc5WpYt4ToIIWwcdl8MZEDpupmyiIj9HYwxDu0f2Q?width=533&height=400", "caption": "from google images", "width": 640, "id": "", "height": 480}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv97P1qfeoNqrQgUvtQzr4pDrp3DgGnpw2aJntvJF44oLX-aIgroJlY3ye4LEF1AdBnIxGCVQ_FXyPsPbHzDdDraJTxwrApyF5My2WP5QBDZGmlWwdz5rCwUTdnxhW04GzJO2lkVagOgmhgzlcF1LKFxrl_RFdQ?width=298&height=400", "caption": "from google images", "width": 640, "id": "", "height": 480}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv94UtsbZwNJfwUuHXuraYk_ofHYzArZA8w5XNgSVhOTrECwLvJP7d-6G8DZNgoC7q7NTUA1OvBINed3Y5mABOU0uxbuOa47e705e_PAfjzhTNisvm4PM6TeaQRJCsPpEi8rJeKQIwQMauIh9_JcoMpQmZADCvg?width=600&height=291", "caption": "from google images", "width": 626, "id": "", "height": 360}, {"caption": "First time not bad.will review in a few", "url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv96AGP7Ak5IvucanBnV5k3aGRDVbnfnMYEFKtWwnafiEChV0S2Gx2M5xTUfnGLPQ7KCerJPhI2i0fvYctYLG3jv6_zQ3ZOKk0_phUwV3BJ0dJdxMvYd_cGVg6rbSTiORMv9jXNNh1YzmDrZIaEMH3xD6ru0C-g?width=300&height=400", "is_primary": false, "height": 291, "width": 600, "id": "QvksCmziFYxugjk-BXnSow"}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv94OCSHJTZBjm1pBqMKZovqwnFSmWk6iW6IY9FrA-ZM1tLwQdsQZpsjzmMZt6_uovGx3bjbc6F36edZgjymKn4aPhZT7LSHScZcb-w1K7ouqPANzvf-puJZ8Ia8qGov0loZz-DyNE5RQbfeO72mja-1ZnB5R1w?width=533&height=400", "caption": "from google images", "width": 590, "id": "", "height": 590}, {"url": "http://testnearwoo.appspot.com/blobstore/serve/AMIfv94dhh1-_JLt-oSQb61VEtXdFUamgOk7F4EnN5ZSl6h0KwH6lfBWNJQyPa5XPEUXJvQ70H450scmJac0845niqvHw2mFRSGDngtETEmWmWsILDh9-knvTODXXajnhzN6CBK_51MjMVL5y2tpcFl-cTgvS6GQ5A?width=298&height=400", "caption": "from google images", "width": 560, "id": "", "height": 420}], "state": "http://testnearwoo.appspot.com/c/index.html#/campaign/ag1zfnRlc3RuZWFyd29vchILEgpZZWxwSnNvbkRTGPzMAww", "person": "asldkfj", "email": "alskdjf@sdlfkj.com", "address": "3820 N Shepherd Dr, Independence Heights, Houston, TX 77018", "latitude": 29.821371599999999, "city": "Houston", "gae_key": "ag1zfnRlc3RuZWFyd29vchILEgpZZWxwSnNvbkRTGPzMAww"})
    $scope.loaded_campaign(data);
    //console.log('data after fetch campaign');
    //console.log(data);
  

  }).error(function(data){
      $timeout($scope.retry,3000)
  })
  }

  $scope.select_img = function(idx) {
    $scope.selected_img_idx = idx;
  }



  $scope.review_name_length = function(name){
      if(name === undefined){
        $scope.too_many_characters = ' too many characters';
      }else{
        $scope.too_many_characters = false;
      }
  }

  $scope.show_content = function(idx) {
    $scope.content = [idx]
  }

  $scope.toggle_content = function(idx) {
    if ($scope.content.indexOf(idx) == -1) {
      $scope.content.push(idx)
    } else {
      $scope.content.splice($scope.content.indexOf(idx),1)
    }
  }

  $scope.clock_tower = function(status){
    if(status == 'remove'){
        $scope.yelp_data.hours.hours_list = []
    }else{
        $scope.yelp_data.hours.hours_list[0] = 'Mon-Fri: edit hours'
        $scope.yelp_data.hours.hours_list[1] = 'Sat-Sun: edit hours'
    }
    
  }

  //start here load yelp data
  $scope.loaded_campaign = function(data) {
    $scope.step = 2;
    $scope.loaded = true;
    $scope.yelp_data = data;
    //console.log('yelp data in loaded_campaign');
    //console.log(data);

    if (!$scope.yelp_data.hasOwnProperty('goto_website') || ($scope.yelp_data.goto_website == '')) {
      $scope.yelp_data.goto_website = $scope.yelp_data.biz_url;
    }

    // $scope.selected_img_idx = $scope.yelp_data.selected_image_idx;
    if (!$scope.yelp_data.hasOwnProperty('use_website')) {
      $scope.yelp_data.use_website = true;
    }
    if (!$scope.yelp_data.hasOwnProperty('use_fb')) {
      $scope.yelp_data.use_fb = true;
    }
    if (!$scope.yelp_data.hasOwnProperty('use_twitter')) {
      $scope.yelp_data.use_twitter = true;
    }
    if (!$scope.yelp_data.hasOwnProperty('use_map')) {
      $scope.yelp_data.use_map = true;
    }
    if (!$scope.yelp_data.hasOwnProperty('use_call')) {
      $scope.yelp_data.use_call = true;
    }
    // $scope.yelp_data.hours.hours_list = []
    if(!$scope.yelp_data.hours){
      $scope.yelp_data.hours = {hours_list:[]}
    }

    if (!$scope.yelp_data.hasOwnProperty('photos')) {
      $scope.yelp_data.photos = [];
    }

    if($scope.yelp_data.photos.length === 0){
      $scope.no_photo_message = "Oh No! We did not find any photos.  Please upload a photo for your landing page!"
    }


    $scope.loading = false;

    console.log('yelp reviews');
    console.log($scope.yelp_data.reviews);

    //console.log('business_id : ' + $scope.yelp_data.business_id)
    if (!$scope.yelp_data.hasOwnProperty('reviews')){
        console.log('MAKE FAKE REVIEWS')
        $scope.yelp_data.reviews = []
        console.log("scraped reviews")
        console.log($scope.yelp_data.scraped_data.reviews.reviews)
        for (var p in $scope.yelp_data.scraped_data.reviews.reviews) {
          // if (p < 3) {
          //   $scope.yelp_data.scraped_data.reviews.reviews[p].selected = true;  
          // }
          $scope.yelp_data.reviews.push($scope.yelp_data.scraped_data.reviews.reviews[p]);
        }
        $scope.yelp_data.reviews.sort(function(a,b) { return parseFloat(b.rating) - parseFloat(a.rating) } );
        for (var p in $scope.yelp_data.reviews) {
          if (p < 3) {
            $scope.yelp_data.reviews[p].selected= true;
            //$scope.yelp_data.scraped_data.reviews.reviews[p].selected = true;  
          }
        }


        if ($scope.yelp_data.reviews.length === 0){
            console.log("STILL NO REVIEWS")
            $scope.yelp_data.reviews = [];
           $scope.yelp_data.reviews.push(
            {"name":"Review 2", "rating":5, "review":"Please Update review", "selected":true, "pos":'mid-review'},
            {"name":"Review 3", "rating":5, "review":"Please Update review", "selected":true, "pos":'mid-review'},
            {"name":"Review 3", "rating":5, "review":"Please Update review", "selected":true, "pos":'mid-review'}
          )
        }
        if($scope.yelp_data.reviews.length === 1){
          $scope.yelp_data.reviews.push(
            {"name":"Review 2", "rating":5, "review":"Please Update review", "selected":true, "pos":'mid-review'},
            {"name":"Review 3", "rating":5, "review":"Please Update review", "selected":true, "pos":'mid-review'}
          )
        }
        console.log('go')

        if($scope.yelp_data.reviews.length === 2){
          $scope.yelp_data.reviews.push(
            {"name":"Review 2", "rating":5, "review":"Please Update review", "selected":true, "pos":'mid-review'}
          )
        }

    }



    $scope.show_images = false;
    $scope.content = [0];

    if ($scope.yelp_data.hasOwnProperty('main_img_top')) {
      $('#main-img').css('top', $scope.yelp_data.main_img_top)
    }
    
    if(!$scope.yelp_data.realtor_reviews){
      $scope.yelp_data.realtor_reviews =[]
      if ($scope.yelp_data.realtor_reviews.length === 0){
        $scope.yelp_data.realtor_reviews = [{"name":"Listing1", "rating":5, "review":"", "selected":true, "pos":'top-review'},
                                          {"name":"Listing2", "rating":5, "review":"", "selected":true, "pos":'mid-review'},
                                          {"name":"Listing3", "rating":5, "review":"", "selected":true, "pos":'bottom-review'}]
      }
    }


    if ($scope.yelp_data.hasOwnProperty('add_ons')) {
      $scope.add_ons = $scope.yelp_data.add_ons;
    }else{
      $scope.add_ons = 'reviews';
    }

    $scope.yelp_data.add_ons = ''
    $timeout($scope.refresh_add_ons, 300)

  }

  $scope.refresh_add_ons = function() {
    $scope.yelp_data.add_ons = $scope.add_ons;
  }


  $scope.save = function() {

    $scope.yelp_data.selected_actions = [
      {name:'website', is_selected:$scope.yelp_data.use_website},
      {name:'map', is_selected:$scope.yelp_data.use_map},
      {name:'call', is_selected:$scope.yelp_data.use_call},
      {name:'facebook', is_selected:$scope.yelp_data.use_fb},
      {name:'twitter', is_selected:$scope.yelp_data.use_twitter},
      {name:'yelp', is_selected:$scope.yelp_data.add_ons=='reviews'}
      ]

    //console.log('selected actinos');
    //console.log($scope.selected_actions);

    $scope.tz_list = ['PST', 'MST', 'CST', 'EST']
    var d = new Date();
    //console.log($scope.yelp_data.schedule)
    d.setHours( $scope.yelp_data.schedule.hours );
    d.setMinutes( $scope.yelp_data.schedule.minutes );
    //console.log('calling tz');

    $scope.yelp_data.schedule.start_time = d;

    $scope.yelp_data.tz_idx = $scope.tz_list.indexOf($scope.yelp_data.schedule.tz);
    //console.log($scope.yelp_data.schedule)


    $scope.yelp_data.banner_src = 'banner.html';
    $scope.yelp_data.page_src = 'page.html';
    $scope.yelp_data.gae_key = $routeParams.gae_key;


    if($scope.yelp_data.photos.length === 0){
      $scope.show_content(0)
      $scope.no_photo_message = "Oh No! We did not find any photos.  Please upload a photo for your landing page!"
    }else if(!$scope.yelp_data.headline || $scope.yelp_data.headline === ''){
      $scope.show_content(1)
      $scope.no_headline_message = 'Dont forget your headline! Your headline could be a special offer!'
    }else if($scope.yelp_data.reviews[0].name === 'Add a name' && $scope.yelp_data.add_ons === 'reviews'){
      $scope.show_content(3)
      $scope.no_review_message = "Don't forget to say something postive about your business!"
    }else if($scope.yelp_data.realtor_reviews[0].name === 'Listing1' && $scope.yelp_data.add_ons === 'listings'){
      $scope.show_content(3)
      $scope.no_review_message = "Don't have anything to list? Go ahead and select REVIEWS or NONE in Page ADD-ONS."
    }else if($scope.yelp_data.use_fb && !$scope.yelp_data.facebook){
      $scope.show_content(2)
      $scope.no_action_message = "Don't forget your facebook url!"
    }else if($scope.yelp_data.use_twitter && !$scope.yelp_data.twitter){
      $scope.show_content(2)
      $scope.no_action_message = "Don't forget your twitter url!"
    }else if($scope.yelp_data.use_website && !$scope.yelp_data.goto_website){
      $scope.show_content(2)
      $scope.no_action_message = "Don't forget to enter your website!"
    }else{
      $scope.yelp_data.selected_image_url = $scope.yelp_data.photos[$scope.selected_img_idx].url;
      $scope.yelp_data.selected_image_idx = $scope.selected_img_idx;

      if($scope.yelp_data.use_website) {
        if ($scope.yelp_data.goto_website.substr(0,4) != 'http') {
          $scope.yelp_data.goto_website = 'http://' + $scope.yelp_data.goto_website;
        }    
      }

      if($scope.yelp_data.use_twitter) {
        if ($scope.yelp_data.twitter.substr(0,4) != 'http') {
          $scope.yelp_data.twitter = 'http://' + $scope.yelp_data.twitter;
        }    
      }

      if($scope.yelp_data.use_fb) {
        if ($scope.yelp_data.facebook.substr(0,4) != 'http') {
          $scope.yelp_data.facebook = 'http://' + $scope.yelp_data.facebook;
        }    
      }   

      var realtor_reviews = [];
      for (var i in $scope.yelp_data.realtor_reviews) {
        if ($scope.yelp_data.realtor_reviews[i].selected) {
          if ($scope.yelp_data.realtor_reviews[i].review.length > 150) {
            var space_idx = 150;
            //console.log("substr " + $scope.yelp_data.realtor_reviews[i].review.substr(space_idx, 1))
            //console.log("idx of " + $scope.yelp_data.realtor_reviews[i].review.indexOf(' ', space_idx))
            $scope.yelp_data.realtor_reviews[i].review = $scope.yelp_data.realtor_reviews[i].review.substr(0, space_idx) + '...';
          }
          realtor_reviews.push($scope.yelp_data.realtor_reviews[i]);
        }
        
      }

      $scope.yelp_data['state'] = host + '/c/index.html#/approve/' + $routeParams.gae_key
      $analytics.eventTrack('savecampaign', {category: 'checkout_funnel'});
      $scope.yelp_data.main_img_top = $('#main-img').css('top')

      $http.post(host + '/makecontent/' + $routeParams.gae_key, $scope.yelp_data).success(function(data) {
        $location.path('/banner/' + $routeParams.gae_key)
      });

    }
  }

  $scope.select_img = function(idx) {
    $scope.selected_img_idx = idx;
    $("#main-img").draggable({ grid: [ 0, 1 ] });
    $("#main-img").css({ top: 0 });
  }

  $scope.refresh_yelp_images = function() {
    $scope.loaded = false;
    $http.post(host + '/fetchyelp', $scope.yelp_url).success(function(data) {
      $scope.loaded = true;

      $scope.yelp_data.photos = data.photos;
    });    
  }

  $scope.remove_image = function(idx) {
    $scope.yelp_data.photos.splice(idx, 1)
  }

//START REALTOR UPLOAD FILES

  // $scope.create_realtor_upload_url =function(idx){
  //   $http.get('/media/getuploadurl').success(function(data){
  //     //$scope.yelp_data.realtor_reviews[idx].url = data;
  //     $scope.upload_url = data;

  //   })
  // }


 $scope.realtor_setFiles = function(element, idx) {

        //console.log('set listing file')
        $scope.$apply(function($scope) {
          //console.log('files:', element.files);
          // Turn the FileList object into an Array
            $scope.files = []
            for (var i = 0; i < element.files.length; i++) {
              $scope.files.push(element.files[i])
            }
          $scope.progressVisible = false
          $scope.uploadFile();
          $scope.current_idx = idx;
          $scope.uploading_realtor_image = true;
          });

    };

    // $scope.realtor_uploadFile = function() {
    //     var fd = new FormData()
    //     for (var i in $scope.realtor_files) {
    //         fd.append("uploadedFile", $scope.files[i])
    //     }

    //     var xhr = new XMLHttpRequest()
    //     xhr.upload.addEventListener("progress", uploadProgress, false)
    //     xhr.addEventListener("load", uploadComplete, false)
    //     xhr.addEventListener("error", uploadFailed, false)
    //     xhr.addEventListener("abort", uploadCanceled, false)
    //     xhr.open("POST", $scope.upload_url)
    //     $scope.progressVisible = true
    //     xhr.send(fd)
    // }

    // function uploadProgress(evt) {
    //     $scope.$apply(function(){
    //         if (evt.lengthComputable) {
    //             $scope.progress = Math.round(evt.loaded * 100 / evt.total)
    //         } else {
    //             $scope.progress = 'unable to compute'
    //         }
    //     })
    // }

    // function realtor_uploadComplete(evt) {
    //     /* This event is raised when the server send back a response */
    //      $scope.$apply(function(){
    //         $scope.image_src = evt.target.responseText
    //         $scope.fileToUpload = ''

        
    //         var img_url = host + '/advertiserdash/servebgimg/' + evt.target.responseText
    //         if ($scope.uploading_realtor_image == true){
    //           $scope.yelp_data.realtor_reviews[$scope.current_idx].url = url;
    //         }else{
    //           $scope.yelp_data.realtor_photos.push({caption:'', id:'', url: img_url})
    //         }
    //         //console.log($scope.yelp_data)
    //         $('#img_id').attr('src', img_url)
    //     })

    // }

    // function realtor_uploadFailed(evt) {
    //     alert("There was an error attempting to upload the file.")
    // }

    // function realtor_uploadCanceled(evt) {
    //     $scope.$apply(function(){
    //         $scope.realtor_progressVisible = false
    //     })
    //     alert("The upload has been canceled by the user or the browser dropped the connection.")
    // }

//END REALTOR UPLOAD FILES


//START UPLOAD FILES

  $scope.create_upload_url =function(){
    //console.log('create upload url')
    $http.get('/media/getuploadurl').success(function(data){
      $scope.upload_url = data.data
      //console.log('upload url: ' + $scope.upload_url)
    })
  }

  $scope.create_upload_url();

 $scope.setFiles = function(element) {

        $scope.$apply(function($scope) {
          //console.log('files: for camp', element.files);
          // Turn the FileList object into an Array
            $scope.files = []
            for (var i = 0; i < element.files.length; i++) {
              $scope.files.push(element.files[i])
            }
          $scope.uploading_realtor_image = false;
          $scope.progressVisible = false
          $scope.uploadFile();
          });

    };

    $scope.uploadFile = function() {
        var fd = new FormData()
        for (var i in $scope.files) {
            fd.append("uploadedFile", $scope.files[i])
            //console.log('file size: ' + $scope.files[i].size)
            if ($scope.files[i].size > 1000000) {
              alert("Whoa, That's a big file!  Please keep it under 1MB. Thanks!")
              return;
            }
        }

        var xhr = new XMLHttpRequest()
        xhr.upload.addEventListener("progress", uploadProgress, false)
        xhr.addEventListener("load", uploadComplete, false)
        xhr.addEventListener("error", uploadFailed, false)
        xhr.addEventListener("abort", uploadCanceled, false)
        xhr.open("POST", $scope.upload_url)
        $scope.progressVisible = true
        xhr.send(fd)
    }

    function uploadProgress(evt) {
        $scope.$apply(function(){
            if (evt.lengthComputable) {
                $scope.progress = Math.round(evt.loaded * 100 / evt.total)
            } else {
                $scope.progress = 'unable to compute'
            }
        })
    }

    function uploadComplete(evt) {
        /* This event is raised when the server send back a response */
         $scope.$apply(function(){
            $scope.image_src = evt.target.responseText
            var response = JSON.parse(evt.target.responseText)
            ////console.log(evt);
            //console.log(response);
            //console.log(response.data);
            $scope.fileToUpload = ''

        
            var img_url = host + response.data

            if ($scope.uploading_realtor_image === true){
              $scope.yelp_data.realtor_reviews[$scope.current_idx].url = img_url;
            }else{
              $scope.yelp_data.photos.unshift({caption:'', id:'', url: img_url})
            }
            //console.log($scope.yelp_data);
            $scope.select_img(0);
            $('#img_id').attr('src', img_url)
            $scope.create_upload_url();

            $('#photos-div').animate({
               scrollTop: 0
            }, 'slow');

        })

    }

    function uploadFailed(evt) {
        alert("There was an error attempting to upload the file.")
    }

    function uploadCanceled(evt) {
        $scope.$apply(function(){
            $scope.progressVisible = false
        })
        alert("The upload has been canceled by the user or the browser dropped the connection.")
    }

//END UPLOAD FILES









}
