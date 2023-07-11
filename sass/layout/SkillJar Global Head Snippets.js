// ACADAMEY GLOBAL CODE SNIPPET
<!-- START Remove clickable course tiles in Paths. Add to Global Code Snippet -->
<script>
  /* change the below 'tagBased' variable value  to 'true' if you want to 
  trigger this customization by adding the tag 'not-clickable'
  to a Path object */
  var tagBased = false;
  
$(document).ready(function() {
  if($('[data-tags*="not-clickable"]').length || tagBased == false){
    if($('.sj-page-detail-path').length) {
        $('.coursebox-container').css("pointer-events", "none");
        $('.storefront-price').html($('.course-time').html());
        $('.course-time').css('display', 'none');
        
        //check for expanded details path view and add pointer event back in
        if($('.course-overview__toggle').length) {
          $('.course-overview__toggle').css("pointer-events", "initial");
          $('a.course-overview__content__lesson').css("pointer-events", "none");
        }
    }
  }
});
</script>
<!-- END Remove clickable course tiles in Paths. Add to Global Code Snippet -->

<!-- Start Tag based Page separator JS/CSS -->
<script>
var tagName = '[separator]';
$('document').ready(function(){ 
  $('.coursebox-container').each(function() {
    if($(this).find('.coursebox-text').text().indexOf(tagName) !== -1){
      $(this).find('.coursebox-text').text($(this).find('.coursebox-text').text().replace(tagName, ""));
    }
  });
});
</script>
<!-- End Tag based Page separator JS/CSS -->
<!-- START Personalize by adding first name  -->
<script>
  //when the page fully loads, run the following function
  $(document).ready(function() {
    var welcomeMessage = ", ";
    
    if(typeof skilljarUser !== 'undefined' && skilljarUser.firstName.length <= 15 && skilljarUser.firstName.length > 1){
        $('.first-name').html(skilljarUser.firstName + welcomeMessage);
        $('.first-name').css('display', 'inline-block');
        $('.first-name').css('color', 'inherit');
        $('.first-name').css('margin-right', '5px');
    }
    else{
      $('.first-name').css('display', 'none');
    }
  });
</script>
<!-- END Personalize by adding first name  -->

<!-- START Add Course Tag Pills to Course Tiles - Add to Global Code Snippet -->
<!-- START Add Course Tags to Course Tiles -->
<script>
/* Add the Tags you want to show on Course Tiles to the PILL_CONFIG variable below. 
Enter the exact Tag name (case sensitive) on the first line of the object, and
then configure the hexcode color values for the 'backgroundColor' and 'textColor' variables
2 sample Tags with white text + blue and green backgrounds are provided below. */

var PILL_CONFIG = {
  "Course": {

  },

  "Guide": {

  },
  "Catalog Page": {

  },
  "Learning Path": {

  },
 "Video": {

  },

  "Live Training": {

  },
  "Webinar": {

  },
}  

$(document).ready(function() {
/* iterate over each coursebox container and... */
$('.coursebox-container').each(function() {
  var tagHTML = '<div class="tag-pill-wrapper">';
  var matchingTagFlag = false;
  var tagObject = $(this).attr('data-tags').split(",").forEach(function(courseTag){
    
    /* replace any '-' characters in Tag with spaces  */
    var cleanTag = courseTag.split('-').join(' ');
    
    /* check if cleaned tag is in that mapping dictionary defined above */
    $.each(PILL_CONFIG, function( index, value ) {
      if(index.toLowerCase() == cleanTag.toLowerCase()){
        /* if a tag match is found, append a pill to the HTML wrapper */
        var pillStyle = 'background-color: ' + value['backgroundColor'] 
        + '; color: ' + value['textColor'] + ';';
        tagHTML = tagHTML + '<div class="tag-pill" style="' + pillStyle + '">' + index + '</div>';
        /* match found, so set flag to true so the wrapper gets added to this tile */
        matchingTagFlag = true; 
      }
    });
  });
  /* if we found a tag match for this course, add the wrapper to the tile */
  if(matchingTagFlag == true){
    /* Add Tag Pills after Course Title. Feel free to change this! */
    $(this).find('.coursebox-image').after(tagHTML + '</div>');
    /* shrink top margin on coures description to account for Tag pills */
    $(this).find('.coursebox-text-description').css('margin','10px 0 0');
  }
});
});
</script>
<!-- END Add Course Tag Pills to Course Tiles - Add to Global Code Snippet -->

// INSTITUTE GLOBAL HEAD SNIPPET
<!-- Start Tag based Page separator JS/CSS -->
<script>
var tagName = '[separator]';
$('document').ready(function(){ 
  $('.coursebox-container').each(function() {
    if($(this).find('.coursebox-text').text().indexOf(tagName) !== -1){
      $(this).find('.coursebox-text').text($(this).find('.coursebox-text').text().replace(tagName, ""));
    }
  });
});
</script>
<style>
/* Set font size for separator titles */
a.coursebox-container[data-tags*="separator"] .coursebox-text {
  font-size:30px
}
/* Set font size for separator sub-titles */
a.coursebox-container[data-tags*="separator"] .coursebox-text-description {
  font-size:18px
}
  
/* remove all standard course tile styling, add 100% page width */  
a.coursebox-container[data-tags*="separator"] {
  padding: 20px !important;  
  text-align: center !important;
  width: 100% !important;
  min-height: unset !important;
  background-color: transparent !important;    
  box-shadow: none !important; 
  pointer-events: none !important;
  border: none !important;
}

/* hide course price/CTA text, tile image, hide separator courses from search */
a.coursebox-container[data-tags*="separator"] .storefront-price,
.search a.coursebox-container[data-tags*="separator"],
a.coursebox-container[data-tags*="separator"] .coursebox-image  {
  display: none !important;
}
</style>
<!-- End Tag based Page separator JS/CSS -->
<!-- START Header Links with Mobile View -->
<!-- Global Head Snippet -->

<script>
var HEADER_LINKS = {
 "Invoca": {
    "href": "https://www.invoca.com/",
    "target": "_blank",
  },
 "Community": {
    "href": "https://community.invoca.com/",
  "target": "_blank",
  },
  "POC Support": {
    "href": "https://support.skilljar.com/hc/en-us",
  "target": "_blank",
  },
}
</script>
<style>
#header .header-link:not(.back-to-catalog){font-size:14px;position:relative}@media (min-width: 1213px){#header .header-link:not(.back-to-catalog){font-size:16px}}#header #header-left{padding-left:0;position:unset}#header #header-left #left-nav-button{padding-left:0}#header #header-left #left-nav-button.burger .fa-bars,#header #header-left #left-nav-button.burger .fa-search,#header #header-left #left-nav-button.burger .fa-times{font-size:22px}#header #header-left #left-nav-button.burger .fa-bars::before{content:"\f002";font-family:FontAwesome}#header #header-right{align-items:center;display:flex;position:unset}@media only screen and (max-width: 874px){#header #header-right{flex-grow:1;padding-left:24px}}#header #header-right>.headerheight{flex-shrink:0;height:unset}#header #header-right .login-link{display:none;padding-right:6px}@media (min-width: 875px){#header #header-right .login-link{display:inline-block}}#header #header-right .header-mobile-menu{font-size:26px;margin-left:auto}@media (min-width: 875px){#header #header-right .header-mobile-menu{display:none}}#header #header-right .header-mobile-menu .fa-times{display:none}#header #header-right .header-dropdown-button{display:none;padding-right:1.5em}@media (min-width: 875px){#header #header-right .header-dropdown-button{display:block}}#header #header-right .header-dropdown-button::before{right:0}#header #header-drop{background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,0.1)}#header #header-drop::before{border-color:transparent transparent #fff transparent}.header-wrapper{display:flex;height:100%;justify-content:space-between;margin:auto;padding:0 24px;position:relative;width:100%}.header-link-container{display:none;margin-right:16px;flex-shrink:0;position:relative}@media (min-width: 875px){.header-link-container{display:block}}.header-link-container .header-link{margin:0 16px}.header-mobile-dropdown{background-color:#fff;box-shadow:0 0 0 9999px rgba(0,0,0,0.5);display:none;flex-direction:column;position:fixed;top:6em;width:100%;z-index:4}.header-mobile-dropdown .header-link{padding:20px 32px;font-size:18px}.catalog-filters #left-nav-button{margin-right:12px;margin-top:-2px}body.mobile-menu-open .header-mobile-menu .fa-bars{display:none}body.mobile-menu-open .header-mobile-menu .fa-times{display:block !important}body.mobile-menu-open .header-mobile-dropdown{display:flex}
</style>
<script>
function cueHeader(){$("header").children().wrapAll('<div class="header-wrapper"/>');var e=$('<div class="header-link-container"/>'),a=$('<div class="header-mobile-dropdown"/>');for(var d in HEADER_LINKS){var n=$('<a class="header-link focus-link-v2"/>').text(d).attr(HEADER_LINKS[d]);e.append(n.clone()),a.append(n.clone())}$(".header-link.login-link").length?a.append($(".header-link.login-link").clone()):a.append($("#header-drop .sj-text-my-profile").clone().addClass("header-link"),$("#header-drop .signout-link").clone().addClass("header-link"));$("#header-right").prepend(e).append('<a class="header-mobile-menu header-link"><i class="fa fa-bars"></i><i class="fa fa-times"></i></a>'),$("header").after(a),$("#header, #header-drop, .header-mobile-dropdown").addClass("header-background"),$("#header-drop a").addClass("header-link"),$(".header-mobile-menu").on("click",function(){$("body").toggleClass("mobile-menu-open")}),$(document).on("click",function(e){$(e.target).closest("header").length||$(e.target).closest(".header-mobile-dropdown").length||$("body").removeClass("mobile-menu-open")})}$(document).ready(function(){cueHeader()});
</script>

<!-- END Header Links with Mobile View -->

<style>
.sj-page-catalog #catalog-courses {
 -webkit-box-pack:center;
 -ms-flex-pack:center;
 justify-content:center
}
</style>

<!-- START Personalize by adding first name  -->
<script>
  //when the page fully loads, run the following function
  $(document).ready(function() {
    var welcomeMessage = ", ";
    
    if($(typeof skilljarUser !== 'undefined' && skilljarUser.firstName.length <= 15 && skilljarUser.firstName.length > 1)){
        $('.first-name').html(skilljarUser.firstName + welcomeMessage);
        $('.first-name').css('display', 'inline-block');
        $('.first-name').css('color', 'inherit');
        $('.first-name').css('margin-right', '5px');
    }
    else{
      $('.first-name').css('display', 'none');
    }
  });
</script>
<!-- END Personalize by adding first name  -->
<!-- START Add Course Tags to Course Tiles -->
<script>
/* Add the Tags you want to show on Course Tiles to the PILL_CONFIG variable below. 
Enter the exact Tag name (case sensitive) on the first line of the object, and
then configure the hexcode color values for the 'backgroundColor' and 'textColor' variables
2 sample Tags with white text + blue and green backgrounds are provided below. */

var PILL_CONFIG = {
  "Beginner": {

  },

  "Intermediate": {

  },
  "Advanced": {

  },
  "Learning Path": {

  },
}  

$(document).ready(function() {
/* iterate over each coursebox container and... */
$('.coursebox-container').each(function() {
  var tagHTML = '<div class="tag-pill-wrapper">';
  var matchingTagFlag = false;
  var tagObject = $(this).attr('data-tags').split(",").forEach(function(courseTag){
    
    /* replace any '-' characters in Tag with spaces  */
    var cleanTag = courseTag.split('-').join(' ');
    
    /* check if cleaned tag is in that mapping dictionary defined above */
    $.each(PILL_CONFIG, function( index, value ) {
      if(index.toLowerCase() == cleanTag.toLowerCase()){
        /* if a tag match is found, append a pill to the HTML wrapper */
        var pillStyle = 'background-color: ' + value['backgroundColor'] 
        + '; color: ' + value['textColor'] + ';';
        tagHTML = tagHTML + '<div class="tag-pill" style="' + pillStyle + '">' + index + '</div>';
        /* match found, so set flag to true so the wrapper gets added to this tile */
        matchingTagFlag = true; 
      }
    });
  });
  /* if we found a tag match for this course, add the wrapper to the tile */
  if(matchingTagFlag == true){
    /* Add Tag Pills after Course Title. Feel free to change this! */
    $(this).find('.coursebox-image').after(tagHTML + '</div>');
    /* shrink top margin on coures description to account for Tag pills */
    $(this).find('.coursebox-text-description').css('margin','10px 0 0');
  }
});
});
</script>
<!-- END Add Course Tag Pills to Course Tiles - Add to Global Code Snippet -->
