/* ---------- reviews carousel (slides are in index.html for SEO) ---------- */
const track = document.getElementById("track");
const slides = [...track.children];
const dots = document.getElementById("dots");
const N = slides.length;
const viewport = track.parentElement;
const car = document.getElementById("carousel");
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let pos = 1,
  real = 0,
  timer = null,
  loopT = null,
  xslides = slides;
document.getElementById("tot").textContent = String(N).padStart(2, "0");

// dots
slides.forEach((_, n) => {
  const b = document.createElement("button");
  b.className = "dot";
  b.setAttribute("role", "tab");
  b.setAttribute("aria-label", "Review " + (n + 1));
  b.addEventListener("click", () => {
    goTo(n);
    stop();
  });
  dots.appendChild(b);
});

// clamp + read-more (real slides only; clones inherit the state)
function syncClamp() {
  slides.forEach((slide) => {
    const body = slide.querySelector(".rev-body");
    if (!body || body.dataset.expanded === "1") return;
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
slides.forEach((slide) => {
  const btn = slide.querySelector(".rev-more");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const body = btn.previousElementSibling;
    const expanded = !body.classList.toggle("clamp");
    body.dataset.expanded = expanded ? "1" : "";
    btn.textContent = expanded ? "Read less" : "Read more";
    setH();
  });
});
syncClamp();

// clones for seamless infinite loop: [ lastClone, s0..sN-1, firstClone ]
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[N - 1].cloneNode(true);
[firstClone, lastClone].forEach((c) => c.setAttribute("aria-hidden", "true"));
track.insertBefore(lastClone, slides[0]);
track.appendChild(firstClone);
xslides = [...track.children]; // real slide k is at index k+1

function place(animate) {
  if (!animate) track.style.transition = "none";
  track.style.transform = `translate3d(${-pos * 100}%,0,0)`;
  if (!animate) {
    void track.offsetWidth; // reflow so the snap is not animated
    track.style.transition = "";
  }
}
function updateUI() {
  [...dots.children].forEach((d, k) => d.classList.toggle("is-on", k === real));
  slides.forEach((s, k) => s.setAttribute("aria-hidden", k !== real));
  document.getElementById("cur").textContent = String(real + 1).padStart(2, "0");
}
function setH() {
  viewport.style.height = xslides[pos].offsetHeight + "px";
}
function normalize() {
  if (pos === 0) {
    pos = N;
    place(false);
    setH();
  } else if (pos === N + 1) {
    pos = 1;
    place(false);
    setH();
  }
}
function go(dir) {
  if (pos === 0 || pos === N + 1) normalize(); // resolve a pending loop first
  pos += dir;
  real = (real + dir + N) % N;
  updateUI();
  place(true);
  setH();
  if (reduce) normalize();
  else if (pos === 0 || pos === N + 1) {
    clearTimeout(loopT); // backup in case transitionend doesn't fire
    loopT = setTimeout(normalize, 700);
  }
}
function goTo(k) {
  if (pos === 0 || pos === N + 1) normalize();
  real = k;
  pos = k + 1;
  updateUI();
  place(true);
  setH();
}
function stop() {
  clearInterval(timer);
  timer = null;
}
track.addEventListener("transitionend", (e) => {
  if (e.target !== track || e.propertyName !== "transform") return;
  normalize();
});
document.getElementById("next").addEventListener("click", () => {
  go(1);
  stop();
});
document.getElementById("prev").addEventListener("click", () => {
  go(-1);
  stop();
});
car.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    go(1);
    stop();
  }
  if (e.key === "ArrowLeft") {
    go(-1);
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
      go(dx < 0 ? 1 : -1);
      stop();
    }
    x0 = null;
  },
  { passive: true },
);
function refresh() {
  syncClamp();
  setH();
}
place(false);
updateUI();
setH();
window.addEventListener("load", refresh);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
let carRz;
window.addEventListener("resize", () => {
  clearTimeout(carRz);
  carRz = setTimeout(refresh, 150);
});
if (!reduce) {
  timer = setInterval(() => go(1), 9000);
  car.addEventListener("mouseenter", () => {
    if (timer) {
      clearInterval(timer);
      timer = "p";
    }
  });
  car.addEventListener("mouseleave", () => {
    if (timer === "p") timer = setInterval(() => go(1), 9000);
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
      (w / (window.innerWidth >= 900 ? 115 : 62)).toFixed(2) + "s"; // ~115px/sec desktop, 62 mobile
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
    

/* ---------- TikTok Pixel: click + section-view events ---------- */
function ttTrack(event, props) {
  try {
    if (window.ttq) window.ttq.track(event, props);
  } catch (_) {}
}
// where on the page a click came from: nav, hero, why, offer, reviews, contact, footer…
function ttWhere(el) {
  const s = el.closest("section[id], section.hero, header, footer");
  if (!s) return "page";
  if (s.id) return s.id;
  if (s.classList.contains("hero")) return "hero";
  return s.tagName.toLowerCase() === "header" ? "nav" : "footer";
}
document.addEventListener("click", (e) => {
  const a = e.target.closest("a[href]");
  if (!a) return;
  const href = a.getAttribute("href");
  const where = ttWhere(a);
  if (href.includes("wa.me")) {
    ttTrack("Contact", { content_name: "whatsapp", description: where });
  } else if (href.startsWith("tel:")) {
    ttTrack("Contact", { content_name: "phone", description: where });
  } else if (href.includes("instagram.com")) {
    ttTrack("ClickButton", { content_name: "instagram", description: where });
  } else if (href.includes("propertyportal.era.com.sg")) {
    ttTrack("ClickButton", { content_name: "era_reviews", description: where });
  } else if (href.startsWith("#")) {
    ttTrack("ClickButton", {
      content_name: "goto_" + (href.slice(1) || "top"),
      description: where,
    });
  }
});
// fire once per section, when it reaches the middle of the screen
const ttSeen = new IntersectionObserver(
  (es) => {
    es.forEach((e) => {
      if (!e.isIntersecting) return;
      ttTrack("ViewContent", {
        content_id: e.target.id,
        content_name: "section_" + e.target.id,
        content_type: "product",
      });
      ttSeen.unobserve(e.target);
    });
  },
  { rootMargin: "-50% 0px -50% 0px" },
);
["why", "offer", "awards", "reviews", "contact"].forEach((id) => {
  const el = document.getElementById(id);
  if (el) ttSeen.observe(el);
});
