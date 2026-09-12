// Showtime's comedy/adventure/science/space rotation.
// Availability is rechecked in the player and failed sources are replaced.
window.HERMIT_CATALOG = [
  { id:"SHO-001", title:"Without a Paddle", year:2004, collection:"Wild Comedy Adventure", runtimeSeconds:5940, videoId:"BeiSL-fyaxA", source:"YouTube Movies", networkChannel:"Showtime", cleared:true },
  { id:"SHO-002", title:"Paul", year:2011, collection:"Space Comedy", runtimeSeconds:6240, videoId:"EfQKYtutmNc", source:"YouTube Movies", networkChannel:"Showtime", cleared:true },
  { id:"SHO-003", title:"Bumblebee", year:2018, collection:"Robot Adventure", runtimeSeconds:6840, videoId:"nzn1m-hbPYw", source:"YouTube Movies", networkChannel:"Showtime", cleared:true },
  { id:"SHO-004", title:"Jules", year:2023, collection:"Science-Fiction Comedy", runtimeSeconds:5220, videoId:"NOvDzH1ixxQ", source:"YouTube Movies", networkChannel:"Showtime", cleared:true },
  { id:"SHO-005", title:"A-X-L", year:2018, collection:"Robot Companion Adventure", runtimeSeconds:5880, videoId:"dygYCbG-jNk", source:"YouTube Movies", networkChannel:"Showtime", cleared:true },
  { id:"SHO-006", title:"Masterminds", year:2016, collection:"Heist Comedy", runtimeSeconds:5700, videoId:"WzJFojW2tkY", source:"YouTube Movies", networkChannel:"Showtime", cleared:true },
  { id:"SHO-007", title:"The Spy Next Door", year:2010, collection:"Family Action Comedy", runtimeSeconds:5640, videoId:"gNK-Yr8ktgM", source:"YouTube Movies", networkChannel:"Showtime", cleared:true },
  { id:"SHO-008", title:"Ghost Town", year:2008, collection:"Supernatural Comedy", runtimeSeconds:6120, videoId:"MGdx0wt2fkg", source:"YouTube Movies", networkChannel:"Showtime", cleared:true },
  { id:"SHO-009", title:"Get the Gringo", year:2012, collection:"Action Comedy", runtimeSeconds:5760, videoId:"bWUeQEtDiyc", source:"YouTube Movies", networkChannel:"Showtime", cleared:true },
  { id:"SHO-010", title:"Volition", year:2019, collection:"Time-Bending Science Fiction", runtimeSeconds:5460, videoId:"DtIhPaYsEY0", source:"YouTube Movies", networkChannel:"Showtime", cleared:true },
  { id:"SHO-011", title:"So Undercover", year:2012, collection:"Undercover Comedy", runtimeSeconds:5640, videoId:"ZldYaXKZlrs", source:"YouTube Movies", networkChannel:"Showtime", cleared:true },
  { id:"SHO-012", title:"UFO", year:2018, collection:"First Contact", runtimeSeconds:5280, videoId:"tIjtlGXeDyc", source:"YouTube Movies", networkChannel:"Showtime", cleared:true },
  { id:"SHO-013", title:"100% Wolf", year:2020, collection:"Animated Adventure", runtimeSeconds:5760, videoId:"Rf4eApq8LpE", source:"YouTube Movies", networkChannel:"Showtime", cleared:true },
  { id:"SHO-014", title:"Cool Dog", year:2010, collection:"Family Road Adventure", runtimeSeconds:5280, videoId:"1tIke8ESI9Q", source:"YouTube Movies", networkChannel:"Showtime", cleared:true }
].map(program => ({ ...program, posterUrl:"" }));

window.INFINITY_CHANNEL = {
  id:"Showtime",
  era:"2000-2026",
  genres:["comedy", "adventure", "robots", "science", "space"],
  schedulePolicy:"No title or YouTube video ID may air on another Infinity channel on the same station date."
};

// Tomorrow's ad layer can replace each 60-second station card with four
// personalized 15-second spots. Blank IDs intentionally keep tonight ad-free.
window.HERMIT_COMMERCIALS = [
  { id:"AD-001", title:"Showtime intermission", durationSeconds:60, videoId:"", cleared:true },
  { id:"AD-002", title:"Tonight on Showtime", durationSeconds:60, videoId:"", cleared:true },
  { id:"AD-003", title:"Showtime station break", durationSeconds:60, videoId:"", cleared:true }
];
