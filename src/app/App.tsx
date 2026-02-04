import { Phone, BookOpen, Ear, MessageCircle, FileText, Edit3, BookMarked, Users } from 'lucide-react';
import logo from 'figma:asset/a25940758c323a2cec4ebaa3ba2c802efc64cee8.png';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={logo} alt="Vision College of English" className="h-20 w-20 sm:h-24 sm:w-24" />
              <div>
                <h1 className="font-bold text-xl sm:text-2xl text-blue-900">Vision College of English</h1>
                <p className="text-base text-blue-600">Mawanella</p>
              </div>
            </div>
            <a href="tel:0776062246" className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">077 606 2246</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              <BookOpen className="w-4 h-4" />
              Smart Board & Multimedia Enabled
            </span>
            <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              New Student Enrollment – 2026
            </span>
            <span className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
              Estd. 2002
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Specially Designed English Language Classes
          </h2>
          <p className="text-xl sm:text-2xl text-blue-600 mb-8">
            Learn Smarter with Digital Teaching Tools
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
              Register Now
            </button>
            <a href="tel:0776062246" className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors">
              Call for Inquiries
            </a>
          </div>
          
          <p className="mt-6 text-lg text-blue-800 font-semibold">
            Contact: 077 606 2246
          </p>
        </div>
      </section>

      {/* Course Highlights Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-blue-900 mb-12">
            What We Offer
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Ear className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-blue-900 mb-2">Listening Skills</h4>
              <p className="text-sm text-blue-700">Comprehensive audio training</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-green-900 mb-2">Speaking Skills</h4>
              <p className="text-sm text-green-700">Interactive conversation practice</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-purple-900 mb-2">Reading Skills</h4>
              <p className="text-sm text-purple-700">Comprehension development</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Edit3 className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-orange-900 mb-2">Writing Skills</h4>
              <p className="text-sm text-orange-700">Creative & academic writing</p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookMarked className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-pink-900 mb-2">Grammar & Vocabulary</h4>
              <p className="text-sm text-pink-700">Strong foundation building</p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-indigo-900 mb-2">Individual Attention</h4>
              <p className="text-sm text-indigo-700">Personalized learning support</p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-teal-900 mb-2">Activity-Based Learning</h4>
              <p className="text-sm text-teal-700">Engaging & interactive methods</p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-cyan-900 mb-2">Child-Friendly</h4>
              <p className="text-sm text-cyan-700">Age-appropriate curriculum</p>
            </div>
          </div>
        </div>
      </section>

      {/* Classes by Grade Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Classes by Grade
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Grade 2 */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden border-t-4 border-blue-500 hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
                <h4 className="text-2xl font-bold text-white">Grade 2</h4>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-sm font-semibold text-blue-600 mb-2">CLASS SCHEDULE</p>
                  <p className="text-lg text-gray-800">
                    <span className="font-semibold">Sunday:</span> 11.30 AM – 1.00 PM
                  </p>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold text-blue-600 mb-2">COURSE FOCUS</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Listening</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Speaking</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Reading</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Writing</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold text-blue-600 mb-2">LEARNING STYLE</p>
                  <div className="space-y-1">
                    <p className="text-gray-800">✓ Activity-Based & Child-Friendly</p>
                    <p className="text-gray-800">✓ Individual Attention</p>
                  </div>
                </div>
                
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                  <p className="text-sm font-semibold text-green-700">CLASSES COMMENCE ON</p>
                  <p className="text-lg font-bold text-green-800">04.01.2026</p>
                </div>
              </div>
            </div>

            {/* Grade 3 */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden border-t-4 border-green-500 hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-6">
                <h4 className="text-2xl font-bold text-white">Grade 3</h4>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-sm font-semibold text-green-600 mb-2">CLASS SCHEDULE</p>
                  <p className="text-lg text-gray-800">
                    <span className="font-semibold">Saturday:</span> 9.30 AM – 11.00 AM
                  </p>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold text-green-600 mb-2">COURSE FOCUS</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Listening</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Speaking</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Reading</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Writing</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold text-green-600 mb-2">LEARNING STYLE</p>
                  <div className="space-y-1">
                    <p className="text-gray-800">✓ Activity-Based & Child-Friendly</p>
                    <p className="text-gray-800">✓ Individual Attention</p>
                  </div>
                </div>
                
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                  <p className="text-sm font-semibold text-green-700">CLASSES COMMENCE ON</p>
                  <p className="text-lg font-bold text-green-800">03.01.2026</p>
                </div>
              </div>
            </div>

            {/* Grade 4 */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden border-t-4 border-purple-500 hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6">
                <h4 className="text-2xl font-bold text-white">Grade 4</h4>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-sm font-semibold text-purple-600 mb-2">CLASS SCHEDULE</p>
                  <p className="text-lg text-gray-800">
                    <span className="font-semibold">Saturday:</span> 7.30 AM – 9.00 AM
                  </p>
                  <p className="text-lg text-gray-800">
                    <span className="font-semibold">Sunday:</span> 3.00 PM – 4.30 PM
                  </p>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold text-purple-600 mb-2">COURSE FOCUS</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Listening</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Speaking</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Reading</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Writing</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold text-purple-600 mb-2">LEARNING STYLE</p>
                  <div className="space-y-1">
                    <p className="text-gray-800">✓ Activity-Based & Child-Friendly</p>
                    <p className="text-gray-800">✓ Individual Attention</p>
                  </div>
                </div>
                
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                  <p className="text-sm font-semibold text-green-700">CLASSES COMMENCE ON</p>
                  <p className="text-lg font-bold text-green-800">03.01.2026</p>
                </div>
              </div>
            </div>

            {/* Grade 5 */}
            <div className="p-3 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-[2rem] shadow-xl">
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden border-t-4 border-orange-500 hover:shadow-xl transition-shadow relative animate-pulse-glow">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-400/20 to-yellow-400/20 blur-xl -z-10 animate-pulse"></div>
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 relative">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-2xl font-bold text-white">Grade 5 (Paper Classes)</h4>
                      <p className="text-orange-100 text-sm mt-1">Competitive Examinations</p>
                    </div>
                    <span className="bg-yellow-400 text-orange-900 px-3 py-1 rounded-full text-xs font-bold animate-bounce">SPECIAL</span>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-white to-orange-50">
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-orange-600 mb-2">CLASS SCHEDULE</p>
                    <p className="text-lg text-gray-800">
                      <span className="font-semibold">Monday & Tuesday:</span> 4.30 PM – 6.00 PM
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-orange-600 mb-2">SUBJECTS COVERED</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Listening</span>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Speaking</span>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Reading</span>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Writing</span>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Grammar</span>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Vocabulary</span>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Pupils' Text Book</span>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <p className="text-sm font-semibold text-green-700">CLASSES COMMENCE ON</p>
                    <p className="text-lg font-bold text-green-800">05.01.2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Our Instructor
          </h3>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-xl p-8 md:p-12 border-2 border-blue-200">
            <div className="text-center">
              <div className="bg-blue-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookMarked className="w-12 h-12 text-white" />
              </div>
              
              <p className="text-lg text-blue-600 mb-2 font-medium">Conducted by:</p>
              <h4 className="text-3xl font-bold text-blue-900 mb-4">M.I.A. Shakeel</h4>
              
              <div className="space-y-2 max-w-md mx-auto">
                <div className="bg-white rounded-full px-6 py-3 shadow-sm">
                  <p className="text-blue-800 font-semibold">B.Ed. (English Education)</p>
                </div>
                <div className="bg-white rounded-full px-6 py-3 shadow-sm">
                  <p className="text-blue-800 font-semibold">English Trained</p>
                </div>
                <div className="bg-white rounded-full px-6 py-3 shadow-sm">
                  <p className="text-blue-800 font-semibold">G.C.E. (O/L) Marking Examiner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration & Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            For Registration & Inquiries
          </h3>
          <p className="text-blue-100 mb-8 text-lg">
            Secure your child's spot for 2026 enrollment
          </p>
          
          <div className="bg-white rounded-3xl p-8 mb-6 shadow-2xl">
            <p className="text-gray-600 mb-3 text-lg">Contact Us</p>
            <a href="tel:0776062246" className="text-4xl md:text-5xl font-bold text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center gap-3">
              <Phone className="w-10 h-10" />
              077 606 2246
            </a>
          </div>
          
          <button className="bg-yellow-400 text-blue-900 px-10 py-5 rounded-full text-xl font-bold hover:bg-yellow-300 transition-colors shadow-lg hover:shadow-xl">
            Enroll for 2026
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="Vision College of English" className="h-16 w-16" />
                <div>
                  <h5 className="font-bold text-xl">Vision College of English</h5>
                  <p className="text-blue-300 text-sm">Mawanella</p>
                </div>
              </div>
              <p className="text-blue-200">Established 2002</p>
            </div>
            
            <div>
              <h5 className="font-bold text-lg mb-4">Features</h5>
              <ul className="space-y-2 text-blue-200">
                <li>✓ Smart Board Enabled</li>
                <li>✓ Multimedia Classes</li>
                <li>✓ Individual Attention</li>
                <li>✓ Activity-Based Learning</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold text-lg mb-4">Contact</h5>
              <a href="tel:0776062246" className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-4">
                <Phone className="w-5 h-5" />
                077 606 2246
              </a>
              <p className="text-blue-200 text-sm">
                For registration and inquiries
              </p>
            </div>
          </div>
          
          <div className="border-t border-blue-800 pt-8 text-center text-blue-300">
            <p>&copy; 2026 Vision College of English - Mawanella. All rights reserved.</p>
            <p className="text-sm mt-2">Sincerity, Sanity, Success</p>
          </div>
        </div>
      </footer>
    </div>
  );
}