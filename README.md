
<html lang="en">

<head>
<nav>
  <a href="index.html">Home</a> |
  <a href="Aboutus.html">About</a> |
  <a href="contact.html">Contact</a>
</nav>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IT Intern Connect - Free Internships for Students</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary: #6B73FF;
            --primary-dark: #000DFF;
            --secondary: #FF6B6B;
            --secondary-dark: #FF0000;
            --text: #2D3748;
            --text-light: #718096;
            --bg: #F7FAFC;
            --card-bg: #FFFFFF;
            --border: #E2E8F0;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', sans-serif;
            color: var(--text);
            background-color: var(--bg);
            line-height: 1.6;
        }
        
        .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* Header Styles */
        header {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
            color: white;
            padding: 80px 0;
        }
        
        .hero {
            display: flex;
            align-items: center;
            gap: 40px;
        }
        
        .hero-content {
            flex: 1;
        }
        
        .hero h1 {
            font-size: 2.8rem;
            font-weight: 700;
            margin-bottom: 20px;
            line-height: 1.2;
        }
        
        .hero p {
            font-size: 1.2rem;
            margin-bottom: 30px;
            opacity: 0.9;
        }
        
        .btn {
            display: inline-block;
            padding: 12px 24px;
            border-radius: 6px;
            font-weight: 500;
            text-decoration: none;
            transition: all 0.3s ease;
            margin-right: 15px;
        }
        
        .btn-primary {
            background-color: white;
            color: var(--primary-dark);
        }
        
        .btn-outline {
            border: 2px solid white;
            color: white;
        }
        
        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .btn-outline:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }
        
        .hero-image {
            flex: 1;
            background-color: rgba(255, 255, 255, 0.1);
            padding: 20px;
            border-radius: 12px;
            backdrop-filter: blur(10px);
        }
        
        .hero-image img {
            width: 100%;
            border-radius: 8px;
        }
        
        /* Search Section */
        .search-section {
            margin-top: -50px;
            margin-bottom: 60px;
        }
        
        .search-card {
            background-color: var(--card-bg);
            border-radius: 12px;
            padding: 30px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }
        
        .search-card h2 {
            font-size: 1.5rem;
            margin-bottom: 20px;
        }
        
        .search-bar {
            position: relative;
            margin-bottom: 20px;
        }
        
        .search-bar input {
            width: 100%;
            padding: 16px 20px 16px 50px;
            border: 1px solid var(--border);
            border-radius: 8px;
            font-size: 1rem;
        }
        
        .search-bar i {
            position: absolute;
            left: 20px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--text-light);
        }
        
        .filter-chips {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        
        .chip {
            display: inline-block;
            padding: 6px 12px;
            background-color: var(--bg);
            border: 1px solid var(--border);
            border-radius: 20px;
            font-size: 0.9rem;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        
        .chip:hover {
            background-color: var(--primary);
            color: white;
            border-color: var(--primary);
        }
        
        /* Internships Section */
        .section {
            padding: 60px 0;
        }
        
        .section-title {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 40px;
            text-align: center;
        }
        
        .internships-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 25px;
        }
        
        .internship-card {
            background-color: var(--card-bg);
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .internship-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .card-header {
            display: flex;
            align-items: center;
            padding: 20px;
            border-bottom: 1px solid var(--border);
        }
        
        .company-logo {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
            margin-right: 15px;
        }
        
        .card-info h3 {
            font-size: 1.1rem;
            margin-bottom: 5px;
        }
        
        .card-info p {
            color: var(--text-light);
            font-size: 0.9rem;
        }
        
        .card-body {
            padding: 20px;
        }
        
        .card-meta {
            color: var(--text-light);
            font-size: 0.9rem;
            margin-bottom: 15px;
        }
        
        .card-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        
        .tag {
            display: inline-block;
            padding: 4px 10px;
            background-color: rgba(107, 115, 255, 0.1);
            color: var(--primary);
            border-radius: 4px;
            font-size: 0.8rem;
            font-weight: 500;
        }
        
        /* How It Works */
        .steps {
            background-color: var(--card-bg);
            padding: 80px 0;
        }
        
        .steps-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 40px;
            text-align: center;
        }
        
        .step {
            padding: 0 20px;
        }
        
        .step-icon {
            font-size: 3rem;
            margin-bottom: 20px;
        }
        
        .step h3 {
            font-size: 1.3rem;
            margin-bottom: 15px;
        }
        
        .step p {
            color: var(--text-light);
        }
        
        /* Stats */
        .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 30px;
            text-align: center;
            padding: 60px 0;
        }
        
        .stat h2 {
            font-size: 2.5rem;
            color: var(--primary);
            margin-bottom: 10px;
        }
        
        .stat p {
            font-size: 1.1rem;
            font-weight: 500;
        }
        
        /* CTA */
        .cta {
            background: linear-gradient(135deg, var(--secondary) 0%, var(--secondary-dark) 100%);
            color: white;
            padding: 80px 0;
            text-align: center;
        }
        
        .cta h2 {
            font-size: 2.5rem;
            margin-bottom: 20px;
        }
        
        .cta p {
            font-size: 1.2rem;
            max-width: 700px;
            margin: 0 auto 30px;
            opacity: 0.9;
        }
        
        .btn-cta {
            background-color: white;
            color: var(--secondary-dark);
            padding: 15px 40px;
            font-size: 1.1rem;
            font-weight: 600;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .hero {
                flex-direction: column;
            }
            
            .hero h1 {
                font-size: 2.2rem;
            }
            
            .section-title {
                font-size: 1.8rem;
            }
            
            .steps-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <!-- Header/Hero Section -->
    <header>
        <div class="container">
            <div class="hero">
                <div class="hero-content">
                    <h1>Launch Your IT Career with Free Global Internships</h1>
                    <p>AI-powered platform connecting students with opportunities worldwide</p>
                    <div class="hero-buttons">
                        <a href="/register" class="btn btn-primary">Get Started</a>
                        <a href="/internships" class="btn btn-outline">Browse Internships</a>
                    </div>
                </div>
                <div class="hero-image">
                    <img src="https://via.placeholder.com/600x400" alt="Dashboard Preview">
                </div>
            </div>
        </div>
    </header>

    <!-- Search Section -->
    <div class="container">
        <div class="search-section">
            <div class="search-card">
                <h2>Find Your Perfect Internship</h2>
                <div class="search-bar">
                    <i class="fas fa-search"></i>
                    <input type="text" placeholder="Search by skills, companies, or locations">
                </div>
                <div class="filter-chips">
                    <span class="chip">Web Development</span>
                    <span class="chip">Artificial Intelligence</span>
                    <span class="chip">Cybersecurity</span>
                    <span class="chip">Data Science</span>
                    <span class="chip">Mobile Development</span>
                    <span class="chip">Cloud Computing</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Featured Internships -->
    <section class="section">
        <div class="container">
            <h2 class="section-title">Featured Internships</h2>
            <div class="internships-grid">
                <!-- Internship Card 1 -->
                <div class="internship-card">
                    <div class="card-header">
                        <img src="https://via.placeholder.com/50" alt="TechCorp Logo" class="company-logo">
                        <div class="card-info">
                            <h3>Frontend Developer Intern</h3>
                            <p>TechCorp</p>
                        </div>
                    </div>
                    <div class="card-body">
                        <p class="card-meta">Remote • 3 months</p>
                        <div class="card-tags">
                            <span class="tag">#react</span>
                            <span class="tag">#javascript</span>
                            <span class="tag">#web-dev</span>
                        </div>
                    </div>
                </div>
                
                <!-- Internship Card 2 -->
                <div class="internship-card">
                    <div class="card-header">
                        <img src="https://via.placeholder.com/50" alt="AI Labs Logo" class="company-logo">
                        <div class="card-info">
                            <h3>AI Research Assistant</h3>
                            <p>AI Labs</p>
                        </div>
                    </div>
                    <div class="card-body">
                        <p class="card-meta">San Francisco, CA • 6 months</p>
                        <div class="card-tags">
                            <span class="tag">#python</span>
                            <span class="tag">#machine-learning</span>
                            <span class="tag">#ai</span>
                        </div>
                    </div>
                </div>
                
                <!-- Internship Card 3 -->
                <div class="internship-card">
                    <div class="card-header">
                        <img src="https://via.placeholder.com/50" alt="CloudSystems Logo" class="company-logo">
                        <div class="card-info">
                            <h3>DevOps Engineer Intern</h3>
                            <p>CloudSystems</p>
                        </div>
                    </div>
                    <div class="card-body">
                        <p class="card-meta">New York, NY • 4 months</p>
                        <div class="card-tags">
                            <span class="tag">#aws</span>
                            <span class="tag">#docker</span>
                            <span class="tag">#devops</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- How It Works -->
    <section class="steps">
        <div class="container">
            <h2 class="section-title">How It Works</h2>
            <div class="steps-grid">
                <div class="step">
                    <div class="step-icon">🧠</div>
                    <h3>Create Your AI Profile</h3>
                    <p>Connect your GitHub and let our AI analyze your skills to build a personalized profile</p>
                </div>
                <div class="step">
                    <div class="step-icon">🔍</div>
                    <h3>Find Matching Internships</h3>
                    <p>Our algorithm matches you with internships based on your skills and interests</p>
                </div>
                <div class="step">
                    <div class="step-icon">📊</div>
                    <h3>Apply & Track Progress</h3>
                    <p>One-click applications and real-time tracking of your applications</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Stats -->
    <section class="container">
        <div class="stats">
            <div class="stat">
                <h2>500+</h2>
                <p>Companies</p>
            </div>
            <div class="stat">
                <h2>10,000+</h2>
                <p>Students</p>
            </div>
            <div class="stat">
                <h2>85%</h2>
                <p>Match Rate</p>
            </div>
            <div class="stat">
                <h2>30+</h2>
                <p>Countries</p>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="cta">
        <div class="container">
            <h2>Ready to Start Your IT Journey?</h2>
            <p>Join thousands of students finding their dream internships</p>
            <a href="/register" class="btn btn-primary btn-cta">Sign Up Free</a>
        </div>
    </section>

    <script>
        // Simple interactivity
        document.querySelectorAll('.chip').forEach(chip => {
            chip.addEventListener('click', function() {
                document.querySelector('.search-bar input').value = this.textContent;
            });
        });
        
        // Animation for cards
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.internship-card, .step').forEach(el => {
            el.style.opacity = 0;
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });
    </script>
</body>
</html>
