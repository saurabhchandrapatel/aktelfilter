/*! jQuery Filter v1.0.1 http://aktel.in/ | http://jquery.org/license */
(function ( $ ) { 
			$.fn.filter = function(options) {
 

						function gnList( html , s , page , searchtext , ldmBtn ){ 
							var Allcounter = 0;
							var upercounter = s.pageSize*(page);
							var lowercounter = s.pageSize*(page-1); 
							if( s.friend_list.length ){  
								$.each(s.friend_list , function( index, value  ){ 
							                    var st = '/'+searchtext+'/i'; 
							                    name = (value.nickname)? value.nickname : value.username; 

							                    if( searchtext=="" || name.match( eval(st) ) ){  
							                    			Allcounter++;   
															if( ( Allcounter >= lowercounter ) && ( Allcounter < upercounter )  ){

																	   usrChk = ( $("#selected_label_"+value.id).length )? 'usrChkd' : 'usrChk';
																	   html +='<li class="recipient_list" id="list_li_'+value.id+'" >'
										                        		+'<p>'
										                        		+'<span>'
										                        		+'<img src="http://static.patel.com/images/spacer.gif" style="background-image:url('+value.avatarUrl+');">'
										                        		+'</span>'
										                        		+'<strong>'
										                        		+'<span>'+name+'</span></strong>'
										                        		+'</p>'
										                        		+'<label id="label_'+value.id+'" data-id="'+value.id+'"  class="'+usrChk+'"><a href="javascript:void(0)" class="tocheck" data-id="'+value.id+'"  data-name="'+value.username+'" ></a> </label>'
										                        		+'</li>'; 
															 }
															 else if ( Allcounter > upercounter ) { 

															 	return false;

															} else { 
																 // pass
															}  
												} 

							    }); 
								if(ldmBtn){ 
									html +='<div id="appenddiv"></div><li id="li_ldMre" class="'+s.loader_more+'" ><a href="javascript:void(0)" id="ldMre" data-page="1" data-url="" >Load More</a></li>';
									html += '<div id="No_results" class="nthng" style="display: none;"><p>No results found.</p></div>';
								} 
							}    
 							if( Allcounter < upercounter ){$("#li_ldMre").hide(); }
							return html;
						}; 

						var container  = $(this);
						var html;  
						var s = $.extend({
							            //These are the defaults. 
							            selectLimit : 10 ,
										friend_list : [] , 
										pageSize : 10,
										loader_more : 'cat_loader_more ldMre', 
										btntext : "Share",
										customformhtml : "" , 
										formAction : "" , 
										formPlaceholder : "",
										errorMsg : "maximum selected" , 
										hideSelected_user : false
										 }, options );

						html = '<div id="msg"></div><div class="addFrnds">'
							   +'<p>To:</p> <span> <input type="text" id="addList_filter" name="s" value="" placeholder="'+s.formPlaceholder+'" autocomplete="off"> <i id="searchTxt_cross" style="display:none;">x</i>'
							   +'<form id="sendForm" action="'+s.formAction+'" method="post">'
							   + s.customformhtml
							   +'<div id="selected_user"></div>'
							   +'<input type="hidden" id="current_nBcks" name="current_nBcks" value="0">'
							   +'</form> </span><p class="selected_user_send" style="cursor:pointer"> '
							   +'<a href="javascript:void(0)" id="btn_send" class="btn grn">'+s.btntext+'</a></p>'
							   +'</div>';
						
						html  += '<ul>';
						html = gnList( html ,  s , 1 , "" , 1 );
						html  += '</ul>';  
					    container.append(html); 
					    if(s.hideSelected_user){ $("#selected_user").hide(); }
						$(container).on( "click", "#ldMre" , function() { 
							$(this).text('Loading...'); 
							var searchtext = $("#addList_filter").val(); 
							var page = parseInt($(this).attr('data-page'));  
							page = page+1;  
							$("#appenddiv").append( gnList( "" , s ,  page , searchtext ,  0 ) );							
							$(this).attr('data-page' , page );
							$(this).text('Load more'); 
						});

						$(container).on('click' , ".tocheck" ,  function(){ 
							var id = $(this).attr('data-id');  
							if($('#label_'+id).hasClass("usrChk") ){  
								 if(s.selectLimit > $("#selected_user label").length){

								 	var appendHTMl = '<label id="selected_label_'+id+'" ><b>'+$(this).attr('data-name')+'</b><i class="selected_i" data-id="'+id+'" >x</i></label>';
								    appendHTMl +='<input id="chk_'+id+'" type="checkbox" name="user_ids[]"  style="display:none" checked="checked" value="'+id+'">';
								 	
								    $("#selected_user").append( appendHTMl );
								    $('#label_'+id).toggleClass('usrChk usrChkd');

								 }else { 
								 	$(container).scrollTop(); 
								 	$("#msg").html('<strong class="error">'+s.errorMsg+' </strong>')
								 } 
							}else {
								$("#selected_label_"+id +", #chk_"+id).remove();
								$('#label_'+id).toggleClass('usrChk usrChkd');
								$("#msg").html('')
							} 
							
						});

						$(container).on('click' , ".selected_i" ,  function(){ 
							 var id = $(this).attr('data-id');
							 $("#selected_label_"+id +" , #chk_"+id).remove(); 
							 
							 $("#msg").html('')
							 $("#label_"+id).toggleClass('usrChk usrChkd');

						});

						$(container).on('keyup' , "#addList_filter" ,  function(){  
							$(".recipient_list").remove();   
							 searchHtmml = gnList( "" ,  s , 1 , $(this).val()  , 0  ); 
							$("#appenddiv").append( searchHtmml ); 

						});

						$(container).on('click' , "#btn_send" ,  function(){  
							$("#sendForm").submit(); 
						});
						 

  
			}

}(jQuery));

