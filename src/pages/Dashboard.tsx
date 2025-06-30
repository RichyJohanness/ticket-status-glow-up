
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
  ChevronRight
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

      {/* Hero Carousel Section */}
      <div className="relative h-[600px] overflow-hidden">
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
              <div className="relative container mx-auto px-4 h-full flex items-center">
                <div className="max-w-2xl animate-fade-in">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 opacity-90">
                    {slide.description}
                  </p>
                  <Link to="/support">
                    <Button 
                      size="lg" 
                      className="bg-white text-[#6f42c1] hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                    >
                      <Ticket className="w-5 h-5 mr-2" />
                      {slide.action}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Carousel Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
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

      {/* How to Use Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Cara Menggunakan Layanan Support</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Ikuti langkah-langkah sederhana ini untuk mendapatkan bantuan teknis yang Anda butuhkan</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usageSteps.map((step, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-3 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#ff1a1a] to-[#6f42c1] flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Tips Section with Elegant Design */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-[#05b2fd] to-[#6f42c1] text-white px-4 py-2 text-sm font-medium">
              💡 Tips & Panduan
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tips Menggunakan Layanan Support</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Maksimalkan pengalaman Anda dengan mengikuti tips berikut</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tips.map((tip, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-l-4 border-l-[#05b2fd]">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#05b2fd] to-[#6f42c1] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <tip.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-900">{tip.title}</h3>
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Pertanyaan yang sering diajukan beserta jawabannya</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white/90 backdrop-blur-sm rounded-xl border-0 shadow-md overflow-hidden">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mengapa Memilih Antlia Support?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Layanan support terbaik dengan standar profesional dan teknologi terdepan</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-3 bg-white/90 backdrop-blur-sm border-0 shadow-lg group">
                <CardContent className="p-8">
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
      <div className="bg-gradient-to-r from-[#05b2fd] via-[#6f42c1] to-[#ff1a1a] text-white py-20">
        <div className="container mx-auto px-4 text-center">
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
    </div>
  );
};

export default Dashboard;
