import React, { useState, useEffect, useRef } from 'react';
import { 
  Camera, MapPin, Calendar, 
  Maximize2, X, ChevronLeft, ChevronRight, 
  CheckCircle2, Award, Upload, RotateCcw
} from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/galleryData';
import { getAllStoredImages, saveImageToStore, clearAllStoredImages, removeImageFromStore } from '../utils/imageStore';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [storedImages, setStoredImages] = useState<Record<string, string>>({});
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [uploadNotification, setUploadNotification] = useState<string | null>(null);

  const batchFileInputRef = useRef<HTMLInputElement>(null);
  const singleFileInputRef = useRef<HTMLInputElement>(null);
  const [targetUploadItem, setTargetUploadItem] = useState<GalleryItem | null>(null);

  // Load user photos from IndexedDB
  useEffect(() => {
    getAllStoredImages().then(setStoredImages);

    const handleUpdate = () => {
      getAllStoredImages().then(setStoredImages);
    };

    window.addEventListener('daksh_image_updated', handleUpdate);
    return () => window.removeEventListener('daksh_image_updated', handleUpdate);
  }, []);

  const categories = [
    { key: 'all', label: 'All', count: GALLERY_ITEMS.length },
    { key: 'dignitaries', label: 'Summits', count: GALLERY_ITEMS.filter(i => i.category === 'dignitaries').length },
    { key: 'live-scanning', label: 'Field Scans', count: GALLERY_ITEMS.filter(i => i.category === 'live-scanning').length },
    { key: 'partnerships', label: 'MOUs', count: GALLERY_ITEMS.filter(i => i.category === 'partnerships').length },
    { key: 'team', label: 'Field Crew', count: GALLERY_ITEMS.filter(i => i.category === 'team').length },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  // Lightbox keyboard and navigation
  const currentIndex = selectedItem ? filteredItems.findIndex(i => i.id === selectedItem.id) : -1;
  
  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (currentIndex > 0) {
      setSelectedItem(filteredItems[currentIndex - 1]);
    } else {
      setSelectedItem(filteredItems[filteredItems.length - 1]);
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (currentIndex < filteredItems.length - 1) {
      setSelectedItem(filteredItems[currentIndex + 1]);
    } else {
      setSelectedItem(filteredItems[0]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === 'Escape') setSelectedItem(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem, currentIndex, filteredItems]);

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  // Batch file upload handler
  const handleBatchFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    let matchedCount = 0;
    const fileList = Array.from(files);

    for (const file of fileList) {
      let matchedItem = GALLERY_ITEMS.find(item => {
        const itemClean = item.filename.toLowerCase();
        const fileClean = file.name.toLowerCase();
        if (itemClean === fileClean) return true;
        const tsMatch = item.filename.match(/\d{2}\.\d{2}\.\d{2}/);
        if (tsMatch && fileClean.includes(tsMatch[0])) return true;
        return false;
      });

      if (!matchedItem) {
        matchedItem = GALLERY_ITEMS.find(i => !storedImages[i.filename]);
      }

      if (matchedItem) {
        const dataUrl = await readFileAsDataURL(file);
        await saveImageToStore(matchedItem.filename, dataUrl);
        matchedCount++;
      }
    }

    setUploadNotification(`Applied ${matchedCount} photo${matchedCount > 1 ? 's' : ''}`);
    setTimeout(() => setUploadNotification(null), 4000);
    if (batchFileInputRef.current) batchFileInputRef.current.value = '';
  };

  const handleSingleCardUpload = (item: GalleryItem, e: React.MouseEvent) => {
    e.stopPropagation();
    setTargetUploadItem(item);
    if (singleFileInputRef.current) {
      singleFileInputRef.current.click();
    }
  };

  const handleSingleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !targetUploadItem) return;

    const dataUrl = await readFileAsDataURL(file);
    await saveImageToStore(targetUploadItem.filename, dataUrl);
    setUploadNotification(`Updated photo for "${targetUploadItem.title}"`);
    setTimeout(() => setUploadNotification(null), 3000);
    setTargetUploadItem(null);
    if (singleFileInputRef.current) singleFileInputRef.current.value = '';
  };

  const readFileAsDataURL = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleResetToDefaults = async (e: React.MouseEvent) => {
    e.stopPropagation();
    await clearAllStoredImages();
    setUploadNotification('Reset photos to defaults.');
    setTimeout(() => setUploadNotification(null), 3000);
  };

  const customPhotoCount = Object.keys(storedImages).length;

  return (
    <section id="gallery" className="py-10 md:py-14 bg-[#F4F7FB] border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hidden File Inputs */}
        <input 
          ref={batchFileInputRef} 
          type="file" 
          multiple 
          accept="image/*" 
          onChange={handleBatchFiles} 
          className="hidden" 
        />
        <input 
          ref={singleFileInputRef} 
          type="file" 
          accept="image/*" 
          onChange={handleSingleFileChange} 
          className="hidden" 
        />

        {/* Compact Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-bold text-[#4338CA] tracking-wider uppercase mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>National Impact · शक्ति की दिशा</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              Real Summits. Real Scans. Real Impact.
            </h2>
          </div>

          {/* Compact Actions & Filters Row */}
          <div className="flex items-center gap-2 shrink-0">
            {/* <button
              onClick={() => batchFileInputRef.current?.click()}
              className="px-3 py-1.5 rounded-xl bg-[#161248] hover:bg-[#2E2A72] text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
              title="Upload your real photos"
            >
              <Upload className="w-3.5 h-3.5 text-cyan-300" />
              <span>Upload Photos</span>
            </button> */}

            {customPhotoCount > 0 && (
              <button
                onClick={handleResetToDefaults}
                className="px-2.5 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 text-xs font-semibold transition-all flex items-center gap-1 cursor-pointer"
                title="Reset to default photos"
              >
                <RotateCcw className="w-3 h-3 text-slate-400" />
                <span>Reset</span>
              </button>
            )}

            {/* <div className="hidden sm:flex items-center gap-1 text-xs font-bold text-slate-500 bg-white px-2.5 py-1.5 rounded-xl border border-slate-200">
              <Camera className="w-3.5 h-3.5 text-[#4338CA]" />
              <span>{GALLERY_ITEMS.length}</span>
            </div> */}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-6 scrollbar-none">
          {/* {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer shrink-0 ${
                activeCategory === cat.key
                  ? 'bg-[#161248] text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1 rounded-full ${
                activeCategory === cat.key ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
              }`}>
                {cat.count}
              </span>
            </button>
          ))} */}
        </div>

        {/* Toast Alert */}
        {uploadNotification && (
          <div className="mb-4 py-2 px-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center justify-between animate-in fade-in duration-150">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>{uploadNotification}</span>
            </span>
            <button onClick={() => setUploadNotification(null)} className="text-emerald-700 hover:underline">
              ✕
            </button>
          </div>
        )}

        {/* Redesigned Compact 4-Column Photo Grid (No extra descriptions, No tags) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {filteredItems.map((item) => {
            const hasCustomPhoto = !!storedImages[item.filename];
            const displayImg = storedImages[item.filename] || item.imageSrc;
            const hasError = imageErrors[item.id];

            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col cursor-pointer"
              >
                {/* Visual Area */}
                <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden flex items-center justify-center">
                  {!hasError && displayImg ? (
                    <img 
                      src={displayImg} 
                      alt={item.title} 
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(item.id)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#161248] to-[#2E2A72] flex items-center justify-center text-white">
                      <Award className="w-6 h-6 text-amber-300" />
                    </div>
                  )}

                  {/* Gradient shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-black/15 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-2 left-2 z-10 flex items-center gap-1">
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-black/50 text-white backdrop-blur-xs border border-white/10">
                      {item.categoryLabel}
                    </span>
                    {hasCustomPhoto && (
                      <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-md bg-emerald-500 text-white">
                        Custom
                      </span>
                    )}
                  </div>

                  {/* Single Upload Button on Card */}
                  <div className="absolute top-2 right-2 z-20">
                    <button
                      onClick={(e) => handleSingleCardUpload(item, e)}
                      title="Update photo"
                      className="p-1 rounded-md bg-black/40 hover:bg-[#161248] text-white/90 hover:text-white backdrop-blur-xs border border-white/15 transition-colors cursor-pointer"
                    >
                      <Camera className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Expand icon on hover */}
                  <div className="absolute bottom-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="p-1 rounded-md bg-white/20 backdrop-blur-xs text-white border border-white/20">
                      <Maximize2 className="w-3 h-3 text-cyan-300" />
                    </div>
                  </div>
                </div>

                {/* Compact Content: Title & Location only (NO description, NO tags) */}
                <div className="p-3 flex-1 flex flex-col justify-between">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#4338CA] transition-colors leading-snug line-clamp-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                    <span className="flex items-center gap-1 truncate text-slate-500">
                      <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </span>
                    <span className="shrink-0 text-[10px] font-medium text-slate-400">
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Full-Screen Lightbox Modal for Full Details */}
      {selectedItem && (
        <div 
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-slate-200"
          >
            {/* Modal Header */}
            <div className="px-5 py-3.5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
              <div className="flex items-center gap-2 text-xs">
                <span className="font-bold text-[#4338CA] uppercase tracking-wider">
                  {selectedItem.categoryLabel}
                </span>
                <span className="text-slate-300">·</span>
                <span className="text-slate-600">{selectedItem.location}</span>
                <span className="text-slate-300">·</span>
                <span className="text-slate-500">{selectedItem.date}</span>
              </div>
              
              <div className="flex items-center gap-1.5">
                <button
                  onClick={(e) => handleSingleCardUpload(selectedItem, e)}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Upload your photo"
                >
                  <Camera className="w-3.5 h-3.5 text-[#4338CA]" />
                  <span>Replace Photo</span>
                </button>
                {storedImages[selectedItem.filename] && (
                  <button
                    onClick={async () => {
                      await removeImageFromStore(selectedItem.filename);
                      setUploadNotification('Reverted to default photo.');
                      setTimeout(() => setUploadNotification(null), 3000);
                    }}
                    className="p-1 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                    title="Revert photo"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto flex-1 p-5 space-y-4">
              
              {/* Photo */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-video flex items-center justify-center">
                <img
                  src={storedImages[selectedItem.filename] || selectedItem.imageSrc}
                  alt={selectedItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />

                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Title & Caption in modal */}
              <div className="space-y-2">
                <h3 className="text-lg font-extrabold text-slate-900">
                  {selectedItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  {selectedItem.caption}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {selectedItem.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-indigo-50 text-[#4338CA] border border-indigo-100 flex items-center gap-1"
                    >
                      <CheckCircle2 className="w-3 h-3 text-indigo-600" />
                      <span>{h}</span>
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
