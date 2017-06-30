;(function() {
  var hideAdv = function(dom, filter) {
    [].slice.call(document.querySelectorAll(dom), 0).forEach(function(ele) {
      if(typeof filter === 'function') {
        if(filter(ele)) {
          ele.style.display = "none"
        }
      } else {
        ele.style.display = "none";  
      }
    });
  };

  hideAdv('.aside_region.my_app.j_encourage_entry');
  hideAdv('#thread_list>li', function(ele) {
    if(!ele.getAttribute("data-field")) {
      return true;
    } else {
      return false;
    }
  });
  hideAdv('.tbui_slideshow_container');
  hideAdv('.aside_region.celebrity');
  hideAdv('.aside_region.app_download_box');
})()