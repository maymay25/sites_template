var MoreLinksShowHandles,
    ShowMoreLinks='';
function showMoreLinks(e,t){clearTimeout(MoreLinksShowHandles),document.getElementById(e).style.display="block",t&&(document.getElementById(e+"Handle").className=t),e!=ShowMoreLinks&&ShowMoreLinks!=""&&(document.getElementById(ShowMoreLinks).style.display="none",t&&(document.getElementById(e+"Handle").className=t)),ShowMoreLinks=e}
function hideMoreLinks(e,t){MoreLinksShowHandles=setTimeout(function(){document.getElementById(e).style.display="none",t&&(document.getElementById(e+"Handle").className=t)},500)}


$(function(){
  $("#frame-logo,#GenreMoreLinks").hover(function(){
    showMoreLinks("GenreMoreLinks",'');
    console.info('show');
  },function(){
    hideMoreLinks("GenreMoreLinks",'');
    console.info('hide');
  })
})