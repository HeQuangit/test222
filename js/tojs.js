        var $obj_ul = $(".box7_list").children();
		var numlen = $obj_ul.children().length;
		var btime= setInterval(leftb,3000);
		var numtime= 0;
		$obj_ul.children().clone().appendTo($obj_ul);
		function leftb(){
			clearInterval(btime)
			if(!$obj_ul.is(":animated")){
				//信号量没到最大：
				if(numtime < numlen - 1){
					numtime ++ ;	//信号量加1
					//拉到信号量的倍数上：
					$obj_ul.animate({"left":-483 * numtime+"px"},500);
				}else{
					//信号量到了最大，让信号量变为0
					numtime = 0;
					//先往猫腻上移动，然后瞬间移动到0
					$obj_ul.animate({"left":-483 * numlen+"px"},500,function(){
						$(this).css("left","0px");
					});
				}
			}
			btime = setInterval(leftb,3000);
		}
		//左按钮
		