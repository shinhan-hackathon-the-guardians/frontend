import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();

  const goToSplash = () => navigate("/");
  const goToHome = () => navigate("/main");
  const goToGuardianExam = () => navigate("/guardianExam");
  const goToQuestionBank = () => navigate("/questionBank");
  const goToAddGroupMember = () => navigate("/addGroupMember");
  const goToGroupMemberList = () => navigate("/groupMemberList");
  const goToMemberSettings = (target_user_id: string) =>
    navigate(`/memberSettings/${target_user_id}`);
  const goToGroupSettings = () => navigate("/groupSettings");
  const goToPaymentRequest = () => navigate("/paymentRequest");
  const goToVerification = () => navigate("/verification");
  const goToSignUp = () => navigate("/signup");
  const goToLogin = () => navigate("/login");
  const goToChatBot = () => navigate("/chatbot");
  const goToBack = () => navigate(-1);

  return {
    goToSplash,
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
    goToLogin,
    goToChatBot,
    goToBack,
  };
};
