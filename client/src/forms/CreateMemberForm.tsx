import { useDispatch } from 'react-redux';
import { createUserRequest } from '../store/actions/userActions';
import MemberForm from './MemberForm';

interface CreateMemberFormProps {
  close: () => void;
}

const CreateMemberForm = ({ close }: CreateMemberFormProps) => {
  const dispatch = useDispatch();

  const title = 'Add Team Member';
  const submitText = 'Add Member';
  const submitColor = '#F5B588';

  const handleSubmit = (values: any) => dispatch(createUserRequest(values));

  return (
    <MemberForm
      close={close}
      title={title}
      submitText={submitText}
      submitColor={submitColor}
      handleSubmit={handleSubmit}
    />
  );
};

export default CreateMemberForm;
