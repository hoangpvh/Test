import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icon';
import TextInput from '@/components/atoms/TextInput';

const EmailInputGroup = () => {
  return (
    <div className="h-[60px] justify-start mt-10 items-center gap-5 inline-flex">
      <TextInput
        placeholder="Enter your email address"
        onChange={(e) => console.log(e.target.value)}
      />
      <Button
        text="Send to us"
        onClick={() => console.log('Email Sent!')}
        icon={<Icon size={20} color="#f0f1ff" />}
        className="flex items-center gap-3"
      />
    </div>
  );
};

export default EmailInputGroup;
