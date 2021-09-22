export default function GetLanguage(name){

		var arrCook = document.cookie.split(";");
		var lng = null;
		if(arrCook.length>1){

			arrCook.forEach(item=>{
				for(var k=0; k<item.length; k++){
					
 					if(item.charAt(k)=='='){

 						if(item.substring(0, k).indexOf(name)+1){

 							lng = item.substring(k+1);
 						}
 					}
 				}
			})
			return lng;
		}else{
			for(var k=0; k<arrCook[0].length; k++){
 				if(arrCook[0].charAt(k)=='='){
 					if(arrCook[0].substring(0, k).indexOf(name)+1){
 						lng = arrCook[0].substring(k+1);
 					}
 				}
 			}
 			return lng;
		}
		
	}