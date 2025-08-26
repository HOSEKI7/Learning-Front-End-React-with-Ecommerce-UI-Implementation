type LabelProps = {
  htmlFor: string;
  children: string;
};

const Label = (props: LabelProps) => {
  const { htmlFor, children } = props;

  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-bold text-neutral-300 mb-2`}
    >
      {children}
    </label>
  );
};

export default Label;
