import React, { useState } from 'react';
import { Filter, Search, Eye, Download, Star } from 'lucide-react';

const Templates: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Business', 'Creative', 'Technology', 'Content'];

  const templates = [
    {
      id: 1,
      name: 'Tech Startup',
      category: 'Business',
      description: 'Modern landing page for tech companies',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Responsive', 'Dark Mode', 'Analytics'],
      rating: 4.8,
      downloads: 1234
    },
    {
      id: 2,
      name: 'Portfolio Pro',
      category: 'Creative',
      description: 'Stunning portfolio for creatives',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Gallery', 'Contact Form', 'Blog'],
      rating: 4.9,
      downloads: 2156
    },
    {
      id: 3,
      name: 'E-Commerce',
      category: 'Business',
      description: 'Complete online store solution',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Cart', 'Payments', 'Inventory'],
      rating: 4.7,
      downloads: 987
    },
    {
      id: 4,
      name: 'Restaurant',
      category: 'Business',
      description: 'Beautiful restaurant website',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Menu', 'Reservations', 'Reviews'],
      rating: 4.6,
      downloads: 756
    },
    {
      id: 5,
      name: 'SaaS Landing',
      category: 'Technology',
      description: 'Convert visitors to customers',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Pricing', 'Features', 'Testimonials'],
      rating: 4.8,
      downloads: 1643
    },
    {
      id: 6,
      name: 'Blog & News',
      category: 'Content',
      description: 'Engaging blog platform',
      image: 'https://images.pexels.com/photos/261679/pexels-photo-261679.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['CMS', 'SEO', 'Social Share'],
      rating: 4.5,
      downloads: 432
    }
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#eae8e5] mb-4">
            Professional Website Templates
          </h1>
          <p className="text-xl text-[#eae8e5]/80 max-w-2xl mx-auto">
            Choose from our curated collection of modern, responsive templates designed for every industry
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#eae8e5]/60" />
              <input
                type="text"
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-[#eae8e5] placeholder-[#eae8e5]/60 focus:outline-none focus:ring-2 focus:ring-[#e87888] focus:border-transparent backdrop-blur-sm"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-[#eae8e5]/60" />
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-[#7b297d] to-[#e87888] text-white'
                        : 'bg-white/10 text-[#eae8e5] hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template) => (
            <div key={template.id} className="group">
              <div className="backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105">
                {/* Template Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={template.image}
                    alt={template.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 bg-[#7b297d] text-white text-xs rounded-full">
                      {template.category}
                    </span>
                  </div>
                </div>

                {/* Template Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-[#eae8e5]">{template.name}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-[#eec48b] fill-current" />
                      <span className="text-sm text-[#eae8e5]/80 ml-1">{template.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-[#eae8e5]/80 mb-4">{template.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {template.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-white/10 text-[#eae8e5] text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Downloads */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-[#eae8e5]/60">
                      {template.downloads.toLocaleString()} downloads
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-[#7b297d] to-[#e87888] text-white rounded-lg hover:shadow-lg transition-all duration-300">
                      <Download className="h-4 w-4 mr-2" />
                      Use Template
                    </button>
                    <button className="px-4 py-2 bg-white/10 text-[#eae8e5] rounded-lg hover:bg-white/20 transition-all duration-300">
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-[#eae8e5] mb-2">No templates found</h3>
            <p className="text-[#eae8e5]/80">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Templates;