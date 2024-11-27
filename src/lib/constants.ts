import { StaticImageData } from "next/image";
import grasp from "../../public/grasp.webp";
import fleet from "../../public/fleet.webp";
import ghost from "../../public/ghost.webp";
import flash from "../../public/flash.jpg";
import blade from "../../public/dblade.jpg";
import shield from "../../public/dshield.jpg";
export type TChampion = {
  name: string;
  difficulty: "Easy" | "Medium" | "Hard" | "INTeresting";
  image?: string | StaticImageData;
  guide: string;
  runes: { name: string; image: StaticImageData };
  summoners: {
    d: StaticImageData;
    f: StaticImageData;
  };
  startingItem: StaticImageData;
};
export const champions: TChampion[] = [
  {
    name: "Aatrox",
    difficulty: "Medium",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide:
      "Don't leash this matchup, fight him early can walk up and auto him early and spin out. Fight for level 2 and trade him with grasp procs while hes still lvl 1. Space his q's so he doesn't crit you (aka hit the sweet spot and knock you up) Can trade hard level 1 with just a little bit of fury, try to avoid his 3rd q damage. Aatrox has really good trades and healing so executioners is viable although don't go out of your way to buy it early, rush ravenous hydra. Go zerks if you can for this matchup but if you have to go merc treads for their team its not the end of the world. After ravenous play for sustain trades into bursting him once you get him low enough if you take too much damage on a trade can sustain up. If he is playing super safe and you cant kill him, demolish his turret in his face and force the issue. He wins vs you if he is even with you so try to get a lead if you need to fight him sidelane to win, need executioners if he has sundered sky if you wanna beat him 1v1 in mid game.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Ahri",
    difficulty: "Medium",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Ahri has strong poke and her E will stop your spin if you try to spin on her. If you dodge her charm pre-6 its a great time to trade, otherwise if you have good hp look to force the trade anyways because even if you lose the trade hp wise you will sustain back up. If you are looking to trade with her charm up look to dodge it. It is really important when laning vs ahri that you try to fight and beat her pre-6, otherwise you will be on the back foot for most of laning.  Dueling Ahri in mid-late game while her ult is up is next to impossible unless she is really far behind so the best way to fight her is force her to use her ult without using your ult and heal up on the wave with Ravenous Hydra.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Akali",
    difficulty: "Hard",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Look for opportunities for big trades level one because when Akali hits level 3 she has multiple ways of kiting you out (or going invisible). When trading, look to avoid akali's E (her shuriken flip) so if you spin in make sure to juke sideways after getting your one auto off. When akali hits 6 be careful as she can straight up one shot you if you are too far in lane. Try to get the wave on your side and farm it out until you get some more levels post 6 laning phase. The key to winning against an akali at this point is to make her commit for you after using her defensive cooldowns where you have time to fight back.  If you can't fight akali on the split, split opposite side of her and look to shove and force her to match, then outrotate.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Akshan",
    difficulty: "Medium",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Be careful level one vs Akshan since he has very strong damage (most take ignite as well) Tryndamere has kill pressure after level 6 or with any jungle gank. Once you have a few levels (usually around level 4) you can look for allins vs Akshan. IT IS VERY IMPORTANT THAT YOU STAY RIGHT ON TOP OF HIM!!!! If he gets any seperation from you he can use his swing to get away. If you are right on top of him, he cannot. Using ghost to stay directly on top of him helps a lot to prevent his heroic swing. Rush tier 2 boots in this matchup (usually berserkers) so you can stay on top of him better. Watch how I play vs Bjerg in this video https://youtu.be/fUa7AhkYbnM In late game teamfights, if you plan on flanking you MUST kill him first. If you kill his whole team and get a quadra kill and he kills you, he will just revive his whole team.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Alistar",
    difficulty: "INTeresting",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "If you are actually against an Alistar top, your sustain advantage with this setup is very beneficial. Alistar doesn't have the mana pool or sustain to take short trades against you and he also cannot all in. Be very careful of being pulverized into a headbutt into turret if your wave is close to his turret.  Something you can do is push in the lane and roam mid or help your jungler invade, Alistar will have a hard time farming under turret and will unlikely be able to help. ",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Amumu",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Amumu is weak in the top lane especially early. You can force all in trades even from level 1 and stack grasp procs on him. The one thing you have to be careful of in this matchup is that Amumu's e (his tantrum) gets the cooldown reset by 1 second for every auto he takes (even from minions!) so if he fights you in your creep wave, he can get multiple tantrums off in an all in. Besides that, look to crush him early and if he is the one responding to your splitpush later in the game and you think he is too tanky to dive, he is a very immobile champion so you can outrotate him on the split push or tank his damage and demolish his turret then step back heal up with ravenous hydra then do it again. ",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Anivia",
    difficulty: "Medium",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Anivia is a very annoying champion to lane against. It is really hard to force an all in on her because of her crowd control with her Q, her wall, and her ultimate. The way to beat anivia is by punishing her with your health sustain, getting perfect farm, pushing anivia in forcing her to use mana. There can be spots to all in an anivia, but first you must get some good short trades into her where you force resources out of her. A good time to trade in this matchup is if she uses her q to farm and she is far up in lane where you can punish the Q cooldown. WARNING! Do not get baited by her egg, her egg is a 4 minute cooldown. If you are forced to split against Anivia and you aren't in a position to dive/force trades against her, then shove the wave into her and outrotate her. Anivia is a very immobile champion and won't be able to easily follow your rotation. ",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Annie",
    difficulty: "Medium",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "To win against annie, you need to look to force trades into her early since she has lower base stats than you. Use your sustain from the runes setup to help you get through her early poke. Annie has VERY weak base stats so if she doesn't poke you hard enough and you have a good amount of HP/Fury to trade with (assuming she doesnt have an enormous wave) then you look to do a heavy trade/allin against her. Later in the game, you do outscale Annie in a 1v1 situation however, be very careful with her burst and make sure to not miss your ultimate. If the enemy team has multiple forms of crowd control besides Annie feel free to build merc treads. Otherwise situationally if winning the game is reliant on you 1v1ing Annie in the side lane, then buy qss to guarantee your all in. ",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Aphelios",
    difficulty: "Easy",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Yeah gonna be honest here, aphelios gonna be shooting his guns and shit. If his gun be purple he gonna root, if he gun sniper and shit he shoot real far, if he gun be red he go real fast and heal up, if he gun go white he bang bang. Just get 6, ghost and kill the motherfker. Ok but for real, as ranged vs melee hes gonna poke you so you can sit back and sustain up until you hit around level 3 or 4, then you can look for trades/allins when the wave is shoved. ",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Ashe",
    difficulty: "INTeresting",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "If you are playing against Ashe top, be very careful with early game. Ashe good range and good poke and decent kiting with her passive that slows you. Once you get 6 however, she cannot stop your allin against her and you basically just run her down. If you are getting kited hard, build swifties. Just like most adc's top, its all about knowing how to take as little damage as possible early game and getting good farm under turret. If Ashe is holding you solo in the mid-late game look to dive her. Ashe doesn't have the tools to stop you 1v1. ",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Aurelion Sol",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "If you are playing against aurelion sol in the top lane, then you can look for all in trades if the wave is ever on your side of the lane.. A good way to easily win against this kind of matchup is by manipulating the wave to enable you to use the length of the lane to punish him, he can W away from you but it has a high cooldown early game (22 seconds cd) . When dueling an Aurelion Sol on the splitpush in the mid-late game, their combo is going to be a E+R to disengage you, however if they didnt burst your hp bar and force you to ult you should be able to all in when your spin comes back up.  You can just shove him in and look to fight elsewhere or maybe just kill him.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Aurora",
    difficulty: "Medium",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "You can look for early trades on Aurora lvls 1 and 2 to look for a chance to all in her, however she gains a ton of movespeed when she procs the 3rd hit of her passive (can proc off auto attacks or ability hits). She is a bully matchup and should be treated like one, so use the bushes top lane to avoid auto attacks, get your fleet procs on minions and space her auto attack range. Aurora's Q is what she is gonna be spamming on you in lane, it goes through minions and she can reactivate it if she hits you to deal the damage again (with the 2 hits that is 2 parts of her passive) and then she will look to auto to proc the passive. Her E is like caitlyn net that throws her back and applies a stack on her passive and slows your for 1 second. Her w will make her hop and she will go invisible for 1.5 seconds (you can scout her location using tiamat active and/or your spin while she is invisible). Her ulti is like camille ult where it can lock you inside the circle (can flash out of it though u just cant walk), and when she hits a corner of the circle she will teleport to the other side (can do it endlessly until it expires). Your main focus in this lane if you don't get early kills is to get the wave on your side of the lane and threaten all ins, farm up and get to your ravenous hydra where you will be able to pressure her hard (her damage is somewhat low). In mid-late game you can run down Aurora outside her turret just be careful of her kiting she can do with her ulti and don't give her the escape route she wants by following her to the otherside of her ult just to blink opposite. Diving her under turret is hard to do with her ult up and high hp, so either dive her when her ult is down or when you have already gotten her fairly low. ",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Azir",
    difficulty: "Medium",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: " Early game strategy is to hard trade with him early before he hits level 3. When hes level 3 he can E to any one of his soldiers so when you spin on him he will w behind him and dash to it then q back on you. Any damage on him is way more worth then the damage you take since you have a vastly superior sustain advantage. Find an opportunity to burst him down or maybe even spin behind him if he pushes deep and chase him down with ghost + flash. His big escape too is his E + q combo where he can dash an entire screen away. A good time to go in is when he q's you since he wont be able to dash as far. When diving an Azir, if you are forced to spin in on him and he ultis immediately, you can back off the dive sustain back up, then redive with the ultimate advantage (assuming he didnt burn it already with his ulti) OR if you spin on him and you are able to reset your spin before he ultis you away you can just spin over his wall and kill him OR if you have flash advantage you can spin on him force his ult, then flash back on him. Mid-late game if you are splitting against an Azir and you cannot dive him, look to shove him in and outrotate him. Tryndamere has much better out of combat mobility to rotate in between lanes to potentially flank the enemy team. ",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Bard",
    difficulty: "Medium",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: " Bard matchup is all about getting good farm without taking too much poke damage. Bard's auto attacks are very strong, but we can look to sustain with our runes and dorans shield. Look to use the top lane bushes to hide your character while you are waiting for the minions to get low enough to kill. Be careful when all inning bard and he takes a portal that you don't get baited into it. Once you get tiamat, you can look for short 2-3 auto trades + spin damage, into an eventual allin with burst. IMPORTANT NOTE: YOU CANNOT ULT DURING BARD ULTI, so when he ultis you while you are low and it looks like he could kill with you burst right after the ult, be spamming your r key to get your ult off as quickly as possible. ",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Bel'Veth",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Bel'veth early game is very weak. Her only strong point is using her E when you spin in on her, try to bait this cooldown by walking up and autoing Bel'Veth and saving your spin to spin out of her e. If her E is down you can just run her down with Ghost + Flash. Her Q is a dash that is on cooldown per direction she Q's in that deals a bit of damage as well. Pay attention to what direction she has by looking at the indicators around her to see where she could try to kite to if you are in an allin. She cannot dash over a wall unless she has used her ulti to transform into her 'true form' which she can only do on champion/epic monster takedown. Her W is a knockup that also lets her dash again in that direction if it lands so try to sidestep it of possible or ghost and walk thru her to dodge it. In the late game Bel'Veth ends up outscaling you but only once she has gained enough stacks to ramp up her attack speed. Try to win and end early.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Blitzcrank",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Blitzcrank in a solo lane does not have waveclear. Punish his lack of waveclear by constantly pushing him in and getting plates in his face with demolish. Blitzcranks one way to try to win this lane is by hooking you into getting ganked, or hooking you into turret and knocking you up. Stay behind minions, focus on pushing and hitting grasp procs on him (unless he is really far up the lane where u can just all in him) and beat him with a huge farm lead. Blitzcrank will have a hard time farming under turret. ",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Brand",
    difficulty: "Medium",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Brand has a lot of damage and can kite you with his 1.5 second stun on his Q. The way you can beat Brand is by punishing his cooldowns by trading when he misses Q or looking to dodge his q after you spin in. If he runs low on mana to the point where he can't do his full combo you can look to all in or get a big trade atleast. Brand is immobile so if he is out of position or too far up the lane even with his strong combo of abilities we can still run him down the lane when overextended. A big part of the matchup is looking to dodge his abilities so make sure you keep your mouse cursor close to your champion so you can make small quick movements to move side to side. Also predicting when and where he will cast abilities can help you dodge his skillshots too. If you are up against brand in the mid-late game splitpush, you can look to dive him pretty easily. He has a hard time dealing with tryndamere 1v1 once the tryndamere has items.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Braum",
    difficulty: "INTeresting",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "It might be hard to kill a Braum in the solo lane because of his disengage with his q slow, however he has no sustain (mana or hp) so you can use that against him to push him out of lane. Braum's biggest strength is the ability to set up ganks with his Crowd Control, but mostly this should be a very easy matchup. If you are splitting against Braum in the mid-late game and he is too tanky to dive, then just ignore him and hit turret or out rotate him with your superior mobility.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Briar",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Briar has absolutely insane all in and has great healing when she bites with her W. However she MUST run at you and fight you when her W is on, most of the time you can just auto attack and spin away and kite out her W duration. Her W does more damage the less hp you are so staying topped up on hp will greatly increase your chances of winning the matchup. Your stats are better than briars early and she must auto attack to heal as she has no inherent regeneration. Executioner's calling is a must in this matchup, can get it after tiamat. When she uses her E it has a fairly long cooldown that can break her out of her w and if she holds it, it will push you back when it hits you so look to sidestep it when she starts casting. You can play very aggressively in this matchup just be careful when diving you dont get hit by her E channel as she gets damage resistance as well as the stun can ruin the dive.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Caitlyn",
    difficulty: "Medium",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Make sure to use the brushes to hide your champion while you wait for minions to get low to avoid damage while farming in the early game. Early game ADC's can poke Tryndamere really hard, and Tryndamere will not have the damage to out trade them early on without getting poked out. Post 6 this matchup becomes extremely easy and you should be able to 1v1 basically anytime post 6. Before 6, just look to farm and avoid taking unneccessary damage. Your runes + dorans shield will provide a really good amount of sustain but remember its ok to give up some farm as long as you get the experience for it. In the mid-late game if you are splitting against caitlyn, you should be able to kill her pretty easily just remember that while she is running away she could turn back and face you when she casts her E, so be careful when deciding to use W slow.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Camille",
    difficulty: "Medium",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Level one you can beat camille if she does not have ignite if you can get solid short trades into her. That being said you can still look to build fury before hard trading into her and when you do go all in make sure you use the time that her shield is proc'd to get ahead of her (cutting off her escape path) The way to win early in this matchup is by kiting camille out when she procs her shield early (even try to bait it out) then trade after the shield expires. The way you kill camille is by finding an opportunity to all in her without her being able to disengage (for example she e's into you but u end up in between her and her escape path) . A good time for a short trade is if camille looks to W you when you have spin up, spin on her before her w goes off get a quick auto then back up after her w ends to avoid her trading back. If camille hookshots into you and commits too hard then you can look for an allin then OR if camille hookshots into you and misses that is a great allin opportunity as well. Otherwise you can potentially win by taking short trades with camille as well but having the sustain advantage with your Q. Diving camille can be an optimal spot for an allin, so you can start with an auto attack and save your spin for when she disengages with e, just be careful when you use your w that she is facing away from you (her w towards you will make her face towards you.)",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Cassiopeia",
    difficulty: "Hard",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Cassiopeia especially with phase rush can be a huge bully to Tryndamere in the top lane and can also deal huge damage in a short period of time however she does have a set of weaknesses that allow a melee character like tryndamere to kill her. First punish point for Cass is that she will have mana issues before her first back, if you are able to dodge enough of her q's in lane or you take a big trade with her she expends her mana and does not kill you and you sustain back up, you can find an opportunity to fight her.  Another kill point in the matchup vs Cass if she takes phase rush is to find a spot to all in her if she wastes her phase rush activation. Phase rush has a long cooldown early that you can punish. Post level 6, Cass can stun you with her ultimate as a means of disengage however if you turn your back to her during her cast animation you will be slowed instead which can sometimes get you a kill (must have good reaction time.) If Cassopeia takes Conqueror instead, she will have way more damage in allins but once you get items you will be able to run her down easily, also its way easier for your jungler to gank her if she doesnt have phase rush. If you fall behind against Cass look to farm as best as possible and soak exp, keep yourself high enough hp where you can help your jungler kill her if he decides to gank. Cassiopeia without phase rush does WAY more damage but she is also much easier to kill. Pretty much every time your ghost is up post 6 you can look to fight and kill her, still look to dodge her ulti stun but often times even with her stunning you, you can still kill her. Dodge her ulti stun by looking away from her as she is casting, so be ready to click behind you to force your character to look away, its a tricky timing but can be done consistently.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Cho'Gath",
    difficulty: "Medium",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Cho'gath has high sustain by killing minions and a 6 second crowd control knockup in a circle aoe. His knockup is fairly easy to dodge if you are looking for his cast animation on it, and Cho'gath is immobile (no dashes or bursts of movement speed) so if you can dodge his Q you can get really solid trades on him. Early game look to build up fury without taking too much damage from his E (his empowered auto attacks) then look to trade. Force an extended trade, by starting off trades with an auto attack when he goes for a minion that way you can save your spin to dodge his Q or to stick on top of him when he walks away (position your spin in between Cho'gath and his escape path which will usually be his turret) In the mid-late game, Cho'gath will be extremely difficult to dive, but you can beat him if he is far up in lane with an effective all in OR you can shove Cho'gath in and outrotate him with your superior mobility. Cho'gath's ult is EXTREMELY high burst so make sure if you fall into his ultimate execution range that you press R a little bit early. In the mid-late game if he builds full tank and you are ahead but can't dive him you can force into his turret demolish it, then walk back and sustain back up in the 1v1.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Corki",
    difficulty: "Easy",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Corki is ranged so he has some decent poke early, but not enough where tryndamere's sustain can't handle it. Corki has no crowd control and not very good disengage so when you get pretty much just one item you start beating him really hard in allins. Be careful with your w slow because corki will face you when he shoots his rockets (or q) so usually time your w to cast it when he rockets +autos you then turns around to kite away. Corki can't handle tryndamere 1v1 in the mid-late game.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Darius",
    difficulty: "Hard",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Darius has very strong all in trades and his passive when stacked 5 times (stacks every auto attack and when he hits his q on the outer edge and his ultimate) gives him a lot of attack damage and does damage over time to you. Darius can start different abilities which changes how you play lvl 1. Darius with Q start is strong for early clear to get level 2 first so make sure you look to dodge the handle on his q and look to short trade when its on cooldown. Darius with W start will look to take trades with you when you walk up for minions. Biggest thing to pay attention is they keystone + summoner spells. Ghost + Flash darius with conqueror has extremely good all in and if you are caught too far in the lane with a pull he can usually burn your summoners and then kill you as well. If Darius pulls you at a bad time for you, your best hope is to turn on him and all in and pray for crits. The darius matchup in general is a lot about punishing cooldowns on his q and finding spots to take short trades with an auto attack + spin out without being forced into an all in by being pulled. Darius can be hard to dive 100-0 so if you find yourself in that situation where he is just sitting under turret, then push him in and look for opportunities to outrotate him with your superior out of combat mobility and flank his team.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Diana",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Diana's third auto attack in a short period of time deals extra damage, splashes, and gives her bonus attack speed. So pay attention when her blade lights up (signalling that her empowered auto from her passive is ready) so that you can avoid the splash damage. Diana is mostly immobile so you can run her down the lane for an all in which you will win assuming you have a good amount of fury/hp. You counter diana's burst with your ultimate post 6, A good diana will try to burst you of your ultimate and then use her dash on a minion to kite you out so the best thing you can do is force her to commit all of her abilities into you to burn your ultimate. Dueling against Diana in the mid game is pretty easy as long as you dont miss your ultimate. Dueling her in the late game when she has the power to one shot you with items and then zhonya can make it pretty difficult on you.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Dr. Mundo",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Mundo is very strong in early game with short trades so the key to winning this matchup is dodging enough skillshots and build fury for an allin (or big trade with grasp). Best opportunities to trade with mundo is after you have a good amount of fury/hp and you start off the trade with an auto attack on him that way you can save your spin for when he tries to disengage with his cleaver. When he gets too tanky and hes playing safe under turret and you get your ravenous hydra just heal up to full off the wave, tank a bit of his damage and get your demolish proc on turret, then back up. Be careful when he has his E up to not stand behind minions that are about to die because he can knock them through you to deal damage. In the mid-late game it can be difficult to dive a mundo so you typically want to catch him out away from his turret, or shove him in and out rotate him with your superior mobility.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Draven",
    difficulty: "Hard",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Draven top's lane laning phase is super greedy (can get ganked easily) but can also be super punishing for a melee top laner like Tryndamere. Draven has VERY good early damage and can put a lot of pressure on. Look to avoid damage and get farm only when you won't take too much damage for it. Remember experience is worth much more then farm. If you greed for too many minions and get pushed out of lane and fall behind in levels it can be hard to catch back up, but if you stay even in levels and fall heavy in farm you can outscale him later. You outscale with ravenous hydra full healing and allinning him with ghost up.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Ekko",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Ekko matchup is mostly a farm matchup because of how easily he can clear waves from range as well as his ability to kite with his passive. The way to beat ekko is to force small trades as he waveclears (stand to the side of the wave so he has to choose between hitting you or the wave) and then outsustain him so that you can burst him down once he falls to low hp. Ekko in the mid-late game can be pretty tough on the splitpush especially if he gets ahead. If you aren't winning the split vs ekko don't try to force the 1v1 against him, look to farm kite back if he looks to engage and can look to rotate away from the matchup and just heavy clear with ravenous hydra under turret",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Elise",
    difficulty: "Medium",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Elise has a little bit of poke damage but Tryndamere can just sustain through her damage pretty easily if she is in the solo lane. Elise will run out of mana before poking Tryndamere down. Be careful not to get baited into diving elise, her rappel is pretty good at waiting out your ulti timer under turret and kiting you. Elise doesn't have the best waveclear so you can just shove her in over and over again to put pressure on her either by getting plates or looking to roam while she is farming under turret. In the mid-late game it can be difficult to dive her under turret because of rappel and the zhonyas that she will probably have so if you cant catch her outside of her turret range, then shove her in and outrotate her using your superior mobility outside of combat. ",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Evelynn",
    difficulty: "INTeresting",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: " Evelynn is honestly a pretty troll solo lane pick. You can just all in her pretty easily pre-6 and she cant really stop you. If you are playing against an Evelynn jungle however here are some tips. Don't ward the river brush or tribrush, instead look to ward deep in her jungle so that you can see her while she is doing her jungle camps. In the mid-late game against an evelynn jungle you have to be really cautious about dueling your top lane opponent (unless u can 1v2 of course) just because most evelynn players try to take out the split pusher first before joining the rest of the team. ",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Ezreal",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Ezreal has good poke early and is a ranged matchup so make sure you are using the lane brushes to hide your champion so he cant auto you or sit behind minions so he cant Q you to avoid damage. Only walk up to last hit minions early on. When you have a little fury built up you can start taking trades with ezreal. If you burn his E and can't follow up on him immediately, look to hit minions to reset your spin cooldown so you can spin on the ezreal before he gets his dash back up. If ezreal is too far up in lane you can always just ghost at him and save your spin for after his E. In the mid-late game split push you will be able to 1v1 ezreal 100-0 in a turret dive as long as you have full fury to reset your spin with. Remember with your W that ezreal will turn back to face you when he q's and when he autos, so usually you will use your w when he q+ autos you then turns away to kite.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Fiddlesticks",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "You can take ignite for this matchup but you really don't need it, can build executioner's first if anything. If you know for sure you are vs fiddle top and they dont have strong kite on the rest of their team just take ignite and own him 1v1. Fiddlesticks doesn't have the greatest mana pool so if you take a bad trade early, sit back and heal up and soak experience. Most of the time however you are gonna just be crushing the poor guy because he can't do enough damage to you and you out damage his heal on his drain. That being said though the more minions you have, the more healing he is going to get. In the mid-late game splitpush you crush fiddlesticks in a 1v1, otherwise it can be hard to dive because of his fear. Remember when using your W slow that he will turn back to face you when he fears, or throws his e while trying to kite away. So use your W in between when he is casting either of those abilities.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Fiora",
    difficulty: "Hard",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Fiora is a tough matchup early in the game especially if the fiora takes grasp of the undying or PTA as her keystone. Can build executioner's early. Take trades with the position so when you attack her she has a hard time hitting your vital so be moving constantly (in between every auto). If you have a bad vital early (vital is directly in front of you where fiora can easily hit it) then you can reset the vital position by walking out of fiora's range, which is pretty far but usually can reset it atleast for the first minion wave. Fiora's W when it hits you will reduce 25% of your attack speed in a 1v1 so DO NOT commit onto her with your spin she will riposte, auto attack, e to reset her auto attack, then q your vital and disengage and there isnt much you can do about it. The only time spinning into Fiora while she has her W up is if you dodge it or if shes just so low that basically one auto kills her Fiora's W however has a REALLY long cooldown (24 seconds level 1) so if she uses it and doesnt get a good trade on you, then you need to look for a spot to trade with her (usually right after she q's.)When you want to dive Fiora try to attack her and burn her W, then spin out of turret range, then reengage the dive while her W is on cooldown. If fiora wastes her W and she does not all in you with it that is a great time to look for a trade/allin. When using your W just remember that she will turn her back towards you when she uses her riposte or if she wants to turn and slow you down with her e auto attack reset. Usually I will use my w when she q's away from me to disengage so that she is guaranteed facing away from me. In the mid-late game splitpush the 1v1 is pure skill on both sides. Tryndamere can hug a wall to prevent the 4 vitals from fiora's ultimate from being hit so that she doesnt get the healing, and fiora can angle to get the vitals before Tryndamere can hug a wall or fight Tryndamere when he is in the center of the lane. Usually 1v1's against Fiora will be risky unless you are ahead in items so usually you will push her in and rotate to flank her team",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Fizz",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Fizz can be annoying with his short trades early and if he gets ahead can snowball really hard against Tryndamere. The way you beat fizz is by setting up a really good all in after his playful trickster is down (his hop.) Fizz's E has a 16 second cooldown level 1, so when its down you have a lot of time to work with to get an all in. When you trade and look for an allin do not start with your spin. Start with an auto attack, that way you can save your spin to stick onto him to extend the trade and force the allin. If you get too low hp, sit back press q and soak experience. Fizz has no sustain in his kit so even if you lose on a trade, you can heal back up and he cant. In the mid-late game splitpush it can be really hard to dive fizz because of his E and zhonya, and he can duel pretty well against you because he can 1shot you to force your ultimate and then kite you. If Fizz is ahead, look to avoid him on the split push (can sometimes just build a single negatron cloak to counter him if he hasn't built pen). You win the extended fight.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Galio",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Galio is an immobile champion. Best case scenario for a trade will be when Galio goes up for a minion rather then by starting the trade by spinning in on him that way you can save your spin to stick on top of him after he disengages to extend the trade. Galio can look to disengage by knocking you up and then walking away but if you were able to save your spin or reset it before he disengages then you can stick on top of him. Tryndamere has really good sustain too so the Galio wont be able to poke you down enough with his Q. Galio can get pretty tanky in the mid-late game but usually Tryndamere with full fury and items can still 100-0 dive a Galio under turret just because he can't kite away very well (be careful of zhonya though!). Galio does have a semi-global ultimate to help his team out so make sure that when your team is pressuring an objective that you are pressuring Galio at the same time on the split to prevent him from helping his team. (Or if Galio just leaves just get turrets/inhib) . Can always buy oracle lens and clear way for you to roam on their team or to try and catch him away from turret if he is too tanky.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Gangplank",
    difficulty: "Medium",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "If you STRUGGLE with gp, its OK to go dorans shield and farm for ravenous, but its not optimal UNLESS the gp takes ignite then u should take dshield. Gangplank with grasp/first strike has a really good early game into Tryndamere.  Look to farm up and short trade with gangplank and outplay his barrels . Once you get enough damage you can start looking for aggressive trades into him. A big part of this matchup is playing around his barrels. One really good tip I have discovered from playing this matchup a lot is that gangplank will usually put down a barrel below him to disengage from you if you spin on him, but what you can do is walk inside the barrel range to bait him to try to auto or q it, then you walk right back out before it explodes. Taking out his barrels that way or straight up just walking up and hitting it before he does can help you significantly to win this matchup. In the mid-late game splitpush beating gangplank in a 1v1 is about how well you outplay him on his barrels when you are diving him. If you aren't playing well around his barrels, you can look to use your superior mobility out of combat to roam and flank his team after shoving him into his turret on the split. Everytime your ghost is up post 6 and you have good fury you can usually straight up dive GP from 100% hp.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Garen",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "His Q is on a 8 second cooldown. Tryndamere wins the extended trades, Garen wins the short trades (its still ok to auto+spin away if you can buffer your spin before his silence hits you). Early game build up fury, and when you have a good amount of fury built up, look to auto attack him and move forward towards his escape path in between auto attacks and then spin on him after his silence is over and you can get an extra 2-3 auto attacks to win the trade. Don't use your W on Garen until he Q's because his Q takes away the move speed slow from your W. Post 6, be mindful of Garen's ultimate which is an execute based on your missing health. It has a very long cast animation though so you can usually wait to ult until you see the animation for his ult coming down (if you know you have bad reaction time to stuff u can just ult at like 25% or so). You can ult even if you are silenced so dont worry about that. Another tip for laning phase is if you w and slow the garen it will stop his passive from healing him. If you w and dont hit the slow then it will not stop his healing. In the allin vs garen, make sure that you use your w after he uses his Q because his Q will cleanse your slow. In the mid-late game if garen built tanky it can be hard to dive him under turret so look to catch him away from his turret, or if he is playing really safe then shove him in and outrotate him with your superior mobility.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Gnar",
    difficulty: "Hard",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Against gnar you can abuse his low base stats on his mini gnar in early trades before he gets his jump (usually gnars will get their jump at level 3.) So for your first trade against him you usually want to wait out his q and either dodge it while you build up fury or if it hits you wait until the slow runs out. Then spin on him and auto attack while moving towards his turret to extend the trade as much as possible. Usually can get 3-4 auto attacks if you position your spin correctly. Once gnar hits level 3 if you havent gotten enough damage on him to look for a kill then just farm. IMPORTANT NOTE: Gnar's hop is a 22 second cooldown level 1. So if he uses it, then you will have atleast a 10 second window to spin on him (assuming you made him use his hop when you used your spin at him) to get another spin and run him down. In the mid-late game splitpush it can be hard to beat gnar 1v1. Ways you can beat gnar in the mid-late game split push, either you wait until hes exhausted (just came out of mega gnar form) so that he cannot build it back up when you allin him. If he face checks you in a bush and you hit your w slow that can be another way to catch him out on the split and beat him 1v1. When using your w remember that he will turn back to throw his boomerang so try to time your w slow to cast after he uses boomerang + an auto attack to guarantee you will hit it.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Gragas",
    difficulty: "Medium",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Gragas has pretty good sustain and can deny any kind of all in opportunities with his body slam which is really good disengage. Force hard into gragas lvl 1 you can fight him and beat him even in the minion wave (don't spin on him literally just walk at him save spin for after his body slam) . Gragas will usually start body slam to counter your spin so just walk up and auto him and when he backs off you can spin on him, and definitely spin on him if he uses body slam before your spin. Gragas will usually build very high ability haste so his body slam will be up constantly to stun you and disengage. The way you beat gragas in laning phase is by finding trades where you can take more than just a spin one auto trade against him, or continue to fight him after his bodyslam disenage with ghost. If the Gragas is playing well, you can just play this as a farming matchup. In the mid-late game splitpush Gragas can be really annoying to dive, so just shove him in and out rotate him with your superior mobility.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Graves",
    difficulty: "Medium",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Graves doesn't have enough kiting tools to survive a straight up all in versus Tryndamere. One thing you should pay attention to though is his grit stacks. When graves dashes he gains armor which can stack up to a ridiciulous number which can make him seem very tanky. A good tip against graves in general is that graves autos don't penetrate minions so you can actually hide behind minions and avoid his auto attack damage. Once you hit level 4 thats going to be your ideal time in the early game to allin graves, so make sure that you set up your wave appropriately so that you have room in lane to run him down with your all in. With your W slow, one tip I have is using the w after he has kited out of your auto range and is out of bullets and is reloading.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Gwen",
    difficulty: "Medium",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Gwen has a strong early game against tryndamere because her E gives a massive amount of attack speed and on-hit magic damage (aka dont just all in lvl 1 u most likely lose). This matchup is all about hitting level 6 and getting the straight up all in opportunities (without lethal tempo we have to take a few trades before straight all in unless you are already ahead). If you learn how to get through early game against this champion, this matchup is very easy but if you fall behind she can get enough stats to survive your allin post 6. Watch out early game for her stacking up her Q on minions then e'ing forward and q'ing you for high short trade damage into an auto. A small trick you can do to try and farm safely under turret is to bait gwen into trading you in the middle of your wave (where her q also hits the wave to push in) so the wave is always pushing into you. If gwen goes ignite be careful of high damage early burst. In the mid-late game you can 100-0 tower dive on cooldown until she gets a zhonya. After that fight her outside of turret or shove in and force rotations that can get your team ahead.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Hecarim",
    difficulty: "Medium",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Hecarim can stack up a LOT of damage with his q, so the most important thing about taking a good trade with hecarim is going at him when he has no stacks on his q. For every stack on his q, his q cooldown gets reduced and he gets more damage. This matchup can be difficult if you trade incorrectly with him and into his q while stacked up. Be careful about dueling him when he gets trinity force/divine sunderer spike because he gets very strong with it. The key to this matchup is to look for solid trades where his q isnt stacked up and then dip out before he gets it stacked up all the way. Hecarim can reset fast by backing and using his e to get back to lane very quickly, but a good kill opportunity is to try and find that allin point before he takes his back. Be careful not to chase too hard into hec if his e gets him out of range of your autos since he can kite you hard, better to take a few autos on the trade then dip out. Can commit to Ghost + Flash if you get him below half usually.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Heimerdinger",
    difficulty: "Medium",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Head to lane at the very start of the game and make sure heimer doesnt set up his turrets in lane, and also make sure he doesnt cheese your jungle buff level 1 either. If you let him get his turrets down then he will be able to pressure you and shove you under turret and deny you CS so make sure you take out all his turrets as soon as he spawns them, level one you can auto + spin on each turret to kill it so you can auto one turret and spin to his other turrets and one hit them. Post 6 you can look for allins on heimer however you need close to full hp to look for it. Once you get about Ravenous Hydra you can start beating heimer even when he has full turrets and cooldowns ready, still a good idea to take out his turrets early though so he doesnt have the burst of damage for after your ulti is over. In the mid-late game split push, if you don't think you can dive heimer then look to push him in and use your superior mobility to outrotate him on the map and potentially flank his team while he is holding the wave.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Hwei",
    difficulty: "Medium",
    runes: { name: "Fleet Footwork", image: fleet },
    guide:"Quick rundown of Hwei's abilities, his q is most of his damage, he can use his q as a rumble ulti, as a xerath ulti, or as a quick projectile that is low range but does %hp dmg. His W is utility giving him an on hit buff to himself an aoe shield on the ground or a speedup in a linear direction. His E is his CC, this will be his fear that is a fast projectile, a pull together or a circle like a lux E that sits on the ground until someone walks over it and roots them. The biggest cooldown you have to watch for is his E and when thats on cooldown and you have spin up its a huge all in opportunity. He can kite you with his other abilities as well, but his E (especially the fear because it stops dashes) is the worst one you have to deal with. Hwei's ultimate can slow you down a ton but can usually run him down and kill him before he can kite away from you if you dodged his e or he wasted it. Most of the time this will be a farm matchup where you shove him in and have prio on him permanently. In the mid-late game look to catch hwei outside of his turret for picks rather than a straight up dive unless u have double summs advantage or a huge gold advantage.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Illaoi",
    difficulty: "Medium",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "If you go to lane early and shes trying to prespawn her tentacles you can go take them out before lane phase starts (SPECIFICALLY, take out the tentacles she places on YOUR side of the lane).The biggest learning point in this matchup is knowing when to preemptively dodge her e (the thing that rips out your soul) and dodging tentacles. A couple of tips I have for dodging is keep your mouse cursor close to your character in laning phase (good tip in general to be honest) that way you don't have to move your mouse as much to move in a different direction to dodge an ability. Also pay attention to where illaoi could potentially use her skillshots. What I do is bait out her E (which has a 16 second cooldown level 1) by walking towards one of her tentacles and then preparing myself to move to the side the instant she throws out her E or even doing a stepback preemptively to dodge. When her E is down early you can crush illaoi. Post 6 you can beat illaoi in an allin as long as she didnt get a significant advantage on you beforehand (try to dodge e before going for allin) As long as you dont take too much poke before you set up an all in you will crush illaoi. In the mid-late game split push she will almost always be able to burn your ulti early with her ultimate. Sometimes if she ults too early, you can just back off and wait until her ulti expires and then re-engage on illaoi with your ultimate advantage.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Irelia",
    difficulty: "Medium",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Tryndamere can beat irelia in allins early BUT you must be careful about her passive and conqueror. She stacks both very quickly and can burst you down and use your own minion wave to kite you. Levels 1 and 2 you can get a good advantage on her if she doesn't play back early on, but if the Irelia takes ignite she might try to get a quick 4 stack on the first 3 minions of the wave + you and all in SO DONT LEASH THIS MATCHUP (which is why you take dorans blade in that case). Look to sidestep her E when she casts it, if you dodge her E that can be a very good time to force a trade. Remember when forcing an extended trade early, do your best to start off the trade with an auto attack that way you can extend the trade with your spin to keep on top of her after she disengages. Some Irelia's will start e or w level 1 to get minions from range but if she uses her cooldown try to position yourself forward so that if she walks in your spin range after she used her ability you can get a good trade on her. Post 6 You will win every allin as long as you start the allin with close to full fury and 90% or more hp. A good tip against Irelia is to fight her away from your minion wave, Irelia cannot kite away from you if she doesn't have your minions to dash around. In the mid-late game splitpush you will win the 1v1's as long as you dont get kited too hard. What I like to do sometimes against Irelia is dive them 100-0 right after they have killed my minion wave so that they can't kite away. Her W is a 50% physical damage reduction channel but only lasts 2 seconds.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Ivern",
    difficulty: "INTeresting",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "If you play against an ivern top he is trolling. Or i guess they doing some cheese ivern + rengar shit, in that case its still an easy matchup just watchout for rengar camping the shit outta you",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Janna",
    difficulty: "Easy",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Janna does not have enough damage to poke you out of lane. It can be hard to stick on top of janna with her knockup on her tornado and her slow with W. She is gonna have a really hard time farming under turret though so if you can't kill her then shove her in make her use mana to farm then kill her when she goes out of mana. Also you should watch this video when I played janna top vs a bronze 5 tryndamere on the LAN server. https://www.youtube.com/watch?v=5oHNoJe5wzQ&t=",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Jarvan IV",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "J4 has decent short trades with his shield and passive auto every 10 seconds and has good burst but struggles heavily vs tryndamere's sustained damage. Look for spots where you can start trades with an auto attack and extend trades with your spin. Longer trades are better for Tryndamere in this matchup. Be sure to try and sidestep J4's e+q combo when he kites away from you, often times if you dodge his e+ q knockup when he is trying to disengage you can stick on top of him and kill him after his dash (especially if you have spin.) If J4 ults you and you flash away from his ult before it lands, you can actually dodge J4's ultimate damage. In the mid-late game splitpush, if J4 goes full tank you can ignore his damage and hit turret, if he goes bruiser build you can look to dive him 100-0 as long as you dodge his knockup from his e+q or if you have summoner spell advantage. If you don't think you can dive J4 you can always shove him in and outrotate him with your superior mobility.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Jax",
    difficulty: "Hard",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Level 1 you want to look to make jax use counterstrike by walking up and auto attacking him, once jax has started using counterstrike STOP AUTOING HIM and make a quick move into his body then spin out to hit jax with your spin and get away from his counterstrike all in one. From there you have a window where if jax walks up he wont have counterstrike and you can potentially ghost on him for a huge trade and apply a ton of pressure. Look to always auto trade when you have grasp up. It is worth using ghost for a chunk of damage as tryndamere has much higher sustain. Look to shove jax in early then allow the wave to shove back to you, at level 3 jax becomes stronger than tryndamere but only if the tryndamere has allowed jax to stay relatively high hp. Always look to be short trading and bullying the jax early on. If you get caught up in a bad trade, look to let the wave shove and farm under turret. If you have an advantage in EXP, try to hit 6 before jax and look to dive him, if you can get him to waste his counterstrike before you are fully committed to the dive that is ideal. Look to kill him before he hits level 6, if you can call for jungle to help with the dive it is the best time to get assistance. Once he starts beating (when he scales) you focus more on shoving waves and moving from lane into potentially some roams (or jungle camp farm). Use your extra mobility to your advantage. Late game you lose hard on the split (unless u built a massive lead), but can still match him under turret. Try to force on the enemy team with a flank before jax gets setup on the split push.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Jayce",
    difficulty: "Hard",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Jayce can be killed level 1 if he does not take ignite/phase rush/ghost.  However after level 1 your kill opportunities diminish and it will become mostly a farm matchup where you are trying to stay healthy enough to support your jungler if he decides to gank for you. Watch for when he switches form because that basically puts 3 of his abilities on cooldown if he uses form change without trading you Tips to avoid damage, 1. When farming under turret while he is pressuring you, you do not have to go for every single minion. If you have taken too much damage usually you do not want to go for the ranged minions because they are closer to the Jayce that is pressuring you and Jayce can deal a lot more damage to you going for ranged minions then he can while you are hitting the melees. Post 6 when you have a good amount of fury and hp if he overextends in the lane against you, you can run him down with your ghost + flash and win in a single all in. Can short trade Jayce as long as you don't lose enough hp where you cant walk up and cs anymore. Every allin you take against Jayce have your ghost up or you can get bursted and kited. In the mid-late game you will win allins vs Jayce in the 1v1 even when diving as long as you have ghost up and he doesnt have flash advantage on you, as long as you can stick on him. In the ultra late game jayce can start winning with items like GA to prevent you from full on all-inning him and he tends to one shot and kite effectively. In this case use your mobility to outrotate him.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Jhin",
    difficulty: "Easy",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Look to build up fury without taking too much damage and you can trade with him even from level 1 with a good amount of fury/hp. Get level two first and shove in the wave so that it pushes back against you, then you can look for a level 4 all in when the wave is on your side of the lane. Jhin is immobile but has a slight movespeed increase early with his 4th auto. Mid-late game splitting against Jhin can be hard if he goes a build with swfities and a lot of movespeed but as long as you hit your w slow and have cdr you should be able to stick onto him 1v1. If he calls an ally to hold the turret with him, just rotate and potentially start a 4 vs 3 fight in your favor.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Jinx",
    difficulty: "Easy",
    runes: { name: "Fleet Footwork", image: fleet },
    guide:"Can look for trades even from level 1. Just look to build up fury and spin on her when she comes in range. Even if you lose out on the trade, you have sustain and jinx doesn't. Remember that her traps will actually stop your spin, so dont try to spin through her traps. In the mid-late game splitpush she cannot handle you 1v1 so just dive her 100-0 if she holds turret by herself.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "K'Sante",
    difficulty: "Medium",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "You can make K'sante a farming matchup and just trade grasp autos or you can look to try and kill him with extended trades depending on how comfortable you are dodging his abilities. K'sante has extremely strong poke at melee range with his constant spamming of Q which seemingly has no mana cost (15 mana) at level one. To counter this you must play it like Yasuo/Yone Q where you look to dodge the ability by entering its range then stepping out quickly to bait it out of your opponent then walking up and CSing/trade etc. Also his Q stacks up twice when it hits something and on the 3rd cast will knock you up and towards him. The travel time on that 3rd q is pretty slow early on in the game and is very easily dodgeable just look to sidestep it. Only take extended trades vs this matchup, doing anything else will result in a net win for K'sante. Post level 6 be careful when near K'sante's turret if you aren't in a position to dive him as he can knock you back a very far range back into his turret (even through walls) with his 3rd q into w into ultimate combo. It is very important if you end up looking for an allin post 6 that you have ghost up or have the means to chase him down through his high mobility post ult or you will get kited hard, so either have spin available, ghost, and or flash ready for the allin. K'sante loses a lot of armor during his ultimate but also gains a lot of extra damage and his q's strike really fast, and he gets a reset on his W and his E can now dash over walls.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Kai'Sa",
    difficulty: "Easy",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Kaisa has pretty good poke damage early on but she is mostly immobile besides a small speed up on her E. If she takes ignite or something like that to cheese you early on you can farm up while trying to avoid damage until 6 and then outscale her. In the mid-late game splitpush Kaisa can kite you with her ultimate and her dash but if you hit your w slow its over for her. If you want to play it safe try to get a w slow before spinning in on her.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Kalista",
    difficulty: "Medium",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Kalista can stack up a lot of damage on you with her spears to burst you at once. In the early game they don't do as much damage so if you can build up fury without taking too much damage level one, you can look for an early all in with your ghost to atleast burn her flash and take control of the lane. If you misplay a trade though and you get behind, look to soak experience and get whatever farm you can get. You outscale her in the 1v1 with tier two boots + Ravenous Hydra as long as you stay relatively even in gold. Just make sure when you get your spike in items that you all in with your summoners up. In the mid-late game splitpush Kalista will have to call an ally to match against you, so just look to push in and outrotate the two stopping you and flank their team with a man advantage. And if Kalista tries to hold the turret by herself you can just dive her.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Karma",
    difficulty: "Medium",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Karma has really strong poke early on so try to avoid damage by dodging her q's and using the brushes top lane to avoid auto attacks. You can take short trades into Karma if you are able to build up fury without taking too much damage and maybe her q or w are on cooldown. Punishing cooldowns is the best way to handle a ranged matchup like karma. If she misses an ultimate Q or wastes her shield, that could be a good time for a trade. Tryndamere will outscale Karma in the 1v1 going into the mid-late game with about 2-3 items. Make sure when you allin that you use your ghost early to stick right on top of her. When using your W slow keep in mind that Karma will turn back to face you when she auto attacks, uses her q, or uses her w.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Karthus",
    difficulty: "Easy",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Karthus q's are really annoying early but he is gated by his mana pool, so if you dodge enough of his q's he will eventually not have enough mana to fight you and you can all in and win. Post 6 you can all in and dive him even 100-0 and kill him because he is such a squishy champion with no mobility, there is a chance that his ultimate can kill you though so try to spin out and use your q and lifesteal against next wave if its there. A good trick against karthus to bait out his q's and dodge them is to walk up to a minion acting like you are about to go up and auto it, then preemptively back off and dodge the q. Karthus players will usually try to use their q to hit you when you walk up for minions to try and guarantee the damage. Wave manipulation can win you lane vs a solo lane Karthus because if you have the wave on your side of the lane, then Karthus has to overextend to farm giving you room to spin on him and run him down. In the mid-late game Diving him can be tricky because he almost always will be able to 1 for 1 with you with his ultimate. If you want you can try to take multiple spin + 1-2 auto trades with him so that you can try to dive him without having to use your ultimate to kill him. Or you can shove him in and rotate to flank his team with your superior mobility.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Kassadin",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "You can heavily outsustain kassadin in short trades, and if he is on your side of the lane he has no mobility pre 6 so you can run him down. Kassadin's trades early are fairly even with you, but you have the sustain advantage and can harass him down until hes low enough for a straight up allin. The key to beating kassadin (mid lane) is to position the wave on your side of the lane so you have plenty of room to run him down. Kassadin can outscale you in the very late game (when he hits 16 with 4-5 items) but he can be heavily punished before then and held down. Basically put your team in a position to win before he hits his powerspike. If you need to split vs kassadin late, a maw of malmortius can be a good pickup to help duel him.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Katarina",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Katarina has a really weak level one that you can abuse, get level 2 advantage on her and look to take a good trade. Katarina does have a solid level 2 allin with ignite that she can burst you with but you have to fall below about half hp for her to kill you. Our sustained damage is so good and if shes not killing us in one combo then she cant beat us. A big part of this matchup is how well katarina roams so to deny that we need to put constant pressure on her and keep the wave shoved into her turret or have appropriate vision to scout out katarina roams if we plan to freeze on her. Mid-late game katarina has a really hard time dealing with us 1v1. The best time for you to go after katarina is if she doesn't have a minion wave to dash to. ",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Kayle",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Kayle is EXTREMELY weak in the early game but be careful level one if she is allowed to full stack her passive and takes PTA  she can actually win the allin vs you so in that case make sure you spin out and don't over commit just get the short trade and get out build fury then go back in. She is melee until level 6 so that means she is forced to either use spells to get minions or to walk up and auto attack. Even without much fury level one if kayle walks up and auto attacks a minion we need to position our character forward to auto attack her when she goes for the minion and the spin on her to extend the trade. Often times we can burn her flash levels one or two. You can literally just fight her in her wave and chase her out of experience range if she takes fleet. Another big part of the matchup is when both characters hit 6, Tryndameres ult is a 120 second cooldown at level 1 however Kayle's ultimate level 1 has a 160 second cooldown. So if you ult and try to dive her or fight her and she ults and disengages.  We have a 40 second window to kill her with an ultimate advantage if we wait for our ult to come back up. If you are having trouble sticking to kayle (say she has swifties with fleet ghost+flash) you can build swifties as well to counter her movespeed slow on her q. Mid-late game splitpush Tryndamere will win, and even when kayle hits level 16 Tryndamere still has a really good chance of winning the 1v1 especially if she is away from her turret.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Kayn",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Kayn is weak early before his form, but that doesnt mean you should give him free damage towards his form. Kayn Q is REALLY strong level 1 so be careful of that damage, it has 2 parts you should look to avoid atleast one part of his q dmg if you want to win the trade.  When you choose to trade with kayn, look to make it an extended trade/allin. If you let kayn take short trades with you he will get to his form where he can fight you a lot better way more quickly. To force an extended trade, try to start off every trade with an auto attack that way you can save your spin to stick on top of him when he slows you and q's away. Also to set up an effective all in, make sure you try to manipulate the wave so it is closer to your turret. The closer your wave is to your turret, the further the kayn has to extend to get farm which means you will have more room to run him down.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Kennen",
    difficulty: "Medium",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Kennen is a tough matchup early game and PURE farm matchup unless they are so bad that they don't insta stun you post lvl 3 when you spin in. Its important to try and survive early as a good kennen will instantly stun you if you spin into them even before you can get an auto off. If Kennen has no phase rush, you can use ghost + flash to run the kennen down the lane even after he stuns you. Stuns past the first one only last .5 seconds so you can use that window to setup an allin. Kennen has no sustain in his kit and with all the sustain in ours we can take worse trades but still end up winning the sustain war in the end. Be careful not to trade below half hp because he can look to burst you and take away your ultimate which takes away your kill pressure. If kennen takes phase rush do not use your W until after his phase rush is on cooldown. Mid-late game splitpush against kennen you can beat him with 3-4 items. Still might be hard to dive him with his zhonyas but if he is just sitting under turret farming, just shove in and look to outrotate him with your superior mobility.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Kha'Zix",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Khazix has decent burst but for a solo lane khazix he is going to have a hard time trading with you while you are in a minion wave since he does not get isolation damage. Your sustain with the setup is too much and as long as you dont let your health drop too low he wont find opportunities to burst you. You can usually get a really big lead on a khazix in laning phase just because he typically isnt a top lane champion and doesn't have the sustain to match you. In the mid-late game split push this is where khazix can catch you out. Make sure you are always pushing within your minion wave and dont get caught out in rotation.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Kindred",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Kindred doesnt have enough range early to put enough pressure on you. Her damage is low and she needs time to scale. The way you win post 6 is by forcing kindred to ult before you have to ult, that way you have 5 seconds to kill her after her ult ends. If you are forced to ult before she ults remember that kindred's ulti lasts .25 seconds longer then the animation shows so wait just a little bit longer before trying to burst her at the end of her ultimate. In the mid-late game Kindred wont be tanky enough to survive your all in and will have to burn her ult before yours so you will win the 1v1.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Kled",
    difficulty: "Hard",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Kled can be difficult in the early game if he lands too many q's on you to poke you down. Look to dodge his q's while you build up fury level one and if you dodge enough you can look for trades level 1 and level 2 assuming that you get level 2 first. IMPORTANT NOTE: When Kled dismounts, he gains courage for every auto attack on a champion, he gains courage for every last hit he gets, and he gets courage for hitting his dismounted q against you. So if you are looking to all in Kled MAKE SURE that you dismount him WITHOUT your spin that way you can kill him immediately after the dismount. If you dismount him without having the ability to kill him immediately that is a mistake. Kled gets a lot of hp back when he remounts after he gets to 100 courage, so if you dismount him and cant kill him off his mount you basically just gave him at 300-400 hp potion. A strategy I employ if I can against kled is that I will look for short trades against kled and leave his mount at about 5-10% hp that way I can dismount him easily whenever I want and all in him right after. One thing to mention about kled's w is that he cannot control when he uses it EXCEPT for the first time he levels it up. Most good kled's will not level up their w (the 4 really fast auto attacks) until they are dismounted for the first time so that they can try to cheese a kill with the remount. So again make sure that if a kled is employing that strategy that you have enough damage to burst him so he cant remount during the allin. After kled has leveled up their W what they will do against Tryndamere is they will use their q and tiamat to farm so they can keep their w up and available to dash on you for an all in trade. If Kled ever uses his W on a minion, you have a 14 second cooldown on his level 1 w to look for a solid trade. In the mid-late game you outscale Kled really hard and can even 100-0 him under his turret once you are 4-5 items. ",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Kog'Maw",
    difficulty: "INTeresting",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Kogmaw is a ranged champion that can poke you down early but he is really squishy and immobile so you can kinda just run him down and kill him over and over again. The fleet proc will give you extra movespeed to stick to him as well as the sustain to deal with a ranged champion. An effective strategy to employ against an immobile champion like Kog'maw is to manipulate the wave so it is on your side of the lane. Doing this will force kogmaw to overextend to get farm. In the mid-late game splitpush Kogmaw cannot deal with you 1v1. If they send another person to help defend with him then rotate using your superior mobility to make a play elsewhere after pushing in. ",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "LeBlanc",
    difficulty: "Hard",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Leblanc is a really good lane bully. Avoid damage using the brushes top lane as well as potentially giving up minions of gold so you can collect more exp and sustain up with Q. Pre6 if she w's into you for a trade her W has a 18 second cooldown level 1 where you can potentially get a good trade in. For the most part you are going to be looking to farm this lane out because she does a very good job of kiting away from you. Before her first back though if she starts running out of mana because she is trying so hard to push you out of lane, then try to keep her from backing. The longer the lane goes without either of you two backing is beneficial for you since she needs damage and mana on her first back to pressure you harder.In the mid-late game splitpush Leblanc can handle Tryndamere in the 1v1 even while underleveled and underfarmed but with ravenous hydra we can full heal her combo unless she is super far ahead. If you find yourself having to 1v1 against a leblanc, look to shove her in and try to outrotate her or tank her burst and heal it back up then demolish her turret. Leblanc doesnt have the best waveclear so she might be slow to respond.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Lee Sin",
    difficulty: "Medium",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Lee sin really needs to hit his q in order to get effective trades on you. This is hard in a solo lane because you can always use minions to block his q and trading within a minion wave is no problem for Tryndamere. Lee sin has decent short trades if he hits his q, but tryndamere's all in is significantly better and it is easy for him to force trades. Post 6 Lee sin will look to burst you, with q + auto attack + e + ult + q + auto attack, then kite away with his w while you ult. Make sure you stay at a high amount of health so he cant do this burst without you being able to follow up. If Lee sin uses his ulti and doesnt burn your ultimate that is a HUGE advantage for you. Always look to start trades off with lee sin with an auto attack that way you can still use your spin to stick onto him when he w's away. You outscale this matchup with ravenous hydra because you will never be low enough for him to burst you since you will full heal every wave, look to trade often when you have this item and then heal up. If he plays super safe hit demolish on his turret after shoving every 2 waves. In the mid-late game Tryndamere outscales Lee sin in the 1v1. Just have to be careful with Leesin's burst to make sure you dont miss your ultimate.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Leona",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Bruiser leona top has decent damage but just not enough to take down tryndamere during an allin and won't push tryndamere out of lane because of trynd's sustain. If Leona takes aftershock just auto attack + spin away after she procs aftershock, then reengage when her aftershock is down. She does not have the damage alone to kill you but she can set up for jungle ganks pretty well so be aware that you might get camped top. In the mid-late game splitpush you can basically just push leona in and ignore her as you hit the turret infront of her face. Make sure you laugh at her before you spin away.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Lillia",
    difficulty: "Hard",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Lillia has extremely strong poke and mobility with all of her damaging ablities giving ramping movespeed due to her passive. The best time to fight Lillia is when she doesn't have any movespeed stacks setup. Her early game is strong so if you want you can bait her into trading into you with her Q which if you stay close to your minions will shove the wave into you allowing you to farm easily. Her ultimate puts you to sleep which she can activate if she has hit any damaging ability on you recently and can be really strong to combat your ultimate. You must get strong short trades into Lillia to chunk her before committing to an allin or you will lose due to her ramping mobility. In the late game with your high cooldown reduction, movespeed, and hitting your maxed out W you can stick to her pretty well.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Lissandra",
    difficulty: "Medium",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Lissandra has really good poke but with this setup she will run out of mana before poking you out of lane. Just be careful if you fall below 1/3 hp that you look to sustain back up before walking up. Look to stand within your minion wave to force lissandra to push when she tries to poke you and also try to side step her Q. Keep in mind that Lissandra's q range extends after hitting a target. When you get tiamat, you can really force lissandra to use a lot of mana and you can sustain back up with your q and healing from runes by spinning in for short trades. Be patient on your eventual allin, its gonna take some time to prepare a solo kill on lissandra since she disengages really easily. And when you do go for the all in make sure you sustained back up so she cant force you to use your ultimate immediately. In the mid-late game Lissandra becomes annoying on the splitpush because she can clear waves really easily. Ive found it to be a better option to just shove in and force a rotation out of her by looking to flank her team, and then potentially heading back to the lane and shoving in before she rotates back over. Make use of your superior mobility to lissandra because Tryndamere can traverse the map much faster.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Lucian",
    difficulty: "Medium",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Lucian has really good poke and in combat mobility even from early on in the game. Once your mobility outscales his is when you start to win. Look to farm safely early and avoid damage by using the brush and staying within your minion wave so that when he trades into you he is also shoving the wave in. Pick and choose which minions to go for under turret. The melee minions and cannon you should always look to get but the ranged minions are further from your turret where lucian can deal more damage to you, and ranged minions are also worth much less gold. In the mid-late game splitpush keep in mind that Lucian does have a strong disengage with his w into ultimate so if you are able to burn his ultimate cooldown without using yours, you will have a good time beating him up afterwards. With your W, make sure you keep in mind that a good time to cast it will be after he dashes away, auto attacks you, then kites back.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Lulu",
    difficulty: "Medium",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Lulu has good poke but is extremely squishy. If you are able to get on top of her even early levels you can crush her in trades. Make sure when you spin onto Lulu that you damage lulu with your spin and place your character in between Lulu and her escape path (usually her turret) that way she has to walk around you to get away, or kite in a different direction that doesn't benefit her. Your runes/build will sustain you if you take a bad trade and you will outscale Lulu in the 1v1. When using your w keep in mind she will turn to face you when she auto attacks, when she q's, and when she w's. Usually Lulu will polymorph you when you spin on her then q you after the polymorph is over. So usually you want to use your w slow after her q. In the mid-late game you can just run lulu down, she wont deal enough damage to burst you and you have so much mobility to stick onto her even with her kite.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Lux",
    difficulty: "Easy",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Lux has really good disengage with her q and waveclear but if you spin towards her and then immediately juke to the side, sometimes you can dodge her q which will allow you to get a solid trade on her. If she uses her E on minions and not on you that is also a good time to look to spin on her and get a trade even if she still has q up your spin + auto will do more than her q + auto. You have sustain in your kit she doesnt. If you can pressure her (you have good hp and fury) and you are looking to trade stay forward and to the side and prevent her from clearing easy with abilities and if she goes for minions you can force the trade. In the mid-late game if you are splitting against her, she has really good disengage and waveclear however she does not have the mobility to follow you if you shove her in then rotate to flank her team. Use your superior mobility to outmaneuver her.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Malphite",
    difficulty: "Medium",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Fight vs malphite early, Tryndamere wins early game against this matchup, if you fall behind too far in hp then you can sit back and heal a bit with Q but look to force trades.  A big part of malphite whether he goes the grasp full tank build or a ap bruiser build is that they need mana to poke you down and to farm. If you are able to outsustain a malphite's mana pool you can make them miss a lot of farm. Also, if you keep them pushed in they will use mana to farm as well. When you have malphite pushed under turret it is essential when you are in a position where you can pressure him that you use the auto + spin out trade under turret for harass as well as getting autos on his turret (past 5 minutes since turrets have 75% dmg reduction before 5 minutes in the game.) Once malphite gets his first back for an item, see what he gets. You have to look for kills and snowball this matchup, so force long extended trades. If he gets mana like a glacial shroud you have to be more patient, but if he buys something like a bamis cinder or chain vest then try to do more to burn down his mana pool. Once he has used his mana to try to chunk you down (and you keep sustaining back up) then you can look for bigger trades and maybe even a dive, if you can't dive but he has no mana you can demolish his turret on repeat. In the mid-late game against malphite a lot of times you won't have the damage to kill him if hes building full armor like most malphite players do or unless you are extremely far ahead of him, so what you need to do is shove in the lane and force him to collect the farm on the split, then you out rotate him and flank his team (if there is an opportunity to) before he can match your rotation. Tryndamere has really good mobility which you want to make sure you take advantage of.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Malzahar",
    difficulty: "Easy",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Malzahar has good poke and is ranged so he can get some good auto attack damage on you early. After level 3 he will have his full combo to summon a bunch of voidlings on you if you ever spin in. A couple of tips to take advantage of malzahar: Look for trades if he summons his voidlings and puts his space aids on the wave, he cant get his voidlings to attack you if they are already focusing the wave. Something that may stop you from going all in and killing malzahar is his passive shield. Your w when you hit the slow can actually get rid of the shield though and his shield has a long cooldown (30 second cooldown before level 6) Once his shield is down, wait for your w to come back up then you can look to pressure him. Also if he summons his voidlings and you havent spun yet your spin does one shot them so angle to make sure you kill them when you are looking to trade. Malzahar is an immobile champion so if you can get the wave on your side of the lane you can use the extra room to run him down as well. Post level 6 you have to be careful about jungle pressure because malzahar has one of the best setups for a jungler to gank for him. Buying QSS later in the game can get rid of the suppression on his ultimate. In the mid-late game malzahar will have a really tough time dealing with you 1v1 but if for some reason you dont think you can dive him, you can always shove in and outrotate him for a flank on his team (if there is an opportunity)",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Maokai",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "The biggest thing about maokai matchup is sticking onto him with his ways of disengaging with his Q. Maokai can actually cancel tryndamere's spin with his Q knockup if he times it correctly, so you need to always look to start trades with an auto attack or wait until he q's minions to look to spin on him. Make sure that if you are doing an extended trade that you move your character in between auto attacks to stay between maokai and his escape path (usually his turret.) Maokai wants to take short trades with you, but Tryndamere wants the long trades. So make sure when you pressure him that you are manipulating your wave so that it is in a position where you have plenty of room to run him down. When you dive a Maokai after getting him low enough, make sure that you save your spin to stick onto him rather then just for damage. Always start a dive off with an auto attack if its possible that way you can save your spin to better stick onto your opponent. In the mid-late game Maokai gets really tanky, but on the splitpush if he is overextended past his turret you can still run him down. Maokai usually won't have enough damage to threaten a 1v1 solo kill against tryndamere. If you cannot dive maokai first look to take his turret in front of his face, then use your mobility to outrotate him and look for spots to flank his team after pushing him in if you can't take turret.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Master Yi",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Be careful of master yi in the early levels! He actually has a lot of sustained damage. Watch his double strike passive on his bar and can look to trade when its not stacked. Tryndamere's base stats however scale really well (along with the AD he gets from his Q) so be patient for a few levels before looking for trades and post 6 make sure he has to commit hard into you to burn your ultimate or else he can burn your ultimate and kite pretty well. Master Yi's ultimate makes it so he is immune to slows so don't cast your W on him while he is ulting. In the mid-late game Tryndamere will usually win the 1v1 as long as he is even with Master yi. If Master Yi has rageblade however, make sure that you arent fighting him while his rageblade is fully stacked. Fight him in between waves where he cannot stack his rageblade.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Milio",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Millio does hardly any damage and will struggle to waveclear so you can just shove him in and hit his turret and he wont be able to farm well. You can setup an allin on him as well by letting it shove just be careful of his q since it will knock you back (and interrupt your spin) if it hits you. His ult can cleanse your w slow as well for himself and allies. Just hit his turret in front of his face if hes playing extra safe.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Miss Fortune",
    difficulty: "Easy",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Miss fortune is immobile and squishy but she has strong poke. Just make sure you don't take too much damage before level 4 and you can look for an allin. Avoid damage by using the brush to hide your character while waiting for minions to get low enough to farm. MF's double up can actually crit if the minion it bounces off of dies, so be careful about hanging behind low hp minions. Post 6 you can pretty much all in MF whenever you want. In the mid-late game split push MF cannot hold you 1v1.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Mordekaiser",
    difficulty: "Medium",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Mordekaiser has really good damage early, but our all in is just slightly better if we are able to get full fury without taking poke, its usually better to take a 2-3 auto trade and back off if you dont get good crits(if he takes ignite and you don't be a bit careful on the first allin trade you take where if you dont get enough crits u back out). Pay attention to mordekaiser's cooldowns! If he uses his Q or E on the wave and doesnt hit you thats a great time for a trade where you spin in. If its later in the game and mordekaiser doesnt have his shield stacked (the white bar isn't filled) thats a great time to look for an allin. Tryndamere's ult cooldown is also lower then mordekaiser's ult cooldown so you can punish that, if you and him both ult at similar times look to fight him with your ult when he doesn't have it. When you look to trade with him try to dodge his abilities while fighting and that will improve your odds of winning an allin significantly (every time you auto move your character while your auto attack is on cooldown to help dodge) . When mordekaiser ultis you he gets 10% of all of your stats and also all minions are not a factor. You beat mordekaiser on the split in the mid-late game if you are even/ahead but if he builds randuins be careful about forcing the fight. When Mordekaiser ults someone else, his location will be revealed by a floating red dot so if you are looking to chase him down, make sure you follow the dot. ",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Morgana",
    difficulty: "Easy",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "It is hard to look for trades on a Morgana because she will always save her bind for when you spin on her. It is in your best interest to wait until you have a bit more damage with your tiamat before looking to force trades against her. If she does waste her bind though and you have spin available you can look for big trades. Morgana has really good crowd control with her bind and decent waveclear, but she also can't punish us for farming very much with our sustain so this is basically a free lane to farm up in. In the mid-late game split push it can be hard to dive Morgana because of her crowd control + zhonyas, but we can use our mobility to outrotate morgana to a fight after shoving her in. Morgana cannot fight us outside of turret range once we have about 3-4 items.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Naafiri",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Naafiri has to play super passive early on in this lane, just look to dodge her Q's (she gets a 2nd one that she must use within 3 seconds of the first one and if she hits both she gets a heal and bonus dmg on you) if Naafiri doesn't take Ghost + Flash you can use Ghost + Flash for allins if she is too far up the lane. If she uses W on you, your ally can body block it and vice versa. Kill her dogs whenever possible as they end up being a good amount of damage, if naafiri takes first strike look to take out her first strike every time its off cooldown. Naafiri can kite you under turret with her E and the big movespeed she gets from her ult but if you have ghost and hit W slow you should be able to stick. You win this matchup the entire game and she is more of a roaming champ.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Nami",
    difficulty: "INTeresting",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Nami is a terrible laner. She has no waveclear, not enough poke, cant farm well. Don't get cheesed by anything early and you will win all game. Make sure to look to dodge her bubble after you spin on top of her.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Nasus",
    difficulty: "Hard",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Nasus is VERY weak in the beginning of the game. Your ability to set up a snowball against him is what will determine your ability to split push against him in the mid-late game. Here is my general strategy against Nasus, Look to pressure hard level 1 (can even just deny the nasus first 3 minions of xp by standing in front of the wave and if he tries to fight within his wave you beat him) and 2 with an extended trade, always start trades off with an auto attack when he goes up to farm a minion. Get level 2 advantage first. Get the second wave completely into turret before the third wave comes up so that the enemy minion wave can 'bounce' towards you (aka push towards you.) Then only last hit at the last possible second while it pushes towards you, this makes it so you hold a freeze against him. Don't let the minion wave get too big so make sure to kill a few minions but still leave it shoving towards you. Try to hit level 4 around the same time as nasus, once you are level 4 as long as you didnt take too much damage holding the position of the wave close to your turret you can look for an allin yourself OR you can set up easy ganks for your jungler. Be looking to always set up ganks/dives for your jungler to easily take. When Nasus hits level 6, be careful about spinning in and forcing an allin as his ult is VERY powerful, look for trades before then starting with an auto and be ready to spin out when he withers/ults UNLESS you got VERY good trades into him before then. In the mid-late game if you effectively shut down Nasus you can maintain pressure on him and/or rotate to flank his team while he tries to get back in the game. If you are behind in the mid-late game against him you need to look to use your superior mobility to make moves around him, but don't directly confront him 1v1 or he will drop D cane on you.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Nautilus",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Nautilus gains extra damage on hit while his W shield is active but his damage is very minimal once his W shield is down. When you take trades vs nautilus make sure that they are extended trades rather then short trades. Even from early levels Nautilus will struggle against you, but he has a large amount of crowd control in his kit to set up ganks for his jungler so be paying attention to where the enemy jungler can be on the map. In the mid-late game nautilus will still not have damage but he will be very tanky. Look to catch him outside of his turret range for allins or if he is just sitting under turret farming, look to hit the turret while tanking his damage and ignoring him, or you can look to flank his team while he is farming under his turret.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Neeko",
    difficulty: "Hard",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "She has really good poke damage, can kite really well, has invisibility, has a really long snare and because of her elusiveness its hard to even ask for jungle ganks unless your jungle has really good crowd control. This lane is about SURVIVAL. It will be hard for you to deal with Neeko until you have about 3-4 items which can be hard to get to because of how well she can shut you down. Most of the time I will swap with my mid laner rather then face this matchup. (midlaners usually are ranged and can deal with something like Neeko a little bit better) If you have 60 CS at 10 min against Neeko that will be about average. Not everything is horrible though, there are some ways we can get a kill on her in lane. If she uses her snare and misses and we have a good amount of hp and fury that will be a good time to look for an allin. If you hit your w slow before spinning on Neeko and Neeko uses clone, the chicken effect will be on the actual Neeko. Usually her clone will move at a faster move speed then the actual champion which is one small way to tell, but when you are caught up in a fight it can be hard to tell at first. In the mid-late game splitpush what I have done is buy a sweeper for when she uses her W that way I can try to track the real one from the beginning during the all in with my ghost. You must engage on her with full fury and if you can try to get her to face check you in a brush or around a corner or something if you want to try and guarantee a solo kill. If you cannot duel Neeko yet, THEN AVOID THIS MATCHUP AT ALL COSTS!",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Nidalee",
    difficulty: "Medium",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Nidalee is a ranged champion that can poke you down and use the brush for extra movespeed to kite you. Look to farm/build fury lvl 1 and 2 only trade if you build up enough fury without being poked down. Can spin + auto with FLEET AVAILABLE then kite back lvl 1. Can look for heavy trades/allins early with your spin at lvl 4 onwards, when she kites back just get back to the wave and sustain up with q and absorb life/second wind + dorans shield. Nidallee gains more movespeed running thru brush and if she hits her spear on you so keep that in mind when looking to trade with her. Remember that if you keep the wave close to your turret, you will have a lot more room to run her down if you find a good opportunity. Once you get ravenous hydra you will be able to shove her in over and over and demolish turret. If Nidalee builds AP, then she will be fairly squishy but will have high burst so make sure not to miss your ultimate. AD nidalee has more sustained damage and is usually decently tanky as well, but mostly useless because she doesnt deal enough damage to you to push you out of lane and can still be killed. You outscale nidalee in the 1v1 into the mid-late game, as long as you hit your w slow you can dive her under turret as well 100-0. ",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Nilah",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Nilah is very weak in the 1v1 early game with short range and her one advantage is having a duo partner to share bonus experience with which in top lane doesn't do anything. You beat her really hard as soon as you hit level 2 powerspike so look to stack up fury early and look for big trades. Nilah's W gives her evasion which dodges your auto attacks for a short time so make sure when that is on that you focus on staying on top of her rather then sitting still and auto attacking. Nilah can dash with 2 charges on it but her cooldown on the charges is extremely high so you can abuse that cooldown. She can dash towards enemies or allies with this ability. Her ultimate sucks you in and deals damage but not very much and is more for teamfights rather than 1v1. You can beat Nilah all game long in duels in the 1v1 on sidelane so look to abuse that. ",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Nocturne",
    difficulty: "Medium",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Early game nocturne has strong waveclear and strong damage. He gains an AD boost when he throws his Q out and his fear makes extended trades really good for him. In lane, mostly look to farm, if he wastes his Q and doesnt hit it on you, you can look for short trades while it is down. If nocturne commits to you after his fear goes off and doesnt disengage, this can be a good time to look for an all in on him. You typically will beat nocturne after first back especially if you rush Tiamat and boots and you are atleast level 6. If he does look to disengage and you wanna run him down remember that he has a spellshield for your W so try not to w into his spellshield. In the mid-late game you will beat nocturne in 1v1's but with his semi-global ultimate he can look to catch you out after you duel someone else or when you have low fury and try to win that way. Nocturne will look to shove and roam often so make sure to communicate with your team if you anticipate him leaving lane to go roam and punish him by shoving his turret down if he does leave.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Nunu & Willump",
    difficulty: "INTeresting",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "If they play nunu top they are trolling.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Olaf",
    difficulty: "Medium",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "The biggest part about the Olaf matchup is to get him to throw axes at you while you are sitting in your minion wave so that he shoves into you. Having the wave pushing towards Olaf is typically bad. Olaf has really good all in with the axes and he can potentially just run you down the lane if he hits more then 1 in a row. At level 4 you do have opportunities to trade/allin the olaf assuming you kept your health pool pretty high. A big opportunity to all in Olaf is if he throws an axe pretty far away from himself, if you spin on him and look to all in, he cant run towards his axe to reset his q cooldown which gives you a great advantage. You can also take advantage of his W cooldown which gives him a big shield so look for trades if he wastes his w. Post 6 you start to outscale Olaf, your ultimate is much better then his for the 1v1. In the mid-late game you will be able to beat Olaf 1v1 outside of his turret, if you are ahead you can even turret dive him 100-0. If you feel you cannot dive him, try to push in and outrotate him with the insane mobility Tryndamere has and look for flank opportunities to start a fight with a man advantage. ",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Orianna",
    difficulty: "Medium",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Orianna has really good ranged harass and zone with her ball, however; she is immobile. Early on we can trade into her after building a little bit of fury with a spin and 1 or 2 auto attacks and back off. We should look to secure level 2 advantage by pushing faster then her. Once we have pushed in, just let it push back and look to keep the wave on your side of the lane to give you more room for an allin on her. In the mid-late game Orianna has some serious burst and kiting ability. If we miss our w slow after spinning in it could be fatal. Tips with w slow against orianna is to try to time the slow in between her auto attacks where she faces away from us to kite. We should be able to 1v1 orianna outside of her turret range, but under turret she has enough crowd control to kite us to our death (and dont forget to check to see if she has zhonya/stopwatch!) Orianna is immobile so if we feel we cannot dive her after shoving in then we can look to rotate and look for opportunities to flank with a man advantage. If Orianna takes phase rush, especially in early game punish this cooldown if she ever trades hard into us and procs phase rush you can engage when her phase rush falls off.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Ornn",
    difficulty: "Medium",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Ornn has strong bursty short trades so look to take extended trades in this matchup. Avoid walking into his knockup where he can dash into a wall (even the one he makes) and knockup, you can juke the knockup by walking away from the wall hes dashing towards as hes charging into it. Ornn Can build items in lane which is annoying if you are stuck in lane for a long time so make sure you setup a push where you can take a back if you end up with a lot of gold. If you do see ornn building an item, you can stop him from building the item by damaging him. Ornn has a small cooldown on building items after taking damage. If you do take a trade with ornn however, try to make sure that you arent hit by the end of his w (his breath) or you will get the brittle debuff on you which he can auto you for huge damage. If you can, avoid letting Ornn hit you while you have the brittle debuff to avoid taking extra damage, obviously this doesn't matter if you are all-inning him but just in a normal trade situation. Once you have ravenous hydra and u can just shove the ornn into turret and demolish his turret, then proxy/reset then do it again (pay attention to enemy jg position before proxying) In the mid-late game if you stayed even after laning phase you can 1v1 ornn outside of his turret range, if he hugs turret then shove him in and look for opportunites to rotate and flank his team while he is stuck under turret farming.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Pantheon",
    difficulty: "Medium",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Pantheon is an early game bully who can follow you on roams and can effectively stop you from all in diving because of his E. Early laning will mostly be dependent on how the pantheon is using his abilities. If he is hitting his q's on you early then don't look to trade and just farm. However if you dodge enough Q's and are able to build up fury you can trade a bit. Can be hard to all in Pantheon though because of his E blocking damage for 2.5 seconds, but he only blocks damage from one angle so if you are able to get behind his shield you can damage him (and also avoid his damage from his E). Keep health pool high because pantheon gets an execute on his Q if you fall below 20% hp.  You can lose this matchup if you over commit into one of his combos, his all in is actually decent even early on. When Pantheon is 6 call it out to your team and pay attention for him roaming and call it out for your team. Later on in the game he can be difficult to dive so make sure that you try to bait out his E before committing to a dive or he can turn it against you.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Poppy",
    difficulty: "Hard",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: " Poppy is one of the hardest counters in the game to Tryndamere all throughout the game. She is a tough lane bully to play against and in the mid-late game she can deny you from getting onto carries with her W which stops dashes (including your spin.) Her E can knock you back and if you get hit into a wall it deals double damage and stuns you. She is close to impossible to dive unless you got her low before hand. She gains a large shield with her passive auto attack on a 16 second cooldown (you can stop her from getting the shield if you step on the buckler that appears on the ground.) Very early levels though, usually just level 1-2 is your one chance to look for an advantage against her solo. Once you get ravenous hydra you can also look to poke her out of lane and out sustain her health or mana pool and demolish turret. Look to use and abuse heavy trades after building fury on the wave to get good trades into her in early game. Poppy is tanky but does not have sustain. Her q deals 2 ticks of damage so make sure that if she hits her q on you that you side step the 2nd instance of damage. When trading with Poppy or if she is shoving you in, try to avoid being close to walls (when farming under turret make sure to not give her too big of an opening for her to slam you into your own turret.) In the mid-late game against Poppy assuming that you are even in gold with her, you can win allins when she is shoved deep into your side of the lane (after you are 4 items or more), but it is pretty much impossible to dive a poppy. So if you do get the ability to push a poppy in try to rotate and make a play while Poppy is stuck under turret farming the wave you shoved in. If Poppy is a part of teamfights, make sure that you look to focus carries that are not close to Poppy or wait for Poppy to blow her cooldowns before engaging.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Pyke",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Pyke does not have good waveclear and cannot all in Tryndamere. Tryndamere with the sustain from resolve can stay high hp so that pyke cant go in for a burst combo. With Tryndamere's superior waveclear he can shove pyke in repedeately. If you can dodge pykes stun when he disengages and you still have spin you can look for an allin on pyke if you start trades with an auto attack if he is on your side of the lane. Most of the time this will be a farm lane, so just get your tiamat shove in and look to deep ward, get jungle camps, or roam (if there is an opportunity.) In the mid-late game against Pyke when you get more points in your w slow you will find more and more spots to all in the pyke. Just look to sidestep his stun after you spin on him and then w slow to catch up.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Qiyana",
    difficulty: "Medium",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Qiyana has very strong trades and has the ability to go invisible for 3.5 seconds on a 7 second cooldown. Your windows for trading on qiyana is levels 1 and 2 (assuming you get level 2 advantage.) Once qiyana has access to her w and q is when she gets the ability to go invisible. Qiyana can be very elusive with her abilities in general and has strong damage however fighting her in the center of lane is your best bet, take small trades when she doesnt have the invisibility (she must w towards a brush to get the invisibility, the w is on a 7 second cooldown.) Mid-late game split push Tryndamere still has mobility advantage but he struggles dueling vs qiyana due to her high damage and invisibility. Your best bet is to shove in and out rotate qiyana, and force things to happen away from her. If she follows you on the rotation, then go back to splitting the side lane, try to always fight away from her. If you get ahead enough in levels you can fight her side and heal up to full each wave with ravenous hydra, but don't get baited into trying to force in on her when she can go invisible basically permanently",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Quinn",
    difficulty: "Medium",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Quinn has strong poke and strong disengage. You do not want to trade into quinn early whatsoever (you can test spinning into quinn early to see if she has bad reaction time, but usually just farm). Only look to farm and scale up. If quinn is using her spells too aggressively however and wastes her E cooldown (the one where she does a backflip off of something) and you have a good amount of hp and your spin up, that would be the one time you would want to trade into quinn early. To beat Quinn consistently, farm up for a bit of damage + tier 2 boots, use ghost to force Quinn's e then follow up on her with your spin, when she flashes you follow up with flash (if she takes ghost + flash you gotta try and get one of her summs burnt ahead of time so you have summoner spell advantage). One tip against Quinn that is useful is regarding her E cooldown. Quinn and Tryndamere's E cooldowns are both 12 seconds level 1, however tryndamere can lower the cooldown of his spin with crits on champions or minions. So if you spin on quinn, crit her, then she e's away from example, that means you have atleast a 2 second window for another really good trade into her when your spin comes back up, and the window can get larger if you go back after trading and crit some minions to lower the cooldown of your spin even more. In the mid-late game you will win the 1v1 against quinn because of your ghost + flash and ability to stick onto her with your spin cooldown. If you do run into that kind of quinn who built solely to kite you out in a 1v1, just look to shove then group and she will be useless.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Rakan",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Rakan in a solo lane will usually run ap which gives them very strong short trades. Tryndamere can force an extended trade against rakan by starting the trade with an auto attack, using w slow to stick on top of him, then spinning after he w's away. The best way to set up an allin on Rakan is by manipulating the wave so its closer to your turret, which will give you more room to run him down. Post 6 Rakan can set up ganks for his jungler and can also have a good amount of burst when he gets protobelt. Make sure you keep your health high so you dont get bursted down. After 1-2 items Tryndamere will always win the 1v1 in side lanes so splitting against him is a very effective strategy. When diving Rakan, look to burn his cooldowns, sometimes you can force rakan to ulti, then you can back off the dive before you are forced to ulti, then you can sustain back up and redive with ultimate advantage.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Rammus",
    difficulty: "Medium",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "The best way to beat a rammus is by committing to an allin when his W is down. Force his w cooldown by walking up and auto attacking him, then walk/spin away. Then when his w is on cooldown you can reengage on him and abuse him with your sustained damage. You want to get early advantages on Rammus because in the mid game it will be extremely hard to find opportunites to kill him. When you get to your end game build, you will be able to fight him but there will be a period of about 10 minutes of gametime atleast where he will have an advantage on you if you dont snowball early. So to get a lead in lane, look to be aggressive, punish w cooldowns, manipulate the wave so its on your side of the lane so you have more room to run him down with (or set up a jungle gank.)",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Rek'Sai",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "SHE has good short trades against tryndamere but will have a hard time disengaging from Tryndamere who can force an extended fight. To start an effective extended trade against Rek'sai (girl btw) you need to start the trade off with an auto attack when SHE goes up to farm a minion, save your spin for when SHE tries to disengage with HER tunnel and knockup and you can w to stick onto HER as well. SHE will have true damage if SHE builds up HER bar all the way with HER E. IMPORTANT NOTE: You cannot flash Rek'sai's ultimate damage. Also SHE can use HER ultimate on you whenever you take an auto or Q from HER. HER burrowed Q also gives HER vision of you for a duration. Rek'sai has narrow vision when SHE is burrowed, but SHE can see tremors of things that move. In the mid-late game Tryndamere will have no problem winning the 1v1 against Rek'sai.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Rell",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Rell does not have enough damage ever to beat you 1v1, she is tanky and annoying but you can either set the wave up to be pushing towards you early and fight her on your side of the lane in an allin or you can just shove her in constantly and ignore her and get plates in front of her face. She can setup crowd control on you with anyone that comes to lane to gank you but besides that she is totally useless. Don't get baited into diving her if she has too high of HP because she is very tanky and has a good amount of crowd control that can prevent you from killing her.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Renata Glasc",
    difficulty: "Easy",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Renata is a support champion in terms of stats and damage scaling. She can still be annoying because of her ability that can send you in a different direction but you can beat her 1v1 very easily at all stages of the game. Main thing to watch out for is her W that buffs up her movespeed that can also act like a mini revive for a few seconds. Make sure she can't get a takedown during this time or it becomes a full revive. She has ok poke early but won't be able to fully poke you out of lane with your second wind + dorans shield sustain. Can dive easily with ghost up at level 6 every time its up. In mid-late game if she is the one coming to stop you make sure you try to split vs her and dive her when possible.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Renekton",
    difficulty: "Hard",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Renekton is one of the most annoying early game bullies to face as a melee top laner. Try to burn his boneplating with a single auto before committing to a big trade and spinning in. Tryndamere has one opportunity to take control of the lane and that is with his level 2 power spike. Look to build up fury level one and take an extended trade with renekton. Renekton doesn't have as much sustained damage as you in general early on, but look for only 2-3 auto grasp trades until the renekton gets low enough to all in since he will have either conqueror or PTA Once you get level two, you can look to spin in on renekton as well and force a trade. Look to get the 2nd wave into turret before the third wave comes up then allow the wave to shove back towards you, depending on your trades early on will determine if you can play aggressive.  Look to always make sure that if you take a big trade into renekton that you go for it after taking his boneplating away. Tryndamere can start fighting more actively with either ravenous hydra fully completed. In the mid-late game you can duel renekton 1v1 outside his turret range past 3 items if you didnt fall massively behind from early game. If you want to dive renekton early game you have to prepare the dive by chunking out his HP bar. It can be a better option sometimes to look to push in and rotate to look for opportunities for a flank rather then try to deal with renekton directly.  ",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Rengar",
    difficulty: "Medium",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Stay away from the brush early on! You need to keep out of rengar's leap range in the early game. Rengar top will naturally push towards you because he will try to stack up his passive to put pressure on you. Don't trade with him levels 1-3 he is just straight up stronger! Once you are level 4 as long as you have kept your health pool high you can look for trades against rengar, however he wins short trades so preferably you want to look for an allin on him when he jumps on you. Save your W against rengar until he has used his empowered ability if you are looking to allin because his empowered W can remove crowd control (including your slow.) You outscale Rengar in the 1v1 in the splitpush in the mid-late game, just be careful when he ults for you that you press R on time. One tip for pressing R on time against Rengar is positioning your character when he is ulting towards you in a spot where you can see where he is jumping from. If you are standing next to a brush, or a wall that he can hop over you wont see him until he is right on top of you, but if you are in an open area you will have about a .5 second window to press R if his items can one shot you.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Riven",
    difficulty: "Medium",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Tryndamere is stronger then riven in level 1 and level 2 allins (as long as riven doesnt have ignite), BUT only when you play it well. You want to build up fury before engaging a trade versus Riven and you want to avoid taking small trade damage while building up fury, once you have built over 25% fury is usually when you can be aggressive and look for a trade. Riven players that know the matchup will typically play back after you have built up fury so what you want to do is get level 2 advantage by pushing in the wave and then pushing the second wave completely into turret so that the wave 'bounces' back to you (pushes back towards you.) If you couldn't find a good trade into riven on the first two waves just play back and safe until the wave crashes back into your turret. You can walk up and auto minions as its pushing back to you, but if she looks to trade then just walk up and spin away from the minion (while killing it to get the farm.) In this matchup you want to make sure you are always trading with minion advantage and that you are in a good position in lane to force an extended trade. Riven will win all short trades (played correctly) so Tryndamere must look for extended trades. On Riven's first back she will most likely pick up a CDR item which will allow her to extend her Q. What extending her q means, is that if she uses her Q, and waits till the very last second to use her 2nd and third q's then she can go instantly right into another set of q's. This is very powerful against tryndamere and will provide really good burst and/or allow her to disengage after trading. Spots where Tryndamere can punish Riven is purely how the Riven player uses her cooldowns. If she does not extend her q enough then there will be a longer cooldown until she can use her set of 3 dashes again. If you notice riven use her w or e without it being a trade on you, you can look for a trade. Every trade you must be willing to all in with ghost if you see an opportunity to run her down. In the mid-late game duels against Riven are all about if you can stick onto her and force the allin, and the way Riven wants to win is by bursting you to force your ultimate then kite away. Tryndamere's Ghost + CDR will help him all in a riven but must pick a good spot preferably with an enemy minion wave so you can get big healing from ravenous hydra while trading. If you are winning against Riven look to pressure her hard, and potentially look for dives under her turret. If you are losing, look to push out waves and rotate to other waves, jungle camps, or flank the enemy team while riven is covering the wave.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Rumble",
    difficulty: "Medium",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Rumble has very strong pressure on Tryndamere early game, but will struggle heavily in duels later in the game. You want to farm in this matchup early. Level 1 Tryndamere can look for opportunities to trade with rumble but once he is able to stack the overheat at lvl 3 it becomes much harder to fight. What you want to be looking for is his heat bar. When his heat bar is in the yellow he is gaining 50% bonus effectiveness on his abilities (more dmg from his flame, more shield, more slow and damage on harpoon.) If Rumble overheats he gains a lot of auto attack damage and attack speed but loses his ability to cast his other abilities (can punish post 6) Post level 6 Tryndamere gets his ulti which will allow him more spots to beat up on Rumble, but a good rumble player will know how to keep tryndamere too low to look for an allin. If the enemy team has a lot of slows, swifty boots are a great option for sticking onto rumble in the 1v1 because of his big slows on his harpoons and ultimate. If you feel like you are sticking onto the rumble pretty well though you can just run berserker greaves. If enemy team is heavy magic damage and crowd control then merc treads is also a good option. Tryndamere outscales rumble in the mid-late game heavily in the 1v1, rumble's only hope is to hug turret and try to kite out a dive or to group with his team and force a play before Tryndamere can pressure. Make sure you watch out to see if he builds zhonya as that can prevent you from straight up diving him.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Ryze",
    difficulty: "Hard",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: " Ryze has really good poke early but since his W is no longer a root (unless he empowers it with his E first) tryndamere can get really strong trades against him. In the early game, ryze is very squishy and tryndamere can take advantage of that for some strong trades especially level 1 and 2. Try to punish ryze before he can go back and grab tear. Do not use your w slow on ryze until his phase rush is on cooldown because it would just be a wasted animation. Ryze has really good waveclear and damage once he completes his tear and can do very well in trades vs you. Once you get tiamat and tier two boots (can go zerkers or merc treads) you can typically have good trades into ryze. In the mid-late game splitting against Ryze can be difficult because his burst is very high as well as having good kiting between his movespeed from his passive as well as phase rush. You need to try and bait out his phase rush without burning ultimate, and when his phase rush is down you can look for a solid trade. Pick your spots against Ryze well, make sure you are fighting him with your fury stacked, if you try to greed an allin without having full fury he can kite you very easily. Most of the time you farm up this matchup and can start to look to win trades once you get full ravenous hydra.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Samira",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Samira can't really do a lot about you just going in on her and trading hard into her. She has a single dash that she can use on enemies and she gets ramping move speed with her passive but is very minimal. In the 1v1 you should have no issue beating her at any stage in the game just dont let her get too much poke on you before you get enough fury level one. Post level 6 if she stacks up enough on you she can cast her ultimate on a 3 second cooldown that does decent damage but most of the time u can just ignore it press r and kill her. When diving under turret make sure you start the dive with an auto attack to save your spin for when she dashes through you, or have ghost up. In the mid-late game look to split and dive her if she is the one that comes to stop you.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Sejuani",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Sejuani can play the lane fairly safe, but also cannot stop you from farming well. If you want to trade with sejuani you must first break her passive by dealing damage to her because it grants bonus armor and slow immunity. Sejuani doesnt have the best kit for farming under turret, so if you want to rush build tiamat in this matchup that could be a good option to shove her in constantly. If you run tiamat, make sure you push in and look to roam, take jungle camps, or get deep vision. Don't just sit in lane after shoving in. In the mid-late game sejuani can be difficult to dive but you can shove her in constantly and either get turret damage or look for opportunities to outrotate sejuani for a flank on the enemy team.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Senna",
    difficulty: "Easy",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Biggest thing about this matchup is dodging her W, if that is down and your spin is up then you can kill her pretty easily. Early on in the game will be a struggle but post 6 with Ghost + Flash you can run her down. Most senna top lanes will take grasp, tryndamere can outsustain senna's damage pretty easily and if you hold the wave on your side its an easy gank. In the mid-late game Senna cannot hold tryndamere 1v1 so if you are feeling uncomfortable with the matchup, you can play perfectly safe and play to scale if they have no one else on their team to fight you 1v1.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Seraphine",
    difficulty: "Easy",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Seraphine has high sustain and plays from very far range, but does not have a lot of damage. She has decent waveclear and when she gets lost chapter can be hard to push out of lane. Look to beat her early with good wave manipulation where you setup a good freeze on your side of the lane and look for allins. Her e when doublecast can root you but with ghost + flash you can all in even if she hits that on you. Post level 6 shove and look to dive if you are able to chunk out her hp a bit, even at like 70% hp u can dive her with good fury and summs.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Sett",
    difficulty: "Hard",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "If Sett takes ignite start dorans shield instead. Look to only take short trades with sett especially early on (just grasp proc auto + spin out, if you do this quickly sett will have a hard time reacting and pulling you out of your spin). Allow sett to shove you in early, even bait him into attacking you so your wave attacks him instead of the enemy minions to force the wave to shove in faster so you can farm under turret. If you commit to a full on all in make sure you are ready to spin/flash/walkthru his w or it will do a lot of damage to you, in some cases you especially with your ghost on you can reposition after each auto so sett cant ult you to get to his turret by staying in front of him instead of going thru and behind him (or even just reangle his ult to send you directly into wall or something). Sett will beat you early levels but you will outscale him in the 1v1. The center line of his W does true damage so do your best to completely walk out of his w or atleast dodge to the side to only take physical damage. Sett can guarantee that he hits the true damage if he stuns you into his w. Biggest thing about this matchup is that you dont give him a way to take a heavy trade with you early, Sett is really susceptible to jungle ganks so if you keep your health pool high you can SETT him up to be ganked easily.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Shaco",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Stay within your minion wave if you are playing against AP shaco and just shove him in. AP shaco has a very hard time farming under turret, you don't have to kill shaco to win this matchup hard, you just need to put constant pressure on his turret by pushing constantly. Shaco might try to bait you into traps but if you just stay to your gameplan and win with a massive farm advantage he cant stop you from scaling into a monster. Sweeper can reveal shacos location (as well as his boxes) while hes stealthed if you want to chase him down. In the mid-late game you can mostly ignore shacos damage hit turret, and then back up and sustain back up. Rinse and Repeat. Or you can look to take short trades (auto attack + spin away dealing the damage with your spin) until you get him low enough to burst him or push him off turret.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Shen",
    difficulty: "Medium",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Shen early game can take very good short trades with you. Be very careful about his sword positioning, if he pulls it through you he can get a lot of extra bonus damage and attack speed against you for a solid trade. You can start looking for allin trades with shen around level 4 (unless he wastes his q level 1 and 2 for farm instead of using it to trade with you.) When fighting against Shen what he will do is use his q, block auto attacks with his W and then taunt through you back to his turret, so in this matchup when you are going for an allin DO NOT position between Shen and his escape path if you dont think 100% sure you are killing him. If you put yourself between Shen and his escape path he can taunt through you dealing extra damage and disengaging from you. This will save you extra hp on each trade. At level 6 is when Tryndamere can start to really dominate Shen. Shen gets an ultimate which is USELESS for a 1v1 and Tryndamere gets 5 seconds of being unkillable. One tip about Shen's W is that it blocks auto attacks but only on himself and other champions so if there are minions around shen when he W's and you have tiamat you can actually hit the minions or use your tiamat active and still damage him. If you are looking to dive Shen, try to bait him into taunting you under turret, this saves you from having to chase him down through his dash away from you, also puts him right on top of you and you start the dive with an auto attack which is what you want. Before you look to dive Shen, make sure you 'prepare' him by taking short trades with auto attack + spin out (while dealing the spin damage on the way out.) In the mid-late game splitpush you outscale Shen in the 1v1, but it can be hard to dive him effectively because of how tanky he gets. Make sure that every time you shove Shen in that you are doing 1 of these 3 things, make sure you are looking for trade damage on Shen, make sure you set up deep vision to protect you on the splitpush, and make sure you look to take enemy jungle camps when you can. You can get leads on Shen in the splitpush without killing him, but always look to pressure him first. If his team is closeby and you dont wanna risk getting caught out just place some wards or take some neutrals. If it is pure 1v1 though you should always look to pressure Shen and look to get him low enough so you can dive him.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Shyvana",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Shyvana top really has no way of escaping your all in if you hit your w slow to stick onto her. She can get really tanky but for the most part if you look to take extended trades you will win against her. One thing to note is that if she hits her E on you, you will take bonus damage from her auto attacks. So if you dodge her E or if she e's on a minion that can be a good time to trade with her. Her ultimate grants her bonus resistances and damage on abilities as well as the dragon's flight which deals a good amount of base damage. If shyvana builds AP then her E is going to HURT, so look to dodge her E and all in her. In the mid-late game splitpush, Shyvana cannot handle Tryndamere 1v1 just because Tryndamere sticks way too well to targets with the W slow and the cooldown on his spin.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Singed",
    difficulty: "Medium",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "There are two types of singed players, singed players who go for laning dominance with ignite + an aggressive keystone and others  who will go ghost + flash + phase rush to try and proxy. Against a singed player who is going for a lane dominance build, you don't have to play too aggressive (can still fight lvl 1 though), look for spots where you have high health and fury and he is on your side of the lane for a potential all in, or you can just sit back and farm and wait to outscale him in the mid game. Against a singed with phase rush look to be very aggressive with him especially level 1 and try to punish him before he can even use his keystone.  Something a singed might do is proxy your wave behind you. If your jungler is around or mid laner is willing to rotate you can look for a free kill on him, or you can go and proxy singed's wave and ALSO take his jungler's camps. If singed tries to proxy you level 1, make sure you walk with your wave all the way to lane and if the enemy singed is there run him down and burn his summs and look to kill him if you can. Here is a clip to counter proxy singed https://clips.twitch.tv/TenuousBlatantCattleRalpherZ-VO3tnlwfilILxzDc . If you are playing against a proxy singed then look to just farm absolutely everything (including enemy jungle camps) . One tip against singed if he looks to do the goo + flip combo, look to back off of singed before he flips.  There is a small delay when he is casting goo that you can back off the trade before he flips. Here is a clip of dodging the goo flip combo (you must space well!) https://clips.twitch.tv/FrozenGracefulPeafowlBCWarrior-BO2bgbk933FgkUTG  In the mid-late game splitpush Singed can kite pretty well and do a good amount of damage with Rylais, but once you get max level W he won't be able to kite you anymore and you just straight up win. You also win against him after about 3 items as long as you have full fury/hp when you fight him.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Sion",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Sion matchup is all about looking to force extended trades. Level one build up a little bit of fury and look for a big trade (dodge his q!) and typically you can get a good amount of damage on him, get level 2 power spike and look for an allin. If sion plays it safe get the first two waves into turret and let the wave 'bounce' back towards you (minion waves crash all the way into turret then it starts pushing back towards you.) One tip against sion players is that you have to watch out for bush cheese. The bush cheese a sion player will do is wait in the second brush top lane and full charge a Q from the brush to get the first 3 minions and deal a lot of damage to you. If you avoid being cheesed by both of those and are able to play the matchup straight up you should win the early laning phase. Whether you snowball against sion or not depends on how well you can extend a trade, and how well you can manipulate the minion wave to set up proper allins using the length of the lane to run him down (basically look to have the wave on your side of the lane.) Make sure every time you kill Sion that you run away immediately so that you dont die to his passive. A lot of this matchup as well is dodging his q so make sure while you are trading with him that you sidestep his knockup. Also after level 6, make sure that you are in between sion and his escape path so the he cant ult away from you during the all in. In the mid-late game splitpush if sion is too tanky, just shove him in and use your superior mobility to outrotate him and take extra waves, jungle camps or even look for a flank opportunity if you see one.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Sivir",
    difficulty: "Easy",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Sivir top has no way to escape your all in, she gains a bit of movespeed on each auto and her boomerang, but that usually isnt enough to prevent your all in. Tips when going all in vs sivir, either use ur w before u spin and hit the slow or when you spin in on sivir hold on to your w slow until after her spellshield is down (often times when you spin in the sivir will use spellshield in anticipation of your w slow.) You can always use your ghost to run her down as well. Post 6 sivir gets another speed bonus with her ultimate but that usually wont outrun your w slow + ghost. If you burn her ultimate without using yours, you can back up and then reengage on her with your spin when her ulti is on cooldown. In the mid-late game sivir cant hold you 1v1.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Skarner",
    difficulty: "Medium",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "What you wanna watch out for when dueling skarner top lane is his E. His E can flip you around and take you into his turret so make sure you arent running past him and stay in front each auto, what he will try to do is walk into you and e you backward into the wall by his turret and one shot you. Skarner can get pretty tanky and deal a good amount of damage however Tryndamere has more out of combat mobility as well better farm and waveclear. Tenacity is very good in this matchup because of his CC that is very easy to hit. Also if the skarner builds a lot of cdr be very careful trading with him close to his turret. Look to avoid his boulder toss when he has it available, you win trades where he doesnt insta wall smash you. ",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Sona",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Sona is the squishiest champion level 1. You can look to trade and fight her even without building up fury first, look to be very aggressive. You have extra sustain  second wind if you didnt find a successful trade against her. At any time post 6 if you have ghost and ultimate up with full fury and hp you can kill sona and even dive her 100-0. You also outscale her the whole game in the 1v1, she can never hold you.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Soraka",
    difficulty: "Easy",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Soraka has some ability to kite and poke you but you outscale her very easily. If she is playing really far back and safe just farm it out and you can look to set up dives on her post 6. Look to avoid the root on her silence and remember she can turn to face you when she silences, when she q's and when she autos. So usually a good time to w is after her q. In the mid-late game splitpush soraka cant hold you alone. ",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Swain",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Swain has really good poke, but you can get good trades on him every time he misses his E or wastes his W. Otherwise look to farm and scale up. When you trade with him make sure you look to dodge his E during the trade or you will lose the trade pretty hard. His E will get caught on the 3 ranged minions if you position yourself in between swain and your ranged minions. He can reactivate his ult to slow you so be careful with that if you are already getting heavily kited by him. In the mid-late game swain will have a hard time dealing with you 1v1 and you can abuse his cooldowns really well if he ever misses something. However he can be hard to dive at 100% HP just because of his ulti healing and zhonya, so if he is hugging turret hard use your mobility to take jungle camps or look for an opportunity to roam in between waves or just demolish the turret in front of his face then heal up",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Sylas",
    difficulty: "Medium",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Sylas has really good short trades but his sustained damage sucks. Tryndamere has pressure against Sylas level 1 and level 2 and can look for all ins early. Look for extended trades versus him. Post 6 Sylas can steal your ultimate making it harder to dive/allin him HOWEVER, what you can do is force sylas into taking your ultimate and wait out the cooldown of the ultimate (he cant resteal your ultimate for double your ultimate duration) and then all in him.  In the mid-late game you want to catch sylas out away from turret so you can beat him 1v1. It is extremely difficult to dive Sylas under his turret because of his ability to steal your ultimate, you would either have to burst him before he uses your ultimate or you would have to force him to use ultimate before you have to use yours to beat him. Really good items to start out with against Sylas especially if you are ahead is tiamat into executioners so you can proc the grievous wounds from the tiamat aoe range",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Syndra",
    difficulty: "Medium",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Syndra has amazing poke and disengage, however before she gets her back for lost chapter she is gated by her mana costs. Look to outsustain her mana pool to beat her. Also if she ever uses her E to poke you rather then disengage and you have high enough hp/fury you can look for a good trade. If Syndra is starting to run low on mana and you have a good amount of hp you can force her to run out of mana by spinning on her. Your ultimate counters her burst and she is very squishy so if you can stick onto her you will be able to win in a 1v1. Mid - late game split push against Syndra you should win pretty easily especially if you have summoners to flash her E stun or if you hit your W slow.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Tahm Kench",
    difficulty: "Medium",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Trade early with tahm kench especially level one before he gets his gray health shield. You can minimize damage you take from him if he gets a lead with an auto attack + spin out rather than committing to longer trades. Fight and punish tahm kench before he hits lvl 6 you win before then as long as you outplay his Q which gives him hp back, look to juke it or duck behind your minion wave then fight him when its on cooldown.  You do not outscale tahm kench in the 1v1 until much later in the game so you gotta fight him early, but you do outscale him in team fights. Tahm kench does not have good scaling in a fight where you are doing a ton of aoe damage with your spin and ravenous hydra cleave as he can only save one person with his ult. When splitting go opposite side of the map where tahm kench is and use your mobility to outrotate him as much as possible. Only hold tahm kench under your own turret in mid game and look to force plays everywhere as he does not have very good waveclear to pressure.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Taliyah",
    difficulty: "Medium",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Talon",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Talon has very good burst but lacks damage in a sustained trade. Look to force longer trades by fighting him away from walls where he can hop over. Talon's base stats cant compare to yours so early trades will be heavily in your favor. Level one Talon cannot proc his passive so make sure you put very good early pressure on him. You can build tiamat early in this matchup to put pressure on talon and his turret and make sure he does not roam. If Talon does roam look to pressure turret hard and try to ping to your team that he is missing. In the mid-late game if he can burst you 100-0 you might need to buy a little bit of armor if your win condition is to win the 1v1 versus him (maybe deaths dance 6th item would be good).",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Taric",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Taric has really good base armor values and has good on hit damage but early on will lack the mana for all ins with you. You can also easily juke his stun in a 1v1 especially if you hit your w slow on him. Look to constantly pressure him as taric does not farm under turret very well especially early in the game. In the mid-late game if taric builds full armor you can just completely ignore him when you push in and hit turret in front of him, or you can out rotate him after you push and look for opportunities to flank his team.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Teemo",
    difficulty: "Hard",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "MERC TREADS BUY The most consistent way to beat teemo is to look for an early all in and get level 2 before teemo. Look to avoid damage in any way possible so make sure that you position well against him either by hiding in the brush while waiting for minions to farm or hanging back behind your ranged minions. If teemo tries to harass you make sure you stand within your minion wave then kite back so that he takes minion damage. A good tip against teemo when you do trade against him is that teemo's blind affects your autos THE INSTANT YOU START THE ANIMATION not when you finish the auto. So while you are blinded pay attention to the white CC bar under your resource bars to see when his blind will run out, keep on top of teemo and auto attack when the white bar for CC will end before your auto attack finishes. If you are in a position where he is slowpushing into your turret be careful about going after the ranged minions (they are worth less gold then melee) teemo can hit you without taking turret shots when you walk up for ranged minions but he will take a turret shot if you auto melee minions hitting the turret from max melee distance. If you skip out on last hitting a few ranged minions and keep your health high you might be able to setup a big trade or even an allin if he is still up against your turret when all the minions are almost gone.  Hitting your W slow against Teemo can be difficult cause he can turn back to throw his blind or auto attack.  My advice is when you spin for the all in, wait until after his blind + auto to use your W slow. Or if you want to play it safe you can run at teemo to try to force him to turn his back to you and W slow him before you spin in. In the mid-late game split push against Teemo you do outscale him as long as you didnt let him get ahead of you. If you stay atleast even you should win all ins, just make sure you hit that W slow or he can punish you really hard! Make sure you have fleet available when looking to spin in so you can spin auto attack and use the fleet movespeed to keep on top of him while you are blinded.",
    
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Thresh",
    difficulty: "INTeresting",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "if they pick thresh top they are trolling.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Tristana",
    difficulty: "Hard",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Since tristana has range she does have pretty good poke, but her range isnt great early and her w costs a lot of mana to escape. So you can look to spin in and trade with her with fleet available so you can back off with the movespeed. Her W cooldown level 1 is 22 seconds which can be reset with takedowns and by fully blowing up her bomb. You outscale Tristana in the 1v1 up until she gets 6 items where she can actually self-peel herself pretty well. In the case where you split against a 6 item tristana late in the game, look to catch her out around a corner or have her facecheck you (can also build randuins 6th item) Or you can look to hit a w slow and force her ultimate, then reengage on her when your w slow comes back up.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Trundle",
    difficulty: "Medium",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "DO NOT FOR ANY REASON TRY TO FIGHT TRUNDLE LEVEL 1 EVEN IF HE HAS NO ITEMS OR HE HAS NO ARMS. HE WILL BEAT YOU. His Q reduces your attack damage, gives him an auto reset, can proc his pta and will grant him attack damage and is on a 4 second cooldown. Once you hit level 4 and you get the extra base stats from levels and AD from your Q you will be powerful enough to start looking for trades with him. Trundle's pillar can knock you up but it does not CC you meaning that you can actually spin away or towards trundle while being knocked up. Be careful when you are far up the lane against trundle because if you take a bad trade and try to spin out he can pillar you and chase you down and force you into an allin. If Trundle is chasing you down try just walking away from him and save your spin for when he pillars you. A good time to take a trade with trundle is when his W is on cooldown. His W gives him increased healing, movement speed, and a bunch of attack speed. Trundle's ultimate steals health and resistances which can make him tanky, if you are able to force his ult and back off and reengage the all in after his ulti is down, you can fight him with an ultimate advantage (assuming you couldnt just kill him through his ultimate.) ",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Twisted Fate",
    difficulty: "Hard",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Twitch",
    difficulty: "Easy",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Twitch has no escapes except for a slight movespeed bonus during his stealth and a slow he puts on the ground. Look to hold the wave on your side of the lane and look for allins using the length of the lane to run him down. In mid-late game teamfights, try to find where twitch will be ambushing from and look to focus him down first. You beat Twitch in a 1v1 at every stage of the game.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Udyr",
    difficulty: "Medium",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Udyr top has really good early damage with tiger stand and stuns with bear stance. Early levels though Udyr does not have a good mana pool to work with so he can run out of mana very quickly if he swaps stances too much. Look to farm out the early game and avoid damage when possible. If Udyr trades into you early you can fight him within your minion wave but make sure to kite back while autoing in case you need to disengage. Try to let Udyr push you in early game so that you can farm and get experience from the safety of your turret. Save your W slow when looking for an allin on the Udyr for when he kites away after his stun, or if you can hit it before he stuns so he cant seperate as much distance from you that works too. In the mid-late game you can fight Udyr outside his turret but he is very hard to dive 100-0 even with items. If he is hugging turret look to outrotate him using your superior mobility.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Urgot",
    difficulty: "Medium",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Urgot has strong poke in the early game (can literally zone u level 1 with pta so if he does that try to get exp) but by the time you get level 4 and you have a good amount of HP and fury you can look for solid trades against him. Look to avoid his q's by preemptively dodging them when you walk up for minions. Make sure when you are trading with Urgot that you stay at an angle where only one leg can hit you so you take less damage, his flip has a cast animation so you can look to sidestep it if you are looking for it. You can use tryndamere's ultimate at any point during Urgot's ultimate, if you want to maximize your tryndamere ultimate, use your R right as you are about to enter the grinder (usually it takes .25 seconds or so when u hit the grinder for you to actually die so just press r right before that.) In the mid-late game you can beat Urgot 1v1 If he is away from his turret, but under turret it can be difficult if you arent massively ahead of him. If he is hugging turret look to use your superior mobility to out rotate him after you shove him in, and look to take jungle camps, ward, or flank his team (if you see an opportunity.)",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Varus",
    difficulty: "Easy",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Varus has good poke and disengage but he is an immobile champion. Look for opportunities to trade with varus early levels with fleet proc up.  If he pokes you hard stay back and sustain up. Varus's auto attacks apply a passive which enhances the damage of his next ability that he hits you with, so be careful about being bursted after he has stacks on you especially when trying to time your R. You can buy a QSS later in the game if you feel like you need it to stick onto him. In the mid-late game Varus can not hold you 1v1.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Vayne",
    difficulty: "Hard",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Vayne top is the bane of all melee tops. If you can look to swap lanes with your mid laner who might have a better chance of laning vs her to counter the cheese. Look to let vayne push you in, use the bushes top lane to avoid auto attacks while you are waiting for minions to get low to farm. If vayne trades with you make sure you are within your minion wave so she takes damage from your minion wave and it will also cause the wave to push against you. You can look for trades if you kept your health high and you are level 4 with minion advantage while pushing towards vayne. Vayne's condemn cooldown is a 20 second cooldown level 1 while your spin is a 12 second cooldown level 1 (also decreases in cooldown every time you crit.) Vayne also is really susceptible to ganks from your jungler early, so make sure that you are keeping your lane in a position where he can gank for you (keep your health high and keep your cooldowns available when your jungle is closeby.) In the mid-late game you can find opportunities to 1v1 vayne if you catch her with your w or she face checks you in a brush, but avoid trying to fight her straight up in lane. Try to catch her off guard from the fog of war.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Veigar",
    difficulty: "Easy",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Veigar's cage is the only thing stopping you from running him down the lane. He is an immobile champion with high burst that you counter with your ultimate. He is also very squishy with high cooldowns. Veigar's E cooldown level 1 is 18 seconds while your spin is a 12 second cooldown level 1. Remember that you cannot spin through veigar's cage it will stop you mid spin if you spin into the edge of it. Win the lane by punishing his cooldowns. If he is spacing well and can't find an angle to get on him get the wave frozen so he has to push way up and try to deny experience. Post 6 you can dive him, make sure that you start dives with an auto attack, activate your ghost and you can even just run into the veigar stun and then run him down afterwards. In the mid-late game, Veigar can be hard to dive if he holds on to his cage and has zhonya, but look to push him in and outrotate him, or buy a qss to bypass his cage stun.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Vel'Koz",
    difficulty: "Medium",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Vel'koz has really good poke and disengage with his abilities, your chance to all in him is dependent on your ability to dodge skillshots. Tips for avoiding skillshots, think about his cooldowns preemptively and if they are available look for the cast animations. Keep your mouse cursor close to your character so even if your moving in one direction you dont have to move your mouse as far to juke to a different direction to avoid a skill shot. Use your spin to avoid Vel'koz's E if it is available (the closer you are to velkoz the less travel time his knockup has so if you are already on top of him save your spin for after the knockup) . Once you have tier two boots and tiamat there will be plenty of times to all in him (can build swifties in this matchup). I usually try to hit my w before spinning in just because with velkoz if you miss your w after you spin in he has so much damage that he can hit you with while you are retreating back. In the mid-late game, velkoz cannot hold you 1v1 outside of turret range, and is somewhat easy to dive even in his turret range just because of how squishy he is. If you feel like for whatever reason you cannot dive him just shove in and rotate to take jungle camps, ward, or look for opportunities to flank his team.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Vex",
    difficulty: "Medium",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Vex is strong early with her empowered autos vs your spin as well as the fear. Don't look to trade levels 1-3 look to scale up your ad with ur Q and look for fights when you are levels 4-6. At level 6 you have a really good chance of an allin if you have both summs and are high hp. Vex has no mobility other than using her ult to dash to another champion. When vex uses an ability with pull passive bar that would be the ideal time to go in as she has to build that bar back up by auto attacking you with her passive to build it back up, the passive bar is what enables her to fear you. In the mid - late game she has very heavy burst and can kite with the fear but you can 1v1 her outside of turret easily.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Vi",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Vi can poke you through minions with her E, pay attention to where she is angling her punches. If vi uses an ability she gains a shield but her shield has a 16 second cooldown level 1, so you can look for trades when it is down. Levels 1-2, tryndamere wins allins vs Vi really hard. After level 3 what Vi will look to do is poke you with her e and when you spin on her she will disengage by q'ing you auto attacking and resetting auto attack with e for her 3 hit combo to proc her w passive. If you look to start trades with an auto attack though, you can have your spin up for after she disengages with her Q to extend the trade. In the mid-late game Vi cannot deal with you 1v1.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Viego",
    difficulty: "Medium",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Viego just like yasuo and yone has a Q that can poke you from outside your melee range. In this matchup look to side step his q's when walking up for minions. You can fight viego after level 4 when you have atleast 2 points in q, make sure to save w for the slow when he kites back vs you. Post level 6 you can dive him even from high HP but make sure you have spin/flash ready to follow up on him if he ults away from you while diving. He can move very fast in his shroud that he places which can kite you pretty hard as well. Biggest fear of viego isnt the 1v1 vs Viego but viego killing one of your allies and getting resets.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Viktor",
    difficulty: "Medium",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Viktor has really good poke but your base stats are higher then his level one. Can look to sit in the top lane brush and wait until the first 3 minions are low, then you can spin through those 3 minions and get a trade onto viktor to force him off the wave. Look to get level 2 and look for a trade with him as soon as you hit your level 2 power spike. Shove the wave in and let it 'bounce' back to you (when you crash the wave into turret all the way, the enemy wave will slowly start pushing towards your turret.) If you didnt burn summs or get a kill on him the first two levels, then look to let the wave shove back into you and just look to farm. Viktor is immobile but he has really good Crowd control with his W. If you can, try to force viktor to back before he has enough gold for lost chapter. If you are able to do this you can have pressure on him post 6. If lane goes even and he scales up this just becomes a farm matchup in the 1v1. In the mid-late game against viktor you can buy a QSS to stick on top of him through his W stun, or if you have multiple points in your W, the w slow is usually enough to stick on top of him even after his stun. What I like to do is hide my W animation with the animation freeze effect on Viktor's W so he doesnt know to dodge it.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Vladimir",
    difficulty: "Medium",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Look for early trades against vladimir after building some fury. Look to back off when his empowered q is almost up (when is bar fills all the way up.) With vlad's empowered q he gains movement speed, bonus healing, and damage but he has to use the empowered q within 3 seconds. Vladimir usually takes phase rush in this matchup so you have to take consistent short trades against him, it is really hard to force an allin against him unless vlad wastes his phase rush before you commit to him. If vladimir is playing back and safe this is mostly a farm matchup, you can look to pressure vlad under turret with short trades (auto attack + spin out.) Or you can try to hold the wave close to your turret to try and force opportunities to get multiple short trades in a row. Phase rush has a decently long cooldown and tryndamere's spin is a 12 second cooldown level 1. So you can spin into vlad auto attack him, he will q, then e + w to disengage. Then if he walks back up while your spin is available you can look for an allin. Vlad's w and E cost him health so if you force his W, that by itself is a really good trade. Vladimir's W is a 28 second cooldown level 1. In the mid-late game against vladimir you can beat him outside of his turret range in an allin by looking to spin on him, resetting your spin and chasing him down through his phase rush with your second spin, but it is nearly impossible to dive him with his w + zhonya + phase rush + ultimate healing. If vlad is hugging turret, look to shove him in and rotate into jungle camps, placing deep wards, or looking to flank his team while he is covering the wave.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Volibear",
    difficulty: "Hard",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "The most important thing to track in the volibear matchup is his starting ability and his runes. If volibear takes PTA and starts W (his maul) you want to make sure that you DO NOT fight him lvl 1. Let him shove the wave in. Volibear's passive will gradually make him shove it in, the best thing you can do is walk up and try to get cs without taking damage (if he walks up and W's you make sure you wait out the W duration). If voli takes grasp or starts his E (the thunderstorm thing) then you can look to shove him in early and get the first 2 waves into turret so it shoves back towards you. Volibear has an INSANE trading combo where he will maul you (his w) to push you off minions where you have to stay away from volibear for 7 seconds so that he does not get the bonus dmg and healing from the 2nd maul. If you walk too close after his first w he will use his q and his e together to basically stun you in place so that you also get hit by the thunderstorm and its really hard to trade back. It is important when getting away from voli and mitigating damage from his combo that you buffer volibear's q with your spin. In this matchup typically you are looking to farm it up and fight him after you get tier 2 boots and Ravenous Hydra. There will be times where voli runs out of mana or maybe your jungler comes up where you can look for a kill but other then that look to survive. In the mid game with your CDR + crit you shouldnt have an issue fighting him unless you miss your W slow. Its really important that you beat voli in a single all in trade. Ignite or exeuctioners is really imporant to have too especially if he gets tanky because of his healing. Look to save your E to stick onto him if you know he is looking to ult away or to dodge his ulti dmg.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Warwick",
    difficulty: "Hard",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Warwick is insanely strong vs you early game to the point that you NEED to get him to shove you in. Buy Executioner's first back if you are even or you think your jungler is going to gank your lane. Bait him into attacking and trading with you and walk away as your minions hit him instead of the enemy minions so that the wave starts pushing towards you (dont hit him back or his minions hit you and nullify the wave shoving toward you, you can spin away without attacking him). Always try to keep the wave in a spot where it is close to your turret or you can find yourself in a lot of trouble. Don't get baited into an allin vs him if you don't have help, most of the time he will win the all in anyways with his insane healing because you need more damage to beat him (wait 1-2 items atleast). When warwick activates his E for the fear and damage reduction you usually want to kite it out or disengage from the trade (unless you can kill him thru the damage reduction.) look to set up your wave on your side of the lane so you have room to run him down in an allin with help from your jungler. In the mid-late game you can beat warwick in a 1v1 away from his turret, and you can dive him under turret after a couple of auto attack+ spin out short trades or if he wastes his E. You can try to bait out his E, then spin out, then reengage the dive.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Wukong",
    difficulty: "Medium",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Against ignite Wukong you can also start Doran's shield. Win the matchup by taking short trades into an allin. It is important that in short trades that you don't just spin away but you actually take 2-3 auto attacks into wukong and then spin away. In a straight up all in Wukong gets so much armor from his passive but if you take trades where you only let him stack it up a little bit then disengage it can be hard for wukong to sustain through that damage. Typically you want to get him down to atleast half before committing to an all in. Again the reason you want to get his hp down some before fighting is so that he cant survive long enough to stack his passive all the way up. Its imporant if you are diving wukong that you try to burn his ultimate or his clone before committing to the dive. Wukong level 6 is the most oppressive spike in the game, do not be up in lane when he hits 6 or he can all in you. When wukong clones, make sure to keep a timer on it in your head because it is a 20 second cooldown early on. Also if you right click wukong before he clones and your character stops auto attacking that means he has used his clone and thats what caused your character to stop autoing since u lost vision of the target you were on. Sometimes you can punish his clone being down if he walks back up to you while its still on cooldown. If you don't get an advantage in lane be careful for when he hits his Trinity Force. He can force a trade on you if you are overextended and 100-0 you without you being able to fight back effectively. In the mid-game if you are behind, just look to farm up and play away from wukong. By late game you will have enough damage to all in him, if he itemizes deaths dance and blade of the ruined king make sure you get executioners.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Xayah",
    difficulty: "Easy",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Xayah has good disengage with her feathers and because she is ranged she can harass you early. Look to avoid damage and build up fury and you can trade with her level 1. Tips against dueling Xayah: Look to sidestep the angle of her feathers, don't just run in a straight line against her, xayah pulls back feathers towards her always, so for instance if xayah ultis, try to get behind her so that you are not in between xayah and her feathers. If pulls her feathers back and hits you with 3 or more you get rooted. If you can manipulate the wave so it is on your side of the lane, it can be easier to setup allins on xayah. In the mid-late game xayah can be annoying to duel but if you hit your w slow you will win most of the time vs her. When diving xayah, look to try to avoid the root with her feathers after she ultis.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Xerath",
    difficulty: "Easy",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Look to dodge skillshots by juking to the side after walking up and w slowing him or buffer his stun with your spin. You should be able to outsustain his poke unless you let him auto you too much, but with xerath's low mobility you should be able to run him down if he extends too far in lane. In the mid-late game he cannot hold you 1v1.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Xin Zhao",
    difficulty: "Medium",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Xin gains bonus range and damage with his Q and his 3rd auto attack with his Q will knock you up. You want extended trades vs xin zhao to beat him or auto+spin out with grasp, don't take allins vs xin early levels unless you get him below half. if you let him get short trades on you while you are farming minions to poke you down then you will miss your opportunity to all in. Start off all trades with xin with an auto attack that way you can save your spin to stick onto him. Xin cannot knock you away with his ultimate if he has auto attacked you, he must auto attack a minion or something else to be able to knock you back. So if you catch him out of lane, you can all in him pretty easily. You will win vs xin zhao in the mid-late game split push very easily. He does not scale very well.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Yasuo",
    difficulty: "Medium",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "If you can build up fury without taking too much damage level one you can look to get level 2 advantage and take a good trade. To avoid damage from yasuo's q walk inside his q range, then instantly right back out to bait out his q and dodge it. If you are looking for a trade against yasuo, first try to take away his shield by damaging him with an auto attack, then engage on him after the shield expires. Yasuo has very strong level 1 and 2 allins, so if you take too much damage level 1 building up fury, let him push you in, sustain back up so you can fight him when you hit level 4. After level 6, Tryndamere can win an allin with yasuo by sticking on to him, after he uses ultimate, Yasuo must look to try to kite with his knockup and dashing through your minions. It is always best to fight Yasuo away from your minion wave.Typically post 6 if you are able to engage on him and dodge his tornado in the all in you will win by default because he cannot ulti. In the mid-late game you can win against yasuo away from minions although in your minion wave if he is even with you, he can fight you well. Once Yasuo is 6 items it becomes a very even 1v1 even away from minions.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Yone",
    difficulty: "Medium",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Yone much like Yasuo is very strong with his attacks and abilities level 1 and 2 because of his auto attack reset mechanic with his q and that he can build up to a knockup. Early levels you are looking to avoid yone's q typically by baiting it out by walking in its range and then walking right back out. In between his q cooldown early levels if he doesnt have it stacked up you can take trades, if you get crits you can even all in him early on. Once Yone gets his e the matchup becomes a bit tricky. Its hard to commit to yone because he will use his E to kite you and build up his nado. However if Yone uses his e just know that he eventually has to go back to the spot he e'd from so in some cases you can just wait by his soul where he will go back to. So don't over commit into an allin vs Yone while he has his E up. His E has a 22 second cooldown level 1, and then its reduced by 3 seconds each point he puts into it. When trading with yone post ravenous hydra remember that he is going to use E to trade with you, but dont walk away from the enemy minion wave ITS YOUR FRIEND, use the minions for extra cleave damage for healing as you trade with yone and you will win the trade most of the time. When looking to dive Yone try to deal damage to bait out his e, then spin out of turret range if you can't commit so you dont have to burn ulti, then redive with your ultimate while his e is down. Yone's R can be used as a blink to get away but it has a long cast time in which time you can step in front of where he is trying to ulti so he doesnt dash as far away. This matchup is very snowbally and its usually whoever gets the first kill will win however even when you are ahead as Tryndamere vs this matchup he can still outplay using his knockup from his q and his E so dont get baited into overcommitting. Later in the game you can win 1v1's typically by sidestepping q's while autoattacking so he doesnt build up his tornado quickly and using ghost to run him down.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Yorick",
    difficulty: "Easy",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "You want extended trades vs yorick, look to start every trade with an auto attack so you can save your spin to extend the trade. Yorick's wall has a 20 second cooldown level 1. Trades that yorick wants to take against you is ones where he can trap you in his wall and hit his e with ghouls up. Trades you want are ones that you are able to stick onto yorick even after he casts his wall (if you are able to save your spin to get out of his wall that is perfect.) Yorick is very strong at level 6 with his maiden up, but if you are able to kill his maiden or kill yorick his ultimate has a VERY long cooldown (160 seconds level 1.) The more yorick E's you can avoid in this lane to prevent his ghouls from harassing you, the higher chance you have of winning against him. In the mid-late game Tryndamere outscales Yorick heavily in the 1v1 as long as you can manage to stick to yorick. Critting yorick's wall reduces your spin cooldown. ",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Yuumi",
    difficulty: "INTeresting",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Do people actually think this is a champion?",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Zac",
    difficulty: "Medium",
    runes: { name: "Grasp of the Undying", image: grasp },
    guide: "Buy executioners first recall. You beat zac in allins if you are able to step on his blobs, close to his turret he is invincible. It is really important to manipulate the wave so it stays on your side otherwise you will find this matchup VERY difficult. He has decent disengage with his jump, but his jump is a long cooldown and short range early game.  In the mid-late game zac becomes very tanky and can disengage a dive, but his cooldowns are long so you might be able to reengage the dive after walking out of turret range if you managed to keep your ultimate up. If you find him away from his turret and you have multiple points in your w slow there is a good chance you can chase him down.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Zed",
    difficulty: "Medium",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Zed has decent harass in lane phase from a distance but must burn his w cooldown to deal significant damage to you. Look to sidestep his q's when going for minions and trading with him if he uses his W to harass you. Your sustained damage is better, zed is looking to burst you and kite, so if you can manage a w slow and engage on him with his w down that is your ideal fight. Post level 6, zed has multiple ways of kiting you, but if you are able to absorb his ultimate without using your ultimate that leaves you with a huge advantage. Try to keep your health high at all times in the lane so that he cannot get his passive on you (while below 50% hp zed deals bonus damage to you with an auto attack.) Splitting against zed in the mid-late game can be difficult, if he can one shot your hp bar and kite you dont look to fight him. Look to shove in, force him to rotate towards your lane, then rotate away towards jungle camps, placing wards, or looking to swap lanes or flank the enemy team. Late game against zed if you need to 1v1 him in order to win the game, Buy an armor item (even chain vest) and he wont be able to one shot you from 100-0 to burn your ultimate (also play inside enemy minion wave so you can heal from ravenous when he engages on you, typically fight him without killing the wave then kill the wave during the all in) meaning he will have to stay on you longer to commit more damage giving you room to get your all in damage in before he can kite you. Or if he doesn't commit the damage you can have an ultimate advantage and run him down afterwards.",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Zeri",
    difficulty: "Medium",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "This champion can be annoying to chase down because of her ability to e over a wall and kite away from you, so look for spots to fight her where she isn't close enough to a wall to juke over. You can stand behind minions to avoid her auto attacks because her auto attack is a skillshot on her Q. When her passive is stacked up she can zap you slowing your movespeed down and her ultimate gives her a move speed boost allowing her to be one of the most annoying champs to chase down. In the right position though even early on in the game you can run her down if she wastes her dash as its a pretty long cooldown reduced by her Q.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Ziggs",
    difficulty: "Easy",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Ziggs has good poke, but is mostly immobile besides his satchel charge, his W, which has a 24 second cooldown. Look to avoid his Q by standing away from your minions where his q can splash and juking side to side while waiting for minions to get low enough to farm. Look to hold the wave close to your turret to give you the most room for an all in on him. In the mid-late game ziggs cannot hold you 1v1, but can clear waves very effectively. Look to find him away from turret or if you hit a max rank w slow you can dive him 100-0 with 0 minions. ",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Zilean",
    difficulty: "Easy",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Zilean has great disengage and crowd control against Tryndamere but if you manage to avoid his double bomb CC, then you can usually get good short trades on zilean. Zilean has no sustain in his kit so you can eventually force him out of lane. In the mid-late game zilean holds the wave and prevents dives on him with his ultimate really well, look to rotate away from him after shoving him in and try to kill his team. Or catch zilean out away from his turret to burn his cooldowns. You can buy a QSS in this matchup to cleanse the stun/slow",
    summoners: { d: ghost, f: flash }, startingItem: blade
  },
  {
    name: "Zoe",
    difficulty: "Medium",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Avoid poke by standing well behind minions until it is time to walk up for CS or juking to the side. If she hits her E on you and puts you to sleep, save your spin til JUST BEFORE the sleep applies that way you can buffer the sleep duration to get as far from her as possible. Hold your wave on your side of the lane to give you the most room for allins and to setup jungle ganks. After Ravenous Hydra you can shove zoe in and kill her turret in front of her face (atleast demolish proc then back out) In the mid-late game you can split against zoe and win the 1v1, just pay attention in case she picks up an extra flash or anything with her W. Usually if you hit your w slow she cannot kite you out.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
  {
    name: "Zyra",
    difficulty: "Medium",
    runes: { name: "Fleet Footwork", image: fleet },
    guide: "Zyra has really good harass, and her plants provide an extra zoning tool. The way you beat Zyra is by punishing her long cooldowns. If Zyra misses a root you need to look to punish it. If she is extended in the lane you can look to spin on her and hit the w slow to follow up on her to all in. Post 6, zyra will also have her ultimate to disengage, if you can force zyra to ult to disengage from you without having to use your ultimate, you can use your ulti advantage to kill her. Sometimes you are able to follow up on her even after the ultimate if you managed to reset your spin with enough crits and CDR. In the mid-late game Zyra will not be able to hold you 1v1. You will have too much damage and mobility to run her down with. Although if you feel like it is risky to dive her, you can always shove her in and rotate to take jungle camps, deep ward, or flank the enemy team.",
    summoners: { d: ghost, f: flash }, startingItem: shield
  },
];
