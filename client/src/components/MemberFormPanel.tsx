import CreateMemberForm from '../forms/CreateMemberForm';
import EditMemberForm from '../forms/EditMemberForm';

interface MemberFormPanelProps {
  close: () => void;
  editingUserId: number | null;
}

const MemberFormPanel = ({ close, editingUserId }: MemberFormPanelProps) => {
  return editingUserId ? (
    <EditMemberForm close={close} editingUserId={editingUserId} />
  ) : (
    <CreateMemberForm close={close} />
  );
};

export default MemberFormPanel;
