/**
 * Toolkit JavaScript
 */

// Tabs
function Tabs (tab) {
  this.tabsItem = tab;

  this.displayTabs = function (active) {
    var tabsContent = this.tabsItem.querySelectorAll('[data-tabs-content]');

    tabsContent.forEach(function (t) {
        t.style.display = t.getAttribute('id') !== active.dataset.tab ? 'none': '';
    });
  }.bind(this);

  this.showTab = function (e) {
    e.preventDefault();
    
    var siblings = Array.prototype.filter.call(e.target.parentNode.children, function(child) { 
      return child !== e.target;
    });

    // Hide other tabs
    siblings.forEach(function (i) {
      i.classList.remove('active')
    });

    e.target.classList.add('active');
    this.displayTabs(e.target);
  }.bind(this);

  var links = this.tabsItem.querySelectorAll('a');
  var active = this.tabsItem.querySelector('.active') || this.tabsItem.querySelector('.tabs-header-link')[0];
  active.classList.add('active');

  // Run first time
  this.displayTabs(active);

  // Bind links
  for(var link of links) {
    link.addEventListener('click', this.showTab);
  }
}

// Initialize Tabs
var tabs = document.querySelectorAll('[data-tabs]');

for (var tab of tabs) {
  new Tabs(tab);
}

