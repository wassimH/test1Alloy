var login = Alloy.createController('loginWindow');
login.getView().open();

function fn1(){
	alert('hello');
	Ti.API.info('Hello');
}
