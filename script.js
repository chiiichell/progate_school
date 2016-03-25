
$(function(){
	$('header a').click(function(){
    $("html,body").animate({scrollTop:$($(this).attr('href')).offset().top}, 500);
    return false;
  　})

	// もっと詳しく
	$('#read-more').click(function(){
	  if($(this).hasClass("active")){
	  	$('#more-text').fadeOut();
	    $('#read-more').removeClass('active').text("もっと詳しく");
	}else{
		$('#more-text').fadeIn();
		$('#read-more').addClass('active').text("閉じる");
	}

	});

	// 言語一覧
	$('.languages-box').hover(
	 function(){
	  $(this).find('p').fadeIn(500);
	  },
	 function(){
	  $(this).find('p').fadeOut(500);
	  }
	);

	// モーダル表示
	$('.btn-pricing').click(function(){
      $('#apply-modal').fadeIn();
      var id = $(this).parents('.price-column').attr('id');
      var title = $('#' + id).children('h2').text();
      $('#course-select').val(id);
      $('#apply-form').children('h2').text('【' + title + '】に申し込む');
	});
    
    // モーダル非表示
    $('#close-modal').click(function(){
    	$('#apply-modal').fadeOut();
    });

	// カルーセルスライダー部分
	$('.carousel').carousel({
		interval: 2500
	})

	//　コラム画像
	$('.column-image').hover(
     function(){
      $(this).addClass('zoom');
      $(this).children('.zoom-black').fadeIn(300);
      },
      function(){
      $(this).removeClass('zoom');
      $(this).children('.zoom-black').fadeOut(300);
      }
	);

	$('.filter-item').click(function(){
	  $('.filter-item').removeClass('active');
	  $(this).addClass('active');
	  var id = $(this).attr('id');
	  if (id === 'all'){
		$('.column-box').fadeIn();
	  } else {
	  $('.column-box-wrapper').children('.' + id).fadeIn();
	  $('.column-box').not('.' + id).fadeOut();
	  }
	});


});