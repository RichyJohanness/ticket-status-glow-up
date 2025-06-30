
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Ticket, MessageSquarePlus, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    type: '',
    subject: '',
    description: '',
    priority: 'medium'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Generate ticket ID
      const ticketId = `TKT-${Date.now()}`;
      
      // Store ticket in localStorage (in real app, this would be sent to backend)
      const ticket = {
        id: ticketId,
        ...formData,
        status: 'open',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      const existingTickets = JSON.parse(localStorage.getItem('supportTickets') || '[]');
      existingTickets.push(ticket);
      localStorage.setItem('supportTickets', JSON.stringify(existingTickets));

      // Simulate email notification
      console.log('Email notification sent to IT Support, Management, and BD');
      console.log('Ticket details:', ticket);

      toast({
        title: "Tiket Berhasil Dibuat",
        description: `ID Tiket: ${ticketId}. Tim support akan menghubungi Anda segera.`,
      });

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
      toast({
        title: "Error",
        description: "Gagal membuat tiket. Silakan coba lagi.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-violet-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Pusat Bantuan & Support</h1>
            <p className="text-xl opacity-90">Kami siap membantu menyelesaikan masalah Anda</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="md:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Aksi Cepat</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/support/status" className="block">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600">
                    <Search className="w-4 h-4 mr-2" />
                    Cek Status Tiket
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="w-full border-2 border-gradient-to-r from-blue-500 to-violet-500"
                  onClick={() => document.getElementById('support-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <MessageSquarePlus className="w-4 h-4 mr-2" />
                  Buat Tiket Baru
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Jenis Bantuan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Komplain & Masalah Teknis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Permintaan Fitur Baru</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Pertanyaan Umum</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Konsultasi & Saran</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Support Form */}
          <div className="md:col-span-2">
            <Card id="support-form">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Ticket className="w-6 h-6 mr-2 text-blue-600" />
                  Buat Tiket Support
                </CardTitle>
                <CardDescription>
                  Isi form di bawah ini untuk mendapatkan bantuan dari tim support kami
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nama Lengkap *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="email@contoh.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Nama Perusahaan</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Nama perusahaan (opsional)"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="type">Jenis Permintaan *</Label>
                      <Select onValueChange={(value) => handleSelectChange('type', value)} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih jenis permintaan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="complaint">Komplain & Masalah Teknis</SelectItem>
                          <SelectItem value="feature">Permintaan Fitur Baru</SelectItem>
                          <SelectItem value="question">Pertanyaan Umum</SelectItem>
                          <SelectItem value="consultation">Konsultasi & Saran</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="priority">Prioritas</Label>
                      <Select 
                        value={formData.priority} 
                        onValueChange={(value) => handleSelectChange('priority', value)}
                      >
                        <SelectTrigger>
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

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subjek *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="Ringkasan singkat masalah atau permintaan"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Deskripsi Detail *</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      placeholder="Jelaskan masalah atau permintaan Anda secara detail..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white font-semibold py-3"
                  >
                    {isSubmitting ? 'Mengirim...' : 'Kirim Tiket Support'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
