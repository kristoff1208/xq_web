$(function (){
        if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
            const url = $('.case__gallery__media--center').data('src');
            const slice_url = url.slice(10)
            const mobile_url = '/images/mobile'+ slice_url



            $('.case_image01').attr('data-src','/images/mobile/AlgorithmGlobalFund_bg.png');
            $('.case_image02').attr('data-src','/images/mobile/BLKBX_bg.png');
            $('.case_image03').attr('data-src','/images/mobile/Chuu_bg.png');
            $('.case_image04').attr('data-src','/images/mobile/doppel_bg.png');
            $('.case_image05').attr('data-src','/images/mobile/EmpireSteak.png');
            $('.case_image06').attr('data-src','/images/mobile/kissbee.png');
            $('.case_image07').attr('data-src','/images/mobile/loca.png');
            $('.case_image08').attr('data-src','/images/mobile/nextmeets.png');
            $('.case_image09').attr('data-src','/images/mobile/offlinejapan.png');
            $('.case_image10').attr('data-src','/images/mobile/redlist.png');
            $('.case_image11').attr('data-src','/images/mobile/trepanation.png');
            $('.case_image12').attr('data-src','/images/mobile/xqz.png');
            $('.case_image13').attr('data-src','/images/mobile/undermob.png');
            $('.case_image14').attr('data-src','/images/mobile/waybackburger.png');
            $('.case_image15').attr('data-src','/images/mobile/whiteknight.png');
            $('.case_image16').attr('data-src','/images/mobile/woo.png');
            $('.case_image17').attr('data-src','/images/mobile/Zentrum.png');
            $('.case_image18').attr('data-src','/images/mobile/zzz.png');
            $('.case_image19').attr('data-src','/images/mobile/Geijutubunkazaidan.png');
            $('.case_image20').attr('data-src','/images/mobile/photozo.png');
            $('.case_image21').attr('data-src','/images/mobile/nihonkifu.png');
            $('.case_image22').attr('data-src','/images/mobile/nihonbunka.png');
            $('.case_image23').attr('data-src','/images/mobile/blink.png');
            $('.case_image24').attr('data-src','/images/mobile/feeep.png');
            $('.case_image25').attr('data-src','/images/mobile/children.png');
            $('.case_image26').attr('data-src','/images/mobile/rolls-main.png');
            $('.case_image27').attr('data-src','/images/mobile/romane-main.png');
            $('.case_image28').attr('data-src','/images/mobile/babel-main.png');



        }

})
