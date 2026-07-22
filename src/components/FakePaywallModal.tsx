import React, { useState, useRef } from 'react';
import { Crown, Sparkles, Check, Zap, AlertTriangle, ShieldCheck, HeartHandshake, Coffee, RefreshCw } from 'lucide-react';

interface FakePaywallModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const FakePaywallModal: React.FC<FakePaywallModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [dodgeCount, setDodgeCount] = useState(0);
  const [buttonPos, setButtonPos] = useState<{ x: number; y: number; rot?: number }>({ x: 0, y: 0, rot: 0 });
  const [isVerifying, setIsVerifying] = useState(false);
  const [showTrollToast, setShowTrollToast] = useState<string | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  // Array of funny messages when user tries to hover/click the "Cancel" button
  const dodgeMessages = [
    "Nút này đang bảo trì, vui lòng nạp 5k!",
    "Bấm né siêu đẳng! Bấm nữa đi!",
    "Nút Cancel né giỏi hơn bạn né deadline nữa!",
    "Thôi mà, ủng hộ 1 cốc trà đá 5k đi bro 🥺",
    "Vẫn cố bấm à? Bạn lỳ thật đấy!",
    "Được rồi được rồi! Tha cho đấy, bấm lại đi!"
  ];

  const handleDodgeHover = () => {
    if (dodgeCount >= 7) return; // Allow dodging 7 times!

    // Safe dodging coordinates strictly inside modal container bounds
    const randomX = (Math.random() - 0.5) * 200; // -100px to +100px
    const randomY = (Math.random() - 0.5) * 100; // -50px to +50px
    const randomRot = (Math.random() - 0.5) * 16;
    setButtonPos({ x: randomX, y: randomY, rot: randomRot });

    const msgIndex = Math.min(dodgeCount, dodgeMessages.length - 1);
    setShowTrollToast(dodgeMessages[msgIndex]);
    setDodgeCount(prev => prev + 1);

    setTimeout(() => {
      setShowTrollToast(null);
    }, 2000);
  };

  const handleFakePayment = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setPaymentSuccess(true);
      setTimeout(() => {
        setPaymentSuccess(false);
        onSuccess();
      }, 2200);
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-slate-900/70 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div 
        ref={containerRef}
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-amber-200/80 overflow-hidden flex flex-col transition-all duration-300 my-auto"
      >
        {/* Top VIP Banner Gradient Header */}
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 p-5 text-white text-center relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-lg pointer-events-none"></div>
          
          <div className="inline-flex items-center justify-center p-2.5 bg-white/20 backdrop-blur-md rounded-2xl mb-2.5 shadow-inner ring-4 ring-white/20 animate-pulse">
            <Crown size={30} className="text-yellow-200 fill-yellow-300" />
          </div>

          <span className="bg-yellow-300/90 text-amber-950 font-black text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full block w-fit mx-auto shadow-sm mb-1.5">
            Thông báo giới hạn hệ thống
          </span>

          <h2 className="text-xl sm:text-2xl font-black tracking-tight drop-shadow-sm">
            HẾT LƯỢT HỌC MIỄN PHÍ! 🚨
          </h2>
          <p className="text-amber-100 text-xs mt-1 font-medium max-w-xs mx-auto">
            Tài khoản Free đã đạt giới hạn 3 câu/ngày. Nâng cấp <span className="font-bold text-white underline decoration-yellow-300">VIP Pro Ultra Max</span> để học tiếp!
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-5 space-y-4 bg-gradient-to-b from-amber-50/40 to-white">
          {/* Pricing Box */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/60 text-center relative">
            <div className="absolute -top-2.5 right-3 bg-rose-500 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full shadow-sm">
              GIẢM 99.9% HÔM NAY
            </div>

            <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Học phí nâng cấp tài khoản</p>
            <div className="flex items-center justify-center gap-2.5 mt-0.5">
              <span className="text-slate-400 line-through text-xs font-semibold">500.000 VNĐ</span>
              <span className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                5.000 VNĐ
              </span>
              <span className="text-[11px] bg-amber-200/80 text-amber-900 font-extrabold px-2 py-0.5 rounded-md flex items-center gap-1">
                <Coffee size={12} /> 1 Cốc Trà Đá
              </span>
            </div>
          </div>

          {/* Benefits list */}
          <div className="space-y-2">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-1">Đặc quyền tài khoản VIP:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-100 shadow-sm">
                <span className="p-1 rounded-lg bg-emerald-100 text-emerald-600">
                  <Check size={13} />
                </span>
                <span>Mở khóa 20 Bài NihonIT</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-100 shadow-sm">
                <span className="p-1 rounded-lg bg-indigo-100 text-indigo-600">
                  <Sparkles size={13} />
                </span>
                <span>+100 Đẹp trai/Đẹp gái</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-100 shadow-sm">
                <span className="p-1 rounded-lg bg-amber-100 text-amber-600">
                  <Zap size={13} />
                </span>
                <span>Đỗ IT Passport 100%</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-100 shadow-sm">
                <span className="p-1 rounded-lg bg-purple-100 text-purple-600">
                  <HeartHandshake size={13} />
                </span>
                <span>1 Nụ cười từ Admin</span>
              </div>
            </div>
          </div>

          {/* Transfer Info / Troll QR Section */}
          <div className="p-3 rounded-xl bg-slate-900 text-white flex items-center justify-between gap-3 shadow-md">
            <div className="space-y-0.5">
              <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">Thông tin nạp quỹ trà sữa</span>
              <p className="text-xs font-extrabold text-slate-200">Momo/Stk Admin: <span className="text-yellow-300 font-mono">0904.xxx.xxx</span></p>
              <p className="text-[10px] text-slate-400">Nội dung: <span className="text-white italic">[Tên bạn] múc VIP</span></p>
            </div>
            <div className="shrink-0 text-center">
              <div className="w-11 h-11 bg-white rounded-lg p-1 flex items-center justify-center font-black text-[8px] text-slate-900 border-2 border-amber-400">
                [QR VIP]
              </div>
            </div>
          </div>

          {/* Toast Notification when button dodges */}
          {showTrollToast && (
            <div className="p-2 rounded-xl bg-rose-500 text-white text-xs font-extrabold text-center shadow-lg animate-bounce flex items-center justify-center gap-2">
              <AlertTriangle size={14} />
              <span>{showTrollToast}</span>
            </div>
          )}

          {/* Success Payment Animation View */}
          {paymentSuccess && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-2xl text-center text-emerald-800 animate-fadeIn">
              <ShieldCheck size={28} className="mx-auto text-emerald-600 mb-1" />
              <p className="font-extrabold text-xs">XÁC MINH GIAO DỊCH THÀNH CÔNG! 🎉</p>
              <p className="text-[11px] mt-0.5 text-emerald-600 font-medium">
                Hệ thống nhận diện bạn là đại gia. Đùa đấy! Chúc bạn tôi ôn thi đỗ hết nhé! ❤️
              </p>
            </div>
          )}
        </div>

        {/* Modal Action Buttons Footer */}
        <div className="p-3.5 bg-slate-50 border-t border-slate-200/80 flex flex-col-reverse sm:flex-row gap-2.5 items-center justify-center relative min-h-[70px]">
          {/* Dodging Cancel Button */}
          <div className="w-full sm:w-auto relative flex justify-center">
            <button
              type="button"
              onMouseEnter={handleDodgeHover}
              onClick={() => {
                if (dodgeCount >= 7) {
                  onClose();
                } else {
                  handleDodgeHover();
                }
              }}
              style={{
                transform: `translate(${buttonPos.x}px, ${buttonPos.y}px) rotate(${buttonPos.rot || 0}deg)`,
                transition: 'transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold text-slate-500 bg-white border border-slate-200 hover:border-slate-300 hover:text-slate-700 shadow-sm cursor-pointer whitespace-nowrap active:scale-95 z-20 text-center"
            >
              {dodgeCount >= 7 ? "Thôi được rồi, cho học free tiếp!" : "Hỏi lại sau (Học miễn phí)"}
            </button>
          </div>

          {/* Main Action Button */}
          <button
            type="button"
            onClick={handleFakePayment}
            disabled={isVerifying || paymentSuccess}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm text-slate-900 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-500 hover:to-yellow-500 shadow-lg shadow-amber-200 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer border border-amber-300 z-10 text-center"
          >
            {isVerifying ? (
              <>
                <RefreshCw size={15} className="animate-spin text-amber-900" />
                <span>Đang kết nối Ngân Hàng...</span>
              </>
            ) : (
              <>
                <Crown size={15} className="text-amber-950 fill-amber-950" />
                <span>Tôi đã chuyển 5.000đ (Xác minh VIP)</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
