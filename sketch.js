const deptPath = 'SCP DEPTS';
const colorPath = 'SCP BACKS';

let titleField, accessField, magstripeField, colorField, departmentField, badgeField;
let base_logo, icx_logo, barcodeCanvas, ci_logo, ci_logo_inv;
let colorBacks = {};
let deptLogos = {};
let deptLogosInv = {};
let ocrFont, impactFont;

const scpeggs = [{"Designation": "SCP-6566","Egg": "Kondraki's butterfly swarm"},{"Designation": "SCP-7010","Egg": "Safe class object"},{"Designation": "SCP-6351","Egg": "Thaumiel protocol active"},{"Designation": "SCP-6039","Egg": "Redacted for safety"},{"Designation": "SCP-6088","Egg": "Scranton box shut"},{"Designation": "SCP-4374","Egg": "Safe class object"},{"Designation": "SCP-1900","Egg": "The gate guardian"},{"Designation": "SCP-5476","Egg": "Deer god forest"},{"Designation": "SCP-6503","Egg": "Nullify the field"},{"Designation": "SCP-5746","Egg": "D-class disposal"},{"Designation": "SCP-6878","Egg": "Cain's mark remains"},{"Designation": "SCP-6924","Egg": "Alagadda black stars"},{"Designation": "SCP-1258","Egg": "Foundation keeps secrets"},{"Designation": "SCP-3650","Egg": "Reality is fragile"},{"Designation": "SCP-7648","Egg": "Moon is gone"},{"Designation": "SCP-2360","Egg": "Eden's flaming sword"},{"Designation": "SCP-1725","Egg": "The lizard lives"},{"Designation": "SCP-2143","Egg": "Secure contain protect"},{"Designation": "SCP-7061","Egg": "Broken god rises"},{"Designation": "SCP-6497","Egg": "Deepwood whispers"},{"Designation": "SCP-3281","Egg": "Moon is gone"},{"Designation": "SCP-2377","Egg": "Red ice cold"},{"Designation": "SCP-7819","Egg": "Anchor the soul"},{"Designation": "SCP-5000","Egg": "Mobile task force"},{"Designation": "SCP-3533","Egg": "Unlondon underground"},{"Designation": "SCP-3225","Egg": "Containment is key"},{"Designation": "SCP-5440","Egg": "Deer god forest"},{"Designation": "SCP-897","Egg": "Reality is fragile"},{"Designation": "SCP-4114","Egg": "Reality is fragile"},{"Designation": "SCP-6131","Egg": "Hanged king waits"},{"Designation": "SCP-2796","Egg": "Clef's shotgun blast"},{"Designation": "SCP-4923","Egg": "Old man rot"},{"Designation": "SCP-3900","Egg": "Redacted for safety"},{"Designation": "SCP-5756","Egg": "Pandora's box opens"},{"Designation": "SCP-2193","Egg": "Eden's flaming sword"},{"Designation": "SCP-7360","Egg": "Foundation keeps secrets"},{"Designation": "SCP-1993","Egg": "Hanged king waits"},{"Designation": "SCP-5668","Egg": "Keter containment breach"},{"Designation": "SCP-2297","Egg": "The lizard lives"},{"Designation": "SCP-7062","Egg": "Never look back"},{"Designation": "SCP-037","Egg": "Lock the door"},{"Designation": "SCP-032","Egg": "Burning man walks"},{"Designation": "SCP-3968","Egg": "Silence is golden"},{"Designation": "SCP-3988","Egg": "Scarlet king coming"},{"Designation": "SCP-7341","Egg": "Seven brides weeping"},{"Designation": "SCP-4599","Egg": "Epsilon eleven arrival"},{"Designation": "SCP-6177","Egg": "Doctor is in"},{"Designation": "SCP-3352","Egg": "Doctor is in"},{"Designation": "SCP-6475","Egg": "Peanut crunch"},{"Designation": "SCP-058","Egg": "Amnestic type A"},{"Designation": "SCP-6347","Egg": "Burning man walks"},{"Designation": "SCP-2805","Egg": "History is rewritten"},{"Designation": "SCP-1965","Egg": "Mobile task force"},{"Designation": "SCP-3028","Egg": "Deepwood whispers"},{"Designation": "SCP-3300","Egg": "Data expunged here"},{"Designation": "SCP-2706","Egg": "Doctor is in"},{"Designation": "SCP-6171","Egg": "Don't blink"},{"Designation": "SCP-1493","Egg": "Void is hungry"},{"Designation": "SCP-3323","Egg": "Euclid level threat"},{"Designation": "SCP-3276","Egg": "Doctor is in"},{"Designation": "SCP-2565","Egg": "Future is dark"},{"Designation": "SCP-4384","Egg": "History is rewritten"},{"Designation": "SCP-753","Egg": "History is rewritten"},{"Designation": "SCP-2970","Egg": "Broken masquerade event"},{"Designation": "SCP-1127","Egg": "Infinite IKEA aisles"},{"Designation": "SCP-5926","Egg": "Last hope remains"},{"Designation": "SCP-3934","Egg": "Sarkic flesh pits"},{"Designation": "SCP-1427","Egg": "Mobile task force"},{"Designation": "SCP-017","Egg": "Cognitohazard detected"},{"Designation": "SCP-3206","Egg": "Site nineteen incident"},{"Designation": "SCP-3219","Egg": "Euclid level threat"},{"Designation": "SCP-5044","Egg": "Nullify the field"},{"Designation": "SCP-1358","Egg": "Broken masquerade event"},{"Designation": "SCP-1557","Egg": "Shadow over site"},{"Designation": "SCP-989","Egg": "Cain's mark remains"},{"Designation": "SCP-781","Egg": "Apollyon end times"},{"Designation": "SCP-6630","Egg": "Nine tailed fox"},{"Designation": "SCP-7653","Egg": "Fifthist star signs"},{"Designation": "SCP-504","Egg": "Keter containment breach"},{"Designation": "SCP-5113","Egg": "Signal lost forever"},{"Designation": "SCP-1300","Egg": "Field agent down"},{"Designation": "SCP-7150","Egg": "Site nineteen incident"},{"Designation": "SCP-6856","Egg": "Memory wiped clean"},{"Designation": "SCP-6423","Egg": "Broken god rises"},{"Designation": "SCP-6935","Egg": "D-class disposal"},{"Designation": "SCP-4169","Egg": "Cognitohazard detected"},{"Designation": "SCP-7686","Egg": "Lies told well"},{"Designation": "SCP-2022","Egg": "Truth is hidden"},{"Designation": "SCP-6212","Egg": "Doctor Bright's prank"},{"Designation": "SCP-6979","Egg": "Wake up now"},{"Designation": "SCP-1304","Egg": "Seven brides weeping"},{"Designation": "SCP-7111","Egg": "Shy guy screams"},{"Designation": "SCP-6580","Egg": "Thaumiel protocol active"},{"Designation": "SCP-723","Egg": "Thaumiel protocol active"},{"Designation": "SCP-4855","Egg": "Anchor the soul"},{"Designation": "SCP-5059","Egg": "The sculpture watches"},{"Designation": "SCP-3262","Egg": "Fifthist star signs"},{"Designation": "SCP-5477","Egg": "Last hope remains"},{"Designation": "SCP-5876","Egg": "Memory wiped clean"},{"Designation": "SCP-5739","Egg": "Memetic hazard warning"},{"Designation": "SCP-5294","Egg": "D-class disposal"},{"Designation": "SCP-067","Egg": "O5 council secret"},{"Designation": "SCP-521","Egg": "Memetic hazard warning"},{"Designation": "SCP-1377","Egg": "Type green found"},{"Designation": "SCP-7278","Egg": "Mole rats dig"},{"Designation": "SCP-4704","Egg": "Safe class object"},{"Designation": "SCP-3234","Egg": "The dream ends"},{"Designation": "SCP-1410","Egg": "Infinite IKEA aisles"},{"Designation": "SCP-7951","Egg": "Euclid level threat"},{"Designation": "SCP-6702","Egg": "Safe class object"},{"Designation": "SCP-6762","Egg": "Field agent down"},{"Designation": "SCP-7776","Egg": "Foundation keeps secrets"},{"Designation": "SCP-273","Egg": "Darkness within us"},{"Designation": "SCP-6429","Egg": "Nullify the field"},{"Designation": "SCP-7038","Egg": "Truth is hidden"},{"Designation": "SCP-4940","Egg": "The sun bleeds"},{"Designation": "SCP-2934","Egg": "Mobile task force"},{"Designation": "SCP-2800","Egg": "Reality bender alert"},{"Designation": "SCP-3592","Egg": "Future is dark"},{"Designation": "SCP-4565","Egg": "The lizard lives"},{"Designation": "SCP-7663","Egg": "Safe class object"},{"Designation": "SCP-7769","Egg": "Data expunged here"},{"Designation": "SCP-296","Egg": "Sarkic flesh pits"},{"Designation": "SCP-3809","Egg": "Doctor Bright's prank"},{"Designation": "SCP-3606","Egg": "Gears' cold logic"},{"Designation": "SCP-5085","Egg": "End of death"},{"Designation": "SCP-2942","Egg": "Type green found"},{"Designation": "SCP-6973","Egg": "Throw away key"},{"Designation": "SCP-4604","Egg": "Last hope remains"},{"Designation": "SCP-7106","Egg": "Void is hungry"},{"Designation": "SCP-4341","Egg": "Mobile task force"},{"Designation": "SCP-007","Egg": "Scarlet king coming"},{"Designation": "SCP-3538","Egg": "Nullify the field"},{"Designation": "SCP-3889","Egg": "Shy guy screams"},{"Designation": "SCP-4999","Egg": "Abel's blade strikes"},{"Designation": "SCP-3318","Egg": "Broken god rises"},{"Designation": "SCP-6658","Egg": "Unlondon underground"},{"Designation": "SCP-5983","Egg": "Redacted for safety"},{"Designation": "SCP-2712","Egg": "Light fades away"},{"Designation": "SCP-5911","Egg": "Apollyon end times"},{"Designation": "SCP-5527","Egg": "Site nineteen incident"},{"Designation": "SCP-3521","Egg": "Clef's shotgun blast"},{"Designation": "SCP-5035","Egg": "Secure contain protect"},{"Designation": "SCP-7924","Egg": "Memory wiped clean"},{"Designation": "SCP-7917","Egg": "The gate guardian"},{"Designation": "SCP-813","Egg": "Doctor is in"},{"Designation": "SCP-2965","Egg": "Stairwell descent"},{"Designation": "SCP-2824","Egg": "The lizard lives"},{"Designation": "SCP-777","Egg": "Shadow over site"},{"Designation": "SCP-4563","Egg": "Doctor Bright's prank"},{"Designation": "SCP-3826","Egg": "The lizard lives"},{"Designation": "SCP-3126","Egg": "Data expunged here"},{"Designation": "SCP-7003","Egg": "Kondraki's butterfly swarm"},{"Designation": "SCP-6314","Egg": "Stairwell descent"},{"Designation": "SCP-556","Egg": "Wake up now"},{"Designation": "SCP-6373","Egg": "Doctor Bright's prank"},{"Designation": "SCP-2515","Egg": "Reality bender alert"},{"Designation": "SCP-7403","Egg": "Pandora's box opens"},{"Designation": "SCP-4193","Egg": "Wake up now"},{"Designation": "SCP-4042","Egg": "Deepwood whispers"},{"Designation": "SCP-7860","Egg": "Nullify the field"},{"Designation": "SCP-171","Egg": "Light fades away"},{"Designation": "SCP-1785","Egg": "Darkness within us"},{"Designation": "SCP-1988","Egg": "Foundation keeps secrets"},{"Designation": "SCP-3205","Egg": "Data expunged here"},{"Designation": "SCP-5599","Egg": "Red ice cold"},{"Designation": "SCP-5204","Egg": "Never open again"},{"Designation": "SCP-2450","Egg": "Chaos insurgency strike"},{"Designation": "SCP-5250","Egg": "Burning man walks"},{"Designation": "SCP-1629","Egg": "Cain's mark remains"},{"Designation": "SCP-2648","Egg": "The dream ends"},{"Designation": "SCP-7313","Egg": "Pattern screamer void"},{"Designation": "SCP-5194","Egg": "End of death"},{"Designation": "SCP-2311","Egg": "Scranton box shut"},{"Designation": "SCP-4933","Egg": "Redacted for safety"},{"Designation": "SCP-5950","Egg": "Apollyon end times"},{"Designation": "SCP-1631","Egg": "Shadow over site"},{"Designation": "SCP-2020","Egg": "Signal lost forever"},{"Designation": "SCP-6706","Egg": "The gate guardian"},{"Designation": "SCP-7920","Egg": "Clef's shotgun blast"},{"Designation": "SCP-7357","Egg": "Scranton box shut"},{"Designation": "SCP-7104","Egg": "Mole rats dig"},{"Designation": "SCP-5485","Egg": "Euclid level threat"},{"Designation": "SCP-4603","Egg": "Wake up now"},{"Designation": "SCP-6799","Egg": "Clockwork heart beats"},{"Designation": "SCP-7720","Egg": "Site nineteen incident"},{"Designation": "SCP-4034","Egg": "Broken god rises"},{"Designation": "SCP-3409","Egg": "Keter containment breach"},{"Designation": "SCP-7210","Egg": "Keep it secret"},{"Designation": "SCP-5061","Egg": "Containment is key"},{"Designation": "SCP-6971","Egg": "Alagadda black stars"},{"Designation": "SCP-6750","Egg": "Memetic hazard warning"},{"Designation": "SCP-4683","Egg": "Void is hungry"},{"Designation": "SCP-5716","Egg": "Lies told well"},{"Designation": "SCP-4461","Egg": "Never open again"},{"Designation": "SCP-165","Egg": "Never open again"},{"Designation": "SCP-7035","Egg": "Chaos insurgency strike"},{"Designation": "SCP-694","Egg": "Secure contain protect"},{"Designation": "SCP-4518","Egg": "D-class disposal"},{"Designation": "SCP-5645","Egg": "Don't blink"},{"Designation": "SCP-7709","Egg": "Mole rats dig"},{"Designation": "SCP-7564","Egg": "Clockwork heart beats"},{"Designation": "SCP-424","Egg": "O5 council secret"},{"Designation": "SCP-4339","Egg": "Never look back"},{"Designation": "SCP-4098","Egg": "Radio silence now"},{"Designation": "SCP-5771","Egg": "Mobile task force"},{"Designation": "SCP-1720","Egg": "History is rewritten"},{"Designation": "SCP-5820","Egg": "Reality is fragile"},{"Designation": "SCP-3539","Egg": "Fifthist star signs"},{"Designation": "SCP-1444","Egg": "Keter containment breach"},{"Designation": "SCP-2716","Egg": "Foundation keeps secrets"},{"Designation": "SCP-4516","Egg": "Infinite IKEA aisles"},{"Designation": "SCP-6017","Egg": "Pandora's box opens"},{"Designation": "SCP-6122","Egg": "Thaumiel protocol active"},{"Designation": "SCP-5724","Egg": "Thaumiel protocol active"},{"Designation": "SCP-7322","Egg": "Fifthist star signs"},{"Designation": "SCP-5751","Egg": "History is rewritten"},{"Designation": "SCP-3975","Egg": "Last hope remains"},{"Designation": "SCP-1188","Egg": "The sun bleeds"},{"Designation": "SCP-6053","Egg": "Gears' cold logic"},{"Designation": "SCP-7384","Egg": "Stairwell descent"},{"Designation": "SCP-4662","Egg": "Moon is gone"},{"Designation": "SCP-7112","Egg": "Radio silence now"},{"Designation": "SCP-7891","Egg": "Sound of screams"},{"Designation": "SCP-4234","Egg": "Infinite IKEA aisles"},{"Designation": "SCP-3284","Egg": "Scranton box shut"},{"Designation": "SCP-4469","Egg": "Never look back"},{"Designation": "SCP-3381","Egg": "Deer god forest"},{"Designation": "SCP-1435","Egg": "Never open again"},{"Designation": "SCP-130","Egg": "Keep it secret"},{"Designation": "SCP-2442","Egg": "Nullify the field"},{"Designation": "SCP-3769","Egg": "Mobile task force"},{"Designation": "SCP-042","Egg": "Redacted for safety"},{"Designation": "SCP-7487","Egg": "Forgotten in time"},{"Designation": "SCP-7490","Egg": "Gears' cold logic"},{"Designation": "SCP-578","Egg": "Sound of screams"},{"Designation": "SCP-534","Egg": "Hammer down hard"},{"Designation": "SCP-7719","Egg": "Euclid level threat"},{"Designation": "SCP-6103","Egg": "The gate guardian"},{"Designation": "SCP-7223","Egg": "Apollyon end times"},{"Designation": "SCP-6191","Egg": "Silence is golden"},{"Designation": "SCP-3197","Egg": "The dream ends"},{"Designation": "SCP-3549","Egg": "Sound of screams"},{"Designation": "SCP-5282","Egg": "Mobile task force"},{"Designation": "SCP-831","Egg": "Never look back"},{"Designation": "SCP-7234","Egg": "Fifthist star signs"},{"Designation": "SCP-5311","Egg": "Redacted for safety"},{"Designation": "SCP-6463","Egg": "Pattern screamer void"},{"Designation": "SCP-4323","Egg": "Reality is fragile"},{"Designation": "SCP-231","Egg": "Deer god forest"},{"Designation": "SCP-2045","Egg": "Lock the door"},{"Designation": "SCP-5337","Egg": "Deer god forest"},{"Designation": "SCP-3958","Egg": "Mobile task force"},{"Designation": "SCP-2340","Egg": "Safe class object"},{"Designation": "SCP-2249","Egg": "End of death"},{"Designation": "SCP-1120","Egg": "Reality bender alert"},{"Designation": "SCP-1198","Egg": "Cognitohazard detected"},{"Designation": "SCP-5838","Egg": "Hanged king waits"},{"Designation": "SCP-7235","Egg": "Clockwork heart beats"},{"Designation": "SCP-5951","Egg": "Chaos insurgency strike"},{"Designation": "SCP-1365","Egg": "Alagadda black stars"},{"Designation": "SCP-6904","Egg": "Seven brides weeping"},{"Designation": "SCP-6233","Egg": "Hammer down hard"},{"Designation": "SCP-1101","Egg": "Echoes of past"},{"Designation": "SCP-5344","Egg": "Silence is golden"},{"Designation": "SCP-1580","Egg": "Anchor the soul"},{"Designation": "SCP-4460","Egg": "Last hope remains"},{"Designation": "SCP-2083","Egg": "Pandora's box opens"},{"Designation": "SCP-1118","Egg": "Memory wiped clean"},{"Designation": "SCP-7544","Egg": "Reality is fragile"},{"Designation": "SCP-1422","Egg": "Darkness within us"},{"Designation": "SCP-1660","Egg": "Truth is hidden"},{"Designation": "SCP-5472","Egg": "Gears' cold logic"},{"Designation": "SCP-6752","Egg": "Anchor the soul"},{"Designation": "SCP-7965","Egg": "Hanged king waits"},{"Designation": "SCP-6540","Egg": "Lies told well"},{"Designation": "SCP-4627","Egg": "Clef's shotgun blast"},{"Designation": "SCP-4421","Egg": "Unlondon underground"},{"Designation": "SCP-2917","Egg": "Scranton box shut"},{"Designation": "SCP-4793","Egg": "Cain's mark remains"},{"Designation": "SCP-3052","Egg": "Keter containment breach"},{"Designation": "SCP-5078","Egg": "Clef's shotgun blast"},{"Designation": "SCP-3852","Egg": "Kondraki's butterfly swarm"},{"Designation": "SCP-6164","Egg": "Future is dark"},{"Designation": "SCP-1882","Egg": "Class four anomaly"},{"Designation": "SCP-4275","Egg": "Cain's mark remains"},{"Designation": "SCP-6446","Egg": "The sun bleeds"},{"Designation": "SCP-6806","Egg": "Void is hungry"},{"Designation": "SCP-6810","Egg": "Silence is golden"},{"Designation": "SCP-4733","Egg": "Sarkic flesh pits"},{"Designation": "SCP-6117","Egg": "Scranton box shut"},{"Designation": "SCP-4577","Egg": "Forgotten in time"},{"Designation": "SCP-5827","Egg": "Keter containment breach"},{"Designation": "SCP-4436","Egg": "Hammer down hard"},{"Designation": "SCP-7280","Egg": "Pandora's box opens"},{"Designation": "SCP-1055","Egg": "Clockwork heart beats"},{"Designation": "SCP-7087","Egg": "Stairwell descent"},{"Designation": "SCP-4078","Egg": "History is rewritten"},{"Designation": "SCP-2175","Egg": "Hammer down hard"},{"Designation": "SCP-630","Egg": "Pattern screamer void"},{"Designation": "SCP-1830","Egg": "Broken god rises"},{"Designation": "SCP-5163","Egg": "Future is dark"},{"Designation": "SCP-3095","Egg": "Unlondon underground"},{"Designation": "SCP-6111","Egg": "Forgotten in time"},{"Designation": "SCP-3379","Egg": "Class four anomaly"},{"Designation": "SCP-1204","Egg": "Nullify the field"},{"Designation": "SCP-1187","Egg": "Old man rot"},{"Designation": "SCP-2496","Egg": "Truth is hidden"},{"Designation": "SCP-7446","Egg": "Shy guy screams"},{"Designation": "SCP-4351","Egg": "Shy guy screams"},{"Designation": "SCP-4470","Egg": "Red ice cold"},{"Designation": "SCP-1207","Egg": "Forgotten in time"},{"Designation": "SCP-4568","Egg": "Keter containment breach"},{"Designation": "SCP-5259","Egg": "End of death"},{"Designation": "SCP-5604","Egg": "Lock the door"},{"Designation": "SCP-3881","Egg": "Hanged king waits"},{"Designation": "SCP-1623","Egg": "Containment is key"},{"Designation": "SCP-4837","Egg": "Deer god forest"},{"Designation": "SCP-1383","Egg": "Scranton box shut"},{"Designation": "SCP-6236","Egg": "Forgotten in time"},{"Designation": "SCP-2748","Egg": "Safe class object"},{"Designation": "SCP-6552","Egg": "End of death"},{"Designation": "SCP-3248","Egg": "The dream ends"},{"Designation": "SCP-2671","Egg": "Doctor is in"},{"Designation": "SCP-6183","Egg": "Signal lost forever"},{"Designation": "SCP-875","Egg": "Type green found"},{"Designation": "SCP-2057","Egg": "Last hope remains"},{"Designation": "SCP-1738","Egg": "Last hope remains"},{"Designation": "SCP-2932","Egg": "Cain's mark remains"},{"Designation": "SCP-4068","Egg": "The dream ends"},{"Designation": "SCP-5479","Egg": "Forgotten in time"},{"Designation": "SCP-5608","Egg": "Keep it secret"},{"Designation": "SCP-1701","Egg": "Memory wiped clean"},{"Designation": "SCP-3686","Egg": "Anchor the soul"},{"Designation": "SCP-3800","Egg": "Type green found"},{"Designation": "SCP-5076","Egg": "Class four anomaly"},{"Designation": "SCP-3779","Egg": "Never open again"},{"Designation": "SCP-157","Egg": "Thaumiel protocol active"},{"Designation": "SCP-364","Egg": "Scarlet king coming"},{"Designation": "SCP-4986","Egg": "Safe class object"},{"Designation": "SCP-3255","Egg": "D-class disposal"},{"Designation": "SCP-1651","Egg": "Chaos insurgency strike"},{"Designation": "SCP-6838","Egg": "Hanged king waits"},{"Designation": "SCP-7969","Egg": "Euclid level threat"},{"Designation": "SCP-6472","Egg": "Cain's mark remains"},{"Designation": "SCP-2287","Egg": "Class four anomaly"},{"Designation": "SCP-1819","Egg": "Nine tailed fox"},{"Designation": "SCP-1317","Egg": "Pattern screamer void"},{"Designation": "SCP-299","Egg": "Moon is gone"},{"Designation": "SCP-4791","Egg": "Truth is hidden"},{"Designation": "SCP-4926","Egg": "O5 council secret"},{"Designation": "SCP-1050","Egg": "Keep it secret"},{"Designation": "SCP-772","Egg": "Tickle monster hugs"},{"Designation": "SCP-1404","Egg": "Light fades away"},{"Designation": "SCP-2883","Egg": "Keter containment breach"},{"Designation": "SCP-1920","Egg": "Throw away key"},{"Designation": "SCP-3618","Egg": "Truth is hidden"},{"Designation": "SCP-1280","Egg": "Water is grey"},{"Designation": "SCP-3398","Egg": "Clef's shotgun blast"},{"Designation": "SCP-4069","Egg": "Type green found"},{"Designation": "SCP-7479","Egg": "Euclid level threat"},{"Designation": "SCP-4982","Egg": "Sarkic flesh pits"},{"Designation": "SCP-6113","Egg": "Cognitohazard detected"},{"Designation": "SCP-2282","Egg": "Keep it secret"},{"Designation": "SCP-6412","Egg": "Echoes of past"},{"Designation": "SCP-5399","Egg": "Fifthist star signs"},{"Designation": "SCP-4453","Egg": "Keter containment breach"},{"Designation": "SCP-6849","Egg": "Memetic hazard warning"},{"Designation": "SCP-3639","Egg": "Peanut crunch"},{"Designation": "SCP-7089","Egg": "Silence is golden"},{"Designation": "SCP-6981","Egg": "Type green found"},{"Designation": "SCP-6502","Egg": "Hanged king waits"},{"Designation": "SCP-1309","Egg": "Kondraki's butterfly swarm"},{"Designation": "SCP-6185","Egg": "Euclid level threat"},{"Designation": "SCP-3268","Egg": "Pattern screamer void"},{"Designation": "SCP-4131","Egg": "Red ice cold"},{"Designation": "SCP-4121","Egg": "Stairwell descent"},{"Designation": "SCP-3465","Egg": "Chaos insurgency strike"},{"Designation": "SCP-7591","Egg": "Type green found"},{"Designation": "SCP-5243","Egg": "Deer god forest"},{"Designation": "SCP-7252","Egg": "Void is hungry"},{"Designation": "SCP-3342","Egg": "Hammer down hard"},{"Designation": "SCP-3836","Egg": "The sculpture watches"},{"Designation": "SCP-1177","Egg": "Broken masquerade event"},{"Designation": "SCP-7919","Egg": "Nullify the field"},{"Designation": "SCP-6628","Egg": "Unlondon underground"},{"Designation": "SCP-2367","Egg": "Abel's blade strikes"},{"Designation": "SCP-937","Egg": "Field agent down"},{"Designation": "SCP-5116","Egg": "Clef's shotgun blast"},{"Designation": "SCP-4406","Egg": "Scranton box shut"},{"Designation": "SCP-4831","Egg": "Broken masquerade event"},{"Designation": "SCP-7633","Egg": "Pattern screamer void"},{"Designation": "SCP-045","Egg": "Broken god rises"},{"Designation": "SCP-2313","Egg": "Deer god forest"},{"Designation": "SCP-6655","Egg": "Reality bender alert"},{"Designation": "SCP-2007","Egg": "The lizard lives"},{"Designation": "SCP-6063","Egg": "The dream ends"},{"Designation": "SCP-7307","Egg": "Seven brides weeping"},{"Designation": "SCP-4236","Egg": "Signal lost forever"},{"Designation": "SCP-1040","Egg": "World on fire"},{"Designation": "SCP-1048","Egg": "Doctor is in"},{"Designation": "SCP-1983","Egg": "Seven brides weeping"},{"Designation": "SCP-339","Egg": "Peanut crunch"},{"Designation": "SCP-5730","Egg": "The lizard lives"},{"Designation": "SCP-4898","Egg": "Shadow over site"},{"Designation": "SCP-1453","Egg": "Secure contain protect"},{"Designation": "SCP-5240","Egg": "The gate guardian"},{"Designation": "SCP-3655","Egg": "Reality bender alert"},{"Designation": "SCP-7040","Egg": "Seven brides weeping"},{"Designation": "SCP-5447","Egg": "Infinite IKEA aisles"},{"Designation": "SCP-2724","Egg": "Neutralized for good"},{"Designation": "SCP-5650","Egg": "Chaos insurgency strike"},{"Designation": "SCP-1914","Egg": "Lock the door"},{"Designation": "SCP-3047","Egg": "Keep it secret"},{"Designation": "SCP-1628","Egg": "Shadow over site"},{"Designation": "SCP-6574","Egg": "Broken masquerade event"},{"Designation": "SCP-660","Egg": "Hanged king waits"},{"Designation": "SCP-2973","Egg": "Nullify the field"},{"Designation": "SCP-4190","Egg": "Old man rot"},{"Designation": "SCP-6120","Egg": "Type green found"},{"Designation": "SCP-2647","Egg": "Abel's blade strikes"},{"Designation": "SCP-3807","Egg": "Doctor Bright's prank"},{"Designation": "SCP-246","Egg": "Nullify the field"},{"Designation": "SCP-3820","Egg": "Euclid level threat"},{"Designation": "SCP-7338","Egg": "Lock the door"},{"Designation": "SCP-7251","Egg": "Reality is fragile"},{"Designation": "SCP-5868","Egg": "Redacted for safety"},{"Designation": "SCP-7433","Egg": "The gate guardian"},{"Designation": "SCP-1061","Egg": "The gate guardian"},{"Designation": "SCP-7136","Egg": "Throw away key"},{"Designation": "SCP-7935","Egg": "Redacted for safety"},{"Designation": "SCP-3743","Egg": "D-class disposal"},{"Designation": "SCP-445","Egg": "Burning man walks"},{"Designation": "SCP-1869","Egg": "Thaumiel protocol active"},{"Designation": "SCP-4947","Egg": "Shy guy screams"},{"Designation": "SCP-151","Egg": "Hanged king waits"},{"Designation": "SCP-6978","Egg": "Class four anomaly"},{"Designation": "SCP-2773","Egg": "Signal lost forever"},{"Designation": "SCP-7724","Egg": "Scranton box shut"},{"Designation": "SCP-6848","Egg": "Infinite IKEA aisles"},{"Designation": "SCP-3885","Egg": "Site nineteen incident"},{"Designation": "SCP-7734","Egg": "Tickle monster hugs"},{"Designation": "SCP-4104","Egg": "Site nineteen incident"},{"Designation": "SCP-6593","Egg": "Hammer down hard"},{"Designation": "SCP-4448","Egg": "Abel's blade strikes"},{"Designation": "SCP-2326","Egg": "Reality is fragile"},{"Designation": "SCP-3865","Egg": "Abel's blade strikes"},{"Designation": "SCP-6353","Egg": "Pattern screamer void"},{"Designation": "SCP-421","Egg": "Old man rot"},{"Designation": "SCP-6532","Egg": "Anchor the soul"},{"Designation": "SCP-5364","Egg": "The sun bleeds"},{"Designation": "SCP-7984","Egg": "Seven brides weeping"},{"Designation": "SCP-4037","Egg": "Sarkic flesh pits"},{"Designation": "SCP-1295","Egg": "Keter containment breach"},{"Designation": "SCP-4250","Egg": "End of death"},{"Designation": "SCP-839","Egg": "Cognitohazard detected"},{"Designation": "SCP-415","Egg": "Abel's blade strikes"},{"Designation": "SCP-2674","Egg": "Cognitohazard detected"},{"Designation": "SCP-4215","Egg": "Secure contain protect"},{"Designation": "SCP-6299","Egg": "Type green found"},{"Designation": "SCP-3146","Egg": "Field agent down"},{"Designation": "SCP-653","Egg": "Moon is gone"},{"Designation": "SCP-474","Egg": "Lock the door"},{"Designation": "SCP-7863","Egg": "Nine tailed fox"},{"Designation": "SCP-6331","Egg": "Mole rats dig"},{"Designation": "SCP-654","Egg": "Sound of screams"},{"Designation": "SCP-2527","Egg": "Scarlet king coming"},{"Designation": "SCP-789","Egg": "Reality bender alert"},{"Designation": "SCP-3143","Egg": "Void is hungry"},{"Designation": "SCP-3315","Egg": "Foundation keeps secrets"},{"Designation": "SCP-2179","Egg": "Signal lost forever"},{"Designation": "SCP-3157","Egg": "Keter containment breach"},{"Designation": "SCP-6466","Egg": "Shadow over site"},{"Designation": "SCP-7120","Egg": "Field agent down"},{"Designation": "SCP-2048","Egg": "History is rewritten"},{"Designation": "SCP-468","Egg": "Cain's mark remains"},{"Designation": "SCP-1630","Egg": "Alagadda black stars"},{"Designation": "SCP-7114","Egg": "Wake up now"},{"Designation": "SCP-3644","Egg": "The lizard lives"},{"Designation": "SCP-1217","Egg": "End of death"},{"Designation": "SCP-4612","Egg": "Don't blink"},{"Designation": "SCP-5001","Egg": "The sun bleeds"},{"Designation": "SCP-2966","Egg": "History is rewritten"},{"Designation": "SCP-5508","Egg": "Thaumiel protocol active"},{"Designation": "SCP-851","Egg": "Gears' cold logic"},{"Designation": "SCP-6741","Egg": "The sun bleeds"},{"Designation": "SCP-2066","Egg": "Hanged king waits"},{"Designation": "SCP-3505","Egg": "Mole rats dig"},{"Designation": "SCP-727","Egg": "Secure contain protect"},{"Designation": "SCP-1689","Egg": "Doctor is in"},{"Designation": "SCP-5266","Egg": "Keep it secret"},{"Designation": "SCP-5677","Egg": "Clef's shotgun blast"},{"Designation": "SCP-2702","Egg": "Neutralized for good"},{"Designation": "SCP-1658","Egg": "Signal lost forever"},{"Designation": "SCP-7108","Egg": "Hammer down hard"},{"Designation": "SCP-1664","Egg": "The dream ends"},{"Designation": "SCP-4676","Egg": "Data expunged here"},{"Designation": "SCP-6505","Egg": "Sarkic flesh pits"},{"Designation": "SCP-7213","Egg": "Keep it secret"},{"Designation": "SCP-3778","Egg": "Memory wiped clean"},{"Designation": "SCP-628","Egg": "Reality is fragile"},{"Designation": "SCP-5852","Egg": "Chaos insurgency strike"},{"Designation": "SCP-1558","Egg": "Last hope remains"},{"Designation": "SCP-4985","Egg": "Mole rats dig"},{"Designation": "SCP-748","Egg": "Deer god forest"},{"Designation": "SCP-7132","Egg": "Broken masquerade event"},{"Designation": "SCP-1306","Egg": "Stairwell descent"},{"Designation": "SCP-4394","Egg": "Shadow over site"},{"Designation": "SCP-4922","Egg": "Echoes of past"},{"Designation": "SCP-5680","Egg": "The sun bleeds"},{"Designation": "SCP-7327","Egg": "Void is hungry"},{"Designation": "SCP-3051","Egg": "Moon is gone"},{"Designation": "SCP-3392","Egg": "Kondraki's butterfly swarm"},{"Designation": "SCP-1578","Egg": "Data expunged here"},{"Designation": "SCP-5452","Egg": "Amnestic type A"},{"Designation": "SCP-3537","Egg": "Site nineteen incident"},{"Designation": "SCP-4576","Egg": "Secure contain protect"},{"Designation": "SCP-4249","Egg": "Broken god rises"},{"Designation": "SCP-1199","Egg": "History is rewritten"},{"Designation": "SCP-6902","Egg": "Keep it secret"},{"Designation": "SCP-6016","Egg": "Void is hungry"},{"Designation": "SCP-2818","Egg": "History is rewritten"},{"Designation": "SCP-3387","Egg": "Cognitohazard detected"},{"Designation": "SCP-5382","Egg": "Memetic hazard warning"},{"Designation": "SCP-3060","Egg": "Lies told well"},{"Designation": "SCP-7224","Egg": "Infinite IKEA aisles"},{"Designation": "SCP-7053","Egg": "Echoes of past"},{"Designation": "SCP-145","Egg": "Red ice cold"},{"Designation": "SCP-2775","Egg": "Void is hungry"},{"Designation": "SCP-7380","Egg": "Scranton box shut"},{"Designation": "SCP-662","Egg": "Memetic hazard warning"},{"Designation": "SCP-2499","Egg": "Last hope remains"},{"Designation": "SCP-6589","Egg": "Burning man walks"},{"Designation": "SCP-4644","Egg": "Epsilon eleven arrival"},{"Designation": "SCP-685","Egg": "Neutralized for good"},{"Designation": "SCP-3670","Egg": "Red ice cold"},{"Designation": "SCP-1730","Egg": "Void is hungry"},{"Designation": "SCP-6650","Egg": "The gate guardian"},{"Designation": "SCP-4953","Egg": "Echoes of past"},{"Designation": "SCP-957","Egg": "Lies told well"},{"Designation": "SCP-3083","Egg": "Unlondon underground"},{"Designation": "SCP-4740","Egg": "History is rewritten"},{"Designation": "SCP-489","Egg": "Shadow over site"},{"Designation": "SCP-1549","Egg": "O5 council secret"},{"Designation": "SCP-4432","Egg": "Forgotten in time"},{"Designation": "SCP-4943","Egg": "Tickle monster hugs"},{"Designation": "SCP-4303","Egg": "Reality bender alert"},{"Designation": "SCP-7133","Egg": "The lizard lives"},{"Designation": "SCP-2564","Egg": "Chaos insurgency strike"},{"Designation": "SCP-2452","Egg": "Eden's flaming sword"},{"Designation": "SCP-1165","Egg": "Shadow over site"},{"Designation": "SCP-3098","Egg": "Broken god rises"},{"Designation": "SCP-757","Egg": "Hanged king waits"},{"Designation": "SCP-6528","Egg": "Hanged king waits"},{"Designation": "SCP-6559","Egg": "Clef's shotgun blast"},{"Designation": "SCP-2468","Egg": "Doctor Bright's prank"},{"Designation": "SCP-5254","Egg": "Eden's flaming sword"},{"Designation": "SCP-7254","Egg": "Memory wiped clean"},{"Designation": "SCP-4447","Egg": "Type green found"},{"Designation": "SCP-6206","Egg": "Data expunged here"},{"Designation": "SCP-3339","Egg": "Clockwork heart beats"},{"Designation": "SCP-7705","Egg": "Old man rot"},{"Designation": "SCP-3951","Egg": "Foundation keeps secrets"},{"Designation": "SCP-4027","Egg": "Stairwell descent"},{"Designation": "SCP-6543","Egg": "Nine tailed fox"},{"Designation": "SCP-936","Egg": "Burning man walks"},{"Designation": "SCP-4139","Egg": "Secure contain protect"},{"Designation": "SCP-1765","Egg": "Scranton box shut"},{"Designation": "SCP-6001","Egg": "Reality is fragile"},{"Designation": "SCP-2200","Egg": "Abel's blade strikes"},{"Designation": "SCP-2126","Egg": "Radio silence now"},{"Designation": "SCP-1491","Egg": "Mobile task force"},{"Designation": "SCP-7582","Egg": "Data expunged here"},{"Designation": "SCP-7488","Egg": "Hanged king waits"},{"Designation": "SCP-4570","Egg": "Safe class object"},{"Designation": "SCP-3252","Egg": "Wake up now"},{"Designation": "SCP-5595","Egg": "Sound of screams"},{"Designation": "SCP-2952","Egg": "Doctor Bright's prank"},{"Designation": "SCP-2001","Egg": "O5 council secret"},{"Designation": "SCP-2826","Egg": "Darkness within us"},{"Designation": "SCP-6627","Egg": "Light fades away"},{"Designation": "SCP-3683","Egg": "Forgotten in time"},{"Designation": "SCP-4785","Egg": "Abel's blade strikes"},{"Designation": "SCP-7636","Egg": "Mole rats dig"},{"Designation": "SCP-5396","Egg": "Cain's mark remains"},{"Designation": "SCP-2790","Egg": "Keter containment breach"},{"Designation": "SCP-6771","Egg": "Site nineteen incident"},{"Designation": "SCP-1691","Egg": "Burning man walks"},{"Designation": "SCP-907","Egg": "Don't blink"},{"Designation": "SCP-2517","Egg": "Kondraki's butterfly swarm"},{"Designation": "SCP-2181","Egg": "Type green found"},{"Designation": "SCP-7042","Egg": "Alagadda black stars"},{"Designation": "SCP-6648","Egg": "Echoes of past"},{"Designation": "SCP-440","Egg": "Chaos insurgency strike"},{"Designation": "SCP-4143","Egg": "Memory wiped clean"},{"Designation": "SCP-7406","Egg": "Broken god rises"},{"Designation": "SCP-2502","Egg": "Red ice cold"},{"Designation": "SCP-7499","Egg": "The dream ends"},{"Designation": "SCP-476","Egg": "Water is grey"},{"Designation": "SCP-5625","Egg": "Sarkic flesh pits"},{"Designation": "SCP-7342","Egg": "Old man rot"},{"Designation": "SCP-2858","Egg": "Peanut crunch"},{"Designation": "SCP-180","Egg": "Old man rot"},{"Designation": "SCP-1833","Egg": "Secure contain protect"},{"Designation": "SCP-5168","Egg": "Mole rats dig"},{"Designation": "SCP-6897","Egg": "Signal lost forever"},{"Designation": "SCP-2477","Egg": "Type green found"},{"Designation": "SCP-5455","Egg": "End of death"},{"Designation": "SCP-4822","Egg": "Broken god rises"},{"Designation": "SCP-5137","Egg": "Secure contain protect"},{"Designation": "SCP-3794","Egg": "World on fire"},{"Designation": "SCP-1588","Egg": "Clockwork heart beats"},{"Designation": "SCP-790","Egg": "Foundation keeps secrets"},{"Designation": "SCP-070","Egg": "Pattern screamer void"},{"Designation": "SCP-4997","Egg": "Broken god rises"},{"Designation": "SCP-2808","Egg": "Chaos insurgency strike"},{"Designation": "SCP-5489","Egg": "Apollyon end times"},{"Designation": "SCP-1498","Egg": "World on fire"},{"Designation": "SCP-4214","Egg": "Mobile task force"},{"Designation": "SCP-620","Egg": "Water is grey"},{"Designation": "SCP-399","Egg": "Hammer down hard"},{"Designation": "SCP-289","Egg": "Deer god forest"},{"Designation": "SCP-6456","Egg": "Signal lost forever"},{"Designation": "SCP-6654","Egg": "Doctor is in"},{"Designation": "SCP-6928","Egg": "Amnestic type A"},{"Designation": "SCP-4083","Egg": "Gears' cold logic"},{"Designation": "SCP-5461","Egg": "Neutralized for good"},{"Designation": "SCP-2101","Egg": "Redacted for safety"},{"Designation": "SCP-7647","Egg": "Nullify the field"},{"Designation": "SCP-3638","Egg": "Reality is fragile"},{"Designation": "SCP-3990","Egg": "Moon is gone"},{"Designation": "SCP-6375","Egg": "Keep it secret"},{"Designation": "SCP-1802","Egg": "Alagadda black stars"},{"Designation": "SCP-7897","Egg": "Void is hungry"},{"Designation": "SCP-1883","Egg": "Cain's mark remains"},{"Designation": "SCP-1921","Egg": "History is rewritten"},{"Designation": "SCP-4936","Egg": "Darkness within us"},{"Designation": "SCP-710","Egg": "Thaumiel protocol active"},{"Designation": "SCP-5417","Egg": "Don't blink"},{"Designation": "SCP-7242","Egg": "Broken god rises"},{"Designation": "SCP-7816","Egg": "Scarlet king coming"},{"Designation": "SCP-3636","Egg": "Keter containment breach"},{"Designation": "SCP-6193","Egg": "The lizard lives"},{"Designation": "SCP-3972","Egg": "Containment is key"},{"Designation": "SCP-2206","Egg": "Deer god forest"},{"Designation": "SCP-515","Egg": "Moon is gone"},{"Designation": "SCP-2995","Egg": "Clockwork heart beats"},{"Designation": "SCP-6548","Egg": "Shy guy screams"},{"Designation": "SCP-373","Egg": "Field agent down"},{"Designation": "SCP-6002","Egg": "Euclid level threat"},{"Designation": "SCP-3406","Egg": "Sarkic flesh pits"},{"Designation": "SCP-1917","Egg": "Gears' cold logic"},{"Designation": "SCP-755","Egg": "Stars are screaming"},{"Designation": "SCP-7105","Egg": "Never look back"},{"Designation": "SCP-5615","Egg": "Amnestic type A"},{"Designation": "SCP-5146","Egg": "Echoes of past"},{"Designation": "SCP-3855","Egg": "Radio silence now"},{"Designation": "SCP-7284","Egg": "Scarlet king coming"},{"Designation": "SCP-6485","Egg": "The dream ends"},{"Designation": "SCP-2813","Egg": "Peanut crunch"},{"Designation": "SCP-2041","Egg": "Broken masquerade event"},{"Designation": "SCP-3587","Egg": "Forgotten in time"},{"Designation": "SCP-7181","Egg": "Peanut crunch"},{"Designation": "SCP-3218","Egg": "Memory wiped clean"},{"Designation": "SCP-6891","Egg": "Mole rats dig"},{"Designation": "SCP-3753","Egg": "End of death"},{"Designation": "SCP-187","Egg": "Light fades away"},{"Designation": "SCP-5316","Egg": "Red ice cold"},{"Designation": "SCP-6369","Egg": "Reality is fragile"},{"Designation": "SCP-1408","Egg": "World on fire"},{"Designation": "SCP-7911","Egg": "Abel's blade strikes"},{"Designation": "SCP-2416","Egg": "Anchor the soul"},{"Designation": "SCP-684","Egg": "Containment is key"},{"Designation": "SCP-5118","Egg": "Safe class object"},{"Designation": "SCP-1688","Egg": "Deer god forest"},{"Designation": "SCP-4319","Egg": "Seven brides weeping"},{"Designation": "SCP-6481","Egg": "Foundation keeps secrets"},{"Designation": "SCP-2959","Egg": "Hammer down hard"},{"Designation": "SCP-6798","Egg": "Anchor the soul"},{"Designation": "SCP-5828","Egg": "Gears' cold logic"},{"Designation": "SCP-6763","Egg": "Epsilon eleven arrival"},{"Designation": "SCP-5701","Egg": "Doctor Bright's prank"},{"Designation": "SCP-3036","Egg": "Clef's shotgun blast"},{"Designation": "SCP-1515","Egg": "Shy guy screams"},{"Designation": "SCP-2803","Egg": "Redacted for safety"},{"Designation": "SCP-4781","Egg": "Lies told well"},{"Designation": "SCP-7347","Egg": "Anchor the soul"},{"Designation": "SCP-6121","Egg": "Echoes of past"},{"Designation": "SCP-391","Egg": "Keep it secret"},{"Designation": "SCP-5119","Egg": "Peanut crunch"},{"Designation": "SCP-4980","Egg": "Type green found"},{"Designation": "SCP-7986","Egg": "The lizard lives"},{"Designation": "SCP-7702","Egg": "Amnestic type A"},{"Designation": "SCP-7025","Egg": "Light fades away"},{"Designation": "SCP-4705","Egg": "Chaos insurgency strike"},{"Designation": "SCP-7265","Egg": "Lock the door"},{"Designation": "SCP-1704","Egg": "Wake up now"},{"Designation": "SCP-102","Egg": "Class four anomaly"},{"Designation": "SCP-438","Egg": "Safe class object"},{"Designation": "SCP-7534","Egg": "The sculpture watches"},{"Designation": "SCP-376","Egg": "Amnestic type A"},{"Designation": "SCP-7492","Egg": "Type green found"},{"Designation": "SCP-7885","Egg": "Sarkic flesh pits"},{"Designation": "SCP-7733","Egg": "Data expunged here"},{"Designation": "SCP-3862","Egg": "Apollyon end times"},{"Designation": "SCP-5253","Egg": "Abel's blade strikes"},{"Designation": "SCP-7001","Egg": "Gears' cold logic"},{"Designation": "SCP-709","Egg": "Thaumiel protocol active"},{"Designation": "SCP-6939","Egg": "Secure contain protect"},{"Designation": "SCP-4261","Egg": "History is rewritten"},{"Designation": "SCP-6049","Egg": "The lizard lives"},{"Designation": "SCP-6545","Egg": "Future is dark"},{"Designation": "SCP-1479","Egg": "Broken masquerade event"},{"Designation": "SCP-6940","Egg": "Never open again"},{"Designation": "SCP-7635","Egg": "Memory wiped clean"},{"Designation": "SCP-906","Egg": "Sound of screams"},{"Designation": "SCP-3010","Egg": "Moon is gone"},{"Designation": "SCP-5690","Egg": "Last hope remains"},{"Designation": "SCP-4821","Egg": "Pattern screamer void"},{"Designation": "SCP-2789","Egg": "Moon is gone"},{"Designation": "SCP-7419","Egg": "Water is grey"},{"Designation": "SCP-6491","Egg": "Wake up now"},{"Designation": "SCP-7753","Egg": "Unlondon underground"},{"Designation": "SCP-4721","Egg": "Future is dark"},{"Designation": "SCP-3700","Egg": "O5 council secret"},{"Designation": "SCP-7671","Egg": "End of death"},{"Designation": "SCP-146","Egg": "Class four anomaly"},{"Designation": "SCP-358","Egg": "Red ice cold"},{"Designation": "SCP-4223","Egg": "Neutralized for good"},{"Designation": "SCP-125","Egg": "Stars are screaming"},{"Designation": "SCP-5824","Egg": "Hanged king waits"},{"Designation": "SCP-5626","Egg": "History is rewritten"},{"Designation": "SCP-7886","Egg": "End of death"},{"Designation": "SCP-6603","Egg": "Broken masquerade event"},{"Designation": "SCP-605","Egg": "Never open again"},{"Designation": "SCP-795","Egg": "Hammer down hard"},{"Designation": "SCP-857","Egg": "Memory wiped clean"},{"Designation": "SCP-5866","Egg": "Chaos insurgency strike"},{"Designation": "SCP-2108","Egg": "Cain's mark remains"},{"Designation": "SCP-5960","Egg": "Signal lost forever"},{"Designation": "SCP-691","Egg": "Field agent down"},{"Designation": "SCP-4147","Egg": "Thaumiel protocol active"},{"Designation": "SCP-2489","Egg": "Fifthist star signs"},{"Designation": "SCP-1710","Egg": "The dream ends"},{"Designation": "SCP-6361","Egg": "Euclid level threat"},{"Designation": "SCP-2451","Egg": "Silence is golden"},{"Designation": "SCP-5063","Egg": "Secure contain protect"},{"Designation": "SCP-5846","Egg": "Cognitohazard detected"},{"Designation": "SCP-1320","Egg": "Stairwell descent"},{"Designation": "SCP-3049","Egg": "Seven brides weeping"},{"Designation": "SCP-1945","Egg": "Hammer down hard"},{"Designation": "SCP-3874","Egg": "Deepwood whispers"},{"Designation": "SCP-6792","Egg": "Gears' cold logic"},{"Designation": "SCP-4227","Egg": "Moon is gone"},{"Designation": "SCP-7074","Egg": "Nullify the field"},{"Designation": "SCP-1508","Egg": "History is rewritten"},{"Designation": "SCP-4710","Egg": "Abel's blade strikes"},{"Designation": "SCP-6974","Egg": "Containment is key"},{"Designation": "SCP-462","Egg": "Darkness within us"},{"Designation": "SCP-2947","Egg": "Alagadda black stars"},{"Designation": "SCP-4783","Egg": "Class four anomaly"},{"Designation": "SCP-7043","Egg": "Fifthist star signs"},{"Designation": "SCP-2480","Egg": "Darkness within us"},{"Designation": "SCP-6437","Egg": "Throw away key"},{"Designation": "SCP-6054","Egg": "Shadow over site"},{"Designation": "SCP-6450","Egg": "Broken masquerade event"},{"Designation": "SCP-6042","Egg": "Peanut crunch"},{"Designation": "SCP-4285","Egg": "The lizard lives"},{"Designation": "SCP-6544","Egg": "Hanged king waits"},{"Designation": "SCP-1705","Egg": "Red ice cold"},{"Designation": "SCP-3837","Egg": "Pattern screamer void"},{"Designation": "SCP-7992","Egg": "Redacted for safety"},{"Designation": "SCP-6652","Egg": "Deepwood whispers"},{"Designation": "SCP-2816","Egg": "The sun bleeds"},{"Designation": "SCP-3936","Egg": "Pattern screamer void"},{"Designation": "SCP-1791","Egg": "Infinite IKEA aisles"},{"Designation": "SCP-7345","Egg": "Pandora's box opens"},{"Designation": "SCP-7642","Egg": "D-class disposal"},{"Designation": "SCP-452","Egg": "Mole rats dig"},{"Designation": "SCP-5793","Egg": "Deepwood whispers"},{"Designation": "SCP-3215","Egg": "The gate guardian"},{"Designation": "SCP-022","Egg": "History is rewritten"},{"Designation": "SCP-773","Egg": "Future is dark"},{"Designation": "SCP-696","Egg": "End of death"},{"Designation": "SCP-697","Egg": "Silence is golden"},{"Designation": "SCP-4033","Egg": "Unlondon underground"},{"Designation": "SCP-3878","Egg": "Redacted for safety"},{"Designation": "SCP-6636","Egg": "Infinite IKEA aisles"},{"Designation": "SCP-7103","Egg": "Hanged king waits"},{"Designation": "SCP-4463","Egg": "Memory wiped clean"},{"Designation": "SCP-4304","Egg": "Future is dark"},{"Designation": "SCP-2827","Egg": "Keep it secret"},{"Designation": "SCP-306","Egg": "Pandora's box opens"},{"Designation": "SCP-2670","Egg": "Darkness within us"},{"Designation": "SCP-1603","Egg": "Mobile task force"},{"Designation": "SCP-4287","Egg": "Burning man walks"},{"Designation": "SCP-3557","Egg": "Memetic hazard warning"},{"Designation": "SCP-2802","Egg": "Reality bender alert"},{"Designation": "SCP-7571","Egg": "Secure contain protect"},{"Designation": "SCP-2685","Egg": "Redacted for safety"},{"Designation": "SCP-2061","Egg": "Field agent down"},{"Designation": "SCP-1108","Egg": "Infinite IKEA aisles"},{"Designation": "SCP-5340","Egg": "Doctor is in"},{"Designation": "SCP-5823","Egg": "Hanged king waits"},{"Designation": "SCP-5940","Egg": "Future is dark"},{"Designation": "SCP-4727","Egg": "Last hope remains"},{"Designation": "SCP-077","Egg": "Sarkic flesh pits"},{"Designation": "SCP-3868","Egg": "Silence is golden"},{"Designation": "SCP-279","Egg": "Chaos insurgency strike"},{"Designation": "SCP-1008","Egg": "Class four anomaly"},{"Designation": "SCP-7644","Egg": "Radio silence now"},{"Designation": "SCP-1255","Egg": "Deepwood whispers"},{"Designation": "SCP-7156","Egg": "Lock the door"},{"Designation": "SCP-7852","Egg": "Hammer down hard"},{"Designation": "SCP-5297","Egg": "Secure contain protect"},{"Designation": "SCP-5128","Egg": "World on fire"},{"Designation": "SCP-4499","Egg": "O5 council secret"},{"Designation": "SCP-5027","Egg": "Never open again"},{"Designation": "SCP-7907","Egg": "Reality bender alert"},{"Designation": "SCP-5963","Egg": "Light fades away"},{"Designation": "SCP-7207","Egg": "Tickle monster hugs"},{"Designation": "SCP-6285","Egg": "Last hope remains"},{"Designation": "SCP-1634","Egg": "Thaumiel protocol active"},{"Designation": "SCP-1986","Egg": "Void is hungry"},{"Designation": "SCP-2734","Egg": "Darkness within us"},{"Designation": "SCP-545","Egg": "Don't blink"},{"Designation": "SCP-3935","Egg": "Nullify the field"},{"Designation": "SCP-4607","Egg": "Eden's flaming sword"},{"Designation": "SCP-2705","Egg": "Wake up now"},{"Designation": "SCP-3867","Egg": "Shadow over site"},{"Designation": "SCP-7602","Egg": "Peanut crunch"},{"Designation": "SCP-2945","Egg": "Clef's shotgun blast"},{"Designation": "SCP-1750","Egg": "Doctor Bright's prank"},{"Designation": "SCP-5990","Egg": "Cognitohazard detected"},{"Designation": "SCP-4509","Egg": "Doctor Bright's prank"},{"Designation": "SCP-6014","Egg": "Water is grey"},{"Designation": "SCP-881","Egg": "Shy guy screams"},{"Designation": "SCP-5863","Egg": "Old man rot"},{"Designation": "SCP-6052","Egg": "Euclid level threat"},{"Designation": "SCP-3624","Egg": "Gears' cold logic"},{"Designation": "SCP-1901","Egg": "Fifthist star signs"},{"Designation": "SCP-7090","Egg": "Anchor the soul"},{"Designation": "SCP-667","Egg": "Thaumiel protocol active"},{"Designation": "SCP-2257","Egg": "World on fire"},{"Designation": "SCP-6708","Egg": "Keter containment breach"},{"Designation": "SCP-7826","Egg": "Foundation keeps secrets"},{"Designation": "SCP-4625","Egg": "Clockwork heart beats"},{"Designation": "SCP-6442","Egg": "Class four anomaly"},{"Designation": "SCP-4381","Egg": "The sun bleeds"},{"Designation": "SCP-6079","Egg": "Signal lost forever"},{"Designation": "SCP-5212","Egg": "Seven brides weeping"},{"Designation": "SCP-2681","Egg": "Wake up now"},{"Designation": "SCP-1685","Egg": "Never open again"},{"Designation": "SCP-4628","Egg": "Foundation keeps secrets"},{"Designation": "SCP-4846","Egg": "End of death"},{"Designation": "SCP-4674","Egg": "Epsilon eleven arrival"},{"Designation": "SCP-3257","Egg": "Red ice cold"},{"Designation": "SCP-1088","Egg": "Darkness within us"},{"Designation": "SCP-7968","Egg": "Gears' cold logic"},{"Designation": "SCP-6387","Egg": "Field agent down"},{"Designation": "SCP-6720","Egg": "Infinite IKEA aisles"},{"Designation": "SCP-1200","Egg": "Keter containment breach"},{"Designation": "SCP-1216","Egg": "Chaos insurgency strike"},{"Designation": "SCP-3155","Egg": "Neutralized for good"},{"Designation": "SCP-5080","Egg": "Red ice cold"},{"Designation": "SCP-2247","Egg": "Never look back"},{"Designation": "SCP-6112","Egg": "Doctor Bright's prank"},{"Designation": "SCP-183","Egg": "Euclid level threat"},{"Designation": "SCP-1206","Egg": "Light fades away"},{"Designation": "SCP-4965","Egg": "Reality bender alert"},{"Designation": "SCP-3596","Egg": "Last hope remains"},{"Designation": "SCP-219","Egg": "Anchor the soul"},{"Designation": "SCP-355","Egg": "Darkness within us"},{"Designation": "SCP-712","Egg": "Shy guy screams"},{"Designation": "SCP-7754","Egg": "Clockwork heart beats"},{"Designation": "SCP-6526","Egg": "The gate guardian"},{"Designation": "SCP-2943","Egg": "The gate guardian"},{"Designation": "SCP-3291","Egg": "Nullify the field"},{"Designation": "SCP-7973","Egg": "Wake up now"},{"Designation": "SCP-1445","Egg": "Future is dark"},{"Designation": "SCP-3062","Egg": "Cain's mark remains"},{"Designation": "SCP-6963","Egg": "Clockwork heart beats"},{"Designation": "SCP-3573","Egg": "Mobile task force"},{"Designation": "SCP-4271","Egg": "Light fades away"},{"Designation": "SCP-1590","Egg": "Field agent down"},{"Designation": "SCP-3335","Egg": "Sound of screams"},{"Designation": "SCP-930","Egg": "Wake up now"},{"Designation": "SCP-6782","Egg": "Silence is golden"},{"Designation": "SCP-1573","Egg": "Deepwood whispers"},{"Designation": "SCP-4559","Egg": "Scranton box shut"},{"Designation": "SCP-7270","Egg": "Peanut crunch"},{"Designation": "SCP-6105","Egg": "Abel's blade strikes"},{"Designation": "SCP-6062","Egg": "The lizard lives"},{"Designation": "SCP-5492","Egg": "Foundation keeps secrets"},{"Designation": "SCP-1854","Egg": "Hanged king waits"},{"Designation": "SCP-749","Egg": "Broken god rises"},{"Designation": "SCP-5862","Egg": "Amnestic type A"},{"Designation": "SCP-5786","Egg": "Tickle monster hugs"},{"Designation": "SCP-896","Egg": "Signal lost forever"},{"Designation": "SCP-7789","Egg": "Containment is key"},{"Designation": "SCP-2331","Egg": "Doctor Bright's prank"},{"Designation": "SCP-4589","Egg": "Foundation keeps secrets"},{"Designation": "SCP-1226","Egg": "Fifthist star signs"},{"Designation": "SCP-262","Egg": "Deer god forest"},{"Designation": "SCP-6462","Egg": "Seven brides weeping"},{"Designation": "SCP-2723","Egg": "Water is grey"},{"Designation": "SCP-5047","Egg": "Broken god rises"},{"Designation": "SCP-4486","Egg": "Radio silence now"},{"Designation": "SCP-7473","Egg": "D-class disposal"},{"Designation": "SCP-148","Egg": "Mole rats dig"},{"Designation": "SCP-3834","Egg": "Future is dark"},{"Designation": "SCP-6529","Egg": "Shy guy screams"},{"Designation": "SCP-3609","Egg": "Containment is key"},{"Designation": "SCP-1335","Egg": "Anchor the soul"},{"Designation": "SCP-1535","Egg": "Anchor the soul"},{"Designation": "SCP-1157","Egg": "Broken masquerade event"},{"Designation": "SCP-2784","Egg": "Mobile task force"},{"Designation": "SCP-5052","Egg": "Shy guy screams"},{"Designation": "SCP-5501","Egg": "Reality is fragile"},{"Designation": "SCP-3739","Egg": "Nine tailed fox"},{"Designation": "SCP-547","Egg": "Last hope remains"},{"Designation": "SCP-4380","Egg": "Peanut crunch"},{"Designation": "SCP-3685","Egg": "The gate guardian"},{"Designation": "SCP-2579","Egg": "Silence is golden"},{"Designation": "SCP-3568","Egg": "Reality is fragile"},{"Designation": "SCP-1737","Egg": "Wake up now"},{"Designation": "SCP-4414","Egg": "Redacted for safety"},{"Designation": "SCP-2405","Egg": "D-class disposal"},{"Designation": "SCP-621","Egg": "Reality is fragile"},{"Designation": "SCP-645","Egg": "Sound of screams"},{"Designation": "SCP-5778","Egg": "End of death"},{"Designation": "SCP-631","Egg": "Echoes of past"},{"Designation": "SCP-6620","Egg": "Alagadda black stars"},{"Designation": "SCP-331","Egg": "Lock the door"},{"Designation": "SCP-817","Egg": "Deepwood whispers"},{"Designation": "SCP-4883","Egg": "Hanged king waits"},{"Designation": "SCP-2575","Egg": "Chaos insurgency strike"},{"Designation": "SCP-4978","Egg": "Gears' cold logic"},{"Designation": "SCP-5015","Egg": "Radio silence now"},{"Designation": "SCP-3131","Egg": "Shadow over site"},{"Designation": "SCP-5713","Egg": "Sarkic flesh pits"},{"Designation": "SCP-858","Egg": "Shadow over site"},{"Designation": "SCP-7842","Egg": "Broken masquerade event"},{"Designation": "SCP-6608","Egg": "Shadow over site"},{"Designation": "SCP-900","Egg": "Broken god rises"},{"Designation": "SCP-7167","Egg": "Redacted for safety"},{"Designation": "SCP-6239","Egg": "Pattern screamer void"},{"Designation": "SCP-7091","Egg": "Never look back"},{"Designation": "SCP-1570","Egg": "The sculpture watches"},{"Designation": "SCP-6452","Egg": "Class four anomaly"},{"Designation": "SCP-4200","Egg": "Thaumiel protocol active"},{"Designation": "SCP-883","Egg": "Site nineteen incident"},{"Designation": "SCP-6415","Egg": "Wake up now"},{"Designation": "SCP-600","Egg": "The gate guardian"},{"Designation": "SCP-2368","Egg": "Thaumiel protocol active"},{"Designation": "SCP-2186","Egg": "Unlondon underground"},{"Designation": "SCP-3871","Egg": "Signal lost forever"},{"Designation": "SCP-4136","Egg": "Foundation keeps secrets"},{"Designation": "SCP-5050","Egg": "Amnestic type A"},{"Designation": "SCP-6386","Egg": "Euclid level threat"},{"Designation": "SCP-6467","Egg": "Abel's blade strikes"},{"Designation": "SCP-6645","Egg": "Memetic hazard warning"},{"Designation": "SCP-4071","Egg": "Mobile task force"},{"Designation": "SCP-7180","Egg": "The gate guardian"},{"Designation": "SCP-1087","Egg": "Fifthist star signs"},{"Designation": "SCP-7964","Egg": "Doctor Bright's prank"},{"Designation": "SCP-1974","Egg": "Unlondon underground"},{"Designation": "SCP-3416","Egg": "Mole rats dig"},{"Designation": "SCP-4471","Egg": "Future is dark"},{"Designation": "SCP-7410","Egg": "Safe class object"},{"Designation": "SCP-6984","Egg": "World on fire"},{"Designation": "SCP-3474","Egg": "Deer god forest"},{"Designation": "SCP-3931","Egg": "The sculpture watches"},{"Designation": "SCP-1981","Egg": "Mole rats dig"},{"Designation": "SCP-5942","Egg": "Cognitohazard detected"},{"Designation": "SCP-6953","Egg": "Seven brides weeping"},{"Designation": "SCP-3620","Egg": "Lock the door"},{"Designation": "SCP-6660","Egg": "Deer god forest"},{"Designation": "SCP-3461","Egg": "Scarlet king coming"},{"Designation": "SCP-3919","Egg": "Mobile task force"},{"Designation": "SCP-7596","Egg": "Old man rot"},{"Designation": "SCP-3360","Egg": "Shy guy screams"},{"Designation": "SCP-1699","Egg": "Lies told well"},{"Designation": "SCP-3293","Egg": "Stars are screaming"},{"Designation": "SCP-614","Egg": "The dream ends"},{"Designation": "SCP-5159","Egg": "Red ice cold"},{"Designation": "SCP-6685","Egg": "Don't blink"},{"Designation": "SCP-6486","Egg": "Throw away key"},{"Designation": "SCP-2217","Egg": "Data expunged here"},{"Designation": "SCP-6931","Egg": "Pandora's box opens"},{"Designation": "SCP-1441","Egg": "Hammer down hard"},{"Designation": "SCP-3974","Egg": "Class four anomaly"},{"Designation": "SCP-1399","Egg": "Stars are screaming"},{"Designation": "SCP-2006","Egg": "Pandora's box opens"},{"Designation": "SCP-6205","Egg": "Mobile task force"},{"Designation": "SCP-053","Egg": "The gate guardian"},{"Designation": "SCP-672","Egg": "Mole rats dig"},{"Designation": "SCP-2594","Egg": "End of death"},{"Designation": "SCP-7748","Egg": "O5 council secret"},{"Designation": "SCP-1299","Egg": "Type green found"}]


function preload() {
  ocrFont = loadFont('ocraI.ttf');
  impactFont = loadFont('impact.ttf');
  base_logo = loadImage(deptPath + '/SCP_LOGO_Departmentless.png');
  icx_logo = loadImage('ICX-Small.png');
  ci_logo = loadImage(deptPath + '/CI_LOGO.png');
  // Add all your color and dept names here
  let colors = [
    "Black",
    "Blue",
    "Brown",
    "Cyan",
    "D-Blue",
    "D-Green",
    "Grape",
    "Green",
    "Indigo",
    "L-Blue",
    "Lime",
    "L-Orange",
    "Orange",
    "P-Blue",
    "P-Green",
    "Pink",
    "P-Pink",
    "P-Purple",
    "P-Red",
    "Purple",
    "P-Yellow",
    "Red",
    "Violet",
    "Yellow"
  ];
  let depts = [
    "Administration",
    "Engineering",
    "Ethics",
    "ExternalAffairs",
    "Intelligence",
    "InternalSecurity",
    "Logistics",
    "Manufacturing",
    "Medical",
    "MobileTaskForce",
    "Regular",
    "Science",
    "Security",
    "Tribunal"
  ];


  colors.forEach(c => colorBacks[c] = loadImage(`${colorPath}/${c}.png`));
  depts.forEach(d => deptLogos[d] = loadImage(`${deptPath}/${d}.svg`));
  deptLogos["ChaosInsurgency"] = loadImage(`${deptPath}/ChaosInsurgency.png`)
}

function deptShort(){
  switch (departmentField.value()) {
		case "Administration":
			return 'ADM';
			break;
		case "Engineering":
			return 'ENG';
			break;
		case "Ethics":
			return 'ETH';
			break;
		case "ExternalAffairs":
			return 'DEA';
			break;
		case "Intelligence":
			return 'INT';
			break;
		case "InternalSecurity":
			return 'ISC';
			break;
		case "Logistics":
			return 'LOG';
			break;
		case "Manufacturing":
			return 'MFG';
			break;
		case "Medical":
			return 'MED';
			break;
		case "MobileTaskForce":
			return 'MTF';
			break;
		case "Science":
			return 'SCI';
			break;
		case "Security":
			return 'SEC';
			break;
		case "Tribunal":
			return 'TRI';
			break;
    default:
      return 'SCP';
      break;
  }
}

function randomizeMagstripe(){
  if(departmentField.value()==='ChaosInsurgency'){
    magstripeField.value('INTERMITTENT VENGANCE ARM HIS RED RIGHT HAND TO PLAGUE US');
    return;
  }
  let idx = Math.floor(random(scpeggs.length))
  magstripeField.value(`{DEPT}^{YEAR}^CLR {CLR}^${scpeggs[idx].Designation};${scpeggs[idx].Egg}`);
}

function runMagReplacements(){
  let m = magstripeField.value()
    .replace('{DEPT}', deptShort())
    .replace('{YEAR}', new Date().getFullYear())
    .replace('{CLR}', accessField.value())  
  ;
  
  return validateMagstripe(m) ? m : m.length > 78 ? 'OVER MAX LENGTH' : `INVALID MAGSTRIPE CHARACTER: ${m.replace(magstripeNegRegex,'')}`
}

const validMagstripeCharacters = 'A-Za-z0-9!#$%\'\\(\\)*+,-.\\/;:<@>=^\\]\\\\\\["&_ '
const magstripeRegex = new RegExp(`^[${validMagstripeCharacters}]{0,78}$`,'v');
const magstripeNegRegex = new RegExp(`[${validMagstripeCharacters}]`,'gv');

function validateMagstripe(magdata){
    return magstripeRegex.test(magdata);
}

function randomizeId(){
    badgeField.value(Math.floor(random(100000000, 999999999)));
}

function setup() {
  let holder = select('#canvas-holder');
  let cnv = createCanvas(holder.width, holder.height);
  cnv.parent('canvas-holder');
  pixelDensity(displayDensity());

  barcodeCanvas = document.createElement('canvas');

  // Input listeners - Use input() for live updates, changed() for dropdowns
  titleField = select('#fname'); titleField.input(updateAndRedraw);
  accessField = select('#clearance'); accessField.changed(updateAndRedraw);
  departmentField = select('#department'); departmentField.changed(updateAndRedraw);
  colorField = select('#card-color'); colorField.changed(updateAndRedraw);
  badgeField = select('#badge'); badgeField.input(updateAndRedraw);
  magstripeField = select('#magstripe'); magstripeField.input(updateAndRedraw);

  select("#id-rand").mousePressed(() => {
    randomizeId();
    updateAndRedraw();
  });

  select("#mag-rand").mousePressed(() => {
    randomizeMagstripe();
    updateAndRedraw();
  });
randomizeId();
  randomizeMagstripe();

  select("#copy-card-data").mousePressed(() => {
    let data = {
      title: titleField.value(),
      clearance: accessField.value(),
      dept: departmentField.value(),
      color: colorField.value(),
      badge: badgeField.value(),
      magstripe: magstripeField.value()
    }
    let json = JSON.stringify(data)
    copyToClipboard(json)
  });

  // Initial Pre-Inversion  
  base_logo_inv = makeInverted(base_logo);
  for (let key in deptLogos) {
    deptLogosInv[key] = makeInverted(deptLogos[key]);
  }
  ci_logo_inv = makeInverted(ci_logo);
  updateAndRedraw();
}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Text copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

function updateAndRedraw() {
  if(departmentField.value()==="ChaosInsurgency"){
    randomizeMagstripe();
  }
  updateBarcode();
  redraw();
}

function updateBarcode() {
  const val = badgeField.value() || '000000000';
  try {
    bwipjs.toCanvas(barcodeCanvas, {
      bcid: 'japanpost',
      text: val,
      scale: 2
    });
  } catch (e) { console.log(e); }
}

function makeInverted(img) {
  let g = createGraphics(img.width, img.height);
  g.image(img, 0, 0);
  g.filter(INVERT);
  return g;
}

function calcCardSize() {
  let isMobile = width < height;
  // 1. Determine available space
  let availableW = width * 0.9;
  let availableH = isMobile ? height * 0.45 : height * 0.9; // Front takes roughly half height on mobile

  // 2. Calculate the size based on the most restrictive dimension
  // We want to maintain the 1.625 aspect ratio (w/h)
  let w = min(isMobile ? availableW : availableW / 2, availableH * 1.625);
  if (!isMobile) w = min(w, 500); // Cap desktop size

  let h = w * 0.615;
  return { width: w, height: h }
}

function windowResized() {

  let holder = select('#canvas-holder');
  let cardSize = calcCardSize();
  // If we are on mobile, the canvas needs to be at least 2 cards tall
  let minHeight = (windowWidth < 800) ? (cardSize.height * 2 + 100) : holder.height;
  resizeCanvas(holder.width, minHeight);
  redraw();
}

function draw() {
  background(25);

  let isMobile = width < height; // Match our CSS breakpoint
  let cardSize = calcCardSize();
  let w = cardSize.width
  let h = cardSize.height

  push();
  if (isMobile) {
    // Center vertically and horizontally
    let totalStackHeight = (h * 2) + 20;
    translate(width / 2 - w / 2, height / 2 - totalStackHeight / 2);

    renderFront(w, h);
    translate(0, h + 20);
    renderBack(w, h);
  } else {
    // Desktop: Side-by-side
    translate(width / 2 - w - 10, height / 2 - h / 2);
    renderFront(w, h);
    translate(w + 20, 0);
    renderBack(w, h);
  }
  pop();

  noLoop();
}

function renderFront(w, h) {
  let should_invert = colorField.elt.selectedOptions[0].dataset.invert === "true";
  let chaos = departmentField.value() === "ChaosInsurgency";

  // Background
  push()
  clip(() => {
    rect(0, 0, w, h, 10);
  })
  
  let bg = colorBacks[colorField.value()] || colorBacks["Red"];
  image(bg, 0, 0, w, h);
  pop()

  // Outline the card
  push();
  stroke(180);
  noFill();
  rect(-1, -1, w+1, h+1, 10);
  pop();


  // Logos
  let logo = chaos ? (should_invert ? ci_logo_inv: ci_logo) : (should_invert ? base_logo_inv : base_logo);
  let dLogo = should_invert ? deptLogosInv[departmentField.value()] : deptLogos[departmentField.value()];

  image(logo, w * 0.02, 0, w * 0.6, h * 0.45);
  if (dLogo) image(dLogo, w * 0.4, h * 0.03, w * 0.2, w * 0.2);

  // Text
  fill(0);
  textAlign(LEFT);
  textFont(impactFont);
  textSize(h * 0.12);
  text(titleField.value().toUpperCase(), w * 0.025, h * 0.65);
  textSize(h * 0.12);
  text(chaos?"BREAKING CARD":"ACCESS CARD", w * 0.025, h * 0.85);

  fill(should_invert ? 255 : 0)
  textFont(ocrFont);
  textSize(h * 0.25);
  textAlign(CENTER);
  text(accessField.value(), w * 0.9, h * 0.38);
}

function renderBack(w, h) {
  fill(255);
  rect(0, 0, w, h, 10);

  let chaos = departmentField.value() === "ChaosInsurgency";
  // Magstripe
  fill(0);
  rect(0, h * 0.1, w, h * 0.25);

  // Barcode
  if (barcodeCanvas) {
    imageMode(CENTER);
    drawingContext.drawImage(barcodeCanvas, w * 0.05, h * 0.8, w * 0.9, h * 0.1);
  }

  // Footer
  fill(0);
  textAlign(CENTER);
  push();
  textSize(h * 0.035);
  textFont(ocrFont);
  text(runMagReplacements().toUpperCase(), w / 2, h * 0.075);
  pop();
  textSize(h * 0.03);
  text(chaos?"Adapt the Anomalous. Dominate the Future":"Property of the SCP Foundation", w / 2, h * 0.96);
  textAlign(RIGHT);

  const formattedDate = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(new Date()).toUpperCase();
  text(formattedDate, w * 0.94, h * 0.95)

  image(icx_logo, w * 0.1, h * 0.95, w * 0.1, h * 0.055)
  imageMode(CENTER)
  image(chaos? deptLogos['ChaosInsurgency']:deptLogos['Regular'], w / 2, h * 0.57, w * 0.25, w * 0.25)
}
