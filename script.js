
$(function(){

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
	});


});