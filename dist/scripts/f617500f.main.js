console.log("'Allo 'Allo!"),$(".smooth").bind("click",function(a){a.preventDefault();var b=$(this).attr("href");$("html, body").animate({scrollTop:$(b).offset().top-68},1e3)}),$(".boom").click(function(a){a.preventDefault();var b=$(this).attr("href");$(".personal-page").toggleClass("hidden"),$("html, body").animate({scrollTop:$(b).offset().top-70},1e3)}),$(".back").click(function(){$(".personal-page").toggleClass("hidden"),$("html, body").animate({scrollTop:0},1e3)});