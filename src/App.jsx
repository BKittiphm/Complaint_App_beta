import { useState } from 'react'

function App() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 shadow-lg rounded-b-3xl">
        <h1 className="text-2xl font-bold">ระบบแจ้งเรื่องร้องเรียน</h1>
        <p className="text-blue-100 text-sm opacity-90">Complaint App Beta v0.1</p>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 pb-24">
        {activeTab === 'home' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-xl font-semibold mb-2">ยินดีต้อนรับ</h2>
              <p className="text-slate-500">ช่วยให้เราพัฒนาบริการให้ดียิ่งขึ้น โดยการแจ้งปัญหาหรือข้อเสนอแนะของคุณ</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => setActiveTab('new')}
                className="flex flex-col items-center justify-center bg-blue-50 p-6 rounded-2xl border-2 border-blue-100 hover:border-blue-300 transition-all active:scale-95"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-3 text-white">
                  <span className="text-2xl">+</span>
                </div>
                <span className="font-medium text-blue-900">แจ้งเรื่องใหม่</span>
              </button>
              
              <button className="flex flex-col items-center justify-center bg-slate-50 p-6 rounded-2xl border-2 border-slate-100 hover:border-slate-200 transition-all active:scale-95">
                <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center mb-3 text-white">
                  <span className="text-xl">📋</span>
                </div>
                <span className="font-medium text-slate-900">ติดตามสถานะ</span>
              </button>
            </div>
          </div>
        )}

        {activeTab === 'new' && (
          <div className="animate-in slide-in-from-right duration-300">
            <button 
              onClick={() => setActiveTab('home')}
              className="text-blue-600 mb-4 flex items-center font-medium"
            >
              ← กลับหน้าหลัก
            </button>
            <h2 className="text-2xl font-bold mb-6">กรอกรายละเอียดเรื่องร้องเรียน</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">หัวข้อเรื่อง</label>
                <input type="text" className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="เช่น ปัญหาน้ำเสีย, ข้อเสนอแนะการบริการ" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">รายละเอียด</label>
                <textarea rows="4" className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="กรุณาอธิบายปัญหาที่พบ..."></textarea>
              </div>
              <button 
                type="button"
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 active:bg-blue-700 transition-all"
              >
                ส่งเรื่องแจ้ง
              </button>
            </form>
          </div>
        )}
      </main>

      {/* Bottom Navigation (Mobile Ready) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 py-3 px-8 flex justify-between items-center safe-area-inset-bottom shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center ${activeTab === 'home' ? 'text-blue-600' : 'text-slate-400'}`}>
          <span className="text-xl">🏠</span>
          <span className="text-xs mt-1">หน้าแรก</span>
        </button>
        <button className="flex flex-col items-center text-slate-400">
          <span className="text-xl">🔔</span>
          <span className="text-xs mt-1">แจ้งเตือน</span>
        </button>
        <button className="flex flex-col items-center text-slate-400">
          <span className="text-xl">👤</span>
          <span className="text-xs mt-1">โปรไฟล์</span>
        </button>
      </nav>
    </div>
  )
}

export default App
