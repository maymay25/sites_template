function wp_heightAdapt(H,N){if(H==undefined){return false}if($.inArray(H.attr("type"),["bslider"])!=-1){return}var L=H.children("div").eq(0).height();H.children("div").eq(0).css("height","auto");var F=H.children("div").eq(0).height();if(F<L){H.children().eq(0).css("height",L+"px")}var C=N||H.outerHeight();var S=H.children("div").eq(0).outerHeight();var B=H.outerWidth();var K=H.ab_pos_cnter("top");var G=H.ab_pos_cnter("left");var R=G+H.outerWidth();var Q=0;var A=new Array();var E=new Array();var O=0,M=0;var I=0;$("#canvas").find(".cstlayer,.full_column").each(function(){var W=$(this).ab_pos_cnter("left"),U=$(this).ab_pos_cnter("top"),T=$(this).outerWidth(),V=$(this).outerHeight();if($(this).hasClass("cstlayer")){if(W+T<G){return true}if(W>R){return true}if(H.attr("id")==$(this).attr("id")){return true}if((W<=G&&W+T>=R)&&(U<=K&&U+V>=K+C)){E.push($(this).attr("id"));return true}if($(this).parent().hasClass("full_content")||$(this).parent().hasClass("footer_content")){return true}}if(U>=(K+C)){A.push($(this).attr("id"));if(O==0){O=U;M=$(this).attr("id")}else{if(O>U){O=U;M=$(this).attr("id")}}}});Q=$("#"+M).ab_pos_cnter("top")-(K+C);if(A.length>0&&(K+S)>=O){I=K+S+Q-O;for(var J=0;J<A.length;J++){$("#"+A[J]).css("top",(parseInt($("#"+A[J]).ab_pos_cnter("top"))+I)+"px")}}if(E.length>0){for(var J=0;J<E.length;J++){$("#"+E[J]).height($("#"+E[J]).height()+(S-C));$("#"+E[J]).children("div").eq(0).height($("#"+E[J]).height())}}var P=$("#canvas");var D=parseInt(P.css("top"))+P.outerHeight();if(D>parseInt($("#site_footer").css("top"))){$("#site_footer").css("top",D)}H.height(H.children("div").eq(0).height())};