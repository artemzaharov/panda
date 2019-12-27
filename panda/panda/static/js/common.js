var scrolled;
$(document).on("ready", function () {
    $(".element-btn").on("click", function (e) {
        e.preventDefault();
        var activeIndex = $(this).attr("data-showEl");
        console.log("obj", activeIndex);
        $("[data-showEl='" + activeIndex + "'].element-show").toggleClass("show");
    });

    $(".nav-extra li").hover(function(){
       $(this).find("ul").stop().fadeIn(250); 
    },function(){
        $(this).find("ul").fadeOut(250);
    })



    // $(".input-phone").mask("+7(999)999-99-99", {
    //     placeholder: " + 7(   )   -  -  "
    // });
    var countType = 0;
    $(".input-product li").each(function () {
        var valText = $("span").text().trim();
        var thisText = $(this).text();
        console.log(thisText.indexOf(valText));

        countType++;
        if (thisText.indexOf(valText) == 0) {
            console.log("countType", countType);
            $(".input-product span").text(valText);
            $(".type-ul").removeClass("visible");
            $(".type-" + countType).addClass("visible");
        }
    })
    var countKeyup;
    var sendTrue = 0;
    $(".popup input").keyup(function () {
        sendTrue = 0;
        // console.log("saf");
        $(this).parents(".form").find(".btn-send").removeClass("work")

        $(this).parents(".form").find("input").each(function (index) {
            if (index == 2) {
                countKeyup = $(this).val().length - 3
            } else {
                countKeyup = $(this).val().length
            }
            //  console.log(index, countKeyup);
            if (countKeyup > 3) {
                sendTrue = 1;
                // console.log("true");
                $(this).parents(".form").find(".btn-send").addClass("work")
            }

        })

    });
    var r = /^\w+@\w+\.\w{2,4}$/i;
    var mailInput;
    var mailFlag = 1;
    $(".input-mail").on("keyup", function () {
        //$(this).removeAttr("style").next().next().hide();
        mailInput = $(".input-mail").val();
        // console.log(mailInput)
        if (!r.test(mailInput)) {
            //    console.log("Код, если неверный e-mail");
            mailFlag = 0;
            /*$(this).css({
            "background-color": "rgba(255, 152, 0, 0.35)"
        });*/
        } else {

            mailFlag = 1;
            $(this).removeAttr("style");
        }
    });

    var sendTrue = 1;
    var name, mail, phone, description, address, region, town, product, type, weight, dopinfo;
    $(".btn-send").on("click", function (event) {
        console.log('click');
        event.preventDefault();
        if (sendTrue == 1) {
            var isEmpty = false;
            $(this).parents(".form").find(".required").each(function () {
                if (!$(this).val()) {
                    isEmpty = true;
                    $(this).addClass("error-input");
                }
            });

//            if (mailFlag == 0) {
//                isEmpty = true;
//                $(".input-mail").addClass("error-input");
//            }
            setTimeout(function () {
                $(".required").removeClass("error-input");
            }, 3000);
            console.log(isEmpty, mailFlag);
            if (!isEmpty) {


                name = $(this).parents(".form").find(".input-name").val();

                mail = $(this).parents(".form").find(".input-mail").val();
                if (mail == undefined) {
                    mail = "";
                }
                phone = $(this).parents(".form").find(".input-phone").val();
                description = $(this).parents(".form").find(".input-description").val();
                if (description == undefined) {
                    description = "";
                }
                dopinfo = $(this).parents(".form").find(".input-dopinfo").val();
                if (dopinfo == undefined) {
                    dopinfo = "";
                }
                address = $(this).parents(".form").find(".input-address").val();
                if (address == undefined) {
                    address = "";
                }
				region = $(this).parents(".form").find(".input-region").val();
                if (region == undefined) {
                    region = "";
                }
				town = $(this).parents(".form").find(".input-town").val();
                if (town == undefined) {
                    town = "";
                }
                console.log(address);
                product = $(this).parents(".form").find(".input-product").find("span").text();
                if (product == "Продукт") {
                    product = "";
                }
                type = $(this).parents(".form").find(".input-type").find("span").text();
                if (type == "Вид") {
                    type = "";
                }
                weight = $(this).parents(".form").find(".input-weight").val();
                if (weight == undefined) {
                    weight = "";
                }

                var formData = new FormData();
                formData.append('name', name);

                formData.append('mail', mail);
                formData.append('phone', phone);
                formData.append('description', description);
//                formData.append('address', address);
				formData.append('region', region);
				formData.append('town', town);
                formData.append('product', product);
                formData.append('type', type);
                formData.append('weight', weight);
                formData.append('dopinfo', dopinfo);



                $.ajax({
                    type: "POST",
                    url: "/send.php",
                    data: formData,
                    contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
                    processData: false,

                    // Выводим то что вернул PHP
                    success: function (html) {
                        //предварительно очищаем нужный элемент страницы
                        $(".result").empty();
                        //и выводим ответ php скрипта
                        $(".result").append(html);
						
						dataLayer.push({'event': 'zayavka'}); ///for GTM

                        if ($('.result span').hasClass('send_poup')) {
                            $(".form").fadeOut(1000, function () {
                                //$(".item-num.answer").fadeIn();
                            });
                            /*setTimeout(function () {
                                    $(".form, .popup-wrap").removeClass("active");
                                    $("#result").empty();
                                    $(".form input").val("");
                            }, 2500)*/
                        } else {
                            /*   $('.poup_up').css({
                                           height: 'auto',
                                           paddingBottom: '50px'
                                   })*/

                        }
                    }
                });


                //  console.log("name", name,  mail)
            }
        }
    });









    var selectEl = ".custom-select";
    $(selectEl).on("click", function (e) {
        e.preventDefault();
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(selectEl).removeClass("active");
            $(this).addClass("active");
        }
    });
    $('body').on("click", function (evt) {
        if (!$(evt.target).is('.custom-select, .custom-select > *')) {
            $(selectEl).removeClass("active");
        }
    });
    $(selectEl).on("click", "li", function () {
        console.log("li")
        $(this).parents(selectEl).find("span").text($(this).text());
        if ($(this).data("address") == 1) {
            $(".input-address-wrap1").show().children().addClass("required");
        } else {
            $(".input-address-wrap1").hide().children().removeClass("required");
        }
		if ($(this).data("address") == 1 || $(this).data("address") == 2) {
            $(".input-address-wrap2").show().children().addClass("required");
        } else {
            $(".input-address-wrap2").hide().children().removeClass("required");
        }

        if ($(this).hasClass("typeMain")) {
            var typeMainCount = $(this).data("typemain");
            $(".type-ul").removeClass("visible");
            $(".type-" + typeMainCount).addClass("visible");
            console.log(typeMainCount);
        }
    });
    $(".close, .close-wrap").on("click", function () {
        $(this).parents(".element-show").removeClass("show");
    });
    var posOne = 0;
    var posTwo = 0;
    var posThree = 0;

    if ($(".content-detail").length > 0) posOne = $(".content-detail").offset().top;
    if ($(".stages-camembert").length > 0) posTwo = $(".stages-camembert").offset().top;
    if ($(".detail-description").length > 0) posThree = $(".detail-description").offset().top;
    console.log(posTwo)

    $(".top-menu-second.left").on("click", function (e) {
        e.preventDefault();
        $("html,body").animate({
            scrollTop: posOne - 150
        }, 1000)

    });
    $(".top-menu-second.center").on("click", function (e) {

        e.preventDefault();
        $("html,body").animate({
            scrollTop: posTwo - 150
        }, 1000)

    });
    $(".top-menu-second.right").on("click", function (e) {
        e.preventDefault();
        $("html,body").animate({
            scrollTop: posThree - 150
        }, 1000)

    });
});

$(window).on("load",function(){
       var posOne = 0;
    var posTwo = 0;
    var posThree = 0;
	
	if($(".content-detail").length>0)  posOne = $(".content-detail").offset().top;
	if($(".stages-camembert").length>0)  posTwo = $(".stages-camembert").offset().top;
	if($(".detail-description").length>0)  posThree = $(".detail-description").offset().top;
    console.log(posTwo)
    
       $(".top-menu-second.left").on("click", function (e) {
        e.preventDefault();
        $("html,body").animate({
            scrollTop: posOne - 150
        }, 1000)

    });
    $(".top-menu-second.center").on("click", function (e) {

        e.preventDefault();
        $("html,body").animate({
            scrollTop: posTwo - 150
        }, 1000)

    });
    $(".top-menu-second.right").on("click", function (e) {
        e.preventDefault();
        $("html,body").animate({
            scrollTop: posThree - 150
        }, 1000)

    });
});

$(document).ready(function () {
  
    
    
    $(".img-box").addClass("show");
    var wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 200, // default
        mobile: true, // default
        live: true // default
    })
    wow.init();
    
    
    $(".top-detail").addClass("show");
    
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        mouseDrag: false,
        items: 1,
        autoplayTimeout: 5000,
        autoplaySpeed: 5000
    });
    $(".hamburger").on("click", function () {
        $(".mobile-menu").addClass("active");
    });
    $(".close").on("click", function () {
        $(".mobile-menu").removeClass("active");
    });

    var Obj = $(".section-2");
  
    
    var ObjHeight = Obj.height();

    var ObjSecond = $(".section-3");
   

if ( Obj.length>0){
var ObjTop = Obj.offset().top;}

    $(window).on("mousewheel DOMMouseScroll", function (event) {
        //console.log("obj" + (ObjTop + ObjHeight), scrolled);
        scrolled = $(window).scrollTop();
        if (scrolled > 0) {
            $("body").addClass("show-section");
        } else {
            $("body").removeClass("show-section");
        }
console.log(scrolled)
    if ( Obj.length>0){
        
        if (scrolled > ObjTop + 300) {
            ObjSecond.addClass("show");
        } else {
            ObjSecond.removeClass("show");
        }
    }
    });



});

var lastScrollTop;

		$(window).scroll(function(event){ 
		
   			var st = $(this).scrollTop();
   			if (st > lastScrollTop){
       			scrollDir = 'down';
                if (st >( $(".section-1").height()-200) && st < 1330) {
            $(".section-2").addClass("show");
        } else {
            $
        }
   			} else {
      			scrollDir = 'up';
                if (st > 870 && st < 1650) {
                    $(".section-2").addClass("show");
                } else {
                   
                }
   			}
  			lastScrollTop = st;
              console.log(st, scrollDir)
		});