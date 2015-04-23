/*!
* TableSorter 2.5.2 min - Client-side table sorting with ease!
* Copyright (c) 2007 Christian Bach
*/
!function(f){f.extend({tablesorter:new function(){function d(c){"undefined"!==typeof console&&"undefined"!==typeof console.log?console.log(c):alert(c)}function u(c,b){d(c+" ("+((new Date).getTime()-b.getTime())+"ms)")}function n(c,b,a){if(!b)return"";var g=c.config,h=g.textExtraction,e="",e="simple"===h?g.supportsTextContent?b.textContent:f(b).text():"function"===typeof h?h(b,c,a):"object"===typeof h&&h.hasOwnProperty(a)?h[a](b,c,a):g.supportsTextContent?b.textContent:f(b).text();return f.trim(e)} function i(c){var b=c.config,a=f(c.tBodies).filter(":not(."+b.cssInfoBlock+")"),g,h,s,j,l,k,m="";if(0!==a.length){a=a[0].rows;if(a[0]){g=[];h=a[0].cells.length;for(s=0;s<h;s++){j=b.$headers.filter(":not([colspan])");j=j.add(b.$headers.filter('[colspan="1"]')).filter('[data-column="'+s+'"]:last');l=b.headers[s];k=e.getParserById(e.getData(j,l,"sorter"));b.empties[s]=e.getData(j,l,"empty")||b.emptyTo||(b.emptyToBottom?"bottom":"top");b.strings[s]=e.getData(j,l,"string")||b.stringTo||"max";if(!k)a:{j= c;l=a;k=-1;for(var u=s,q=void 0,r=e.parsers.length,x=!1,p="",q=!0;""===p&&q;)k++,l[k]?(x=l[k].cells[u],p=n(j,x,u),j.config.debug&&d("Checking if value was empty on row "+k+", column: "+u+": "+p)):q=!1;for(q=1;q<r;q++)if(e.parsers[q].is(p,j,x)){k=e.parsers[q];break a}k=e.parsers[0]}b.debug&&(m+="column:"+s+"; parser:"+k.id+"; string:"+b.strings[s]+"; empty: "+b.empties[s]+"\n");g.push(k)}}b.debug&&d(m);return g}}function p(c){var b=c.tBodies,a=c.config,g,h,d=a.parsers,j,l,k,m,i,q,p,x=[];a.cache={}; a.debug&&(p=new Date);a.showProcessing&&e.isProcessing(c,!0);for(m=0;m<b.length;m++)if(a.cache[m]={row:[],normalized:[]},!f(b[m]).hasClass(a.cssInfoBlock)){g=b[m]&&b[m].rows.length||0;h=b[m].rows[0]&&b[m].rows[0].cells.length||0;for(l=0;l<g;++l)if(i=f(b[m].rows[l]),q=[],i.hasClass(a.cssChildRow))a.cache[m].row[a.cache[m].row.length-1]=a.cache[m].row[a.cache[m].row.length-1].add(i);else{a.cache[m].row.push(i);for(k=0;k<h;++k)if(j=n(c,i[0].cells[k],k),j=d[k].format(j,c,i[0].cells[k],k),q.push(j),"numeric"=== (d[k].type||"").toLowerCase())x[k]=Math.max(Math.abs(j),x[k]||0);q.push(a.cache[m].normalized.length);a.cache[m].normalized.push(q)}a.cache[m].colMax=x}a.showProcessing&&e.isProcessing(c);a.debug&&u("Building cache for "+g+" rows",p)}function r(c,b){var a=c.config,g=c.tBodies,h=[],d=a.cache,j,l,k,m,i,q,n,p,r,t,v;a.debug&&(v=new Date);for(p=0;p<g.length;p++)if(j=f(g[p]),!j.hasClass(a.cssInfoBlock)){i=e.processTbody(c,j,!0);j=d[p].row;l=d[p].normalized;m=(k=l.length)?l[0].length-1:0;for(q=0;q<k;q++)if(t= l[q][m],h.push(j[t]),!a.appender||!a.removeRows){r=j[t].length;for(n=0;n<r;n++)i.append(j[t][n])}e.processTbody(c,i,!1)}a.appender&&a.appender(c,h);a.debug&&u("Rebuilt table",v);b||e.applyWidget(c);f(c).trigger("sortEnd",c)}function B(c){var b,a,g,h=c.config,e=h.sortList,d=[h.cssAsc,h.cssDesc],l=f(c).find("tfoot tr").children().removeClass(d.join(" "));h.$headers.removeClass(d.join(" "));g=e.length;for(b=0;b<g;b++)if(2!==e[b][1]&&(c=h.$headers.not(".sorter-false").filter('[data-column="'+e[b][0]+ '"]'+(1===g?":last":"")),c.length))for(a=0;a<c.length;a++)c[a].sortDisabled||(c.eq(a).addClass(d[e[b][1]]),l.length&&l.filter('[data-column="'+e[b][0]+'"]').eq(a).addClass(d[e[b][1]]))}function D(c){var b=0,a=c.config,g=a.sortList,h=g.length,e=c.tBodies.length,d,l,k,m,i,q,n,p,r;a.debug&&(d=new Date);for(k=0;k<e;k++)i=a.cache[k].colMax,r=(q=a.cache[k].normalized)&&q[0]?q[0].length-1:0,q.sort(function(e,d){for(l=0;l<h;l++){m=g[l][0];p=g[l][1];n=/n/i.test(a.parsers&&a.parsers[m]?a.parsers[m].type||"": "")?"Numeric":"Text";n+=0===p?"":"Desc";/Numeric/.test(n)&&a.strings[m]&&(b="boolean"===typeof a.string[a.strings[m]]?(0===p?1:-1)*(a.string[a.strings[m]]?-1:1):a.strings[m]?a.string[a.strings[m]]||0:0);var j=f.tablesorter["sort"+n](c,e[m],d[m],m,i[m],b);if(j)return j}return e[r]-d[r]});a.debug&&u("Sorting on "+g.toString()+" and dir "+p+" time",d)}function C(c,b){c.trigger("updateComplete");"function"===typeof b&&b(c[0])}function E(c,b,a){!1!==b?c.trigger("sorton",[c[0].config.sortList,function(){C(c, a)}]):C(c,a)}var e=this;e.version="2.5.2";e.parsers=[];e.widgets=[];e.defaults={theme:"default",widthFixed:!1,showProcessing:!1,cancelSelection:!0,dateFormat:"mmddyyyy",sortMultiSortKey:"shiftKey",usNumberFormat:!0,delayInit:!1,headers:{},ignoreCase:!0,sortForce:null,sortList:[],sortAppend:null,sortInitialOrder:"asc",sortLocaleCompare:!1,sortReset:!1,sortRestart:!1,emptyTo:"bottom",stringTo:"max",textExtraction:"simple",textSorter:null,widgets:[],widgetOptions:{zebra:["even","odd"]},initWidgets:!0, initialized:null,onRenderHeader:null,tableClass:"tablesorter",cssAsc:"tablesorter-headerAsc",cssChildRow:"tablesorter-childRow",cssDesc:"tablesorter-headerDesc",cssHeader:"tablesorter-header",cssHeaderRow:"tablesorter-headerRow",cssIcon:"tablesorter-icon",cssInfoBlock:"tablesorter-infoOnly",cssProcessing:"tablesorter-processing",selectorHeaders:"> thead th, > thead td",selectorSort:"th, td",selectorRemove:".remove-me",debug:!1,headerList:[],empties:{},strings:{},parsers:[]};e.benchmark=u;e.construct= function(c){return this.each(function(){if(this.tHead&&!(0===this.tBodies.length||!0===this.hasInitialized)){var b=f(this),a,g,h,s="",j,l,k,m,C=f.metadata;this.hasInitialized=!1;this.config={};a=f.extend(!0,this.config,e.defaults,c);f.data(this,"tablesorter",a);a.debug&&f.data(this,"startoveralltimer",new Date);a.supportsTextContent="x"===f("<span>x</span>")[0].textContent;a.supportsDataObject=1.4<=parseFloat(f.fn.jquery);a.string={max:1,min:-1,"max+":1,"max-":-1,zero:0,none:0,"null":0,top:!0,bottom:!1}; /tablesorter\-/.test(b.attr("class"))||(s=""!==a.theme?" tablesorter-"+a.theme:"");b.addClass(a.tableClass+s);var q=[],M={},x=f(this).find("thead:eq(0) tr, tfoot tr"),H,I,v,y,L,A,J,N,O,F;for(H=0;H<x.length;H++){L=x[H].cells;for(I=0;I<L.length;I++){y=L[I];A=y.parentNode.rowIndex;J=A+"-"+y.cellIndex;N=y.rowSpan||1;O=y.colSpan||1;"undefined"===typeof q[A]&&(q[A]=[]);for(v=0;v<q[A].length+1;v++)if("undefined"===typeof q[A][v]){F=v;break}M[J]=F;f(y).attr({"data-column":F});for(v=A;v<A+N;v++){"undefined"=== typeof q[v]&&(q[v]=[]);J=q[v];for(y=F;y<F+O;y++)J[y]="x"}}}var K,z,P,G,Q,w=this.config;w.headerList=[];w.debug&&(Q=new Date);q=f(this).find(w.selectorHeaders).each(function(a){z=f(this);K=w.headers[a];P=w.cssIcon?'<i class="'+w.cssIcon+'"></i>':"";this.innerHTML='<div class="tablesorter-header-inner">'+this.innerHTML+P+"</div>";w.onRenderHeader&&w.onRenderHeader.apply(z,[a]);this.column=M[this.parentNode.rowIndex+"-"+this.cellIndex];var b=e.getData(z,K,"sortInitialOrder")||w.sortInitialOrder;this.order= /^d/i.test(b)||1===b?[1,0,2]:[0,1,2];this.count=-1;"false"===e.getData(z,K,"sorter")?(this.sortDisabled=!0,z.addClass("sorter-false")):z.removeClass("sorter-false");this.lockedOrder=!1;G=e.getData(z,K,"lockedOrder")||!1;"undefined"!==typeof G&&!1!==G&&(this.order=this.lockedOrder=/^d/i.test(G)||1===G?[1,1,1]:[0,0,0]);z.addClass((this.sortDisabled?"sorter-false ":" ")+w.cssHeader);w.headerList[a]=this;z.parent().addClass(w.cssHeaderRow)});this.config.debug&&(u("Built headers:",Q),d(q));a.$headers= q;a.parsers=i(this);a.delayInit||p(this);a.$headers.find("*").andSelf().filter(a.selectorSort).unbind("mousedown.tablesorter mouseup.tablesorter").bind("mousedown.tablesorter mouseup.tablesorter",function(c,d){var i=(this.tagName.match("TH|TD")?f(this):f(this).parents("th, td").filter(":last"))[0];if(1!==(c.which||c.button))return!1;if("mousedown"===c.type)return m=(new Date).getTime(),"INPUT"===c.target.tagName?"":!a.cancelSelection;if(!0!==d&&250<(new Date).getTime()-m)return!1;a.delayInit&&!a.cache&& p(b[0]);if(!i.sortDisabled){b.trigger("sortStart",b[0]);s=!c[a.sortMultiSortKey];i.count=(i.count+1)%(a.sortReset?3:2);a.sortRestart&&(g=i,a.$headers.each(function(){if(this!==g&&(s||!f(this).is("."+a.cssDesc+",."+a.cssAsc)))this.count=-1}));g=i.column;if(s){a.sortList=[];if(null!==a.sortForce){j=a.sortForce;for(h=0;h<j.length;h++)j[h][0]!==g&&a.sortList.push(j[h])}k=i.order[i.count];if(2>k&&(a.sortList.push([g,k]),1<i.colSpan))for(h=1;h<i.colSpan;h++)a.sortList.push([g+h,k])}else if(a.sortAppend&& 1<a.sortList.length&&e.isValueInArray(a.sortAppend[0][0],a.sortList)&&a.sortList.pop(),e.isValueInArray(g,a.sortList))for(h=0;h<a.sortList.length;h++)l=a.sortList[h],k=a.headerList[l[0]],l[0]===g&&(l[1]=k.order[k.count],2===l[1]&&(a.sortList.splice(h,1),k.count=-1));else if(k=i.order[i.count],2>k&&(a.sortList.push([g,k]),1<i.colSpan))for(h=1;h<i.colSpan;h++)a.sortList.push([g+h,k]);if(null!==a.sortAppend){j=a.sortAppend;for(h=0;h<j.length;h++)j[h][0]!==g&&a.sortList.push(j[h])}b.trigger("sortBegin", b[0]);setTimeout(function(){B(b[0]);D(b[0]);r(b[0])},1)}});a.cancelSelection&&a.$headers.each(function(){this.onselectstart=function(){return!1}});b.unbind("sortReset update updateCell addRows sorton appendCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave").bind("sortReset",function(){a.sortList=[];B(this);D(this);r(this)}).bind("update",function(c,g,h){f(a.selectorRemove,this).remove();a.parsers=i(this);p(this);E(b,g,h)}).bind("updateCell",function(c,g,h,e){var d,j,i;d=f(this).find("tbody"); var c=d.index(f(g).parents("tbody").filter(":last")),s=f(g).parents("tr").filter(":last");d.length&&0<=c&&(j=d.eq(c).find("tr").index(s),i=g.cellIndex,d=this.config.cache[c].normalized[j].length-1,this.config.cache[c].row[this.config.cache[c].normalized[j][d]]=s,this.config.cache[c].normalized[j][i]=a.parsers[i].format(n(this,g,i),this,g,i),E(b,h,e))}).bind("addRows",function(c,g,e,d){var j=g.filter("tr").length,s=[],k=g[0].cells.length,l=f(this).find("tbody").index(g.closest("tbody"));a.parsers|| (a.parsers=i(this));for(c=0;c<j;c++){for(h=0;h<k;h++)s[h]=a.parsers[h].format(n(this,g[c].cells[h],h),this,g[c].cells[h],h);s.push(a.cache[l].row.length);a.cache[l].row.push([g[c]]);a.cache[l].normalized.push(s);s=[]}E(b,e,d)}).bind("sorton",function(a,b,c,g){f(this).trigger("sortStart",this);var h,e,d=this.config,a=b||d.sortList;d.sortList=[];f.each(a,function(a,b){h=[parseInt(b[0],10),parseInt(b[1],10)];if(e=d.headerList[h[0]])d.sortList.push(h),e.count=h[1]%(d.sortReset?3:2)});B(this);D(this); r(this,g);"function"===typeof c&&c(this)}).bind("appendCache",function(a,b,c){r(this,c);"function"===typeof b&&b(this)}).bind("applyWidgetId",function(b,c){e.getWidgetById(c).format(this,a,a.widgetOptions)}).bind("applyWidgets",function(a,b){e.applyWidget(this,b)}).bind("refreshWidgets",function(a,b,c){e.refreshWidgets(this,b,c)}).bind("destroy",function(a,b,c){e.destroy(this,b,c)});a.supportsDataObject&&"undefined"!==typeof b.data().sortlist?a.sortList=b.data().sortlist:C&&(b.metadata()&&b.metadata().sortlist)&& (a.sortList=b.metadata().sortlist);e.applyWidget(this,!0);0<a.sortList.length?b.trigger("sorton",[a.sortList,{},!a.initWidgets]):a.initWidgets&&e.applyWidget(this);if(this.config.widthFixed&&0===f(this).find("colgroup").length){var R=f("<colgroup>"),S=f(this).width();f("tr:first td",this.tBodies[0]).each(function(){R.append(f("<col>").css("width",parseInt(1E3*(f(this).width()/S),10)/10+"%"))});f(this).prepend(R)}a.showProcessing&&b.unbind("sortBegin sortEnd").bind("sortBegin sortEnd",function(a){e.isProcessing(b[0], "sortBegin"===a.type)});this.hasInitialized=!0;a.debug&&e.benchmark("Overall initialization time",f.data(this,"startoveralltimer"));b.trigger("tablesorter-initialized",this);"function"===typeof a.initialized&&a.initialized(this)}})};e.isProcessing=function(c,b,a){var g=c.config,c=a||f(c).find("."+g.cssHeader);b?(0<g.sortList.length&&(c=c.filter(function(){return this.sortDisabled?!1:e.isValueInArray(parseFloat(f(this).attr("data-column")),g.sortList)})),c.addClass(g.cssProcessing)):c.removeClass(g.cssProcessing)}; e.processTbody=function(c,b,a){if(a)return b.before('<span class="tablesorter-savemyplace"/>'),c=f.fn.detach?b.detach():b.remove();c=f(c).find("span.tablesorter-savemyplace");b.insertAfter(c);c.remove()};e.clearTableBody=function(c){f(c.tBodies).filter(":not(."+c.config.cssInfoBlock+")").empty()};e.destroy=function(c,b,a){var g=f(c),h=c.config,d=g.find("thead:first");c.hasInitialized=!1;d.find("tr:not(."+h.cssHeaderRow+")").remove();d.find(".tablesorter-resizer").remove();e.refreshWidgets(c,!0,!0); g.removeData("tablesorter").unbind("sortReset update updateCell addRows sorton appendCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave").find("."+h.cssHeader).unbind("click mousedown mousemove mouseup").removeClass(h.cssHeader+" "+h.cssAsc+" "+h.cssDesc).find(".tablesorter-header-inner").each(function(){""!==h.cssIcon&&f(this).find("."+h.cssIcon).remove();f(this).replaceWith(f(this).contents())});!1!==b&&g.removeClass(h.tableClass);"function"===typeof a&&a(c)};e.regex=[/(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi, /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,/^0x[0-9a-f]+$/i];e.sortText=function(c,b,a,g){if(b===a)return 0;var h=c.config,d=h.string[h.empties[g]||h.emptyTo],j=e.regex;if(""===b&&0!==d)return"boolean"===typeof d?d?-1:1:-d||-1;if(""===a&&0!==d)return"boolean"===typeof d?d?1:-1:d||1;if("function"===typeof h.textSorter)return h.textSorter(b,a,c,g);c=b.replace(j[0],"\\0$1\\0").replace(/\\0$/,"").replace(/^\\0/,"").split("\\0");g=a.replace(j[0], "\\0$1\\0").replace(/\\0$/,"").replace(/^\\0/,"").split("\\0");b=parseInt(b.match(j[2]),16)||1!==c.length&&b.match(j[1])&&Date.parse(b);if(a=parseInt(a.match(j[2]),16)||b&&a.match(j[1])&&Date.parse(a)||null){if(b<a)return-1;if(b>a)return 1}h=Math.max(c.length,g.length);for(b=0;b<h;b++){a=isNaN(c[b])?c[b]||0:parseFloat(c[b])||0;j=isNaN(g[b])?g[b]||0:parseFloat(g[b])||0;if(isNaN(a)!==isNaN(j))return isNaN(a)?1:-1;typeof a!==typeof j&&(a+="",j+="");if(a<j)return-1;if(a>j)return 1}return 0};e.sortTextDesc= function(c,b,a,g){if(b===a)return 0;var d=c.config,f=d.string[d.empties[g]||d.emptyTo];return""===b&&0!==f?"boolean"===typeof f?f?-1:1:f||1:""===a&&0!==f?"boolean"===typeof f?f?1:-1:-f||-1:"function"===typeof d.textSorter?d.textSorter(a,b,c,g):e.sortText(c,a,b)};e.getTextValue=function(c,b,a){if(b){for(var g=c.length,d=b+a,b=0;b<g;b++)d+=c.charCodeAt(b);return a*d}return 0};e.sortNumeric=function(c,b,a,g,d,f){if(b===a)return 0;c=c.config;g=c.string[c.empties[g]||c.emptyTo];if(""===b&&0!==g)return"boolean"=== typeof g?g?-1:1:-g||-1;if(""===a&&0!==g)return"boolean"===typeof g?g?1:-1:g||1;isNaN(b)&&(b=e.getTextValue(b,d,f));isNaN(a)&&(a=e.getTextValue(a,d,f));return b-a};e.sortNumericDesc=function(c,b,a,d,h,f){if(b===a)return 0;c=c.config;d=c.string[c.empties[d]||c.emptyTo];if(""===b&&0!==d)return"boolean"===typeof d?d?-1:1:d||1;if(""===a&&0!==d)return"boolean"===typeof d?d?1:-1:-d||-1;isNaN(b)&&(b=e.getTextValue(b,h,f));isNaN(a)&&(a=e.getTextValue(a,h,f));return a-b};e.characterEquivalents={a:"\u00e1\u00e0\u00e2\u00e3\u00e4", A:"\u00c1\u00c0\u00c2\u00c3\u00c4",c:"\u00e7",C:"\u00c7",e:"\u00e9\u00e8\u00ea\u00eb",E:"\u00c9\u00c8\u00ca\u00cb",i:"\u00ed\u00ec\u0130\u00ee\u00ef",I:"\u00cd\u00cc\u0130\u00ce\u00cf",o:"\u00f3\u00f2\u00f4\u00f5\u00f6",O:"\u00d3\u00d2\u00d4\u00d5\u00d6",S:"\u00df",u:"\u00fa\u00f9\u00fb\u00fc",U:"\u00da\u00d9\u00db\u00dc"};e.replaceAccents=function(c){var b,a="[",d=e.characterEquivalents;if(!e.characterRegex){e.characterRegexArray={};for(b in d)"string"===typeof b&&(a+=d[b],e.characterRegexArray[b]= RegExp("["+d[b]+"]","g"));e.characterRegex=RegExp(a+"]")}if(e.characterRegex.test(c))for(b in d)"string"===typeof b&&(c=c.replace(e.characterRegexArray[b],b));return c};e.isValueInArray=function(c,b){var a,d=b.length;for(a=0;a<d;a++)if(b[a][0]===c)return!0;return!1};e.addParser=function(c){var b,a=e.parsers.length,d=!0;for(b=0;b<a;b++)e.parsers[b].id.toLowerCase()===c.id.toLowerCase()&&(d=!1);d&&e.parsers.push(c)};e.getParserById=function(c){var b,a=e.parsers.length;for(b=0;b<a;b++)if(e.parsers[b].id.toLowerCase()=== c.toString().toLowerCase())return e.parsers[b];return!1};e.addWidget=function(c){e.widgets.push(c)};e.getWidgetById=function(c){var b,a,d=e.widgets.length;for(b=0;b<d;b++)if((a=e.widgets[b])&&a.hasOwnProperty("id")&&a.id.toLowerCase()===c.toLowerCase())return a};e.applyWidget=function(c,b){var a=c.config,d=a.widgetOptions,h=a.widgets.sort().reverse(),i,j,l,k=h.length;j=f.inArray("zebra",a.widgets);0<=j&&(a.widgets.splice(j,1),a.widgets.push("zebra"));a.debug&&(i=new Date);for(j=0;j<k;j++)(l=e.getWidgetById(h[j]))&& (!0===b&&l.hasOwnProperty("init")?l.init(c,l,a,d):!b&&l.hasOwnProperty("format")&&l.format(c,a,d));a.debug&&u("Completed "+(!0===b?"initializing":"applying")+" widgets",i)};e.refreshWidgets=function(c,b,a){var g,h=c.config,i=h.widgets,j=e.widgets,l=j.length;for(g=0;g<l;g++)if(j[g]&&j[g].id&&(b||0>f.inArray(j[g].id,i)))h.debug&&d("removing "+j[g].id),j[g].hasOwnProperty("remove")&&j[g].remove(c,h,h.widgetOptions);!0!==a&&e.applyWidget(c,b)};e.getData=function(c,b,a){var d="",c=f(c),e,i;if(!c.length)return""; e=f.metadata?c.metadata():!1;i=" "+(c.attr("class")||"");"undefined"!==typeof c.data(a)||"undefined"!==typeof c.data(a.toLowerCase())?d+=c.data(a)||c.data(a.toLowerCase()):e&&"undefined"!==typeof e[a]?d+=e[a]:b&&"undefined"!==typeof b[a]?d+=b[a]:" "!==i&&i.match(" "+a+"-")&&(d=i.match(RegExp(" "+a+"-(\\w+)"))[1]||"");return f.trim(d)};e.formatFloat=function(c,b){if("string"!==typeof c||""===c)return c;c=!1!==b.config.usNumberFormat?c.replace(/,/g,""):c.replace(/[\s|\.]/g,"").replace(/,/g,".");/^\s*\([.\d]+\)/.test(c)&& (c=c.replace(/^\s*\(/,"-").replace(/\)/,""));var a=parseFloat(c);return isNaN(a)?f.trim(c):a};e.isDigit=function(c){return isNaN(c)?/^[\-+(]?\d+[)]?$/.test(c.toString().replace(/[,.'\s]/g,"")):!0}}});var i=f.tablesorter;f.fn.extend({tablesorter:i.construct});i.addParser({id:"text",is:function(){return!0},format:function(d,u){var n=u.config,d=f.trim(n.ignoreCase?d.toLocaleLowerCase():d);return n.sortLocaleCompare?i.replaceAccents(d):d},type:"text"});i.addParser({id:"currency",is:function(d){return/^\(?[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]\d+/.test(d)}, format:function(d,f){return i.formatFloat(d.replace(/[^\w,. \-()]/g,""),f)},type:"numeric"});i.addParser({id:"ipAddress",is:function(d){return/^\d{1,3}[\.]\d{1,3}[\.]\d{1,3}[\.]\d{1,3}$/.test(d)},format:function(d,f){var n,t=d.split("."),p="",r=t.length;for(n=0;n<r;n++)p+=("00"+t[n]).slice(-3);return i.formatFloat(p,f)},type:"numeric"});i.addParser({id:"url",is:function(d){return/^(https?|ftp|file):\/\//.test(d)},format:function(d){return f.trim(d.replace(/(https?|ftp|file):\/\//,""))},type:"text"}); i.addParser({id:"isoDate",is:function(d){return/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(d)},format:function(d,f){return i.formatFloat(""!==d?(new Date(d.replace(/-/g,"/"))).getTime()||"":"",f)},type:"numeric"});i.addParser({id:"percent",is:function(d){return/\d%\)?$/.test(d)},format:function(d,f){return i.formatFloat(d.replace(/%/g,""),f)},type:"numeric"});i.addParser({id:"usLongDate",is:function(d){return/^[A-Z]{3,10}\.?\s+\d{1,2},?\s+(\d{4}|'?\d{2})\s+(([0-2]?\d:[0-5]\d)|([0-1]?\d:[0-5]\d\s?([AP]M)))$/i.test(d)}, format:function(d,f){return i.formatFloat((new Date(d.replace(/(\S)([AP]M)$/i,"$1 $2"))).getTime()||"",f)},type:"numeric"});i.addParser({id:"shortDate",is:function(d){return/^(\d{2}|\d{4})[\/\-\,\.\s+]\d{2}[\/\-\.\,\s+](\d{2}|\d{4})$/.test(d)},format:function(d,f,n,t){var n=f.config,p=n.headerList[t],r=p.shortDateFormat;"undefined"===typeof r&&(r=p.shortDateFormat=i.getData(p,n.headers[t],"dateFormat")||n.dateFormat);d=d.replace(/\s+/g," ").replace(/[\-|\.|\,]/g,"/");"mmddyyyy"===r?d=d.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/, "$3/$1/$2"):"ddmmyyyy"===r?d=d.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/,"$3/$2/$1"):"yyyymmdd"===r&&(d=d.replace(/(\d{4})[\/\s](\d{1,2})[\/\s](\d{1,2})/,"$1/$2/$3"));return i.formatFloat((new Date(d)).getTime()||"",f)},type:"numeric"});i.addParser({id:"time",is:function(d){return/^(([0-2]?\d:[0-5]\d)|([0-1]?\d:[0-5]\d\s?([AP]M)))$/i.test(d)},format:function(d,f){return i.formatFloat((new Date("2000/01/01 "+d.replace(/(\S)([AP]M)$/i,"$1 $2"))).getTime()||"",f)},type:"numeric"});i.addParser({id:"digit", is:function(d){return i.isDigit(d)},format:function(d,f){return i.formatFloat(d.replace(/[^\w,. \-()]/g,""),f)},type:"numeric"});i.addParser({id:"metadata",is:function(){return!1},format:function(d,i,n){d=i.config;d=!d.parserMetadataName?"sortValue":d.parserMetadataName;return f(n).metadata()[d]},type:"numeric"});i.addWidget({id:"zebra",format:function(d,u,n){var t,p,r,B,D,C,E=RegExp(u.cssChildRow,"i"),e=f(d).children("tbody:not(."+u.cssInfoBlock+")");u.debug&&(D=new Date);for(d=0;d<e.length;d++)t= f(e[d]),C=t.children("tr").length,1<C&&(r=0,t=t.children("tr:visible"),t.each(function(){p=f(this);E.test(this.className)||r++;B=0===r%2;p.removeClass(n.zebra[B?1:0]).addClass(n.zebra[B?0:1])}));u.debug&&i.benchmark("Applying Zebra widget",D)},remove:function(d,i){var n,t,p=f(d).children("tbody:not(."+i.cssInfoBlock+")"),r=(i.widgetOptions.zebra||["even","odd"]).join(" ");for(n=0;n<p.length;n++)t=f.tablesorter.processTbody(d,f(p[n]),!0),t.children().removeClass(r),f.tablesorter.processTbody(d,t,!1)}})}(jQuery);
