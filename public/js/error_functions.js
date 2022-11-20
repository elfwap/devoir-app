try{
	emb(document).whenReady(function(){
		emb(window).whenReady(function(){
			screenConfig();
			onResize(document, screenConfig);
			onResize(window, screenConfig);
		});
	});
}
catch(e){
	console.error(e);
}
function screenConfig(){
	try{
		(emblems.isSet(emb(window).getWidth())) ? (offWidth = emb(window).getWidth()) : (emblems.isSet(emb(document).getWidth())) ? (offWidth = emb(document).getWidth()) : (offWidth=0);
		(emblems.isSet(emb(window).getHeight())) ? (offHeight = emb(window).getHeight()) : (emblems.isSet(emb(document).getHeight())) ? (offHeight = emb(document).getHeight()) : (offHeight=0);
		offHeight = emblems.toNumberF(offHeight);
		offWidth = emblems.toNumberF(offWidth);
		if(offWidth <= 360){
			emb("@#container").setStyle({width : "80%", left : "10%"});
		}
		if(offWidth > 360 && offWidth <= 720){
			emb("@#container").setStyle({width : "75%", left : "12.5%"});
		}
		if(offWidth > 720){
			emb("@#container").setStyle({width : "50%", left : "25%"});
		}
	}
	catch(e){
		console.error(e);
	}
}
function onScroll(which,code){
	emb(which).when("scroll", code);
}
function onResize(which, code){
	emb(which).when("resize", code);
}
function onFocus(which, code){
	emb(which).when("focus", code);
}