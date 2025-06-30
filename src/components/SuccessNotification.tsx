
import React, { useEffect, useState } from 'react';
import { CheckCircle, X, Ticket, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface SuccessNotificationProps {
  isVisible: boolean;
  onClose: () => void;
  ticketId: string;
  ticketData: {
    name: string;
    email: string;
    subject: string;
    type: string;
  };
}

const SuccessNotification: React.FC<SuccessNotificationProps> = ({
  isVisible,
  onClose,
  ticketId,
  ticketData
}) => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShowAnimation(true);
      // Auto close after 8 seconds
      const timer = setTimeout(() => {
        handleClose();
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const handleClose = () => {
    setShowAnimation(false);
    setTimeout(() => {
      onClose();
    }, 300);
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

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <Card className={`w-full max-w-md transform transition-all duration-300 ${
        showAnimation ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}>
        <CardContent className="p-0">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-[#05b2fd] via-[#6f42c1] to-green-500 text-white p-6 rounded-t-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              className="absolute top-4 right-4 text-white hover:bg-white/20"
            >
              <X className="w-4 h-4" />
            </Button>

            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 mx-auto">
                <CheckCircle className="w-8 h-8 text-white animate-[scale-in_0.5s_ease-out]" />
              </div>
              <h2 className="text-2xl font-bold text-center mb-2">Tiket Berhasil Dibuat!</h2>
              <p className="text-center opacity-90">Terima kasih telah menghubungi kami</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#05b2fd] to-[#6f42c1] bg-clip-text text-transparent">
                <h3 className="text-xl font-bold">{ticketId}</h3>
              </div>
              <p className="text-gray-600 text-sm">ID Tiket Anda</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Ticket className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{ticketData.subject}</p>
                  <p className="text-sm text-gray-600">Jenis: {getTypeText(ticketData.type)}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Notifikasi Email Terkirim</p>
                  <p className="text-sm text-gray-600">ke {ticketData.email}</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Langkah Selanjutnya:</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Tim support akan merespons dalam 2-4 jam</li>
                <li>• Cek email Anda untuk update status</li>
                <li>• Gunakan ID tiket untuk tracking</li>
              </ul>
            </div>

            <div className="flex gap-3">
              <Button 
                onClick={() => window.location.href = '/support/status'}
                className="flex-1 bg-gradient-to-r from-[#05b2fd] to-[#6f42c1] hover:from-[#0490cc] hover:to-[#5a359a]"
              >
                <Ticket className="w-4 h-4 mr-2" />
                Cek Status
              </Button>
              <Button 
                variant="outline" 
                onClick={handleClose}
                className="flex-1"
              >
                Tutup
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SuccessNotification;
