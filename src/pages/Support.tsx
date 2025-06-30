
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { HeadphonesIcon, MessageSquare, Zap, Shield, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SuccessNotification from '@/components/SuccessNotification';

interface FormData {
  name: string;
  email: string;
  company: string;
  type: string;
  subject: string;
  description: string;
  priority: string;
}

const Support = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    type: '',
    subject: '',
    description: '',
    priority: 'medium'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [createdTicketId, setCreatedTicketId] = useState('');

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generateTicketId = () => {
    const timestamp = Date.now();
    return `TKT-${timestamp}`;
  };

  const sendEmailNotification = (ticketData: any) => {
    // Simulate email sending
    console.log('Email notification sent to IT Support, Management, and BD');
    console.log('Ticket details:', ticketData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const ticketId = generateTicketId();
      const ticketData = {
        id: ticketId,
        ...formData,
        status: 'open',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      // Save to localStorage
      const existingTickets = JSON.parse(localStorage.getItem('supportTickets') || '[]');
      existingTickets.push(ticketData);
      localStorage.setItem('supportTickets', JSON.stringify(existingTickets));

      // Send email notification
      sendEmailNotification(ticketData);

      // Show success notification
      setCreatedTicketId(ticketId);
      setShowNotification(true);

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        type: '',
        subject: '',
        description: '',
        priority: 'medium'
      });

    } catch (error) {
      console.error('Error creating ticket:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      icon: Zap,
      title: "Respon Cepat",
      description: "Tim support merespons dalam 2-4 jam"
    },
    {
      icon: HeadphonesIcon,
      title: "Support 24/7",
      description: "Layanan support tersedia sepanjang waktu"
    },
    {
      icon: Shield,
      title: "Keamanan Terjamin",
      description: "Informasi Anda aman dan terlindungi"
    },
    {
      icon: CheckCircle,
      title: "Solusi Tepat",
      description: "Tingkat penyelesaian masalah 95%"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-violet-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#05b2fd] via-[#6f42c1] to-[#ff1a1a] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Center</h1>
            <p className="text-xl opacity-90 mb-6">Kami siap membantu menyelesaikan masalah Anda</p>
            <div className="flex justify-center gap-4">
              <Link to="/support/status">
                <Button className="bg-white text-[#6f42c1] hover:bg-gray-100">
                  <Clock className="w-4 h-4 mr-2" />
                  Cek Status Tiket
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Kembali ke Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-[#6f42c1]" />
                  Buat Tiket Support
                </CardTitle>
                <CardDescription>
                  Lengkapi form di bawah ini untuk membuat tiket support baru
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Masukkan nama lengkap"
                        required
                        className="bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="nama@example.com"
                        required
                        className="bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Perusahaan
                    </label>
                    <Input
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Nama perusahaan (opsional)"
                      className="bg-white"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Jenis Permohonan *
                      </label>
                      <Select value={formData.type} onValueChange={(value) => handleInputChange('type', value)}>
                        <SelectTrigger className="bg-white">
                          <SelectValue placeholder="Pilih jenis permohonan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="complaint">Komplain</SelectItem>
                          <SelectItem value="feature">Permintaan Fitur Baru</SelectItem>
                          <SelectItem value="question">Pertanyaan</SelectItem>
                          <SelectItem value="consultation">Konsultasi</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tingkat Prioritas *
                      </label>
                      <Select value={formData.priority} onValueChange={(value) => handleInputChange('priority', value)}>
                        <SelectTrigger className="bg-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Rendah</SelectItem>
                          <SelectItem value="medium">Sedang</SelectItem>
                          <SelectItem value="high">Tinggi</SelectItem>
                          <SelectItem value="urgent">Mendesak</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subjek *
                    </label>
                    <Input
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder="Ringkasan singkat masalah Anda"
                      required
                      className="bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Deskripsi Lengkap *
                    </label>
                    <Textarea
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      placeholder="Jelaskan masalah atau permintaan Anda secara detail..."
                      rows={6}
                      required
                      className="bg-white resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#05b2fd] via-[#6f42c1] to-[#ff1a1a] hover:from-[#0490cc] hover:via-[#5a359a] hover:to-[#cc1515] text-white py-3 text-lg font-semibold"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Memproses...
                      </div>
                    ) : (
                      'Kirim Tiket Support'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Features Sidebar */}
          <div className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Mengapa Memilih Kami?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#05b2fd] to-[#6f42c1] rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-[#05b2fd] to-[#6f42c1] text-white">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Butuh Bantuan Segera?</h3>
                <p className="text-sm opacity-90 mb-4">
                  Untuk masalah mendesak, hubungi tim support kami langsung
                </p>
                <Button className="w-full bg-white text-[#6f42c1] hover:bg-gray-100">
                  <HeadphonesIcon className="w-4 h-4 mr-2" />
                  Hubungi Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Success Notification */}
      <SuccessNotification
        isVisible={showNotification}
        onClose={() => setShowNotification(false)}
        ticketId={createdTicketId}
        ticketData={formData}
      />
    </div>
  );
};

export default Support;
