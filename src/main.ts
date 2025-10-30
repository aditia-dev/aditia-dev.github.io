import './style.css';
import { skills, projects, groupSkillsByCategory } from './data';

function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  const groupedSkills = groupSkillsByCategory(skills);
  
  container.innerHTML = Object.entries(groupedSkills)
    .map(([category, categorySkills]) => `
      <div class="skill-category" data-category="${category.toLowerCase()}">
        <h3 class="skill-category-title">${category}</h3>
        <div class="skill-tags">
          ${categorySkills.map(skill => `
            <span class="skill-badge" role="listitem">
              <span class="skill-icon" aria-hidden="true">${skill.icon}</span>
              <span class="skill-name">${skill.name}</span>
            </span>
          `).join('')}
        </div>
      </div>
    `).join('');
}

function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  container.innerHTML = projects.map((project, index) => `
    <article class="project-card" data-index="${index}">
      <div class="project-image">
        <img 
          src="${project.imageUrl || ''}" 
          alt="${project.title}" 
          loading="lazy"
          width="400"
          height="250"
        />
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${project.technologies.map(tech => `
            <span class="tech-tag">${tech}</span>
          `).join('')}
        </div>
        <div class="project-links">
          ${project.demoUrl ? `
            <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="View ${project.title} demo">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0a8 8 0 100 16A8 8 0 008 0zM.5 8a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z"/>
                <path d="M7.5 3.5v9h1v-9h-1z"/>
                <path d="M3.5 7.5v1h9v-1h-9z"/>
              </svg>
              Demo
            </a>
          ` : ''}
          ${project.githubUrl ? `
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="View ${project.title} on GitHub">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              GitHub
            </a>
          ` : ''}
        </div>
      </div>
    </article>
  `).join('');
}

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (!href) return;
      
      const target = document.querySelector(href);
      if (target) {
        const navHeight = document.querySelector('.navbar')?.clientHeight || 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

function setupStickyNav() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const navHeight = navbar.offsetHeight;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > navHeight) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });
}

function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.skill-category, .project-card').forEach(el => {
    observer.observe(el);
  });
}

function init() {
  renderSkills();
  renderProjects();
  setupSmoothScroll();
  setupStickyNav();
  
  requestAnimationFrame(() => {
    setupScrollAnimations();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
