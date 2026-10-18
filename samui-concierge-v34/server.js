const fs=require('fs'),path=require('path'),https=require('https'),express=require('express');
const envPath=path.join(__dirname,'.env');try{fs.readFileSync(envPath,'utf8').split(/\r?\n/).forEach(line=>{const m=line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$/);if(m&&!process.env[m[1]])process.env[m[1]]=m[2].replace(/^("|')(.*)\1$/,'$2')})}catch{}
const app=express(),ROOT=__dirname,PORT=process.env.PORT||3000,SITE_URL=String(process.env.SITE_URL||'http://localhost:'+PORT).replace(/\/$/,''),STORE=path.join(ROOT,'data/store.json'),SERVICES=path.join(ROOT,'data/services.json');
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));const write=(p,v)=>fs.writeFileSync(p,JSON.stringify(v,null,2));
app.set('trust proxy',Number(process.env.TRUST_PROXY??1));
app.use(express.json({limit:'4mb'}));
const seoPages={
 '/restaurants-koh-samui':{title:'Restaurants in Koh Samui | Samui Concierge',desc:'Discover and request restaurant reservations in Koh Samui through Samui Concierge. Choose from approved local dining partners and let us coordinate your table.',h1:'Restaurants in Koh Samui',eyebrow:'DINING · KOH SAMUI',copy:'From beachfront dinners to refined Thai cuisine, Samui Concierge coordinates restaurant reservation requests with trusted local partners. Choose a restaurant, tell us your date, time and party size, and we handle the coordination.',service:'Restaurants'},
 '/boat-charter-koh-samui':{title:'Private Boat & Yacht Charters in Koh Samui | Samui Concierge',desc:'Request private boat charters, sunset cruises, snorkeling trips and island outings in Koh Samui with Samui Concierge.',h1:'Private Boat Charters in Koh Samui',eyebrow:'SEA · KOH SAMUI',copy:'Plan a private day on the water around Koh Samui. Tell us your preferred date, group size, duration and boat style, and we coordinate the request with the appropriate local partner.',service:'Boat Trips & Charters'},
 '/villas-koh-samui':{title:'Private Villas in Koh Samui | Samui Concierge',desc:'Find private villas in Koh Samui and send a stay request through Samui Concierge. Share your dates, guests and preferences and we coordinate with available villa partners.',h1:'Private Villas in Koh Samui',eyebrow:'STAYS · KOH SAMUI',copy:'Looking for a private pool villa, beachfront stay or family villa in Koh Samui? Send your dates and requirements and Samui Concierge can coordinate with available villa partners.',service:'Villas & Private Stays'},
 '/motorbike-rental-koh-samui':{title:'Motorbike Rental in Koh Samui | Samui Concierge',desc:'Request scooter and motorbike rental in Koh Samui. Samui Concierge coordinates availability, rental duration, delivery and pickup with local partners.',h1:'Motorbike Rental in Koh Samui',eyebrow:'TRANSPORT · KOH SAMUI',copy:'Need a scooter or motorbike during your stay? Tell us your dates, preferred class, quantity and delivery area. We coordinate the rental request with a local partner.',service:'Motorbike Rental'},
 '/airport-transfer-koh-samui':{title:'Koh Samui Airport Transfers | Samui Concierge',desc:'Arrange private airport transfers in Koh Samui with Samui Concierge. Share your flight, passengers, pickup and destination and we coordinate the transfer.',h1:'Koh Samui Airport Transfers',eyebrow:'ARRIVAL · KOH SAMUI',copy:'Start your island stay smoothly. Send your flight number, arrival time, passenger count and destination, and Samui Concierge coordinates your private airport transfer request.',service:'Airport & Ferry Transfers'},
 '/hair-salon-koh-samui':{title:'Hair Salons in Koh Samui | Samui Concierge',desc:'Request appointments with hair salons and beauty partners in Koh Samui through Samui Concierge.',h1:'Hair Salons in Koh Samui',eyebrow:'BEAUTY · KOH SAMUI',copy:'Find a local salon and request an appointment for a cut, styling, colour or beauty service. Samui Concierge coordinates the request with the selected partner.',service:'Beauty & Nail Salons'},
 '/private-driver-koh-samui':{title:'Private Driver in Koh Samui | Samui Concierge',desc:'Arrange a private driver in Koh Samui for transfers, sightseeing and custom island itineraries through Samui Concierge.',h1:'Private Driver in Koh Samui',eyebrow:'TRANSPORT · KOH SAMUI',copy:'For airport transfers, island days or custom itineraries, tell us your timing, passengers, pickup and route. We coordinate with an appropriate private driver partner.',service:'Taxi & Private Transfers'},
 '/laundry-koh-samui':{title:'Laundry Service in Koh Samui | Samui Concierge',desc:'Request laundry and garment care services in Koh Samui through Samui Concierge. We coordinate pickup, service and return with local partners.',h1:'Laundry Service in Koh Samui',eyebrow:'LOCAL SERVICES · KOH SAMUI',copy:'Need laundry while you are on the island? Send your location and requirements and Samui Concierge coordinates the service with a local partner.',service:'Home, Villa & Concierge Services'}
};
function seoHtml(page){const url=SITE_URL+Object.keys(seoPages).find(k=>seoPages[k]===page);const safe=s=>String(s).replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\\':'&#92;','"':'&quot;'}[c]));return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${safe(page.title)}</title><meta name="description" content="${safe(page.desc)}"><meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"><link rel="canonical" href="${safe(url)}"><meta property="og:type" content="website"><meta property="og:title" content="${safe(page.title)}"><meta property="og:description" content="${safe(page.desc)}"><meta property="og:url" content="${safe(url)}"><meta property="og:image" content="${safe(SITE_URL+'/logo-approved-exact.png')}"><style>body{margin:0;background:#06191d;color:#f7f4ed;font-family:Arial,sans-serif}main{max-width:900px;margin:auto;padding:80px 24px}p{line-height:1.7;color:#c9c8c0}a{color:#d7b66b}nav{display:flex;justify-content:space-between;gap:20px;align-items:center;margin-bottom:80px}h1{font-size:clamp(42px,7vw,78px);line-height:.95;font-weight:500} .ey{letter-spacing:.18em;color:#d7b66b;font-size:12px} .cta{display:inline-block;border:1px solid #d7b66b;padding:15px 22px;text-decoration:none;margin-top:20px}</style><script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@type':'Service','name':page.service,'serviceType':page.service,'description':page.desc,'areaServed':{'@type':'Place','name':'Koh Samui, Thailand'},'provider':{'@type':'Organization','name':'Samui Concierge','url':SITE_URL}})}</script></head><body><main><nav><a href="/"><strong>SAMUI CONCIERGE</strong></a><a href="/partner-apply.html">Become a Partner</a></nav><div class="ey">${safe(page.eyebrow)}</div><h1>${safe(page.h1)}</h1><p>${safe(page.copy)}</p><p>Choose the service you need and send a request. Where a local partner is involved, we coordinate the details for you.</p><a class="cta" href="/?service=${encodeURIComponent(page.service)}#request">REQUEST ${safe(page.service)} →</a><p><a href="/">Explore all Samui Concierge services</a></p></main></body></html>`}
Object.entries(seoPages).forEach(([route,page])=>app.get(route,(_req,res)=>res.type('html').send(seoHtml(page))));
function slugify(v){return String(v||'').toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'').slice(0,80)}
function partnerSlug(p){return slugify(p.name)+'-koh-samui'}
function partnerSeoHtml(p){
 const slug=partnerSlug(p),url=SITE_URL+'/business/'+slug;
 const safe=s=>String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const desc=(p.description||('Discover '+p.name+' in Koh Samui with Samui Concierge.')).slice(0,155);
 const image=p.image||SITE_URL+'/logo-approved-exact.png';
 const schema={'@context':'https://schema.org','@type':'LocalBusiness','name':p.name,'description':p.description||'','url':url,'image':image,'areaServed':{'@type':'Place','name':p.base_zone||'Koh Samui, Thailand'},'address':{'@type':'PostalAddress','addressLocality':p.base_zone||'Koh Samui','addressCountry':'TH'}};
 return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${safe(p.name)} in Koh Samui | Samui Concierge</title><meta name="description" content="${safe(desc)}"><meta name="robots" content="index,follow,max-image-preview:large"><link rel="canonical" href="${safe(url)}"><meta property="og:type" content="business.business"><meta property="og:title" content="${safe(p.name)} in Koh Samui | Samui Concierge"><meta property="og:description" content="${safe(desc)}"><meta property="og:url" content="${safe(url)}"><meta property="og:image" content="${safe(image)}"><style>body{margin:0;background:#06191d;color:#f7f4ed;font-family:Arial,sans-serif}main{max-width:980px;margin:auto;padding:70px 24px}a{color:#d7b66b}.ey{letter-spacing:.18em;color:#d7b66b;font-size:12px}h1{font-size:clamp(42px,7vw,78px);line-height:.95;font-weight:500}p{line-height:1.7;color:#c9c8c0}.heroimg{width:100%;max-height:520px;object-fit:cover;border-radius:12px;margin:28px 0}.tag{display:inline-block;border:1px solid #ffffff20;padding:8px 12px;margin:4px;color:#ddd}.cta{display:inline-block;border:1px solid #d7b66b;padding:15px 22px;text-decoration:none;margin-top:20px}</style><script type="application/ld+json">${JSON.stringify(schema)}</script></head><body><main><nav><a href="/"><strong>SAMUI CONCIERGE</strong></a> · <a href="/partner-apply.html">Add your business</a></nav><div class="ey">${safe(p.category||'LOCAL BUSINESS')} · KOH SAMUI</div><h1>${safe(p.name)}</h1>${p.image?`<img class="heroimg" src="${safe(p.image)}" alt="${safe(p.name)} in Koh Samui">`:''}<p>${safe(p.description||'A local business listed on Samui Concierge.')}</p><p>${(p.services||[p.service]).filter(Boolean).map(x=>`<span class="tag">${safe(x)}</span>`).join('')}</p><p><strong>Location:</strong> ${safe(p.base_zone||'Koh Samui, Thailand')}</p>${p.telegram?`<p><a class="cta" href="https://t.me/${encodeURIComponent(String(p.telegram).replace(/^@/,''))}" target="_blank" rel="noopener">CONTACT THIS BUSINESS →</a></p>`:''}<a class="cta" href="/?service=${encodeURIComponent(p.service||'')}#request">REQUEST THIS SERVICE →</a><p><a href="/partners.html?service=${encodeURIComponent(p.service||'')}">Browse more ${safe(p.category||'local')} businesses</a></p></main></body></html>`
}
app.get('/business/:slug',(req,res)=>{const p=read(STORE).partners.find(x=>x.active!==false&&partnerSlug(x)===req.params.slug);if(!p)return res.status(404).sendFile(path.join(ROOT,'public','404.html'));res.type('html').send(partnerSeoHtml(p))});

app.get('/sitemap.xml',(_req,res)=>{const urls=['/'].concat(Object.keys(seoPages),['/partner-apply.html'],read(STORE).partners.filter(x=>x.active!==false).map(x=>'/business/'+partnerSlug(x))).map(p=>`<url><loc>${SITE_URL}${p}</loc><changefreq>${p==='/'?'weekly':'monthly'}</changefreq><priority>${p==='/'?'1.0':'0.8'}</priority></url>`).join('');res.type('application/xml').send(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`)})
app.get('/robots.txt',(_req,res)=>res.type('text/plain').send(`User-agent: *\nAllow: /\nDisallow: /admin-dashboard.html\nDisallow: /api/\nDisallow: /data/\nDisallow: /.env\nSitemap: ${SITE_URL}/sitemap.xml\n`));
app.use((req,_res,next)=>{const raw=req.headers.cookie||'';req.cookies={};raw.split(';').forEach(part=>{const i=part.indexOf('=');if(i>0)req.cookies[part.slice(0,i).trim()]=decodeURIComponent(part.slice(i+1).trim())});next()});app.use(express.static(path.join(ROOT,'public'),{maxAge:0}));
const adminPassword=String(process.env.ADMIN_PASSWORD||'').trim();
const adminTokens=new Set();
function adminOnly(req,res,next){const token=String(req.headers['x-admin-token']||req.cookies?.sc_admin||'');if(token&&adminTokens.has(token))return next();return res.status(401).json({error:'Admin authentication required.'})}
function telegram(text){const token=String(process.env.TELEGRAM_BOT_TOKEN||'').trim(),chat=String(process.env.TELEGRAM_CHAT_ID||'').trim();if(!token||!chat)return Promise.resolve({ok:false,error_code:0,description:'Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID in .env'});return new Promise(resolve=>{const body=JSON.stringify({chat_id:chat,text});const req=https.request({hostname:'api.telegram.org',path:`/bot${token}/sendMessage`,method:'POST',headers:{'Content-Type':'application/json','Content-Length':Buffer.byteLength(body)},timeout:10000},res=>{let out='';res.setEncoding('utf8');res.on('data',c=>out+=c);res.on('end',()=>{try{const j=JSON.parse(out);resolve({ok:res.statusCode===200&&j.ok===true,error_code:j.error_code||0,description:j.description||'',result:j.result||null})}catch{resolve({ok:false,error_code:res.statusCode||0,description:'Telegram returned an invalid response'})}})});req.on('timeout',()=>{req.destroy();resolve({ok:false,error_code:0,description:'Telegram request timed out'})});req.on('error',e=>resolve({ok:false,error_code:0,description:`Telegram connection error: ${e.message}`}));req.write(body);req.end()})}
function telegramMe(){const token=String(process.env.TELEGRAM_BOT_TOKEN||'').trim();if(!token)return Promise.resolve({ok:false,description:'Missing TELEGRAM_BOT_TOKEN'});return new Promise(resolve=>{const req=https.get({hostname:'api.telegram.org',path:`/bot${token}/getMe`,timeout:10000},res=>{let body='';res.setEncoding('utf8');res.on('data',c=>body+=c);res.on('end',()=>{try{resolve(JSON.parse(body))}catch{resolve({ok:false,description:'Invalid Telegram response'})}})});req.on('timeout',()=>{req.destroy();resolve({ok:false,description:'Telegram getMe timed out'})});req.on('error',e=>resolve({ok:false,description:e.message}));
})}

// ================= TELEGRAM — PARTNER APPLICATIONS (notify + OUI/NON approval) =================
const crypto=require('crypto');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const rateHits=new Map();
function limited(key,max,windowMs){const now=Date.now(),arr=(rateHits.get(key)||[]).filter(t=>now-t<windowMs);if(arr.length>=max){rateHits.set(key,arr);return true}arr.push(now);rateHits.set(key,arr);return false}
setInterval(()=>{const now=Date.now();for(const[k,v]of rateHits){if(!v.some(t=>now-t<3600000))rateHits.delete(k)}},600000).unref();
function tgApi(method,payload){const token=String(process.env.TELEGRAM_BOT_TOKEN||'').trim();if(!token)return Promise.resolve({ok:false,description:'Missing TELEGRAM_BOT_TOKEN'});return new Promise(resolve=>{const body=JSON.stringify(payload||{});const req=https.request({hostname:'api.telegram.org',path:`/bot${token}/${method}`,method:'POST',headers:{'Content-Type':'application/json','Content-Length':Buffer.byteLength(body)},timeout:method==='getUpdates'?45000:15000},res=>{let out='';res.setEncoding('utf8');res.on('data',c=>out+=c);res.on('end',()=>{try{const j=JSON.parse(out);resolve({ok:j.ok===true,result:j.result,description:j.description||'',error_code:j.error_code||0})}catch{resolve({ok:false,description:'Invalid Telegram response'})}})});req.on('timeout',()=>{req.destroy();resolve({ok:false,description:'Telegram timeout'})});req.on('error',e=>resolve({ok:false,description:e.message}));req.write(body);req.end()})}
const ownerChat=()=>String(process.env.TELEGRAM_CHAT_ID||'').trim();
function decideApplication(id,action){
  const s=read(STORE),a=(s.partner_applications||[]).find(x=>x.id===id);
  if(!a)return{ok:false,code:404,error:'Application not found'};
  if(a.status!=='pending')return{ok:false,code:409,error:'Already '+a.status,application:a};
  if(action==='reject'){a.status='rejected';a.decided_at=new Date().toISOString();write(STORE,s);return{ok:true,application:a}}
  if(action==='approve'){
    const pid=Math.max(0,...s.partners.map(x=>Number(x.id)||0))+1;
    const p={id:pid,name:a.business_name,category:a.category,service:a.services[0]||'',services:a.services.slice(1),description:a.description,image:a.images[0]||'',images:a.images.slice(1,2),base_zone:a.location,zones:[],telegram:a.telegram,price_from:0,commission_type:'percentage',commission_value:0,active:true,booking_fields:[]};
    s.partners.push(p);a.status='approved';a.approved_partner_id=pid;a.decided_at=new Date().toISOString();write(STORE,s);return{ok:true,application:a,partner:p}
  }
  return{ok:false,code:400,error:'Use action approve or reject.'}
}
function applicationMessage(a){
  const L=['🆕 NOUVELLE INSCRIPTION PARTENAIRE','ID : '+a.id,'','🏢 Nom : '+a.business_name,'📱 Telegram : '+a.telegram,'📍 Zone : '+a.location,'','🛎 Services ('+a.services.length+') :',...a.services.map(x=>'• '+x)];
  if(a.description)L.push('','📝 Description :',a.description);
  if(a.notes)L.push('','🗒 Notes :',a.notes);
  if(a.images&&a.images.length)L.push('','🖼 Photos :',...a.images);
  L.push('','🕒 Reçu : '+a.created_at,'','👉 Répondez OUI pour publier ce partenaire sur la conciergerie, ou NON pour le refuser (ou utilisez les boutons ci-dessous).');
  return L.join('\n').slice(0,4000)
}
async function notifyApplication(a){
  const chat=ownerChat();if(!chat||!process.env.TELEGRAM_BOT_TOKEN)return{ok:false,description:'Telegram not configured'};
  return tgApi('sendMessage',{chat_id:chat,text:applicationMessage(a),reply_markup:{inline_keyboard:[[{text:'✅ OUI — publier',callback_data:'ap:'+a.id},{text:'❌ NON — refuser',callback_data:'rj:'+a.id}]]}})
}
const say=text=>tgApi('sendMessage',{chat_id:ownerChat(),text});
function resultText(r,action){
  if(r.ok&&action==='approve')return `✅ PUBLIÉ : ${r.partner.name} est maintenant visible sur Samui Concierge.\nPage : ${SITE_URL}/business/${partnerSlug(r.partner)}`;
  if(r.ok)return `❌ REFUSÉ : ${r.application.business_name} n'a pas été ajouté.`;
  if(r.code===409)return `ℹ️ ${r.application.business_name} a déjà été traité (${r.application.status}).`;
  return '⚠️ '+(r.error||'Erreur')
}
function pendingList(){return(read(STORE).partner_applications||[]).filter(x=>x.status==='pending')}
async function handleUpdate(u){
  const chat=ownerChat();
  if(u.callback_query){
    const cq=u.callback_query;
    if(String(cq.message?.chat?.id)!==chat||String(cq.from?.id)!==chat){await tgApi('answerCallbackQuery',{callback_query_id:cq.id});return}
    const[k,id]=String(cq.data||'').split(':');const action=k==='ap'?'approve':k==='rj'?'reject':null;
    if(!action||!id){await tgApi('answerCallbackQuery',{callback_query_id:cq.id});return}
    const r=decideApplication(id,action);
    await tgApi('answerCallbackQuery',{callback_query_id:cq.id,text:r.ok?(action==='approve'?'Publié ✅':'Refusé ❌'):(r.error||'Erreur')});
    if(r.ok||r.code===409)await tgApi('editMessageReplyMarkup',{chat_id:chat,message_id:cq.message.message_id,reply_markup:{inline_keyboard:[]}});
    await say(resultText(r,action));return
  }
  const m=u.message;if(!m||!m.text||String(m.chat?.id)!==chat||String(m.from?.id)!==chat)return;
  const t=m.text.trim();
  if(/^\/(start|help)\b/i.test(t)){await say('Bot Samui Concierge ✅\nVous recevrez ici les nouvelles inscriptions partenaires.\nRépondez OUI ou NON (en répondant au message de l\'inscription), ou « OUI PA-XXXX ».\n/attente = liste des inscriptions en attente.');return}
  if(/^\/(attente|pending)\b/i.test(t)){const p=pendingList();await say(p.length?'⏳ En attente :\n'+p.map(x=>`• ${x.id} — ${x.business_name} (${x.telegram})`).join('\n'):'Aucune inscription en attente.');return}
  const mm=t.match(/^(oui|yes|ok|o|y|✅|non|no|n|❌)(?:\s+(PA-[A-Z0-9]+))?\s*[.!]*$/i);if(!mm)return;
  const yes=/^(oui|yes|ok|o|y|✅)$/i.test(mm[1]),action=yes?'approve':'reject';
  let target=null;
  if(mm[2])target=mm[2].toUpperCase();
  else if(m.reply_to_message){const a=(read(STORE).partner_applications||[]).find(x=>x.tg_message_id===m.reply_to_message.message_id);if(a)target=a.id}
  if(!target){const p=pendingList();
    if(p.length===1)target=p[0].id;
    else if(!p.length){await say('Aucune inscription en attente.');return}
    else{await say('Plusieurs inscriptions en attente. Répondez directement au message de l\'inscription, ou écrivez « '+(yes?'OUI':'NON')+' PA-XXXX » :\n'+p.map(x=>`• ${x.id} — ${x.business_name}`).join('\n'));return}}
  await say(resultText(decideApplication(target,action),action))
}
const OFFSET_FILE=path.join(ROOT,'data','tg-offset.json');
async function pollTelegram(){
  if(!process.env.TELEGRAM_BOT_TOKEN||!ownerChat()){console.log('Telegram polling disabled (missing TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID)');return}
  let offset=0;try{offset=Number(read(OFFSET_FILE).offset)||0}catch{}
  await tgApi('deleteWebhook',{});
  console.log('Telegram approval bot listening (OUI/NON)');
  for(;;){
    const r=await tgApi('getUpdates',{offset,timeout:30,allowed_updates:['message','callback_query']});
    if(!r.ok){if(r.error_code===409)console.error('Telegram 409: another process is using this bot token (stop it, or use a different bot for local tests).');await sleep(5000);continue}
    for(const u of r.result||[]){offset=u.update_id+1;try{write(OFFSET_FILE,{offset})}catch{}try{await handleUpdate(u)}catch(e){console.error('handleUpdate',e.message)}}
  }
}
const flowMap={
  'Restaurant Booking':'restaurant','Restaurants':'restaurant','Villa Search':'villa','Villas & Private Stays':'villa','Private Yacht':'boat','Sunset Cruise':'boat','Snorkeling':'boat','Fishing':'boat','Boat Transfer':'boat','Boat Trips & Charters':'boat','Fishing Trips':'boat','Diving & Snorkeling':'boat','Scooter Rental':'motorbike','Motorbike Rental':'motorbike','Car Rental':'car','Private Van':'van','Taxi & Private Transfers':'van','Airport Transfer':'airport','Airport & Ferry Transfers':'airport','Private Driver':'driver','Hair Salon':'salon','Beauty & Nail Salons':'salon'
};
const presets={
 restaurant:[['date','Date','date',true],['time','Preferred time','time',true],['guests','Guests','number',true],['seating','Seating preference','select',false,['Indoor','Terrace','Beachfront','No preference']],['occasion','Occasion','text',false],['dietary','Dietary requirements','text',false]],
 villa:[['check_in','Check-in','date',true],['check_out','Check-out','date',true],['guests','Guests','number',true],['bedrooms','Bedrooms','number',false],['budget','Budget / night (THB)','number',false],['villa_type','Villa type','select',false,['Private pool','Beachfront','Family','Luxury','No preference']]],
 boat:[['date','Date','date',true],['time','Departure time','time',true],['guests','Guests','number',true],['duration','Duration','select',true,['Half day','Full day','Sunset','Custom']],['boat_size','Boat / group size','select',true,['Speedboat','Private yacht','Longtail boat','Catamaran','No preference']],['pickup','Pickup location','text',false],['trip_style','Trip style','text',false]],
 motorbike:[['date','Start date','date',true],['duration','Rental duration','select',true,['1 day','2–3 days','4–7 days','1–2 weeks','1 month']],['bike_class','Bike / class','select',true,['Scooter 110–125cc','Scooter 150–160cc','Premium scooter','Motorbike','No preference']],['quantity','Quantity','number',true],['delivery','Delivery / pickup area','text',false],['helmet','Helmets','select',false,['1','2','3','4+']],['license','Rider notes','text',false]],
 car:[['date','Start date','date',true],['duration','Rental duration','select',true,['1 day','2–3 days','4–7 days','1–2 weeks','1 month']],['vehicle','Vehicle preference','text',true],['quantity','Quantity','number',true],['delivery','Delivery / pickup area','text',false]],
 van:[['date','Date','date',true],['time','Pickup time','time',true],['guests','Passengers','number',true],['pickup','Pickup location','text',true],['dropoff','Drop-off location','text',true],['luggage','Luggage','text',false]],
 airport:[['arrival_date','Arrival date','date',true],['arrival_time','Arrival time','time',true],['flight','Flight number','text',true],['passengers','Passengers','number',true],['pickup','Pickup location','text',true],['dropoff','Destination / villa','text',true],['luggage','Luggage','text',false]],
 salon:[['date','Appointment date','date',true],['time','Preferred time','time',true],['service','Salon service','select',true,['Cut','Color','Styling','Manicure / Pedicure','Other']],['guests','People','number',true]],
 driver:[['date','Date','date',true],['time','Start time','time',true],['duration','Duration','text',true],['passengers','Passengers','number',true],['pickup','Pickup location','text',true],['stops','Stops / itinerary','text',false]]
};
function flowFor(service){return flowMap[service]||'partner';}
function fieldsFor(partner,service){return partner?.booking_fields?.length?partner.booking_fields:presets[flowFor(service)]||[['date','Date','date',true],['time','Preferred time','time',false],['guests','Guests','number',false]]}
app.get('/api/services',(q,r)=>r.json(read(SERVICES)));
app.get('/api/partners',(q,r)=>{const s=read(STORE);const category=q.query.category,service=q.query.service;let p=s.partners.filter(x=>x.active!==false);if(category)p=p.filter(x=>x.category===category);if(service)p=p.filter(x=>[x.service,...(x.services||[])].includes(service));r.json(p.map(({whatsapp,_whatsapp,contact_name,email,instagram,website,...publicPartner})=>publicPartner))});
app.get('/api/partner-fields',(q,r)=>r.json(fieldsFor(null,q.query.service||'')));
app.get('/api/bookings',adminOnly,(q,r)=>r.json(read(STORE).bookings.slice().reverse()));
app.get('/api/commission-summary',adminOnly,(q,r)=>{const s=read(STORE),earned=s.bookings.reduce((n,b)=>n+Number(b.commission_due||0),0),paid=s.payments.reduce((n,p)=>n+Number(p.amount||0),0);r.json({requests:s.bookings.length,earned,paid,pending:Math.max(0,earned-paid)})});
app.get('/api/telegram-status',adminOnly,async(q,r)=>{const me=await telegramMe();r.json({configured:!!process.env.TELEGRAM_BOT_TOKEN&&!!process.env.TELEGRAM_CHAT_ID,chat_id:process.env.TELEGRAM_CHAT_ID||'',bot_ok:!!me.ok,bot_username:me.result?.username||'',error:me.ok?'':(me.description||'Telegram unavailable')})});
app.get('/api/telegram-test',adminOnly,async(q,r)=>{const t=await telegram('✅ SAMUI CONCIERGE — Telegram connection test\nYour operations channel is ready.');r.status(t.ok?200:502).json(t)});
app.post('/api/admin/login',(q,r)=>{if(!adminPassword)return r.status(503).json({ok:false,error:'ADMIN_PASSWORD is not configured in .env'});if(limited('login:'+q.ip,10,900000))return r.status(429).json({ok:false,error:'Too many attempts. Try again in 15 minutes.'});const h=v=>crypto.createHash('sha256').update(String(v)).digest();if(!crypto.timingSafeEqual(h(q.body?.password||''),h(adminPassword)))return r.status(401).json({ok:false,error:'Invalid admin password'});const token=crypto.randomBytes(32).toString('hex');adminTokens.add(token);r.setHeader('Set-Cookie',`sc_admin=${token}; HttpOnly; SameSite=Strict; Path=/; Max-Age=28800${SITE_URL.startsWith('https')?'; Secure':''}`);r.json({ok:true})});
app.post('/api/admin/logout',adminOnly,(q,r)=>{const token=String(q.headers['x-admin-token']||q.cookies?.sc_admin||'');adminTokens.delete(token);r.setHeader('Set-Cookie','sc_admin=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0');r.json({ok:true})});
app.get('/api/admin/me',adminOnly,(q,r)=>r.json({ok:true}));
app.get('/api/partner-applications',adminOnly,(q,r)=>r.json(read(STORE).partner_applications.slice().reverse()));
app.post('/api/partner-applications',async(q,r)=>{try{
  if(limited('apply:'+q.ip,5,3600000))return r.status(429).json({ok:false,error:'Too many applications from this connection. Please try again later.'});
  const b=q.body||{},known=new Set(read(SERVICES).map(x=>x.name));
  const clip=(v,n)=>String(v??'').trim().slice(0,n);
  const services=(Array.isArray(b.services)?b.services:[]).map(x=>String(x)).filter(x=>known.has(x)).slice(0,32);
  const business_name=clip(b.business_name,120),telegramHandle=clip(b.telegram,64);
  if(!business_name||!telegramHandle||!services.length)return r.status(400).json({ok:false,error:'Business name, Telegram and at least one service are required.'});
  const s=read(STORE);s.partner_applications=s.partner_applications||[];
  if(s.partner_applications.filter(x=>x.status==='pending').length>=100)return r.status(503).json({ok:false,error:'Applications are temporarily closed. Please try again later.'});
  const images=(Array.isArray(b.images)?b.images:[]).map(x=>String(x).trim()).filter(x=>/^https?:\/\/[^\s]{3,480}$/i.test(x)).slice(0,2);
  const a={id:'PA-'+Date.now().toString(36).toUpperCase(),status:'pending',created_at:new Date().toISOString(),business_name,telegram:telegramHandle,category:'Services',services,description:clip(b.description,1500),location:clip(b.location||'Koh Samui',120),images,notes:clip(b.notes,1000)};
  s.partner_applications.push(a);write(STORE,s);
  const tg=await notifyApplication(a);
  if(tg.ok){const s2=read(STORE),a2=s2.partner_applications.find(x=>x.id===a.id);if(a2){a2.tg_message_id=tg.result.message_id;a2.telegram_notified=true;write(STORE,s2)}}else console.error('Telegram notification failed for',a.id,'-',tg.description);
  r.status(201).json({ok:true,id:a.id,status:a.status})}catch(e){console.error(e);r.status(500).json({ok:false,error:'Server error'})}});
app.patch('/api/partner-applications/:id',adminOnly,(q,r)=>{const res=decideApplication(q.params.id,q.body?.action);if(!res.ok)return r.status(res.code||400).json({error:res.error});r.json(res.partner?{application:res.application,partner:res.partner}:res.application)});
app.post('/api/partners',adminOnly,(q,r)=>{const s=read(STORE),b=q.body||{};if(!b.name||!b.category||!b.service)return r.status(400).json({error:'name, category and service are required'});const p={id:Math.max(0,...s.partners.map(x=>Number(x.id)||0))+1,name:String(b.name).trim(),category:String(b.category),service:String(b.service),services:Array.isArray(b.services)?b.services:[],description:String(b.description||''),image:String(b.image||''),images:Array.isArray(b.images)?b.images.filter(Boolean).slice(0,6):[],base_zone:String(b.base_zone||'Koh Samui'),zones:Array.isArray(b.zones)?b.zones:[],telegram:String(b.telegram||''),price_from:Number(b.price_from||0),commission_type:String(b.commission_type||'percentage'),commission_value:Number(b.commission_value||0),active:b.active!==false,booking_fields:Array.isArray(b.booking_fields)?b.booking_fields:[]};s.partners.push(p);write(STORE,s);r.status(201).json(p)});
app.patch('/api/partners/:id',adminOnly,(q,r)=>{const s=read(STORE),p=s.partners.find(x=>String(x.id)===String(q.params.id));if(!p)return r.status(404).json({error:'Partner not found'});Object.assign(p,q.body||{});write(STORE,s);r.json(p)});
app.delete('/api/partners/:id',adminOnly,(q,r)=>{const s=read(STORE),i=s.partners.findIndex(x=>String(x.id)===String(q.params.id));if(i<0)return r.status(404).json({error:'Partner not found'});s.partners[i].active=false;write(STORE,s);r.json({ok:true})});
app.get('/api/admin/partners',adminOnly,(_q,r)=>{const s=read(STORE);r.json(s.partners)});
app.post('/api/bookings',async(q,r)=>{try{const b=q.body||{};if(!b.service_name||!b.client_name||!b.client_whatsapp)return r.status(400).json({ok:false,error:'Please complete the required client details.'});const s=read(STORE),partner=b.partner_id?s.partners.find(x=>String(x.id)===String(b.partner_id)&&x.active!==false):null;const id=(s.bookings.reduce((m,x)=>Math.max(m,Number(x.id)||0),1000)+1);const commissionRate=Number(partner?.commission_value||0);const booking={id,status:'new',created_at:new Date().toISOString(),partner_id:partner?.id||null,partner_name_internal:partner?.name||'Concierge matching required',partner_telegram_internal:partner?.telegram||null,commission_rate:commissionRate,commission_due:0,commission_status:'pending',service_id:b.service_id||'',service_name:b.service_name,flow:b.flow||flowFor(b.service_name),zone:b.zone||'',requested_at:b.requested_at||'',client_name:b.client_name,client_whatsapp:b.client_whatsapp,notes:b.notes||'',lang:['fr','th','en'].includes(b.lang)?b.lang:'',details:b.details||{}};const details=booking.details;let msg=`🌴 SAMUI CONCIERGE — NEW REQUEST #${id}\n\n`;msg+=`SERVICE\n${booking.service_name}\n`;if(partner){msg+=`PARTNER\n${partner.name}\n`;if(partner.telegram)msg+=`Telegram: ${partner.telegram}\n`;}msg+=`\nCLIENT\n${booking.client_name}\nWhatsApp: ${booking.client_whatsapp}\n${booking.lang?'Langue du client: '+booking.lang.toUpperCase()+'\n':''}`;if(booking.zone)msg+=`Location: ${booking.zone}\n`;msg+='\nREQUEST DETAILS\n';Object.entries(details).forEach(([k,v])=>{if(v!==''&&v!=null)msg+=`${k.replace(/_/g,' ').replace(/\b\w/g,c=>c.toUpperCase())}: ${v}\n`});if(booking.notes)msg+=`\nNOTES\n${booking.notes}\n`;msg+='\nStatus: NEW — please confirm with the partner.';const tg=await telegram(msg);if(!tg.ok)return r.status(502).json({ok:false,telegram:false,error:`Telegram: ${tg.description||'message not accepted'}`});s.bookings.push(booking);write(STORE,s);r.json({ok:true,telegram:true,id});}catch(e){r.status(500).json({ok:false,error:e.message})}});
app.patch('/api/bookings/:id',adminOnly,(q,r)=>{const s=read(STORE),b=s.bookings.find(x=>String(x.id)===String(q.params.id));if(!b)return r.status(404).json({error:'Booking not found'});Object.assign(b,q.body||{});write(STORE,s);r.json(b)});
app.listen(PORT,()=>{console.log(`Samui Concierge running on http://localhost:${PORT}`);if(!adminPassword)console.warn('WARNING: ADMIN_PASSWORD is not set — admin dashboard is disabled.');pollTelegram().catch(e=>console.error('pollTelegram',e))});
