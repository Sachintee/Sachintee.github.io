import { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Card, 
  CardContent, 
  TextField,
  InputAdornment,
  Chip,
  Avatar
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Sample featured internships data
  const featuredInternships = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "TechCorp",
      location: "Remote",
      tags: ["react", "javascript", "web-dev"],
      logo: "/techcorp-logo.png"
    },
    {
      id: 2,
      title: "AI Research Assistant",
      company: "AI Labs",
      location: "San Francisco, CA",
      tags: ["python", "machine-learning", "ai"],
      logo: "/ailabs-logo.png"
    },
    {
      id: 3,
      title: "DevOps Engineer Intern",
      company: "CloudSystems",
      location: "New York, NY",
      tags: ["aws", "docker", "devops"],
      logo: "/cloudsystems-logo.png"
    }
  ];

  // Popular domains for filtering
  const popularDomains = [
    "Web Development",
    "Artificial Intelligence",
    "Cybersecurity",
    "Data Science",
    "Mobile Development",
    "Cloud Computing"
  ];

  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Box sx={{ 
        py: 10, 
        background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)',
        color: 'white'
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom>
                Launch Your IT Career with Free Global Internships
              </Typography>
              <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                AI-powered platform connecting students with opportunities worldwide
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  size="large"
                  onClick={() => navigate('/register')}
                >
                  Get Started
                </Button>
                <Button 
                  variant="outlined" 
                  sx={{ color: 'white', borderColor: 'white' }} 
                  size="large"
                  onClick={() => navigate('/internships')}
                >
                  Browse Internships
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ 
                bgcolor: 'rgba(255,255,255,0.1)', 
                p: 3, 
                borderRadius: 2,
                backdropFilter: 'blur(10px)'
              }}>
                <img 
                  src="/dashboard-preview.png" 
                  alt="Dashboard Preview" 
                  style={{ width: '100%', borderRadius: 8 }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Search Section */}
      <Container maxWidth="lg" sx={{ py: 6, transform: 'translateY(-50px)' }}>
        <Card elevation={4}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
              Find Your Perfect Internship
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search by skills, companies, or locations"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                sx: { height: 56 }
              }}
            />
            <Box sx={{ mt: 3, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {popularDomains.map((domain) => (
                <Chip 
                  key={domain} 
                  label={domain} 
                  clickable 
                  onClick={() => setSearchTerm(domain)}
                  variant="outlined"
                />
              ))}
            </Box>
          </CardContent>
        </Card>
      </Container>

      {/* Featured Internships */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4 }}>
          Featured Internships
        </Typography>
        <Grid container spacing={3}>
          {featuredInternships.map((internship) => (
            <Grid item xs={12} md={4} key={internship.id}>
              <Card elevation={2} sx={{ height: '100%', cursor: 'pointer' }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar 
                      src={internship.logo} 
                      alt={internship.company}
                      sx={{ width: 56, height: 56, mr: 2 }}
                    />
                    <Box>
                      <Typography variant="h6">{internship.title}</Typography>
                      <Typography color="text.secondary">{internship.company}</Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {internship.location}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {internship.tags.map((tag) => (
                      <Chip 
                        key={tag} 
                        label={`#${tag}`} 
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* How It Works */}
      <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 6, textAlign: 'center' }}>
            How It Works
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                title: "Create Your AI Profile",
                description: "Connect your GitHub and let our AI analyze your skills to build a personalized profile",
                icon: "🧠"
              },
              {
                title: "Find Matching Internships",
                description: "Our algorithm matches you with internships based on your skills and interests",
                icon: "🔍"
              },
              {
                title: "Apply & Track Progress",
                description: "One-click applications and real-time tracking of your applications",
                icon: "📊"
              }
            ].map((step, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box sx={{ textAlign: 'center', p: 3 }}>
                  <Typography variant="h2" sx={{ mb: 2 }}>{step.icon}</Typography>
                  <Typography variant="h5" gutterBottom>{step.title}</Typography>
                  <Typography variant="body1" color="text.secondary">
                    {step.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {[
            { value: "500+", label: "Companies" },
            { value: "10,000+", label: "Students" },
            { value: "85%", label: "Match Rate" },
            { value: "30+", label: "Countries" }
          ].map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" color="primary" gutterBottom>
                  {stat.value}
                </Typography>
                <Typography variant="h6">{stat.label}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{ 
        py: 10, 
        background: 'linear-gradient(135deg, #FF6B6B 0%, #FF0000 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" gutterBottom>
            Ready to Start Your IT Journey?
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            Join thousands of students finding their dream internships
          </Typography>
          <Button 
            variant="contained" 
            color="secondary" 
            size="large"
            onClick={() => navigate('/register')}
            sx={{ px: 6, py: 2 }}
          >
            Sign Up Free
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
