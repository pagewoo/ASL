
function PageWoo(api_key, page_key)
{

this.main_url = 'http://dev-dot-page-woo.appspot.com/api/v1';
//this.main_url = 'http://app.pagewoo.com/api/v1';
this.conversion_url = this.main_url + '/lpc';
this.api_key=api_key;
this.page_key=page_key;
}

PageWoo.prototype.count_conversion = function(conversion_type='') {

	var call_url = this.conversion_url + '/' + conversion_type;

    $.ajax({
        url: call_url,
        type: 'GET',
        dataType: 'jsonp',
        error: function(xhr, status, error) {
            alert("error");
        },
        success: function(json) {
            alert("success");
        }
    });

}


var test_pagewoo = function() {
	p = PageWoo('testapi', 'pagekey')
	p.count_conversion('call')
}

var fred=new employee("Fred Flintstone","Caveman",1970);
employee.prototype.salary=null;
fred.salary=20000;



