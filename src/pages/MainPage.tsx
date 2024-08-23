import guardian from "@/assets/images/guardian.png";
import graduate from "@/assets/images/graduate.png";
import group from "@/assets/images/group.png"; // Assuming this image is for 그룹원 목록
import profile from "@/assets/images/profile.png"; // Assuming this image is for 프로필 편집

function MainPage() {
  return (
    <div className="bg-[#F5F6FA] min-h-screen flex flex-col items-center">
      {/* 상단 바 영역 */}
      <div className="bg-[#167CFA] w-full h-[300px] flex flex-col pt-8 px-6 pb-0 text-white">
        {/* 상단 텍스트 블록 */}
        <div className="flex flex-col justify-start h-full">
          <p className="text-[16pt] leading-tight">
            금융 위협으로부터 <br /> 가족을 지키는
            <br />{" "}
            <strong className="text-[20pt] leading-loose">
              신한: 더 가디언즈
            </strong>
          </p>
        </div>

        {/* 이름과 레벨 정보 컨테이너 */}
        <div className="flex justify-center items-end h-full">
          <div className="bg-white w-full h-[120px] pt-6 px-4 rounded-[10px] text-center text-black flex justify-between items-center">
            {/* 이름을 별도의 flex 컨테이너에 넣어 items-start 적용 */}
            <div className="flex flex-col justify-start h-full">
              <h1 className="text-3xl font-bold">
                김신한<span className="text-xl">고객님</span>
              </h1>
            </div>
            <span className="text-2xl">Owner</span>
          </div>
        </div>
      </div>

      {/* 메뉴들 */}
      <div className="p-6">
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 justify-items-center">
          {/* 가디언 평가 */}
          <div className="bg-white w-[150px] h-[150px] shadow-md rounded-[20px] flex flex-col justify-between p-3">
            <div className="flex">
              <img
                src={guardian}
                alt="가디언 평가"
                className="w-[55px] h-[55px]"
              />
            </div>
            <div>
              <span className="text-[12pt] font-bold">가디언 평가</span>
              <p className="text-[#888888] text-[10pt] mt-1">
                가디언 평가에 <br /> 도전해보세요.
              </p>
            </div>
          </div>

          {/* 문제 은행 */}
          <div className="bg-white w-[150px] h-[150px] shadow-md rounded-[20px] flex flex-col justify-between p-3">
            <div className="flex">
              <img
                src={graduate}
                alt="문제 은행"
                className="w-[55px] h-[55px]"
              />
            </div>
            <div>
              <span className="text-[12pt] font-bold">문제 은행</span>
              <p className="text-[#888888] text-[10pt] mt-1">
                다양한 문제들로 <br /> 연습해보세요.
              </p>
            </div>
          </div>

          {/* 그룹원 목록 */}
          <div className="bg-white w-[150px] h-[150px] shadow-md rounded-[20px] flex flex-col justify-between p-3">
            <div className="flex">
              <img
                src={group}
                alt="그룹원 목록"
                className="w-[55px] h-[55px]"
              />
            </div>
            <div>
              <span className="text-[12pt] font-bold">그룹원 목록</span>
              <p className="text-[#888888] text-[10pt] mt-1">
                현재 그룹원의 <br /> 목록 조회해보세요.
              </p>
            </div>
          </div>

          {/* 프로필 편집 */}
          <div className="bg-white w-[150px] h-[150px] shadow-md rounded-[20px] flex flex-col justify-between p-3">
            <div className="flex">
              <img
                src={profile}
                alt="프로필 편집"
                className="w-[55px] h-[55px]"
              />
            </div>
            <div>
              <span className="text-[12pt] font-bold">프로필 편집</span>
              <p className="text-[#888888] text-[10pt] mt-1">
                프로필 정보를 <br /> 수정할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
