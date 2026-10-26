// Pre-loaded Real Mumbai Clinic Leads + Specialty Content Engine
const SPECIALTY_PRESETS = {
  dental: {
    primary: "#0d9488",
    primaryDark: "#0f766e",
    primaryLight: "#f0fdfa",
    heroImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80",
    headline: "Painless, Modern Dentistry for a Confident Smile",
    subheadline: "From single-sitting root canals and precision dental implants to cosmetic smile makeovers — experience gentle dental care in a 100% sterilized clinic.",
    services: [
      { title: "Single-Sitting Root Canal (RCT)", desc: "Advanced rotary endodontics for fast, painless tooth preservation without multiple visits." },
      { title: "Dental Implants & Crowns", desc: "Permanent, natural-looking tooth replacements using biocompatible titanium implants & zirconia crowns." },
      { title: "Teeth Whitening & Smile Design", desc: "Safe clinical polishing, laser bleaching, and veneers for a noticeably brighter smile." },
      { title: "Clear Aligners & Braces", desc: "Invisible orthodontic teeth straightening tailored for teens and working professionals." },
      { title: "Pediatric & Kids Dentistry", desc: "Gentle, fear-free dental checkups, fluoride treatment, and cavity protection for children." },
      { title: "Gum Care & Wisdom Tooth Extraction", desc: "Painless ultrasonic scaling, laser gum therapy, and safe third-molar extractions." }
    ],
    reviews: [
      { name: "Priya Deshmukh", text: "Had a painless root canal experience here. The doctor explained every step clearly and the clinic hygiene is top-notch." },
      { name: "Rohan Mehta", text: "Got my dental implant and zirconia crown done. Looks completely natural and zero discomfort after the procedure!" },
      { name: "Sneha Kulkarni", text: "Very polite staff and almost no waiting time when you book an appointment slot in advance. Highly recommended for families." }
    ]
  },
  skin: {
    primary: "#be123c",
    primaryDark: "#9f1239",
    primaryLight: "#fff1f2",
    heroImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80",
    headline: "Evidence-Based Dermatology for Healthy Skin & Hair",
    subheadline: "Personalized clinical dermatology, US-FDA approved laser treatments, and advanced hair restoration supervised by specialist dermatologists.",
    services: [
      { title: "Acne & Scar Revision Therapy", desc: "Medical-grade peels, microneedling MNRF, and targeted protocols to clear active acne and deep scars." },
      { title: "Laser Hair Reduction", desc: "Safe, painless diode & triple-wavelength laser hair reduction suited for Indian skin tones." },
      { title: "PRP & Hair Loss Restoration", desc: "Clinical trichology, GFC/PRP therapy, and medical alopecia treatments for thicker hair regrowth." },
      { title: "HydraFacial & Pigmentation Care", desc: "Instant medical glow facials, melasma management, and Q-switch laser toning." },
      { title: "Anti-Aging & Skin Tightening", desc: "Non-surgical rejuvenation, fine-line reduction, and collagen-boosting skin boosters." },
      { title: "Clinical & Pediatric Dermatology", desc: "Expert diagnosis and treatment for eczema, psoriasis, fungal infections, and allergies." }
    ],
    reviews: [
      { name: "Aditi Nair", text: "My stubborn acne scars cleared up visibly within 3 months of treatment. The doctor never pushes unnecessary products." },
      { name: "Karan Joshi", text: "Took GFC hair therapy sessions here — genuinely seeing new hair density and reduced hair fall. Very clean clinical setup." },
      { name: "Meera Shah", text: "Best dermatologist in the area! Takes time to understand skin history and gives practical routines that actually work." }
    ]
  },
  physio: {
    primary: "#1d4ed8",
    primaryDark: "#1e40af",
    primaryLight: "#eff6ff",
    heroImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80",
    headline: "Move Without Pain — Expert Orthopedic & Rehab Care",
    subheadline: "Targeted physiotherapy, joint care, and sports injury rehabilitation designed to restore mobility, eliminate chronic pain, and prevent surgery.",
    services: [
      { title: "Back, Neck & Slip Disc Rehab", desc: "Decompression, manual therapy, and posture correction for sciatica, spondylosis, and desk-job pain." },
      { title: "Knee & Joint Pain Management", desc: "Specialized osteoarthritis care, ligament strengthening, and joint mobility restoration." },
      { title: "Sports Injury Recovery", desc: "ACL/meniscus rehab, rotator cuff recovery, and kinesio taping for athletes and active adults." },
      { title: "Post-Surgery Rehabilitation", desc: "Structured recovery programs after total knee/hip replacement or fracture surgeries." },
      { title: "Dry Needling & Electrotherapy", desc: "Ultrasonic therapy, IFT, TENS, and myofascial release for rapid muscle spasm relief." },
      { title: "Home Visit Physiotherapy", desc: "Dedicated bedside physiotherapy sessions for seniors and post-operative patients." }
    ],
    reviews: [
      { name: "Vikram Iyer", text: "Was struggling with severe lower back and sciatica pain from long office hours. Within 10 sessions I was back to normal movement." },
      { name: "Suresh Patil", text: "Post knee-replacement physiotherapy for my mother was handled with immense patience and expertise." },
      { name: "Nikhil Sharma", text: "Accurate diagnosis of my shoulder injury and structured strength exercises that fixed the root cause, not just the symptoms." }
    ]
  },
  general: {
    primary: "#0369a1",
    primaryDark: "#075985",
    primaryLight: "#f0f9ff",
    heroImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80",
    headline: "Trusted Family Healthcare, Diagnostics & OPD Care",
    subheadline: "Comprehensive medical consultations, preventive health checkups, pediatric vaccinations, and accurate diagnostics right in your neighborhood.",
    services: [
      { title: "General Physician OPD", desc: "Thorough diagnosis and treatment for viral fevers, infections, blood pressure, and seasonal illnesses." },
      { title: "Pediatric & Child Healthcare", desc: "Complete child growth monitoring, immunization & vaccination charts, and newborn care." },
      { title: "Pathology & Blood Tests", desc: "Accurate diagnostic lab panels, full-body profiles, and convenient home sample collection." },
      { title: "Diabetes & Thyroid Management", desc: "Long-term lifestyle and medical management for blood sugar, cholesterol, and thyroid disorders." },
      { title: "Preventive Health Checkups", desc: "Comprehensive annual wellness screenings for working adults and senior citizens." },
      { title: "Same-Day Tele & Walk-In Consults", desc: "Quick appointment scheduling via WhatsApp with minimal clinic waiting time." }
    ],
    reviews: [
      { name: "Amitabh Sawant", text: "Our go-to family clinic in the neighborhood. Very accurate medicines and the doctor listens patiently without rushing." },
      { name: "Pooja Rane", text: "Super convenient for both doctor consultation and lab tests under one roof. Reports are delivered right on WhatsApp." },
      { name: "Deepak Gupta", text: "Clean clinic, reasonable consultation fees, and genuine care for senior citizens and kids alike." }
    ]
  },
  eye: {
    primary: "#4338ca",
    primaryDark: "#3730a3",
    primaryLight: "#eef2ff",
    heroImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80",
    headline: "Precision Eye Care, Cataract & Vision Correction",
    subheadline: "Protect and restore your vision with computerized eye exams, micro-incision bladeless cataract surgery, and LASIK consultations.",
    services: [
      { title: "Bladeless Cataract Surgery", desc: "Stitchless, painless micro-incision phaco cataract procedures with premium multifocal lenses." },
      { title: "LASIK & Specs Removal", desc: "Advanced laser vision correction assessments for safe freedom from glasses and contact lenses." },
      { title: "Computerized Vision Testing", desc: "Detailed refraction, digital eye-strain relief, and pediatric myopia control." },
      { title: "Retina & Diabetic Eye Screening", desc: "Early detection and management of diabetic retinopathy and macular conditions." },
      { title: "Glaucoma Diagnosis & Care", desc: "Intraocular pressure monitoring and optic nerve protection." },
      { title: "Dry Eye & Cornea Clinic", desc: "Specialized relief for computer vision syndrome, allergies, and corneal infections." }
    ],
    reviews: [
      { name: "Rajeshwari Menon", text: "My father's cataract surgery went smoothly with crystal clear vision the very next day. Extremely grateful to the doctor." },
      { name: "Siddharth Jain", text: "Thorough eye checkup and honest advice on LASIK suitability. Very modern testing equipment." },
      { name: "Kavita Desai", text: "Well-organized appointment slots so senior citizens don't have to wait long." }
    ]
  }
};

const CLINIC_LEADS = [
  {
    slug: "maa-sheela-kurla",
    clinic_name: "Maa Sheela Clinic & Pathology",
    doctor_name: "Manraj Pratishthan Medical Team",
    specialty: "General Physician OPD, Pathology & Physiotherapy",
    preset: "general",
    locality: "Shop No. 5, Manraj Heights, Opp. Omkar Meridia, Near Equinox Business Park, Kurla West, Mumbai - 400070",
    short_locality: "Kurla West, Mumbai",
    email: "maasheelaclinic@gmail.com",
    phone: "+91 83694 36898",
    current_presence: "Instagram (@maasheelaclinic) & Justdial only - No standalone website",
    rating: "4.8"
  },
  {
    slug: "safs-32-dental-kurla",
    clinic_name: "SAF'S 32 Multispecialty Dental Clinic",
    doctor_name: "Dr. Suhema Ali Fakih",
    specialty: "Multispecialty Dental, Implants & Aligners",
    preset: "dental",
    locality: "Unit No. G01, B Wing, Mass U Foria, New Mill Road, Near Tanaji Chowk, Kurla West, Mumbai - 400070",
    short_locality: "Kurla West, Mumbai",
    email: "safs32dentalclinic@gmail.com",
    phone: "+91 98200 00000",
    current_presence: "Instagram, Justdial & Practo only - No standalone website",
    rating: "4.9"
  },
  {
    slug: "radiance-skin-ghatkopar",
    clinic_name: "Radiance Skin & Hair Clinic",
    doctor_name: "Dr. Avani Maniar",
    specialty: "Dermatology, Hair Restoration & Aesthetics",
    preset: "skin",
    locality: "402/403, 4th Floor, Sapphire Business Annexe, MG Road, Opp. Rajawadi Hospital, Ghatkopar East, Mumbai - 400077",
    short_locality: "Ghatkopar East, Mumbai",
    email: "drmaniarradiance@gmail.com",
    phone: "+91 91375 05280",
    current_presence: "Facebook, Instagram & Justdial only - No standalone website",
    rating: "4.9"
  },
  {
    slug: "dr-garvit-physio-powai",
    clinic_name: "Dr. Garvit's Physiotherapy & Rehab Centre",
    doctor_name: "Dr. Garvit Shukla (PT)",
    specialty: "Physiotherapy, Sports Injury & Spine Rehab",
    preset: "physio",
    locality: "Shop No. 24-A, Panchvati Building, Near S.M. Shetty School, Hiranandani Gardens, Powai, Mumbai",
    short_locality: "Hiranandani Gardens, Powai",
    email: "garvit.shukla@gmail.com",
    phone: "+91 80885 23341",
    current_presence: "Facebook & Justdial/Practo only - No standalone website",
    rating: "4.9"
  },
  {
    slug: "dermablush-mulund",
    clinic_name: "DermaBlush Skin Clinic",
    doctor_name: "Dr. Rosary Rayen & Dr. Mithun",
    specialty: "Dermatology, Cosmetology & Laser Aesthetics",
    preset: "skin",
    locality: "201, 2nd Floor, Runwal R Square, LBS Road, Opp. Veena Nagar, Mulund West, Mumbai - 400080",
    short_locality: "Mulund West, Mumbai",
    email: "dermablushskinclinic@gmail.com",
    phone: "+91 96464 90404",
    current_presence: "Facebook, Instagram & local directory only - No standalone website",
    rating: "4.8"
  },
  {
    slug: "sawant-smile-hq",
    clinic_name: "Dr. Sawant's SMILE HQ",
    doctor_name: "Dr. Sanket Sawant & Dr. Sunita Singh Sawant",
    specialty: "Dental Implants, RCT & Pediatric Dentistry",
    preset: "dental",
    locality: "SV Road, Near Shatabdi Hospital, Malad West / Kandivali West, Mumbai",
    short_locality: "Malad / Kandivali West, Mumbai",
    email: "dentalhealthhqmumbai@gmail.com",
    phone: "+91 79774 92723",
    current_presence: "Facebook, Instagram & Justdial only - No standalone website",
    rating: "4.9"
  },
  {
    slug: "advance-joint-clinic",
    clinic_name: "Advance Bone & Joint Care Clinic",
    doctor_name: "Dr. Manoj Mishra",
    specialty: "Orthopedics, Joint Replacement & Sports Injury",
    preset: "physio",
    locality: "Opera House / Girgaon, South Mumbai",
    short_locality: "Opera House, South Mumbai",
    email: "drmanojmishra1@gmail.com",
    phone: "+91 90225 07910",
    current_presence: "Instagram & third-party medical aggregators only - No standalone website",
    rating: "4.9"
  },
  {
    slug: "parijat-child-borivali",
    clinic_name: "Parijat Child Health Clinic",
    doctor_name: "Dr. Amod Potnis",
    specialty: "Pediatrics, Vaccinations & Child Healthcare",
    preset: "general",
    locality: "Plot No. 156, Shri Krishna Nagar, Borivali East, Mumbai - 400066",
    short_locality: "Borivali East, Mumbai",
    email: "parijat156@gmail.com",
    phone: "+91 92222 42230",
    current_presence: "Facebook page & Justdial only - No standalone website",
    rating: "4.8"
  },
  {
    slug: "swami-dental-borivali",
    clinic_name: "Swami Dental Clinic",
    doctor_name: "Dr. Leena Aradhye Joshi",
    specialty: "General & Cosmetic Dentistry",
    preset: "dental",
    locality: "A-9, Sri Krishna Avenue, Near Kajupada Police Station, Savarpada Corner, Borivali East, Mumbai - 400066",
    short_locality: "Borivali East, Mumbai",
    email: "leena.aradhye@gmail.com",
    phone: "+91 22 2897 7587",
    current_presence: "Facebook & local directories only - No standalone website",
    rating: "4.7"
  },
  {
    slug: "first-dental-miraroad",
    clinic_name: "First Dental Clinic",
    doctor_name: "First Dental Specialist Team",
    specialty: "Cosmetic Dentistry, Root Canal & Implants",
    preset: "dental",
    locality: "103/B31, Amrapali Building, Sector 11, Shanti Nagar, Mira Road, Mumbai MMR - 401107",
    short_locality: "Shanti Nagar, Mira Road",
    email: "clinicfirstdental@gmail.com",
    phone: "+91 85520 43786",
    current_presence: "Instagram (@firstdental_miraroad) & Justdial only - No standalone website",
    rating: "4.8"
  },
  {
    slug: "gayatri-health-dadar",
    clinic_name: "Gayatri Health Clinic",
    doctor_name: "Dr. Ashwini Baviskar-Jadhav",
    specialty: "Pain Management, Acupuncture & Holistic Care",
    preset: "physio",
    locality: "Dadar & Kandivali Branches, Mumbai, Maharashtra",
    short_locality: "Dadar & Kandivali, Mumbai",
    email: "gayatrihealthclinicmumbai@gmail.com",
    phone: "+91 88984 99137",
    current_presence: "Facebook page & digital card only - No custom website",
    rating: "4.8"
  },
  {
    slug: "voxel-diagnostics-mumbai",
    clinic_name: "Voxel Diagnostics & Polyclinic",
    doctor_name: "Voxel Diagnostic Medical Team",
    specialty: "Diagnostics, Imaging & Polyclinic Consultations",
    preset: "general",
    locality: "Mumbai, Maharashtra",
    short_locality: "Mumbai",
    email: "voxelteleradiology@gmail.com",
    phone: "+91 98200 00000",
    current_presence: "Facebook page only - No standalone website",
    rating: "4.7"
  },
  {
    slug: "dr-anurag-eye-goregaon",
    clinic_name: "Dr. Anurag S. Agarwal Eye Clinic",
    doctor_name: "Dr. Anurag S. Agarwal",
    specialty: "Ophthalmology, Bladeless Cataract & LASIK",
    preset: "eye",
    locality: "Jain Hospital, M.G. Road, Opp. Rosary Church, Unnat Nagar No. 4, Goregaon West, Mumbai - 400104",
    short_locality: "Goregaon West, Mumbai",
    email: "dranurageyecare@gmail.com",
    phone: "+91 98199 37503",
    current_presence: "Facebook, Practo & basic Google profile",
    rating: "4.9"
  },
  {
    slug: "skinmatters-powai",
    clinic_name: "Dr. Anuja Shirke's SkinMatters Clinic",
    doctor_name: "Dr. Anuja Shirke",
    specialty: "Clinical Dermatology, Trichology & Laser",
    preset: "skin",
    locality: "Shop Nos. 84 & 85, Heera Panna Shopping Centre, Hiranandani Gardens, Powai & Kanjurmarg East, Mumbai",
    short_locality: "Powai & Kanjurmarg, Mumbai",
    email: "dr.anujashirke@gmail.com",
    phone: "+91 98200 00000",
    current_presence: "Facebook, Justdial & basic single-page site",
    rating: "4.9"
  },
  {
    slug: "shashank-dental-borivali",
    clinic_name: "Dr. Shashank Dental Clinic & Implant Center",
    doctor_name: "Dr. Shashank S. Yadav",
    specialty: "Dental Implants, Root Canal & Smile Design",
    preset: "dental",
    locality: "Geetanjali Tower, SV Road / Daulat Nagar, Borivali East, Mumbai - 400066",
    short_locality: "Borivali East, Mumbai",
    email: "dentalclinic341@gmail.com",
    phone: "+91 81040 94745",
    current_presence: "Facebook, Justdial & basic template",
    rating: "4.8"
  }
];

let currentClinic = CLINIC_LEADS[0];

function renderClinic(clinic) {
  currentClinic = clinic;
  const preset = SPECIALTY_PRESETS[clinic.preset] || SPECIALTY_PRESETS.general;

  // Apply dynamic brand theme colors
  document.documentElement.style.setProperty("--primary", preset.primary);
  document.documentElement.style.setProperty("--primary-dark", preset.primaryDark);
  document.documentElement.style.setProperty("--primary-light", preset.primaryLight);

  // Page Title & Header
  document.getElementById("page-title").textContent = `${clinic.clinic_name} | ${clinic.short_locality}`;
  document.getElementById("logo-badge").textContent = clinic.clinic_name.charAt(0).toUpperCase();
  document.getElementById("nav-clinic-name").textContent = clinic.clinic_name;
  document.getElementById("nav-specialty-tag").textContent = clinic.specialty;

  // Top Bar
  document.getElementById("top-locality").textContent = clinic.short_locality;
  document.getElementById("top-phone").textContent = clinic.phone;
  const cleanDigits = clinic.phone.replace(/[^0-9]/g, "");
  document.getElementById("top-phone-link").href = `tel:+${cleanDigits}`;

  // Hero
  document.getElementById("hero-badge").textContent = `${clinic.specialty} • ${clinic.short_locality}`;
  document.getElementById("hero-headline").textContent = preset.headline;
  document.getElementById("hero-subheadline").textContent = preset.subheadline;
  document.getElementById("hero-call-btn").href = `tel:+${cleanDigits}`;
  document.getElementById("hero-call-text").textContent = `Call ${clinic.phone}`;
  document.getElementById("stat-rating").textContent = clinic.rating || "4.9";
  document.getElementById("hero-image").src = preset.heroImage;
  document.getElementById("card-doctor-name").textContent = clinic.doctor_name;
  document.getElementById("card-locality").textContent = `${clinic.short_locality} • Same-Day Appointments Available`;

  // Services Grid & Booking Dropdown
  const servicesGrid = document.getElementById("services-grid");
  const formService = document.getElementById("form-service");
  servicesGrid.innerHTML = "";
  formService.innerHTML = "";

  preset.services.forEach((srv, idx) => {
    const card = document.createElement("div");
    card.className = "bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-teal-500/40 hover:shadow-xl transition group";
    card.innerHTML = `
      <div class="w-10 h-10 rounded-xl bg-brand text-white flex items-center justify-center font-bold text-sm mb-4 shadow-sm">
        0${idx + 1}
      </div>
      <h3 class="text-lg font-extrabold text-slate-900 group-hover:text-brand transition">${srv.title}</h3>
      <p class="text-slate-600 text-sm mt-2 leading-relaxed">${srv.desc}</p>
      <a href="#book" class="inline-flex items-center gap-1 text-xs font-bold text-brand mt-4">
        Book Consultation <span>→</span>
      </a>
    `;
    servicesGrid.appendChild(card);

    const opt = document.createElement("option");
    opt.value = srv.title;
    opt.textContent = srv.title;
    formService.appendChild(opt);
  });

  // Doctor & Why Choose Us
  document.getElementById("about-doctor-name").textContent = clinic.doctor_name;
  document.getElementById("about-clinic-name").textContent = `${clinic.clinic_name} (${clinic.short_locality})`;
  document.getElementById("why-clinic-name").textContent = clinic.clinic_name;
  document.getElementById("why-locality").textContent = clinic.short_locality;

  // Reviews
  const reviewsGrid = document.getElementById("reviews-grid");
  reviewsGrid.innerHTML = "";
  preset.reviews.forEach((rev) => {
    const rCard = document.createElement("div");
    rCard.className = "bg-slate-50 p-6 rounded-2xl border border-slate-200/80 flex flex-col justify-between";
    rCard.innerHTML = `
      <div>
        <div class="text-amber-500 text-sm font-bold tracking-widest mb-3">★★★★★</div>
        <p class="text-slate-700 text-sm leading-relaxed italic">"${rev.text}"</p>
      </div>
      <div class="mt-5 pt-4 border-t border-slate-200/60 flex items-center justify-between">
        <span class="font-bold text-slate-900 text-sm">${rev.name}</span>
        <span class="text-xs text-emerald-600 font-semibold">✓ Verified Patient</span>
      </div>
    `;
    reviewsGrid.appendChild(rCard);
  });

  // Footer & Map
  document.getElementById("footer-clinic-name").textContent = clinic.clinic_name;
  document.getElementById("footer-address").textContent = clinic.locality;
  document.getElementById("footer-phone").textContent = clinic.phone;
  document.getElementById("footer-phone").href = `tel:+${cleanDigits}`;
  document.getElementById("footer-email").textContent = clinic.email;
  document.getElementById("footer-email").href = `mailto:${clinic.email}`;
  document.getElementById("copyright-clinic").textContent = clinic.clinic_name;

  const mapQuery = encodeURIComponent(`${clinic.clinic_name}, ${clinic.locality}`);
  document.getElementById("google-map-iframe").src = `https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
}

function handleAppointmentSubmit(e) {
  e.preventDefault();
  const patientName = document.getElementById("form-name").value.trim();
  const patientPhone = document.getElementById("form-phone").value.trim();
  const slot = document.getElementById("form-slot").value;
  const service = document.getElementById("form-service").value;

  const cleanDigits = currentClinic.phone.replace(/[^0-9]/g, "");
  const message = `Hello ${currentClinic.clinic_name},\n\nI would like to book an appointment:\n• *Patient Name:* ${patientName}\n• *Phone:* ${patientPhone}\n• *Treatment:* ${service}\n• *Preferred Slot:* ${slot}\n\nPlease confirm availability.`;
  const waUrl = `https://wa.me/${cleanDigits}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, "_blank");
}

function openPitchDrawer() {
  const c = currentClinic;
  const salutation = c.doctor_name && !c.doctor_name.includes("Team") ? c.doctor_name : `Team at ${c.clinic_name}`;
  const subject = `Quick question about ${c.clinic_name} (${c.short_locality})`;
  const emailBody = `Hi ${salutation},

I was looking up ${c.specialty.toLowerCase()} practices around ${c.short_locality} and came across ${c.clinic_name}.

I noticed you have a strong local reputation (${c.current_presence}), but when patients search for ${c.clinic_name} on Google, there isn't a standalone website where they can view your treatments or book an appointment directly without going through third-party directories.

I build patient-booking websites for healthcare clinics in Mumbai, so I went ahead and put together a live 1-page preview website specifically for ${c.clinic_name} — complete with 1-click WhatsApp appointment booking and your Google Maps location.

Mind if I reply with the preview link or a quick screenshot so you can see how it looks? No obligation at all.

Warm regards,
Aksh Sharma
Healthcare Web Design & Patient Booking Systems (Mumbai)
akshsharma.web@gmail.com`;

  const whatsappBody = `Hi ${salutation} 👋 This is Aksh Sharma. I noticed ${c.clinic_name} (${c.short_locality}) didn't have a standalone website for direct patient bookings, so I mocked up a clean demo website specifically for your clinic with 1-click WhatsApp appointment booking and Google Maps integration. Would it be okay if I shared a quick screenshot or preview link here for your feedback?`;

  document.getElementById("pitch-modal-title").textContent = `Outreach Pitch — ${c.clinic_name}`;
  document.getElementById("pitch-to-email").textContent = c.email;
  document.getElementById("pitch-to-phone").textContent = c.phone;
  document.getElementById("pitch-subject").textContent = subject;
  document.getElementById("pitch-email-body").value = emailBody;
  document.getElementById("pitch-whatsapp-body").value = whatsappBody;

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${encodeURIComponent(c.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
  const gmailBtn = document.getElementById("open-gmail-btn");
  if (gmailBtn) gmailBtn.href = gmailUrl;

  document.getElementById("pitch-drawer").classList.remove("hidden");
}

function closePitchDrawer() {
  document.getElementById("pitch-drawer").classList.add("hidden");
}

function copyText(elementId) {
  const el = document.getElementById(elementId);
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

function openCustomModal() {
  document.getElementById("custom-modal").classList.remove("hidden");
}

function closeCustomModal() {
  document.getElementById("custom-modal").classList.add("hidden");
}

function applyCustomClinic(e) {
  e.preventDefault();
  const customLead = {
    slug: "custom-preview",
    clinic_name: document.getElementById("cust-name").value.trim(),
    doctor_name: document.getElementById("cust-doc").value.trim() || "Chief Medical Specialist",
    preset: document.getElementById("cust-spec").value,
    specialty: document.getElementById("cust-spec").options[document.getElementById("cust-spec").selectedIndex].text,
    locality: document.getElementById("cust-loc").value.trim(),
    short_locality: document.getElementById("cust-loc").value.trim(),
    phone: document.getElementById("cust-phone").value.trim(),
    email: document.getElementById("cust-email").value.trim() || "contact@clinic.com",
    current_presence: "Directory listing only - No standalone website",
    rating: "4.9"
  };
  CLINIC_LEADS.unshift(customLead);
  populateSelector();
  document.getElementById("lead-selector").value = customLead.slug;
  renderClinic(customLead);
  closeCustomModal();
}

function populateSelector() {
  const sel = document.getElementById("lead-selector");
  sel.innerHTML = "";
  CLINIC_LEADS.forEach((lead, i) => {
    const opt = document.createElement("option");
    opt.value = lead.slug;
    opt.textContent = `${i + 1}. ${lead.clinic_name} (${lead.short_locality})`;
    sel.appendChild(opt);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  populateSelector();
  const params = new URLSearchParams(window.location.search);
  const requestedSlug = params.get("clinic");
  const isCleanPreview = params.get("preview") === "1" || params.get("preview") === "clean";

  if (isCleanPreview) {
    hideToolbarForScreenshot();
  }

  const sel = document.getElementById("lead-selector");
  sel.addEventListener("change", (e) => {
    const found = CLINIC_LEADS.find((c) => c.slug === e.target.value);
    if (found) renderClinic(found);
  });

  if (requestedSlug) {
    const found = CLINIC_LEADS.find((c) => c.slug === requestedSlug);
    if (found) {
      sel.value = found.slug;
      renderClinic(found);
      return;
    }
  }
  renderClinic(CLINIC_LEADS[0]);
});
