import { FaEnvelope } from 'react-icons/fa';

import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icon';
import TextInput from '@/components/atoms/TextInput';

const EmailInputGroup = () => {
  return (
    <div className="absolute self-stretch h-32 px-4 lg:h-[60px] flex-col lg:flex-row justify-center left-1/2 transform -translate-x-1/2 mt-[392px] lg:mt-[260px] items-center lg:gap-5 gap-6 inline-flex">
      <TextInput
        placeholder="Enter your email address"
        onChange={(e) => console.log(e.target.value)}
      />
      <Button
        text="Send to us"
        onClick={() => console.log('Email Sent!')}
        icon={<Icon icon={FaEnvelope} size={20} color="#f0f1ff" />}
        className="self-stretch lg:px-6 lg:py-3 px-4 py-3 bg-[#565add] flex justify-center items-center gap-3 "
      />
    </div>
  );
};

export default EmailInputGroup;
