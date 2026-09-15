const defaultPosts=[
{slug:'choosing-motor-cover-kenya',title:'How to choose the right motor insurance cover in Kenya',category:'Motor Insurance',date:'2026-09-02',readTime:'5 min read',excerpt:'Third-party, third-party fire and theft, or comprehensive — understand what each option is designed to protect.'},
{slug:'travel-insurance-what-it-covers',title:'Travel insurance: what your policy actually covers',category:'Travel',date:'2026-08-19',readTime:'4 min read',excerpt:'A plain-language guide to medical emergencies, cancellation, baggage and other common travel protections.'},
{slug:'inpatient-vs-outpatient-cover',title:'Medical cover 101: inpatient vs outpatient',category:'Health Insurance',date:'2026-08-05',readTime:'4 min read',excerpt:'Understand the difference between inpatient and outpatient medical cover before choosing a plan.'}
];
function getPosts(){try{return JSON.parse(localStorage.getItem('mb_posts'))||defaultPosts}catch{return defaultPosts}}
function featured(){const el=document.getElementById('featured-posts');if(!el)return;el.innerHTML=getPosts().slice(0,3).map(p=>`<a class="post-card" href="blog.html?post=${encodeURIComponent(p.slug)}"><div class="meta">${p.category} · ${p.readTime||''}</div><h3>${p.title}</h3><p>${p.excerpt}</p><span class="text-link">Read article →</span></a>`).join('')}
function sendQuote(e){e.preventDefault();const s=document.getElementById('quote-status');s.textContent='Thanks — your request has been captured for this demo. Connect the form to the client email/CRM before launch.';e.target.reset()}
featured();
