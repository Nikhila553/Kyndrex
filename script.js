// -------- Course Dropdown Toggle --------
document.querySelectorAll(".course-header").forEach((header) => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    item.classList.toggle("open");
  });
});

// -------- Course Search + Filter --------
const searchBar = document.getElementById("searchBar");
const filterButtons = document.querySelectorAll(".filter-btn");
const courses = document.querySelectorAll(".course-item");

// Search courses
if (searchBar) {
  searchBar.addEventListener("keyup", () => {
    const query = searchBar.value.toLowerCase();
    courses.forEach((course) => {
      const title = course.querySelector("h3").textContent.toLowerCase();
      course.style.display = title.includes(query) ? "block" : "none";
    });
  });
}

// Filter courses by category
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");
    courses.forEach((course) => {
      if (filter === "all" || course.dataset.category === filter) {
        course.style.display = "block";
      } else {
        course.style.display = "none";
      }
    });
  });
});

// -------- Scroll Reveal Animations --------
const elements = document.querySelectorAll(
  "section, .course-item, .job-card"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

elements.forEach((el) => observer.observe(el));

// -------- Back to Top Button --------
const backToTop = document.createElement("button");
backToTop.innerHTML = "⬆";
backToTop.id = "backToTop";
document.body.appendChild(backToTop);

// Style (move to CSS if you want)
backToTop.style.position = "fixed";
backToTop.style.bottom = "25px";
backToTop.style.right = "25px";
backToTop.style.padding = "10px 15px";
backToTop.style.border = "none";
backToTop.style.borderRadius = "50%";
backToTop.style.background = "#ff9800";
backToTop.style.color = "#fff";
backToTop.style.fontSize = "20px";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
backToTop.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
backToTop.style.zIndex = "999";

// Show/Hide on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

// Scroll to top smoothly
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});



