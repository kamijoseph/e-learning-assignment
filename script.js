// Sample course data
const courses = [
  {
    id: 1,
    title: "JavaScript Basics",
    lessons: ["Variables", "Functions", "Loops", "DOM Manipulation"],
    completed: false
  },
  {
    id: 2,
    title: "HTML & CSS Fundamentals",
    lessons: ["HTML Tags", "CSS Selectors", "Flexbox", "Responsive Design"],
    completed: false
  },
  {
    id: 3,
    title: "Python for Beginners",
    lessons: ["Variables", "Control Flow", "Functions", "Modules"],
    completed: false
  }
];

const courseListEl = document.getElementById("course-list");
const courseDetailEl = document.getElementById("course-detail");
const courseTitleEl = document.getElementById("course-title");
const lessonListEl = document.getElementById("lesson-list");
const completeBtn = document.getElementById("complete-btn");
const backBtn = document.getElementById("back-btn");

function renderCourseList() {
  courseListEl.innerHTML = "";
  courses.forEach(course => {
    const courseItem = document.createElement("div");
    courseItem.className = "course-item";
    courseItem.innerHTML = `
      <span>${course.title}</span>
      <span>${course.completed ? "✅ Completed" : "🕒 Not Completed"}</span>
    `;
    courseItem.addEventListener("click", () => showCourseDetail(course.id));
    courseListEl.appendChild(courseItem);
  });
}

function showCourseDetail(courseId) {
  const course = courses.find(c => c.id === courseId);
  courseTitleEl.textContent = course.title;
  lessonListEl.innerHTML = "";
  course.lessons.forEach(lesson => {
    const li = document.createElement("li");
    li.textContent = lesson;
    lessonListEl.appendChild(li);
  });
  
  completeBtn.onclick = () => {
    course.completed = true;
    renderCourseList();
    alert(`Course "${course.title}" marked as completed!`);
  };

  courseListEl.classList.add("hidden");
  courseDetailEl.classList.remove("hidden");
}

backBtn.addEventListener("click", () => {
  courseDetailEl.classList.add("hidden");
  courseListEl.classList.remove("hidden");
});

renderCourseList();