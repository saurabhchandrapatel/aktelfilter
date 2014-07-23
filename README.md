##  aktelfilter
===========
### example :
**html**

  <div class="frndLstng" </div>


**js** 
<script type="text/javascript" 
    $(document).ready(function(){  
        $(".frndLstng").filter( 
                { 

                    friend_list : list ,
                    formPlaceholder : "Send this gift to upto 10 friends",
                    errorMsg : "You have already selected maximum friends",
                    // hideSelected_user : true
                    // formAction : "post.html" , 
                    // selectLimit : 10 ,
										// pageSize : 10,
										// loader_more : 'cat_loader_more ldMre', 
										// btntext : "Share",
										// customformhtml : "" , 
										// formAction : "" , 
										// formPlaceholder : "",
										// errorMsg : "maximum selected" , 
										// hideSelected_user : false
										
                } 
        ); 
    });
 
</script