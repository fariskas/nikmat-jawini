const REVIEWS = [
  {
    name: "Nur Khairiana",
    role: "Buyer",
    date: "15 January 2026",
    initials: "NK",
    photo: "assets/customers/khairiana.jpg",
    text: [
      "We are truly grateful to have Nikmat as our property agent. He guided us smoothly through both the selling of our home and the purchase of our new house for upgrading. The entire process was well-managed and stress-free.",
      "Nikmat is very knowledgeable and generous in sharing his insights, and we learned a lot from him throughout this journey. His guidance helped us make informed decisions with confidence. Highly recommended for anyone looking for a reliable and trustworthy agent.",
    ],
  },
  {
    name: "Mohd Redzuan Bin Jaafar",
    role: "Buyer",
    date: "17 February 2025",
    initials: "MR",
    photo: "assets/customers/redzuan.jpg",
    text: [
      "I had the pleasure of working with Nikmat and I can't thank him enough for his exceptional service. From the very beginning, he took the time to truly understand my situation — both physically and financially — ensuring that every option he presented aligned with my needs and comfort.",
      "His deep knowledge of the market, combined with his patience and attentiveness, made the entire process smooth and stress-free. He not only found me and my kids a home that met my criteria but also provided invaluable advice, ensuring I made the best decision for my future. His dedication, responsiveness and professionalism exceeded my expectations, and I always felt like a priority.",
      "If you're looking for an agent who genuinely cares about his clients and goes the extra mile, I highly recommend Nikmat. Thank you for making this experience such a positive one!",
    ],
  },
  {
    name: "Mohammed Adil Aprianto",
    role: "Buyer",
    date: "02 March 2026",
    initials: "MA",
    photo: "assets/customers/adil.jpg",
    text: [
      "I would like to sincerely thank Nikmat, my ERA real estate agent, for making my property journey such a smooth and positive experience. He was recommended to me by a close friend, and I started engaging him on 23 October 2025. From the very first discussion, his explanation was clear and easy to understand.",
      "Buying a property can be stressful, but Nikmat ensured that everything was properly explained and handled professionally. He was responsive, patient and transparent at every stage — from viewing units to handling documentation and coordinating with the necessary parties. I never felt pressured, and I always felt that my interests came first.",
      "He also went the extra mile by explaining important aspects of property ownership beyond just the purchase itself. He shared valuable insights about long-term planning, including how property can support savings plans and retirement planning. That level of care and forward-thinking advice really impressed me.",
      "Today, 02 March 2026, I finally received my keys after about six months of waiting since we started the process. Looking back, the six months actually felt fast because everything was handled smoothly and professionally. Without hesitation, I will recommend Nikmat to others who are looking for a trustworthy and committed real estate agent.",
    ],
  },
  {
    name: "Muhammad Khedir",
    role: "Buyer",
    date: "06 July 2026",
    initials: "MK",
    photo: "assets/customers/khedir.jpg",
    text: [
      "I had a very good experience working with Nikmat from ERA. He is very proactive and always keeps me updated without fail. I never had to chase him for any information. His communication is clear, prompt and professional throughout the whole process.",
      "What I appreciate most is that Nikmat is reliable, sincere and genuinely committed to helping his clients. He takes the initiative, explains everything patiently, and makes sure every detail is well taken care of. It really gave me peace of mind knowing he was handling everything.",
      "Thank you, Nikmat, for your dedication and excellent service. I would highly recommend you to anyone looking for a trustworthy, responsible and dependable property agent.",
    ],
  },
  {
    name: "Bella Ariffin",
    role: "Buyer",
    date: "03 March 2025",
    initials: "BA",
    photo: "assets/customers/bella.jpg",
    text: [
      "We are incredibly grateful to Nikmat for helping us upgrade from our 4-room BTO to a 5-room EA. From the very beginning, he has been nothing short of exceptional — accommodating, patient, and always willing to go the extra mile to ensure we had a smooth and stress-free experience.",
      "Nikmat took the time to explain every step of the buying and selling process clearly, ensuring we understood the complexities of the property market in Singapore. His honesty and transparency were truly refreshing, and it gave us confidence in making informed decisions without any pressure.",
      "What makes Nikmat stand out even more is his warmth and authenticity. He didn't just help us buy and sell a house — he made the entire journey feel personal and meaningful. More than just a real estate agent, he has become a trusted friend, someone we know we can always count on for guidance and support.",
      "If you're looking for a real estate agent who is professional, knowledgeable and genuinely cares about your needs, we cannot recommend Nikmat enough. Thank you, Nikmat, for your dedication, hard work, and for making this such a smooth and rewarding experience for us!",
    ],
  },
  {
    name: "Irna Nurlina",
    role: "Buyer",
    date: "02 July 2026",
    initials: "IN",
    photo: "assets/customers/irna.jpg",
    text: [
      "Agent Nik makes it a priority to know the client's current needs and future plans in order to suggest appropriate property to view and decide on, as well as how best to finance the purchase that suits the client's personal situation.",
      "He gives his own view about what he would do if it were his decision, while giving the client options to consider. He is professional, patient, and timely with responses. He knows the market and ways to manage situations and people.",
    ],
  },
  {
    name: "Dewi",
    role: "Seller",
    date: "02 December 2025",
    initials: "DW",
    photo: "assets/customers/dewi.jpg",
    text: [
      "Nikmat has provided us with truly outstanding service from start to finish. Despite the slow property market, he managed to sell our flat at the exact price we wanted — something we deeply appreciate given the challenging conditions. We were also able to secure a flat that is affordable and priced lower than others in the area.",
      "Throughout the entire process, he was always readily available and consistently kept us updated on the progress of both our sale and purchase. There was absolutely no need for us to chase for information. His detailed updates and proactive communication gave us complete confidence and peace of mind.",
      "He reassured us from the beginning that we could rely 100% on him, and he truly lived up to that promise. Because of his efficiency and commitment, we hardly had to get involved in the more complex parts of the process — he took care of everything seamlessly.",
      "The trust we placed in him was fully justified, and he delivered above and beyond our expectations. We will definitely reach out to him again for any future property matters. Thank you so much, Nikmat!",
    ],
  },
];
const CRITERIA = [
  "Communication",
  "Client Dedication",
  "Value-added Services",
  "Process Expertise",
  "Market Knowledge",
  "Reliability",
  "Marketing Skills",
  "Negotiation Skills",
];

const track = document.getElementById("track");
track.innerHTML = REVIEWS.map((r) => {
  const shot = r.photo
    ? `<img src="${r.photo}" alt="Nikmat Jawini with clients"><span class="stamp">Handover day</span>`
    : `<div class="monogram"><span class="mk">${r.initials}</span><span class="ms">${r.role}</span></div>`;
  return `<article class="slide"><div class="slide-in">
    <figure class="shot" style="margin:0">${shot}</figure>
    <div class="rev-pad">
<div class="rev-meta">
  <span class="rev-name">${r.name}</span>
  <span class="rev-role">${r.role}</span>
  <span class="rev-date">${r.date}</span>
</div>
<div class="stars" aria-label="5 out of 5">★★★★★</div>
<div class="rev-body clamp">${r.text.map((p) => `<p>${p}</p>`).join("")}</div>
<button class="rev-more" type="button" hidden>Read more</button>
<div class="pills">${CRITERIA.map((c) => `<span class="pill">${c} <b>5.0</b></span>`).join("")}</div>
    </div></div></article>`;
}).join("");

const slides = [...track.children],
  dots = document.getElementById("dots");
let i = 0,
  timer = null;
document.getElementById("tot").textContent = String(
  slides.length,
).padStart(2, "0");
slides.forEach((_, n) => {
  const b = document.createElement("button");
  b.className = "dot";
  b.setAttribute("role", "tab");
  b.setAttribute("aria-label", "Review " + (n + 1));
  b.addEventListener("click", () => {
    go(n);
    stop();
  });
  dots.appendChild(b);
});
function go(n) {
  i = (n + slides.length) % slides.length;
  track.style.transform = `translate3d(${-i * 100}%,0,0)`;
  [...dots.children].forEach((d, k) =>
    d.classList.toggle("is-on", k === i),
  );
  slides.forEach((s, k) => s.setAttribute("aria-hidden", k !== i));
  document.getElementById("cur").textContent = String(i + 1).padStart(
    2,
    "0",
  );
  setH();
}
function stop() {
  clearInterval(timer);
  timer = null;
}
document.getElementById("next").addEventListener("click", () => {
  go(i + 1);
  stop();
});
document.getElementById("prev").addEventListener("click", () => {
  go(i - 1);
  stop();
});
const car = document.getElementById("carousel");
car.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    go(i + 1);
    stop();
  }
  if (e.key === "ArrowLeft") {
    go(i - 1);
    stop();
  }
});
let x0 = null;
car.addEventListener(
  "touchstart",
  (e) => {
    x0 = e.touches[0].clientX;
  },
  { passive: true },
);
car.addEventListener(
  "touchend",
  (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 48) {
      go(dx < 0 ? i + 1 : i - 1);
      stop();
    }
    x0 = null;
  },
  { passive: true },
);
const viewport = track.parentElement;
function setH() {
  viewport.style.height = slides[i].offsetHeight + "px";
}
function syncClamp() {
  track.querySelectorAll(".rev-body").forEach((body) => {
    if (body.dataset.expanded === "1") return;
    body.classList.add("clamp");
    const btn = body.nextElementSibling;
    if (body.scrollHeight - 1 > body.clientHeight) {
      btn.hidden = false;
      btn.textContent = "Read more";
    } else {
      body.classList.remove("clamp");
      btn.hidden = true;
    }
  });
}
track.querySelectorAll(".rev-more").forEach((btn) => {
  btn.addEventListener("click", () => {
    const body = btn.previousElementSibling;
    const expanded = !body.classList.toggle("clamp");
    body.dataset.expanded = expanded ? "1" : "";
    btn.textContent = expanded ? "Read less" : "Read more";
    setH();
  });
});
function refresh() {
  syncClamp();
  setH();
}
syncClamp();
go(0);
window.addEventListener("load", refresh);
if (document.fonts && document.fonts.ready)
  document.fonts.ready.then(refresh);
let carRz;
window.addEventListener("resize", () => {
  clearTimeout(carRz);
  carRz = setTimeout(refresh, 150);
});
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  timer = setInterval(() => go(i + 1), 9000);
  car.addEventListener("mouseenter", () => {
    if (timer) {
      clearInterval(timer);
      timer = "p";
    }
  });
  car.addEventListener("mouseleave", () => {
    if (timer === "p") timer = setInterval(() => go(i + 1), 9000);
  });
}

const burger = document.querySelector(".burger"),
  menu = document.getElementById("menu");
burger.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    menu.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  }
});
const navLinks = [...menu.querySelectorAll("a")];
const spy = new IntersectionObserver(
  (es) => {
    es.forEach((e) => {
      if (e.isIntersecting) {
        navLinks.forEach((a) =>
          a.classList.toggle(
            "is-active",
            a.getAttribute("href") === "#" + e.target.id,
          ),
        );
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px" },
);
["top", "why", "offer", "awards", "reviews", "contact"].forEach((id) => {
  const el = document.getElementById(id);
  if (el) spy.observe(el);
});
const rv = new IntersectionObserver(
  (es) => {
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        rv.unobserve(e.target);
      }
    });
  },
  { rootMargin: "0px 0px -8% 0px" },
);
document.querySelectorAll(".rv").forEach((el, n) => {
  el.style.transitionDelay = (n % 3) * 70 + "ms";
  rv.observe(el);
});

/* ---------- marquee: measure one set so the loop is exactly seamless ---------- */
function sizeMarquee() {
  document.querySelectorAll(".marquee").forEach((m) => {
    const t = m.querySelector(".marquee-track");
    const kids = [...t.children];
    if (kids.length < 2) return;
    const half = kids.length / 2;
    let w = 0;
    for (let i = 0; i < half; i++) {
      const el = kids[i];
      w +=
        el.getBoundingClientRect().width +
        parseFloat(getComputedStyle(el).marginRight || 0);
    }
    if (!w) return;
    t.style.width = w * 2 + "px";
    t.style.setProperty("--shift", w + "px");
    t.style.animationDuration =
      (w / (window.innerWidth >= 900 ? 80 : 62)).toFixed(2) + "s"; // ~80px/sec desktop, 62 mobile
  });
}
sizeMarquee();
window.addEventListener("load", sizeMarquee);
let mqT;
window.addEventListener("resize", () => {
  clearTimeout(mqT);
  mqT = setTimeout(sizeMarquee, 180);
});

document.getElementById("yr").textContent = new Date().getFullYear();
    
