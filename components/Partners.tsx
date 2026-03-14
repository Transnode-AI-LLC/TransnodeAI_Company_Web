import React, { useEffect } from 'react';
import { useLanguage } from './LanguageContext';

const Partners: React.FC = () => {
  const { content } = useLanguage();

  useEffect(() => {
    // Inject the BBB legacy script for the dynamic badge functionality
    const script = document.createElement('script');
    script.src = "https://seal-central-northern-western-arizona.bbb.org/inc/legacy.js";
    script.type = "text/javascript";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Clean up script on unmount if necessary
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-12 border-b border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-4">
            <p className="text-center text-xs font-bold text-slate-400 tracking-[0.2em] uppercase mb-8">
              {content.aiModels.partnerWith}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 transition-all duration-500">
               {/* NSF I-CORPS™ */}
               <a href="https://new.nsf.gov/funding/initiatives/i-corps" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 transition-transform hover:scale-105 group">
                 <img 
                   src="https://image2url.com/r2/default/images/1772164024765-807a6a03-8a9d-4705-87da-a67359bd4d8e.png" 
                   alt="NSF I-CORPS" 
                   className="h-8 md:h-10 w-auto" 
                 />
                 <div className="flex flex-col text-[11px] font-bold text-slate-700 leading-tight uppercase tracking-wide text-left group-hover:text-[#005a9c] transition-colors">
                   <span>NSF</span>
                   <span>I-CORPS™</span>
                 </div>
               </a>

               {/* IBM Startup Partner Plus */}
               <a href="https://www.ibm.com/partnerplus" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 transition-transform hover:scale-105 group">
                 <img 
                   src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" 
                   alt="IBM" 
                   className="h-8 md:h-10 w-auto" 
                 />
                 <div className="flex flex-col text-[11px] font-bold text-slate-700 leading-tight uppercase tracking-wide text-left group-hover:text-[#0530ad] transition-colors">
                   <span>Startup</span>
                   <span>Partner Plus</span>
                 </div>
               </a>

               {/* Notion for Startups */}
               <a href="https://www.notion.so/startups" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 transition-transform hover:scale-105 group">
                 <img 
                   src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg" 
                   alt="Notion" 
                   className="h-8 md:h-10 w-auto" 
                 />
                 <div className="flex flex-col text-[11px] font-bold text-slate-700 leading-tight uppercase tracking-wide text-left group-hover:text-black transition-colors">
                   <span>Notion for</span>
                   <span>Startups</span>
                 </div>
               </a>

               {/* Atlassian for Startups */}
               <a href="https://www.atlassian.com/software/startups" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 transition-transform hover:scale-105 group">
                 <img 
                   src="https://image2url.com/r2/default/images/1771031197522-033eedc0-aebc-435a-99f5-cd6e7178e982.png" 
                   alt="Atlassian" 
                   className="h-6 md:h-8 w-auto" 
                 />
                 <div className="flex flex-col text-[11px] font-bold text-slate-700 leading-tight uppercase tracking-wide text-left group-hover:text-[#0052CC] transition-colors">
                   <span>Atlassian for</span>
                   <span>Startups</span>
                 </div>
               </a>

               {/* Apple Small Business Program */}
               <a href="https://developer.apple.com/programs/small-business/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 transition-transform hover:scale-105 group">
                 <img 
                   src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" 
                   alt="Apple" 
                   className="h-7 md:h-8 w-auto" 
                 />
                 <div className="flex flex-col text-[11px] font-bold text-slate-700 leading-tight uppercase tracking-wide text-left group-hover:text-black transition-colors">
                   <span>Small Business</span>
                   <span>Program</span>
                 </div>
               </a>

               {/* UC Launch Accelerator Program */}
               <a href="https://uclaunch.com/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 transition-transform hover:scale-105 group">
                 <img 
                   src="https://image2url.com/r2/default/images/1771797158371-ac1f1e2d-1724-46ed-9eaa-16d5ae93a21d.png" 
                   alt="Berkeley Haas" 
                   className="h-8 md:h-10 w-auto" 
                 />
                 <div className="flex flex-col text-[11px] font-bold text-slate-700 leading-tight uppercase tracking-wide text-left group-hover:text-[#003262] transition-colors">
                   <span>UC Launch</span>
                   <span>Accelerator</span>
                 </div>
               </a>

               {/* Google */}
               <a href="https://cloud.google.com/startup" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 transition-transform hover:scale-105 group">
                 <img 
                   src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                   alt="Google" 
                   className="h-6 md:h-7 w-auto" 
                 />
                 <div className="flex flex-col text-[11px] font-bold text-slate-700 leading-tight uppercase tracking-wide text-left group-hover:text-[#4285F4] transition-colors">
                   <span>Google for</span>
                   <span>Startups Cloud</span>
                 </div>
               </a>

               {/* BBB Badge */}
               <a href="https://www.bbb.org/us/ca/san-diego/profile/computer-software/transnode-ai-1126-1000160321/#sealclick" id="bbblink" className="ruhzbum transition-transform hover:scale-105" target="_blank" rel="nofollow">
                 <img 
                   src="https://seal-central-northern-western-arizona.bbb.org/seals/blue-seal-69-145-bbb-1000160321.png" 
                   style={{ border: 0 }} 
                   alt="Transnode AI BBB Business Review" 
                   className="h-16 md:h-20 w-auto"
                 />
               </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
