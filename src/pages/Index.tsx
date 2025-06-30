
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquarePlus, Search, Ticket, User } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-violet-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Selamat Datang di Portal Support</h1>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Dapatkan bantuan cepat dan solusi terbaik dari tim support profesional kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/support">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3">
                <MessageSquarePlus className="w-5 h-5 mr-2" />
                Buat Tiket Support
              </Button>
            </Link>
            <Link to="/support/status">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3">
                <Search className="w-5 h-5 mr-2" />
                Cek Status Tiket
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Layanan Support Kami</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan support untuk membantu kebutuhan bisnis Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-red-500">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquarePlus className="w-6 h-6 text-red-600" />
              </div>
              <CardTitle className="text-lg">Komplain & Masalah</CardTitle>
              <CardDescription>
                Laporkan masalah teknis atau keluhan yang Anda alami
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Ticket className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle className="text-lg">Permintaan Fitur</CardTitle>
              <CardDescription>
                Ajukan ide fitur baru untuk meningkatkan layanan kami
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle className="text-lg">Pertanyaan Umum</CardTitle>
              <CardDescription>
                Dapatkan jawaban untuk pertanyaan seputar layanan kami
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle className="text-lg">Konsultasi</CardTitle>
              <CardDescription>
                Konsultasi dan saran dari tim ahli kami
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Cara Kerja Support</h2>
            <p className="text-lg text-gray-600">Proses sederhana untuk mendapatkan bantuan</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Buat Tiket</h3>
              <p className="text-gray-600">Isi form dengan detail masalah atau permintaan Anda</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Tim Merespons</h3>
              <p className="text-gray-600">Tim support akan menghubungi Anda dalam 24 jam</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Solusi Diberikan</h3>
              <p className="text-gray-600">Dapatkan solusi terbaik untuk masalah Anda</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Butuh Bantuan Sekarang?</h2>
          <p className="text-xl opacity-90 mb-8">Tim support kami siap membantu Anda 24/7</p>
          <Link to="/support">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg">
              Mulai Sekarang
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
