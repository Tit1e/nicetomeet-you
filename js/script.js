$(document).ready(function() {
    $('h1').fadeIn(1500);
    var id = 0;
    $('h1,.pDiv p:not(#content,#content2,#content3)').each(function(index) {
        $(this).delay(1500 * index).fadeIn(3000, function() {
            id += 1;
            if (id <= 10) {
                $("html,body").animate({ scrollTop: $("#p" + id).offset().top }, 2000);
            } else {
                $("html,body").animate({ scrollTop: $("#content").offset().top }, 2000);
                $("#content").lbyl({
                    content: "正因为是一张白纸，才可以随心所欲地描绘地图。一切全在你自己。对你来说，一切都是自由的，在你面前是无限的可能。这可是很棒的事啊。我衷心祈祷你可以相信自己,无悔的燃烧自己的人生。",
                    speed: 200,
                    type: 'show', // 'show' or 'fade'
                    finished: function() {
                        $("html,body").animate({ scrollTop: $("#content2").offset().top }, 2000);
                        $("#content2").lbyl({
                            content: "via「解忧杂货店」",
                            speed: 200,
                            type: 'show',
                            finished: function() {
                                $("html,body").animate({ scrollTop: $("#content3").offset().top }, 2000);
                                $("#content3").lbyl({
                                    content: "by_Title",
                                    speed: 200,
                                    type: 'show',
                                })
                            }
                        });
                    }
                });
            }
            // $(window).scrollTop($('body').height());
        });
    });

});