/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Cpu, 
  Brain, 
  Code, 
  Database,
  ExternalLink,
  ChevronRight,
  Terminal,
  Layers,
  Activity,
  Lock,
  User,
  X,
  LogOut,
  Send,
  MessageSquare,
  Clock,
  Plus,
  Trash2,
  Type
} from "lucide-react";

// --- Types ---
interface Post {
  id: string;
  title: string;
  content: string;
  timestamp: string;
  author: string;
}

// --- Components ---

const Navbar = ({ onOpenLogin, isLoggedIn, onLogout }: { 
  onOpenLogin: () => void, 
  isLoggedIn: boolean, 
  onLogout: () => void 
}) => (
  <header className="flex justify-between items-center mb-12 px-6 py-6 max-w-7xl mx-auto">
    <div className="flex items-center space-x-3">
      <div className="w-9 h-9 rounded-lg bg-ai-primary flex items-center justify-center font-extrabold text-white shadow-lg shadow-ai-primary/20 transition-transform hover:scale-110 cursor-pointer">
        <Terminal size={20} />
      </div>
      <div>
        <span className="text-sm font-bold tracking-tight uppercase block leading-none">7syedmudassarali</span>
        <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">Portfolio 2026</span>
      </div>
    </div>
    <nav className="hidden md:flex items-center space-x-8 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
      <a href="#about" className="hover:text-ai-primary transition-colors cursor-pointer">About</a>
      <a href="#skills" className="hover:text-ai-primary transition-colors cursor-pointer">Stack</a>
      <a href="#contact" className="hover:text-ai-primary transition-colors cursor-pointer">Connect</a>
      {isLoggedIn ? (
        <button 
          onClick={onLogout}
          className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:bg-ai-primary hover:text-white transition-all cursor-pointer text-white"
        >
          <LogOut size={14} />
          <span>LOGOUT_SYS</span>
        </button>
      ) : (
        <button 
          onClick={onOpenLogin}
          className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:bg-ai-primary hover:text-white transition-all cursor-pointer text-white"
        >
          <Lock size={14} />
          <span>LOGIN_UPLINK</span>
        </button>
      )}
    </nav>
  </header>
);

const LoginModal = ({ isOpen, onClose, onLoginSuccess }: { 
  isOpen: boolean, 
  onClose: () => void, 
  onLoginSuccess: () => void 
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "syed.mudassaralishah13@gmail.com" && password === "Mudassar@123567") {
      onLoginSuccess();
      onClose();
    } else {
      setError("AUTHENTICATION_FAILURE: INVALID_CREDENTIALS");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-md bento-card p-10 bg-ai-surface border border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <Lock size={160} />
            </div>
            
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="mb-10">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-ai-primary mb-3 block">AUTH_GATEWAY</span>
              <h2 className="text-3xl font-black uppercase tracking-tighter text-white">System<br/>Authentication</h2>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">IDENTITY_STRING</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm font-bold text-white focus:border-ai-primary focus:bg-white/10 outline-none transition-all placeholder:text-slate-600"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">PASS_KEY</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm font-bold text-white focus:border-ai-primary focus:bg-white/10 outline-none transition-all placeholder:text-slate-600"
                  />
                </div>
              </div>

              {error && (
                <p className="text-[10px] font-mono font-bold text-ai-primary uppercase tracking-wider bg-ai-primary/5 p-3 rounded-lg border border-ai-primary/20">
                  {error}
                </p>
              )}

              <button 
                type="submit"
                className="w-full py-4 bg-ai-primary text-white font-black uppercase tracking-[0.2em] text-xs hover:bg-ai-primary/80 transition-all rounded-xl shadow-xl shadow-ai-primary/20"
              >
                INITIALIZE_SESSION
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Hero = () => (
  <section className="px-6 mb-12 max-w-7xl mx-auto tech-grid pt-12 pb-24 rounded-[3rem] relative overflow-hidden group">
    <div className="absolute inset-0 bg-gradient-to-b from-ai-bg via-transparent to-ai-bg opacity-80 pointer-events-none" />
    <div className="absolute -top-24 -right-24 w-96 h-96 bg-ai-primary/10 blur-[120px] rounded-full group-hover:bg-ai-primary/20 transition-all duration-1000" />
    
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
      {/* Hero Card (2x2) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="lg:col-span-2 lg:row-span-2 bento-card p-10 flex flex-col justify-between border-ai-primary/10 bg-ai-surface/80 backdrop-blur-xl"
      >
        <div className="relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl border border-ai-primary/20 bg-ai-primary/5 text-ai-primary text-[10px] uppercase font-bold tracking-[0.3em] mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ai-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-ai-primary"></span>
            </span>
            BSc. ARTIFICIAL INTELLIGENCE
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] text-white">
            <span className="red-wave-text">Syed</span><br/>
            <span className="red-wave-text">
              Mudassar Ali
            </span>
          </h1>
        </div>
        <div className="relative z-10 mt-16">
          <p className="text-lg text-slate-400 max-w-md leading-relaxed mb-10 font-medium">
            Developing the neural architectures that solve complex human problems with mathematical elegance.
          </p>
          <div className="flex flex-wrap gap-5">
            <motion.button 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-ai-primary rounded-2xl text-white font-bold text-sm shadow-[0_20px_50px_rgba(239,68,68,0.4)] hover:shadow-[0_20px_50px_rgba(239,68,68,0.6)] transition-all"
            >
              INITIALIZE CONNECTION
            </motion.button>
            <motion.a 
              href="https://www.linkedin.com/in/7syedmudassarali/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 90 }}
              className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white cursor-pointer hover:bg-ai-primary transition-all"
            >
              <ChevronRight size={24} />
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Experience/Metric Card (1x1) */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="bento-card p-8 flex flex-col justify-between group hover:bg-ai-primary transition-all duration-700 hover:border-transparent"
      >
        <div className="flex justify-between items-start">
          <Brain size={20} className="text-ai-primary group-hover:text-white transition-colors" />
          <span className="text-[9px] font-mono font-bold text-slate-500 group-hover:text-white/60">SYS_DEPLOY</span>
        </div>
        <div>
          <span className="text-6xl font-black text-white tracking-tighter block leading-none">12+</span>
          <p className="text-[10px] text-ai-primary font-black uppercase mt-3 tracking-[0.2em] group-hover:text-white transition-colors">AI MODELS DEPLOYED</p>
        </div>
      </motion.div>

      {/* Status Card (1x1) */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="bento-card p-8 flex flex-col justify-between bg-ai-surface/50 border-dashed border-white/10"
      >
        <div className="flex justify-between items-start">
          <Cpu size={20} className="text-ai-secondary" />
          <div className="px-2 py-1 bg-ai-secondary/10 rounded text-[8px] text-ai-secondary font-bold">STABLE</div>
        </div>
        <div>
          <p className="text-[9px] text-slate-500 uppercase tracking-[0.3em] mb-2 font-black">CURRENT_PROCESS</p>
          <p className="text-xs font-bold text-slate-200 leading-tight">Optimizing LLM Quantization for Edge TPU Deployment</p>
        </div>
      </motion.div>

      {/* Socials Card (1x2) - Wide */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="lg:col-span-2 bento-card p-8 flex flex-col md:flex-row justify-between items-center bg-white text-black hover:scale-[1.01]"
      >
        <div className="mb-6 md:mb-0">
          <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">Network Hub</p>
          <h4 className="text-3xl font-black uppercase tracking-tighter leading-none red-wave-text">Access<br/>Global Sockets</h4>
        </div>
        <div className="flex gap-4">
          {[
            { Icon: Github, href: "https://github.com/7syedmudassarali", label: "GITHUB_SYS" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/7syedmudassarali/", label: "LINKEDIN_SYS" },
            { Icon: Mail, href: "mailto:syed.mudassaralishah13@gmail.com", label: "PERSONAL_UPLINK" }
          ].map(({ Icon, href, label }, i) => (
            <motion.a 
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, backgroundColor: '#ef4444', color: '#fff' }}
              className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center transition-all cursor-pointer shadow-lg shadow-black/5 text-black group relative"
              title={label}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

const Skills = () => {
  const skills = [
    { name: "Deep Learning", icon: Brain, level: 90, color: "from-red-600 to-orange-500" },
    { name: "Computer Vision", icon: Cpu, level: 85, color: "from-rose-500 to-red-400" },
    { name: "NLP / Transformers", icon: Layers, level: 80, color: "from-red-500 to-rose-600" },
    { name: "Python / PyTorch", icon: Code, level: 95, color: "from-orange-600 to-red-500" },
    { name: "MLOps", icon: Activity, level: 75, color: "from-red-700 to-rose-500" },
    { name: "Data Engineering", icon: Database, level: 70, color: "from-orange-500 to-red-600" },
  ];

  const keywords = ["NEURAL NETWORKS", "COMPUTER VISION", "GENERATIVE AI", "MLOPS", "PYTORCH", "TRANSFORMERS", "REINFORCEMENT LEARNING", "LLMS", "ON-DEVICE AI", "AUTOML"];

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full py-3 bg-ai-primary/5 border-y border-white/5 overflow-hidden">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-12"
        >
          {[...keywords, ...keywords].map((word, i) => (
            <span key={i} className="font-mono text-[9px] text-ai-primary tracking-[0.6em] uppercase font-bold opacity-60">{word}</span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 pt-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 px-2">
          <div>
            <span className="font-mono text-ai-primary text-xs uppercase tracking-[0.4em] block mb-4 font-bold">CORE CAPABILITIES</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase whitespace-pre-line">The Architecture of<br/>Modern Intellect</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              className="bento-card p-12 hover:border-ai-primary/40 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-ai-primary/5 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex justify-between items-start mb-10 relative z-10">
                <div className="p-5 bg-white/5 group-hover:bg-ai-primary/20 transition-all rounded-[1.5rem] shadow-inner">
                  <skill.icon size={28} className="text-ai-primary group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-mono text-[11px] text-slate-500 font-black tracking-[0.2em]">LVL_{skill.level}%_STABLE</span>
              </div>
              <h3 className="text-2xl font-black mb-8 tracking-tighter uppercase relative z-10">{skill.name}</h3>
              <div className="space-y-3 relative z-10">
                <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold text-slate-500">
                  <span>Efficiency</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden shadow-inner">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                    className={`h-full bg-gradient-to-r ${skill.color} shadow-[0_0_15px_rgba(239,68,68,0.4)]`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PostWall = ({ posts, isLoggedIn, onAddPost, onDeletePost }: { 
  posts: Post[], 
  isLoggedIn: boolean, 
  onAddPost: (title: string, content: string) => void,
  onDeletePost: (id: string) => void
}) => {
  const [displayCount, setDisplayCount] = useState(3);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const visiblePosts = posts.slice(0, displayCount);
  const hasMore = displayCount < posts.length;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPostContent.trim() && newPostTitle.trim()) {
      onAddPost(newPostTitle, newPostContent);
      setNewPostTitle("");
      setNewPostContent("");
    }
  };

  return (
    <section id="feed" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-mono text-ai-primary text-xs uppercase tracking-[0.4em] block mb-4 font-bold">NEURAL_DEPOSITS</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">System Feed &<br/>Updates</h2>
          </div>
          {isLoggedIn && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full md:max-w-md"
            >
              <form onSubmit={handleSubmit} className="bento-card p-6 bg-ai-surface/50 border-ai-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <Plus size={16} className="text-ai-primary" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">CREATE_NEW_DATA_ENTRY</span>
                </div>
                
                <div className="relative mb-3">
                  <Type className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={14} />
                  <input 
                    type="text"
                    value={newPostTitle}
                    onChange={(e) => setNewPostTitle(e.target.value)}
                    placeholder="Entry Header / Title"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-9 pr-4 text-[10px] font-black uppercase tracking-widest text-white focus:border-ai-primary outline-none transition-all placeholder:text-slate-600"
                  />
                </div>

                <textarea 
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                  placeholder="Transmit new system update..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm font-bold text-white focus:border-ai-primary outline-none transition-all resize-none h-24 mb-4 placeholder:text-slate-600"
                />
                <button 
                  type="submit"
                  disabled={!newPostTitle.trim() || !newPostContent.trim()}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-ai-primary text-white font-black uppercase tracking-widest text-[10px] hover:bg-ai-primary/80 transition-all rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={14} />
                  TRANSMIT_DATA
                </button>
              </form>
            </motion.div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visiblePosts.map((post, idx) => {
              const isExpanded = expandedId === post.id;
              return (
                <motion.div 
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setExpandedId(isExpanded ? null : post.id)}
                  className={`bento-card p-8 bg-ai-surface/30 hover:bg-ai-surface/50 transition-all border-white/5 flex flex-col relative group cursor-pointer ${isExpanded ? 'md:col-span-2 row-span-2' : 'h-full'}`}
                >
                  {isLoggedIn && (
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        onDeletePost(post.id);
                      }}
                      className="absolute top-4 right-4 p-2 rounded-lg bg-red-500/10 text-red-500 opacity-0 group-hover:opacity-100 transition-all hover:bg-red-500 hover:text-white z-10"
                      title="DELETE_LOG"
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                      <MessageSquare size={16} className="text-ai-primary" />
                    </div>
                    <div className="flex items-center gap-2 text-slate-500">
                      <Clock size={10} />
                      <span className="text-[9px] font-mono">{post.timestamp}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-md font-black uppercase tracking-tight text-ai-primary mb-3 line-clamp-2">{post.title}</h3>
                    <p className={`text-sm text-slate-300 leading-relaxed font-medium ${isExpanded ? '' : 'line-clamp-4'}`}>
                      {post.content}
                    </p>
                  </div>
                  {!isExpanded && post.content.length > 200 && (
                    <div className="mt-4 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-ai-primary/60 group-hover:text-ai-primary transition-colors">
                      <Plus size={10} />
                      VERIFY_FULL_ENTRY
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>


        {hasMore && (
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setDisplayCount(prev => prev + 3)}
            className="w-full py-6 mt-8 bento-card flex items-center justify-center gap-3 text-slate-400 hover:text-white hover:bg-ai-surface transition-all border-dashed border-white/10"
          >
            <Activity size={16} className="text-ai-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">LOAD_PREVIOUS_LOGS</span>
          </motion.button>
        )}
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-24 px-6 relative">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-3 bento-card p-12 bg-ai-surface relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
            <Mail size={300} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase mb-8 leading-none">
              Initialize<br/><span className="red-wave-text">Uplink</span>.
            </h2>
            <div>
              <p className="text-slate-400 text-lg mb-8 max-w-md leading-relaxed">
                I am a student of <span className="text-ai-primary font-bold">Bachelor of Science in Artificial Intelligence from University of Engineering and Technology, Lahore</span>. 
                Currently exploring the frontiers of machine learning and looking for opportunities to contribute.
              </p>
              
              <div className="flex flex-col gap-6 mt-10">
                 <div className="flex items-center gap-5 group cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-ai-primary transition-all shadow-xl">
                      <Mail size={22} className="text-ai-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">UNIVERSITY_SOCKET</p>
                      <a href="mailto:2025SAI153@student.uet.edu.pk" className="text-lg font-bold text-white hover:text-ai-primary transition-colors">
                        2025SAI153@student.uet.edu.pk
                      </a>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="py-12 px-6 border-t border-ai-border bg-ai-bg/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Terminal size={18} className="text-ai-primary" />
            <span className="font-mono text-sm tracking-tighter uppercase font-bold">
              AI_PORTFOLIO_SYSTEM [v1.0.4]
            </span>
          </div>
          <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest pl-7">
            Designing tomorrow's intelligence today.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 text-[10px] font-mono text-white/40 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-ai-primary animate-pulse" />
            <span>LOCAL_TIME: {time}</span>
          </div>
          <div className="flex items-center gap-2">
            <Activity size={12} className="text-ai-secondary" />
            <span>HEARTBEAT: ACTIVE</span>
          </div>
          <div className="hidden lg:block">
            <span>UPLINK: STABLE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      title: "System Initialization",
      content: "Successfully initialized the neural gateway. My research at UET Lahore is now pivoting towards advanced multi-modal transformers for real-time edge processing.",
      timestamp: "2026-05-15 14:00",
      author: "@MUDASSAR_ALI"
    },
    {
      id: "2",
      title: "Neural Architectures",
      content: "Exploring the intersections of symbolic logic and neural architectures. The goal is to create systems that don't just predict, but reason through complex causal chains.",
      timestamp: "2026-05-14 18:30",
      author: "@BSAI_CORE"
    },
    {
      id: "3",
      title: "Quantization Update",
      content: "New post-quantization techniques deployed to the edge cluster. Seeing a 40% reduction in latency with negligible loss in accuracy on the latest vision models.",
      timestamp: "2026-05-13 09:15",
      author: "@UET_LAB_SOCKET"
    },
    {
      id: "4",
      title: "Archive Report",
      content: "Archive Log: Earlier experiments with reinforcement learning in competitive environments showed promising results in autonomous resource management.",
      timestamp: "2026-05-10 12:00",
      author: "@ADMIN_UPLINK"
    }
  ]);

  const addPost = (title: string, content: string) => {
    const newPost: Post = {
      id: Date.now().toString(),
      title,
      content,
      timestamp: new Date().toLocaleString(),
      author: "@MUDASSAR_ALI"
    };
    setPosts([newPost, ...posts]);
  };

  const deletePost = (id: string) => {
    setPosts(prev => prev.filter(p => p.id !== id));
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <AnimatePresence>
        {loading ? (
          <motion.div 
            key="loader"
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-ai-bg flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-16 h-16 bg-ai-primary rounded-sm mx-auto mb-6 flex items-center justify-center"
              >
                <Cpu size={32} className="text-black" />
              </motion.div>
              <div className="w-48 h-[1px] bg-white/10 mx-auto overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full bg-ai-primary"
                />
              </div>
              <p className="font-mono text-[10px] text-ai-primary mt-4 tracking-[0.3em] uppercase">Booting System...</p>
            </div>
          </motion.div>
        ) : (
          <>
            <motion.main 
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="selection:bg-ai-primary selection:text-black"
            >
              <Navbar 
                onOpenLogin={() => setIsLoginModalOpen(true)} 
                isLoggedIn={isLoggedIn}
                onLogout={() => setIsLoggedIn(false)}
              />
              <Hero />
              <Skills />
              <PostWall 
                posts={posts} 
                isLoggedIn={isLoggedIn} 
                onAddPost={addPost} 
                onDeletePost={deletePost}
              />
              <Contact />
              <Footer />
            </motion.main>
            <LoginModal 
              isOpen={isLoginModalOpen} 
              onClose={() => setIsLoginModalOpen(false)}
              onLoginSuccess={() => setIsLoggedIn(true)}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
