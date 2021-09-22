function ScreenWidth(object){

	var screen = document.documentElement.clientWidth;

	if(screen<600){
		return object.mobile;
	}else{
		return object.desk;
	}
}

export default ScreenWidth;