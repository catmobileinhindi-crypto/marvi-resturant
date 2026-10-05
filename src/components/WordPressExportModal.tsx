import React, { useState } from 'react';
import { X, Copy, Check, FileCode, ExternalLink, HelpCircle, Layers } from 'lucide-react';

interface WordPressExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WordPressExportModal: React.FC<WordPressExportModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'php' | 'css' | 'js' | 'guide'>('guide');
  const [copied, setCopied] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const phpTemplateSnippet = `<?php
/**
 * Template Name: Nagori Marvi Fast Foods
 * Description: Premium Fast Food & BBQ Restaurant Landing Page Template
 */

get_header(); ?>

<!-- NAGORI MARVI FAST FOODS - PREPARED FOR WORDPRESS -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Bebas+Neue&display=swap" rel="stylesheet">
<link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/nagori-marvi/style.css">

<main id="nagori-marvi-app">
  <!-- Content renders smoothly with vanilla JS and CSS without Node.js runtime -->
  <div id="nagori-root"></div>
</main>

<script src="<?php echo get_stylesheet_directory_uri(); ?>/nagori-marvi/script.js"></script>

<?php get_footer(); ?>`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative w-full max-w-4xl bg-stone-950 border border-amber-500/30 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh] text-left">
        
        {/* Header */}
        <div className="p-6 border-b border-stone-800 flex items-center justify-between bg-stone-900/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white font-brand">
                WordPress Compatibility & Export Package
              </h2>
              <p className="text-xs text-stone-400">
                Standalone HTML/PHP, CSS, and Vanilla JS for fast WordPress integration.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-stone-800/80 bg-stone-950">
          <button
            onClick={() => setActiveTab('guide')}
            className={`px-4 py-2.5 text-xs font-bold rounded-t-xl transition-colors cursor-pointer ${
              activeTab === 'guide'
                ? 'bg-stone-900 text-amber-400 border-t-2 border-amber-400'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            📘 Setup Instructions
          </button>
          <button
            onClick={() => setActiveTab('php')}
            className={`px-4 py-2.5 text-xs font-bold rounded-t-xl transition-colors cursor-pointer ${
              activeTab === 'php'
                ? 'bg-stone-900 text-amber-400 border-t-2 border-amber-400'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            📄 page-nagori-marvi.php
          </button>
          <button
            onClick={() => setActiveTab('css')}
            className={`px-4 py-2.5 text-xs font-bold rounded-t-xl transition-colors cursor-pointer ${
              activeTab === 'css'
                ? 'bg-stone-900 text-amber-400 border-t-2 border-amber-400'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            🎨 style.css
          </button>
          <button
            onClick={() => setActiveTab('js')}
            className={`px-4 py-2.5 text-xs font-bold rounded-t-xl transition-colors cursor-pointer ${
              activeTab === 'js'
                ? 'bg-stone-900 text-amber-400 border-t-2 border-amber-400'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            ⚡ script.js
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-stone-300 text-xs leading-relaxed font-sans">
          
          {activeTab === 'guide' && (
            <div className="space-y-6">
              
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300">
                <h4 className="text-sm font-bold flex items-center gap-2 mb-1">
                  <span>✅ Complete Standalone Files Created in /wordpress-export/</span>
                </h4>
                <p className="text-xs text-stone-300">
                  All standalone files have been generated with pure HTML, standard CSS, and vanilla JavaScript so they can run directly inside any WordPress theme or page builder without Node.js!
                </p>
              </div>

              {/* Method 1 */}
              <div className="p-5 rounded-2xl bg-stone-900/90 border border-stone-800 space-y-3">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 text-amber-400">
                  <span>Method 1: WordPress Custom Page Template (Recommended)</span>
                </h3>
                <ol className="list-decimal pl-5 space-y-2 text-stone-300 text-xs">
                  <li>
                    In your WordPress site directory, navigate to <code className="text-amber-300 bg-stone-950 px-1 py-0.5 rounded">wp-content/themes/your-active-theme/</code>.
                  </li>
                  <li>
                    Create a subfolder named <code className="text-amber-300 bg-stone-950 px-1 py-0.5 rounded">nagori-marvi/</code> and paste <code className="text-amber-300 bg-stone-950 px-1 py-0.5 rounded">style.css</code> and <code className="text-amber-300 bg-stone-950 px-1 py-0.5 rounded">script.js</code> into it.
                  </li>
                  <li>
                    Place <code className="text-amber-300 bg-stone-950 px-1 py-0.5 rounded">page-nagori-marvi.php</code> in your theme root.
                  </li>
                  <li>
                    Go to <strong>WordPress Admin &gt; Pages &gt; Add New</strong>, set title as "Nagori Marvi Fast Foods", and in Page Attributes select the template <strong>"Nagori Marvi Fast Foods"</strong>.
                  </li>
                  <li>Publish and preview!</li>
                </ol>
              </div>

              {/* Method 2 */}
              <div className="p-5 rounded-2xl bg-stone-900/90 border border-stone-800 space-y-3">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 text-amber-400">
                  <span>Method 2: Elementor / HTML Block / Gutenberg Custom HTML</span>
                </h3>
                <ol className="list-decimal pl-5 space-y-2 text-stone-300 text-xs">
                  <li>Create a new page and select "Full Width" or "Canvas" template.</li>
                  <li>Add a <strong>Custom HTML block</strong> or <strong>Elementor HTML widget</strong>.</li>
                  <li>Paste the code from <code className="text-amber-300 bg-stone-950 px-1 py-0.5 rounded">/wordpress-export/index.html</code> directly into the widget.</li>
                  <li>Save and publish.</li>
                </ol>
              </div>

              {/* How to modify menu & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-stone-900/70 border border-stone-800">
                  <h4 className="font-bold text-white mb-1.5 text-xs text-amber-400">
                    🍔 How to Change Menu Items
                  </h4>
                  <p className="text-[11px] text-stone-400 leading-normal">
                    Open <code className="text-amber-300">script.js</code>. At the top, you will find the <code className="text-amber-300">MENU_ITEMS</code> and <code className="text-amber-300">POPULAR_DEALS</code> arrays. Simply change names, prices, or descriptions.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-900/70 border border-stone-800">
                  <h4 className="font-bold text-white mb-1.5 text-xs text-emerald-400">
                    📱 How to Update WhatsApp Number
                  </h4>
                  <p className="text-[11px] text-stone-400 leading-normal">
                    In <code className="text-amber-300">script.js</code> or the HTML, search for <code className="text-amber-300">923112551108</code> and replace it with any new WhatsApp business phone number.
                  </p>
                </div>
              </div>

            </div>
          )}

          {activeTab === 'php' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-amber-400">page-nagori-marvi.php</span>
                <button
                  onClick={() => handleCopy(phpTemplateSnippet, 'php')}
                  className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copied === 'php' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied === 'php' ? 'Copied!' : 'Copy PHP Template'}</span>
                </button>
              </div>
              <pre className="p-4 rounded-xl bg-stone-900 text-stone-300 font-mono text-[11px] overflow-x-auto border border-stone-800">
                {phpTemplateSnippet}
              </pre>
            </div>
          )}

          {activeTab === 'css' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-amber-400">/wordpress-export/style.css</span>
                <span className="text-[11px] text-stone-400">Self-contained responsive CSS stylesheet</span>
              </div>
              <p className="text-xs text-stone-400">
                The full CSS file is located in <code className="text-amber-300 bg-stone-900 px-1 py-0.5 rounded">/wordpress-export/style.css</code>. It includes all dark theme styles, gold borders, glow effects, responsive card grids, cart drawer transitions, and typography.
              </p>
            </div>
          )}

          {activeTab === 'js' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-amber-400">/wordpress-export/script.js</span>
                <span className="text-[11px] text-stone-400">Vanilla JavaScript (No npm or build tools needed)</span>
              </div>
              <p className="text-xs text-stone-400">
                The vanilla JavaScript file is located in <code className="text-amber-300 bg-stone-900 px-1 py-0.5 rounded">/wordpress-export/script.js</code>. It manages cart state, quantity updates, category filtering, product modals, and auto-generates formatted WhatsApp orders.
              </p>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-stone-800 bg-stone-900/60 flex items-center justify-between">
          <span className="text-[11px] text-stone-400">
            Files ready for deployment to any WordPress hosting.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-white text-xs font-bold"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
