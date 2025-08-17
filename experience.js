const experienceData = `Angel One (SDE 2) | Mar 2024 – Present
Plugged in new lenders → Helped integrate multiple lenders into our ecosystem, directly boosting revenue and opening more credit possibilities.
Data privacy, but make it airtight → Implemented encryption and tokenization strategies to align with DPDP, keeping sensitive user info isolated and secure.
Refactoring with purpose → Restructured core flows so onboarding new lenders is smoother and future-ready — now we can support multiple product lines (PL, LAMF, LAS…) with ease.
Services that don't boss around → Designed, implemented, and led a service that stores and returns data in the same format — highly decoupled, caller-agnostic, and flexible.
Workflows that flow → Reimagined user journeys with graph-powered workflows, making the system more declarative, less code-heavy, and far more adaptable.

ZestMoney (SDE 2) | Mar 2022 – Feb 2024
Mandates for all → Built a feature for unique lender mandates per customer, allowing multiple mandates for ultimate flexibility.
Never miss a beat → Created an automatic retry system for loan assignments, prioritizing failed loans to ensure they get a second chance.
No more double takes → Set up a notification system for auto-debit processes, eliminating the risk of double debits.
Testing that settles → Drove test-driven development for the BNPL settlement system, covering both lenders and merchants.
Money that moves smoothly → Designed and built a frictionless internal money movement flow, ironing out existing system kinks.
Archive and accelerate → Implemented archiving that sped up searches, cut storage costs, and boosted database performance.

Affable.ai (Software Developer) | May 2021 – Mar 2022
Taming the bird → Built a Twitter data ingestion pipeline with rate limiting to play by the rules and keep the system stable.
Where creators meet brands → Created a collaboration hub for influencers and brands to connect, negotiate, and manage campaigns.
Leaner code, faster results → Refactored the codebase, slashing database calls by 20% for a snappier experience.

Infosys (System Engineer) | Aug 2019 – May 2021
Docs done right → Built a full-featured document management platform for creating, editing, and sharing.
Groups that get it → Developed a flexible user-group system for seamless access control and sharing.
Data you can count on → Wrote Python scripts to guarantee data consistency and availability, boosting operational efficiency.
`;

// Function to format the experience data into HTML
function formatExperienceData(data) {
  const entries = data.trim().split('\n\n');
  let html = '<div class="_experience_timeline">';
  
  entries.forEach((entry, index) => {
    const lines = entry.trim().split('\n');
    const [title, dates] = lines[0].split(' | ');
    const points = lines.slice(1);
    
    // Determine if this is the current experience
    const isCurrent = index === 0;
    const experienceClass = isCurrent ? 'current_experience' : 'past_experience';
    
    html += `
      <div class="_articleBlurb_1jx5m_19 ${experienceClass}">
        <div>
          <p class="_articleTitle_1jx5m_10">
            <a class="article-link">${title}</a>
          </p>
          <p>${dates}</p>
          <ul>
    `;
    
    points.forEach(point => {
      // Remove the bullet point if it exists
      const cleanPoint = point.replace(/^•\s*/, '');
      html += `<li>${cleanPoint}</li>`;
    });
    
    html += `
          </ul>
        </div>
      </div>
    `;
  });
  
  html += '</div>';
  return html;
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the elements
  const viewAllLink = document.querySelector('a._linkToAll_1jx5m_77');
  const modal = document.getElementById('experience-modal');
  const closeModal = document.getElementById('close-modal');
  const experienceContent = document.getElementById('experience-content');
  
  // Format and insert the experience data
  experienceContent.innerHTML = formatExperienceData(experienceData);
  
  // Add event listener to "View Detail" link
  if (viewAllLink) {
    viewAllLink.addEventListener('click', function(e) {
      e.preventDefault();
      modal.style.display = 'flex';
      // Prevent background scrolling when modal is open
      document.body.style.overflow = 'hidden';
    });
  }
  
  // Add event listener to close button
  if (closeModal) {
    closeModal.addEventListener('click', function(e) {
      e.preventDefault();
      modal.style.display = 'none';
      // Re-enable background scrolling
      document.body.style.overflow = 'auto';
    });
  }
  
  // Close modal when clicking outside of it
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
        // Re-enable background scrolling
        document.body.style.overflow = 'auto';
      }
    });
  }
});