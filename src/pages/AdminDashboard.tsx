
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { 
  Search, 
  Filter, 
  Eye, 
  Edit3, 
  Trash2, 
  Users, 
  Ticket, 
  TrendingUp, 
  Clock,
  CheckCircle,
  AlertCircle,
  Calendar,
  User,
  MessageSquare
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface SupportTicket {
  id: string;
  name: string;
  email: string;
  company: string;
  type: string;
  subject: string;
  description: string;
  priority: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

const AdminDashboard = () => {
  const [tickets, setTickets] = useState<SupportTicket[]>([]);
  const [filteredTickets, setFilteredTickets] = useState<SupportTicket[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [selectedTicket, setSelectedTicket] = useState<SupportTicket | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const [stats, setStats] = useState({
    totalTickets: 0,
    openTickets: 0,
    inProgressTickets: 0,
    resolvedTickets: 0,
    avgResponseTime: '2h 30m'
  });

  useEffect(() => {
    loadTickets();
  }, []);

  useEffect(() => {
    filterTickets();
  }, [tickets, searchQuery, statusFilter, priorityFilter]);

  const loadTickets = () => {
    const storedTickets = JSON.parse(localStorage.getItem('supportTickets') || '[]');
    setTickets(storedTickets);
    
    // Calculate stats
    const totalTickets = storedTickets.length;
    const openTickets = storedTickets.filter((t: SupportTicket) => t.status === 'open').length;
    const inProgressTickets = storedTickets.filter((t: SupportTicket) => t.status === 'in-progress').length;
    const resolvedTickets = storedTickets.filter((t: SupportTicket) => t.status === 'resolved').length;

    setStats({
      totalTickets,
      openTickets,
      inProgressTickets,
      resolvedTickets,
      avgResponseTime: '2h 30m'
    });
  };

  const filterTickets = () => {
    let filtered = tickets;

    // Search filter
    if (searchQuery.trim() !== '') {
      filtered = filtered.filter(ticket => 
        ticket.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ticket.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ticket.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ticket.subject.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(ticket => ticket.status === statusFilter);
    }

    // Priority filter
    if (priorityFilter !== 'all') {
      filtered = filtered.filter(ticket => ticket.priority === priorityFilter);
    }

    setFilteredTickets(filtered);
  };

  const updateTicketStatus = (ticketId: string, newStatus: string) => {
    const updatedTickets = tickets.map(ticket => 
      ticket.id === ticketId 
        ? { ...ticket, status: newStatus, updatedAt: new Date().toISOString() }
        : ticket
    );
    
    setTickets(updatedTickets);
    localStorage.setItem('supportTickets', JSON.stringify(updatedTickets));
    
    toast({
      title: "Status Updated",
      description: `Ticket ${ticketId} status updated to ${getStatusText(newStatus)}`,
    });
  };

  const deleteTicket = (ticketId: string) => {
    const updatedTickets = tickets.filter(ticket => ticket.id !== ticketId);
    setTickets(updatedTickets);
    localStorage.setItem('supportTickets', JSON.stringify(updatedTickets));
    
    toast({
      title: "Ticket Deleted",
      description: `Ticket ${ticketId} has been deleted successfully`,
      variant: "destructive"
    });
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

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'urgent': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityText = (priority: string) => {
    switch (priority) {
      case 'low': return 'Rendah';
      case 'medium': return 'Sedang';
      case 'high': return 'Tinggi';
      case 'urgent': return 'Mendesak';
      default: return 'Sedang';
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-violet-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#05b2fd] via-[#6f42c1] to-[#ff1a1a] text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-lg opacity-90 mt-2">Kelola semua tiket support dan monitor performa layanan</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          {[
            { icon: Ticket, label: 'Total Tiket', value: stats.totalTickets, color: 'from-[#05b2fd] to-[#6f42c1]' },
            { icon: AlertCircle, label: 'Tiket Baru', value: stats.openTickets, color: 'from-blue-500 to-blue-600' },
            { icon: Clock, label: 'Sedang Diproses', value: stats.inProgressTickets, color: 'from-yellow-500 to-orange-500' },
            { icon: CheckCircle, label: 'Selesai', value: stats.resolvedTickets, color: 'from-green-500 to-green-600' },
            { icon: TrendingUp, label: 'Avg Response', value: stats.avgResponseTime, color: 'from-[#ff1a1a] to-[#6f42c1]' }
          ].map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filters */}
        <Card className="mb-8 bg-white/80 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Cari berdasarkan ID, nama, email, atau subjek..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Status</SelectItem>
                  <SelectItem value="open">Baru</SelectItem>
                  <SelectItem value="in-progress">Sedang Diproses</SelectItem>
                  <SelectItem value="resolved">Selesai</SelectItem>
                  <SelectItem value="closed">Ditutup</SelectItem>
                </SelectContent>
              </Select>
              <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter Prioritas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Prioritas</SelectItem>
                  <SelectItem value="low">Rendah</SelectItem>
                  <SelectItem value="medium">Sedang</SelectItem>
                  <SelectItem value="high">Tinggi</SelectItem>
                  <SelectItem value="urgent">Mendesak</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Tickets Table */}
        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Ticket className="w-5 h-5" />
              Daftar Tiket Support ({filteredTickets.length})
            </CardTitle>
            <CardDescription>
              Kelola dan monitor semua tiket support yang masuk
            </CardDescription>
          </CardHeader>
          <CardContent>
            {filteredTickets.length === 0 ? (
              <div className="text-center py-12">
                <Ticket className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Tidak Ada Tiket</h3>
                <p className="text-gray-500">
                  {tickets.length === 0 
                    ? 'Belum ada tiket support yang masuk.'
                    : 'Tidak ada tiket yang sesuai dengan filter yang dipilih.'
                  }
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredTickets.map((ticket) => (
                  <Card key={ticket.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-lg">{ticket.id}</h3>
                            <Badge className={`${getStatusColor(ticket.status)} text-white`}>
                              {getStatusText(ticket.status)}
                            </Badge>
                            <Badge variant="outline" className={getPriorityColor(ticket.priority)}>
                              {getPriorityText(ticket.priority)}
                            </Badge>
                          </div>
                          
                          <h4 className="font-medium text-gray-900 mb-2">{ticket.subject}</h4>
                          
                          <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4" />
                              <span>{ticket.name} ({ticket.email})</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MessageSquare className="w-4 h-4" />
                              <span>{getTypeText(ticket.type)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>Dibuat: {formatDate(ticket.createdAt)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>Update: {formatDate(ticket.updatedAt)}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                          <div className="flex gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="sm" onClick={() => setSelectedTicket(ticket)}>
                                  <Eye className="w-4 h-4 mr-1" />
                                  Lihat
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl">
                                <DialogHeader>
                                  <DialogTitle>Detail Tiket {ticket.id}</DialogTitle>
                                  <DialogDescription>
                                    Informasi lengkap tiket support
                                  </DialogDescription>
                                </DialogHeader>
                                {selectedTicket && (
                                  <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                      <div><strong>Nama:</strong> {selectedTicket.name}</div>
                                      <div><strong>Email:</strong> {selectedTicket.email}</div>
                                      <div><strong>Perusahaan:</strong> {selectedTicket.company}</div>
                                      <div><strong>Jenis:</strong> {getTypeText(selectedTicket.type)}</div>
                                      <div><strong>Prioritas:</strong> {getPriorityText(selectedTicket.priority)}</div>
                                      <div><strong>Status:</strong> {getStatusText(selectedTicket.status)}</div>
                                    </div>
                                    <div>
                                      <strong>Subjek:</strong>
                                      <p className="mt-1">{selectedTicket.subject}</p>
                                    </div>
                                    <div>
                                      <strong>Deskripsi:</strong>
                                      <p className="mt-1 p-3 bg-gray-50 rounded-lg">{selectedTicket.description}</p>
                                    </div>
                                  </div>
                                )}
                              </DialogContent>
                            </Dialog>
                            
                            <Select value={ticket.status} onValueChange={(value) => updateTicketStatus(ticket.id, value)}>
                              <SelectTrigger className="w-32">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="open">Baru</SelectItem>
                                <SelectItem value="in-progress">Diproses</SelectItem>
                                <SelectItem value="resolved">Selesai</SelectItem>
                                <SelectItem value="closed">Ditutup</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="destructive" size="sm">
                                <Trash2 className="w-4 h-4 mr-1" />
                                Hapus
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Hapus Tiket</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Apakah Anda yakin ingin menghapus tiket {ticket.id}? 
                                  Tindakan ini tidak dapat dibatalkan.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Batal</AlertDialogCancel>
                                <AlertDialogAction onClick={() => deleteTicket(ticket.id)}>
                                  Hapus
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
