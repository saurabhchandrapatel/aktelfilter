#aktelfilter 

  Filter you json with aktel filter.
##HTML
```html
   <div class="frndLstng"> </div> 
```

##javascript
```javascript
   <script type="text/javascript"> 
    $(document).ready(function(){  
        $(".frndLstng").filter( 
                { 

                    friend_list : list ,
                    formPlaceholder : "Send this gift to upto 10 friends",
                    errorMsg : "You have already selected maximum friends",
                    // hideSelected_user : true
                    formAction : "post.html" , 
                    
                } 
        ); 
    });
 
  </script> 
```

