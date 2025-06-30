import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Search, Clock, CheckCircle, AlertCircle, XCircle, Ticket, Calendar, User, Mail, FileText } from 'lucide-react';
import Navbar from '@/components/Navbar';

interface SupportTicket {
  id: string;
  name: string;
  email: string;
  subject: string;
  type: string;
  priority: string;
  description: string;
  status: string;
  createdAt: string;
}

const SupportStatus = () => {
  const [searchId, setSearchId] = useState('');
  const [ticket, setTicket] = useState<SupportTicket | null>(null);
  const [allTickets, setAllTickets] = useState<SupportTicket[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Load all tickets from localStorage
    const storedTickets = JSON.parse(localStorage.getItem('supportTickets') || '[]');
    setAllTickets(storedTickets);
  }, []);

  const handleSearch = () => {
    if (!searchId.trim()) {
      setError('Masukkan ID tiket yang valid');
      return;
    }

    setLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      const foundTicket = allTickets.find(t => t.id.toLowerCase() === searchId.toLowerCase());
      
      if (foundTicket) {
        setTicket(foundTicket);
        setError('');
      } else {
        setTicket(null);
        setError('Tiket tidak ditemukan. Pastikan ID tiket sudah benar.');
      }
      
      setLoading(false);
    }, 500);
  };

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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'open': return Clock;
      case 'in-progress': return AlertCircle;
      case 'resolved': return CheckCircle;
      case 'closed': return XCircle;
      default: return Clock;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'low': return 'text-green-600 bg-green-50 border-green-200';
      case 'normal': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'high': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'urgent': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getPriorityText = (priority: string) => {
    switch (priority) {
      case 'low': return 'Rendah';
      case 'normal': return 'Normal';
      case 'high': return 'Tinggi';
      case 'urgent': return 'Mendesak';
      default: return priority;
    }
  };

  const getTypeText = (type: string) => {
    switch (type) {
      case 'complaint': return 'Komplain';
      case 'feature': return 'Fitur Baru';
      case 'question': return 'Pertanyaan';
      case 'consultation': return 'Konsultasi';
      default: return type;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-violet-100">
      <Navbar />
      
      {/* Hero Section with Image */}
      <div className="relative bg-gradient-to-r from-[#05b2fd] via-[#6f42c1] to-[#ff1a1a] text-white py-16">
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=4846&q=80')"
          }}
        ></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Status Tiket Support</h1>
            <p className="text-xl opacity-90">Cek status dan progress tiket support Anda</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8 relative z-10">
        {/* Search Section */}
        <Card className="max-w-2xl mx-auto mb-8 bg-white/90 backdrop-blur-sm shadow-xl">
          <CardHeader className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#05b2fd] to-[#6f42c1] flex items-center justify-center">
              <Search className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl text-gray-900">Cari Tiket Anda</CardTitle>
            <CardDescription>
              Masukkan ID tiket untuk melihat status dan detail lengkap
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="ticketId">ID Tiket</Label>
                <div className="flex gap-2">
                  <Input
                    id="ticketId"
                    placeholder="Contoh: ANT-123456-ABC"
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSearch}
                    disabled={loading}
                    className="bg-gradient-to-r from-[#05b2fd] to-[#6f42c1] hover:from-[#0490cc] hover:to-[#5a359a]"
                  >
                    {loading ? (
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    ) : (
                      <>
                        <Search className="w-4 h-4 mr-2" />
                        Cari
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center gap-2 text-red-600">
                    <AlertCircle className="w-5 h-5" />
                    <span className="font-medium">{error}</span>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Ticket Details */}
        {ticket && (
          <Card className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm shadow-xl">
            <CardHeader className="border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl text-gray-900 mb-2">
                    {ticket.id}
                  </CardTitle>
                  <CardDescription className="text-lg">
                    {ticket.subject}
                  </CardDescription>
                </div>
                <div className="text-right">
                  <Badge className={`${getStatusColor(ticket.status)} text-white mb-2`}>
                    {React.createElement(getStatusIcon(ticket.status), { className: "w-4 h-4 mr-1" })}
                    {getStatusText(ticket.status)}
                  </Badge>
                  <div className={`px-3 py-1 rounded-full border text-sm font-medium ${getPriorityColor(ticket.priority)}`}>
                    {getPriorityText(ticket.priority)}
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Ticket Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Ticket className="w-5 h-5 text-[#05b2fd]" />
                      Informasi Tiket
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Jenis:</span>
                        <span className="font-medium">{getTypeText(ticket.type)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Prioritas:</span>
                        <span className={`font-medium ${getPriorityColor(ticket.priority).split(' ')[0]}`}>
                          {getPriorityText(ticket.priority)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status:</span>
                        <span className="font-medium">{getStatusText(ticket.status)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <User className="w-5 h-5 text-[#6f42c1]" />
                      Informasi Kontak
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-500" />
                        <span>{ticket.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-gray-500" />
                        <span>{ticket.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span>{new Date(ticket.createdAt).toLocaleDateString('id-ID', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#ff1a1a]" />
                  Deskripsi Masalah
                </h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700 whitespace-pre-wrap">{ticket.description}</p>
                </div>
              </div>

              {/* Status Timeline */}
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#05b2fd]" />
                  Timeline Status
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${ticket.status === 'open' || ticket.status === 'in-progress' || ticket.status === 'resolved' || ticket.status === 'closed' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    <div>
                      <p className="font-medium text-sm">Tiket Dibuat</p>
                      <p className="text-xs text-gray-500">{new Date(ticket.createdAt).toLocaleDateString('id-ID')}</p>
                    </div>
                  </div>
                  {ticket.status !== 'open' && (
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${ticket.status === 'in-progress' || ticket.status === 'resolved' || ticket.status === 'closed' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                      <div>
                        <p className="font-medium text-sm">Dalam Proses</p>
                        <p className="text-xs text-gray-500">Tim sedang menangani tiket Anda</p>
                      </div>
                    </div>
                  )}
                  {(ticket.status === 'resolved' || ticket.status === 'closed') && (
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div>
                        <p className="font-medium text-sm">Selesai</p>
                        <p className="text-xs text-gray-500">Masalah telah diselesaikan</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Next Steps */}
              <div className="border-t border-gray-200 pt-6 mt-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Langkah Selanjutnya:</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    {ticket.status === 'open' && (
                      <>
                        <li>• Tim support akan segera meninjau tiket Anda</li>
                        <li>• Estimasi waktu respons: 2-4 jam</li>
                        <li>• Anda akan mendapat notifikasi email untuk update</li>
                      </>
                    )}
                    {ticket.status === 'in-progress' && (
                      <>
                        <li>• Tim sedang menangani masalah Anda</li>
                        <li>• Mohon tunggu update selanjutnya</li>
                        <li>• Jika ada pertanyaan, hubungi support</li>
                      </>
                    )}
                    {ticket.status === 'resolved' && (
                      <>
                        <li>• Masalah Anda sudah diselesaikan</li>
                        <li>• Silakan cek solusi yang diberikan</li>
                        <li>• Jika masih ada masalah, buat tiket baru</li>
                      </>
                    )}
                    {ticket.status === 'closed' && (
                      <>
                        <li>• Tiket telah ditutup</li>
                        <li>• Terima kasih atas kepercayaan Anda</li>
                        <li>• Untuk masalah baru, silakan buat tiket baru</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Recent Tickets Preview */}
        {allTickets.length > 0 && !ticket && (
          <Card className="max-w-4xl mx-auto mt-8 bg-white/90 backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">Tiket Terbaru</CardTitle>
              <CardDescription>Beberapa tiket yang baru saja dibuat</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {allTickets.slice(0, 5).map((t) => (
                  <div key={t.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer" onClick={() => setSearchId(t.id)}>
                    <div>
                      <p className="font-medium text-sm">{t.id}</p>
                      <p className="text-xs text-gray-600">{t.subject}</p>
                    </div>
                    <Badge className={`${getStatusColor(t.status)} text-white text-xs`}>
                      {getStatusText(t.status)}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SupportStatus;
