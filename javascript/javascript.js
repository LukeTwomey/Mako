$(document).ready(function () {
    
    /* To avoid FOUC (flash of unstyled content), js class is being added by the code in head. Remove this class from html element now document is ready */
    $('html').removeClass('js'); 

    $(".fancybox").fancybox({
        'margin': 0,
        'padding': 0,
        'arrows': true,
        'closeBtn': false,
        'closeClick': true
    });
    
    $(function() {
        FastClick.attach(document.body);
    });
    
    
    /*****************   NAV   *****************/
    
    $(".menu").click(function(){
        $("nav").slideToggle();
        $("body").toggleClass("freeze");
    });
    
    /* When you tap the button in the mobile navigation, toggle the child menu */
    $(".parent").click(function(e){
        e.stopPropagation();
        
        $(this).children("ul").slideToggle();
        
        /* For some reason the default BC javascript to check the "selected" state of a menu item is removing classes set by jquery.
           Therefore need to get creative. Check the background image currently in use, and if it's "submenu.png" change it to "submenu-close.png" when clicked */
        var backgroundImage = $(this).css("backgroundImage");
        var submenuOpenImage = "submenu.png";

        if(backgroundImage.indexOf(submenuOpenImage) != -1) {
            $(this).css("backgroundImage", "url(/images/icons/submenu-close.png)");
        } else {
            $(this).css("backgroundImage", "url(/images/icons/submenu.png)");
        }
    });
    
    /* To prevent the click event propogating to the parent li, and starting to drop down the child menu
       just before the link is navigated to - you need to stop propogation/bubbling when that link is clicked */
	$(".parent a").click(function(e) {
       e.stopPropagation();
    })
    
    
    /* Make it so you can single tap on touch device to open dropdown menu without automatically navigating to page */
    var hasTouch = ("ontouchstart" in window);
        
    if (hasTouch && document.querySelectorAll) {
        var i, len, element,
            dropdowns = document.querySelectorAll("#main-menu li.parent > a");
        console.log ("hey" + dropdowns.length);
     
        function menuTouch(event) {
            // toggle flag for preventing click for this link
            var i, len, noclick = !(this.dataNoclick);
     
            // reset flag on all links
            for (i = 0, len = dropdowns.length; i < len; ++i) {
                dropdowns[i].dataNoclick = false;
            }
     
            // set new flag value and focus on dropdown menu
            this.dataNoclick = noclick;
            this.focus();
        }
     
        function menuClick(event) {
            // if click isn't wanted, prevent it
            if (this.dataNoclick) {
                event.preventDefault();
            }
        }
     
        for (i = 0, len = dropdowns.length; i < len; ++i) {
            console.log("doing stuff");
            element = dropdowns[i];
            element.dataNoclick = false;
            element.addEventListener("touchstart", menuTouch, false);
            element.addEventListener("click", menuClick, false);
        }
    }
    
});