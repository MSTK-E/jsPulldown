// JavaScript Document
// UTF-8

(function($){

  // DOM完成後に実行
  $(document).ready(function(){

    // jQueryプラグイン
    $.fn.jsPulldown = function (options) {

      // 初期値
      var defaults = {
        duration: 100,
        easing: 'swing'
      };

      // オプションで更新
      var setting = $.extend(true, {}, defaults, options);

      // イベント実行トリガー
      var $this = $('.js-pulldownTrigger');

      // イベント
      $this.mouseenter(function() {
        var $this = $(this).find('a');
        var arr = calHeight($this);
        actionPulldown(arr[0], arr[1], arr[2], defaults.easing);
      }).mouseleave(function() {
        var $this = $(this).find('a');
        var arr = calHeight($this);
        actionPulldown(arr[0], 0, arr[2], defaults.easing);
      });

      // ターゲット height durationを配列にして返す
      function calHeight ($this) {
        var $pulldownMenu = $this.next('.js-pulldownMenu');
        var $index = $pulldownMenu.find('li');
        var num = $index.length;
        var height = $index.outerHeight() * num;
        var subDuration = setting.duration * num;
        var duration = setting.duration + subDuration;
        var arr = [$pulldownMenu, height, duration];
        return (arr);
      }

      // プルダウンアニメーション
      function actionPulldown (target, height, duration, easing) {
        target.stop(true).animate({
          height: height
        }, duration, easing);
      }

      return(this);

    };

  });

})(jQuery);