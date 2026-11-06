// ═══════════════════════════════════════════
//  FALLBACK DEFAULT DATA
//  (Digunakan jika fetch data/content.json offline atau diblok browser)
// ═══════════════════════════════════════════
const DEFAULT_CONTENT = {
  settings: {
    name: "Muzakki",
    description: "Digital Creator, Web Developer & Tech Enthusiast. Temukan semua tautan dan project penting di bawah ini.",
    avatar_url: "",
    links_per_tab: 5,
    copyright: "Muzakki. All rights reserved.",
    meta_title: "Muzakki - Bio Link",
    meta_description: "Bio link resmi Muzakki - Jelajahi portofolio, media sosial, dan tautan penting lainnya."
  },
  socials: {
    instagram: "https://instagram.com/",
    whatsapp: "https://wa.me/6281234567890",
    tiktok: "https://tiktok.com/",
    youtube: "https://youtube.com/",
    x: "https://x.com/",
    facebook: "https://facebook.com/",
    telegram: "https://t.me/",
    github: "https://github.com/amuzakki"
  },
  pinned_links: [],
  links: [
    { label: "Proyek Unggulan di GitHub", url: "https://github.com/amuzakki", image: "" },
    { label: "Artikel & Blog Terbaru", url: "https://medium.com", image: "" },
    { label: "Kanal YouTube Tutorial", url: "https://youtube.com", image: "" },
    { label: "Koleksi Template Web & UI", url: "https://gumroad.com", image: "" },
    { label: "Join Komunitas Diskusi Telegram", url: "https://t.me", image: "" },
    { label: "Follow Twitter / X untuk Update Harian", url: "https://x.com", image: "" }
  ]
};

// ═══════════════════════════════════════════
//  SVG ICONS
// ═══════════════════════════════════════════
const ICONS = {
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".5" fill="currentColor" stroke="none"/></svg>`,
  facebook:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
  x:         `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  tiktok:    `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.07a8.16 8.16 0 0 0 4.77 1.52V7.15a4.85 4.85 0 0 1-1-.46z"/></svg>`,
  youtube:   `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>`,
  whatsapp:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>`,
  telegram:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>`,
  github:    `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>`,
  linkedin:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`,
  email:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`
};

// ═══════════════════════════════════════════
//  HELPERS
// ═══════════════════════════════════════════
function initials(label) {
  return (label || '').trim().charAt(0).toUpperCase() || '?';
}

function resolveMediaUrl(url) {
  if (!url) return '';
  const trimmed = url.trim();
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://') || trimmed.startsWith('data:')) {
    return trimmed;
  }
  // Strip leading slash for relative assets on GitHub pages
  return trimmed.replace(/^\/+/, '');
}

function formatSocialUrl(platform, rawUrl) {
  if (!rawUrl) return '';
  let url = rawUrl.trim();
  if (platform === 'whatsapp' && !url.startsWith('http://') && !url.startsWith('https://')) {
    const cleanNum = url.replace(/[^0-9]/g, '');
    return `https://wa.me/${cleanNum}`;
  }
  if (platform === 'email' && !url.startsWith('mailto:') && !url.startsWith('http')) {
    return `mailto:${url}`;
  }
  return url;
}

function renderSocialBtn(platform, rawUrl) {
  const url = formatSocialUrl(platform, rawUrl);
  if (!url || !ICONS[platform]) return '';
  return `<a href="${url}" target="_blank" rel="noopener" class="social-btn" aria-label="${platform}">${ICONS[platform]}</a>`;
}

function renderLinkItem(link) {
  const imgUrl = resolveMediaUrl(link.image);
  const thumb = imgUrl
    ? `<img src="${imgUrl}" alt="${link.label || ''}" loading="lazy" />`
    : `<div class="link-initials">${initials(link.label)}</div>`;

  return `
    <a href="${link.url}" target="_blank" rel="noopener" class="link-item">
      <div class="link-thumb">${thumb}</div>
      <span class="link-label">${link.label}</span>
      <span class="link-arrow">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </span>
    </a>`;
}

function buildTabs(links, perTab) {
  const tabs = [];
  const chunkSize = perTab > 0 ? perTab : 50;
  for (let i = 0; i < links.length; i += chunkSize) {
    const start = i + 1;
    const end   = Math.min(i + chunkSize, links.length);
    tabs.push({ label: `${start}–${end}`, items: links.slice(i, i + chunkSize) });
  }
  return tabs;
}

// ═══════════════════════════════════════════
//  RENDER APP
// ═══════════════════════════════════════════
function renderApp(data) {
  const app = document.getElementById('app');

  const settings    = data.settings || {};
  const socialsMap  = data.socials  || {};
  const rawPinned   = Array.isArray(data.pinned_links) ? data.pinned_links : [];
  const pinnedLinks = rawPinned.filter(l => l && typeof l === 'object' && l.label && l.url);
  const rawLinks    = Array.isArray(data.links) ? data.links : [];
  const allLinks    = rawLinks.filter(l => l && typeof l === 'object' && l.label && l.url);

  // Setting values
  const name        = settings.name || '';
  const desc        = settings.description || '';
  const avatarUrl   = resolveMediaUrl(settings.avatar_url || '');
  const perTab      = parseInt(settings.links_per_tab || '10', 10);
  const copyright   = settings.copyright || '';
  const metaTitle   = settings.meta_title || name || 'Link in Bio';
  const metaDesc    = settings.meta_description || '';

  // Update <head>
  document.title = metaTitle;
  const metaEl = document.querySelector('meta[name="description"]');
  if (metaEl) metaEl.setAttribute('content', metaDesc);
  if (avatarUrl) {
    const fav = document.getElementById('favicon');
    if (fav) fav.setAttribute('href', avatarUrl);
  }

  // Socials
  const socialPlatforms = ['instagram', 'whatsapp', 'tiktok', 'youtube', 'x', 'facebook', 'telegram', 'github', 'linkedin', 'email'];
  const socialsHTML = socialPlatforms
    .map(p => renderSocialBtn(p, socialsMap[p]))
    .join('');

  // Avatar
  const avatarHTML = avatarUrl
    ? `<img src="${avatarUrl}" alt="${name}" />`
    : `<div class="avatar-placeholder">${initials(name || 'Bio')}</div>`;

  // 1. PINNED LINKS SECTION (di atas paginasi — hanya jika ada item)
  let pinnedHTML = '';
  if (pinnedLinks.length > 0) {
    pinnedHTML = `
      <div class="pinned-section">
        <div class="section-title">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="17" x2="12" y2="22"></line>
            <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"></path>
          </svg>
          <span>Pinned Link</span>
        </div>
        <div class="link-list pinned-list">
          ${pinnedLinks.map(renderLinkItem).join('')}
        </div>
      </div>`;
  }

  // 2. PAGINATED TABS & LINKS
  const tabs = buildTabs(allLinks, perTab);
  const hasMultipleTabs = tabs.length > 1;

  // Tabs Bar Atas
  let tabsBarTopHTML = '';
  if (hasMultipleTabs) {
    tabsBarTopHTML = `
      <div class="tabs-bar tabs-bar-top" id="tabsBarTop">
        ${tabs.map((t, i) => `<button class="tab-btn${i === 0 ? ' active' : ''}" data-tab="${i}">${t.label}</button>`).join('')}
      </div>`;
  }

  // Link Panels
  let linkListsHTML = '<div id="tabPanelsContainer">';
  if (tabs.length === 0) {
    linkListsHTML += `<div class="link-list standalone"><div style="padding: 24px; text-align: center; color: var(--text-secondary); font-size: 0.875rem;">Belum ada tautan.</div></div>`;
  } else {
    tabs.forEach((t, i) => {
      linkListsHTML += `
        <div class="link-list ${hasMultipleTabs ? '' : 'standalone'}" id="tabPanel${i}" ${i !== 0 ? 'style="display:none"' : ''}>
          ${t.items.map(renderLinkItem).join('')}
        </div>`;
    });
  }
  linkListsHTML += '</div>';

  // 3. PAGINASI TAB DI BAWAH DAFTAR LINK
  let tabsBarBottomHTML = '';
  if (hasMultipleTabs) {
    tabsBarBottomHTML = `
      <div class="tabs-bar tabs-bar-bottom" id="tabsBarBottom">
        ${tabs.map((t, i) => `<button class="tab-btn${i === 0 ? ' active' : ''}" data-tab="${i}">${t.label}</button>`).join('')}
      </div>`;
  }

  // Render full markup
  app.innerHTML = `
    <div class="profile">
      <div class="avatar-wrap">${avatarHTML}</div>
      ${name        ? `<div class="bio-name">${name}</div>` : ''}
      ${desc        ? `<div class="bio-desc">${desc}</div>` : ''}
      ${socialsHTML ? `<div class="socials">${socialsHTML}</div>` : ''}
    </div>

    ${pinnedHTML}
    ${tabsBarTopHTML}
    ${linkListsHTML}
    ${tabsBarBottomHTML}

    ${copyright ? `<div class="bio-footer"><div class="copyright">© ${new Date().getFullYear()} ${copyright}</div></div>` : ''}
  `;

  // 4. TAB EVENT HANDLERS (Singkronisasi Tab Atas dan Bawah)
  if (hasMultipleTabs) {
    function switchTab(idx, scrollUp) {
      // Update semua tombol tab (atas dan bawah)
      document.querySelectorAll('.tab-btn').forEach(btn => {
        const bIdx = parseInt(btn.dataset.tab, 10);
        btn.classList.toggle('active', bIdx === idx);
      });

      // Tampilkan panel yang dipilih
      tabs.forEach((_, i) => {
        const panel = document.getElementById(`tabPanel${i}`);
        if (panel) panel.style.display = (i === idx) ? '' : 'none';
      });

      // Scroll halus ke atas daftar link jika ditekan dari paginasi bawah
      if (scrollUp) {
        const scrollTarget = document.getElementById('tabsBarTop') || document.getElementById('tabPanelsContainer');
        if (scrollTarget) {
          scrollTarget.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    }

    const topBar = document.getElementById('tabsBarTop');
    if (topBar) {
      topBar.addEventListener('click', e => {
        const btn = e.target.closest('.tab-btn');
        if (!btn) return;
        switchTab(parseInt(btn.dataset.tab, 10), false);
      });
    }

    const bottomBar = document.getElementById('tabsBarBottom');
    if (bottomBar) {
      bottomBar.addEventListener('click', e => {
        const btn = e.target.closest('.tab-btn');
        if (!btn) return;
        switchTab(parseInt(btn.dataset.tab, 10), true);
      });
    }
  }
}

// ═══════════════════════════════════════════
//  FETCH CONTENT (Sveltia CMS Data)
// ═══════════════════════════════════════════
async function loadContent() {
  try {
    // Tambahkan timestamp query parameter untuk menghindari browser caching
    const res = await fetch(`./data/content.json?_t=${Date.now()}`);
    if (!res.ok) {
      throw new Error(`Gagal memuat ./data/content.json (Status: ${res.status})`);
    }
    const data = await res.json();
    renderApp(data);
  } catch (err) {
    console.warn('Gagal memuat data/content.json secara dinamis, menggunakan fallback:', err);
    if (typeof DEFAULT_CONTENT !== 'undefined') {
      renderApp(DEFAULT_CONTENT);
    } else {
      document.getElementById('app').innerHTML = `
        <div class="state-error">
          Gagal memuat data konten.<br>
          <small>${err.message}</small>
        </div>`;
    }
  }
}

// Boot application
loadContent();

