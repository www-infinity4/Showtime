// Showtime classic-movie catalog.
// Keep the live channel on licensed/official full-length YouTube distributor uploads.
// Do not schedule trailers, clip compilations, YouTube Movies storefront/DRM IDs,
// or random reuploads whose rights cannot be established.
window.HERMIT_CATALOG = [
  { id:"SHO-CLASSIC-001", title:"Prom Night", year:1980, collection:"1980s Cult Horror", runtimeSeconds:5579, videoId:"ouVDididpws", source:"FilmRise Movies", sourceClass:"verified distributor", networkChannel:"Showtime", contentClass:"Movie", cleared:true },
  { id:"SHO-CLASSIC-002", title:"The Long Walk Home", year:1990, collection:"1990s Drama", runtimeSeconds:5820, videoId:"OsuY1bDCMe8", source:"FilmRise Movies", sourceClass:"verified distributor", networkChannel:"Showtime", contentClass:"Movie", cleared:true },
  { id:"SHO-CLASSIC-003", title:"Party Girl", year:1995, collection:"1990s Indie Comedy", runtimeSeconds:5640, videoId:"ImNmTjLAsG8", source:"FilmRise Movies", sourceClass:"verified distributor", networkChannel:"Showtime", contentClass:"Movie", cleared:true },
  { id:"SHO-CLASSIC-004", title:"My Brother the Pig", year:1999, collection:"1990s Family Comedy", runtimeSeconds:5328, videoId:"WfrO3fLP8zc", source:"FilmRise Movies", sourceClass:"verified distributor", networkChannel:"Showtime", contentClass:"Movie", cleared:true }
].map(program => ({ ...program, posterUrl:"", watchUrl:`https://www.youtube.com/watch?v=${program.videoId}` }));

window.INFINITY_CHANNEL = {
  id:"Showtime",
  era:"1980-1999 classic movie rotation",
  genres:["comedy", "drama", "adventure", "cult", "suspense"],
  sourcePolicy:"Licensed or official distributor full-length uploads only; no DRM storefront IDs, trailers, promos or random reposts.",
  schedulePolicy:"The Showtime rotation is deliberately different from Cinemax and favors older 1980s-1990s features."
};

window.HERMIT_COMMERCIALS = [
  { id:"AD-001", title:"Showtime intermission", durationSeconds:60, videoId:"", cleared:true },
  { id:"AD-002", title:"Tonight on Showtime", durationSeconds:60, videoId:"", cleared:true },
  { id:"AD-003", title:"Showtime station break", durationSeconds:60, videoId:"", cleared:true }
];
