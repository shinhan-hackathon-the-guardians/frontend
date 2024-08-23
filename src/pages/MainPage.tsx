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
            <div>
              <span className="text-[16pt] font-bold">가디언 평가</span>
              <p className="text-[#888888] text-[10pt] mt-1">
                평가와 관련된 내용을 확인할 수 있습니다.
              </p>
            </div>
            <IoShieldCheckmark className="w-[44px] h-[44px] text-[#167CFA] self-end" />
          </div>
          <div className="bg-white w-[150px] h-[150px] shadow-md rounded-[20px] flex flex-col justify-between p-3">
            <div>
              <span className="text-[16pt] font-bold">문제 은행</span>
              <p className="text-[#888888] text-[10pt] mt-1">
                다양한 문제를 모아놓은 공간입니다.
              </p>
            </div>
            <IoSchool className="w-[44px] h-[44px] text-[#167CFA] self-end" />
          </div>
          <div className="bg-white w-[150px] h-[150px] shadow-md rounded-[20px] flex flex-col justify-between p-3">
            <div>
              <span className="text-[16pt] font-bold">그룹원 목록</span>
              <p className="text-[#888888] text-[10pt] mt-1">
                현재 그룹원의 리스트를 확인하세요.
              </p>
            </div>
            <IoPeople className="w-[44px] h-[44px] text-[#167CFA] self-end" />
          </div>
          <div className="bg-white w-[150px] h-[150px] shadow-md rounded-[20px] flex flex-col justify-between p-3">
            <div>
              <span className="text-[16pt] font-bold">프로필 편집</span>
              <p className="text-[#888888] text-[10pt] mt-1">
                프로필 정보를 수정할 수 있습니다.
              </p>
            </div>
            <IoPencil className="w-[44px] h-[44px] text-[#167CFA] self-end" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
