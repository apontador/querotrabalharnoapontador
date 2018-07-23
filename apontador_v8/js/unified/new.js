jq(function() {
	
	function setpos(obj, box) {
		var height = jq(obj).height()+12,
		width = jq(obj).width()+20,
		top = jq(obj).offset().top-7,
		left = jq(obj).offset().left-12;
		jq(box).css({'height':height, 'width':width, 'top':top, 'left':left});
	
	}
	setpos('.newbutton button', '#codeSearch');
	setpos('#submitMiniReviewSpan button', '#codeMiniReview');
	setpos('#header_topo_poi', '#codeHeaderPoi');
	setpos('li#tab_avaliacao', '#codeSubmenuPoi');
	setpos('.min_ava_top', '#codeAvaTop');
	setpos('.sprite_box_lateral', '#codeBoxLateral');

	jq('#showOverlay').click(function() {
		if (jq('.hidetext').hasClass('hide')) {
			jq('#overlay').css({'display':'inherit'});
			jq('.showtext').addClass('hide');
			jq('.hidetext').removeClass('hide');
		} else {
			jq('#overlay').css({'display':'none'});
			jq('.hidetext').addClass('hide');
			jq('.showtext').removeClass('hide');
		}
	});

	jq('.overbox').click(function() {
		var oldhtml, oldcss, newhtml, newcss;
		var oldhtml = jq(this).find('.codeold>.codehtml').html(),
		oldcss = jq(this).find('.codeold>.codecss').html(),
		newhtml = jq(this).find('.codenew>.codehtml').html(),
		newcss = jq(this).find('.codenew>.codecss').html(),
		comment = jq(this).find('.codecomment').html();
		
		console.log(oldcss);

		jq('#showcode #codeold .codehtml').html(oldhtml);
		jq('#showcode #codeold .codecss').html(oldcss);
		jq('#showcode #codenew .codehtml').html(newhtml);
		jq('#showcode #codenew .codecss').html(newcss);
		jq('#showcode #codecomment .comments').html(comment);
		jq('#showcode').css({'display':'inherit'});
	});
	jq('#closeShowcode').click(function() {
		jq('#showcode').css({'display':'none'});
	});

	docHeight = jq(document).height();
	docWidth = jq(document).width();
	jq('#overlay').css({'height':docHeight,'width':docWidth});

/*

.bt_buscar button
#header_topo_poi
#submitMiniReviewSpan button
ul.submenu-poi li.selected
.min_ava_top
.sprite_box_lateral


	psearch = jq('.newbutton button').offset();

	console.log('top:'+psearch.top+'left '+psearch.left);*/
});