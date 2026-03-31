import { Download, ShieldCheck, Zap, Headset, Smartphone, Trophy, Clock, ChevronRight, Star, MessageCircle, Lock, Award, Shield, CheckCircle2, Play, BarChart2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TrackedLink from "@/components/TrackedLink";

async function getPublicData() {
  try {
    const res = await fetch('https://janta123public.site/api/public_data', { next: { revalidate: 60 } });
    if (!res.ok) return null;
    return res.json();
  } catch (e) {
    return null;
  }
}

export default async function Home() {
  const data = await getPublicData();
  const mainMarkets = data?.main || [];
  const starlineMarkets = data?.starline || [];
  const jackpotMarkets = data?.jackpot || [];
  const rates = data?.rates || {};
  const whatsapp = data?.whatsapp || "9860165567";

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-[#0D1219]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Image
              src="https://www.ratangames.com/logo.png"
              alt="Janta555 Logo"
              width={160}
              height={48}
              className="h-10 sm:h-12 w-auto"
              unoptimized
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-semibold text-[#617A8E]">
            <Link href="#home" className="hover:text-[#1273E6] transition-colors">Home</Link>
            <Link href="#results" className="hover:text-[#1273E6] transition-colors">Live Results</Link>
            <Link href="#rates" className="hover:text-[#1273E6] transition-colors">Game Rates</Link>
            <Link href="#features" className="hover:text-[#1273E6] transition-colors">Features</Link>
          </nav>
          <div className="flex items-center gap-4">
            <TrackedLink
              eventName="Contact"
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center justify-center gap-2 rounded-full border-2 border-[#1273E6] bg-white px-5 py-2.5 text-sm font-bold text-[#1273E6] shadow-[0_2px_8px_rgba(11,99,198,0.1)] hover:bg-blue-50 transition-all active:scale-95"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Support</span>
            </TrackedLink>
            <TrackedLink
              eventName="CompleteRegistration"
              href="/Janta555.apk"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#1273E6] to-[#00A0FF] px-6 py-2.5 text-sm font-bold text-white shadow-[0_4px_14px_rgba(18,115,230,0.35)] hover:opacity-90 transition-all active:scale-95"
            >
              <Download className="h-4 w-4" />
              <span>Download App</span>
            </TrackedLink>
          </div>
        </div>
      </header>

      {/* Marquee */}
      <div className="bg-[#FFC857] text-[#0D1219] py-2.5 font-bold text-sm overflow-hidden whitespace-nowrap shadow-sm border-b border-[#E6A82D]">
        <div className="animate-[shimmer_20s_linear_infinite] inline-block px-4">
          Welcome to Janta555 - India's most trusted online Matka application. Download the app now for fast results and secure gameplay! Play safely with real-time results and instant payouts.
        </div>
      </div>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative overflow-hidden bg-white pt-12 sm:pt-20 lg:pt-28 pb-16">
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/pattern/1920/1080?blur=10')] bg-cover bg-center opacity-5" />
          <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#E8F4FE] px-4 py-1.5 text-sm font-bold text-[#0A52A3] mb-6">
                  <Star className="h-4 w-4 fill-[#0A52A3]" />
                  India&apos;s #1 Trusted Platform
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-[#0D1219] sm:text-[3.5rem] mb-4 leading-[1.1]">
                  India&apos;s Most Trusted
                  <span className="block text-[#FFC857] mt-2">Matka Application</span>
                </h1>
                <p className="text-lg sm:text-xl leading-relaxed text-[#617A8E] mb-8 max-w-lg">
                  Play Matka safely with real-time updates and instant payouts. Best Market Rates Guaranteed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <TrackedLink
                    eventName="CompleteRegistration"
                    href="/Janta555.apk"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#1273E6] to-[#00A0FF] px-8 py-4 text-lg font-bold text-white shadow-[0_4px_14px_rgba(18,115,230,0.35)] hover:opacity-90 transition-all active:scale-95"
                  >
                    <Download className="h-6 w-6" />
                    Download APK Now
                  </TrackedLink>
                  <TrackedLink
                    eventName="Contact"
                    href={`https://wa.me/${whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white border-2 border-[#1273E6] px-8 py-4 text-lg font-bold text-[#1273E6] shadow-[0_2px_8px_rgba(11,99,198,0.1)] hover:bg-blue-50 transition-all active:scale-95"
                  >
                    <MessageCircle className="h-6 w-6" />
                    WhatsApp Support
                  </TrackedLink>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: Shield, label: "100% Secure", sub: "Safe Payments" },
                    { icon: Zap, label: "Instant Payouts", sub: "Within Minutes" },
                    { icon: Award, label: "Best Rates", sub: "Guaranteed" }
                  ].map((f, i) => (
                    <div key={i} className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-[#0D1219] font-bold text-sm sm:text-base">
                        <f.icon className="h-5 w-5 text-[#1273E6]" />
                        {f.label}
                      </div>
                      <div className="text-xs sm:text-sm text-[#617A8E] pl-7">{f.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative mx-auto w-full max-w-lg lg:max-w-none flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md aspect-square">
                  <Image
                    src="https://www.ratangames.com/model.png"
                    alt="Win big with Janta555"
                    fill
                    className="object-contain relative z-10"
                    unoptimized
                    referrerPolicy="no-referrer"
                    priority
                  />
                  <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[70%] h-[30%] bg-[radial-gradient(circle,rgba(8,52,110,0.65)_0%,rgba(8,52,110,0)_65%)] blur-[28px] z-[5]" />
                  
                  {/* Floating elements */}
                  <div className="absolute top-10 -left-4 sm:-left-12 rounded-2xl bg-white/10 backdrop-blur-md p-4 shadow-xl border border-white/20 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
                    <span className="text-white/80 text-xs block mb-1">Wallet Balance</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-white font-bold text-xl">₹12,450</span>
                      <span className="text-[#4ade80] text-xs">+₹2,500</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-20 -right-4 sm:-right-8 rounded-2xl bg-white/10 backdrop-blur-md p-4 shadow-xl border border-white/20 z-20 animate-bounce" style={{ animationDuration: '4s' }}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-semibold text-sm">Live Results</span>
                      <span className="w-2 h-2 bg-[#4ade80] rounded-full" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-white/80 text-xs">KALYAN</span>
                      <span className="text-white/80 text-xs">MAIN BAZAR</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Results Section */}
        <section id="results" className="bg-[#F8FAFC] py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-[#C7E4FD] text-[#0A52A3] rounded-full text-sm font-bold mb-4">
                Live Markets
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D1219] mb-4">
                Today&apos;s <span className="text-[#1273E6]">Market Results</span>
              </h2>
              <p className="text-[#617A8E] text-lg max-w-2xl mx-auto">
                Get the fastest and most accurate results updated in real-time.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {mainMarkets.map((game: any, i: number) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md hover:border-[#1273E6] transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-[#0D1219]">{game.market}</h3>
                    {game.is_open === "1" ? (
                      <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                        Live
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full bg-rose-50 px-2.5 py-1 text-xs font-bold text-rose-700 ring-1 ring-inset ring-rose-600/20">
                        Closed
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-sm text-[#617A8E] mb-6">
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      <span>{game.open_time}</span>
                    </div>
                    <span>-</span>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      <span>{game.close_time}</span>
                    </div>
                  </div>
                  <div className="rounded-xl bg-[#F8FAFC] border border-slate-100 py-4 text-center">
                    <span className="text-3xl font-black tracking-[0.2em] text-[#1273E6]">{game.result}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Starline & Jackpot Results Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Starline */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1273E6] to-[#00A0FF] flex items-center justify-center shadow-lg">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#0D1219]">Starline Results</h2>
                    <p className="text-[#617A8E] text-sm">Updated every hour</p>
                  </div>
                </div>
                <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200 overflow-hidden">
                  {starlineMarkets.length > 0 ? (
                    <div className="divide-y divide-slate-200 max-h-[400px] overflow-y-auto">
                      {starlineMarkets.map((game: any, i: number) => (
                        <div key={i} className="flex items-center justify-between p-4 hover:bg-white transition-colors">
                          <div className="font-bold text-[#0D1219]">{game.market}</div>
                          <div className="text-xl font-black text-[#1273E6]">{game.result}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-8 text-center text-[#617A8E]">Loading starline results...</div>
                  )}
                </div>
              </div>

              {/* Jackpot */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFC857] to-[#FFD97A] flex items-center justify-center shadow-lg">
                    <Trophy className="w-6 h-6 text-[#0D1219]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#0D1219]">Jackpot Results</h2>
                    <p className="text-[#617A8E] text-sm">High reward games</p>
                  </div>
                </div>
                <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200 overflow-hidden">
                  {jackpotMarkets.length > 0 ? (
                    <div className="divide-y divide-slate-200 max-h-[400px] overflow-y-auto">
                      {jackpotMarkets.map((game: any, i: number) => (
                        <div key={i} className="flex items-center justify-between p-4 hover:bg-white transition-colors">
                          <div className="font-bold text-[#0D1219]">{game.market}</div>
                          <div className="text-xl font-black text-[#1273E6]">{game.result}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-8 text-center text-[#617A8E]">Loading jackpot results...</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rates Section */}
        <section id="rates" className="bg-[#F8FAFC] py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-[#C7E4FD] text-[#0A52A3] rounded-full text-sm font-bold mb-4">
                Transparent Rates
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D1219] mb-4">
                Best <span className="text-[#1273E6]">Market Rates</span>
              </h2>
              <p className="text-[#617A8E] text-lg max-w-2xl mx-auto">
                We offer the most competitive and transparent betting rates in the market.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Matka Rates */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-[#0D1219] mb-2">Matka Rates</h3>
                <p className="text-[#617A8E] text-sm mb-6">Standard market betting rates</p>
                <div className="space-y-3">
                  {[
                    { type: "Single", rate: rates.single },
                    { type: "Jodi", rate: rates.jodi },
                    { type: "Single Patti", rate: rates.singlepatti },
                    { type: "Double Patti", rate: rates.doublepatti },
                    { type: "Triple Patti", rate: rates.triplepatti },
                    { type: "Half Sangam", rate: rates.halfsangam },
                    { type: "Full Sangam", rate: rates.fullsangam },
                  ].filter(r => r.rate).map((r, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAFC]">
                      <span className="font-semibold text-[#0D1219]">{r.type}</span>
                      <span className="font-bold text-[#1273E6]">{r.rate}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Starline Rates */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-[#0D1219] mb-2">Starline Rates</h3>
                <p className="text-[#617A8E] text-sm mb-6">Premium starline market rates</p>
                <div className="space-y-3">
                  {[
                    { type: "Single", rate: rates.starline?.single },
                    { type: "Single Patti", rate: rates.starline?.singlepatti },
                    { type: "Double Patti", rate: rates.starline?.doublepatti },
                    { type: "Triple Patti", rate: rates.starline?.triplepatti },
                  ].filter(r => r.rate).map((r, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAFC]">
                      <span className="font-semibold text-[#0D1219]">{r.type}</span>
                      <span className="font-bold text-[#1273E6]">{r.rate}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Jackpot Rates */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-[#0D1219] mb-2">Jackpot Rates</h3>
                <p className="text-[#617A8E] text-sm mb-6">High-reward jackpot rates</p>
                <div className="space-y-3">
                  {[
                    { type: "Jodi", rate: rates.jackpot?.jodi },
                  ].filter(r => r.rate).map((r, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAFC]">
                      <span className="font-semibold text-[#0D1219]">{r.type}</span>
                      <span className="font-bold text-[#1273E6]">{r.rate}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="features" className="bg-white py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-[#C7E4FD] text-[#0A52A3] rounded-full text-sm font-bold mb-4">
                  About Us
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D1219] mb-6">
                  India&apos;s Most <span className="text-[#1273E6]">Trusted</span> Matka Platform
                </h2>
                <p className="text-[#455564] text-lg mb-6 leading-relaxed">
                  Janta555 has been serving players across India since 2020, providing a secure, fair, and transparent platform for Satta Matka enthusiasts. Our commitment to responsible gaming and customer satisfaction has made us the preferred choice for thousands of players.
                </p>
                <p className="text-[#455564] text-lg mb-10 leading-relaxed">
                  We pride ourselves on offering the best rates, fastest payouts, and a seamless user experience. Our platform is built with state-of-the-art security to ensure your data and transactions are always safe.
                </p>
                
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-black text-[#1273E6] mb-1">50K+</div>
                    <div className="text-[#617A8E] text-sm font-medium">Active Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-black text-[#FFC857] mb-1">₹5Cr+</div>
                    <div className="text-[#617A8E] text-sm font-medium">Paid Out</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-black text-[#1273E6] mb-1">4.9/5</div>
                    <div className="text-[#617A8E] text-sm font-medium">User Rating</div>
                  </div>
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: ShieldCheck, title: "Secure Platform", desc: "Bank-level encryption for all your transactions and personal data." },
                  { icon: Zap, title: "Instant Withdrawal", desc: "Get your winnings transferred to your bank account within minutes." },
                  { icon: Award, title: "Best Rates", desc: "We offer the most competitive rates in the market, guaranteed." },
                  { icon: Headset, title: "24/7 Support", desc: "Our dedicated team is always available to help you with any queries." }
                ].map((f, i) => (
                  <div key={i} className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-100">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 text-[#1273E6]">
                      <f.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0D1219] mb-2">{f.title}</h3>
                    <p className="text-[#617A8E] text-sm leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="bg-gradient-to-br from-[#1273E6] to-[#00A0FF] py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/pattern2/1920/1080?blur=10')] bg-cover bg-center opacity-10" />
          <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6">
              Ready to Start Winning?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/90 mb-10">
              Download the Janta555 app now and get access to live results, secure betting, and instant withdrawals right from your smartphone.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <TrackedLink eventName="CompleteRegistration" href="/Janta555.apk" className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#1273E6] shadow-xl hover:bg-blue-50 transition-all active:scale-95">
                <Smartphone className="h-6 w-6" />
                Download for Android
              </TrackedLink>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                <span>Safe & Secure Download</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Malware Free</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>Verified Publisher</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0D1219] pt-16 pb-8 text-[#617A8E]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-4 mb-12 border-b border-[#1A2330] pb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Image
                  src="https://www.ratangames.com/logo.png"
                  alt="Janta555 Logo"
                  width={160}
                  height={48}
                  className="h-10 w-auto brightness-0 invert"
                  unoptimized
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-sm leading-relaxed max-w-md mb-6">
                India&apos;s most trusted platform for live results and secure gaming. Experience the thrill of winning with instant payouts and the best market rates.
              </p>
              <div className="flex items-center gap-4 text-sm font-medium">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <Lock className="w-4 h-4" />
                  <span>SSL Secured</span>
                </div>
                <span>|</span>
                <span>Registered under Public Gambling Act</span>
                <span>|</span>
                <span>License No: GL/2024/XXXXX</span>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="#home" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="#results" className="hover:text-white transition-colors">Live Results</Link></li>
                <li><Link href="#rates" className="hover:text-white transition-colors">Game Rates</Link></li>
                <li><TrackedLink eventName="CompleteRegistration" href="/Janta555.apk" className="hover:text-white transition-colors">Download App</TrackedLink></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Need Help?</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <TrackedLink eventName="Contact" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Support
                  </TrackedLink>
                </li>
                <li><Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Responsible Gaming</Link></li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm mb-4">
              &copy; {new Date().getFullYear()} Janta555. All rights reserved.
            </p>
            <p className="text-xs text-[#455564] max-w-4xl mx-auto leading-relaxed">
              <strong>Disclaimer:</strong> This website is for informational purposes only. We do not promote or encourage any illegal activities. Please check your local laws before participating. Matka involves financial risk and may be addictive. Play responsibly.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <TrackedLink
        eventName="Contact"
        href={`https://wa.me/${whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:-translate-y-1 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </TrackedLink>
    </div>
  );
}

