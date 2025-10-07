import { Award, TrendingUp, Zap } from 'lucide-react';
import { useState } from 'react';

const AcceleratedContentPlan = () => {
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null);
  const [showImplementation, setShowImplementation] = useState(false);

  const weeks = [
    {
      week: 1,
      priority: "URGENT",
      theme: "Low-Hanging Fruit (Quick Rankings)",
      posts: [
        {
          title: "Nepal Trekking for Complete Beginners: Everything You Need to Know (2025)",
          traffic: "High Potential",
          competition: "Low",
          searchVolume: "1,100/mo",
          timeToRank: "2-4 weeks",
          format: "Ultimate Guide (2,500 words)",
          keywords: ["Nepal trekking for beginners", "first time trek Nepal", "beginner treks Nepal"],
          internalLinks: ["Link to Poon Hill, Langtang Valley, Mardi Himal packages"],
          cta: "Download Free: First-Timer's Trek Checklist",
          outline: [
            "What to expect on your first Nepal trek",
            "5 easiest treks for absolute beginners (with difficulty ratings)",
            "How fit do you need to be? (honest answer)",
            "Cost breakdown: What will you actually spend?",
            "Training timeline: 8 weeks to trek-ready",
            "Common fears answered (altitude, safety, bathrooms)",
            "Packing list for first-timers",
            "Choosing between guided vs independent (2025 rules)",
            "Real first-timer stories and testimonials"
          ],
          whyItWorks: "Huge search volume, most competitors write generic content. You can dominate with specific, reassuring advice for nervous first-timers."
        },
        {
          title: "Low Altitude Treks in Nepal: 8 Stunning Routes Under 3,500m",
          traffic: "Medium-High",
          competition: "Very Low",
          searchVolume: "420/mo",
          timeToRank: "3-5 weeks",
          format: "Curated List (2,000 words)",
          keywords: ["low altitude trek Nepal", "treks without altitude sickness", "easy Nepal treks"],
          internalLinks: ["Royal Trek, Chisapani-Nagarkot, Ghorepani packages"],
          cta: "View Our Low-Altitude Trek Packages",
          outline: [
            "Why choose low altitude? (health, comfort, families)",
            "8 beautiful treks that stay below danger zone",
            "Comparison table: altitude, duration, difficulty",
            "Who these are perfect for (seniors, kids, first-timers)",
            "Cultural experiences at lower elevations",
            "Best seasons for low-altitude trekking",
            "Cost comparison vs high-altitude treks"
          ],
          whyItWorks: "Underserved niche. Many trekkers want Nepal without altitude risk - families, older travelers, those with health concerns."
        }
      ]
    },
    {
      week: 2,
      priority: "HIGH",
      theme: "Comparison Keywords (High Intent)",
      posts: [
        {
          title: "Mardi Himal vs Poon Hill: Which Trek Should You Choose?",
          traffic: "High Potential",
          competition: "Low-Medium",
          searchVolume: "680/mo",
          timeToRank: "4-6 weeks",
          format: "Side-by-Side Comparison (2,300 words)",
          keywords: ["Mardi Himal vs Poon Hill", "which trek better Annapurna", "short trek comparison"],
          internalLinks: ["Both trek package pages, Annapurna region overview"],
          cta: "Can't Decide? Take Our Trek Finder Quiz",
          outline: [
            "Quick overview of both treks",
            "Visual comparison chart (save to Pinterest)",
            "Scenery & views: What you'll actually see",
            "Difficulty comparison (day by day)",
            "Crowd levels and season considerations",
            "Cost breakdown for each",
            "Which is better for: Couples / Families / Solo / Photographers",
            "Can you do both? (combo itinerary)",
            "Final verdict: Choose based on your priorities"
          ],
          whyItWorks: "People comparing = ready to book. Comparison keywords convert 3x better than general terms."
        }
      ]
    },
    {
      week: 3,
      priority: "HIGH",
      theme: "Seasonal Opportunity (October Traffic)",
      posts: [
        {
          title: "Trekking Nepal in November 2025: Weather, Crowds & Best Routes",
          traffic: "Seasonal Spike",
          competition: "Low",
          searchVolume: "890/mo (Oct-Nov spike)",
          timeToRank: "2-3 weeks",
          format: "Seasonal Guide (2,100 words)",
          keywords: ["Nepal trekking November", "November trek weather", "best treks November"],
          internalLinks: ["All major trek packages, weather guide"],
          cta: "See November Availability & Special Rates",
          outline: [
            "Why November is peak season (and is it overrated?)",
            "Actual weather data: temperature, rain, snow",
            "Crowd levels: Which treks are packed vs peaceful",
            "Top 5 treks for November (with reasons)",
            "What to pack for November conditions",
            "Cost considerations (peak pricing)",
            "Booking timeline: How far in advance?",
            "November festivals you might experience"
          ],
          whyItWorks: "Seasonal content = immediate traffic. People planning Nov trips RIGHT NOW. Update monthly for year-round traffic."
        },
        {
          title: "Less Crowded Treks in Nepal: Hidden Gems Away from the Crowds",
          traffic: "High Potential",
          competition: "Medium",
          searchVolume: "540/mo",
          timeToRank: "5-7 weeks",
          format: "Alternative Guide (2,400 words)",
          keywords: ["less crowded treks Nepal", "off beaten path Nepal", "quiet treks Nepal"],
          internalLinks: ["Manaslu, Nar Phu, Tsum Valley, Makalu packages"],
          cta: "Explore Our Off-the-Beaten-Path Collection",
          outline: [
            "Why seek quieter trails?",
            "8 spectacular less-crowded treks",
            "Comparison with popular treks (crowds, permits)",
            "Nar Phu Valley deep dive",
            "Manaslu Circuit analysis",
            "Tsum Valley hidden gem",
            "Permit requirements for restricted areas",
            "Best time to avoid crowds even on popular routes"
          ],
          whyItWorks: "Growing trend post-COVID. Travelers actively seeking alternatives to EBC/ABC crowds."
        }
      ]
    },
    {
      week: 4,
      priority: "MEDIUM-HIGH",
      theme: "Practical Planning Content",
      posts: [
        {
          title: "Nepal Trekking Costs 2025: Complete Budget Breakdown (Budget to Luxury)",
          traffic: "Very High Potential",
          competition: "Medium",
          searchVolume: "1,600/mo",
          timeToRank: "6-8 weeks",
          format: "Financial Guide (2,600 words)",
          keywords: ["Nepal trekking cost", "how much trek Nepal", "Nepal budget guide"],
          internalLinks: ["All package pages, gear rental info"],
          cta: "Get Your Free Custom Trek Quote",
          outline: [
            "Real cost breakdown: permits, guides, accommodation, food",
            "Budget trekking: $30-50/day breakdown",
            "Mid-range comfort: $80-120/day details",
            "Luxury lodges: $200+/day experience",
            "Hidden costs people forget (tips, snacks, charging)",
            "How to save money without sacrificing safety",
            "What's included in organized treks vs independent",
            "Sample 10-day budgets for 3 trek types",
            "Money-saving hacks from local operators"
          ],
          whyItWorks: "Cost is the #1 planning concern. This attracts researchers who later become bookers. Evergreen content with year-round traffic."
        }
      ]
    },
    {
      week: 5,
      priority: "MEDIUM-HIGH",
      theme: "Women & Solo Travelers",
      posts: [
        {
          title: "Solo Female Trekking in Nepal 2025: Complete Safety & Planning Guide",
          traffic: "High Potential",
          competition: "Medium",
          searchVolume: "920/mo",
          timeToRank: "5-7 weeks",
          format: "Safety + Inspiration (2,500 words)",
          keywords: ["solo female Nepal", "women trekking Nepal safe", "Nepal solo travel women"],
          internalLinks: ["Women-only groups, recommended treks, guide services"],
          cta: "Join Our Next Women-Only Group Trek",
          outline: [
            "Is Nepal safe for solo women? (honest, nuanced answer)",
            "2025 guide rule: How it actually helps solo women",
            "Cultural dos and don'ts for women",
            "Best treks for solo female travelers",
            "How to choose a trustworthy guide/company",
            "What to wear (practical + respectful)",
            "Bathroom situations (real talk)",
            "Women-only group trek benefits",
            "Solo female traveler testimonials",
            "Emergency contacts and resources"
          ],
          whyItWorks: "Women plan more thoroughly and book earlier. They also share content more, increasing organic reach."
        },
        {
          title: "Can You Trek Nepal Without a Guide? New 2025 Rules Explained",
          traffic: "Medium",
          competition: "Low",
          searchVolume: "380/mo (growing)",
          format: "Regulation Guide (1,800 words)",
          keywords: ["Nepal guide requirement", "solo trekking Nepal 2025", "Nepal guide rule"],
          internalLinks: ["Guide services, group joining options"],
          cta: "Find a Licensed Guide for Your Trek",
          outline: [
            "What the 2025 regulation actually says",
            "Which treks require guides (all of them)",
            "Cost implications: Is it really more expensive?",
            "Benefits you didn't consider",
            "How to book affordable guide services",
            "Group joining options (cost-sharing)",
            "Porter-guide combinations",
            "What to look for in a good guide",
            "Penalties for non-compliance"
          ],
          whyItWorks: "Recent regulation = high search interest. Many outdated articles need updating. Your current take wins."
        }
      ]
    },
    {
      week: 6,
      priority: "MEDIUM",
      theme: "Specific Demographics",
      posts: [
        {
          title: "Family Trekking in Nepal: Best Routes for Kids & Parents (Ages 8-16)",
          traffic: "Medium Potential",
          competition: "Low",
          searchVolume: "380/mo",
          timeToRank: "4-6 weeks",
          format: "Family Guide (2,200 words)",
          keywords: ["Nepal trek with kids", "family trekking Nepal", "child friendly Nepal"],
          internalLinks: ["Family packages, short treks, cultural tours"],
          cta: "Request Family-Friendly Custom Itinerary",
          outline: [
            "Is trekking with kids in Nepal realistic? (yes, with planning)",
            "Age-appropriate trek recommendations",
            "Altitude considerations for children",
            "How to keep kids motivated on trail",
            "Family-friendly lodges and amenities",
            "Educational aspects (teaching moments)",
            "Sample 7-day family itinerary",
            "What to pack for kids",
            "Real family trek stories with photos"
          ],
          whyItWorks: "Underserved market. Families spend more and book longer in advance."
        }
      ]
    },
    {
      week: 7,
      priority: "MEDIUM",
      theme: "Experience Enhancement",
      posts: [
        {
          title: "Teahouse vs Camping Treks in Nepal: Which Experience is Right for You?",
          traffic: "Medium Potential",
          competition: "Low",
          searchVolume: "290/mo",
          timeToRank: "4-5 weeks",
          format: "Comparison Guide (2,000 words)",
          keywords: ["teahouse trekking Nepal", "camping trek Nepal", "Nepal accommodation trekking"],
          internalLinks: ["Various trek packages showing both options"],
          cta: "Compare Our Teahouse & Camping Options",
          outline: [
            "What is teahouse trekking?",
            "What is camping trekking?",
            "Comfort comparison (honest pros/cons)",
            "Cost differences explained",
            "Which treks offer both options?",
            "Environmental considerations",
            "Social experience: Meeting other trekkers",
            "Best choice for: Solo/Couples/Groups/Families",
            "Hybrid options available"
          ],
          whyItWorks: "Decision-stage content. People asking this are ready to book, just need final details."
        },
        {
          title: "What to Eat on Nepal Treks: Complete Food Guide (Teahouse Menu + Tips)",
          traffic: "Medium Potential",
          competition: "Very Low",
          searchVolume: "320/mo",
          timeToRank: "3-4 weeks",
          format: "Practical Guide (1,900 words)",
          keywords: ["Nepal trek food", "teahouse menu", "what to eat trekking Nepal"],
          internalLinks: ["Trek packages, preparation guides"],
          cta: "Download Nepali Food Phrase Guide PDF",
          outline: [
            "Typical teahouse menu items explained",
            "Dal Bhat deep dive (why it's perfect fuel)",
            "Vegetarian and vegan options",
            "Food safety and hygiene tips",
            "What to avoid at high altitude",
            "Snacks to bring from Kathmandu",
            "Drinking water and purification",
            "Food costs on the trail",
            "Special dietary requirements",
            "Cultural etiquette around meals"
          ],
          whyItWorks: "Practical concern everyone has. Easy to rank due to low competition. Great for social media (food photos)."
        }
      ]
    },
    {
      week: 8,
      priority: "MEDIUM",
      theme: "Regional Deep-Dives",
      posts: [
        {
          title: "Langtang Valley Trek Complete Guide 2025: Everything You Need to Know",
          traffic: "High Potential",
          competition: "Medium-High",
          searchVolume: "1,400/mo",
          timeToRank: "6-10 weeks",
          format: "Definitive Guide (3,000 words)",
          keywords: ["Langtang Valley trek", "Langtang trek guide", "Langtang trekking"],
          internalLinks: ["Langtang packages, related Helambu/Gosaikunda treks"],
          cta: "Book Langtang Valley Trek - 2025 Dates",
          outline: [
            "Why Langtang is underrated (compared to Everest/Annapurna)",
            "Complete day-by-day itinerary (7-10 days)",
            "Difficulty and altitude profile",
            "Best time to trek Langtang",
            "Permits and costs breakdown",
            "Accommodation options along the route",
            "Side trips and extensions (Gosaikunda, Helambu)",
            "2015 earthquake recovery (positive story)",
            "Cultural insights: Tamang heritage",
            "Detailed packing list",
            "Photo gallery and video embeds"
          ],
          whyItWorks: "Pillar content for a major trek. Will rank for dozens of long-tail keywords. Drives direct bookings."
        }
      ]
    }
  ];

  const quickStats = {
    totalPosts: 13,
    avgTimeToRank: "4-6 weeks",
    targetTraffic: "15-25K/mo by Month 4",
    conversionRate: "2.5-4%"
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 pt-64">
      <div className="max-w-[1320px] mx-auto">
        
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-2xl p-8 mb-8 text-white">
          <div className="flex items-center gap-3 mb-3">
            <Zap className="w-10 h-10" />
            <h1 className="text-5xl font-bold">
              ACCELERATED 8-Week Content Strategy
            </h1>
          </div>
          <p className="text-3xl text-blue-100 mb-6">
            From 200 to 3,000+ monthly visitors (realistic 12-week projection)
          </p>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <div className="text-4xl font-bold">{quickStats.totalPosts}</div>
              <div className="text-3xl text-blue-100">Strategic Posts</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <div className="text-4xl font-bold">{quickStats.avgTimeToRank}</div>
              <div className="text-3xl text-blue-100">Avg Time to Rank</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <div className="text-4xl font-bold">{quickStats.targetTraffic}</div>
              <div className="text-3xl text-blue-100">Traffic Goal (Mo 4)</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <div className="text-4xl font-bold">{quickStats.conversionRate}</div>
              <div className="text-3xl text-blue-100">Lead Conversion</div>
            </div>
          </div>
        </div>

        {/* Strategy Note */}
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-3">
            <Award className="w-6 h-6 text-amber-600 mt-1" />
            <div>
              <h3 className="font-bold text-amber-900 mb-2 text-3xl">Why This Plan Works for YOU</h3>
              <p className="text-amber-800 text-3xl mb-2">
                You already have 200 visitors = Google trusts your domain. This plan leverages your existing authority 
                with <strong>low-competition, high-intent keywords</strong> that competitors ignore.
              </p>
              <p className="text-amber-800 text-3xl">
                Focus: Quick wins (Weeks 1-2) then Traffic builders (Weeks 3-5) then Authority content (Weeks 6-8)
              </p>
            </div>
          </div>
        </div>

        {/* Weekly Content */}
        <div className="space-y-4">
          {weeks.map((week) => (
            <div 
              key={week.week}
              className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-100 hover:border-blue-300 transition-all"
            >
              {/* Week Header */}
              <div 
                className={`p-6 cursor-pointer ${
                  week.priority === 'URGENT' ? 'bg-gradient-to-r from-red-500 to-red-600' :
                  week.priority === 'HIGH' ? 'bg-gradient-to-r from-orange-500 to-orange-600' :
                  'bg-gradient-to-r from-blue-500 to-blue-600'
                } text-white`}
                onClick={() => setSelectedWeek(selectedWeek === week.week ? null : week.week)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-bold">
                        {week.priority}
                      </span>
                      <h2 className="text-3xl font-bold">Week {week.week}</h2>
                    </div>
                    <p className="text-3xl opacity-90">{week.theme}</p>
                    <p className="text-3xl opacity-75 mt-2">
                      {week.posts.length} post{week.posts.length > 1 ? 's' : ''} - Click to {selectedWeek === week.week ? 'collapse' : 'see details'}
                    </p>
                  </div>
                  <div className="text-5xl font-light">
                    {selectedWeek === week.week ? '−' : '+'}
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {selectedWeek === week.week && (
                <div className="p-6 space-y-6 bg-gray-50">
                  {week.posts.map((post, idx) => (
                    <div 
                      key={idx}
                      className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm"
                    >
                      {/* Post Title */}
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {post.title}
                      </h3>

                      {/* Metrics Row */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                        <div className="bg-green-50 rounded-lg p-3 text-center">
                          <div className="text-sm text-green-600 mb-1">Search Volume</div>
                          <div className="font-bold text-green-700">{post.searchVolume}</div>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-3 text-center">
                          <div className="text-sm text-blue-600 mb-1">Competition</div>
                          <div className="font-bold text-blue-700">{post.competition}</div>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-3 text-center">
                          <div className="text-sm text-purple-600 mb-1">Time to Rank</div>
                          <div className="font-bold text-purple-700">{post.timeToRank}</div>
                        </div>
                        <div className="bg-orange-50 rounded-lg p-3 text-center">
                          <div className="text-sm text-orange-600 mb-1">Traffic</div>
                          <div className="font-bold text-orange-700">{post.traffic}</div>
                        </div>
                      </div>

                      {/* Why It Works */}
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                        <div className="font-semibold text-blue-900 text-3xl mb-1">
                          Why This Works:
                        </div>
                        <p className="text-blue-800 text-3xl">{post.whyItWorks}</p>
                      </div>

                      {/* Details Grid */}
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Left Column */}
                        <div className="space-y-3">
                          <div>
                            <div className="text-3xl font-semibold text-gray-700 mb-2">
                              Target Keywords:
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {post.keywords.map((kw, i) => (
                                <span 
                                  key={i}
                                  className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-sm"
                                >
                                  {kw}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <div className="text-3xl font-semibold text-gray-700 mb-1">
                              Format:
                            </div>
                            <p className="text-3xl text-gray-600">{post.format}</p>
                          </div>

                          <div>
                            <div className="text-3xl font-semibold text-gray-700 mb-1">
                              Internal Links:
                            </div>
                            <p className="text-3xl text-gray-600">{post.internalLinks}</p>
                          </div>

                          <div>
                            <div className="text-3xl font-semibold text-gray-700 mb-1">
                              CTA:
                            </div>
                            <p className="text-3xl font-medium text-blue-600">{post.cta}</p>
                          </div>
                        </div>

                        {/* Right Column - Outline */}
                        <div>
                          <div className="text-3xl font-semibold text-gray-700 mb-2">
                            Content Outline:
                          </div>
                          <ul className="space-y-1">
                            {post.outline.map((item, i) => (
                              <li 
                                key={i}
                                className="text-3xl text-gray-600 flex items-start gap-2"
                              >
                                <span className="text-blue-500 font-bold mt-0.5">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Implementation Roadmap */}
<div className="bg-gradient-to-r from-green-50 via-white to-green-100 rounded-2xl shadow-2xl p-8 mt-12">
  <div className="flex items-center gap-4 mb-6">
    <TrendingUp className="w-12 h-12 text-green-600" />
    <h2 className="text-5xl font-bold text-green-800">
      Implementation Roadmap
    </h2>
  </div>

  <p className="text-3xl text-green-900 mb-8">
    Here’s a week-by-week plan to execute your content strategy efficiently and maximize growth.
  </p>

  <div className="space-y-6">
    {weeks.map((week) => (
      <div key={week.week} className="bg-white rounded-xl p-6 shadow-md border-2 border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-4xl font-bold text-gray-900">
            Week {week.week}: {week.theme}
          </h3>
          <span 
            className={`px-3 py-1 rounded-full text-white text-3xl font-semibold ${
              week.priority === "URGENT"
                ? "bg-red-500"
                : week.priority === "HIGH"
                ? "bg-orange-500"
                : "bg-blue-500"
            }`}
          >
            {week.priority}
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Tasks */}
          <div>
            <h4 className="text-3xl font-semibold text-gray-700 mb-3">Key Tasks:</h4>
            <ul className="list-disc list-inside space-y-2 text-3xl text-gray-600">
              {week.posts.map((post, idx) => (
                <li key={idx}>
                  Create & optimize: <strong>{post.title}</strong>
                </li>
              ))}
            </ul>
          </div>

          {/* Notes & Metrics */}
          <div>
            <h4 className="text-3xl font-semibold text-gray-700 mb-3">Notes & Metrics:</h4>
            <ul className="space-y-2 text-3xl text-gray-600">
              <li>Focus on <strong>keywords</strong> with low competition first</li>
              <li>Use internal links to connect similar posts</li>
              <li>Track search rankings weekly</li>
              <li>Monitor organic traffic & adjust posting frequency</li>
              <li>Ensure CTAs are visible on all posts</li>
            </ul>
          </div>
        </div>

        {/* Optional CTA */}
        <div className="mt-6 text-center">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-3xl font-semibold shadow-lg transition-all">
            Mark Week {week.week} Complete
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
    </div>
  );
};

export default AcceleratedContentPlan;
