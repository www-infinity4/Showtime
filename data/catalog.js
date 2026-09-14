// Unique seed bucket 5/8 for Showtime.
// Control Phi's movie source farm expands this channel toward 96 distinct,
// profile-matched full movies. The seed IDs are never shared with another
// movie-channel seed catalog.
(function(){
  "use strict";

  const rows = [
    ["Tad: The Lost Explorer",5516,"BCiJ_oEZp10","Family Central"],
    ["Christmas Cupcakes",5303,"PLfY5kkilDo","Family Central"],
    ["Aperture Kids and the Mysterious Neighbor",5195,"fpkKrYxj-w0","Family Central"],
    ["Skydog",6528,"MMKHRyb6PfI","Family Central"],
    ["Courageous Love",6018,"t21hgLkHQH8","EncourageTV"],
    ["Forgiveness Girl",6661,"SMhZXMNPzD8","EncourageTV"],
    ["A Holiday Homecoming",5074,"-henyvmkaOI","Movie Central"],
    ["Deep Sea",6744,"3-dwGGwoIcQ","Shout! Studios"],
    ["Cats",5446,"QrnXZgFYMbk","Shout! Studios"],
    ["Opal Dream",5127,"bwnXCtBHKmQ","Shout! Studios"],
    ["Kikoriki: Team Invincible",5470,"vZT3O3Gp7Mk","Shout! Studios"],
    ["Lucy Shimmers and the Prince of Peace",5251,"BhRNnsC0ugA","EncourageTV Kids"]
  ];

  window.HERMIT_CATALOG=rows.map(function(row,index){return{id:"SHOWTIME-SEED-"+String(index+1).padStart(3,"0"),title:row[0],year:null,collection:"Comedy / Drama Seed",runtimeSeconds:row[1],videoId:row[2],source:row[3],networkChannel:"Showtime",contentClass:"Seed Feature",rating:"Unrated",cleared:true,posterUrl:""};});
  window.INFINITY_CHANNEL={id:"SHOWTIME",sourcePolicy:"Unique static seed bucket 5/8. Runtime catalog expansion comes from Showtime's own Control Phi source profile.",schedulePolicy:"Seven-day no-repeat scheduler. Missing inventory stays empty until unique sources are harvested; it never wraps the seed list."};
  window.HERMIT_COMMERCIALS=[{id:"AD-001",title:"Showtime intermission",durationSeconds:60,videoId:"",cleared:true}];
})();
