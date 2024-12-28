export function Manifesto() {
    return (
      <section className="py-10 px-4">
        <div className="lg:max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            {/* Candidate image - left column visible only on desktop/large screens*/}
            <div className="hidden lg:block md:col-span-1">
              <img
                src="/images/poster.jpg"
                alt="Mr. Marcel Eromonsele Imoisili"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
  
            {/* Title and intro - right column */}
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                MANIFESTO FOR A BOLD AND PEOPLE-CENTERED REPRESENTATION
              </h1>
              <h2 className="text-2xl md:text-3xl text-emerald-600 mb-6">
                Edo Central Senatorial District – A New Era of True Leadership
              </h2>

                {/* Image on mobile - visible only on small screens */}
                <div className="lg:hidden mb-8">
                    <img
                    src="/images/poster.jpg"
                    alt="Mr. Marcel Eromonsele Imoisili"
                    className="w-full rounded-lg shadow-lg"
                    />
                </div>
                <div className="md:hidden lg:block">
                    <h3 className="text-2xl font-semibold mb-4">Introduction</h3>
                    <p className="mb-2">
                    With deep humility and unwavering commitment, I, Mr. Marcel Eromonsele Imoisili, present this manifesto for a bold, transformative, and people-oriented representation at the Senate. Edo Central Senatorial District, blessed with resilient, resourceful, and industrious people, deserves a voice that truly represents its aspirations, harnesses its potential, and drives meaningful change.
                    </p>
                    <p>
                    Together, we will redefine true people-centered representation, addressing the unique challenges of our district while unlocking opportunities for our shared prosperity.
                    </p>
                </div>
            </div>
          </div>
  
          {/* Main content - full width */}
          <div className="prose prose-lg max-w-none">
 
            <h3 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h3>
            <p>
              To build a united, secure, and economically vibrant Edo Central Senatorial District through innovation, equity, and purposeful leadership.
            </p>
  
            <h3 className="text-2xl font-semibold mt-8 mb-4">Key Pillars of My Representation</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-emerald-600">1. Security</h4>
                <ul className="list-disc ml-8">
                  <li>Advocate for comprehensive police reforms to restore trust and efficiency.</li>
                  <li>Infuse technology into our security architecture with communication gadgets.</li>
                  <li>Secure funding for patrol vehicles for effective security for all.</li>
                </ul>
              </div>
  
              <div>
                <h4 className="text-xl font-semibold text-emerald-600">2. Agro-Based Industries and Technological Advancement</h4>
                <ul className="list-disc ml-8">
                  <li>Develop agro-based industries to process cassava, palm produce, yams, and other crops abundant in Edo Central.</li>
                  <li>Leverage technology as an enabler to revolutionize farming practices and expand access to global markets.</li>
                  <li>Work to ensure farmers receive subsidized inputs, improved seeds, and support for mechanized farming.</li>
                </ul>
              </div>
  
              <div>
                <h4 className="text-xl font-semibold text-emerald-600">3. Education and Youth Empowerment</h4>
                <ul className="list-disc ml-8">
                  <li>Prioritize federal support for schools, focus on rejigging our curriculum to include computer science from primary education, vocational training centers, and scholarships to ensure quality education for every child.</li>
                  <li>Establish technology hubs and innovation centers to prepare our youth for the future of work.</li>
                  <li>Drive initiatives to create sustainable employment opportunities for graduates and skilled youth.</li>
                </ul>
              </div>
  
              <div>
                <h4 className="text-xl font-semibold text-emerald-600">4. Infrastructure and Industrial Development</h4>
                <ul className="list-disc ml-8">
                  <li>Attract federal projects to Edo Central to build roads, bridges, and modern transportation networks.</li>
                  <li>Partner with the private sector to establish industrial zones, with a focus on agro-processing and technology-driven industries.</li>
                  <li>Advocate for the completion of stalled federal projects in our senatorial district.</li>
                </ul>
              </div>
  
              <div>
                <h4 className="text-xl font-semibold text-emerald-600">5. Unlocking Access to Capital for Economic Growth</h4>
                <ul className="list-disc ml-8">
                  <li>Push for legislation to create equity finance and guaranteed loans at single-digit interest rates to empower small and medium-sized enterprises (SMEs).</li>
                  <li>Establish a Senatorial Entrepreneurship Fund to support businesses and startups in Edo Central.</li>
                  <li>Partner with local financial institutions and international agencies to drive investment in our region.</li>
                </ul>
              </div>
  
              <div>
                <h4 className="text-xl font-semibold text-emerald-600">6. Healthcare for All</h4>
                <ul className="list-disc ml-8">
                  <li>Push for the establishment of federal medical centers in Edo Central, ensuring accessible healthcare for all.</li>
                  <li>Advocate for subsidized healthcare services for women, children, and the elderly.</li>
                  <li>Partner with health-focused NGOs to promote awareness and early detection of diseases.</li>
                </ul>
              </div>
  
              <div>
                <h4 className="text-xl font-semibold text-emerald-600">7. Restoring Unity and Pride in Edo Central's Voice</h4>
                <ul className="list-disc ml-8">
                  <li>Represent Edo Central's interest boldly and unapologetically in all national matters.</li>
                  <li>Ensure equitable distribution of resources and opportunities for our people.</li>
                  <li>Build alliances with other senators to drive national attention to Edo Central's needs.</li>
                </ul>
              </div>
            </div>
  
            <div>
              <h3 className="text-2xl font-semibold mt-8 mb-4">Why This Bold Representation is Critical</h3>
              <p>
                My representation will be guided by integrity, transparency, and accountability, ensuring every decision is made in the best interest of our people.
              </p>
            </div>
  
            <div>
              <h3 className="text-2xl font-semibold mt-8 mb-4">Call to Action</h3>
              <p>
                Fellow citizens of Edo Central, the time has come to stand together and demand the representation we deserve. Let us rise to the occasion and take our rightful place in the Senate with leadership that prioritizes YOU—your dreams, your welfare, and your future.
              </p>
              <p className="font-semibold mt-4">Together, we will:</p>
              <ul className="list-disc ml-8">
                <li>Redefine true people-oriented representation.</li>
                <li>Transform Edo Central into a hub of opportunity and development.</li>
                <li>Build a legacy of bold leadership for generations to come.</li>
              </ul>
            </div>
  
            <div className="mt-12 text-center font-semibold text-emerald-600">
              <p className="text-xl">Mr. Marcel Eromonsele Imoisili</p>
              <p>Your Voice, Your Advocate, Your Senator.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }