import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Ticket, Send, AlertCircle, Star, MessageSquare, Settings } from 'lucide-react';
import Navbar from '@/components/Navbar';
import SuccessNotification from '@/components/SuccessNotification';

const supportSchema = z.object({
  name: z.string().min(2, 'Nama harus minimal 2 karakter'),
  email: z.string().email('Email tidak valid'),
  subject: z.string().min(5, 'Subjek harus minimal 5 karakter'),
  type: z.enum(['complaint', 'feature', 'question', 'consultation'], {
    required_error: 'Pilih jenis tiket',
  }),
  priority: z.enum(['low', 'normal', 'high', 'urgent'], {
    required_error: 'Pilih prioritas',
  }),
  description: z.string().min(10, 'Deskripsi harus minimal 10 karakter'),
});

type SupportFormData = z.infer<typeof supportSchema>;

const Support = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [ticketData, setTicketData] = useState<any>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
    reset,
  } = useForm<SupportFormData>({
    resolver: zodResolver(supportSchema),
  });

  const watchType = watch('type');
  const watchPriority = watch('priority');

  const generateTicketId = () => {
    const prefix = 'ANT';
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.random().toString(36).substring(2, 5).toUpperCase();
    return `${prefix}-${timestamp}-${random}`;
  };

  const onSubmit = async (data: SupportFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      const newTicketId = generateTicketId();
      const ticketInfo = {
        id: newTicketId,
        ...data,
        status: 'open',
        createdAt: new Date().toISOString(),
      };

      // Save to localStorage
      const existingTickets = JSON.parse(localStorage.getItem('supportTickets') || '[]');
      existingTickets.push(ticketInfo);
      localStorage.setItem('supportTickets', JSON.stringify(existingTickets));

      // Show success notification
      setTicketId(newTicketId);
      setTicketData(data);
      setShowSuccess(true);
      
      // Reset form
      reset();
    } catch (error) {
      console.error('Error submitting ticket:', error);
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'complaint': return AlertCircle;
      case 'feature': return Star;
      case 'question': return MessageSquare;
      case 'consultation': return Settings;
      default: return Ticket;
    }
  };

  const typeOptions = [
    { value: 'complaint', label: 'Komplain', description: 'Laporkan masalah atau keluhan' },
    { value: 'feature', label: 'Fitur Baru', description: 'Request penambahan fitur baru' },
    { value: 'question', label: 'Pertanyaan', description: 'Pertanyaan umum tentang layanan' },
    { value: 'consultation', label: 'Konsultasi', description: 'Konsultasi teknis mendalam' },
  ];

  const priorityOptions = [
    { value: 'low', label: 'Rendah', color: 'text-green-600', description: 'Tidak mengganggu operasional' },
    { value: 'normal', label: 'Normal', color: 'text-blue-600', description: 'Masalah standar' },
    { value: 'high', label: 'Tinggi', color: 'text-orange-600', description: 'Masalah mengganggu' },
    { value: 'urgent', label: 'Mendesak', color: 'text-red-600', description: 'Membutuhkan respons segera' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-violet-100">
      <Navbar />
      
      {/* Hero Section with Image */}
      <div className="relative bg-gradient-to-r from-[#05b2fd] via-[#6f42c1] to-[#ff1a1a] text-white py-16">
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=4076&q=80')"
          }}
        ></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Buat Tiket Support</h1>
            <p className="text-xl opacity-90">Laporkan masalah atau ajukan pertanyaan kepada tim kami</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <Card className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm shadow-xl">
          <CardHeader className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#05b2fd] to-[#6f42c1] flex items-center justify-center">
              <Ticket className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl text-gray-900">Formulir Support</CardTitle>
            <CardDescription>
              Isi formulir di bawah ini dengan detail masalah atau permintaan Anda
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama Lengkap</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    {...register('name')}
                    className={errors.name ? 'border-red-500' : ''}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    {...register('email')}
                    className={errors.email ? 'border-red-500' : ''}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <Label htmlFor="subject">Subjek</Label>
                <Input
                  id="subject"
                  placeholder="Masalah login atau Request fitur export data"
                  {...register('subject')}
                  className={errors.subject ? 'border-red-500' : ''}
                />
                {errors.subject && (
                  <p className="text-sm text-red-500">{errors.subject.message}</p>
                )}
              </div>

              {/* Type and Priority */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Jenis Tiket</Label>
                  <Select value={watchType} onValueChange={(value) => setValue('type', value as any)}>
                    <SelectTrigger className={errors.type ? 'border-red-500' : ''}>
                      <SelectValue placeholder="Pilih jenis tiket" />
                    </SelectTrigger>
                    <SelectContent>
                      {typeOptions.map((option) => {
                        const Icon = getTypeIcon(option.value);
                        return (
                          <SelectItem key={option.value} value={option.value}>
                            <div className="flex items-center gap-2">
                              <Icon className="w-4 h-4" />
                              <div>
                                <div className="font-medium">{option.label}</div>
                                <div className="text-xs text-gray-500">{option.description}</div>
                              </div>
                            </div>
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                  {errors.type && (
                    <p className="text-sm text-red-500">{errors.type.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Prioritas</Label>
                  <Select value={watchPriority} onValueChange={(value) => setValue('priority', value as any)}>
                    <SelectTrigger className={errors.priority ? 'border-red-500' : ''}>
                      <SelectValue placeholder="Pilih prioritas" />
                    </SelectTrigger>
                    <SelectContent>
                      {priorityOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          <div>
                            <div className={`font-medium ${option.color}`}>{option.label}</div>
                            <div className="text-xs text-gray-500">{option.description}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.priority && (
                    <p className="text-sm text-red-500">{errors.priority.message}</p>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Deskripsi Detail</Label>
                <Textarea
                  id="description"
                  placeholder="Jelaskan masalah atau permintaan Anda secara detail..."
                  rows={6}
                  {...register('description')}
                  className={errors.description ? 'border-red-500' : ''}
                />
                {errors.description && (
                  <p className="text-sm text-red-500">{errors.description.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#05b2fd] to-[#6f42c1] hover:from-[#0490cc] hover:to-[#5a359a] text-white py-3 text-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Mengirim...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Kirim Tiket Support
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Success Notification */}
      <SuccessNotification
        isVisible={showSuccess}
        onClose={() => setShowSuccess(false)}
        ticketId={ticketId}
        ticketData={ticketData || {}}
      />
    </div>
  );
};

export default Support;
