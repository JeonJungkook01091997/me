
var setVanta = ()=>{
if (window.VANTA) window.VANTA.FOG({
  experience-container: ".s-page-1 .s-section-1 .s-section",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  highlightColor: 0x5c758b,
  midtoneColor: 0x453488,
  lowlightColor: 0x24197c,
  baseColor: 0x1a1117
})
}
_strk.push(function() {
  setVanta()
  window.edit_page.Event.subscribe( "Page.beforeNewOneFadeIn", setVanta )
})
