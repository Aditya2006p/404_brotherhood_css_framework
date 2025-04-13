const darkModeToggle = document.getElementById('darkModeToggle');
        const mobileToggle = document.getElementById('mobileToggle');
        
        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
            const isDarkMode = document.body.classList.contains('dark-mode');
            
            // Sync both toggles
            darkModeToggle.checked = isDarkMode;
            mobileToggle.checked = isDarkMode;
            
            // Save preference
            localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
        }
        
        darkModeToggle.addEventListener('change', toggleDarkMode);
        mobileToggle.addEventListener('change', toggleDarkMode);
        
        // Check for saved dark mode preference
        if (localStorage.getItem('darkMode') === 'enabled') {
            document.body.classList.add('dark-mode');
            darkModeToggle.checked = true;
            mobileToggle.checked = true;
        }
        
        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenuItems = document.getElementById('mobileMenuItems');
        
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenuItems.classList.toggle('show');
        });
        
        // Close mobile menu when clicking a link
        const mobileLinks = mobileMenuItems.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuItems.classList.remove('show');
            });
        });
        
        // Modal functionality
        const openModalBtn = document.getElementById('openModalBtn');
        const closeModalBtn = document.getElementById('closeModalBtn');
        const cancelModalBtn = document.getElementById('cancelModalBtn');
        const demoModal = document.getElementById('demoModal');
        
        openModalBtn.addEventListener('click', function() {
            demoModal.classList.add('show');
        });
        
        closeModalBtn.addEventListener('click', function() {
            demoModal.classList.remove('show');
        });
        
        cancelModalBtn.addEventListener('click', function() {
            demoModal.classList.remove('show');
        });
        
        // Close modal when clicking outside
        demoModal.addEventListener('click', function(event) {
            if (event.target === demoModal) {
                demoModal.classList.remove('show');
            }
        });
        
        // Interactive Grid Demo
        let draggedItem = null;
        
        function setupDraggableGrid() {
            const columns = document.querySelectorAll('#interactiveRow > div');
            
            columns.forEach(column => {
                column.addEventListener('dragstart', function() {
                    draggedItem = this;
                    setTimeout(() => this.style.opacity = '0.5', 0);
                });
                
                column.addEventListener('dragend', function() {
                    draggedItem = null;
                    setTimeout(() => this.style.opacity = '1', 0);
                });
                
                column.addEventListener('dragover', function(e) {
                    e.preventDefault();
                });
                
                column.addEventListener('dragenter', function(e) {
                    e.preventDefault();
                    this.style.background = 'rgba(79, 70, 229, 0.1)';
                });
                
                column.addEventListener('dragleave', function() {
                    this.style.background = 'none';
                });
                
                column.addEventListener('drop', function(e) {
                    e.preventDefault();
                    if (draggedItem !== this) {
                        const allColumns = Array.from(document.querySelectorAll('#interactiveRow > div'));
                        const draggedIndex = allColumns.indexOf(draggedItem);
                        const targetIndex = allColumns.indexOf(this);
                        
                        const interactiveRow = document.getElementById('interactiveRow');
                        
                        if (draggedIndex < targetIndex) {
                            interactiveRow.insertBefore(draggedItem, this.nextSibling);
                        } else {
                            interactiveRow.insertBefore(draggedItem, this);
                        }
                    }
                    this.style.background = 'none';
                });
            });
        }
        
        // Run setup for draggable grid
        setupDraggableGrid();
        
        // Add column button
        document.getElementById('addColumnBtn').addEventListener('click', function() {
            const columnWidth = document.getElementById('columnWidthSelector').value;
            const newColumn = document.createElement('div');
            newColumn.className = `b4-col-12 b4-col-md-${columnWidth}`;
            newColumn.draggable = true;
            newColumn.innerHTML = `<div class="grid-demo-box">New Column</div>`;
            
            document.getElementById('interactiveRow').appendChild(newColumn);
            
            // Reset draggable functionality
            setupDraggableGrid();
        });
        
        // Reset layout button
        document.getElementById('resetLayoutBtn').addEventListener('click', function() {
            document.getElementById('interactiveRow').innerHTML = `
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
            
            // Reset draggable functionality
            setupDraggableGrid();
        });
        
        // Code Editor
        const htmlEditor = document.getElementById('htmlEditor');
        const previewPane = document.getElementById('previewPane');
        
        function updatePreview() {
            previewPane.innerHTML = htmlEditor.value;
        }
        
        htmlEditor.addEventListener('input', updatePreview);
        
        // Initialize preview
        updatePreview();
        
        // Template examples
        const templates = {
            basic: `<div class="b4-container">
  <div class="b4-row">
    <div class="b4-col-12 b4-col-md-6 b4-col-lg-4">
      <div class="b4-p-3 b4-bg-primary b4-text-light b4-rounded">Column 1</div>
    </div>
    <div class="b4-col-12 b4-col-md-6 b4-col-lg-4">
      <div class="b4-p-3 b4-bg-secondary b4-text-light b4-rounded">Column 2</div>
    </div>
    <div class="b4-col-12 b4-col-md-12 b4-col-lg-4">
      <div class="b4-p-3 b4-bg-info b4-text-light b4-rounded">Column 3</div>
    </div>
  </div>
</div>`,
            card: `<div class="b4-container">
  <div class="b4-row">
    <div class="b4-col-12 b4-col-md-6 b4-col-lg-4">
      <div class="b4-card">
        <div class="b4-card-body">
          <h5 class="b4-card-title">Card Title</h5>
          <p class="b4-card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button class="b4-btn b4-btn-primary">Go somewhere</button>
        </div>
      </div>
    </div>
  </div>
</div>`,
            hero: `<div class="b4-container">
  <div class="b4-row b4-items-center">
    <div class="b4-col-12 b4-col-md-6">
      <h2 class="b4-text-3xl b4-font-bold b4-mb-3">Welcome to 404 Brotherhood</h2>
      <p class="b4-text-muted b4-mb-4">A utility-first CSS framework for rapidly building custom user interfaces.</p>
      <button class="b4-btn b4-btn-primary b4-mr-2">Get Started</button>
      <button class="b4-btn b4-btn-outline-primary">Learn More</button>
    </div>
    <div class="b4-col-12 b4-col-md-6">
      <div class="b4-bg-light b4-p-5 b4-rounded b4-text-center">
        <div class="b4-text-5xl b4-text-primary b4-mb-3">
          <i class="fas fa-code"></i>
        </div>
        <p class="b4-text-lg">Build websites faster than ever</p>
      </div>
    </div>
  </div>
</div>`,
            form: `<div class="b4-container">
  <div class="b4-row b4-justify-center">
    <div class="b4-col-12 b4-col-md-8 b4-col-lg-6">
      <div class="b4-card">
        <div class="b4-card-body">
          <h3 class="b4-card-title b4-text-center b4-mb-4">Contact Us</h3>
          <div class="b4-mb-3">
            <label class="b4-mb-1 b4-block">Name</label>
            <input type="text" class="b4-p-2 b4-border b4-rounded b4-w-100" placeholder="Enter your name">
          </div>
          <div class="b4-mb-3">
            <label class="b4-mb-1 b4-block">Email</label>
            <input type="email" class="b4-p-2 b4-border b4-rounded b4-w-100" placeholder="Enter your email">
          </div>
          <div class="b4-mb-3">
            <label class="b4-mb-1 b4-block">Message</label>
            <textarea class="b4-p-2 b4-border b4-rounded b4-w-100" rows="4" placeholder="Your message"></textarea>
          </div>
          <button class="b4-btn b4-btn-primary b4-w-100">Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>`
        };
        
        // Template buttons
        const templateButtons = document.querySelectorAll('[data-template]');
        templateButtons.forEach(button => {
            button.addEventListener('click', function() {
                const templateName = this.getAttribute('data-template');
                htmlEditor.value = templates[templateName];
                updatePreview();
            });
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            });
        });
    