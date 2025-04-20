/**
 * 404 Brotherhood CSS Framework
 * Main JavaScript File
 */

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const mobileToggle = document.getElementById('mobileToggle');
    
    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
      darkModeToggle.checked = true;
      mobileToggle.checked = true;
    }
    
    // Function to toggle dark mode
    function toggleDarkMode() {
      if (darkModeToggle.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
        mobileToggle.checked = true;
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
        mobileToggle.checked = false;
      }
    }
    
    // Add event listeners for dark mode toggles
    darkModeToggle.addEventListener('change', toggleDarkMode);
    mobileToggle.addEventListener('change', function() {
      darkModeToggle.checked = this.checked;
      toggleDarkMode();
    });
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenuItems = document.getElementById('mobileMenuItems');
    
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenuItems.classList.toggle('show');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!mobileMenuBtn.contains(event.target) && !mobileMenuItems.contains(event.target)) {
        mobileMenuItems.classList.remove('show');
      }
    });
    
    // Modal functionality
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const cancelModalBtn = document.getElementById('cancelModalBtn');
    const demoModal = document.getElementById('demoModal');
    
    if (openModalBtn && demoModal) {
      openModalBtn.addEventListener('click', function() {
        demoModal.classList.add('show');
      });
    }
    
    if (closeModalBtn && demoModal) {
      closeModalBtn.addEventListener('click', function() {
        demoModal.classList.remove('show');
      });
    }
    
    if (cancelModalBtn && demoModal) {
      cancelModalBtn.addEventListener('click', function() {
        demoModal.classList.remove('show');
      });
    }
    
    // Code Editor Functionality
    const htmlEditor = document.getElementById('htmlEditor');
    const previewPane = document.getElementById('previewPane');
    
    if (htmlEditor && previewPane) {
      // Initial preview update
      previewPane.innerHTML = htmlEditor.value;
      
      // Update preview on input
      htmlEditor.addEventListener('input', function() {
        previewPane.innerHTML = this.value;
      });
      
      // Template selector buttons
      const templateButtons = document.querySelectorAll('[data-template]');
      
      templateButtons.forEach(button => {
        button.addEventListener('click', function() {
          const template = this.getAttribute('data-template');
          
          switch(template) {
            case 'basic':
              htmlEditor.value = `<div class="b4-container">
    <div class="b4-row">
      <div class="b4-col-12 b4-col-md-6">
        <div class="b4-p-4">
          <h2 class="b4-text-2xl b4-mb-3">Left Column</h2>
          <p class="b4-text-muted">This is a basic two-column layout using the 404 Brotherhood grid system.</p>
        </div>
      </div>
      <div class="b4-col-12 b4-col-md-6">
        <div class="b4-p-4">
          <h2 class="b4-text-2xl b4-mb-3">Right Column</h2>
          <p class="b4-text-muted">Responsive design that stacks on mobile.</p>
        </div>
      </div>
    </div>
  </div>`;
              break;
            case 'card':
              htmlEditor.value = `<div class="b4-container">
    <div class="b4-row">
      <div class="b4-col-12 b4-col-md-4">
        <div class="b4-card">
          <div class="b4-card-body">
            <h5 class="b4-card-title">Card Title</h5>
            <p class="b4-card-text">Some quick example text to build on the card.</p>
            <button class="b4-btn b4-btn-primary">Go somewhere</button>
          </div>
        </div>
      </div>
    </div>
  </div>`;
              break;
            case 'hero':
              htmlEditor.value = `<div class="b4-container b4-py-5">
    <div class="b4-row b4-items-center">
      <div class="b4-col-12 b4-col-lg-6">
        <h1 class="b4-text-4xl b4-font-bold b4-mb-3">Welcome to my website</h1>
        <p class="b4-text-lg b4-mb-4">A simple hero section built with 404 Brotherhood CSS Framework.</p>
        <div class="b4-flex">
          <button class="b4-btn b4-btn-primary b4-mr-2">Get Started</button>
          <button class="b4-btn b4-btn-outline-primary">Learn More</button>
        </div>
      </div>
      <div class="b4-col-12 b4-col-lg-6 b4-mt-4 b4-mt-lg-0">
        <div class="b4-bg-light b4-p-4 b4-rounded">
          <p class="b4-text-center">Image or content could go here</p>
        </div>
      </div>
    </div>
  </div>`;
              break;
            case 'form':
              htmlEditor.value = `<div class="b4-container b4-py-3">
    <div class="b4-row b4-justify-center">
      <div class="b4-col-12 b4-col-md-8 b4-col-lg-6">
        <div class="b4-card">
          <div class="b4-card-body">
            <h3 class="b4-card-title b4-text-center b4-mb-4">Contact Form</h3>
            <div class="b4-mb-3">
              <label class="b4-mb-1 b4-font-medium">Name</label>
              <input type="text" class="b4-p-2 b4-border b4-rounded b4-w-100" placeholder="Your name">
            </div>
            <div class="b4-mb-3">
              <label class="b4-mb-1 b4-font-medium">Email</label>
              <input type="email" class="b4-p-2 b4-border b4-rounded b4-w-100" placeholder="Your email">
            </div>
            <div class="b4-mb-3">
              <label class="b4-mb-1 b4-font-medium">Message</label>
              <textarea class="b4-p-2 b4-border b4-rounded b4-w-100" rows="4" placeholder="Your message"></textarea>
            </div>
            <button class="b4-btn b4-btn-primary b4-w-100">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  </div>`;
              break;
          }
          
          // Update preview
          previewPane.innerHTML = htmlEditor.value;
        });
      });
    }
    
    // Grid Interactive Demo Functionality
    const addColumnBtn = document.getElementById('addColumnBtn');
    const resetLayoutBtn = document.getElementById('resetLayoutBtn');
    const columnWidthSelector = document.getElementById('columnWidthSelector');
    const interactiveRow = document.getElementById('interactiveRow');
    
    if (addColumnBtn && interactiveRow) {
      // Add column to interactive grid
      addColumnBtn.addEventListener('click', function() {
        const width = columnWidthSelector.value;
        const newColumn = document.createElement('div');
        newColumn.className = `b4-col-12 b4-col-md-${width}`;
        newColumn.draggable = true;
        newColumn.innerHTML = `<div class="grid-demo-box">New Column</div>`;
        
        // Add drag event listeners
        addDragListeners(newColumn);
        
        interactiveRow.appendChild(newColumn);
      });
    }
    
    if (resetLayoutBtn && interactiveRow) {
      // Reset interactive grid
      resetLayoutBtn.addEventListener('click', function() {
        interactiveRow.innerHTML = `
          <div class="b4-col-12 b4-col-md-4" draggable="true">
            <div class="grid-demo-box">Column 1</div>
          </div>
          <div class="b4-col-12 b4-col-md-4" draggable="true">
            <div class="grid-demo-box">Column 2</div>
          </div>
          <div class="b4-col-12 b4-col-md-4" draggable="true">
            <div class="grid-demo-box">Column 3</div>
          </div>
        `;
        
        // Add drag event listeners to new columns
        const columns = interactiveRow.querySelectorAll('[draggable="true"]');
        columns.forEach(column => {
          addDragListeners(column);
        });
      });
    }
    
    // Add drag capabilities to existing grid columns
    const initialColumns = document.querySelectorAll('#interactiveRow [draggable="true"]');
    initialColumns.forEach(column => {
      addDragListeners(column);
    });
    
    // Function to add drag event listeners to columns
    function addDragListeners(element) {
      element.addEventListener('dragstart', handleDragStart);
      element.addEventListener('dragover', handleDragOver);
      element.addEventListener('dragenter', handleDragEnter);
      element.addEventListener('dragleave', handleDragLeave);
      element.addEventListener('drop', handleDrop);
      element.addEventListener('dragend', handleDragEnd);
    }
    
    // Drag variables
    let dragSrcElement = null;
    
    // Drag functions
    function handleDragStart(e) {
      this.style.opacity = '0.4';
      dragSrcElement = this;
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', this.innerHTML);
    }
    
    function handleDragOver(e) {
      if (e.preventDefault) {
        e.preventDefault();
      }
      e.dataTransfer.dropEffect = 'move';
      return false;
    }
    
    function handleDragEnter(e) {
      this.classList.add('b4-border-primary');
    }
    
    function handleDragLeave(e) {
      this.classList.remove('b4-border-primary');
    }
    
    function handleDrop(e) {
      if (e.stopPropagation) {
        e.stopPropagation();
      }
      
      if (dragSrcElement !== this) {
        dragSrcElement.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
      }
      
      return false;
    }
    
    function handleDragEnd(e) {
      this.style.opacity = '1';
      
      const columns = document.querySelectorAll('#interactiveRow [draggable="true"]');
      columns.forEach(column => {
        column.classList.remove('b4-border-primary');
      });
    }
    
    // Highlight code blocks if prism.js is available
    if (typeof Prism !== 'undefined') {
      Prism.highlightAll();
    }
  });
  
