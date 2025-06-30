
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
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
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface SupportTicket {
  id: string;
  status: string;
  priority: string;
  type: string;
  subject: string;
  createdAt: string;
}

const Dashboard = () => {
  const [tickets, setTickets] = useState<SupportTicket[]>([]);
  const [stats, setStats] = useState({
    totalTickets: 0,
    openTickets: 0,
    resolvedTickets: 0,
    avgResponseTime: '2h 30m'
  });

  useEffect(() => {
    // Load tickets from localStorage
    const storedTickets = JSON.parse(localStorage.getItem('supportTickets') || '[]');
    setTickets(storedTickets.slice(0, 5)); // Show only recent 5 tickets

    // Calculate stats
    const totalTickets = storedTickets.length;
    const openTickets = storedTickets.filter((t: SupportTicket) => ['open', 'in-progress'].includes(t.status)).length;
    const resolvedTickets = storedTickets.filter((t: SupportTicket) => t.status === 'resolved').length;

    setStats({
      totalTickets,
      openTickets,
      resolvedTickets,
      avgResponseTime: '2h 30m'
    });
  }, []);

  const features = [
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Tim support kami siap membantu Anda kapan saja"
    },
    {
      icon: Zap,
      title: "Respon Cepat",
      description: "Rata-rata waktu respon kurang dari 2 jam"
    },
    {
      icon: Shield,
      title: "Keamanan Terjamin",
      description: "Data Anda aman dengan enkripsi tingkat enterprise"
    },
    {
      icon: Star,
      title: "Kualitas Terbaik",
      description: "Tingkat kepuasan pelanggan 98% berdasarkan survey"
    }
  ];

  const testimonials = [
    {
      name: "Andi Pratama",
      company: "PT. Teknologi Maju",
      message: "Layanan support yang sangat responsif dan profesional. Masalah kami selalu diselesaikan dengan cepat.",
      rating: 5
    },
    {
      name: "Sari Dewi",
      company: "CV. Digital Solutions",
      message: "Tim support sangat membantu dalam implementasi fitur baru. Komunikasi yang jelas dan solusi yang tepat.",
      rating: 5
    },
    {
      name: "Budi Santoso",
      company: "Startup Innovation",
      message: "Impressed dengan kecepatan respon dan kualitas solusi yang diberikan. Highly recommended!",
      rating: 5
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-blue-500';
      case 'in-progress': return 'bg-yellow-500';
      case 'resolved': return 'bg-green-500';
      case 'closed': return 'bg-gray-500';
      default: return 'bg-blue-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'open': return 'Baru';
      case 'in-progress': return 'Sedang Diproses';
      case 'resolved': return 'Selesai';
      case 'closed': return 'Ditutup';
      default: return 'Baru';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-violet-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#05b2fd] via-[#6f42c1] to-[#ff1a1a] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-[fade-in_1s_ease-out]">
              Support Center
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-[fade-in_1s_ease-out_0.3s_both]">
              Solusi terbaik untuk semua kebutuhan dukungan teknis Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[fade-in_1s_ease-out_0.6s_both]">
              <Link to="/support">
                <Button 
                  size="lg" 
                  className="bg-white text-[#6f42c1] hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                >
                  <Ticket className="w-5 h-5 mr-2" />
                  Buat Tiket Support
                </Button>
              </Link>
              <Link to="/support/status">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold"
                >
                  <Clock className="w-5 h-5 mr-2" />
                  Cek Status Tiket
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-1 left-0 right-0 h-20 bg-gradient-to-t from-blue-50 to-transparent"></div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 -mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Ticket, label: 'Total Tiket', value: stats.totalTickets, color: 'from-[#05b2fd] to-[#6f42c1]' },
            { icon: AlertCircle, label: 'Tiket Aktif', value: stats.openTickets, color: 'from-[#6f42c1] to-[#ff1a1a]' },
            { icon: CheckCircle, label: 'Tiket Selesai', value: stats.resolvedTickets, color: 'from-[#05b2fd] to-green-500' },
            { icon: Clock, label: 'Avg Response', value: stats.avgResponseTime, color: 'from-[#ff1a1a] to-[#6f42c1]' }
          ].map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow animate-[scale-in_0.6s_ease-out] bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Mengapa Memilih Kami?</h2>
          <p className="text-xl text-gray-600">Layanan support terbaik dengan standar profesional</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#05b2fd] to-[#6f42c1] flex items-center justify-center`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Tickets */}
      {tickets.length > 0 && (
        <div className="container mx-auto px-4 py-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Tiket Terbaru Anda</h2>
            <Link to="/support/status">
              <Button className="bg-gradient-to-r from-[#05b2fd] to-[#6f42c1] hover:from-[#0490cc] hover:to-[#5a359a]">
                Lihat Semua
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-4">
            {tickets.map((ticket) => (
              <Card key={ticket.id} className="hover:shadow-md transition-shadow bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">{ticket.id}</h3>
                      <p className="text-gray-600 mb-2">{ticket.subject}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(ticket.createdAt).toLocaleDateString('id-ID')}
                      </p>
                    </div>
                    <Badge className={`${getStatusColor(ticket.status)} text-white`}>
                      {getStatusText(ticket.status)}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Testimonials Carousel */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Apa Kata Pelanggan Kami</h2>
          <p className="text-xl text-gray-600">Testimoni dari berbagai perusahaan yang telah mempercayai layanan kami</p>
        </div>

        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-lg text-gray-700 mb-6 italic">
                      "{testimonial.message}"
                    </blockquote>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#05b2fd] via-[#6f42c1] to-[#ff1a1a] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Butuh Bantuan Sekarang?</h2>
          <p className="text-xl mb-8 opacity-90">Tim support kami siap membantu menyelesaikan masalah Anda</p>
          <Link to="/support">
            <Button 
              size="lg" 
              className="bg-white text-[#6f42c1] hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Hubungi Support
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
