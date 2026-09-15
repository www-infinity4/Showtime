// Showtime resilient catalog.
// YouTube Movies/DRM listings are intentionally excluded because paid or protected
// listings can fail inside third-party embeds. The live rotation uses ordinary
// full-length distributor uploads already proven usable by the channel family.
window.HERMIT_CATALOG = [
  { id:"SHO-SAFE-001", title:"Daddy Daughter Trip", year:2025, collection:"Family Comedy Premiere", runtimeSeconds:5795, videoId:"fIhM9MiEN50", source:"Movie Central", networkChannel:"Showtime", contentClass:"Family", cleared:true },
  { id:"SHO-SAFE-002", title:"Mayberry Man", year:2022, collection:"Small-Town Comedy", runtimeSeconds:5927, videoId:"a_AwfI9TPY8", source:"EncourageTV", networkChannel:"Showtime", contentClass:"Family", cleared:true },
  { id:"SHO-SAFE-003", title:"Accidental Family", year:2021, collection:"Romantic Comedy", runtimeSeconds:5672, videoId:"XH63ZMpgsAk", source:"Movie Central", networkChannel:"Showtime", contentClass:"Family", cleared:true },
  { id:"SHO-SAFE-004", title:"Stinky Summer", year:2025, collection:"Summer Adventure", runtimeSeconds:5415, videoId:"Gxa3gWpVPes", source:"Family Central", networkChannel:"Showtime", contentClass:"Family", cleared:true },
  { id:"SHO-SAFE-005", title:"Runs in the Family", year:2023, collection:"Adventure Comedy", runtimeSeconds:6300, videoId:"AuwUwN1JVec", source:"Established free full-length upload", networkChannel:"Showtime", contentClass:"Family", cleared:true },
  { id:"SHO-SAFE-006", title:"Moving McAllister", year:2007, collection:"Road Comedy", runtimeSeconds:5340, videoId:"mVZOMXWsExs", source:"Established free full-length upload", networkChannel:"Showtime", contentClass:"Family", cleared:true }
].map(program => ({ ...program, posterUrl:"" }));

window.INFINITY_CHANNEL = {
  id:"SHOWTIME",
  era:"2000-2026",
  genres:["comedy", "adventure", "family", "science", "space"],
  sourcePolicy:"No YouTube Movies DRM IDs, age-restricted videos, trailers, promos or short clips.",
  schedulePolicy:"Only ordinary full-length distributor uploads may enter the live rotation."
};

window.HERMIT_COMMERCIALS = [
  { id:"AD-001", title:"Showtime intermission", durationSeconds:60, videoId:"", cleared:true },
  { id:"AD-002", title:"Tonight on Showtime", durationSeconds:60, videoId:"", cleared:true },
  { id:"AD-003", title:"Showtime station break", durationSeconds:60, videoId:"", cleared:true }
];

(function syncInfinityChannels(){
  if (document.querySelector('script[data-infinity-channels]')) return;
  const script = document.createElement('script');
  script.src = 'https://www-infinity4.github.io/TNT/channels.js?v=20260915-live1';
  script.dataset.infinityChannels = '1';
  document.head.appendChild(script);
})();
