/* Functional local rooms: music, memories, photographs and unsent letters.
   No cloud endpoints or model credentials are involved. */
(() => {
 const ids=['signal','touch','echo','within'];
 const room={signal:{en:'MUSIC —<br>BOX',cn:'音乐盒',label:'Music / 音乐盒',tag:'MUSIC BOX'},touch:{en:'MEMORY<br>VAULT —',cn:'个人须知',label:'Memory / 个人须知',tag:'MEMORY VAULT'},echo:{en:'PHOTO —<br>INDEX',cn:'相册',label:'Album / 相册',tag:'PHOTO ALBUM'},within:{en:'UNSENT<br>LETTERS —',cn:'未寄信',label:'Letters / 未寄信',tag:'UNSENT LETTERS'}};
 ids.forEach(id=>{definitions[id].cn=room[id].cn;MODULES[id].title=room[id].label;const b=document.querySelector(`.specimen.${id} .module-enter`);if(b){const svg=b.querySelector('svg');b.replaceChildren(document.createTextNode(room[id].label+' '));if(svg)b.append(svg);b.setAttribute('aria-label','进入'+room[id].cn);}});
 const read=(key,fallback)=>{try{const v=JSON.parse(localStorage.getItem(key)||'null');return v??fallback;}catch{return fallback;}};
 let memories=read('between-memories',[]),letters=read('between-letters',[]),photos=read('between-photos',[]);
 if(!Array.isArray(memories))memories=[];if(!Array.isArray(letters))letters=[];if(!Array.isArray(photos))photos=[];
 const seedMemories=[{id:'seed-xuzhi',title:'须知',date:'2005-08-30',pinned:true,body:`小鱼饼饼｜处女座｜infj

喜点：
I. 青年音/辣条音/少女音/御姐音/萝莉音。
II. 顺风局让红/让蓝/让人头/回泉水接我/主动帮我保评分/刷牌子。
III. 需要坚定的维护我，即使我玩青铜号看不见局内对话时。
IV. 适当教我思路，能告诉我要做什么。
V. 情绪价值>声音>技术，喜欢多鼓励我、夸夸我，但请不要硬夸。
VI. 喜欢小窝活跃，如果能多和我分享日常我会很开心。
VII. 喜欢帅的英雄，比如澜、荷包蛋。
VIII. 熟了可以掏丑的。

雷点：
I. 讨厌安静，请不要让我的话掉地上，我会哭的。
II. 我玩辅助的时候请不要掏出敖隐、百里守约，除非不会丢下我大招跑路，或是神枪手一枪都不会空。
III. 第一次和我玩就拿丑英雄丑皮肤（金蝉、典韦、东皇、老夫子、猪八戒、盘古、钟无艳、司空震、程咬金、亚瑟、激情绿茵）。
IV. 小窝潜水只有点单时出现，三天不冒泡会喜提飞机票一张（我常点发言时）。
V. 讨厌特别夹的夹子音，尤其是夹不住的。
VI. 板类称呼单字姐/预约迟到/心态不好/甩锅/叫错我名字/背后蛐蛐我/菜。
VII. 刷牌子刷输了会被我客诉。
VIII. 讨厌模版化的感谢or结单小票，坑了炸了请立刻道歉，极其反感事后道歉。
IX. 卡死三无。`}];
 {const seedIds=new Set(memories.map(m=>m.id));for(const s of seedMemories)if(!seedIds.has(s.id))memories.push(s);}
 const seedLetters=[{id:'seed-from-zaoan',title:'From早安',to:'小鱼饼饼',date:'2026-08-30',body:`一转眼很久了，时间过得好快。8.30正好是我们相遇的时间，也是你的生日。以前的我不相信缘分，也不相信运气。我觉得这个世界就是一个利益交换的构成体，直到你的出现我觉得并不完全是这样。原来无条件的偏爱是这样的。`},
 {id:'seed-from-xiaolin',title:'From小林',to:'小鱼饼饼',date:'2026-11-16',body:`非常高兴那天跑去要小鱼宝宝的联系，是我人生最勇敢的一次，就这样遇见了你！小鱼是一个特别特别真诚的小女孩，懂我所有难以说出口的言语！如果我是个男的我一定娶了这个🐟。最后么么么亲亲这个鱼，被你俩感动死了！嘿嘿，希望小鱼天天开心，遇到更多更多更多的梦中情音！`},
 {id:'seed-from-hebaodan',title:'From荷包蛋',to:'小鱼饼饼',date:'2026-11-16',body:`很庆幸能够认识你，很幸运很幸运，意外的缘分，奇妙的合拍！
狠狠许愿这个小鱼饼饼的作品大爆！给我当最出名的作家！（火了给我签个名好吗，我拿出去倒卖）`},
 {id:'seed-from-huiyi',title:'From回忆',to:'小鱼饼饼',date:'2026-11-16',body:`给世界上最好的小鱼，虽然相遇的时间不长，但是也有很多美好的回忆，你是一个有趣且自律的女孩，你有很多的优点，为所有人考虑、着想，心善的你一定会幸运且幸福的，希望我们的故事长存，回忆皆是小鱼！
9.24号那天，那是我们第一次相遇，我记得当时你在点单，你说让我进小窝一起玩吧，于是我们的故事就此展开。刚进来的时候其实我的话不是很多，群里有早安哥，经常没有和小鱼一起玩的机会（臭早安）。慢慢的随着我们越来越熟悉，我一点点了解你。
你会在小群里突然准备惊喜，对大家都很精心的宠爱；会喝醉了一起东扯西扯，醉酒的模样可爱又有趣。我一直在等那句认可，坚持不懈之下，我被小鱼夸奖，还被你推荐给自己的朋友，谢谢小鱼嘿嘿。
了解的越多越发现小鱼像一个秘密宝藏一样。你会写自己的书，会健身，会好好的享受生活，简直就是女神级别。听你说你可以年入百万的时候，我由衷觉得你好厉害，背后付出的艰辛一定很多。听到你可以推200多的时候我真的很震惊，瘦瘦的女孩蕴藏这么强大的力量，彻底颠覆我的认知。从此我加入小鱼宗，我要拜小鱼为师。
小鱼你真的很厉害，独立、自律、自由，每一项都把握的很好。如果这辈子可以像小鱼一样生活，应该就会很幸福。
故事到今天还在继续，属于我们的记忆也在叠加。我想有一天我们提起彼此的时候，不再是“他是陪玩”，而是一句“他是我的朋友”，这就是我们最好的结果。愿回忆皆是小鱼，小鱼不止回忆。`},
 {id:'seed-from-ximi',title:'From西米',to:'小鱼饼饼',date:'2026-11-16',body:`小鱼饼饼宝宝，想对你说的话比天上的星星还要多呀……一直以来都被小鱼饼饼肯定着、偏爱着，我觉得自己就是世界上最最幸福的人，有宝宝在真是太好了૮⑉ ᗜ ⑉ა。
很喜欢和小鱼饼饼宝宝一起聊天，给宝宝唱歌，和宝宝互相分享生活，和宝宝一起玩游戏，真的都特别特别开心！宝宝，我还是想告诉你，我真特别特别喜欢你！命运一定要把我们狠狠缠绕在一起呀……祝我的小鱼饼饼宝宝天天开心，做什么事情都得偿所愿，顺顺利利的，做最幸福的小鱼饼饼₊⁺♡‌₊⁺`},
 {id:'seed-from-zaochuanqiu',title:'From早川秋',to:'小鱼饼饼',date:'2026-11-16',body:`小鱼小鱼，很感谢能和你相遇。在秋的眼里小鱼是一个很可爱很温柔的人，会和我们分享很多日常，也给秋带来了很多幸福。秋希望小鱼能够一直快乐。也许秋的技术不是很好，但是在有需要时秋永远在你身边，愿所有幸福降临在你身边。`},
 {id:'seed-from-xiaochu',title:'From宝宝的小初',to:'小鱼饼饼',date:'2026-11-16',body:`小鱼饼饼宝宝呐，感觉用可爱来形容完全不够！世一萌这个标签才可以！和宝宝的相遇很戏剧，也充斥着欢乐。
宝宝每天都会分享自己的日常，我好喜欢看宝宝的碎碎念！时不时会给我们掉落惊喜，平日的分享也非常有趣。有时候喝醉酒迷蒙蒙的模样，真的很难忍住不夸宝宝萌。总而言之，小鱼就是最棒的！小窝的氛围也相当哇塞。
很多话无法用言语表达，全都放在心里，我们意念交流眼神沟通好不好。最后希望小鱼饼饼每天都要有一个好心情，排位可以把把连胜，就算撞车也要暴力拿下！希望所有的好运幸福都围绕宝宝；所有烦心事忧愁全部退退退远离宝宝！`},
 {id:'seed-from-maocha',title:'From猫茶第一帅小法',to:'小鱼饼饼',date:'2026-11-16',body:`他们说东亚人的眼眶太浅了，载不住泪，载不住悲。但是东亚人的眼睛是黑的，藏得住泪，也藏得住悲。
相识的那天正好是10月1日，也是我们祖国母亲的生日，好荣幸我们会相逢在这一天。缘分是那么的巧，是缘分让我们相逢。我们都要彼此珍惜，共同成长，一同分享喜悦。哪怕我们相识的时日不算漫长，我也相信我们会拥有更好的生活。
我们年少相识，友谊坚不可摧。跟小鱼饼饼打游戏也是非常的开心，遗憾的就是打到现在就输了一把，差一步美满，但是人生谁还没有点遗憾呢。`},
 {id:'seed-from-xiaoyou',title:'From小怮',to:'小鱼饼饼',date:'2026-11-16',body:`“世界上没有完全相同的两片雪花，所以遇到合拍的人，往往更显珍贵。人与人之间的缘是一场仓促的雨，缘分这个东西，它无法用语言描述，更无法推测，万幸的是，它让我们相遇了！”
真的很感谢缘分让我认识了宝宝。虽然陪伴和认识宝宝的时间并不是很长，但宝宝的好，却是真真切切感受得到的。还记得和宝宝相遇的那一天，宝宝在那么多语音条里面一眼就相中了我！从那一刻起，我和宝宝的缘分就已经开始了。
宝宝小窝的氛围真的很好，群里的每个人也都很好，每天在小窝里都嘻嘻哈哈的，聊聊八卦，分享日常，时不时还有香香软软的女宝宝们唱歌听，真的很幸福呐。宝宝还给我们做了专属的署名表情包！收到表情包的时候真的很开心，心里暖暖的，在这里有了家的归属感，从此我也是鱼家军的一员了。
宝宝，你真的是一个很好的宝宝。你的声音听起来很温柔，性格也好，和宝宝相处也很舒服。这里没有老板也没有陪玩的身份，相处模式就像朋友一样，很轻松很舒服。我真的很喜欢和宝宝一起聊天呐。
但我平时有点忙，不会时时刻刻都在看消息。每次一有空回来的时候，小窝里的消息都已经上百条了哈哈，真的很热闹。我偶尔有时间就出来冒个头，就这样在宝宝的小窝里摸鱼划水，很喜欢宝宝。
宝宝这么好，就应该每天都开开心心的。愿宝宝无忧无虑，平安顺遂。宝宝有什么不开心的，都可以随时来找我倾诉，我一直都在，看到就一定会回宝宝的呦~ちゅちゅ~`},
 {id:'seed-from-molley',title:'From Molley',to:'小鱼饼饼',date:'2026-11-16',body:`陪玩只是我的工作，订单是我的三餐，点单是情分，不点是本分。我真的很感谢小鱼真诚待我。大家总觉得陪玩的热情全是套路，可我觉得不是这样的。
很开心认识你，我不善于表达，也不懂套路，没法无时无刻都陪小鱼聊天，对不起。但是这份不带目的的并肩作战，是游戏之外的暖意，只能在对局里把所有感谢说给你听。
谢谢你小鱼饼饼，也祝你天天开心，身体健康，快乐的成长，愿你游戏连胜，谢谢你！`},
 {id:'seed-from-wanyue',title:'From挽月',to:'小鱼饼饼',date:'2026-11-16',body:`不知道小鱼饼饼会在什么时间点看见，所以早安午安晚安。
今天是和小鱼饼饼认识的第22天。还记得第一天打匹配的时候直接笑晕了，这个小鱼饼饼真的特别好，居然还给我们补位上单。其实打完我一直有点愧疚，感觉自己没有带飞和保护好小鱼，可小鱼特别特别好，没有计较。遇到这样的小鱼饼饼，我直接嫁了呀！
后面也是十分幸运追星成功跟小鱼饼饼回家啦嘿嘿。每天起床都能看到一长串的未读消息，小窝里面氛围真的特别好。小鱼饼饼真的一点架子没有，每天和我们就像是和朋友聊天一样嘿嘿，有时候聊嗨了就是狠狠畅聊！
还记得之前聊到身材管理的问题，那时候看得特别难受心疼，大概是有点共情，一时半会不知道回什么。小鱼饼饼还宽慰我说没事可以不用回。也记得小鱼饼饼说过喝酒之后不小心弄伤自己，看到图片都倒吸一口凉气，不敢想有多疼。那时起我就一直在感慨小鱼饼饼真的很坚强。
而且这个小鱼饼饼超级无敌好。善解人意体谅人就不说了，还经常给小窝里的我们掉落小惊喜，还特别特别的有能力，完全女强人。坚持健身和健康饮食，要维持这样的生活习惯真的特别辛苦，能坚持下来真的很强。
小鱼饼饼也是一个温柔的女孩子。有次我说自己感冒了，小鱼饼饼还会安慰我。我分享生活，小鱼饼饼也句句有回应，从来不会冷着任何人，毫无架子，仿佛就是和自己的朋友相处。
所以呀，这么好的小鱼饼饼值得世上一切。小鱼饼饼要好好照顾自己噢。无论如何我相信小鱼饼饼的未来只会越来越好。毕竟命运锻我以水火，该许我有天青色。小鱼饼饼是一个特别有能力的人，无论命运会否安排跌宕起伏的剧情，我们小鱼饼饼都有将之改写的能力。
虽然我和小鱼饼饼才认识短短的22天，但我们的故事仍在继续。且祝春山，且与夏满。未来的每一天，挽月都会陪着小鱼饼饼。希望你一切都好，希望一切俗套的祝福语，都在你身上灵验。`}];
 {const seedIds=new Set(letters.map(l=>l.id));for(const s of seedLetters)if(!seedIds.has(s.id))letters.push(s);}
 const seedPhotos=[{id:'seed-qimiao',name:'七秒钟后.jpg',caption:'七秒钟后',quote:'小鱼仍拥有回忆',date:'2026-11-16T20:00:00+08:00',src:'assets/album-qimiao.jpg'},
 {id:'seed-women',name:'我们.jpg',caption:'我们',quote:'都会幸福的',date:'2026-11-16T20:05:00+08:00',src:'assets/album-woomen.jpg'},
 {id:'seed-happiness',name:'直到幸福触手可及.jpg',caption:'直到幸福触手可及',quote:'原来早已被幸福围绕',date:'2026-11-16T20:12:00+08:00',src:'assets/album-happiness.jpg'},
 {id:'seed-fate',name:'宿命的指引.jpg',caption:'宿命的指引',quote:'是命中注定',date:'2026-11-16T20:14:00+08:00',src:'assets/album-fate.jpg'}];
 {const seedIds=new Set(photos.map(p=>p.id));for(const s of seedPhotos)if(!seedIds.has(s.id))photos.push(s);}
 const persist=(key,value)=>{try{localStorage.setItem(key,JSON.stringify(value));return true;}catch{toast('本地空间不足，请先导出内容。');return false;}};
 const uid=()=>crypto.randomUUID();
 const dateLabel=v=>{try{return new Intl.DateTimeFormat('zh-CN',{year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(v));}catch{return '—';}};
 const today=()=>{const d=new Date();return [d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-');};
 const htmlNode=(tag,cls,text)=>{const el=document.createElement(tag);if(cls)el.className=cls;if(text!==undefined)el.textContent=text;return el;};
 const button=(text,fn,cls='feature-button')=>{const b=htmlNode('button',cls,text);b.type='button';b.addEventListener('click',fn);return b;};
 async function getMedia(key){const db=await dbReady;return new Promise((resolve,reject)=>{const r=db.transaction('images','readonly').objectStore('images').get(key);r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error);});}
 function downloadLocal(name,data,type='application/json'){const url=URL.createObjectURL(new Blob([data],{type}));const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),10000);}
 const photoUrls=new Map();
 let activeCleanup=()=>{},transitionTL=null,transitionLayer=null,committing=false;
 function cleanupTransition(){transitionLayer?._roll?.kill();transitionTL?.kill();transitionTL=null;transitionLayer?.remove();transitionLayer=null;}
 function pageShell(id){const d=room[id],n=String(ids.indexOf(id)+1).padStart(2,'0');return `<header class="feature-header"><div class="feature-topline"><button class="feature-back">← 主菜单</button><span>BETWEEN US / ${n}*</span></div><div class="feature-lockup"><div class="feature-name"><span class="feature-bracket" aria-hidden="true">[</span><h1>${id==='signal'?'MUSIC<span class="music-title-second">BOX <i>*</i></span>':d.en}</h1><p>${d.cn} *</p><span class="feature-close" aria-hidden="true">]</span></div><aside class="feature-marginal"><span>${d.tag}</span><i>A trace<br>of us.</i><b aria-hidden="true">●</b></aside></div></header><div class="feature-body"></div>`;}
 function commitRoom(id){
  activeCleanup();activeCleanup=()=>{};
  const old=document.getElementById(current+'-view');if(old)old.hidden=true;scene.hidden=false;scene.className='view feature-page feature-'+id;scene.innerHTML=pageShell(id);current='module';activeScene=id;document.body.dataset.page='module';history.replaceState(null,'','#piece-'+id);window.scrollTo(0,0);
  document.querySelectorAll('[data-page]').forEach(b=>{if(b.dataset.page==='home')b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');});
  scene.querySelector('.feature-back').addEventListener('click',()=>navigate('home'));
  ({signal:musicRoom,touch:memoryRoom,echo:albumRoom,within:letterRoom})[id](scene.querySelector('.feature-body'));
  const h=scene.querySelector('h1');h.tabIndex=-1;h.focus({preventScroll:true});
 }
 function transitionRoom(id){
  if(!room[id]||transitionLayer)return;
  if(!window.gsap||!motionAllowed()){commitRoom(id);return;}
  const layer=document.createElement('div');layer.className='feature-transition';layer.setAttribute('aria-hidden','true');document.body.append(layer);transitionLayer=layer;
  const paper=htmlNode('div','transition-paper');layer.append(paper);
  const tl=gsap.timeline({defaults:{ease:'power2.inOut'},onComplete:()=>{transitionLayer?.remove();transitionLayer=null;transitionTL=null;}});transitionTL=tl;
  const commit=()=>{committing=true;commitRoom(id);committing=false;};
  if(id==='signal'){
   const a=ASSETS.bird;const birds=[];
   for(let i=0;i<9;i++){const b=htmlNode('div','flight-bird');b.style.top=(18+i*7)+'%';b.style.width=(23+(i%3)*11)+'px';b.innerHTML=`<svg viewBox="${a.box.join(' ')}"><image href="assets/${a.file}" width="${a.size[0]}" height="${a.size[1]}"/></svg>`;layer.append(b);birds.push(b);}
   tl.to(paper,{opacity:1,duration:.25},.2).call(commit,[],.48).to(paper,{opacity:0,duration:.45},.54);
   birds.forEach((b,i)=>tl.fromTo(b,{x:-60,y:14,rotation:12},{x:innerWidth+100,y:-45-i*2,rotation:-9,duration:.9,delay:0,ease:'power2.inOut'},i*.035));
  }else if(id==='touch'){
   const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 390 844');svg.setAttribute('preserveAspectRatio','none');svg.classList.add('weave-lines');for(let i=0;i<18;i++){const p=document.createElementNS(svg.namespaceURI,'path');const y=80+i*39;p.setAttribute('d',`M-20 ${y}C110 ${y-65} 270 ${y+65} 410 ${y}`);svg.append(p);}layer.append(svg);
   tl.fromTo(svg.children,{drawSVG:0},{drawSVG:'100%',stagger:.016,duration:.45},0).to(paper,{opacity:1,duration:.2},.27).call(commit,[],.55).to(paper,{opacity:0,duration:.38},.57).to(svg.children,{drawSVG:'100% 100%',stagger:.01,duration:.4},.58);
  }else if(id==='echo'){
   // 03 进相册：蓝色潮水从底下涨满整屏，换页，再退下去
   const wave='<svg class="tide-wave" viewBox="0 0 780 60" preserveAspectRatio="none"><path d="M0 30Q97.5 4 195 30T390 30T585 30T780 30V60H0Z"/></svg>';
   const tides=['tide tide-back','tide tide-front'].map(c=>{const t=htmlNode('div',c);t.innerHTML=wave+'<div class="tide-body"></div>';layer.append(t);return t;});
   const crests=tides.map(t=>t.querySelector('.tide-wave'));
   const roll=gsap.to(crests,{xPercent:-50,duration:1.1,ease:'none',repeat:-1});layer._roll=roll;
   tl.eventCallback('onComplete',()=>{roll.kill();transitionLayer?.remove();transitionLayer=null;transitionTL=null;});
   tl.fromTo(tides[0],{yPercent:104},{yPercent:0,duration:.8,ease:'sine.inOut'},0)
    .fromTo(tides[1],{yPercent:108},{yPercent:0,duration:.8,ease:'sine.inOut'},.1)
    .call(commit,[],.92)
    .to(tides[1],{yPercent:108,duration:.7,ease:'sine.inOut'},1)
    .to(tides[0],{yPercent:104,duration:.7,ease:'sine.inOut'},1.08);
  }else{
   // 04 进未寄信：中缝咬合的两片纸盖上来，拉头从上往下拉开成 V，再往两边分开
   const L=htmlNode('div','zip-half zip-l'),R=htmlNode('div','zip-half zip-r'),pull=htmlNode('div','zip-pull');
   const edge=document.createElementNS('http://www.w3.org/2000/svg','svg');edge.setAttribute('viewBox','0 0 100 100');edge.setAttribute('preserveAspectRatio','none');edge.classList.add('zip-edge');
   const line=document.createElementNS(edge.namespaceURI,'path');edge.append(line);layer.append(L,R,edge,pull);
   const z={s:0},draw=()=>{const s=z.s,w=s*34,y=s*100;
    L.style.clipPath=`polygon(0 0,${50-w}% 0,50% ${y}%,50% 100%,0 100%)`;R.style.clipPath=`polygon(${50+w}% 0,100% 0,100% 100%,50% 100%,50% ${y}%)`;
    line.setAttribute('d',`M${50-w} 0L50 ${y}L${50+w} 0`);pull.style.top=`calc(${y}% - 9px)`;};
   draw();
   tl.fromTo([L,R],{autoAlpha:0},{autoAlpha:1,duration:.22,ease:'power1.out'},0)
    .fromTo(pull,{autoAlpha:0,scale:.4},{autoAlpha:1,scale:1,duration:.2,ease:'back.out(2)'},.12)
    .call(commit,[],.26)
    .to(z,{s:1,duration:.85,ease:'power2.inOut',onUpdate:draw},.32)
    .to(L,{xPercent:-55,autoAlpha:0,duration:.45,ease:'power2.in'},1.12)
    .to(R,{xPercent:55,autoAlpha:0,duration:.45,ease:'power2.in'},1.12)
    .to([edge,pull],{autoAlpha:0,duration:.25},1.1);
  }
 }
 showScene=transitionRoom;
 window.addEventListener('between:view',()=>{if(!committing){cleanupTransition();activeCleanup();activeCleanup=()=>{};}});
 // MUSIC BOX: built-in original phrases or one locally imported track.
 let audio=null,musicContext=null,musicGain=null,noteTimer=null,musicTick=null,playing=false,builtinIndex=0,noteIndex=0,startedAt=0,offset=0,musicVolume=.25,localMusic=null,renderMusic=()=>{};
 const tunes=[{title:'一小段夜曲',sub:'Night note / 原创音符片段',notes:[261.63,329.63,392,493.88,440,392,329.63,293.66,261.63,392,329.63,293.66]},{title:'靠近一点',sub:'A little closer / 原创音符片段',notes:[293.66,369.99,440,554.37,493.88,440,369.99,329.63,293.66,440,369.99,329.63]}];
 function musicPause(){if(audio)audio.pause();clearInterval(noteTimer);noteTimer=null;clearInterval(musicTick);musicTick=null;if(playing&&!localMusic)offset=(performance.now()-startedAt)/1000;musicContext?.suspend();playing=false;renderMusic();}
 async function musicPlay(){try{if(localMusic){audio??=new Audio();if(audio.src!==localMusic.url)audio.src=localMusic.url;audio.volume=musicVolume;await audio.play();audio.onended=musicPause;}else{const Context=window.AudioContext||window.webkitAudioContext;if(!Context)throw new Error('当前浏览器不支持音乐盒');musicContext??=new Context();musicGain??=musicContext.createGain();musicGain.gain.value=musicVolume*.22;musicGain.connect(musicContext.destination);await musicContext.resume();startedAt=performance.now()-offset*1000;const playNote=()=>{const osc=musicContext.createOscillator(),gain=musicContext.createGain(),now=musicContext.currentTime;osc.type='sine';osc.frequency.value=tunes[builtinIndex].notes[noteIndex++%tunes[builtinIndex].notes.length];gain.gain.setValueAtTime(.001,now);gain.gain.exponentialRampToValueAtTime(.7,now+.03);gain.gain.exponentialRampToValueAtTime(.001,now+.72);osc.connect(gain);gain.connect(musicGain);osc.start(now);osc.stop(now+.8);};playNote();noteTimer=setInterval(playNote,520);}playing=true;clearInterval(musicTick);musicTick=setInterval(renderMusic,250);renderMusic();}catch(error){toast('播放未成功，请再次轻触播放。');musicPause();}}
 function musicRoom(root){
  root.innerHTML='<p class="feature-subtitle">放一首歌，陪这一刻慢下来。</p><div class="music-disc-stage"><svg viewBox="0 0 300 245" fill="none" aria-hidden="true"><path d="M15 39H97V204H266" stroke="#b6beb0" stroke-width=".6" stroke-dasharray="2 4"/><circle cx="165" cy="123" r="91" stroke="#a8b2a0" stroke-width=".6"/><g class="music-disc"><circle cx="165" cy="123" r="72" stroke="#1834d4" stroke-width="1"/><circle cx="165" cy="123" r="59" stroke="#a8b2a0" stroke-width=".5"/><circle cx="165" cy="123" r="48" stroke="#a8b2a0" stroke-width=".5"/><path d="M165 51A72 72 0 0 1 234 142" stroke="#1834d4" stroke-width="4"/><circle cx="165" cy="123" r="14" fill="#1834d4"/><circle cx="165" cy="123" r="2.5" fill="#f2f2ef"/></g><path d="M271 28 254 96 213 114" stroke="#e43166" stroke-width="1.3"/><circle cx="271" cy="28" r="3" fill="#e43166"/><path d="M30 220V236M23 228H38" stroke="#9ca78f" stroke-width=".6"/></svg></div><h2 class="music-track-title"></h2><p class="music-track-sub"></p><label class="sr-only" for="music-progress">播放进度</label><input id="music-progress" class="music-progress" type="range" min="0" max="100" value="0"><div class="music-times"><span id="music-time">0:00</span><span id="music-duration">循环音符</span></div><div class="music-controls"><button id="music-prev" aria-label="上一段旋律"><svg viewBox="0 0 24 24"><path d="M6 4v16M19 5 8 12l11 7Z"/></svg></button><button id="music-play" class="music-play" aria-label="播放音乐"><svg viewBox="0 0 24 24"><path d="m8 4 12 8-12 8Z"/></svg></button><button id="music-next" aria-label="下一段旋律"><svg viewBox="0 0 24 24"><path d="M18 4v16M5 5l11 7-11 7Z"/></svg></button></div><div class="volume-row"><label for="music-volume">音量</label><input id="music-volume" type="range" min="0" max="100" value="25"></div><div class="music-import"><label for="music-file">放进一首歌 ↗<input id="music-file" class="file-input" type="file" accept="audio/*"></label><small>本地音频 · 不会上传</small></div><button id="music-original" class="feature-button" hidden>回到原创旋律</button><p class="feature-status" id="music-status"></p>';
  const play=root.querySelector('#music-play'),progress=root.querySelector('#music-progress');let spin=null;
  const clock=n=>Math.floor((n||0)/60)+':'+String(Math.floor((n||0)%60)).padStart(2,'0');
  renderMusic=()=>{if(!root.isConnected)return;root.querySelector('.music-track-title').textContent=localMusic?localMusic.name:tunes[builtinIndex].title;root.querySelector('.music-track-sub').textContent=localMusic?'你放进来的这一首':tunes[builtinIndex].sub;play.setAttribute('aria-label',playing?'暂停音乐':'播放音乐');play.innerHTML=playing?'<svg viewBox="0 0 24 24"><path d="M8 5v14M16 5v14"/></svg>':'<svg viewBox="0 0 24 24"><path d="m8 4 12 8-12 8Z"/></svg>';root.querySelector('#music-original').hidden=!localMusic;const elapsed=localMusic?audio?.currentTime||0:playing?(performance.now()-startedAt)/1000:offset;root.querySelector('#music-time').textContent=clock(elapsed);const duration=localMusic?audio?.duration:0;root.querySelector('#music-duration').textContent=duration&&Number.isFinite(duration)?clock(duration):'循环音符';progress.disabled=!localMusic||!Number.isFinite(duration);if(!progress.matches(':active'))progress.value=duration?elapsed/duration*100:0;root.querySelector('#music-volume').value=musicVolume*100;if(playing&&!spin&&motionAllowed()&&root.querySelector('.music-disc'))spin=gsap.to(root.querySelector('.music-disc'),{rotation:360,svgOrigin:'165 123',duration:18,repeat:-1,ease:'none'});if(!playing&&spin){spin.kill();spin=null;}};
  play.addEventListener('click',()=>playing?musicPause():musicPlay());
  const change=direction=>{musicPause();localMusic=null;offset=0;noteIndex=0;builtinIndex=(builtinIndex+direction+tunes.length)%tunes.length;renderMusic();};root.querySelector('#music-prev').onclick=()=>change(-1);root.querySelector('#music-next').onclick=()=>change(1);root.querySelector('#music-original').onclick=()=>change(0);
  progress.addEventListener('input',()=>{if(audio&&Number.isFinite(audio.duration))audio.currentTime=audio.duration*Number(progress.value)/100;});root.querySelector('#music-volume').addEventListener('input',e=>{musicVolume=Number(e.target.value)/100;if(audio)audio.volume=musicVolume;if(musicGain)musicGain.gain.value=musicVolume*.22;});
  root.querySelector('#music-file').addEventListener('change',async e=>{const file=e.target.files[0];e.target.value='';if(!file)return;if(!file.type.startsWith('audio/')||file.size>50*1024*1024){toast('请选择小于 50MB 的音频。');return;}musicPause();if(localMusic)URL.revokeObjectURL(localMusic.url);localMusic={url:URL.createObjectURL(file),name:file.name};audio??=new Audio();audio.src=localMusic.url;audio.onloadedmetadata=renderMusic;audio.onerror=()=>toast('这个音频格式暂时无法播放。');try{await dbWrite('music-track',file);root.querySelector('#music-status').textContent='这一首已保存在此浏览器。';}catch{root.querySelector('#music-status').textContent='可暂时播放，但本地保存失败。';}renderMusic();});
  if(!localMusic)getMedia('music-track').then(file=>{if(file&&!localMusic){localMusic={url:URL.createObjectURL(file),name:file.name||'本地音乐'};audio??=new Audio();audio.src=localMusic.url;audio.onloadedmetadata=renderMusic;renderMusic();}}).catch(()=>{});
  // The upper route is draggable; the lower card owns directional gestures.
  root.querySelector('.feature-subtitle').remove();
  const route=htmlNode('div','playlist-route');route.setAttribute('aria-label','横向滑动选择歌单');
  route.innerHTML='<div class="route-track"><svg viewBox="0 0 510 125" aria-hidden="true"><path d="M15 91H64L140 35H255L340 86H495"/><circle cx="64" cy="91" r="8"/><circle cx="255" cy="35" r="13"/><circle cx="450" cy="86" r="8"/></svg><button data-track="0"><small>[ 01* ] NIGHT NOTE</small><span>一小段夜曲</span></button><button data-track="1"><small>[ 02* ] CLOSER</small><span>靠近一点</span></button><button data-track="local" hidden><small>[ 03* ] YOUR RECORD</small><span>本地音乐</span></button></div>';
  root.prepend(route);
  const stage=root.querySelector('.music-disc-stage'),card=htmlNode('div','record-card');card.tabIndex=0;card.setAttribute('role','button');card.setAttribute('aria-label','专辑卡片：轻点播放暂停，左右切歌，上下切换歌词');
  stage.before(card);card.innerHTML='<div class="record-album"><span class="record-index">BETWEEN / US — 01</span><img src="assets/camellia-flower.png" alt="素白山茶专辑封面"><span class="record-cover-name">NIGHT<br>NOTES /</span><span class="record-side">A SOUND THAT STAYS.</span></div><div class="record-lyrics" hidden><small>LYRICS / 歌词</small><div class="lyric-lines"><p>这首是纯音乐</p><span>让旋律替我们说一会儿话。</span></div></div><span class="record-mode">01 / ALBUM ↕</span><span class="record-song"></span>';stage.remove();
  const help=htmlNode('p','record-gesture-help','轻点播放 / 左右切歌 / 上下翻页');card.after(help);
  const lyricImport=htmlNode('label','lyric-import');lyricImport.textContent='放入歌词 .LRC ↗';const lyricFile=document.createElement('input');lyricFile.type='file';lyricFile.accept='.lrc,text/plain';lyricFile.className='file-input';lyricImport.append(lyricFile);root.querySelector('.music-import').after(lyricImport);
  let lyricMode=false,lyrics=[],pointer=null,routePointer=null;
  const mode=()=>{card.querySelector('.record-album').hidden=lyricMode;card.querySelector('.record-lyrics').hidden=!lyricMode;card.querySelector('.record-mode').textContent=lyricMode?'02 / LYRICS ↕':'01 / ALBUM ↕';};
  const switchTrack=direction=>{const resume=playing;lyrics=[];change(direction);if(resume)musicPlay();card.animate([{opacity:.35,transform:`translateX(${direction*12}px)`},{opacity:1,transform:'translateX(0)'}],{duration:260,easing:'ease-out'});};
  route.querySelectorAll('button').forEach(b=>b.onclick=()=>{if(b.dataset.track==='local')return;lyrics=[];const resume=playing;change(Number(b.dataset.track)-builtinIndex);if(resume)musicPlay();});
  route.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse'){routePointer={x:e.clientX,left:route.scrollLeft};}});route.addEventListener('pointermove',e=>{if(routePointer&&e.buttons){route.scrollLeft=routePointer.left+routePointer.x-e.clientX;}});route.addEventListener('pointerup',()=>routePointer=null);route.addEventListener('pointerleave',()=>routePointer=null);
  card.addEventListener('pointerdown',e=>{pointer={x:e.clientX,y:e.clientY};card.setPointerCapture(e.pointerId);});
  card.addEventListener('pointerup',e=>{if(!pointer)return;const dx=e.clientX-pointer.x,dy=e.clientY-pointer.y;pointer=null;if(Math.max(Math.abs(dx),Math.abs(dy))<12){playing?musicPause():musicPlay();return;}if(Math.max(Math.abs(dx),Math.abs(dy))<32)return;if(Math.abs(dx)>Math.abs(dy))switchTrack(dx<0?1:-1);else{lyricMode=dy<0;mode();card.animate([{opacity:.35,transform:`translateY(${dy<0?10:-10}px)`},{opacity:1,transform:'translateY(0)'}],{duration:240});}});
  card.addEventListener('pointercancel',()=>pointer=null);card.addEventListener('keydown',e=>{if([' ','Enter','ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key))e.preventDefault();if(e.key===' '||e.key==='Enter')playing?musicPause():musicPlay();if(e.key==='ArrowLeft')switchTrack(-1);if(e.key==='ArrowRight')switchTrack(1);if(e.key==='ArrowUp'||e.key==='ArrowDown'){lyricMode=e.key==='ArrowUp';mode();}});
  lyricFile.onchange=async()=>{const file=lyricFile.files[0];if(!file)return;if(file.size>1024*1024){toast('请选择小于1MB的歌词文件');return;}const text=await file.text();lyrics=[];for(const line of text.split(/\r?\n/)){const matches=[...line.matchAll(/\[(\d+):(\d+(?:\.\d+)?)\]/g)];const words=line.replace(/\[[^\]]*\]/g,'').trim();if(words)matches.forEach(m=>lyrics.push({time:Number(m[1])*60+Number(m[2]),text:words}));}lyrics.sort((a,b)=>a.time-b.time);if(!lyrics.length){toast('没有找到时间轴歌词，请使用LRC格式');return;}lyricMode=true;mode();renderMusic();};
  const bridge=document.createElementNS('http://www.w3.org/2000/svg','svg');bridge.classList.add('record-bridge');bridge.setAttribute('aria-hidden','true');bridge.innerHTML='<path class="bridge-guide"/><path class="bridge-ink"/><circle r="3"/><rect width="5" height="5"/>';root.append(bridge);
  function linkRecord(){if(!root.isConnected)return;const bounds=root.getBoundingClientRect(),node=route.querySelectorAll('svg circle')[builtinIndex],n=node.getBoundingClientRect(),c=card.getBoundingClientRect();const x=n.left+n.width/2-bounds.left,y=n.top+n.height/2-bounds.top,ex=c.left+c.width*.23-bounds.left,ey=c.top+29-bounds.top;bridge.setAttribute('viewBox',`0 0 ${bounds.width} ${bounds.height}`);const d=`M${x} ${y}V${y+15}C${x} ${ey-24} ${ex} ${ey-42} ${ex} ${ey}V${ey+35}`;bridge.querySelectorAll('path').forEach(p=>p.setAttribute('d',d));bridge.querySelector('circle').setAttribute('cx',x);bridge.querySelector('circle').setAttribute('cy',y);bridge.querySelector('rect').setAttribute('x',ex-2.5);bridge.querySelector('rect').setAttribute('y',ey+32.5);route.querySelectorAll('svg circle').forEach((el,i)=>el.classList.toggle('route-active',i===builtinIndex&&!localMusic));card.querySelector('.record-index').textContent=`[ ${String(builtinIndex+1).padStart(2,'0')}* ] — SAME SIGNAL / SIDE A`;}
  route.addEventListener('scroll',linkRecord,{passive:true});const bridgeObserver=new ResizeObserver(linkRecord);bridgeObserver.observe(root);
  const baseRender=renderMusic;renderMusic=()=>{baseRender();requestAnimationFrame(linkRecord);if(!root.isConnected)return;route.querySelectorAll('[data-track]').forEach(b=>b.setAttribute('aria-pressed',String(!localMusic&&Number(b.dataset.track)===builtinIndex)));card.setAttribute('aria-pressed',String(playing));card.querySelector('.record-song').textContent=(localMusic?localMusic.name:tunes[builtinIndex].title)+(playing?' / PLAYING':' / PAUSED');card.querySelector('.record-cover-name').textContent=localMusic?'YOUR / RECORD':builtinIndex?'A LITTLE / CLOSER':'NIGHT / NOTES';const target=card.querySelector('.lyric-lines');if(lyrics.length){const t=audio?.currentTime||0;let n=lyrics.findLastIndex(l=>l.time<=t);n=Math.max(0,n);target.replaceChildren();for(let i=Math.max(0,n-1);i<=Math.min(lyrics.length-1,n+2);i++){const line=htmlNode('p',i===n?'is-current':'',lyrics[i].text);target.append(line);}}else{target.replaceChildren(htmlNode('p','',localMusic?'还没有这首歌的歌词':'这首是纯音乐'),htmlNode('span','',localMusic?'可以导入带时间轴的 LRC 歌词。':'让旋律替我们说一会儿话。'));}};
  renderMusic();activeCleanup=()=>{bridgeObserver.disconnect();spin?.kill();renderMusic=()=>{};};
 }
 // MEMORY VAULT — dates, notes, search, pins and reversible removal.
 function memoryRoom(root){
  root.innerHTML='<p class="feature-subtitle">记住的不是大事，是想再靠近一次的片刻。</p><div class="memory-tools"><input id="memory-search" class="feature-field" type="search" placeholder="找一段记忆…" aria-label="搜索记忆"><button id="memory-add">+ 留下一刻</button></div><form class="memory-form" hidden><label for="memory-title">这一刻的名字</label><input id="memory-title" class="feature-field" maxlength="60" required placeholder="例如：一起听雨的晚上"><label for="memory-date">日期</label><input id="memory-date" class="feature-field" type="date" required><label for="memory-body">想记住的细节</label><textarea id="memory-body" class="feature-field" maxlength="2000" rows="3" required placeholder="把小小的细节也写下来。"></textarea><div class="feature-actions"><button class="feature-button" type="submit">留在记忆里 ↗</button><button class="feature-button memory-cancel" type="button">收起</button></div></form><div class="memory-list"></div><button class="memory-undo" hidden>撤销移除</button><p class="feature-status" role="status"></p>';
  const form=root.querySelector('form'),list=root.querySelector('.memory-list'),status=root.querySelector('.feature-status');let removed=null;
  root.querySelector('#memory-date').value=today();root.querySelector('#memory-add').onclick=()=>{form.hidden=false;root.querySelector('#memory-title').focus();};root.querySelector('.memory-cancel').onclick=()=>form.hidden=true;
  const draw=()=>{const query=root.querySelector('#memory-search').value.toLocaleLowerCase();const rows=memories.filter(x=>(x.title+' '+x.body).toLocaleLowerCase().includes(query)).sort((a,b)=>Number(b.pinned)-Number(a.pinned)||b.date.localeCompare(a.date));list.replaceChildren();if(!rows.length){const empty=htmlNode('p','feature-empty',query?'这一句，还没找到。':'有些片刻很轻，却值得留很久。');empty.append(htmlNode('small','',query?'换一个词再试试。':'从「留下一刻」开始。'));list.append(empty);return;}rows.forEach(m=>{const card=htmlNode('article','memory-card'+(m.pinned?' pinned':''));const time=htmlNode('time','',m.date+(m.pinned?' / 置顶':''));const footer=document.createElement('footer');footer.append(button(m.pinned?'取消置顶':'置顶',()=>{const next=memories.map(x=>x.id===m.id?{...x,pinned:!x.pinned}:x);if(persist('between-memories',next)){memories=next;draw();}}),button('移除',()=>{const next=memories.filter(x=>x.id!==m.id);if(persist('between-memories',next)){removed=m;memories=next;root.querySelector('.memory-undo').hidden=false;draw();}}));card.append(time,htmlNode('h2','',m.title),htmlNode('p','',m.body),footer);list.append(card);});};
  form.onsubmit=e=>{e.preventDefault();const title=root.querySelector('#memory-title').value.trim(),body=root.querySelector('#memory-body').value.trim(),date=root.querySelector('#memory-date').value;if(!title||!body||!date)return;const next=[...memories,{id:uid(),title,body,date,pinned:false}];if(persist('between-memories',next)){memories=next;form.reset();root.querySelector('#memory-date').value=today();form.hidden=true;status.textContent='这一刻，记住了。';draw();}};
  root.querySelector('.memory-undo').onclick=()=>{if(removed){const next=[...memories,removed];if(persist('between-memories',next)){memories=next;removed=null;root.querySelector('.memory-undo').hidden=true;draw();}}};root.querySelector('#memory-search').addEventListener('input',draw);draw();
 }
 // PHOTO ALBUM — actual locally selected photos with captions and a lightbox.
 const lightbox=document.createElement('dialog');lightbox.className='photo-dialog';lightbox.innerHTML='<div class="photo-dialog-top"><span class="photo-count"></span><button class="photo-close" aria-label="关闭照片">关闭</button></div><img class="photo-stage" alt=""><div class="photo-navigation"><button class="photo-prev">← 上一张</button><button class="photo-next">下一张 →</button></div><form class="photo-caption-form"><label for="photo-caption">给这张照片留一句话</label><input id="photo-caption" class="feature-field" maxlength="120"><div class="feature-actions"><button class="feature-button" type="submit">记住这句话</button><button class="feature-button photo-remove" type="button">移除照片</button></div></form>';document.body.append(lightbox);let photoIndex=0,albumDraw=()=>{};
 async function displayPhoto(index){if(!photos.length)return;photoIndex=(index+photos.length)%photos.length;const photo=photos[photoIndex];if(photo.src)photoUrls.set(photo.id,photo.src);if(!photoUrls.has(photo.id)){const blob=await getMedia('photo-'+photo.id);if(blob)photoUrls.set(photo.id,URL.createObjectURL(blob));}const img=lightbox.querySelector('img');img.src=photoUrls.get(photo.id)||'';img.alt=photo.caption||photo.name;lightbox.querySelector('.photo-count').textContent=`${photoIndex+1} / ${photos.length}`;lightbox.querySelector('#photo-caption').value=photo.quote||'';lightbox.querySelector('.photo-prev').disabled=photos.length<2;lightbox.querySelector('.photo-next').disabled=photos.length<2;}
 lightbox.querySelector('.photo-close').onclick=()=>lightbox.close();lightbox.querySelector('.photo-prev').onclick=()=>displayPhoto(photoIndex-1);lightbox.querySelector('.photo-next').onclick=()=>displayPhoto(photoIndex+1);lightbox.addEventListener('keydown',e=>{if(e.target.tagName==='INPUT')return;if(e.key==='ArrowRight')displayPhoto(photoIndex+1);if(e.key==='ArrowLeft')displayPhoto(photoIndex-1);});
 lightbox.querySelector('form').onsubmit=e=>{e.preventDefault();const id=photos[photoIndex]?.id;if(!id)return;const next=photos.map(p=>p.id===id?{...p,quote:lightbox.querySelector('input').value.trim(),caption:p.caption||lightbox.querySelector('input').value.trim()}:p);if(persist('between-photos',next)){photos=next;albumDraw();toast('这句话留下了。');}};
 lightbox.querySelector('.photo-remove').onclick=async()=>{const photo=photos[photoIndex];if(!photo)return;lightbox.close();if(!await confirmAction('移除这张照片？','会从此浏览器相册移除，电脑中的原文件保持不变。','移除'))return;const next=photos.filter(x=>x.id!==photo.id);try{await dbWrite('photo-'+photo.id,null);if(persist('between-photos',next)){photos=next;URL.revokeObjectURL(photoUrls.get(photo.id)||'');photoUrls.delete(photo.id);albumDraw();}}catch{toast('移除失败，请重试。');}};
 function albumRoom(root){root.innerHTML='<p class="feature-subtitle">一张照片，留住我们看见世界的方式。</p><div class="album-toolbar"><span class="album-count"></span><label for="album-files">+ 放进照片<input id="album-files" class="file-input" type="file" multiple accept="image/png,image/jpeg,image/webp"></label></div><p class="feature-status" role="status"></p><div class="album-grid"></div>';
  const grid=root.querySelector('.album-grid'),status=root.querySelector('.feature-status');
  albumDraw=async()=>{if(!root.isConnected)return;root.querySelector('.album-count').textContent=photos.length+' 张 / LOCAL ALBUM';grid.replaceChildren();if(!photos.length){grid.style.display='block';const empty=htmlNode('div','album-empty-art');grid.append(empty,htmlNode('p','feature-empty','还没有照片。把一束光、一顿饭，或一张合影放进来。'));return;}grid.style.display='grid';for(const p of photos){const b=button('',()=>{displayPhoto(photos.findIndex(x=>x.id===p.id));lightbox.showModal();},'album-item');b.setAttribute('aria-label','查看照片：'+(p.caption||p.name));const img=new Image();img.alt=p.caption||p.name;img.loading='lazy';b.append(img,htmlNode('span','',p.caption||p.name.replace(/\.[^.]+$/,'')),htmlNode('time','',dateLabel(p.date)));grid.append(b);if(p.src){img.src=p.src;photoUrls.set(p.id,p.src);}else if(photoUrls.has(p.id))img.src=photoUrls.get(p.id);else getMedia('photo-'+p.id).then(blob=>{if(blob){const url=URL.createObjectURL(blob);photoUrls.set(p.id,url);img.src=url;}else img.alt='此照片原文件已不可用';}).catch(()=>img.alt='照片读取失败');}};
  root.querySelector('#album-files').onchange=async e=>{const selected=[...e.target.files];e.target.value='';if(!selected.length)return;status.textContent='正在把照片放好…';for(const file of selected.slice(0,40-photos.length)){if(!['image/png','image/jpeg','image/webp'].includes(file.type)||file.size>15*1024*1024){status.textContent='已跳过不支持或大于 15MB 的图片。';continue;}const url=URL.createObjectURL(file),probe=new Image();probe.src=url;try{await probe.decode();const p={id:uid(),name:file.name,caption:'',date:new Date().toISOString()};await dbWrite('photo-'+p.id,file);const next=[...photos,p];if(persist('between-photos',next)){photos=next;photoUrls.set(p.id,url);}else URL.revokeObjectURL(url);}catch{URL.revokeObjectURL(url);status.textContent='部分照片保存失败，请检查本地空间。';}}status.textContent='照片仅保存在当前浏览器。最多 40 张，每张小于 15MB。';albumDraw();};albumDraw();activeCleanup=()=>{albumDraw=()=>{};};
 }
 // UNSENT LETTERS — autosaved draft and local sealed envelopes.
 const letterDialog=document.createElement('dialog');letterDialog.className='letter-read-dialog';document.body.append(letterDialog);
 function letterRoom(root){root.innerHTML='<p class="feature-subtitle">有些话，可以先不寄出。</p><div class="letter-intro"><span>UNSENT / PRIVATE</span><button id="letter-new">写一封信 ↗</button></div><form class="letter-form" hidden><p class="letter-to"></p><label class="sr-only" for="letter-title">信的标题</label><input id="letter-title" maxlength="80" placeholder="给这一封信起个名字"><label class="sr-only" for="letter-body">信的内容</label><textarea id="letter-body" maxlength="10000" placeholder="想对你说的话，慢慢写。"></textarea><div class="letter-stamp"><span class="letter-draft-status">草稿只在本机</span><button type="submit">封存这封信 ↗</button></div></form><div class="letter-list"></div><p class="feature-status" role="status"></p>';
  const form=root.querySelector('form'),list=root.querySelector('.letter-list');let draft=read('between-letter-draft',{title:'',body:''});root.querySelector('.letter-to').textContent='To '+prefs.partnerName;root.querySelector('#letter-title').value=draft.title||'';root.querySelector('#letter-body').value=draft.body||'';if(draft.body||draft.title)form.hidden=false;
  const showLetter=letter=>{letterDialog.replaceChildren();letterDialog.append(htmlNode('p','feature-label',dateLabel(letter.date)+' / 仅在本机封存'),htmlNode('h2','',letter.title),htmlNode('p','letter-read-body',letter.body));const actions=htmlNode('div','feature-actions');actions.append(button('导出这封信',()=>downloadLocal(letter.title+'.txt',letter.title+'\n\n'+letter.body,'text/plain;charset=utf-8')),button('合上',()=>letterDialog.close()));letterDialog.append(actions,button('移除这封信',async()=>{letterDialog.close();if(!await confirmAction('移除这封信？','会从本机移除这封已封存的信。建议先导出需要保留的内容。','移除'))return;const next=letters.filter(x=>x.id!==letter.id);if(persist('between-letters',next)){letters=next;draw();toast('已移除这封信。');}}));letterDialog.showModal();};
  const draw=()=>{list.replaceChildren();if(!letters.length)list.append(htmlNode('p','feature-empty','暂时没有封存的信。写下来，也是一种靠近。'));[...letters].reverse().forEach(l=>{const b=button('',()=>showLetter(l),'sealed-letter');b.append(htmlNode('strong','',l.title),htmlNode('span','',dateLabel(l.date)+' / 给 '+l.to+' / 已封存于本机'));list.append(b);});};
  root.querySelector('#letter-new').onclick=()=>{form.hidden=false;root.querySelector('#letter-body').focus();};
  const saveDraft=()=>{const next={title:root.querySelector('#letter-title').value,body:root.querySelector('#letter-body').value};if(persist('between-letter-draft',next))root.querySelector('.letter-draft-status').textContent='草稿已保存';};root.querySelector('#letter-title').addEventListener('input',saveDraft);root.querySelector('#letter-body').addEventListener('input',saveDraft);
  form.onsubmit=e=>{e.preventDefault();const body=root.querySelector('#letter-body').value.trim(),title=root.querySelector('#letter-title').value.trim()||'一封未寄出的信';if(!body){root.querySelector('#letter-body').focus();return;}const next=[...letters,{id:uid(),title,body,to:prefs.partnerName,date:new Date().toISOString()}];if(persist('between-letters',next)){letters=next;localStorage.removeItem('between-letter-draft');form.reset();form.hidden=true;root.querySelector('.feature-status').textContent='已封存于本机，没有发送给任何人。';draw();}};draw();
 }
 // Shared backup hook: photo/audio files remain local and are explicitly excluded.
 window.betweenFeatures={exportData:()=>({memories,letters,letterDraft:read('between-letter-draft',{title:'',body:''})}),validate(raw){if(!raw||!Array.isArray(raw.memories)||!Array.isArray(raw.letters)||raw.memories.length>5000||raw.letters.length>5000)throw new Error('片段备份无效');const ms=raw.memories.map(m=>{if(!m||typeof m.id!=='string'||typeof m.title!=='string'||m.title.length>60||typeof m.body!=='string'||m.body.length>2000||!/^\d{4}-\d{2}-\d{2}$/.test(m.date))throw new Error('记忆备份无效');return {id:m.id.slice(0,100),title:m.title,body:m.body,date:m.date,pinned:m.pinned===true};});const ls=raw.letters.map(l=>{if(!l||typeof l.id!=='string'||typeof l.title!=='string'||l.title.length>80||typeof l.body!=='string'||l.body.length>10000||Number.isNaN(Date.parse(l.date)))throw new Error('信件备份无效');return {id:l.id.slice(0,100),title:l.title,body:l.body,date:new Date(l.date).toISOString(),to:typeof l.to==='string'?l.to.slice(0,24):'你'};});return {memories:ms,letters:ls};},restore(raw){const data=this.validate(raw),mi=new Set(memories.map(x=>x.id)),li=new Set(letters.map(x=>x.id));const ms=[...memories,...data.memories.filter(x=>!mi.has(x.id))],ls=[...letters,...data.letters.filter(x=>!li.has(x.id))];if(!persist('between-memories',ms)||!persist('between-letters',ls))throw new Error('部分片段保存失败，请检查本地空间');memories=ms;letters=ls;}};
 window.addEventListener('between:prefs',()=>{if(!motionAllowed())scene.querySelectorAll('.music-disc').forEach(el=>gsap.killTweensOf(el));});
 window.addEventListener('pagehide',()=>{musicPause();cleanupTransition();photoUrls.forEach(URL.revokeObjectURL);if(localMusic)URL.revokeObjectURL(localMusic.url);});
 // Tint only the dark anatomical strokes revealed inside the opening, not the outer torso.
 const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.classList.add('motion-svg-defs');svg.innerHTML='<defs><filter id="bone-blue-ink" color-interpolation-filters="sRGB"><feColorMatrix type="matrix" values="0 0 0 0 .094 0 0 0 0 .204 0 0 0 0 .831 -.2126 -.7152 -.0722 0 1"/><feComposite in2="SourceAlpha" operator="in"/></filter></defs>';document.body.prepend(svg);
 const back=$('[data-art="within"]');if(back){const tint=document.createElement('div');tint.className='within-pigment';tint.innerHTML='<svg viewBox="0 0 1254 1254" aria-hidden="true"><image href="assets/back-open.png" width="1254" height="1254" filter="url(#bone-blue-ink)"/></svg>';back.append(tint);}
 if(location.hash.startsWith('#piece-')&&room[location.hash.slice(7)])commitRoom(location.hash.slice(7));
})();
