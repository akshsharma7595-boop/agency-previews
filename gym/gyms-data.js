const GYM_PRESETS = {
  strength: {
    accent: "#84cc16",
    headline: "CRUSH YOUR LIMITS. BUILD REAL POWER.",
    subheadline: "Heavy iron, Olympic lifting platforms, calibrated plates, and dedicated strength coaches to get you to your peak physical condition.",
    heroImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    programs: [
      { title: "Powerlifting & Heavy Compound", desc: "Dedicated squat racks, deadlift dead-zones, and chalk-friendly lifting areas." },
      { title: "Hypertrophy & Bodybuilding", desc: "Full range of pin-loaded & plate-loaded machines targeting every muscle group." },
      { title: "Personal 1-on-1 Coaching", desc: "Form correction, progressive overload tracking, and individualized macro guidance." },
      { title: "High-Intensity Functional Turf", desc: "Sled push tracks, battle ropes, kettlebells, and plyometric boxes for athletic conditioning." },
      { title: "Recovery & Mobility Zone", desc: "Foam rollers, resistance bands, steam rooms, and post-workout mobility drills." },
      { title: "Custom Nutrition Protocols", desc: "Body composition assessments (BCA) and goal-based meal planning tailored for you." }
    ]
  },
  crossfit: {
    accent: "#f97316",
    headline: "FORGE ELITE FITNESS & UNSTOPPABLE STAMINA.",
    subheadline: "High-intensity functional movements, Olympic weightlifting, gymnastics, and metabolic conditioning in an electrifying community.",
    heroImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    programs: [
      { title: "Daily WOD (Workout of the Day)", desc: "Constantly varied, high-intensity workouts led by certified CrossFit Level 1/2 coaches." },
      { title: "Olympic Weightlifting", desc: "Snatch and Clean & Jerk technique clinics to master bar path and explosive hip drive." },
      { title: "Gymnastics & Body Control", desc: "Bar muscle-ups, handstand push-ups, ring dips, and strict core development." },
      { title: "Metcon & Endurance Engine", desc: "Rowers, SkiErgs, assault bikes, and interval sprints to build limitless lung capacity." },
      { title: "Beginner On-Ramp Course", desc: "Safe, foundational 4-step program for newcomers before joining regular WODs." },
      { title: "Mobility & Prehab", desc: "Joint prep, shoulder hygiene, and hip opening sessions to stay injury-free." }
    ]
  },
  mma: {
    accent: "#ef4444",
    headline: "DISCIPLINE. TECHNIQUE. COMBAT CONDITIONING.",
    subheadline: "Boxing, Muay Thai, Brazilian Jiu-Jitsu, and combat strength training for self-defense, competition, and intense fat burn.",
    heroImage: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80",
    programs: [
      { title: "Boxing & Striking Conditioning", desc: "Footwork, heavy bag combinations, slip drills, and cardio endurance rounds." },
      { title: "Muay Thai & Kickboxing", desc: "Thai pads, low kicks, clinch work, and high-calorie full-body conditioning." },
      { title: "Brazilian Jiu-Jitsu (BJJ)", desc: "Ground grappling, submissions, transitions, and leverage-based self-defense." },
      { title: "Fighter Strength & Power", desc: "Explosive medicine ball slams, landmine rotations, and neck & grip strength work." },
      { title: "Kids & Teens Martial Arts", desc: "Bully-prevention, motor skills, self-confidence, and martial arts discipline." },
      { title: "Sparring & Ring Strategy", desc: "Controlled, padded sparring under strict coach supervision for intermediate fighters." }
    ]
  }
};

const GYM_LEADS = [
  {
    slug: "crossfit-third-eye-bandra",
    gym_name: "CrossFit Third Eye",
    owner_name: "Dr. Vinti Babani & Amaan Bakali",
    category: "CrossFit Affiliate Box & Conditioning",
    preset: "crossfit",
    locality: "19 & 21 A, Gopal Mansion, Gurunanak Road, Bandra West, Mumbai - 400050",
    short_locality: "Bandra West, Mumbai",
    email: "babanivinti@gmail.com",
    phone: "+91 98207 35699",
    rating: "4.9",
    current_presence: "Instagram (@crossfitthirdeye) & affiliate directory only - No custom website",
    observation: "Premier boutique CrossFit box in Bandra run by a dentist-turned-athlete with high community engagement, but missing an automated class trial pass system."
  },
  {
    slug: "crossfit-blackfire-andheri",
    gym_name: "CrossFit Blackfire",
    owner_name: "Ashutosh Bhosle",
    category: "CrossFit & Olympic Weightlifting",
    preset: "crossfit",
    locality: "Karamveer Sports Club Basement, SV Patel Nagar, Andheri West, Mumbai - 400053",
    short_locality: "Andheri West, Mumbai",
    email: "abhosle72@gmail.com",
    phone: "+91 98201 81864",
    rating: "4.8",
    current_presence: "Instagram (@crossfitblackfire) & Justdial only - No custom website",
    observation: "Established basement box inside a sports club in Andheri West focusing on heavy barbell cycles and conditioning, without a standalone drop-in pass portal."
  },
  {
    slug: "fitness-mafia-goregaon",
    gym_name: "Fitness Mafia",
    owner_name: "Rohit Sharma & Team",
    category: "MMA, Boxing & Functional Fitness",
    preset: "mma",
    locality: "114/907, Best Colony Road, Motilal Nagar 1, Off Link Road, Goregaon West, Mumbai - 401104",
    short_locality: "Goregaon West, Mumbai",
    email: "fitnessmafia321@gmail.com",
    phone: "+91 97682 45855",
    rating: "4.8",
    current_presence: "Instagram (@fitnessmafia_official) & Facebook only - No custom website",
    observation: "Offers specialized MMA, Muay Thai, and functional circuit workouts where class timetables and trial bookings could instantly capture local combat sport searchers."
  },
  {
    slug: "battalion-fitness-goregaon",
    gym_name: "Battalion Fitness",
    owner_name: "Battalion Coaching Team",
    category: "CrossFit, Calisthenics & Strength",
    preset: "strength",
    locality: "99/787, Lokmanya Tilak Nagar, Road 1, Motilal Nagar I, Goregaon West, Mumbai - 400104",
    short_locality: "Goregaon West, Mumbai",
    email: "infobattalionfitness@gmail.com",
    phone: "+91 77000 89495",
    rating: "4.9",
    current_presence: "Facebook & Lyfskills directory only - No standalone website",
    observation: "Raw athletic training atmosphere with sled turf, battle ropes, and tyre flips that needs an automated trial pass system to convert local fitness leads."
  },
  {
    slug: "body-language-bandra",
    gym_name: "Body Language Gym",
    owner_name: "Body Language Team",
    category: "Unisex Commercial Strength Gym",
    preset: "strength",
    locality: "Gate 3, IES Complex, Bandra Reclamation, Opp. Lilavati Hospital, Bandra West, Mumbai - 400050",
    short_locality: "Bandra West, Mumbai",
    email: "bodylanguagegym13@gmail.com",
    phone: "+91 99670 47374",
    rating: "4.8",
    current_presence: "Facebook & Justdial only - No standalone website",
    observation: "Landmark facility in Bandra Reclamation opposite Lilavati Hospital surrounded by corporate and residential commuters looking for gym memberships."
  },
  {
    slug: "raw-fit-santacruz",
    gym_name: "Raw Fit Gym & CrossFit Centre",
    owner_name: "Raw Fit Coaching Staff",
    category: "CrossFit, Strength & Kickboxing",
    preset: "crossfit",
    locality: "Asgarali Compound, Vakola Pipeline Road, Santacruz East, Mumbai - 400055",
    short_locality: "Santacruz East, Mumbai",
    email: "rawfit.gymandcrossfit@gmail.com",
    phone: "+91 93262 40197",
    rating: "4.7",
    current_presence: "Instagram (@rawfitgymofficial) & Justdial only - No standalone website",
    observation: "Combines heavy weights, CrossFit rigs, and kickboxing bags near the BKC business corridor where corporate wellness lead generation has high ROI."
  },
  {
    slug: "uplift-fitness-borivali",
    gym_name: "Uplift Fitness Studio",
    owner_name: "Uplift Studio Team",
    category: "Boutique Strength & Cardio Studio",
    preset: "strength",
    locality: "LIC Colony, Opp. Karnataka Bank, Borivali West, Mumbai - 400103",
    short_locality: "Borivali West, Mumbai",
    email: "upliftfitnessstudio1@gmail.com",
    phone: "+91 73049 61615",
    rating: "4.9",
    current_presence: "Instagram (@uplift_fitness_borivali) & Justdial only - No standalone website",
    observation: "Modern aesthetic gym on Instagram reels catering to Borivali West residents that can connect bio traffic directly to free trial workout passes."
  },
  {
    slug: "one-gym-dadar",
    gym_name: "1 Gym (Dadar Ten Gym)",
    owner_name: "Dadar 10 Gym Training Team",
    category: "Strength & Conditioning / Personal Training",
    preset: "strength",
    locality: "Shop 10, Gulmohar CHS, P.L. Kale Guruji Marg, Dadar West, Mumbai - 400028",
    short_locality: "Dadar West, Mumbai",
    email: "dadartengym@gmail.com",
    phone: "+91 99879 09579",
    rating: "4.8",
    current_presence: "Instagram & Fitpass aggregator only - No standalone website",
    observation: "Prime Dadar West location near Shivaji Park relying on third-party aggregators that take commission cuts instead of driving direct web signups."
  },
  {
    slug: "exousia-fitness-andheri",
    gym_name: "Exousia Fitness",
    owner_name: "Exousia Coaching Team",
    category: "Functional Training & Strength Studio",
    preset: "strength",
    locality: "2nd Floor, Platinum Heights, RTO Signal, Andheri West, Mumbai - 400053",
    short_locality: "Andheri West, Mumbai",
    email: "fitness.exousia@gmail.com",
    phone: "+91 99879 02860",
    rating: "4.8",
    current_presence: "Facebook page & local directory only - No standalone website",
    observation: "2nd-floor studio at busy Andheri RTO intersection lacking street visibility, where local Google search traffic can drive daily trial walk-ins."
  },
  {
    slug: "shirsekar-fitness-bandra",
    gym_name: "Shirsekar's Fitness Hub",
    owner_name: "Fit Mantras Team",
    category: "Unisex Strength Gym & Yoga",
    preset: "strength",
    locality: "Mahatma Gandhi Vidyamandir, Government Colony, Bandra East, Mumbai - 400051",
    short_locality: "Bandra East, Mumbai",
    email: "fitmantrasinfo24@gmail.com",
    phone: "+91 77100 39324",
    rating: "4.7",
    current_presence: "Fitsquare & Mumbai96 only - No standalone website",
    observation: "Conveniently located for BKC corporate employees and Government Colony residents looking for memberships and corporate fitness passes."
  },
  {
    slug: "hr-fitness-mulund",
    gym_name: "HR Fitness CrossFit Gym",
    owner_name: "HR Fitness Team",
    category: "CrossFit & High-Intensity Conditioning",
    preset: "crossfit",
    locality: "Hindustan Chowk, Mulund Colony, Mulund West, Mumbai - 400082",
    short_locality: "Mulund West, Mumbai",
    email: "hrfitnessgym1022@gmail.com",
    phone: "+91 99676 40419",
    rating: "4.8",
    current_presence: "Fitsquare & local directories only - No standalone website",
    observation: "Rare dedicated CrossFit box in Mulund Colony that can showcase daily WODs and community challenges to beat standard commercial gyms."
  },
  {
    slug: "fitness-heroes-mazgaon",
    gym_name: "Fitness Heroes The Gym",
    owner_name: "Fitness Heroes Training Team",
    category: "Heavy Strength & Bodybuilding",
    preset: "strength",
    locality: "22 H G Nesbit Compound, Nesbit Road, Near Mazgaon Court, Mazgaon, Mumbai - 400010",
    short_locality: "Mazgaon, Mumbai",
    email: "fitnessheros01@gmail.com",
    phone: "+91 98677 19359",
    rating: "4.7",
    current_presence: "Facebook page & local listings only - No standalone website",
    observation: "Popular heavy iron gym among Mazgaon fitness enthusiasts that can monetize memberships and personal training through a dedicated web portal."
  },
  {
    slug: "mobb-gym-borivali",
    gym_name: "Mobb Gym",
    owner_name: "Mobb Gym Founders",
    category: "Boutique Strength & Conditioning",
    preset: "strength",
    locality: "Laxmi Villa Bungalow 4, Chikuwadi Road, Shimpoli, Borivali West, Mumbai - 400092",
    short_locality: "Borivali West, Mumbai",
    email: "mobbgym@gmail.com",
    phone: "+91 81699 40704",
    rating: "4.9",
    current_presence: "Facebook page & local directory only - No standalone website",
    observation: "Unique bungalow-setup gym in upscale Chikuwadi residential zone where a sleek landing page matches their premium boutique vibe."
  },
  {
    slug: "fitgods-gym-thane",
    gym_name: "Fitgods Gym (Alpha Fitgods)",
    owner_name: "Alpha Fitgods Coaching Team",
    category: "Strength & Body Transformation",
    preset: "strength",
    locality: "Gautam Arcade, Harishchandra Raut Marg, Kopri, Thane East - 400603",
    short_locality: "Thane East, Mumbai MMR",
    email: "fitgodsgym@gmail.com",
    phone: "+91 84258 47507",
    rating: "4.8",
    current_presence: "Facebook & Justdial only - No standalone website",
    observation: "Popular local Thane East training spot serving daily railway commuters with flexible morning and evening training hours."
  },
  {
    slug: "raise-gym-thane",
    gym_name: "Raise Gym",
    owner_name: "Raise Gym Management",
    category: "Unisex Fitness & Transformation Studio",
    preset: "strength",
    locality: "Basement 3, Panama Planet, Gokhale Road, Naupada, Thane West - 400601",
    short_locality: "Thane West, Mumbai MMR",
    email: "raisegyminfo@gmail.com",
    phone: "+91 98330 22905",
    rating: "4.8",
    current_presence: "Facebook & Justdial only - No standalone website",
    observation: "Busy Naupada commercial complex gym where online pass claims and membership renewals replace manual paperwork."
  },
  {
    slug: "energy-fitness-kandivali",
    gym_name: "Energy Fitness",
    owner_name: "Energy Fitness Team",
    category: "Unisex Gym & Cardio Studio",
    preset: "strength",
    locality: "106, Dattamandir Cross Road 1, Dahanukar Wadi, Kandivali West, Mumbai - 400067",
    short_locality: "Kandivali West, Mumbai",
    email: "energyfitness0809@gmail.com",
    phone: "+91 99879 27083",
    rating: "4.7",
    current_presence: "Fitsquare & Justdial only - No standalone website",
    observation: "High-density residential neighborhood in Dahanukar Wadi surrounded by residential towers, ideal for family and annual package deals."
  }
];

let currentGym = GYM_LEADS[0];

function renderGym(gym) {
  currentGym = gym;
  const preset = GYM_PRESETS[gym.preset] || GYM_PRESETS.strength;

  document.documentElement.style.setProperty("--accent", preset.accent);
  document.getElementById("page-title").textContent = `${gym.gym_name} | ${gym.short_locality}`;
  document.getElementById("nav-gym-name").textContent = gym.gym_name;
  document.getElementById("nav-category-tag").textContent = gym.category;

  document.getElementById("top-locality").textContent = gym.short_locality;
  document.getElementById("top-phone").textContent = gym.phone;
  document.getElementById("top-phone-link").href = `tel:${gym.phone.replace(/[^0-9]/g, "")}`;

  document.getElementById("hero-badge").textContent = `${gym.category} • ${gym.short_locality}`;
  document.getElementById("hero-headline").textContent = preset.headline;
  document.getElementById("hero-subheadline").textContent = preset.subheadline;
  document.getElementById("hero-image").src = preset.heroImage;
  document.getElementById("stat-rating").textContent = `${gym.rating} ★`;
  document.getElementById("coach-highlight").textContent = `Led by ${gym.owner_name} & Certified Floor Coaches`;

  const waNumber = gym.phone.replace(/[^0-9]/g, "");
  const waMsg = encodeURIComponent(`Hi ${gym.gym_name}, I saw your gym online and would like to claim a Free 1-Day Workout Pass!`);
  document.getElementById("hero-wa-btn").href = `https://wa.me/${waNumber}?text=${waMsg}`;

  const grid = document.getElementById("programs-grid");
  grid.innerHTML = "";
  preset.programs.forEach((p, idx) => {
    const card = document.createElement("div");
    card.className = "bg-neutral-900/80 hover:bg-neutral-900 border border-neutral-800 hover:border-lime-500/50 p-6 rounded-2xl transition group";
    card.innerHTML = `
      <div class="w-10 h-10 rounded-xl bg-accent text-black font-extrabold flex items-center justify-center text-sm mb-4">
        0${idx + 1}
      </div>
      <h3 class="text-lg font-extrabold text-white group-hover:text-accent transition font-heading">${p.title}</h3>
      <p class="text-neutral-400 text-sm mt-2 leading-relaxed">${p.desc}</p>
    `;
    grid.appendChild(card);
  });

  document.getElementById("footer-gym-name").textContent = gym.gym_name;
  document.getElementById("footer-address").textContent = gym.locality;
  document.getElementById("footer-phone").textContent = gym.phone;
  document.getElementById("footer-phone").href = `tel:${waNumber}`;
  document.getElementById("footer-email").textContent = gym.email;
  document.getElementById("footer-email").href = `mailto:${gym.email}`;

  const mapQuery = encodeURIComponent(`${gym.gym_name}, ${gym.locality}`);
  document.getElementById("google-map-iframe").src = `https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
}

function handlePassSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("form-name").value.trim();
  const phone = document.getElementById("form-phone").value.trim();
  const goal = document.getElementById("form-goal").value;
  const waNumber = currentGym.phone.replace(/[^0-9]/g, "");
  const msg = `Hello ${currentGym.gym_name}! 🔥\n\nI would like to claim my *Free 1-Day Workout Pass*:\n• *Name:* ${name}\n• *Phone:* ${phone}\n• *Fitness Goal:* ${goal}\n\nPlease confirm my pass!`;
  window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`, "_blank");
}

function openPitchDrawer() {
  const g = currentGym;
  const salutation = g.owner_name && !g.owner_name.includes("Team") ? g.owner_name : `Team at ${g.gym_name}`;
  const subject = `Quick question about ${g.gym_name} (${g.short_locality})`;
  const emailBody = `Hi ${salutation},

I was looking up fitness centers around ${g.short_locality} and came across ${g.gym_name}.

${g.observation}

I build member-acquisition websites for fitness studios across Mumbai, so I went ahead and mocked up a high-energy live 1-page website specifically for ${g.gym_name} — complete with an instant "Claim Free 1-Day Pass" WhatsApp button, transparent membership tiers, and Google Maps directions.

Mind if I reply with the preview link or a quick screenshot so you can see how it looks? No obligation at all.

Warm regards,
Aksh Sharma
Web Design & Lead Systems for Fitness Clubs (Mumbai)
akshsharma.web@gmail.com`;

  const waBody = `Hi ${salutation} 👋 This is Aksh Sharma. I noticed ${g.gym_name} (${g.short_locality}) didn't have a standalone website to capture direct gym trial bookings from Google, so I mocked up a fast 1-page site for your gym with 1-click WhatsApp free trial passes and membership plans. Mind if I share the preview link here for your feedback?`;

  document.getElementById("pitch-to-email").textContent = g.email;
  document.getElementById("pitch-to-phone").textContent = g.phone;
  document.getElementById("pitch-subject").textContent = subject;
  document.getElementById("pitch-email-body").value = emailBody;
  document.getElementById("pitch-whatsapp-body").value = waBody;
  document.getElementById("pitch-drawer").classList.remove("hidden");
}

function closePitchDrawer() {
  document.getElementById("pitch-drawer").classList.add("hidden");
}

function copyText(id) {
  const el = document.getElementById(id);
  el.select();
  navigator.clipboard.writeText(el.value);
}

function hideToolbarForScreenshot() {
  document.getElementById("pitch-toolbar").classList.add("hidden");
  document.getElementById("restore-toolbar-btn").classList.remove("hidden");
}

function showToolbar() {
  document.getElementById("pitch-toolbar").classList.remove("hidden");
  document.getElementById("restore-toolbar-btn").classList.add("hidden");
}

function populateSelector() {
  const sel = document.getElementById("lead-selector");
  sel.innerHTML = "";
  GYM_LEADS.forEach((lead, i) => {
    const opt = document.createElement("option");
    opt.value = lead.slug;
    opt.textContent = `${i + 1}. ${lead.gym_name} (${lead.short_locality})`;
    sel.appendChild(opt);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  populateSelector();
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("gym");
  if (params.get("preview") === "1") hideToolbarForScreenshot();

  const sel = document.getElementById("lead-selector");
  sel.addEventListener("change", (e) => {
    const found = GYM_LEADS.find((x) => x.slug === e.target.value);
    if (found) renderGym(found);
  });

  if (slug) {
    const found = GYM_LEADS.find((x) => x.slug === slug);
    if (found) {
      sel.value = found.slug;
      renderGym(found);
      return;
    }
  }
  renderGym(GYM_LEADS[0]);
});
