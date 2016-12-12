window.onload = function() {
		function $(id) {
			return document.getElementById(id);
		}
		var target = 0,leader = 0;
				//	页面主体
		var cqp_zym = $("cqp_kj").getElementsByClassName("cqp_a");
		//	页面导航栏菜单
		var cqp_meau = $("cqp_meau").getElementsByTagName("li");
		//	小圆点
		var cqp_xyd = $("cqp_xyd").getElementsByTagName("li");
	    
	    var laye = $("cqp_laye").getElementsByTagName("li");
		var ydd = $("cqp_donghua").getElementsByTagName("li");
//		console.log(cqp_meau);
		for(var i = 0; i < cqp_meau.length; i++) {
			cqp_meau[i].index = i;
			cqp_xyd[i].index = i;
			cqp_meau[i].onclick = function() {
				
             var index=this.index;
            cqp_liandong(index);
           }
			cqp_xyd[i].onclick = function() {
				var index=this.index;
		}
	function i_fun1() {
			var i=0;
			var time1 = setInterval(function() {
					var a;
					if(i == 3) {
						i = 0;
						//		 排他思想 
						for(var j = 0; j < laye.length; j++) {
							laye[j].style.display = "none";
							ydd[j].style.background = "white";
						}
						ydd[i].style.background = "orange";
						laye[i].style.display = "block";
						laye[i + 3].style.display = "block";
						laye[i].style.animation = "yundong2 2s linear 0s 1";
						laye[i + 3].style.animation = "yundong1 2s linear 0s 1";
						var timeLast = setTimeout(function() {
							laye[i + 3].style.display = "none";
							clearTimeout(timeLast);
						}, 2000);
					} else {
						i = i + 1;
//						console.log(i);
						for(var j = 0; j < laye.length; j++) {
							laye[j].style.display = "none";
							ydd[j].style.background = "white";
						}
						ydd[i].style.background = "orange";
						laye[i].style.display = "block";
						laye[i - 1].style.display = "block";
						laye[i].style.animation = "yundong2 2s linear 0s 1";
						laye[i - 1].style.animation = "yundong1 2s linear 0s 1";
					}
//							小圆点点击事件
					for(var k = 0; k < ydd.length; k++) {
						ydd[k].index = k;
						ydd[k].onclick = function() {

							clearInterval(time1);
						  for(var n = 0; n < laye.length; n++) {
							    laye[n].style.display = "none";
								ydd[n].style.background = "white";
							}
						  if(this.index==0){
						  	ydd[0].style.background = "orange";
						  	laye[0].style.display = "block";
							laye[3].style.display = "block";
							laye[0].style.animation = "yundong2 2s linear 0s 1";
							laye[3].style.animation = "yundong1 2s linear 0s 1";
							var timeLast1 = setTimeout(function() {
							laye[3].style.display = "none";
							clearTimeout(timeLast1);
						}, 2000);
						}
						  else{
						    ydd[this.index].style.background = "orange";
							laye[this.index].style.display = "block";
							laye[this.index - 1].style.display = "block";
							laye[this.index].style.animation = "yundong2 2s linear 0s 1";
							laye[this.index - 1].style.animation = "yundong1 2s linear 0s 1";
							}
						i=this.index;
					    var timeLast2 = setTimeout(function() {
							i_fun1();
							clearTimeout(timeLast2);
						},5000);
						}
						
					}
                  }, 5000);
          }
		i_fun1();
}
		}
	