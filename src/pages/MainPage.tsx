import {
  IoShieldCheckmark,
  IoSchool,
  IoPeople,
  IoPencil,
} from "react-icons/io5";

function MainPage() {
  return (
    <div className="bg-[#F5F6FA] min-h-screen flex justify-center items-center">
      <div className="p-6">
        <div className="mb-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">김신한</h1>
          <span className="text-2xl">Owner</span>
        </div>

        <div className="mb-4 mt-12 text-left">
          <p className="text-lg">가족을 지키는 신한: 더 가디언즈</p>
        </div>

        <div className="mb-2 text-left">
          <p className="text-lg">MainPage 입니다.</p>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-4 justify-items-center">
          <div className="bg-white w-[150px] h-[150px] shadow-md rounded-[20px] flex flex-col justify-between p-3">
            <span className="text-[16pt] font-bold">가디언 평가</span>
            <IoShieldCheckmark className="w-[44px] h-[44px] self-end" />
          </div>
          <div className="bg-white w-[150px] h-[150px] shadow-md rounded-[20px] flex flex-col justify-between p-3">
            <span className="text-[16pt] font-bold">문제 은행</span>
            <IoSchool className="w-[44px] h-[44px] self-end" />
          </div>
          <div className="bg-white w-[150px] h-[150px] shadow-md rounded-[20px] flex flex-col justify-between p-3">
            <span className="text-[16pt] font-bold">그룹원 목록</span>
            <IoPeople className="w-[44px] h-[44px] self-end" />
          </div>
          <div className="bg-white w-[150px] h-[150px] shadow-md rounded-[20px] flex flex-col justify-between p-3">
            <span className="text-[16pt] font-bold">프로필 편집</span>
            <IoPencil className="w-[44px] h-[44px] self-end" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
