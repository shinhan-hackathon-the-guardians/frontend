import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();

  const goToHome = () => navigate("/");
  const goToGuardianExam = () => navigate("/guardianExam");
  const goToQuestionBank = () => navigate("/questionBank");
  const goToAddGroupMember = () => navigate("/addGroupMember");
  const goToGroupMemberList = () => navigate("/groupMemberList");
  const goToPaymentRequest = () => navigate("/paymentRequest");
  const goToVerification = () => navigate("/verification");

  return {
    goToHome,
    goToGuardianExam,
    goToQuestionBank,
    goToAddGroupMember,
    goToGroupMemberList,
    goToPaymentRequest,
    goToVerification,
  };
};
