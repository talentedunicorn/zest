/**
 * Toolkit JavaScript
 */

// Tabs
var tabs = {
  tabsItem: document.querySelector('[data-tabs]'),
  init: function () {
    var links = tabs.tabsItem.querySelectorAll('a');
    var active = tabs.tabsItem.querySelector('.active');

    // Run first time
    tabs.displayTabs(active);

    // Bind links
    links.forEach(function (i) {
      i.addEventListener('click', tabs.showTab);
    });
  },
  displayTabs: function (active) {
    var tabsContent = tabs.tabsItem.querySelectorAll('[data-tabs-content]');

    tabsContent.forEach(function (t) {
        t.style.display = t.getAttribute('id') !== active.dataset.tab ? 'none': '';
    });
  },
  showTab: function (e) {
    e.preventDefault();
    
    var siblings = Array.prototype.filter.call(e.target.parentNode.children, function(child) { 
      return child !== e.target;
    });

    // Hide other tabs
    siblings.forEach(function (i) {
      i.classList.remove('active')
    });

    e.target.classList.add('active');
    tabs.displayTabs(e.target);
  }
};

tabs.init();
