/**
 * ==============================================================================
 * PORTFOLIO SALAH ATMANE - APP.JS
 * Trilingual Engine (FR / EN / AR RTL), Theme Switcher & Modal Controllers
 * ==============================================================================
 */

(function () {
  'use strict';

  // État de l'application
  let currentLang = localStorage.getItem('salah_portfolio_lang') || 'fr';
  let currentTheme = localStorage.getItem('salah_portfolio_theme') || 'dark';

  // Éléments du DOM
  const htmlRoot = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const langButtons = document.querySelectorAll('.lang-btn');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  // Modales
  const videoModal = document.getElementById('video-modal');
  const videoFrame = document.getElementById('video-frame');
  const videoModalTitle = document.getElementById('video-modal-title');
  const videoCloseBtn = document.getElementById('video-close-btn');

  const imageModal = document.getElementById('image-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const imageModalTitle = document.getElementById('image-modal-title');
  const imageModalCounter = document.getElementById('image-modal-counter');
  const lightboxPrevBtn = document.getElementById('lightbox-prev-btn');
  const lightboxNextBtn = document.getElementById('lightbox-next-btn');
  const lightboxThumbsWrap = document.getElementById('lightbox-thumbnails-wrap');
  const imageCloseBtn = document.getElementById('image-close-btn');

  // Registre des galeries pour navigation fluide et sécurisée (sans bug d'apostrophe)
  window.galleryRegistry = {};
  let activeGallery = null;
  let activeGalleryIndex = 0;

  // Helper pour extraire l'ID YouTube
  function getYouTubeId(url) {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  }

  // --------------------------------------------------------------------------
  // GESTION DU THÈME (Dark / Light)
  // --------------------------------------------------------------------------
  function applyTheme(theme) {
    currentTheme = theme;
    htmlRoot.setAttribute('data-theme', theme);
    localStorage.setItem('salah_portfolio_theme', theme);

    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = theme === 'dark' 
        ? '<i class="fa-solid fa-sun"></i>' 
        : '<i class="fa-solid fa-moon"></i>';
      themeToggleBtn.setAttribute('title', theme === 'dark' ? 'Passer au mode clair' : 'Passer au mode sombre');
    }
  }

  function toggleTheme() {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  }

  // --------------------------------------------------------------------------
  // GESTION DES LANGUES & RTL
  // --------------------------------------------------------------------------
  function setLanguage(lang) {
    if (!['fr', 'en', 'ar'].includes(lang)) lang = 'fr';
    currentLang = lang;
    localStorage.setItem('salah_portfolio_lang', lang);

    // RTL pour l'Arabe, LTR pour Français & Anglais
    const isRtl = (lang === 'ar');
    htmlRoot.setAttribute('lang', lang);
    htmlRoot.setAttribute('dir', isRtl ? 'rtl' : 'ltr');

    // Mise à jour des boutons de langue
    langButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Rendu complet du contenu
    renderPortfolio();
  }

  // Helper de traduction
  function t(obj) {
    if (!obj) return '';
    return obj[currentLang] || obj['fr'] || obj['en'] || '';
  }

  // --------------------------------------------------------------------------
  // RENDU DYNAMIQUE DU PORTFOLIO
  // --------------------------------------------------------------------------
  function renderPortfolio() {
    const data = window.portfolioData;
    if (!data) return;

    window.galleryRegistry = {};

    // 1. Navigation Links
    document.querySelectorAll('[data-nav]').forEach(el => {
      const key = el.getAttribute('data-nav');
      if (data.ui.nav[key]) {
        el.textContent = t(data.ui.nav[key]);
      }
    });

    // 2. Hero Section
    const profile = data.profile;
    document.getElementById('hero-name').textContent = t(profile.name);
    document.getElementById('hero-title').textContent = t(profile.title);
    document.getElementById('hero-subtitle').textContent = t(profile.subtitle);
    document.getElementById('hero-school').innerHTML = `<i class="fa-solid fa-graduation-cap"></i> <a href="${profile.schoolUrl}" target="_blank" rel="noopener" class="school-link">${t(profile.school)}</a>`;
    document.getElementById('hero-status-badge').textContent = t(profile.statusObjective);
    document.getElementById('hero-bio').textContent = t(profile.bio);

    // Boutons Hero CTA
    document.getElementById('cta-contact').innerHTML = `<i class="fa-solid fa-paper-plane"></i> ${t(data.ui.hero.ctaContact)}`;
    document.getElementById('cta-cv').innerHTML = `<i class="fa-solid fa-file-arrow-down"></i> ${t(data.ui.hero.ctaCv)}`;
    document.getElementById('cta-projects').innerHTML = `<i class="fa-solid fa-layer-group"></i> ${t(data.ui.hero.ctaProjects)}`;

    // Avatar
    const avatarEl = document.getElementById('hero-avatar');
    if (avatarEl) {
      avatarEl.src = profile.avatar;
      avatarEl.onerror = () => {
        avatarEl.src = 'assets/img/profile/avatar-placeholder.svg';
      };
    }

    // 3. Stats Counters
    const statsContainer = document.getElementById('stats-container');
    if (statsContainer) {
      statsContainer.innerHTML = data.stats.map(s => {
        const val = currentLang === 'ar' ? s.valueAr : (currentLang === 'en' ? s.valueEn : s.value);
        return `
          <div class="stat-item">
            <div class="stat-val">${val}</div>
            <div class="stat-label">${t(s.label)}</div>
          </div>
        `;
      }).join('');
    }

    // 4. Section Headers (Titres & Sous-titres)
    const uiSec = data.ui.sections;
    setSecHeader('internships', uiSec.internshipsTitle, uiSec.internshipsSubtitle);
    setSecHeader('visits', uiSec.visitsTitle, uiSec.visitsSubtitle);
    setSecHeader('projects', uiSec.projectsTitle, uiSec.projectsSubtitle);
    setSecHeader('activities', uiSec.activitiesTitle, uiSec.activitiesSubtitle);
    setSecHeader('skills', uiSec.skillsTitle, uiSec.skillsSubtitle);
    setSecHeader('contact', uiSec.contactTitle, uiSec.contactSubtitle);

    // 5. Projets Phares
    renderProjects(data.projects);

    // 6. Stages en Entreprise
    renderInternships(data.internships);
    attachVideoListeners(); // Fix: internship video buttons

    // 7. Visites Industrielles & Immersion
    renderVisits(data.visits);

    // 8. Clubs & Leadership
    renderActivities(data.activities);

    // 9. Compétences
    renderSkills(data.skills);

    // 10. Contact & Footer
    renderContact(profile, data.ui);
  }

  function setSecHeader(id, titleObj, subtitleObj) {
    const titleEl = document.getElementById(`${id}-section-title`);
    const subEl = document.getElementById(`${id}-section-sub`);
    if (titleEl) titleEl.textContent = t(titleObj);
    if (subEl) subEl.textContent = t(subtitleObj);
  }

  // Helper pour afficher les médias (image principale + strip de miniatures)
  // Utilise un galleryId sécurisé sans apostrophe pour éviter tout bug d'échappement en français
  function renderCardMedia(galleryId, images, title) {
    if (!images || images.length === 0) return '';

    // Enregistrement dans le registre global pour la navigation dans la catégorie
    window.galleryRegistry[galleryId] = {
      id: galleryId,
      title: title,
      images: images
    };

    const mainImg = images[0];
    const moreCount = images.length - 1;
    let thumbsHtml = '';

    if (images.length > 1) {
      thumbsHtml = `
        <div class="card-gallery-strip">
          ${images.slice(1, 4).map((img, idx) => `
            <div class="gallery-thumb" onclick="window.portfolioApp.openGallery('${galleryId}', ${idx + 1})" title="${title}">
              <img src="${img}" alt="${title}" loading="lazy">
            </div>
          `).join('')}
          ${moreCount > 3 ? `<div class="gallery-more-badge" onclick="window.portfolioApp.openGallery('${galleryId}', 4)">+${moreCount - 3}</div>` : ''}
        </div>
      `;
    }

    return `
      <div class="card-img-preview" onclick="window.portfolioApp.openGallery('${galleryId}', 0)" title="${title}">
        <img src="${mainImg}" alt="${title}" loading="lazy" onerror="this.parentElement.style.display='none'">
        <div class="preview-overlay"><i class="fa-solid fa-expand"></i></div>
      </div>
      ${thumbsHtml}
    `;
  }

  // Rendu des Projets
  function renderProjects(projects) {
    const container = document.getElementById('projects-container');
    if (!container) return;

    container.innerHTML = projects.map(p => {
      const awardHtml = p.award ? `
        <div class="award-ribbon">
          <i class="fa-solid fa-trophy"></i>
          <span>${t(p.award)}</span>
        </div>
      ` : '';

      const tagsHtml = p.tags.map(tag => {
        const label = (typeof tag === 'object' && tag !== null) ? (currentLang === 'fr' ? tag.fr : tag.en) : tag;
        return `<span class="tag">${label}</span>`;
      }).join('');

      // Boutons vidéo multiples ou uniques
      let videoBtns = '';
      if (p.videos && p.videos.length > 0) {
        videoBtns = p.videos.map((v, i) => `
          <button class="action-btn primary video-trigger-btn" data-url="${v.url}" data-title="${t(v.title) || t(p.title)}">
            <i class="fa-solid fa-play"></i> ${t(v.title) || t(window.portfolioData.ui.buttons.viewDemo)}
          </button>
        `).join('');
      }

      const githubBtn = p.github ? `
        <a href="${p.github}" target="_blank" rel="noopener" class="action-btn">
          <i class="fa-brands fa-github"></i> ${t(window.portfolioData.ui.buttons.viewCode)}
        </a>
      ` : '';

      const mediaHtml = renderCardMedia('proj-' + p.id, p.images, t(p.title));

      return `
        <article class="card project-card" id="project-${p.id}">
          <div class="card-top">
            <span class="card-meta"><i class="fa-regular fa-calendar"></i> ${t(p.period)}</span>
            <span class="card-company">${t(p.context)}</span>
          </div>
          ${awardHtml}
          <h3 class="card-title">${t(p.title)}</h3>
          <p class="card-desc">${t(p.description)}</p>
          ${mediaHtml}
          <div class="tags-wrap">${tagsHtml}</div>
          <div class="card-actions">
            ${githubBtn}
            ${videoBtns}
          </div>
        </article>
      `;
    }).join('');

    attachVideoListeners();
  }

  // Rendu des Stages
  function renderInternships(internships) {
    const container = document.getElementById('internships-container');
    if (!container) return;

    container.innerHTML = internships.map(item => {
      const tagsHtml = item.tags.map(tag => {
        const label = (typeof tag === 'object' && tag !== null) ? (currentLang === 'fr' ? tag.fr : tag.en) : tag;
        return `<span class="tag">${label}</span>`;
      }).join('');

      let videoBtns = '';
      if (item.videos && item.videos.length > 0) {
        videoBtns = item.videos.map(v => `
          <button class="action-btn primary video-trigger-btn" data-url="${v.url}" data-title="${t(v.title) || item.company}">
            <i class="fa-solid fa-play"></i> ${t(v.title) || t(window.portfolioData.ui.buttons.viewDemo)}
          </button>
        `).join('');
      }

      const githubBtn = item.github ? `
        <a href="${item.github}" target="_blank" rel="noopener" class="action-btn">
          <i class="fa-brands fa-github"></i> ${t(window.portfolioData.ui.buttons.viewCode)}
        </a>
      ` : '';

      const logoHtml = item.logo ? `<img src="${item.logo}" alt="${item.company}" class="card-logo">` : '';
      const mediaHtml = renderCardMedia('intern-' + item.id, item.images, item.company);

      return `
        <article class="card internship-card">
          <div class="card-top">
            <span class="card-meta"><i class="fa-regular fa-clock"></i> ${t(item.period)}</span>
            <div class="card-company-wrap">
              ${logoHtml}
              <span class="card-company">${item.company} ${item.location ? `• ${item.location}` : ''}</span>
            </div>
          </div>
          <h3 class="card-title">${t(item.role)}</h3>
          <p class="card-desc">${t(item.description)}</p>
          ${mediaHtml}
          <div class="tags-wrap">${tagsHtml}</div>
          ${(githubBtn || videoBtns) ? `<div class="card-actions">${githubBtn} ${videoBtns}</div>` : ''}
        </article>
      `;
    }).join('');
  }

  // Rendu des Visites Industrielles
  function renderVisits(visits) {
    const container = document.getElementById('visits-container');
    if (!container) return;

    container.innerHTML = visits.map(v => {
      const mediaHtml = renderCardMedia('visit-' + v.id, v.images, t(v.title));
      return `
        <article class="card visit-card">
          <div class="card-top">
            <span class="card-meta"><i class="fa-regular fa-calendar-check"></i> ${t(v.date)}</span>
            <span class="badge-tag">${t(v.badge)}</span>
          </div>
          <h3 class="card-title">${t(v.title)}</h3>
          <p class="card-desc">${t(v.description)}</p>
          ${mediaHtml}
        </article>
      `;
    }).join('');
  }

  // Rendu des Clubs & Leadership
  function renderActivities(activities) {
    const container = document.getElementById('activities-container');
    if (!container) return;

    container.innerHTML = activities.map(act => {
      const logoHtml = act.logo ? `<img src="${act.logo}" alt="${t(act.title)}" class="card-logo">` : '';
      const mediaHtml = renderCardMedia('act-' + act.id, act.images, t(act.title));
      return `
        <article class="card activity-card">
          <div class="card-top">
            <span class="card-meta"><i class="fa-regular fa-calendar-days"></i> ${t(act.period)}</span>
            ${logoHtml}
          </div>
          <h3 class="card-title">${t(act.title)}</h3>
          <div class="card-role"><i class="fa-solid fa-user-gear"></i> ${t(act.role)}</div>
          <p class="card-desc">${t(act.description)}</p>
          ${mediaHtml}
        </article>
      `;
    }).join('');
  }

  // Rendu des Compétences (Piliers classés)
  function renderSkills(skillsData) {
    const container = document.getElementById('skills-container');
    if (!container) return;

    const iconMap = {
      'cogs': 'fa-solid fa-gears',
      'truck-fast': 'fa-solid fa-truck-ramp-box',
      'database': 'fa-solid fa-database',
      'code': 'fa-solid fa-laptop-code',
      'globe': 'fa-solid fa-language'
    };

    container.innerHTML = skillsData.categories.map(cat => {
      const subgroupsHtml = cat.subgroups.map(sub => `
        <div class="subgroup">
          <div class="subgroup-title">${t(sub.name)}</div>
          <div class="skill-chips">
            ${sub.items.map(item => {
              const label = (typeof item === 'object' && item !== null) ? (currentLang === 'fr' ? item.fr : item.en) : item;
              return `<span class="skill-chip">${label}</span>`;
            }).join('')}
          </div>
        </div>
      `).join('');

      return `
        <div class="skill-pillar">
          <div class="pillar-header">
            <div class="pillar-icon"><i class="${iconMap[cat.icon] || 'fa-solid fa-check'}"></i></div>
            <h3 class="pillar-title">${t(cat.title)}</h3>
          </div>
          ${subgroupsHtml}
        </div>
      `;
    }).join('');
  }

  // Rendu Contact & Footer
  function renderContact(profile, ui) {
    document.getElementById('contact-email-btn').setAttribute('href', `mailto:${profile.email}`);
    document.getElementById('contact-email-text').textContent = profile.email;

    document.getElementById('contact-phone-btn').setAttribute('href', `tel:${profile.phoneFormatted}`);
    document.getElementById('contact-phone-text').textContent = profile.phone;

    document.getElementById('contact-linkedin-btn').setAttribute('href', profile.linkedin);
    document.getElementById('contact-github-btn').setAttribute('href', profile.github);

    // CV Download link
    const cvBtn = document.getElementById('cta-cv');
    if (cvBtn) {
      cvBtn.setAttribute('href', profile.cvPath);
      cvBtn.setAttribute('download', 'CV_Salah_ATMANE.pdf');
    }

    // Copy email text translation
    const copyEmailTextEl = document.getElementById('copy-email-text');
    if (copyEmailTextEl && ui.buttons.copyEmail) {
      copyEmailTextEl.textContent = t(ui.buttons.copyEmail);
    }

    // Footer
    document.getElementById('footer-tagline').textContent = t(ui.footer.tagline);
    document.getElementById('footer-rights').textContent = `© ${new Date().getFullYear()} ${t(profile.name)}. ${t(ui.footer.rights)}`;
  }

  // --------------------------------------------------------------------------
  // ATTACHMENT DES LISTENERS VIDEO & LIGHTBOX
  // --------------------------------------------------------------------------
  function attachVideoListeners() {
    document.querySelectorAll('.video-trigger-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const url = btn.getAttribute('data-url');
        const title = btn.getAttribute('data-title') || 'Démo Vidéo';
        openVideoModal(title, url);
      });
    });
  }

  function openVideoModal(title, url) {
    const videoId = getYouTubeId(url);
    const extBtn = document.getElementById('video-external-btn');
    const footerBtn = document.getElementById('video-footer-btn');
    const noticeText = document.getElementById('video-notice-text');
    const footerBtnText = document.getElementById('video-footer-btn-text');

    const directWatchUrl = url || (videoId ? `https://www.youtube.com/watch?v=${videoId}` : '#');
    if (extBtn) extBtn.href = directWatchUrl;
    if (footerBtn) footerBtn.href = directWatchUrl;

    if (noticeText && window.portfolioData.ui.buttons.videoNotice) {
      noticeText.innerHTML = `<i class="fa-solid fa-circle-info"></i> ${t(window.portfolioData.ui.buttons.videoNotice)}`;
    }
    if (footerBtnText && window.portfolioData.ui.buttons.watchOnYoutube) {
      footerBtnText.textContent = t(window.portfolioData.ui.buttons.watchOnYoutube);
    }

    if (!videoId) {
      window.open(url, '_blank');
      return;
    }

    videoModalTitle.textContent = title;
    // Utilisation de youtube-nocookie avec referrerpolicy pour une compatibilité maximale
    videoFrame.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&enablejsapi=1`;
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeVideoModal() {
    videoFrame.src = '';
    videoModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // --------------------------------------------------------------------------
  // GESTIONNAIRE DE GALERIE LIGHTBOX AVANCÉE
  // --------------------------------------------------------------------------
  function openGallery(galleryId, initialIndex) {
    const gal = window.galleryRegistry[galleryId];
    if (!gal || !gal.images || gal.images.length === 0) return;

    activeGallery = gal;
    activeGalleryIndex = Math.max(0, Math.min(initialIndex || 0, gal.images.length - 1));
    updateLightboxUI();
    imageModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function updateLightboxUI() {
    if (!activeGallery) return;
    const count = activeGallery.images.length;
    const currentImg = activeGallery.images[activeGalleryIndex];

    lightboxImg.src = currentImg;
    imageModalTitle.textContent = activeGallery.title;
    if (imageModalCounter) {
      imageModalCounter.textContent = `${activeGalleryIndex + 1} / ${count}`;
    }

    // Afficher ou masquer les flèches selon le nombre d'images
    if (lightboxPrevBtn) lightboxPrevBtn.style.display = count > 1 ? 'flex' : 'none';
    if (lightboxNextBtn) lightboxNextBtn.style.display = count > 1 ? 'flex' : 'none';

    // Rendu des miniatures de navigation rapide au bas de la modale
    if (lightboxThumbsWrap) {
      if (count > 1) {
        lightboxThumbsWrap.style.display = 'flex';
        lightboxThumbsWrap.innerHTML = activeGallery.images.map((img, idx) => `
          <div class="lightbox-thumb-item ${idx === activeGalleryIndex ? 'active' : ''}" onclick="window.portfolioApp.goToGalleryImage(${idx})" title="Image ${idx + 1}">
            <img src="${img}" alt="Miniature ${idx + 1}" loading="lazy">
          </div>
        `).join('');

        const activeThumb = lightboxThumbsWrap.children[activeGalleryIndex];
        if (activeThumb) {
          activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
      } else {
        lightboxThumbsWrap.style.display = 'none';
        lightboxThumbsWrap.innerHTML = '';
      }
    }
  }

  function prevGalleryImage() {
    if (!activeGallery || activeGallery.images.length <= 1) return;
    activeGalleryIndex = (activeGalleryIndex - 1 + activeGallery.images.length) % activeGallery.images.length;
    updateLightboxUI();
  }

  function nextGalleryImage() {
    if (!activeGallery || activeGallery.images.length <= 1) return;
    activeGalleryIndex = (activeGalleryIndex + 1) % activeGallery.images.length;
    updateLightboxUI();
  }

  function goToGalleryImage(idx) {
    if (!activeGallery || idx < 0 || idx >= activeGallery.images.length) return;
    activeGalleryIndex = idx;
    updateLightboxUI();
  }

  function closeImageLightbox() {
    imageModal.classList.remove('active');
    lightboxImg.src = '';
    activeGallery = null;
    document.body.style.overflow = '';
  }

  // --------------------------------------------------------------------------
  // INITIALISATION DES ÉVÉNEMENTS
  // --------------------------------------------------------------------------
  function initEvents() {
    // Changement de thème
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // Changement de langue
    langButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        setLanguage(btn.getAttribute('data-lang'));
      });
    });

    // Menu Mobile
    if (mobileToggle && navMenu) {
      mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
      });
      // Fermer le menu lors du clic sur un lien
      navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('active');
        });
      });
    }

    // Fermeture des modales
    if (videoCloseBtn) videoCloseBtn.addEventListener('click', closeVideoModal);
    if (videoModal) {
      videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) closeVideoModal();
      });
    }

    if (imageCloseBtn) imageCloseBtn.addEventListener('click', closeImageLightbox);
    if (imageModal) {
      imageModal.addEventListener('click', (e) => {
        if (e.target === imageModal) closeImageLightbox();
      });
    }

    // Navigation dans la galerie Lightbox (Flèches UI)
    if (lightboxPrevBtn) {
      lightboxPrevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        prevGalleryImage();
      });
    }
    if (lightboxNextBtn) {
      lightboxNextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        nextGalleryImage();
      });
    }

    // Navigation au clavier (Échap, Flèche Gauche, Flèche Droite)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeVideoModal();
        closeImageLightbox();
      } else if (imageModal && imageModal.classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
          prevGalleryImage();
        } else if (e.key === 'ArrowRight') {
          nextGalleryImage();
        }
      }
    });

    // Copie de l'email
    const copyEmailBtn = document.getElementById('copy-email-btn');
    if (copyEmailBtn) {
      copyEmailBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(window.portfolioData.profile.email).then(() => {
          const originalText = copyEmailBtn.innerHTML;
          copyEmailBtn.innerHTML = `<i class="fa-solid fa-check"></i> ${t(window.portfolioData.ui.buttons.emailCopied)}`;
          setTimeout(() => {
            copyEmailBtn.innerHTML = originalText;
          }, 2500);
        });
      });
    }
  }

  // Lancement
  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(currentTheme);
    setLanguage(currentLang);
    initEvents();
  });

  // Export pour les interactions inline
  window.portfolioApp = {
    setLanguage,
    toggleTheme,
    openVideo: openVideoModal,
    openGallery,
    openLightbox: (src, alt) => {
      // Compatibilité
      if (activeGallery) updateLightboxUI();
    },
    prevImage: prevGalleryImage,
    nextImage: nextGalleryImage,
    goToGalleryImage
  };

})();
