function UnreadSticker() {
  return (
    <div className="absolute top-[-7px] right-[-7px]">
      {/* 원형 도형 (알림 스티커) */}
      <div className="w-[20px] h-[20px] bg-blue-500 rounded-full"></div>
    </div>
  );
}

export default UnreadSticker;
