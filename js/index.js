$(function(){

    var is_open = false;
    var $nav = $('nav');
    var $nav_ul = $('nav ul');
    var ul_height = $nav_ul.height();
    var do_accordion = function(){
        if (!is_open){
            //ナビが閉じていれば開く
            $nav.css('bottom', -500);
            $nav_ul.show();
            $nav.animate({bottom: 0}, 400, 'swing');
            is_open = true;
            return false;
        }else{
            //ナビが開いていれば閉じる
            $nav.animate({bottom: '-=' + ul_height}, 400, 'swing', function(){
                $nav.css('bottom', '0px');
                $nav_ul.hide();
                is_open = false;
            });
            return false;
        }
    };
    $('nav .btn').on('click', do_accordion);

    // #で始まるアンカーをクリックした場合に処理
    $('a[href^=#]').on('click', function(){
        // スクロールの速度
        var speed = 400; // ミリ秒
        // アンカーの値取得
        var href= $(this).attr("href");
        // 移動先を取得
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を数値で取得
        var position = target.offset().top;
        // スムーススクロール
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        //アコーディオンを閉じる
        if(is_open){
            do_accordion();
        }
      return false;
    });

    $('#bands dt').on('click', function() {
            $(this).parent().children('dd').slideToggle();
    });
});
