$(function () {
    /* ==========================================
       部屋の仕様（Room Detail）
    ========================================== */
    $('.room__more a').on('click', function (e) {
        e.preventDefault();
        const $thisMore = $(this).closest('.room__more');
        const $thisRoom = $(this).closest('.room');
        const $thisDetail = $thisRoom.next('.room-detail');

        $thisMore.css('visibility', 'hidden');
        $thisDetail.fadeIn(600).addClass('is-active');

        $('html, body').stop().animate({
            scrollTop: $thisDetail.offset().top - 20
        }, 600);
    });

    $('.room-detail__close a').on('click', function (e) {
        e.preventDefault();
        const $thisDetail = $(this).closest('.room-detail');
        const $thisRoom = $thisDetail.prev('.room');
        const $thisMore = $thisRoom.find('.room__more');

        $thisDetail.hide().removeClass('is-active');
        $thisMore.css('visibility', 'visible');

        const morePos = $thisMore.offset().top - ($(window).height() / 2) + ($thisMore.height() / 2);
        $('html, body').stop().animate({
            scrollTop: morePos
        }, 500);
    });

    /* ==========================================
       お品書きアコーディオン（Meal Accordion）
    ========================================== */
    $('.js-accordion-trigger').on('click', function (e) {
        e.preventDefault();
        const $thisBtn = $(this);
        const $card = $thisBtn.closest('.p-meal__card');
        const $content = $card.find('.js-accordion-content');

        $thisBtn.hide();
        $content.stop().slideDown(500);
    });

    $('.u-close-text').on('click', function () {
        const $card = $(this).closest('.p-meal__card');
        const $content = $(this).closest('.js-accordion-content');
        const $targetBtn = $card.find('.js-accordion-trigger');

        $content.stop().slideUp(500, function () {
            $targetBtn.fadeIn(200);
        });

        $('html, body').stop().animate({
            scrollTop: $card.offset().top - 50
        }, 500);
    });

    /* ==========================================
       スパ・アコーディオン（SPA Toggle）
    ========================================== */
    $('.js-spa-toggle').on('click', function () {
        const $this = $(this);
        const $content = $('.js-spa-content');
        const $text = $this.find('.toggle-text');

        // アニメーションを止めてから実行
        $content.stop().slideToggle(500);

        // ボタンのクラス切り替え（矢印の回転用）
        $this.toggleClass('is-active');

        // テキストの切り替え
        if ($this.hasClass('is-active')) {
            $text.text('閉じる');
        } else {
            $text.text('メニューを開く');
        }
    });
});