!function(n){1<=n(".wn-social-login").length&&(n(".wn-social-login").find("i.theChampLogin").each(function(){var i=n(this),t=i.attr("alt");i.after('<p class="social-text">'+t+"</p>")}),1<=".social-text".length&&n(".wn-social-login").find(".social-text").on("click",function(){n(this).closest("li").find("i.theChampLogin").trigger("click")}))}(jQuery);