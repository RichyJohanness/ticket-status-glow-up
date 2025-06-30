
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Ticket, 
  Users, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  MessageSquare,
  Star,
  Shield,
  Zap,
  HeadphonesIcon,
  ArrowRight,
  HelpCircle,
  FileText,
  Settings,
  Mail,
  Search,
  Bell,
  ChevronLeft,
  ChevronRight,
  ArrowDown
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';

const Dashboard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerSlides = [
    {
      title: "Layanan Support 24/7",
      description: "Tim ahli kami siap membantu menyelesaikan masalah teknis Anda kapan saja",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=4076&q=80",
      action: "Hubungi Sekarang"
    },
    {
      title: "Respon Cepat & Akurat",
      description: "Rata-rata waktu respon kurang dari 2 jam untuk semua jenis pertanyaan",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=3882&q=80",
      action: "Buat Tiket"
    },
    {
      title: "Solusi Terpercaya",
      description: "Tingkat kepuasan pelanggan 98% dengan teknologi terdepan",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=5530&q=80",
      action: "Pelajari Lebih"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const faqData = [
    {
      question: "Bagaimana cara membuat tiket support?",
      answer: "Anda dapat membuat tiket support dengan mengklik tombol 'Buat Tiket' di navigasi atas, kemudian isi formulir dengan detail masalah atau permintaan Anda. Tim kami akan merespons dalam waktu 2-4 jam."
    },
    {
      question: "Berapa lama waktu respons untuk tiket support?",
      answer: "Rata-rata waktu respons kami adalah 2-4 jam untuk tiket dengan prioritas normal. Untuk tiket urgent, kami akan merespons dalam waktu 1 jam atau kurang."
    },
    {
      question: "Bagaimana cara mengecek status tiket saya?",
      answer: "Anda dapat mengecek status tiket dengan menggunakan ID tiket yang diberikan saat pembuatan tiket. Kunjungi halaman 'Status Tiket' dan masukkan ID tiket Anda."
    },
    {
      question: "Jenis masalah apa saja yang bisa dilaporkan?",
      answer: "Kami menerima berbagai jenis laporan termasuk: komplain teknis, permintaan fitur baru, pertanyaan umum, dan konsultasi teknis. Setiap tiket akan ditangani oleh tim yang tepat sesuai kategorinya."
    },
    {
      question: "Apakah ada biaya untuk layanan support?",
      answer: "Layanan support dasar kami gratis untuk semua pengguna. Untuk konsultasi mendalam atau support khusus, mungkin dikenakan biaya yang akan dikomunikasikan terlebih dahulu."
    },
    {
      question: "Bagaimana cara menghubungi support untuk masalah urgent?",
      answer: "Untuk masalah urgent, pilih prioritas 'Urgent' saat membuat tiket. Anda juga dapat menambahkan kata 'URGENT' di awal subjek tiket untuk mendapat perhatian lebih cepat."
    }
  ];

  const usageSteps = [
    {
      step: 1,
      title: "Buat Tiket Support",
      description: "Klik tombol 'Buat Tiket' dan isi formulir dengan detail masalah Anda. Pilih kategori dan prioritas yang sesuai.",
      icon: Ticket,
      color: "from-[#05b2fd] to-[#6f42c1]"
    },
    {
      step: 2,
      title: "Dapatkan ID Tiket",
      description: "Setelah berhasil submit, Anda akan mendapat ID tiket unik (format: ANT-XXXXXX-XXX) untuk tracking.",
      icon: FileText,
      color: "from-[#6f42c1] to-[#ff1a1a]"
    },
    {
      step: 3,
      title: "Cek Email Konfirmasi",
      description: "Periksa email Anda untuk konfirmasi tiket dan informasi lebih lanjut dari tim support kami.",
      icon: Mail,
      color: "from-[#ff1a1a] to-[#05b2fd]"
    },
    {
      step: 4,
      title: "Cek Status Tiket",
      description: "Gunakan ID tiket untuk mengecek status dan update terbaru melalui halaman 'Status Tiket'.",
      icon: Search,
      color: "from-[#05b2fd] to-[#6f42c1]"
    }
  ];

  const features = [
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Tim support kami siap membantu Anda kapan saja",
      gradient: "from-[#05b2fd] to-[#6f42c1]"
    },
    {
      icon: Zap,
      title: "Respon Cepat",
      description: "Rata-rata waktu respon kurang dari 2 jam",
      gradient: "from-[#6f42c1] to-[#ff1a1a]"
    },
    {
      icon: Shield,
      title: "Keamanan Terjamin",
      description: "Data Anda aman dengan enkripsi tingkat enterprise",
      gradient: "from-[#ff1a1a] to-[#05b2fd]"
    },
    {
      icon: Star,
      title: "Kualitas Terbaik",
      description: "Tingkat kepuasan pelanggan 98% berdasarkan survey",
      gradient: "from-[#05b2fd] to-[#6f42c1]"
    }
  ];

  const tips = [
    {
      title: "Jelaskan Masalah dengan Detail",
      description: "Semakin detail informasi yang Anda berikan, semakin cepat kami dapat membantu menyelesaikan masalah.",
      icon: MessageSquare
    },
    {
      title: "Gunakan Prioritas yang Tepat",
      description: "Pilih prioritas tiket sesuai dengan tingkat urgensi masalah untuk mendapat penanganan yang optimal.",
      icon: AlertCircle
    },
    {
      title: "Simpan ID Tiket dengan Baik",
      description: "ID tiket adalah kunci untuk tracking status. Simpan dengan aman untuk referensi di masa depan.",
      icon: FileText
    },
    {
      title: "Periksa Email Secara Berkala",
      description: "Tim kami akan mengirim update melalui email. Pastikan untuk memeriksa inbox dan spam folder.",
      icon: Bell
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-violet-100">
      <Navbar />

      {/* Hero Section with Grid Layout */}
      <div className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Carousel Section */}
            <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl">
              {bannerSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
                    index === currentSlide ? 'translate-x-0' : 'translate-x-full'
                  }`}
                  style={{ transform: `translateX(${(index - currentSlide) * 100}%)` }}
                >
                  <div className="relative h-full bg-gradient-to-r from-[#05b2fd] via-[#6f42c1] to-[#ff1a1a] text-white">
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-30"
                      style={{ backgroundImage: `url('${slide.image}')` }}
                    ></div>
                    <div className="relative p-12 h-full flex flex-col justify-center">
                      <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        {slide.title}
                      </h1>
                      <p className="text-lg md:text-xl mb-8 opacity-90">
                        {slide.description}
                      </p>
                      <Link to="/support">
                        <Button 
                          size="lg" 
                          className="bg-white text-[#6f42c1] hover:bg-gray-100 px-8 py-4 text-lg font-semibold w-fit"
                        >
                          <Ticket className="w-5 h-5 mr-2" />
                          {slide.action}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Carousel Navigation */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {bannerSlides.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-white' : 'bg-white/50'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>

              {/* Carousel Arrows */}
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
                onClick={() => setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length)}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
                onClick={() => setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Information Card */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <Badge className="mb-4 bg-gradient-to-r from-[#05b2fd] to-[#6f42c1] text-white px-4 py-2 text-sm font-medium">
                  🚀 Antlia Support System
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Solusi Support <span className="bg-gradient-to-r from-[#05b2fd] via-[#6f42c1] to-[#ff1a1a] bg-clip-text text-transparent">Terpercaya</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Platform support profesional dengan teknologi terdepan, memberikan solusi cepat dan akurat untuk setiap kebutuhan teknis Anda.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-[#05b2fd] to-[#6f42c1] flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Respon Cepat</h3>
                    <p className="text-sm text-gray-600">&lt; 2 Jam</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-[#6f42c1] to-[#ff1a1a] flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tim Expert</h3>
                    <p className="text-sm text-gray-600">24/7 Online</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-[#ff1a1a] to-[#05b2fd] flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Kepuasan</h3>
                    <p className="text-sm text-gray-600">98% Rating</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-[#05b2fd] to-[#6f42c1] flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Keamanan</h3>
                    <p className="text-sm text-gray-600">Terjamin</p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/support" className="flex-1">
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-[#05b2fd] via-[#6f42c1] to-[#ff1a1a] text-white hover:opacity-90 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Buat Tiket Support
                  </Button>
                </Link>
                <Link to="/support/status" className="flex-1">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full border-2 border-[#05b2fd] text-[#05b2fd] hover:bg-[#05b2fd] hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
                  >
                    <Search className="w-5 h-5 mr-2" />
                    Cek Status Tiket
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Flow Diagram */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-[#05b2fd] to-[#6f42c1] text-white px-4 py-2 text-sm font-medium">
            📋 Panduan Lengkap
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Cara Menggunakan Layanan Support</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Ikuti diagram alur sederhana ini untuk mendapatkan bantuan teknis yang Anda butuhkan</p>
        </div>

        {/* Flow Diagram */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {usageSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white/90 backdrop-blur-sm border-0 shadow-lg group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardContent className="p-8 relative z-10">
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#ff1a1a] to-[#6f42c1] flex items-center justify-center text-white font-bold text-xl shadow-md">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>

                {/* Arrow Connector */}
                {index < usageSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#05b2fd] to-[#6f42c1] rounded-full flex items-center justify-center shadow-lg">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}

                {/* Mobile Arrow */}
                {index < usageSteps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#05b2fd] to-[#6f42c1] rounded-full flex items-center justify-center shadow-lg">
                      <ArrowDown className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tips Section with Banner */}
      <div className="relative bg-gradient-to-r from-gray-50 via-blue-50 to-purple-50 py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-[#05b2fd] via-[#6f42c1] to-[#ff1a1a] transform rotate-12 scale-150"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          {/* Banner Info */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#05b2fd]/10 via-[#6f42c1]/10 to-[#ff1a1a]/10 border border-[#05b2fd]/20 rounded-full px-6 py-3 mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-[#05b2fd] to-[#6f42c1] rounded-full animate-pulse"></div>
              <span className="text-sm font-medium bg-gradient-to-r from-[#05b2fd] via-[#6f42c1] to-[#ff1a1a] bg-clip-text text-transparent">
                💡 Tips & Panduan Praktis
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Maksimalkan Pengalaman Support Anda</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Ikuti tips berikut untuk mendapatkan bantuan yang lebih efektif dan efisien</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {tips.map((tip, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:-translate-y-2 relative overflow-hidden">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#05b2fd] via-[#6f42c1] to-[#ff1a1a] opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#05b2fd] via-[#6f42c1] to-[#ff1a1a]"></div>
                
                <CardContent className="p-8 relative">
                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#05b2fd] to-[#6f42c1] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <tip.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-[#6f42c1] transition-colors duration-300">{tip.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{tip.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-[#05b2fd] to-[#6f42c1] text-white px-4 py-2 text-sm font-medium">
            ❓ FAQ
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Pertanyaan yang sering diajukan beserta jawabannya</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white/90 backdrop-blur-sm rounded-xl border-0 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-[#6f42c1] transition-colors px-8 py-6 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#05b2fd] to-[#6f42c1] flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 px-8 pb-6 pt-2 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-[#05b2fd] to-[#6f42c1] text-white px-4 py-2 text-sm font-medium">
              ⭐ Keunggulan
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mengapa Memilih Antlia Support?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Layanan support terbaik dengan standar profesional dan teknologi terdepan</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white/90 backdrop-blur-sm border-0 shadow-lg group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-8 relative">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#05b2fd] via-[#6f42c1] to-[#ff1a1a] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl font-bold mb-6">Siap Mendapatkan Bantuan?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">Tim support profesional kami siap membantu menyelesaikan masalah teknis Anda dengan cepat dan efisien</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/support">
              <Button 
                size="lg" 
                className="bg-white text-[#6f42c1] hover:bg-gray-100 px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Buat Tiket Support
              </Button>
            </Link>
            <Link to="/support/status">
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold backdrop-blur-sm"
              >
                <Search className="w-5 h-5 mr-2" />
                Cek Status Tiket
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#05b2fd] via-[#6f42c1] to-[#ff1a1a] bg-clip-text text-transparent">
                Antlia Support
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Platform support profesional yang memberikan solusi cepat dan akurat untuk setiap kebutuhan teknis Anda. Dengan tim ahli dan teknologi terdepan.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-[#05b2fd] to-[#6f42c1] rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-[#6f42c1] to-[#ff1a1a] rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-[#ff1a1a] to-[#05b2fd] rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Layanan</h4>
              <ul className="space-y-3">
                <li><Link to="/support" className="text-gray-300 hover:text-[#05b2fd] transition-colors">Support Teknis</Link></li>
                <li><Link to="/support" className="text-gray-300 hover:text-[#05b2fd] transition-colors">Konsultasi</Link></li>
                <li><Link to="/support/status" className="text-gray-300 hover:text-[#05b2fd] transition-colors">Cek Status</Link></li>
                <li><Link to="/" className="text-gray-300 hover:text-[#05b2fd] transition-colors">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#05b2fd]" />
                  support@antlia.com
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#6f42c1]" />
                  24/7 Online
                </li>
                <li className="flex items-center gap-2">
                  <HeadphonesIcon className="w-4 h-4 text-[#ff1a1a]" />
                  Response &lt; 2 Jam
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2024 Antlia Support. All rights reserved. Powered by professional support technology.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
