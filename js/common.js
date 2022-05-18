$(function() {
  // console.log($("body"));
  // console.log(window.location.href);
  // console.log($(location).attr("href"));
  // #lnb의 메뉴와 같은 서브페이지의 주소값을 매칭하며
  // 해당 메뉴에 on class 추가하시오
  function splitLocation(el) {
    let href = el.attr("href").split("/");
    href = href[href.length - 1].split(".");
    href = href[0];
    return href;
  }

  // let currentHref = $(location).attr("href").split("/");
  // currentHref = currentHref[currentHref.length - 1].split(".");
  // currentHref = currentHref[0];
  // console.log(currentHref);
  let currentHref = splitLocation($(location));

  $("#lnb a").each(function() {
    // let matchHref = $(this).attr("href").split("/");
    // matchHref = matchHref[matchHref.length - 1].split('.');
    // matchHref = matchHref[0];
    if (splitLocation($(this)) == currentHref) {
      $(this).addClass("on");
    }
  });

  $(".accordion dd:not(:first)").css({
    "display": "none",
    "height": 0
  });
  let isAni = $("dd").is(":animated");

  $(".accordion  dl dt").click(function() {
    let thisEl = $(this);
    if (!isAni) {
      if ($("+dd", thisEl).css("display") == "none") {
        $(".accordion dd").each(function() {
          if (parseInt($(this).css("height")) == 300) {
            $(this).animate({
              height: 0
            }, 300, function() {
              $(this).css("display", "none");
            })
          }
        })
        $("+dd", thisEl).css("display", "block").animate({
          height: 300
        }, 1500);
      }
    }
  });
})
