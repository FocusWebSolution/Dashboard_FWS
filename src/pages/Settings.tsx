import React, { useState } from 'react';
import { Save, User, Bell, Shield, Palette, Globe, Database, Key } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Settings: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [isSaving, setIsSaving] = useState(false);

  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    bio: '',
    company: '',
    website: ''
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: false,
    weeklyReports: true,
    securityAlerts: true
  });

  const [preferences, setPreferences] = useState({
    theme: 'dark',
    language: 'en',
    timezone: 'UTC',
    autoSave: true
  });

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSaving(false);
  };

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'preferences', name: 'Preferences', icon: Palette },
    { id: 'api', name: 'API Keys', icon: Key }
  ];

  const renderProfileTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-[#eae8e5] mb-2">Full Name</label>
          <input
            type="text"
            value={profileData.name}
            onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-[#eae8e5] placeholder-[#eae8e5]/60 focus:outline-none focus:ring-2 focus:ring-[#e87888] focus:border-transparent backdrop-blur-sm"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-[#eae8e5] mb-2">Email Address</label>
          <input
            type="email"
            value={profileData.email}
            onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-[#eae8e5] placeholder-[#eae8e5]/60 focus:outline-none focus:ring-2 focus:ring-[#e87888] focus:border-transparent backdrop-blur-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#eae8e5] mb-2">Bio</label>
        <textarea
          value={profileData.bio}
          onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
          rows={4}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-[#eae8e5] placeholder-[#eae8e5]/60 focus:outline-none focus:ring-2 focus:ring-[#e87888] focus:border-transparent backdrop-blur-sm resize-none"
          placeholder="Tell us about yourself..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-[#eae8e5] mb-2">Company</label>
          <input
            type="text"
            value={profileData.company}
            onChange={(e) => setProfileData({ ...profileData, company: e.target.value })}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-[#eae8e5] placeholder-[#eae8e5]/60 focus:outline-none focus:ring-2 focus:ring-[#e87888] focus:border-transparent backdrop-blur-sm"
            placeholder="Your company name"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-[#eae8e5] mb-2">Website</label>
          <input
            type="url"
            value={profileData.website}
            onChange={(e) => setProfileData({ ...profileData, website: e.target.value })}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-[#eae8e5] placeholder-[#eae8e5]/60 focus:outline-none focus:ring-2 focus:ring-[#e87888] focus:border-transparent backdrop-blur-sm"
            placeholder="https://your-website.com"
          />
        </div>
      </div>
    </div>
  );

  const renderNotificationsTab = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        {Object.entries(notifications).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
            <div>
              <h4 className="text-[#eae8e5] font-medium">
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </h4>
              <p className="text-sm text-[#eae8e5]/80 mt-1">
                {key === 'emailNotifications' && 'Receive email notifications for important updates'}
                {key === 'pushNotifications' && 'Get browser push notifications'}
                {key === 'weeklyReports' && 'Weekly performance and analytics reports'}
                {key === 'securityAlerts' && 'Security alerts and login notifications'}
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={value}
                onChange={(e) => setNotifications({ ...notifications, [key]: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-white/20 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#e87888]/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-[#7b297d] peer-checked:to-[#e87888]"></div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSecurityTab = () => (
    <div className="space-y-6">
      <div className="p-6 bg-white/5 rounded-lg border border-white/10">
        <h3 className="text-lg font-semibold text-[#eae8e5] mb-4">Password</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#eae8e5] mb-2">Current Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-[#eae8e5] placeholder-[#eae8e5]/60 focus:outline-none focus:ring-2 focus:ring-[#e87888] focus:border-transparent backdrop-blur-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#eae8e5] mb-2">New Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-[#eae8e5] placeholder-[#eae8e5]/60 focus:outline-none focus:ring-2 focus:ring-[#e87888] focus:border-transparent backdrop-blur-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#eae8e5] mb-2">Confirm New Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-[#eae8e5] placeholder-[#eae8e5]/60 focus:outline-none focus:ring-2 focus:ring-[#e87888] focus:border-transparent backdrop-blur-sm"
            />
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-[#7b297d] to-[#e87888] text-white rounded-lg hover:shadow-lg transition-all duration-300">
            Update Password
          </button>
        </div>
      </div>

      <div className="p-6 bg-white/5 rounded-lg border border-white/10">
        <h3 className="text-lg font-semibold text-[#eae8e5] mb-4">Two-Factor Authentication</h3>
        <p className="text-[#eae8e5]/80 mb-4">Add an extra layer of security to your account</p>
        <button className="px-6 py-2 bg-white/10 text-[#eae8e5] rounded-lg hover:bg-white/20 transition-all duration-300">
          Enable 2FA
        </button>
      </div>
    </div>
  );

  const renderPreferencesTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-[#eae8e5] mb-2">Theme</label>
          <select
            value={preferences.theme}
            onChange={(e) => setPreferences({ ...preferences, theme: e.target.value })}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-[#eae8e5] focus:outline-none focus:ring-2 focus:ring-[#e87888] focus:border-transparent backdrop-blur-sm"
          >
            <option value="dark">Dark</option>
            <option value="light">Light</option>
            <option value="auto">Auto</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-[#eae8e5] mb-2">Language</label>
          <select
            value={preferences.language}
            onChange={(e) => setPreferences({ ...preferences, language: e.target.value })}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-[#eae8e5] focus:outline-none focus:ring-2 focus:ring-[#e87888] focus:border-transparent backdrop-blur-sm"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-[#eae8e5] mb-2">Timezone</label>
          <select
            value={preferences.timezone}
            onChange={(e) => setPreferences({ ...preferences, timezone: e.target.value })}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-[#eae8e5] focus:outline-none focus:ring-2 focus:ring-[#e87888] focus:border-transparent backdrop-blur-sm"
          >
            <option value="UTC">UTC</option>
            <option value="EST">Eastern Time</option>
            <option value="PST">Pacific Time</option>
            <option value="GMT">GMT</option>
          </select>
        </div>
        
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="autoSave"
            checked={preferences.autoSave}
            onChange={(e) => setPreferences({ ...preferences, autoSave: e.target.checked })}
            className="h-4 w-4 rounded border-white/20 bg-white/10 text-[#e87888] focus:ring-[#e87888] focus:ring-offset-0"
          />
          <label htmlFor="autoSave" className="text-sm text-[#eae8e5]">
            Auto-save changes
          </label>
        </div>
      </div>
    </div>
  );

  const renderApiTab = () => (
    <div className="space-y-6">
      <div className="p-6 bg-white/5 rounded-lg border border-white/10">
        <h3 className="text-lg font-semibold text-[#eae8e5] mb-4">API Keys</h3>
        <p className="text-[#eae8e5]/80 mb-4">Manage your API keys for integrations</p>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
            <div>
              <h4 className="text-[#eae8e5] font-medium">Production API Key</h4>
              <p className="text-sm text-[#eae8e5]/60">sk-prod-••••••••••••••••</p>
            </div>
            <button className="px-4 py-2 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500/30 transition-all duration-300">
              Revoke
            </button>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
            <div>
              <h4 className="text-[#eae8e5] font-medium">Development API Key</h4>
              <p className="text-sm text-[#eae8e5]/60">sk-dev-••••••••••••••••</p>
            </div>
            <button className="px-4 py-2 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500/30 transition-all duration-300">
              Revoke
            </button>
          </div>
        </div>
        
        <button className="mt-4 px-6 py-2 bg-gradient-to-r from-[#7b297d] to-[#e87888] text-white rounded-lg hover:shadow-lg transition-all duration-300">
          Generate New Key
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#eae8e5] mb-2">Settings</h1>
          <p className="text-[#eae8e5]/80">Manage your account settings and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center px-3 py-2 rounded-lg text-left transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-[#7b297d] to-[#e87888] text-white'
                          : 'text-[#eae8e5] hover:bg-white/10'
                      }`}
                    >
                      <Icon className="h-5 w-5 mr-3" />
                      {tab.name}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
              {activeTab === 'profile' && renderProfileTab()}
              {activeTab === 'notifications' && renderNotificationsTab()}
              {activeTab === 'security' && renderSecurityTab()}
              {activeTab === 'preferences' && renderPreferencesTab()}
              {activeTab === 'api' && renderApiTab()}

              {/* Save Button */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <button
                  onClick={handleSave}
                  disabled={isSaving}
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-[#7b297d] to-[#e87888] text-white rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSaving ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="h-5 w-5 mr-2" />
                      Save Changes
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;