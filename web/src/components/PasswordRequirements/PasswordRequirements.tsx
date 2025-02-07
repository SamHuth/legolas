import { CrossIcon, minorScale, Pane, Small, TickCircleIcon } from "evergreen-ui";

interface PasswordRequirementsProps{
  password: string
}

const PasswordRequirements = ({ password }:PasswordRequirementsProps) => {

  const passwordIsEightCharacters = password?.length >= 8
  const passwordContainsCapital = password.match(/[A-Z]/)

  return (
    <Pane gap={minorScale(2)} display="flex" flexDirection="column" marginBottom={minorScale(2)}>
      <Small className='text-gray-400 text-xs mt-2'>
        Your password must:
      </Small>
      <Small className='text-gray-400 text-xs inline-flex items-center flex-row'>
        { passwordIsEightCharacters ?
          <TickCircleIcon color="success" marginRight={6} />
          :
          <CrossIcon color="danger" marginRight={6} />
        }
        Contain at least 8 characters.
      </Small>
      <Small className='text-gray-400 text-xs inline-flex items-center flex-row'>
        { passwordContainsCapital ?
          <TickCircleIcon color="success" marginRight={6} />
          :
          <CrossIcon color="danger" marginRight={6} />
        }
        Contain one capital letter.
      </Small>
    </Pane>
  );
};

export default PasswordRequirements;
