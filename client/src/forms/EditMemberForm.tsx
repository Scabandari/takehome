import { useDispatch } from 'react-redux';
import { updateUserRequest } from '../store/actions/userActions';
import MemberForm from './MemberForm';
import { User } from '../types/user';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

interface EditMemberFormProps {
  close: () => void;
  editingUserId: number | undefined;
}

const EditMemberForm = ({ editingUserId, close }: EditMemberFormProps) => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.users);

  const title = 'Manage Member';
  const submitText = 'Save Changes';
  const submitColor = '#1A1B18';
  const submitTextColor = '#FFFFFF';

  const handleSubmit = (values: any) => dispatch(updateUserRequest(values));

  let initialValues = undefined;

  if (editingUserId) {
    const editingUser = users.find((user: User) => user.id === editingUserId);
    if (!editingUser) {
      throw new Error('User not found');
    }

    initialValues = {
      id: editingUser.id,
      username: editingUser.user_name,
      firstName: editingUser.first_name,
      lastName: editingUser.last_name,
      dob: editingUser.date_of_birth,
    };
  }

  return (
    <MemberForm
      close={close}
      title={title}
      submitText={submitText}
      submitColor={submitColor}
      handleSubmit={handleSubmit}
      submitTextColor={submitTextColor}
      initialValues={initialValues}
    />
  );
};

export default EditMemberForm;
