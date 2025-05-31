export function injectBadgeCSS(miljoUser, miljoColor, showShadow = "") {
  // Remove any previous style to avoid duplicates
  const prev = document.getElementById('miljo-badge-style');
  if (prev) prev.remove();

  const style = document.createElement('style');
  style.id = 'miljo-badge-style';
  style.textContent = `
    .appLauncher.slds-context-bar__icon-action::after {
      border-radius: 2rem !important;
      background: hsl(${miljoColor}, 90%, 50%);
      color: white;
      padding-top: 0.2rem !important;
      padding-right: 0.4rem !important;
      padding-bottom: 0.2rem !important;
      padding-left: 0.4rem !important;
      margin: auto !important;
      content: "${miljoUser}";
      ${showShadow}
      font-size: var(--lwc-fontSize1,0.57rem);
      font-weight: 900;
      margin-right: var(--lwc-varSpacingXxSmall,0.25rem) !important;
      vertical-align: middle;
    }
  `;
  document.head.appendChild(style);
}

export function observeBadgeInjection(miljoUser, miljoColor, showShadow = "") {
  const observer = new MutationObserver(() => {
    injectBadgeCSS(miljoUser, miljoColor, showShadow);
  });
  observer.observe(document.body, { childList: true, subtree: true });
  injectBadgeCSS(miljoUser, miljoColor, showShadow);
} 