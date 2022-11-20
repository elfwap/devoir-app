/*
 *@ File-Type : JavaScript Document
 *@ File-Name : equinox.js
 *@ copyright : elftech Inc. 2018.
 *@ Author : Muhammad Tahir Abdullahi
 */

(function(window){
	var
		document = window.document,
		navigator = window.navigator,
		location = window.location,
		body = document.body,
		toString = Object.prototype.toString,
		hasProp = Object.prototype.hasOwnProperty,
		concArr = Array.prototype.concat,
		push = Array.prototype.push,
		pop = Array.prototype.pop,
		unshift = Array.prototype.unshift,
		shift = Array.prototype.shift,
		slice = Array.prototype.slice,
		splice = Array.prototype.splice,
		trim = String.prototype.trim,
		indexOf = Array.prototype.indexOf;
	var extend;
	var timeout;
    var interval;
	var equinox = function(selector){
		if(selector == null || selector == undefined){
			return new init("selector");
		}
		return new init(selector);
	};
	function AjaxReq(){
		try{
			return new XMLHttpRequest();
		}catch (e){
			console.log(e);
			try{
				return new ActiveXObject("Msxml2.XMLHTTP");
			}catch (e) {
				console.log(e);
				try{
					return new ActiveXObject("Microsoft.XMLHTTP");
				}catch (e){
					console.error(e);
				}
			}
		}
	}
	/* initializer */
	function init(selector){
		try{
			var context, type, trimmed = equinoxs.trimSelector(selector);
			var forWhat, attr, base, single=0, many=1, none=2, elem=10, wind=11, obj=12, doc=13, arr=14, bod=15, xtra, xtraLen;
			if(equinoxs.isString(selector)){
				if(equinoxs.isUniversal(selector)){
					context = equinoxs.get0ByTag("*");
					type = many;
					forWhat = elem;
				}
				if(equinoxs.isId(selector)){
					context = equinoxs.getById(trimmed);
					type = single;
					forWhat = elem;
				}
				if(equinoxs.isClass(selector) || equinoxs.isClass(selector)[0]){
					xtra = equinoxs.get0ByClass(trimmed);
					xtraLen = xtra.length;
					if(equinoxs.contains(":", selector)){
						attr = equinoxs.cutOut(selector, equinoxs.indexOf(":", selector) + 1, selector.length);
						base = equinoxs.toNumberI(attr);
						if(equinoxs.isNumber(base)){
							context = equinoxs.get1ByClass(trimmed, base);
							type = single;
							forWhat = elem;
						}
						if(equinoxs.isNaN(base)){
							if(attr == "first"){
								context = equinoxs.get1ByClass(trimmed, 0);
								type = single;
								forWhat = elem;
							}
							if(attr == "middle" || attr == "center"){
								if(equinoxs.isOdd(xtraLen)){
									context = equinoxs.get1ByClass(trimmed, (Math.floor(xtraLen / 2)));
									type = single;
									forWhat = elem;
								}
								if(equinoxs.isEven(xtraLen)){
									context = [equinoxs.get1ByClass(trimmed, (xtraLen / 2) - 1), equinoxs.get1ByClass(trimmed, xtraLen / 2)];
									type = many;
									forWhat = elem;
								}
							}
							if(attr == "last"){
								context = equinoxs.get1ByClass(trimmed, (xtraLen - 1));
								type = single;
								forWhat = elem;
							}
							if(attr == "even" || attr == "evens"){
								context = [];
								for(var x = 0; x < xtraLen; x++){
									if(equinoxs.isOdd(x)){
										equinoxs.appendRArr(context, equinoxs.get1ByClass(trimmed, x));
									}
								}
								type = many;
								forWhat = elem;
							}
							if(attr == "odd" || attr == "odds"){
								context = [];
								for(var x = 0; x < xtraLen; x++){
									if(equinoxs.isEven(x)){
										equinoxs.appendRArr(context, equinoxs.get1ByClass(trimmed, x));
									}
								}
								type = many;
								forWhat = elem;
							}
						}
					}
					else{
						context = equinoxs.get0ByClass(trimmed);
						type = many;
						forWhat = elem;
					}
				}
				if(equinoxs.isHtmlTag(selector) || equinoxs.isTagName(selector)){
					xtra = equinoxs.get0ByTag(trimmed);
					xtraLen = xtra.length;
					if(equinoxs.contains(":", selector)){
						attr = equinoxs.cutOut(selector, equinoxs.indexOf(":", selector) + 1, selector.length);
						base = equinoxs.toNumberI(attr);
						if(equinoxs.isNumber(base)){
							context = equinoxs.get1ByTag(trimmed, base);
							type = single;
							forWhat = elem;
						}
						if(equinoxs.isNaN(base)){
							if(attr == "first"){
								context = equinoxs.get1ByTag(trimmed, 0);
								type = single;
								forWhat = elem;
							}
							if(attr == "middle" || attr == "center"){
								if(equinoxs.isOdd(xtraLen)){
									context = equinoxs.get1ByTag(trimmed, (Math.floor(xtraLen / 2)));
									type = single;
									forWhat = elem;
								}
								if(equinoxs.isEven(xtraLen)){
									context = [equinoxs.get1ByTag(trimmed, (xtraLen / 2) - 1), equinoxs.get1ByTag(trimmed, xtraLen / 2)];
									type = many;
									forWhat = elem;
								}
							}
							if(attr == "last"){
								context = equinoxs.get1ByTag(trimmed, (xtraLen - 1));
								type = single;
								forWhat = elem;
							}
							if(attr == "even" || attr == "evens"){
								context = [];
								for(var x = 0; x < xtraLen; x++){
									if(equinoxs.isOdd(x)){
										equinoxs.appendRArr(context, equinoxs.get1ByTag(trimmed, x));
									}
								}
								type = many;
								forWhat = elem;
							}
							if(attr == "odd" || attr == "odds"){
								context = [];
								for(var x = 0; x < xtraLen; x++){
									if(equinoxs.isEven(x)){
										equinoxs.appendRArr(context, equinoxs.get1ByTag(trimmed, x));
									}
								}
								type = many;
								forWhat = elem;
							}
						}
					}
					else{
						context = equinoxs.get0ByTag(trimmed);
						type = many;
						forWhat = elem;
					}
				}
				if(equinoxs.isName(selector)){
					xtra = equinoxs.get0ByTag(trimmed);
					xtraLen = xtra.length;
					if(equinoxs.contains(":", selector)){
						attr = equinoxs.cutOut(selector, equinoxs.indexOf(":", selector) + 1, selector.length);
						base = equinoxs.toNumberI(attr);
						if(equinoxs.isNumber(base)){
							context = equinoxs.get1ByName(trimmed, base);
							type = single;
							forWhat = elem;
						}
						if(equinoxs.isNaN(base)){
							if(attr == "first"){
								context = equinoxs.get1ByName(trimmed, 0);
								type = single;
								forWhat = elem;
							}
							if(attr == "middle" || attr == "center"){
								if(equinoxs.isOdd(xtraLen)){
									context = equinoxs.get1ByName(trimmed, (Math.floor(xtraLen / 2)));
									type = single;
									forWhat = elem;
								}
								if(equinoxs.isEven(xtraLen)){
									context = [equinoxs.get1ByName(trimmed, (xtraLen / 2) - 1), equinoxs.get1ByName(trimmed, xtraLen / 2)];
									type = many;
									forWhat = elem;
								}
							}
							if(attr == "last"){
								context = equinoxs.get1ByName(trimmed, (xtraLen - 1));
								type = single;
								forWhat = elem;
							}
							if(attr == "even" || attr == "evens"){
								context = [];
								for(var x = 0; x < xtraLen; x++){
									if(equinoxs.isOdd(x)){
										equinoxs.appendRArr(context, equinoxs.get1ByName(trimmed, x));
									}
								}
								type = many;
								forWhat = elem;
							}
							if(attr == "odd" || attr == "odds"){
								context = [];
								for(var x = 0; x < xtraLen; x++){
									if(equinoxs.isEven(x)){
										equinoxs.appendRArr(context, equinoxs.get1ByName(trimmed, x));
									}
								}
								type = many;
								forWhat = elem;
							}
						}
					}
					else{
						context = equinoxs.get0ByName(trimmed);
						type = many;
						forWhat = elem;
					}
				}
				if(equinoxs.isAttribute(selector)){
					xtra = equinoxs.get0ByAttr(trimmed);
					xtraLen = xtra.length;
					if(equinoxs.contains(":", selector)){
						attr = equinoxs.cutOut(selector, equinoxs.indexOf(":", selector) + 1, selector.length);
						base = equinoxs.toNumberI(attr);
						if(equinoxs.isNumber(base)){
							context = equinoxs.get1ByAttr(trimmed, base);
							type = single;
							forWhat = elem;
						}
						if(equinoxs.isNaN(base)){
							if(attr == "first"){
								context = equinoxs.get1ByAttr(trimmed, 0);
								type = single;
								forWhat = elem;
							}
							if(attr == "middle" || attr == "center"){
								if(equinoxs.isOdd(xtraLen)){
									context = equinoxs.get1ByAttr(trimmed, (Math.floor(xtraLen / 2)));
									type = single;
									forWhat = elem;
								}
								if(equinoxs.isEven(xtraLen)){
									context = [equinoxs.get1ByAttr(trimmed, (xtraLen / 2) - 1), equinoxs.get1ByAttr(trimmed, xtraLen / 2)];
									type = many;
									forWhat = elem;
								}
							}
							if(attr == "last"){
								context = equinoxs.get1ByAttr(trimmed, (xtraLen - 1));
								type = single;
								forWhat = elem;
							}
							if(attr == "even" || attr == "evens"){
								context = [];
								for(var x = 0; x < xtraLen; x++){
									if(equinoxs.isOdd(x)){
										equinoxs.appendRArr(context, equinoxs.get1ByAttr(trimmed, x));
									}
								}
								type = many;
								forWhat = elem;
							}
							if(attr == "odd" || attr == "odds"){
								context = [];
								for(var x = 0; x < xtraLen; x++){
									if(equinoxs.isEven(x)){
										equinoxs.appendRArr(context, equinoxs.get1ByAttr(trimmed, x));
									}
								}
								type = many;
								forWhat = elem;
							}
						}
					}
					else{
						context = equinoxs.get0ByAttr(trimmed);
						type = many;
						forWhat = elem;
					}
				}
			}
			if(selector == "body" || selector == body){
				context = body;
				type = single;
				forWhat = bod;
			}
			/* For Object */
			if(equinoxs.isObject(selector)){
				if(equinoxs.isEmptyObject(selector)){
					context = selector;
					type = none;
					forWhat = obj;
				}
				if(equinoxs.isHtmlObject(selector)){
					context = selector;
					type = none;
					forWhat = elem;
				}
			}
			/* For window */
			if(equinoxs.isWindow(selector)){
				context = selector;
				type = none;
				forWhat = wind;
			}
			if(equinoxs.isDoc(selector)){
				context = selector;
				type = none;
				forWhat = doc;
			}
			if(equinoxs.isArray(selector)){
				context = selector;
				type = none;
				forWhat = arr;
			}
		}catch(ex){
			console.error(ex);
		}
		/* event function */
		this.when = function(event,handler){
			var xi = event, ci = equinoxs.toNumberI(event);
			if(equinoxs.isNumber(ci)){
				return (timeout = setTimeout(handler, ci));
			}
			if(event == "ready" || equinoxs.toLCase(event) == "onready"){
				if(forWhat == wind){
					try{
						context.attachEvent("onload", handler);
					}catch(e){
						try{
							context.addEventListener("load", handler, false);
						}catch(e){
							console.error(e);
						}
					}
				}
				if(forWhat == doc){
					try{
						context.attachEvent("onreadystatechange", handler);
					}catch(e){
						try{
							context.addEventListener("DOMContentLoaded", handler, false);
						}catch(e){
							console.error(e);
						}
					}
				}
			}
			if(forWhat == doc && event == "DOMContentLoaded"){
				try{
					context.attachEvent("onreadystatechange", handler);
				}catch(e){
					try{
						context.addEventListener(event, handler, false);
					}catch(e){
						console.error(e);
					}
				}
			}
			if(forWhat == doc && (event == "onreadystatechange" || event == "readystatechange")){
				try{
					context.attachEvent("onreadystatechange", handler);
				}catch(e){
					try{
						context.addEventListener("DOMContentLoaded", handler, false);
					}catch(e){
						console.error(e);
					}
				}
			}
			if(equinoxs.contains("on", event) && equinoxs.cutOut(event, 0, 2) == "on" && equinoxs.not(event == "online")){

				if(forWhat == elem && type == many){
					try{
						var vx;
						for(vx = 0; vx < context.length; vx++){
							context[vx].attachEvent(xi, handler);
						}
					}catch(e){
						try{
							xi = equinoxs.cutOut(event, 2, event.length);
							for(vx = 0; vx < context.length; vx++){
								context[vx].addEventListener(xi, handler, false);
							}
						}catch(e){
							console.error(e);
						}
					}
				}
				else{
					try{
						context.attachEvent(xi, handler);
					}catch(e){
						try{
							xi = equinoxs.cutOut(event, 2, event.length);
							context.addEventListener(xi, handler, false);
						}catch(e){
							console.error(e);
						}
					}
				}
			}
			else{
				if(forWhat == elem && type == many){
					try{
						var vx;
						for(vx = 0; vx < context.length; vx++){
							context[vx].attachEvent("on" + xi, handler);
						}
					}catch(e){
						console.log(e);
						try{
							for(vx = 0; vx < context.length; vx++){
								context[vx].addEventListener(xi, handler, false);
							}
						}catch(e){
							console.error(e);
						}
					}
				}
				else{
					try{
						context.addEventListener(xi, handler, false);
					}catch(e){
						try{
							context.attachEvent("on" + xi, handler);
						}catch(e){
							console.error(e);
						}
					}
				}
			}
			return this;
		};
		this.after = function(event, handler){
			var vi = event, din = equinoxs.toNumberI(event);
			if(equinoxs.isNumber(din)){
				return (interval = setInterval(handler, din));
			}
		};
		this.stopTimer = function(){
			equinoxs.isSet(arguments[0]) ? clearTimeout(arguments[0]) : clearTimeout(interval);
			return this;
		};
		this.stopLooper = function(){
			equinoxs.isSet(arguments[0]) ? clearInterval(arguments[0]) : clearInterval(interval);
			return this;
		};
		this.whenReady = function(func){
			if(forWhat == doc){
				try{
					context.addEventListener("DOMContentLoaded", func, false);
				}catch(err){
					console.log(err);
					try{
						window.addEventListener("load", func, false);
					}catch(err){
						console.log(err);
						try{
							context.attachEvent("onreadystatechange", func);
						}catch(err){
							console.log(err);
							try{
								window.attachEvent("onload", func);
							}catch(err){
								console.error(err);
							}
							
						}
					}
				}
			}
			if(forWhat == wind){
				try{
					context.addEventListener("load", func, false);
				}catch(err){
					console.log(err);
					try{
						window.attachEvent("onload", func);
					}catch(err){
						console.error(err);
					}
				}
				
			}
			return this;
		};
		this.ajax = equinoxs.ajax;
		/* extension function [for use on objects] */
		this.extend = function(value){
			if(equinoxs.isObject(context)){
				return context.prototype = value;
			}
			if(equinoxs,isArray(context)){
				concArr.apply(context, value);
				return context;
			}
		};
		/* dimension functions */
		this.getHeight = function(){
			if(forWhat == wind){
				return window.innerHeight || window.outerHeight;
			}
			if(forWhat == doc){
				return document.documentElement.offsetHeight;
			}
			if(forWhat == bod){
				return document.body.offsetHeight;
			}
			if(forWhat == elem && type == single){
				return context.offsetHeight;
			}
			if(forWhat = elem && type == many){
				var c = [] || new Array();
				for(var d=0; d < context.length; d++){
					equinoxs.appendRArr(c, context[d].offsetHeight);
				}
				return c;
			}
		};
		this.getWidth = function(){
			if(forWhat == wind){
				return window.innerWidth || window.outerWidth;
			}
			if(forWhat == doc){
				return document.documentElement.offsetWidth;
			}
			if(forWhat == bod){
				return document.body.offsetWidth;
			}
			if(forWhat == elem && type == single){
				return context.offsetWidth;
			}
			if(forWhat = elem && type == many){
				var c = [] || new Array();
				for(var d=0; d < context.length; d++){
					equinoxs.appendRArr(c, context[d].offsetWidth);
				}
				return c;
			}
		};
		this.setHeight = function(value){
			var val = equinoxs.toNumberF(value);
			if(forWhat == wind){
				window.innerHeight = val + "px";
				window.outerHeight = val + "px";
			}
			if(forWhat == doc){
				document.documentElement.offsetHeight = val + "px";
			}
			if(forWhat == bod){
				document.body.offsetHeight = val + "px";
			}
			if(forWhat == elem && type == single){
				context.style.height = val + "px";
			}
			if(forWhat == elem && type == many){
				for(var c=0; c < context.length; c++){
					context[c].style.height = val + "px";
				}
			}
			return this;
		};
		this.setWidth = function(value){
			var val = equinoxs.toNumberF(value);
			if(forWhat == wind){
				window.innerWidth = val + "px";
				window.outerWidth = val + "px";
			}
			if(forWhat == doc){
				document.documentElement.offsetWidth = val + "px";
			}
			if(forWhat == bod){
				document.body.offsetWidth = val + "px";
			}
			if(forWhat == elem && type == single){
				context.style.width = val + "px";
			}
			if(forWhat == elem && type == many){
				for(var c=0; c < context.length; c++){
					context[c].style.width = val + "px";
				}
			}
			return this;
		};
		/* Position functions */
		this.getOffset = {
			x : function(){
				if(forWhat == doc){
					return context.documentElement.scrollLeft;
				}
				if(forWhat == wind){
					if(equinoxs.not(equinoxs.isUndefined(context.scrollX))) return context.scrollX;
					if(equinoxs.not(equinoxs.isUndefined(context.pageXOffset))) return context.pageXOffset;
				}
				if(forWhat == elem && type == single){
					return context.offsetLeft;
				}
				if(forWhat == elem && type == many){
					var x, y, z = [] || new Array();
					for(x = 0; x < context.length; x++){
						y = context[x];
						equinoxs.appendRArr(z, y.offsetLeft);
					}
					return z;
				}
			},
			y : function(){
				if(forWhat == doc){
					return context.documentElement.scrollTop;
				}
				if(forWhat == wind){
					if(equinoxs.not(equinoxs.isUndefined(context.scrollY))) return context.scrollY;
					if(equinoxs.not(equinoxs.isUndefined(context.pageYOffset))) return context.pageYOffset;
				}
				if(forWhat == elem && type == single){
					return context.offsetTop;
				}
				if(forWhat == elem && type == many){
					var x, y, z = [] || new Array();
					for(x = 0; x < context.length; x++){
						y = context[x];
						equinoxs.appendRArr(z, y.offsetTop);
					}
					return z;
				}
			}
		};
		this.setOffset = {
			x : function(value){
				if(forWhat == doc){
					document.documentElement.scrollLeft = value;
				}
				if(forWhat == wind){
					if(equinoxs.not(equinoxs.isUndefined(context.scrollX))) context.scrollX = value;
					if(equinoxs.not(equinoxs.isUndefined(context.pageXOffset))) context.pageXOffset = value;
				}
				if(forWhat == elem){
					this.setStyle({left : value + "px"});
				}
			},
			y : function(value){
				if(forWhat == doc){
					document.documentElement.scrollTop = value;
				}
				if(forWhat == wind){
					if(equinoxs.not(equinoxs.isUndefined(context.scrollY))) context.scrollY = value;
					if(equinoxs.not(equinoxs.isUndefined(context.pageYOffset))) context.pageYOffset = value;
				}
				if(forWhat == elem){
					this.setStyle({top : value + "px"});
				}
			}
		};
		/* inline CSS */
		this.setStyle = function(value){
			if(forWhat == bod || forWhat == elem){
				equinoxs.setStyle(context, value);
				return this;
			}
			return this;
		};
		this.getStyle = function(prop){
			return equinoxs.getStyle(context, prop);
		};
		/* HTML Attribute functions */
		this.getAttribute = function(attributeName){
			return equinoxs.getAttribute(context, attributeName);
		};
		this.setAttribute = function(attributeName,value){
			equinoxs.setAttribute(context, attributeName, value);
			return this;
		};
		/* HTML 'class' attribute functions */
		this.getClass = function(){
			return equinoxs.getClass(context);
		};
		this.setClass = function(className){
			equinoxs.setClass(context, className);
			return this;
		};
		this.addClass = function(className){
			equinoxs.addClass(context, className);
			return this;
		};
		this.replaceClass = function(oldClass,newClass){
			equinoxs.replaceClass(context, oldClass, newClass);
			return this;
		};
		this.removeClass = function(className){
			equinoxs.removeClass(context, className);
			return this;
		};
		/* CSS Functions */
		this.getCss = function(){
			return equinoxs.getCssTextBN(trimmed);
		};
		this.getCssRule = function(){
			return equinoxs.getRuleBySelector(trimmed);
		};
		this.getStyleSheets = window.eqnx__DOC_SS__ = document.styleSheets;
		this.setCss = function(value){
			equinoxs.setCss(trimmed, value);
			return this;
		};
		this.addCss = function(declaration){
			var args = arguments[1];
			if(equinoxs.not(equinoxs.isUndefined(args) || equinoxs.isNull(args))){
				if(equinoxs.isId(selector)) equinoxs.addCss("#" + trimmed, declaration, args);
				if(equinoxs.isClass(selector)) equinoxs.addCss("." + trimmed, declaration, args);
				if(equinoxs.isTagName(selector) || equinoxs.isHtmlTag(selector)) equinoxs.addCss(trimmed, declaration, args);
			}
			if(equinoxs.isUndefined(args) || equinoxs.isNull(args)){
				if(equinoxs.isId(selector)) equinoxs.addCss("#" + trimmed, declaration, 0);
				if(equinoxs.isClass(selector)) equinoxs.addCss("." + trimmed, declaration, 0);
				if(equinoxs.isTagName(selector) || equinoxs.isHtmlTag(selector)) equinoxs.addCss(trimmed, declaration, 0);
			}
			return this;
		};
		this.removeCss = function(){
			equinoxs.removeCss(trimmed);
			return this;
		};
		/* Animation Functions */
		var a, b, c, d, e, f, g, h, i, j, pi, qi, zi, yi;
		/* size expanding function */
		this.XpanX = function(to,duration){
			var t, args2, args3;
			args2 = arguments[2];
			args3 = arguments[3];
			if(type == many){
				if(equinoxs.isNotSet(args2)){
					a = this.getWidth()[0];
				}
				else{
					a = args2;
				}
			} 
			if(type == single){
				if(equinoxs.isNotSet(args2)){
					a = this.getWidth();
				}
				else{
					a = args2;
				}
			}
			if(to < a) equinoxs.error("InvalidArgumentException: set up width greater than original width");
			if(equinoxs.isNotSet(args3)){
				pi = (to - a);
			}
			else{
				pi = args3;
			}
			b = pi / 10;
			a += b;
			this.setWidth(a);
			t = setTimeout(function(){equinox(selector).XpanX(to, duration, a, pi);}, duration);
			if(a >= to){
				a = to;
				this.setWidth(a);
				clearTimeout(t);
			}
			return this;
		};
		this.XpanY = function(to,duration){
			var u, args2, args3;
			args2 = arguments[2];
			args3 = arguments[3];
			if(type == many){
				if(equinoxs.isUndefined(args2) || equinoxs.isNull(args2)){
					c = this.getHeight()[0];
				}
				else{
					c = args2;
				}
			} 
			if(type == single){
				if(equinoxs.isUndefined(args2) || equinoxs.isNull(args2)){
					c = this.getHeight();
				}
				else{
					c = args2;
				}
			}
			if(to < c) equinoxs.error("InvalidArgumentException: set up height greater than original width");
			if(equinoxs.isUndefined(args3) || equinoxs.isNull(args3)){
				qi = (to - c);
			}
			else{
				qi = args3;
			}
			d = to / 10;
			c += d;
			this.setHeight(c);
			u = setTimeout(function(){equinox(selector).XpanY(to, duration, c, qi);}, duration);
			if(c >= to){
				c = to;
				this.setHeight(c);
				clearTimeout(u);
			}
			return this;
		};
		this.XpanXY = function(to,duration){
			this.XpanX(to, duration).XpanY(to, duration);
			return this;
		};
		this.XpanYX = function(to,duration){
			this.XpanY(to, duration).XpanX(to, duration);
			return this;
		};
		/* size shrinking functions */
		this.relaX = function(to,duration){
			var v, args2, args3;
			args2 = arguments[2];
			args3 = arguments[3];
			if(type == many){
				if(equinoxs.isUndefined(args2) || equinoxs.isNull(args2)){
					e = this.getWidth()[0];
				}
				else{
					e = args2;
				}
			} 
			if(type == single){
				if(equinoxs.isUndefined(args2) || equinoxs.isNull(args2)){
					e = this.getWidth();
				}
				else{
					e = args2;
				}
			}
			if(to > e) equinoxs.error("InvalidArgumentException: set up width greater than original width");
			if(equinoxs.isUndefined(args3) || equinoxs.isNull(args3)){
				zi = (e - to);
			}
			else{
				zi = args3;
			}
			f = zi / 10;
			e -= f;
			this.setWidth(e);
			v = setTimeout(function(){equinox(selector).relaX(to, duration, e, zi);}, duration);
			if(e <= to){
				e = to;
				this.setWidth(e);
				clearTimeout(v);
			} 
			return this;
		};
		this.relaY = function(to,duration){
			var w, args2, args3;
			args2 = arguments[2];
			args3 = arguments[3];
			if(type == many){
				if(equinoxs.isUndefined(args2) || equinoxs.isNull(args2)){
					g = this.getHeight()[0];
				}
				else{
					g = args2;
				}
			}
			if(type == single){
				if(equinoxs.isUndefined(args2) || equinoxs.isNull(args2)){
					g = this.getHeight();
				}
				else{
					g = args2;
				}
			}
			if(to > g) equinoxs.error("InvalidArgumentException: set up height greater than original width");
			if(equinoxs.isUndefined(args3) || equinoxs.isNull(args3)){
				yi = (g - to);
			}
			else{
				yi = args3;
			}
			h = yi / 10;
			g -= h;
			this.setHeight(g);
			w = setTimeout(function(){equinox(selector).relaY(to, duration, g, yi);}, duration);
			if(g <= to){
				g = to;
				this.setHeight(g);
				clearTimeout(w);
			} 
			return this;
		};
		this.relaXY = function(to,duration){
			this.relaX(to, duration).relaY(to, duration);
			return this;
		};
		this.relaYX = function(to,duration){
			this.relaY(to, duration).relaX(to, duration);
			return this;
		};
		this.getElem = function(){
			return context;
		};
		this.getElems = function(){
			return xtra;
		};
		this.getElemsSize = function(){
			return xtraLen;
		};
		this.HTML = function(value){
			if(!(forWhat == elem)){
				equinoxs.error("applies to elements only");
			}
			if(type == single){
				context.innerHTML = value;
			}
			if(type == many){
				for(i=0; i < context.length; i++){
					context[i].innerHTML == value;
				}
			}
			return this;
		};
		this.moveX = function(to ,duration){
			
			return this;
		};
		
		
	}
	function get1Elem(_type, _name, _index){
		if(equinoxs.isNull(_type)){
			equinoxs.error("InvalidArgumentException: cannot work on null");
		}
		if(equinoxs.isNull(_name)){
			equinoxs.error("InvalidArgumentException: cannot work on null");
		}
		var a, b, c, d, e, f = [] || new Array();
		a = equinoxs.get0ByTag("*");
		for(b = 0; b < a.length; b++){
			c = a[b];
			d = c.nodeType;
			e = c.getAttribute(_type);
			if(d == 3) continue;
			if(equinoxs.isNotSet(e)) continue;
			if(e == _name){
				equinoxs.appendRArr(f, c);
			}
		}
		if(equinoxs.isNotSet(_index)){
			return f[0];
		}
		if(_index > f.length){
			equinoxs.error("InvalidLengthException: " + _index + " is greater than " + (f.length - 1));
		}
		return f[_index];
	}
	function get0Elem(_type, _name){
		if(equinoxs.isNull(_type)){
			equinoxs.error("InvalidArgumentException: cannot work on null");
		}
		if(equinoxs.isNull(_name)){
			equinoxs.error("InvalidArgumentException: cannot work on null");
		}
		var a, b, c, d, e, f = [] || new Array();
		a = equinoxs.get0ByTag("*");
		for(b = 0; b < a.length; b++){
			c = a[b];
			d = c.nodeType;
			e = c.getAttribute(_type);
			if(d == 3) continue;
			if(equinoxs.isNotSet(e)) continue;
			if(e == _name){
				equinoxs.appendRArr(f, c);
			}
			if(equinoxs.contains(_name, e)){
				equinoxs.appendRArr(f, c);
			}
		}
		return f;
	}
	var ajaxRequest = new AjaxReq();
	var equinoxs = {
		/* extracts Strings by two index ranges */
		cutOut : function(value,from,to){
			return value.substring(from, to);
		},
		/* Boolean: true checker */
		isTrue : function(value){
			return value == true;
		},
		/* Boolean: false checker */
		isFalse : function(value){
			return value == false;
		},
		/* Boolean: negative checker */
		not : function(value){
			return !value;
		},
		isSet : function(value){
			return equinoxs.not(equinoxs.isNull(value) || equinoxs.isUndefined(value));
		},
		isNotSet : function(value){
			return (equinoxs.isNull(value) || equinoxs.isUndefined(value));
		},
		/* type checker */
		typeOf : function(value){
			return typeof value;
		},
		/* instance checker */
		instanceOf : function(value ,asWhat){
			return value instanceof asWhat;
		},
		/* index checker */
		indexOf : function(value,inWhat){
			return inWhat.indexOf(value);
		},
		/* Boolean: Array checker */
		isArray : function(value){
			return equinoxs.instanceOf(value, Array);
		},
		/* Boolean: Boolean checker */
		isBoolean : function(value){
			return equinoxs.typeOf(value) === "boolean";
		},
		/* Boolean: function checker */
		isFunction :function(value){
			return equinoxs.typeOf(value) === "function";
		},
		/* Boolean: Number checker */
		isNumber : function(value){
			if(isNaN(value)){
				return false;
			}
			if(equinoxs.typeOf(value) === "number") return true;
			if(equinoxs.instanceOf(value, Number)) return true;
		},
		/* Boolean: Not-A-Number checker */
		isNaN : function(value){
			if(isNaN(value) || (equinoxs.not(equinoxs.isNumber(value)))){
				return true;
			}
			if(equinoxs.isNumber(value)){
				return false;
			}
		},
		/* parse value to floating point Number */
		toNumberF : function(value){
			return parseFloat(value);
		},
		/* parse value to Integral Number */
		toNumberI : function(value){
			return parseInt(value);
		},
		/* Boolean: even checker */
		isEven : function(value){
			return ((value % 2) == 0);
		},
		/* Boolean: odd checker */
		isOdd : function(value){
			return ((value % 2) == 1);
		},
		/* Boolean: Object checker */
		isObject : function(value){
			return (equinoxs.not(equinoxs.instanceOf(value, Array)) && (equinoxs.instanceOf(value, Object) || equinoxs.typeOf(value) === "object"));
		},
		/* Boolean: String checker */
		isString : function(value){
			return equinoxs.typeOf(value) === "string";
		},
		/* Boolean: 'undefined' checker */
		isUndefined : function(value){
			return (equinoxs.typeOf(value) === "undefined" || value == undefined);
		},

		toString : function(value){
			return toString.apply(value) || ("" + value + "");
		},
		isWindow :  function(value){
			if(equinoxs.isEmptyString(value) || equinoxs.isUndefined(value)){
				throw new Error("EmptyArgumentsException : argument is empty or undefined");
			}
			if(value == value.window || value == window){
				return true;
			}
			return false;
		},
		isDoc : function(value){
			if(equinoxs.isEmptyString(value) || equinoxs.isUndefined(value)){
				throw new Error("EmptyArgumentsException : argument is empty or undefined");
			}
			return equinoxs.isTrue(value == document);
		},
		contains : function(value,inWhat){
			var em = equinoxs.typeOf(inWhat);
			if(em === "string"){
				if(equinoxs.indexOf(value, inWhat) >= 0){
					return true;
				}
			}
			if(equinoxs.instanceOf(inWhat, Array)){
				for(var x=0; x < inWhat.length; x++){
					if((value == inWhat[x]) || (indexOf.call(inWhat, value)) >= 0){
						return true;
					}
				}
			}
			if(equinoxs.isObject(inWhat) && equinoxs.not(equinoxs.isArray(inWhat))){
				for(var things in inWhat){
					if(value == things){
						return true;
					}
				}
			}
			return false;
		},
		isHtmlObject : function(value){
			return (equinoxs.isObject(value) && equinoxs.isTrue(value.nodeType));
		},
		isEmptyObject : function(value){
			for(var things in value){
				return false;
			}
			return true;
		},
		isEmptyArray : function(value){
			if(value.length <= 0){
				return true;
			}
			else{
				return false;
			}
		},
		isNull : function(value){
			return value == null;
		},
		isEmptyString : function(value){
			if(equinoxs.isUndefined(value)){
				throw new Error("InvalidArgumentsException : argument is undefined not empty");
			}
			return value == "";
		},
		toUCase : function(value){
			if(equinoxs.isEmptyString(value) || equinoxs.isUndefined(value)){
				throw new Error("EmptyArgumentsException : argument is empty or undefined");
			}
			return value.toUpperCase();
		},
		toLCase : function(value){
			if(equinoxs.isEmptyString(value) || equinoxs.isUndefined(value)){
				throw new Error("EmptyArgumentsException : argument is empty or undefined");
			}
			return value.toLowerCase();
		},
		toCamelCase : function(value){
			if(equinoxs.isEmptyString(value) || equinoxs.isUndefined(value)){
				throw new Error("EmptyArgumentsException : argument is empty or undefined");
			}
			var dashed=false, coloned=false, i, j, comp="";
			for(i = 0;i <= value.length;i++){
				j = value.substring(i, i + 1);
				if(j == "-"){
					dashed = true;
					continue;
				}
				if(j == ":"){
					coloned = true;
					continue;
				}
				if(j == " ") continue;
				if(j == ";") continue;
				if(dashed == true){
					j = equinoxs.toUCase(j);
					dashed = false;
				}
				if(coloned == true){
					j = "=\"" + j;
					coloned = false;
				}
				if(i == value.length){
					j = "\";";
				}
				comp += j;
			}
			return comp;
		},
		prefixId : "@#",
		prefixClass : "@%",
		prefixName : "@$",
		prefixAttr : "@?",
		prefixTagName : "@&",
		universal : "@@",
		isId : function(value){
			if(equinoxs.isEmptyString(value) || equinoxs.isUndefined(value)){
				throw new Error("EmptyArgumentsException : argument is empty or undefined");
			}
			if(equinoxs.isString(value) && (value.substring(0, 2) == equinoxs.prefixId || value.substring(0, 1) == "#") && (value.length >= 2)){
				return true;
			}
			else{
				return false;
			}
		},
		isClass: function(value){
			if(equinoxs.isEmptyString(value) || equinoxs.isUndefined(value)){
				equinoxs.error("EmptyArgumentsException : argument is empty or undefined");
			}
			if(equinoxs.isString(value) && (value.substring(0, 2) == equinoxs.prefixClass || value.substring(0, 1) == ".") && (value.length >= 2)){
				return true;
			}
			return false;
		},
		isName : function(value){
			if(equinoxs.isEmptyString(value) || equinoxs.isUndefined(value)){
				equinoxs.error("EmptyArgumentsException : argument is empty or undefined");
			}
			if(equinoxs.isString(value) && (value.substring(0, 2) == equinoxs.prefixName) && (value.length >= 3)){
				return true;
			}
			return false;
		},
		isTagName : function(value){
			if(equinoxs.isEmptyString(value) || equinoxs.isUndefined(value) && (value.length >= 3)){
				equinoxs.error("EmptyArgumentsException : argument is empty or undefined");
			}
			if(equinoxs.isString(value) && (value.substring(0, 2) == equinoxs.prefixTagName)){
				return true;
			}
			return false;
		},
		isHtmlTag : function(value){
			if(equinoxs.isEmptyString(value) || equinoxs.isUndefined(value)){
				equinoxs.error("EmptyArgumentsException : argument is empty or undefined");
			}
			if(equinoxs.isString(value) && (value.charAt(0) == "<") && (equinoxs.indexOf(">", value) > 0) && (value.length >= 3)){
				return true;
			}
			return false;
		},
		isAttribute : function(value){
			if(equinoxs.isEmptyString(value) || equinoxs.isUndefined(value) && (value.length >= 3)){
				equinoxs.error("EmptyArgumentsException : argument is empty or undefined");
			}
			if(equinoxs.isString(value) && (value.substring(0, 2) == equinoxs.prefixAttr)){
				return true;
			}
			return false;
		},
		/* Boolean: universal selector checker */
		isUniversal : function(value){
			if(equinoxs.isEmptyString(value) || equinoxs.isUndefined(value) && (value.length >= 3)){
				equinoxs.error("EmptyArgumentsException : argument is empty or undefined");
			}
			if(equinoxs.isString(value) && (value == equinoxs.universal || value.substring(0, 1) == "*")){
				return true;
			}
			return false;
		},
		/* FIFO first in (queue) */
		appendLArr : function(arrayName,value){
			unshift.call(arrayName, value);
			return arrayName;
		},
		/* LIFO last in (stack) */
		appendRArr : function(arrayName,value){
			push.call(arrayName, value);
			return arrayName;
		},
		/* FIFO first out (dequeue) */
		deductLArr : function(arrayName){
			shift.call(arrayName);
			return arrayName;
		},
		/* LIFO last out (un-stack) */
		deductRArr : function(arrayName){
			pop.call(arrayName);
			return arrayName;
		},
		concArr : function(arrayN1,arrayN2){
			return concArr.apply(arrayN1, arrayN2);
		},
		concStr : function(valueN1,valueN2){
			return (valueN1 + "" + valueN2);
		},
		trimSelector : function(value){
			if(equinoxs.not(equinoxs.isNull(value))){
				var final="", sub, re = /[0-9]/g;
				for(var things=0; things < value.length; things++){
					sub = value[things] || value.substring(things, things + 1);
					if(sub == "@") continue;
					if(sub == "#") continue;
					if(sub == "$") continue;
					if(sub == "&") continue;
					if(sub == "-") continue;
					if(sub == ":") break;
					if(sub == "+") continue;
					if(sub == "%") continue;
					if(sub == "?") continue;
					if(sub == "<") continue;
					if(sub == ">") continue;
					if(sub == ".") continue;
					final += sub;
				}
				return final;
			}
		},
		getById : function(idName){
			if(equinoxs.isNull(idName)){
				equinoxs.error("InvalidArgumentException: cannot work on null (idd)");
			}
			else{
				return document.getElementById(idName);
			}
		},
		get1ByTag : function(tagName,index){
			if(equinoxs.isNull(tagName || index)){
				equinoxs.error("InvalidArgumentException: cannot work on null (tgn1)");
			}
			return document.getElementsByTagName(tagName)[index] || document.all(tagName)[index];
		},
		get0ByTag : function(tagName){
			if(equinoxs.isNull(tagName)){
				equinoxs.error("InvalidArgumentException: cannot work on null (tgn)");
			}
			return document.getElementsByTagName(tagName) || document.all(tagName);
		},
		get1ByClass : function(className, index){
			return get1Elem("class", className, index);
		},
		get0ByClass : function(className){
			return get0Elem("class", className);
		},
		get0ByName : function(nameSpace){
			return get0Elem("name", nameSpace);
		},
		get1ByName : function(nameSpace, index){
			return get1Elem("name", nameSpace, index);
		},
		get1ByAttr : function(attribute,index){
			if(equinoxs.isNull(attribute)){
				equinoxs.error("InvalidArgumentException: cannot work on null (attr1)");
			}
			var a, b, c, d, e, f = [] || new Array();
			a = equinoxs.get0ByTag("*");
			for(b = 0; b < a.length; b++){
				c = a[b];
				d = c.nodeType;
				e = c.getAttribute(attribute);
				if(d == 3) continue;
				if(equinoxs.isNotSet(e)) continue;
				if(e){
					equinoxs.appendRArr(f, c);
				}
			}
			if(equinoxs.isNotSet(index)){
				return f[0];
			}
			if(index > f.length){
				equinoxs.error("InvalidLengthException: " + index + " is greater than " + (f.length - 1));
			}
			return f[index];
		},
		get0ByAttr : function(attribute){
			if(equinoxs.isNull(attribute)){
				equinoxs.error("InvalidArgumentException: cannot work on null (attr)");
			}
			var a, b, c, d, e, f = [] || new Array();
			a = equinoxs.get0ByTag("*");
			for(b = 0; b < a.length; b++){
				c = a[b];
				d = c.nodeType;
				e = c.getAttribute(attribute);
				if(d == 3) continue;
				if(equinoxs.isNotSet(e)) continue;
				if(e){
					equinoxs.appendRArr(f, c);
				}
			}
			return f;
		},
		error : function(value){
			throw new Error(value);
		},
		ajax : {
			init : function(){
				xargs = arguments[0];
				ajaxRequest = new AjaxReq();
				if(equinoxs.typeOf(xargs) === "function"){
					ajaxRequest.onreadystatechange = function(){
						xargs(ajaxRequest.readyState, ajaxRequest.status);
					};
				}
			},
			header : function(prop){
				var val = arguments[1];
				if(val == undefined){
					return ajaxRequest.getResponseHeader(prop);
				}
				if((val == undefined) && (prop == undefined)){
					return ajaxRequest.getAllResponseHeaders;
				}
				if(!(val == undefined)){
					ajaxRequest.setRequestHeader(prop, val);
				}
				return equinoxs.ajax;
			},
			ready : function(callback){
				if(equinoxs.not(equinoxs.isUndefined(callback)) && equinoxs.typeOf(callback) === "function"){
					ajaxRequest.onreadystatechange = function(){
						callback(ajaxRequest.readyState);
					};
				}
				if(equinoxs.isUndefined(callback)){
					return ajaxRequest.readyState;
				}
				return equinoxs.ajax;
			},
			status : function(callback){
				if(equinoxs.not(equinoxs.isUndefined(callback)) && equinoxs.typeOf(callback) === "function"){
					ajaxRequest.onreadystatechange = function(){
						callback(ajaxRequest.status);
					};
				}
				if(equinoxs.isUndefined(callback)){
					return ajaxRequest.status;
				}
				return equinoxs.ajax;
			},
			open : function(url, method){
				async = arguments[2];
				uname = arguments[3];
				upass = arguments[4];
				if(equinoxs.isUndefined(async) && equinoxs.isUndefined(uname) && equinoxs.isUndefined(upass)){
					ajaxRequest.open(method, url);
				}
				if(equinoxs.not(equinoxs.isUndefined(async))){
					ajaxRequest.open(method, url, async);
				}
				if(equinoxs.not(equinoxs.isUndefined(uname))){
					ajaxRequest.open(method, url, async, uname);
				}
				if(equinoxs.not(equinoxs.isUndefined(upass))){
					ajaxRequest.open(method, url, async, uname, upass);
				}
				return equinoxs.ajax;
			},
			send : function(data){
				ajaxRequest.send(data);
				return equinoxs.ajax;
			},
			response : function(_type){
				_type = equinoxs.toLCase(_type);
				if(_type == "txt" || _type == "text"){
					return (ajaxRequest.responseText);
				}
				if(_type == "xml"){
					return (ajaxRequest.responseXML);
				}
			},
			getObject : function(){
				return ajaxRequest;
			}
			
		},
		getStyleSheet: function(index){
			return document.styleSheets[index];
		},
		getRuleByIndex : function(ssIndex,rlIndex){
			var x = this.getStyleSheet(ssIndex), y;
			if(x.cssRules) y = x.cssRules[rlIndex];
			if(x.rules) y = x.rules[rlIndex];
			return y;
		},
		getRuleBySelector : function(selector){
			var a, b, c, d, x, y, z;
			a = document.styleSheets;
			for(x = 0; x < a.length; x++){
				b = a[x];
				if(b.cssRules) c = b.cssRules;
				if(b.rules) c = b.rules;
				for(y = 0; y < c.length; y++){
					d = c[y];
					z = d.selectorText;
					if(this.contains(selector, z)){
						return d;
					}
				}
			}
		},
		getCssTextBI : function(ssIndex,rlIndex){
			var x = this.getRuleByIndex(ssIndex, rlIndex);
			return x.cssText;
		},
		getCssTextBN : function(selector){
			var x = this.getRuleBySelector(selector);
			return x.cssText;
		},
		setCss : function(selector,value){
			var x, things;
			x = this.getRuleBySelector(selector);
			if(equinoxs.isString(value)) eval("x.style." + equinoxs.toCamelCase(value));
			if(equinoxs.isObject(value) && equinoxs.not(equinoxs.isEmptyObject(value))){
				for(things in value){
					eval("x.style." + equinoxs.toCamelCase(things + ":" + eval("value." + things)));
				}
			}
			return this;
		},
		addCss : function(selector,declaration,index){
			var x;
			x = this.getStyleSheet(0);
			if(this.isUndefined(index) || this.isNull(index)){
				if(x.addRule) x.addRule(selector, declaration, document.styleSheets.length - 1);
				if(x.insertRule) x.insertRule(selector + "{" + declaration + ";}", document.styleSheets.length - 1);
			}
			else{
				if(x.addRule) x.addRule(selector, declaration, index);
				if(x.insertRule) x.insertRule(selector + "{" + declaration + ";}", index);
			}
			return this;		
		},
		removeCss : function(index,ssIndex){
			var a, b, c, d, x, y, z;
			if(this.isUndefined(ssIndex) || this.isNull(ssIndex)){
				a = this.getStyleSheet(0);
				if(equinoxs.isNumber(equinoxs.toNumberI(index))){
					if(a.removeRule) a.removeRule(equinoxs.toNumberI(index));
					if(a.deleteRule) a.deleteRule(equinoxs.toNumberI(index));
				}
				if(equinoxs.isString(index) && equinoxs.isNaN(equinoxs.toNumberI(index))){
					for(x = 0; x < document.styleSheets.length; x++){
						y = this.getStyleSheet(x);
						if(y.rules) b = y.rules;
						if(y.cssRules) b = y.cssRules;
						for(c = 0; c < b.length; c++){
							d = b[c];
							if(this.contains(index, d.selectorText)){
								if(y.removeRule) y.removeRule(c);
								if(y.deleteRule) y.deleteRule(c);
							}
						}
					}
				}
			}
			else{
				a = this.getStyleSheet(ssIndex);
				if(equinoxs.isNumber(equinoxs.toNumberI(index))){
					if(a.removeRule) a.removeRule(equinoxs.toNumberI(index));
					if(a.deleteRule) a.deleteRule(equinoxs.toNumberI(index));
				}
				if(equinoxs.isString(index) && equinoxs.isNaN(equinoxs.toNumberI(index))){
					for(x = 0; x < document.styleSheets.length; x++){
						y = this.getStyleSheet(x);
						if(y.rules) b = y.rules;
						if(y.cssRules) b = y.cssRules;
						for(c = 0; c < b.length; c++){
							d = b[c];
							if(this.contains(index, d.selectorText)){
								if(y.removeRule) y.removeRule(c);
								if(y.deleteRule) y.deleteRule(c);
							}
						}
					}
				}
			}
			return this;
		},
		getStyle : function(context,props){
			var a, b = [] || new Array();
			if(this.isHtmlObject(context)) return eval("context.style." + props);
			if(this.isArray(context)){
				for(a = 0; a < context.length; a++){
					equinoxs.appendRArr(b, eval("context[a].style." + props));
				}
				return b;
			}
		},
		setStyle : function(context,value){
			var x, y, z, things, a;
			if(equinoxs.isString(value)){
				if(this.isHtmlObject(context)) eval("context.style." + equinoxs.toCamelCase(value));
				if(this.isArray(context)){
					for(a = 0; a < context.length; a++){
						eval("context[a].style." + equinoxs.toCamelCase(value));
					}
				} 
			}
			if(equinoxs.isObject(value) && equinoxs.not(equinoxs.isEmptyObject(value))){
				for(things in value){
					if(this.isHtmlObject(context)) eval("context.style." + equinoxs.toCamelCase(things + ":" + eval("value." + things)));
					if(this.isArray(context)){
						for(a = 0; a < context.length; a++){
							eval("context[a].style." + equinoxs.toCamelCase(things + ":" + eval("value." + things)));
						}
					}
				}
			}
		},
		getAttribute : function(context,attributeName){
			var x, y = [] || new Array();
			if(this.isHtmlObject(context)){
				return context.getAttribute(attributeName);
			}
			if(this.isArray(context) && this.not(this.isEmptyArray(context))){
				for(x = 0; x < context.length; x++){
					this.appendRArr(y, context[x].getAttribute(attributeName));
				}
				return y;
			}
		},
		setAttribute : function(context,attributeName,value){
			if(this.isHtmlObject(context)){
				context.setAttribute(attributeName, value);
			}
			if(this.isArray(context) && this.not(this.isEmptyArray(context))){
				for(var x=0; x < context.length; x++){
					context[x].setAttribute(attributeName, value);
				}
			}
		},
		getClass : function(context){
			return this.getAttribute(context, "class");
		},
		setClass : function(context,className){
			this.setAttribute(context, "class", className);
		},
		addClass : function(context,className){
			var x;
			x = this.getClass(context);
			if(this.contains(className + " ", x) || this.contains(" " + className, x) || className == x) console.log("class exists");
			if(this.not(this.contains(className + " ", x) || this.contains(" " + className, x) || className == x)) this.setClass(context, x + " " + className);
		},
		replaceClass : function(context,classNameN1,classNameN2){
			var x, y, z;
			x = this.getClass(context);
			if(this.contains(classNameN1 + " ", x) || this.contains(" " + classNameN1, x) || classNameN1 == x){
				y = new RegExp(classNameN1, "g");
				z = x.replace(y, classNameN2);
				this.setClass(context, z);
			}
			if(this.not(this.contains(classNameN1 + " ", x) || this.contains(" " + classNameN1, x) || classNameN1 == x)) console.log("class not found");
		},
		removeClass : function(context,className){
			var x;
			x = this.getClass(context);
			this.replaceClass(context, className, "\b");
		}
	};
	try{
		window.equinox = window.eqnx = equinox;
		window.equinoxs = window.eqnxs = equinoxs;
		extend = window.equinox.extend = window.eqnx.extend = function(e){
			return init.prototype = e;
		};
	}catch(ex){
		console.error(ex);
	}
})(window);
