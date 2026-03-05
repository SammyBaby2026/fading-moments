// Fading Moments V1.2 - Site JavaScript
// Language switching, content rendering, and utilities

(function() {
  'use strict';

  // Configuration
  const CONFIG = {
    languages: ['en', 'de', 'zh'],
    defaultLang: 'en',
    storageKey: 'fm_lang'
  };

  // Language utilities
  const Lang = {
    // Get current language from URL
    getCurrent() {
      const path = window.location.pathname;
      const match = path.match(/^\/(en|de|zh)\//);
      return match ? match[1] : CONFIG.defaultLang;
    },

    // Get saved preference
    getSaved() {
      return localStorage.getItem(CONFIG.storageKey);
    },

    // Save preference
    save(lang) {
      if (CONFIG.languages.includes(lang)) {
        localStorage.setItem(CONFIG.storageKey, lang);
      }
    },

    // Get other available languages for current page
    getAvailable() {
      const current = this.getCurrent();
      const pageData = window.pageContent || {};
      const available = pageData.available_languages || [];
      return available.filter(l => l !== current);
    }
  };

  // Content loading
  const Content = {
    // Load content.json for current language
    async load() {
      const lang = Lang.getCurrent();
      try {
        const response = await fetch(`/${lang}/content.json`);
        return await response.json();
      } catch (error) {
        console.error('Failed to load content:', error);
        return null;
      }
    },

    // Render card grid from content array
    renderCards(container, items, type) {
      if (!container || !items) return;
      
      container.innerHTML = items.map(item => this.createCard(item, type)).join('');
    },

    // Create card HTML
    createCard(item, type) {
      const meta = this.formatMeta(item, type);
      const tags = item.tags ? item.tags.map(t => `<span class="tag">${t}</span>`).join('') : '';
      
      return `
        <article class="card" data-type="${type}" data-slug="${item.slug}">
          <div class="card-image">
            <img src="${item.cover_image || '/assets/img/placeholder.jpg'}" alt="${item.title}" loading="lazy">
          </div>
          <div class="card-content">
            <div class="card-meta">${meta}</div>
            <h3><a href="${item.url}">${item.title}</a></h3>
            <p>${item.summary}</p>
            ${tags ? `<div class="card-tags">${tags}</div>` : ''}
          </div>
        </article>
      `;
    },

    // Format meta text based on type
    formatMeta(item, type) {
      const date = item.date ? new Date(item.date).toLocaleDateString() : '';
      
      switch(type) {
        case 'essay':
          return date;
        case 'photo':
          return `Exhibition · ${date}`;
        case 'story':
          return `Series · ${date}`;
        case 'video':
          return `${item.category || 'Video'} · ${date}`;
        default:
          return date;
      }
    }
  };

  // Navigation and language switching
  const Navigation = {
    init() {
      this.setupLangSwitch();
      this.highlightCurrentNav();
    },

    // Setup language switcher
    setupLangSwitch() {
      document.querySelectorAll('.lang-switch a').forEach(link => {
        link.addEventListener('click', (e) => {
          const lang = link.getAttribute('href').split('/')[1];
          Lang.save(lang);
        });
      });
    },

    // Highlight current page in navigation
    highlightCurrentNav() {
      const currentPath = window.location.pathname;
      document.querySelectorAll('.main-nav a').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
          link.classList.add('active');
        }
      });
    },

    // Handle language switch with fallback
    async switchLanguage(targetLang) {
      const currentPath = window.location.pathname;
      const currentLang = Lang.getCurrent();
      
      // Try direct page replacement
      const targetPath = currentPath.replace(`/${currentLang}/`, `/${targetLang}/`);
      
      // Check if target page exists
      const exists = await this.checkPageExists(targetPath);
      
      if (exists) {
        window.location.href = targetPath;
      } else {
        // Fallback: try list page
        const pathParts = targetPath.split('/').filter(p => p);
        if (pathParts.length >= 2) {
          const listPath = `/${pathParts[0]}/${pathParts[1]}/`;
          const listExists = await this.checkPageExists(listPath);
          
          if (listExists) {
            window.location.href = listPath;
          } else {
            // Final fallback: home
            window.location.href = `/${targetLang}/`;
          }
        } else {
          window.location.href = `/${targetLang}/`;
        }
      }
    },

    // Check if page exists
    async checkPageExists(url) {
      try {
        const response = await fetch(url, { method: 'HEAD' });
        return response.ok;
      } catch {
        return false;
      }
    }
  };

  // Initialize on DOM ready
  function init() {
    Navigation.init();
    
    // Expose globals for inline scripts
    window.fm = {
      Lang,
      Content,
      Navigation,
      CONFIG
    };
  }

  // Run initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
