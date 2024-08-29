import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();

  const goToHome = () => navigate("/");
  const goToGuardianExam = () => navigate("/guardianExam");
  const goToQuestionBank = () => navigate("/questionBank");
  const goToAddGroupMember = () => navigate("/addGroupMember");
  const goToGroupMemberList = () => navigate("/groupMemberList");
  const goToMemberSettings = () => navigate("/memberSettings");
  const goToGroupSettings = () => navigate("/groupSettings");
  const goToPaymentRequest = () => navigate("/paymentRequest");
  const goToVerification = () => navigate("/verification");
  const goToSignUp = () => navigate("/signup");
  const goToBack = () => navigate(-1);

  return {
    goToHome,
    goToGuardianExam,
    goToQuestionBank,
    goToAddGroupMember,
    goToGroupMemberList,
    goToMemberSettings,
    goToGroupSettings,
    goToPaymentRequest,
    goToVerification,
    goToSignUp,
    goToBack,
  };
};
