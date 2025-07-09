import React, { useState } from 'react';
import { Sparkles, Zap, BarChart3, Users, Globe, TrendingUp, Clock, Server, ArrowLeft, ExternalLink, Download, Edit } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedWebsite, setGeneratedWebsite] = useState<any>(null);
  const [generationStep, setGenerationStep] = useState(0);

  const popularExamples = [
    'Create a personal portfolio for a UX designer with project showcase and contact form',
    'Build a modern SaaS landing page with pricing tiers and customer testimonials',
    'Design a restaurant website with menu, online ordering, and reservation system',
    'Make a photography portfolio with image gallery and client booking system',
    'Create a fitness gym website with class schedules and membership plans',
    'Design a real estate website with property listings and agent profiles',
    'Build an e-commerce store for handmade jewelry with product catalog',
    'Create a nonprofit website with donation system and volunteer signup'
  ];

  const generationSteps = [
    'Analyzing your requirements...',
    'Selecting optimal design patterns...',
    'Generating responsive layout...',
    'Creating component structure...',
    'Applying modern styling...',
    'Optimizing for performance...',
    'Finalizing website structure...'
  ];

  const handleGenerate = async (promptText?: string) => {
    const textToGenerate = promptText || prompt;
    if (!textToGenerate.trim()) return;
    
    setIsGenerating(true);
    setGenerationStep(0);
    
    // Simulate AI generation with realistic steps
    for (let i = 0; i < generationSteps.length; i++) {
      setGenerationStep(i);
      await new Promise(resolve => setTimeout(resolve, 800));
    }
    
    // Generate website based on prompt
    const website = generateWebsiteFromPrompt(textToGenerate);
    setGeneratedWebsite(website);
    setIsGenerating(false);
  };

  const generateWebsiteFromPrompt = (promptText: string) => {
    // Simulate AI understanding and generating appropriate website
    if (promptText.toLowerCase().includes('portfolio') && promptText.toLowerCase().includes('ux designer')) {
      return {
        title: 'Sarah Chen - UX Designer Portfolio',
        type: 'Portfolio',
        url: 'https://sarahchen-ux.focuswebsolution.com',
        preview: '/d11.png',
        description: 'A modern, clean portfolio showcasing UX design projects with case studies and contact form.',
        features: [
          'Hero section with professional photo',
          'Interactive project showcase',
          'Detailed case studies',
          'Skills and experience timeline',
          'Contact form with validation',
          'Responsive design',
          'Dark/light mode toggle',
          'Smooth animations'
        ],
        pages: [
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
          { name: 'Projects', path: '/projects' },
          { name: 'Case Studies', path: '/case-studies' },
          { name: 'Contact', path: '/contact' }
        ],
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        performance: {
          speed: '98/100',
          accessibility: '100/100',
          seo: '95/100',
          bestPractices: '100/100'
        }
      };
    } else if (promptText.toLowerCase().includes('saas') && promptText.toLowerCase().includes('landing')) {
      return {
        title: 'CloudSync Pro - SaaS Platform',
        type: 'SaaS Landing',
        url: 'https://cloudsync-pro.focuswebsolution.com',
        preview: '/d12.png',
        description: 'Professional SaaS landing page with pricing tiers, testimonials, and conversion optimization.',
        features: [
          'Compelling hero section',
          'Feature highlights',
          'Pricing comparison table',
          'Customer testimonials',
          'Free trial signup',
          'Integration showcase',
          'FAQ section',
          'Live chat widget'
        ],
        pages: [
          { name: 'Home', path: '/' },
          { name: 'Features', path: '/features' },
          { name: 'Pricing', path: '/pricing' },
          { name: 'About', path: '/about' },
          { name: 'Contact', path: '/contact' }
        ],
        technologies: ['React', 'Next.js', 'Tailwind CSS', 'Stripe'],
        performance: {
          speed: '96/100',
          accessibility: '98/100',
          seo: '100/100',
          bestPractices: '98/100'
        }
      };
    } else {
      // Default website generation
      return {
        title: 'Custom Website',
        type: 'Business',
        url: 'https://custom-site.focuswebsolution.com',
        preview: '/d13.png',
        description: 'A custom website tailored to your specific requirements.',
        features: [
          'Custom design',
          'Responsive layout',
          'Contact forms',
          'SEO optimized',
          'Fast loading',
          'Mobile friendly'
        ],
        pages: [
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
          { name: 'Services', path: '/services' },
          { name: 'Contact', path: '/contact' }
        ],
        technologies: ['React', 'Tailwind CSS'],
        performance: {
          speed: '94/100',
          accessibility: '96/100',
          seo: '92/100',
          bestPractices: '95/100'
        }
      };
    }
  };

  const handleExampleClick = (example: string) => {
    setPrompt(example);
    handleGenerate(example);
  };

  const handleBackToDashboard = () => {
    setGeneratedWebsite(null);
    setPrompt('');
  };

  if (generatedWebsite) {
    return (
      <div className="min-h-screen pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center mb-8">
            <button
              onClick={handleBackToDashboard}
              className="flex items-center px-4 py-2 rounded-lg bg-white/10 text-[#eae8e5] hover:bg-white/20 transition-all duration-300 mr-4"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Dashboard
            </button>
            <div>
              <h1 className="text-3xl font-bold text-[#eae8e5]">Website Generated Successfully!</h1>
              <p className="text-[#eae8e5]/80">Your website is ready and deployed</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Website Preview */}
            <div className="lg:col-span-2">
              <div className="backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-semibold text-[#eae8e5] mb-1">{generatedWebsite.title}</h2>
                      <p className="text-[#eae8e5]/80">{generatedWebsite.url}</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 rounded-lg bg-white/10 text-[#eae8e5] hover:bg-white/20 transition-all duration-300">
                        <Edit className="h-5 w-5" />
                      </button>
                      <button className="p-2 rounded-lg bg-white/10 text-[#eae8e5] hover:bg-white/20 transition-all duration-300">
                        <Download className="h-5 w-5" />
                      </button>
                      <button className="flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-[#7b297d] to-[#e87888] text-white hover:shadow-lg transition-all duration-300">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Live
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Website Preview Image */}
                <div className="relative h-96 bg-gray-900">
                  <img
                    src={generatedWebsite.preview}
                    alt="Website Preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="backdrop-blur-sm bg-white/10 rounded-lg p-4 border border-white/20">
                      <p className="text-white text-sm">{generatedWebsite.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="mt-6 backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-[#eae8e5] mb-4">Performance Score</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {Object.entries(generatedWebsite.performance).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-[#e87888] mb-1">{value}</div>
                      <div className="text-sm text-[#eae8e5]/80 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Website Details */}
            <div className="space-y-6">
              {/* Features */}
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-[#eae8e5] mb-4">Features Included</h3>
                <div className="space-y-2">
                  {generatedWebsite.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-[#e87888] rounded-full mr-3"></div>
                      <span className="text-sm text-[#eae8e5]/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pages */}
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-[#eae8e5] mb-4">Pages Created</h3>
                <div className="space-y-2">
                  {generatedWebsite.pages.map((page: any, index: number) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-white/5">
                      <span className="text-sm text-[#eae8e5]">{page.name}</span>
                      <span className="text-xs text-[#eae8e5]/60">{page.path}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-[#eae8e5] mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {generatedWebsite.technologies.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-[#7b297d] to-[#e87888] text-white text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-[#eae8e5] mb-4">Next Steps</h3>
                <div className="space-y-3">
                  <button className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-[#7b297d] to-[#e87888] text-white hover:shadow-lg transition-all duration-300">
                    Customize Design
                  </button>
                  <button className="w-full px-4 py-3 rounded-lg bg-white/10 text-[#eae8e5] hover:bg-white/20 transition-all duration-300">
                    Add Custom Domain
                  </button>
                  <button className="w-full px-4 py-3 rounded-lg bg-white/10 text-[#eae8e5] hover:bg-white/20 transition-all duration-300">
                    Download Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* AI Builder Section */}
        <div className="mb-12">
          <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10">
            <div className="flex items-center mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-r from-[#7b297d] to-[#e87888] mr-4">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-[#eae8e5]">Tell AI what you want to build:</h2>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <div className="flex-1">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g., Create a personal portfolio for a UX designer with project showcase and contact form"
                  className="w-full h-32 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-[#eae8e5] placeholder-[#eae8e5]/60 focus:outline-none focus:ring-2 focus:ring-[#e87888] focus:border-transparent backdrop-blur-sm resize-none"
                  rows={3}
                />
              </div>
              <div className="lg:w-auto">
                <button
                  onClick={() => handleGenerate()}
                  disabled={!prompt.trim() || isGenerating}
                  className="w-full lg:w-auto px-8 py-3 rounded-lg bg-gradient-to-r from-[#7b297d] to-[#e87888] text-white font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Generating...
                    </>
                  ) : (
                    <>
                      <Zap className="h-5 w-5 mr-2" />
                      Generate Now
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Generation Progress */}
            {isGenerating && (
              <div className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center mb-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#e87888] mr-2"></div>
                  <span className="text-sm text-[#eae8e5]">{generationSteps[generationStep]}</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-[#7b297d] to-[#e87888] h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((generationStep + 1) / generationSteps.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-[#eae8e5] mb-4">Popular examples to try:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {popularExamples.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => handleExampleClick(example)}
                    disabled={isGenerating}
                    className="text-left p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#e87888]/50 transition-all duration-300 text-[#eae8e5]/90 hover:text-[#eae8e5] group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="text-sm">{example}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Quick Stats */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-[#eae8e5] mb-6">IT Analytics Overview</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <Globe className="h-8 w-8 text-[#e87888]" />
                  <span className="text-2xl font-bold text-[#eae8e5]">12</span>
                </div>
                <p className="text-sm text-[#eae8e5]/80">Active Websites</p>
              </div>
              
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <Users className="h-8 w-8 text-[#eec48b]" />
                  <span className="text-2xl font-bold text-[#eae8e5]">2.4k</span>
                </div>
                <p className="text-sm text-[#eae8e5]/80">Total Visitors</p>
              </div>
              
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <TrendingUp className="h-8 w-8 text-[#7b297d]" />
                  <span className="text-2xl font-bold text-[#eae8e5]">↑ 18%</span>
                </div>
                <p className="text-sm text-[#eae8e5]/80">Growth Rate</p>
              </div>
              
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <Clock className="h-8 w-8 text-[#e87888]" />
                  <span className="text-2xl font-bold text-[#eae8e5]">1.2s</span>
                </div>
                <p className="text-sm text-[#eae8e5]/80">Avg Load Time</p>
              </div>
            </div>
          </div>

          {/* Performance Chart */}
          <div className="lg:col-span-2">
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 h-80">
              <h3 className="text-lg font-semibold text-[#eae8e5] mb-4">Performance Metrics</h3>
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 text-[#e87888] mx-auto mb-4" />
                  <p className="text-[#eae8e5]/80">Performance analytics will be displayed here</p>
                </div>
              </div>
            </div>
          </div>

          {/* System Status */}
          <div className="lg:col-span-1">
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 h-80">
              <h3 className="text-lg font-semibold text-[#eae8e5] mb-4">System Status</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-sm text-[#eae8e5]">Server Health</span>
                  </div>
                  <span className="text-sm text-green-500">Online</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-sm text-[#eae8e5]">Database</span>
                  </div>
                  <span className="text-sm text-green-500">Connected</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                    <span className="text-sm text-[#eae8e5]">CDN Status</span>
                  </div>
                  <span className="text-sm text-yellow-500">Optimizing</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-sm text-[#eae8e5]">SSL Certificate</span>
                  </div>
                  <span className="text-sm text-green-500">Valid</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="text-lg font-semibold text-[#eae8e5] mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: 'Generated new portfolio website', time: '2 minutes ago', type: 'success' },
              { action: 'Performance optimization completed', time: '1 hour ago', type: 'info' },
              { action: 'New template added to gallery', time: '3 hours ago', type: 'success' },
              { action: 'System backup completed', time: '6 hours ago', type: 'info' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center">
                  <div className={`w-2 h-2 rounded-full mr-3 ${activity.type === 'success' ? 'bg-green-500' : 'bg-blue-500'}`}></div>
                  <span className="text-sm text-[#eae8e5]">{activity.action}</span>
                </div>
                <span className="text-sm text-[#eae8e5]/60">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;