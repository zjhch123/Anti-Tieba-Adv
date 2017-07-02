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

  // var _fiter = curry(function(f, dom) {
  //   return dom.filter(f);
  // });

  // var _hideAdv = curry(function(dom) {
  //   dom.style.display = "none";
  //   return dom;
  // });

  // var hide = compose(_map(_hideAdv), filter(function() { return true; }));

  hideAdv('.aside_region.my_app.j_encourage_entry');
  hideAdv('#thread_list>li', function(ele) {
    if(!ele.getAttribute("data-field")) {
      return true;
    } else {
      return false;
    }
  });
  hideAdv('.aside .celebrity');
  hideAdv('.aside .app_download_box');
  hideAdv('.topic_list_box');
  hideAdv('.forum_recommend');
  hideAdv('.gift-goin');
  hideAdv(".thread_recommend");
  hideAdv('.tbui_slideshow_container');
  hideAdv('.right_section .celebrity');
  hideAdv('.right_section .app_download_box');
  hideAdv('.right_section .video_aside');
})()